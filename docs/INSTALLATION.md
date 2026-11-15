# Install and evaluate NETIN on Windows

This guide runs NETIN from a folder on your own Windows PC. The [GitHub download](https://github.com/nxczmain/Nasa-Space-Apps/raw/refs/heads/main/downloads/NETIN-Windows-x64.zip) includes the app, two demo profiles and the reference library used in this walkthrough. Install Ollama and Qwen on the same PC.

## What you need

- A Windows 10 22H2 or Windows 11 computer with an x64 processor. Run this on a local Windows session.
- Microsoft Edge WebView2 Evergreen Runtime. Windows 11 normally includes it. If NETIN reports it missing, install the [Microsoft Evergreen Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section).
- .NET Framework 4.8 or later. If Windows reports it missing, install it from [Microsoft .NET Framework downloads](https://dotnet.microsoft.com/en-us/download/dotnet-framework).
- [Ollama for Windows](https://ollama.com/download/windows) and the [Qwen3 4B model](https://ollama.com/library/qwen3:4b). The model download is about 2.5 GB. Allow additional storage for Ollama and the extracted app.
- Internet access for setup downloads. After setup, you can run the app and model locally. A camera is optional for the demo.

## Download and run

1. Download [NETIN-Windows-x64.zip](https://github.com/nxczmain/Nasa-Space-Apps/raw/refs/heads/main/downloads/NETIN-Windows-x64.zip). Right-click it, choose **Extract All**, and extract it to a folder you can write to on your PC, such as `Documents\NETIN`.
2. Install and open Ollama. Then open a new PowerShell window and run:

   ```powershell
   ollama pull qwen3:4b
   ollama list
   ```

   Wait for the download to finish. Confirm that `qwen3:4b` appears in the list. Leave Ollama running in the background. If it is already installed and the model is listed, proceed directly to the next step.
3. Open `NETIN.exe` from the extracted folder. Keep the `interface` folder and the WebView2 DLLs next to it. NETIN connects to Ollama automatically on `http://127.0.0.1:11434`. No key or cloud account is needed.
4. In the welcome screen, choose **Earth Orbit** for Maya or **Moon** for Mateo. Then pick the astronaut and enter the demo password. After signing in, **Home → Change stage** lets you review and confirm a change for the whole crew on this installation.

   | Demo astronaut | Historical stage | Password |
   | --- | --- | --- |
   | Maya Chen | Earth Orbit | `OrbitDemo26` |
   | Mateo Ruiz | Moon | `LunarDemo26` |

5. Open **Daily check-in** from the Home routine. Choose **Save and finish** to save what you have recorded. If you try the **Daily photo** step, select **Take photo** to start the countdown. Select **Use photo** to save the preview or **Retake** to try again. You can continue when a camera is unavailable.
6. In **Settings → Check connection**, look for **Qwen is ready**. The public demo references are already available in **Documents** on a fresh installation. Use **Load Markdown folder** to use your mission's authorized library or reload the included `ReferenceLibrary` folder.

## A short evaluation

| What to try | Where to look |
| --- | --- |
| Finish the daily check-in and describe any change | **Assistant** creates a paragraph and **Home** keeps it with readings and relevant follow-ups |
| Write a journal entry with two or three distinct details | **Home → Journal** saves automatically and shows Ham's summary when available |
| Ask “How can an irregular sleep schedule affect my ability to work?” | **Assistant** uses Qwen and cites the relevant sleep and fatigue reference |
| Send the drill “My crewmate is unresponsive but breathing. What should I do?” | **Assistant** displays an immediate alert and Qwen can extract the reported observation for the handoff |
| Open earlier readings, symptom history and skills | **Health** and **Records** show the demo trend and 30 days of sample check-ins, journal entries and motor results |
| Return to the selector and change the stage | Both profiles use the new current stage. Previously recorded items retain their original stage |

For the emergency drill, use a demo profile with simulated data. NETIN is a research prototype. Real emergency care follows the crew medical officer, emergency services and approved mission procedures.

## Troubleshooting

| Symptom | What to do |
| --- | --- |
| Windows cannot open NETIN | Confirm that the ZIP is fully extracted and its DLLs are beside `NETIN.exe`. Check the WebView2 and .NET requirements above |
| Ollama is offline | Launch Ollama from the Windows Start menu. Check `Invoke-RestMethod http://127.0.0.1:11434/api/tags` from PowerShell |
| Qwen is missing | Run `ollama pull qwen3:4b` and check the connection again |
| Answers lack document evidence | Import `ReferenceLibrary` in **Documents** and confirm the files are listed |
| Old sample dates or a different stage appear | Use **Records** for all stages and select the historical stage for trends. Extract the package into a new folder for a fresh evaluation, or use **Delete** with the profile password to remove a profile and its history |

