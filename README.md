# NETIN

NETIN is a Windows desktop prototype for the [NASA Space Apps astronaut health monitoring challenge](https://www.spaceappschallenge.org/2026/challenges/health-monitoring-software/). It runs locally using WebView2 and Qwen 3 4B through Ollama.

## Daily routine

Choose an astronaut and a mission stage, enter the profile password, and complete the daily photo, conversational check-in, motor test, and journal. Home shows the daily summaries and vital signs. The assistant remembers the profile's saved conversations and retrieves relevant previous records. Health includes vital trends, a clickable front and back body map, journal summaries, and motor performance. Records groups the full history by date. Documents opens and searches the Markdown library.

Two simulated astronauts have 30 days of sample records. Select Orbit for Maya Chen (`OrbitDemo26`) and Moon for Mateo Ruiz (`LunarDemo26`).

## Build on Windows x64

Install the Edge WebView2 Runtime and obtain the [Microsoft.Web.WebView2 NuGet package](https://www.nuget.org/packages/Microsoft.Web.WebView2/). Pass the downloaded `.nupkg` and an output folder to the build script. Windows also needs .NET Framework 4.8.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\desktop\Build.ps1 -WebView2Package C:\path\Microsoft.Web.WebView2.nupkg -OutputDirectory .\build
```

With Ollama running locally, install the model with `ollama pull qwen3:4b` and open `build\NETIN.exe`. Use **Documents → Cargar carpeta Markdown** to replace the indexed library with your own folder. NETIN indexes Markdown from nested folders and retains the full text for reading. It retrieves relevant passages for medical answers without modifying the model weights.

## Portable Kingston update

The `portable` folder contains the launcher and the updater for an existing NETIN portable installation. Close NETIN, then pass the installed USB folder, Markdown source, and compiled app.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\portable\Actualizar-NETIN.ps1 -InstallRoot E:\NETIN -MarkdownFolder E:\Markdown -AppFolder .\build
```

The updater verifies the copied Markdown files using SHA-256 and stores them in `interface\knowledge`. It replaces the legacy document directory and preserves the existing WebView2 profile, photos, records and Ollama model. Run `Abrir-NETIN.cmd` from the USB. The portable launcher starts its own localhost Ollama server and stops it when NETIN closes.

## Scope

Health guidance is an aid for documenting and discussing concerns with the crew medical officer. The retrieved passages, measured values and the scope of the evidence are visible to the astronaut. Color highlights indicate review relative to the app's demonstration baseline. The body map colors represent reported intensity, and motor scores represent performance in the games. The prototype requires clinical validation and mission-approved procedures before operational use.

Profile passwords control access through the app. Records remain in the local WebView2 profile. Protect the physical drive and Windows account when using personal health data.
