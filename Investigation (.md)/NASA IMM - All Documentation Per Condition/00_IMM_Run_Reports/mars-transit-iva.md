# Mars Transit Iva

[View original PDF](https://drive.google.com/file/d/1vJty3pQw-xc_3uXSs-wlxWJtu5_vSbeT/view) · **23 pages**

**Collection:** NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports

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

This service request determined the CHI, probability of EVAC and probability of LOCL for a 16 month design reference mission (DRM) using a medical capability (MedCap) that is baselined to ISS. The CHI was determined to be 68.25% with a 95% CI of (37.54, 90.85). EVAC was determined to have a probability of 0.49 with a 95% CI of (0.48, 0.49). LOCL was determined to have a probability of 0.013 with a 95% CI of (0.012, 0.013). The top 10 influential conditions for EVAC and LOCL are reported in Tables 3 and 4 respectively. The probability of occurrence and frequency of occurrence are also included in Tables 5-7.

## BACKGROUND

The Integrated Medical Model (IMM) simulates medical events during space flight missions and estimates the impact of these events on crew health. The IMM is a stochastic model that uses Monte Carlo methodology to simulate missions. The IMM consists of a three-step process:

1. Design Reference Mission (DRM) and crew member characteristics are specified

2. Medical events, treatment and outcomes for the DRM are randomly generated

based on pre-defined probability distributions

3. The crew health index, evacuation and loss of crew life outcomes, and resource

utilization outcomes are summarized in a post-processing procedure.

## METHODS

### Crew and Mission Parameters

The DRM, including mission length, crew compliment, and number of EVA events, was established by the requestor. Table 1 below shows the predefined crew profile information for this service request. A DRM duration of 16 months was specified, with 2 female and 2 male crewmembers. The outcomes of certain IMM medical conditions are sex-specific and influenced by crew medical history. Pre-existing conditions that influence IMM outcomes include: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of any prior abdominal 1 20 MARCH 2017

surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data.

The number of extravehicular activity (EVA) excursions influences the probability of EVA- dependent medical conditions.

Table 1: Crew profile information for the 16 month DRM.

### Prior Abdominal

### Sex CAC Crowns Contacts EVA

Surgery Crew 1 male yes yes no no no Crew 2 male no no yes yes no Crew 3 female no yes no no no Crew 4 female no no yes no no

### Medical Conditions and Resources

The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data from the Integrated Medical Evidence Database (iMED). For each condition, the percentage of “best case” and “worst case” scenarios are also specified, as well as a defined set of medical resources that is required to treat the medical condition. All medical condition data inputs to the model are pulled from the iMED by an SQL query written in MATLAB scripts. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS (i.e. the ISS medical capabilities (MedCap)).

In the current version of IMM, medical conditions are not treated unless all essential medical resources are available. Resources are classified as essential or non-essential, and as consumable, or non-consumable. Consumable resources are decremented as required to treat medical events; if an item is essential, but has been depleted, then the given medical condition will go untreated.

### Main Outcomes

- The IMM primary medical outcomes include: total medical events (TME), crew health index

(CHI), probability of evacuation (EVAC), probability of loss of crew life (LOCL), and required resources. CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in- flight medical events and resources available to treat those conditions [3].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 2 20 MARCH 2017

For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew. EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria is met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available.

LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In the current version of the IMM, it is possible for crew members to be assigned more than one endstate of EVAC and/or LOCL. These assumptions should result in slightly high (conservative) IMM forecasts for the occurrence of EVAC and LOCL. Determining LOCL is the main objective of this service request.

Required resources for treatment are tracked for each DRM. The number of each resource that is needed from the given available resource quantities to treat all medical events is recorded. If more of any particular resource is used than is available, then that is recorded as a “depleted” resource. The initial quantities for the available resources are baselined to the ISS environment with 6 month resupply.

### Modeling Approach

A simulation for a Mars Transit DRM was run using IMM version three (v3). One hundred thousand (100,000) trials were run for the DRM, where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meets convergence criteria.

Convergence criteria are met when there is less than, or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last two - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV3ConvergenceReport. IMM outcomes were determined for the DRM under the ISS MedCap scenario where all conditions are treated until the essential resources of the ISS MedCap are depleted. Total medical events (TME) and CHI are calculated as means, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% confidence intervals (CI) for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. 3 20 MARCH 2017

To provide the probabilities of occurrence, which are listed in Table 3, a MATLAB script which utilizes the incidence information in iMED and statistical theory was written.

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

7. IMM source data in the iMED database undergo regular updates to ensure best alignment

to the real world system; this may affect the inclusion or exclusion of certain resources from the optimized MedCap, which would also effect resulting mass and volume.

8. Mass and volume for MedCap does not consider packaging materials.

### RESULTS AND DISCUSSION

The specified DRM was assessed using the IMM as described above in the Methods section above. One hundred thousand trials were simulated for the DRM with ISS MedCap to forecast IMM primary outcomes and resources required to treat each condition. The ISS MedCap is baselined to the ISS environment with 6 month resupply. Results are reported in Table 2 with the numbers for fully treated as reference. The top 10 influential conditions for EVAC and LOCL are provided in Tables 3 and 4 respectively. The probabilities by case for each of the conditions is listed in Table 5. The frequency of occurrence for each condition is listed in Table 6 and by best and worst case scenarios in Table 7. Note the absence of Fingernail Delamination Secondary EVA, Decompression Sickness Secondary EVA, Paresthesias Secondary EVA not included because no EVAs performed.

Although it did not contribute to the top 10 influential conditions, during a review of the simulation results, it was observed that Otitis Media was contributing to LOCL when it went to the untreated worst case scenario. The untreated worst case LOCL is the result of this condition progressing into two other conditions. Otitis Media should have 0% LOCL. A change request (C2-20170309-384) has been entered to make the changes in iMED. 4 20 MARCH 2017

Table 2.  Mars Transit IVA Outcomes.

Percent or

|  |  |  |  | 95% CI |  | Odds (mean) |
| --- | --- | --- | --- | ------- | --- | ------------ |

Probability* (mean)

|  |  |  | 166.23 | (141, 192) |  | ------ |
| --- | --- | --- | ------- | ----------- | --- | ------- |

TME

|  | MedCap CHI |  | 68.25% | (37.54, 90.85) |  | ------ |
| --- | ------------- | --- | ------- | ----------------- | --- | --------- |
|  | Treated CHI |  | 89.05% | (71.12, 97.45) |  | ------ |
|  | MedCap EVAC |  | 0.49 | (0.48, 0.49) |  | 1 in 2 |
|  | Treated EVAC |  | 0.067 | (0.065, 0.067) |  | 1 in 14 |
|  | MedCap LOCL |  | 0.013 | (0.012, 0.013) |  | 1 in 77 |
|  | Treated LOCL |  | 0.0087 | (0.0081, 0.0093) |  | 1 in 115 |

* Probability of one or more events.

Table 3. Top 10 Influential Conditions for EVAC for the MedCap Scenario

### Scenario  Treated  MedicalCondition  Total  Percent_Contribution  Cumulative_Percent

EVAC BEST CASE  UNTREATED  EYE CHEMICAL BURN  36055  49.25  49.25

|  | WORST | UNTREATED | EYE CHEMICAL BURN |  | 9.08 | 58.33 |
| --- | ---------- | ---------- | ------------------- | ----- | ----- | ------ |
|  | CASE |  |  | 6649 |  |  |
|  | WORST | UNTREATED | SKIN INFECTION |  | 6.30 | 64.64 |
|  | CASE |  |  | 4614 |  |  |
|  | BEST CASE | UNTREATED | FINGER DISLOCATION | 2758 | 3.77 | 68.40 |
|  | WORST | UNTREATED | SKIN LACERATION |  | 2.61 | 71.02 |
|  | CASE |  |  | 1912 |  |  |

WORST  UNTREATED  LOWER EXTREMITY (LE) STRESS    2.27  73.29

|  | CASE |  | FRACTURE | 1664 |  |  |
| --- | ---------- | ---------- | --------------------------- | ----- | ----- | ------ |
|  | WORST | UNTREATED | URINARY TRACT INFECTION |  | 1.96 | 75.25 |
|  | CASE |  |  | 1436 |  |  |
|  | WORST | UNTREATED | HERPES ZOSTER REACTIVATION |  | 1.54 | 76.79 |
|  | CASE |  | (SHINGLES) | 1130 |  |  |
|  | BEST CASE | UNTREATED | NEPHROLITHIASIS | 1034 | 1.41 | 78.21 |
|  | WORST | UNTREATED | EYE INFECTION |  | 1.41 | 79.62 |
|  | CASE |  |  | 1032 |  |  |

*EVAC numbers are for all 100,000 trials

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | -------------- |
|  |  |  |  | 5 |  | 20 MARCH 2017 |
Table 4. Top 10 Influential Conditions for LOCL for the MedCap Scenario

### Scenario  Treated  MedicalCondition  Total_LOCL  Percent_Contributio  Cumulative_Percen

|  |  |  |  |  | n | t |
| ----------- | ---------- | ------- | --- | ---- | ------ | ------ |
| WORST CASE | UNTREATED | SEPSIS |  | 178 | 13.84 | 13.84 |

WORST CASE  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  120  9.33  23.17

| WORST CASE | TREATED | SEPSIS |  | 111 | 8.63 | 31.80 |
| ----------- | ---------- | ------- | --- | ---- | ----- | ------ |
| BEST CASE | UNTREATED | SEPSIS |  | 106 | 8.24 | 40.05 |

WORST CASE  TREATED  MEDICATION OVERDOSE/ADVERSE  91  7.08  47.12 REACTION

| WORST CASE | TREATED | SMOKE INHALATION |  | 71 | 5.52 | 52.64 |
| ----------- | -------- | ----------------- | --- | --- | ----- | ------ |

WORST CASE  TREATED  STROKE (CEREBROVASCULAR  69  5.37  58.01 ACCIDENT)

| BEST CASE | UNTREATED | APPENDICITIS |  | 59 | 4.59 | 62.60 |
| ----------- | ---------- | ------------- | --- | --- | ----- | ------ |
| WORST CASE | TREATED | HEAD INJURY |  | 59 | 4.59 | 67.19 |

WORST CASE  UNTREATED  ACUTE DIVERTICULITIS  50  3.89  71.07 *LOCL numbers are for all 100,000 trials

Table 5.  Probability of Events = 0 and Probability of Events  for a 16 month DRM.

|  |  |  |  |  | ≥ 1 |  |
| --- | --- | --- | --- | --- | ---- | --- |

Medical_Condition  Probability Zero  Probability ≥1  Probability ≥1 Best  Probability ≥1 Worst

|  |  |  |  | Case |  | Case |
| ----------------- | --- | --------- | --------- | --------- | --- | --------- |
| ABDOMINAL INJURY |  | 9.99E-01 | 8.76E-04 | 6.57E-04 |  | 2.19E-04 |

ABDOMINAL WALL HERNIA  9.98E-01  2.40E-03  2.11E-03  2.88E-04

| ABNORMAL UTERINE |  | 8.71E-01 | 1.29E-01 | 1.27E-01 |  | 2.59E-03 |
| ----------------- | --- | --------- | --------- | --------- | --- | --------- |

BLEEDING

| ACUTE ANGLE-CLOSURE |  | 1.00E+00 | 2.23E-04 | 1.79E-04 |  | 4.47E-05 |
| -------------------- | --- | --------- | --------- | --------- | --- | --------- |

GLAUCOMA

| ACUTE ARTHRITIS |  | 9.86E-01 | 1.40E-02 | 1.37E-02 |  | 3.50E-04 |
| ---------------- | --- | --------- | --------- | --------- | --- | --------- |
| ACUTE |  | 9.95E-01 | 5.42E-03 | 4.88E-03 |  | 5.42E-04 |

CHOLECYSTITIS/BILIARY COLIC

| ACUTE COMPARTMENT |  | 1.00E+00 | 2.13E-04 | 8.11E-05 |  | 1.32E-04 |
| ------------------ | --- | --------- | --------- | --------- | --- | --------- |

SYNDROME ACUTE DIVERTICULITIS  9.92E-01  7.54E-03  5.62E-03  1.92E-03

| ACUTE PANCREATITIS |  | 9.98E-01 | 1.64E-03 | 1.35E-03 |  | 2.87E-04 |
| ------------------- | --- | --------- | --------- | --------- | --- | --------- |
| ACUTE PROSTATITIS |  | 9.87E-01 | 1.30E-02 | 1.21E-02 |  | 8.44E-04 |
| ACUTE RADIATION |  | 9.86E-01 | 1.39E-02 | 1.38E-02 |  | 6.95E-05 |

SYNDROME

| ACUTE SINUSITIS |  | 3.10E-01 | 6.90E-01 | 6.34E-01 |  | 5.52E-02 |
| ---------------- | --- | --------- | --------- | --------- | --- | --------- |

ALLERGIC REACTION (MILD  1.17E-01  8.83E-01  8.48E-01  3.53E-02

### TO MODERATE)

| ALTITUDE SICKNESS |  | 1.00E+00 | 2.90E-04 | 2.85E-04 |  | 4.34E-06 |
| ------------------ | --- | --------- | --------- | --------- | --- | -------------- |
|  |  |  | 6 |  |  | 20 MARCH 2017 |
| ANAPHYLAXIS | 9.97E-01 | 2.62E-03 | 2.60E-03 | 1.31E-05 |
| ------------------ | --------- | --------- | --------- | --------- |
| ANGINA/MYOCARDIAL | 9.97E-01 | 2.93E-03 | 2.49E-03 | 4.39E-04 |

INFARCTION

| ANKLE SPRAIN/STRAIN | 1.09E-01 | 8.91E-01 | 8.73E-01 | 1.78E-02 |
| -------------------- | --------- | --------- | --------- | --------- |
| ANXIETY | 9.76E-01 | 2.37E-02 | 2.26E-02 | 1.07E-03 |
| APPENDICITIS | 9.95E-01 | 4.97E-03 | 4.10E-03 | 8.70E-04 |

ATRIAL FIBRILLATION/  9.97E-01  2.52E-03  2.03E-03  4.91E-04

### ATRIAL FLUTTER

| BACK PAIN (SPACE | 5.10E-02 | 9.49E-01 | 9.35E-01 | 1.42E-02 |
| ----------------- | --------- | --------- | --------- | --------- |

ADAPTATION)

| BACK SPRAIN/STRAIN | 1.93E-03 | 9.98E-01 | 9.78E-01 | 2.00E-02 |
| ------------------- | --------- | --------- | --------- | --------- |

BAROTRAUMA (EAR/SINUS  2.37E-03  9.98E-01  9.83E-01  1.50E-02 BLOCK) BEHAVIORAL EMERGENCY  1.00E+00  7.63E-05  6.83E-05  8.01E-06 BURNS SECONDARY TO FIRE  9.73E-01  2.65E-02  2.64E-02  1.33E-04

| CARDIOGENIC SHOCK | 1.00E+00 | 3.41E-05 | 4.43E-06 | 2.96E-05 |
| ------------------ | --------- | --------- | --------- | --------- |

### SECONDARY TO

### MYOCARDIAL INFARCTION

| CHEST INJURY | 9.99E-01 | 1.37E-03 | 4.78E-04 | 8.88E-04 |
| ------------------- | --------- | --------- | --------- | --------- |
| CHOKING/OBSTRUCTED | 5.57E-01 | 4.43E-01 | 4.41E-01 | 2.21E-03 |

AIRWAY

| CONSTIPATION (SPACE | 4.74E-01 | 5.26E-01 | 5.23E-01 | 2.63E-03 |
| -------------------- | --------- | --------- | --------- | --------- |

ADAPTATION)

| DENTAL ABSCESS | 9.57E-01 | 4.26E-02 | 3.36E-02 | 8.94E-03 |
| --------------- | --------- | --------- | --------- | --------- |

DENTAL AVULSION (TOOTH  9.85E-01  1.55E-02  1.19E-02  3.55E-03 LOSS)

| DENTAL CARIES | 9.51E-01 | 4.89E-02 | 3.08E-02 | 1.81E-02 |
| -------------- | --------- | --------- | --------- | --------- |
|  | 9.86E-01 | 1.37E-02 | 1.15E-02 | 2.19E-03 |

### DENTAL CROWN LOSS

| DENTAL EXPOSED PULP | 8.98E-01 | 1.02E-01 | 8.03E-02 | 2.13E-02 |
| -------------------- | --------- | --------- | --------- | --------- |
| DENTAL FILLING LOSS | 9.73E-01 | 2.69E-02 | 2.45E-02 | 2.42E-03 |
| DEPRESSION | 9.83E-01 | 1.72E-02 | 1.58E-02 | 1.37E-03 |
| DIARRHEA | 1.61E-03 | 9.98E-01 | 9.83E-01 | 1.50E-02 |
| ELBOW DISLOCATION | 1.00E+00 | 2.78E-04 | 2.42E-04 | 3.61E-05 |
| ELBOW SPRAIN/STRAIN | 8.90E-02 | 9.11E-01 | 8.93E-01 | 1.82E-02 |
| EYE CHEMICAL BURN | 3.10E-01 | 6.90E-01 | 6.38E-01 | 5.17E-02 |
|  | 9.96E-01 | 3.76E-03 | 3.73E-03 | 3.76E-05 |

### EYE CORNEAL ULCER

| EYE INFECTION | 3.77E-01 | 6.23E-01 | 5.73E-01 | 4.98E-02 |
| -------------- | --------- | --------- | --------- | --------- |

EYE IRRITATION/ABRASION  1.19E-06  1.00E+00  9.95E-01  5.00E-03 EYE PENETRATION (FOREIGN  1.00E+00  4.98E-05  2.49E-05  2.49E-05 BODY)

|  | 8.23E-01 | 1.77E-01 | 1.76E-01 | 8.86E-04 |
| --- | --------- | --------- | --------- | --------- |

### FINGER DISLOCATION

| GASTROENTERITIS | 4.59E-01 | 5.41E-01 | 4.98E-01 | 4.33E-02 |
| ---------------- | --------- | --------- | --------- | --------- |
| HEAD INJURY | 9.98E-01 | 2.25E-03 | 1.01E-03 | 1.24E-03 |

HEADACHE (CO2 INDUCED)  2.03E-02  9.80E-01  9.55E-01  2.45E-02

| HEADACHE (LATE) | 7.11E-05 | 1.00E+00 | 9.90E-01 | 1.00E-02 |
| ---------------- | --------- | --------- | --------- | -------------- |
|  |  | 7 |  | 20 MARCH 2017 |
| HEADACHE (SPACE | 1.78E-01 | 8.22E-01 | 7.73E-01 | 4.93E-02 |
| ---------------- | --------- | --------- | --------- | --------- |

ADAPTATION)

| HEARING LOSS | 3.50E-01 | 6.50E-01 | 4.06E-01 | 2.44E-01 |
| -------------- | --------- | --------- | --------- | --------- |
| HEMORRHOIDS | 6.77E-01 | 3.23E-01 | 3.21E-01 | 1.61E-03 |
| HERPES ZOSTER | 8.23E-01 | 1.77E-01 | 1.52E-01 | 2.48E-02 |

REACTIVATION (SHINGLES)

| HIP SPRAIN/STRAIN | 4.46E-01 | 5.54E-01 | 5.43E-01 | 1.11E-02 |
| ------------------- | --------- | --------- | --------- | --------- |
| HIP/PROXIMAL FEMUR | 9.99E-01 | 1.41E-03 | 9.19E-05 | 1.32E-03 |

FRACTURE

| HYPERTENSION | 9.66E-01 | 3.39E-02 | 3.00E-02 | 3.89E-03 |
| ---------------- | --------- | --------- | --------- | --------- |
| INDIGESTION | 3.10E-01 | 6.90E-01 | 6.41E-01 | 4.83E-02 |
| INFLUENZA | 8.23E-01 | 1.77E-01 | 1.33E-01 | 4.43E-02 |
| INSOMNIA (SPACE | 9.13E-02 | 9.09E-01 | 9.04E-01 | 4.54E-03 |

ADAPTATION)

| KNEE SPRAIN/STRAIN | 2.44E-01 | 7.56E-01 | 7.41E-01 | 1.51E-02 |
| ------------------- | --------- | --------- | --------- | --------- |

LOWER EXTREMITY (LE)  7.48E-01  2.52E-01  2.23E-01  2.90E-02

### STRESS FRACTURE

LUMBAR SPINE FRACTURE  9.99E-01  9.96E-04  8.32E-04  1.64E-04

| MEDICATION | 6.77E-01 | 3.23E-01 | 3.21E-01 | 1.61E-03 |
| ----------- | --------- | --------- | --------- | --------- |

OVERDOSE/ADVERSE REACTION

| MOUTH ULCER | 1.73E-01 | 8.27E-01 | 7.86E-01 | 4.13E-02 |
| ------------ | --------- | --------- | --------- | --------- |

NASAL CONGESTION (SPACE  2.94E-02  9.71E-01  9.66E-01  4.85E-03 ADAPTATION)

| NECK SPRAIN/STRAIN | 1.63E-01 | 8.37E-01 | 8.20E-01 | 1.67E-02 |
| ------------------- | --------- | --------- | --------- | --------- |
| NEPHROLITHIASIS | 9.79E-01 | 2.09E-02 | 1.26E-02 | 8.25E-03 |
| NEUROGENIC SHOCK | 1.00E+00 | 2.78E-05 | 1.39E-05 | 1.39E-05 |
| NOSE BLEED (SPACE | 9.64E-01 | 3.57E-02 | 3.44E-02 | 1.25E-03 |

ADAPTATION)

| OTITIS EXTERNA | 5.57E-01 | 4.43E-01 | 4.36E-01 | 6.64E-03 |
| --------------- | --------- | --------- | --------- | --------- |
| OTITIS MEDIA | 5.57E-01 | 4.43E-01 | 3.99E-01 | 4.43E-02 |
| PHARYNGITIS | 1.17E-01 | 8.83E-01 | 8.43E-01 | 3.97E-02 |

RESPIRATORY INFECTION  1.61E-03  9.98E-01  9.83E-01  1.50E-02

| RETINAL DETACHMENT | 1.00E+00 | 4.92E-04 | 2.07E-04 | 2.85E-04 |
| ------------------- | --------- | --------- | --------- | --------- |
| SEIZURES | 9.99E-01 | 1.44E-03 | 1.24E-03 | 2.01E-04 |
|  | 9.87E-01 | 1.27E-02 | 8.45E-03 | 4.27E-03 |

SEPSIS SHOULDER DISLOCATION  1.00E+00  1.99E-04  6.95E-06  1.92E-04 SHOULDER SPRAIN/STRAIN  1.18E-02  9.88E-01  9.68E-01  1.98E-02

| SKIN ABRASION | 1.10E-08 | 1.00E+00 | 9.45E-01 | 5.50E-02 |
| ---------------- | --------- | --------- | --------- | --------- |
| SKIN INFECTION | 7.93E-02 | 9.21E-01 | 8.88E-01 | 3.22E-02 |
| SKIN LACERATION | 8.23E-01 | 1.77E-01 | 4.43E-02 | 1.33E-01 |
| SKIN RASH | 1.10E-08 | 1.00E+00 | 9.95E-01 | 5.00E-03 |
| SLEEP DISORDER | 5.50E-12 | 1.00E+00 | 9.95E-01 | 5.00E-03 |
| SMALL BOWEL | 9.94E-01 | 6.38E-03 | 5.58E-03 | 7.97E-04 |

OBSTRUCTION

| SMOKE INHALATION | 9.08E-01 | 9.19E-02 | 7.91E-02 | 1.29E-02 |
| ----------------- | --------- | --------- | --------- | -------------- |
|  |  | 8 |  | 20 MARCH 2017 |
SPACE MOTION SICKNESS  5.29E-03  9.95E-01  8.46E-01  1.49E-01 (SPACE ADAPTATION)

| STROKE | 9.96E-01 | 4.42E-03 |  | 2.89E-03 | 1.52E-03 |
| ------- | --------- | --------- | --- | --------- | --------- |

(CEREBROVASCULAR ACCIDENT) SUDDEN CARDIAC ARREST  1.00E+00  1.93E-04  3.58E-05  1.58E-04

| TOXIC EXPOSURE | 9.99E-01 | 8.74E-04 |  | 0.00E+00 | 8.74E-04 |
| --------------- | --------- | --------- | --- | --------- | --------- |

(AMMONIA) TRAUMATIC HYPOVOLEMIC  9.97E-01  3.41E-03  2.03E-03  1.38E-03 SHOCK URINARY INCONTINENCE  8.92E-01  1.08E-01  9.88E-02  9.18E-03 (SPACE ADAPTATION) URINARY RETENTION (SPACE  8.80E-01  1.20E-01  1.02E-01  1.81E-02 ADAPTATION) URINARY TRACT INFECTION  1.75E-02  9.82E-01  9.33E-01  4.91E-02 VAGINAL YEAST INFECTION  3.57E-01  6.43E-01  5.47E-01  9.64E-02

| VISUAL IMPAIRMENT | 1.89E-01 | 8.11E-01 |  | 7.55E-01 | 5.68E-02 |
| ------------------ | --------- | --------- | --- | --------- | --------- |

### AND/OR INCREASED

### INTRACRANIAL PRESSURE

(VIIP)(SPACE ADAPTATION)

| WRIST FRACTURE | 9.87E-01 | 1.25E-02 |  | 9.94E-03 | 2.56E-03 |
| -------------------- | --------- | --------- | --- | --------- | --------- |
| WRIST SPRAIN/STRAIN | 3.65E-01 | 6.35E-01 |  | 6.26E-01 | 9.53E-03 |
Table 6.  Frequency of Occurrence for each condition for a 16 month DRM.

MedicalCondition  Events  Mean trial  Minimum  Maximum  Standard Deviation

| ABDOMINAL INJURY | 93 | 0.00093 | 0 | 1 | 0.0305 |
| ----------------- | ---- | -------- | --- | --- | ------- |
| ABDOMINAL WALL | 239 | 0.00239 | 0 | 1 | 0.0488 |

HERNIA

| ABNORMAL UTERINE | 13589 | 0.13589 | 0 | 4 | 0.3693 |
| ----------------- | ------ | -------- | --- | --- | ------- |

BLEEDING

| ACUTE ANGLE-CLOSURE | 23 | 0.00023 | 0 | 1 | 0.0152 |
| -------------------- | --- | -------- | --- | --- | ------- |

GLAUCOMA

| ACUTE ARTHRITIS | 1433 | 0.01433 | 0 | 2 | 0.1196 |
| ---------------- | ----- | -------- | --- | --- | ------- |
| ACUTE | 545 | 0.00545 | 0 | 2 | 0.0739 |

CHOLECYSTITIS/BILIARY COLIC

|  | 15 | 0.00015 | 0 | 1 | 0.0122 |
| --- | --- | -------- | --- | --- | ------- |

### ACUTE COMPARTMENT

SYNDROME

| ACUTE DIVERTICULITIS | 762 | 0.00762 | 0 | 2 | 0.0871 |
| --------------------- | ----- | -------- | --- | --- | ------- |
| ACUTE PANCREATITIS | 176 | 0.00176 | 0 | 1 | 0.0419 |
| ACUTE PROSTATITIS | 1297 | 0.01297 | 0 | 2 | 0.1137 |
| ACUTE RADIATION | 1516 | 0.01516 | 0 | 3 | 0.1325 |

SYNDROME

| ACUTE SINUSITIS | 116898 | 1.16898 | 0 | 12 | 1.1100 |
| ---------------- | ------- | -------- | --- | --- | -------------- |
|  |  |  | 9 |  | 20 MARCH 2017 |
| ALLERGIC REACTION | 214730 | 2.1473 | 0 | 11 | 1.5006 |
| ------------------ | ------- | ------- | --- | --- | ------- |

(MILD TO MODERATE)

| ALTITUDE SICKNESS | 26 | 0.00026 | 0 | 1 | 0.0161 |
| ------------------ | ---- | -------- | --- | --- | ------- |
| ANAPHYLAXIS | 291 | 0.00291 | 0 | 1 | 0.0539 |
| ANGINA/MYOCARDIAL | 295 | 0.00295 | 0 | 2 | 0.0546 |

INFARCTION

| ANKLE SPRAIN/STRAIN | 221971 | 2.21971 | 0 | 11 | 1.5303 |
| --------------------- | ------- | -------- | --- | --- | ------- |
| ANXIETY | 2476 | 0.02476 | 0 | 2 | 0.1572 |
| APPENDICITIS | 516 | 0.00516 | 0 | 2 | 0.0718 |
| ATRIAL FIBRILLATION/ | 218 | 0.00218 | 0 | 1 | 0.0466 |

### ATRIAL FLUTTER

| BACK PAIN (SPACE | 210167 | 2.10167 | 0 | 4 | 0.9978 |
| ----------------- | ------- | -------- | --- | --- | ------- |

ADAPTATION)

| BACK SPRAIN/STRAIN | 623807 | 6.23807 | 0 | 20 | 2.5606 |
| ------------------- | ------- | -------- | --- | --- | ------- |
| BAROTRAUMA | 603941 | 6.03941 | 0 | 20 | 2.5214 |

(EAR/SINUS BLOCK)

| BEHAVIORAL | 5 | 0.00005 | 0 | 1 | 0.0071 |
| ----------- | --- | -------- | --- | --- | ------- |

EMERGENCY

| BURNS SECONDARY TO | 2657 | 0.02657 | 0 | 2 | 0.1627 |
| ------------------- | ----- | -------- | --- | --- | ------- |

FIRE

| CARDIOGENIC SHOCK | 2 | 0.00002 | 0 | 1 | 0.0045 |
| ------------------ | --- | -------- | --- | --- | ------- |

### SECONDARY TO

MYOCARDIAL INFARCTION

|  | 161 | 0.00161 | 0 | 1 | 0.0401 |
| --- | ---- | -------- | --- | --- | ------- |

### CHEST INJURY

| CHOKING/OBSTRUCTED | 58459 | 0.58459 | 0 | 6 | 0.7805 |
| ------------------- | ------ | -------- | --- | --- | ------- |

AIRWAY

| CONSTIPATION (SPACE | 68492 | 0.68492 | 0 | 4 | 0.7547 |
| -------------------- | ------ | -------- | --- | --- | ------- |

ADAPTATION)

| DENTAL ABSCESS | 4324 | 0.04324 | 0 | 3 | 0.2084 |
| ---------------- | ----- | -------- | --- | --- | ------- |
| DENTAL AVULSION | 1553 | 0.01553 | 0 | 2 | 0.1246 |

(TOOTH LOSS)

| DENTAL CARIES | 4947 | 0.04947 | 0 | 3 | 0.2229 |
| -------------------- | ------- | -------- | --- | --- | ------- |
| DENTAL CROWN LOSS | 1420 | 0.0142 | 0 | 2 | 0.1189 |
| DENTAL EXPOSED PULP | 10953 | 0.10953 | 0 | 4 | 0.3317 |
| DENTAL FILLING LOSS | 2719 | 0.02719 | 0 | 2 | 0.1655 |
| DEPRESSION | 1748 | 0.01748 | 0 | 2 | 0.1321 |
| DIARRHEA | 642624 | 6.42624 | 0 | 22 | 2.5929 |
| ELBOW DISLOCATION | 20 | 0.0002 | 0 | 1 | 0.0141 |
|  | 242345 | 2.42345 | 0 | 12 | 1.5950 |

### ELBOW SPRAIN/STRAIN

| EYE CHEMICAL BURN | 117286 | 1.17286 | 0 | 9 | 1.1125 |
| ------------------ | -------- | --------- | --- | --- | ------- |
| EYE CORNEAL ULCER | 383 | 0.00383 | 0 | 2 | 0.0621 |
| EYE INFECTION | 97337 | 0.97337 | 0 | 8 | 1.0102 |
| EYE | 1366013 | 13.66013 | 1 | 32 | 3.7931 |

IRRITATION/ABRASION

| EYE PENETRATION | 10 | 0.0001 | 0 | 1 | 0.0100 |
| ---------------- | --- | ------- | --- | --- | ------- |

(FOREIGN BODY)

|  |  |  | 10 |  | 20 MARCH 2017 |
| --- | --- | --- | --- | --- | -------------- |
| FINGER DISLOCATION | 19281 | 0.19281 | 0 | 5 | 0.4508 |
| ------------------- | ------- | -------- | --- | --- | ------- |
| GASTROENTERITIS | 78184 | 0.78184 | 0 | 7 | 0.9043 |
| HEAD INJURY | 237 | 0.00237 | 0 | 1 | 0.0486 |
| HEADACHE (CO2 | 390401 | 3.90401 | 0 | 16 | 2.0291 |

INDUCED)

| HEADACHE (LATE) | 954490 | 9.5449 | 0 | 26 | 3.1581 |
| ---------------- | ------- | -------- | --- | --- | ------- |
| HEADACHE (SPACE | 140717 | 1.40717 | 0 | 4 | 0.9531 |

ADAPTATION)

| HEARING LOSS | 105016 | 1.05016 | 0 | 8 | 1.0689 |
| -------------- | ------- | -------- | --- | --- | ------- |
| HEMORRHOIDS | 38923 | 0.38923 | 0 | 6 | 0.6418 |
| HERPES ZOSTER | 19279 | 0.19279 | 0 | 5 | 0.4518 |

REACTIVATION (SHINGLES)

| HIP SPRAIN/STRAIN | 80871 | 0.80871 | 0 | 9 | 0.9249 |
| ------------------- | ------ | -------- | --- | --- | ------- |
| HIP/PROXIMAL FEMUR | 146 | 0.00146 | 0 | 1 | 0.0382 |

FRACTURE

|  | 3387 | 0.03387 | 0 | 2 | 0.1842 |
| --- | ----- | -------- | --- | --- | ------- |

HYPERTENSION

| INDIGESTION | 116659 | 1.16659 | 0 | 10 | 1.1012 |
| ---------------- | ------- | -------- | --- | --- | ------- |
| INFLUENZA | 19422 | 0.19422 | 0 | 4 | 0.4509 |
| INSOMNIA (SPACE | 180659 | 1.80659 | 0 | 4 | 0.9948 |

ADAPTATION)

| KNEE SPRAIN/STRAIN | 140861 | 1.40861 | 0 | 10 | 1.2169 |
| --------------------- | ------- | -------- | --- | --- | ------- |
| LOWER EXTREMITY (LE) | 28996 | 0.28996 | 0 | 5 | 0.5384 |

### STRESS FRACTURE

| LUMBAR SPINE | 110 | 0.0011 | 0 | 1 | 0.0331 |
| ------------- | ---- | ------- | --- | --- | ------- |

FRACTURE

| MEDICATION | 38822 | 0.38822 | 0 | 5 | 0.6374 |
| ----------- | ------ | -------- | --- | --- | ------- |

OVERDOSE/ADVERSE REACTION

| MOUTH ULCER | 175114 | 1.75114 | 0 | 10 | 1.3540 |
| ----------------- | ------- | -------- | --- | --- | ------- |
| NASAL CONGESTION | 234032 | 2.34032 | 0 | 4 | 0.9814 |

(SPACE ADAPTATION)

| NECK SPRAIN/STRAIN | 182024 | 1.82024 | 0 | 11 | 1.3755 |
| ------------------- | ------- | -------- | --- | --- | ------- |
| NEPHROLITHIASIS | 2049 | 0.02049 | 0 | 2 | 0.1427 |
| NEUROGENIC SHOCK | 3 | 0.00003 | 0 | 1 | 0.0055 |
| NOSE BLEED (SPACE | 4330 | 0.0433 | 0 | 3 | 0.2079 |

ADAPTATION)

| OTITIS EXTERNA | 58547 | 0.58547 | 0 | 7 | 0.7814 |
| --------------- | ------- | -------- | --- | --- | ------- |
| OTITIS MEDIA | 58947 | 0.58947 | 0 | 6 | 0.7878 |
| PHARYNGITIS | 214820 | 2.1482 | 0 | 11 | 1.4994 |
| RESPIRATORY | 644880 | 6.4488 | 0 | 20 | 2.5927 |

INFECTION

| RETINAL DETACHMENT | 50 | 0.0005 | 0 | 1 | 0.0224 |
| ------------------- | ----- | -------- | --- | --- | -------------- |
| SEIZURES | 118 | 0.00118 | 0 | 1 | 0.0343 |
| SEPSIS | 1259 | 0.01259 | 0 | 2 | 0.1122 |
|  |  |  | 11 |  | 20 MARCH 2017 |
| SHOULDER | 20 | 0.0002 | 0 | 1 |  | 0.0141 |
| --------- | --- | ------- | --- | --- | --- | ------- |

DISLOCATION

| SHOULDER | 443980 | 4.4398 | 0 | 16 |  | 2.1536 |
| --------- | ------- | ------- | --- | --- | --- | ------- |

SPRAIN/STRAIN

| SKIN ABRASION | 1830522 | 18.30522 | 3 | 43 |  | 4.3903 |
| ---------------- | -------- | --------- | --- | --- | --- | ------- |
| SKIN INFECTION | 252994 | 2.52994 | 0 | 12 |  | 1.6314 |
| SKIN LACERATION | 19541 | 0.19541 | 0 | 5 |  | 0.4527 |
| SKIN RASH | 1833733 | 18.33733 | 3 | 38 |  | 4.3820 |
| SLEEP DISORDER | 2592548 | 25.92548 | 7 | 52 |  | 5.2200 |
| SMALL BOWEL | 675 | 0.00675 | 0 | 2 |  | 0.0821 |

OBSTRUCTION

| SMOKE INHALATION | 9478 | 0.09478 | 0 | 3 |  | 0.3074 |
| ----------------- | ------- | -------- | --- | --- | --- | ------- |
| SPACE MOTION | 291194 | 2.91194 | 0 | 4 |  | 0.8923 |

SICKNESS (SPACE ADAPTATION)

| STROKE | 450 | 0.0045 | 0 | 1 |  | 0.0669 |
| ------- | ---- | ------- | --- | --- | --- | ------- |

(CEREBROVASCULAR ACCIDENT)

| SUDDEN CARDIAC | 16 | 0.00016 | 0 | 1 |  | 0.0126 |
| --------------- | --- | -------- | --- | --- | --- | ------- |

ARREST

| TOXIC EXPOSURE | 68 | 0.00068 | 0 | 1 |  | 0.0261 |
| --------------- | --- | -------- | --- | --- | --- | ------- |

(AMMONIA)

| TRAUMATIC | 367 | 0.00367 | 0 | 2 |  | 0.0606 |
| ---------- | ---- | -------- | --- | --- | --- | ------- |

### HYPOVOLEMIC SHOCK

| URINARY | 12870 | 0.1287 | 0 | 2 |  | 0.3472 |
| -------- | ------ | ------- | --- | --- | --- | ------- |

INCONTINENCE (SPACE ADAPTATION)

| URINARY RETENTION | 14810 | 0.1481 | 0 | 3 |  | 0.3732 |
| ------------------ | ------ | ------- | --- | --- | --- | ------- |

(SPACE ADAPTATION)

| URINARY TRACT | 404848 | 4.04848 | 0 | 19 |  | 2.3070 |
| -------------- | ------- | -------- | --- | --- | --- | ------- |

INFECTION

| VAGINAL YEAST | 103055 | 1.03055 | 0 | 7 |  | 1.0137 |
| -------------- | ------- | -------- | --- | --- | --- | ------- |

INFECTION

| VISUAL IMPAIRMENT | 139320 | 1.3932 | 0 | 4 |  | 0.9519 |
| ------------------ | ------- | ------- | --- | --- | --- | ------- |

### AND/OR INCREASED

INTRACRANIAL PRESSURE (VIIP)(SPACE ADAPTATION)

| WRIST FRACTURE | 1196 | 0.01196 | 0 | 3 |  | 0.1136 |
| -------------------- | ------- | -------- | --- | --- | --- | ------- |
| WRIST SPRAIN/STRAIN | 100618 | 1.00618 | 0 | 9 |  | 1.0298 |
Table 7.  Frequency of Occurrence for each condition by Case for a 16 month DRM.

MedicalCondition  Scenario  Events  Mean trial  Minimum  Maximum  Standard Deviation

| ABDOMINAL INJURY | BEST | 69 | 0.00069 | 0 | 1 | 0.0263 |
| ----------------- | ------ | --- | -------- | --- | --- | -------------- |
| ABDOMINAL INJURY | WORST | 24 | 0.00024 | 0 | 1 | 0.0155 |
|  |  |  | 12 |  |  | 20 MARCH 2017 |
| ABDOMINAL WALL | BEST | 210 | 0.0021 | 0 | 1 | 0.0458 |
| --------------- | ----- | ---- | ------- | --- | --- | ------- |

HERNIA

| ABDOMINAL WALL | WORST | 29 | 0.00029 | 0 | 1 | 0.0170 |
| --------------- | ------ | --- | -------- | --- | --- | ------- |

HERNIA

| ABNORMAL UTERINE | BEST | 13329 | 0.13329 | 0 | 4 | 0.3658 |
| ----------------- | ----- | ------ | -------- | --- | --- | ------- |

BLEEDING

| ABNORMAL UTERINE | WORST | 260 | 0.0026 | 0 | 1 | 0.0509 |
| ----------------- | ------ | ---- | ------- | --- | --- | ------- |

BLEEDING

| ACUTE ANGLE-CLOSURE | BEST | 17 | 0.00017 | 0 | 1 | 0.0130 |
| -------------------- | ----- | --- | -------- | --- | --- | ------- |

GLAUCOMA

| ACUTE ANGLE-CLOSURE | WORST | 6 | 0.00006 | 0 | 1 | 0.0077 |
| -------------------- | ------ | --- | -------- | --- | --- | ------- |

GLAUCOMA

|  | BEST | 1396 | 0.01396 | 0 | 2 | 0.1181 |
| --- | ----- | ----- | -------- | --- | --- | ------- |

### ACUTE ARTHRITIS

| ACUTE ARTHRITIS | WORST | 37 | 0.00037 | 0 | 1 | 0.0192 |
| ---------------- | ------ | ---- | -------- | --- | --- | ------- |
| ACUTE | BEST | 491 | 0.00491 | 0 | 2 | 0.0700 |

CHOLECYSTITIS/BILIARY COLIC

| ACUTE | WORST | 54 | 0.00054 | 0 | 1 | 0.0232 |
| ------ | ------ | --- | -------- | --- | --- | ------- |

CHOLECYSTITIS/BILIARY COLIC

| ACUTE COMPARTMENT | BEST | 6 | 0.00006 | 0 | 1 | 0.0077 |
| ------------------ | ----- | --- | -------- | --- | --- | ------- |

SYNDROME

| ACUTE COMPARTMENT | WORST | 9 | 0.00009 | 0 | 1 | 0.0095 |
| ------------------ | ------ | --- | -------- | --- | --- | ------- |

SYNDROME

| ACUTE DIVERTICULITIS | BEST | 570 | 0.0057 | 0 | 1 | 0.0753 |
| --------------------- | ------ | ---- | -------- | --- | --- | ------- |
|  | WORST | 192 | 0.00192 | 0 | 1 | 0.0438 |

### ACUTE DIVERTICULITIS

| ACUTE PANCREATITIS | BEST | 148 | 0.00148 | 0 | 1 | 0.0384 |
| ------------------- | ------ | ----- | -------- | --- | --- | ------- |
| ACUTE PANCREATITIS | WORST | 28 | 0.00028 | 0 | 1 | 0.0167 |
| ACUTE PROSTATITIS | BEST | 1213 | 0.01213 | 0 | 2 | 0.1097 |
| ACUTE PROSTATITIS | WORST | 84 | 0.00084 | 0 | 1 | 0.0290 |
| ACUTE RADIATION | BEST | 1508 | 0.01508 | 0 | 3 | 0.1320 |

SYNDROME

| ACUTE RADIATION | WORST | 8 | 0.00008 | 0 | 1 | 0.0089 |
| ---------------- | ------ | --- | -------- | --- | --- | ------- |

SYNDROME

| ACUTE SINUSITIS | BEST | 107719 | 1.07719 | 0 | 10 | 1.0647 |
| ---------------- | ------ | ------- | -------- | --- | --- | ------- |
|  | WORST | 9179 | 0.09179 | 0 | 4 | 0.3042 |

### ACUTE SINUSITIS

| ALLERGIC REACTION | BEST | 206141 | 2.06141 | 0 | 11 | 1.4688 |
| ------------------ | ----- | ------- | -------- | --- | --- | ------- |

(MILD TO MODERATE)

| ALLERGIC REACTION | WORST | 8589 | 0.08589 | 0 | 3 | 0.2938 |
| ------------------ | ------ | ----- | -------- | --- | --- | ------- |

(MILD TO MODERATE)

| ALTITUDE SICKNESS | BEST | 25 | 0.00025 | 0 | 1 | 0.0158 |
| ------------------ | ------ | ---- | -------- | --- | --- | ------- |
| ALTITUDE SICKNESS | WORST | 1 | 0.00001 | 0 | 1 | 0.0032 |
| ANAPHYLAXIS | BEST | 291 | 0.00291 | 0 | 1 | 0.0539 |
| ANAPHYLAXIS | WORST | 0 | 0 | 0 | 0 | 0.0000 |
| ANGINA/MYOCARDIAL | BEST | 256 | 0.00256 | 0 | 2 | 0.0509 |

INFARCTION

|  |  |  | 13 |  |  | 20 MARCH 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
| ANGINA/MYOCARDIAL | WORST | 39 | 0.00039 | 0 | 1 | 0.0197 |
| ------------------ | ------ | --- | -------- | --- | --- | ------- |

INFARCTION

| ANKLE SPRAIN/STRAIN | BEST | 217593 | 2.17593 | 0 | 11 | 1.5145 |
| --------------------- | ------ | ------- | -------- | --- | --- | ------- |
| ANKLE SPRAIN/STRAIN | WORST | 4378 | 0.04378 | 0 | 2 | 0.2083 |
| ANXIETY | BEST | 2367 | 0.02367 | 0 | 2 | 0.1538 |
| ANXIETY | WORST | 109 | 0.00109 | 0 | 1 | 0.0330 |
| APPENDICITIS | BEST | 400 | 0.004 | 0 | 2 | 0.0633 |
| APPENDICITIS | WORST | 116 | 0.00116 | 0 | 1 | 0.0340 |
| ATRIAL FIBRILLATION/ | BEST | 173 | 0.00173 | 0 | 1 | 0.0416 |

### ATRIAL FLUTTER

|  |  |  | 14 |  |  | 20 MARCH 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
| ATRIAL FIBRILLATION/ | WORST | 45 | 0.00045 | 0 | 1 | 0.0212 |
| --------------------- | ------ | --- | -------- | --- | --- | ------- |

### ATRIAL FLUTTER

| BACK PAIN (SPACE | BEST | 206971 | 2.06971 | 0 | 4 | 0.9981 |
| ----------------- | ----- | ------- | -------- | --- | --- | ------- |

ADAPTATION)

| BACK PAIN (SPACE | WORST | 3196 | 0.03196 | 0 | 3 | 0.1784 |
| ----------------- | ------ | ----- | -------- | --- | --- | ------- |

ADAPTATION)

| BACK SPRAIN/STRAIN | BEST | 611231 | 6.11231 | 0 | 20 | 2.5328 |
| ------------------- | ------ | ------- | -------- | --- | --- | ------- |
|  | WORST | 12576 | 0.12576 | 0 | 4 | 0.3547 |

### BACK SPRAIN/STRAIN

| BAROTRAUMA | BEST | 594881 | 5.94881 | 0 | 20 | 2.5021 |
| ----------- | ----- | ------- | -------- | --- | --- | ------- |

(EAR/SINUS BLOCK)

| BAROTRAUMA | WORST | 9060 | 0.0906 | 0 | 3 | 0.3026 |
| ----------- | ------ | ----- | ------- | --- | --- | ------- |

(EAR/SINUS BLOCK)

| BEHAVIORAL | BEST | 3 | 0.00003 | 0 | 1 | 0.0055 |
| ----------- | ----- | --- | -------- | --- | --- | ------- |

EMERGENCY

| BEHAVIORAL | WORST | 2 | 0.00002 | 0 | 1 | 0.0045 |
| ----------- | ------ | --- | -------- | --- | --- | ------- |

EMERGENCY

| BURNS SECONDARY TO | BEST | 2643 | 0.02643 | 0 | 2 | 0.1622 |
| ------------------- | ----- | ----- | -------- | --- | --- | ------- |

FIRE

| BURNS SECONDARY TO | WORST | 14 | 0.00014 | 0 | 1 | 0.0118 |
| ------------------- | ------ | --- | -------- | --- | --- | ------- |

FIRE

|  | BEST | 0 | 0 | 0 | 0 | 0.0000 |
| --- | ----- | --- | --- | --- | --- | ------- |

### CARDIOGENIC SHOCK

### SECONDARY TO

MYOCARDIAL INFARCTION

| CARDIOGENIC SHOCK | WORST | 2 | 0.00002 | 0 | 1 | 0.0045 |
| ------------------ | ------ | --- | -------- | --- | --- | ------- |

### SECONDARY TO

MYOCARDIAL INFARCTION

| CHEST INJURY | BEST | 61 | 0.00061 | 0 | 1 | 0.0247 |
| ------------------- | ------ | ------ | -------- | --- | --- | ------- |
| CHEST INJURY | WORST | 100 | 0.001 | 0 | 1 | 0.0316 |
| CHOKING/OBSTRUCTED | BEST | 58164 | 0.58164 | 0 | 6 | 0.7783 |

AIRWAY

| CHOKING/OBSTRUCTED | WORST | 295 | 0.00295 | 0 | 2 | 0.0544 |
| ------------------- | ------ | ---- | -------- | --- | --- | ------- |

AIRWAY

| CONSTIPATION (SPACE | BEST | 68170 | 0.6817 | 0 | 4 | 0.7531 |
| -------------------- | ----- | ------ | ------- | --- | --- | ------- |

ADAPTATION)

| CONSTIPATION (SPACE | WORST | 322 | 0.00322 | 0 | 2 | 0.0568 |
| -------------------- | ------ | ---- | -------- | --- | --- | ------- |

ADAPTATION)

| DECOMPRESSION | BEST | 0 | 0 | 0 | 0 | 0.0000 |
| -------------- | ----- | --- | --- | --- | --- | ------- |

### SICKNESS SECONDARY

### TO EXTRAVEHICULAR

ACTIVITY

| DECOMPRESSION | WORST | 0 | 0 | 0 | 0 | 0.0000 |
| -------------- | ------ | --- | --- | --- | --- | ------- |

### SICKNESS SECONDARY

### TO EXTRAVEHICULAR

ACTIVITY

| DENTAL ABSCESS | BEST | 3394 | 0.03394 | 0 | 3 | 0.1847 |
| --------------- | ------ | ----- | -------- | --- | --- | -------------- |
| DENTAL ABSCESS | WORST | 930 | 0.0093 | 0 | 2 | 0.0963 |
|  |  |  | 15 |  |  | 20 MARCH 2017 |
| DENTAL AVULSION | BEST | 1174 | 0.01174 | 0 | 2 | 0.1083 |
| ---------------- | ----- | ----- | -------- | --- | --- | ------- |

(TOOTH LOSS)

| DENTAL AVULSION | WORST | 379 | 0.00379 | 0 | 2 | 0.0616 |
| ---------------- | ------ | ---- | -------- | --- | --- | ------- |

(TOOTH LOSS)

| DENTAL CARIES | BEST | 3087 | 0.03087 | 0 | 2 | 0.1760 |
| -------------------- | ------ | ------- | -------- | --- | --- | ------- |
| DENTAL CARIES | WORST | 1860 | 0.0186 | 0 | 2 | 0.1366 |
| DENTAL CROWN LOSS | BEST | 1207 | 0.01207 | 0 | 2 | 0.1097 |
| DENTAL CROWN LOSS | WORST | 213 | 0.00213 | 0 | 2 | 0.0463 |
| DENTAL EXPOSED PULP | BEST | 8641 | 0.08641 | 0 | 3 | 0.2944 |
| DENTAL EXPOSED PULP | WORST | 2312 | 0.02312 | 0 | 2 | 0.1523 |
| DENTAL FILLING LOSS | BEST | 2488 | 0.02488 | 0 | 2 | 0.1578 |
| DENTAL FILLING LOSS | WORST | 231 | 0.00231 | 0 | 1 | 0.0480 |
| DEPRESSION | BEST | 1611 | 0.01611 | 0 | 2 | 0.1269 |
| DEPRESSION | WORST | 137 | 0.00137 | 0 | 1 | 0.0370 |
| DIARRHEA | BEST | 633231 | 6.33231 | 0 | 22 | 2.5740 |
| DIARRHEA | WORST | 9393 | 0.09393 | 0 | 3 | 0.3081 |
| ELBOW DISLOCATION | BEST | 17 | 0.00017 | 0 | 1 | 0.0130 |
| ELBOW DISLOCATION | WORST | 3 | 0.00003 | 0 | 1 | 0.0055 |
| ELBOW SPRAIN/STRAIN | BEST | 237512 | 2.37512 | 0 | 12 | 1.5774 |
|  | WORST | 4833 | 0.04833 | 0 | 3 | 0.2205 |

### ELBOW SPRAIN/STRAIN

| EYE CHEMICAL BURN | BEST | 108608 | 1.08608 | 0 | 9 | 1.0678 |
| ------------------ | ------ | -------- | -------- | --- | --- | ------- |
| EYE CHEMICAL BURN | WORST | 8678 | 0.08678 | 0 | 4 | 0.2963 |
| EYE CORNEAL ULCER | BEST | 382 | 0.00382 | 0 | 2 | 0.0620 |
| EYE CORNEAL ULCER | WORST | 1 | 0.00001 | 0 | 1 | 0.0032 |
| EYE INFECTION | BEST | 89440 | 0.8944 | 0 | 8 | 0.9691 |
| EYE INFECTION | WORST | 7897 | 0.07897 | 0 | 3 | 0.2820 |
| EYE | BEST | 1359190 | 13.5919 | 1 | 32 | 3.7837 |

IRRITATION/ABRASION

| EYE | WORST | 6823 | 0.06823 | 0 | 3 | 0.2617 |
| ---- | ------ | ----- | -------- | --- | --- | ------- |

IRRITATION/ABRASION

| EYE PENETRATION | BEST | 5 | 0.00005 | 0 | 1 | 0.0071 |
| ---------------- | ----- | --- | -------- | --- | --- | ------- |

(FOREIGN BODY)

| EYE PENETRATION | WORST | 5 | 0.00005 | 0 | 1 | 0.0071 |
| ---------------- | ------ | --- | -------- | --- | --- | ------- |

(FOREIGN BODY)

| FINGER DISLOCATION | BEST | 19200 | 0.192 | 0 | 5 | 0.4499 |
| ------------------- | ------ | ------ | -------- | --- | --- | ------- |
| FINGER DISLOCATION | WORST | 81 | 0.00081 | 0 | 1 | 0.0284 |
| FINGERNAIL | BEST | 0 | 0 | 0 | 0 | 0.0000 |

DELAMINATION

### SECONDARY TO

EXTRAVEHICULAR ACTIVITY

| FINGERNAIL | WORST | 0 | 0 | 0 | 0 | 0.0000 |
| ----------- | ------ | --- | --- | --- | --- | ------- |

DELAMINATION

### SECONDARY TO

EXTRAVEHICULAR ACTIVITY

|  |  |  | 16 |  |  | 20 MARCH 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
| GASTROENTERITIS | BEST | 71938 | 0.71938 | 0 | 7 | 0.8673 |
| ---------------- | ------ | ------- | -------- | --- | --- | ------- |
| GASTROENTERITIS | WORST | 6246 | 0.06246 | 0 | 3 | 0.2502 |
| HEAD INJURY | BEST | 107 | 0.00107 | 0 | 1 | 0.0327 |
| HEAD INJURY | WORST | 130 | 0.0013 | 0 | 1 | 0.0360 |
| HEADACHE (CO2 | BEST | 380674 | 3.80674 | 0 | 15 | 2.0019 |

INDUCED)

| HEADACHE (CO2 | WORST | 9727 | 0.09727 | 0 | 3 | 0.3130 |
| -------------- | ------ | ----- | -------- | --- | --- | ------- |

INDUCED)

| HEADACHE (LATE) | BEST | 944990 | 9.4499 | 0 | 26 | 3.1413 |
| ---------------- | ------ | ------- | -------- | --- | --- | ------- |
| HEADACHE (LATE) | WORST | 9500 | 0.095 | 0 | 3 | 0.3103 |
| HEADACHE (SPACE | BEST | 132246 | 1.32246 | 0 | 4 | 0.9393 |

ADAPTATION)

| HEADACHE (SPACE | WORST | 8471 | 0.08471 | 0 | 3 | 0.2881 |
| ---------------- | ------ | ----- | -------- | --- | --- | ------- |

ADAPTATION)

| HEARING LOSS | BEST | 65325 | 0.65325 | 0 | 7 | 0.8301 |
| -------------- | ------ | ------ | -------- | --- | --- | ------- |
| HEARING LOSS | WORST | 39691 | 0.39691 | 0 | 5 | 0.6420 |
| HEMORRHOIDS | BEST | 38751 | 0.38751 | 0 | 5 | 0.6399 |
| HEMORRHOIDS | WORST | 172 | 0.00172 | 0 | 2 | 0.0417 |
| HERPES ZOSTER | BEST | 16604 | 0.16604 | 0 | 5 | 0.4182 |

REACTIVATION (SHINGLES)

| HERPES ZOSTER | WORST | 2675 | 0.02675 | 0 | 2 | 0.1642 |
| -------------- | ------ | ----- | -------- | --- | --- | ------- |

REACTIVATION (SHINGLES)

| HIP SPRAIN/STRAIN | BEST | 79293 | 0.79293 | 0 | 9 | 0.9156 |
| ------------------- | ------ | ------ | -------- | --- | --- | ------- |
| HIP SPRAIN/STRAIN | WORST | 1578 | 0.01578 | 0 | 2 | 0.1253 |
| HIP/PROXIMAL FEMUR | BEST | 6 | 0.00006 | 0 | 1 | 0.0077 |

FRACTURE

| HIP/PROXIMAL FEMUR | WORST | 140 | 0.0014 | 0 | 1 | 0.0374 |
| ------------------- | ------ | ---- | ------- | --- | --- | ------- |

FRACTURE

| HYPERTENSION | BEST | 2960 | 0.0296 | 0 | 2 | 0.1723 |
| ------------- | ------ | ------- | -------- | --- | --- | ------- |
| HYPERTENSION | WORST | 427 | 0.00427 | 0 | 2 | 0.0654 |
| INDIGESTION | BEST | 108366 | 1.08366 | 0 | 10 | 1.0591 |
|  | WORST | 8293 | 0.08293 | 0 | 3 | 0.2893 |

INDIGESTION

| INFLUENZA | BEST | 14611 | 0.14611 | 0 | 4 | 0.3901 |
| ---------------- | ------ | ------- | -------- | --- | --- | ------- |
| INFLUENZA | WORST | 4811 | 0.04811 | 0 | 3 | 0.2207 |
| INSOMNIA (SPACE | BEST | 179726 | 1.79726 | 0 | 4 | 0.9941 |

ADAPTATION)

| INSOMNIA (SPACE | WORST | 933 | 0.00933 | 0 | 2 | 0.0962 |
| ---------------- | ------ | ---- | -------- | --- | --- | ------- |

ADAPTATION)

| KNEE SPRAIN/STRAIN | BEST | 138074 | 1.38074 | 0 | 10 | 1.2038 |
| --------------------- | ------ | ------- | -------- | --- | --- | ------- |
| KNEE SPRAIN/STRAIN | WORST | 2787 | 0.02787 | 0 | 2 | 0.1674 |
| LOWER EXTREMITY (LE) | BEST | 25748 | 0.25748 | 0 | 5 | 0.5076 |

### STRESS FRACTURE

| LOWER EXTREMITY (LE) | WORST | 3248 | 0.03248 | 0 | 3 | 0.1807 |
| --------------------- | ------ | ----- | -------- | --- | --- | ------- |

### STRESS FRACTURE

|  |  |  | 17 |  |  | 20 MARCH 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
| LUMBAR SPINE | BEST | 92 | 0.00092 | 0 | 1 | 0.0303 |
| ------------- | ----- | --- | -------- | --- | --- | ------- |

FRACTURE

| LUMBAR SPINE | WORST | 18 | 0.00018 | 0 | 1 | 0.0134 |
| ------------- | ------ | --- | -------- | --- | --- | ------- |

FRACTURE

| MEDICATION | BEST | 38640 | 0.3864 | 0 | 5 | 0.6358 |
| ----------- | ----- | ------ | ------- | --- | --- | ------- |

OVERDOSE/ADVERSE REACTION

| MEDICATION | WORST | 182 | 0.00182 | 0 | 2 | 0.0429 |
| ----------- | ------ | ---- | -------- | --- | --- | ------- |

OVERDOSE/ADVERSE REACTION

| MOUTH ULCER | BEST | 166459 | 1.66459 | 0 | 10 | 1.3211 |
| ----------------- | ------ | ------- | -------- | --- | --- | ------- |
| MOUTH ULCER | WORST | 8655 | 0.08655 | 0 | 3 | 0.2948 |
| NASAL CONGESTION | BEST | 232836 | 2.32836 | 0 | 4 | 0.9826 |

(SPACE ADAPTATION)

| NASAL CONGESTION | WORST | 1196 | 0.01196 | 0 | 2 | 0.1090 |
| ----------------- | ------ | ----- | -------- | --- | --- | ------- |

(SPACE ADAPTATION)

| NECK SPRAIN/STRAIN | BEST | 178463 | 1.78463 | 0 | 11 | 1.3619 |
| ------------------- | ------ | ------- | -------- | --- | --- | ------- |
| NECK SPRAIN/STRAIN | WORST | 3561 | 0.03561 | 0 | 2 | 0.1889 |
| NEPHROLITHIASIS | BEST | 1233 | 0.01233 | 0 | 2 | 0.1106 |
| NEPHROLITHIASIS | WORST | 816 | 0.00816 | 0 | 2 | 0.0901 |
| NEUROGENIC SHOCK | BEST | 1 | 0.00001 | 0 | 1 | 0.0032 |
| NEUROGENIC SHOCK | WORST | 2 | 0.00002 | 0 | 1 | 0.0045 |
| NOSE BLEED (SPACE | BEST | 4163 | 0.04163 | 0 | 2 | 0.2038 |

ADAPTATION)

| NOSE BLEED (SPACE | WORST | 167 | 0.00167 | 0 | 1 | 0.0408 |
| ------------------ | ------ | ---- | -------- | --- | --- | ------- |

ADAPTATION)

| OTITIS EXTERNA | BEST | 57663 | 0.57663 | 0 | 7 | 0.7757 |
| --------------- | ------ | ------ | -------- | --- | --- | ------- |
| OTITIS EXTERNA | WORST | 884 | 0.00884 | 0 | 2 | 0.0942 |
| OTITIS MEDIA | BEST | 53039 | 0.53039 | 0 | 6 | 0.7455 |
| OTITIS MEDIA | WORST | 5908 | 0.05908 | 0 | 3 | 0.2448 |
| PARESTHESIAS | BEST | 0 | 0 | 0 | 0 | 0.0000 |

### SECONDARY TO

EXTRAVEHICULAR ACTIVITY

| PARESTHESIAS | WORST | 0 | 0 | 0 | 0 | 0.0000 |
| ------------- | ------ | --- | --- | --- | --- | ------- |

### SECONDARY TO

EXTRAVEHICULAR ACTIVITY

| PHARYNGITIS | BEST | 204994 | 2.04994 | 0 | 11 | 1.4638 |
| ------------ | ------ | ------- | -------- | --- | --- | ------- |
| PHARYNGITIS | WORST | 9826 | 0.09826 | 0 | 3 | 0.3162 |
| RESPIRATORY | BEST | 635062 | 6.35062 | 0 | 20 | 2.5733 |

INFECTION

| RESPIRATORY | WORST | 9818 | 0.09818 | 0 | 3 | 0.3134 |
| ------------ | ------ | ----- | -------- | --- | --- | ------- |

INFECTION

| RETINAL DETACHMENT | BEST | 23 | 0.00023 | 0 | 1 | 0.0152 |
| ------------------- | ------ | ---- | -------- | --- | --- | -------------- |
| RETINAL DETACHMENT | WORST | 27 | 0.00027 | 0 | 1 | 0.0164 |
| SEIZURES | BEST | 102 | 0.00102 | 0 | 1 | 0.0319 |
|  |  |  | 18 |  |  | 20 MARCH 2017 |
| SEIZURES | WORST | 16 | 0.00016 | 0 | 1 | 0.0126 |
| --------- | ------ | ---- | -------- | --- | --- | ------- |
| SEPSIS | BEST | 853 | 0.00853 | 0 | 2 | 0.0924 |
| SEPSIS | WORST | 406 | 0.00406 | 0 | 2 | 0.0637 |
| SHOULDER | BEST | 0 | 0 | 0 | 0 | 0.0000 |

DISLOCATION

| SHOULDER | WORST | 20 | 0.0002 | 0 | 1 | 0.0141 |
| --------- | ------ | --- | ------- | --- | --- | ------- |

DISLOCATION

| SHOULDER | BEST | 435082 | 4.35082 | 0 | 16 | 2.1323 |
| --------- | ----- | ------- | -------- | --- | --- | ------- |

SPRAIN/STRAIN

| SHOULDER | WORST | 8898 | 0.08898 | 0 | 3 | 0.2997 |
| --------- | ------ | ----- | -------- | --- | --- | ------- |

SPRAIN/STRAIN

| SKIN ABRASION | BEST | 1730017 | 17.30017 | 3 | 39 | 4.2605 |
| -------------- | ------ | -------- | --------- | --- | --- | ------- |
|  | WORST | 100505 | 1.00505 | 0 | 8 | 1.0024 |

### SKIN ABRASION

| SKIN INFECTION | BEST | 243989 | 2.43989 | 0 | 12 | 1.6001 |
| ---------------- | ------ | -------- | --------- | --- | --- | ------- |
| SKIN INFECTION | WORST | 9005 | 0.09005 | 0 | 4 | 0.3007 |
| SKIN LACERATION | BEST | 5018 | 0.05018 | 0 | 4 | 0.2259 |
| SKIN LACERATION | WORST | 14523 | 0.14523 | 0 | 4 | 0.3890 |
| SKIN RASH | BEST | 1824704 | 18.24704 | 3 | 38 | 4.3689 |
| SKIN RASH | WORST | 9029 | 0.09029 | 0 | 3 | 0.3011 |
| SLEEP DISORDER | BEST | 2579476 | 25.79476 | 7 | 52 | 5.2069 |
|  | WORST | 13072 | 0.13072 | 0 | 4 | 0.3623 |

### SLEEP DISORDER

| SMALL BOWEL | BEST | 565 | 0.00565 | 0 | 2 | 0.0752 |
| ------------ | ----- | ---- | -------- | --- | --- | ------- |

OBSTRUCTION

| SMALL BOWEL | WORST | 110 | 0.0011 | 0 | 1 | 0.0331 |
| ------------ | ------ | ---- | ------- | --- | --- | ------- |

OBSTRUCTION

| SMOKE INHALATION | BEST | 8192 | 0.08192 | 0 | 3 | 0.2862 |
| ----------------- | ------ | ------- | -------- | --- | --- | ------- |
| SMOKE INHALATION | WORST | 1286 | 0.01286 | 0 | 2 | 0.1133 |
| SPACE MOTION | BEST | 247285 | 2.47285 | 0 | 4 | 0.9742 |

SICKNESS (SPACE ADAPTATION)

| SPACE MOTION | WORST | 43909 | 0.43909 | 0 | 4 | 0.6259 |
| ------------- | ------ | ------ | -------- | --- | --- | ------- |

SICKNESS (SPACE ADAPTATION)

| STROKE | BEST | 291 | 0.00291 | 0 | 1 | 0.0539 |
| ------- | ----- | ---- | -------- | --- | --- | ------- |

(CEREBROVASCULAR ACCIDENT)

| STROKE | WORST | 159 | 0.00159 | 0 | 1 | 0.0398 |
| ------- | ------ | ---- | -------- | --- | --- | ------- |

(CEREBROVASCULAR ACCIDENT)

| SUDDEN CARDIAC | BEST | 1 | 0.00001 | 0 | 1 | 0.0032 |
| --------------- | ----- | --- | -------- | --- | --- | ------- |

ARREST

| SUDDEN CARDIAC | WORST | 15 | 0.00015 | 0 | 1 | 0.0122 |
| --------------- | ------ | --- | -------- | --- | --- | ------- |

ARREST

| TOXIC EXPOSURE | BEST | 0 | 0 | 0 | 0 | 0.0000 |
| --------------- | ----- | --- | --- | --- | --- | ------- |

(AMMONIA)

| TOXIC EXPOSURE | WORST | 68 | 0.00068 | 0 | 1 | 0.0261 |
| --------------- | ------ | --- | -------- | --- | --- | ------- |

(AMMONIA)

|  |  |  | 19 |  |  | 20 MARCH 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
| TRAUMATIC | BEST | 217 | 0.00217 | 0 | 2 | 0.0467 |
| ---------- | ----- | ---- | -------- | --- | --- | ------- |

### HYPOVOLEMIC SHOCK

| TRAUMATIC | WORST | 150 | 0.0015 | 0 | 1 | 0.0387 |
| ---------- | ------ | ---- | ------- | --- | --- | ------- |

### HYPOVOLEMIC SHOCK

| URINARY | BEST | 11793 | 0.11793 | 0 | 2 | 0.3332 |
| -------- | ----- | ------ | -------- | --- | --- | ------- |

INCONTINENCE (SPACE ADAPTATION)

| URINARY | WORST | 1077 | 0.01077 | 0 | 2 | 0.1035 |
| -------- | ------ | ----- | -------- | --- | --- | ------- |

INCONTINENCE (SPACE ADAPTATION)

| URINARY RETENTION | BEST | 12616 | 0.12616 | 0 | 3 | 0.3462 |
| ------------------ | ----- | ------ | -------- | --- | --- | ------- |

(SPACE ADAPTATION)

| URINARY RETENTION | WORST | 2194 | 0.02194 | 0 | 2 | 0.1472 |
| ------------------ | ------ | ----- | -------- | --- | --- | ------- |

(SPACE ADAPTATION)

| URINARY TRACT | BEST | 384651 | 3.84651 | 0 | 18 | 2.2368 |
| -------------- | ----- | ------- | -------- | --- | --- | ------- |

INFECTION

| URINARY TRACT | WORST | 20197 | 0.20197 | 0 | 4 | 0.4615 |
| -------------- | ------ | ------ | -------- | --- | --- | ------- |

INFECTION

| VAGINAL YEAST | BEST | 87560 | 0.8756 | 0 | 7 | 0.9350 |
| -------------- | ----- | ------ | ------- | --- | --- | ------- |

INFECTION

| VAGINAL YEAST | WORST | 15495 | 0.15495 | 0 | 4 | 0.3951 |
| -------------- | ------ | ------ | -------- | --- | --- | ------- |

INFECTION

| VISUAL IMPAIRMENT | BEST | 129550 | 1.2955 | 0 | 4 | 0.9350 |
| ------------------ | ----- | ------- | ------- | --- | --- | ------- |

### AND/OR INCREASED

INTRACRANIAL PRESSURE (VIIP)(SPACE ADAPTATION)

| VISUAL IMPAIRMENT | WORST | 9770 | 0.0977 | 0 | 3 | 0.3086 |
| ------------------ | ------ | ----- | ------- | --- | --- | ------- |

### AND/OR INCREASED

INTRACRANIAL PRESSURE (VIIP)(SPACE ADAPTATION)

| WRIST FRACTURE | BEST | 959 | 0.00959 | 0 | 3 | 0.1010 |
| -------------------- | ------ | ------ | -------- | --- | --- | ------- |
| WRIST FRACTURE | WORST | 237 | 0.00237 | 0 | 1 | 0.0486 |
| WRIST SPRAIN/STRAIN | BEST | 99073 | 0.99073 | 0 | 9 | 1.0210 |
| WRIST SPRAIN/STRAIN | WORST | 1545 | 0.01545 | 0 | 2 | 0.1245 |
## SUMMARY

This service request provides estimates of the TME, CHI, probability of EVAC and LOCL for a 16 month DRM using a MedCap that is baselined to the ISS. Medical conditions secondary to EVA were not included because EVAs were not included in the DRM. The TME is approximately 166, with a CHI of 68.25%. The probability of EVAC was determined to be 0.49 (1 in 2) and the probability of LOCL was determined to be 0.013 (1 in 77) for the 16 month DRM. The IMM is baselined to the ISS environment. Therefore, caution should be used when using the IMM to assess Mars transit medical risk.

|  |  |  | 20 |  |  | 20 MARCH 2017 |
| --- | --- | --- | --- | --- | --- | -------------- |
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

Operations Group. 21 20 MARCH 2017

APPENDIX A – IMM STATUS AT TIME OF SERVICE REQUEST REPORT

Validation status for IMM  IMM V&V Matrix: The following bar chart shows the IMM v3.0 MATLAB status of internal (black bars) and external (gray bars) IMM validation for each IMM element listed.

- Compliance with NASA-  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6); however

Standard-7009 requirements  there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been fully attained.

|  |  | Compliant | Compliance Incomplete |  | Not applicable |  |  |
| --- | --- | ----------- | ------------------------ | --- | ----------------- | --- | --- |
|  |  | 27 |  | 20 | 2 |  |  |
- Current NASA-Standard-  IMM Credibility Matrix: The following table shows the overall IMM v3.0 MATLAB credibility assessment score (CAS), individual factor CAS,

7009 credibility assessment  customer-specified sufficiency thresholds, and weighted scores. Legend depicts CAS score designated range and color assignments from NASA-

| score | Standard-7009. |  |  |  |  |  |  |
| ------ | --------------- | --- | --- | --- | --- | --- | --- |

### Factor    Sufficiency    Factor Score    Weighted    Overall

|  |  |  |  | Thresholds |  | Scores | Score |
| --- | --- | --- | --- | ----------- | --- | ------- | ------ |
|  |  |  | Verification | 4 | 3.7 | 0.28 |  |
| --- | --- | --- | ------------- | ---- | ------ | ------- | --- |
|  |  |  | Validation | 3 | 3 | 0.45 |  |
| --- | --- | ---------------------- | --------------- | ---- | ---- | ------- | ------- |
|  |  |  | Input Pedigree | 3 | 3 | 0.53 |  |
|  |  | Results Uncertainty |  | 3 | 3 | 0.60 | 3.06 |
|  |  |  |  |  |  | 0.45 |  |
| --- | --- | ------------------- | ------------ | ---- | ---- | ------- | --- |
|  |  | Results Robustness |  | 3 | 3 |  |  |
|  |  |  | Use History | 3 | 3 | 0.45 |  |
|  |  | M&S Management |  | 2 | 2 | 0.10 |  |
|  |  | People Qualification |  | 4 | 4 | 0.20 |  |
| --- | --- | ----------------------- | --- | ---- | ---- | ------- | --- |
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Additional verification and | none |  |  |  |  |  |  |
| ---------------------------- | ----- | --- | --- | --- | --- | --- | --- |

validation information applicable to this analysis

| Integrated Medical Evidence | iMED Lockdown ID: (26), created on (2/21/2017) |  |  |  |  |  |  |
| ---------------------------- | ----------------------------------------------- | --- | --- | --- | --- | --- | --- |

Database (iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v3.0 with release 2014a of MATLAB software. MATLAB and all other MathWorks product or version  service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to the | None |  |  |  |  |  |  |
| -------------------------- | ----- | --- | --- | --- | --- | --- | --- |

code for analysis

|  |  |  | 22 |  |  | 20 MARCH 2017 |  |
| --- | --- | --- | --- | --- | --- | -------------- | --- |
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

Angina/Myocardial Infarction Visual Impairment and Increased Intracranial Pressure (VIIIP) (space adaptation) 23 20 MARCH 2017

---

## Source metadata

```yaml
source_filename: "mars-transit-iva.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports"
source_url: "https://drive.google.com/file/d/1vJty3pQw-xc_3uXSs-wlxWJtu5_vSbeT/view"
source_drive_id: "1vJty3pQw-xc_3uXSs-wlxWJtu5_vSbeT"
source_sha256: b0b74d02cf2e026195937b978bb322aeaf50fa88619119b67fad68d90096f042
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 23
ocr_performed: false
```
