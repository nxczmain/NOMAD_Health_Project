using System;
using System.Collections;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using Microsoft.Web.WebView2.Core;

internal sealed class LocalAi : IDisposable
{
    private const string Model = "qwen3:4b";
    private const string VisionModel = "qwen3-vl:4b";
    private readonly string baseUrl;
    private readonly HttpClient client;
    private readonly JavaScriptSerializer json = new JavaScriptSerializer { MaxJsonLength = 250000 };

    internal LocalAi()
    {
        int port;
        if (!Int32.TryParse(Environment.GetEnvironmentVariable("NETIN_OLLAMA_PORT"), out port) || port < 1024 || port > 65535) port = 11434;
        baseUrl = "http://127.0.0.1:" + port;
        client = new HttpClient(new HttpClientHandler { UseProxy = false, AllowAutoRedirect = false })
        {
            Timeout = TimeSpan.FromSeconds(175),
            MaxResponseContentBufferSize = 200000
        };
    }

    internal async Task ReplyAsync(CoreWebView2 view, string message)
    {
        int id = 0;
        object result = null;
        string error = null;
        try
        {
            if (message.Length > 200000) return;
            var request = json.Deserialize<Dictionary<string, object>>(message);
            id = Convert.ToInt32(request["id"]);
            string operation = request["operation"] as string;
            if (operation == "status") result = await CheckStatusAsync();
            else if (operation == "chat") result = await ChatAsync((Dictionary<string, object>)request["body"], Model);
            else if (operation == "vision") result = await ChatAsync((Dictionary<string, object>)request["body"], VisionModel);
            else error = "Unknown local model operation.";
        }
        catch (HttpRequestException)
        {
            error = "Ollama is unavailable. Open Ollama and try again.";
        }
        catch (TaskCanceledException)
        {
            error = "The local model timed out. Try a shorter question.";
        }
        catch (InvalidOperationException exception)
        {
            error = exception.Message;
        }
        catch (Exception)
        {
            error = "The local model could not complete this request.";
        }

        if (id == 0) return;
        try { view.PostWebMessageAsJson(json.Serialize(new { channel = "astra-ai", id = id, result = result, error = error })); }
        catch (InvalidOperationException) { }
    }

    private async Task<object> CheckStatusAsync()
    {
        using (HttpResponseMessage response = await client.GetAsync(baseUrl + "/api/tags"))
        {
            response.EnsureSuccessStatusCode();
            var payload = json.Deserialize<Dictionary<string, object>>(await response.Content.ReadAsStringAsync());
            var models = payload["models"] as IEnumerable;
            if (models != null)
            {
                foreach (object item in models)
                {
                    var model = item as Dictionary<string, object>;
                    if (model != null && model.ContainsKey("name") && (model["name"] as string) == Model)
                        return new { ready = true, model = Model };
                }
            }
            return new { ready = false, model = Model };
        }
    }

    private async Task<string> ChatAsync(Dictionary<string, object> body, string expectedModel)
    {
        if ((body["model"] as string) != expectedModel) throw new InvalidOperationException("This model is not available in NOMAD.");
        using (var content = new StringContent(json.Serialize(body), Encoding.UTF8, "application/json"))
        using (HttpResponseMessage response = await client.PostAsync(baseUrl + "/api/chat", content))
        {
            if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
                throw new InvalidOperationException("Install the local model with: ollama pull " + expectedModel);
            response.EnsureSuccessStatusCode();
            var payload = json.Deserialize<Dictionary<string, object>>(await response.Content.ReadAsStringAsync());
            var reply = (Dictionary<string, object>)payload["message"];
            return (string)reply["content"];
        }
    }

    public void Dispose() { client.Dispose(); }
}
