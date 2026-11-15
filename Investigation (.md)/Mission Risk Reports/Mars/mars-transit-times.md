# Mars Transit Times

[View original PDF](https://drive.google.com/file/d/1qCvJfXycU9PPxLKUqGxkaSz5CPrZqJKV/view) · **21 pages**

**Collection:** Mission Risk Reports/Mars

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [EXECUTIVE SUMMARY](#executive-summary)
- [BACKGROUND](#background)
- [METHODS](#methods)
- [SUMMARY](#summary)
- [REFERENCES](#references)

---

The following document contains data and analyses developed by the NASA Human Research Program Integrated Medical Model (IMM) v3.0, which has undergone rigorous testing and review within the NASA medical community per NASA Procedural Requirement 7150.2 and NASA Standard 7009, but still requires review by the external space flight medical community. Outstanding elements for review include: assessing the applicability of the IMM v3.0 outcomes, the relevance of stated assumptions, and clearly defining limitations. Given this, it is strongly recommended that care be taken when using the results of the simulation and the output should be weighted appropriately for its level of credibility with respect to informing any decision making. If you have questions regarding remaining review activities, please contact the IMM team. The scheduled release of IMM V4.0 in FY2015 follows completion of a full internal review against NASA standards as well as the successful external review from the appropriate medical and modeling communities.

## EXECUTIVE SUMMARY

This service request determined the CHI, probability of EVAC and probability of LOCL for 6 design reference missions (DRM) using a medical capability (MedCap) that is baselined to ISS. These outcomes are reported in Tables 2-4. The top 10 influential conditions for EVAC and LOCL for both the Treated and MedCap scenarios are reported in Tables 5-28.

## BACKGROUND

The Integrated Medical Model (IMM) simulates medical events during space flight missions and estimates the impact of these events on crew health. The IMM is a stochastic model that uses Monte Carlo methodology to simulate missions. The IMM consists of a three-step process:

1. Design Reference Mission (DRM) and crew member characteristics are specified.

2. Medical events, treatment and outcomes for the DRM are randomly generated

based on pre-defined probability distributions.

3. The crew health index, evacuation and loss of crew life outcomes, and resource

utilization outcomes are summarized in a post-processing procedure.

## METHODS

### Crew and Mission Parameters

The DRMs were configured using a standard Mars crew profile, with mission length and number of EVAs established by the requestor. Table 1 below shows the standard Mars crew profile for this service request. The crew profile, which consists of 3 female and 3 male crewmembers, was used for all 6 DRMs.

The outcomes of certain IMM medical conditions are sex-specific and influenced by crew medical history. Pre-existing conditions that influence IMM outcomes include: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of any prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data.

The number of extravehicular activity (EVA) excursions influences the probability of EVA- dependent medical conditions. 1 17 APRIL 2017

Table 1: Standard Mars Crew Profile.

### Prior Abdominal

|  |  | Sex | CAC | Crowns | Contacts |  | EVA |
| --- | --- | ---- | ---- | ------- | --------- | --- | ---- |

Surgery

|  | Crew 1 | Male | Yes | No | No | No | No |
| --- | ------- | ------- | ---- | ---- | ---- | ---- | --- |
|  | Crew 2 | Male | No | No | No | Yes | No |
|  |  |  |  |  |  | No | No |
|  | Crew 3 | Male | No | No | Yes |  |  |
|  | Crew 4 | Female | No | No | No | No | No |
|  | Crew 5 | Female | Yes | No | No | No | No |
|  | Crew 6 | Female | No | Yes | No | No | No |
### Medical Conditions and Resources

The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data from the Integrated Medical Evidence Database (iMED). For each condition, the percentage of “best case” and “worst case” scenarios are also specified, as well as a defined set of medical resources that is required to treat the medical condition. All medical condition data inputs to the model are pulled from the iMED by an SQL query written in MATLAB scripts. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS (i.e. the ISS medical capabilities (MedCap)).

In the current version of IMM, medical conditions are not treated unless all essential medical resources are available. Resources are classified as essential or non-essential, and as consumable, or non-consumable. Consumable resources are decremented as required to treat medical events; if an item is essential, but has been depleted, then the given medical condition will go untreated.

### Main Outcomes

- The IMM primary medical outcomes include: total medical events (TME), crew health index

(CHI), probability of evacuation (EVAC), probability of loss of crew life (LOCL), and required resources.

CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in- flight medical events and resources available to treat those conditions [3].

CHI = (1- (QAMTL ÷ Mission Length)) x 100

For a given condition, QAMTL is determined by summing the product of functional impairment

|  |  |  |  |  | 2 |  | 17 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | --- | -------------- |
and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew. EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria is met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available.

LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In the current version of the IMM, it is possible for crew members to be assigned more than one endstate of EVAC and/or LOCL. These assumptions should result in slightly high (conservative) IMM forecasts for the occurrence of EVAC and LOCL. Determining the probability of LOCL for the given DRMs is the main objective of this service request. Required resources for treatment are tracked for each DRM. The number of each resource that is needed from the given available resource quantities to treat all medical events is recorded. If more of any particular resource is used than is available, then that is recorded as a “depleted” resource. The initial quantities for the available resources are baselined to the ISS environment with 6 month resupply.

### Modeling Approach

A simulation was run for each of the 6 Mars Transit DRMs using IMM version three (v3). One hundred thousand (100,000) trials were run for the DRM, where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meets convergence criteria. Convergence criteria are met when there is less than, or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last two - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV3ConvergenceReport. IMM outcomes were determined for the DRM under the ISS MedCap scenario where all conditions are treated until the essential resources of the ISS MedCap are depleted. Total medical events (TME) and CHI are calculated as means, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% confidence intervals (CI) for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3].

### RELEVANT IMM ASSUMPTIONS AND LIMITATIONS

3 17 APRIL 2017

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

The specified DRM was assessed using the IMM as described above in the Methods section above. One hundred thousand trials were simulated for the DRM with ISS MedCap to forecast IMM primary outcomes and resources required to treat each condition. The ISS MedCap is baselined to the ISS environment with 6 month resupply. Results of the main outcomes are reported in Tables 2-4 with the numbers for fully treated as reference. The top 10 influential conditions for EVAC and LOCL for each DRM are provided in Tables 5-28. Note the absence of Fingernail Delamination Secondary to EVA, Decompression Sickness Secondary to EVA, Paresthesias Secondary to EVA not included because no EVAs were performed. Also, the total number of EVACs and LOCLs is over all 100,000 trials of the simulation.

Although it did not contribute to the top 10 influential conditions, during a review of the simulation results, it was observed that Otitis Media was contributing to LOCL when it went to the untreated worst case scenario. The untreated worst case LOCL is the result of this condition progressing into two other conditions. Otitis Media should have 0% LOCL. A change request (C2-20170309-384) has been entered to make the changes in iMED. 4 17 APRIL 2017

Table 2. Mars Transit TimesTotal Medical Events(TME) and CHI

2a. TME

|  | Mission Length (days) |  |  | TME |  | 95% CI |  |  |
| --- | ---------------------- | ----- | --- | ------- | --- | ----------- | --- | --- |
|  |  | 150 |  | 90.28 |  | (73, 108) |  |  |
|  |  | 204 |  | 115.73 |  | (96, 136) |  |  |
|  |  | 335 |  | 177.63 |  | (152, 204) |  |  |
|  |  | 517 |  | 263.40 |  | (232, 296) |  |  |
|  |  | 746 |  | 371.54 |  | (334, 411) |  |  |
|  |  | 1103 |  | 540.01 |  | (493, 588) |  |  |
2b. CHI

|  |  | Mission Length (days) |  |  | CHI (%) |  | 95% CI |  |
| --- | --- | ---------------------- | ---- | --- | -------- | --- | --------------- | --- |
|  |  |  | 150 |  | 93.90 |  | (82.50, 98.40) |  |
|  |  |  | 204 |  | 93.15 |  | (81.16, 98.19) |  |
|  |  |  | 335 |  | 91.25 |  | (78.20, 97.54) |  |

Treated

|  |  |  | 517 |  | 88.61 |  | (74.40, 96.36) |  |
| --- | --- | --- | ----- | --- | ------ | --- | --------------- | --- |
|  |  |  | 746 |  | 85.26 |  | (69.74, 94.66) |  |
|  |  |  | 1103 |  | 79.96 |  | (62.67, 91.61) |  |
|  |  |  | 150 |  | 91.99 |  | (77.97, 98.08) |  |
|  |  |  | 204 |  | 89.08 |  | (72.31, 97.42) |  |
|  |  |  | 335 |  | 74.54 |  | (49.86, 91.97) |  |

MedCap

|  |  |  | 517 |  | 44.23 |  | (19.54, 69.60) |  |
| --- | --- | --- | ----- | --- | ------ | --- | --------------- | --- |
|  |  |  | 746 |  | 18.34 |  | (2.09, 36.40) |  |
|  |  |  | 1103 |  | 4.58 |  | (0, 15.2) |  |
Table 3. Mars Transit Times Probability of EVAC

|  |  | Mission Length (days) |  |  | pEVAC |  | 95% CI | Odds |
| --- | --- | ---------------------- | ---- | --- | ------- | --- | ----------------- | -------- |
|  |  |  | 150 |  | 0.0418 |  | (0.0405,0.0430) | 1 in 24 |
|  |  |  | 204 |  | 0.0506 |  | (0.0492, 0.0519) | 1 in 20 |
|  |  |  | 335 |  | 0.0713 |  | (0.0697, 0.0728) | 1 in 14 |

Treated

|  |  |  | 517 |  | 0.1006 |  | (0.0989, 0.1025) | 1 in 10 |
| --- | --- | --- | ----- | --- | ------- | --- | ----------------- | -------- |
|  |  |  | 746 |  | 0.1355 |  | (0.1335, 0.1375) | 1 in 7 |
|  |  |  | 1103 |  | 0.1900 |  | (0.1875, 0.1923) | 1 in 5 |
|  |  |  | 150 |  | 0.1453 |  | (0.1433, 0.1473) | 1 in 7 |
|  |  |  | 204 |  | 0.2399 |  | (0.2373, 0.2425) | 1 in 4 |
|  |  |  | 335 |  | 0.5186 |  | (0.5154, 0.5219) | 1 in 2 |

MedCap

|  |  |  | 517 |  | 0.8159 |  | (0.8136, 0.8184) | 1 in 1 |
| --- | --- | --- | ----- | --- | ------- | --- | ----------------- | -------------- |
|  |  |  | 746 |  | 0.9428 |  | (0.9415, 0.9442) | 1 in 1 |
|  |  |  | 1103 |  | 0.9899 |  | (0.9893, 0.9905) | 1 in 1 |
|  |  |  |  |  | 5 |  |  | 17 APRIL 2017 |
Table 4. Mars Transit Times Probability of LOCL

|  |  | Mission Length (days) |  | pLOCL | 95% CI |  | Odds |
| --- | --- | ---------------------- | ---- | ------- | ----------------- | --- | --------- |
|  |  |  | 150 | 0.0042 | (0.0038, 0.0046) |  | 1 in 238 |
|  |  |  | 204 | 0.0056 | (0.0052, 0.0061) |  | 1 in 179 |
| --- | --- | --- | ---- | ------- | ----------------- | --- | --------- |
|  |  |  | 335 | 0.0089 | (0.0084, 0.0095) |  | 1 in 112 |

Treated

|  |  |  | 517 | 0.0132 | (0.0125, 0.0139) |  | 1 in 76 |
| --- | --- | --- | ---- | ------- | ----------------- | --- | -------- |
|  |  |  | 746 | 0.0189 | (0.0180, 0.0198) |  | 1 in 53 |
| --- | --- | --- | ----- | ------- | ----------------- | --- | --------- |
|  |  |  | 1103 | 0.0290 | (0.0281, 0.0301) |  | 1 in 34 |
|  |  |  | 150 | 0.0050 | (0.0045, 0.0054) |  | 1 in 200 |
|  |  |  | 204 | 0.0072 | (0.0067, 0.0078) |  | 1 in 139 |
|  |  |  | 335 | 0.0136 | (0.0129, 0.0143) |  | 1 in 74 |

MedCap

|  |  |  | 517 | 0.0276 | (0.0267, 0.0286) |  | 1 in 36 |
| --- | --- | --- | ----- | ------- | ----------------- | --- | -------- |
|  |  |  | 746 | 0.0439 | (0.0428, 0.0453) |  | 1 in 23 |
|  |  |  | 1103 | 0.0741 | (0.0725, 0.0757) |  | 1 in 14 |
Table 5. Mars 150 Day Influential Conditions for EVAC – Treated

### Scenario  Treated  Medical Condition  Total EVAC  Percent  Cumulative

|  |  |  |  |  |  | Contribution | Percent |
| --- | --- | --- | --- | --- | --- | ------------- | -------- |

WORST  TREATED  VISUAL IMPAIRMENT AND/OR INCREASED  1559  36.61  36.61

|  | CASE |  | INTRACRANIAL PRESSURE (VIIP)(SPACE |  |  |  |  |
| --- | ----- | --- | ----------------------------------- | --- | --- | --- | --- |

ADAPTATION)

|  | WORST | TREATED | NEPHROLITHIASIS |  | 395 | 9.28 | 45.89 |
| --- | ------ | -------- | ---------------- | --- | ---- | ----- | ------ |

CASE

|  | WORST | TREATED | SEPSIS |  | 213 | 5.00 | 50.89 |
| --- | ------ | -------- | ------- | --- | ---- | ----- | ------ |

CASE

|  | WORST | TREATED | SMOKE INHALATION |  | 193 | 4.53 | 55.43 |
| --- | ------ | -------- | ----------------- | --- | ---- | ----- | ------ |

CASE

|  | WORST | TREATED | DENTAL ABSCESS |  | 192 | 4.51 | 59.93 |
| --- | ------ | -------- | --------------- | --- | ---- | ----- | ------ |

CASE

|  | WORST | TREATED | WRIST FRACTURE |  | 126 | 2.96 | 62.89 |
| --- | ------ | -------- | --------------- | --- | ---- | ----- | ------ |

CASE

|  | BEST | TREATED | SMALL BOWEL OBSTRUCTION |  | 94 | 2.21 | 65.10 |
| --- | ----- | -------- | ------------------------ | --- | --- | ----- | ------ |

CASE

|  | WORST | TREATED | BACK SPRAIN/STRAIN |  | 78 | 1.83 | 66.93 |
| --- | ------ | -------- | ------------------- | --- | --- | ----- | ------ |

CASE

|  | WORST | TREATED | STROKE (CEREBROVASCULAR |  | 73 | 1.71 | 68.65 |
| --- | ------ | -------- | ------------------------ | --- | --- | ----- | -------------- |
|  | CASE |  | ACCIDENT) |  |  |  |  |
|  |  | TREATED |  |  | 71 | 1.67 | 70.31 |
|  | BEST |  | STROKE (CEREBROVASCULAR |  |  |  |  |
|  | CASE |  | ACCIDENT) |  |  |  |  |
|  |  |  |  | 6 |  |  | 17 APRIL 2017 |
S-20170306-375, Mars Transit Times

Table 6. Mars 150 Day Influential Conditions for EVAC – MedCap

### Scenari  Treated  Medical Condition  Total EVAC  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --------------- | ------------------ | ----- | ------------- | -------- |
| BEST  UNTREATE | EYE CHEMICAL BURN | 5019 | 30.37 | 30.37 |

### CASE  D

| WORST  UNTREATE | SKIN INFECTION | 2118 | 12.82 | 43.19 |
| ---------------- | --------------- | ----- | ------ | ------ |

### CASE  D

| WORST  TREATED | VISUAL IMPAIRMENT AND/OR | 1470 | 8.90 | 52.09 |
| --------------- | ------------------------- | ----- | ----- | ------ |
| CASE | INCREASED INTRACRANIAL |  |  |  |

PRESSURE (VIIP)(SPACE ADAPTATION)

| WORST  UNTREATE | EYE CHEMICAL BURN | 1296 | 7.84 | 59.93 |
| ---------------- | ------------------ | ----- | ----- | ------ |

### CASE  D

WORST  UNTREATE  LOWER EXTREMITY (LE) STRESS  776  4.70  64.63

| CASE  D | FRACTURE |  |  |  |
| --------------- | ------------------- | ---- | ----- | ------ |
| BEST  UNTREATE | FINGER DISLOCATION | 427 | 2.58 | 67.21 |

### CASE  D

| WORST  UNTREATE | SKIN LACERATION | 320 | 1.94 | 69.15 |
| ---------------- | ---------------- | ---- | ----- | ------ |

### CASE  D

WORST  UNTREATE  HERPES ZOSTER REACTIVATION  283  1.71  70.86

| CASE  D | (SHINGLES) |  |  |  |
| --------------- | ------------------------ | ---- | ----- | ------ |
| BEST  UNTREATE | BURNS SECONDARY TO FIRE | 262 | 1.59 | 72.45 |

### CASE  D

| BEST  UNTREATE | NEPHROLITHIASIS | 233 | 1.41 | 73.86 |
| --------------- | ---------------- | ---- | ----- | ------ |

### CASE  D

Table 7. Mars 204 Day Influential Conditions for EVAC – Treated

### Scenari  Treated  Medical Condition  Total EVAC  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --- | --- | --- | ------------- | -------- |

WORST  TREATE  VISUAL IMPAIRMENT AND/OR INCREASED  1540  29.72  29.72

| CASE  D | INTRACRANIAL PRESSURE (VIIP)(SPACE |  |  |  |
| -------- | ----------------------------------- | --- | --- | --- |

ADAPTATION)

| WORST  TREATE | NEPHROLITHIASIS | 536 | 10.34 | 40.06 |
| -------------- | ---------------- | ---- | ------ | ------ |

### CASE  D

|  | DENTAL ABSCESS | 286 | 5.52 | 45.58 |
| --- | --------------- | ---- | ----- | ------ |

### WORST  TREATE

### CASE  D

| WORST  TREATE | SEPSIS | 270 | 5.21 | 50.79 |
| -------------- | ------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | SMOKE INHALATION | 258 | 4.98 | 55.77 |
| -------------- | ----------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | WRIST FRACTURE | 163 | 3.15 | 58.92 |
| -------------- | --------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | BACK SPRAIN/STRAIN | 137 | 2.64 | 61.56 |
| -------------- | ------------------- | ---- | ----- | ------ |

### CASE  D

| BEST  TREATE | SMALL BOWEL OBSTRUCTION | 123 | 2.37 | 63.93 |
| ------------- | ------------------------ | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | STROKE (CEREBROVASCULAR | 105 | 2.03 | 65.96 |
| -------------- | ---------------------------- | ---- | ----- | ------ |
| CASE  D | ACCIDENT) |  |  |  |
| WORST  TREATE | TRAUMATIC HYPOVOLEMIC SHOCK | 85 | 1.64 | 67.60 |

### CASE  D

Page | 7

S-20170306-375, Mars Transit Times

Table 8. Mars 204 Day Influential Conditions for EVAC – MedCap

### Scenari  Treated  Medical Condition  Total EVAC  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --------------- | ------------------ | ------ | ------------- | -------- |
| BEST  UNTREATE | EYE CHEMICAL BURN | 12415 | 41.58 | 41.58 |

### CASE  D

| WORST  UNTREATE | SKIN INFECTION | 2773 | 9.29 | 50.87 |
| ---------------- | --------------- | ----- | ----- | ------ |

### CASE  D

| WORST  UNTREATE | EYE CHEMICAL BURN | 2663 | 8.92 | 59.79 |
| ---------------- | ------------------ | ----- | ----- | ------ |

### CASE  D

| WORST  TREATED | VISUAL IMPAIRMENT AND/OR | 1428 | 4.78 | 64.58 |
| --------------- | ------------------------- | ----- | ----- | ------ |
| CASE | INCREASED INTRACRANIAL |  |  |  |

PRESSURE (VIIP)(SPACE ADAPTATION) WORST  UNTREATE  LOWER EXTREMITY (LE) STRESS  1035  3.47  68.04

| CASE  D | FRACTURE |  |  |  |
| --------------- | ------------------- | ---- | ----- | ------ |
| BEST  UNTREATE | FINGER DISLOCATION | 787 | 2.64 | 70.68 |

### CASE  D

| WORST  UNTREATE | SKIN LACERATION | 562 | 1.88 | 72.56 |
| ---------------- | ---------------- | ---- | ----- | ------ |

### CASE  D

WORST  UNTREATE  HERPES ZOSTER REACTIVATION  463  1.55  74.11

| CASE  D | (SHINGLES) |  |  |  |
| --------------- | ------------------------ | ---- | ----- | ------ |
| BEST  UNTREATE | BURNS SECONDARY TO FIRE | 459 | 1.54 | 75.65 |

### CASE  D

| BEST  UNTREATE | NEPHROLITHIASIS | 424 | 1.42 | 77.07 |
| --------------- | ---------------- | ---- | ----- | ------ |

### CASE  D

Table 9. Mars 335 Day Influential Conditions for EVAC – Treated

### Scenari  Treated  Medical Condition  Total EVAC  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --- | --- | --- | ------------- | -------- |

WORST  TREATE  VISUAL IMPAIRMENT AND/OR INCREASED  1476  19.90  19.90

| CASE  D | INTRACRANIAL PRESSURE (VIIP)(SPACE |  |  |  |
| -------- | ----------------------------------- | --- | --- | --- |

ADAPTATION)

| WORST  TREATE | NEPHROLITHIASIS | 850 | 11.46 | 31.36 |
| -------------- | ---------------- | ---- | ------ | ------ |

### CASE  D

| WORST  TREATE | DENTAL ABSCESS | 494 | 6.66 | 38.03 |
| -------------- | --------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | SEPSIS | 428 | 5.77 | 43.80 |
| -------------- | ------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | SMOKE INHALATION | 397 | 5.35 | 49.15 |
| -------------- | ----------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | WRIST FRACTURE | 243 | 3.28 | 52.43 |
| -------------- | --------------- | ---- | ----- | ------ |

### CASE  D

| BEST  TREATE | SMALL BOWEL OBSTRUCTION | 181 | 2.44 | 54.87 |
| ------------- | ------------------------ | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | BACK SPRAIN/STRAIN | 176 | 2.37 | 57.24 |
| -------------- | ------------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | STROKE (CEREBROVASCULAR | 175 | 2.36 | 59.60 |
| -------------- | ------------------------ | ---- | ----- | ------ |
| CASE  D | ACCIDENT) |  |  |  |

Page | 8

S-20170306-375, Mars Transit Times

| BEST  TREATE | STROKE (CEREBROVASCULAR | 162 | 2.18 | 61.79 |
| ------------- | ------------------------ | ---- | ----- | ------ |
| CASE  D | ACCIDENT) |  |  |  |

Table 10. Mars 335 Day Influential Conditions for EVAC – MedCap

### Scenari  Treated  Medical Condition  Total EVAC  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --------------- | ------------------ | ------ | ------------- | -------- |
| BEST  UNTREATE | EYE CHEMICAL BURN | 39189 | 48.78 | 48.78 |

### CASE  D

| WORST  UNTREATE | EYE CHEMICAL BURN | 7316 | 9.11 | 57.89 |
| ---------------- | ------------------ | ----- | ----- | ------ |

### CASE  D

| WORST  UNTREATE | SKIN INFECTION | 4597 | 5.72 | 63.61 |
| ---------------- | --------------- | ----- | ----- | ------ |

### CASE  D

| BEST  UNTREATE | FINGER DISLOCATION | 3117 | 3.88 | 67.49 |
| --------------- | ------------------- | ----- | ----- | ------ |

### CASE  D

| WORST  UNTREATE | SKIN LACERATION | 2264 | 2.82 | 70.31 |
| ---------------- | ---------------- | ----- | ----- | ------ |

### CASE  D

WORST  UNTREATE  LOWER EXTREMITY (LE) STRESS  1683  2.09  72.40

| CASE  D | FRACTURE |  |  |  |
| ---------------- | -------------- | ----- | ----- | ------ |
| WORST  UNTREATE | EYE INFECTION | 1645 | 2.05 | 74.45 |

### CASE  D

| WORST  UNTREATE | URINARY TRACT INFECTION | 1644 | 2.05 | 76.50 |
| ---------------- | ------------------------ | ----- | ----- | ------ |

### CASE  D

| WORST  TREATED | VISUAL IMPAIRMENT AND/OR | 1376 | 1.71 | 78.21 |
| --------------- | ------------------------- | ----- | ----- | ------ |
| CASE | INCREASED INTRACRANIAL |  |  |  |

PRESSURE (VIIP)(SPACE ADAPTATION) WORST  UNTREATE  HERPES ZOSTER REACTIVATION  1275  1.59  79.80

| CASE  D | (SHINGLES) |  |  |  |
| -------- | ----------- | --- | --- | --- |
Table 11. Mars 517 Day Influential Conditions for EVAC – Treated

### Scenari  Treated  Medical Condition  Total EVAC  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --- | --- | --- | ------------- | -------- |

WORST  TREATE  VISUAL IMPAIRMENT AND/OR INCREASED  1488  14.04  14.04

| CASE  D | INTRACRANIAL PRESSURE (VIIP)(SPACE |  |  |  |
| -------- | ----------------------------------- | --- | --- | --- |

ADAPTATION)

| WORST  TREATE | NEPHROLITHIASIS | 1382 | 13.04 | 27.08 |
| -------------- | ---------------- | ----- | ------ | ------ |

### CASE  D

| WORST  TREATE | DENTAL ABSCESS | 726 | 6.85 | 33.93 |
| -------------- | --------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | SMOKE INHALATION | 657 | 6.20 | 40.13 |
| -------------- | ----------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | SEPSIS | 627 | 5.92 | 46.05 |
| -------------- | ------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | WRIST FRACTURE | 383 | 3.61 | 49.66 |
| -------------- | --------------- | ---- | ----- | ------ |

### CASE  D

| BEST  TREATE | SMALL BOWEL OBSTRUCTION | 286 | 2.70 | 52.36 |
| ------------- | ------------------------ | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | BACK SPRAIN/STRAIN | 282 | 2.66 | 55.02 |
| -------------- | ------------------- | ---- | ----- | ------ |

### CASE  D

WORST  TREATE  TRAUMATIC HYPOVOLEMIC SHOCK  236  2.23  57.25

### CASE  D

Page | 9

S-20170306-375, Mars Transit Times

WORST  TREATE  HIP/PROXIMAL FEMUR FRACTURE  227  2.14  59.39

### CASE  D

Table 12. Mars 517 Day Influential Conditions for EVAC – MedCap

### Scenari  Treated  Medical Condition  Total EVAC  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --------------- | ------------------ | ------ | ------------- | -------- |
| BEST  UNTREATE | EYE CHEMICAL BURN | 78229 | 43.53 | 43.53 |

### CASE  D

| BEST  UNTREATE | FINGER DISLOCATION | 13683 | 7.61 | 51.14 |
| --------------- | ------------------- | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | EYE CHEMICAL BURN | 13338 | 7.42 | 58.56 |
| ---------------- | ------------------ | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | SKIN LACERATION | 10171 | 5.66 | 64.22 |
| ---------------- | ---------------- | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | SKIN INFECTION | 7053 | 3.92 | 68.15 |
| ---------------- | --------------- | ----- | ----- | ------ |

### CASE  D

| WORST  UNTREATE | ACUTE SINUSITIS | 6412 | 3.57 | 71.71 |
| ---------------- | ---------------- | ----- | ----- | ------ |

### CASE  D

| WORST  UNTREATE | EYE INFECTION | 5590 | 3.11 | 74.82 |
| ---------------- | -------------- | ----- | ----- | ------ |

### CASE  D

| WORST  UNTREATE | URINARY TRACT INFECTION | 5339 | 2.97 | 77.80 |
| ---------------- | ------------------------ | ----- | ----- | ------ |

### CASE  D

WORST  UNTREATE  LOWER EXTREMITY (LE) STRESS  2704  1.50  79.30

| CASE  D | FRACTURE |  |  |  |
| -------- | --------- | --- | --- | --- |

WORST  UNTREATE  HERPES ZOSTER REACTIVATION  2445  1.36  80.66

| CASE  D | (SHINGLES) |  |  |  |
| -------- | ----------- | --- | --- | --- |
Table 13. Mars 746 Day Influential Conditions for EVAC – Treated

### Scenari  Treated  Medical Condition  Total EVAC  Percent  Cumulative

| o |  |  | Contribution | Percent |
| -------------- | ---------------- | ----- | ------------- | -------- |
| WORST  TREATE | NEPHROLITHIASIS | 1950 | 13.38 | 13.38 |

### CASE  D

WORST  TREATE  VISUAL IMPAIRMENT AND/OR INCREASED  1496  10.26  23.64

| CASE  D | INTRACRANIAL PRESSURE (VIIP)(SPACE |  |  |  |
| -------- | ----------------------------------- | --- | --- | --- |

ADAPTATION)

| WORST  TREATE | DENTAL ABSCESS | 1039 | 7.13 | 30.77 |
| -------------- | --------------- | ----- | ----- | ------ |

### CASE  D

| WORST  TREATE | SEPSIS | 989 | 6.79 | 37.55 |
| -------------- | ------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | SMOKE INHALATION | 896 | 6.15 | 43.70 |
| -------------- | ----------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | WRIST FRACTURE | 607 | 4.16 | 47.87 |
| -------------- | --------------- | ---- | ----- | ------ |

### CASE  D

| BEST  TREATE | SMALL BOWEL OBSTRUCTION | 410 | 2.81 | 50.68 |
| ------------- | ------------------------ | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | BACK SPRAIN/STRAIN | 401 | 2.75 | 53.43 |
| -------------- | ------------------- | ---- | ----- | ------ |

### CASE  D

WORST  TREATE  HIP/PROXIMAL FEMUR FRACTURE  336  2.31  55.74

### CASE  D

Page | 10

S-20170306-375, Mars Transit Times

WORST  TREATE  TRAUMATIC HYPOVOLEMIC SHOCK  326  2.24  57.97

### CASE  D

Table 14. Mars 746 Day Influential Conditions for EVAC – MedCap

### Scenari  Treated  Medical Condition  Total EVAC  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --------------- | ------------------ | ------- | ------------- | -------- |
| BEST  UNTREATE | EYE CHEMICAL BURN | 122499 | 41.12 | 41.12 |

### CASE  D

| BEST  UNTREATE | FINGER DISLOCATION | 22048 | 7.40 | 48.52 |
| --------------- | ------------------- | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | EYE CHEMICAL BURN | 20088 | 6.74 | 55.27 |
| ---------------- | ------------------ | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | SKIN LACERATION | 17031 | 5.72 | 60.98 |
| ---------------- | ---------------- | ------ | ----- | ------ |

### CASE  D

WORST  UNTREATE  URINARY TRACT INFECTION  11533  3.87  64.86

### CASE  D

| WORST  UNTREATE | ACUTE SINUSITIS | 10597 | 3.56 | 68.41 |
| ---------------- | ---------------- | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | SKIN INFECTION | 10135 | 3.40 | 71.82 |
| ---------------- | --------------- | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | EYE INFECTION | 8876 | 2.98 | 74.80 |
| ---------------- | -------------- | ----- | ----- | ------ |

### CASE  D

| WORST  UNTREATE | BACK SPRAIN/STRAIN | 4675 | 1.57 | 76.36 |
| ---------------- | ------------------- | ----- | ----- | ------ |

### CASE  D

WORST  UNTREATE  HERPES ZOSTER REACTIVATION  4532  1.52  77.89

| CASE  D | (SHINGLES) |  |  |  |
| -------- | ----------- | --- | --- | --- |
Table 15. Mars 1103 Day Influential Conditions for EVAC – Treated

### Scenari  Treated  Medical Condition  Total EVAC  Percent  Cumulative

| o |  |  | Contribution | Percent |
| -------------- | ---------------- | ----- | ------------- | -------- |
| WORST  TREATE | NEPHROLITHIASIS | 2855 | 13.53 | 13.53 |

### CASE  D

| WORST  TREATE | DENTAL ABSCESS | 1568 | 7.43 | 20.95 |
| -------------- | --------------- | ----- | ----- | ------ |

### CASE  D

WORST  TREATE  VISUAL IMPAIRMENT AND/OR INCREASED  1468  6.95  27.91

| CASE  D | INTRACRANIAL PRESSURE (VIIP)(SPACE |  |  |  |
| -------- | ----------------------------------- | --- | --- | --- |

ADAPTATION)

| WORST  TREATE | SEPSIS | 1417 | 6.71 | 34.62 |
| -------------- | ------- | ----- | ----- | ------ |

### CASE  D

| WORST  TREATE | SMOKE INHALATION | 1315 | 6.23 | 40.85 |
| -------------- | ----------------- | ----- | ----- | ------ |

### CASE  D

| WORST  TREATE | WRIST FRACTURE | 924 | 4.38 | 45.23 |
| -------------- | --------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | BACK SPRAIN/STRAIN | 724 | 3.43 | 48.66 |
| -------------- | ------------------- | ---- | ----- | ------ |

### CASE  D

| BEST  TREATE | SMALL BOWEL OBSTRUCTION | 624 | 2.96 | 51.61 |
| ------------- | ------------------------ | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | STROKE (CEREBROVASCULAR | 527 | 2.50 | 54.11 |
| -------------- | ------------------------ | ---- | ----- | ------ |
| CASE  D | ACCIDENT) |  |  |  |

Page | 11

S-20170306-375, Mars Transit Times

WORST  TREATE  TRAUMATIC HYPOVOLEMIC SHOCK  489  2.32  56.43

### CASE  D

Table 16. Mars 1103 Day Influential Conditions for EVAC – MedCap

### Scenari  Treated  Medical Condition  Total EVAC  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --------------- | ------------------ | ------- | ------------- | -------- |
| BEST  UNTREATE | EYE CHEMICAL BURN | 184243 | 37.88 | 37.88 |

### CASE  D

| BEST  UNTREATE | FINGER DISLOCATION | 32813 | 6.75 | 44.62 |
| --------------- | ------------------- | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | EYE CHEMICAL BURN | 29704 | 6.11 | 50.73 |
| ---------------- | ------------------ | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | SKIN LACERATION | 24985 | 5.14 | 55.87 |
| ---------------- | ---------------- | ------ | ----- | ------ |

### CASE  D

WORST  UNTREATE  URINARY TRACT INFECTION  22350  4.59  60.46

### CASE  D

| WORST  UNTREATE | BACK SPRAIN/STRAIN | 17052 | 3.51 | 63.97 |
| ---------------- | ------------------- | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | ACUTE SINUSITIS | 15757 | 3.24 | 67.21 |
| ---------------- | ---------------- | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | SKIN INFECTION | 15134 | 3.11 | 70.32 |
| ---------------- | --------------- | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | EYE INFECTION | 13158 | 2.71 | 73.02 |
| ---------------- | -------------- | ------ | ----- | ------ |

### CASE  D

| WORST  UNTREATE | ELBOW SPRAIN/STRAIN | 8160 | 1.68 | 74.70 |
| ---------------- | -------------------- | ----- | ----- | ------ |

### CASE  D

Table 17. Mars 150 Day Influential Conditions for LOCL – Treated

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| -------------- | ------- | ---- | ------------- | -------- |
| WORST  TREATE | SEPSIS | 104 | 24.59 | 24.59 |

### CASE  D

WORST  TREATE  TRAUMATIC HYPOVOLEMIC SHOCK  67  15.84  40.43

### CASE  D

| WORST  TREATE | SMOKE INHALATION | 42 | 9.93 | 50.35 |
| -------------- | ----------------- | --- | ----- | ------ |

### CASE  D

| WORST  TREATE | MEDICATION OVERDOSE/ADVERSE | 39 | 9.22 | 59.57 |
| -------------- | ---------------------------- | --- | ----- | ------ |
| CASE  D | REACTION |  |  |  |
| WORST  TREATE | HEAD INJURY | 39 | 9.22 | 68.79 |

### CASE  D

| WORST  TREATE | STROKE (CEREBROVASCULAR | 38 | 8.98 | 77.78 |
| -------------- | ------------------------ | --- | ----- | ------ |
| CASE  D | ACCIDENT) |  |  |  |
| WORST  TREATE | APPENDICITIS | 24 | 5.67 | 83.45 |

### CASE  D

| WORST  TREATE | CHEST INJURY | 22 | 5.20 | 88.65 |
| -------------- | ------------- | --- | ----- | ------ |

### CASE  D

| WORST  TREATE | TOXIC EXPOSURE (AMMONIA) | 16 | 3.78 | 92.43 |
| -------------- | ------------------------- | --- | ----- | ------ |

### CASE  D

Page | 12

S-20170306-375, Mars Transit Times

| WORST  TREATE | SUDDEN CARDIAC ARREST | 10 | 2.36 | 94.80 |
| -------------- | ---------------------- | --- | ----- | ------ |

### CASE  D

Table 18. Mars 150 Day Influential Conditions for LOCL – MedCap

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --------------- | ------- | --- | ------------- | -------- |
| WORST  TREATED | SEPSIS | 72 | 14.49 | 14.49 |

CASE WORST  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  61  12.27  26.76 CASE

| WORST  UNTREATE | SEPSIS | 45 | 9.05 | 35.81 |
| ---------------- | ------- | --- | ----- | ------ |

### CASE  D

| WORST  TREATED | SMOKE INHALATION | 42 | 8.45 | 44.27 |
| --------------- | ----------------- | --- | ----- | ------ |

CASE WORST  TREATED  MEDICATION OVERDOSE/ADVERSE  39  7.85  52.11

| CASE | REACTION |  |  |  |
| --------------- | ------------------------ | --- | ----- | ------ |
| WORST  TREATED | STROKE (CEREBROVASCULAR | 37 | 7.44 | 59.56 |
| CASE | ACCIDENT) |  |  |  |
| WORST  TREATED | HEAD INJURY | 32 | 6.44 | 66.00 |

CASE

| BEST  UNTREATE | APPENDICITIS | 19 | 3.82 | 69.82 |
| --------------- | ------------- | --- | ----- | ------ |

### CASE  D

| WORST  TREATED | CHEST INJURY | 18 | 3.62 | 73.44 |
| --------------- | ------------- | --- | ----- | ------ |

CASE

| WORST  TREATED | APPENDICITIS | 17 | 3.42 | 76.86 |
| --------------- | ------------- | --- | ----- | ------ |

CASE

Table 19. Mars 204 Day Influential Conditions for LOCL – Treated

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| -------------- | ------- | ---- | ------------- | -------- |
| WORST  TREATE | SEPSIS | 129 | 22.87 | 22.87 |

### CASE  D

WORST  TREATE  TRAUMATIC HYPOVOLEMIC SHOCK  85  15.07  37.94

### CASE  D

WORST  TREATE  MEDICATION OVERDOSE/ADVERSE  62  10.99  48.94

| CASE  D | REACTION |  |  |  |
| -------------- | ----------------- | --- | ------ | ------ |
| WORST  TREATE | SMOKE INHALATION | 57 | 10.11 | 59.04 |

### CASE  D

| WORST  TREATE | HEAD INJURY | 44 | 7.80 | 66.84 |
| -------------- | ------------ | --- | ----- | ------ |

### CASE  D

| WORST  TREATE | STROKE (CEREBROVASCULAR | 41 | 7.27 | 74.11 |
| -------------- | ------------------------ | --- | ----- | ------ |
| CASE  D | ACCIDENT) |  |  |  |
| WORST  TREATE | CHEST INJURY | 36 | 6.38 | 80.50 |

### CASE  D

| WORST  TREATE | TOXIC EXPOSURE (AMMONIA) | 35 | 6.21 | 86.70 |
| -------------- | ------------------------- | --- | ----- | ------ |

### CASE  D

Page | 13

S-20170306-375, Mars Transit Times

| WORST  TREATE | APPENDICITIS | 26 | 4.61 | 91.31 |
| -------------- | ------------- | --- | ----- | ------ |

### CASE  D

| WORST  TREATE | SUDDEN CARDIAC ARREST | 14 | 2.48 | 93.79 |
| -------------- | ---------------------- | --- | ----- | ------ |

### CASE  D

Table 20. Mars 204 Day Influential Conditions for LOCL – MedCap

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --------------- | ------- | --- | ------------- | -------- |
| WORST  TREATED | SEPSIS | 95 | 13.10 | 13.10 |

CASE WORST  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  77  10.62  23.72 CASE

| WORST  UNTREATE | SEPSIS | 72 | 9.93 | 33.66 |
| ---------------- | ------- | --- | ----- | ------ |

### CASE  D

WORST  TREATED  MEDICATION OVERDOSE/ADVERSE  62  8.55  42.21

| CASE | REACTION |  |  |  |
| --------------- | ----------------- | --- | ----- | ------ |
| WORST  TREATED | SMOKE INHALATION | 56 | 7.72 | 49.93 |

CASE

| WORST  TREATED | STROKE (CEREBROVASCULAR | 41 | 5.66 | 55.59 |
| --------------- | ------------------------ | --- | ----- | ------ |
| CASE | ACCIDENT) |  |  |  |
| BEST  UNTREATE | APPENDICITIS | 37 | 5.10 | 60.69 |

### CASE  D

| WORST  TREATED | HEAD INJURY | 37 | 5.10 | 65.79 |
| --------------- | ------------ | --- | ----- | ------ |

CASE

| WORST  TREATED | TOXIC EXPOSURE (AMMONIA) | 28 | 3.86 | 69.66 |
| --------------- | ------------------------- | --- | ----- | ------ |

CASE

| WORST  TREATED | CHEST INJURY | 24 | 3.31 | 72.97 |
| --------------- | ------------- | --- | ----- | ------ |

CASE

Table 21. Mars 335 Day Influential Conditions for LOCL – Treated

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| -------------- | ------- | ---- | ------------- | -------- |
| WORST  TREATE | SEPSIS | 218 | 24.41 | 24.41 |

### CASE  D

WORST  TREATE  TRAUMATIC HYPOVOLEMIC SHOCK  144  16.13  40.54

### CASE  D

WORST  TREATE  MEDICATION OVERDOSE/ADVERSE  113  12.65  53.19

| CASE  D | REACTION |  |  |  |
| -------------- | ------------------------ | --- | ------ | ------ |
| WORST  TREATE | STROKE (CEREBROVASCULAR | 98 | 10.97 | 64.17 |
| CASE  D | ACCIDENT) |  |  |  |
| WORST  TREATE | SMOKE INHALATION | 72 | 8.06 | 72.23 |

### CASE  D

|  | HEAD INJURY | 58 | 6.49 | 78.72 |
| --- | ------------ | --- | ----- | ------ |

### WORST  TREATE

### CASE  D

| WORST  TREATE | CHEST INJURY | 51 | 5.71 | 84.43 |
| -------------- | ------------- | --- | ----- | ------ |

### CASE  D

Page | 14

S-20170306-375, Mars Transit Times

| WORST  TREATE | TOXIC EXPOSURE (AMMONIA) | 43 | 4.82 | 89.25 |
| -------------- | ------------------------- | --- | ----- | ------ |

### CASE  D

| WORST  TREATE | APPENDICITIS | 39 | 4.37 | 93.62 |
| -------------- | ------------- | --- | ----- | ------ |

### CASE  D

| WORST  TREATE | ABDOMINAL INJURY | 15 | 1.68 | 95.30 |
| -------------- | ----------------- | --- | ----- | ------ |

### CASE  D

Table 22. Mars 335 Day Influential Conditions for LOCL – MedCap

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --- | ------- | ---- | ------------- | -------- |
|  | SEPSIS | 215 | 15.61 | 15.61 |

### WORST  UNTREATE

### CASE  D

| BEST  UNTREATE | SEPSIS | 128 | 9.30 | 24.91 |
| --------------- | ------- | ---- | ----- | ------ |

### CASE  D

WORST  TREATED  MEDICATION OVERDOSE/ADVERSE  111  8.06  32.97

| CASE | REACTION |  |  |  |
| --------------- | --------- | ---- | ----- | ------ |
| WORST  TREATED | SEPSIS | 109 | 7.92 | 40.89 |

CASE WORST  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  108  7.84  48.73 CASE

| WORST  TREATED | STROKE (CEREBROVASCULAR | 95 | 6.90 | 55.63 |
| --------------- | ------------------------ | --- | ----- | ------ |
| CASE | ACCIDENT) |  |  |  |
| BEST  UNTREATE | APPENDICITIS | 76 | 5.52 | 61.15 |

### CASE  D

| WORST  TREATED | SMOKE INHALATION | 69 | 5.01 | 66.16 |
| --------------- | ----------------- | --- | ----- | ------ |

CASE

| WORST  TREATED | HEAD INJURY | 47 | 3.41 | 69.57 |
| --------------- | ------------ | --- | ----- | ------ |

CASE

| WORST  UNTREATE | ACUTE DIVERTICULITIS | 45 | 3.27 | 72.84 |
| ---------------- | --------------------- | --- | ----- | ------ |

### CASE  D

Table 23. Mars 517 Day Influential Conditions for LOCL – Treated

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| -------------- | ------- | ---- | ------------- | -------- |
| WORST  TREATE | SEPSIS | 302 | 22.72 | 22.72 |

### CASE  D

WORST  TREATE  TRAUMATIC HYPOVOLEMIC SHOCK  236  17.76  40.48

### CASE  D

WORST  TREATE  MEDICATION OVERDOSE/ADVERSE  155  11.66  52.14

| CASE  D | REACTION |  |  |  |
| -------------- | ----------------- | ---- | ----- | ------ |
| WORST  TREATE | SMOKE INHALATION | 118 | 8.88 | 61.02 |

### CASE  D

| WORST  TREATE | STROKE (CEREBROVASCULAR | 108 | 8.13 | 69.15 |
| -------------- | ------------------------ | ---- | ----- | ------ |
| CASE  D | ACCIDENT) |  |  |  |
| WORST  TREATE | CHEST INJURY | 93 | 7.00 | 76.15 |

### CASE  D

Page | 15

S-20170306-375, Mars Transit Times

| WORST  TREATE | HEAD INJURY | 87 | 6.55 | 82.69 |
| -------------- | ------------ | --- | ----- | ------ |

### CASE  D

| WORST  TREATE | TOXIC EXPOSURE (AMMONIA) | 71 | 5.34 | 88.04 |
| -------------- | ------------------------- | --- | ----- | ------ |

### CASE  D

| WORST  TREATE | APPENDICITIS | 70 | 5.27 | 93.30 |
| -------------- | ------------- | --- | ----- | ------ |

### CASE  D

| WORST  TREATE | SUDDEN CARDIAC ARREST | 32 | 2.41 | 95.71 |
| -------------- | ---------------------- | --- | ----- | ------ |

### CASE  D

Table 24. Mars 517 Day Influential Conditions for LOCL – MedCap

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --------------- | ------- | ---- | ------------- | -------- |
| BEST  UNTREATE | SEPSIS | 633 | 22.55 | 22.55 |

### CASE  D

| WORST  UNTREATE | SEPSIS | 602 | 21.45 | 44.00 |
| ---------------- | ------- | ---- | ------ | ------ |

### CASE  D

WORST  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  167  5.95  49.95 CASE

| BEST  UNTREATE | APPENDICITIS | 147 | 5.24 | 55.18 |
| --------------- | ------------- | ---- | ----- | ------ |

### CASE  D

WORST  TREATED  MEDICATION OVERDOSE/ADVERSE  146  5.20  60.38

| CASE | REACTION |  |  |  |
| ---------------- | --------------------- | ---- | ----- | ------ |
| WORST  UNTREATE | ACUTE DIVERTICULITIS | 120 | 4.28 | 64.66 |

### CASE  D

| WORST  TREATED | SMOKE INHALATION | 115 | 4.10 | 68.76 |
| --------------- | ----------------- | ---- | ----- | ------ |

CASE

| WORST  UNTREATE | SMOKE INHALATION | 104 | 3.71 | 72.46 |
| ---------------- | ----------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATED | STROKE (CEREBROVASCULAR | 101 | 3.60 | 76.06 |
| ---------------- | ------------------------ | ---- | ----- | ------ |
| CASE | ACCIDENT) |  |  |  |
| WORST  UNTREATE | CHEST INJURY | 86 | 3.06 | 79.12 |

### CASE  D

Table 25. Mars 746 Day Influential Conditions for LOCL – Treated

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| -------------- | ------- | ---- | ------------- | -------- |
| WORST  TREATE | SEPSIS | 486 | 25.42 | 25.42 |

### CASE  D

WORST  TREATE  TRAUMATIC HYPOVOLEMIC SHOCK  326  17.05  42.47

### CASE  D

WORST  TREATE  MEDICATION OVERDOSE/ADVERSE  213  11.14  53.61

| CASE  D | REACTION |  |  |  |
| -------------- | ----------------- | ---- | ----- | ------ |
| WORST  TREATE | SMOKE INHALATION | 175 | 9.15 | 62.76 |

### CASE  D

| WORST  TREATE | STROKE (CEREBROVASCULAR | 144 | 7.53 | 70.29 |
| -------------- | ------------------------ | ---- | ----- | ------ |
| CASE  D | ACCIDENT) |  |  |  |

Page | 16

S-20170306-375, Mars Transit Times

| WORST  TREATE | HEAD INJURY | 132 | 6.90 | 77.20 |
| -------------- | ------------ | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | CHEST INJURY | 111 | 5.81 | 83.00 |
| -------------- | ------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | TOXIC EXPOSURE (AMMONIA) | 101 | 5.28 | 88.28 |
| -------------- | ------------------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | APPENDICITIS | 99 | 5.18 | 93.46 |
| -------------- | ------------- | --- | ----- | ------ |

### CASE  D

| WORST  TREATE | SUDDEN CARDIAC ARREST | 43 | 2.25 | 95.71 |
| -------------- | ---------------------- | --- | ----- | ------ |

### CASE  D

Table 26. Mars 746 Day Influential Conditions for LOCL – MedCap

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| --------------- | ------- | ---- | ------------- | -------- |
| BEST  UNTREATE | SEPSIS | 997 | 22.02 | 22.02 |

### CASE  D

| WORST  UNTREATE | SEPSIS | 989 | 21.85 | 43.87 |
| ---------------- | ------- | ---- | ------ | ------ |

### CASE  D

| WORST  UNTREATE | SMOKE INHALATION | 314 | 6.94 | 50.81 |
| ---------------- | ----------------- | ---- | ----- | ------ |

### CASE  D

| BEST  UNTREATE | APPENDICITIS | 306 | 6.76 | 57.57 |
| --------------- | ------------- | ---- | ----- | ------ |

### CASE  D

WORST  TREATED  MEDICATION OVERDOSE/ADVERSE  203  4.48  62.05

| CASE | REACTION |  |  |  |
| ----- | --------- | --- | --- | --- |

WORST  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  201  4.44  66.49 CASE

| WORST  UNTREATE | ACUTE DIVERTICULITIS | 176 | 3.89 | 70.38 |
| ---------------- | --------------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATED | SMOKE INHALATION | 161 | 3.56 | 73.93 |
| --------------- | ----------------- | ---- | ----- | ------ |

CASE

| WORST  UNTREATE | CHEST INJURY | 150 | 3.31 | 77.25 |
| ---------------- | ------------- | ---- | ----- | ------ |

### CASE  D

WORST  UNTREATE  TRAUMATIC HYPOVOLEMIC SHOCK  125  2.76  80.01

### CASE  D

Table 27. Mars 1103 Day Influential Conditions for LOCL – Treated

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| -------------- | ------- | ---- | ------------- | -------- |
| WORST  TREATE | SEPSIS | 671 | 22.88 | 22.88 |

### CASE  D

WORST  TREATE  TRAUMATIC HYPOVOLEMIC SHOCK  489  16.67  39.55

### CASE  D

WORST  TREATE  MEDICATION OVERDOSE/ADVERSE  352  12.00  51.55

| CASE  D | REACTION |  |  |  |
| -------------- | ------------------------ | ---- | ----- | ------ |
| WORST  TREATE | STROKE (CEREBROVASCULAR | 270 | 9.21 | 60.76 |
| CASE  D | ACCIDENT) |  |  |  |

Page | 17

S-20170306-375, Mars Transit Times

| WORST  TREATE | SMOKE INHALATION | 267 | 9.10 | 69.86 |
| -------------- | ----------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | HEAD INJURY | 212 | 7.23 | 77.09 |
| -------------- | ------------ | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | CHEST INJURY | 179 | 6.10 | 83.19 |
| -------------- | ------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | APPENDICITIS | 157 | 5.35 | 88.54 |
| -------------- | ------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | TOXIC EXPOSURE (AMMONIA) | 138 | 4.71 | 93.25 |
| -------------- | ------------------------- | ---- | ----- | ------ |

### CASE  D

| WORST  TREATE | SUDDEN CARDIAC ARREST | 70 | 2.39 | 95.64 |
| -------------- | ---------------------- | --- | ----- | ------ |

### CASE  D

Table 28. Mars 1103 Day Influential Conditions for LOCL – MedCap

### Scenari  Treated  Medical Condition  Total LOCL  Percent  Cumulative

| o |  |  | Contribution | Percent |
| ---------------- | ------- | ----- | ------------- | -------- |
| WORST  UNTREATE | SEPSIS | 1417 | 18.28 | 18.28 |

### CASE  D

| BEST  UNTREATE | SEPSIS | 1406 | 18.13 | 36.41 |
| --------------- | ------- | ----- | ------ | ------ |

### CASE  D

| WORST  UNTREATE | SMOKE INHALATION | 926 | 11.94 | 48.36 |
| ---------------- | ----------------- | ---- | ------ | ------ |

### CASE  D

| BEST  UNTREATE | APPENDICITIS | 597 | 7.70 | 56.06 |
| --------------- | ------------- | ---- | ----- | ------ |

### CASE  D

| WORST  UNTREATE | ACUTE DIVERTICULITIS | 319 | 4.11 | 60.17 |
| ---------------- | --------------------- | ---- | ----- | ------ |

### CASE  D

WORST  TREATED  MEDICATION OVERDOSE/ADVERSE  312  4.02  64.19

| CASE | REACTION |  |  |  |
| ---------------- | ------------- | ---- | ----- | ------ |
| WORST  UNTREATE | CHEST INJURY | 252 | 3.25 | 67.44 |

### CASE  D

WORST  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  246  3.17  70.62 CASE WORST  UNTREATE  TRAUMATIC HYPOVOLEMIC SHOCK  243  3.13  73.75

### CASE  D

| WORST  TREATED | SMOKE INHALATION | 223 | 2.88 | 76.63 |
| --------------- | ----------------- | ---- | ----- | ------ |

CASE

## SUMMARY

This service request provides estimates of the TME, CHI, probability of EVAC and LOCL for 6 DRMs using a MedCap that is baselined to the ISS. Medical conditions secondary to EVA were not included because EVAs were not included in the DRM. The main outcomes and top 10 Influential Conditions for EVAC and LOCL for both the Treated and MedCap scenarios are reported for each DRM. The IMM is baselined to the ISS environment. Therefore, caution should be used when using the IMM to assess Mars transit medical risk.

Page | 18

S-20170306-375, Mars Transit Times

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

Operations Group. Page | 19

S-20170306-375, Mars Transit Times

APPENDIX A – IMM STATUS AT TIME OF SERVICE REQUEST REPORT

Validation status for IMM  IMM V&V Matrix: The following bar chart shows the IMM v3.0 MATLAB status of IMM validation for each IMM element listed.

- Compliance with NASA-  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6); however

Standard-7009 requirements  there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been fully attained.

|  | Compliant | Compliance Incomplete |  |  |  | Not applicable |  |  |
| --- | ----------- | ------------------------ | --- | --- | --- | --------------- | --- | --- |
|  |  |  |  |  |  |  |  |  |
|  | 27 |  | 20 |  |  | 2 |  |  |
- Current NASA-Standard-  IMM Credibility Matrix: The following table shows the overall IMM v3.0 MATLAB credibility assessment score (CAS), individual factor CAS,

7009 credibility assessment  customer-specified sufficiency thresholds, and weighted scores. Legend depicts CAS score designated range and color assignments from NASA- score  Standard-7009.

|  |  |  |  |  |  |  |  |  |
| --- | --- | ------- | --- | ------------ | --- | ------------- | --------- | -------- |
|  |  | Factor |  | Sufficiency |  | Factor Score | Weighted | Overall |
|  |  |  |  | Thresholds |  |  | Scores | Score |
|  |  |  |  |  |  |  |  |  |
| --- | --- | ------------- | --- | --- | ---- | ---- | ------- | --- |
|  |  | Verification |  |  | 4 | 3.7 | 0.28 |  |
|  |  | Validation |  |  | 3 | 3 | 0.45 |  |
|  |  | Input Pedigree |  |  | 3 | 3 | 0.53 |  |
| --- | --- | --------------- | --- | --- | ---- | --- | ------- | --- |
|  |  | Results Uncertainty |  |  | 3 | 3 | 0.60 | 3.06 |
| --- | --- | -------------------- | --- | --- | ---- | --- | ------- | ------- |
|  |  | Results Robustness |  |  | 3 | 3 | 0.45 |  |
|  |  | Use History |  |  | 3 | 3 | 0.45 |  |
|  |  | M&S Management |  |  |  |  | 0.10 |  |
| --- | --- | --------------------- | --- | --- | ---- | --- | ------- | --- |
|  |  |  |  |  | 2 | 2 |  |  |
|  |  | People Qualification |  |  | 4 | 4 | 0.20 |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
Additional verification and  none validation information applicable to this analysis

- Integrated Medical Evidence  iMED Lockdown ID: (26), created on (2/21/2017)

Database (iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v3.0 with release 2014a of MATLAB software. MATLAB and all other MathWorks product or version  service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

Modifications made to the  None code for analysis Page | 20

S-20170306-375, Mars Transit Times

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

Angina/Myocardial Infarction Visual Impairment and Increased Intracranial Pressure (VIIIP) (space adaptation) Page | 21

---

## Source metadata

```yaml
source_filename: "mars-transit-times.pdf"
source_folder: "Mission Risk Reports/Mars"
source_url: "https://drive.google.com/file/d/1qCvJfXycU9PPxLKUqGxkaSz5CPrZqJKV/view"
source_drive_id: "1qCvJfXycU9PPxLKUqGxkaSz5CPrZqJKV"
source_sha256: c78761eb8289b818a9af41c6532127a6746dc5a9a4663c13ef13d963f63a8f1c
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 21
ocr_performed: false
```
