# NOMAD Bug Fixes

Track reported issues, shipped fixes and new features. The [NOMAD Developers Log in Google Docs](https://docs.google.com/document/d/1LHN28T0pR1HXX1QaZp-VD8lG4N8W-MM0C0AdFnKbS3A) contains the original detection notes and a separate **Fixes and Additions** tab. The published register below records the same in-app reports in English. Report screenshots remain in the local NOMAD report file.

[Bug detection register](#bug-detection-register) · [Dated fixes and additions](#dated-fixes-and-additions) · [How to report an issue](#how-to-report-an-issue)

## Bug detection register

### Earlier developer notes

- **Library conversion and document access.** Some original PDFs had no distinct Markdown entry. The audit resolved identical copies, added the missing ISS medical kit conversion and retained original page images where necessary. The current catalog links 569 Markdown entries and 517 original PDFs.
- **Emergency responses and equipment.** Ham previously gave generic answers to ISS CPR and post-EVA fracture questions. The app added short numbered responses with document evidence and embedded the historical ISS checklist as a searchable full manual. The supplies catalog distinguishes reference locations from stock confirmed on board.
- **Medical chat and check-in flow.** Reports included repeated replies, lost social context, skipped clarification, routine medication mentions triggering alerts and headache details missing from the body map. Changes added targeted context handling, in-place clarification, medication intent checks and linked symptom records. Chest-pain escalation remains safety-sensitive and ambiguous scenarios need case-level review.
- **Body map and appearance.** The map clears the saved selection, syncs reported concerns into follow-ups and keeps separate body areas distinct. Shared dark-mode table colors, compact branding and clearer You and Ham transcript labels were also updated.
- **Medication records and medical review.** The medication history records past doses and linked inventory changes. Estimated interval notices depend on a recorded source. The medical review prepares a source-backed report for the crew medical officer and supports export and a user-initiated email draft.
- **Roles, reporting and onboarding.** The role selector was restored with custom roles. The Developer role gained a screenshot popup and local report file. Ham’s tour can be skipped. Later documentation added a quick-start tutorial and a visual guide.
- **Medical model and mental health references.** MedGemma 1.5 became the medical interpreter and Qwen the dialogue and wording layer. The library added 44 English NIMH publications. Later setup changes added connection diagnostics, model downloads and testing from Settings.

### In-app reports from November 20, 2026

The 31 entries below are grouped by the build that the tester reported. **Open** and **Needs retest** identify items that still need a fix or a confirmed reproduction. **Partially addressed** and **Improved** indicate a narrower change shipped.

### NOMAD 3.2.1

| ID | Report | Type | Status | Outcome or next check |
| --- | --- | --- | --- | --- |
| DR-01 | Daily photo camera orientation | Bug | Fixed in v3.2.3 | The preview felt reversed when the tester tried to center in the guide. The live preview now mirrors movement. |
| DR-02 | Diarrhea question returned a generic fallback | Bug | Fixed in v3.2.3 | Ham can keep the symptom in context and retrieve the relevant gastroenteritis reference in the reported scenario. |
| DR-03 | Follow-up repeated after the tester said they felt fine | Bug | Improved in v3.2.3 | Explicit improvement and corrections now end stale symptom follow-ups. A new symptom can still start a new line of questioning. |
| DR-04 | Report issue disappeared while scrolling | Bug | Fixed in v3.2.3 | Developer profiles now have a persistent bottom-right Report issue button. |
| DR-05 | Ollama setup was unclear | Usability | Improved in v3.2.3 | Settings checks the local connection, downloads missing models and tests MedGemma. The first setup still requires Ollama and model downloads. |
| DR-06 | Ham escalated an ordinary symptom too quickly | Bug | Improved in v3.2.3 | Regression tests cover routine headache and medication scenarios. Emergency triggers remain active for red flags. |
| DR-07 | Ham lost context during a medical conversation | Bug | Needs retest | Targeted intent and follow-up fixes shipped. The report did not identify a standalone reproduction sequence for the conversation it referenced. |
| DR-08 | Reported rib injury was filed under the head | Bug | Fixed in v3.2.3 | Automatic symptom recording creates a separate torso entry and preserves the existing headache entry. |
| DR-09 | Thruster taps offered little variation | Usability | Replaced in v3.2.3 | Visual search uses randomized boards and saves time and accuracy. Older Thruster taps results remain readable. |
| DR-10 | Exercise management and visual reference requested | Feature | Added in v3.2.3 | Exercise includes daily plans, completed sessions, energy fields and visual demonstrations. |
| DR-11 | Planned ibuprofen was treated as an emergency | Bug | Fixed in v3.2.3 | The reported wording is handled as a planned medication mention. Explicit danger cues still escalate. |

### NOMAD 3.2.2

| ID | Report | Type | Status | Outcome or next check |
| --- | --- | --- | --- | --- |
| DR-12 | Separate looping exercise demonstrations requested | Feature | Added in v3.2.3 | Each of the five movements has an offline loop with a shared pause and play control. |
| DR-13 | Body region thumbnail requested | Feature | Added in v3.2.3 | Health shows a miniature body map that highlights the reported area. |
| DR-14 | Check-in repeatedly asked about effects on duties | Usability | Improved in v3.2.3 | The check-in uses symptom-specific and mood-specific follow-ups. Broad diagnostic reasoning across arbitrary scenarios still needs validation. |
| DR-15 | Mood follow-up felt impersonal | Usability | Improved in v3.2.3 | Mood prompts acknowledge what the user shared and choose relevant follow-ups. |
| DR-16 | Homesickness response and performance meter requested | Feature | Partially addressed | Homesickness gets a supportive response without a routine duty prompt. Motor skills shows measured results and comparable personal baselines. A duty-performance meter remains unimplemented. |
| DR-17 | Headache intensity was missing from the record | Bug | Fixed in v3.2.3 | The 0–10 pain slider records the value against the existing concern in the body map. |
| DR-18 | Motor results view appeared to mix profiles | Bug | Fixed in v3.2.3 | The view filters to the signed-in profile and mission stage. The desktop regression check exercised two profiles and two stages. |
| DR-19 | Exercise references missing from Documents | Bug | Fixed in v3.2.3 | Documents lists three indexed NASA exercise references under Exercise research. |
| DR-20 | Exercise sources needed both Markdown and PDF | Feature | Added in v3.2.3 | All three exercise references have a Markdown entry and an original PDF in dedicated Exercise folders. |
| DR-21 | Exercise icon change requested | Usability | Updated in v3.2.3 | The navigation uses a dumbbell icon. |
| DR-22 | ISS search still opened the old checklist excerpt | Bug | Fixed in v3.2.3 | ISS search prioritizes the full manual. An older ACLS entry redirects to PDF page 117, and CPR and Fractures have shortcuts. |
| DR-23 | Saved check-in repeated the tester’s exact wording | Bug | Fixed in v3.2.3 | Records shows short descriptions such as headache reported. The original notes remain expandable. |
| DR-24 | Records controls were easy to overlook | Usability | Improved in v3.2.3 | The daily export uses a primary Save daily report button and conversations have a dedicated section. |

### NOMAD 3.2.3

| ID | Report | Type | Status | Outcome or next check |
| --- | --- | --- | --- | --- |
| DR-25 | Treadmill demonstration appeared to run backward | Bug | Open | The direction of movement in the exercise loop needs a visual fix and a playback check. |
| DR-26 | Medication side effects answer repeated procedure text | Bug | Open | The reported live response repeated an instruction instead of answering the side-effects question. The original medical-kit lookup scenario has a regression test, but this live reproduction is still open. |
| DR-27 | Enter did not send the chat message | Bug | Open | The tester had to select Send. Keyboard submission and multiline typing need an interaction check. |
| DR-28 | Requested medication instructions were omitted | Bug | Open | Check the intended response against the cited source and the crew medical officer’s role. The specific reported exchange still needs a retest. |
| DR-29 | Health summary should support a medical handoff | Feature | Partially addressed | Prepare medical review already assembles observations, recent records, medications and source-backed context for officer review. It exports a report and can open an email draft. Automatic delivery was not verified. |
| DR-30 | Pain slider should temporarily replace the message composer | Usability | Open | The slider already saves a pain rating. The requested composer behavior still needs implementation or confirmation. |
| DR-31 | Aspirin-allergy warning repeated after a timing clarification | Bug | Open | The saved screenshot shows Ham repeating the same warning when the tester clarified when the concern began. Context and repeated output need a targeted regression check. |

## Dated fixes and additions

Dates follow the project’s local time in Hermosillo.

### November 16, 2026 · Check-in groundwork

**Fixes**

- Kept the active check-in question in context, recorded readings that the crew member volunteered and kept recaps tied to recorded observations.

[Check-in commit](https://github.com/nxczmain/NOMAD_Health_Project/commit/394d883)

### November 19, 2026 · NOMAD v3.2.0 and emergency reference improvements

**Fixes**

- Preserved pending check-in questions during clarification and stopped unrelated or repeated responses in verified cases.
- Cleared body-map selections after saving, surfaced saved concerns in follow-ups and improved dark-mode table contrast and transcript labels.
- Improved retrieval for the medical kit, ISS fractures and microgravity CPR. Historical material is identified as such and the cited source can be opened.

**Additions**

- MedGemma 1.5 medical interpretation with Qwen for dialogue and wording. Added 44 English NIMH publications and new emergency reference material.
- Added the medical supplies catalog, dose history, source-backed interval notices and an exportable medical review. Restored selectable and custom crew roles.

[NOMAD v3.2.0](https://github.com/nxczmain/NOMAD_Health_Project/releases/tag/v3.2.0) · [Emergency reference commit](https://github.com/nxczmain/NOMAD_Health_Project/commit/3703ee4)

### November 20, 2026 · NOMAD v3.2.1 and first in-app reports

**Fixes**

- Improved MedGemma connection diagnostics and distinguished an unavailable model from an executable that predates MedGemma support.

**Additions**

- Added the Developer role and Report issue popup with categories, reproduction fields and an automatic screenshot. Reports save together in a local HTML file.
- Recorded 31 reports across the 3.2.1, 3.2.2 and 3.2.3 builds tested that day. The report’s build number records the version tested.

[NOMAD v3.2.1](https://github.com/nxczmain/NOMAD_Health_Project/releases/tag/v3.2.1) · [Developer reporting commit](https://github.com/nxczmain/NOMAD_Health_Project/commit/75ec125)

### November 22, 2026 · NOMAD v3.2.3 public Windows release

**Fixes**

- Mirrored the camera preview, kept Report issue visible while scrolling and scoped motor results to the signed-in profile and stage.
- Improved symptom follow-ups, everyday medication routing and the reported diarrhea and rib-injury cases. Records now summarizes observations in plain language.
- Prioritized the full historical ISS checklist in search and added shortcuts for ACLS, CPR and fractures.

**Additions**

- Added the Exercise module with plans, session logs, energy tracking, five offline demonstrations and three NASA references with their PDFs.
- Added the pain slider, highlighted body-map thumbnail, Visual search motor test and in-app model downloads through Ollama.
- Published an English quick-start tutorial, a 28-screen guide and the source catalog.

[NOMAD v3.2.3](https://github.com/nxczmain/NOMAD_Health_Project/releases/tag/v3.2.3) · [Windows release commit](https://github.com/nxczmain/NOMAD_Health_Project/commit/7f90e8c) · [Documentation commit](https://github.com/nxczmain/NOMAD_Health_Project/commit/5d526dc)

### November 23, 2026 · GitHub homepage and development log

**Fixes**

- Made the tutorial, screenshots, key references and folder map visible directly on the repository homepage.

**Additions**

- Moved the source catalog and NASA reference index into references and preserved the old documentation links.
- Updated the existing Google Doc with the in-app detection register and a dated Fixes and Additions tab. Published Bug Fixes in the repository root.

[Repository homepage update](https://github.com/nxczmain/NOMAD_Health_Project/commit/d4dba19)

## How to report an issue

1. In **Settings → Profile → Edit profile**, select the **Developer** role.
2. While the issue is visible, select **Report issue**. Add the observed behavior, steps to reproduce and expected result. Review the attached screenshot and select **Save report**.
3. Open **Settings → Developer tools → Open reports folder** to find `NOMAD-Developer-Reports.html`. Review screenshots before sharing the file.

For a public ticket, share the affected version, the screen, a reproduction case and the expected result. [Developer reporting guide](docs/APP-GUIDE.md#developer-issue-report) · [GitHub Issues](https://github.com/nxczmain/NOMAD_Health_Project/issues)
