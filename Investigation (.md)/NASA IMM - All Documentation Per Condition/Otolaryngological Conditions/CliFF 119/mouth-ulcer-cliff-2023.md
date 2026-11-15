# Mouth Ulcer CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1hxuwBeF9CMzNb9TpNe6TaJ47l_Tjwx_K/view) · **12 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Definitions:](#definitions)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

### ICL70_Mouth Ulcer

There is an IMM CliFF for Mouth Ulcer. The incidence data from the IMM LD68 CliFF is based on spaceflight data (LSAH) and will be used in this CliFF for incidence. Terrestrial study is used for data for best case/worst case percentages and CP2 durations. RTDC and LOCL is not expected for this condition.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Spaceflight data used for incidence. There is an IMM CliFF for Mouth Ulcer. The incidence data from the IMM LD68 CliFF is based on spaceflight data and will be used in this Cliff for incidence.

### ANALOG LITERATURE

Analog literature not used.

### TERRESTRIAL LITERATURE

Terrestrial study is used for data for best case/worst case percentages and CP2 durations. The Treatment of Chronic and Recurrent Oral Aphthous Ulcers. Altenburg, et al. Dtsch Arztebl Int 2014; 111; 665-73. DOI:10.3238/arztebl.2014.0665. (Altenburg, 2014). LOC = 3 (somewhat confident).

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 0.1984 and SD 0.06726

### INCIDENCE SUMMARY

The posterior distribution for the incidence rate given the spaceflight data (9 events over 45.49 person-years) under an uninformative prior is Gamma(shape=8.701, rate=43.856) with mean 0.1984 and SD 0.06726.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA 11/22/2022 8:46:41 AM ICL70_Mouth Ulcer Cliff page: 1

Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.198399 SD 0.0672598 Gamma (Shape): 8.701 (Rate): 43.856 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Saile, et al. 2017 Spaceflight 4 Spaceflight data from LSAH. 11/22/2022 8:46:41 AM ICL70_Mouth Ulcer Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

There are no preflight preventive measures.

### BEST CASE SCENARIO DEFINITION

A mouth ulcer causing minimal discomfort that may require topical treatment.

### WORSE CASE SCENARIO DEFINITION

A mouth ulcer with moderate to severe pain that requires oral pain medication or for the crewmember to be on a soft or liquid diet.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Best case/worst case percentages based on a terrestrial study. The Treatment of Chronic and Recurrent Oral Aphthous Ulcers. Altenburg, et al.

Dtsch Arztebl Int 2014; 111; 665-73. DOI:10.3238/arztebl.2014.0665. (Altenburg, 2014). Small ulcers of the minor-type (Mikulicz) are less than 1 cm in diameter (usually 2–5 mm) and heal spontaneously in 4–14 days. They account for 80–90% of all recurrent oral aphthous ulcers. Therefore best case/worst case percentage = 80-90%/10-20%.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Altenburg, 2014 Terrestrial 3 Best case/worst case percentages are based on a terrestrial study. LOC = 3 (somewhat confident). 11/22/2022 8:46:41 AM ICL70_Mouth Ulcer Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 0.1984 and 80 - 90 100 0.5 0 96 336 0 0 0 0 0 Case (TBC) SD 0.06726 Treated Worst 10 - 20 100 0.5 0 240 1008 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.5 0.478342 96 336 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.5 26.0962 240 1008 0 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 11/22/2022 8:46:41 AM ICL70_Mouth Ulcer Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

There is an IMM CliFF for Mouth Ulcer. The incidence data from the IMM LD68 CliFF is based on spaceflight data and will be used in this CliFF for incidence. Terrestrial studies are used for data for best case/worst case percentages and CP2 durations. RTDC and LOCL is not expected for this condition. TREATED BEST CASE (TBC) SCENARIO COMMENTS CP2 durations based on terrestrial study. RTDC and LOCL not expected.

TREATED WORST CASE SCENARIO (TWC) COMMENTS CP2 durations based on terrestrial study. RTDC and LOCL not expected.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS CP2 durations based on terrestrial study. CP2 durations based on treated best case scenario. RTDC and LOCL not expected.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS CP2 durations based on terrestrial study. CP2 durations based on treated worst case scenario. RTDC and LOCL not expected.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation | Source |  | LOC Value |  |  |
| --------------- | ----------- | --- | --------- | --- | --- |
| Altenburg, 2014 | Terrestrial |  |  | 3 |  |

CP2 durations based on terrestrial study. (Altenburg, 2014)

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |  |  |
| -------- | ------ | --------- | --- | --- | --- |
| N/A | N/A |  |  | 4 |  |

RTDC is not expected for this condition.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |  |  |
| -------- | ------ | --------- | --- | --- | --- |
| N/A | N/A |  |  | 4 |  |

LOCL is not expected for this condition.

