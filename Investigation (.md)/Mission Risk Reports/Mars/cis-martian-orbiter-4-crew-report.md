# Cis Martian Orbiter 4 Crew Report

[View original PDF](https://drive.google.com/file/d/1gArZxE1-kJfx8GUkwmgpsQuvHotVBAws/view) · **20 pages**

**Collection:** Mission Risk Reports/Mars

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [EXECUTIVE SUMMARY](#executive-summary)
- [BACKGROUND](#background)
- [METHODS](#methods)
- [SUMMARY](#summary)
- [REFERENCES](#references)

---

S-20170405-379, Mars Gateway The following document contains data and analyses developed by the NASA Human Research Program Integrated Medical Model (IMM) v3.0, which has undergone rigorous testing and review within the NASA medical community per NASA Procedural Requirement 7150.2 and NASA Standard 7009, but still requires review by the external space flight medical community. Outstanding elements for review include: assessing the applicability of the IMM v3.0 outcomes, the relevance of stated assumptions, and clearly defining limitations. Given this, it is strongly recommended that care be taken when using the results of the simulation and the output should be weighted appropriately for its level of credibility with respect to informing any decision making. If you have questions regarding remaining review activities, please contact the IMM team. The scheduled release of IMM V4.0 in FY2017 follows completion of a full internal review against NASA standards as well as the successful external review from the appropriate medical and modeling communities.

## EXECUTIVE SUMMARY

This service request determined the CHI, probability of EVAC and probability of LOCL for 3 design reference missions (DRM) using a medical capability (MedCap) that is baselined to ISS. These outcomes are reported in Tables 2-4. The top 10 influential conditions for EVAC and LOCL for both the Treated and MedCap scenarios are reported in Tables 5-22.

## BACKGROUND

The Integrated Medical Model (IMM) simulates medical events during space flight missions and estimates the impact of these events on crew health. The IMM is a stochastic model that uses Monte Carlo methodology to simulate missions. The IMM consists of a three-step process:

1. Design Reference Mission (DRM) and crew member characteristics are specified.

2. Medical events, treatment and outcomes for the DRM are randomly generated

based on pre-defined probability distributions.

3. The crew health index, evacuation and loss of crew life outcomes, and resource

utilization outcomes are summarized in a post-processing procedure.

## METHODS

### Crew and Mission Parameters

The DRMs were configured using a standard Mars crew profile, with mission length and number of EVAs established by the requestor. Table 1 below shows the crew profile for this service request. DRMs with durations of 45 days, 6 months and 2.5 years were specified with 1 female and 3 male crewmembers. The outcomes of certain IMM medical conditions are sex-specific and influenced by crew medical history. Pre-existing conditions that influence IMM outcomes include: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of any prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data.

The number of extravehicular activity (EVA) excursions influences the probability of EVA- dependent medical conditions. 1 17 APRIL 2017

S-20170405-379, Mars Gateway

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

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional 2 17 APRIL 2017

S-20170405-379, Mars Gateway crew. EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria is met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available.

LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In the current version of the IMM, it is possible for crew members to be assigned more than one endstate of EVAC and/or LOCL. These assumptions should result in slightly high (conservative) IMM forecasts for the occurrence of EVAC and LOCL. Determining the probability of LOCL for the given DRMs is the main objective of this service request. Required resources for treatment are tracked for each DRM. The number of each resource that is needed from the given available resource quantities to treat all medical events is recorded. If more of any particular resource is used than is available, then that is recorded as a “depleted” resource. The initial quantities for the available resources are baselined to the ISS environment with 6 month resupply.

### Modeling Approach

A simulation was run for each of the 6 provided DRMs using IMM version three (v3). One hundred thousand (100,000) trials were run for each DRM, where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meets convergence criteria. Convergence criteria are met when there is less than, or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last two - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV3ConvergenceReport.

- IMM outcomes were determined for the DRMs under three scenarios: 1) ISS MedCap scenario

where all conditions are treated until the essential resources of the ISS MedCap are depleted;

2) All Treated scenario where supplies are limitless and all conditions are fully treated; and 3)

Untreated scenario where none of the conditions are treated. Total medical events (TME) and CHI are calculated as means, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% confidence intervals (CI) for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3].

### RELEVANT IMM ASSUMPTIONS AND LIMITATIONS

1. The IMM is baselined to the ISS environment including medical capabilities.

3 17 APRIL 2017

S-20170405-379, Mars Gateway

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

The specified DRMs were assessed using the IMM as described above in the Methods section above. One hundred thousand trials were simulated for each DRM with ISS MedCap to forecast IMM primary outcomes and resources required to treat each condition. The ISS MedCap is baselined to the ISS environment with 6 month resupply. Results of the main outcomes are reported in Tables 2-4 with the numbers for fully treated and completely untreated as reference. The top 10 influential conditions for EVAC and LOCL for each DRM are provided in Tables 5-22. Note the absence of Fingernail Delamination Secondary to EVA, Decompression Sickness Secondary to EVA, Paresthesias Secondary to EVA not included because no EVAs were performed. Also, the total number of EVACs and LOCLs is over all 100,000 trials of the simulation. Although it did not contribute to the top 10 influential conditions, during a review of the simulation results, it was observed that Otitis Media was contributing to LOCL when it went to the untreated worst case scenario. The untreated worst case LOCL is the result of this condition progressing into two other conditions. Otitis Media should have 0% LOCL. A change request (C2-20170309-384) has been entered to make the changes in iMED. 4 17 APRIL 2017

S-20170405-379, Mars Gateway

Table 2. Total Medical Events(TME) and CHI

2a. TME

|  | Mission Length |  |  | TME |  | 95% CI |  |  |
| --- | --------------- | ---------- | --- | ------- | --- | ------------ | --- | --- |
|  |  | 45 days |  | 26.78 |  | (18 , 36) |  |  |
|  |  | 6 months |  | 68.67 |  | (54 , 85) |  |  |
|  |  | 2.5 years |  | 296.08 |  | (262 , 332) |  |  |

### Total Medical Events with Confidence Intervals

26.78 68.67 45 Day TME 6 Month TME

### 2.5 Year TME

296.08

|  | 0 | 50 | 100 | 150 | 200 | 250 | 300 | 350 |
| --- | --- | --- | ---- | ---- | ---- | ---- | ---- | -------------- |
|  |  |  |  |  | 5 |  |  | 17 APRIL 2017 |
S-20170405-379, Mars Gateway 2b. CHI

|  |  |  | Mission Length | CHI (%) |  | 95% CI |  |
| --- | -------- | --- | --------------- | -------- | --- | ---------------- | --- |
|  |  |  | 45 days | 95.04 |  | (80.81 , 98.80) |  |
|  | Treated |  | 6 months | 93.57 |  | (78.31 , 98.86) |  |
|  |  |  | 2.5 years | 83.12 |  | (62.59 , 95.01) |  |
| --- | ---------- | --- | ---------- | ------ | --- | ---------------- | --- |
|  |  |  | 45 days | 94.95 |  | (80.70 , 98.79) |  |
|  | MedCap |  | 6 months | 92.42 |  | (75.25 , 98.76) |  |
|  |  |  | 2.5 years | 21.01 |  | (0 , 46.05) |  |
|  |  |  | 45 days | 71.22 |  | (50.33, 86.77) |  |
|  | Untreated |  | 6 months | 19.40 |  | (1.77 , 40.71) |  |
|  |  |  | 2.5 years | 0 |  | (0 , 0) |  |
### CHI with Confidence Intervals

95.04 94.95 45 Day Medkit CHI 71.22 45 Day Treated CHI 93.57 45 Day Untreated CHI 92.42 6 Month Medkit CHI 19.4  6 Month Treated CHI 6 Month Untreated CHI 83.12

### 2.5 Year Medkit CHI

21.01

### 2.5 Year Treated CHI

### 2.5 Year Untreated CHI

0

|  | 0  10 | 20 | 30  40  50 | 60  70 | 80 | 90  100 |  |
| --- | ------ | --- | ----------- | ------- | --- | -------- | -------------- |
|  |  |  |  | 6 |  |  | 17 APRIL 2017 |
S-20170405-379, Mars Gateway

Table 3. Probability of EVAC

|  |  | Mission Length |  | pEVAC |  | 95% CI | Odds |
| --- | -------- | --------------- | --- | ------- | ------------------ | ------- | -------- |
|  |  | 45 days |  | 0.0160 | (0.0153 , 0.0168) |  | 1 in 63 |
|  | Treated | 6 months |  | 0.0314 | (0.0303 , 0.0325) |  | 1 in 32 |
|  |  | 2.5 years |  | 0.1136 | (0.1117, 0.1156) |  | 1 in 9 |
| --- | ---------- | ---------- | --- | ------- | ------------------ | --- | -------- |
|  |  | 45 days |  | 0.0220 | (0.0211 , 0.0229) |  | 1 in 45 |
|  | MedCap | 6 months |  | 0.0809 | (0.0792 , 0.0826) |  | 1 in 12 |
|  |  | 2.5 years |  | 0.8455 | (0.8432 , 0.8478) |  | 1 in 1 |
|  |  | 45 days |  | 0.1878 | (0.1853 , 0.1902) |  | 1 in 5 |
|  | Untreated | 6 months |  | 0.4856 | (0.4826 , 0.4884) |  | 1 in 2 |
|  |  | 2.5 years |  | 0.9532 | (0.9519 , 0.9545) |  | 1 in 1 |
### Probability of EVAC with Confidence Intervals

0.016 0.022 45 Day Treated EVAC 0.1878 45 Day Medkit EVAC 0.0314 45 Day Untreated EVAC 0.0809 6 Month Treated EVAC 0.4856  6 Month Medkit EVAC 6 Month Untreated EVAC 0.1136

### 2.5 Year Treated EVAC

0.8455

### 2.5 Year Medkit EVAC

### 2.5 Year Untreated EVAC

0.9532

|  | 0 | 0.2 | 0.4 | 0.6 | 0.8 | 1 |  |
| --- | --- | ---- | ---- | ---- | ---- | --- | -------------- |
|  |  |  |  | 7 |  |  | 17 APRIL 2017 |
S-20170405-379, Mars Gateway

Table 4. Probability of LOCL

|  |  | Mission Length |  | pLOCL | 95% CI | Odds |
| --- | -------- | --------------- | --- | ------- | ------------------ | ---------- |
|  |  | 45 days |  | 0.0008 | (0.0006 , 0.0010) | 1 in 1250 |
|  | Treated | 6 months |  | 0.0030 | (0.0026 , 0.0033) | 1 in 333 |
|  |  | 2.5 years |  | 0.0158 | (0.0150 , 0.0166) | 1 in 63 |
| --- | ---------- | ---------- | --- | ------- | ------------------ | ---------- |
|  |  | 45 days |  | 0.0008 | (0.0007 , 0.0010) | 1 in 1250 |
|  | MedCap | 6 months |  | 0.0035 | (0.0031 , 0.0038) | 1 in 286 |
|  |  | 2.5 years |  | 0.0339 | (0.0328 , 0.0350) | 1 in 29 |
|  |  | 45 days |  | 0.0034 | (0.0030 , 0.0037) | 1 in 294 |
|  | Untreated | 6 months |  | 0.0140 | (0.0133 , 0.0148) | 1 in 71 |
|  |  | 2.5 years |  | 0.0697 | (0.0680 , 0.0713) | 1 in 14 |
### Probability of LOCL with Confidence Intervals

0.0008 0.0008 45 Day Treated LOCL 0.0034 45 Day Medkit LOCL 0.003 45 Day Untreated LOCL 0.0035 6 Month Treated LOCL 6 Month Medkit LOCL 0.014 6 Month Untreated LOCL 0.0158

### 2.5 Year Treated LOCL

0.0339

### 2.5 Year Medkit LOCL

### 2.5 Year Untreated LOCL

0.0697

|  | 0  0.01 | 0.02  0.03 | 0.04 | 0.05  0.06 | 0.07  0.08 |  |
| --- | -------- | ----------- | ----- | ----------- | ----------- | -------------- |
|  |  |  |  | 8 |  | 17 APRIL 2017 |
S-20170405-379, Mars Gateway

Table 5. Gateway 45 Days Influential Conditions for EVAC – Treated

| Scenario | Treated | Medical Condition |  |  |  |  |
| --------- | -------- | ------------------ | --- | ------ | ------------- | ----------- |
|  |  |  |  | Total | Percent | Cumulative |
|  |  |  |  | EVAC | Contribution | Percent |

### VISUAL IMPAIRMENT AND/OR

| WORST |  | INCREASED INTRACRANIAL |  |  |  |  |
| ------ | -------- | ----------------------- | --- | ----- | ------ | ------ |
|  | TREATED |  |  | 1043 | 64.86 | 64.86 |

CASE  PRESSURE (VIIP)(SPACE ADAPTATION) WORST

|  | TREATED | NEPHROLITHIASIS |  | 92 | 5.72 | 70.58 |
| --- | -------- | ---------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | SMOKE INHALATION |  | 40 | 2.49 | 73.07 |
| --- | -------- | ----------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | DENTAL ABSCESS |  | 36 | 2.24 | 75.31 |
| --- | -------- | --------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | SEPSIS |  | 30 | 1.87 | 77.18 |
| --- | -------- | ------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | WRIST FRACTURE |  | 27 | 1.68 | 78.86 |
| --- | -------- | --------------- | --- | --- | ----- | ------ |

CASE BEST  STROKE (CEREBROVASCULAR

|  | TREATED |  |  | 21 | 1.31 | 80.16 |
| --- | -------- | --- | --- | --- | ----- | ------ |

### CASE  ACCIDENT)

WORST

|  | TREATED | BACK SPRAIN/STRAIN |  | 20 | 1.24 | 81.41 |
| --- | -------- | ------------------- | --- | --- | ----- | ------ |

CASE BEST

|  | TREATED | SMALL BOWEL OBSTRUCTION |  | 18 | 1.12 | 82.52 |
| --- | -------- | ------------------------ | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | HEAD INJURY |  | 17 | 1.06 | 83.58 |
| --- | -------- | ------------ | --- | --- | ----- | ------ |

CASE

Table 6. Gateway 45 Days Influential Conditions for EVAC – MedCap

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | EVAC | Contribution | Percent |
| --- | --- | ------------------------- | --- | ----- | ------------- | -------- |
|  |  | VISUAL IMPAIRMENT AND/OR |  |  |  |  |

WORST

|  | TREATED | INCREASED INTRACRANIAL PRESSURE |  | 999 | 44.84 | 44.84 |
| --- | -------- | -------------------------------- | --- | ---- | ------ | ------ |

CASE (VIIP)(SPACE ADAPTATION) WORST

|  | UNTREATED | SKIN INFECTION |  | 398 | 17.86 | 62.70 |
| --- | ---------- | --------------- | --- | ---- | ------ | ------ |

CASE WORST  LOWER EXTREMITY (LE) STRESS

|  | UNTREATED |  |  | 105 | 4.71 | 67.41 |
| --- | ---------- | --- | --- | ---- | ----- | ------ |

### CASE  FRACTURE

WORST

|  | TREATED | NEPHROLITHIASIS |  | 89 | 3.99 | 71.41 |
| --- | -------- | ---------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | SMOKE INHALATION |  | 40 | 1.80 | 73.20 |
| --- | -------- | ----------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | DENTAL ABSCESS |  | 36 | 1.62 | 74.82 |
| --- | -------- | --------------- | --- | --- | ----- | ------ |

CASE

### VISUAL IMPAIRMENT AND/OR

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |

WORST

|  | UNTREATED | INCREASED INTRACRANIAL PRESSURE |  | 34 | 1.53 | 76.35 |
| --- | ---------- | -------------------------------- | --- | --- | ----- | ------ |

CASE (VIIP)(SPACE ADAPTATION) WORST

|  | TREATED | SEPSIS |  | 28 | 1.26 | 77.60 |
| --- | -------- | ------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | WRIST FRACTURE |  | 25 | 1.12 | 78.73 |
| --- | -------- | --------------- | --- | --- | ----- | ------ |

CASE BEST  STROKE (CEREBROVASCULAR

|  | TREATED |  |  | 21 | 0.94 | 79.67 |
| --- | -------- | --- | --- | --- | ----- | ------ |

### CASE  ACCIDENT)

|  |  |  | 9 |  |  | 17 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170405-379, Mars Gateway

Table 7. Gateway 45 Days Influential Conditions for EVAC – Untreated

| Scenario | Treated | Medical Condition |  |  |  |  |
| --------- | -------- | ------------------ | --- | ------ | ------------- | ----------- |
|  |  |  |  | Total | Percent | Cumulative |
|  |  |  |  | EVAC | Contribution | Percent |

BEST

|  | UNTREATED | EYE CHEMICAL BURN |  | 5061 | 24.29 | 24.29 |
| --- | ---------- | ------------------ | --- | ----- | ------ | ------ |

CASE BEST  URINARY RETENTION (SPACE

|  | UNTREATED |  |  | 3830 | 18.38 | 42.67 |
| --- | ---------- | --- | --- | ----- | ------ | ------ |

### CASE  ADAPTATION)

### VISUAL IMPAIRMENT AND/OR

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |

### WORST  INCREASED INTRACRANIAL

|  | UNTREATED |  |  | 977 | 4.69 | 47.36 |
| --- | ---------- | --- | --- | ---- | ----- | ------ |

CASE  PRESSURE (VIIP)(SPACE ADAPTATION) BEST

|  | UNTREATED | FINGER DISLOCATION |  | 855 | 4.10 | 51.46 |
| --- | ---------- | ------------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | UNTREATED | EYE CHEMICAL BURN |  | 798 | 3.83 | 55.29 |
| --- | ---------- | ------------------ | --- | ---- | ----- | ------ |

CASE WORST  URINARY RETENTION (SPACE

|  | UNTREATED |  |  | 673 | 3.23 | 58.52 |
| --- | ---------- | --- | --- | ---- | ----- | ------ |

### CASE  ADAPTATION)

WORST

|  | UNTREATED | SKIN LACERATION |  | 620 | 2.98 | 61.50 |
| --- | ---------- | ---------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | UNTREATED | BACK SPRAIN/STRAIN |  | 577 | 2.77 | 64.27 |
| --- | ---------- | ------------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | UNTREATED | URINARY TRACT INFECTION |  | 560 | 2.69 | 66.96 |
| --- | ---------- | ------------------------ | --- | ---- | ----- | ------ |

CASE WORST

|  | UNTREATED | RESPIRATORY INFECTION |  | 467 | 2.24 | 69.20 |
| --- | ---------- | ---------------------- | --- | ---- | ----- | ------ |

CASE

Table 8. 6 Months Mission - Influential Conditions for EVAC – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | EVAC | Contribution | Percent |
| --- | --- | --- | --- | ----- | ------------- | -------- |

### VISUAL IMPAIRMENT AND/OR

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |

### WORST  INCREASED INTRACRANIAL

|  | TREATED |  |  | 1013 | 31.72 | 31.72 |
| --- | -------- | --- | --- | ----- | ------ | ------ |

CASE  PRESSURE (VIIP)(SPACE ADAPTATION) WORST

|  | TREATED | NEPHROLITHIASIS |  | 348 | 10.90 | 42.61 |
| --- | -------- | ---------------- | --- | ---- | ------ | ------ |

CASE WORST

|  | TREATED | DENTAL ABSCESS |  | 167 | 5.23 | 47.84 |
| --- | -------- | --------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | SEPSIS |  | 140 | 4.38 | 52.22 |
| --- | -------- | ------- | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | SMOKE INHALATION |  | 121 | 3.79 | 56.01 |
| --- | -------- | ----------------- | --- | ---- | ----- | ------ |

CASE BEST

|  | TREATED | SMALL BOWEL OBSTRUCTION |  | 105 | 3.29 | 59.30 |
| --- | -------- | ------------------------ | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | WRIST FRACTURE |  | 96 | 3.01 | 62.30 |
| --- | -------- | --------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | HIP/PROXIMAL FEMUR FRACTURE |  | 80 | 2.50 | 64.81 |
| --- | -------- | ---------------------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | BACK SPRAIN/STRAIN |  | 75 | 2.35 | 67.16 |
| --- | -------- | ------------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 56 | 1.75 | 68.91 |
| --- | -------- | ---------------------------- | --- | --- | ----- | ------ |

CASE

|  |  |  | 10 |  |  | 17 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170405-379, Mars Gateway

Table 9. 6 Months Influential Conditions for EVAC – MedCap

| Scenario | Treated | Medical Condition |  |  |  |  |
| --------- | -------- | ------------------ | --- | ------ | ------------- | ----------- |
|  |  |  |  | Total | Percent | Cumulative |
|  |  |  |  | EVAC | Contribution | Percent |

WORST

|  | UNTREATED | SKIN INFECTION |  | 1613 | 18.50 | 18.50 |
| --- | ---------- | --------------- | --- | ----- | ------ | ------ |

CASE BEST

|  | UNTREATED | EYE CHEMICAL BURN |  | 1031 | 11.82 | 30.32 |
| --- | ---------- | ------------------ | --- | ----- | ------ | ------ |

CASE

### VISUAL IMPAIRMENT AND/OR

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |

### WORST  INCREASED INTRACRANIAL

|  | TREATED |  |  | 977 | 11.20 | 41.53 |
| --- | -------- | --- | --- | ---- | ------ | ------ |

CASE  PRESSURE (VIIP)(SPACE ADAPTATION) WORST  LOWER EXTREMITY (LE) STRESS

|  | UNTREATED |  |  | 560 | 6.42 | 47.95 |
| --- | ---------- | --- | --- | ---- | ----- | ------ |

### CASE  FRACTURE

WORST

|  | UNTREATED | EYE CHEMICAL BURN |  | 401 | 4.60 | 52.55 |
| --- | ---------- | ------------------ | --- | ---- | ----- | ------ |

CASE BEST

|  | UNTREATED | FINGER DISLOCATION |  | 279 | 3.20 | 55.75 |
| --- | ---------- | ------------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | NEPHROLITHIASIS |  | 244 | 2.80 | 58.54 |
| --- | -------- | ---------------- | --- | ---- | ----- | ------ |

CASE

### WORST  HERPES ZOSTER REACTIVATION

|  | UNTREATED |  |  | 219 | 2.51 | 61.06 |
| --- | ---------- | --- | --- | ---- | ----- | ------ |

CASE  (SHINGLES) BEST

|  | UNTREATED | BURNS SECONDARY TO FIRE |  | 205 | 2.35 | 63.41 |
| --- | ---------- | ------------------------ | --- | ---- | ----- | ------ |

CASE WORST

|  | UNTREATED | SKIN LACERATION |  | 201 | 2.31 | 65.71 |
| --- | ---------- | ---------------- | --- | ---- | ----- | ------ |

CASE

Table 10. 6 Months Influential Conditions for EVAC – Untreated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | EVAC | Contribution | Percent |
| --- | --- | --- | --- | ----- | ------------- | -------- |

BEST

|  | UNTREATED | EYE CHEMICAL BURN |  | 19937 | 29.86 | 29.86 |
| --- | ---------- | ------------------ | --- | ------ | ------ | ------ |

CASE BEST  URINARY RETENTION (SPACE

|  | UNTREATED |  |  | 3957 | 5.93 | 35.79 |
| --- | ---------- | --- | --- | ----- | ----- | ------ |

### CASE  ADAPTATION)

BEST

|  | UNTREATED | FINGER DISLOCATION |  | 3642 | 5.46 | 41.24 |
| --- | ---------- | ------------------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | EYE CHEMICAL BURN |  | 3254 | 4.87 | 46.12 |
| --- | ---------- | ------------------ | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | SKIN LACERATION |  | 2737 | 4.10 | 50.22 |
| --- | ---------- | ---------------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | BACK SPRAIN/STRAIN |  | 2297 | 3.44 | 53.66 |
| --- | ---------- | ------------------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | URINARY TRACT INFECTION |  | 2282 | 3.42 | 57.08 |
| --- | ---------- | ------------------------ | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | RESPIRATORY INFECTION |  | 1887 | 2.83 | 59.90 |
| --- | ---------- | ---------------------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | DIARRHEA |  | 1807 | 2.71 | 62.61 |
| --- | ---------- | --------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | SHOULDER SPRAIN/STRAIN |  | 1747 | 2.62 | 65.23 |
| --- | ---------- | ----------------------- | --- | ----- | ----- | ------ |

CASE

|  |  |  | 11 |  |  | 17 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170405-379, Mars Gateway

Table 11. 2.5 Years Influential Conditions for EVAC – Treated

| Scenario | Treated | Medical Condition |  |  |  |  |
| --------- | -------- | ------------------ | --- | ------ | ------------- | ----------- |
|  |  |  |  | Total | Percent | Cumulative |
|  |  |  |  | EVAC | Contribution | Percent |

WORST

|  | TREATED | NEPHROLITHIASIS |  | 1514 | 12.51 | 12.51 |
| --- | -------- | ---------------- | --- | ----- | ------ | ------ |

CASE

### VISUAL IMPAIRMENT AND/OR

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |

### WORST  INCREASED INTRACRANIAL

|  | TREATED |  |  | 1072 | 8.86 | 21.37 |
| --- | -------- | --- | --- | ----- | ----- | ------ |

CASE  PRESSURE (VIIP)(SPACE ADAPTATION) WORST

|  | TREATED | DENTAL ABSCESS |  | 886 | 7.32 | 28.69 |
| --- | -------- | --------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | SEPSIS |  | 798 | 6.59 | 35.29 |
| --- | -------- | ------- | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | SMOKE INHALATION |  | 731 | 6.04 | 41.33 |
| --- | -------- | ----------------- | --- | ---- | ----- | ------ |

CASE BEST

|  | TREATED | SMALL BOWEL OBSTRUCTION |  | 522 | 4.31 | 45.64 |
| --- | -------- | ------------------------ | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | WRIST FRACTURE |  | 497 | 4.11 | 49.75 |
| --- | -------- | --------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | BACK SPRAIN/STRAIN |  | 397 | 3.28 | 53.03 |
| --- | -------- | ------------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | HIP/PROXIMAL FEMUR FRACTURE |  | 312 | 2.58 | 55.61 |
| --- | -------- | ---------------------------- | --- | ---- | ----- | ------ |

CASE WORST  STROKE (CEREBROVASCULAR

|  | TREATED |  |  | 301 | 2.49 | 58.09 |
| --- | -------- | --- | --- | ---- | ----- | ------ |

### CASE  ACCIDENT)

Table 12. 2.5 Years Influential Conditions for EVAC – MedCap

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | EVAC | Contribution | Percent |
| --- | --- | --- | --- | ----- | ------------- | -------- |

BEST

|  | UNTREATED | EYE CHEMICAL BURN |  | 79866 | 39.24 | 39.24 |
| --- | ---------- | ------------------ | --- | ------ | ------ | ------ |

CASE BEST

|  | UNTREATED | FINGER DISLOCATION |  | 17872 | 8.78 | 48.03 |
| --- | ---------- | ------------------- | --- | ------ | ----- | ------ |

CASE WORST

|  | UNTREATED | EYE CHEMICAL BURN |  | 15143 | 7.44 | 55.47 |
| --- | ---------- | ------------------ | --- | ------ | ----- | ------ |

CASE WORST

|  | UNTREATED | SKIN LACERATION |  | 13382 | 6.58 | 62.04 |
| --- | ---------- | ---------------- | --- | ------ | ----- | ------ |

CASE WORST

|  | UNTREATED | ACUTE SINUSITIS |  | 8579 | 4.22 | 66.26 |
| --- | ---------- | ---------------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | SKIN INFECTION |  | 8109 | 3.98 | 70.24 |
| --- | ---------- | --------------- | --- | ----- | ----- | ------ |

CASE WORST

|  | UNTREATED | EYE INFECTION |  | 7092 | 3.48 | 73.73 |
| --- | ---------- | -------------- | --- | ----- | ----- | ------ |

CASE

### WORST  HERPES ZOSTER REACTIVATION

|  | UNTREATED |  |  | 3215 | 1.58 | 75.31 |
| --- | ---------- | --- | --- | ----- | ----- | ------ |

CASE  (SHINGLES) WORST

|  | UNTREATED | NECK SPRAIN/STRAIN |  | 3176 | 1.56 | 76.87 |
| --- | ---------- | ------------------- | --- | ----- | ----- | ------ |

CASE WORST  LOWER EXTREMITY (LE) STRESS

|  | UNTREATED |  |  | 2815 | 1.38 | 78.25 |
| --- | ---------- | --- | --- | ----- | ----- | ------ |

### CASE  FRACTURE

|  |  |  | 12 |  |  | 17 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170405-379, Mars Gateway

Table 13. 2.5 Years Influential Conditions for EVAC – Untreated

| Scenario | Treated | Medical Condition |  | Total EVAC |  |  |
| --------- | ---------- | ------------------ | --- | ----------- | ------------- | ----------- |
|  |  |  |  |  | Percent | Cumulative |
|  |  |  |  |  | Contribution | Percent |
| BEST |  |  |  |  |  |  |
| CASE | UNTREATED | EYE CHEMICAL BURN |  | 100974 | 32.28 | 32.28 |

BEST

|  |  |  |  |  |  |  |
| ------ | ---------- | ------------------- | --- | ------ | ----- | ------ |
| CASE | UNTREATED | FINGER DISLOCATION |  | 18186 | 5.81 | 38.09 |
| WORST |  |  |  |  |  |  |
| CASE | UNTREATED | EYE CHEMICAL BURN |  | 16139 | 5.16 | 43.25 |
| WORST |  |  |  |  |  |  |
| CASE | UNTREATED | SKIN LACERATION |  | 13752 | 4.40 | 47.65 |

WORST

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |

CASE  UNTREATED  URINARY TRACT INFECTION  11746  3.75  51.40

| WORST |  |  |  |  |  |  |
| ------ | ---------- | ------------------- | --- | ------ | ----- | ------ |
| CASE | UNTREATED | BACK SPRAIN/STRAIN |  | 11703 | 3.74 | 55.14 |

WORST

|  |  |  |  |  |  |  |
| ------ | ---------- | ---------------------- | --- | ----- | ----- | ------ |
| CASE | UNTREATED | RESPIRATORY INFECTION |  | 9114 | 2.91 | 58.06 |
| WORST |  |  |  |  |  |  |
| CASE | UNTREATED | DIARRHEA |  | 9071 | 2.90 | 60.96 |
| WORST |  |  |  |  |  |  |
| CASE | UNTREATED | ACUTE SINUSITIS |  | 8811 | 2.82 | 63.77 |

WORST

|  |  |  |  |  |  |  |
| ----- | ---------- | ----------------------- | --- | ----- | ----- | ------ |
| CASE | UNTREATED | SHOULDER SPRAIN/STRAIN |  | 8390 | 2.68 | 66.46 |
Table 14. Gateway 45 Days Influential Conditions for LOCL – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | LOCL | Contribution | Percent |
| --- | --- | --- | --- | ----- | ------------- | -------- |

WORST

|  | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 15 | 19.74 | 19.74 |
| --- | -------- | ---------------------------- | --- | --- | ------ | ------ |

CASE WORST

|  | TREATED | SEPSIS |  | 13 | 17.11 | 36.84 |
| --- | -------- | ------- | --- | --- | ------ | ------ |

CASE WORST

|  | TREATED | HEAD INJURY |  | 10 | 13.16 | 50.00 |
| --- | -------- | ------------ | --- | --- | ------ | ------ |

CASE WORST  STROKE (CEREBROVASCULAR

|  | TREATED |  |  | 9 | 11.84 | 61.84 |
| --- | -------- | --- | --- | --- | ------ | ------ |

### CASE  ACCIDENT)

WORST

|  | TREATED | SMOKE INHALATION |  | 8 | 10.53 | 72.37 |
| --- | -------- | ----------------- | --- | --- | ------ | ------ |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED |  |  | 7 | 9.21 | 81.58 |
| --- | -------- | --- | --- | --- | ----- | ------ |

### CASE  REACTION

WORST

|  | TREATED | CHEST INJURY |  | 6 | 7.89 | 89.47 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | TOXIC EXPOSURE (AMMONIA) |  | 3 | 3.95 | 93.42 |
| --- | -------- | ------------------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | APPENDICITIS |  | 2 | 2.63 | 96.05 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | ABDOMINAL INJURY |  | 2 | 2.63 | 98.68 |
| --- | -------- | ----------------- | --- | --- | ----- | ------ |

CASE

|  |  |  | 13 |  |  | 17 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170405-379, Mars Gateway

Table 15. Gateway 45 Days Influential Conditions for LOCL – MedCap

| Scenario | Treated | Medical Condition |  |  |  |  |
| --------- | -------- | ------------------ | --- | ------ | ------------- | ----------- |
|  |  |  |  | Total | Percent | Cumulative |
|  |  |  |  | LOCL | Contribution | Percent |

WORST  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  15  18.29  18.29 CASE

| WORST | TREATED | SEPSIS |  | 13 | 15.85 | 34.15 |
| ------ | -------- | ------- | --- | --- | ------ | ------ |

CASE

| WORST | TREATED | HEAD INJURY |  | 9 | 10.98 | 45.12 |
| ------ | -------- | ------------ | --- | --- | ------ | ------ |

CASE

| WORST | TREATED | STROKE (CEREBROVASCULAR |  | 9 | 10.98 | 56.10 |
| ------ | -------- | ------------------------ | --- | --- | ------ | ------ |

### CASE  ACCIDENT)

| WORST | TREATED | SMOKE INHALATION |  | 8 | 9.76 | 65.85 |
| ------ | -------- | ----------------- | --- | --- | ----- | ------ |

CASE

| WORST | TREATED | MEDICATION OVERDOSE/ADVERSE |  | 7 | 8.54 | 74.39 |
| ------ | -------- | ---------------------------- | --- | --- | ----- | ------ |

### CASE  REACTION

| WORST | TREATED | CHEST INJURY |  | 6 | 7.32 | 81.71 |
| ------ | -------- | ------------- | --- | --- | ----- | ------ |

CASE

|  | TREATED | TOXIC EXPOSURE (AMMONIA) |  | 3 | 3.66 | 85.37 |
| --- | -------- | ------------------------- | --- | --- | ----- | ------ |

WORST CASE

| WORST | UNTREATED | SEPSIS |  | 2 | 2.44 | 87.80 |
| ------ | ---------- | ------- | --- | --- | ----- | ------ |

CASE

| WORST | TREATED | APPENDICITIS |  | 2 | 2.44 | 90.24 |
| ------ | -------- | ------------- | --- | --- | ----- | ------ |

CASE

Table 16. Gateway 45 Days Influential Conditions for LOCL – Untreated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | LOCL | Contribution | Percent |
| ------ | ---------- | ----------------- | --- | ----- | ------------- | -------- |
| WORST | UNTREATED | SMOKE INHALATION |  | 119 | 35.52 | 35.52 |

CASE

| BEST | UNTREATED | SEPSIS |  | 34 | 10.15 | 45.67 |
| ----- | ---------- | ------- | --- | --- | ------ | ------ |

CASE

| WORST | UNTREATED | SEPSIS |  | 30 | 8.96 | 54.63 |
| ------ | ---------- | ------- | --- | --- | ----- | ------ |

CASE

| BEST | UNTREATED | APPENDICITIS |  | 19 | 5.67 | 60.30 |
| ----- | ---------- | ------------- | --- | --- | ----- | ------ |

CASE

| WORST | UNTREATED | HEAD INJURY |  | 17 | 5.07 | 65.37 |
| ------ | ---------- | ------------ | --- | --- | ----- | ------ |

CASE WORST  UNTREATED  TRAUMATIC HYPOVOLEMIC SHOCK  15  4.48  69.85 CASE

| WORST | UNTREATED | OTITIS MEDIA |  | 14 | 4.18 | 74.03 |
| ------ | ---------- | ------------- | --- | --- | ----- | ------ |

CASE BEST  UNTREATED  TRAUMATIC HYPOVOLEMIC SHOCK  13  3.88  77.91 CASE WORST  UNTREATED  CHOKING/OBSTRUCTED AIRWAY  11  3.28  81.19 CASE

| WORST | UNTREATED | STROKE (CEREBROVASCULAR |  | 11 | 3.28 | 84.48 |
| ------ | ---------- | ------------------------ | --- | --- | ----- | ------ |

### CASE  ACCIDENT)

|  |  |  | 14 |  |  | 17 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170405-379, Mars Gateway

Table 17. 6 Months Influential Conditions for LOCL – Treated

| Scenario | Treated | Medical Condition |  |  |  |  |
| --------- | -------- | ------------------ | --- | ------ | ------------- | ----------- |
|  |  |  |  | Total | Percent | Cumulative |
|  |  |  |  | LOCL | Contribution | Percent |

WORST

|  | TREATED | SEPSIS |  | 62 | 20.81 | 20.81 |
| --- | -------- | ------- | --- | --- | ------ | ------ |

CASE WORST

|  | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 56 | 18.79 | 39.60 |
| --- | -------- | ---------------------------- | --- | --- | ------ | ------ |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED |  |  | 33 | 11.07 | 50.67 |
| --- | -------- | --- | --- | --- | ------ | ------ |

### CASE  REACTION

WORST

|  | TREATED | SMOKE INHALATION |  | 33 | 11.07 | 61.74 |
| --- | -------- | ----------------- | --- | --- | ------ | ------ |

CASE WORST  STROKE (CEREBROVASCULAR

|  | TREATED |  |  | 26 | 8.72 | 70.47 |
| --- | -------- | --- | --- | --- | ----- | ------ |

### CASE  ACCIDENT)

WORST

|  | TREATED | HEAD INJURY |  | 25 | 8.39 | 78.86 |
| --- | -------- | ------------ | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | CHEST INJURY |  | 18 | 6.04 | 84.90 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | APPENDICITIS |  | 17 | 5.70 | 90.60 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | TOXIC EXPOSURE (AMMONIA) |  | 12 | 4.03 | 94.63 |
| --- | -------- | ------------------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | ABDOMINAL INJURY |  | 6 | 2.01 | 96.64 |
| --- | -------- | ----------------- | --- | --- | ----- | ------ |

CASE

Table 18. 6 Months Influential Conditions for LOCL – MedCap

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | LOCL | Contribution | Percent |
| --- | --- | --- | --- | ----- | ------------- | -------- |

WORST

|  | TREATED | SEPSIS |  | 50 | 14.41 | 14.41 |
| --- | -------- | ------- | --- | --- | ------ | ------ |

CASE WORST

|  | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 50 | 14.41 | 28.82 |
| --- | -------- | ---------------------------- | --- | --- | ------ | ------ |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED |  |  | 33 | 9.51 | 38.33 |
| --- | -------- | --- | --- | --- | ----- | ------ |

### CASE  REACTION

WORST

|  | TREATED | SMOKE INHALATION |  | 33 | 9.51 | 47.84 |
| --- | -------- | ----------------- | --- | --- | ----- | ------ |

CASE WORST  STROKE (CEREBROVASCULAR

|  | TREATED |  |  | 26 | 7.49 | 55.33 |
| --- | -------- | --- | --- | --- | ----- | ------ |

### CASE  ACCIDENT)

WORST

|  | TREATED | HEAD INJURY |  | 24 | 6.92 | 62.25 |
| --- | -------- | ------------ | --- | --- | ----- | ------ |

CASE WORST

|  | UNTREATED | SEPSIS |  | 20 | 5.76 | 68.01 |
| --- | ---------- | ------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | CHEST INJURY |  | 14 | 4.03 | 72.05 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | APPENDICITIS |  | 12 | 3.46 | 75.50 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | TOXIC EXPOSURE (AMMONIA) |  | 12 | 3.46 | 78.96 |
| --- | -------- | ------------------------- | --- | --- | ----- | ------ |

CASE

|  |  |  | 15 |  |  | 17 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170405-379, Mars Gateway

Table 19. Months Influential Conditions for LOCL – Untreated

| Scenario | Treated | Medical Condition |  |  |  |  |
| --------- | -------- | ------------------ | --- | ------ | ------------- | ----------- |
|  |  |  |  | Total | Percent | Cumulative |
|  |  |  |  | LOCL | Contribution | Percent |

WORST

|  | UNTREATED | SMOKE INHALATION |  | 501 | 35.63 | 35.63 |
| --- | ---------- | ----------------- | --- | ---- | ------ | ------ |

CASE BEST

|  | UNTREATED | SEPSIS |  | 149 | 10.60 | 46.23 |
| --- | ---------- | ------- | --- | ---- | ------ | ------ |

CASE WORST

|  | UNTREATED | SEPSIS |  | 140 | 9.96 | 56.19 |
| --- | ---------- | ------- | --- | ---- | ----- | ------ |

CASE BEST

|  | UNTREATED | APPENDICITIS |  | 94 | 6.69 | 62.87 |
| --- | ---------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | UNTREATED | CHOKING/OBSTRUCTED AIRWAY |  | 61 | 4.34 | 67.21 |
| --- | ---------- | -------------------------- | --- | --- | ----- | ------ |

CASE WORST

|  | UNTREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 56 | 3.98 | 71.19 |
| --- | ---------- | ---------------------------- | --- | --- | ----- | ------ |

CASE WORST  STROKE (CEREBROVASCULAR

|  | UNTREATED |  |  | 49 | 3.49 | 74.68 |
| --- | ---------- | --- | --- | --- | ----- | ------ |

### CASE  ACCIDENT)

BEST

|  | UNTREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 46 | 3.27 | 77.95 |
| --- | ---------- | ---------------------------- | --- | --- | ----- | ------ |

CASE WORST

|  | UNTREATED | HEAD INJURY |  | 46 | 3.27 | 81.22 |
| --- | ---------- | ------------ | --- | --- | ----- | ------ |

CASE BEST

|  | UNTREATED | ANAPHYLAXIS |  | 45 | 3.20 | 84.42 |
| --- | ---------- | ------------ | --- | --- | ----- | ------ |

CASE

Table 20. 2.5 Years Influential Conditions for LOCL – Treated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | LOCL | Contribution | Percent |
| --- | --- | --- | --- | ----- | ------------- | -------- |

WORST

|  | TREATED | SEPSIS |  | 408 | 25.56 | 25.56 |
| --- | -------- | ------- | --- | ---- | ------ | ------ |

CASE WORST

|  | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 232 | 14.54 | 40.10 |
| --- | -------- | ---------------------------- | --- | ---- | ------ | ------ |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED |  |  | 181 | 11.34 | 51.44 |
| --- | -------- | --- | --- | ---- | ------ | ------ |

### CASE  REACTION

WORST  STROKE (CEREBROVASCULAR

|  | TREATED |  |  | 148 | 9.27 | 60.71 |
| --- | -------- | --- | --- | ---- | ----- | ------ |

### CASE  ACCIDENT)

WORST

|  | TREATED | SMOKE INHALATION |  | 136 | 8.52 | 69.24 |
| --- | -------- | ----------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | HEAD INJURY |  | 132 | 8.27 | 77.51 |
| --- | -------- | ------------ | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | CHEST INJURY |  | 99 | 6.20 | 83.71 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | TOXIC EXPOSURE (AMMONIA) |  | 84 | 5.26 | 88.97 |
| --- | -------- | ------------------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | APPENDICITIS |  | 62 | 3.88 | 92.86 |
| --- | -------- | ------------- | --- | --- | ----- | ------ |

CASE WORST

|  | TREATED | SUDDEN CARDIAC ARREST |  | 45 | 2.82 | 95.68 |
| --- | -------- | ---------------------- | --- | --- | ----- | ------ |

CASE

|  |  |  | 16 |  |  | 17 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170405-379, Mars Gateway

Table 21. 2.5 Years Influential Conditions for LOCL – MedCap

| Scenario | Treated | Medical Condition |  |  |  |  |
| --------- | -------- | ------------------ | --- | ------ | ------------- | ----------- |
|  |  |  |  | Total | Percent | Cumulative |
|  |  |  |  | LOCL | Contribution | Percent |

WORST

|  | UNTREATED | SEPSIS |  | 796 | 22.95 | 22.95 |
| --- | ---------- | ------- | --- | ---- | ------ | ------ |

CASE BEST

|  | UNTREATED | SEPSIS |  | 765 | 22.06 | 45.01 |
| --- | ---------- | ------- | --- | ---- | ------ | ------ |

CASE BEST

|  | UNTREATED | APPENDICITIS |  | 204 | 5.88 | 50.89 |
| --- | ---------- | ------------- | --- | ---- | ----- | ------ |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED |  |  | 176 | 5.07 | 55.97 |
| --- | -------- | --- | --- | ---- | ----- | ------ |

### CASE  REACTION

WORST

|  | TREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 151 | 4.35 | 60.32 |
| --- | -------- | ---------------------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | UNTREATED | ACUTE DIVERTICULITIS |  | 133 | 3.84 | 64.16 |
| --- | ---------- | --------------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | SMOKE INHALATION |  | 131 | 3.78 | 67.94 |
| --- | -------- | ----------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | UNTREATED | CHEST INJURY |  | 131 | 3.78 | 71.71 |
| --- | ---------- | ------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | UNTREATED | SMOKE INHALATION |  | 130 | 3.75 | 75.46 |
| --- | ---------- | ----------------- | --- | ---- | ----- | ------ |

CASE WORST  STROKE (CEREBROVASCULAR

|  | TREATED |  |  | 126 | 3.63 | 79.09 |
| --- | -------- | --- | --- | ---- | ----- | ------ |

### CASE  ACCIDENT)

Table 22. 2.5 Years Influential Conditions for LOCL – Untreated

### Scenario  Treated  Medical Condition  Total  Percent  Cumulative

|  |  |  |  | LOCL | Contribution | Percent |
| --- | --- | --- | --- | ----- | ------------- | -------- |

WORST

|  | UNTREATED | SMOKE INHALATION |  | 2492 | 34.50 | 34.50 |
| --- | ---------- | ----------------- | --- | ----- | ------ | ------ |

CASE WORST

|  | UNTREATED | SEPSIS |  | 798 | 11.05 | 45.55 |
| --- | ---------- | ------- | --- | ---- | ------ | ------ |

CASE BEST

|  | UNTREATED | SEPSIS |  | 777 | 10.76 | 56.31 |
| --- | ---------- | ------- | --- | ---- | ------ | ------ |

CASE BEST

|  | UNTREATED | APPENDICITIS |  | 385 | 5.33 | 61.64 |
| --- | ---------- | ------------- | --- | ---- | ----- | ------ |

CASE WORST  STROKE (CEREBROVASCULAR

|  | UNTREATED |  |  | 301 | 4.17 | 65.80 |
| --- | ---------- | --- | --- | ---- | ----- | ------ |

### CASE  ACCIDENT)

WORST

|  | UNTREATED | CHOKING/OBSTRUCTED AIRWAY |  | 289 | 4.00 | 69.80 |
| --- | ---------- | -------------------------- | --- | ---- | ----- | ------ |

CASE WORST

|  | UNTREATED | HEAD INJURY |  | 262 | 3.63 | 73.43 |
| --- | ---------- | ------------ | --- | ---- | ----- | ------ |

CASE BEST

|  | UNTREATED | ANAPHYLAXIS |  | 260 | 3.60 | 77.03 |
| --- | ---------- | ------------ | --- | ---- | ----- | ------ |

CASE WORST

|  | UNTREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 232 | 3.21 | 80.24 |
| --- | ---------- | ---------------------------- | --- | ---- | ----- | ------ |

CASE BEST

|  | UNTREATED | TRAUMATIC HYPOVOLEMIC SHOCK |  | 194 | 2.69 | 82.93 |
| --- | ---------- | ---------------------------- | --- | ---- | ----- | ------ |

CASE

|  |  |  | 17 |  |  | 17 APRIL 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
S-20170405-379, Mars Gateway

## SUMMARY

This service request provides estimates of the TME, CHI, probability of EVAC and LOCL for 3 DRMs using a MedCap that is baselined to the ISS. Medical conditions secondary to EVA were not included because EVAs were not included in the DRMs. The main outcomes and top 10 Influential Conditions for EVAC and LOCL for the Treated, Untreated, and MedCap scenarios are reported for each DRM. The IMM is baselined to the ISS environment.

Therefore, caution should be used when using the IMM to assess Mars Gateway medical risk.

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

Operations Group. 18 17 APRIL 2017

S-20170405-379, Mars Gateway

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

|  |  |  | 19 |  |  |  |  | 17 APRIL 2017 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | -------------- | --- |
S-20170405-379, Mars Gateway

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

Angina/Myocardial Infarction Visual Impairment and Increased Intracranial Pressure (VIIIP) (space adaptation) 20 17 APRIL 2017

---

## Source metadata

```yaml
source_filename: "cis-martian-orbiter-4-crew-report.pdf"
source_folder: "Mission Risk Reports/Mars"
source_url: "https://drive.google.com/file/d/1gArZxE1-kJfx8GUkwmgpsQuvHotVBAws/view"
source_drive_id: "1gArZxE1-kJfx8GUkwmgpsQuvHotVBAws"
source_sha256: eacd81ec62884b0180519359bac76075bed3cc3e7254bd4b1892b164d2d0ceee
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 20
ocr_performed: false
```
