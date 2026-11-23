<p align="center">
  <img src="app/assets/nomad-logo-dark.png" width="275" alt="NOMAD logo with a globe, a heartbeat and a spacecraft">
</p>

# NOMAD

**A local health workstation for astronaut crews.** Log daily observations, review changes across a mission stage, look up onboard references and prepare a handoff for the crew medical officer. The Windows application opens as `NETIN.exe`.

[**Download for Windows**](https://github.com/nxczmain/NOMAD_Health_Project/releases/latest/download/NETIN-Windows-x64.zip) · [Installation](docs/INSTALLATION.md) · [Quick start](docs/QUICKSTART.md) · [App screen guide](docs/APP-GUIDE.md) · [Sources](docs/SOURCES.md)

![NOMAD’s Home screen with the Maya Chen demo profile, the daily routine and the latest readings](docs/images/app/03-home.jpg)

## Try the demo

1. Extract the Windows ZIP, then open **NETIN.exe**.
2. Choose **Earth Orbit** and sign in as **Maya Chen** with `OrbitDemo26`.
3. Follow the [quick-start tutorial](docs/QUICKSTART.md) to log a practice symptom, find it in **Records** and open the ISS medical checklist in **Documents**.

The Windows download includes demo profiles, synthetic ultrasound samples and the indexed research library. Set up Ollama and the two local models to use Ham’s full assistant features. [Installation and model setup](docs/INSTALLATION.md)

## What NOMAD does

| Area | What you can do |
| --- | --- |
| Assistant | Run a guided daily check-in or ask Ham about a documented topic. Use **Sources** to inspect the passages behind a cited reply. |
| Health | Review readings and trends, mark a concern on the body map, check in on mood, view motor-test results and prepare a medical review. |
| Exercise | Review the stage’s routine, watch offline movement demonstrations and record a completed session. |
| Records | Find past check-ins and logs by date and mission stage, view trends and export a day. |
| Documents | Search the onboard research library, jump to a checklist page and open the original source where available. |
| Medications and supplies | Log doses already taken and record confirmed quantities in the inventory. |

[See each screen and its controls](docs/APP-GUIDE.md) · [Practice scenarios for Ham](docs/HAM-SIMULATIONS.md)

Ham uses MedGemma for interpretation and Qwen for dialogue and wording through a local Ollama installation. The project was built for the NASA Space Apps Health Monitoring Software challenge. [How NOMAD works](docs/ARCHITECTURE.md) · [Challenge brief](https://www.spaceappschallenge.org/2026/challenges/health-monitoring-software/)

> NOMAD is a research prototype. The demo uses simulated crew data. Operational use requires clinical validation and mission approval.

## Research and attribution

The [source catalog](docs/SOURCES.md) cites all **569 indexed Markdown references**, links all **517 original PDFs** in the repository and credits the five starter notes. It highlights the historical ISS medical checklist and CPR references alongside the NASA, NIMH, and software credits. [Library organization](docs/RESEARCH.md) · [NASA sources by mission topic](docs/NASA-DATA.md)

## Repository map

| Location | Contents |
| --- | --- |
| [App](app/) | Interface, assistant logic and synthetic ultrasound samples |
| [Windows host](app/desktop/) | Desktop host, local model connection and build script |
| [Tests](app/tests/) | Software and scenario checks |
| [Documentation](docs/) | User guides, architecture and the project presentation |
| [Downloads](downloads/) | Windows ZIP and [SHA-256 checksums](downloads/SHA256SUMS.txt) |
| [Portable tools](portable/) | Scripts for running and updating a USB installation |
| [Starter references](references/) | Five starter notes |
| [Research Markdown](Investigation%20%28.md%29/) · [Original PDFs](investigation/) | Mission library texts, originals and import inventory |

Run `node --test app/tests/*.test.cjs` from the repository root. The [build instructions](docs/ARCHITECTURE.md#build-from-source) describe how to package Windows builds.

## Feedback

For a bug report, include the NOMAD version, the affected screen, the steps you followed and the expected result. A **Developer** profile can save a report with an in-app screenshot for review before sharing. [Developer reporting](docs/APP-GUIDE.md#developer-issue-report) · [GitHub Issues](https://github.com/nxczmain/NOMAD_Health_Project/issues)

## Team

`print("Nombre del Equipo")` · Nicolas Jauregui, Oscar Melendez, Andrik Porchas, Marco Alvarado and Luiz Ruiz.

[NASA Space Apps team profile](https://www.spaceappschallenge.org/2026/find-a-team/printnombre_del_equipo/) · [Project presentation](docs/NOMAD-Project-Demonstration.pdf)