| 11/22/2022 8:46:41 AM |  | ICL70_Mouth Ulcer Cliff |  |  | page: 5 |
| --------------------- | --- | ----------------------- | --- | --- | ------- |
CAPABILITY RESOURCE TABLE (CRT) OVERVIEW ICL - 70, Mouth Ulcer

## Definitions:

- Best Case: Definition: A mouth ulcer causing minimal discomfort that may require topical treatment.

- Worst Case: Definition: A mouth ulcer with moderate to severe pain that requires oral pain medication or for the crewmember to be on a soft or

liquid diet.

### Capabilities and Resourcing Scope

## Overview

Ulcerated lesions (or aphthous stomatitis or “canker sores”) of the oral cavity can be secondary to several etiologies including trauma, immune dysregulation, medications, infection, or neoplasm (Fitzpatrick et al. 2019; Baccaglini et al. 2011). Acute ulcers are episodes lasting less than 6- weeks while chronic ulcers are those of longer duration (Bruce et al. 2015; Edgar et al. 2017). Chronic ulcerations are usually secondary to systemic inflammatory (i.e. Bechet syndrome, systemic lupus erythematosus, inflammatory bowel disease, etc.) or malignant pathologies that would not be expected in spaceflight populations. Ulcerations are classified as being “minor” if there are less than 1 cm in diameter and “major” if greater than 1 cm in diameter. There are no consensus guidelines available for management of aphthous ulcerations. For patients with minor, isolated episodes (as in the best-case scenario), treatment can typically involve ensuring adequate oral hygiene, pain control with topical therapies and avoidance of exacerbating factors such as further trauma. In the worst-case scenario, a major ulcer can limit calorie intake secondary to oral pain.

However, dehydration and hypovolemic shock are not part of this condition and are resourced in a separate CRT.

- CNES: None

### Diagnostic Scope and Resourcing

In the best case, diagnosis will be made via history and physical exam. Given the benign nature of this condition, ground communications are not resourced for the best case. The worst case is similarly diagnosed in spaceflight. In terrestrial conditions, a biopsy may occur to help with the differential (Bruce et al. 2015); however, this is not possible secondary to the lack of histology and expertise available in spaceflight. Ground communications were not resourced in the worst-case scenario given the low task impairment.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.50 hours This is the longest reasonable time to complete the task for an experienced clinician (adjusted for being in the spaceflight environment) 1) to remove a crewmember from duties 2) obtain a history and 3) examine the patient.

CP1 WC (Treated or Untreated): 0.50 hours This is the longest reasonable time to complete the task for an experienced clinician (adjusted for being in the spaceflight environment) 1) to remove a crewmember from duties 2) obtain a history and 3) examine the patient.

The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a four: this is at intern/PA/NP level. Although most cases will be at an EMT level, the occasional worst-case may require cautery and knowledge of topical corticosteroids.

### Treatment Scope and Resourcing

In the best-case scenario, treatment is limited to topical anesthetics and steroids. In the worst case, resources for cautery, HSV reactivation (which is not herpes zoster, as this is covered in a separate CRT), any mild pain management are resourced. Both scenarios make note that crewmembers should be placed on a bland diet, however in the worst case, a soft diet is instituted as well.

### Communications and Support Needs

Diagnosis and course of treatment is uncomplicated for both best- and worst-case scenarios. CRT group consensus was not to resource ground communications for this condition.

## REFERENCES

Baccaglini, L., R. V. Lalla, A. J. Bruce, J. C. Sartori-Valinotti, M. C. Latortue, M. Carrozzo, and R. S. Rogers, 3rd. 2011. 'Urban legends: recurrent aphthous stomatitis', Oral Dis, 17: 755-70.

Bruce, A. J., T. S. Dabade, and N. M. Burkemper. 2015. 'Diagnosing oral ulcers', Jaapa, 28: 1-10.

Edgar, N. R., D. Saleh, and R. A. Miller. 2017. 'Recurrent Aphthous Stomatitis: A Review', J Clin Aesthet Dermatol, 10: 26-36.

Fitzpatrick, S. G., D. M. Cohen, and A. N. Clark. 2019. 'Ulcerated Lesions of the Oral Mucosa: Clinical and Histologic Review', Head Neck Pathol, 13: 91-102.

### IMM CLIFF RECONCILATION COMMENTS

There is an IMM CliFF for Mouth Ulcer. The incidence data from the IMM LD68 CliFF is based on spaceflight data (LSAH) and will be used in this Cliff for incidence. Terrestrial study is used for data for best case/worst case percentages and CP2 durations. RTDC and LOCL is not expected for this condition.

### LIMITATIONS SUMMARY

11/22/2022 8:46:41 AM ICL70_Mouth Ulcer Cliff page: 6

There is limited data related to untreated scenarios.

