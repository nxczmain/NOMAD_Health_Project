# ISS – 180 Days 6 Month PRA Update

[View original PDF](https://drive.google.com/file/d/1EHjPv0q_iImvN0tKPtTpJYEMiplnaiwj/view) · **13 pages**

**Collection:** Mission Risk Reports/Lunar Orbit and Surface and Low Earth Orbit

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Executive Summary](#executive-summary)
- [Background](#background)
- [Methods](#methods)
- [Results](#results)
- [Appendix D.](#appendix-d)
- [Appendix A: IMM Status at Time of Service Request Report](#appendix-a-imm-status-at-time-of-service-request-report)
- [Appendix B:  Medical Conditions in iMED by Category (iMED_20151118)](#appendix-b--medical-conditions-in-imed-by-category-imed_20151118)
- [Appendix C: Report References](#appendix-c-report-references)
- [Appendix D: Validation of the IMM Outputs of Evacuation and Loss of Crew Life](#appendix-d-validation-of-the-imm-outputs-of-evacuation-and-loss-of-crew-life)
- [Introduction](#introduction)
- [Summary](#summary)
- [Conclusion](#conclusion)

---

### IMM Service Request Report S-20151123-341RevA

August 4, 2016

- To: John Yasensky, Mission and Program Integration, ISS PRA

- From: The Integrated Medical Model (IMM) Project Team

- Concurrence: Yamil Garcia (Wyle), Project Manager, Integrated Medical Model Project

Erik Antonsen (NASA), Exploration Medical Capabilities (ExMC) Element Scientist Mary Van Baalen, Integrated Medical Model Project Subtask Manager

- Subject: S-20151123-341RevA, Medical Updates to the International Space Station Probability Risk Assessment

(PRA) Model (due to Fire and Ammonia Data Updates) Using the IMM; Revised to include the Addendum – Additional Emergent EVAC Results The Integrated Medical Model (IMM) is a probabilistic risk assessment tool used to aid in the evaluation of in-flight crew health requirements as well as mission impacts due to medical events. Based on our discussions, the IMM can support the International Space Station (ISS) PRA Office with updates to existing estimates of medical risk.

The objectives of this data package are:

1. To provide an understanding of medical risk data used to update the ISS PRA Model including detailed

assessment of evacuation (EVAC) and loss of crew life (LOCL) end states.

2. To provide updated medical risk forecasts to the ISS PRA based on continued development and

improvements of the IMM.

3. To support a continued dialogue between the ISS PRA and IMM teams to ensure that the needs of the ISS

Risk Management Office and ISS PRA Model are met, and also to aid in accurate interpretation of IMM data. This report is a follow-up to a data package provided in 2015 due to updated fire and ammonia data provided by the ISS PRA Fire Model (1). The current report includes a brief discussion on IMM background, methods, and summary results. Appendix A shows a summary of the IMM status at the time of the Service Request Report. Appendix B shows the current 100 medical conditions considered in the IMM. References for the service request package are given in Appendix C. Appendix D discusses the validation of LOCL and EVAC data forecasted by IMM by comparing forecasted data with historical space flight data and appropriate analog ground data.

The assessment of “Medical Updates to the ISS PRA Model Using the IMM” falls within the scope of the IMM (IMM Operations Plan, JSC-66114 (2)). The IMM simulation and analysis described below are appropriate relative to its intended use (2) and IMM Functional Requirements Document, JSC-66110 (3)) within the assumptions and limitations constraints of the model (IMM Technical Description Report (4)) with no violations. Further details regarding the current level of 7009 IMM credibility, IMM verification and validation, IMM details using the MATLAB platform, descriptions of IMM input, and the IMM itself can be found in IMM documentation reports or workbooks, available upon request. IMM results in the attached report are deemed credible for their intended use.

This service report package should be used for informational or decisional purposes other than diagnostic or treatment applications as outlined in the IMM Technical Description Report (4). Please include the service request number (S- 20151123-341RevA) on any presentations or documentation referencing this service request.

The fol lowing document contains data and analyses developed by the NASA Human Research Program Integrated Medical Model (IMM) v3.0, which has undergone rigorous testing and review within the NASA medical community per NASA Procedural Requirement 7150.2 and NASA Standard 7009, but still requires review by the external space flight medical community.

- Outstan ding elements for review include: assessing the applicability of the IMM v3.0 outcomes, the relevance of stated

assumptions, and clearly defining limitations. Given this, it is strongly recommended that care be taken when using the results of the simulation and the output should be weighted appropriately for its level of credibility with respect to informing any decision makingE. Ixf eycouut hivaev eS quumesmtioanrsy r egarding remaining review activities, please contact the IMM team. The scheduled release of IMM V4.0 in FY2015 follows completion of a full internal review against NASA standards as well as the successful external review from the appropriate medical and modeling communities. 1

### IMM Service Request Report S-20151123-341RevA

## Executive Summary

The Integrated Medical Model (IMM) was used to simulate an International Space Station (ISS) mission to provide updated medical risk forecasts to the ISS Probabilistic Risk Assessment (PRA). The IMM forecasted a 5.03% probability of medical evacuation (EVAC) and a 0.46% probability of medical loss of crew life (LOCL) for an ISS mission of six months duration with six crew members. The probability of an emergent medical evacuation was 1.80%. Although these overall values were not markedly different from the prior IMM medical update report to the ISS PRA model (S-20150318-250), the recent ISS PRA updates (1) led to 1) an increase in the contribution to LOCL by Toxic Exposure: Ammonia, and 2) a decrease in contribution to EVAC and LOCL from medical conditions arising from environmental causes.

A comparison of the IMM outputs of EVAC and LOCL to empirical historical space flight data and analog population data provides validation that the IMM outputs are reasonable estimates of the real world system.

## Background

The IMM simulates medical events during space flight missions and estimates the impact of these events on crew health and mission success. The IMM is a stochastic model that uses Monte Carlo methodology to simulate missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile. Next, medical events, mitigations, and outcomes during the space flight mission are randomly generated based on pre-defined values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes are the probabilities of EVAC and LOCL. The IMM is most useful for comparing risks among multiple mission profiles based on probable events, resource availability, and the ability of the crew to diagnose and treat medical conditions. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request. This report uses the same ISS Design Reference Mission (DRM) that was used in the prior IMM medical update report to the ISS PRA model (S-20150318-250); the primary differences in the results reported here are due to the ISS PRA update to the IMM (1).

## Methods

An ISS DRM was simulated using the IMM. The mission is six months in duration with six crew members, one female, five males, three extravehicular activities (EVAs) with two crew members each, and assumes medical resources from the current medical capabilities on the ISS. Of note, availability of ISS medical resources are vital to understanding IMM output because insufficient resources will result in untreated medical conditions. Untreated medical conditions typically have an increased probability of evacuation and loss of crew life. One hundred thousand missions were simulated.

Currently, one hundred medical conditions are included in the model (see Appendix B for conditions by category). The probabilities of medical events occurring during simulated missions are based on historical mission data and cohort data. 2

### IMM Service Request Report S-20151123-341RevA

In-flight mitigations are assumed to follow a specified protocol. Mitigations for each condition are constrained by resource availability. For each condition, a set of medical resources are defined that are used to treat the condition. Medical conditions are not treated unless all essential resources are available for a specified mitigation. The IMM end states include evacuation (EVAC), and loss of crew life (LOCL), as well as crew health index (CHI), which is a relative measure of crew impairment and useful when comparing crew health states for different mission profiles. “EVAC” in the context of IMM should be interpreted to mean an evacuation from the ISS would be considered. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. EVAC is considered emergent if evacuation from ISS would be required within 24 hours of the onset of the medical event. “LOCL” in the context of IMM should be interpreted to mean that the clinical scenario could result in death of the affected crew member. These assumptions are anticipated to result in slightly conservative (high) IMM forecasts of EVAC and LOCL. Ninty-five percent confidence intervals (CI) for EVAC and LOCL were obtained using joint parameter bootstrap resampling of the simulation output using percentiles. Statistical significance was assessed using the 95% confidence interval to test differences between compared outcomes.

For the purposes of the Integrated Medical Model, the terms EVAC and LOCL refer to medical evacuation and crew death, respectively, due to illness or injury. Although environmental factors, such as toxic exposures are included as possible causes of EVAC and LOCL, catastrophic vehicle failures, such as the Challenger and Columbia accidents, and micrometeorite and orbital debris are not considered as possible causes of EVAC and LOCL.

### Key Assumptions and Limitations

1. The IMM does not include a mission timeline – all conditions occur at launch on day one.

2. Medical conditions are independent of each other – a mission could end in more than one

evacuation or loss of crew life being considered for the same crew member.

3. Conditions are treated in order of incidence and crew member count with Space Adaptation

conditions treated first (i.e. crew member one is treated before crew member two for any given condition and all instances of the highest incidence condition is treated before the next highest incidence).

4. When there are insufficient essential medical resources to treat a condition, all available resources

are consumed to reflect a partial treatment, and the condition is considered untreated.

5. The IMM ISS medical capability scenario does not take into account the availability of Russian

medical resources or the ability to resupply depleted medical resources. 3

### IMM Service Request Report S-20151123-341RevA

The fully treated scenario provides a more realistic estimate of EVAC and LOCL probabilities than the baseline scenario of considering only medical capabilities, and eliminates the limitations associated with assumptions 3 through 5.

## Results

IMM simulation results for 100,000 trials of the ISS DRM are displayed in Figure 1. In the fully treated scenario, the probability of evacuation of one or more crew members was 5.03% (1 in 20) and the probability of loss of crew life of one or more crew members was 0.46% (1 in 217). These values were not markedly different from results from the fully treated scenario in the prior medical update report (S- 20150318-250) with 5.08% and 0.49% EVAC and LOCL probability, respectively (Figure 2). The probability of emergent evacuation of one or more crew members was 1.80% (95% confidence interval bounds of 1.71% to 1.88%) in the fully treated scenario (1 in 56). Although emergent EVAC was 1.94% in the fully treated scenario from the prior medical update report (S-20150318-250), the 1.80% decrease reported here did not reach statistical significance with prior 95% confidence interval bounds of 1.85% to 2.02% (S-20150318-250).

Figure 1: Percent of missions with at least one evacuation (EVAC) or loss of crew life (LOCL), by condition

category, and 95% confidence intervals (CI). Data from the fully treated scenario are summarized for 100,000 simulated missions. 6.00% 5.03% 5.00% 3.95% 4.00% EVAC LOCL 3.00% 2.00% 1.00% 0.80% 0.46% 0.26% 0.33% 0.13% 0.07% 0.00%

### All Conditions Illness Injury Environmental

95% CI 95% CI Medical Condition Probability of Lower Upper Probability of Lower Upper

### Category EVAC Bound Bound LOCL Bound Bound

All Conditions 5.03% 4.90% 5.16% 0.46% 0.42% 0.51% Medical Illness 3.95% 3.83% 4.07% 0.26% 0.23% 0.30% Injury/Trauma 0.80% 0.75% 0.85% 0.13% 0.11% 0.16% Environmental 0.33% 0.29% 0.36% 0.07% 0.05% 0.08% 4

| IMM Service Request Report |  |  |  |  |  |  |  |  | S-20151123-341RevA |  |  |
| ---------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | ------------------- | --- | --- |
The probabilities of both EVAC and LOCL decreased in medical conditions due to environmental causes with the recent ISS PRA updates (Figures 1 and 2). Medical illness and injury/trauma categories of medical conditions were not different in either the EVAC or LOCL probabilities in this report compared to the last ISS PRA update (Figures 1 and 2).

Figure 2 (from Figure 1, S-20150318-250): Percent of missions with at least one evacuation (EVAC) or loss of

crew life (LOCL), by condition category, and 95% confidence intervals (CI).  Data from the fully treated scenario are summarized for 100,000 simulated missions.

|  |  |  |  |  |  | 95% CI |  |  |  | 95% CI |  |
| --- | --- | --- | --- | --- | --- | ------- | --- | --- | --- | ------- | --- |

Medical

|  | Condition |  |  |  |  | Lower | Upper | Probability of |  | Lower | Upper |
| --- | ---------- | --- | --- | --- | --- | ------ | ------ | --------------- | --- | ------ | ------ |

### Category  Probability of EVAC  Bound  Bound  LOCL  Bound  Bound

| All Conditions |  |  |  | 5.08% |  | 4.94% | 5.20% | 0.49% |  | 0.45% | 0.53% |
| --------------- | ---------------- | --- | --- | ------ | --- | ------ | ------ | ------ | --- | ------ | ------ |
|  | Medical Illness |  |  | 3.81% |  | 3.69% | 3.92% | 0.25% |  | 0.22% | 0.28% |
|  | Injury/Trauma |  |  | 0.76% |  | 0.71% | 0.81% | 0.14% |  | 0.12% | 0.16% |
|  | Environmental |  |  | 0.56% |  | 0.52% | 0.61% | 0.10% |  | 0.09% | 0.13% |

It is important to note that only one crew member underwent EVAC or LOCL in the majority of simulation trials in which EVAC or LOCL occurred (Figure 3). The greatest percentage of evacuation was due primarily to worst-case scenarios; loss of crew life was due exclusively to worst case scenarios.

Once a condition occurs it will follow either a best or a worst case scenario based on a probability distribution. Worst-case scenarios generally require more resources for treatment and have higher probabilities of ending in evacuation or loss of crew life.

Figure 3: Frequency and percent of EVAC and LOCL events in the fully treated scenario.

|  |  | Frequency |  |  |  |  |  |  | Percent |  |  |
| --- | ------- | --------- | --- | --- | --- | --- | --- | --- | ------- | --- | --- |
|  | 100,000 |  |  |  |  |  | 100 |  |  |  |  |

)%( slairT fo tnecreP

| slairT fo rebmuN | 10,000 |  |  |  |  |  | 80 |  |  |  |  |
| ---------------- | ------ | --- | ----------- | ---- | ---- | --- | --- | --- | ----------- | ---- | ---- |
|  |  |  |  | EVAC | LOCL |  |  |  |  | EVAC | LOCL |
|  | 1,000 |  |  |  |  |  | 60 |  |  |  |  |
|  | 100 |  |  |  |  |  | 40 |  |  |  |  |
|  | 10 |  |  |  |  |  | 20 |  |  |  |  |
|  | 1 |  |  |  |  |  | 0 |  |  |  |  |
|  |  | 0 |  | 1 2 | 3 |  |  | 0 | 1 | 2 | 3 |
|  |  |  | Event Count |  |  |  |  |  | Event Count |  |  |
### EVAC Count  Frequency  Percent  LOCL Count  Frequency  Percent

|  | 0 |  | 94,975 |  | 94.975 |  | 0 |  | 99,537 |  | 99.537 |
| --- | --- | --- | ------- | --- | ------- | --- | --- | --- | ------- | --- | ------- |
|  | 1 |  | 4894 |  | 4.894 |  | 1 |  | 460 |  | 0.460 |

5

### IMM Service Request Report S-20151123-341RevA

2 128 0.128 2 3 0.003 3 3 0.003 3 0 0.000 Medical illnesses were associated with the greatest percentage of evacuations. The most frequent medical illnesses leading to evacuation in the fully treated scenario were visual impairment and increased intracranial pressure (VIIP), dental abscess, nephrolithiasis, sepsis, stroke, atrial fibrillation/atrial flutter, and angina/myocardial infarction. In the injury/trauma category, wrist fracture, and hypovolemic shock were most frequent. For the environmental category, smoke inhalation predominated.

Medical illnesses were associated with the greatest percentage of loss of crew life. The most frequent medical conditions leading to loss of crew life in the fully treated scenario were sepsis, medication overdose, stroke, and appendicitis. For the injury/trauma category, hypovolemic shock, and chest and head injury were the most frequent. In the environmental category, smoke inhalation and toxic exposure: ammonia predominated. These results appear to be reasonable estimates of the probabilities of medical evacuation and medical loss of crew life based on empirical historical space flight data and analog population data as discussed in

## Appendix D.

6

| IMM Service Request Report |  |  |  |  |  |  |  | S-20150318-250RevA |  |  |  |
| --------------------------- | --- | --- | --- | --- | --- | --- | --- | ------------------- | --- | --- | --- |
## Appendix A: IMM Status at Time of Service Request Report

| Validation status for IMM | IMM | V&V | Matrix: | The  following | bar |  |  |  |  |  |  |
| --------------------------- | ------- | ------ | --------- | --------------- | ------- | --- | --- | --- | --- | --- | --- |
|  | chart | shows | the  IMM | v3.0 | MATLAB |  |  |  |  |  |  |
|  | status | of | internal | (black  bars) | and |  |  |  |  |  |  |

external (gray bars) IMM validation for each IMM element listed.

- Compliance with NASA- IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for

Standard-7009 requirements  Models and Simulations (Integrated Medical Model Project); however there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been fully attained.

|  |  |  |  | Compliant | Compliance Incomplete |  |  |  | Not applicable |  |  |
| --- | --- | --- | --- | ---------- | ---------------------- | --- | --- | --- | --------------- | --- | --- |
|  |  |  |  | 27 |  | 20 |  |  |  | 2 |  |

Current NASA-Standard-7009  IMM Credibility Matrix: The following table shows the                Legend

|  | overall | IMM | v3.0 | MATLAB | credibility | assessment |  |  |  |  |  |
| --- | -------- | ---- | ----- | ------- | ------------ | ----------- | --- | --- | --- | --- | --- |

credibility assessment score

|  | score | (CAS), | individual | factor | CAS, | customer- |  |  |  |  |  |
| --- | ------ | ------- | ----------- | ------- | ----- | --------- | --- | --- | --- | --- | --- |

CAS Score > Threshold specified sufficiency thresholds, and weighted scores.

Legend depicts CAS score designated range and color  Threshold > CAS Score > Threshold-0.5 assignments from NASA-Standard-7009.  A review Threshold-0.5 > CAS Score > Threshold-1.0 subfactor weight for bolded factors is 0.3.

|  |  |  |  |  |  |  |  |  | CAS Score < Threshold - 1.0 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --------------------------------------------------- | --- | --------------------------- | --- | ----- |
|  |  |  |  |  |  |  | Overall score indicating sufficiency thresholds met |  |  |  | 3.075 |
|  |  |  |  | Factor |  | Sufficiency |  | Factor Score |  | Weighted | Overall |
| ---------------------------- | ----- | --- | --------------------- | ------- | --- | ------------ | --- | ------------- | --- | --------- | -------- |
|  |  |  |  |  |  | Thresholds |  |  |  | Scores | Score |
|  |  |  | Verification |  |  |  | 4 | 3 |  | 0.225 |  |
|  |  |  | Validation |  |  |  | 3 | 2.3 |  | 0.345 |  |
|  |  |  | Input Pedigree |  |  |  | 3 | 1.6 |  | 0.28 |  |
|  |  |  | Results Uncertainty |  |  |  | 3 | 3 |  | 0.6 | 2.50 |
|  |  |  | Results Robustness |  |  |  | 3 | 3 |  | 0.45 |  |
|  |  |  | Use History |  |  |  | 3 | 2 |  | 0.3 |  |
|  |  |  | M&S Management |  |  |  | 2 | 2 |  | 0.1 |  |
|  |  |  | People Qualification |  |  |  | 4 | 4 |  | 0.2 |  |
| Additional verification and | none |  |  |  |  |  |  |  |  |  |  |

validation information applicable to this analysis

| Integrated Medical Evidence | iMED_20151118 |  |  |  |  |  |  |  |  |  |  |
| ---------------------------- | --------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Database (iMED) code version and date accessed IMM version and code version  Data analysis for this report was generated using IMM v3.0 with release 2014a of MATLAB software.  MATLAB and all other MathWorks product or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to the | None |  |  |  |  |  |  |  |  |  |  |
| -------------------------- | ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

code for analysis

7

| IMM Service Request Report |  |  |  |  | S-20150318-250RevA |
| --------------------------- | --- | --- | --- | --- | ------------------- |
## Appendix B:  Medical Conditions in iMED by Category (iMED_20151118)

| ENVIRONMENTAL |  |  | MEDICAL ILLNESS (continued) |  |  |
| ------------------------- | --- | --- | ---------------------------- | --- | --- |
| Acute Radiation Syndrome |  |  | Anxiety |  |  |
| Altitude Sickness |  |  | Appendicitis |  |  |

Barotrauma (ear/sinus block)  Atrial Fibrillation/Atrial Flutter

| Burns secondary to Fire |  |  | Back Pain (space adaptation) |  |  |
| ------------------------ | --- | --- | ----------------------------- | --- | --- |

### Decompression Sickness Secondary to EVA  Behavioral Emergency

Eye Chemical Burn  Cardiogenic Shock Secondary to Myocardial infarction

| Headache (CO | induced) |  | Choking/Obstructed Airway |  |  |
| ------------ | ---------- | --- | -------------------------- | --- | --- |

2

| Smoke Inhalation |  |  | Constipation (space adaptation) |  |  |
| ----------------------------------------- | --- | --- | -------------------------------------- | --- | --- |
| Toxic Exposure: Ammonia |  |  | Dental: Exposed Pulp |  |  |
| INJURY/TRAUMA |  |  | Dental Caries |  |  |
| Abdominal Injury |  |  | Dental: Abscess |  |  |
| Acute Compartment Syndrome |  |  | Dental: Crown Loss |  |  |
| Ankle Sprain/Strain |  |  | Dental: Filling Loss |  |  |
| Back Sprain/Strain |  |  | Depression |  |  |
| Chest Injury |  |  | Diarrhea |  |  |
| Dental: Avulsion (tooth loss) |  |  | Eye Corneal Ulcer |  |  |
| Elbow Dislocation |  |  | Eye Infection |  |  |
| Elbow Sprain/Strain |  |  | Gastroenteritis |  |  |
| Eye Irritation/Abrasion |  |  | Headache  (Late) |  |  |
| Eye Penetration (foreign body) |  |  | Headache (space adaptation) |  |  |
| Finger Dislocation |  |  | Hearing Loss |  |  |
| Fingernail Delamination Secondary to EVA |  |  | Hemorrhoids |  |  |
| Head Injury |  |  | Herpes Zoster Reactivation (shingles) |  |  |
| Hip Sprain/Strain |  |  | Hypertension |  |  |
| Hip/Proximal Femur Fracture |  |  | Indigestion |  |  |
| Knee Sprain/Strain |  |  | Influenza |  |  |

Lower Extremity Stress Fracture  Insomnia (space adaptation)

| Lumbar Spine Fracture |  |  | Medication Overdose/Adverse Reaction |  |  |
| ------------------------------ | --- | --- | ------------------------------------- | --- | --- |
| Neck Sprain/Strain |  |  | Mouth Ulcer |  |  |
| Neurogenic Shock |  |  | Nasal Congestion (space adaptation) |  |  |
| Paresthesias Secondary to EVA |  |  | Nephrolithiasis |  |  |
| Shoulder Dislocation |  |  | Nose bleed (space adaptation) |  |  |
| Shoulder Sprain/Strain |  |  | Otitis Externa |  |  |
| Skin Abrasion |  |  | Otitis Media |  |  |
| Skin Laceration |  |  | Pharyngitis |  |  |
| Traumatic Hypovolemic Shock |  |  | Respiratory Infection |  |  |
| Wrist Fracture |  |  | Retinal Detachment |  |  |
| Wrist Sprain/Strain |  |  | Seizures |  |  |
| MEDICAL ILLNESS |  |  | Sepsis |  |  |
| Abdominal Wall Hernia |  |  | Skin Infection |  |  |
| Abnormal Uterine Bleeding |  |  | Skin Rash |  |  |
| Acute Angle-Closure Glaucoma |  |  | Sleep Disorder |  |  |
| Acute Arthritis |  |  | Small Bowel Obstruction |  |  |

Acute Cholecystitis/Biliary Colic  Space Motion Sickness (space adaptation)

| Acute Diverticulitis |  |  | Stroke (Cerebrovascular Accident) |  |  |
| --------------------- | --- | --- | -------------------------------------- | --- | --- |
| Acute Pancreatitis |  |  | Sudden Cardiac Arrest |  |  |
| Acute Prostatitis |  |  | Urinary Incontinence (space adaption) |  |  |
| Acute Sinusitis |  |  | Urinary Retention (space adaptation) |  |  |

Allergic Reaction (mild to moderate)  Urinary Tract Infection

| Anaphylaxis |  |  | Vaginal Yeast Infection |  |  |
| ------------ | --- | --- | ------------------------ | --- | --- |

### Angina/Myocardial Infarction  Visual Impairment and Increased Intracranial Pressure

(VIIP) (space adaptation)

8

### IMM Service Request Report S-20150318-250RevA

## Appendix C: Report References

1. ISS PRA Model v3.2.0 Fire and Ammonia Model Contributions to the Integrated Medical Model. 9-25-2015.

- Ref Type: Memo

2. Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114. 2011. Houston, TX,

NASA, Johnson Space Center. Ref Type: Report

3. Integrated Medical Model Project. Integrated Medical Model Functional Requirements Document. JSC-66110.

2011. Houston, Texas, NASA, Johnson Space Center. Ref Type: Report

4. NASA Technical Standard for Models and Simulations (NASA-STD-7009). 1-58. 7-11-2008. Washington

D.C., NASA. Ref Type: Report 9

### IMM Service Request Report S-20150318-250RevA

## Appendix D: Validation of the IMM Outputs of Evacuation and Loss of Crew Life

## Introduction

The IMM outputs of EVAC and LOCL can be compared to empirical historical space flight data and analog population data to provide validation that the IMM outputs are reasonable estimates of the real world system.

### Spaceflight Data

There have been no episodes of medical EVAC or medical LOCL during an ISS mission to date. There have been 3 episodes of medical EVAC in the history of human space flight, all occurring in the Russian space program.

There have been no episodes of medical LOCL in the history of human space flight.

This empirical data can be used to determine if the IMM forecasted probabilities of EVAC and LOCL for ISS are reasonable estimates of the real world system. Using a Poisson probability distribution based on the IMM forecasted probabilities of EVAC and LOCL and 59.8 total ISS person-years of space flight through ISS Expedition 42 (1), the likelihood of no EVAC events is 36.2 percent and the likelihood of one or more EVAC events is 63.8 percent, while the likelihood of no LOCL events is 91.4 percent and the likelihood of one or more LOCL events is 8.6 percent. Using similar logic based on 127.6 total person-years of human space flight through ISS Expedition 42 (1), the likelihood of no EVAC events is 11.8 percent and the likelihood of one or more EVAC events is 88.2 percent, while the likelihood of no LOCL events is 82.1 percent and the likelihood of one or more LOCL events is 17.9 percent. Past space flight medical evacuations may also be useful for estimating the probability of future space flight medical evacuations. During the 67.9 person-years of space flight in the Russian space program through ISS Expedition 42 (1), three cosmonauts have required medical evacuation (2). This results in a medical evacuation rate of 0.044 events per person-year. Considering that the total human space flight time through ISS Expedition 42 is 127.6 person-years, the estimated medical evacuation rate is 0.024 events per person-year. These evacuation rates are similar to the IMM forecasted evacuation rate of 0.017 events per person-year.

The above analysis demonstrates that the IMM forecasted probabilities of EVAC and LOCL are reasonable estimates of the real world system based on empirical data.

### Analog Data

Analog population data can also be used to provide additional validation that the IMM estimates of EVAC and LOCL for ISS missions are reasonable estimates of the real world system.

EVAC The IMM forecasts a medical evacuation rate of 0.017 events per person-year (5.0% for missions of six months duration with a six person crew). A review of the evidence-based literature reveals estimated medical evacuation rates for ISS missions ranging from a low of 0.010 events per person-year to a high of 0.06 events per person-year (2). These evacuation rates are based on analyses of medical emergency rates of the astronaut population both in- flight and terrestrially, as well as medical emergency rates of analog populations. Analyses included studies of general population medical emergency rates, Antarctic McMurdo Station medical evacuation rates, United States submarine medical evacuation rates, Russian space program medical evacuation rates, and Lifetime Surveillance of Astronaut Health (LSAH) rates of serious illness and injury among the astronaut population. 10

### IMM Service Request Report S-20150318-250RevA

The general population medical emergency rate is usually considered to be about 0.06 events per person-year (2).

However, this rate may not be directly applicable to the current ISS program due to the stringent medical screening criteria for ISS astronauts. Antarctic stations are useful analogs to study in preparation for space exploration programs since the general crew health and isolated environment may reflect the conditions faced by astronauts on space flight missions. Similar to space flight missions, Antarctic stations are so remote that they require stand-alone medical care capabilities. In addition, Antarctic populations are medically screened and have been shown to have epidemiological characteristics similar to the astronaut population. Antarctic McMurdo Station medical evacuation rates have been studied retrospectively from 1992 to 1996. Over five summer deployments, each lasting 4 months and with 1,200 individuals, 71 medical evacuations occurred, resulting in an incidence rate of 0.036 events per person-year (3).

United States submarine crews are another useful analog population since they are similar to the astronaut population in terms of general health and medical screening. They also require stand-alone medical care capabilities due to the isolated remote environment in which they operate. United States submarine medical evacuation rates from 1993 to 1996 ranged from 0.023 to 0.028 events per person-year (4).

A retrospective review of LSAH data conducted in 1999 estimated the incidence of illness and injury among astronauts while they were not on active duty. In order to predict the effect of each medical event on an ISS mission, illnesses and injuries were classified according to likelihood, medical treatment required and mission impact if the illness or injury were to occur during space flight (2,5). This analysis provides valuable information regarding the probability of a medical event requiring evacuation from the ISS. After organizing the medical conditions into classes based on severity and likelihood of requiring evacuation, an anticipated medical evacuation incidence of 0.02 events per person-year was determined (2,5). It was assumed that the ISS health maintenance system could treat less severe medical conditions, reducing the probability of a medical evacuation to 0.01 events per person-year (2,5).

Initial medical risk assessments for Space Station Freedom estimated significant medical illness occurrence rates of one to three events per person-year with about 1 percent of these medical events requiring evacuation (6). This results in an estimated medical evacuation rate of 0.01 to 0.03 events per person-year.

The IMM outputs for EVAC indicated that medical illnesses were associated with the greatest percentage of ISS evacuations. This is consistent with the medical evacuations that have occurred in the Russian space program (7).

There have been three medical evacuations in the Russian space program, two due to medical illnesses (urosepsis and cardiac arrhythmia), and one due to smoke inhalation (a combustion event causing intractable headaches).

There have also been three close calls, in which medical evacuations were being considered, but were not required due to improvement of the medical condition. Two of these conditions were medical illnesses (kidney stone and dental abscess), and one was a toxic exposure (ethylene glycol). All of the medical conditions that have either resulted in evacuation or close calls were forecasted by the IMM as probable causes of EVAC. Only one of these three medical evacuations (33%) was emergent (urosepsis). This is consistent with the IMM forecasted emergent evacuation rate of 1.8% (approximately one-third of the total evacuation rate of 5.0%).

LOCL The IMM forecasts a LOCL rate of 0.0015 events per person-year for a six person, six month ISS mission. The IMM forecasted LOCL rates for ISS missions can be compared to general population mortality rates and age- specific mortality rates. The general population mortality rate is 0.0081 deaths per person-year (2011 CDC National Vital Statistics Reports). The age specific mortality rate is 0.0043 for a 48 year old male and 0.0017 for a 11

### IMM Service Request Report S-20150318-250RevA

43 year old female (2011 Social Security Period Life Table). Considering that the current active average astronaut age is approximately 48 for males and 43 for females, and that astronauts are healthier than the general population, the IMM forecasted LOCL rates are consistent with these age-specific mortality rates.

Since the space flight environment is profoundly different from the terrestrial environment, and since the astronaut population is intensively selected and screened for pre-existing illnesses, mortality rates of the general terrestrial population may not be directly applicable to mortality rates for space flight. Therefore analog populations, such as Antarctic station populations and military may be useful in estimating mortality rates for space flight missions. An estimated overall mortality rate of 0.0054 deaths per person-year was determined from an Antarctic Station population of 7,700 between 1904 and 1964 (3). The average all-cause mortality rate for United States military was 0.00052 deaths per person-year for active duty personnel between the peacetime years of 1997 and 2000 (8). U.S. astronaut mortality data may be most useful for estimating mortality rates for astronauts on ISS missions. As of 5/31/15, excluding all occupational accidents (Challenger, Columbia, Apollo 1, and T-38), the astronaut career mortality rate is 0.0014 events per person-year (9). This mortality rate is consistent with the IMM forecasted mortality rate of 0.0015 events per person-year.

## Summary

The EVAC rate forecasted by the IMM for a six month, six crew member ISS mission (0.017 events per person- year) is within the range of the estimated medical evacuation rates based on historical space flight data and analog population data (0.01 to 0.06 events per person-year). In addition, the medical conditions forecasted by the IMM as probable causes of EVAC on ISS missions are consistent with historical space flight medical events that have either resulted in medical evacuations or close calls.

The LOCL rate forecasted by IMM for a six month ISS mission (0.0015 events per person-year in the fully treated scenario) is also within the range of the estimated mortality rates based on historical space flight data and analog population data (0.00052 to 0.0081 events per person-year).

## Conclusion

A comparison of the IMM outputs of EVAC and LOCL to empirical historical space flight data and analog population data provides validation that the IMM outputs are reasonable estimates of the real world system.

### References for Validation

1. www.spacefacts.de (8/4/15).

2. Summers RL, et al. Emergencies in Space. Annals of Emergency Medicine. Volume 46, No. 2: August 2005.

3. Antarctic Science. Edition 8. 1987. D.W.H. Dalton. C.S.M Drake. Cambridge University Press.

4. Human Research Evidence Book 2008. Exploration Medical Capability (ExMC) Element. Evidence Report on:

Inability to Adequately Treat an Ill or Injured Crew member.

5. Principles of Clinical Space Medicine for Space Flight. 2008. Barratt MR, Pool SL.

6. Proceedings of the Space Station Freedom Clinical Experts Seminar. NASA Conference Publication 10069. August

27-28, 1990.

7. Incidents in Human Space Flight. “Having a Bad Day in Space”. Commercial Human Space Flight Workshop.

Annual Scientific Meeting. Aerospace Medical Association. New Orleans, LA. May 2007. Jonathan B. Clark M.D., MPH.

8. Goldberg MS. Death and Injury Rates of U.S. Military Personnel in Iraq. Military Medicine. 175, 4:220, 2010.

9. NASA Lifetime Surveillance of Astronaut Health internal documentation (2015).

12

### IMM Service Request Report S-20150318-250RevA

Addendum – Emergent EVAC Information The following additional information is provided at the request of the ISS Risk Management Office:

- Emergent EVAC = 1.80% (95% CI 1.71%, 1.88%)

- Emergent EVAC

Medical Illness ≈ 66.26% of total emergent EVAC o Environmental ≈ 16.79% of total emergent EVAC o Injury/Trauma ≈ 16.95% of total emergent EVAC o

- >75% of Emergent EVAC

Nephrolithiasis = 24.00% o Sepsis = 12.88% o Smoke Inhalation = 12.82% o Stroke (Cerebrovascular Accident) = 5.61% o Hip/Proximal Femur Fracture = 5.23% o Traumatic Hypovolemic Shock = 4.29% o Medication Overdose/Adverse Reaction = 3.63% o Head Injury = 3.58% o Acute Diverticulitis = 3.47% o Appendicitis = 2.59% o 13

---

## Source metadata

```yaml
source_filename: "iss-\u2013-180-days-6-month-pra-update.pdf"
source_folder: "Mission Risk Reports/Lunar Orbit and Surface and Low Earth Orbit"
source_url: "https://drive.google.com/file/d/1EHjPv0q_iImvN0tKPtTpJYEMiplnaiwj/view"
source_drive_id: "1EHjPv0q_iImvN0tKPtTpJYEMiplnaiwj"
source_sha256: daa828a10c1b466afce4b28eeff4ed3d14c95564a2d534d3a80c0661cd26843f
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
