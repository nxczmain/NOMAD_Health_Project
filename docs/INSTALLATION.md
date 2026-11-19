# Install or update NOMAD on Windows

[Download NETIN-Windows-x64.zip](https://github.com/nxczmain/NOMAD_Health_Project/releases/latest/download/NETIN-Windows-x64.zip). The ZIP contains NOMAD, its demo profiles, synthetic ultrasound samples and the indexed research library.

## First installation

1. Use Windows 10 22H2 or Windows 11 (x64), with [.NET Framework 4.8](https://dotnet.microsoft.com/en-us/download/dotnet-framework) and [Microsoft Edge WebView2 Evergreen Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section). Install the runtimes if Windows reports either is missing.
2. Right-click the ZIP and choose **Extract All**. Choose a writable folder such as `Documents\NOMAD`. Keep `interface` and the WebView2 DLLs beside `NETIN.exe`.
3. Install and start [Ollama for Windows](https://ollama.com/download/windows). In a new PowerShell window, download both models and check that both appear. Allow about 6 GB for the models.

   ```powershell
   ollama pull qwen3:4b
   ollama pull medgemma1.5:4b
   ollama list
   ```

4. Leave Ollama running. Open `NETIN.exe` from the extracted folder. It connects to Ollama on `127.0.0.1:11434`.

   | Mission stage | Demo astronaut | Demo password |
   | --- | --- | --- |
   | Earth Orbit | Maya Chen | `OrbitDemo26` |
   | Moon | Mateo Ruiz | `LunarDemo26` |

5. In **Settings**, select **Check connection** for Qwen. Under **Medical model**, `medgemma1.5:4b` is the default. Select **Test and use model** to verify that Ollama can load it. If this installation previously selected another model, enter `medgemma1.5:4b` before testing.

The first response may take longer while Ollama loads the models. Once they are downloaded, both run on the same computer. The [MedGemma model and terms](https://ollama.com/library/medgemma1.5:4b) are listed in Ollama's catalog.

## Update an existing installation

1. Close NOMAD. Back up the installation folder, particularly `Profile` if it exists.
2. Extract the new ZIP to a temporary folder. Copy its contents over the existing installation, allowing file replacements while keeping the existing `Profile` folder. This updates `NETIN.exe` as well as the interface and library.
3. With the same Ollama instance used by your installation running, run `ollama pull medgemma1.5:4b` and confirm both models in `ollama list`. Reopen NOMAD and test the model in **Settings**.

For an installation that uses a custom Ollama port or separate model folder, run the pull against that server. For example, the `Abrir-NOMAD.cmd` workspace launcher uses port `11435` and the workspace's `Models` directory. Start that launcher and set `$env:OLLAMA_HOST = '127.0.0.1:11435'` in the PowerShell session before pulling so the existing server receives it.

## Try the update

- In **Documents**, the bundled library loads on startup. It includes the ISS medical kit, references for CPR in microgravity and 44 NIMH publications linked to their sources. **Load Markdown folder** is available for a custom library.
- In a demo profile, try the [practice scenarios](HAM-SIMULATIONS.md). Open **Sources** to see the relevant passage or linked original.
- In **Health → Physical → Ultrasound simulation**, choose a file from `Ultrasound Samples` and confirm it is synthetic before analyzing it.
- Use **Health → Medical Supplies** to record confirmed stock and **Medications** to review recorded doses.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| Windows cannot open NOMAD | Extract the whole ZIP and confirm the WebView2 and .NET runtimes are installed. |
| Qwen or MedGemma is missing | Start Ollama, run `ollama list` against the same local port as NOMAD and pull the missing model. |
| The app shows an older library or UI | Close and reopen the updated `NETIN.exe` from the extraction folder. Confirm that `interface\knowledge\index.json` is present. |
| The medical model cannot respond | Close other model workloads if memory is tight, then retry. Source-backed text can fall back to Qwen when the interpreter is unavailable. |

NOMAD is a research prototype. For real medical care, follow the mission's approved procedures and the crew medical officer.
