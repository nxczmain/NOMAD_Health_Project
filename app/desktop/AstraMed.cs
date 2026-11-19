using System;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Reflection;
using System.Speech.Synthesis;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.WinForms;

[assembly: AssemblyTitle("NOMAD")]
[assembly: AssemblyDescription("Astronaut health workstation")]
[assembly: AssemblyVersion("3.1.1.0")]

internal static class Program
{
    [STAThread]
    private static void Main(string[] args)
    {
        Application.EnableVisualStyles();
        Application.SetCompatibleTextRenderingDefault(false);

        bool firstInstance;
        using (var instance = new Mutex(true, @"Local\AstraMed.Desktop", out firstInstance))
        {
            if (!firstInstance)
            {
                MessageBox.Show("The crew workstation is already open.", "NOMAD",
                    MessageBoxButtons.OK, MessageBoxIcon.Information);
                return;
            }

            try
            {
                Application.Run(new MissionWindow(Array.IndexOf(args, "--reset-crew") >= 0));
            }
            catch (Exception error)
            {
                MessageBox.Show("Could not open NOMAD. Extract the full ZIP into one folder.\n\n"
                    + error.Message, "NOMAD", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}

internal sealed class MissionWindow : Form
{
    private const string LocalHost = "astramed.local";
    private const string StartPage = "https://" + LocalHost + "/index.html";
    private readonly WebView2 view;
    private readonly Label status;
    private readonly LocalAi localAi = new LocalAi();
    private readonly bool resetCrew;
    private SpeechSynthesizer speech;
    private Prompt activeSpeech;
    private int speechRequest;

    internal MissionWindow(bool resetCrew)
    {
        this.resetCrew = resetCrew;
        Text = "NOMAD";
        StartPosition = FormStartPosition.CenterScreen;
        MinimumSize = new Size(520, 530);
        ClientSize = new Size(1200, 810);
        AutoScaleMode = AutoScaleMode.Dpi;
        Icon = Icon.ExtractAssociatedIcon(Application.ExecutablePath);
        BackColor = Color.FromArgb(239, 238, 230);

        view = new WebView2 { Dock = DockStyle.Fill, Visible = false, DefaultBackgroundColor = BackColor };
        status = new Label
        {
            Dock = DockStyle.Fill,
            Text = "Opening NOMAD…",
            TextAlign = ContentAlignment.MiddleCenter,
            Padding = new Padding(24),
            ForeColor = Color.FromArgb(37, 33, 29),
            Font = new Font("Segoe UI", 11)
        };
        Controls.Add(view);
        Controls.Add(status);
        Shown += async (sender, args) => await InitializeAsync();
    }

    private async Task InitializeAsync()
    {
        try
        {
            string interfaceFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "interface");
            if (!File.Exists(Path.Combine(interfaceFolder, "index.html")))
            {
                ShowStatus("Extract the full ZIP into one folder and reopen NETIN.exe.");
                return;
            }

            // Keep the original WebView2 profile and virtual origin to load existing crew records and documents.
            string profileFolder = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "AstraMed", "Profile");
            bool portable = File.Exists(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "NETIN-Portable.flag"));
            if (portable)
                profileFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Profile");
            var environment = await CoreWebView2Environment.CreateAsync(null, profileFolder);
            if (IsDisposed) return;

            await view.EnsureCoreWebView2Async(environment);
            if (IsDisposed) return;

            CoreWebView2 core = view.CoreWebView2;
            core.SetVirtualHostNameToFolderMapping(LocalHost, interfaceFolder, CoreWebView2HostResourceAccessKind.Deny);
            core.Settings.AreDevToolsEnabled = false;
            core.Settings.AreDefaultContextMenusEnabled = false;
            core.Settings.AreBrowserAcceleratorKeysEnabled = false;
            core.Settings.AreHostObjectsAllowed = false;
            core.Settings.IsStatusBarEnabled = false;
            core.Settings.IsWebMessageEnabled = true;
            core.NavigationStarting += (sender, args) =>
            {
                if (IsLocal(args.Uri)) return;
                args.Cancel = true;
                if (args.IsUserInitiated) OpenReference(args.Uri);
            };
            core.NewWindowRequested += (sender, args) =>
            {
                args.Handled = true;
                if (args.IsUserInitiated) OpenReference(args.Uri);
            };
            core.PermissionRequested += (sender, args) =>
            {
                args.SavesInProfile = false;
                args.State = args.PermissionKind == CoreWebView2PermissionKind.Camera && IsLocal(args.Uri)
                    ? CoreWebView2PermissionState.Allow : CoreWebView2PermissionState.Deny;
            };
            core.DownloadStarting += (sender, args) => args.Cancel = true;
            core.WebMessageReceived += HandleMessage;
            core.NavigationCompleted += (sender, args) =>
            {
                if (args.IsSuccess)
                {
                    status.Visible = false;
                    view.Visible = true;
                }
                else if (args.WebErrorStatus != CoreWebView2WebErrorStatus.OperationCanceled)
                {
                    ShowStatus("Could not load the workstation. Check that the interface folder is next to NETIN.exe.");
                }
            };
            core.ProcessFailed += (sender, args) =>
            {
                if (args.ProcessFailedKind == CoreWebView2ProcessFailedKind.BrowserProcessExited ||
                    args.ProcessFailedKind == CoreWebView2ProcessFailedKind.RenderProcessExited)
                    ShowStatus("The workstation closed unexpectedly. Restart NOMAD.");
            };
            core.Navigate(resetCrew ? StartPage + "?reset-crew=1" : StartPage);
        }
        catch (WebView2RuntimeNotFoundException)
        {
            if (!IsDisposed)
                ShowStatus("NOMAD needs Microsoft Edge WebView2 Runtime on this computer.");
        }
        catch (Exception error)
        {
            if (!IsDisposed)
                ShowStatus("Could not start NOMAD.\n\n" + error.GetBaseException().Message);
        }
    }

    private void ShowStatus(string message)
    {
        view.Visible = false;
        status.Text = message;
        status.Visible = true;
    }

    private static bool IsLocal(string address)
    {
        Uri uri;
        return Uri.TryCreate(address, UriKind.Absolute, out uri) &&
            uri.Scheme == Uri.UriSchemeHttps && uri.IsDefaultPort && uri.Host == LocalHost;
    }

    private void OpenReference(string address)
    {
        Uri uri;
        if (!Uri.TryCreate(address, UriKind.Absolute, out uri) ||
            uri.Scheme != Uri.UriSchemeHttps || !String.IsNullOrEmpty(uri.UserInfo) || IsLocal(address)) return;

        try
        {
            Process.Start(new ProcessStartInfo(uri.AbsoluteUri) { UseShellExecute = true });
        }
        catch (Exception)
        {
            MessageBox.Show(this, "Could not open the link in your browser.", "NOMAD",
                MessageBoxButtons.OK, MessageBoxIcon.Information);
        }
    }

    protected override void Dispose(bool disposing)
    {
        if (disposing)
        {
            localAi.Dispose();
            if (speech != null) speech.Dispose();
        }
        base.Dispose(disposing);
    }

    private void SpeakReply(int id, string text, int volume)
    {
        speechRequest = id;
        try
        {
            if (speech == null)
            {
                speech = new SpeechSynthesizer();
                foreach (InstalledVoice voice in speech.GetInstalledVoices())
                {
                    if (!voice.Enabled || voice.VoiceInfo.Culture.TwoLetterISOLanguageName != "en") continue;
                    speech.SelectVoice(voice.VoiceInfo.Name);
                    break;
                }
                speech.SetOutputToDefaultAudioDevice();
                speech.SpeakStarted += (sender, args) => ReportSpeechEvent(args.Prompt,"start",0);
                speech.SpeakProgress += (sender, args) => ReportSpeechEvent(args.Prompt,"boundary",args.CharacterPosition);
                speech.SpeakCompleted += (sender, args) =>
                {
                    if (args.Error == null) ReportSpeechEvent(args.Prompt,"end",0);
                    else
                    {
                        try { BeginInvoke((Action)(() => { if (args.Prompt == activeSpeech) ReportSpeechError(speechRequest); })); }
                        catch (InvalidOperationException) { }
                    }
                };
            }
            speech.SpeakAsyncCancelAll();
            speech.Volume = volume;
            activeSpeech = new Prompt(text);
            speech.SpeakAsync(activeSpeech);
        }
        catch (Exception)
        {
            if (speech != null) speech.Dispose();
            speech = null;
            activeSpeech = null;
            ReportSpeechError(id);
        }
    }

    private void ReportSpeechEvent(Prompt prompt, string kind, int position)
    {
        try
        {
            BeginInvoke((Action)(() =>
            {
                if (prompt != activeSpeech || view.CoreWebView2 == null) return;
                view.CoreWebView2.PostWebMessageAsJson("{\"channel\":\"nomad-voice-event\",\"event\":\"" + kind +
                    "\",\"id\":" + speechRequest + ",\"position\":" + position + "}");
                if (kind == "end") activeSpeech = null;
            }));
        }
        catch (InvalidOperationException) { }
    }

    private void ReportSpeechError(int id)
    {
        try { view.CoreWebView2.PostWebMessageAsJson("{\"channel\":\"netin-voice-unavailable\",\"id\":" + id + "}"); }
        catch (InvalidOperationException) { }
    }

    private async void HandleMessage(object sender, CoreWebView2WebMessageReceivedEventArgs args)
    {
        if (!IsLocal(args.Source)) return;
        string message;
        try
        {
            message = args.TryGetWebMessageAsString();
        }
        catch (ArgumentException)
        {
            return;
        }
        const string prefix = "astra-ai\n";
        if (message.StartsWith(prefix, StringComparison.Ordinal))
        {
            await localAi.ReplyAsync(view.CoreWebView2, message.Substring(prefix.Length));
            return;
        }
        const string mailPrefix = "nomad-compose-mail\n";
        if (message.StartsWith(mailPrefix, StringComparison.Ordinal))
        {
            string draft = message.Substring(mailPrefix.Length);
            if (draft.Length <= 9000 && System.Text.RegularExpressions.Regex.IsMatch(draft,
                @"\Amailto:[A-Za-z0-9.!$'*+/=^_`{|}~-]+@[A-Za-z0-9.-]+\?subject=[^&#\r\n]*&body=[^&#\r\n]*\z"))
            {
                try { Process.Start(new ProcessStartInfo(draft) { UseShellExecute = true }); }
                catch (Exception) { MessageBox.Show(this, "Set a default mail app in Windows to prepare the email.", "NOMAD"); }
            }
            return;
        }
        if (message == "netin-stop-speech")
        {
            activeSpeech = null;
            try { if (speech != null) speech.SpeakAsyncCancelAll(); }
            catch (InvalidOperationException) { }
            return;
        }
        const string speechPrefix = "netin-speak\n";
        if (message.StartsWith(speechPrefix, StringComparison.Ordinal))
        {
            int endOfId = message.IndexOf('\n', speechPrefix.Length);
            int endOfVolume = endOfId < 0 ? -1 : message.IndexOf('\n', endOfId + 1);
            int id;
            int volume;
            if (endOfId > speechPrefix.Length && endOfId <= speechPrefix.Length + 10 &&
                endOfVolume > endOfId && endOfVolume <= endOfId + 4 && message.Length <= endOfVolume + 1801 &&
                Int32.TryParse(message.Substring(speechPrefix.Length, endOfId - speechPrefix.Length), out id) &&
                Int32.TryParse(message.Substring(endOfId + 1, endOfVolume - endOfId - 1), out volume) &&
                volume >= 0 && volume <= 100)
            {
                string text = message.Substring(endOfVolume + 1).Trim();
                if (text.Length > 0) SpeakReply(id, text, volume);
            }
            return;
        }

        int separator = message.IndexOf('\n');
        if (separator < 1 || separator > 60 || message.Length > 8 * 1024 * 1024) return;
        string filename = message.Substring(0, separator);
        string content = message.Substring(separator + 1);
        bool isReport = System.Text.RegularExpressions.Regex.IsMatch(filename,
            @"\A(?:(?:nomad|netin)-(?:medical(?:-review)?|weekly|30-day)-\d{4}-\d{2}-\d{2}|nomad-problem-[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12})\.html\z");
        bool isImage = filename == "netin-attachment.jpg";
        if (!isReport && !isImage) return;

        BeginInvoke((Action)(() => SaveFile(filename, content, isReport)));
    }

    private void SaveFile(string filename, string content, bool isReport)
    {
        try
        {
            using (var dialog = new SaveFileDialog
            {
                Title = isReport ? "Save NOMAD report" : "Save attachment",
                FileName = filename,
                DefaultExt = isReport ? "html" : "jpg",
                Filter = isReport ? "HTML report (*.html)|*.html" : "JPEG image (*.jpg)|*.jpg",
                AddExtension = true,
                OverwritePrompt = true
            })
            {
                if (dialog.ShowDialog(this) != DialogResult.OK) return;
                WriteExport(dialog.FileName, content, isReport);
            }
        }
        catch (Exception error)
        {
            MessageBox.Show(this, "Could not save the file.\n\n" + error.Message, "NOMAD",
                MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
    }

    private static void WriteExport(string path, string content, bool isReport)
    {
        if (isReport) File.WriteAllText(path, content, System.Text.Encoding.UTF8);
        else File.WriteAllBytes(path, Convert.FromBase64String(content));
    }
}
