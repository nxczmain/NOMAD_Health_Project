# Medical Risk Based On Mission Duration

[View original PDF](https://drive.google.com/file/d/1FfmcmifD-47k0-rEgVnqF1BiKDpRsV8g/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Executive Summary](#executive-summary)
- [Background](#background)
- [Methods](#methods)
- [Results](#results)
- [References](#references)
- [Appendix A: IMM Status at Time of Service Request Report](#appendix-a-imm-status-at-time-of-service-request-report)
- [Appendix B: Medical Conditions in iMED by Category (iMED_20170221)](#appendix-b-medical-conditions-in-imed-by-category-imed_20170221)

---

IMM Service Request Report – ExMC Risk Story S-20180531-405

## Executive Summary

This request utilized 3 different crew profiles for 7 DRMs. The 14 day DRM crew profile has 7 crewmembers, the 180 day DRM crew profile has 6 crewmembers, and the remaining DRMs have 4 crewmembers and varying mission lengths from 21 to 1195 days. The 14 and 180 day DRMs have scheduled EVAs and the other DRMs do not. The Total Medical Events (TME) shows an upward trend as the length of the mission increases with the exception of the 14 day (7 crew) and 21 day (4 crew) DRMs. When there is not an overlap between the confidence intervals, the CHI tends to decrease as the mission duration increases. The probability of EVAC and LOCL increases as the length of the mission increases. The TME, CHI, EVAC, and LOCL results are presented in tables and figures in the results section.

## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are crew health index (CHI), need for evacuation (EVAC) and loss of crew life (LOCL).

The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profiles shown in Tables 1-3. The outcomes of certain IMM medical conditions are influenced by pre-existing medical history including: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre- existing conditions, as defined here, are consistent with historical U.S. crew data. 1 9 JULY 2018

IMM Service Request Report – ExMC Risk Story  S-20180531-405

Table 1: 14 day DRM crew profile

### Prior Abdominal

|  | Sex | CAC | Crowns | Contacts |  | EVA |
| --- | ---- | ---- | ------- | --------- | --- | ---- |

Surgery

| Crew 1 | Male | No | Yes | No | No | No |
| ------- | ------- | ---- | ---- | ---- | ---- | -------- |
| Crew 2 | Male | Yes | No | No | Yes | Yes (3) |
| Crew 3 | Female | No | No | Yes | No | Yes (3) |
| Crew 4 | Female | No | No | No | Yes | No |
| Crew 5 | Male | No | No | Yes | No | No |
| Crew 6 | Male | No | Yes | No | No | No |
| Crew 7 | Female | No | No | Yes | No | No |

Table 2: 21 day DRM, 42 day DRM, 365 day DRM, 730 day DRM, and 1195 day DRM crew

profile

### Prior Abdominal

|  | Sex | CAC | Crowns | Contacts |  | EVA |
| --- | ---- | ---- | ------- | --------- | --- | ---- |

Surgery

| Crew 1 | Male | No | Yes | No | No | No |
| ------- | ------- | ---- | ---- | ---- | ---- | --- |
| Crew 2 | Male | Yes | No | No | No | No |
| Crew 3 | Female | No | No | Yes | No | No |
| Crew 4 | Female | No | No | No | Yes | No |
Table 3: 180 day DRM crew profile

### Prior Abdominal

|  | Sex | CAC | Crowns | Contacts |  | EVA |
| --- | ---- | ---- | ------- | --------- | --- | ---- |

Surgery

| Crew 1 | Male | No | No | Yes | No | No |
| ------- | ------- | ---- | ---- | ---- | ---- | -------- |
| Crew 2 | Male | Yes | No | No | No | Yes (3) |
| Crew 3 | Female | No | No | Yes | No | Yes (3) |
| Crew 4 | Female | No | Yes | No | Yes | No |
| Crew 5 | Male | No | No | Yes | No | No |
| Crew 6 | Male | No | Yes | No | No | No |
|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | ------------ |
|  |  |  |  | 2 |  | 9 JULY 2018 |
IMM Service Request Report – ExMC Risk Story S-20180531-405

### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix A. The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data contained within the iMED. For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS (i.e. the ISS medical capabilities (MedCap)).

Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all- untreated (no Medkit) and baseline MedCap (ISS Medkit without resupply). For longer duration missions, the MedCap state should most closely resemble a real world deep space mission where resupply is not possible but where utilization of partial and alternative treatment can occur.

### Main Outcomes

- The IMM primary medical outcomes include: total medical events (TME), crew health index (CHI),

probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources.

CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, crew members are usually only assigned one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC 3 9 JULY 2018

IMM Service Request Report – ExMC Risk Story S-20180531-405 or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources. If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If there are not enough resources available to treat the event, the event is considered "untreated." The initial quantities for medical resources are baselined to a fully stocked ISS medical kit (MedCap). Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated scenario and a 0-100% chance of going to EVAC in the best case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC.

### Modeling Approach

One hundred thousand (100,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria.

Convergence criteria are met when there is less than or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 2 - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport. IMM outcomes were determined for the DRMs using the ISS MedCap scenario where all conditions are treated, partially treated or untreated based on the available resources of the ISS MedCap. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, TME, CHI, EVAC and LOCL results, as well as pertinent influential conditions, are described. IMM version 4.1 has certain features, assumptions and limitations that impact modeled outcomes. IMM 4.1 represents a significant advance over IMM 3.0.

Improvements in IMM 4.1 include inclusion of a timeline, and alternate or partial treatment capability.

Features, assumptions and limitations pertinent to this report are described below.

Features, Assumptions and Limitations of IMM Version 4.1 [3] 4 9 JULY 2018

IMM Service Request Report – ExMC Risk Story S-20180531-405

1. All non-SA and non-extravehicular activity (EVA) related conditions have a uniform likelihood of

occurring throughout the mission duration. Space Adaptation Syndrome conditions occur in the first 5 days of the mission, with a peak occurrence at 48 hours.

2. Individuals cannot get the same condition for which they are currently being treated (i.e. during

Clinical Phase (CP) I and II).

3. EVAC and LOCL are generated for each medical event, and then the timing of the EVAC or LOCL

is generated according to a specified distribution.

4. Individuals are no longer at risk for further conditions once their status changes to either EVAC or

LOCL. From the start time of the EVAC or LOCL, the functional impairment of the crew member is assumed to be 100%.

5. When the status of a crew member changes to EVAC, only one crew member is evacuated.

6. The IMM assumes that, per crew member, the first condition requiring a specific therapy utilizes all

resources required for treating that condition before a second condition has access to those resources.

7. Most medical conditions, with exceptions including acute radiation syndrome and EVA-linked

conditions, occur independently of the occurrence of mission events and other medical conditions.

Currently there is no correlation or association within or between crew members for most medical conditions.

8. The model assumes another crew member is available to act as caregiver but does not track the

time impact of providing this care.

9. Medical procedures are accurately followed and successful; no mistakes occur in executing medical

procedures.

10. Crew medical skill level and preflight/inflight training is not modeled.

11. All diagnoses are 100% accurate.

12. All pharmaceuticals maintain maximum efficacy.

13. All medical events receive the appropriate treatment.

14. All medical events respond to the treatment as expected terrestrially.

15. All medical equipment is 100% reliable.

16. For each of the medical conditions specified in iMED, all crew members with the same

characteristics (sex, presence of CAC, crowns, contacts, history of abdominal surgery) have the same likelihood distribution of experiencing the condition.

17. All crew members are assumed to have all intrinsic body parts intact (i.e. appendix, gall bladder,

and uterus or prostate, etc.).

18. IMM assumes ISS power, potable water and oxygen resources are always available in unlimited

supply.

19. No Russian medical capabilities aboard the ISS are available to US crew members in this model.

20. Medical capabilities do not include the use of personal crew carry-on items contained in the

Individual Medical Accessories Kit, (IMAK).

21. If a crew member is undergoing treatment for concurrent medical conditions requiring the same

5 9 JULY 2018

IMM Service Request Report – ExMC Risk Story  S-20180531-405 consumable resource, the crew member will only utilize resources at the level required by the condition that requires the most resources.

22. If the primary resource required for treating a medical condition is unavailable, one or more

alternative resources are considered, if appropriate.  One example might be using acetaminophen in place of ibuprofen.

23. Total quantities of a consumable medical resource requiring a daily dose will be adjusted if a

dosage schedule runs past the end of the mission.

24. If a solar particle event causes acute radiation sickness in one or more crew members, IMM

assumes the condition begins identically in all affected crew members at the beginning of the solar particle event.

25. The IMM does not decrement non-consumable items and allows all non-consumable items to be

used simultaneously by multiple astronauts (e.g. blood pressure cuff).

## Results

The IMM results for TME, CHI, EVAC, LOCL and influential conditions for the simulated DRMs are presented in the tables  below. Table 4 and figures 1 and 2 show the average number of total medical events (TME) during the mission across all of the DRMs.

Table 4: Average number of total medical events (TME) for the DRMs

|  |  | TME | 95% CI |  |
| --- | ------- | ------ | ------- | --- |
|  | MedCap | 28.97 | 21 | 38 |

14 day 7 crew

|  | Treated | 28.97 | 21 | 38 |
| --- | -------- | ------ | --- | --- |

DRM

|  | Untreated | 28.66 | 21 | 37 |
| --- | ---------- | ------ | --- | --- |
|  | MedCap | 18.18 | 12 | 25 |

21 day 4 crew

|  | Treated | 18.18 | 12 | 25 |
| --- | -------- | ------ | --- | --- |

DRM

|  | Untreated | 17.95 | 11 | 25 |
| --- | ---------- | ------ | --- | --- |
|  | MedCap | 25.47 | 17 | 34 |

42 day 4 crew

|  | Treated | 25.47 | 17 | 34 |
| --- | -------- | ------ | --- | --- |

DRM

|  | Untreated | 24.94 | 17 | 34 |
| --- | ---------- | ------- | --- | ---- |
|  | MedCap | 104.18 | 85 | 124 |

180 day 6 crew

|  | Treated | 104.21 | 85 | 124 |
| --- | -------- | ------- | --- | ---- |

DRM

|  | Untreated | 97.14 | 73 | 120 |
| --- | ---------- | ------- | ---- | ---- |
|  | MedCap | 126.79 | 103 | 150 |

365 day 4 crew

|  | Treated | 126.98 | 103 | 150 |
| --- | -------- | ------- | ---- | ---- |

DRM

|  | Untreated | 109.78 | 69 | 143 |
| --- | ---------- | ------- | ---- | ---- |
|  | MedCap | 237.43 | 190 | 273 |

730 day 4 crew

|  | Treated | 239.62 | 195 | 274 |
| --- | -------- | ------- | ---- | ---- |

DRM

|  | Untreated | 180.36 | 94 | 253 |
| --- | ---------- | ------- | ---- | ---- |
|  | MedCap | 369.95 | 285 | 424 |

1195 day 4 crew

|  | Treated | 381.22 | 301 | 429 |
| --- | -------- | ------- | ---- | ---- |

DRM

|  | Untreated | 244.04 | 106 | 376 |
| --- | ---------- | ------- | ---- | ------------ |
|  |  | 6 |  | 9 JULY 2018 |
IMM Service Request Report – ExMC Risk Story S-20180531-405

Figure 1: Average number of total medical events (TME) for the DRMS

TME 500 450 400 350 300 250 200 150 100 50 0 14 day 7 crew 21 day 4 crew 42 day 4 crew 180 day 6 365 day 4 730 day 4 1195 day 4 DRM DRM DRM crew DRM crew DRM crew DRM crew DRM

### MedCap Treated Untreated

Figure 2: Average number of TME for DRMs by timeline

TME 500 450 400 350 300 250 200 150 100 50 0

### MedCap Treated Untreated

14 day 7 crew DRM 21 day 4 crew DRM 42 day 4 crew DRM 180 day 6 crew DRM 365 day 4 crew DRM 730 day 4 crew DRM 1195 day 4 crew DRM

Table 5 and figures 3 and 4 show the average CHI across all of the DRMs.

Table 5: Average Crew Health Index (CHI) for the DRMs

CHI 95% CI MedCap 96.04 92.51 98.16 14 day 7 crew Treated 96.03 92.40 98.16 DRM Untreated 90.58 78.37 95.81 7 9 JULY 2018

IMM Service Request Report – ExMC Risk Story  S-20180531-405

|  |  |  | MedCap | 96.99 |  | 92.99 | 98.84 |
| --- | --- | --- | ------- | ------ | --- | ------ | ------ |

21 day 4 crew

|  |  |  | Treated | 96.99 |  | 92.95 | 98.84 |
| --- | --- | --- | -------- | ------ | --- | ------ | ------ |

DRM

|  |  |  | Untreated | 90.23 |  | 69.75 | 96.89 |
| --- | --- | --- | ---------- | ------ | --- | ------ | ------ |
|  |  |  | MedCap | 97.36 |  | 92.90 | 98.99 |

42 day 4 crew

|  |  |  | Treated | 97.36 |  | 92.87 | 98.99 |
| --- | --- | --- | -------- | ------ | --- | ------ | ------ |

DRM

|  |  |  | Untreated | 86.13 |  | 65.24 | 94.80 |
| --- | --- | --- | ---------- | ------ | --- | ------ | ------ |
|  |  |  | MedCap | 95.01 |  | 84.43 | 98.49 |

180 day 6 crew

|  |  |  | Treated | 95.05 |  | 84.59 | 98.50 |
| --- | --- | --- | -------- | ------ | --- | ------ | ------ |

DRM

|  |  |  | Untreated | 60.72 |  | 45.02 | 72.46 |
| --- | --- | --- | ---------- | ------ | --- | ------ | ------ |
|  |  |  | MedCap | 93.02 |  | 76.17 | 98.32 |

365 day 4 crew

|  |  |  | Treated | 93.36 |  | 76.69 | 98.43 |
| --- | --- | --- | -------- | ------ | --- | ------ | ------ |

DRM

|  |  |  | Untreated | 41.44 |  | 25.63 | 54.39 |
| --- | --- | --- | ---------- | ------ | --- | ------ | ------ |
|  |  |  | MedCap | 86.00 |  | 68.28 | 94.89 |

730 day 4 crew

|  |  |  | Treated | 90.39 |  | 72.11 | 97.38 |
| --- | --- | --- | -------- | ------ | --- | ------ | ------ |

DRM

|  |  |  | Untreated | 23.78 |  | 14.00 | 32.58 |
| --- | --- | --- | ---------- | ------ | --- | ------ | ------ |
|  |  |  | MedCap | 72.35 |  | 55.04 | 84.16 |

1195 day 4 crew

|  |  |  | Treated | 86.87 |  | 67.72 | 95.75 |
| --- | --- | --- | -------- | ------ | --- | ------ | ------ |

DRM

|  |  |  | Untreated | 14.82 |  | 8.64 | 20.52 |
| --- | --- | --- | ---------- | ------ | --- | ----- | ------ |
Figure 3: Average Crew Health Index (CHI) for the DRMs

CHI (%) 100 90 80 70 60 50 40 30 20 10 0 14 day 7 crew 21 day 4 crew 42 day 4 crew   180 day 6   365 day 4   730 day 4  1195 day 4

|  | DRM | DRM | DRM  crew DRM | crew DRM | crew DRM | crew DRM |  |
| --- | ---- | ---- | ---------------- | ---------- | --------- | ---------- | ------------ |
|  |  |  | MedCap  Treated | Untreated |  |  |  |
|  |  |  |  | 8 |  |  | 9 JULY 2018 |
IMM Service Request Report – ExMC Risk Story S-20180531-405

Figure 4: Average Crew Health Index (CHI) for the DRMs by timeline

CHI 120 100 80 60 40 20 0

### MedCap Treated Untreated

14 day 7 crew DRM 21 day 4 crew DRM 42 day 4 crew DRM 180 day 6 crew DRM 365 day 4 crew DRM 730 day 4 crew DRM 1195 day 4 crew DRM

Table 6 along with figures 5-8 show the probability of EVAC and LOCL across all of the DRMs.

Table 6: Probability of EVAC and LOCL for the DRMs

### EVAC LOCL

Probability 95% CI Probability 95% CI 14 day 7 MedCap 0.0032 0.0029 0.0036 0.0005 0.0003 0.0006 crew Treated 0.0031 0.0028 0.0035 0.0005 0.0004 0.0006 DRM Untreated 0.2044 0.2017 0.2069 0.0022 0.0019 0.0025 21 day 4 MedCap 0.0027 0.0024 0.0030 0.0003 0.0002 0.0005 crew Treated 0.0026 0.0023 0.0029 0.0003 0.0002 0.0005 DRM Untreated 0.1400 0.1379 0.1421 0.0015 0.0013 0.0018 42 day 4 MedCap 0.0109 0.0102 0.0115 0.0007 0.0006 0.0009 crew Treated 0.0106 0.0100 0.0113 0.0007 0.0006 0.0009 DRM Untreated 0.2035 0.2009 0.2059 0.0033 0.0030 0.0037 180 day 6 MedCap 0.0547 0.0532 0.0560 0.0049 0.0045 0.0054 crew Treated 0.0468 0.0454 0.0481 0.0048 0.0044 0.0053 DRM Untreated 0.6469 0.6439 0.6498 0.0194 0.0185 0.0202 365 day 4 MedCap 0.0755 0.0737 0.0771 0.0059 0.0054 0.0063 crew Treated 0.0521 0.0507 0.0535 0.0059 0.0054 0.0063 DRM Untreated 0.7393 0.7365 0.7420 0.0239 0.0229 0.0248 730 day 4 MedCap 0.2121 0.2096 0.2146 0.0126 0.0119 0.0133 crew Treated 0.0951 0.0934 0.0969 0.0124 0.0117 0.0131 DRM Untreated 0.9243 0.9227 0.9259 0.0425 0.0413 0.0439 1195 day MedCap 0.4330 0.4300 0.4358 0.0214 0.0206 0.0224 4 crew Treated 0.1436 0.1415 0.1458 0.0209 0.0200 0.0217 DRM Untreated 0.9840 0.9832 0.9848 0.0571 0.0558 0.0585 9 9 JULY 2018

IMM Service Request Report – ExMC Risk Story S-20180531-405

Figure 5: Probability of EVAC for the DRMs

### Probability of EVAC

1 0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1 0 14 day 7 crew 21 day 4 crew 42 day 4 crew 180 day 6 365 day 4 730 day 4 1195 day 4 DRM DRM DRM crew DRM crew DRM crew DRM crew DRM

### MedCap Treated Untreated

Figure 6: Probability of EVAC for the DRMs by timeline

### Probability of EVAC

1.2 1 0.8 0.6 0.4 0.2 0

### MedCap Treated Untreated

14 day 7 crew DRM 21 day 4 crew DRM 42 day 4 crew DRM 180 day 6 crew DRM 365 day 4 crew DRM 730 day 4 crew DRM 1195 day 4 crew DRM 10 9 JULY 2018

IMM Service Request Report – ExMC Risk Story S-20180531-405

Figure 7: Probability of LOCL for the DRMs

### Probability of LOCL

0.07 0.06 0.05 0.04 0.03 0.02 0.01 0 14 day 7 crew 21 day 4 crew 42 day 4 crew 180 day 6 365 day 4 730 day 4 1195 day 4 DRM DRM DRM crew DRM crew DRM crew DRM crew DRM

### MedCap Treated Untreated

Figure 8: Probability of LOCL for the DRMs by timeline

### Probability of LOCL

0.07 0.06 0.05 0.04 0.03 0.02 0.01 0

### MedCap Treated Untreated

14 day 7 crew DRM 21 day 4 crew DRM 42 day 4 crew DRM 180 day 6 crew DRM 365 day 4 crew DRM 730 day 4 crew DRM 1195 day 4 crew DRM

## References

1. Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114. 2011.

Houston, TX, NASA, Johnson Space Center. Ref Type: Report

2. Integrated Medical Model Project. Integrated Medical Model Software Requirements Specification.

11 9 JULY 2018

IMM Service Request Report – ExMC Risk Story S-20180531-405 IMM-SFTWR-008. 2017. Houston, Texas, KBRwyle IntegratedScience, Technology and Engineering.Ref Type: Report

3. Integrated Medical Model Project. Integrated Medical Model version 4 Assumptions and Limitations.

IMM-GEN-300. 2017. Houston, Texas, KBRwyle Integrated Science and Engineering Space Medicine Information Technology. Ref Type: Report

4. NASA-STD-7009: Standard for Models and Simulations (2008). NASA: Washington, DC.

5. ISS Medical Checklist (Med CL), 04 June 2014, NASA Johnson Space Center, Medical Operations

Group. 12 9 JULY 2018

IMM Service Request Report – ExMC Risk Story  S-20180531-405

## Appendix A: IMM Status at Time of Service Request Report

| Validation status for |  |  |  |  |  |  |  |  |  |
| ---------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

IMM IMM V&V Matrix: The f ollowing bar chart shows the IMM v 4.1 MATLAB status of IMM v alidation f or each IMM element listed.

- IMM Compliance Matrix: The IMM has no waiv ers to any of the requirements in the NASA-Standard-7009 f or Models and Simulations (6);

Compliance with NASA-Standard-7009  howev er there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not y et been

| requirements | f ully attained. |  |  |  |  |  |  |  |  |
| ------------- | ----------------- | ----------- | --- | ---------------------- | --- | ----------------- | --- | --- | --- |
|  |  | Compliant |  | Compliance Incomplete |  | Not applicable |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  | 36 |  | 5 |  | 5 |  |  |
- Current NASA-  IMM Credibility Matrix: The f ollowing table shows the ov erall IMM v 4.1 MATLAB credibility assessment score (CAS), indiv idual f actor CAS,

Standard-7009  customer-specif ied suf ficiency thresholds, and weighted scores.  Legend depicts CAS score designated range and color assignments f rom

| credibility assessment | NASA-Standard-7009. |  |  |  |  |  |  |  |  |
| ----------------------- | -------------------- | --- | --- | --- | --- | --- | --- | --- | --- |

score      Factor    Suf f iciency    Factor    Weighted    Ov erall Score

|  |  |  |  |  | Thresholds | Score | Scores |  |  |
| --- | --- | --- | --- | --- | ----------- | ------ | ------- | --- | --- |
|  |  |  | Verification |  | 4 | 3.7 | 0.28 |  |  |
| --- | --- | --- | -------------------- | --- | ---- | ------ | ---------- | --- | ----- |
|  |  |  | Validation |  | 3 |  | 3    0.45 |  |  |
|  |  |  | Input Pedigree |  | 3 |  | 3  0.53 |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  | Results Uncertainty |  | 3 |  | 3    0.60 |  | 3.06 |
|  |  |  | Results Robustness |  | 3 |  | 3    0.45 |  |  |
|  |  |  | Use History |  | 3 |  | 3    0.45 |  |  |
|  |  |  | M&S Management |  | 2 |  | 2    0.10 |  |  |
| --- | --- | --- | ---------------------- | --- | ---- | --- | ---------- | --- | --- |
|  |  |  | People Qualif ication |  | 4 |  | 4    0.20 |  |  |
|  |  |  |  |  |  |  |  |  |  |
none Additional verification and validation information applicable to this analysis

| Integrated Medical | iMED Lockdown ID: (26), created on (2/21/2017) |  |  |  |  |  |  |  |  |
| ------------------- | ----------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- |

### Evidence Database

(iMED) code version and date accessed Data analy sis f or this report was generated using IMM v 4.1 with release 2016a of MATLAB sof tware. MATLAB and all other MathWorks product IMM version and code version  or serv ice names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to | None |  |  |  |  |  |  |  |  |
| ---------------------- | ----- | --- | --- | --- | --- | --- | --- | --- | --- |

the code for analysis

|  |  |  |  | 13 |  |  |  |  | 9 JULY 2018 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ------------ |
IMM Service Request Report – ExMC Risk Story  S-20180531-405

## Appendix B: Medical Conditions in iMED by Category (iMED_20170221)

| ENVIRONMENTAL |  | MEDICAL ILLNESS (continued) |  |
| ------------------------- | --- | ---------------------------- | --- |
| Acute Radiation Syndrome |  | Anxiety |  |
| Altitude Sickness |  | Appendicitis |  |

Barotrauma (ear/sinus block)  Atrial Fibrillation/Atrial Flutter

| Burns secondary to Fire |  | Back Pain (space adaptation) |  |
| ------------------------ | --- | ----------------------------- | --- |

### Decompression Sickness Secondary to EVA  Behavioral Emergency

### Eye Chemical Burn  Cardiogenic Shock Secondary to Myocardial

infarction

| Headache (CO2 induced) |  | Choking/Obstructed Airway |  |
| ----------------------------------------- | --------- | -------------------------------------- | --- |
| Smoke Inhalation |  | Constipation (space adaptation) |  |
| Toxic Exposure: Ammonia |  | Dental: Exposed Pulp |  |
| INJURY/TRAUMA |  | Dental Caries |  |
| Abdominal Injury |  | Dental: Abscess |  |
| Acute Compartment | Syndrome | Dental: Crown Loss |  |
| Ankle Sprain/Strain |  | Dental: Filling Loss |  |
| Back Sprain/Strain |  | Depression |  |
| Chest Injury |  | Diarrhea |  |
| Dental: Avulsion (tooth loss) |  | Eye Corneal Ulcer |  |
| Elbow Dislocation |  | Eye Infection |  |
| Elbow Sprain/Strain |  | Gastroenteritis |  |
| Eye Irritation/Abrasion |  | Headache  (Late) |  |
| Eye Penetration (foreign body) |  | Headache (space adaptation) |  |
| Finger Dislocation |  | Hearing Loss |  |
| Fingernail Delamination Secondary to EVA |  | Hemorrhoids |  |
| Head Injury |  | Herpes Zoster Reactivation (shingles) |  |
| Hip Sprain/Strain |  | Hypertension |  |
| Hip/Proximal Femur Fracture |  | Indigestion |  |
| Knee Sprain/Strain |  | Influenza |  |

Lower Extremity Stress Fracture  Insomnia (space adaptation)

### Lumbar Spine Fracture  Medication Overdose/Adverse  Reaction

| Neck Sprain/Strain |  | Mouth Ulcer |  |
| ------------------------------ | --- | ------------------------------------ | --- |
| Neurogenic Shock |  | Nasal Congestion (space adaptation) |  |
| Paresthesias Secondary to EVA |  | Nephrolithiasis |  |
| Shoulder Dislocation |  | Nose bleed (space adaptation) |  |
| Shoulder Sprain/Strain |  | Otitis Externa |  |
| Skin Abrasion |  | Otitis Media |  |
| Skin Laceration |  | Pharyngitis |  |
| Traumatic Hypovolemic Shock |  | Respiratory Infection |  |
| Wrist Fracture |  | Retinal Detachment |  |
| Wrist Sprain/Strain |  | Seizures |  |
| MEDICAL ILLNESS |  | Sepsis |  |
| Abdominal Wall Hernia |  | Skin Infection |  |
| Abnormal Uterine Bleeding |  | Skin Rash |  |
| Acute Angle-Closure Glaucoma |  | Sleep Disorder |  |
| Acute Arthritis |  | Small Bowel Obstruction |  |

Acute Cholecystitis/Biliary Colic  Space Motion Sickness (space adaptation)

| Acute Diverticulitis |  | Stroke (Cerebrovascular Accident) |  |
| --------------------- | --- | -------------------------------------- | --- |
| Acute Pancreatitis |  | Sudden Cardiac Arrest |  |
| Acute Prostatitis |  | Urinary Incontinence (space adaption) |  |
| Acute Sinusitis |  | Urinary Retention (space adaptation) |  |

Allergic Reaction (mild to moderate)  Urinary Tract Infection

| Anaphylaxis |  | Vaginal Yeast Infection |  |
| ------------ | --- | ------------------------ | --- |

### Angina/Myocardial Infarction  Visual Impairment and Increased Intracranial

Pressure (VIIP) (space adaptation)

|  |  | 14 | 9 JULY 2018 |
| --- | --- | --- | ------------ |

---

## Source metadata

```yaml
source_filename: "medical-risk-based-on-mission-duration.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports"
source_url: "https://drive.google.com/file/d/1FfmcmifD-47k0-rEgVnqF1BiKDpRsV8g/view"
source_drive_id: "1FfmcmifD-47k0-rEgVnqF1BiKDpRsV8g"
source_sha256: 614f433d7bf861f909cf90a196f95b0207b73c0665c0749487e7a4560b20264e
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
