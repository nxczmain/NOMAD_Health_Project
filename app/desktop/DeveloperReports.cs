using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using Microsoft.Web.WebView2.Core;

internal sealed class DeveloperReports
{
    internal const string Channel = "nomad-developer-report";
    private const string FileName = "NOMAD-Developer-Reports.html";
    private const string Footer = "</main></body></html>\n";
    private const string Header = "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\">" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">" +
        "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; img-src data:; style-src 'unsafe-inline'\">" +
        "<title>NOMAD Developer Reports</title><style>body{font:16px/1.5 system-ui;margin:2rem auto;padding:0 1rem;max-width:960px}" +
        "article{border-top:1px solid #d0d7de;padding:1rem 0}p{white-space:pre-wrap;overflow-wrap:anywhere}" +
        "img{display:block;max-width:100%;height:auto;border:1px solid #d0d7de}</style></head>" +
        "<body><main><h1>NOMAD Developer Reports</h1>\n";

    private readonly string folder;
    private readonly JavaScriptSerializer json = new JavaScriptSerializer { MaxJsonLength = 6 * 1024 * 1024 };
    private Guid screenshotId;
    private string screenshot;

    internal DeveloperReports(string profileFolder)
    {
        folder = Path.Combine(profileFolder, "DeveloperReports");
    }

    internal async Task ReplyAsync(CoreWebView2 view, string message)
    {
        if (message.Length > 50000) return;
        string id = null;
        string operation = null;
        string result = null;
        string error = null;
        try
        {
            var request = json.Deserialize<Dictionary<string, object>>(message);
            id = Read(request, "id", 36, true);
            Guid reportId;
            if (!Guid.TryParseExact(id, "D", out reportId)) return;
            operation = Read(request, "operation", 12, true);
            switch (operation)
            {
                case "capture":
                    using (var image = new MemoryStream())
                    {
                        await view.CapturePreviewAsync(CoreWebView2CapturePreviewImageFormat.Jpeg, image);
                        if (image.Length == 0 || image.Length > 4 * 1024 * 1024)
                            throw new InvalidOperationException("Could not capture the NOMAD view. Resize the window and try again.");
                        screenshot = Convert.ToBase64String(image.ToArray());
                        screenshotId = reportId;
                    }
                    result = screenshot;
                    break;
                case "save":
                    result = Save(reportId, request);
                    break;
                case "discard":
                    if (reportId == screenshotId) screenshot = null;
                    break;
                case "open":
                    Directory.CreateDirectory(folder);
                    Process.Start(new ProcessStartInfo(folder) { UseShellExecute = true });
                    break;
                default:
                    error = "Unknown developer report operation.";
                    break;
            }
        }
        catch (InvalidOperationException failure) { error = failure.Message; }
        catch (Exception)
        {
            error = operation == "capture" ? "Could not capture the NOMAD view. Try opening the report again." :
                "Could not access the developer reports file. Check that the installation folder is writable.";
        }

        if (id == null) return;
        try { view.PostWebMessageAsJson(json.Serialize(new { channel = Channel, id, operation, result, error })); }
        catch (InvalidOperationException) { }
    }

    private string Save(Guid id, Dictionary<string, object> request)
    {
        string path = Path.Combine(folder, FileName);
        string recordMarker = "<article id=\"report-" + id.ToString("D") + "\">";
        string existing = File.Exists(path) ? File.ReadAllText(path, Encoding.UTF8) : Header + Footer;
        if (!existing.StartsWith(Header, StringComparison.Ordinal) || !existing.EndsWith(Footer, StringComparison.Ordinal))
            throw new InvalidOperationException("The developer reports file was edited. Move it to another folder and try again.");
        if (existing.Contains(recordMarker)) return FileName;
        if (id != screenshotId || String.IsNullOrEmpty(screenshot))
            throw new InvalidOperationException("The screenshot is unavailable. Close and reopen the report to capture it again.");

        string category = Read(request, "category", 16, true);
        if (category != "Bug" && category != "Feature request" && category != "Other")
            throw new InvalidOperationException("Select a report category.");
        string route = Read(request, "route", 24, true);
        if (!Regex.IsMatch(route, @"\A[a-z]+\z"))
            throw new InvalidOperationException("The report view could not be identified.");
        string title = Read(request, "title", 160, true);
        string details = Read(request, "details", 3000, true);
        string steps = Read(request, "steps", 3000, false);
        string expected = Read(request, "expected", 1500, false);
        string appVersion = Assembly.GetExecutingAssembly().GetName().Version.ToString(3);

        var record = new StringBuilder(recordMarker);
        record.Append("<h2>").Append(WebUtility.HtmlEncode(title)).Append("</h2><p>")
            .Append(category).Append(" · ").Append(DateTime.UtcNow.ToString("u"))
            .Append(" · NOMAD ").Append(appVersion).Append(" · View ").Append(route).Append("</p>")
            .Append("<h3>Details</h3><p>").Append(WebUtility.HtmlEncode(details)).Append("</p>");
        if (steps.Length > 0)
            record.Append("<h3>Steps to reproduce</h3><p>").Append(WebUtility.HtmlEncode(steps)).Append("</p>");
        if (expected.Length > 0)
            record.Append("<h3>Expected result</h3><p>").Append(WebUtility.HtmlEncode(expected)).Append("</p>");
        record.Append("<h3>Screenshot</h3><img alt=\"NOMAD at the time of the report\" src=\"data:image/jpeg;base64,")
            .Append(screenshot).Append("\"></article>\n");

        Directory.CreateDirectory(folder);
        string tempPath = Path.Combine(folder, Guid.NewGuid().ToString("N") + ".tmp");
        try
        {
            File.WriteAllText(tempPath, existing.Insert(existing.Length - Footer.Length, record.ToString()), new UTF8Encoding(false));
            if (File.Exists(path)) File.Replace(tempPath, path, null);
            else File.Move(tempPath, path);
        }
        finally { if (File.Exists(tempPath)) File.Delete(tempPath); }
        screenshot = null;
        return FileName;
    }

    private static string Read(Dictionary<string, object> request, string field, int limit, bool required)
    {
        object raw;
        string value = request.TryGetValue(field, out raw) ? raw as string : null;
        value = (value ?? "").Trim();
        if ((required && value.Length == 0) || value.Length > limit)
            throw new InvalidOperationException("Check the report fields and try again.");
        return value;
    }
}
