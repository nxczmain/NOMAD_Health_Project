# How NOMAD works

```mermaid
flowchart LR
    A["NOMAD desktop"] <--> B["Local crew records"]
    A --> C["Markdown retrieval"]
    C --> M["MedGemma interprets and prepares a cited answer"]
    M --> D["Qwen simplifies the prepared text"]
    D --> A
    A --> E["Emergency alert"]
```

The WinForms host serves a bundled HTML, CSS and JavaScript interface through WebView2. It sends approved model requests to Ollama over loopback. Local storage holds profile metadata and health logs. IndexedDB stores daily photos and the Markdown library. The shared mission stage is saved per installation and applied across sign-ins. Each logged entry keeps its original stage.

MedGemma interprets messages, selects the conversation route, plans check-in follow-ups, and prepares replies and summaries. For medical questions it receives relevant Markdown passages, symptoms and readings. Requested procedures use ordered actions with quoted evidence, source references and conditions. Mental conversations use mood check-ins and relevant NIMH references. MedGemma also describes manually selected synthetic ultrasound images.

Qwen receives only the prepared text items for simpler wording. The application retains MedGemma's item order and citations. MedGemma checks changed wording for equivalent meaning, including conditions and uncertainty. Rejected or unavailable simplifications use the original prepared text. The optional larger Qwen model performs the same wording task. Semantic embeddings supplement document search.

NOMAD screens check-in and chat replies for emergencies. Recognized warning signs trigger immediate action before any model request. For less direct reports, MedGemma uses the recent conversation to assess urgency before the app continues. An urgent assessment stops the routine check-in and displays numbered directions for Earth or the onboard emergency procedure. In chat, MedGemma can add verified procedure steps from the library to the original urgent response. MedGemma also extracts an exact observation for the handoff.

The two demo profiles are synthetic. Readings flagged for review in the demo use demonstration reference values. The project has undergone scenario and software checks, and requires clinical validation for operational use.

## Technologies

| Component | Technology |
| --- | --- |
| Desktop | C# WinForms, .NET Framework, Microsoft Edge WebView2 |
| Interface | HTML, CSS, JavaScript |
| Local models | Ollama with `medgemma1.5:4b` for interpretation, drafts and synthetic ultrasound, `qwen3:4b` or `qwen3:8b` for simpler wording, and `qwen3-embedding:0.6b` for search |
| Local records | WebView2 local storage and IndexedDB |
| Distribution | Windows PowerShell build and a Windows x64 ZIP |

## Build from source

1. Download or clone the repository. Download [Microsoft.Web.WebView2 1.0.2151.40](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2151.40) as a `.nupkg`.
2. From the root of the repository, run this command in Windows PowerShell.

   ```powershell
   powershell -NoProfile -ExecutionPolicy Bypass -File .\app\desktop\Build.ps1 -WebView2Package .\Microsoft.Web.WebView2.1.0.2151.40.nupkg -OutputDirectory .\build
   ```

3. Open `build\NETIN.exe` and follow the Ollama setup in the [installation guide](INSTALLATION.md). The build bundles the research Markdown and the page images and originals referenced by the local library.

## Run the regression tests

From the repository root, run `node --test app/tests/*.test.cjs` with Node.js. See the [20 simulated Ham conversations](HAM-SIMULATIONS.md) for the case inputs and expected behavior.
