# Deep Space Habitat

[View original PDF](https://drive.google.com/file/d/1XtgIeKSJ69pLYDfi71eOaKEhKmaBrCMG/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [EXECUTIVE SUMMARY](#executive-summary)
- [BACKGROUND](#background)
- [METHODS](#methods)
- [SUMMARY](#summary)
- [REFERENCES](#references)

---

S-20170411-381, DSH The following document contains data and analyses developed by the NASA Human Research Program Integrated Medical Model (IMM) v3.0, which has undergone rigorous testing and review within the NASA medical community per NASA Procedural Requirement 7150.2 and NASA Standard 7009, but still requires review by the external space flight medical community. Outstanding elements for review include: assessing the applicability of the IMM v3.0 outcomes, the relevance of stated assumptions, and clearly defining limitations. Given this, it is strongly recommended that care be taken when using the results of the simulation and the output should be weighted appropriately for its level of credibility with respect to informing any decision making. If you have questions regarding remaining review activities, please contact the IMM team. The scheduled release of IMM V4.0 in FY2017 follows completion of a full internal review against NASA standards as well as the successful external review from the appropriate medical and modeling communities.

## EXECUTIVE SUMMARY

This service request determined the CHI, probability of EVAC and probability of LOCL for the given design reference mission (DRM) using a medical capability (MedCap) that is baselined to ISS. These outcomes are reported in Tables 2-4. The top 10 influential conditions for EVAC and LOCL for both the Treated and MedCap scenarios are reported in Tables 5-10.

## BACKGROUND

The Integrated Medical Model (IMM) simulates medical events during space flight missions and estimates the impact of these events on crew health. The IMM is a stochastic model that uses Monte Carlo methodology to simulate missions. The IMM consists of a three-step process:

1. Design Reference Mission (DRM) and crew member characteristics are specified.

2. Medical events, treatment and outcomes for the DRM are randomly generated

based on pre-defined probability distributions.

3. The crew health index, evacuation and loss of crew life outcomes, and resource

utilization outcomes are summarized in a post-processing procedure.

## METHODS

### Crew and Mission Parameters

The DRM was configured using a standard crew profile, with mission length and number of EVAs established by the requestor. Table 1 below shows the crew profile for this service request. The DRM with a duration of 350 was specified with 1 female and 3 male crewmembers. The outcomes of certain IMM medical conditions are sex-specific and influenced by crew medical history. Pre-existing conditions that influence IMM outcomes include: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of any prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data.

The number of extravehicular activity (EVA) excursions influences the probability of EVA- dependent medical conditions. 1 14 APRIL 2017

S-20170411-381, DSH

Table 1: Crew Profile.

### Prior Abdominal

### Sex CAC Crowns Contacts EVA

Surgery Crew 1 Male Yes No No No No Crew 2 Male No No No Yes No Crew 3 Male No No Yes No No Crew 4 Female Yes Yes No No No

### Medical Conditions and Resources

The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data from the Integrated Medical Evidence Database (iMED). For each condition, the percentage of “best case” and “worst case” scenarios are also specified, as well as a defined set of medical resources that is required to treat the medical condition. All medical condition data inputs to the model are pulled from the iMED by an SQL query written in MATLAB scripts. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS (i.e. the ISS medical capabilities (MedCap)).

In the current version of IMM, medical conditions are not treated unless all essential medical resources are available. Resources are classified as essential or non-essential, and as consumable, or non-consumable. Consumable resources are decremented as required to treat medical events; if an item is essential, but has been depleted, then the given medical condition will go untreated.

### Main Outcomes

- The IMM primary medical outcomes include: total medical events (TME), crew health index

(CHI), probability of evacuation (EVAC), probability of loss of crew life (LOCL), and required resources. CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in- flight medical events and resources available to treat those conditions [3].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero 2 14 APRIL 2017

S-20170411-381, DSH represents complete crew impairment and one hundred represents a completely functional crew. EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria is met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available.

LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In the current version of the IMM, it is possible for crew members to be assigned more than one endstate of EVAC and/or LOCL. These assumptions should result in slightly high (conservative) IMM forecasts for the occurrence of EVAC and LOCL. Determining the probability of LOCL for the given DRM is the main objective of this service request. Required resources for treatment are tracked for each DRM. The number of each resource that is needed from the given available resource quantities to treat all medical events is recorded. If more of any particular resource is used than is available, then that is recorded as a “depleted” resource. The initial quantities for the available resources are baselined to the ISS environment with 6 month resupply.

### Modeling Approach

A simulation was run the provided DRM using IMM version three (v3). One hundred thousand (100,000) trials were run for the DRM, where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meets convergence criteria.

Convergence criteria are met when there is less than, or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last two - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV3ConvergenceReport.

- IMM outcomes were determined for the DRM under three scenarios: 1) ISS MedCap scenario

where all conditions are treated until the essential resources of the ISS MedCap are depleted;

2) All Treated scenario where supplies are limitless and all conditions are fully treated; and 3)

Untreated scenario where none of the conditions are treated. Total medical events (TME) and CHI are calculated as means, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% confidence intervals (CI) for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. 3 14 APRIL 2017

S-20170411-381, DSH

### RELEVANT IMM ASSUMPTIONS AND LIMITATIONS

1. The IMM is baselined to the ISS environment including medical capabilities.

2. All medical conditions are correctly diagnosed and all treatments are effective.

3. Conditions are treated in order of decreasing incidence and increasing crew member count

(i.e. crew member one is treated before crew member two for any given condition) with Space Adaptation conditions treated first.

4. When there are insufficient essential medical resources to treat a condition, all available

resources are consumed and the medical condition is considered untreated.

5. The IMM does not include a mission timeline. All conditions occur at launch on day one.

6. Medical conditions are independent of each other; i) a mission could end in more than one

evacuation or loss of crew life being considered for the same crew member, and ii) additional medical conditions can occur in a crew member assigned an end state of EVAC or LOCL.

