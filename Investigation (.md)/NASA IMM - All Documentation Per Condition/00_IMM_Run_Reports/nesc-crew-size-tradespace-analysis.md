# Nesc Crew Size Tradespace Analysis

[View original PDF](https://drive.google.com/file/d/1rjelF69xwnupQ3-4pEGp1TN4oPbfXip-/view) · **15 pages**

**Collection:** NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Executive Summary](#executive-summary)
- [Background](#background)
- [Methods](#methods)
- [Results](#results)
- [Discussion](#discussion)
- [References](#references)
- [Appendix A: IMM Status at Time of Service Request Report](#appendix-a-imm-status-at-time-of-service-request-report)
- [Appendix B: Medical Conditions in iMED by Category (iMED_20170221)](#appendix-b-medical-conditions-in-imed-by-category-imed_20170221)
- [Appendix C: Medical Conditions Excluded or Modified for DRM1 and DRM2](#appendix-c-medical-conditions-excluded-or-modified-for-drm1-and-drm2)

---

IMM Service Request Report – NESC Assessment S-20220624-447

## Executive Summary

The objective of this IMM support request is to quantify medical risk for NESC. The runs will simulate various crew sizes using an ISS medical kit over a 9-month mission. The summary of the main simulation metrics are shown below. Summary statistics for QAMTL for medical conditions for each DRM are also provided in the document.

DRM 1: 9-month mission with 4 crew  TME  MedCap – 79.919  Fully Treated – 79.996  Fully Untreated – 74.388  CHI  MedCap – 93.806%  Fully Treated – 94.049%  Fully Untreated – 53.945%  Probability of EVAC  MedCap – 0.0443%  Fully Treated – 0.0324%  Fully Untreated – 0.485%  Probability of LOCL  MedCap – 0.005%  Fully Treated – 0.005%  Fully Untreated – 0.02%  DRM 2: 9-month mission with 12 crew  TME  MedCap – 239.156  Fully Treated – 239.927  Fully Untreated – 223.018  CHI  MedCap – 91.595%  Fully Treated – 94.042%  Fully Untreated – 53.919% 1 18 AUGUST 2022

IMM Service Request Report – NESC Assessment S-20220624-447  Probability of EVAC  MedCap – 0.209%  Fully Treated – 0.092%  Fully Untreated – 0.864%  Probability of LOCL  MedCap – 0.015%  Fully Treated – 0.015%  Fully Untreated – 0.057

## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are average number of total medical events (TME), crew health index (CHI), need for evacuation (EVAC) and loss of crew life (LOCL).

The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profile shown in Table 1 and Table 2. The outcomes of certain IMM medical conditions are influenced by pre-existing medical history including: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery.

Pre-existing conditions, as defined here, are consistent with historical U.S. crew data. 2 18 AUGUST 2022

IMM Service Request Report – NESC Assessment  S-20220624-447

Table 1: DRM 1 crew profile

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |

### Prior Abdominal

|  | Sex | Crowns | EVA | CAC | Contacts |  |
| --- | ---- | ------- | ---- | ---- | --------- | --- |

Surgery

| Crew 1 | Male | Yes | 0 | None | No | No |
| ------- | ------- | ---- | --- | --------- | ---- | ---- |
| Crew 2 | Male | No | 0 | Positive | No | No |
| Crew 3 | Female | No | 0 | None | Yes | No |
| Crew 4 | Female | No | 0 | None | No | Yes |
Table 2: DRM 2 crew profile

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |

### Prior Abdominal

|  | Sex | Crowns | EVA | CAC | Contacts |  |
| --- | ---- | ------- | ---- | ---- | --------- | --- |

Surgery

| Crew 1 | Male | Yes | 0 | None | No | No |
| -------- | ------- | ---- | --- | --------- | ---- | ---- |
| Crew 2 | Male | No | 0 | Positive | No | No |
| Crew 3 | Female | No | 0 | None | Yes | No |
| Crew 4 | Female | No | 0 | None | No | Yes |
| Crew 5 | Male | Yes | 0 | None | No | No |
| Crew 6 | Male | No | 0 | Positive | No | No |
| Crew 7 | Female | No | 0 | None | Yes | No |
| Crew 8 | Female | No | 0 | None | No | Yes |
| Crew 9 | Male | Yes | 0 | None | No | No |
| Crew 10 | Male | No | 0 | Positive | No | No |
| Crew 11 | Female | No | 0 | None | Yes | No |
| Crew 12 | Female | No | 0 | None | No | Yes |
### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix B.

However, to better approximate the mission simulation, the set of conditions was modified for this request as described in Appendix C. The incidence of IMM medical events occurring during

|  |  |  |  | 3 |  | 18 AUGUST 2022 |
| --- | --- | --- | --- | --- | --- | --------------- |
IMM Service Request Report – NESC Assessment S-20220624-447 simulated missions are based on historical mission and cohort data contained within the Integrated Medical Evidence Database (iMED). For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. Inflight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS.

Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all- untreated (no Medkit) and baseline MedCap (one ISS Medkit without resupply). For exploration missions, the MedCap state should most closely resemble a real-world deep space mission where resupply is not possible but where utilization of partial and alternative treatment can occur as resources are depleted.

### Main Outcomes

The IMM primary medical outcomes include the number of total medical events (TME), crew health index (CHI), probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources. CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, the simulation usually assigns each crew 4 18 AUGUST 2022

IMM Service Request Report – NESC Assessment S-20220624-447 member only one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model. Catastrophic vehicle failures such as the Challenger and Columbia accidents, and MMOD (micrometeorite and orbital debris) are not considered as possible causes of EVAC and LOCL.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources. If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap (no resupply) scenario. The assumption in the MedCap scenario is that as the resources are utilized for the treatment of conditions during the simulation, the quantities of consumable decreases and cannot be replenished. Therefore, consumable resources may become depleted.

Events that require a “depleted” resource is considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If none of the resources are available to treat the event, the event is considered "untreated." The initial quantities for medical resources are baselined to one fully stocked ISS medical kit (MedCap). Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated scenario and a 0-100% chance of going to EVAC in the best-case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC.

### Modeling Approach

One hundred thousand (100,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria.

Convergence criteria are met when there is less than or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 2 - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport. IMM outcomes were determined for the DRMs using the new optimized MedCap scenario where all conditions are treated, partially treated or untreated based on the available resources of the optimized kit MedCap without resupply. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, TME, CHI, EVAC and LOCL results are presented. Features, assumptions and limitations pertinent to this report are 5 18 AUGUST 2022

IMM Service Request Report – NESC Assessment S-20220624-447 described in a separate section below.

The IMM is baselined to ISS. To better approximate the medical risk for the NESC assessment, the set of conditions listed in Appendix C were removed or modified for this request. All condition incidences and outcomes are consistent with iMED lockdown 78 Features, Assumptions and Limitations of IMM Version 4.1 [3]

1. All non-space adaption (SA) and non-extravehicular activity (EVA) related conditions have a

uniform likelihood of occurring throughout the mission duration. With the exception of VIIP, Space Adaptation Syndrome conditions occur in the first 5 days of the mission, with a peak occurrence at 48 hours.

2. Individuals cannot get the same condition for which they are currently being treated (i.e. during

Clinical Phase (CP) I and II).

3. EVAC and LOCL are generated for each medical event, and then the timing of the EVAC or LOCL

is generated according to a specified distribution.

4. Individuals are no longer at risk for further conditions once their status changes to either EVAC or

LOCL. From the start time of the EVAC or LOCL, the functional impairment of the crew member is assumed to be 100%.

5. When the status of a crew member changes to EVAC, only one crew member is evacuated.

6. The IMM assumes that, per crew member, the first condition requiring a specific therapy utilizes

all resources required for treating that condition before a second condition has access to those resources.

7. Most medical conditions, with exceptions including acute radiation syndrome (triggered by Solar

Particle Events) and EVA-linked conditions (triggered by EVA events), occur independently of the occurrence of mission events and other medical conditions. Currently there is no correlation or association within or between crew members for most medical conditions.

8. The model assumes another crew member is available to act as caregiver but does not track the

time impact of providing this care.

9. Medical procedures are accurately followed and successful; no mistakes occur in executing

medical procedures.

10. Crew medical skill level and preflight/inflight training is not modeled.

11. All diagnoses are 100% accurate.

12. All pharmaceuticals maintain maximum efficacy.

13. All medical events receive the appropriate treatment.

14. All medical events respond to the treatment as expected terrestrially.

15. All medical equipment is 100% reliable.

16. For each of the medical conditions specified in iMED, all crew members with the same

6 18 AUGUST 2022

IMM Service Request Report – NESC Assessment S-20220624-447 characteristics (sex, presence of CAC, crowns, contacts, history of abdominal surgery) have the same likelihood distribution of experiencing the condition.

17. All crew members are assumed to have all intrinsic body parts intact (i.e. appendix, gall bladder,

and uterus or prostate, etc.).

18. IMM assumes ISS power, potable water and oxygen resources are always available in unlimited

supply.

19. No Russian medical capabilities aboard the ISS are available to US crew members in this model.

20. Medical capabilities do not include the use of personal crew carry-on items contained in the

Individual Medical Accessories Kit, (IMAK).

21. If a crew member is undergoing treatment for concurrent medical conditions requiring the same

consumable resource, the crew member will only utilize resources at the level required by the condition that requires the most resources.

22. If the primary resource required for treating a medical condition is unavailable, one or more

alternative resources are considered, if appropriate. One example might be using acetaminophen in place of ibuprofen.

23. Total quantities of a consumable medical resource requiring a daily dose will be adjusted if a

dosage schedule runs past the end of the mission.

24. If a solar particle event causes acute radiation sickness in one or more crew members, IMM

assumes the condition begins identically in all affected crew members at the beginning of the solar particle event.

25. The IMM does not decrement non-consumable items and allows all non-consumable items to be

used simultaneously by multiple astronauts (e.g. blood pressure cuff). 7 18 AUGUST 2022

IMM Service Request Report – NESC Assessment  S-20220624-447

## Results

The IMM MedCap results for TME, CHI, EVAC, and LOCL for the simulated DRMs are presented in the tables below. Table 3 shows the average number of total medical events (TME) during the mission across all DRMs. In longer duration DRMs, it is possible that the average TME will be larger for the fully treated timeline than the medical capabilities or fully untreated timeline. This is because as resources become depleted, there is a greater chance for certain events to end the simulation with EVAC or LOCL, thereby reducing the crew size, and resulting in less medical events occurring for the remainder of the simulation trial.  Table 4 shows the average CHI across all the DRMs.  Table 5 shows the average probability of EVAC and LOCL across all the DRMs.  Table 6 and Table 7 show the summary stats for QAMTL per crew per trial.

Table 3: Average Number of Total Medical Events (TME) for the DRMs. As noted in the Results

section, it is not uncommon for the Fully Treated timeline to have a higher average TME than the Fully Untreated timeline for longer duration missions. For longer duration missions, crewmembers have a higher probability of proceeding to EVAC and LOCL, which could lead to less crewmembers and therefore less medical events during a single trial. This results in lower average CHI and higher probability of EVAC and LOCL for the Fully Untreated Timeline.

|  |  |  |  |  |
| ------------- | ---------------- | ------------ | ------- | --------------- |
|  |  | Average TME | 95% CI |  |
| DRM1-4 crew | MedCap | 79.919 | 62 | 98 |
| DRM2-12 crew | MedCap | 239.156 | 208 | 271 |
| DRM1-4 crew | Fully Treated | 79.996 | 62 | 98 |
| DRM2-12 crew | Fully Treated | 239.927 | 209 | 271 |
| DRM1-4 crew | Fully Untreated | 74.388 | 50 | 96 |
| DRM2-12 crew | Fully Untreated | 223.018 | 182 | 261 |
|  |  | 8 |  | 18 AUGUST 2022 |
IMM Service Request Report – NESC Assessment  S-20220624-447

Table 4: Average CHI for the DRMs

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | ------------- | --- | -------------- | --- | --- | ------------ | --- | ------ | ------- | ------ | --- | --- | --- |
|  |  |  |  |  |  | Average CHI |  |  | 95% CI |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | DRM1-4 crew |  | MedCap |  |  | 93.81 |  | 79.14 |  | 98.87 |  |  |  |
|  | DRM2-12 crew |  | MedCap |  |  | 91.6 |  | 83.67 |  | 96.16 |  |  |  |
|  | DRM1-4 crew |  | Fully Treated |  |  | 94.05 |  | 79.75 |  | 98.95 |  |  |  |
|  | DRM2-12 crew |  | Fully Treated |  |  | 94.04 |  | 86.62 |  | 97.79 |  |  |  |

Fully

|  | DRM1-4 crew |  |  |  |  | 53.94 |  | 38.21 |  | 66.61 |  |  |  |
| --- | ------------ | --- | --- | --- | --- | ------ | --- | ------ | --- | ------ | --- | --- | --- |

Untreated Fully

|  | DRM2-12 crew |  |  |  |  | 53.92 |  | 45.14 |  | 61.67 |  |  |  |
| --- | ------------- | --- | --- | --- | --- | ------ | --- | ------ | --- | ------ | --- | --- | --- |

Untreated

Table 5: Probability EVAC and LOCL for the DRMs

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | ------------ | ----- | --- | ------- | --- | ------------ | --- | ----- | ------- | --- |
|  |  |  |  |  | EVAC |  |  |  |  |  | LOCL |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  | Probability |  |  | 95% CI |  | Probability |  |  | 95% CI |  |

DRM1-4

|  |  |  | MedCap | 0.0443 |  | 0.0429 |  | 0.0456 | 0.0048 |  | 0.0044 |  | 0.0052 |
| --- | --- | --- | ------- | ------- | --- | ------- | --- | ------- | ------- | --- | ------- | --- | ------- |

crew DRM2-12

|  |  |  | MedCap | 0.209 |  | 0.207 |  | 0.211 | 0.0155 |  | 0.0148 |  | 0.0162 |
| --- | --- | --- | ------- | ------ | --- | ------ | --- | ------ | ------- | --- | ------- | --- | ------- |

crew

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

DRM1-4  Fully Treated  0.0324  0.0313  0.0336  0.0047  0.0043  0.0052 crew DRM2-12

|  |  |  | Fully Treated | 0.092 |  |  | 0.09 | 0.093 | 0.0147 |  | 0.0139 |  | 0.0154 |
| --- | --- | --- | -------------- | ------ | --- | --- | ----- | ------ | ------- | --- | ------- | --- | ------- |

crew

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Fully

|  |  |  |  | 0.4854 |  | 0.4825 |  | 0.4885 | 0.0196 |  | 0.0187 |  | 0.0204 |
| --- | --- | --- | --- | ------- | --- | ------- | --- | ------- | ------- | --- | ------- | --- | ------- |

DRM1-4 Untreated crew

|  | DRM2-12 |  | Fully |  |  |  |  |  |  |  |  |  |  |
| --- | -------- | --- | ---------- | ------ | --- | ------ | --- | ------ | ------- | --- | ------- | --------------- | ------- |
|  |  |  |  | 0.864 |  | 0.862 |  | 0.866 | 0.0573 |  | 0.0559 |  | 0.0588 |
|  | crew |  | Untreated |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  | 9 |  |  |  | 18 AUGUST 2022 |  |
IMM Service Request Report – NESC Assessment  S-20220624-447

Table 6: Summary stats for Quality-Adjusted Mission Time Lost per crew per trial – 4-Crew DRM

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Standard

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | ----- | --- | --------- | ------ | ------- | ---------- | --- | ---------- | --- | ---------- | --- | ------------- | --- | --- |
|  | Crew |  |  | Mean | Median |  |  |  |  |  |  |  |  |  |
|  |  |  | Timeline |  |  | Deviation |  | Min QAMTL |  | Max QAMTL |  | QAMTL 95% CI |  |  |
|  | ID |  |  | QAMTL | QAMTL |  |  |  |  |  |  |  |  |  |

QAMTL

|  | 1 |  |  | 386.81 | 182.88 | 681.75 |  | 7.76 |  | 6470.49 |  | 382.58 |  | 391.03 |
| --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | --- | ------- |
|  | 2 |  |  | 387.51 | 183.38 | 685.39 |  | 5.48 |  | 6471.55 |  | 383.26 |  | 391.76 |
| --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | --- | ------- |
3  Med Cap  412.55  216.76  684.09  6.71  6449.98  408.31  416.79

|  | 4 |  |  | 418.47 | 215.55 | 701.84 |  | 6.31 |  | 6441.65 |  | 414.12 |  | 422.82 |
| --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | --- | ------- |

Overall  401.33  199.76  688.46  5.48  6471.55  399.20  403.47

|  | 1 |  |  | 371.20 | 170.12 | 668.70 |  | 7.76 |  | 6471.37 |  | 367.05 |  | 375.34 |
| --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | --- | ------- |
|  | 2 |  |  | 371.86 | 170.65 | 671.90 |  | 5.48 |  | 6472.89 |  | 367.69 |  | 376.02 |
| --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | --- | ------- |
Fully

|  | 3 |  |  | 396.55 | 205.08 | 669.04 |  | 6.71 |  | 6449.98 |  | 392.40 |  | 400.69 |
| --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | --- | ------- |

Treated

|  | 4 |  |  | 402.88 | 204.42 | 689.55 |  | 6.31 |  | 6441.65 |  | 398.61 |  | 407.15 |
| --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | --- | ------- |

Overall  385.62  187.82  675.00  5.48  6472.89  383.53  387.71

Table 7: Summary stats for Quality-Adjusted Mission Time Lost per crew per trial – 12-Crew DRM

|  |  |  |  |  |  |  | Standard |  |  |  |  |  |  |  |
| --- | -------- | --- | --------- | --- | ------ | ------- | ---------- | --- | ------ | --- | ------ | --- | ------------- | --- |
|  |  |  |  |  | Mean | Median |  |  | Min |  | Max |  |  |  |
|  | Crew ID |  | Timeline |  |  |  | Deviation |  |  |  |  |  | QAMTL 95% CI |  |
|  |  |  |  |  | QAMTL | QAMTL |  |  | QAMTL |  | QAMTL |  |  |  |

QAMTL

|  |  | 1 |  |  | 523.24 | 332.04 | 688.28 |  | 5.60 |  | 6469.22 |  | 518.97 | 527.50 |
| --- | --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | ------- |
|  |  | 2 |  |  | 530.54 | 335.29 | 702.42 |  | 5.00 |  | 6464.36 |  | 526.18 | 534.89 |
| --- | --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | ------- |
|  |  | 3 |  |  | 559.91 | 365.20 | 702.47 |  | 8.75 |  | 6427.40 |  | 555.56 | 564.26 |
| --- | --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | ------- |
|  |  | 4 |  |  | 563.80 | 367.45 | 711.16 |  | 6.22 |  | 6454.63 |  | 559.39 | 568.20 |
| --- | --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | ------- |
|  |  | 5 |  |  | 527.62 | 334.57 | 697.05 |  | 6.97 |  | 6448.67 |  | 523.30 | 531.94 |
| --- | --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | ------- |
6  Med Cap  527.76  335.43  692.23  5.17  6448.62  523.47  532.05

|  |  | 7 |  |  | 564.13 | 366.71 | 709.77 |  | 7.76 |  | 6471.88 |  | 559.73 | 568.53 |
| --- | --- | --- | --- | --- | ------- | ------- | ------- | --- | ----- | --- | -------- | --- | ------- | --------------- |
|  |  | 8 |  |  | 559.72 | 363.78 | 710.96 |  | 3.30 |  | 6464.57 |  | 555.32 | 564.13 |
|  |  | 9 |  |  | 530.23 | 334.37 | 703.45 |  | 5.38 |  | 6474.99 |  | 525.87 | 534.59 |
|  |  | 10 |  |  | 528.25 | 334.47 | 697.63 |  | 6.42 |  | 6459.42 |  | 523.93 | 532.58 |
|  |  | 11 |  |  | 558.13 | 366.76 | 701.13 |  | 9.72 |  | 6470.40 |  | 553.78 | 562.48 |
|  |  |  |  |  |  |  |  | 10 |  |  |  |  |  | 18 AUGUST 2022 |
IMM Service Request Report – NESC Assessment  S-20220624-447

| 12 | 562.14 | 364.53 | 717.74 | 5.99  6458.85 | 557.69 | 566.59 |
| ----- | ------- | ------- | ------- | -------------- | ------- | ------- |

Overall  544.62  349.88  703.10  3.30  6474.99  543.36  545.88

| 1 | 369.33 | 171.43 | 660.77 | 5.60  6469.22 | 365.24 | 373.43 |
| ---- | ------- | ------- | ------- | -------------- | ------- | ------- |
| 2 | 375.79 | 172.43 | 675.37 | 5.00  6464.36 | 371.61 | 379.98 |
| ---- | ------- | ------- | ------- | -------------- | ------- | ------- |
| 3 | 395.97 | 204.53 | 668.50 | 8.75  6427.40 | 391.82 | 400.11 |
| --- | ------- | ------- | ------- | -------------- | ------- | ------- |
| 4 | 402.71 | 205.76 | 682.90 | 6.22  6454.63 | 398.48 | 406.94 |
| --- | ------- | ------- | ------- | -------------- | ------- | ------- |
| 5 | 372.09 | 171.70 | 666.07 | 6.35  6452.80 | 367.96 | 376.22 |
| --- | ------- | ------- | ------- | -------------- | ------- | ------- |
| 6 | 373.12 | 172.69 | 666.50 | 5.17  6448.62 | 368.98 | 377.25 |
| --- | ------- | ------- | ------- | -------------- | ------- | ------- |
Fully

| 7 | 399.39 | 204.33 | 671.99 | 7.76  6471.88 | 395.22 | 403.55 |
| --- | ------- | ------- | ------- | -------------- | ------- | ------- |

Treated

| 8 | 398.91 | 202.82 | 681.73 | 3.30  6464.57 | 394.68 | 403.13 |
| --- | ------- | ------- | ------- | -------------- | ------- | ------- |
| 9 | 376.04 | 171.94 | 676.39 | 5.38  6474.99 | 371.84 | 380.23 |
| 10 | 374.18 | 173.19 | 671.43 | 6.42  6459.42 | 370.02 | 378.35 |
| 11 | 393.60 | 202.23 | 665.14 | 9.72  6470.40 | 389.48 | 397.72 |
| 12 | 401.34 | 203.02 | 689.62 | 5.99  6458.85 | 397.07 | 405.62 |

Overall  386.04  188.42  673.20  3.30  6474.99  384.83  387.24

## Discussion

The model outcomes were as expected based on the mission durations and crew size. The number of total medical events increased as mission duration and crew size increased. CHI decreased slightly when crew size was increased from 4 to 12. This can be explained by resource depletion due to increased demand which will lead to more conditions being partially treated or untreated. QAMTL per crew member increased as crew size increased from 4 to 12.  This can also be explained by resource depletion. There is a slightly increased QAMTL for female crew members vs male. This can be explained by there being more female only medical conditions as well as a higher incidence rate of UTI among female crew members.

|  |  |  | 11 |  | 18 AUGUST 2022 |  |
| --- | --- | --- | --- | --- | --------------- | --- |
IMM Service Request Report – NESC Assessment S-20220624-447

## References

1. Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114. 2011.

Houston, TX, NASA, Johnson Space Center. Ref Type: Report

2. Integrated Medical Model Project. Integrated Medical Model Software Requirements Specification.

IMM-SFTWR-008. 2017. Houston, Texas, KBRwyle Integrated Science, Technology and Engineering. Ref Type: Report

3. Integrated Medical Model Project. Integrated Medical Model version 4 Assumptions and Limitations.

IMM-GEN-300. 2017. Houston, Texas, KBRwyle Integrated Science and Engineering Space Medicine Information Technology. Ref Type: Report

4. NASA-STD-7009: Standard for Models and Simulations (2008). NASA: Washington, DC.

5. ISS Medical Checklist (Med CL), 04 June 2014, NASA Johnson Space Center, Medical Operations

Group

6. ISS PRA Model v.3.2.0. ISS PRA Fire and Ammonia Model Contributions to the Integrated Medical

Model. 2015. Houston, Texas, NASA Johnson Space Center. Ref Type: Report 12 18 AUGUST 2022

IMM Service Request Report – NESC Assessment  S-20220624-447

## Appendix A: IMM Status at Time of Service Request Report

Validation status for IMM  IMM V&V Matrix: The following bar chart shows the IMM v4.1 MATLAB status of IMM validation for each IMM element listed.

- Compliance with NASA-  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6); however there are certain

Standard-7009  requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been fully attained. requirements    Compliant    Compliance Incomplete    Not applicable

|  |  | 36 | 5 | 5 |  |  |
| --- | --- | ----- | ---- | ---- | --- | --- |
- Current NASAStandard-  IMM Credibility Matrix: The following table shows the overall IMM v4.1 MATLAB credibility assessment score (CAS), individual factor CAS, customer-specified

7009 credibility  sufficiency thresholds, and weighted scores. Legend depicts CAS score designated range and color assignments from NASA-Standard-7009.

| assessment score |  |  |  |  |  |  |
| ----------------- | --- | --- | --- | --- | --- | --- |

### Factor  Sufficiency  Factor Score  Weighted  Overall Score

### Thresholds  Scores

|  |  | Verification | 4 | 3.7 | 0.28 |  |
| --- | --- | --------------- | ---- | ------ | ---------- | --- |
|  |  | Validation | 3 | 3 | 0.45 |  |
| --- | --- | ----------------- | ---- | ---- | ---------- | --- |
|  |  | Input Pedigree | 3 | 3 | 0.53 |  |
|  |  | Results Uncertainty | 3 | 3 | 0.60 | 3.06 |
| --- | --- | ---------------------- | ---- | ---- | --------- | ----- |
|  |  | Results Robustness | 3 | 3 | 0.45 |  |
| --- | --- | --------------------- | ---- | ---- | ---------- | --- |
|  |  | Use History | 3 | 3 | 0.45 |  |
| --- | --- | -------------- | ---- | ---- | ---------- | --- |
|  |  | M&S Management | 2 | 2 | 0.10 |  |
| --- | --- | ----------------- | ---- | ---- | ---------- | --- |
|  |  | People Qualification | 4 | 4 | 0.20 |  |
| --- | --- | ----------------------- | ---- | ---- | ---------- | --- |
|  |  |  |  |  |  |  |
| --- | --- | --- | --- | ----- | --- | --- |
| Additional verification and | None |  |  |  |  |  |
| ---------------------------- | ----- | --- | --- | --- | --- | --- |

validation information applicable to this analysis

| Integrated Medical | iMED Lockdown IDs: (78), created on (6/24/2022) |  |  |  |  |  |
| ------------------- | ------------------------------------------------ | --- | --- | --- | --- | --- |

Evidence Database (iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software. MATLAB and all other MathWorks product or service names are

| version | registered trademarks or trademarks of MathWorks, Natick, MA, USA. |  |  |  |  |  |
| -------------------------- | ------------------------------------------------------------------- | --- | --- | --- | --- | --- |
| Modifications made to the | None |  |  |  |  |  |

code for analysis

|  |  |  | 13 |  | 18 AUGUST 2022 |  |
| --- | --- | --- | --- | --- | --------------- | --- |
IMM Service Request Report – NESC Assessment  S-20220624-447

## Appendix B: Medical Conditions in iMED by Category (iMED_20170221)

| ENVIRONMENTAL | MEDICAL ILLNESS (continued) |  |
| ------------------------- | ---------------------------- | --- |
| Acute Radiation Syndrome | Anxiety |  |
| Altitude Sickness | Appendicitis |  |

Barotrauma (ear/sinus block)  Atrial Fibrillation/Atrial Flutter

| Burns secondary to Fire | Back Pain (space adaptation) |  |
| ------------------------ | ----------------------------- | --- |

### Decompression Sickness Secondary to EVA  Behavioral Emergency

### Eye Chemical Burn  Cardiogenic Shock Secondary to Myocardial

infarction Headache (CO2 induced)

### Choking/Obstructed Airway

| Smoke Inhalation | Constipation (space adaptation) |  |
| --------------------------- | -------------------------------- | --- |
| Toxic Exposure: Ammonia | Dental: Exposed Pulp |  |
| INJURY/TRAUMA | Dental Caries |  |
| Abdominal Injury | Dental: Abscess |  |
| Acute Compartment Syndrome | Dental: Crown Loss |  |
| Ankle Sprain/Strain | Dental: Filling Loss |  |
| Back Sprain/Strain | Depression |  |

Diarrhea

### Chest Injury

| Dental: Avulsion (tooth loss) | Eye Corneal Ulcer |  |
| ----------------------------------------- | -------------------------------------- | --- |
| Elbow Dislocation | Eye Infection |  |
| Elbow Sprain/Strain | Gastroenteritis |  |
| Eye Irritation/Abrasion | Headache (Late) |  |
| Eye Penetration (foreign body) | Headache (space adaptation) |  |
| Finger Dislocation | Hearing Loss |  |
| Fingernail Delamination Secondary to EVA | Hemorrhoids |  |
| Head Injury | Herpes Zoster Reactivation (shingles) |  |
| Hip Sprain/Strain | Hypertension |  |
| Hip/Proximal Femur Fracture | Indigestion |  |
| Knee Sprain/Strain | Influenza |  |

Lower Extremity Stress Fracture  Insomnia (space adaptation)

| Lumbar Spine Fracture | Medication Overdose/Adverse Reaction |  |
| ------------------------------ | ------------------------------------- | --- |
| Neck Sprain/Strain | Mouth Ulcer |  |
| Neurogenic Shock | Nasal Congestion (space adaptation) |  |
| Paresthesias Secondary to EVA | Nephrolithiasis |  |
| Shoulder Dislocation | Nose bleed (space adaptation) |  |
| Shoulder Sprain/Strain | Otitis Externa |  |
| Skin Abrasion | Otitis Media |  |
| Skin Laceration | Pharyngitis |  |
| Traumatic Hypovolemic Shock | Respiratory Infection |  |
| Wrist Fracture | Retinal Detachment |  |
| Wrist Sprain/Strain | Seizures |  |
| MEDICAL ILLNESS | Sepsis |  |
| Abdominal Wall Hernia | Skin Infection |  |
| Abnormal Uterine Bleeding | Skin Rash |  |
| Acute Angle-Closure Glaucoma | Sleep Disorder |  |
| Acute Arthritis | Small Bowel Obstruction |  |

Acute Cholecystitis/Biliary Colic  Space Motion Sickness (space adaptation)

| Acute Diverticulitis | Stroke (Cerebrovascular Accident) |  |
| --------------------- | -------------------------------------- | --- |
| Acute Pancreatitis | Sudden Cardiac Arrest |  |
| Acute Prostatitis | Urinary Incontinence (space adaption) |  |
| Acute Sinusitis | Urinary Retention (space adaptation) |  |

Allergic Reaction (mild to moderate)  Urinary Tract Infection

| Anaphylaxis | Vaginal Yeast Infection |  |
| ------------ | ------------------------ | --- |

### Angina/Myocardial Infarction  Visual  Impairment  and  Increased  Intracranial

Pressure (VIIP) (space adaptation)

|  | 14 | 18 AUGUST 2022 |
| --- | --- | --------------- |
IMM Service Request Report – NESC Assessment S-20220624-447

## Appendix C: Medical Conditions Excluded or Modified for DRM1 and DRM2

Space adaptation conditions were removed with the exception of VIIP. The DRM for this request is simulating Mars transit. It is assumed that the transit will occur outside the normal window in which space adaptation conditions typically occur. The following conditions were removed:

- Back Pain (Space Adaptation)

- Constipation (Space Adaptation)

- Headache (Space Adaptation)

- Insomnia (Space Adaptation)

- Nasal Congestion (Space Adaptation)

- Nose Bleed (Space Adaptation)

- Space Motion Sickness (Space Adaptation)

- Urinary Incontinence (Space Adaptation)

- Urinary Retention (Space Adaptation)

15 18 AUGUST 2022

---

## Source metadata

```yaml
source_filename: "nesc-crew-size-tradespace-analysis.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports"
source_url: "https://drive.google.com/file/d/1rjelF69xwnupQ3-4pEGp1TN4oPbfXip-/view"
source_drive_id: "1rjelF69xwnupQ3-4pEGp1TN4oPbfXip-"
source_sha256: 3e91dc7480aee7de9ef1486a63ba61ec9abc1ea1f65c7448a3b5bbc9d04b8bb4
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 15
ocr_performed: false
```
