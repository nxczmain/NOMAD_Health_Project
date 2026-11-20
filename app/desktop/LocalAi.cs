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
    private const string DeepModel = "qwen3:8b";
    private const string EmbeddingModel = "qwen3-embedding:0.6b";
    private const string VisionModel = "qwen3-vl:4b";
    private const string MedicalModel = "medgemma1.5:4b";
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
            else if (operation == "deep") result = await ChatAsync((Dictionary<string, object>)request["body"], DeepModel);
            else if (operation == "embed") result = await EmbedAsync((Dictionary<string, object>)request["body"]);
            else if (operation == "vision") result = await ChatAsync((Dictionary<string, object>)request["body"], VisionModel);
            else error = "Unknown local model operation.";
        }
        catch (HttpRequestException)
        {
            error = "NOMAD could not reach Ollama at " + baseUrl + ". Start Ollama on that port and try again.";
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
            var installed = new Dictionary<string, string>(StringComparer.Ordinal);
            var models = payload["models"] as IEnumerable;
            if (models != null)
            {
                foreach (object item in models)
                {
                    var model = item as Dictionary<string, object>;
                    object name, digest;
                    if (model == null || !model.TryGetValue("name", out name) || !(name is string)) continue;
                    model.TryGetValue("digest", out digest);
                    installed[(string)name] = digest as string;
                }
            }
            string embeddingDigest;
            installed.TryGetValue(EmbeddingModel, out embeddingDigest);
            return new {
                ready = installed.ContainsKey(Model), model = Model,
                deepReady = installed.ContainsKey(DeepModel),
                embeddingReady = installed.ContainsKey(EmbeddingModel), embeddingDigest,
                visionReady = installed.ContainsKey(VisionModel),
                medicalReady = installed.ContainsKey(MedicalModel), medicalModel = MedicalModel
            };
        }
    }

    private async Task<string> ChatAsync(Dictionary<string, object> body, string expectedModel)
    {
        string requested = body["model"] as string;
        if (requested != expectedModel && !(requested == MedicalModel && expectedModel != DeepModel))
            throw new InvalidOperationException("This model is not available in NOMAD.");
        var payload = await PostAsync("/api/chat", body, requested);
        var reply = (Dictionary<string, object>)payload["message"];
        return (string)reply["content"];
    }

    private async Task<object> EmbedAsync(Dictionary<string, object> body)
    {
        var input = body["input"] as ArrayList;
        if (input == null || input.Count < 1 || input.Count > 16)
            throw new InvalidOperationException("Invalid search embedding batch.");
        foreach (object item in input)
        {
            var text = item as string;
            if (String.IsNullOrWhiteSpace(text) || text.Length > 3500)
                throw new InvalidOperationException("Invalid search embedding text.");
        }
        var payload = await PostAsync("/api/embed",
            new { model = EmbeddingModel, input, dimensions = 256, keep_alive = "30s" }, EmbeddingModel);
        return payload["embeddings"];
    }

    private async Task<Dictionary<string, object>> PostAsync(string endpoint, object body, string expectedModel)
    {
        using (var content = new StringContent(json.Serialize(body), Encoding.UTF8, "application/json"))
        using (HttpResponseMessage response = await client.PostAsync(baseUrl + endpoint, content))
        {
            if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
                throw new InvalidOperationException("Ollama at " + baseUrl + " does not have " + expectedModel +
                    ". Run ollama pull " + expectedModel + " against that Ollama instance.");
            if (!response.IsSuccessStatusCode)
                throw new InvalidOperationException("Ollama at " + baseUrl + " could not run " + expectedModel +
                    " (HTTP " + (int)response.StatusCode + "). Check the Ollama logs and try again.");
            return json.Deserialize<Dictionary<string, object>>(await response.Content.ReadAsStringAsync());
        }
    }

    public void Dispose() { client.Dispose(); }
}