7. IMM source data in the iMED database undergo periodic updates to ensure best alignment

to the real world system; this may affect the inclusion or exclusion of certain resources from the optimized MedCap, which would also effect resulting mass and volume.

8. Mass and volume for MedCap does not consider packaging materials.

### RESULTS AND DISCUSSION

The specified DRM was assessed using the IMM as described above in the Methods section above. One hundred thousand trials were simulated for the DRM with ISS MedCap to forecast IMM primary outcomes and resources required to treat each condition. The ISS MedCap is baselined to the ISS environment with 6 month resupply. Results of the main outcomes are reported in Tables 2-4 with the numbers for fully treated and completely untreated as reference. The top 10 influential conditions for EVAC and LOCL for the DRM are provided in Tables 5-10. Note the absence of Fingernail Delamination Secondary to EVA, Decompression Sickness Secondary to EVA, Paresthesias Secondary to EVA not included because no EVAs were performed. Also, the total number of EVACs and LOCLs is over all 100,000 trials of the simulation. Although it did not contribute to the top 10 influential conditions, during a review of the simulation results, it was observed that Otitis Media was contributing to LOCL when it went to the untreated worst case scenario. The untreated worst case LOCL is the result of this condition progressing into two other conditions. Otitis Media should have 0% LOCL. A change request (C2-20170309-384) has been entered to make the changes in iMED. 4 14 APRIL 2017

S-20170411-381, DSH

Table 2. Total Medical Events(TME) and CHI

2a. TME

|  | Mission Length |  | TME | 95% CI |  |  |
| --- | --------------- | --- | ------- | ------------ | --- | --- |
|  | 350 days |  | 121.45 | (101 , 143) |  |  |
### Mean Total Medical Events with Confidence Interval

121.45

### Mean TME

|  | 0  20 | 40  60 | 80 | 100 | 120  140 | 160 |
| --- | ------ | ------- | --- | ---- | --------- | -------------- |
|  |  |  |  | 5 |  | 14 APRIL 2017 |
S-20170411-381, DSH 2b. CHI

