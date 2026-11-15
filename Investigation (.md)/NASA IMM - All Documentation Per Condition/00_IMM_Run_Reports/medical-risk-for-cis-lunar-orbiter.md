# Medical Risk For Cis Lunar Orbiter

[View original PDF](https://drive.google.com/file/d/1eWBJPQXcuPXUU6qDx1ONEJK-ahbv6c-G/view) · **26 pages**

**Collection:** NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Executive Summary](#executive-summary)
- [Background](#background)
- [Methods](#methods)
- [Results](#results)
- [BEST CASE](#best-case)
- [WORST CASE](#worst-case)
- [Appendix A: IMM Status at Time of Service Request Report](#appendix-a-imm-status-at-time-of-service-request-report)
- [Appendix B: Medical Conditions in iMED by Category (iMED_20151118)](#appendix-b-medical-conditions-in-imed-by-category-imed_20151118)
- [Appendix C: Report References](#appendix-c-report-references)

---

### IMM Service Request Report S-20171016-395

## Executive Summary

The IMM v4.1 with Lockdown ID #6 (which includes input from spaceflight data through STS mission 114 and ISS Expedition 13) was used to simulate two Gateway missions, a 4 crew-16 day mission and a 4 crew-42 day mission, to provide a medical risk assessment. The fully treated timelines are presented for both simulated missions. For the 4 crew-16 day mission the IMM forecasted a 0.253% probability of EVAC and a 0.025% probability of LOCL. For the 4 crew-42 day mission, a 1.116% probability of EVAC and a 0.075% probability of LOCL were forecasted. The frequency of EVAC and LOCL over the entire simulations, lists of influential conditions for EVAC and LOCL, the frequency and probability of occurrence for each medical condition are also presented in this report.

## Background

The IMM simulates medical events during space flight missions in order to estimate the medical risk for crewmembers during a mission via the main IMM outputs, CHI and probability of EVAC and LOCL. The IMM is a stochastic model that uses Monte Carlo methodology to simulate missions.

The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile. Next, medical events, mitigations, and outcomes during the space flight mission are randomly generated based on pre-defined values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes are the probabilities of EVAC and LOCL. The IMM is most useful for comparing risks among multiple mission profiles based on probable events, resource availability, and the ability of the crew to diagnose and treat medical conditions. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profile illustrated in Table 1.

The outcomes of certain IMM medical conditions are sex-specific and influenced by crew medical history. Pre- existing conditions that influence IMM outcomes include: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of any prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data. The number of extravehicular activity (EVA) excursions influences the probability of EVA-dependent medical conditions. 1 30 JANUARY 2018

|  | IMM Service Request Report |  |  |  |  | S-20171016-395 |  |
| --- | --------------------------- | --- | --- | --- | --- | --------------- | --- |
Table 1: Crew Profile

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |

### Prior Abdominal

|  |  | Sex | CAC | Crowns | Contacts |  | EVA |
| --- | --- | ---- | ---- | ------- | --------- | --- | ---- |

Surgery

|  |  |  |  |  | No |  | No |
| --- | ------- | ------- | ---- | ---- | ---- | ---- | --- |
|  | Crew 1 | Male | Yes | Yes |  | No |  |
|  |  |  |  |  | Yes |  | No |
|  | Crew 2 | Male | No | No |  | Yes |  |
|  | Crew 3 | Female | No | Yes | No | No | No |
|  | Crew 4 | Female | No | No | Yes | No | No |
### Medical Conditions and Resources

The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data from the Integrated Medical Evidence Database (iMED). For each condition, the percentage of “best case” and “worst case” scenarios are also specified, as well as a defined set of medical resources that is required to diagnose and treat the medical condition.  The medical resources listed for each condition are contained in a condition resources table in iMED. This table details the resources and quantity necessary for treatment in both the best and worst case scenario for each condition.  The model input parameters that are used to dictate the occurrence and treatment of each condition are contained in a parameters table in iMED. For instance, the data in this table would be used to determine which crewmember is eligible for which condition, whether the condition is best or worst case, and the effects of being best or worst case. All medical condition data inputs to the model are pulled from the iMED by a SQL query written in MATLAB scripts.  In-flight medical treatment is assumed to follow a specified protocol or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS (i.e. the ISS medical capabilities (MedCap).

### Main Outcomes

- The IMM primary medical outcomes include: total medical events (TME), crew health index (CHI), probability of

Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources.

CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [3].

CHI = (1- (QAMTL ÷ Mission Length)) x 100

For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end- state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria is met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available.

|  |  |  |  |  | 2 |  | 30 JANUARY 2018 |
| --- | --- | --- | --- | --- | --- | --- | ---------------- |
### IMM Service Request Report S-20171016-395

LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In the current version of the IMM, it is possible for crew members to be assigned more than one endstate of EVAC and/or LOCL. These assumptions should result in slightly high (conservative) IMM forecasts for the occurrence of EVAC and LOCL. Determining the probability of EVAC and LOCL for the given DRMs is one of the main objectives of this service request.

Required resources for treatment are tracked for each DRM. The number of each resource that is needed from the given available resource quantities to treat all medical events is recorded. If more of any particular resource is used than is available, then that is recorded as a “depleted” resource for the medical capabilities scenario. In IMM version 4, any other events that require a “depleted” resource go partially treated if there are available alternate resources in the medical capabilities scenario. (If there are no alternate resources available, those conditions go untreated.) In the fully treated scenario, all events go treated. The initial quantities for the available resources are baselined to the ISS environment with 6 month resupply. This service request is focused on a fully treated scenario.

### Modeling Approach

A simulation was run for a 16 day and a 42 mission using the crew profile shown above. One hundred thousand (100,000) trials were run for each DRM, where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meets convergence criteria. Convergence criteria are met when there is less than, or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last two - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport.

- IMM outcomes were determined for the DRMs under three scenarios: 1) ISS MedCap scenario where all

conditions are treated or untreated based on the available essential resources of the ISS MedCap using an all or nothing methodology; 2) All Treated scenario where supplies are limitless and all conditions are fully treated; and

3) Untreated scenario where none of the conditions are treated. Total medical events (TME) and CHI are

calculated as means, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% confidence intervals (CI) for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, only the EVAC and LOCL results for the fully treated capabilities timeline are presented as requested.

Key Assumptions and Limitations [4] of IMM Version 4

1. Version 4 assumes that all non-SA and non-extravehicular activity (EVA) related conditions have a

uniform likelihood of occurring throughout the mission duration. Space Adaptation Syndrome conditions occur in the first 5 days of the mission, with a peak occurrence at 48 hours.

2. Version 4 assumes that EVA-related medical conditions occur at the start time of the EVA.

3. Version 4 assumes that individuals cannot get the same condition for which they are currently being

treated (i.e. during Clinical Phase (CP) I and II) with one exception: crew members may have concurrent occurrences of EVA-linked medical conditions with the exception of decompression sickness. 3 30 JANUARY 2018

### IMM Service Request Report S-20171016-395

4. EVAC LOCL is generated for each medical event, and then the timing of the EVAC or LOCL is

generated according to a specified distribution.

5. Version 4 assumes that individuals are no longer at risk for further conditions once their status changes to

either EVAC or LOCL. From the start time of the EVAC or LOCL, the functional impairment of the crew member is assumed to be 100%.

6. When the status of a crew member changes to EVAC, only one crew member is evacuated.

7. The IMM assumes that, per crew member, the first condition requiring a specific therapy utilizes all

resources required for treating that condition before a second condition has access to those resources.

8. Most medical conditions, with exceptions including acute radiation syndrome and EVA-linked

conditions, occur independently of the occurrence of mission events and other medical conditions.

Currently there is no correlation or association within or between crew members for most medical conditions.

9. The model assumes another crew member is available to act as caregiver but does not track the time

impact of providing this care.

10. Medical procedures are accurately followed and successful; no mistakes occur in executing medical

procedures.

11. Crew medical skill level and preflight/inflight training is not modeled.

12. All diagnoses are 100% accurate.

13. All pharmaceuticals maintain maximum efficacy.

14. All medical events receive the appropriate treatment.

15. All medical events respond to the treatment as expected terrestrially.

16. All medical equipment is 100% reliable.

17. For each of the medical conditions specified in iMED, all crew members with the same characteristics

(sex, presence of CAC, crowns, contacts, history of abdominal surgery) have the same likelihood distribution of experiencing the condition.

18. All crew members are assumed to have all intrinsic body parts intact (i.e. appendix, gall bladder, and

uterus or prostate, etc.).

19. IMM assumes ISS power, potable water and oxygen resources are always available in unlimited supply.

20. No Russian medical capabilities aboard the ISS are available to US crew members.

21. Medical capabilities do not include the use of personal crew carry-on items contained in the Individual

Medical Accessories Kit, (IMAK).

22. If a crew member is undergoing treatment for concurrent medical conditions requiring the same

consumable resource, the crew member will only utilize resources at the level required by the condition that requires the most resources.

23. If the primary resource required for treating a medical condition is unavailable, one or more alternative

resources are considered, if appropriate. One example might be using aspirin in place of Tylenol.

24. Total quantities of a consumable medical resource requiring a daily dose will be adjusted if a dosage

schedule runs past the end of the mission.

25. If a solar particle event causes acute radiation sickness in one or more crew members, IMM assumes the

condition begins identically in all affected crew members at the beginning of the solar particle event.

26. The IMM does not decrement non-consumable items and allows all non-consumable items to be used

simultaneously by multiple astronauts.

## Results

The IMM simulation results for EVAC and LOCL for the simulated missions are presented in the tables below.

The simulation results in the tables are for the fully treated timelines. Table 2 contains the overall probabilities of EVAC and LOCL and by medical category. Table 3 contains the frequency for the number EVAC and LOCL over all 100,000 trials. Tables 4-7 show the lists of top ten influential conditions for EVAC and LOCL for both simulated missions. Tables 8-11 contain the frequency and probability of occurring in both simulated missions 4 30 JANUARY 2018

|  | IMM Service Request Report |  |  |  |  | S-20171016-395 |  |
| --- | --------------------------- | --- | --- | --- | --- | --------------- | --- |
Table 2: Probability of at least one evacuation (EVAC) and loss of crew life (LOCL), by condition category with

95% confidence intervals (CI).

|  |  |  |  | EVAC |  |  | LOCL |
| --- | ---------- | ---------------- | ---------------- | --------------- | ------- | ---------------- | --------------- |
|  |  |  | Probability (%) |  | 95% CI | Probability (%) | 95% CI |
|  |  |  |  | (0.222, 0.286) |  |  | (0.017, 0.037) |
|  |  | All Conditions | 0.253 |  |  | 0.025 |  |
|  |  |  |  | (0.150, 0.204) |  |  | (0.008, 0.023) |
|  | 4 Crew 16 | Medical Illness | 0.174 |  |  | 0.014 |  |
|  | Days |  |  | (0.040, 0.071) |  |  | (0.004, 0.017) |
|  |  | Injury/Trauma | 0.053 |  |  | 0.008 |  |
|  |  |  |  | (0.017, 0.037) |  |  | (0.001, 0.009) |
|  |  | Environmental | 0.026 |  |  | 0.003 |  |
All Conditions  1.116  (1.052, 1.180)  0.075  (0.058, 0.094) 4 Crew 42  Medical Illness  0.924  (0.865, 0.979)  0.033  (0.023, 0.046)

Days

|  |  | Injury/Trauma | 0.139 | (0.118, 0.161) |  | 0.033 | (0.023,0.046) |
| --- | --- | -------------- | ------ | --------------- | --- | ------ | -------------- |
|  |  | Environmental | 0.055 | (0.05, 0.08) |  | 0.009 | (0.004, 0.016) |
| --- | --- | -------------- | ------ | ------------- | --- | ------ | --------------- |
Table 3: Frequency and percent of EVAC and LOCL.

|  |  |  |  | EVAC |  | LOCL |  |
| --- | --- | ------------ | ---------- | ----- | -------- | ---------- | -------- |
|  |  | Event Count | Frequency |  | Percent | Frequency | Percent |
|  |  | 0 | 99747 |  | 97.747 | 99975 | 99.975 |

4 Crew 16

|  |  | 1 | 253 |  | 0.253 | 25 | 0.025 |
| --- | --- | --- | ---- | --- | ------ | --- | ------ |

Days

|  |  | 2 | 0 |  | 0 | 0 | 0 |
| --- | --- | --- | ------ | --- | ------- | ------ | ------- |
|  |  | 0 | 98884 |  | 98.884 | 99925 | 99.925 |

4 Crew 42

|  |  | 1 | 1110 |  | 1.110 | 75 | 0.075 |
| --- | --- | --- | ----- | --- | ------ | --- | ------ |

Days

|  |  | 2 | 6 |  | 0.006 | 0 | 0 |
| --- | --- | --- | --- | --- | ------ | --- | ---------------- |
|  |  |  |  | 5 |  |  | 30 JANUARY 2018 |
### IMM Service Request Report S-20171016-395

Table 4: 4 Crew-16 Days fully treated top ten influential conditions for EVAC

### Total Cumulative

### Scenario Treated Medical Condition Category Percent Contribution

### EVAC Percent

- WORST CASE TREATED DENTAL: ABSCESS MEDICAL 38 15.01976285 15.01976285

WORST CASE TREATED NEPHROLITHIASIS MEDICAL 26 10.27667984 25.29644269 WORST CASE TREATED SMOKE INHALATION ENVIRONMENTAL 16 6.324110672 31.62055336 BEST CASE TREATED SMALL BOWEL OBSTRUCTION MEDICAL 15 5.928853755 37.54940711 WORST CASE TREATED WRIST FRACTURE INJURY/TRAUMA 13 5.138339921 42.68774704 WORST CASE TREATED SEPSIS MEDICAL 13 5.138339921 47.82608696 WORST CASE TREATED URINARY RETENTION (SPACE ADAPTATION) MEDICAL 8 3.162055336 50.98814229 WORST CASE TREATED 7 2.766798419 53.75494071

### BACK SPRAIN/STRAIN INJURY/TRAUMA

BEST CASE TREATED STROKE (CEREBROVASCULAR ACCIDENT) MEDICAL 6 2.371541502 56.12648221 WORST CASE TREATED ACUTE SINUSITIS MEDICAL 5 1.976284585 58.1027668

Table 5: 4 Crew-42 Days fully treated top ten influential conditions for EVAC

### Total Percent

### Scenario Treated Medical Condition Category Cumulative Percent

### LOCL Contribution

WORST CASE TREATED VISUAL IMPAIRMENT AND/OR MEDICAL 507 45.18716578 45.18716578

### INCREASED INTRACRANIAL

PRESSURE (VIIP)(SPACE ADAPTATION)

- WORST CASE TREATED DENTAL: ABSCESS MEDICAL 111 9.893048128 55.0802139

WORST CASE TREATED NEPHROLITHIASIS MEDICAL 75 6.684491979 61.76470588 WORST CASE TREATED SEPSIS MEDICAL 31 2.762923351 64.52762923 WORST CASE TREATED SMOKE INHALATION ENVIRONMENTAL 30 2.673796791 67.20142602 WORST CASE TREATED BACK SPRAIN/STRAIN INJURY/TRAUMA 27 2.406417112 69.60784314 BEST CASE TREATED SMALL BOWEL OBSTRUCTION MEDICAL 20 1.782531194 71.39037433 WORST CASE TREATED TRAUMATIC HYPOVOLEMIC INJURY/TRAUMA 17 1.515151515 72.90552585 SHOCK WORST CASE TREATED HIP/PROXIMAL FEMUR FRACTURE INJURY/TRAUMA 16 1.426024955 74.3315508 WORST CASE TREATED URINARY RETENTION (SPACE MEDICAL 15 1.336898396 75.6684492 ADAPTATION) 6 30 JANUARY 2018

| IMM Service Request Report |  |  |  | S-20171016-395 |  |  |
| --------------------------- | --- | --- | --- | --------------- | --- | --- |
Table 6: 4 Crew-16 Days fully treated top ten influential conditions for LOCL

|  |  |  |  | Percent |  | Cumulative |
| ----------- | --------------------------- | --------- | ----------- | ------------- | --- | ----------- |
| Scenario | Treated  Medical Condition | Category | Total LOCL |  |  |  |
|  |  |  |  | Contribution |  | Percent |
| WORST CASE | TREATED  SEPSIS | MEDICAL |  | 6 | 24 | 0.24 |

WORST CASE  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  5  20  0.44 WORST CASE  TREATED  MEDICATION OVERDOSE/ADVERSE  MEDICAL  4  16  0.6 REACTION WORST CASE  TREATED  STROKE (CEREBROVASCULAR  MEDICAL  2  8  0.68 ACCIDENT)

- WORST CASE  TREATED  TOXIC EXPOSURE: AMMONIA  ENVIRONMENTAL  2  8  0.76

WORST CASE  TREATED  SMOKE INHALATION  ENVIRONMENTAL  1  4  0.8

| WORST CASE | TREATED  HEAD INJURY | INJURY/TRAUMA |  | 1 | 4 | 0.84 |
| ----------- | ---------------------- | -------------- | --- | --- | --- | ----- |
| WORST CASE | TREATED  APPENDICITIS | MEDICAL |  | 1 | 4 | 0.88 |

WORST CASE  TREATED  CHEST INJURY  INJURY/TRAUMA  1  4  0.92 WORST CASE  TREATED  ABDOMINAL INJURY  INJURY/TRAUMA  1  4  0.96

Table 7: 4 Crew-42 Days fully treated top ten influential conditions for LOCL

|  |  |  |  |  | Percent | Cumulative |
| --------- | --------------------------- | --- | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated  Medical Condition |  | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |

WORST CASE  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  17  22.66666667  0.226666667 WORST CASE  TREATED  MEDICATION OVERDOSE/ADVERSE  MEDICAL  12  16  0.386666667 REACTION

| WORST CASE | TREATED  SEPSIS |  | MEDICAL | 12 | 16 | 0.546666667 |
| ----------- | ---------------- | --- | -------- | --- | --- | ------------ |

WORST CASE  TREATED  CHEST INJURY  INJURY/TRAUMA  8  10.66666667  0.653333333 WORST CASE  TREATED  HEAD INJURY  INJURY/TRAUMA  6  8  0.733333333 WORST CASE  TREATED  SMOKE INHALATION  ENVIRONMENTAL  5  6.666666667  0.8 WORST CASE  TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  5  6.666666667  0.866666667

- WORST CASE  TREATED  TOXIC EXPOSURE: AMMONIA  ENVIRONMENTAL  4  5.333333333  0.92

| WORST CASE | TREATED  APPENDICITIS |  | MEDICAL | 3 | 4 | 0.96 |
| ----------- | ---------------------- | --- | -------- | --- | --- | ----- |

WORST CASE  TREATED  ABDOMINAL INJURY  INJURY/TRAUMA  2  2.666666667  0.986666667

|  |  | 7 |  |  | 30 JANUARY 2018 |  |
| --- | --- | --- | --- | --- | ---------------- | --- |
### IMM Service Request Report  S-20171016-395

Table 8: 4 crew-16 days frequency of each condition over all 100,000 trials

|  | Medical Condition |  | Scenario | Events |
| ------------------------------------- | ------------------ | --- | ----------- | ---------------- |
| ABDOMINAL INJURY |  |  | BEST CASE | 1 |
| ABDOMINAL INJURY |  |  | WORST CASE | 2 |
| ABDOMINAL WALL HERNIA |  |  | BEST CASE | 11 |
| ABDOMINAL WALL HERNIA |  |  | WORST CASE | 0 |
| ABNORMAL UTERINE BLEEDING |  |  | BEST CASE | 429 |
| ABNORMAL UTERINE BLEEDING |  |  | WORST CASE | 9 |
| ACUTE ANGLE-CLOSURE GLAUCOMA |  |  | BEST CASE | 1 |
| ACUTE ANGLE-CLOSURE GLAUCOMA |  |  | WORST CASE | 0 |
| ACUTE ARTHRITIS |  |  | BEST CASE | 47 |
| ACUTE ARTHRITIS |  |  | WORST CASE | 0 |
| ACUTE CHOLECYSTITIS/BILIARY COLIC |  |  | BEST CASE | 16 |
| ACUTE CHOLECYSTITIS/BILIARY COLIC |  |  | WORST CASE | 2 |
| ACUTE COMPARTMENT SYNDROME |  |  | BEST CASE | 0 |
| ACUTE COMPARTMENT SYNDROME |  |  | WORST CASE | 0 |
| ACUTE DIVERTICULITIS |  |  | BEST CASE | 10 |
| ACUTE DIVERTICULITIS |  |  | WORST CASE | 5 |
| ACUTE PANCREATITIS |  |  | BEST CASE | 6 |
| ACUTE PANCREATITIS |  |  | WORST CASE | 0 |
| ACUTE PROSTATITIS |  |  | BEST CASE | 28 |
| ACUTE PROSTATITIS |  |  | WORST CASE | 2 |
| ACUTE RADIATION SYNDROME |  |  | BEST CASE | 44 |
| ACUTE RADIATION SYNDROME |  |  | WORST CASE | 1 |
| ACUTE SINUSITIS |  |  | BEST CASE | 3634 |
| ACUTE SINUSITIS |  |  | WORST CASE | 270 |
| ALLERGIC REACTION (MILD TO MODERATE) |  |  | BEST CASE | 6720 |
| ALLERGIC REACTION (MILD TO MODERATE) |  |  | WORST CASE | 279 |
| ALTITUDE SICKNESS |  |  | BEST CASE | 2 |
| ALTITUDE SICKNESS |  |  | WORST CASE | 0 |
| ANAPHYLAXIS |  |  | BEST CASE | 6 |
| ANAPHYLAXIS |  |  | WORST CASE | 0 |
| ANGINA/MYOCARDIAL INFARCTION |  |  | BEST CASE | 6 |
| ANGINA/MYOCARDIAL INFARCTION |  |  | WORST CASE | 1 |
| ANKLE SPRAIN/STRAIN |  |  | BEST CASE | 7064 |
| ANKLE SPRAIN/STRAIN |  |  | WORST CASE | 135 |
| ANXIETY |  |  | BEST CASE | 72 |
| ANXIETY |  |  | WORST CASE | 4 |
| APPENDICITIS |  |  | BEST CASE | 12 |
| APPENDICITIS |  |  | WORST CASE | 3 |
| ATRIAL FIBRILLATION/ ATRIAL FLUTTER |  |  | BEST CASE | 9 |
| ATRIAL FIBRILLATION/ ATRIAL FLUTTER |  |  | WORST CASE | 5 |
| BACK PAIN (SPACE ADAPTATION) |  |  | BEST CASE | 206731 |
|  |  | 8 |  | 30 JANUARY 2018 |
### IMM Service Request Report  S-20171016-395

| BACK PAIN (SPACE ADAPTATION) |  | WORST CASE | 3175 |
| ----------------------------- | --- | ----------- | ------ |
| BACK SPRAIN/STRAIN |  | BEST CASE | 19910 |
| BACK SPRAIN/STRAIN |  | WORST CASE | 387 |
| BAROTRAUMA (EAR/SINUS BLOCK) |  | BEST CASE | 19589 |
| BAROTRAUMA (EAR/SINUS BLOCK) |  | WORST CASE | 325 |
| BEHAVIORAL EMERGENCY |  | BEST CASE | 0 |
| BEHAVIORAL EMERGENCY |  | WORST CASE | 0 |
| BURNS SECONDARY TO FIRE |  | BEST CASE | 92 |
| BURNS SECONDARY TO FIRE |  | WORST CASE | 0 |

CARDIOGENIC SHOCK SECONDARY TO MYOCARDIAL INFARCTION  BEST CASE  0 CARDIOGENIC SHOCK SECONDARY TO MYOCARDIAL INFARCTION  WORST CASE  0

| CHEST INJURY |  | BEST CASE | 0 |
| -------------------------------- | --- | ----------- | ------ |
| CHEST INJURY |  | WORST CASE | 5 |
| CHOKING/OBSTRUCTED AIRWAY |  | BEST CASE | 1859 |
| CHOKING/OBSTRUCTED AIRWAY |  | WORST CASE | 11 |
| CONSTIPATION (SPACE ADAPTATION) |  | BEST CASE | 67990 |
| CONSTIPATION (SPACE ADAPTATION) |  | WORST CASE | 342 |

DECOMPRESSION SICKNESS SECONDARY TO EXTRAVEHICULAR ACTIVITY  BEST CASE  0 DECOMPRESSION SICKNESS SECONDARY TO EXTRAVEHICULAR ACTIVITY  WORST CASE  0

| DENTAL : EXPOSED PULP |  | BEST CASE | 274 |
| ------------------------------ | --- | ----------- | ---------------- |
| DENTAL : EXPOSED PULP |  | WORST CASE | 67 |
| DENTAL CARIES |  | BEST CASE | 3319 |
| DENTAL CARIES |  | WORST CASE | 1974 |
| DENTAL: ABSCESS |  | BEST CASE | 312 |
| DENTAL: ABSCESS |  | WORST CASE | 91 |
| DENTAL: AVULSION (TOOTH LOSS) |  | BEST CASE | 46 |
| DENTAL: AVULSION (TOOTH LOSS) |  | WORST CASE | 6 |
| DENTAL: CROWN LOSS |  | BEST CASE | 45 |
| DENTAL: CROWN LOSS |  | WORST CASE | 5 |
| DENTAL: FILLING LOSS |  | BEST CASE | 85 |
| DENTAL: FILLING LOSS |  | WORST CASE | 8 |
| DEPRESSION |  | BEST CASE | 54 |
| DEPRESSION |  | WORST CASE | 1 |
| DIARRHEA |  | BEST CASE | 20895 |
| DIARRHEA |  | WORST CASE | 347 |
| ELBOW DISLOCATION |  | BEST CASE | 0 |
| ELBOW DISLOCATION |  | WORST CASE | 0 |
| ELBOW SPRAIN/STRAIN |  | BEST CASE | 7814 |
| ELBOW SPRAIN/STRAIN |  | WORST CASE | 164 |
| EYE CHEMICAL BURN |  | BEST CASE | 3619 |
| EYE CHEMICAL BURN |  | WORST CASE | 302 |
| EYE CORNEAL ULCER |  | BEST CASE | 17 |
| EYE CORNEAL ULCER |  | WORST CASE | 0 |
| EYE INFECTION |  | BEST CASE | 2984 |
|  | 9 |  | 30 JANUARY 2018 |
### IMM Service Request Report  S-20171016-395

| EYE INFECTION |  | WORST CASE | 280 |
| ------------------------------- | --- | ----------- | ------ |
| EYE IRRITATION/ABRASION |  | BEST CASE | 44807 |
| EYE IRRITATION/ABRASION |  | WORST CASE | 245 |
| EYE PENETRATION (FOREIGN BODY) |  | BEST CASE | 1 |
| EYE PENETRATION (FOREIGN BODY) |  | WORST CASE | 0 |
| FINGER DISLOCATION |  | BEST CASE | 613 |
| FINGER DISLOCATION |  | WORST CASE | 0 |

FINGERNAIL DELAMINATION SECONDARY TO EXTRAVEHICULAR ACTIVITY  BEST CASE  0 FINGERNAIL DELAMINATION SECONDARY TO EXTRAVEHICULAR ACTIVITY  WORST CASE  0

| GASTROENTERITIS |  | BEST CASE | 2373 |
| -------------------------------------- | --- | ----------- | ---------------- |
| GASTROENTERITIS |  | WORST CASE | 206 |
| HEAD INJURY |  | BEST CASE | 2 |
| HEAD INJURY |  | WORST CASE | 4 |
| HEADACHE (CO2 INDUCED) |  | BEST CASE | 12511 |
| HEADACHE (CO2 INDUCED) |  | WORST CASE | 326 |
| HEADACHE (LATE) |  | BEST CASE | 30922 |
| HEADACHE (LATE) |  | WORST CASE | 319 |
| HEADACHE (SPACE ADAPTATION) |  | BEST CASE | 132026 |
| HEADACHE (SPACE ADAPTATION) |  | WORST CASE | 8444 |
| HEARING LOSS |  | BEST CASE | 2142 |
| HEARING LOSS |  | WORST CASE | 1287 |
| HEMORRHOIDS |  | BEST CASE | 1319 |
| HEMORRHOIDS |  | WORST CASE | 10 |
| HERPES ZOSTER REACTIVATION (SHINGLES) |  | BEST CASE | 546 |
| HERPES ZOSTER REACTIVATION (SHINGLES) |  | WORST CASE | 103 |
| HIP SPRAIN/STRAIN |  | BEST CASE | 2578 |
| HIP SPRAIN/STRAIN |  | WORST CASE | 73 |
| HIP/PROXIMAL FEMUR FRACTURE |  | BEST CASE | 0 |
| HIP/PROXIMAL FEMUR FRACTURE |  | WORST CASE | 4 |
| HYPERTENSION |  | BEST CASE | 106 |
| HYPERTENSION |  | WORST CASE | 8 |
| INDIGESTION |  | BEST CASE | 3616 |
| INDIGESTION |  | WORST CASE | 262 |
| INFLUENZA |  | BEST CASE | 509 |
| INFLUENZA |  | WORST CASE | 163 |
| INSOMNIA (SPACE ADAPTATION) |  | BEST CASE | 179578 |
| INSOMNIA (SPACE ADAPTATION) |  | WORST CASE | 929 |
| KNEE SPRAIN/STRAIN |  | BEST CASE | 4646 |
| KNEE SPRAIN/STRAIN |  | WORST CASE | 92 |
| LOWER EXTREMITY (LE) STRESS FRACTURE |  | BEST CASE | 846 |
| LOWER EXTREMITY (LE) STRESS FRACTURE |  | WORST CASE | 115 |
| LUMBAR SPINE FRACTURE |  | BEST CASE | 2 |
| LUMBAR SPINE FRACTURE |  | WORST CASE | 1 |
| MEDICATION OVERDOSE/ADVERSE REACTION |  | BEST CASE | 1300 |
|  | 10 |  | 30 JANUARY 2018 |
### IMM Service Request Report  S-20171016-395

| MEDICATION OVERDOSE/ADVERSE REACTION |  | WORST CASE | 11 |
| ------------------------------------- | --- | ----------- | ------- |
| MOUTH ULCER |  | BEST CASE | 5649 |
| MOUTH ULCER |  | WORST CASE | 322 |
| NASAL CONGESTION (SPACE ADAPTATION) |  | BEST CASE | 233148 |
| NASAL CONGESTION (SPACE ADAPTATION) |  | WORST CASE | 1122 |
| NECK SPRAIN/STRAIN |  | BEST CASE | 5774 |
| NECK SPRAIN/STRAIN |  | WORST CASE | 128 |
| NEPHROLITHIASIS |  | BEST CASE | 34 |
| NEPHROLITHIASIS |  | WORST CASE | 26 |
| NEUROGENIC SHOCK |  | BEST CASE | 0 |
| NEUROGENIC SHOCK |  | WORST CASE | 0 |
| NOSE BLEED (SPACE ADAPTATION) |  | BEST CASE | 3932 |
| NOSE BLEED (SPACE ADAPTATION) |  | WORST CASE | 138 |
| OTITIS EXTERNA |  | BEST CASE | 1868 |
| OTITIS EXTERNA |  | WORST CASE | 30 |
| OTITIS MEDIA |  | BEST CASE | 1728 |
| OTITIS MEDIA |  | WORST CASE | 178 |

PARESTHESIAS SECONDARY TO EXTRAVEHICULAR ACTIVITY  BEST CASE  0 PARESTHESIAS SECONDARY TO EXTRAVEHICULAR ACTIVITY  WORST CASE  0

| PHARYNGITIS |  | BEST CASE | 6753 |
| ------------------------ | --- | ----------- | ---------------- |
| PHARYNGITIS |  | WORST CASE | 289 |
| RESPIRATORY INFECTION |  | BEST CASE | 20679 |
| RESPIRATORY INFECTION |  | WORST CASE | 303 |
| RETINAL DETACHMENT |  | BEST CASE | 0 |
| RETINAL DETACHMENT |  | WORST CASE | 2 |
| SEIZURES |  | BEST CASE | 2 |
| SEIZURES |  | WORST CASE | 0 |
| SEPSIS |  | BEST CASE | 37 |
| SEPSIS |  | WORST CASE | 13 |
| SHOULDER DISLOCATION |  | BEST CASE | 0 |
| SHOULDER DISLOCATION |  | WORST CASE | 0 |
| SHOULDER SPRAIN/STRAIN |  | BEST CASE | 14253 |
| SHOULDER SPRAIN/STRAIN |  | WORST CASE | 298 |
| SKIN ABRASION |  | BEST CASE | 57166 |
| SKIN ABRASION |  | WORST CASE | 3398 |
| SKIN INFECTION |  | BEST CASE | 7987 |
| SKIN INFECTION |  | WORST CASE | 277 |
| SKIN LACERATION |  | BEST CASE | 160 |
| SKIN LACERATION |  | WORST CASE | 485 |
| SKIN RASH |  | BEST CASE | 60185 |
| SKIN RASH |  | WORST CASE | 292 |
| SLEEP DISORDER |  | BEST CASE | 84818 |
| SLEEP DISORDER |  | WORST CASE | 465 |
| SMALL BOWEL OBSTRUCTION |  | BEST CASE | 28 |
|  | 11 |  | 30 JANUARY 2018 |
### IMM Service Request Report  S-20171016-395

| SMALL BOWEL OBSTRUCTION |  | WORST CASE | 2 |
| ----------------------------------------- | --- | ----------- | ------- |
| SMOKE INHALATION |  | BEST CASE | 253 |
| SMOKE INHALATION |  | WORST CASE | 37 |
| SPACE MOTION SICKNESS (SPACE ADAPTATION) |  | BEST CASE | 247507 |
| SPACE MOTION SICKNESS (SPACE ADAPTATION) |  | WORST CASE | 43774 |
| STROKE (CEREBROVASCULAR ACCIDENT) |  | BEST CASE | 10 |
| STROKE (CEREBROVASCULAR ACCIDENT) |  | WORST CASE | 3 |
| SUDDEN CARDIAC ARREST |  | BEST CASE | 0 |
| SUDDEN CARDIAC ARREST |  | WORST CASE | 1 |
| TOXIC EXPOSURE: AMMONIA |  | BEST CASE | 0 |
| TOXIC EXPOSURE: AMMONIA |  | WORST CASE | 5 |
| TRAUMATIC HYPOVOLEMIC SHOCK |  | BEST CASE | 8 |
| TRAUMATIC HYPOVOLEMIC SHOCK |  | WORST CASE | 5 |
| URINARY INCONTINENCE (SPACE ADAPTATION) |  | BEST CASE | 11966 |
| URINARY INCONTINENCE (SPACE ADAPTATION) |  | WORST CASE | 1107 |
| URINARY RETENTION (SPACE ADAPTATION) |  | BEST CASE | 12586 |
| URINARY RETENTION (SPACE ADAPTATION) |  | WORST CASE | 2176 |
| URINARY TRACT INFECTION |  | BEST CASE | 12652 |
| URINARY TRACT INFECTION |  | WORST CASE | 677 |
| VAGINAL YEAST INFECTION |  | BEST CASE | 2844 |
| VAGINAL YEAST INFECTION |  | WORST CASE | 488 |

VISUAL IMPAIRMENT AND/OR INCREASED INTRACRANIAL PRESSURE (VIIP)(SPACE  0

## BEST CASE

ADAPTATION) VISUAL IMPAIRMENT AND/OR INCREASED INTRACRANIAL PRESSURE (VIIP)(SPACE  0

## WORST CASE

ADAPTATION)

| WRIST FRACTURE |  | BEST CASE | 33 |
| -------------------- | --- | ----------- | ---------------- |
| WRIST FRACTURE |  | WORST CASE | 13 |
| WRIST SPRAIN/STRAIN |  | BEST CASE | 3381 |
| WRIST SPRAIN/STRAIN |  | WORST CASE | 44 |
|  | 12 |  | 30 JANUARY 2018 |
### IMM Service Request Report  S-20171016-395

Table 9: 4 crew-42 days frequency of each condition over all 100,000 trials

|  | Medical Condition |  | Scenario | Events |
| ------------------------------------- | ------------------ | --- | ----------- | ---------------- |
| ABDOMINAL INJURY |  |  | BEST CASE | 6 |
| ABDOMINAL INJURY |  |  | WORST CASE | 2 |
| ABDOMINAL WALL HERNIA |  |  | BEST CASE | 21 |
| ABDOMINAL WALL HERNIA |  |  | WORST CASE | 3 |
| ABNORMAL UTERINE BLEEDING |  |  | BEST CASE | 1205 |
| ABNORMAL UTERINE BLEEDING |  |  | WORST CASE | 25 |
| ACUTE ANGLE-CLOSURE GLAUCOMA |  |  | BEST CASE | 3 |
| ACUTE ANGLE-CLOSURE GLAUCOMA |  |  | WORST CASE | 0 |
| ACUTE ARTHRITIS |  |  | BEST CASE | 127 |
| ACUTE ARTHRITIS |  |  | WORST CASE | 2 |
| ACUTE CHOLECYSTITIS/BILIARY COLIC |  |  | BEST CASE | 55 |
| ACUTE CHOLECYSTITIS/BILIARY COLIC |  |  | WORST CASE | 4 |
| ACUTE COMPARTMENT SYNDROME |  |  | BEST CASE | 0 |
| ACUTE COMPARTMENT SYNDROME |  |  | WORST CASE | 2 |
| ACUTE DIVERTICULITIS |  |  | BEST CASE | 49 |
| ACUTE DIVERTICULITIS |  |  | WORST CASE | 17 |
| ACUTE PANCREATITIS |  |  | BEST CASE | 10 |
| ACUTE PANCREATITIS |  |  | WORST CASE | 2 |
| ACUTE PROSTATITIS |  |  | BEST CASE | 102 |
| ACUTE PROSTATITIS |  |  | WORST CASE | 8 |
| ACUTE RADIATION SYNDROME |  |  | BEST CASE | 131 |
| ACUTE RADIATION SYNDROME |  |  | WORST CASE | 0 |
| ACUTE SINUSITIS |  |  | BEST CASE | 9287 |
| ACUTE SINUSITIS |  |  | WORST CASE | 804 |
| ALLERGIC REACTION (MILD TO MODERATE) |  |  | BEST CASE | 17437 |
| ALLERGIC REACTION (MILD TO MODERATE) |  |  | WORST CASE | 732 |
| ALTITUDE SICKNESS |  |  | BEST CASE | 4 |
| ALTITUDE SICKNESS |  |  | WORST CASE | 0 |
| ANAPHYLAXIS |  |  | BEST CASE | 23 |
| ANAPHYLAXIS |  |  | WORST CASE | 0 |
| ANGINA/MYOCARDIAL INFARCTION |  |  | BEST CASE | 23 |
| ANGINA/MYOCARDIAL INFARCTION |  |  | WORST CASE | 7 |
| ANKLE SPRAIN/STRAIN |  |  | BEST CASE | 18624 |
| ANKLE SPRAIN/STRAIN |  |  | WORST CASE | 389 |
| ANXIETY |  |  | BEST CASE | 202 |
| ANXIETY |  |  | WORST CASE | 6 |
| APPENDICITIS |  |  | BEST CASE | 38 |
| APPENDICITIS |  |  | WORST CASE | 8 |
| ATRIAL FIBRILLATION/ ATRIAL FLUTTER |  |  | BEST CASE | 17 |
| ATRIAL FIBRILLATION/ ATRIAL FLUTTER |  |  | WORST CASE | 1 |
| BACK PAIN (SPACE ADAPTATION) |  |  | BEST CASE | 206910 |
|  |  | 13 |  | 30 JANUARY 2018 |
### IMM Service Request Report  S-20171016-395

| BACK PAIN (SPACE ADAPTATION) |  | WORST CASE | 3073 |  |
| ----------------------------- | --- | ----------- | ------ | --- |
| BACK SPRAIN/STRAIN |  | BEST CASE | 53246 |  |
| BACK SPRAIN/STRAIN |  | WORST CASE | 1081 |  |
| BAROTRAUMA (EAR/SINUS BLOCK) |  | BEST CASE | 51081 |  |
| BAROTRAUMA (EAR/SINUS BLOCK) |  | WORST CASE | 755 |  |
| BEHAVIORAL EMERGENCY |  | BEST CASE | 0 |  |
| BEHAVIORAL EMERGENCY |  | WORST CASE | 0 |  |
| BURNS SECONDARY TO FIRE |  | BEST CASE | 243 |  |
| BURNS SECONDARY TO FIRE |  | WORST CASE | 2 |  |

CARDIOGENIC SHOCK SECONDARY TO MYOCARDIAL INFARCTION  BEST CASE  0 CARDIOGENIC SHOCK SECONDARY TO MYOCARDIAL INFARCTION  WORST CASE  0

| CHEST INJURY |  | BEST CASE | 3 |  |
| -------------------------------- | --- | ----------- | ------ | --- |
| CHEST INJURY |  | WORST CASE | 9 |  |
| CHOKING/OBSTRUCTED AIRWAY |  | BEST CASE | 4911 |  |
| CHOKING/OBSTRUCTED AIRWAY |  | WORST CASE | 22 |  |
| CONSTIPATION (SPACE ADAPTATION) |  | BEST CASE | 67803 |  |
| CONSTIPATION (SPACE ADAPTATION) |  | WORST CASE | 310 |  |

DECOMPRESSION SICKNESS SECONDARY TO EXTRAVEHICULAR ACTIVITY  BEST CASE  0 DECOMPRESSION SICKNESS SECONDARY TO EXTRAVEHICULAR ACTIVITY  WORST CASE  0

| DENTAL : EXPOSED PULP |  | BEST CASE | 752 |  |
| ------------------------------ | --- | ----------- | ---------------- | --- |
| DENTAL : EXPOSED PULP |  | WORST CASE | 193 |  |
| DENTAL CARIES |  | BEST CASE | 8605 |  |
| DENTAL CARIES |  | WORST CASE | 5083 |  |
| DENTAL: ABSCESS |  | BEST CASE | 832 |  |
| DENTAL: ABSCESS |  | WORST CASE | 219 |  |
| DENTAL: AVULSION (TOOTH LOSS) |  | BEST CASE | 107 |  |
| DENTAL: AVULSION (TOOTH LOSS) |  | WORST CASE | 31 |  |
| DENTAL: CROWN LOSS |  | BEST CASE | 106 |  |
| DENTAL: CROWN LOSS |  | WORST CASE | 20 |  |
| DENTAL: FILLING LOSS |  | BEST CASE | 227 |  |
| DENTAL: FILLING LOSS |  | WORST CASE | 25 |  |
| DEPRESSION |  | BEST CASE | 143 |  |
| DEPRESSION |  | WORST CASE | 13 |  |
| DIARRHEA |  | BEST CASE | 54582 |  |
| DIARRHEA |  | WORST CASE | 839 |  |
| ELBOW DISLOCATION |  | BEST CASE | 1 |  |
| ELBOW DISLOCATION |  | WORST CASE | 0 |  |
| ELBOW SPRAIN/STRAIN |  | BEST CASE | 20671 |  |
| ELBOW SPRAIN/STRAIN |  | WORST CASE | 410 |  |
| EYE CHEMICAL BURN |  | BEST CASE | 9258 |  |
| EYE CHEMICAL BURN |  | WORST CASE | 747 |  |
| EYE CORNEAL ULCER |  | BEST CASE | 24 |  |
| EYE CORNEAL ULCER |  | WORST CASE | 0 |  |
| EYE INFECTION |  | BEST CASE | 7677 |  |
|  | 14 |  | 30 JANUARY 2018 |  |
### IMM Service Request Report  S-20171016-395

| EYE INFECTION |  | WORST CASE | 670 |  |
| ------------------------------- | --- | ----------- | ------- | --- |
| EYE IRRITATION/ABRASION |  | BEST CASE | 116590 |  |
| EYE IRRITATION/ABRASION |  | WORST CASE | 585 |  |
| EYE PENETRATION (FOREIGN BODY) |  | BEST CASE | 1 |  |
| EYE PENETRATION (FOREIGN BODY) |  | WORST CASE | 1 |  |
| FINGER DISLOCATION |  | BEST CASE | 1681 |  |
| FINGER DISLOCATION |  | WORST CASE | 6 |  |

FINGERNAIL DELAMINATION SECONDARY TO EXTRAVEHICULAR ACTIVITY  BEST CASE  0 FINGERNAIL DELAMINATION SECONDARY TO EXTRAVEHICULAR ACTIVITY  WORST CASE  0

| GASTROENTERITIS |  | BEST CASE | 6141 |  |
| -------------------------------------- | --- | ----------- | ---------------- | --- |
| GASTROENTERITIS |  | WORST CASE | 525 |  |
| HEAD INJURY |  | BEST CASE | 3 |  |
| HEAD INJURY |  | WORST CASE | 14 |  |
| HEADACHE (CO2 INDUCED) |  | BEST CASE | 33183 |  |
| HEADACHE (CO2 INDUCED) |  | WORST CASE | 832 |  |
| HEADACHE (LATE) |  | BEST CASE | 81862 |  |
| HEADACHE (LATE) |  | WORST CASE | 854 |  |
| HEADACHE (SPACE ADAPTATION) |  | BEST CASE | 131982 |  |
| HEADACHE (SPACE ADAPTATION) |  | WORST CASE | 8679 |  |
| HEARING LOSS |  | BEST CASE | 5789 |  |
| HEARING LOSS |  | WORST CASE | 3395 |  |
| HEMORRHOIDS |  | BEST CASE | 3472 |  |
| HEMORRHOIDS |  | WORST CASE | 20 |  |
| HERPES ZOSTER REACTIVATION (SHINGLES) |  | BEST CASE | 1490 |  |
| HERPES ZOSTER REACTIVATION (SHINGLES) |  | WORST CASE | 242 |  |
| HIP SPRAIN/STRAIN |  | BEST CASE | 6860 |  |
| HIP SPRAIN/STRAIN |  | WORST CASE | 157 |  |
| HIP/PROXIMAL FEMUR FRACTURE |  | BEST CASE | 2 |  |
| HIP/PROXIMAL FEMUR FRACTURE |  | WORST CASE | 16 |  |
| HYPERTENSION |  | BEST CASE | 246 |  |
| HYPERTENSION |  | WORST CASE | 31 |  |
| INDIGESTION |  | BEST CASE | 9337 |  |
| INDIGESTION |  | WORST CASE | 699 |  |
| INFLUENZA |  | BEST CASE | 1271 |  |
| INFLUENZA |  | WORST CASE | 446 |  |
| INSOMNIA (SPACE ADAPTATION) |  | BEST CASE | 179126 |  |
| INSOMNIA (SPACE ADAPTATION) |  | WORST CASE | 927 |  |
| KNEE SPRAIN/STRAIN |  | BEST CASE | 12012 |  |
| KNEE SPRAIN/STRAIN |  | WORST CASE | 237 |  |
| LOWER EXTREMITY (LE) STRESS FRACTURE |  | BEST CASE | 2236 |  |
| LOWER EXTREMITY (LE) STRESS FRACTURE |  | WORST CASE | 288 |  |
| LUMBAR SPINE FRACTURE |  | BEST CASE | 13 |  |
| LUMBAR SPINE FRACTURE |  | WORST CASE | 5 |  |
| MEDICATION OVERDOSE/ADVERSE REACTION |  | BEST CASE | 3314 |  |
|  | 15 |  | 30 JANUARY 2018 |  |
### IMM Service Request Report  S-20171016-395

| MEDICATION OVERDOSE/ADVERSE REACTION |  | WORST CASE | 17 |  |
| ------------------------------------- | --- | ----------- | ------- | --- |
| MOUTH ULCER |  | BEST CASE | 14462 |  |
| MOUTH ULCER |  | WORST CASE | 802 |  |
| NASAL CONGESTION (SPACE ADAPTATION) |  | BEST CASE | 232762 |  |
| NASAL CONGESTION (SPACE ADAPTATION) |  | WORST CASE | 1155 |  |
| NECK SPRAIN/STRAIN |  | BEST CASE | 15432 |  |
| NECK SPRAIN/STRAIN |  | WORST CASE | 310 |  |
| NEPHROLITHIASIS |  | BEST CASE | 104 |  |
| NEPHROLITHIASIS |  | WORST CASE | 75 |  |
| NEUROGENIC SHOCK |  | BEST CASE | 0 |  |
| NEUROGENIC SHOCK |  | WORST CASE | 0 |  |
| NOSE BLEED (SPACE ADAPTATION) |  | BEST CASE | 4166 |  |
| NOSE BLEED (SPACE ADAPTATION) |  | WORST CASE | 138 |  |
| OTITIS EXTERNA |  | BEST CASE | 4971 |  |
| OTITIS EXTERNA |  | WORST CASE | 80 |  |
| OTITIS MEDIA |  | BEST CASE | 4609 |  |
| OTITIS MEDIA |  | WORST CASE | 530 |  |

PARESTHESIAS SECONDARY TO EXTRAVEHICULAR ACTIVITY  BEST CASE  0 PARESTHESIAS SECONDARY TO EXTRAVEHICULAR ACTIVITY  WORST CASE  0

| PHARYNGITIS |  | BEST CASE | 17551 |  |
| ------------------------ | --- | ----------- | ---------------- | --- |
| PHARYNGITIS |  | WORST CASE | 854 |  |
| RESPIRATORY INFECTION |  | BEST CASE | 54622 |  |
| RESPIRATORY INFECTION |  | WORST CASE | 784 |  |
| RETINAL DETACHMENT |  | BEST CASE | 1 |  |
| RETINAL DETACHMENT |  | WORST CASE | 2 |  |
| SEIZURES |  | BEST CASE | 13 |  |
| SEIZURES |  | WORST CASE | 0 |  |
| SEPSIS |  | BEST CASE | 72 |  |
| SEPSIS |  | WORST CASE | 31 |  |
| SHOULDER DISLOCATION |  | BEST CASE | 0 |  |
| SHOULDER DISLOCATION |  | WORST CASE | 1 |  |
| SHOULDER SPRAIN/STRAIN |  | BEST CASE | 37303 |  |
| SHOULDER SPRAIN/STRAIN |  | WORST CASE | 779 |  |
| SKIN ABRASION |  | BEST CASE | 149089 |  |
| SKIN ABRASION |  | WORST CASE | 8765 |  |
| SKIN INFECTION |  | BEST CASE | 20877 |  |
| SKIN INFECTION |  | WORST CASE | 758 |  |
| SKIN LACERATION |  | BEST CASE | 405 |  |
| SKIN LACERATION |  | WORST CASE | 1249 |  |
| SKIN RASH |  | BEST CASE | 156656 |  |
| SKIN RASH |  | WORST CASE | 778 |  |
| SLEEP DISORDER |  | BEST CASE | 222953 |  |
| SLEEP DISORDER |  | WORST CASE | 1133 |  |
| SMALL BOWEL OBSTRUCTION |  | BEST CASE | 41 |  |
|  | 16 |  | 30 JANUARY 2018 |  |
### IMM Service Request Report  S-20171016-395

| SMALL BOWEL OBSTRUCTION |  | WORST CASE | 10 |  |
| ----------------------------------------- | --- | ----------- | ------- | --- |
| SMOKE INHALATION |  | BEST CASE | 673 |  |
| SMOKE INHALATION |  | WORST CASE | 124 |  |
| SPACE MOTION SICKNESS (SPACE ADAPTATION) |  | BEST CASE | 247570 |  |
| SPACE MOTION SICKNESS (SPACE ADAPTATION) |  | WORST CASE | 43741 |  |
| STROKE (CEREBROVASCULAR ACCIDENT) |  | BEST CASE | 17 |  |
| STROKE (CEREBROVASCULAR ACCIDENT) |  | WORST CASE | 11 |  |
| SUDDEN CARDIAC ARREST |  | BEST CASE | 0 |  |
| SUDDEN CARDIAC ARREST |  | WORST CASE | 1 |  |
| TOXIC EXPOSURE: AMMONIA |  | BEST CASE | 0 |  |
| TOXIC EXPOSURE: AMMONIA |  | WORST CASE | 9 |  |
| TRAUMATIC HYPOVOLEMIC SHOCK |  | BEST CASE | 21 |  |
| TRAUMATIC HYPOVOLEMIC SHOCK |  | WORST CASE | 17 |  |
| URINARY INCONTINENCE (SPACE ADAPTATION) |  | BEST CASE | 11949 |  |
| URINARY INCONTINENCE (SPACE ADAPTATION) |  | WORST CASE | 1157 |  |
| URINARY RETENTION (SPACE ADAPTATION) |  | BEST CASE | 12550 |  |
| URINARY RETENTION (SPACE ADAPTATION) |  | WORST CASE | 2141 |  |
| URINARY TRACT INFECTION |  | BEST CASE | 32844 |  |
| URINARY TRACT INFECTION |  | WORST CASE | 1739 |  |
| VAGINAL YEAST INFECTION |  | BEST CASE | 7635 |  |
| VAGINAL YEAST INFECTION |  | WORST CASE | 1394 |  |

VISUAL IMPAIRMENT AND/OR INCREASED INTRACRANIAL PRESSURE  65819

## BEST CASE

(VIIP)(SPACE ADAPTATION) VISUAL IMPAIRMENT AND/OR INCREASED INTRACRANIAL PRESSURE  5162

## WORST CASE

(VIIP)(SPACE ADAPTATION)

| WRIST FRACTURE |  | BEST CASE | 102 |  |
| -------------------- | --- | ----------- | ---------------- | --- |
| WRIST FRACTURE |  | WORST CASE | 11 |  |
| WRIST SPRAIN/STRAIN |  | BEST CASE | 8630 |  |
| WRIST SPRAIN/STRAIN |  | WORST CASE | 130 |  |
|  | 17 |  | 30 JANUARY 2018 |  |
### IMM Service Request Report S-20171016-395

Table 10: 4 crew-16 days probability of occurrence

Probability >= 1 Best Probability >= 1 Worst Medical Condition Probability == 0 Probability >= 1

### Case Case

ABDOMINAL INJURY 9.9997E-01 2.8792E-05 2.1594E-05 7.1980E-06 ABDOMINAL WALL 9.9992E-01 7.8952E-05 6.9477E-05 9.4742E-06 HERNIA ABNORMAL UTERINE 9.9545E-01 4.5454E-03 4.4545E-03 9.0908E-05 BLEEDING ACUTE ANGLE-CLOSURE 9.9999E-01 7.3418E-06 5.8734E-06 1.4684E-06 GLAUCOMA ACUTE ARTHRITIS 9.9954E-01 4.6336E-04 4.5177E-04 1.1584E-05 ACUTE 9.9982E-01 1.7862E-04 1.6076E-04 1.7862E-05 CHOLECYSTITIS/BILIARY COLIC ACUTE COMPARTMENT 9.9999E-01 7.0089E-06 2.6634E-06 4.3455E-06 SYNDROME ACUTE DIVERTICULITIS 9.9975E-01 2.4878E-04 1.8534E-04 6.3440E-05 ACUTE PANCREATITIS 9.9995E-01 5.3862E-05 4.4436E-05 9.4258E-06 ACUTE PROSTATITIS 9.9957E-01 4.2920E-04 4.0130E-04 2.7898E-05 ACUTE RADIATION 9.9954E-01 4.5984E-04 4.5754E-04 2.2992E-06 SYNDROME ACUTE SINUSITIS 9.6230E-01 3.7697E-02 3.4681E-02 3.0158E-03 ALLERGIC REACTION 9.3198E-01 6.8023E-02 6.5303E-02 2.7209E-03 (MILD TO MODERATE) ALTITUDE SICKNESS 9.9999E-01 9.5145E-06 9.3718E-06 1.4272E-07 ANAPHYLAXIS 9.9991E-01 8.6031E-05 8.5600E-05 4.3015E-07 ANGINA/MYOCARDIAL 9.9990E-01 9.6368E-05 8.1913E-05 1.4455E-05 INFARCTION ANKLE SPRAIN/STRAIN 9.2972E-01 7.0280E-02 6.8874E-02 1.4056E-03 ANXIETY 9.9921E-01 7.8819E-04 7.5272E-04 3.5469E-05 APPENDICITIS 9.9984E-01 1.6382E-04 1.3515E-04 2.8668E-05 ATRIAL FIBRILLATION/ 9.9992E-01 8.2789E-05 6.6645E-05 1.6144E-05

### ATRIAL FLUTTER

BACK PAIN (SPACE 5.1025E-02 9.4898E-01 9.3474E-01 1.4235E-02 ADAPTATION) BACK SPRAIN/STRAIN 8.1435E-01 1.8565E-01 1.8194E-01 3.7130E-03 BAROTRAUMA 8.1993E-01 1.8007E-01 1.7737E-01 2.7010E-03 (EAR/SINUS BLOCK) BEHAVIORAL 1.0000E+00 2.5057E-06 2.2426E-06 2.6310E-07 EMERGENCY BURNS SECONDARY TO 9.9912E-01 8.8273E-04 8.7832E-04 4.4137E-06 FIRE CARDIOGENIC SHOCK 1.0000E+00 1.1197E-06 1.4556E-07 9.7411E-07

### SECONDARY TO

MYOCARDIAL INFARCTION CHEST INJURY 9.9996E-01 4.4931E-05 1.5726E-05 2.9205E-05 CHOKING/OBSTRUCTED 9.8097E-01 1.9030E-02 1.8934E-02 9.5148E-05 AIRWAY CONSTIPATION (SPACE 4.7417E-01 5.2583E-01 5.2320E-01 2.6291E-03 ADAPTATION) DENTAL ABSCESS 9.9648E-01 3.5158E-03 2.7775E-03 7.3831E-04 DENTAL AVULSION 9.4879E-01 5.1209E-02 3.2262E-02 1.8947E-02 (TOOTH LOSS) DENTAL CARIES 9.9598E-01 4.0220E-03 3.1774E-03 8.4462E-04 DENTAL CROWN LOSS 9.9949E-01 5.1152E-04 3.9387E-04 1.1765E-04 DENTAL EXPOSED PULP 9.9955E-01 4.5372E-04 3.8113E-04 7.2596E-05 DENTAL FILLING LOSS 9.9911E-01 8.9499E-04 8.1444E-04 8.0549E-05 DEPRESSION 9.9943E-01 5.6931E-04 5.2377E-04 4.5545E-05 18 30 JANUARY 2018

### IMM Service Request Report  S-20171016-395

|  |  |  |  |  |  |
| --------- | ----------- | ----------- | ----------- | ----------- | --- |
| DIARRHEA | 8.0950E-01 | 1.9050E-01 | 1.8765E-01 | 2.8576E-03 |  |

ELBOW DISLOCATION  9.9999E-01  9.1290E-06  7.9423E-06  1.1868E-06 ELBOW SPRAIN/STRAIN  9.2358E-01  7.6418E-02  7.4890E-02  1.5284E-03 EYE CHEMICAL BURN  9.6230E-01  3.7697E-02  3.4870E-02  2.8273E-03 EYE CORNEAL ULCER  9.9988E-01  1.2387E-04  1.2264E-04  1.2387E-06 EYE INFECTION  9.6849E-01  3.1514E-02  2.8993E-02  2.5212E-03

| EYE | 6.3871E-01 | 3.6129E-01 | 3.5948E-01 | 1.8064E-03 |  |
| ---- | ----------- | ----------- | ----------- | ----------- | --- |

IRRITATION/ABRASION EYE PENETRATION  1.0000E+00  1.6350E-06  8.1750E-07  8.1750E-07 (FOREIGN BODY) FINGER DISLOCATION  9.9362E-01  6.3839E-03  6.3519E-03  3.1919E-05 GASTROENTERITIS  9.7471E-01  2.5292E-02  2.3269E-02  2.0234E-03

| HEAD INJURY | 9.9993E-01 | 7.4033E-05 | 3.3315E-05 | 4.0718E-05 |  |
| ------------ | ----------- | ----------- | ----------- | ----------- | --- |

HEADACHE (CO2  8.7978E-01  1.2022E-01  1.1722E-01  3.0056E-03 INDUCED) HEADACHE (LATE)  7.3066E-01  2.6934E-01  2.6665E-01  2.6934E-03 HEADACHE (SPACE  1.7752E-01  8.2248E-01  7.7314E-01  4.9349E-02 ADAPTATION) HEARING LOSS  9.6612E-01  3.3883E-02  2.1177E-02  1.2706E-02

| HEMORRHOIDS | 9.8727E-01 | 1.2727E-02 | 1.2663E-02 | 6.3635E-05 |  |
| ------------ | ----------- | ----------- | ----------- | ----------- | --- |

HERPES ZOSTER  9.9362E-01  6.3839E-03  5.4901E-03  8.9374E-04 REACTIVATION (SHINGLES) HIP SPRAIN/STRAIN  9.7385E-01  2.6151E-02  2.5628E-02  5.2301E-04 HIP/PROXIMAL FEMUR  9.9995E-01  4.6471E-05  3.0206E-06  4.3451E-05 FRACTURE HYPERTENSION  9.9887E-01  1.1313E-03  1.0012E-03  1.3010E-04

| INDIGESTION | 9.6230E-01 | 3.7697E-02 | 3.5058E-02 | 2.6388E-03 |  |
| ------------ | ----------- | ----------- | ----------- | ----------- | --- |
| INFLUENZA | 9.9362E-01 | 6.3839E-03 | 4.7879E-03 | 1.5960E-03 |  |

INSOMNIA (SPACE  9.1306E-02  9.0869E-01  9.0415E-01  4.5435E-03 ADAPTATION) KNEE SPRAIN/STRAIN  9.5469E-01  4.5314E-02  4.4408E-02  9.0628E-04 LOWER EXTREMITY (LE)  9.9050E-01  9.5042E-03  8.4112E-03  1.0930E-03

### STRESS FRACTURE

LUMBAR SPINE  9.9997E-01  3.2742E-05  2.7339E-05  5.4024E-06 FRACTURE

| MEDICATION | 9.8727E-01 | 1.2727E-02 | 1.2663E-02 | 6.3635E-05 |  |
| ----------- | ----------- | ----------- | ----------- | ----------- | --- |

OVERDOSE/ADVERSE REACTION

| MOUTH ULCER | 9.4399E-01 | 5.6009E-02 | 5.3209E-02 | 2.8005E-03 |  |
| ------------ | ----------- | ----------- | ----------- | ----------- | --- |

NASAL CONGESTION  2.9421E-02  9.7058E-01  9.6573E-01  4.8529E-03 (SPACE ADAPTATION) NECK SPRAIN/STRAIN  9.4212E-01  5.7879E-02  5.6722E-02  1.1576E-03 NEPHROLITHIASIS  9.9936E-01  6.3936E-04  3.8681E-04  2.5255E-04 NEUROGENIC SHOCK  1.0000E+00  9.1499E-07  4.5750E-07  4.5750E-07 NOSE BLEED (SPACE  9.6434E-01  3.5658E-02  3.4410E-02  1.2480E-03 ADAPTATION) OTITIS EXTERNA  9.8097E-01  1.9030E-02  1.8744E-02  2.8544E-04 OTITIS MEDIA  9.8097E-01  1.9030E-02  1.7127E-02  1.9030E-03

| PHARYNGITIS | 9.3198E-01 | 6.8023E-02 | 6.4962E-02 | 3.0611E-03 |  |
| ------------ | ----------- | ----------- | ----------- | ----------- | --- |

RESPIRATORY INFECTION  8.0950E-01  1.9050E-01  1.8765E-01  2.8576E-03 RETINAL DETACHMENT  9.9998E-01  1.6164E-05  6.7889E-06  9.3752E-06

| SEIZURES | 9.9995E-01 | 4.7309E-05 | 4.0686E-05 | 6.6233E-06 |  |
| --------- | ----------- | ----------- | ----------- | ----------- | --- |
| SEPSIS | 9.9958E-01 | 4.2045E-04 | 2.7918E-04 | 1.4127E-04 |  |
| SHOULDER | 9.9999E-01 | 6.5235E-06 | 2.2832E-07 | 6.2952E-06 |  |

DISLOCATION

| SHOULDER | 8.6438E-01 | 1.3562E-01 | 1.3291E-01 | 2.7124E-03 |  |
| --------- | ----------- | ----------- | ----------- | ----------- | --- |

SPRAIN/STRAIN SKIN ABRASION  5.4771E-01  4.5229E-01  4.2741E-01  2.4876E-02 SKIN INFECTION  9.2012E-01  7.9885E-02  7.7089E-02  2.7960E-03

|  |  | 19 |  | 30 JANUARY 2018 |  |
| --- | --- | --- | --- | ---------------- | --- |
### IMM Service Request Report S-20171016-395

SKIN LACERATION 9.9362E-01 6.3839E-03 1.5960E-03 4.7879E-03 SKIN RASH 5.4771E-01 4.5229E-01 4.5003E-01 2.2614E-03 SLEEP DISORDER 4.2666E-01 5.7334E-01 5.7048E-01 2.8667E-03 SMALL BOWEL 9.9979E-01 2.1024E-04 1.8396E-04 2.6281E-05 OBSTRUCTION SMOKE INHALATION 9.9684E-01 3.1630E-03 2.7202E-03 4.4282E-04 SPACE MOTION 5.2879E-03 9.9471E-01 8.4551E-01 1.4921E-01 SICKNESS (SPACE ADAPTATION) STROKE 9.9985E-01 1.4542E-04 9.5253E-05 5.0171E-05 (CEREBROVASCULAR ACCIDENT) SUDDEN CARDIAC 9.9999E-01 6.3518E-06 1.1751E-06 5.1767E-06 ARREST TOXIC EXPOSURE 9.9997E-01 2.8736E-05 0.0000E+00 2.8736E-05 (AMMONIA) TRAUMATIC 9.9989E-01 1.1231E-04 6.6825E-05 4.5486E-05

### HYPOVOLEMIC SHOCK

URINARY INCONTINENCE 8.9198E-01 1.0802E-01 9.8843E-02 9.1821E-03 (SPACE ADAPTATION) URINARY RETENTION 8.7959E-01 1.2041E-01 1.0235E-01 1.8062E-02 (SPACE ADAPTATION) URINARY TRACT 8.7556E-01 1.2444E-01 1.1822E-01 6.2220E-03 INFECTION VAGINAL YEAST 9.6673E-01 3.3272E-02 2.8281E-02 4.9908E-03 INFECTION VISUAL IMPAIRMENT 1.8870E-01 8.1130E-01 7.5451E-01 5.6791E-02

### AND/OR INCREASED

INTRACRANIAL PRESSURE (VIIP)(SPACE ADAPTATION) WRIST FRACTURE 9.9959E-01 4.1344E-04 3.2868E-04 8.4755E-05 WRIST SPRAIN/STRAIN 9.6742E-01 3.2581E-02 3.2092E-02 4.8871E-04 20 30 JANUARY 2018

### IMM Service Request Report S-20171016-395

Table 11: 4 crew-42 days probability of occurrence

Probability >= 1 Best Probability >= 1 Worst Medical Condition Probability == 0 Probability >= 1

### Case Case

ABDOMINAL INJURY 9.9992E-01 7.5577E-05 5.6683E-05 1.8894E-05 ABDOMINAL WALL 9.9979E-01 2.0723E-04 1.8237E-04 2.4868E-05 HERNIA ABNORMAL UTERINE 9.8811E-01 1.1888E-02 1.1650E-02 2.3775E-04 BLEEDING ACUTE ANGLE-CLOSURE 9.9998E-01 1.9272E-05 1.5418E-05 3.8544E-06 GLAUCOMA ACUTE ARTHRITIS 9.9878E-01 1.2159E-03 1.1855E-03 3.0396E-05 ACUTE 9.9953E-01 4.6882E-04 4.2194E-04 4.6882E-05 CHOLECYSTITIS/BILIARY COLIC ACUTE COMPARTMENT 9.9998E-01 1.8398E-05 6.9913E-06 1.1407E-05 SYNDROME ACUTE DIVERTICULITIS 9.9935E-01 6.5293E-04 4.8643E-04 1.6650E-04 ACUTE PANCREATITIS 9.9986E-01 1.4138E-04 1.1664E-04 2.4742E-05 ACUTE PROSTATITIS 9.9887E-01 1.1263E-03 1.0531E-03 7.3207E-05 ACUTE RADIATION 9.9879E-01 1.2066E-03 1.2006E-03 6.0331E-06 SYNDROME ACUTE SINUSITIS 9.0405E-01 9.5948E-02 8.8272E-02 7.6758E-03 ALLERGIC REACTION 8.3117E-01 1.6883E-01 1.6208E-01 6.7533E-03 (MILD TO MODERATE) ALTITUDE SICKNESS 9.9998E-01 2.4975E-05 2.4601E-05 3.7463E-07 ANAPHYLAXIS 9.9977E-01 2.2581E-04 2.2469E-04 1.1291E-06 ANGINA/MYOCARDIAL 9.9975E-01 2.5295E-04 2.1500E-04 3.7942E-05 INFARCTION ANKLE SPRAIN/STRAIN 8.2590E-01 1.7410E-01 1.7062E-01 3.4821E-03 ANXIETY 9.9793E-01 2.0677E-03 1.9746E-03 9.3045E-05 APPENDICITIS 9.9957E-01 4.2997E-04 3.5472E-04 7.5245E-05 ATRIAL FIBRILLATION/ 9.9978E-01 2.1731E-04 1.7493E-04 4.2375E-05

### ATRIAL FLUTTER

BACK PAIN (SPACE 5.1025E-02 9.4898E-01 9.3474E-01 1.4235E-02 ADAPTATION) BACK SPRAIN/STRAIN 5.8328E-01 4.1672E-01 4.0838E-01 8.3343E-03 BAROTRAUMA 5.9384E-01 4.0616E-01 4.0007E-01 6.0925E-03 (EAR/SINUS BLOCK) BEHAVIORAL 9.9999E-01 6.5774E-06 5.8868E-06 6.9063E-07 EMERGENCY BURNS SECONDARY TO 9.9768E-01 2.3155E-03 2.3039E-03 1.1578E-05 FIRE CARDIOGENIC SHOCK 1.0000E+00 2.9391E-06 3.8209E-07 2.5570E-06

### SECONDARY TO

MYOCARDIAL INFARCTION CHEST INJURY 9.9988E-01 1.1794E-04 4.1279E-05 7.6661E-05 CHOKING/OBSTRUCTED 9.5082E-01 4.9183E-02 4.8937E-02 2.4592E-04 AIRWAY CONSTIPATION (SPACE 4.7417E-01 5.2583E-01 5.2320E-01 2.6291E-03 ADAPTATION) DENTAL ABSCESS 9.9080E-01 9.2026E-03 7.2700E-03 1.9325E-03 DENTAL AVULSION 8.7111E-01 1.2889E-01 8.1201E-02 4.7690E-02 (TOOTH LOSS) DENTAL CARIES 9.8948E-01 1.0523E-02 8.3134E-03 2.2099E-03 DENTAL CROWN LOSS 9.9866E-01 1.3422E-03 1.0335E-03 3.0870E-04 DENTAL EXPOSED PULP 9.9881E-01 1.1906E-03 1.0001E-03 1.9049E-04 DENTAL FILLING LOSS 9.9765E-01 2.3476E-03 2.1363E-03 2.1129E-04 DEPRESSION 9.9851E-01 1.4937E-03 1.3742E-03 1.1950E-04 21 30 JANUARY 2018

### IMM Service Request Report  S-20171016-395

|  |  |  |  |  |  |
| --------- | ----------- | ----------- | ----------- | ----------- | --- |
| DIARRHEA | 5.7420E-01 | 4.2580E-01 | 4.1941E-01 | 6.3870E-03 |  |

ELBOW DISLOCATION  9.9998E-01  2.3964E-05  2.0848E-05  3.1153E-06 ELBOW SPRAIN/STRAIN  8.1166E-01  1.8834E-01  1.8458E-01  3.7669E-03 EYE CHEMICAL BURN  9.0405E-01  9.5948E-02  8.8752E-02  7.1961E-03 EYE CORNEAL ULCER  9.9967E-01  3.2514E-04  3.2189E-04  3.2514E-06 EYE INFECTION  9.1938E-01  8.0621E-02  7.4171E-02  6.4497E-03

| EYE | 3.0826E-01 | 6.9174E-01 | 6.8828E-01 | 3.4587E-03 |  |
| ---- | ----------- | ----------- | ----------- | ----------- | --- |

IRRITATION/ABRASION EYE PENETRATION  1.0000E+00  4.2919E-06  2.1459E-06  2.1459E-06 (FOREIGN BODY) FINGER DISLOCATION  9.8333E-01  1.6671E-02  1.6587E-02  8.3354E-05 GASTROENTERITIS  9.3497E-01  6.5034E-02  5.9832E-02  5.2027E-03

| HEAD INJURY | 9.9981E-01 | 1.9432E-04 | 8.7446E-05 | 1.0688E-04 |  |
| ------------ | ----------- | ----------- | ----------- | ----------- | --- |

HEADACHE (CO2  7.1446E-01  2.8554E-01  2.7840E-01  7.1385E-03 INDUCED) HEADACHE (LATE)  4.3878E-01  5.6122E-01  5.5561E-01  5.6122E-03 HEADACHE (SPACE  1.7752E-01  8.2248E-01  7.7314E-01  4.9349E-02 ADAPTATION) HEARING LOSS  9.1349E-01  8.6511E-02  5.4069E-02  3.2442E-02

| HEMORRHOIDS | 9.6694E-01 | 3.3064E-02 | 3.2898E-02 | 1.6532E-04 |  |
| ------------ | ----------- | ----------- | ----------- | ----------- | --- |

HERPES ZOSTER  9.8333E-01  1.6671E-02  1.4337E-02  2.3339E-03 REACTIVATION (SHINGLES) HIP SPRAIN/STRAIN  9.3281E-01  6.7195E-02  6.5851E-02  1.3439E-03 HIP/PROXIMAL FEMUR  9.9988E-01  1.2198E-04  7.9289E-06  1.1405E-04 FRACTURE HYPERTENSION  9.9703E-01  2.9669E-03  2.6257E-03  3.4120E-04

| INDIGESTION | 9.0405E-01 | 9.5948E-02 | 8.9231E-02 | 6.7163E-03 |  |
| ------------ | ----------- | ----------- | ----------- | ----------- | --- |
| INFLUENZA | 9.8333E-01 | 1.6671E-02 | 1.2503E-02 | 4.1677E-03 |  |

INSOMNIA (SPACE  9.1306E-02  9.0869E-01  9.0415E-01  4.5435E-03 ADAPTATION) KNEE SPRAIN/STRAIN  8.8539E-01  1.1461E-01  1.1232E-01  2.2922E-03 LOWER EXTREMITY (LE)  9.7524E-01  2.4756E-02  2.1909E-02  2.8470E-03

### STRESS FRACTURE

LUMBAR SPINE  9.9991E-01  8.5945E-05  7.1764E-05  1.4181E-05 FRACTURE

| MEDICATION | 9.6694E-01 | 3.3064E-02 | 3.2898E-02 | 1.6532E-04 |  |
| ----------- | ----------- | ----------- | ----------- | ----------- | --- |

OVERDOSE/ADVERSE REACTION

| MOUTH ULCER | 8.5959E-01 | 1.4041E-01 | 1.3339E-01 | 7.0206E-03 |  |
| ------------ | ----------- | ----------- | ----------- | ----------- | --- |

NASAL CONGESTION  2.9421E-02  9.7058E-01  9.6573E-01  4.8529E-03 (SPACE ADAPTATION) NECK SPRAIN/STRAIN  8.5512E-01  1.4488E-01  1.4198E-01  2.8975E-03 NEPHROLITHIASIS  9.9832E-01  1.6774E-03  1.0149E-03  6.6259E-04 NEUROGENIC SHOCK  1.0000E+00  2.4019E-06  1.2009E-06  1.2009E-06 NOSE BLEED (SPACE  9.6434E-01  3.5658E-02  3.4410E-02  1.2480E-03 ADAPTATION) OTITIS EXTERNA  9.5082E-01  4.9183E-02  4.8446E-02  7.3775E-04 OTITIS MEDIA  9.5082E-01  4.9183E-02  4.4265E-02  4.9183E-03

| PHARYNGITIS | 8.3117E-01 | 1.6883E-01 | 1.6124E-01 | 7.5975E-03 |  |
| ------------ | ----------- | ----------- | ----------- | ----------- | --- |

RESPIRATORY INFECTION  5.7420E-01  4.2580E-01  4.1941E-01  6.3870E-03 RETINAL DETACHMENT  9.9996E-01  4.2430E-05  1.7821E-05  2.4610E-05

| SEIZURES | 9.9988E-01 | 1.2418E-04 | 1.0680E-04 | 1.7385E-05 |  |
| --------- | ----------- | ----------- | ----------- | ----------- | --- |
| SEPSIS | 9.9890E-01 | 1.1033E-03 | 7.3259E-04 | 3.7071E-04 |  |
| SHOULDER | 9.9998E-01 | 1.7124E-05 | 5.9934E-07 | 1.6525E-05 |  |

DISLOCATION

| SHOULDER | 6.8210E-01 | 3.1790E-01 | 3.1154E-01 | 6.3579E-03 |  |
| --------- | ----------- | ----------- | ----------- | ----------- | --- |

SPRAIN/STRAIN SKIN ABRASION  2.0592E-01  7.9408E-01  7.5041E-01  4.3674E-02 SKIN INFECTION  8.0369E-01  1.9631E-01  1.8944E-01  6.8710E-03

|  |  | 22 |  | 30 JANUARY 2018 |  |
| --- | --- | --- | --- | ---------------- | --- |
### IMM Service Request Report S-20171016-395

SKIN LACERATION 9.8333E-01 1.6671E-02 4.1677E-03 1.2503E-02 SKIN RASH 2.0592E-01 7.9408E-01 7.9011E-01 3.9704E-03 SLEEP DISORDER 1.0689E-01 8.9311E-01 8.8864E-01 4.4655E-03 SMALL BOWEL 9.9945E-01 5.5180E-04 4.8282E-04 6.8975E-05 OBSTRUCTION SMOKE INHALATION 9.9172E-01 8.2816E-03 7.1222E-03 1.1594E-03 SPACE MOTION 5.2879E-03 9.9471E-01 8.4551E-01 1.4921E-01 SICKNESS (SPACE ADAPTATION) STROKE 9.9962E-01 3.8169E-04 2.5001E-04 1.3168E-04 (CEREBROVASCULAR ACCIDENT) SUDDEN CARDIAC 9.9998E-01 1.6673E-05 3.0846E-06 1.3589E-05 ARREST TOXIC EXPOSURE 9.9992E-01 7.5430E-05 0.0000E+00 7.5430E-05 (AMMONIA) TRAUMATIC 9.9971E-01 2.9479E-04 1.7540E-04 1.1939E-04

### HYPOVOLEMIC SHOCK

URINARY INCONTINENCE 8.9198E-01 1.0802E-01 9.8843E-02 9.1821E-03 (SPACE ADAPTATION) URINARY RETENTION 8.7959E-01 1.2041E-01 1.0235E-01 1.8062E-02 (SPACE ADAPTATION) URINARY TRACT 7.0550E-01 2.9450E-01 2.7977E-01 1.4725E-02 INFECTION VAGINAL YEAST 9.1501E-01 8.4994E-02 7.2245E-02 1.2749E-02 INFECTION VISUAL IMPAIRMENT 1.8870E-01 8.1130E-01 7.5451E-01 5.6791E-02

### AND/OR INCREASED

INTRACRANIAL PRESSURE (VIIP)(SPACE ADAPTATION) WRIST FRACTURE 9.9892E-01 1.0849E-03 8.6251E-04 2.2241E-04 WRIST SPRAIN/STRAIN 9.1672E-01 8.3276E-02 8.2027E-02 1.2491E-03 23 30 JANUARY 2018

|  | IMM Service Request Report |  |  |  |  |  |  | S-20171016-395 |  |  |  |  |
| --- | --------------------------- | --- | --- | --- | --- | --- | --- | --------------- | --- | --- | --- | --- |

## Appendix A: IMM Status at Time of Service Request Report

Validation status for IMM V&V Matrix: The following bar chart shows the IMM v4.1 MATLAB status of IMM validation for each IMM element listed.

|  | IMM |  |  |  |  |  |  |  |  |  |  |  |
| --- | ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
- Compliance with  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6);

NASA-Standard-7009  however there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been

|  | requirements | fully attained. |  |  |  |  |  |  |  |  |  |  |
| --- | ------------- | ---------------- | ----------- | --- | ---------------------- | --- | --- | --------------- | --- | --- | --- | --- |
|  |  |  | Compliant |  | Compliance Incomplete |  |  | Not applicable |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | 36 |  | 5 |  |  | 5 |  |  |  |
- Current NASA-  IMM Credibility Matrix: The following table shows the overall IMM v4.1 MATLAB credibility assessment score (CAS), individual factor CAS,

Standard-7009  customer-specified sufficiency thresholds, and weighted scores. Legend depicts CAS score designated range and color assignments from

|  | credibility assessment | NASA-Standard-7009. |  |  |  |  |  |  |  |  |  |  |
| --- | ----------------------- | -------------------- | --- | ------- | --- | --- | ------------ | ------- | --------- | --- | -------------- | --- |
|  | score |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | Factor |  |  | Sufficiency | Factor | Weighted |  | Overall Score |  |
|  |  |  |  |  |  |  | Thresholds | Score | Scores |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --------------- | --- | --- | --- | ---- | ---------- | --- | --- | --- |
|  |  |  |  | Verification |  |  | 4 | 3.7 | 0.28 |  |  |  |
|  |  |  |  | Validation |  |  | 3 |  | 3    0.45 |  |  |  |
|  |  |  |  | Input Pedigree |  |  | 3 |  | 3    0.53 |  |  |  |
|  |  |  |  | Results Uncertainty |  |  | 3 |  | 3    0.60 |  | 3.06 |  |
| --- | --- | --- | --- | -------------------- | --- | --- | --- | --- | ---------- | --- | ----- | --- |
|  |  |  |  | Results Robustness |  |  | 3 |  | 3    0.45 |  |  |  |
|  |  |  |  | Use History |  |  | 3 |  | 3    0.45 |  |  |  |
|  |  |  |  | M&S Management |  |  | 2 |  | 2    0.10 |  |  |  |
| --- | --- | --- | --- | --------------- | --- | --- | --- | --- | ---------- | --- | --- | --- |
|  |  |  |  | People Qualification |  |  | 4 |  | 4    0.20 |  |  |  |
| --- | --- | --- | --- | --------------------- | --- | --- | --- | --- | ---------- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Additional verification | none |  |  |  |  |  |  |  |  |  |  |
| --- | ------------------------ | ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

and validation information applicable to this analysis

|  | Integrated Medical | iMED Lockdown ID: (6), created on (11/18/2015) |  |  |  |  |  |  |  |  |  |  |
| --- | ------------------- | ----------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

### Evidence Database

(iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software.  MATLAB and all other MathWorks version  product or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

|  | Modifications made to | None |  |  |  |  |  |  |  |  |  |  |
| --- | ---------------------- | ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

the code for analysis

|  |  |  |  |  | 24 |  |  |  |  | 30 JANUARY 2018 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---------------- | --- | --- |
### IMM Service Request Report S-20171016-395

## Appendix B: Medical Conditions in iMED by Category (iMED_20151118)

ENVIRONMENTAL MEDICAL ILLNESS (continued)

### Acute Radiation Syndrome Anxiety

### Altitude Sickness Appendicitis

Barotrauma (ear/sinus block) Atrial Fibrillation/Atrial Flutter Burns secondary to Fire Back Pain (space adaptation)

### Decompression Sickness Secondary to EVA Behavioral Emergency

Eye Chemical Burn Cardiogenic Shock Secondary to Myocardial infarction Headache (CO 2 induced) Choking/Obstructed Airway Smoke Inhalation Constipation (space adaptation)

- Toxic Exposure: Ammonia Dental: Exposed Pulp

### INJURY/TRAUMA Dental Caries

- Abdominal Injury Dental: Abscess

- Acute Compartment Syndrome Dental: Crown Loss

- Ankle Sprain/Strain Dental: Filling Loss

### Back Sprain/Strain Depression

### Chest Injury Diarrhea

- Dental: Avulsion (tooth loss) Eye Corneal Ulcer

### Elbow Dislocation Eye Infection

### Elbow Sprain/Strain Gastroenteritis

Eye Irritation/Abrasion Headache (Late)

Eye Penetration (foreign body) Headache (space adaptation)

### Finger Dislocation Hearing Loss

### Fingernail Delamination Secondary to EVA Hemorrhoids

Head Injury Herpes Zoster Reactivation (shingles)

### Hip Sprain/Strain Hypertension

### Hip/Proximal Femur Fracture Indigestion

### Knee Sprain/Strain Influenza

Lower Extremity Stress Fracture Insomnia (space adaptation)

### Lumbar Spine Fracture Medication Overdose/Adverse Reaction

### Neck Sprain/Strain Mouth Ulcer

Neurogenic Shock Nasal Congestion (space adaptation)

### Paresthesias Secondary to EVA Nephrolithiasis

Shoulder Dislocation Nose bleed (space adaptation)

### Shoulder Sprain/Strain Otitis Externa

### Skin Abrasion Otitis Media

### Skin Laceration Pharyngitis

### Traumatic Hypovolemic Shock Respiratory Infection

### Wrist Fracture Retinal Detachment

### Wrist Sprain/Strain Seizures

### MEDICAL ILLNESS Sepsis

### Abdominal Wall Hernia Skin Infection

### Abnormal Uterine Bleeding Skin Rash

### Acute Angle-Closure Glaucoma Sleep Disorder

### Acute Arthritis Small Bowel Obstruction

Acute Cholecystitis/Biliary Colic Space Motion Sickness (space adaptation)

Acute Diverticulitis Stroke (Cerebrovascular Accident)

### Acute Pancreatitis Sudden Cardiac Arrest

Acute Prostatitis Urinary Incontinence (space adaption)

Acute Sinusitis Urinary Retention (space adaptation)

Allergic Reaction (mild to moderate) Urinary Tract Infection

### Anaphylaxis Vaginal Yeast Infection

### Angina/Myocardial Infarction Visual Impairment and Increased Intracranial Pressure

(VIIP) (space adaptation) 25 30 JANUARY 2018

### IMM Service Request Report S-20171016-395

## Appendix C: Report References

1. ISS PRA Model v3.2.0 Fire and Ammonia Model Contributions to the Integrated Medical Model. 9-25-2015.

- Ref Type: Memo

2. Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114. 2011. Houston,

TX, NASA, Johnson Space Center. Ref Type: Report

3. Integrated Medical Model Project. Integrated Medical Model Software Requirements Specification. IMM-

SFTWR-008. 2017. Houston, Texas, KBRwyle IntegratedScience, Technology and Engineering.Ref Type: Report

4. Integrated Medical Model Project. Integrated Medical Model version 4 Assumptions and Limitations. IMM-

GEN-300. 2017. Houston, Texas, KBRwyle Integrated Science and Engineering Space Medicine Information Technology. Ref Type: Report 26 30 JANUARY 2018

---

## Source metadata

```yaml
source_filename: "medical-risk-for-cis-lunar-orbiter.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports"
source_url: "https://drive.google.com/file/d/1eWBJPQXcuPXUU6qDx1ONEJK-ahbv6c-G/view"
source_drive_id: "1eWBJPQXcuPXUU6qDx1ONEJK-ahbv6c-G"
source_sha256: 0badb49e8f6b55b4d2dc44390208ae7df0f1e04f3f650e86ae36b212bf346b97
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 26
ocr_performed: false
```
