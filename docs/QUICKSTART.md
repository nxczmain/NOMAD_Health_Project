# Quick start

Use the bundled Earth Orbit demo to learn NOMAD’s daily workflow with simulated crew data.

## 1. Open the demo

1. [Download the Windows ZIP](https://github.com/nxczmain/NOMAD_Health_Project/releases/latest/download/NETIN-Windows-x64.zip) and choose **Extract All**.
2. Open **NETIN.exe**, select **Earth Orbit** and sign in as **Maya Chen** with `OrbitDemo26`.
3. Choose **Continue without photo** to skip the camera prompt. Follow or skip Ham’s tour.

The Moon demo uses **Mateo Ruiz** with `LunarDemo26`. For Windows requirements, updates and model setup, see the [installation guide](INSTALLATION.md).

## 2. Log a practice check-in

1. Open **Assistant → Daily check-in** and select **Start today’s check-in**.
2. For this practice case, answer **No** to the immediate-help question. Enter `Physically I feel just a little headache` in the symptoms field.
3. When the pain scale appears, pick **4 / 10** and select **Save pain rating**.
4. Select **Save and finish** after the next prompt appears. Open **Records**, select today’s date and review the **Check-in** entry. Open **Health → Physical → Body map** to see the logged area and intensity.

[Daily check-in controls](APP-GUIDE.md#guided-daily-check-in) · [Records controls](APP-GUIDE.md#records)

## 3. Look up a source

1. Open **Documents**, search for `ISS` and open **ISS Medical Checklist (2001) · Full manual**.
2. Select **ACLS algorithm** to jump to PDF page 117. Select **CPR** for the separate section on page 145.
3. Use **Open original PDF** to inspect the source page and its layout.

The 2001 manual is a historical reference. For operational use, follow the approved checklist for the current mission and the crew medical officer. [Document reader](APP-GUIDE.md#document-reader) · [Source catalog](../references/README.md)

## 4. Try another daily task

- Open **Exercise**, scroll to **Exercise demonstrations** and select **Pause animations** or **Play animations**. Use **Exercise research in Documents** to find the underlying NASA references.
- From **Home**, select **Motor test**. Choose **Visual search**, choose your hand and start the test. View your saved result under **Health → Motor Skills**.

[Exercise guide](APP-GUIDE.md#exercise) · [Motor skills guide](APP-GUIDE.md#motor-skill-activities)

## 5. Connect Ham’s local models

For model-backed conversations and reviews, install and start Ollama. In **Settings → Local assistant**, select **Check connection**, then **Download required models** if prompted. Under **Medical model**, use **Test and use model** to check MedGemma. When setup is complete, try a [Ham practice scenario](HAM-SIMULATIONS.md) and inspect its cited **Sources**. [Full setup and troubleshooting](INSTALLATION.md)