|  |  | CHI (%) |  | 95% CI |  |  |  |
| --- | ---------- | -------- | --- | ---------------- | --- | --- | --- |
|  | Treated | 91.20 |  | (74.56 , 98.23) |  |  |  |
|  | MedCap | 84.83 |  | (60.66 , 97.13) |  |  |  |
|  | Untreated | 0.62 |  | (0 , 6.62) |  |  |  |
### Mean CHI with Confidence Intervals

91.2 84.93

### Treated CHI

### Medkit CHI

### Untreated CHI

0.62

|  | 0 | 20 | 40 | 60 | 80 | 100 |  |
| --- | --- | --- | --- | --- | --- | ---- | -------------- |
|  |  |  |  | 6 |  |  | 14 APRIL 2017 |
S-20170411-381, DSH

Table 3. Probability of EVAC

|  |  | pEVAC | 95% CI |  | Odds |  |
| --- | ---------- | ------- | ------------------ | --- | -------- | --- |
|  | Treated | 0.0507 | (0.0492 , 0.0520) |  | 1 in 20 |  |
|  | MedCap | 0.2263 | (0.2238 , 0.2288) |  | 1 in 4 |  |
|  | Untreated | 0.7073 | (0.7047 , 0.7102) |  | 1 in 1 |  |
### Probability of EVAC with Confidence Intervals

0.0507 0.2263

### Treated EVAC

### Medkit EVAC

### Untreated EVAC

0.7073

|  | 0  0.1 | 0.2  0.3 | 0.4 | 0.5  0.6 | 0.7  0.8 |  |
| --- | ------- | --------- | ---- | --------- | --------- | -------------- |
|  |  |  |  | 7 |  | 14 APRIL 2017 |
S-20170411-381, DSH

Table 4. Probability of LOCL

|  |  | pLOCL | 95% CI |  | Odds |  |  |
| --- | ---------- | ------- | ------------------ | --- | --------- | --- | --- |
|  | Treated | 0.0062 | (0.0057 , 0.0066) |  | 1 in 161 |  |  |
|  | MedCap | 0.0078 | (0.0072 , 0.0083) |  | 1 in 128 |  |  |
|  | Untreated | 0.0271 | (0.0261 , 0.0281) |  | 1 in 37 |  |  |
### Probability of LOCL with Confidence Intervals

0.0062 0.0078

### Treated LOCL

### Medkit LOCL

### Untreated LOCL

0.0271

|  | 0  0.005 | 0.01 | 0.015 | 0.02 | 0.025 | 0.03 |  |
| --- | --------- | ----- | ------ | ----- | ------ | ----- | -------------- |
|  |  |  |  | 8 |  |  | 14 APRIL 2017 |
S-20170411-381, DSH

Table 5. DSH 350 Days Influential Conditions for EVAC – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | EVAC | Contribution | Percent |
| ------ | -------- | ------------------------- | --- | ----- | ------------- | -------- |
| WORST | TREATED | VISUAL IMPAIRMENT AND/OR |  | 966 | 18.57 | 18.57 |

### CASE  INCREASED INTRACRANIAL

PRESSURE (VIIP)(SPACE ADAPTATION)

| WORST | TREATED | NEPHROLITHIASIS |  | 586 | 11.27 | 29.84 |
| ------ | -------- | ---------------- | --- | ---- | ------ | ------ |

CASE

| WORST | TREATED | DENTAL ABSCESS |  | 324 | 6.23 | 36.07 |
| ------ | -------- | --------------- | --- | ---- | ----- | ------ |

CASE

| WORST | TREATED | SEPSIS |  | 317 | 6.09 | 42.16 |
| ------ | -------- | ------- | --- | ---- | ----- | ------ |

CASE

| WORST | TREATED | SMOKE INHALATION |  | 295 | 5.67 | 47.84 |
| ------ | -------- | ----------------- | --- | ---- | ----- | ------ |

CASE

| BEST | TREATED | SMALL BOWEL OBSTRUCTION |  | 200 | 3.85 | 51.68 |
| ----- | -------- | ------------------------ | --- | ---- | ----- | ------ |

CASE

