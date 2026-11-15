# Mars Propulsion Transit Times

[View original PDF](https://drive.google.com/file/d/1Sr8rfTibVGCqzH5N9VndGXsdwn3XkP1Y/view) · **15 pages**

**Collection:** Mission Risk Reports/Mars

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Executive Summary](#executive-summary)
- [Background](#background)
- [Methods](#methods)
- [Results](#results)
- [Summary](#summary)
- [Appendix B: Medical Conditions in iMED by Category (iMED_20170221)](#appendix-b-medical-conditions-in-imed-by-category-imed_20170221)

---

### Mars Propulsion Transit Times Mars Propulsion Transit Times

IMPORTANT SERVICE REQUEST NOTICE (S-20170724-390)

This service report should not be used for diagnostic or treatment decisions, which are outside the scope of the model. Please include the service request number (S-20170724-390) on any presentations or documentation referencing this service request.

## Executive Summary

In order to compare medical outcomes for different round trip transit times to Mars that are associated with various propulsion methods, 6 different mission duration times (150 days, 204 days, 335 days, 517 days, 746 days, and 1103 days) with no EVAs were modeled using a 4 person crew (2 males, 2 females).

Simulation results shown are based on ISS Medical Capability (MedCap) resources without resupply.

Results show generally linear relationships between transit time and medical outcomes.

## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM).

Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are total medical events (TME), crew health index (CHI), need for evacuation (EVAC) and loss of crew life (LOCL).

The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profiles shown in Table 1. The outcomes of certain IMM medical conditions are influenced by pre-existing medical history, including: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data. CAC was specified as positive in one male, and in no female crew members, which is also consistent with historical crew data. EVA conditions were excluded from this report, which focuses on medical events during transit only. 1 09 APRIL 2018

### Mars Propulsion Transit Times    Mars Propulsion Transit Times

Table 1: Crew Profile Used for All DRMs

### Crew Member  Sex  CAC  Crowns  Contacts  Prior Abdominal  EVA

Surgery

|  | Crew 1 | Male | Yes  Yes | No | No | No |
| --- | ------- | ------- | --------- | ---- | ---- | --- |
|  | Crew 2 | Male | No  No | Yes | Yes | No |
|  | Crew 3 | Female | No  Yes | No | No | No |
|  | Crew 4 | Female | No  No | Yes | No | No |
Propulsion method and associated round-trip transit time are shown in Table 2. Estimated propulsion transit times were provided by ExMC and were taken from the engineering literature. Please note that the IMM does not model the medical sequelae specifically associated with propulsion methods.

Table 2: Propulsion Transit Times for Each DRM

|  | DRM # |  | Propulsion Method |  |  |  |
| --- | ------ | --- | ------------------ | --- | --- | --- |

### Round Trip Transit Time

(days)

|  | 1 | Nuclear electric propulsion (RFIT-45 engine) |  |  | 1103 |  |
| --- | --- | --------------------------------------------- | --- | --- | ----- | --- |
|  | 2 | Solar Electric |  |  | 746 |  |
|  | 3 | NASA DRM-5 |  |  | 517 |  |

4  Nuclear thermal propulsion (Bimodal nuclear thermal electric  335 propulsion)

|  | 5 | VASIMR |  |  | 204 |  |
| --- | --- | ----------------------------------------- | --- | --- | ---- | --- |
|  | 6 | Fusion propulsion (Inertial confinement) |  |  | 150 |  |
### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix A (and detailed in Appendix B). The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data, contained within the iMED. For each condition, the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity, necessary for treatment in both the best and worst-case scenarios. In- flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS (i.e. the ISS medical capabilities (MedCap)). Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all-untreated (no Medkit) and baseline MedCap (ISS Medkit without resupply). For this

|  |  |  |  | 2 |  | 09 APRIL  2018 |
| --- | --- | --- | --- | --- | --- | --------------- |
### Mars Propulsion Transit Times Mars Propulsion Transit Times

service request only the MedCap state was utilized, because this should most closely resemble a real world deep space mission where resupply is not possible, but where utilization of partial and alternative treatment can occur.

### Main Outcomes

- The IMM primary medical outcomes include: total medical events (TME), crew health index (CHI),

probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources.

CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI (%) = [ 1 - ( QAMTL ÷ Mission Length ) ] × 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, crew members are usually only assigned one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior version of the model.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources. If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If there are not enough resources available to treat the event, the event is considered "untreated." The initial quantities for medical resources are baselined to a fully stocked ISS medical kit (MedCap).

### Modeling Approach

3 09 APRIL 2018

### Mars Propulsion Transit Times Mars Propulsion Transit Times

Simulations were run for the different transit times, as seen in Table 2, using the crew profile in Table 1.

One hundred thousand (100,000) trials were run for each DRM, where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria.

Convergence criteria are met when there is less than, or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last two - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport.

IMM outcomes were determined for the DRMs using the ISS MedCap scenario where all conditions are treated, partially treated or untreated based on the available resources of the ISS MedCap. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, CHI, EVAC and LOCL results, as well as pertinent influential conditions, are described. IMM version 4.1 has certain features, assumptions and limitations that impact modeled outcomes. IMM 4.1 represents a significant advance over IMM 3.0. Improvements in IMM 4.1 include inclusion of a timeline, and alternate or partial treatment capability. Features, assumptions and limitations pertinent to this report are described below.

Features, Assumptions and Limitations of IMM Version 4.1 [3]

1. All non-SA and non-extravehicular activity (EVA) related conditions have a uniform likelihood of

occurring throughout the mission duration. Space Adaptation Syndrome conditions occur in the first 5 days of the mission, with a peak occurrence at 48 hours.

2. Individuals cannot get the same condition for which they are currently being treated (i.e. during

Clinical Phase (CP) I and II).

3. EVAC and LOCL are generated for each medical event, and then the timing of the EVAC or LOCL is

generated according to a specified distribution.

4. Individuals are no longer at risk for further conditions once their status changes to either EVAC or

LOCL. From the start time of the EVAC or LOCL, the functional impairment of the crew member is assumed to be 100%.

5. When the status of a crew member changes to EVAC, only one crew member is evacuated.

6. The IMM assumes that, per crew member, the first condition requiring a specific therapy utilizes all

resources required for treating that condition before a second condition has access to those resources.

7. Most medical conditions, with exceptions including acute radiation syndrome and EVA-linked

conditions, occur independently of the occurrence of mission events and other medical conditions.

Currently there is no correlation or association within or between crew members for most medical conditions.

8. The model assumes another crew member is available to act as caregiver but does not track the time

impact of providing this care.

9. Medical procedures are accurately followed and successful; no mistakes occur in executing medical

procedures.

10. Crew medical skill level and preflight/inflight training is not modeled.

4 09 APRIL 2018

### Mars Propulsion Transit Times Mars Propulsion Transit Times

11. All diagnoses are 100% accurate.

12. All pharmaceuticals maintain maximum efficacy.

13. All medical events receive the appropriate treatment.

14. All medical events respond to the treatment as expected terrestrially.

15. All medical equipment is 100% reliable.

16. For each of the medical conditions specified in iMED, all crew members with the same characteristics

(sex, presence of CAC, crowns, contacts, history of abdominal surgery) have the same likelihood distribution of experiencing the condition.

17. All crew members are assumed to have all intrinsic body parts intact (i.e. appendix, gall bladder, and

uterus or prostate, etc.).

18. IMM assumes ISS power, potable water and oxygen resources are always available in unlimited

supply.

19. No Russian medical capabilities aboard the ISS are available to US crew members in this model.

20. Medical capabilities do not include the use of personal crew carry-on items contained in the

Individual Medical Accessories Kit, (IMAK).

21. If a crew member is undergoing treatment for concurrent medical conditions requiring the same

consumable resource, the crew member will only utilize resources at the level required by the condition that requires the most resources.

22. If the primary resource required for treating a medical condition is unavailable, one or more

alternative resources are considered, if appropriate. One example might be using acetaminophen in place of ibuprofen.

23. Total quantities of a consumable medical resource requiring a daily dose will be adjusted if a dosage

schedule runs past the end of the mission.

24. If a solar particle event causes acute radiation sickness in one or more crew members, IMM assumes

the condition begins identically in all affected crew members at the beginning of the solar particle event.

25. The IMM does not decrement non-consumable items and allows all non-consumable items to be

used simultaneously by multiple astronauts (e.g. blood pressure cuff).

## Results

The IMM results for TME, CHI, EVAC and LOCL are presented in the figures and tables below.

### TME Results

Figure 1 shows TME across all DRMs. TME increases in a linear fashion with mission length.

Figure 1: Total Medical Events (TME), All DRMs

Error bars represent the 95% confidence interval. (Shows linear increase from ~40 events for DRM6 to ~320 events for DRM1) 5 09 APRIL 2018

### Mars Propulsion Transit Times Mars Propulsion Transit Times

### CHI Results

CHI is seen in Figure 2. Although CHI declines with longer missions, confidence intervals are overlapping.

Influential conditions for CHI, for DRM 6 (150 days) and DRM1 (1103 days) are seen in Tables 3 and 4.

Figure 2: Crew Health Index (CHI), All DRMs

Error bars represent the 95% confidence interval. (Declines gradually with transit time from ~98% for DRM6 to ~91% for DRM1 with overlapping CIs)

Table 3. Top Fifteen Influential Conditions, Crew Health Index (CHI), DRM6 (150 days)

Rank Scenario Treated Medical Condition Category % Cum. % Contrib . 1 WORST CASE TREATED VISUAL IMPAIRMENT AND/OR MEDICAL 22.11 22.11

### INCREASED INTRACRANIAL PRESSURE

(VIIP)(SPACE ADAPTATION) 2 BEST CASE TREATED VISUAL IMPAIRMENT AND/OR MEDICAL 17.84 39.95

### INCREASED INTRACRANIAL PRESSURE

(VIIP)(SPACE ADAPTATION) 3 WORST CASE TREATED SKIN ABRASION TRAUMA 5.11 45.05 4 BEST CASE TREATED EYE IRRITATION/ABRASION TRAUMA 3.27 48.32 5 WORST CASE TREATED SKIN LACERATION TRAUMA 2.74 51.06 6 WORST CASE TREATED EYE CHEMICAL BURN ENVIRON 2.54 53.60 7 BEST CASE TREATED SKIN RASH MEDICAL 2.42 56.02 8 BEST CASE TREATED SLEEP DISORDER MEDICAL 1.92 57.94 9 BEST CASE TREATED SKIN ABRASION TRAUMA 1.92 59.86 10 WORST CASE TREATED SPACE MOTION SICKNESS (SPACE MEDICAL 1.81 61.67 ADAPTATION) 11 BEST CASE TREATED BAROTRAUMA (EAR/SINUS BLOCK) ENVIRON 1.81 63.48 12 BEST CASE TREATED RESPIRATORY INFECTION MEDICAL 1.71 65.19 13 WORST CASE TREATED HEARING LOSS MEDICAL 1.61 66.80 14 WORST CASE TREATED BACK SPRAIN/STRAIN TRAUMA 1.40 68.20 15 WORST CASE TREATED BAROTRAUMA (EAR/SINUS BLOCK) ENVIRON 1.26 69.46 6 09 APRIL 2018

### Mars Propulsion Transit Times Mars Propulsion Transit Times

Table 4. Top Fifteen Influential Conditions, Crew Health Index (CHI), DRM1 (1,103 days)

Rank Scenario Treated Medical Condition Category % Cum. % Contrib . 1 BEST CASE UNTREATE SKIN RASH MEDICAL 17.01 17.01 D 2 BEST CASE PARTIAL SKIN RASH MEDICAL 6.53 23.54 3 BEST CASE PARTIAL EYE IRRITATION/ABRASION TRAUMA 6.31 29.85 4 BEST CASE PARTIAL EYE CHEMICAL BURN ENVIRON 5.91 35.76 5 WORST CASE TREATED VISUAL IMPAIRMENT AND/OR MEDICAL 5.37 41.12

### INCREASED INTRACRANIAL PRESSURE

(VIIP)(SPACE ADAPTATION) 6 WORST CASE TREATED SKIN ABRASION TRAUMA 4.47 45.59 7 BEST CASE TREATED VISUAL IMPAIRMENT AND/OR MEDICAL 4.16 49.75

### INCREASED INTRACRANIAL PRESSURE

(VIIP)(SPACE ADAPTATION) 8 BEST CASE PARTIAL BACK SPRAIN/STRAIN TRAUMA 2.78 52.52 9 WORST CASE TREATED SKIN LACERATION TRAUMA 2.54 55.06 10 WORST CASE PARTIAL EYE CHEMICAL BURN ENVIRON 2.27 57.33 11 BEST CASE PARTIAL URINARY TRACT INFECTION MEDICAL 2.25 59.58 12 WORST CASE PARTIAL URINARY TRACT INFECTION MEDICAL 2.02 61.59 13 BEST CASE UNTREATE URINARY TRACT INFECTION MEDICAL 2.01 63.60 D 14 WORST CASE TREATED HEARING LOSS MEDICAL 1.86 65.46 15 BEST CASE PARTIAL ALLERGIC REACTION (MILD TO MEDICAL 1.62 67.08 MODERATE)

### EVAC Results

EVAC is seen in Figure 3. EVAC increases with longer missions. Confidence intervals are not overlapping.

Influential conditions for DRM 6 (150 days) and DRM1 (1103 days) are seen in Tables 5 and 6.

Figure 3: Need for One or More Evacuation (EVAC), All DRMs

7 09 APRIL 2018

### Mars Propulsion Transit Times Mars Propulsion Transit Times

Error bars represent the 95% confidence interval. (Increases from ~0.06 for DRM6 to ~0.40 for DRM1 with non- overlapping CIs)

Table 5. Top Fifteen Influential Conditions, Need for Evacuation (EVAC), DRM6 (150 days)

Rank Scenario Treated Medical Condition Category % Cum. % Contrib . 1 WORST CASE TREATED VISUAL IMPAIRMENT AND/OR MEDICAL 31.93 31.93

### INCREASED INTRACRANIAL PRESSURE

(VIIP)(SPACE ADAPTATION) 2 WORST CASE TREATED NEPHROLITHIASIS MEDICAL 7.32 39.26 3 WORST CASE TREATED SMOKE INHALATION ENVIRON 4.10 43.36 4 WORST CASE TREATED SEPSIS MEDICAL 3.81 47.17 5 WORST CASE TREATED DENTAL ABSCESS MEDICAL 3.74 50.91 6 BEST CASE TREATED SMALL BOWEL OBSTRUCTION MEDICAL 2.96 53.87 7 WORST CASE TREATED WRIST FRACTURE TRAUMA 2.28 56.15 8 BEST CASE PARTIAL EYE CHEMICAL BURN ENVIRON 1.99 58.14 9 WORST CASE PARTIAL LOWER EXTREMITY (LE) STRESS TRAUMA 1.86 59.99 FRACTURE 10 WORST CASE PARTIAL HIP/PROXIMAL FEMUR FRACTURE TRAUMA 1.69 61.69 11 WORST CASE TREATED BACK SPRAIN/STRAIN TRAUMA 1.53 63.22 12 BEST CASE TREATED STROKE (CEREBROVASCULAR ACCIDENT) MEDICAL 1.39 64.58 13 BEST CASE TREATED SEIZURES MEDICAL 1.39 65.95 14 WORST CASE TREATED TRAUMATIC HYPOVOLEMIC SHOCK TRAUMA 1.30 67.25 15 WORST CASE TREATED STROKE (CEREBROVASCULAR ACCIDENT) MEDICAL 1.27 68.52

Table 6. Top Fifteen Influential Conditions, Need for Evacuation (EVAC), DRM1 (1,103 days)

Rank Scenario Treated Medical Condition Category % Cum. % Contrib . 1 BEST CASE PARTIAL EYE CHEMICAL BURN ENVIRON 27.84 27.84 8 09 APRIL 2018

### Mars Propulsion Transit Times Mars Propulsion Transit Times

Rank Scenario Treated Medical Condition Category % Cum. % Contrib . MENTAL 2 WORST CASE PARTIAL URINARY TRACT INFECTION MEDICAL 9.82 37.66 3 WORST CASE PARTIAL BACK SPRAIN/STRAIN INJURY/T 6.39 44.05 RAUMA 4 BEST CASE PARTIAL FINGER DISLOCATION INJURY/T 5.29 49.34 RAUMA 5 WORST CASE PARTIAL EYE CHEMICAL BURN ENVIRON 5.09 54.43 MENTAL 6 WORST CASE PARTIAL NEPHROLITHIASIS MEDICAL 2.85 57.29 7 WORST CASE PARTIAL EYE INFECTION MEDICAL 2.44 59.72 8 WORST CASE TREATED VISUAL IMPAIRMENT AND/OR MEDICAL 2.17 61.89

### INCREASED INTRACRANIAL PRESSURE

(VIIP)(SPACE ADAPTATION) 9 WORST CASE PARTIAL EYE IRRITATION/ABRASION INJURY/T 1.64 63.53 RAUMA 10 WORST CASE TREATED SMOKE INHALATION ENVIRON 1.60 65.13 MENTAL 11 WORST CASE PARTIAL NECK SPRAIN/STRAIN INJURY/T 1.52 66.65 RAUMA 12 WORST CASE PARTIAL DENTAL ABSCESS MEDICAL 1.51 68.16 13 WORST CASE PARTIAL ELBOW SPRAIN/STRAIN INJURY/T 1.42 69.58 RAUMA 14 WORST CASE PARTIAL HERPES ZOSTER REACTIVATION MEDICAL 1.26 70.85 (SHINGLES) 15 WORST CASE PARTIAL ANKLE SPRAIN/STRAIN INJURY/T 1.15 72.00 RAUMA

### LOCL Results

LOCL is seen in Figure 4. LOCL increases with longer missions. Confidence intervals are not overlapping.

Influential conditions for LOCL, for DRM 6 (150 days) and DRM1 (1103 days) are seen in Tables 7 and 8. 9 09 APRIL 2018

### Mars Propulsion Transit Times    Mars Propulsion Transit Times

Figure 4: Loss of Crew Life (LOCL), All DRMs

Error bars represent the 95% confidence interval. (Increases from ~0.003 for DRM6 to ~0.022 for DRM1 with non-overlapping CIs)

Table 7. Top Fifteen Influential Conditions, Loss of Crew Life (LOCL), DRM6 (150 days)

Rank  Scenario  Treated  Medical Condition  Category  %  Cum. % Contrib .

| 1  WORST CASE | TREATED | SEPSIS |  | MEDICAL | 18.91  18.91 |
| -------------- | -------- | ------- | --- | -------- | ------------- |

2  WORST CASE  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  TRAUMA  16.81  35.71 3  WORST CASE  TREATED  MEDICATION OVERDOSE/ADVERSE  MEDICAL  13.87  49.58 REACTION 4  WORST CASE  TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  9.24  58.82 5  WORST CASE  TREATED  SMOKE INHALATION  ENVIRON  8.82  67.65

| 6  WORST CASE | TREATED | HEAD INJURY |  | TRAUMA | 5.46  73.11 |
| -------------- | -------- | ------------ | --- | ------- | ------------ |

7  WORST CASE  TREATED  TOXIC EXPOSURE (AMMONIA)  ENVIRON  5.04  78.15

| 8  WORST CASE | TREATED | APPENDICITIS |  | MEDICAL | 5.04  83.19 |
| -------------- | -------- | ------------- | --- | -------- | ------------ |
| 9  WORST CASE | TREATED | CHEST INJURY |  | TRAUMA | 4.62  87.82 |

10  WORST CASE  TREATED  SUDDEN CARDIAC ARREST  MEDICAL  2.52  90.34

| 11  WORST CASE | PARTIAL | SEPSIS |  | MEDICAL | 2.10  92.44 |
| --------------- | -------- | ------------- | --- | -------- | ------------ |
| 12  WORST CASE | PARTIAL | APPENDICITIS |  | MEDICAL | 1.68  94.12 |

13  WORST CASE  TREATED  ACUTE DIVERTICULITIS  MEDICAL  1.26  95.38 14  WORST CASE  TREATED  ABDOMINAL INJURY  TRAUMA  1.26  96.64 15  WORST CASE  TREATED  CHOKING/OBSTRUCTED AIRWAY  MEDICAL  0.42  97.06

Table 8. Top Fifteen Influential Conditions, Loss of Crew Life (LOCL), DRM1 (1,103 days)

Rank  Scenario  Treated  Medical Condition  Category  %  Cum. % Contrib .

| 1  WORST CASE | PARTIAL | SEPSIS |  | MEDICAL | 12.56  12.56 |
| -------------- | -------- | ------- | --- | -------- | --------------- |
|  |  |  | 10 |  | 09 APRIL  2018 |
### Mars Propulsion Transit Times    Mars Propulsion Transit Times

Rank  Scenario  Treated  Medical Condition  Category  %  Cum. % Contrib . 2  WORST CASE  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  TRAUMA  11.72  24.27

| 3  WORST CASE | TREATED | SEPSIS |  | MEDICAL | 11.45  35.73 |
| -------------- | -------- | ------- | --- | -------- | ------------- |

4  WORST CASE  TREATED  MEDICATION OVERDOSE/ADVERSE  MEDICAL  9.92  45.65 REACTION 5  WORST CASE  TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  8.71  54.35 6  WORST CASE  TREATED  SMOKE INHALATION  ENVIRON 8.23  62.59 M

| 7  WORST CASE | TREATED | HEAD INJURY |  | TRAUMA | 5.81  68.39 |
| -------------- | -------- | ------------- | --- | -------- | ------------ |
| 8  WORST CASE | TREATED | CHEST INJURY |  | TRAUMA | 5.70  74.09 |
| 9  WORST CASE | TREATED | APPENDICITIS |  | MEDICAL | 3.64  77.73 |

10  WORST CASE  TREATED  TOXIC EXPOSURE (AMMONIA)  ENVIRON  3.38  81.11 11  WORST CASE  PARTIAL  TRAUMATIC HYPOVOLEMIC SHOCK  TRAUMA  2.85  83.96

| 12  BEST CASE | PARTIAL | APPENDICITIS |  | MEDICAL | 2.16  86.12 |
| -------------- | -------- | ------------- | --- | -------- | ------------ |
| 13  BEST CASE | PARTIAL | SEPSIS |  | MEDICAL | 1.85  87.97 |

14  WORST CASE  TREATED  SUDDEN CARDIAC ARREST  MEDICAL  1.53  89.50 15  WORST CASE  PARTIAL  TOXIC EXPOSURE (AMMONIA)  ENVIRON  1.27  90.77

## Summary

Medical outcomes for round trip transit times for different propulsion systems were determined using the IMM. Results show generally linear relationships between transit time and medical outcomes. Some variations are seen that merit subject matter expert interpretation.

| References |  |  |  |  |  |
| ------------ | --- | --- | --- | --- | --- |

[1] Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114. 2011.

Houston, TX, NASA, Johnson Space Center. Ref Type: Report [2] Integrated Medical Model Project. Integrated Medical Model Software Requirements Specification.

IMM-SFTWR-008. 2017. Houston, Texas, KBRwyle Integrated Science, Technology and Engineering. Ref

- Type: Report

|  |  |  | 11 |  | 09 APRIL  2018 |
| --- | --- | --- | --- | --- | --------------- |
### Mars Propulsion Transit Times    Mars Propulsion Transit Times

[3] Integrated Medical Model Project. Integrated Medical Model version 4 Assumptions and Limitations.

IMM-GEN-300. 2017. Houston, Texas, KBRwyle Integrated Science and Engineering Space Medicine Information Technology. Ref Type: Report [4] NASA-STD-7009: Standard for Models and Simulations (2008). NASA: Washington, DC. [5] ISS Medical Checklist (Med CL), 04 June 2014, NASA Johnson Space Center, Medical Operations Group.

| Appendix A: IMM Status at Time of Service Request Report |  |  |  |  |
| -------------------------------------------------------- | --- | --- | --- | --- |

- Validation status for IMM: IMM V&V Matrix shows full MATLAB validation status for each IMM element.

### Compliance with NASA-Standard-7009 Requirements

### Compliance Category  Number of Requirements

Compliant  36 Compliance Incomplete  5 Not Applicable  5

Current NASA-Standard-7009 Credibility Assessment Score (CAS)

|  | Factor | Sufficiency | Factor Score | Weighted Score |
| --- | ------- | ------------ | ------------- | --------------- |

Threshold

| Verification |  | 4 | 3.7 | 0.28 |
| -------------------------- | --- | --- | ---- | ----- |
| Validation |  | 3 | 3.0 | 0.45 |
| Input Pedigree |  | 3 | 3.0 | 0.53 |
| Results Uncertainty |  | 3 | 3.0 | 0.60 |
| Results Robustness |  | 3 | 3.0 | 0.45 |
| Use History |  | 3 | 3.0 | 0.45 |
| M&S Management |  | 2 | 2.0 | 0.10 |
| People Qualification |  | 4 | 4.0 | 0.20 |
| Overall Credibility Score |  | - | - | 3.06 |
Model & Database Metadata

|  |  | 12 |  | 09 APRIL  2018 |
| --- | --- | --- | --- | --------------- |
### Mars Propulsion Transit Times Mars Propulsion Transit Times

### Item Details

### Additional V&V Information None

- Integrated Medical Evidence Database iMED Lockdown ID: (26), created on (02/21/2017)

(iMED) IMM Version & Platform IMM v4.1 with release 2016a of MATLAB software

### Modifications to Code None

## Appendix B: Medical Conditions in iMED by Category (iMED_20170221)

The following table details all 100 medical conditions included in the iMED database categorized by type. Environmental Conditions (9)

### Condition Name

### Acute Radiation Syndrome

### Altitude Sickness

Barotrauma (ear/sinus block) Burns secondary to Fire

### Decompression Sickness Secondary to EVA

### Eye Chemical Burn

Headache (CO2 induced)

### Smoke Inhalation

- Toxic Exposure: Ammonia

Injury / Trauma Conditions (28) Condition Name (Col 1) Condition Name (Col 2)

### Abdominal Injury Acute Compartment Syndrome

### Ankle Sprain/Strain Back Sprain/Strain

- Chest Injury Dental: Avulsion (tooth loss)

13 09 APRIL 2018

### Mars Propulsion Transit Times Mars Propulsion Transit Times

Condition Name (Col 1) Condition Name (Col 2)

### Elbow Dislocation Elbow Sprain/Strain

Eye Irritation/Abrasion Eye Penetration (foreign body)

### Finger Dislocation Fingernail Delamination Secondary to EVA

### Head Injury Hip Sprain/Strain

### Hip/Proximal Femur Fracture Knee Sprain/Strain

### Lower Extremity Stress Fracture Lumbar Spine Fracture

### Neck Sprain/Strain Neurogenic Shock

### Paresthesias Secondary to EVA Shoulder Dislocation

### Shoulder Sprain/Strain Skin Abrasion

### Skin Laceration Traumatic Hypovolemic Shock

### Wrist Fracture Wrist Sprain/Strain

Medical Illness Conditions (63) Condition Name (Col 1) Condition Name (Col 2)

### Abdominal Wall Hernia Abnormal Uterine Bleeding

### Acute Angle-Closure Glaucoma Acute Arthritis

### Acute Cholecystitis/Biliary Colic Acute Diverticulitis

### Acute Pancreatitis Acute Prostatitis

Acute Sinusitis Allergic Reaction (mild to moderate)

### Anaphylaxis Angina/Myocardial Infarction

### Anxiety Appendicitis

Atrial Fibrillation/Atrial Flutter Back Pain (space adaptation)

Behavioral Emergency Cardiogenic Shock Secondary to Myocardial infarction Choking/Obstructed Airway Constipation (space adaptation)

- Dental: Exposed Pulp Dental Caries

- Dental: Abscess Dental: Crown Loss

- Dental: Filling Loss Depression

14 09 APRIL 2018

### Mars Propulsion Transit Times Mars Propulsion Transit Times

Condition Name (Col 1) Condition Name (Col 2)

### Diarrhea Eye Corneal Ulcer

### Eye Infection Gastroenteritis

Headache (Late) Headache (space adaptation)

### Hearing Loss Hemorrhoids

Herpes Zoster Reactivation (shingles) Hypertension

### Indigestion Influenza

Insomnia (space adaptation) Medication Overdose/Adverse Reaction Mouth Ulcer Nasal Congestion (space adaptation)

Nephrolithiasis Nose bleed (space adaptation)

### Otitis Externa Otitis Media

### Pharyngitis Respiratory Infection

### Retinal Detachment Seizures

### Sepsis Skin Infection

### Skin Rash Sleep Disorder

Small Bowel Obstruction Space Motion Sickness (space adaptation)

Stroke (Cerebrovascular Accident) Sudden Cardiac Arrest Urinary Incontinence (space adaption) Urinary Retention (space adaptation)

### Urinary Tract Infection Vaginal Yeast Infection

### Visual Impairment and Increased Intracranial Pressure

(VIIP) (space adaptation) 15 09 APRIL 2018

---

## Source metadata

```yaml
source_filename: "mars-propulsion-transit-times.pdf"
source_folder: "Mission Risk Reports/Mars"
source_url: "https://drive.google.com/file/d/1Sr8rfTibVGCqzH5N9VndGXsdwn3XkP1Y/view"
source_drive_id: "1Sr8rfTibVGCqzH5N9VndGXsdwn3XkP1Y"
source_sha256: 24ae354af04ec6fddbc46aca85300b478b37ed439030adf6552c92ed227f29a8
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 15
ocr_performed: false
```