| 11/22/2022 8:46:41 AM | ICL70_Mouth Ulcer Cliff | page: 7 |
| --------------------- | ----------------------- | ------- |
TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------------------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  |  | 5 | 13 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  |  |  |  |  |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 664 |  | 89 |  |  |  |  | 5 | 13 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  |  | Translation & |  |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity | Standing (g) |  | Equipment | Ops |  | Category |  |  |
| --- | ----- | --- | --------- | ------------ | -------------- | --------- | --- | --------- | -------- | --- | --- |
|  |  |  |  |  | (microgravity) |  |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  |  | 18 | 3763 | 0.004783420.478342 |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ------------------ | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (TWC) Untreated Worst

|  |  |  |  |  |  |  | 211 | 982 | 3763 | 0.260962 | 26.0962 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  |  | Cardio- |  |  |  |  |  |
| --- | ----------------------- | -------------- | -------- | ------ | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  | Communications | personal | Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple Complex |  | Skills |  |  | pulmonary |  |  |  |  |  |

Treated Best

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

| Case |  |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

(UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --------------------- | --- | --- | -------------------------- | ----------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| 11/22/2022 8:46:41 AM |  |  |  | ICL70_Mouth Ulcer Cliff |  |  |  |  |  |  | page: 8 |
Total Human

|  | Translation & | Total Tasks |  |  |
| --- | ------------- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | ---------------------- | ------------- | ---------- | --- |
|  | (microgravity) | Condition | Tasks Full |  |

Mission Treated Best

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (UTWC)

| 11/22/2022 8:46:41 AM | ICL70_Mouth Ulcer Cliff |  |  | page: 9 |
| --------------------- | ----------------------- | --- | --- | ------- |
TABLE 8 KEY

- Human System Task Category (HSTC) Definitions: Cognitive-Simple: Tasks requiring simple cognitive involvement (low levels of attention, following

simple checklists, and not requiring extensive decision making) in conjunction with inputs from other systems. Cognitive-Complex: Tasks requiring complex cognitive involvement (requiring constant attention, frequent interpretation of outside stimuli to inform real-time situations) in conjunction with inputs from other systems. Communication: Tasks requiring primarily communication, via hearing and speaking. Interpersonal Skills: Tasks requiring interpersonal, social interaction between crew including complex technical tasks that require extended crew interaction. Vision: Tasks in which visual information is required. Hearing: Tasks in which primarily auditory information is required, excluding communication, e.g. hearing alarms, medical auscultation, OOHAs. Cardiopulmonary: Tasks requiring greater-than-baseline cardiopulmonary effort, e.g. physically strenuous activities. Dentition: Tasks requiring use of teeth for mastication. GI (Gastrointestinal): Tasks requring use of the alimentary sytem, e.g. solids/liquids consumption and solids excretion. GU (Genitourinary): Tasks requiring use of the male/female genitourinary systems. Hand (Dominant): Tasks performed using primarily the hand, requiring use of the dominant hand (piloting, medical procedures, dental procedures). Hand (Any): Tasks performed using primarily the hand(s), with no preference for dominance, with equivalent bilateral effectiveness. Upper Extremity: Tasks requiring specific use of the upper extremities, excluding hands. Lower Extremity: Tasks requiring specific use of the lower extremities (excluding ambulation and standing in the presence of gravity), e.g. using exercise equipment. Ambulation and Standing (g): Tasks requiring use of both lower extremities to accomplish ambulation or standing in the presence of gravity. Translation and Stabilization (microgravity): Tasks requiring use of either the upper or lower extremities to accomplish translational movement and stabilization (securing oneself to remain stationary) in the setting of microgravity. Don/Doff Equipment: Tasks requiring the donning of personal equipment (including pressure suit, exercise harness, EVA equipment, etc). Pressure Ops: EVA/contingency tasks performed while pressurized in a suit.

Criteria for Assignment of Conditions to HSTCs (any of the following):

1) Is affected crew member physically incapable of performing the human system task category, without impairment, with the condition?

2) Would the treatment (e.g. medications) impair the crewmember's ability to perform the human system task category? (Does not apply to UTx)

3) Does the condition have a high likelihood of causing a significant aeromedical contraindication with an associated human system task category

4) Would performing tasks in an associated task category worsen the condition? (If so, it is affected).

5) Does pain associated with the condition impair any further human system categories?

### TASK IMPAIRMENT COMMENTS

CP2: No comment. CP3: No comment.

### EVIDENCE COLLECTION PROCESS

Mesh terms that most closely resembled the best-case and worst-case scenarios, and associated Conditions Included but Not Explicitly Stated (CNES), were utilized to build incidence, duration, RTDC, and LOCL searches by best- and worst-case.

## Incidence:

