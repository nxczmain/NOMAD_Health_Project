# Medical Risk For Five Cis Lunar Missions

[View original PDF](https://drive.google.com/file/d/1yEl467N9kAx3zyKtX1ussBVvxMjg0job/view) · **25 pages**

**Collection:** Mission Risk Reports/Lunar Orbit and Surface and Low Earth Orbit

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [EXECUTIVE SUMMARY](#executive-summary)
- [BACKGROUND](#background)
- [METHODS](#methods)
- [SUMMARY](#summary)
- [REFERENCES](#references)

---

S-20170623-384, Cis-Lunar Orbit

## EXECUTIVE SUMMARY

This service request determined the CHI, probability of EVAC and probability of LOCL for 5 design reference missions (DRM) using a medical capability (MedCap) that is baselined to ISS. These outcomes are reported in Tables 3-4. The top 10 influential conditions for EVAC and LOCL for the Treated scenario are reported in Tables 5-14. The probability of occurrence of one or more events for each condition for each DRM is provided in Tables 15-19.

## BACKGROUND

The Integrated Medical Model (IMM) simulates medical events during space flight missions and estimates the impact of these events on crew health. The IMM is a stochastic model that uses Monte Carlo methodology to simulate missions. The IMM consists of a three-step process:

1. Design Reference Mission (DRM) and crew member characteristics are specified.

2. Medical events, treatment and outcomes for the DRM are randomly generated

based on pre-defined probability distributions.

3. The crew health index, evacuation and loss of crew life outcomes, and resource

utilization outcomes are summarized in a post-processing procedure.

## METHODS

### Crew and Mission Parameters

The DRMs were configured using a standard Mars crew profile, with mission length and number of EVAs established by the requestor. Tables 1 and 2 below show the 4 crew and 7 crew profiles for this service request respectively. DRMs with durations of 21 days, 42 days, 1 year and 2 years were specified with the 4 crew profile, and a duration of 14 days for the 7 crew profile. The outcomes of certain IMM medical conditions are sex-specific and influenced by crew medical history. Pre-existing conditions that influence IMM outcomes include: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of any prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data.

The number of extravehicular activity (EVA) excursions influences the probability of EVA- dependent medical conditions. 1 17 JULY 2017

S-20170623-384, Cis-Lunar Orbit

Table 1:  4 Crew Profile.

### Prior Abdominal

|  |  | Sex | CAC | Crowns | Contacts |  | EVA |
| --- | --- | ---- | ---- | ------- | --------- | --- | ---- |

Surgery

|  | Crew 1 | Male | No | Yes | No | No | No |
| --- | ------- | ----- | ---- | ---- | ---- | ---- | --- |
|  | Crew 2 | Male | No | No | Yes | No | No |
|  |  |  |  |  |  | No | No |
|  | Crew 3 | Male | No | No | No |  |  |
|  | Crew 4 | Male | Yes | No | No | Yes | No |
Table 2:  7 Crew Profile.

### Prior Abdominal

|  |  | Sex | CAC | Crowns | Contacts |  | EVA |
| --- | --- | ---- | ---- | ------- | --------- | --- | ---- |

Surgery

|  | Crew 1 | Male | No | Yes | No | No | No |
| --- | ------- | ------- | ---- | ---- | ---- | ---- | ------- |
|  | Crew 2 | Male | No | No | Yes | No | Yes(2) |
|  | Crew 3 | Male | No | No | No | No | Yes(2) |
|  |  |  |  |  | No | Yes | No |
|  | Crew 4 | Male | Yes | No |  |  |  |
|  | Crew 5 | Female | No | Yes | No | No | No |
|  | Crew 6 | Female | No | No | Yes | No | Yes(2) |
|  |  |  |  |  | No | No | No |
|  | Crew 7 | Female | No | Yes |  |  |  |
### Medical Conditions and Resources

The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data from the Integrated Medical Evidence Database (iMED). For each condition, the percentage of “best case” and “worst case” scenarios are also specified, as well as a defined set of medical resources that is required to treat the medical condition. All medical condition data inputs to the model are pulled from the iMED by an SQL query written in MATLAB scripts. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS (i.e. the ISS medical capabilities (MedCap)).

In the current version of IMM, medical conditions are not treated unless all essential medical resources are available. Resources are classified as essential or non-essential, and as consumable, or non-consumable. Consumable resources are decremented as required to treat medical events; if an item is essential, but has been depleted, then the given medical condition will go untreated.

|  |  |  |  |  | 2 |  | 17 JULY 2017 |
| --- | --- | --- | --- | --- | --- | --- | ------------- |
S-20170623-384, Cis-Lunar Orbit

### Main Outcomes

- The IMM primary medical outcomes include: total medical events (TME), crew health index

(CHI), probability of evacuation (EVAC), probability of loss of crew life (LOCL), and required resources. CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in- flight medical events and resources available to treat those conditions [3].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew. EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria is met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available.

LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In the current version of the IMM, it is possible for crew members to be assigned more than one endstate of EVAC and/or LOCL. These assumptions should result in slightly high (conservative) IMM forecasts for the occurrence of EVAC and LOCL. Determining the probability of LOCL for the given DRMs is the main objective of this service request. Required resources for treatment are tracked for each DRM. The number of each resource that is needed from the given available resource quantities to treat all medical events is recorded. If more of any particular resource is used than is available, then that is recorded as a “depleted” resource. The initial quantities for the available resources are baselined to the ISS environment with 6 month resupply.

### Modeling Approach

A simulation was run for each of the 5 provided DRMs using IMM version three (v3). One hundred thousand (100,000) trials were run for each DRM, where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meets convergence criteria. Convergence criteria are met when there is less than, or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 3 17 JULY 2017

S-20170623-384, Cis-Lunar Orbit two - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV3ConvergenceReport.

- IMM outcomes were determined for the DRMs under three scenarios: 1) ISS MedCap scenario

where all conditions are treated until the essential resources of the ISS MedCap are depleted;

2) All Treated scenario where supplies are limitless and all conditions are fully treated; and 3)

Untreated scenario where none of the conditions are treated. Total medical events (TME) and CHI are calculated as means, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% confidence intervals (CI) for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3].

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

The specified DRMs were assessed using the IMM as described in the Methods section above. One hundred thousand trials were simulated for each DRM with ISS MedCap to forecast IMM primary outcomes and resources required to treat each condition. The ISS MedCap is baselined to the ISS environment with 6 month resupply. Results of the main outcomes are reported in Tables 3-4 with the numbers for fully treated and completely untreated as reference. The top 10 influential conditions for EVAC and LOCL for each DRM are provided in Tables 5-14. Also, the total number of EVACs and LOCLs is over all 100,000 trials of the simulation. The probability of occurrence of one or more events for each condition for each DRM is provided in Tables 15-19. 4 17 JULY 2017

S-20170623-384, Cis-Lunar Orbit Although it did not contribute to the top 10 influential conditions, during a review of the simulation results, it was observed that Otitis Media was contributing to LOCL when it went to the untreated worst case scenario. The untreated worst case LOCL is the result of this condition progressing into two other conditions. Otitis Media should have 0% LOCL. A change request (C2-20170309-384) has been entered to make the changes in iMED.

Table 3. Total Medical Events(TME) and CHI

3a. TME

|  |  | Mission Length |  | TME |  | 95% CI |  |  |
| --- | --- | ----------------- | --- | ------- | --- | ------------ | --- | --- |
|  |  | 14 days (7 crew) |  | 31.42 |  | (23 , 40) |  |  |
|  |  | 21 days |  | 19.15 |  | (12 , 26) |  |  |
|  |  | 42 days |  | 25.59 |  | (17 , 34) |  |  |
|  |  | 1 year |  | 124.39 |  | (103 , 146) |  |  |
|  |  | 2 years |  | 236.05 |  | (206 , 267) |  |  |
3b. CHI

|  |  |  | Mission Length |  | CHI (%) |  | 95% CI |  |
| --- | -------- | --- | ----------------- | --- | -------- | --- | ---------------- | --- |
|  |  |  | 14 days (7 crew) |  | 93.67 |  | (84.37 , 97.28) |  |
|  |  |  | 21 days |  | 94.66 |  | (80.31 , 98.43) |  |
|  | Treated |  | 42 days |  | 95.11 |  | (80.90 , 98.80) |  |
|  |  |  | 1 year |  | 91.11 |  | (74.18 , 98.22) |  |
|  |  |  | 2 years |  | 85.99 |  | (66.58 , 96.40) |  |
Table 4. Probability of EVAC and LOCL

4a. EVAC

|  |  |  | Mission Length |  | pEVAC |  | 95% CI | Odds |
| --- | --- | --- | ----------------- | --- | ------- | --- | ------------------ | -------- |
|  |  |  | 14 days (7 crew) |  | 0.0203 |  | (0.0194 , 0.0211) | 1 in 49 |
|  |  |  | 21 days |  | 0.0129 |  | (0.0123 , 0.0137) | 1 in 78 |

Treated

|  |  |  | 42 days |  | 0.0153 |  | (0.0145 , 0.0160) | 1 in 65 |
| --- | --- | --- | -------- | --- | ------- | --- | ------------------ | -------- |
|  |  |  | 1 year |  | 0.0541 |  | (0.0526 , 0.0556) | 1 in 18 |
|  |  |  | 2 years |  | 0.0943 |  | (0.0926 , 0.0962) | 1 in 11 |
4b. LOCL

|  |  |  | Mission Length |  | pLOCL |  | 95% CI | Odds |
| --- | -------- | --- | ----------------- | --- | ------- | --- | ------------------ | ------------- |
|  |  |  | 14 days (7 crew) |  | 0.0003 |  | (0.0002 , 0.0005) | 1 in 3333 |
|  |  |  | 21 days |  | 0.0004 |  | (0.0003 , 0.0005) | 1 in 2500 |
|  | Treated |  | 42 days |  | 0.0009 |  | (0.0007 , 0.0011) | 1 in 1111 |
|  |  |  | 1 year |  | 0.0069 |  | (0.0064 , 0.0075) | 1 in 145 |
|  |  |  | 2 years |  | 0.0126 |  | (0.0120 , 0.0135) | 1 in 79 |
|  |  |  |  |  | 5 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

Table 5. Cis-lunar 14 Days Influential Conditions for EVAC – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  |  | EVAC | Contribution | Percent |
| --- | ------ | -------- | ------------------------- | --- | ----- | ------------- | -------- |
|  |  |  | VISUAL IMPAIRMENT AND/OR |  |  |  |  |
|  |  |  | INCREASED INTRACRANIAL |  |  |  |  |
|  | WORST |  | PRESSURE (VIIP)(SPACE |  |  |  |  |
|  | CASE | TREATED | ADAPTATION) |  | 1751 | 85.54 | 85.54 |

WORST

|  | CASE | TREATED | NEPHROLITHIASIS |  | 43 | 2.10 | 87.64 |
| --- | ----- | -------- | ---------------- | --- | --- | ----- | ------ |

WORST

|  | CASE | TREATED | SMOKE INHALATION |  | 28 | 1.37 | 89.01 |
| --- | ------ | -------- | ------------------------- | --- | --- | ----- | ------ |
|  | WORST |  | URINARY RETENTION (SPACE |  |  |  |  |
|  | CASE | TREATED | ADAPTATION) |  | 23 | 1.12 | 90.13 |

WORST

|  |  | TREATED | DENTAL ABSCESS |  | 18 | 0.88 | 91.01 |
| --- | --- | -------- | --------------- | --- | --- | ----- | ------ |

CASE WORST

|  | CASE | TREATED | SEPSIS |  | 13 | 0.64 | 91.65 |
| --- | ----- | -------- | ------- | --- | --- | ----- | ------ |

WORST

|  | CASE | TREATED | WRIST FRACTURE |  | 12 | 0.59 | 92.23 |
| --- | ----- | -------- | --------------- | --- | --- | ----- | ------ |

WORST

|  | CASE | TREATED | BACK SPRAIN/STRAIN |  | 11 | 0.54 | 92.77 |
| --- | ------ | -------- | ------------------------ | --- | --- | ----- | ------ |
|  | WORST |  | STROKE (CEREBROVASCULAR |  |  |  |  |
|  | CASE | TREATED | ACCIDENT) |  | 8 | 0.39 | 93.16 |

WORST

|  | CASE | TREATED | ACUTE DIVERTICULITIS |  | 8 | 0.39 | 93.55 |
| --- | ----- | -------- | --------------------- | --- | --- | ----- | ------ |
Table 6. Cis-lunar 21 Days Influential Conditions for EVAC – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  |  | EVAC | Contribution | Percent |
| --- | ------ | -------- | ------------------------- | --- | ----- | ------------- | -------- |
|  |  |  | VISUAL IMPAIRMENT AND/OR |  |  |  |  |
|  |  |  | INCREASED INTRACRANIAL |  |  |  |  |
|  | WORST |  | PRESSURE (VIIP)(SPACE |  |  |  |  |
|  | CASE | TREATED | ADAPTATION) |  | 1010 | 77.57 | 77.57 |

WORST

|  |  | TREATED | NEPHROLITHIASIS |  | 40 | 3.07 | 80.65 |
| --- | --- | -------- | ---------------- | --- | --- | ----- | ------ |

CASE

|  | WORST |  |  |  |  |  |  |
| --- | ------ | -------- | ------- | --- | --- | ----- | ------ |
|  | CASE | TREATED | SEPSIS |  | 27 | 2.07 | 82.72 |

WORST

|  | CASE | TREATED | DENTAL ABSCESS |  | 24 | 1.84 | 84.56 |
| --- | ------ | -------- | ----------------- | --- | --- | ----- | ------ |
|  | WORST |  |  |  |  |  |  |
|  | CASE | TREATED | SMOKE INHALATION |  | 18 | 1.38 | 85.94 |

BEST

|  | CASE | TREATED | SMALL BOWEL OBSTRUCTION |  | 17 | 1.31 | 87.25 |
| --- | ----- | -------- | ---------------------------- | --- | --- | ----- | ------ |
|  | BEST |  | ATRIAL FIBRILLATION/ ATRIAL |  |  |  |  |
|  | CASE | TREATED | FLUTTER |  | 12 | 0.92 | 88.17 |

WORST

|  | CASE | TREATED | WRIST FRACTURE |  | 10 | 0.77 | 88.94 |
| --- | ------ | -------- | ------------------- | --- | --- | ----- | ------ |
|  | WORST |  |  |  |  |  |  |
|  |  | TREATED | BACK SPRAIN/STRAIN |  | 9 | 0.69 | 89.63 |

CASE BEST

|  | CASE | TREATED | ANGINA/MYOCARDIAL INFARCTION |  | 9 | 0.69 | 90.32 |
| --- | ----- | -------- | ----------------------------- | --- | --- | ----- | ------------- |
|  |  |  |  | 6 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

Table 7. Cis-lunar 42 Days Influential Conditions for EVAC – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | EVAC | Contribution | Percent |
| --- | --- | ------------------------- | --- | ----- | ------------- | -------- |
|  |  | VISUAL IMPAIRMENT AND/OR |  |  |  |  |

### INCREASED INTRACRANIAL

| WORST |  | PRESSURE (VIIP)(SPACE |  |  |  |  |
| ------ | -------- | ---------------------- | --- | ----- | ------ | ------ |
| CASE | TREATED | ADAPTATION) |  | 1002 | 65.23 | 65.23 |
| WORST |  |  |  |  |  |  |
| CASE | TREATED | NEPHROLITHIASIS |  | 69 | 4.49 | 69.73 |

WORST

|  | TREATED | SMOKE INHALATION |  | 37 | 2.41 | 72.14 |
| --- | -------- | ----------------- | --- | --- | ----- | ------ |

CASE

| WORST |  |  |  |  |  |  |
| ------ | -------- | --------------- | --- | --- | ----- | ------ |
|  | TREATED | DENTAL ABSCESS |  | 37 | 2.41 | 74.54 |

CASE WORST

| CASE | TREATED | SEPSIS |  | 34 | 2.21 | 76.76 |
| ----- | -------- | ------------------------ | --- | --- | ----- | ------ |
| BEST |  |  |  |  |  |  |
| CASE | TREATED | SMALL BOWEL OBSTRUCTION |  | 31 | 2.02 | 78.78 |

WORST

| CASE | TREATED | WRIST FRACTURE |  | 19 | 1.24 | 80.01 |
| ------ | -------- | ------------------------ | --- | --- | ----- | ------ |
| WORST |  | STROKE (CEREBROVASCULAR |  |  |  |  |
| CASE | TREATED | ACCIDENT) |  | 19 | 1.24 | 81.25 |

### BEST  ATRIAL FIBRILLATION/ ATRIAL

| CASE | TREATED | FLUTTER |  | 18 | 1.17 | 82.42 |
| ------ | -------- | ---------------------------- | --- | --- | ----- | ------ |
| WORST |  |  |  |  |  |  |
|  | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 17 | 1.11 | 83.53 |

CASE

Table 8. Cis-lunar 1 Year Influential Conditions for EVAC – Treated

### Scenario  Treated  Medical Condition  Total EVAC  Percent  Cumulative

|  |  |  |  |  | Contribution | Percent |
| --- | --- | ------------------------- | --- | --- | ------------- | -------- |
|  |  | VISUAL IMPAIRMENT AND/OR |  |  |  |  |

### INCREASED INTRACRANIAL

| WORST |  | PRESSURE (VIIP)(SPACE |  |  |  |  |
| ------ | -------- | ---------------------- | --- | ----- | ------ | ------ |
| CASE | TREATED | ADAPTATION) |  | 1019 | 18.31 | 18.31 |

WORST

|  | TREATED | NEPHROLITHIASIS |  | 624 | 11.21 | 29.52 |
| --- | -------- | ---------------- | --- | ---- | ------ | ------ |

CASE

| WORST |  |  |  |  |  |  |
| ------ | -------- | --------------- | --- | ---- | ----- | ------ |
| CASE | TREATED | DENTAL ABSCESS |  | 355 | 6.38 | 35.90 |

WORST

| CASE | TREATED | SEPSIS |  | 326 | 5.86 | 41.76 |
| ------ | -------- | ----------------- | --- | ---- | ----- | ------ |
| WORST |  |  |  |  |  |  |
| CASE | TREATED | SMOKE INHALATION |  | 286 | 5.14 | 46.90 |

BEST

| CASE | TREATED | SMALL BOWEL OBSTRUCTION |  | 188 | 3.38 | 50.28 |
| ------ | -------- | ------------------------ | --- | ---- | ----- | ------ |
| WORST |  |  |  |  |  |  |
| CASE | TREATED | WRIST FRACTURE |  | 180 | 3.23 | 53.51 |

WORST

| CASE | TREATED | BACK SPRAIN/STRAIN |  | 160 | 2.88 | 56.39 |
| ------ | -------- | ---------------------------- | --- | ---- | ----- | ------ |
| WORST |  |  |  |  |  |  |
|  | TREATED | HIP/PROXIMAL FEMUR FRACTURE |  | 149 | 2.68 | 59.07 |

CASE BEST  STROKE (CEREBROVASCULAR

| CASE | TREATED | ACCIDENT) |  | 139 | 2.50 | 61.56 |
| ----- | -------- | ---------- | --- | ---- | ----- | ------------- |
|  |  |  | 7 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

Table 9. Cis-lunar 2 Years Influential Conditions for EVAC – Treated

### Scenario  Treated  Medical Condition  Total EVAC  Percent  Cumulative

|  |  |  |  |  |  | Contribution | Percent |
| --- | ------ | -------- | ------------------------- | --- | ----- | ------------- | -------- |
|  | WORST |  |  |  |  |  |  |
|  | CASE | TREATED | NEPHROLITHIASIS |  | 1275 | 12.77 | 12.77 |
|  |  |  | VISUAL IMPAIRMENT AND/OR |  |  |  |  |
|  |  |  | INCREASED INTRACRANIAL |  |  |  |  |

WORST

|  |  |  | PRESSURE (VIIP)(SPACE |  |  |  |  |
| --- | ----- | -------- | ---------------------- | --- | ---- | ----- | ------ |
|  | CASE | TREATED | ADAPTATION) |  | 985 | 9.86 | 22.63 |

WORST

|  | CASE | TREATED | DENTAL ABSCESS |  | 683 | 6.84 | 29.47 |
| --- | ----- | -------- | --------------- | --- | ---- | ----- | ------ |

WORST

|  | CASE | TREATED | SEPSIS |  | 636 | 6.37 | 35.84 |
| --- | ----- | -------- | ------- | --- | ---- | ----- | ------ |

WORST

|  | CASE | TREATED | SMOKE INHALATION |  | 586 | 5.87 | 41.71 |
| --- | ----- | -------- | ----------------- | --- | ---- | ----- | ------ |

BEST

|  | CASE | TREATED | SMALL BOWEL OBSTRUCTION |  | 417 | 4.18 | 45.89 |
| --- | ----- | -------- | ------------------------ | --- | ---- | ----- | ------ |

WORST

|  | CASE | TREATED | WRIST FRACTURE |  | 386 | 3.87 | 49.75 |
| --- | ----- | -------- | --------------- | --- | ---- | ----- | ------ |

WORST CASE  TREATED  HIP/PROXIMAL FEMUR FRACTURE  302  3.02  52.78

|  | WORST |  | STROKE (CEREBROVASCULAR |  |  |  |  |
| --- | ------ | -------- | ------------------------ | --- | ---- | ----- | ------ |
|  |  | TREATED |  |  | 296 | 2.96 | 55.74 |
|  | CASE |  | ACCIDENT) |  |  |  |  |
|  | WORST |  |  |  |  |  |  |
|  | CASE | TREATED | BACK SPRAIN/STRAIN |  | 273 | 2.73 | 58.48 |
Table 10. Cis-lunar 14 Days Influential Conditions for LOCL – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  |  | LOCL | Contribution | Percent |
| --- | --- | --- | --- | --- | ----- | ------------- | -------- |

WORST

|  |  | TREATED | SEPSIS |  | 8 | 25.00 | 25.00 |
| --- | --- | -------- | ------- | --- | --- | ------ | ------ |

CASE

|  | WORST |  | STROKE (CEREBROVASCULAR |  |  |  |  |
| --- | ------ | -------- | ------------------------ | --- | --- | ------ | ------ |
|  | CASE | TREATED | ACCIDENT) |  | 6 | 18.75 | 43.75 |

WORST

|  | CASE | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 5 | 15.63 | 59.38 |
| --- | ------ | -------- | ---------------------------- | --- | --- | ------ | ------ |
|  | WORST |  | MEDICATION OVERDOSE/ADVERSE |  |  |  |  |
|  | CASE | TREATED | REACTION |  | 2 | 6.25 | 65.63 |

WORST

|  | CASE | TREATED | SMOKE INHALATION |  | 2 | 6.25 | 71.88 |
| --- | ----- | -------- | ----------------- | --- | --- | ----- | ------ |

WORST

|  | CASE | TREATED | APPENDICITIS |  | 2 | 6.25 | 78.13 |
| --- | ----- | -------- | ------------- | --- | --- | ----- | ------ |

WORST

|  | CASE | TREATED | CHOKING/OBSTRUCTED AIRWAY |  | 1 | 3.13 | 81.25 |
| --- | ----- | -------- | -------------------------- | --- | --- | ----- | ------ |

### DECOMPRESSION SICKNESS

WORST

|  |  |  | SECONDARY TO EXTRAVEHICULAR |  |  |  |  |
| --- | ----- | -------- | ---------------------------- | --- | --- | ----- | ------ |
|  | CASE | TREATED |  |  | 1 | 3.13 | 84.38 |

ACTIVITY

|  | WORST |  |  |  |  |  |  |
| --- | ------ | -------- | ------------------------- | --- | --- | ----- | ------ |
|  | CASE | TREATED | ACUTE RADIATION SYNDROME |  | 1 | 3.13 | 87.50 |

WORST

|  | CASE | TREATED | ABDOMINAL INJURY |  | 1 | 3.13 | 90.63 |
| --- | ----- | -------- | ----------------- | --- | --- | ----- | ------------- |
|  |  |  |  | 8 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

Table 11. Cis-lunar 21 Days Influential Conditions for LOCL – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | LOCL | Contribution | Percent |
| ------ | -------- | ------- | --- | ----- | ------------- | -------- |
| WORST |  |  |  |  |  |  |
| CASE | TREATED | SEPSIS |  | 11 | 30.56 | 30.56 |

### WORST  MEDICATION OVERDOSE/ADVERSE

| CASE | TREATED | REACTION |  | 5 | 13.89 | 44.44 |
| ----- | -------- | --------- | --- | --- | ------ | ------ |

WORST

|  | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 5 | 13.89 | 58.33 |
| --- | -------- | ---------------------------- | --- | --- | ------ | ------ |

CASE WORST  STROKE (CEREBROVASCULAR

| CASE | TREATED | ACCIDENT) |  | 3 | 8.33 | 66.67 |
| ----- | -------- | ---------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | HEAD INJURY |  | 2 | 5.56 | 72.22 |
| ----- | -------- | ------------ | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | SUDDEN CARDIAC ARREST |  | 2 | 5.56 | 77.78 |
| ----- | -------- | ---------------------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | CHEST INJURY |  | 2 | 5.56 | 83.33 |
| ----- | -------- | ------------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | APPENDICITIS |  | 2 | 5.56 | 88.89 |
| ----- | -------- | ------------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | TOXIC EXPOSURE (AMMONIA) |  | 2 | 5.56 | 94.44 |
| ----- | -------- | ------------------------- | --- | --- | ----- | ------ |

WORST

|  | TREATED | SMOKE INHALATION |  | 1 | 2.78 | 97.22 |
| --- | -------- | ----------------- | --- | --- | ----- | ------ |

CASE

Table 12. Cis-lunar 42 Days Influential Conditions for LOCL – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | LOCL | Contribution | Percent |
| ------ | -------- | ------- | --- | ----- | ------------- | -------- |
| WORST |  |  |  |  |  |  |
| CASE | TREATED | SEPSIS |  | 20 | 23.53 | 23.53 |

WORST

|  | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 17 | 20.00 | 43.53 |
| --- | -------- | ---------------------------- | --- | --- | ------ | ------ |

CASE WORST  STROKE (CEREBROVASCULAR

| CASE | TREATED | ACCIDENT) |  | 12 | 14.12 | 57.65 |
| ----- | -------- | ---------- | --- | --- | ------ | ------ |

### WORST  MEDICATION OVERDOSE/ADVERSE

| CASE | TREATED | REACTION |  | 7 | 8.24 | 65.88 |
| ----- | -------- | --------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | TOXIC EXPOSURE (AMMONIA) |  | 5 | 5.88 | 71.76 |
| ----- | -------- | ------------------------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | CHEST INJURY |  | 5 | 5.88 | 77.65 |
| ----- | -------- | ------------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | CHOKING/OBSTRUCTED AIRWAY |  | 3 | 3.53 | 81.18 |
| ----- | -------- | -------------------------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | SMOKE INHALATION |  | 3 | 3.53 | 84.71 |
| ----- | -------- | ----------------- | --- | --- | ----- | ------ |

WORST

|  | TREATED | SUDDEN CARDIAC ARREST |  | 3 | 3.53 | 88.24 |
| --- | -------- | ---------------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | APPENDICITIS |  | 3 | 3.53 | 91.76 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE

|  |  |  | 9 |  |  | 17 JULY 2017 |
| --- | --- | --- | --- | --- | --- | ------------- |
S-20170623-384, Cis-Lunar Orbit

Table 13. Cis-lunar 1 Year Influential Conditions for LOCL – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | LOCL | Contribution | Percent |
| ------ | -------- | ------- | --- | ----- | ------------- | -------- |
| WORST |  |  |  |  |  |  |
| CASE | TREATED | SEPSIS |  | 148 | 21.33 | 21.33 |

WORST CASE  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  118  17.00  38.33

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED |  |  | 87 | 12.54 | 50.86 |
| --- | -------- | --- | --- | --- | ------ | ------ |

### CASE  REACTION

WORST  STROKE (CEREBROVASCULAR

| CASE | TREATED | ACCIDENT) |  | 75 | 10.81 | 61.67 |
| ----- | -------- | ---------- | --- | --- | ------ | ------ |

WORST

| CASE | TREATED | SMOKE INHALATION |  | 62 | 8.93 | 70.61 |
| ----- | -------- | ----------------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | HEAD INJURY |  | 40 | 5.76 | 76.37 |
| ----- | -------- | ------------ | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | CHEST INJURY |  | 37 | 5.33 | 81.70 |
| ----- | -------- | ------------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | TOXIC EXPOSURE (AMMONIA) |  | 37 | 5.33 | 87.03 |
| ----- | -------- | ------------------------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | APPENDICITIS |  | 30 | 4.32 | 91.35 |
| ----- | -------- | ------------- | --- | --- | ----- | ------ |

WORST

|  | TREATED | ABDOMINAL INJURY |  | 18 | 2.59 | 93.95 |
| --- | -------- | ----------------- | --- | --- | ----- | ------ |

CASE

Table 14. Cis-lunar 2 Years Influential Conditions for LOCL – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | LOCL | Contribution | Percent |
| --- | --- | --- | --- | ----- | ------------- | -------- |

WORST

|  | TREATED | SEPSIS |  | 317 | 24.96 | 24.96 |
| --- | -------- | ------- | --- | ---- | ------ | ------ |

CASE

| WORST |  |  |  |  |  |  |
| ------ | --- | --- | --- | --- | --- | --- |

CASE  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  187  14.72  39.69

### WORST  MEDICATION OVERDOSE/ADVERSE

| CASE | TREATED | REACTION |  | 147 | 11.57 | 51.26 |
| ------ | -------- | ------------------------ | --- | ---- | ------ | ------ |
| WORST |  | STROKE (CEREBROVASCULAR |  |  |  |  |
| CASE | TREATED | ACCIDENT) |  | 142 | 11.18 | 62.44 |

WORST

| CASE | TREATED | SMOKE INHALATION |  | 105 | 8.27 | 70.71 |
| ------ | -------- | ----------------- | --- | ---- | ----- | ------ |
| WORST |  |  |  |  |  |  |
| CASE | TREATED | CHEST INJURY |  | 81 | 6.38 | 77.09 |

WORST

|  | TREATED | HEAD INJURY |  | 78 | 6.14 | 83.23 |
| --- | -------- | ------------ | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | APPENDICITIS |  | 58 | 4.57 | 87.80 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

| CASE | TREATED | TOXIC EXPOSURE (AMMONIA) |  | 56 | 4.41 | 92.20 |
| ----- | -------- | ------------------------- | --- | --- | ----- | ------ |

WORST

| CASE | TREATED | SUDDEN CARDIAC ARREST |  | 30 | 2.36 | 94.57 |
| ----- | -------- | ---------------------- | --- | --- | ----- | ------------- |
|  |  |  | 10 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

Table 15. Cis-lunar 14 Days Probability by Case of 1 or more events

Medical Condition  Probability Zero  Probability  Probability >=1  Probability >=1

|  |  | >=1 | Best Case | Worst Case |
| -------------------------- | ------- | ------- | ---------- | ----------- |
| ABDOMINAL INJURY | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ABDOMINAL WALL HERNIA | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| ABNORMAL UTERINE BLEEDING | 0.9940 | 0.0060 | 0.0058 | 0.0001 |

ACUTE ANGLE-CLOSURE GLAUCOMA  1.0000  0.0000  0.0000  0.0000

| ACUTE ARTHRITIS | 0.9993 | 0.0007 | 0.0007 | 0.0000 |
| ---------------- | ------- | ------- | ------- | ------- |

ACUTE CHOLECYSTITIS/BILIARY COLIC  0.9997  0.0003  0.0002  0.0000

| ACUTE COMPARTMENT SYNDROME | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| --------------------------- | ------- | ------- | ------- | ------- |
| ACUTE DIVERTICULITIS | 0.9996 | 0.0004 | 0.0003 | 0.0001 |
| ACUTE PANCREATITIS | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| ACUTE PROSTATITIS | 0.9992 | 0.0008 | 0.0007 | 0.0000 |
| ACUTE RADIATION SYNDROME | 0.9993 | 0.0007 | 0.0007 | 0.0000 |
| ACUTE SINUSITIS | 0.9429 | 0.0571 | 0.0526 | 0.0046 |

ALLERGIC REACTION (MILD TO MODERATE)  0.8977  0.1023  0.0982  0.0041

| ALTITUDE SICKNESS | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ------------------ | ------- | ------- | ------- | ------- |
| ANAPHYLAXIS | 0.9999 | 0.0001 | 0.0001 | 0.0000 |

ANGINA/MYOCARDIAL INFARCTION  0.9998  0.0002  0.0001  0.0000

| ANKLE SPRAIN/STRAIN | 0.8944 | 0.1056 | 0.1035 | 0.0021 |
| -------------------- | ------- | ------- | ------- | ------- |
| ANXIETY | 0.9989 | 0.0011 | 0.0011 | 0.0000 |
| APPENDICITIS | 0.9997 | 0.0003 | 0.0002 | 0.0000 |

ATRIAL FIBRILLATION/ ATRIAL FLUTTER  0.9999  0.0001  0.0001  0.0000 BACK PAIN (SPACE ADAPTATION)  0.0055  0.9945  0.9796  0.0149

| BACK SPRAIN/STRAIN | 0.7302 | 0.2698 | 0.2644 | 0.0054 |
| ------------------- | ------- | ------- | ------- | ------- |

BAROTRAUMA (EAR/SINUS BLOCK)  0.7379  0.2621  0.2582  0.0039

| BEHAVIORAL EMERGENCY | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ------------------------ | ------- | ------- | ------- | ------- |
| BURNS SECONDARY TO FIRE | 0.9986 | 0.0014 | 0.0013 | 0.0000 |

CARDIOGENIC SHOCK SECONDARY TO MYOCARDIAL  1.0000  0.0000  0.0000  0.0000 INFARCTION

| CHEST INJURY | 0.9999 | 0.0001 | 0.0000 | 0.0000 |
| -------------------------- | ------- | ------- | ------- | ------- |
| CHOKING/OBSTRUCTED AIRWAY | 0.9710 | 0.0290 | 0.0288 | 0.0001 |

CONSTIPATION (SPACE ADAPTATION)  0.2709  0.7291  0.7254  0.0036 DECOMPRESSION SICKNESS SECONDARY TO  0.9538  0.0462  0.0458  0.0005

### EXTRAVEHICULAR ACTIVITY

| DENTAL ABSCESS | 0.9978 | 0.0022 | 0.0017 | 0.0005 |
| --------------- | ------- | ------- | ------- | ------- |

DENTAL AVULSION (TOOTH LOSS)  0.9992  0.0008  0.0006  0.0002

| DENTAL CARIES | 0.9975 | 0.0025 | 0.0016 | 0.0009 |
| -------------------- | ------- | ------- | ------- | ------------- |
| DENTAL CROWN LOSS | 0.9994 | 0.0006 | 0.0005 | 0.0001 |
| DENTAL EXPOSED PULP | 0.9946 | 0.0054 | 0.0042 | 0.0011 |
| DENTAL FILLING LOSS | 0.9986 | 0.0014 | 0.0012 | 0.0001 |
|  | 11 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

| DEPRESSION | 0.9991 | 0.0009 | 0.0008 | 0.0001 |
| ------------------------ | ------- | ------- | ------- | ------- |
| DIARRHEA | 0.7235 | 0.2765 | 0.2723 | 0.0041 |
| ELBOW DISLOCATION | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ELBOW SPRAIN/STRAIN | 0.8854 | 0.1146 | 0.1123 | 0.0023 |
| EYE CHEMICAL BURN | 0.9429 | 0.0571 | 0.0529 | 0.0043 |
| EYE CORNEAL ULCER | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| EYE INFECTION | 0.9521 | 0.0479 | 0.0440 | 0.0038 |
| EYE IRRITATION/ABRASION | 0.5034 | 0.4966 | 0.4942 | 0.0025 |

EYE PENETRATION (FOREIGN BODY)  1.0000  0.0000  0.0000  0.0000

| FINGER DISLOCATION | 0.9902 | 0.0098 | 0.0097 | 0.0000 |
| ------------------- | ------- | ------- | ------- | ------- |

FINGERNAIL DELAMINATION SECONDARY TO  0.6691  0.3309  0.3127  0.0182

### EXTRAVEHICULAR ACTIVITY

| GASTROENTERITIS | 0.9615 | 0.0385 | 0.0354 | 0.0031 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| HEAD INJURY | 0.9999 | 0.0001 | 0.0001 | 0.0001 |
| HEADACHE (CO2 INDUCED) | 0.8219 | 0.1781 | 0.1736 | 0.0045 |
| HEADACHE (LATE) | 0.6185 | 0.3815 | 0.3777 | 0.0038 |
| HEADACHE (SPACE ADAPTATION) | 0.0485 | 0.9515 | 0.8944 | 0.0571 |
| HEARING LOSS | 0.9486 | 0.0514 | 0.0321 | 0.0193 |
| HEMORRHOIDS | 0.9806 | 0.0194 | 0.0193 | 0.0001 |

HERPES ZOSTER REACTIVATION (SHINGLES)  0.9902  0.0098  0.0084  0.0014

| HIP SPRAIN/STRAIN | 0.9602 | 0.0398 | 0.0390 | 0.0008 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| HIP/PROXIMAL FEMUR FRACTURE | 0.9999 | 0.0001 | 0.0000 | 0.0001 |
| HYPERTENSION | 0.9983 | 0.0017 | 0.0015 | 0.0002 |
| INDIGESTION | 0.9429 | 0.0571 | 0.0531 | 0.0040 |
| INFLUENZA | 0.9902 | 0.0098 | 0.0073 | 0.0024 |
| INSOMNIA (SPACE ADAPTATION) | 0.0152 | 0.9848 | 0.9799 | 0.0049 |
| KNEE SPRAIN/STRAIN | 0.9315 | 0.0685 | 0.0672 | 0.0014 |

LOWER EXTREMITY (LE) STRESS FRACTURE  0.9860  0.0140  0.0124  0.0016

| LUMBAR SPINE FRACTURE | 0.9999 | 0.0001 | 0.0000 | 0.0000 |
| ---------------------- | ------- | ------- | ------- | ------- |

MEDICATION OVERDOSE/ADVERSE REACTION  0.9806  0.0194  0.0193  0.0001

| MOUTH ULCER | 0.9155 | 0.0845 | 0.0803 | 0.0042 |
| ------------ | ------- | ------- | ------- | ------- |

NASAL CONGESTION (SPACE ADAPTATION)  0.0021  0.9979  0.9929  0.0050

| NECK SPRAIN/STRAIN | 0.9127 | 0.0873 | 0.0855 | 0.0017 |
| ------------------- | ------- | ------- | ------- | ------- |
| NEPHROLITHIASIS | 0.9989 | 0.0011 | 0.0006 | 0.0004 |
| NEUROGENIC SHOCK | 1.0000 | 0.0000 | 0.0000 | 0.0000 |

NOSE BLEED (SPACE ADAPTATION)  0.9384  0.0616  0.0594  0.0022

| OTITIS EXTERNA | 0.9710 | 0.0290 | 0.0286 | 0.0004 |
| --------------- | ------- | ------- | ------- | ------- |
| OTITIS MEDIA | 0.9710 | 0.0290 | 0.0261 | 0.0029 |

PARESTHESIAS SECONDARY TO EXTRAVEHICULAR  0.5131  0.4869  0.4723  0.0146 ACTIVITY

| PHARYNGITIS | 0.8977 | 0.1023 | 0.0977 | 0.0046 |
| ---------------------- | ------- | ------- | ------- | ------------- |
| RESPIRATORY INFECTION | 0.7235 | 0.2765 | 0.2723 | 0.0041 |
| RETINAL DETACHMENT | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| SEIZURES | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
|  | 12 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

| SEPSIS | 0.9994 | 0.0006 | 0.0004 | 0.0002 |
| ------------------------ | ------- | ------- | ------- | ------- |
| SHOULDER DISLOCATION | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| SHOULDER SPRAIN/STRAIN | 0.8000 | 0.2000 | 0.1960 | 0.0040 |
| SKIN ABRASION | 0.3978 | 0.6022 | 0.5691 | 0.0331 |
| SKIN INFECTION | 0.8803 | 0.1197 | 0.1155 | 0.0042 |
| SKIN LACERATION | 0.9902 | 0.0098 | 0.0024 | 0.0073 |
| SKIN RASH | 0.3978 | 0.6022 | 0.5992 | 0.0030 |
| SLEEP DISORDER | 0.2714 | 0.7286 | 0.7250 | 0.0036 |
| SMALL BOWEL OBSTRUCTION | 0.9998 | 0.0002 | 0.0002 | 0.0000 |
| SMOKE INHALATION | 0.9952 | 0.0048 | 0.0042 | 0.0007 |

SPACE MOTION SICKNESS (SPACE ADAPTATION)  0.0001  0.9999  0.8499  0.1500 STROKE (CEREBROVASCULAR ACCIDENT)  0.9998  0.0002  0.0001  0.0001

| SUDDEN CARDIAC ARREST | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| TOXIC EXPOSURE (AMMONIA) | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| TRAUMATIC HYPOVOLEMIC SHOCK | 0.9998 | 0.0002 | 0.0001 | 0.0001 |

URINARY INCONTINENCE (SPACE ADAPTATION)  0.8424  0.1576  0.1442  0.0134 URINARY RETENTION (SPACE ADAPTATION)  0.8192  0.1808  0.1537  0.0271

| URINARY TRACT INFECTION | 0.8345 | 0.1655 | 0.1572 | 0.0083 |
| ------------------------ | ------- | ------- | ------- | ------- |
| VAGINAL YEAST INFECTION | 0.9566 | 0.0434 | 0.0369 | 0.0065 |

VISUAL IMPAIRMENT AND/OR INCREASED  0.0540  0.9460  0.8798  0.0662 INTRACRANIAL PRESSURE (VIIP)(SPACE ADAPTATION)

| WRIST FRACTURE | 0.9994 | 0.0006 | 0.0005 | 0.0001 |
| -------------------- | ------- | ------- | ------- | ------- |
| WRIST SPRAIN/STRAIN | 0.9505 | 0.0495 | 0.0487 | 0.0007 |
Table 16. Cis-lunar 21 Days Probability by Case of 1 or more events

Medical Condition  Probability  Probabilit  Probability >=1  Probability >=1

|  | Zero | y >=1 | Best Case | Worst Case |
| ---------------------- | ------- | ------- | ---------- | ----------- |
| ABDOMINAL INJURY | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ABDOMINAL WALL HERNIA | 0.9999 | 0.0001 | 0.0001 | 0.0000 |

ACUTE ANGLE-CLOSURE GLAUCOMA  1.0000  0.0000  0.0000  0.0000

| ACUTE ARTHRITIS | 0.9996 | 0.0004 | 0.0003 | 0.0000 |
| ---------------- | ------- | ------- | ------- | ------- |

ACUTE CHOLECYSTITIS/BILIARY COLIC  0.9998  0.0002  0.0002  0.0000

| ACUTE COMPARTMENT SYNDROME | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| --------------------------- | ------- | ------- | ------- | ------- |
| ACUTE DIVERTICULITIS | 0.9997 | 0.0003 | 0.0002 | 0.0001 |
| ACUTE PANCREATITIS | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| ACUTE PROSTATITIS | 0.9989 | 0.0011 | 0.0011 | 0.0001 |
| ACUTE RADIATION SYNDROME | 0.9994 | 0.0006 | 0.0006 | 0.0000 |
| ACUTE SINUSITIS | 0.9508 | 0.0492 | 0.0452 | 0.0039 |

ALLERGIC REACTION (MILD TO MODERATE)  0.9117  0.0883  0.0848  0.0035

| ALTITUDE SICKNESS | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ------------------ | ------- | ------- | ------- | ------- |
| ANAPHYLAXIS | 0.9999 | 0.0001 | 0.0001 | 0.0000 |

ANGINA/MYOCARDIAL INFARCTION  0.9999  0.0001  0.0001  0.0000

|  | 13 |  |  | 17 JULY 2017 |
| --- | --- | --- | --- | ------------- |
S-20170623-384, Cis-Lunar Orbit

| ANKLE SPRAIN/STRAIN | 0.9088 | 0.0912 | 0.0894 | 0.0018 |
| -------------------- | ------- | ------- | ------- | ------- |
| ANXIETY | 0.9996 | 0.0004 | 0.0004 | 0.0000 |
| APPENDICITIS | 0.9998 | 0.0002 | 0.0002 | 0.0000 |

ATRIAL FIBRILLATION/ ATRIAL FLUTTER  0.9998  0.0002  0.0001  0.0000 BACK PAIN (SPACE ADAPTATION)  0.0510  0.9490  0.9347  0.0142

| BACK SPRAIN/STRAIN | 0.7637 | 0.2363 | 0.2315 | 0.0047 |
| ------------------- | ------- | ------- | ------- | ------- |

BAROTRAUMA (EAR/SINUS BLOCK)  0.7706  0.2294  0.2260  0.0034

| BEHAVIORAL EMERGENCY | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ------------------------ | ------- | ------- | ------- | ------- |
| BURNS SECONDARY TO FIRE | 0.9988 | 0.0012 | 0.0012 | 0.0000 |

CARDIOGENIC SHOCK SECONDARY TO MYOCARDIAL  1.0000  0.0000  0.0000  0.0000 INFARCTION

| CHEST INJURY | 0.9999 | 0.0001 | 0.0000 | 0.0000 |
| -------------------------- | ------- | ------- | ------- | ------- |
| CHOKING/OBSTRUCTED AIRWAY | 0.9751 | 0.0249 | 0.0248 | 0.0001 |

CONSTIPATION (SPACE ADAPTATION)  0.4742  0.5258  0.5232  0.0026

| DENTAL ABSCESS | 0.9981 | 0.0019 | 0.0015 | 0.0004 |
| --------------- | ------- | ------- | ------- | ------- |

DENTAL AVULSION (TOOTH LOSS)  0.9993  0.0007  0.0005  0.0002

| DENTAL CARIES | 0.9978 | 0.0022 | 0.0014 | 0.0008 |
| ------------------------ | ------- | ------- | ------- | ------- |
| DENTAL CROWN LOSS | 0.9997 | 0.0003 | 0.0003 | 0.0000 |
| DENTAL EXPOSED PULP | 0.9954 | 0.0046 | 0.0036 | 0.0010 |
| DENTAL FILLING LOSS | 0.9988 | 0.0012 | 0.0011 | 0.0001 |
| DEPRESSION | 0.9993 | 0.0007 | 0.0006 | 0.0001 |
| DIARRHEA | 0.7578 | 0.2422 | 0.2386 | 0.0036 |
| ELBOW DISLOCATION | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ELBOW SPRAIN/STRAIN | 0.9009 | 0.0991 | 0.0971 | 0.0020 |
| EYE CHEMICAL BURN | 0.9508 | 0.0492 | 0.0455 | 0.0037 |
| EYE CORNEAL ULCER | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| EYE INFECTION | 0.9588 | 0.0412 | 0.0379 | 0.0033 |
| EYE IRRITATION/ABRASION | 0.5552 | 0.4448 | 0.4426 | 0.0022 |

EYE PENETRATION (FOREIGN BODY)  1.0000  0.0000  0.0000  0.0000

| FINGER DISLOCATION | 0.9916 | 0.0084 | 0.0083 | 0.0000 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| GASTROENTERITIS | 0.9669 | 0.0331 | 0.0304 | 0.0026 |
| HEAD INJURY | 0.9999 | 0.0001 | 0.0000 | 0.0001 |
| HEADACHE (CO2 INDUCED) | 0.8453 | 0.1547 | 0.1509 | 0.0039 |
| HEADACHE (LATE) | 0.6624 | 0.3376 | 0.3342 | 0.0034 |
| HEADACHE (SPACE ADAPTATION) | 0.1775 | 0.8225 | 0.7731 | 0.0493 |
| HEARING LOSS | 0.9558 | 0.0442 | 0.0276 | 0.0166 |
| HEMORRHOIDS | 0.9833 | 0.0167 | 0.0166 | 0.0001 |

HERPES ZOSTER REACTIVATION (SHINGLES)  0.9916  0.0084  0.0072  0.0012

| HIP SPRAIN/STRAIN | 0.9658 | 0.0342 | 0.0335 | 0.0007 |
| ---------------------------- | ------- | ------- | ------- | ------------- |
| HIP/PROXIMAL FEMUR FRACTURE | 0.9999 | 0.0001 | 0.0000 | 0.0001 |
| HYPERTENSION | 0.9985 | 0.0015 | 0.0013 | 0.0002 |
| INDIGESTION | 0.9508 | 0.0492 | 0.0457 | 0.0034 |
| INFLUENZA | 0.9916 | 0.0084 | 0.0063 | 0.0021 |
|  | 14 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

| INSOMNIA (SPACE ADAPTATION) | 0.0913 | 0.9087 | 0.9042 | 0.0045 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| KNEE SPRAIN/STRAIN | 0.9410 | 0.0590 | 0.0579 | 0.0012 |

LOWER EXTREMITY (LE) STRESS FRACTURE  0.9904  0.0096  0.0085  0.0011

| LUMBAR SPINE FRACTURE | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ---------------------- | ------- | ------- | ------- | ------- |

MEDICATION OVERDOSE/ADVERSE REACTION  0.9833  0.0167  0.0166  0.0001

| MOUTH ULCER | 0.9271 | 0.0729 | 0.0692 | 0.0036 |
| ------------ | ------- | ------- | ------- | ------- |

NASAL CONGESTION (SPACE ADAPTATION)  0.0294  0.9706  0.9657  0.0049

| NECK SPRAIN/STRAIN | 0.9247 | 0.0753 | 0.0738 | 0.0015 |
| ------------------- | ------- | ------- | ------- | ------- |
| NEPHROLITHIASIS | 0.9991 | 0.0009 | 0.0006 | 0.0004 |
| NEUROGENIC SHOCK | 1.0000 | 0.0000 | 0.0000 | 0.0000 |

NOSE BLEED (SPACE ADAPTATION)  0.9643  0.0357  0.0344  0.0012

| OTITIS EXTERNA | 0.9751 | 0.0249 | 0.0245 | 0.0004 |
| ------------------------ | ------- | ------- | ------- | ------- |
| OTITIS MEDIA | 0.9751 | 0.0249 | 0.0224 | 0.0025 |
| PHARYNGITIS | 0.9117 | 0.0883 | 0.0843 | 0.0040 |
| RESPIRATORY INFECTION | 0.7578 | 0.2422 | 0.2386 | 0.0036 |
| RETINAL DETACHMENT | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| SEIZURES | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| SEPSIS | 0.9994 | 0.0006 | 0.0004 | 0.0002 |
| SHOULDER DISLOCATION | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| SHOULDER SPRAIN/STRAIN | 0.8259 | 0.1741 | 0.1706 | 0.0035 |
| SKIN ABRASION | 0.4538 | 0.5462 | 0.5162 | 0.0300 |
| SKIN INFECTION | 0.8965 | 0.1035 | 0.0999 | 0.0036 |
| SKIN LACERATION | 0.9916 | 0.0084 | 0.0021 | 0.0063 |
| SKIN RASH | 0.4538 | 0.5462 | 0.5435 | 0.0027 |
| SLEEP DISORDER | 0.3269 | 0.6731 | 0.6697 | 0.0034 |
| SMALL BOWEL OBSTRUCTION | 0.9997 | 0.0003 | 0.0002 | 0.0000 |
| SMOKE INHALATION | 0.9959 | 0.0041 | 0.0036 | 0.0006 |

SPACE MOTION SICKNESS (SPACE ADAPTATION)  0.0053  0.9947  0.8455  0.1492 STROKE (CEREBROVASCULAR ACCIDENT)  0.9998  0.0002  0.0001  0.0001

| SUDDEN CARDIAC ARREST | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| TOXIC EXPOSURE (AMMONIA) | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| TRAUMATIC HYPOVOLEMIC SHOCK | 0.9999 | 0.0001 | 0.0001 | 0.0001 |

URINARY RETENTION (SPACE ADAPTATION)  0.9724  0.0276  0.0234  0.0041

| URINARY TRACT INFECTION | 0.9618 | 0.0382 | 0.0362 | 0.0019 |
| ------------------------ | ------- | ------- | ------- | ------- |

VISUAL IMPAIRMENT AND/OR INCREASED INTRACRANIAL  0.1887  0.8113  0.7545  0.0568 PRESSURE (VIIP)(SPACE ADAPTATION)

| WRIST FRACTURE | 0.9995 | 0.0005 | 0.0004 | 0.0001 |
| -------------------- | ------- | ------- | ------- | ------------- |
| WRIST SPRAIN/STRAIN | 0.9575 | 0.0425 | 0.0419 | 0.0006 |
|  | 15 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

Table 17. Cis-lunar 42 Days Probability by Case of 1 or more events

Medical Condition  Probability  Probabilit  Probability >=1  Probability >=1

|  | Zero | y >=1 | Best Case | Worst Case |
| ---------------------- | ------- | ------- | ---------- | ----------- |
| ABDOMINAL INJURY | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| ABDOMINAL WALL HERNIA | 0.9998 | 0.0002 | 0.0002 | 0.0000 |

ACUTE ANGLE-CLOSURE GLAUCOMA  1.0000  0.0000  0.0000  0.0000

| ACUTE ARTHRITIS | 0.9993 | 0.0007 | 0.0007 | 0.0000 |
| ---------------- | ------- | ------- | ------- | ------- |

ACUTE CHOLECYSTITIS/BILIARY COLIC  0.9996  0.0004  0.0003  0.0000

| ACUTE COMPARTMENT SYNDROME | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| --------------------------- | ------- | ------- | ------- | ------- |
| ACUTE DIVERTICULITIS | 0.9993 | 0.0007 | 0.0005 | 0.0002 |
| ACUTE PANCREATITIS | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| ACUTE PROSTATITIS | 0.9977 | 0.0023 | 0.0021 | 0.0001 |
| ACUTE RADIATION SYNDROME | 0.9988 | 0.0012 | 0.0012 | 0.0000 |
| ACUTE SINUSITIS | 0.9041 | 0.0959 | 0.0883 | 0.0077 |

ALLERGIC REACTION (MILD TO MODERATE)  0.8312  0.1688  0.1621  0.0068

| ALTITUDE SICKNESS | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ------------------ | ------- | ------- | ------- | ------- |
| ANAPHYLAXIS | 0.9998 | 0.0002 | 0.0002 | 0.0000 |

ANGINA/MYOCARDIAL INFARCTION  0.9997  0.0003  0.0002  0.0000

| ANKLE SPRAIN/STRAIN | 0.8259 | 0.1741 | 0.1706 | 0.0035 |
| -------------------- | ------- | ------- | ------- | ------- |
| ANXIETY | 0.9991 | 0.0009 | 0.0008 | 0.0000 |
| APPENDICITIS | 0.9996 | 0.0004 | 0.0004 | 0.0001 |

ATRIAL FIBRILLATION/ ATRIAL FLUTTER  0.9997  0.0003  0.0003  0.0001 BACK PAIN (SPACE ADAPTATION)  0.0510  0.9490  0.9347  0.0142

| BACK SPRAIN/STRAIN | 0.5833 | 0.4167 | 0.4084 | 0.0083 |
| ------------------- | ------- | ------- | ------- | ------- |

BAROTRAUMA (EAR/SINUS BLOCK)  0.5938  0.4062  0.4001  0.0061

| BEHAVIORAL EMERGENCY | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ------------------------ | ------- | ------- | ------- | ------- |
| BURNS SECONDARY TO FIRE | 0.9977 | 0.0023 | 0.0023 | 0.0000 |

CARDIOGENIC SHOCK SECONDARY TO MYOCARDIAL  1.0000  0.0000  0.0000  0.0000 INFARCTION

| CHEST INJURY | 0.9999 | 0.0001 | 0.0000 | 0.0001 |
| -------------------------- | ------- | ------- | ------- | ------- |
| CHOKING/OBSTRUCTED AIRWAY | 0.9508 | 0.0492 | 0.0489 | 0.0002 |

CONSTIPATION (SPACE ADAPTATION)  0.4742  0.5258  0.5232  0.0026

| DENTAL ABSCESS | 0.9963 | 0.0037 | 0.0030 | 0.0008 |
| --------------- | ------- | ------- | ------- | ------- |

DENTAL AVULSION (TOOTH LOSS)  0.9987  0.0013  0.0010  0.0003

| DENTAL CARIES | 0.9957 | 0.0043 | 0.0027 | 0.0016 |
| -------------------- | ------- | ------- | ------- | ------------- |
| DENTAL CROWN LOSS | 0.9994 | 0.0006 | 0.0005 | 0.0001 |
| DENTAL EXPOSED PULP | 0.9908 | 0.0092 | 0.0073 | 0.0019 |
| DENTAL FILLING LOSS | 0.9977 | 0.0023 | 0.0021 | 0.0002 |
| DEPRESSION | 0.9987 | 0.0013 | 0.0012 | 0.0001 |
| DIARRHEA | 0.5742 | 0.4258 | 0.4194 | 0.0064 |
| ELBOW DISLOCATION | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ELBOW SPRAIN/STRAIN | 0.8117 | 0.1883 | 0.1846 | 0.0038 |
|  | 16 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

| EYE CHEMICAL BURN | 0.9041 | 0.0959 | 0.0888 | 0.0072 |
| ------------------------ | ------- | ------- | ------- | ------- |
| EYE CORNEAL ULCER | 0.9998 | 0.0002 | 0.0002 | 0.0000 |
| EYE INFECTION | 0.9194 | 0.0806 | 0.0742 | 0.0064 |
| EYE IRRITATION/ABRASION | 0.3083 | 0.6917 | 0.6883 | 0.0035 |

EYE PENETRATION (FOREIGN BODY)  1.0000  0.0000  0.0000  0.0000

| FINGER DISLOCATION | 0.9833 | 0.0167 | 0.0166 | 0.0001 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| GASTROENTERITIS | 0.9350 | 0.0650 | 0.0598 | 0.0052 |
| HEAD INJURY | 0.9998 | 0.0002 | 0.0001 | 0.0001 |
| HEADACHE (CO2 INDUCED) | 0.7145 | 0.2855 | 0.2784 | 0.0071 |
| HEADACHE (LATE) | 0.4388 | 0.5612 | 0.5556 | 0.0056 |
| HEADACHE (SPACE ADAPTATION) | 0.1775 | 0.8225 | 0.7731 | 0.0493 |
| HEARING LOSS | 0.9135 | 0.0865 | 0.0541 | 0.0324 |
| HEMORRHOIDS | 0.9669 | 0.0331 | 0.0329 | 0.0002 |

HERPES ZOSTER REACTIVATION (SHINGLES)  0.9833  0.0167  0.0143  0.0023

| HIP SPRAIN/STRAIN | 0.9328 | 0.0672 | 0.0659 | 0.0013 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| HIP/PROXIMAL FEMUR FRACTURE | 0.9998 | 0.0002 | 0.0000 | 0.0002 |
| HYPERTENSION | 0.9970 | 0.0030 | 0.0026 | 0.0003 |
| INDIGESTION | 0.9041 | 0.0959 | 0.0892 | 0.0067 |
| INFLUENZA | 0.9833 | 0.0167 | 0.0125 | 0.0042 |
| INSOMNIA (SPACE ADAPTATION) | 0.0913 | 0.9087 | 0.9042 | 0.0045 |
| KNEE SPRAIN/STRAIN | 0.8854 | 0.1146 | 0.1123 | 0.0023 |

LOWER EXTREMITY (LE) STRESS FRACTURE  0.9809  0.0191  0.0169  0.0022

| LUMBAR SPINE FRACTURE | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| ---------------------- | ------- | ------- | ------- | ------- |

MEDICATION OVERDOSE/ADVERSE REACTION  0.9669  0.0331  0.0329  0.0002

| MOUTH ULCER | 0.8596 | 0.1404 | 0.1334 | 0.0070 |
| ------------ | ------- | ------- | ------- | ------- |

NASAL CONGESTION (SPACE ADAPTATION)  0.0294  0.9706  0.9657  0.0049

| NECK SPRAIN/STRAIN | 0.8551 | 0.1449 | 0.1420 | 0.0029 |
| ------------------- | ------- | ------- | ------- | ------- |
| NEPHROLITHIASIS | 0.9982 | 0.0018 | 0.0011 | 0.0007 |
| NEUROGENIC SHOCK | 1.0000 | 0.0000 | 0.0000 | 0.0000 |

NOSE BLEED (SPACE ADAPTATION)  0.9643  0.0357  0.0344  0.0012

| OTITIS EXTERNA | 0.9508 | 0.0492 | 0.0484 | 0.0007 |
| ----------------------- | ------- | ------- | ------- | ------------- |
| OTITIS MEDIA | 0.9508 | 0.0492 | 0.0443 | 0.0049 |
| PHARYNGITIS | 0.8312 | 0.1688 | 0.1612 | 0.0076 |
| RESPIRATORY INFECTION | 0.5742 | 0.4258 | 0.4194 | 0.0064 |
| RETINAL DETACHMENT | 0.9999 | 0.0001 | 0.0000 | 0.0000 |
| SEIZURES | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| SEPSIS | 0.9989 | 0.0011 | 0.0007 | 0.0004 |
| SHOULDER DISLOCATION | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| SHOULDER SPRAIN/STRAIN | 0.6821 | 0.3179 | 0.3115 | 0.0064 |
| SKIN ABRASION | 0.2059 | 0.7941 | 0.7504 | 0.0437 |
| SKIN INFECTION | 0.8037 | 0.1963 | 0.1894 | 0.0069 |
| SKIN LACERATION | 0.9833 | 0.0167 | 0.0042 | 0.0125 |
| SKIN RASH | 0.2059 | 0.7941 | 0.7901 | 0.0040 |
|  | 17 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

| SLEEP DISORDER | 0.1069 | 0.8931 | 0.8886 | 0.0045 |
| ------------------------ | ------- | ------- | ------- | ------- |
| SMALL BOWEL OBSTRUCTION | 0.9994 | 0.0006 | 0.0005 | 0.0001 |
| SMOKE INHALATION | 0.9917 | 0.0083 | 0.0071 | 0.0012 |

SPACE MOTION SICKNESS (SPACE ADAPTATION)  0.0053  0.9947  0.8455  0.1492 STROKE (CEREBROVASCULAR ACCIDENT)  0.9995  0.0005  0.0003  0.0002

| SUDDEN CARDIAC ARREST | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| TOXIC EXPOSURE (AMMONIA) | 0.9999 | 0.0001 | 0.0000 | 0.0001 |
| TRAUMATIC HYPOVOLEMIC SHOCK | 0.9997 | 0.0003 | 0.0002 | 0.0001 |

URINARY RETENTION (SPACE ADAPTATION)  0.9724  0.0276  0.0234  0.0041

| URINARY TRACT INFECTION | 0.9252 | 0.0748 | 0.0711 | 0.0037 |
| ------------------------ | ------- | ------- | ------- | ------- |

### VISUAL IMPAIRMENT AND/OR INCREASED INTRACRANIAL

|  | 0.1887 | 0.8113 | 0.7545 | 0.0568 |
| --- | ------- | ------- | ------- | ------- |

PRESSURE (VIIP)(SPACE ADAPTATION)

| WRIST FRACTURE | 0.9989 | 0.0011 | 0.0009 | 0.0002 |
| -------------------- | ------- | ------- | ------- | ------- |
| WRIST SPRAIN/STRAIN | 0.9167 | 0.0833 | 0.0820 | 0.0012 |
Table 18. Cis-lunar 1 Year Probability by Case of 1 or more events

Medical Condition  Probability  Probabilit  Probability >=1  Probability >=1

|  | Zero | y >=1 | Best Case | Worst Case |
| ---------------------- | ------- | ------- | ---------- | ----------- |
| ABDOMINAL INJURY | 0.9993 | 0.0007 | 0.0005 | 0.0002 |
| ABDOMINAL WALL HERNIA | 0.9982 | 0.0018 | 0.0016 | 0.0002 |

ACUTE ANGLE-CLOSURE GLAUCOMA  0.9999  0.0001  0.0001  0.0000

| ACUTE ARTHRITIS | 0.9939 | 0.0061 | 0.0059 | 0.0002 |
| ---------------- | ------- | ------- | ------- | ------- |

ACUTE CHOLECYSTITIS/BILIARY COLIC  0.9969  0.0031  0.0028  0.0003

| ACUTE COMPARTMENT SYNDROME | 0.9997 | 0.0003 | 0.0001 | 0.0002 |
| --------------------------- | ------- | ------- | ------- | ------- |
| ACUTE DIVERTICULITIS | 0.9943 | 0.0057 | 0.0042 | 0.0014 |
| ACUTE PANCREATITIS | 0.9988 | 0.0012 | 0.0010 | 0.0002 |
| ACUTE PROSTATITIS | 0.9806 | 0.0194 | 0.0181 | 0.0013 |
| ACUTE RADIATION SYNDROME | 0.9896 | 0.0104 | 0.0104 | 0.0001 |
| ACUTE SINUSITIS | 0.4159 | 0.5841 | 0.5373 | 0.0467 |

ALLERGIC REACTION (MILD TO MODERATE)  0.2003  0.7997  0.7678  0.0320

| ALTITUDE SICKNESS | 0.9998 | 0.0002 | 0.0002 | 0.0000 |
| ------------------ | ------- | ------- | ------- | ------- |
| ANAPHYLAXIS | 0.9980 | 0.0020 | 0.0020 | 0.0000 |

ANGINA/MYOCARDIAL INFARCTION  0.9975  0.0025  0.0021  0.0004

| ANKLE SPRAIN/STRAIN | 0.1895 | 0.8105 | 0.7943 | 0.0162 |
| -------------------- | ------- | ------- | ------- | ------- |
| ANXIETY | 0.9924 | 0.0076 | 0.0072 | 0.0003 |
| APPENDICITIS | 0.9963 | 0.0037 | 0.0031 | 0.0007 |

ATRIAL FIBRILLATION/ ATRIAL FLUTTER  0.9972  0.0028  0.0023  0.0006 BACK PAIN (SPACE ADAPTATION)  0.0510  0.9490  0.9347  0.0142

| BACK SPRAIN/STRAIN | 0.0092 | 0.9908 | 0.9710 | 0.0198 |
| ------------------- | ------- | ------- | ------- | ------- |

BAROTRAUMA (EAR/SINUS BLOCK)  0.0108  0.9892  0.9744  0.0148

| BEHAVIORAL EMERGENCY | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| ------------------------ | ------- | ------- | ------- | ------------- |
| BURNS SECONDARY TO FIRE | 0.9800 | 0.0200 | 0.0199 | 0.0001 |
|  | 18 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

CARDIOGENIC SHOCK SECONDARY TO MYOCARDIAL  1.0000  0.0000  0.0000  0.0000 INFARCTION

| CHEST INJURY | 0.9990 | 0.0010 | 0.0004 | 0.0007 |
| -------------------------- | ------- | ------- | ------- | ------- |
| CHOKING/OBSTRUCTED AIRWAY | 0.6449 | 0.3551 | 0.3533 | 0.0018 |

CONSTIPATION (SPACE ADAPTATION)  0.4742  0.5258  0.5232  0.0026

| DENTAL ABSCESS | 0.9679 | 0.0321 | 0.0254 | 0.0067 |
| --------------- | ------- | ------- | ------- | ------- |

DENTAL AVULSION (TOOTH LOSS)  0.9884  0.0116  0.0089  0.0027

| DENTAL CARIES | 0.9631 | 0.0369 | 0.0233 | 0.0137 |
| ------------------------ | ------- | ------- | ------- | ------- |
| DENTAL CROWN LOSS | 0.9948 | 0.0052 | 0.0043 | 0.0008 |
| DENTAL EXPOSED PULP | 0.9227 | 0.0773 | 0.0610 | 0.0162 |
| DENTAL FILLING LOSS | 0.9798 | 0.0202 | 0.0184 | 0.0018 |
| DEPRESSION | 0.9885 | 0.0115 | 0.0106 | 0.0009 |
| DIARRHEA | 0.0080 | 0.9920 | 0.9771 | 0.0149 |
| ELBOW DISLOCATION | 0.9998 | 0.0002 | 0.0002 | 0.0000 |
| ELBOW SPRAIN/STRAIN | 0.1629 | 0.8371 | 0.8204 | 0.0167 |
| EYE CHEMICAL BURN | 0.4159 | 0.5841 | 0.5402 | 0.0438 |
| EYE CORNEAL ULCER | 0.9983 | 0.0017 | 0.0017 | 0.0000 |
| EYE INFECTION | 0.4814 | 0.5186 | 0.4771 | 0.0415 |
| EYE IRRITATION/ABRASION | 0.0000 | 1.0000 | 0.9950 | 0.0050 |

EYE PENETRATION (FOREIGN BODY)  1.0000  0.0000  0.0000  0.0000

| FINGER DISLOCATION | 0.8640 | 0.1360 | 0.1353 | 0.0007 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| GASTROENTERITIS | 0.5572 | 0.4428 | 0.4074 | 0.0354 |
| HEAD INJURY | 0.9983 | 0.0017 | 0.0008 | 0.0009 |
| HEADACHE (CO2 INDUCED) | 0.0537 | 0.9463 | 0.9226 | 0.0237 |
| HEADACHE (LATE) | 0.0008 | 0.9992 | 0.9892 | 0.0100 |
| HEADACHE (SPACE ADAPTATION) | 0.1775 | 0.8225 | 0.7731 | 0.0493 |
| HEARING LOSS | 0.4553 | 0.5447 | 0.3405 | 0.2043 |
| HEMORRHOIDS | 0.7465 | 0.2535 | 0.2523 | 0.0013 |

HERPES ZOSTER REACTIVATION (SHINGLES)  0.8640  0.1360  0.1170  0.0190

| HIP SPRAIN/STRAIN | 0.5461 | 0.4539 | 0.4448 | 0.0091 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| HIP/PROXIMAL FEMUR FRACTURE | 0.9983 | 0.0017 | 0.0001 | 0.0016 |
| HYPERTENSION | 0.9745 | 0.0255 | 0.0226 | 0.0029 |
| INDIGESTION | 0.4159 | 0.5841 | 0.5432 | 0.0409 |
| INFLUENZA | 0.8640 | 0.1360 | 0.1020 | 0.0340 |
| INSOMNIA (SPACE ADAPTATION) | 0.0913 | 0.9087 | 0.9042 | 0.0045 |
| KNEE SPRAIN/STRAIN | 0.3469 | 0.6531 | 0.6400 | 0.0131 |

LOWER EXTREMITY (LE) STRESS FRACTURE  0.8454  0.1546  0.1369  0.0178

| LUMBAR SPINE FRACTURE | 0.9992 | 0.0008 | 0.0007 | 0.0001 |
| ---------------------- | ------- | ------- | ------- | ------- |

MEDICATION OVERDOSE/ADVERSE REACTION  0.7465  0.2535  0.2523  0.0013

| MOUTH ULCER | 0.2683 | 0.7317 | 0.6952 | 0.0366 |
| ------------ | ------- | ------- | ------- | ------- |

NASAL CONGESTION (SPACE ADAPTATION)  0.0294  0.9706  0.9657  0.0049

| NECK SPRAIN/STRAIN | 0.2564 | 0.7436 | 0.7287 | 0.0149 |
| ------------------- | ------- | ------- | ------- | ------------- |
| NEPHROLITHIASIS | 0.9843 | 0.0157 | 0.0095 | 0.0062 |
|  | 19 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

| NEUROGENIC SHOCK | 1.0000 | 0.0000 | 0.0000 | 0.0000 |
| ----------------- | ------- | ------- | ------- | ------- |

NOSE BLEED (SPACE ADAPTATION)  0.9643  0.0357  0.0344  0.0012

| OTITIS EXTERNA | 0.6449 | 0.3551 | 0.3497 | 0.0053 |
| ------------------------ | ------- | ------- | ------- | ------- |
| OTITIS MEDIA | 0.6449 | 0.3551 | 0.3196 | 0.0355 |
| PHARYNGITIS | 0.2003 | 0.7997 | 0.7638 | 0.0360 |
| RESPIRATORY INFECTION | 0.0080 | 0.9920 | 0.9771 | 0.0149 |
| RETINAL DETACHMENT | 0.9995 | 0.0005 | 0.0002 | 0.0003 |
| SEIZURES | 0.9989 | 0.0011 | 0.0009 | 0.0002 |
| SEPSIS | 0.9904 | 0.0096 | 0.0063 | 0.0032 |
| SHOULDER DISLOCATION | 0.9999 | 0.0001 | 0.0000 | 0.0001 |
| SHOULDER SPRAIN/STRAIN | 0.0359 | 0.9641 | 0.9448 | 0.0193 |
| SKIN ABRASION | 0.0000 | 1.0000 | 0.9450 | 0.0550 |
| SKIN INFECTION | 0.1495 | 0.8505 | 0.8208 | 0.0298 |
| SKIN LACERATION | 0.8640 | 0.1360 | 0.0340 | 0.1020 |
| SKIN RASH | 0.0000 | 1.0000 | 0.9950 | 0.0050 |
| SLEEP DISORDER | 0.0000 | 1.0000 | 0.9950 | 0.0050 |
| SMALL BOWEL OBSTRUCTION | 0.9952 | 0.0048 | 0.0042 | 0.0006 |
| SMOKE INHALATION | 0.9302 | 0.0698 | 0.0600 | 0.0098 |

SPACE MOTION SICKNESS (SPACE ADAPTATION)  0.0053  0.9947  0.8455  0.1492 STROKE (CEREBROVASCULAR ACCIDENT)  0.9961  0.0039  0.0026  0.0013

| SUDDEN CARDIAC ARREST | 0.9999 | 0.0001 | 0.0000 | 0.0001 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| TOXIC EXPOSURE (AMMONIA) | 0.9993 | 0.0007 | 0.0000 | 0.0007 |
| TRAUMATIC HYPOVOLEMIC SHOCK | 0.9974 | 0.0026 | 0.0015 | 0.0010 |

URINARY RETENTION (SPACE ADAPTATION)  0.9724  0.0276  0.0234  0.0041

| URINARY TRACT INFECTION | 0.5084 | 0.4916 | 0.4670 | 0.0246 |
| ------------------------ | ------- | ------- | ------- | ------- |

VISUAL IMPAIRMENT AND/OR INCREASED INTRACRANIAL  0.1887  0.8113  0.7545  0.0568 PRESSURE (VIIP)(SPACE ADAPTATION)

| WRIST FRACTURE | 0.9906 | 0.0094 | 0.0075 | 0.0019 |
| -------------------- | ------- | ------- | ------- | ------- |
| WRIST SPRAIN/STRAIN | 0.4695 | 0.5305 | 0.5226 | 0.0080 |
Table 19. Cis-lunar 2 Years Probability by Case of 1 or more events

Medical Condition  Probability  Probabilit  Probability >=1  Probability >=1

|  | Zero | y >=1 | Best Case | Worst Case |
| ---------------------- | ------- | ------- | ---------- | ----------- |
| ABDOMINAL INJURY | 0.9987 | 0.0013 | 0.0010 | 0.0003 |
| ABDOMINAL WALL HERNIA | 0.9964 | 0.0036 | 0.0032 | 0.0004 |

ACUTE ANGLE-CLOSURE GLAUCOMA  0.9998  0.0002  0.0002  0.0000

| ACUTE ARTHRITIS | 0.9878 | 0.0122 | 0.0119 | 0.0003 |
| ---------------- | ------- | ------- | ------- | ------- |

ACUTE CHOLECYSTITIS/BILIARY COLIC  0.9939  0.0061  0.0055  0.0006

| ACUTE COMPARTMENT SYNDROME | 0.9994 | 0.0006 | 0.0002 | 0.0004 |
| --------------------------- | ------- | ------- | ------- | ------------- |
| ACUTE DIVERTICULITIS | 0.9887 | 0.0113 | 0.0084 | 0.0029 |
| ACUTE PANCREATITIS | 0.9975 | 0.0025 | 0.0020 | 0.0004 |
| ACUTE PROSTATITIS | 0.9616 | 0.0384 | 0.0359 | 0.0025 |
| ACUTE RADIATION SYNDROME | 0.9792 | 0.0208 | 0.0207 | 0.0001 |
|  | 20 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

| ACUTE SINUSITIS | 0.1730 | 0.8270 | 0.7608 | 0.0662 |
| ---------------- | ------- | ------- | ------- | ------- |

ALLERGIC REACTION (MILD TO MODERATE)  0.0401  0.9599  0.9215  0.0384

| ALTITUDE SICKNESS | 0.9996 | 0.0004 | 0.0004 | 0.0000 |
| ------------------ | ------- | ------- | ------- | ------- |
| ANAPHYLAXIS | 0.9961 | 0.0039 | 0.0039 | 0.0000 |

ANGINA/MYOCARDIAL INFARCTION  0.9950  0.0050  0.0043  0.0008

| ANKLE SPRAIN/STRAIN | 0.0359 | 0.9641 | 0.9448 | 0.0193 |
| -------------------- | ------- | ------- | ------- | ------- |
| ANXIETY | 0.9849 | 0.0151 | 0.0144 | 0.0007 |
| APPENDICITIS | 0.9926 | 0.0074 | 0.0061 | 0.0013 |

ATRIAL FIBRILLATION/ ATRIAL FLUTTER  0.9943  0.0057  0.0046  0.0011 BACK PAIN (SPACE ADAPTATION)  0.0510  0.9490  0.9347  0.0142

| BACK SPRAIN/STRAIN | 0.0001 | 0.9999 | 0.9799 | 0.0200 |
| ------------------- | ------- | ------- | ------- | ------- |

BAROTRAUMA (EAR/SINUS BLOCK)  0.0001  0.9999  0.9849  0.0150

| BEHAVIORAL EMERGENCY | 0.9999 | 0.0001 | 0.0001 | 0.0000 |
| ------------------------ | ------- | ------- | ------- | ------- |
| BURNS SECONDARY TO FIRE | 0.9605 | 0.0395 | 0.0393 | 0.0002 |

CARDIOGENIC SHOCK SECONDARY TO MYOCARDIAL  0.9999  0.0001  0.0000  0.0001 INFARCTION

| CHEST INJURY | 0.9980 | 0.0020 | 0.0007 | 0.0013 |
| -------------------------- | ------- | ------- | ------- | ------- |
| CHOKING/OBSTRUCTED AIRWAY | 0.4159 | 0.5841 | 0.5811 | 0.0029 |

CONSTIPATION (SPACE ADAPTATION)  0.4742  0.5258  0.5232  0.0026

| DENTAL ABSCESS | 0.9368 | 0.0632 | 0.0499 | 0.0133 |
| --------------- | ------- | ------- | ------- | ------- |

DENTAL AVULSION (TOOTH LOSS)  0.9769  0.0231  0.0178  0.0053

| DENTAL CARIES | 0.9275 | 0.0725 | 0.0457 | 0.0268 |
| ------------------------ | ------- | ------- | ------- | ------- |
| DENTAL CROWN LOSS | 0.9897 | 0.0103 | 0.0087 | 0.0016 |
| DENTAL EXPOSED PULP | 0.8515 | 0.1485 | 0.1173 | 0.0312 |
| DENTAL FILLING LOSS | 0.9599 | 0.0401 | 0.0365 | 0.0036 |
| DEPRESSION | 0.9771 | 0.0229 | 0.0211 | 0.0018 |
| DIARRHEA | 0.0001 | 0.9999 | 0.9849 | 0.0150 |
| ELBOW DISLOCATION | 0.9996 | 0.0004 | 0.0004 | 0.0001 |
| ELBOW SPRAIN/STRAIN | 0.0265 | 0.9735 | 0.9540 | 0.0195 |
| EYE CHEMICAL BURN | 0.1730 | 0.8270 | 0.7650 | 0.0620 |
| EYE CORNEAL ULCER | 0.9966 | 0.0034 | 0.0033 | 0.0000 |
| EYE INFECTION | 0.2318 | 0.7682 | 0.7068 | 0.0615 |
| EYE IRRITATION/ABRASION | 0.0000 | 1.0000 | 0.9950 | 0.0050 |

EYE PENETRATION (FOREIGN BODY)  0.9999  0.0001  0.0000  0.0000

| FINGER DISLOCATION | 0.7465 | 0.2535 | 0.2523 | 0.0013 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| GASTROENTERITIS | 0.3105 | 0.6895 | 0.6343 | 0.0552 |
| HEAD INJURY | 0.9966 | 0.0034 | 0.0015 | 0.0019 |
| HEADACHE (CO2 INDUCED) | 0.0029 | 0.9971 | 0.9722 | 0.0249 |
| HEADACHE (LATE) | 0.0000 | 1.0000 | 0.9900 | 0.0100 |
| HEADACHE (SPACE ADAPTATION) | 0.1775 | 0.8225 | 0.7731 | 0.0493 |
| HEARING LOSS | 0.2073 | 0.7927 | 0.4955 | 0.2973 |
| HEMORRHOIDS | 0.5572 | 0.4428 | 0.4406 | 0.0022 |

HERPES ZOSTER REACTIVATION (SHINGLES)  0.7465  0.2535  0.2180  0.0355

|  | 21 |  |  | 17 JULY 2017 |
| --- | --- | --- | --- | ------------- |
S-20170623-384, Cis-Lunar Orbit

| HIP SPRAIN/STRAIN | 0.2982 | 0.7018 | 0.6877 | 0.0140 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| HIP/PROXIMAL FEMUR FRACTURE | 0.9967 | 0.0033 | 0.0002 | 0.0031 |
| HYPERTENSION | 0.9496 | 0.0504 | 0.0446 | 0.0058 |
| INDIGESTION | 0.1730 | 0.8270 | 0.7691 | 0.0579 |
| INFLUENZA | 0.7465 | 0.2535 | 0.1901 | 0.0634 |
| INSOMNIA (SPACE ADAPTATION) | 0.0913 | 0.9087 | 0.9042 | 0.0045 |
| KNEE SPRAIN/STRAIN | 0.1204 | 0.8796 | 0.8620 | 0.0176 |

LOWER EXTREMITY (LE) STRESS FRACTURE  0.7146  0.2854  0.2526  0.0328

| LUMBAR SPINE FRACTURE | 0.9984 | 0.0016 | 0.0013 | 0.0003 |
| ---------------------- | ------- | ------- | ------- | ------- |

MEDICATION OVERDOSE/ADVERSE REACTION  0.5572  0.4428  0.4406  0.0022

| MOUTH ULCER | 0.0720 | 0.9280 | 0.8816 | 0.0464 |
| ------------ | ------- | ------- | ------- | ------- |

NASAL CONGESTION (SPACE ADAPTATION)  0.0294  0.9706  0.9657  0.0049

| NECK SPRAIN/STRAIN | 0.0657 | 0.9343 | 0.9156 | 0.0187 |
| ------------------- | ------- | ------- | ------- | ------- |
| NEPHROLITHIASIS | 0.9688 | 0.0312 | 0.0189 | 0.0123 |
| NEUROGENIC SHOCK | 1.0000 | 0.0000 | 0.0000 | 0.0000 |

NOSE BLEED (SPACE ADAPTATION)  0.9643  0.0357  0.0344  0.0012

| OTITIS EXTERNA | 0.4159 | 0.5841 | 0.5753 | 0.0088 |
| ------------------------ | ------- | ------- | ------- | ------- |
| OTITIS MEDIA | 0.4159 | 0.5841 | 0.5256 | 0.0584 |
| PHARYNGITIS | 0.0401 | 0.9599 | 0.9167 | 0.0432 |
| RESPIRATORY INFECTION | 0.0001 | 0.9999 | 0.9849 | 0.0150 |
| RETINAL DETACHMENT | 0.9990 | 0.0010 | 0.0004 | 0.0006 |
| SEIZURES | 0.9978 | 0.0022 | 0.0019 | 0.0003 |
| SEPSIS | 0.9810 | 0.0190 | 0.0126 | 0.0064 |
| SHOULDER DISLOCATION | 0.9997 | 0.0003 | 0.0000 | 0.0003 |
| SHOULDER SPRAIN/STRAIN | 0.0013 | 0.9987 | 0.9787 | 0.0200 |
| SKIN ABRASION | 0.0000 | 1.0000 | 0.9450 | 0.0550 |
| SKIN INFECTION | 0.0223 | 0.9777 | 0.9434 | 0.0342 |
| SKIN LACERATION | 0.7465 | 0.2535 | 0.0634 | 0.1901 |
| SKIN RASH | 0.0000 | 1.0000 | 0.9950 | 0.0050 |
| SLEEP DISORDER | 0.0000 | 1.0000 | 0.9950 | 0.0050 |
| SMALL BOWEL OBSTRUCTION | 0.9904 | 0.0096 | 0.0084 | 0.0012 |
| SMOKE INHALATION | 0.8653 | 0.1347 | 0.1158 | 0.0189 |

SPACE MOTION SICKNESS (SPACE ADAPTATION)  0.0053  0.9947  0.8455  0.1492 STROKE (CEREBROVASCULAR ACCIDENT)  0.9922  0.0078  0.0051  0.0027

| SUDDEN CARDIAC ARREST | 0.9997 | 0.0003 | 0.0001 | 0.0002 |
| ---------------------------- | ------- | ------- | ------- | ------- |
| TOXIC EXPOSURE (AMMONIA) | 0.9987 | 0.0013 | 0.0000 | 0.0013 |
| TRAUMATIC HYPOVOLEMIC SHOCK | 0.9949 | 0.0051 | 0.0030 | 0.0021 |

URINARY RETENTION (SPACE ADAPTATION)  0.9724  0.0276  0.0234  0.0041

| URINARY TRACT INFECTION | 0.2584 | 0.7416 | 0.7045 | 0.0371 |
| ------------------------ | ------- | ------- | ------- | ------- |

VISUAL IMPAIRMENT AND/OR INCREASED INTRACRANIAL  0.1887  0.8113  0.7545  0.0568 PRESSURE (VIIP)(SPACE ADAPTATION)

| WRIST FRACTURE | 0.9813 | 0.0187 | 0.0149 | 0.0038 |
| -------------------- | ------- | ------- | ------- | ------------- |
| WRIST SPRAIN/STRAIN | 0.2204 | 0.7796 | 0.7679 | 0.0117 |
|  | 22 |  |  | 17 JULY 2017 |
S-20170623-384, Cis-Lunar Orbit

## SUMMARY

This service request provides estimates of the TME, CHI, probability of EVAC and LOCL for 5 DRMs using a MedCap that is baselined to the ISS. The main outcomes and top 10 Influential Conditions for EVAC and LOCL for the Treated, Untreated, and MedCap scenarios are reported for each DRM. The IMM is baselined to the ISS environment. Therefore, caution should be used when using the IMM to assess Cis-lunar medical risk.

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

Operations Group. 23 17 JULY 2017

S-20170623-384, Cis-Lunar Orbit

APPENDIX A – IMM STATUS AT TIME OF SERVICE REQUEST REPORT

Validation status for IMM  IMM V&V Matrix: The following bar chart shows the IMM v3.0 MATLAB status of IMM validation for each IMM element listed.

- Compliance with NASA-  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6); however

Standard-7009 requirements  there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been fully attained.

|  |  | Compliant | Compliance Incomplete |  | Not applicable |  |  |
| --- | --- | ----------- | ------------------------ | --- | ----------------- | --- | --- |
|  |  | 36 |  | 5 | 5 |  |  |
- Current NASA-Standard-  IMM Credibility Matrix: The following table shows the overall IMM v3.0 MATLAB credibility assessment score (CAS), individual factor CAS,

7009 credibility assessment  customer-specified sufficiency thresholds, and weighted scores. Legend depicts CAS score designated range and color assignments from NASA-

| score | Standard-7009. |  |  |  |  |  |  |
| ------ | --------------- | --- | --- | --- | --- | --- | --- |

### Factor    Sufficiency    Factor Score    Weighted    Overall

|  |  |  |  | Thresholds |  | Scores | Score |
| --- | --- | --- | --- | ----------- | --- | ------- | ------ |
|  |  |  | Verification |  | 4    3.7 | 0.28 |  |
| --- | --- | --- | ------------- | --- | --------- | ------- | --- |
|  |  |  | Validation |  | 3    3 | 0.45 |  |
| --- | --- | ---------------------- | --------------- | --- | ------- | ------- | ------- |
|  |  |  | Input Pedigree |  | 3    3 | 0.53 |  |
|  |  | Results Uncertainty |  |  | 3    3 | 0.60 | 3.06 |
|  |  | Results Robustness |  |  | 3    3 | 0.45 |  |
| --- | --- | --------------------- | ------------ | --- | ------- | ------- | --- |
|  |  |  | Use History |  | 3    3 | 0.45 |  |
|  |  | M&S Management |  |  | 2    2 | 0.10 |  |
|  |  | People Qualification |  |  | 4    4 | 0.20 |  |
| --- | --- | ----------------------- | --- | --- | ------- | ------- | --- |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
none Additional verification and validation information applicable to this analysis

| Integrated Medical Evidence | iMED Lockdown ID: (26), created on (2/21/2017) |  |  |  |  |  |  |
| ---------------------------- | ----------------------------------------------- | --- | --- | --- | --- | --- | --- |

Database (iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v3.0 with release 2014a of MATLAB software. MATLAB and all other MathWorks product or version  service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to the | None |  |  |  |  |  |  |
| -------------------------- | ----- | --- | --- | --- | --- | --- | --- |

code for analysis

|  |  |  | 24 |  |  | 17 JULY 2017 |  |
| --- | --- | --- | --- | --- | --- | ------------- | --- |
S-20170623-384, Cis-Lunar Orbit

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

Angina/Myocardial Infarction Visual Impairment and Increased Intracranial Pressure (VIIIP) (space adaptation) 25 17 JULY 2017

---

## Source metadata

```yaml
source_filename: "medical-risk-for-five-cis-lunar-missions.pdf"
source_folder: "Mission Risk Reports/Lunar Orbit and Surface and Low Earth Orbit"
source_url: "https://drive.google.com/file/d/1yEl467N9kAx3zyKtX1ussBVvxMjg0job/view"
source_drive_id: "1yEl467N9kAx3zyKtX1ussBVvxMjg0job"
source_sha256: 588f071ba57993facd04d70c7c48828d786ee25f46cd82c93268495462234571
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 25
ocr_performed: false
```
