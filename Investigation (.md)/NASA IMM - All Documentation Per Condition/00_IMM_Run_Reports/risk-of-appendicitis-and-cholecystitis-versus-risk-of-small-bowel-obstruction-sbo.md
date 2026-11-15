# Risk Of Appendicitis And Cholecystitis Versus Risk Of Small Bowel Obstruction Sbo

[View original PDF](https://drive.google.com/file/d/1pyp6W9Dab__RYwIinoTGyvjFYHkaaYXT/view) · **19 pages**

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

IMM Service Request Report – SBO S-20170710-386

## Executive Summary

This request utilized 2 different crew profiles with 4 different iMED lockdowns for a total of four DRMs. The first crew profile was used for the first DRM, and the second crew profile was used for the other DRMs. All the crewmembers in the first profile do not have prior abdominal surgery while all the crewmembers in the second profile do have prior abdominal surgery. All the DRMs have a mission duration of 2.5 years.

Short description of the DRMs

- DRM 1 – no crew history of abdominal surgery, no risk of SBO

- DRM 2 – Appendectomy only, no risk of appendicitis; SBO incidence and best/worst

case adjusted per customer request (SBO = 0.0016 events per person year, with probability of best case and worst case 0.75 and 0.25 respectively)

- DRM 3 – Cholecystectomy only, no risk of cholecystitis; SBO incidence and best/worst

case adjusted per customer request, (SBO = 0.0006 events per person year, with probability of best case and worst case 0.67 and 0.33 respectively)

- DRM 4 – Appendectomy and Cholecystectomy, no risk of appendicitis or cholecystitis;

SBO incidence and best/worst case adjusted per customer request (SBO = 0.0022 events per person year, with probability of best case and worst case 0.67 and 0.33 respectively) For DRM 1, neither appendicitis nor cholecystitis appear in the top 10 influential conditions for EVAC or LOCL for any of the timelines. For DRM 2, SBO appears in the top 10 influential conditions with regards to EVAC in the treated timeline and with regards to LOCL in the untreated timeline. For DRM 3, appendicitis is in the top 10 influential conditions with regards to LOCL in the treated and untreated timelines. For DRM 4, SBO is in the top 10 influential conditions with regards to EVAC and LOCL in the treated timeline, and also with regards to LOCL in the untreated timeline. 1 23 APRIL 2018

| IMM Service Request Report – SBO |  |  |  |  |  | S-20170710-386 |  |
| ----------------------------------- | --- | --- | --- | --- | --- | --------------- | --- |
## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are crew health index (CHI), need for evacuation (EVAC) and loss of crew life (LOCL).

The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profiles shown in Tables 1 and 2. The outcomes of certain IMM medical conditions are influenced by pre-existing medical history including: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre- existing conditions, as defined here, are consistent with historical U.S. crew data. CAC was specified as positive in one male crewmember, and in one female crewmember. The difference between the profiles is the prior abdominal surgery for all the crewmembers.

Table 1: Crew 1 for DRM 1

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |

### Prior Abdominal

|  | Sex | CAC | Crowns | Contacts |  |  | EVA |
| --- | ---- | ---- | ------- | --------- | --- | --- | ---- |

Surgery

| Crew 1 | Male | Yes | No | No | No |  | No |
| ------- | ------- | ---- | ---- | ---- | --- | ---------- | -------------- |
| Crew 2 | Male | No | No | No | No | Yes (231) |  |
| Crew 3 | Male | No | No | Yes | No |  | No |
|  |  |  |  | No | No |  | No |
| Crew 4 | Female | No | No |  |  |  |  |
| Crew 5 | Female | Yes | No | No | No | Yes (231) |  |
| Crew 6 | Female | No | Yes | No | No |  | No |
|  |  |  |  | 2 |  |  | 23 APRIL 2018 |
| IMM Service Request Report – SBO |  |  |  |  |  |  | S-20170710-386 |  |
| ----------------------------------- | --- | --- | --- | --- | --- | --- | --------------- | --- |
Table 2: Crew 2 for DRMs 2 - 4

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

### Prior Abdominal

|  | Sex | CAC | Crowns | Contacts |  |  |  | EVA |
| --- | ---- | ---- | ------- | --------- | --- | --- | --- | ---- |

Surgery

|  |  |  |  |  | No |  |  | No |
| ------- | ------- | ---- | ---- | --- | ---- | ---- | ---------- | --- |
| Crew 1 | Male | Yes | No |  |  | Yes |  |  |
|  |  |  |  |  | No |  | Yes (231) |  |
| Crew 2 | Male | No | No |  |  | Yes |  |  |
| Crew 3 | Male | No | No |  | Yes | Yes |  | No |
|  |  |  |  |  | No | Yes |  | No |
| Crew 4 | Female | No | No |  |  |  |  |  |
|  |  |  |  |  | No | Yes | Yes (231) |  |
| Crew 5 | Female | Yes | No |  |  |  |  |  |
| Crew 6 | Female | No | Yes |  | No | Yes |  | No |
### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix A. The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data contained within the iMED. For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS (i.e. the ISS medical capabilities (MedCap)).

Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all- untreated (no Medkit) and baseline MedCap (ISS Medkit without resupply). For longer duration missions the MedCap state should most closely resemble a real world deep space mission where resupply is not possible but where utilization of partial and alternative treatment can occur.

To accommodate this particular service request, several iMED lockdowns were created to reflect the customer’s request regarding appendicitis, cholecystitis, and SBO. Per the customer request for DRM 2, appendicitis was removed from the lockdown, and the incidence for SBO was modified to be 0.0016 events per person year with probability of best and worst case 0.75 and 0.25 respectively. For DRM 2, cholecystitis was removed from the lockdown, and the incidence for SBO was modified to be 0.0006 events per person year with probability of best and worst case 0.67 and 0.33 respectively. For DRM 4, appendicitis and cholecystitis were removed from the lockdown, and the incidence for SBO was modified to be 0.0022 events per person year with probability of best and worst case 0.67 and 0.33

|  |  |  |  |  | 3 |  |  | 23 APRIL 2018 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------------- |
IMM Service Request Report – SBO S-20170710-386 respectively.

### Main Outcomes

- The IMM primary medical outcomes include: total medical events (TME), crew health index (CHI),

probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources.

CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of t h e following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, crew members are usually only assigned one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources. If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If there are not enough resources available to treat the event, the event is considered "untreated." The initial quantities for medical resources are baselined to a fully 4 23 APRIL 2018

IMM Service Request Report – SBO S-20170710-386 stocked ISS medical kit (MedCap). Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated scenario and a 0-100% chance of going to EVAC in the best case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC.

### Modeling Approach

Simulations were run for a 2.5 year (Mars) mission. One hundred thousand (100,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria. Convergence criteria are met when there is less than or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 2 - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport.

IMM outcomes were determined for the DRMs using the ISS MedCap scenario where all conditions are treated, partially treated or untreated based on the available resources of the ISS MedCap. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, TME, CHI, EVAC and LOCL results, as well as pertinent influential conditions, are described. IMM version 4.1 has certain features, assumptions and limitations that impact modeled outcomes. IMM 4.1 represents a significant advance over IMM 3.0.

Improvements in IMM 4.1 include inclusion of a timeline, and alternate or partial treatment capability.

Features, assumptions and limitations pertinent to this report are described below.

Features, Assumptions and Limitations of IMM Version 4.1 [3]

1. All non-SA and non-extravehicular activity (EVA) related conditions have a uniform likelihood of

occurring throughout the mission duration. Space Adaptation Syndrome conditions occur in the first 5 days of the mission, with a peak occurrence at 48 hours.

2. Individuals cannot get the same condition for which they are currently being treated (i.e. during

Clinical Phase (CP) I and II).

3. EVAC and LOCL are generated for each medical event, and then the timing of the EVAC or LOCL

is generated according to a specified distribution.

4. Individuals are no longer at risk for further conditions once their status changes to either EVAC or

LOCL. From the start time of the EVAC or LOCL, the functional impairment of the crew member is assumed to be 100%.

5. When the status of a crew member changes to EVAC, only one crew member is evacuated.

5 23 APRIL 2018

IMM Service Request Report – SBO S-20170710-386

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

consumable resource, the crew member will only utilize resources at the level required by the condition that requires the most resources.

22. If the primary resource required for treating a medical condition is unavailable, one or more

alternative resources are considered, if appropriate. One example might be using acetaminophen in place of ibuprofen.

23. Total quantities of a consumable medical resource requiring a daily dose will be adjusted if a

dosage schedule runs past the end of the mission.

24. If a solar particle event causes acute radiation sickness in one or more crew members, IMM

assumes the condition begins identically in all affected crew members at the beginning of the solar particle event. 6 23 APRIL 2018

| IMM Service Request Report – SBO |  |  |  |  |  | S-20170710-386 |
| ----------------------------------- | --- | --- | --- | --- | --- | --------------- |

25. The IMM does not decrement non-consumable items and allows all non-consumable items to be

used simultaneously by multiple astronauts (e.g. blood pressure cuff).

## Results

The IMM results for TME, CHI, EVAC, LOCL and influential conditions for the simulated DRMs are presented in the tables below. Table 3 and figure 1 show the average number of total medical events (TME) during the mission across all of the DRMs.

Table 3: TME for the DRMs

|  |  |  |  | TME | 95% CI |  |
| --- | --- | --- | ------- | ------- | ------- | ---- |
|  |  |  | MedCap | 513.77 | 420 | 578 |
|  | DRM 1 |  | Treated | 527.80 | 447 | 583 |
| --- | ------ | ---------- | -------- | ------- | ---- | ---- |
|  |  | Untreated |  | 326.76 | 180 | 477 |
|  |  |  | MedCap | 513.28 | 418 | 577 |
|  | DRM 2 |  | Treated | 527.18 | 443 | 584 |
|  |  | Untreated |  | 326.64 | 180 | 476 |
|  |  |  | MedCap | 513.47 | 419 | 577 |
|  | DRM 3 |  | Treated | 527.40 | 444 | 584 |
|  |  | Untreated |  | 326.85 | 180 | 477 |
|  |  |  | MedCap | 513.10 | 418 | 577 |
|  |  |  | Treated | 527.00 | 443 | 584 |

DRM 4

|  |  | Untreated |  | 326.97 | 180 | 477.5 |
| --- | --- | ---------- | --- | ------- | ---- | ------ |
Figure 1: TME for the DRMS

TME 700

600

500

400

300

200

100

0

|  | DRM 1 |  | DRM 2 | DRM 3 | DRM 4 |  |
| --- | ------ | --- | ---------------- | ---------- | ------ | --- |
|  |  |  | MedCap  Treated | Untreated |  |  |
Table 4 and figure 2 show the average CHI across all of the DRMs. Decline in CHI between the medcap,

treated and untreated timelines for a mission of this length is caused by difference in the treatment of

|  |  |  |  | 7 |  | 23 APRIL 2018 |
| --- | --- | --- | --- | --- | --- | -------------- |
|  | IMM Service Request Report – SBO |  |  |  |  |  |  | S-20170710-386 |
| --- | --------------------------------- | --- | --- | --- | --- | --- | --- | --------------- |

the conditions.

Table 4: CHI for the DRMs

|  |  |  |  |  | CHI |  | 95% CI |  |
| --- | --- | --- | --- | -------- | ------ | ------ | ------- | ------ |
|  |  |  |  | MedCap | 72.77 | 59.20 |  | 82.58 |
|  |  |  |  | Treated | 87.40 | 73.44 |  | 94.52 |

DRM 1

|  |  |  |  | Untreated | 18.19 | 12.17 |  | 23.83 |
| --- | --- | ------ | --- | ---------- | ------ | ------ | --- | ------ |
|  |  |  |  | MedCap | 72.71 | 59.14 |  | 82.59 |
|  |  | DRM 2 |  | Treated | 87.32 | 73.18 |  | 94.52 |
|  |  |  |  | Untreated | 18.15 | 12.12 |  | 23.77 |
|  |  |  |  | MedCap | 72.71 | 59.16 |  | 82.58 |
|  |  | DRM 3 |  | Treated | 87.31 | 73.20 |  | 94.52 |
| --- | --- | ------ | --- | ---------- | ------ | ------ | --- | ------ |
|  |  |  |  | Untreated | 18.15 | 12.10 |  | 23.78 |
|  |  |  |  | MedCap | 72.69 | 59.20 |  | 82.61 |
|  |  | DRM 4 |  | Treated | 87.27 | 73.04 |  | 94.51 |
|  |  |  |  | Untreated | 18.16 | 12.14 |  | 23.79 |
Figure 2: CHI for the DRMs

CHI (%)

100

|  | 90 |  |  |  |  |  |  |  |
| --- | ----- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |

80 70

60

50

40

30

20

10

0

|  |  | DRM 1 |  | DRM 2 | DRM 3 | DRM 4 |  |  |
| --- | --- | ------ | --- | ------ | ------ | ------ | --- | --- |
|  |  |  |  | MedCap  Treated | Untreated |  |  |  |
| --- | --- | --- | --- | ---------------- | ---------- | --- | --- | --- |
Table 5 along with figures 3 and 4 show the probability of EVAC and LOCL across all of the DRMs.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | -------------- |
|  |  |  |  |  | 8 |  |  | 23 APRIL 2018 |
| IMM Service Request Report – SBO |  |  |  |  |  |  |  | S-20170710-386 |  |
| ----------------------------------- | --- | --- | --- | --- | --- | --- | --- | --------------- | --- |

Table 5: EVAC and LOCL for the DRMs

|  |  |  | EVAC |  |  |  | LOCL |  |  |
| --- | -------- | ------------ | ------- | ------- | ------------ | ------- | ------- | ------- | ------- |
|  |  | Probability |  | 95% CI | Probability |  |  | 95% CI |  |
|  |  |  |  |  |  |  |  |  |  |
|  | MedCap | 0.5343 | 0.5314 | 0.5380 |  | 0.0249 | 0.0240 |  | 0.0259 |
|  | Treated | 0.1567 | 0.1544 | 0.1590 |  | 0.0241 | 0.0232 |  | 0.0251 |

DRM 1

|  | Untreated | 0.9983 | 0.9981 | 0.9986 |  | 0.0708 | 0.0692 |  | 0.0724 |
| --- | ---------- | ------- | ------- | ------- | --- | ------- | ------- | --- | ------- |
|  | MedCap | 0.5406 | 0.5374 | 0.5437 |  | 0.0232 | 0.0223 |  | 0.0242 |

DRM 2  Treated  0.1658  0.1637  0.1683  0.0229  0.0221  0.0239

|  | Untreated | 0.9982 | 0.9979 | 0.9984 |  | 0.0682 | 0.0667 |  | 0.0700 |
| --- | ---------- | ------- | ------- | ------- | --- | ------- | ------- | --- | -------- |
|  | MedCap | 0.5368 | 0.5337 | 0.5397 |  | 0.0248 | 0.0239 |  | 0.02573 |
DRM 3  Treated  0.1613  0.1592  0.1637  0.0238  0.0230  0.02483

|  | Untreated | 0.9983 | 0.9980 | 0.9985 |  | 0.0713 | 0.0699 |  | 0.07295 |
| --- | ---------- | ------- | ------- | ------- | --- | ------- | ------- | --- | -------- |
|  | MedCap | 0.5414 | 0.5383 | 0.5447 |  | 0.0234 | 0.0225 |  | 0.0243 |
DRM 4  Treated  0.1707  0.1685  0.1730  0.0226  0.0217  0.0236

|  | Untreated | 0.9981 | 0.9978 | 0.9983 |  | 0.0699 | 0.0686 |  | 0.0716 |
| --- | ---------- | ------- | ------- | ------- | --- | ------- | ------- | --- | ------- |
Figure 3: Probability of EVAC for the DRMs

### Probability of EVAC

1 0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1 0

|  | DRM 1 | DRM 2 |  | DRM 3 |  | DRM 4 |  |  |  |
| --- | ------ | ------- | -------- | ---------- | --- | ------ | --- | --- | --- |
|  |  | MedCap | Treated | Untreated |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | -------------- |
|  |  |  |  | 9 |  |  |  |  | 23 APRIL 2018 |
IMM Service Request Report – SBO S-20170710-386

Figure 4: Probability of LOCL for the DRMs

### Probability of LOCL

0.08 0.07 0.06 0.05 0.04 0.03 0.02 0.01 0 DRM 1 DRM 2 DRM 3 DRM 4

### MedCap Treated Untreated

Recall that there is no risk of SBO in DRM 1, no risk of appendicitis in DRM 2, no risk of cholecystitis in DRM 3, and no risk of appendicitis nor cholecystitis in DRM 4. For DRM 1, neither appendicitis nor cholecystitis appear in the top 10 influential conditions for EVAC or LOCL for any of the timelines. A breakdown of the ranks of appendicitis, cholecystitis and small bowel obstruction for all the DRMs is presented in tables 6-11. The influential conditions lists follow in the proceeding tables. 10 23 APRIL 2018

| IMM Service Request Report – SBO |  |  |  |  |  |  | S-20170710-386 |  |
| ----------------------------------- | --- | --- | --- | --- | --- | --- | --------------- | --- |

Table 6: MedCap EVAC ranks – all DRMs

|  | DRM |  |  |  | MedCap EVAC |  |  |  |
| --- | ---- | --- | ----- | ------------- | ------------ | ---------- | ---------- | --- |
|  |  |  | Rank | Condition |  | Case | Treatment |  |
|  |  |  | 50 | Appendicitis |  | best case | partial |  |
|  |  |  | 57 | Appendicitis |  | worst case | partial |  |
| --- | --- | --- | --- | ------------- | --- | ----------- | -------- | --- |
|  |  |  | 58 | Cholecystitis |  | worst case | treated |  |
| --- | --- | --- | --- | -------------- | --- | ----------- | -------- | --- |
|  | 1 |  | 60 | Appendicitis |  | worst case | treated |  |
| --- | --- | --- | ---- | -------------- | --- | ----------- | -------- | --- |
|  |  |  | 98 | Appendicitis |  | best case | treated |  |
|  |  |  | 108 | Cholecystitis |  | worst case | partial |  |
|  |  |  | 124 | Cholecystitis |  | best case | partial |  |
|  |  |  | 22 | SBO |  | best case | treated |  |
|  |  |  | 37 | SBO |  | worst case | treated |  |
| --- | --- | --- | --- | ---- | --- | ----------- | -------- | --- |
|  |  |  | 48 | SBO |  | best case | partial |  |
| --- | --- | --- | --- | ---- | --- | ---------- | -------- | --- |
|  | 2 |  | 50 | SBO |  | worst case | partial |  |
| --- | --- | --- | ---- | -------------- | --- | ----------- | -------- | --- |
|  |  |  | 58 | Cholecystitis |  | worst case | partial |  |
|  |  |  | 104 | Cholecystitis |  | best case | partial |  |
|  |  |  | 131 | Cholecystitis |  | worst case | treated |  |
|  |  |  | 47 | Appendicitis |  | best case | partial |  |
|  |  |  | 48 | SBO |  | best case | treated |  |
| --- | --- | --- | --- | ---- | --- | ---------- | -------- | --- |
|  |  |  | 50 | SBO |  | worst case | treated |  |
| --- | --- | --- | --- | ------------- | --- | ----------- | -------- | --- |
|  |  |  | 65 | Appendicitis |  | worst case | treated |  |

3

|  |  |  | 69 | SBO |  | worst case | partial |  |
| --- | --- | --- | --- | ------------- | --- | ----------- | -------- | --- |
|  |  |  | 72 | Appendicitis |  | worst case | partial |  |
|  |  |  | 85 | SBO |  | best case | partial |  |
|  |  |  | 92 | Appendicitis |  | best case | treated |  |
|  |  |  | 18 | SBO |  | best case | treated |  |
|  |  |  | 20 | SBO |  | worst case | treated |  |

4

|  |  |  | 28 | SBO |  | worst case | partial |  |
| --- | --- | --- | --- | ---- | --- | ----------- | -------- | -------------- |
|  |  |  | 43 | SBO |  | best case | partial |  |
|  |  |  |  |  | 11 |  |  | 23 APRIL 2018 |
| IMM Service Request Report – SBO |  |  |  |  |  |  |  |  |  | S-20170710-386 |  |
| ----------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --------------- | --- |
Table 7: MedCap LOCL Ranks – all DRMs

|  | DRM |  |  |  |  | MedCap LOCL |  |  |  |  |  |
| --- | ---- | --- | ----- | ------------- | ---------- | ------------ | ----------- | ----- | --- | -------- | ---------- |
|  |  |  | Rank |  | Condition |  |  | Case |  |  | Treatment |
|  |  |  | 11 | Appendicitis |  |  | worst case |  |  | partial |  |
|  | 1 |  | 13 | Appendicitis |  |  | worst case |  |  | treated |  |
| --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | -------- | --- |
|  |  |  | 15 | Appendicitis |  |  | best case |  |  | partial |  |
|  |  |  | 19 | SBO |  |  | worst case |  |  | treated |  |

2

|  |  |  | 20 | SBO |  |  | worst case |  |  | partial |  |
| --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | -------- | --- |
|  |  |  | 11 | Appendicitis |  |  | best case |  |  | partial |  |
|  |  |  | 13 | Appendicitis |  |  | worst case |  |  | partial |  |
| --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | -------- | --- |
|  | 3 |  | 14 | Appendicitis |  |  | worst case |  |  | treated |  |
| --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | -------- | --- |
|  |  |  | 29 | SBO |  |  | worst case |  |  | partial |  |
|  |  |  | 30 | SBO |  |  | worst case |  |  | treated |  |
|  |  |  | 12 | SBO |  |  | worst case |  |  | partial |  |

4

|  |  |  | 18 | SBO |  |  | worst case |  |  | treated |  |
| --- | --- | --- | --- | ---- | --- | --- | ----------- | --- | --- | -------- | --- |
Table 8: DRM 1 Medcap EVAC top 10 Influential Conditions – No risk of SBO

|  |  |  |  |  |  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | --- | ------------------ | --- | --- | --------- | --- | ----------- | --- | ------------- | ----------- |
| Scenario | Treated |  | Medical Condition |  |  | Category |  | Total EVAC |  |  |  |
|  |  |  |  |  |  |  |  |  |  | Contribution | Percent |

BEST PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  20888  28.88  28.88 CASE WORST PARTIAL  URINARY TRACT INFECTION  MEDICAL  6523  9.02  37.89 CASE WORST PARTIAL  BACK SPRAIN/STRAIN  INJURY/TRAUMA  4753  6.57  44.46 CASE BEST PARTIAL  FINGER DISLOCATION  INJURY/TRAUMA  4170  5.76  50.23 CASE WORST PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  3932  5.44  55.66 CASE WORST

|  | PARTIAL | EYE INFECTION |  |  |  | MEDICAL |  | 2304 |  | 3.19 | 58.85 |
| --- | -------- | -------------- | --- | --- | --- | -------- | --- | ----- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL | NEPHROLITHIASIS |  |  |  | MEDICAL |  | 1732 |  | 2.39 | 61.24 |
| --- | -------- | ---------------- | --- | --- | --- | -------- | --- | ----- | --- | ----- | ------ |

CASE WORST PARTIAL  EYE IRRITATION/ABRASION  INJURY/TRAUMA  1550  2.14  63.38 CASE

|  |  | VISUAL IMPAIRMENT AND/OR INCREASED |  |  |  |  |  |  |  |  |  |
| --- | --- | ----------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

WORST TREATED  INTRACRANIAL PRESSURE (VIIP)(SPACE  MEDICAL  1414  1.95  65.34 CASE ADAPTATION)

|  |  |  |  |  |  | 12 |  |  |  |  | 23 APRIL 2018 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | -------------- |
| IMM Service Request Report – SBO |  |  |  |  |  | S-20170710-386 |  |
| --------------------------------- | --- | --- | --- | --- | --- | --------------- | --- |

WORST PARTIAL  NECK SPRAIN/STRAIN  INJURY/TRAUMA  1193  1.65  66.99 CASE

Table 9: DRM 1 Medcap LOCL top 10 Influential Conditions – No risk of SBO

|  |  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | --- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated |  | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  |  | Contribution | Percent |

WORST

|  | PARTIAL | SEPSIS |  | MEDICAL | 423 | 16.77 | 16.77 |
| --- | -------- | ------- | --- | -------- | ---- | ------ | ------ |

CASE WORST TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  258  10.23  27.00 CASE

| WORST |  | MEDICATION OVERDOSE/ADVERSE |  |  |  |  |  |
| ------ | -------- | ---------------------------- | --- | -------- | ---- | ----- | ------ |
|  | TREATED |  |  | MEDICAL | 242 | 9.60 | 36.60 |
| CASE |  | REACTION |  |  |  |  |  |

WORST

|  | TREATED | SMOKE INHALATION |  | ENVIRONMENTAL | 196 | 7.77 | 44.37 |
| --- | -------- | ----------------- | --- | -------------- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | SEPSIS |  | MEDICAL | 189 | 7.49 | 51.86 |
| --- | -------- | ------- | --- | -------- | ---- | ----- | ------ |

CASE WORST TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  185  7.34  59.20 CASE WORST

|  | TREATED | HEAD INJURY |  | INJURY/TRAUMA | 120 | 4.76 | 63.96 |
| --- | -------- | ------------ | --- | -------------- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | CHEST INJURY |  | INJURY/TRAUMA | 111 | 4.40 | 68.36 |
| --- | -------- | ------------- | --- | -------------- | ---- | ----- | ------ |

CASE WORST TREATED  TOXIC EXPOSURE (AMMONIA)  ENVIRONMENTAL  93  3.69  72.05 CASE WORST PARTIAL  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  83  3.29  75.34 CASE

For DRM 2, cholecystitis does not appear in the top 10 influential conditions for EVAC or LOCL for any of the timelines.

Table 10: DRM 2 Medcap EVAC top 10 Influential Conditions - no risk of appendicitis

|  |  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | --- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated |  | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  |  | Contribution | Percent |

BEST PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  21015  28.62  28.62 CASE WORST PARTIAL  URINARY TRACT INFECTION  MEDICAL  6436  8.77  37.38 CASE WORST PARTIAL  BACK SPRAIN/STRAIN  INJURY/TRAUMA  4747  6.46  43.85 CASE BEST PARTIAL  FINGER DISLOCATION  INJURY/TRAUMA  4205  5.73  49.58 CASE WORST PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  3896  5.31  54.88 CASE

| WORST | PARTIAL | EYE INFECTION |  | MEDICAL | 2199 | 2.99 | 57.88 |
| ------ | -------- | -------------- | --- | -------- | ----- | ----- | ------ |

CASE WORST

|  | PARTIAL | NEPHROLITHIASIS |  | MEDICAL | 1822 | 2.48 | 60.36 |
| --- | -------- | ---------------- | --- | -------- | ----- | ----- | ------ |

CASE WORST PARTIAL  EYE IRRITATION/ABRASION  INJURY/TRAUMA  1574  2.14  62.50 CASE

|  |  | VISUAL IMPAIRMENT AND/OR INCREASED |  |  |  |  |  |
| --- | --- | ----------------------------------- | --- | --- | --- | --- | --- |

WORST TREATED  INTRACRANIAL PRESSURE (VIIP)(SPACE  MEDICAL  1438  1.96  64.46 CASE ADAPTATION)

|  |  |  |  | 13 |  |  | 23 APRIL 2018 |
| --- | --- | --- | --- | --- | --- | --- | -------------- |
| IMM Service Request Report – SBO |  |  |  |  |  | S-20170710-386 |  |
| --------------------------------- | --- | --- | --- | --- | --- | --------------- | --- |

WORST PARTIAL  NECK SPRAIN/STRAIN  INJURY/TRAUMA  1144  1.56  66.02 CASE

Table 11: DRM 2 Medcap LOCL top 10 Influential Conditions - no risk of appendicitis

|  |  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | --- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated |  | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  |  | Contribution | Percent |

WORST

|  | PARTIAL | SEPSIS |  | MEDICAL | 378 | 16.03 | 16.03 |
| --- | -------- | ------- | --- | -------- | ---- | ------ | ------ |

CASE WORST TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  287  12.17  28.20 CASE

| WORST |  | MEDICATION OVERDOSE/ADVERSE |  |  |  |  |  |
| ------ | -------- | ---------------------------- | --- | -------- | ---- | ----- | ------ |
|  | TREATED |  |  | MEDICAL | 228 | 9.67 | 37.87 |
| CASE |  | REACTION |  |  |  |  |  |

WORST

|  | TREATED | SEPSIS |  | MEDICAL | 190 | 8.06 | 45.93 |
| --- | -------- | ------- | --- | -------- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | SMOKE INHALATION |  | ENVIRONMENTAL | 177 | 7.51 | 53.44 |
| --- | -------- | ----------------- | --- | -------------- | ---- | ----- | ------ |

CASE WORST TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  173  7.34  60.77 CASE WORST

|  | TREATED | CHEST INJURY |  | INJURY/TRAUMA | 130 | 5.51 | 66.28 |
| --- | -------- | ------------- | --- | -------------- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | HEAD INJURY |  | INJURY/TRAUMA | 121 | 5.13 | 71.42 |
| --- | -------- | ------------ | --- | -------------- | ---- | ----- | ------ |

CASE WORST  PARTIAL  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  107  4.54  75.95 CASE WORST TREATED  TOXIC EXPOSURE (AMMONIA)  ENVIRONMENTAL  69  2.93  78.88 CASE

Small bowel obstruction does not appear in the top 10 influential conditions for any of the timelines.

Table 12: DRM 3 Medcap EVAC top 10 Influential Conditions - no risk of cholecystitis

|  |  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | --- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated |  | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  |  | Contribution | Percent |

BEST PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  20809  28.62  28.62 CASE WORST PARTIAL  URINARY TRACT INFECTION  MEDICAL  6593  9.07  37.68 CASE WORST PARTIAL  BACK SPRAIN/STRAIN  INJURY/TRAUMA  4651  6.40  44.08 CASE BEST PARTIAL  FINGER DISLOCATION  INJURY/TRAUMA  4168  5.73  49.81 CASE WORST PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  3869  5.32  55.13 CASE WORST

|  | PARTIAL | EYE INFECTION |  | MEDICAL | 2252 | 3.10 | 58.23 |
| --- | -------- | -------------- | --- | -------- | ----- | ----- | ------ |

CASE

| WORST | PARTIAL | NEPHROLITHIASIS |  | MEDICAL | 1772 | 2.44 | 60.67 |
| ------ | -------- | ---------------- | --- | -------- | ----- | ----- | ------ |

CASE WORST PARTIAL  EYE IRRITATION/ABRASION  INJURY/TRAUMA  1597  2.20  62.86 CASE

|  |  | VISUAL IMPAIRMENT AND/OR INCREASED |  |  |  |  |  |
| --- | --- | ----------------------------------- | --- | --- | --- | --- | --- |

WORST TREATED  INTRACRANIAL PRESSURE (VIIP)(SPACE  MEDICAL  1430  1.97  64.83

| CASE |  | ADAPTATION) |  |  |  |  |  |
| ----- | --- | ------------ | --- | --- | --- | --- | --- |

WORST PARTIAL  NECK SPRAIN/STRAIN  INJURY/TRAUMA  1179  1.62  66.45 CASE

|  |  |  |  | 14 |  |  | 23 APRIL 2018 |
| --- | --- | --- | --- | --- | --- | --- | -------------- |
| IMM Service Request Report – SBO |  |  |  |  |  | S-20170710-386 |  |
| --------------------------------- | --- | --- | --- | --- | --- | --------------- | --- |
Table 13:  DRM 3 Medcap LOCL top 10 Influential Conditions - no risk of cholecystitis

|  |  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | --- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated |  | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  |  | Contribution | Percent |

WORST

|  | PARTIAL | SEPSIS |  | MEDICAL | 379 | 15.13 | 15.13 |
| --- | -------- | ------- | --- | -------- | ---- | ------ | ------ |

CASE WORST TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  277  11.06  26.19 CASE

| WORST |  | MEDICATION OVERDOSE/ADVERSE |  |  |  |  |  |
| ------ | -------- | ---------------------------- | --- | -------- | ---- | ----- | ------ |
|  | TREATED |  |  | MEDICAL | 225 | 8.98 | 35.17 |
| CASE |  | REACTION |  |  |  |  |  |

WORST

|  | TREATED | SEPSIS |  | MEDICAL | 184 | 7.35 | 42.51 |
| --- | -------- | ------- | --- | -------- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | SMOKE INHALATION |  | ENVIRONMENTAL | 180 | 7.19 | 49.70 |
| --- | -------- | ----------------- | --- | -------------- | ---- | ----- | ------ |

CASE WORST TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  173  6.91  56.61 CASE WORST

|  | TREATED | CHEST INJURY |  | INJURY/TRAUMA | 126 | 5.03 | 61.64 |
| --- | -------- | ------------- | --- | -------------- | ---- | ----- | ------ |

CASE WORST

|  | TREATED | HEAD INJURY |  | INJURY/TRAUMA | 121 | 4.83 | 66.47 |
| --- | -------- | ------------ | --- | -------------- | ---- | ----- | ------ |

CASE WORST PARTIAL  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  95  3.79  70.26 CASE WORST TREATED  TOXIC EXPOSURE (AMMONIA)  ENVIRONMENTAL  89  3.55  73.81 CASE

For DRM 4, worst case and best case SBO are ranked 5 and 6 respectively with regards to EVAC.

Table 14: DRM 4 Medcap EVAC top 10 Influential Conditions - no risk of appendicitis nor

cholecystitis

|  |  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | --- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated |  | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  |  | Contribution | Percent |

BEST PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  20873  28.32  28.32 CASE WORST PARTIAL  URINARY TRACT INFECTION  MEDICAL  6558  8.90  37.22 CASE WORST PARTIAL  BACK SPRAIN/STRAIN  INJURY/TRAUMA  4699  6.38  43.60 CASE BEST PARTIAL  FINGER DISLOCATION  INJURY/TRAUMA  4218  5.72  49.32 CASE WORST PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  3901  5.29  54.61 CASE WORST

|  | PARTIAL | EYE INFECTION |  | MEDICAL | 2208 | 3.00 | 57.61 |
| --- | -------- | -------------- | --- | -------- | ----- | ----- | ------ |

CASE WORST

|  | PARTIAL | NEPHROLITHIASIS |  | MEDICAL | 1784 | 2.42 | 60.03 |
| --- | -------- | ---------------- | --- | -------- | ----- | ----- | ------ |

CASE WORST PARTIAL  EYE IRRITATION/ABRASION  INJURY/TRAUMA  1628  2.21  62.24 CASE

|  |  | VISUAL IMPAIRMENT AND/OR INCREASED |  |  |  |  |  |
| --- | --- | ----------------------------------- | --- | --- | --- | --- | --- |

WORST TREATED  INTRACRANIAL PRESSURE (VIIP)(SPACE  MEDICAL  1429  1.94  64.18 CASE ADAPTATION)

|  |  |  |  | 15 |  |  | 23 APRIL 2018 |
| --- | --- | --- | --- | --- | --- | --- | -------------- |
| IMM Service Request Report – SBO |  |  |  |  | S-20170710-386 |  |
| --------------------------------- | --- | --- | --- | --- | --------------- | --- |

WORST PARTIAL  ANKLE SPRAIN/STRAIN  INJURY/TRAUMA  1152  1.56  65.74 CASE

Table 15: DRM 4 Medcap LOCL top 10 Influential Conditions - no risk of appendicitis nor

cholecystitis

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |

WORST

|  | PARTIAL  SEPSIS |  | MEDICAL | 399 | 16.91 | 16.91 |
| --- | ---------------- | --- | -------- | ---- | ------ | ------ |

CASE WORST TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  271  11.48  28.39 CASE WORST

|  | TREATED  SEPSIS |  | MEDICAL | 186 | 7.88 | 36.27 |
| --- | ---------------- | --- | -------- | ---- | ----- | ------ |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED |  | MEDICAL | 178 | 7.54 | 43.81 |
| --- | -------- | --- | -------- | ---- | ----- | ------ |

### CASE  REACTION

WORST TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  175  7.42  51.23 CASE WORST

|  | TREATED  SMOKE INHALATION |  | ENVIRONMENTAL | 152 | 6.44 | 57.67 |
| --- | -------------------------- | --- | -------------- | ---- | ----- | ------ |

CASE WORST  PARTIAL  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  135  5.72  63.39 CASE WORST

|  | TREATED  HEAD INJURY |  | INJURY/TRAUMA | 130 | 5.51 | 68.90 |
| --- | --------------------- | --- | -------------- | ---- | ----- | ------ |

CASE WORST

|  | TREATED  CHEST INJURY |  | INJURY/TRAUMA | 128 | 5.42 | 74.32 |
| --- | ---------------------- | --- | -------------- | ---- | ----- | ------ |

CASE WORST TREATED  TOXIC EXPOSURE (AMMONIA)  ENVIRONMENTAL  76  3.22  77.54 CASE

|  |  |  | 16 |  | 23 APRIL 2018 |  |
| --- | --- | --- | --- | --- | -------------- | --- |
IMM Service Request Report – SBO S-20170710-386

## References

1. Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114. 2011.

Houston, TX, NASA, Johnson Space Center. Ref Type: Report

2. Integrated Medical Model Project. Integrated Medical Model Software Requirements Specification.

IMM-SFTWR-008. 2017. Houston, Texas, KBRwyle Integrated Science, Technology and Engineering. Ref Type: Report

3. Integrated Medical Model Project. Integrated Medical Model version 4 Assumptions and Limitations.

IMM-GEN-300. 2017. Houston, Texas, KBRwyle Integrated Science and Engineering Space Medicine Information Technology. Ref Type: Report

4. NASA-STD-7009: Standard for Models and Simulations (2008). NASA: Washington, DC.

5. ISS Medical Checklist (Med CL), 04 June 2014, NASA Johnson Space Center, Medical Operations

Group. 17 23 APRIL 2018

| IMM Service Request Report – SBO |  |  |  |  |  | S-20170710-386 |  |
| --------------------------------- | --- | --- | --- | --- | --- | --------------- | --- |

## Appendix A: IMM Status at Time of Service Request Report

| Validation status for |  |  |  |  |  |  |  |
| ---------------------- | --- | --- | --- | --- | --- | --- | --- |

IMM  IMM V&V Matrix: The following bar chart shows the IMM v4.1 MATLAB status of IMM validation for each IMM element listed.

- Compliance with  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6);

NASA-Standard-7009  however there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been

| requirements | fully attained. |  |  |  |  |  |  |
| ------------- | ---------------- | ----------- | ------------------------ | --- | ----------------- | --- | --- |
|  |  | Compliant | Compliance Incomplete |  | Not applicable |  |  |
|  |  | 36 |  | 5 | 5 |  |  |
- Current NASA-  IMM Credibility Matrix: The following table shows the overall IMM v4.1 MATLAB credibility assessment score (CAS), individual factor CAS,

customer-specified sufficiency thresholds, and weighted scores. Legend depicts CAS score designated range and color assignments from Standard-7009

| credibility assessment | NASA-Standard-7009. |  |  |  |  |  |  |
| ----------------------- | -------------------- | --- | --- | --- | --- | --- | --- |

score      Factor    Sufficiency    Factor    Weighted    Overall Score

|  |  |  |  | Thresholds | Score | Scores |  |
| --- | --- | --- | ------------- | ----------- | ------ | ---------- | --- |
|  |  |  | Verification | 4 | 3.7 | 0.28 |  |
|  |  |  | Validation | 3 | 3 | 0.45 |  |
| --- | --- | --- | ----------- | ---- | ---- | ---------- | --- |
|  |  | Input Pedigree |  | 3 | 3 | 0.53 |  |
| --- | --- | ---------------------- | --- | ---- | ---- | ---------- | ----- |
|  |  | Results Uncertainty |  | 3 | 3 | 0.60 | 3.06 |
|  |  | Results Robustness |  | 3 | 3 | 0.45 |  |
|  |  |  | Use History | 3 | 3 | 0.45 |  |
| --- | --- | ----------------------- | ------------ | ---- | ---- | ---------- | --- |
|  |  | M&S Management |  | 2 | 2 | 0.10 |  |
|  |  | People Qualification |  | 4 | 4 | 0.20 |  |
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | ----- | --- |
| Additional verification | none |  |  |  |  |  |  |
| ------------------------ | ----- | --- | --- | --- | --- | --- | --- |

and validation information applicable to this analysis

- Integrated Medical  iMED Lockdown IDs: (26), created on (2/21/2017); (34), created on (3/29/2018); (35), created on (3/29/2018); (36), created on (3/29/2018)

### Evidence Database

(iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software. MATLAB and all other MathWorks product version  or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to | None |  |  |  |  |  |  |
| ---------------------- | ----- | --- | --- | --- | --- | --- | --- |

the code for analysis

|  |  |  | 18 |  |  | 23 APRIL 2018 |  |
| --- | --- | --- | --- | --- | --- | -------------- | --- |
| IMM Service Request Report – SBO | S-20170710-386 |  |
| --------------------------------- | --------------- | --- |

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

infarction

| Headache (CO2 induced) | Choking/Obstructed Airway |  |
| ----------------------------------------- | -------------------------------------- | --- |
| Smoke Inhalation | Constipation (space adaptation) |  |
| Toxic Exposure: Ammonia | Dental: Exposed Pulp |  |
| INJURY/TRAUMA | Dental Caries |  |
| Abdominal Injury | Dental: Abscess |  |
| Acute Compartment Syndrome | Dental: Crown Loss |  |
| Ankle Sprain/Strain | Dental: Filling Loss |  |
| Back Sprain/Strain | Depression |  |
| Chest Injury | Diarrhea |  |
| Dental: Avulsion (tooth loss) | Eye Corneal Ulcer |  |
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

### Angina/Myocardial Infarction  Visual Impairment and Increased Intracranial

Pressure (VIIP) (space adaptation)

|  | 19 | 23 APRIL 2018 |
| --- | --- | -------------- |

---

## Source metadata

```yaml
source_filename: "risk-of-appendicitis-and-cholecystitis-versus-risk-of-small-bowel-obstruction-sbo.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports"
source_url: "https://drive.google.com/file/d/1pyp6W9Dab__RYwIinoTGyvjFYHkaaYXT/view"
source_drive_id: "1pyp6W9Dab__RYwIinoTGyvjFYHkaaYXT"
source_sha256: e9743e15dfac66eda291b0d9d2d01f7bb8e5352bd3aca264079728bf6a7c52e1
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 19
ocr_performed: false
```