Databases searched for spaceflight and analog incidence data included: PubMed, Google Scholar, NASA Technical Reports Server (NTRS) public search, Defense Technical Information Center (DTIC), and Barratt MR, Baker E, Pool SL. Principles of Clinical Medicine for Space Flight. New York,

- NY: Springer; 2019. 2nd Edition. Databases searched for terrestrial incidence included: DynaMed, PubMed, and Google Scholar.

Duration, RTDC, LOCL: Databases searched for duration, RTDC, and LOCL included: Dynamed, Cochrane, PubMed, and Google Scholar. Note, that if duration, RTDC, or LOCL data was found in a DynaMed search, the other search engines were not included. Relevant articles were selected and reviewed. If applicable, the article was included in the CLiFF.

LEVEL OF CONFIDENCE (LOC) SCORING Articles obtained to update the evidence behind this CLiFF were scored by ExMC editors, based on their applicability to the Exploration Spaceflight environment using the following grading scale: 4 – Confident 3 – Somewhat confident 2 – Neutral 1 – Somewhat unconfident 0 – Not confident The following considerations factor into the grading scale above:

- How closely does the paper describe the medical condition as defined by the IMPACT 1.0 Condiltion List (relevance)?

- How closely does the population included resemble the astronaut population?

- Quality of the paper (number of subjects, methods, etc.)

- How much does the editor trust the source of the evidence?

- How closely does the editor think that the data represents the exploration spaceflight environment?

- Other considerations, at the discretion of the editor, supported in the comments for LOE scoring.

11/22/2022 8:46:41 AM ICL70_Mouth Ulcer Cliff page: 10

## REFERENCES

Reference Saile L., Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence V2. 2017. (Saile, 2017). The Treatment of Chronic and Recurrent Oral Aphthous Ulcers. Altenburg, et al. Dtsch Arztebl Int 2014; 111; 665-73. DOI:10.3238/arztebl.2014.0665. (Altenburg, 2014).

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

### CAC Coronary Artery Calcium

### CHS Crew Health and Safety

### CL Condition List

### CliFF Clinical Finding Form

### CMO Crew Medical Officer

### COMFORT Clinical Outcome Metrics for Optimization of Robust Training

CP1 Clinical Phase 1 CP2 Clinical Phase 2 CP3 Clinical Phase 3

### CRL Clinical Resource Level

### CRT Capability Resource Table

### CST Clinical Science Team

### DCS Decompression Syndrome

### DRM Design Reference Mission

### ED Emergency Medicine Doctor

### EL Evidence Library

### EMCL Exploration Medical Condition List

### EMT Emergency Medical Technician

### EVA Extravehicular Activity

### EXMC Exploration Medical Capability

### HRP Human Research Program

### ICD International Classification of Disease

ICL 1.0 IMPACT 1.0 Medical Conditions List

### ICU Intensive Care Unit

IMCL iMED Condition List iMED Integrated Medical Evidence Database 11/22/2022 8:46:41 AM ICL70_Mouth Ulcer Cliff page: 11

### IMM Integrated Medical Model

### IMPACT-MD Impact Medical Database

### IP Incidence Proportion

### IR Incidence Rate

### ISS International Space Station

### IV Intravenous

### JSC Johnson Space Center

LEO Low-Earth orbit

### LEVA Lunar Extravehicular Activity

### LOCL Loss of Crew Life

### LOM Loss of Mission

### LSAH Lifetime Surveillance of Astronaut Health

### LSO Lunar Surface Operations

### MCL Master Condition List

### MEVA Medical Extravehicular Activity

### NASA National Aeronautics and Space Administration

### N/A Not Applicable

### NP Nurse Practitioner

### OBGYN Obstetrics and Gynecology

### OR Occurrence Rate

### PA Physician Assistant

### PDQ Pain Disability Questionnaire

### PFCL Proposed Future Conditions List

### PPE Personal Protective Equipment

### PTRS Project Technical Requirements Specification

### PRL Pharmaceutical Resource Level

### QTL Quality Time Lost

### RCL Removed Conditions List

### REP Rochester Epidemiology Study

### RTDC Removal to Definitive Care

### SANS Spaceflight-Associated Neuro-ocular Syndrome

### SAS Space Adaptation Syndrome

### SEVA Spaceflight Extravehicular Activity

### SME Subject Matter Expert

### SoP Standard Operating Procedure

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

11/22/2022 8:46:41 AM ICL70_Mouth Ulcer Cliff page: 12

---

## Source metadata

```yaml
source_filename: "mouth-ulcer-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1hxuwBeF9CMzNb9TpNe6TaJ47l_Tjwx_K/view"
source_drive_id: "1hxuwBeF9CMzNb9TpNe6TaJ47l_Tjwx_K"
source_sha256: e2917d579fa5081b18cff4ed579a0acb57610c6226fd5fc6bb1bed4b47551065
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 12
ocr_performed: false
```