| WORST | TREATED | WRIST FRACTURE |  | 179 | 3.44 | 55.12 |
| ------ | -------- | --------------- | --- | ---- | ----- | ------ |

CASE WORST  TREATED  HIP/PROXIMAL FEMUR FRACTURE  136  2.61  57.74 CASE

| WORST | TREATED | BACK SPRAIN/STRAIN |  | 134 | 2.58 | 60.32 |
| ------ | -------- | ------------------- | --- | ---- | ----- | ------ |

CASE

| WORST | TREATED | STROKE (CEREBROVASCULAR |  | 120 | 2.31 | 62.62 |
| ------ | -------- | ------------------------ | --- | ---- | ----- | ------ |

### CASE  ACCIDENT)

Table 6. DSH 350 Days Influential Conditions for EVAC – MedCap

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | EVAC | Contribution | Percent |
| ----- | ---------- | ------------------ | --- | ----- | ------------- | -------- |
| BEST | UNTREATED | EYE CHEMICAL BURN |  | 9052 | 32.23 | 32.23 |

CASE

| WORST | UNTREATED | SKIN INFECTION |  | 3220 | 11.47 | 43.70 |
| ------ | ---------- | --------------- | --- | ----- | ------ | ------ |

CASE

| WORST | UNTREATED | EYE CHEMICAL BURN |  | 2371 | 8.44 | 52.14 |
| ------ | ---------- | ------------------ | --- | ----- | ----- | ------ |

CASE

| BEST | UNTREATED | FINGER DISLOCATION |  | 1118 | 3.98 | 56.12 |
| ----- | ---------- | ------------------- | --- | ----- | ----- | ------ |

CASE WORST  UNTREATED  LOWER EXTREMITY (LE) STRESS  1049  3.74  59.85

### CASE  FRACTURE

| WORST | TREATED | VISUAL IMPAIRMENT AND/OR |  | 934 | 3.33 | 63.18 |
| ------ | -------- | ------------------------- | --- | ---- | ----- | ------ |

### CASE  INCREASED INTRACRANIAL PRESSURE

(VIIP)(SPACE ADAPTATION)

| WORST | UNTREATED | SKIN LACERATION |  | 842 | 3.00 | 66.18 |
| ------ | ---------- | ---------------- | --- | ---- | ----- | ------ |

CASE WORST  UNTREATED  HERPES ZOSTER REACTIVATION  685  2.44  68.62 CASE  (SHINGLES)

| BEST | UNTREATED | BURNS SECONDARY TO FIRE |  | 591 | 2.10 | 70.72 |
| ----- | ---------- | ------------------------ | --- | ---- | ----- | ------ |

CASE

| BEST | UNTREATED | NEPHROLITHIASIS |  | 429 | 1.53 | 72.25 |
| ----- | ---------- | ---------------- | --- | ---- | ----- | ------ |

CASE

|  |  |  | 9 |  |  | 14 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170411-381, DSH

Table 7. DSH 350 Days Influential Conditions for EVAC – Untreated

| Scenario | Treated | Medical Condition |  |  |  |  |
| --------- | -------- | ------------------ | --- | ------ | ------------- | ----------- |
|  |  |  |  | Total | Percent | Cumulative |
|  |  |  |  | EVAC | Contribution | Percent |

BEST

|  | UNTREATED | EYE CHEMICAL BURN |  | 39035 | 31.41 | 31.41 |
| --- | ---------- | ------------------ | --- | ------ | ------ | ------ |

CASE BEST

|  | UNTREATED | FINGER DISLOCATION |  | 7122 | 5.73 | 37.14 |
| --- | ---------- | ------------------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | EYE CHEMICAL BURN |  | 6280 | 5.05 | 42.19 |
| --- | ---------- | ------------------ | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | SKIN LACERATION |  | 5269 | 4.24 | 46.43 |
| --- | ---------- | ---------------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | BACK SPRAIN/STRAIN |  | 4507 | 3.63 | 50.06 |
| --- | ---------- | ------------------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | URINARY TRACT INFECTION |  | 4430 | 3.56 | 53.62 |
| --- | ---------- | ------------------------ | --- | ----- | ----- | ------ |

CASE BEST  URINARY RETENTION (SPACE

|  | UNTREATED |  |  | 3844 | 3.09 | 56.71 |
| --- | ---------- | --- | --- | ----- | ----- | ------ |

### CASE  ADAPTATION)

WORST

|  | UNTREATED | RESPIRATORY INFECTION |  | 3516 | 2.83 | 59.54 |
| --- | ---------- | ---------------------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | DIARRHEA |  | 3484 | 2.80 | 62.34 |
| --- | ---------- | --------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | ACUTE SINUSITIS |  | 3319 | 2.67 | 65.01 |
| --- | ---------- | ---------------- | --- | ----- | ----- | ------ |

CASE

Table 8. DSH 350 Days Influential Conditions for LOCL – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | LOCL | Contribution | Percent |
| --- | --- | --- | --- | ----- | ------------- | -------- |

WORST

|  | TREATED | SEPSIS |  | 163 | 26.16 | 26.16 |
| --- | -------- | ------- | --- | ---- | ------ | ------ |

CASE WORST

|  | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 92 | 14.77 | 40.93 |
| --- | -------- | ---------------------------- | --- | --- | ------ | ------ |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED |  |  | 72 | 11.56 | 52.49 |
| --- | -------- | --- | --- | --- | ------ | ------ |

### CASE  REACTION

WORST  STROKE (CEREBROVASCULAR

|  | TREATED |  |  | 57 | 9.15 | 61.64 |
| --- | -------- | --- | --- | --- | ----- | ------ |

### CASE  ACCIDENT)

WORST

|  | TREATED | SMOKE INHALATION |  | 53 | 8.51 | 70.14 |
| --- | -------- | ----------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | HEAD INJURY |  | 41 | 6.58 | 76.73 |
| --- | -------- | ------------ | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | TOXIC EXPOSURE (AMMONIA) |  | 38 | 6.10 | 82.83 |
| --- | -------- | ------------------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | CHEST INJURY |  | 37 | 5.94 | 88.76 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | APPENDICITIS |  | 31 | 4.98 | 93.74 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | SUDDEN CARDIAC ARREST |  | 12 | 1.93 | 95.67 |
| --- | -------- | ---------------------- | --- | --- | ----- | ------ |

CASE

|  |  |  | 10 |  |  | 14 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170411-381, DSH

Table 9. DSH 350 Days Influential Conditions for LOCL – MedCap

| Scenario | Treated | Medical Condition |  |  |  |  |
| --------- | -------- | ------------------ | --- | ------ | ------------- | ----------- |
|  |  |  |  | Total | Percent | Cumulative |
|  |  |  |  | LOCL | Contribution | Percent |

WORST

|  | TREATED | SEPSIS |  | 124 | 15.82 | 15.82 |
| --- | -------- | ------- | --- | ---- | ------ | ------ |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED |  |  | 72 | 9.18 | 25.00 |
| --- | -------- | --- | --- | --- | ----- | ------ |

### CASE  REACTION

WORST

|  | UNTREATED | SEPSIS |  | 72 | 9.18 | 34.18 |
| --- | ---------- | ------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 69 | 8.80 | 42.98 |
| --- | -------- | ---------------------------- | --- | --- | ----- | ------ |

CASE WORST  STROKE (CEREBROVASCULAR

|  | TREATED |  |  | 56 | 7.14 | 50.13 |
| --- | -------- | --- | --- | --- | ----- | ------ |

### CASE  ACCIDENT)

WORST

|  | TREATED | SMOKE INHALATION |  | 51 | 6.51 | 56.63 |
| --- | -------- | ----------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | HEAD INJURY |  | 38 | 4.85 | 61.48 |
| --- | -------- | ------------ | --- | --- | ----- | ------ |

CASE BEST

|  | UNTREATED | APPENDICITIS |  | 37 | 4.72 | 66.20 |
| --- | ---------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | TOXIC EXPOSURE (AMMONIA) |  | 35 | 4.46 | 70.66 |
| --- | -------- | ------------------------- | --- | --- | ----- | ------ |

CASE BEST

|  | UNTREATED | SEPSIS |  | 33 | 4.21 | 74.87 |
| --- | ---------- | ------- | --- | --- | ----- | ------ |

CASE

Table 10. DSH 350 Days Influential Conditions for LOCL – Untreated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | LOCL | Contribution | Percent |
| --- | --- | --- | --- | ----- | ------------- | -------- |

WORST

|  | UNTREATED | SMOKE INHALATION |  | 966 | 35.10 | 35.10 |
| --- | ---------- | ----------------- | --- | ---- | ------ | ------ |

CASE WORST

|  | UNTREATED | SEPSIS |  | 317 | 11.52 | 46.62 |
| --- | ---------- | ------- | --- | ---- | ------ | ------ |

CASE BEST

|  | UNTREATED | SEPSIS |  | 312 | 11.34 | 57.96 |
| --- | ---------- | ------- | --- | ---- | ------ | ------ |

CASE BEST

|  | UNTREATED | APPENDICITIS |  | 131 | 4.76 | 62.72 |
| --- | ---------- | ------------- | --- | ---- | ----- | ------ |

CASE WORST  STROKE (CEREBROVASCULAR

|  | UNTREATED |  |  | 120 | 4.36 | 67.08 |
| --- | ---------- | --- | --- | ---- | ----- | ------ |

### CASE  ACCIDENT)

WORST

|  | UNTREATED | CHOKING/OBSTRUCTED AIRWAY |  | 104 | 3.78 | 70.86 |
| --- | ---------- | -------------------------- | --- | ---- | ----- | ------ |

CASE BEST

|  | UNTREATED | ANAPHYLAXIS |  | 100 | 3.63 | 74.49 |
| --- | ---------- | ------------ | --- | ---- | ----- | ------ |

CASE WORST

|  | UNTREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 92 | 3.34 | 77.83 |
| --- | ---------- | ---------------------------- | --- | --- | ----- | ------ |

CASE WORST

|  | UNTREATED | HEAD INJURY |  | 79 | 2.87 | 80.70 |
| --- | ---------- | ------------ | --- | --- | ----- | ------ |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | UNTREATED |  |  | 77 | 2.80 | 83.50 |
| --- | ---------- | --- | --- | --- | ----- | ------ |

### CASE  REACTION

|  |  |  | 11 |  |  | 14 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170411-381, DSH

## SUMMARY

This service request provides estimates of the TME, CHI, probability of EVAC and LOCL for the given DRM using a MedCap that is baselined to the ISS. Medical conditions secondary to EVA were not included because EVAs were not included in the DRM. The main outcomes and top 10 Influential Conditions for EVAC and LOCL for the Treated, Untreated, and MedCap scenarios are reported for the DRM. The IMM is baselined to the ISS environment. Therefore, caution should be used when using the IMM to assess DSH medical risk.

## REFERENCES

1. Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114.

2011. Houston, TX, NASA, Johnson Space Center, (document update in progress).

2. Integrated Medical Model Project. Integrated Medical Model Functional Requirements

Document. JSC-66110. 2011. Houston, Texas, NASA, Johnson Space Center, (document update in progress).

3. Integrated Medical Model Project. Integrated Medical Model v3 Technical Description

Report. JSC-xxxxx. 2015. Houston, TX, NASA JSC, (document update in progress).

4. NASA technical standard for models and simulations 7009 (NASA STD 7009). 1-58. 7-11-

2008 (reapproved 7-10-2013). Washington D.C., NASA.

5. ISS Medical Checklist (Med CL), 04 June 2014, NASA Johnson Space Center, Medical

Operations Group. 12 14 APRIL 2017

S-20170411-381, DSH

APPENDIX A – IMM STATUS AT TIME OF SERVICE REQUEST REPORT

Validation status for IMM  IMM V&V Matrix: The following bar chart shows the IMM v3.0 MATLAB status of IMM validation for each IMM element listed.

- Compliance with NASA-  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6); however

Standard-7009 requirements  there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been fully attained.

|  |  | Compliant | Compliance Incomplete |  |  |  | Not applicable |  |  |
| --- | --- | ----------- | ------------------------ | --- | --- | --- | --------------- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |
|  |  | 36 |  | 5 |  |  | 5 |  |  |
- IMM Credibility Matrix: The following table shows the overall IMM v3.0 MATLAB credibility assessment score (CAS), individual factor CAS,

Current NASA-Standard- 7009 credibility assessment  customer-specified sufficiency thresholds, and weighted scores. Legend depicts CAS score designated range and color assignments from NASA-

| score | Standard-7009. |  |  |  |  |  |  |  |  |
| ------ | --------------- | --- | ------- | --- | ------------ | --- | ------------- | --------- | -------- |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  | Factor |  | Sufficiency |  | Factor Score | Weighted | Overall |
|  |  |  |  |  | Thresholds |  |  | Scores | Score |
|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --------------- | --- | --- | ---- | ---- | ------- | --- |
|  |  |  | Verification |  |  | 4 | 3.7 | 0.28 |  |
|  |  |  | Validation |  |  | 3 | 3 | 0.45 |  |
|  |  |  | Input Pedigree |  |  | 3 | 3 | 0.53 |  |
|  |  |  | Results Uncertainty |  |  | 3 | 3 | 0.60 | 3.06 |
| --- | --- | --- | -------------------- | --- | --- | ---- | --- | ------- | ------- |
|  |  |  | Results Robustness |  |  | 3 | 3 | 0.45 |  |
|  |  |  | Use History |  |  | 3 | 3 | 0.45 |  |
|  |  |  | M&S Management |  |  |  |  | 0.10 |  |
| --- | --- | --- | --------------------- | --- | --- | ---- | --- | ------- | --- |
|  |  |  |  |  |  | 2 | 2 |  |  |
|  |  |  | People Qualification |  |  | 4 | 4 | 0.20 |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Additional verification and | none |  |  |  |  |  |  |  |  |
| ---------------------------- | ----- | --- | --- | --- | --- | --- | --- | --- | --- |

validation information applicable to this analysis

| Integrated Medical Evidence | iMED Lockdown ID: (26), created on (2/21/2017) |  |  |  |  |  |  |  |  |
| ---------------------------- | ----------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- |

Database (iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v3.0 with release 2014a of MATLAB software. MATLAB and all other MathWorks product or version  service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to the | None |  |  |  |  |  |  |  |  |
| -------------------------- | ----- | --- | --- | --- | --- | --- | --- | --- | --- |

code for analysis

|  |  |  | 13 |  |  |  |  | 14 APRIL 2017 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | -------------- | --- |
S-20170411-381, DSH

- APPENDIX B: LIST OF THE CURRENT 100 MEDICAL CONDITIONS USED IN THE IMM.

ENVIRONMENTAL MEDICAL ILLNESS (continued)

### Acute Radiation Syndrome Anxiety

### Altitude Sickness Appendicitis

Barotrauma (ear/sinus block) Atrial Fibrillation/Atrial Flutter Burns secondary to Fire Back Pain (space adaptation)

### Decompression Sickness Secondary to EVA Behavioral Emergency

Eye Chemical Burn Cardiogenic Shock Secondary to Myocardial infarction Headache (CO2 induced) Choking/Obstructed Airway Smoke Inhalation Constipation (space adaptation)

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

Lower Extremity (LE) Stress Fracture Insomnia (space adaptation)

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

Angina/Myocardial Infarction Visual Impairment and Increased Intracranial Pressure (VIIIP) (space adaptation) 14 14 APRIL 2017

---

## Source metadata

```yaml
source_filename: "deep-space-habitat.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports"
source_url: "https://drive.google.com/file/d/1XtgIeKSJ69pLYDfi71eOaKEhKmaBrCMG/view"
source_drive_id: "1XtgIeKSJ69pLYDfi71eOaKEhKmaBrCMG"
source_sha256: 86f7b874ab95ab7246fd6f102d3c509d56cc67d3959cd9d543335d6382e1ccb7
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
