<p align="center">
  <img src="app/assets/nomad-logo-dark.png" width="275" alt="NOMAD logo with a globe, a heartbeat and a spacecraft">
</p>

# NOMAD

**A local health workstation for astronaut crews.** Log daily observations, review changes across a mission stage, look up onboard references and prepare a handoff for the crew medical officer. The Windows application opens as `NETIN.exe`.

[**Download for Windows**](https://github.com/nxczmain/NOMAD_Health_Project/releases/latest/download/NETIN-Windows-x64.zip) · [Quick start](#quick-start) · [App screenshots](#app-screenshots) · [Sources and references](#sources-and-references) · [Repository map](#repository-map) · [Bug Fixes](BUG-FIXES.md) · [Installation](docs/INSTALLATION.md)

![NOMAD Home screen with the Earth Orbit demo profile, daily routine and latest readings](docs/images/app/03-home.jpg)

## Quick start

Practice with the bundled Earth Orbit demo and its simulated crew data.

1. **Open the demo.** Extract the Windows ZIP, launch **NETIN.exe** and select **Earth Orbit**. Sign in as **Maya Chen** with `OrbitDemo26`.
2. **Start a check-in.** In **Assistant → Daily check-in**, select **Start today’s check-in**. For this practice scenario, answer **No** to the immediate-help question and enter `Physically I feel just a little headache`.
3. **Save the observation.** Choose **4 / 10**, select **Save pain rating** and then **Save and finish** when the next prompt appears. Open **Records** to review today’s check-in or **Health → Physical → Body map** to see the reported area.
4. **Find a source.** In **Documents**, search for `ISS`, open **ISS Medical Checklist (2001) · Full manual**, then choose **ACLS algorithm** (PDF page 117) or **CPR** (PDF page 145).

For model-backed chat and medical review, start Ollama and open **Settings → Local assistant**. Use **Check connection** and **Download required models** if prompted. Under **Medical model**, select **Test and use model**. [Installation and troubleshooting](docs/INSTALLATION.md) · [Full demo tutorial](docs/QUICKSTART.md) · [Ham practice scenarios](docs/HAM-SIMULATIONS.md)

> NOMAD is a research prototype. Operational use requires clinical validation and mission approval. Follow the approved checklist for the current mission and the crew medical officer.

## App screenshots

Select an image to see it at full size or select a screen name for its controls and workflow.

<table>
  <tr><td width="50%"><a href="docs/images/app/05-daily-check-in.jpg"><img src="docs/images/app/05-daily-check-in.jpg" width="396" alt="A symptom follow-up with a pain-intensity slider and a save control"></a><br><strong><a href="docs/APP-GUIDE.md#guided-daily-check-in">Guided daily check-in</a></strong><br>Answer guided questions and save a reported intensity.</td><td width="50%"><a href="docs/images/app/08-body-map.jpg"><img src="docs/images/app/08-body-map.jpg" width="396" alt="Physical Health tab with body region illustration and symptom form"></a><br><strong><a href="docs/APP-GUIDE.md#body-map">Body map</a></strong><br>Mark the body region and record a symptom.</td></tr>
  <tr><td width="50%"><a href="docs/images/app/10-mental-health.jpg"><img src="docs/images/app/10-mental-health.jpg" width="396" alt="Mental Health tab with mood choices and optional note fields"></a><br><strong><a href="docs/APP-GUIDE.md#mental-health">Mental health</a></strong><br>Record a mood check-in and review recent entries.</td><td width="50%"><a href="docs/images/app/14-exercise.jpg"><img src="docs/images/app/14-exercise.jpg" width="396" alt="Exercise screen with a daily plan and completed-session form"></a><br><strong><a href="docs/APP-GUIDE.md#exercise">Exercise</a></strong><br>Review the assigned routine and log a completed session.</td></tr>
  <tr><td width="50%"><a href="docs/images/app/16-records.jpg"><img src="docs/images/app/16-records.jpg" width="396" alt="Records screen with a date filter, stage filter and a daily record"></a><br><strong><a href="docs/APP-GUIDE.md#records">Records</a></strong><br>Find saved check-ins and export a daily report.</td><td width="50%"><a href="docs/images/app/20-document-reader.jpg"><img src="docs/images/app/20-document-reader.jpg" width="396" alt="Historical ISS checklist in the reader at PDF page 117"></a><br><strong><a href="docs/APP-GUIDE.md#document-reader">Document reader</a></strong><br>Open the ISS checklist and jump to a source page.</td></tr>
</table>

<details>
<summary><strong>Crew profiles and daily workflow</strong></summary>

<table>
  <tr><td width="50%"><a href="docs/images/app/01-crew-roster.jpg"><img src="docs/images/app/01-crew-roster.jpg" width="396" alt="The welcome page with a mission-stage selector and two demo profiles"></a><br><strong><a href="docs/APP-GUIDE.md#crew-roster">Crew roster</a></strong><br>Pick a mission stage and sign in to a local crew profile.</td><td width="50%"><a href="docs/images/app/02-create-profile.jpg"><img src="docs/images/app/02-create-profile.jpg" width="396" alt="Profile-creation dialog with name and role fields"></a><br><strong><a href="docs/APP-GUIDE.md#create-profile">Create profile</a></strong><br>Create a local profile and select its role.</td></tr>
  <tr><td width="50%"><a href="docs/images/app/22-daily-photo.jpg"><img src="docs/images/app/22-daily-photo.jpg" width="396" alt="Daily photo screen with a labeled simulated camera preview and a framing guide"></a><br><strong><a href="docs/APP-GUIDE.md#daily-photo">Daily photo</a></strong><br>Preview and save the optional daily photo.</td><td width="50%"><a href="docs/images/app/04-ham-chat.jpg"><img src="docs/images/app/04-ham-chat.jpg" width="396" alt="Assistant chat with an example question about reviewing a past check-in"></a><br><strong><a href="docs/APP-GUIDE.md#chat-with-ham">Chat with Ham</a></strong><br>Ask Ham a question and inspect the sources cited in a reply.</td></tr>
  <tr><td width="50%"><a href="docs/images/app/06-check-in-workspace.jpg"><img src="docs/images/app/06-check-in-workspace.jpg" width="396" alt="The daily check-in review workspace with status and links to the routine"></a><br><strong><a href="docs/APP-GUIDE.md#check-in-workspace">Check-in workspace</a></strong><br>Review check-in status and continue the daily routine.</td><td width="50%"><a href="docs/images/app/12-motor-skill-activities.jpg"><img src="docs/images/app/12-motor-skill-activities.jpg" width="396" alt="Motor skills activities with a game selector, instructions and hand choice"></a><br><strong><a href="docs/APP-GUIDE.md#motor-skill-activities">Motor skill activities</a></strong><br>Practice visual search, reaction and coordination.</td></tr>
  <tr><td width="50%"><a href="docs/images/app/13-journal.jpg"><img src="docs/images/app/13-journal.jpg" width="396" alt="Daily Journal screen with a writing field and status"></a><br><strong><a href="docs/APP-GUIDE.md#journal">Journal</a></strong><br>Write a daily note that saves as you type.</td><td></td></tr>
</table>

</details>

<details>
<summary><strong>Health, exercise, records and medical supplies</strong></summary>

<table>
  <tr><td width="50%"><a href="docs/images/app/07-health-general.jpg"><img src="docs/images/app/07-health-general.jpg" width="396" alt="General Health tab with check-in summary and latest measurements"></a><br><strong><a href="docs/APP-GUIDE.md#health-overview">Health overview</a></strong><br>Review recent observations, measurements and charts.</td><td width="50%"><a href="docs/images/app/09-ultrasound.jpg"><img src="docs/images/app/09-ultrasound.jpg" width="396" alt="Physical Health tab showing the simulated ultrasound upload and analysis panels"></a><br><strong><a href="docs/APP-GUIDE.md#ultrasound-simulation">Ultrasound simulation</a></strong><br>Analyze a synthetic ultrasound sample.</td></tr>
  <tr><td width="50%"><a href="docs/images/app/11-motor-skill-results.jpg"><img src="docs/images/app/11-motor-skill-results.jpg" width="396" alt="Motor Skills health tab with a breakdown of recorded activities"></a><br><strong><a href="docs/APP-GUIDE.md#motor-skill-results">Motor skill results</a></strong><br>Review saved scores for the signed-in profile and stage.</td><td width="50%"><a href="docs/images/app/26-medical-review.jpg"><img src="docs/images/app/26-medical-review.jpg" width="396" alt="A medical review dialog containing a demo crew summary and check-in observations"></a><br><strong><a href="docs/APP-GUIDE.md#medical-review">Medical review</a></strong><br>Prepare and export a handoff for the crew medical officer.</td></tr>
  <tr><td width="50%"><a href="docs/images/app/15-exercise-demonstrations.jpg"><img src="docs/images/app/15-exercise-demonstrations.jpg" width="396" alt="Five looping exercise cards and playback controls"></a><br><strong><a href="docs/APP-GUIDE.md#exercise-demonstrations">Exercise demonstrations</a></strong><br>Play or pause five offline movement demonstrations.</td><td width="50%"><a href="docs/images/app/17-reports-and-trends.jpg"><img src="docs/images/app/17-reports-and-trends.jpg" width="396" alt="Weekly log showing a date range, summary and measurement table"></a><br><strong><a href="docs/APP-GUIDE.md#reports-and-trends">Reports and trends</a></strong><br>Review 7-day or 30-day log summaries.</td></tr>
  <tr><td width="50%"><a href="docs/images/app/18-medications.jpg"><img src="docs/images/app/18-medications.jpg" width="396" alt="Medication history for the selected stage with a record button and inventory shortcut"></a><br><strong><a href="docs/APP-GUIDE.md#medication-history">Medication history</a></strong><br>See doses already logged for this mission stage.</td><td width="50%"><a href="docs/images/app/27-record-medication.jpg"><img src="docs/images/app/27-record-medication.jpg" width="396" alt="Dose entry dialog with medication, amount, time and optional inventory fields"></a><br><strong><a href="docs/APP-GUIDE.md#record-medication-taken">Record medication taken</a></strong><br>Log a dose already taken and any confirmed inventory use.</td></tr>
  <tr><td width="50%"><a href="docs/images/app/21-medical-supplies.jpg"><img src="docs/images/app/21-medical-supplies.jpg" width="396" alt="Medical Supplies inventory dialog over the demo Home screen"></a><br><strong><a href="docs/APP-GUIDE.md#medical-supplies">Medical supplies</a></strong><br>Review the medical kit catalog and confirm stock.</td><td></td></tr>
</table>

</details>

<details>
<summary><strong>Library, settings and developer tools</strong></summary>

<table>
  <tr><td width="50%"><a href="docs/images/app/19-documents.jpg"><img src="docs/images/app/19-documents.jpg" width="396" alt="Documents page with the Local library search and reading pane"></a><br><strong><a href="docs/APP-GUIDE.md#documents">Documents</a></strong><br>Search the local library or import Markdown references.</td><td width="50%"><a href="docs/images/app/23-settings.jpg"><img src="docs/images/app/23-settings.jpg" width="396" alt="Settings screen with appearance, audio, profile and assistant cards"></a><br><strong><a href="docs/APP-GUIDE.md#settings">Settings</a></strong><br>Adjust appearance, audio and profile settings.</td></tr>
  <tr><td width="50%"><a href="docs/images/app/24-profile-settings.jpg"><img src="docs/images/app/24-profile-settings.jpg" width="396" alt="Edit profile dialog with crew role and medical contact fields"></a><br><strong><a href="docs/APP-GUIDE.md#profile-settings">Profile settings</a></strong><br>Update the crew role and medical contact.</td><td width="50%"><a href="docs/images/app/28-local-assistant-setup.jpg"><img src="docs/images/app/28-local-assistant-setup.jpg" width="396" alt="Settings cards for the local Ollama connection and MedGemma model test"></a><br><strong><a href="docs/APP-GUIDE.md#local-assistant-setup">Local assistant setup</a></strong><br>Check Ollama and test the installed MedGemma model.</td></tr>
  <tr><td width="50%"><a href="docs/images/app/25-developer-report.jpg"><img src="docs/images/app/25-developer-report.jpg" width="396" alt="Developer report popup showing a captured app screenshot and report fields"></a><br><strong><a href="docs/APP-GUIDE.md#developer-issue-report">Developer issue report</a></strong><br>Save a local issue report with an automatic screenshot.</td><td></td></tr>
</table>

</details>

[Full app screen guide](docs/APP-GUIDE.md)

## Sources and references

The [references directory](references/) contains the complete source catalog with **569 indexed Markdown references**, **517 original PDFs** and **five starter notes**.

- **ISS Medical Checklist (2001).** Historical manual with separate ACLS and CPR sections. [ACLS algorithm · PDF page 117](app/knowledge/pages/ISS-Medical-Checklist-2001-117.png) · [CPR · PDF page 145](app/knowledge/pages/ISS-Medical-Checklist-2001-145.png)
- **CPR in microgravity.** The catalog links the European Resuscitation Council guidance, the DGLRM and ESAM-SMG guideline, and the Polaris Dawn study. [Resuscitation sources](references/README.md#start-with-these-references)
- **Spaceflight health.** NASA mission hazards, human systems standards and exercise countermeasures, alongside NIMH mental health publications. [NASA references by topic](references/nasa/) · [Mission library](references/README.md#mission-library)

NOMAD was built for the NASA Space Apps Health Monitoring Software challenge. Ham uses MedGemma for interpretation and Qwen for dialogue and wording through a local Ollama installation. [Challenge brief](https://www.spaceappschallenge.org/2026/challenges/health-monitoring-software/) · [How NOMAD works](docs/ARCHITECTURE.md) · [Project and software credits](references/README.md#project-and-software-credits)

## Repository map

| Folder | What’s inside |
| --- | --- |
| [`app/`](app/) | App interface and assistant logic. [`desktop/`](app/desktop/) holds the Windows host and build scripts, [`tests/`](app/tests/) holds the software checks, [`assets/`](app/assets/) holds visuals and fonts, and [`knowledge/`](app/knowledge/) holds source pages and PDFs packaged with the app. [Ultrasound Samples](app/Ultrasound%20Samples/) contains synthetic practice images. |
| [`docs/`](docs/) | Installation and usage guides, architecture, practice scenarios, project presentation and [screenshots](docs/images/app/). |
| [`downloads/`](downloads/) | Windows ZIP and its [SHA-256 checksum](downloads/SHA256SUMS.txt). |
| [`references/`](references/) | Complete catalog of sources and credits, NASA references by topic and the app’s five starter notes. |
| [`Investigation (.md)/`](Investigation%20%28.md%29/) | Markdown research texts indexed by NOMAD, grouped by topic with the import manifest. |
| [`investigation/`](investigation/) | Original research PDFs with the figures, tables and page layout. |
| [`portable/`](portable/) | Scripts to start and update NOMAD from a portable installation. |
| [`scripts/`](scripts/) | Generator that rebuilds the reference catalog from the repository’s research files and source metadata. |

Run `node --test app/tests/*.test.cjs` from the repository root. The [build instructions](docs/ARCHITECTURE.md#build-from-source) describe how to package Windows builds.

## Feedback

For a bug report, include the NOMAD version, the affected screen, the steps you followed and the expected result. A **Developer** profile can save a report with an in-app screenshot for review before sharing. [Developer reporting](docs/APP-GUIDE.md#developer-issue-report) · [Bug Fixes and issue register](BUG-FIXES.md) · [GitHub Issues](https://github.com/nxczmain/NOMAD_Health_Project/issues)

## Team

`print("Nombre del Equipo")` · Nicolas Jauregui, Oscar Melendez, Andrik Porchas, Marco Alvarado and Luiz Ruiz.

[NASA Space Apps team profile](https://www.spaceappschallenge.org/2026/find-a-team/printnombre_del_equipo/) · [Project presentation](docs/NOMAD-Project-Demonstration.pdf)
