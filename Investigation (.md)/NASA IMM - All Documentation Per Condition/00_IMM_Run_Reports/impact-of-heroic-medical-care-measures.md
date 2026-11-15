# Impact Of Heroic Medical Care Measures

[View original PDF](https://drive.google.com/file/d/1zA4fbIo058VSiET5YkqiZN3NKN1ZgozH/view) · **17 pages**

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

IMM Service Request Report – Heroic Measures S-20170724-388

## Executive Summary

The IMM was used to determine the impact on subsequent mission medical outcomes of using “heroic measures” to treat a severely ill crewmember that would then deplete medical resources. The catastrophic event was triggered at 1, 135, 270 and 405 days into a 540 day mission. Results show that there was no significant effect on the crew health index (CHI) when comparing the control, a nominal run with no depleting event, to the test DRMs.

Evacuation (EVAC) rates compared between the control and the test DRMs were significantly different, with decreasing impact the later in the mission that the triggering event occurred. A similar trend is noted for loss of crew life (LOCL), although much smaller in magnitude.

Significance is defined as non-overlapping confidence intervals between compared indices.

Influential conditions in the test cases are dominated by partially treated conditions, as compared to the control, reflecting depletion of resources; however, this effect diminishes the later in the mission the depleting event occurs.

## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are crew health index (CHI), need for evacuation (EVAC) and loss of crew life (LOCL).

The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profiles shown in Tables 1 and 2. The outcomes of certain IMM medical conditions are influenced by pre-existing medical history including: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre- existing conditions, as defined here, are consistent with historical U.S. crew data. 1 21 JUNE 2018

IMM Service Request Report – Heroic Measures  S-20170724-388

Table 1: Crew 1 for DRM 1 – No Extravehicular Activity (EVA)

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

### Prior Abdominal

|  | Sex | CAC | Crowns | Contacts |  |  |  | EVA |
| --- | ---- | ---- | ------- | --------- | --- | --- | --- | ---- |

Surgery

| Crew 1 | Male | Yes | Yes |  | No | No |  | No |
| ------- | ------- | ---- | ---- | --- | ---- | ---- | --- | --- |
| Crew 2 | Female | No | No |  | Yes | Yes |  | No |
| Crew 3 | Male | No | Yes |  | No | No |  | No |
| Crew 4 | Female | No | No |  | Yes | No |  | No |
Table 2: Crew 2 for DRMs 2 – 5.  EVA to occur at (1, 135, 270, and 405 days)

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

### Prior Abdominal

|  | Sex | CAC | Crowns | Contacts |  |  |  | EVA |
| --- | ---- | ---- | ------- | --------- | --- | --- | --- | ---- |

Surgery

| Crew 1 | Male | Yes | Yes |  | No | No |  | No |
| ------- | ------- | ---- | ---- | --- | ---- | ---- | -------- | --- |
| Crew 2 | Female | No | No |  | Yes | Yes | Yes (1) |  |
| Crew 3 | Male | No | Yes |  | No | No |  | No |
| Crew 4 | Female | No | No |  | Yes | No |  | No |
### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix A. The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data contained within the Integrated Medical Evidence Database (iMED), except as outlined below. For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition  and is constrained by resource availability on the ISS (i.e. the ISS medical capabilities (MedCap)).

Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all- untreated (no Medical Kit (Medkit)) and baseline MedCap (ISS Medkit without resupply). For longer duration missions, the MedCap state should most closely resemble a real world deep space mission where resupply is not possible but where utilization of partial and alternative treatment can occur.

|  |  |  |  |  | 2 |  |  | 21 JUNE 2018 |
| --- | --- | --- | --- | --- | --- | --- | --- | ------------- |
IMM Service Request Report – Heroic Measures S-20170724-388 This work focuses on the baseline MedCap state.

### Resource Depleting Event

The goal of this work is to determine what happens to subsequent medical outcomes if a crew member becomes severely ill and, in treating that crew member, a large part of the medical resources are consumed. In an attempt to model this, we used a combination of Worst Case Urinary Tract Obstruction (UTO), Worst Case Urinary Tract Infection (UTI), and Worst Case Sepsis (e.g. a crewperson gets a urinary tract obstruction which progresses to urinary tract infection which leads to urosepsis) as the depleting illness. We chose this urosepsis disease path because sepsis has occurred in spaceflight, and is potentially a severe medical condition. We then named this illness “EVA_Deplete”. The resources used to treat the worst case of each of these conditions (UTO, UTI, and Sepsis) over a period of about 72 hours was deducted from the baseline Medical Capability when the depleting event was triggered.

Ideally, we want to gauge impacts on outcomes at different time points during a mission. Although we have a timeline in IMM 4.1, we cannot specify when an event occurs, because this would require coding changes to the model. However, the timing of EVA events can be set in the model. Therefore, EVA_Deplete was set as an EVA-dependent condition in order to dictate the occurrence timing of the event. The heroic measures are not EVA-related. The name of the condition pertains to the use of EVAs in the simulation to determine when depletion of resources related to UTO, UTI, and Sepsis will occur.

- The following methods were used to generate a depleting event: 1) Create an EVA-dependent condition

(EVA_Deplete) with a defined set of required resources to deplete medical supplies inventory, which occurs at an incidence rate of 100%, but with no contribution to CHI, EVAC and LOCL (to make the estimation of subsequent impacts straightforward). 2) The Best Case probability is set to 0%, and Worst Case set to 100%. 3) This event is triggered one time in each DRM, as specified below. All other EVA dependent conditions are removed from consideration.

- DRM1 – control, no initial resource depleting event (EVA_Deplete does NOT occur), EVA = 0

- DRM2 – EVA_Deplete occurs once at mission start (Day 1 of 540), EVA = 1 (Crew #2)

- DRM3 – EVA_Deplete occurs once at end of first quarter of mission timeline (Day 135 of 540),

EVA = 1 (Crew #2)

- DRM4 – EVA_Deplete occurs once at mid-mission (Day 270 of 540), EVA = 1 (Crew #2)

- DRM5 – EVA_Deplete occurs once at the beginning of last quarter of mission (Day 405 of 540),

EVA = 1 (Crew #2) EVA_Deplete simulates a resource-depleting event where a seriously ill crewmember is treated without regard to future mission outcomes thereby consuming a large portion of the medical resources and impacting subsequent medical outcomes on the other crew. The impact on subsequent outcomes is the 3 21 JUNE 2018

IMM Service Request Report – Heroic Measures S-20170724-388 result of primary interest for this request.

### Main Outcomes

- The IMM primary medical outcomes include: total medical events (TME), crew health index (CHI),

probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources.

CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, crew members are usually only assigned one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources. If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If there are not enough resources available to treat the event, 4 21 JUNE 2018

IMM Service Request Report – Heroic Measures S-20170724-388 the event is considered "untreated." The initial quantities for medical resources are baselined to a fully stocked ISS medical kit (MedCap). Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated scenario and a 0-100% chance of going to EVAC in the best case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC.

### Modeling Approach

Simulations were run for a 540 day mission. One hundred thousand (100,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria. Convergence criteria are met when there is less than or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last two - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport. IMM outcomes were determined for the DRMs using the ISS MedCap scenario where all conditions are treated, partially treated or untreated based on the available resources of one ISS Medkit. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, TME, CHI, EVAC and LOCL results, as well as pertinent influential conditions, are described. IMM version 4.1 has certain features, assumptions and limitations that impact modeled outcomes. Improvements in IMM 4.1 from previous versions include inclusion of a timeline, and alternate or partial treatment capability. Features, assumptions and limitations pertinent to this report are described below. Features, Assumptions and Limitations of IMM Version 4.1 [3]

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

5 21 JUNE 2018

IMM Service Request Report – Heroic Measures S-20170724-388 resources required for treating that condition before a second condition has access to those resources.

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

assumes the condition begins identically in all affected crew members at the beginning of the solar particle event.

25. The IMM does not decrement non-consumable items and allows all non-consumable items to be

used simultaneously by multiple astronauts (e.g. blood pressure cuff). 6 21 JUNE 2018

IMM Service Request Report – Heroic Measures  S-20170724-388

## Results

The IMM results for TME, CHI, EVAC, LOCL and influential conditions for the simulated DRMs are presented in the tables below. Table 3 and figure 1 show the average number of total medical events (TME) during the mission across all of the DRMs.

Table 3: TME for the DRMs

|  |  |  |  | TME | 95% CI |  |
| --- | --- | ------- | --- | ------- | ------- | ---- |
|  |  | MedCap |  | 180.32 | 147 | 209 |
|  | DRM 1 | Treated |  | 181.11 | 149 | 210 |
| --- | ------ | ---------- | --- | ------- | ---- | ---- |
|  |  | Untreated |  | 146.22 | 84 | 197 |
|  |  | MedCap |  | 179.87 | 143 | 210 |
|  | DRM 2 | Treated |  | 182.08 | 149 | 211 |
|  |  | Untreated |  | 147.49 | 85 | 198 |
|  |  | MedCap |  | 180.29 | 145 | 210 |
|  | DRM 3 | Treated |  | 182.15 | 150 | 211 |
|  |  | Untreated |  | 147.28 | 85 | 198 |
|  |  | MedCap |  | 180.86 | 147 | 210 |
|  |  | Treated |  | 182.09 | 149 | 211 |

DRM 4

|  |  | Untreated |  | 147.19 | 84 | 198 |
| --- | --- | ---------- | --- | ------- | ---- | ---- |
|  |  | MedCap |  | 181.14 | 147 | 210 |
|  |  | Treated |  | 182.03 | 149 | 211 |

DRM 5

|  |  | Untreated |  | 146.97 | 84 | 197 |
| --- | --- | ---------- | --- | ------- | --- | ---- |
Figure 1: TME for the DRMS

TME 250 200 150 100 50 0

|  | DRM 1 | DRM 2 | DRM 3 | DRM 4 | DRM 5 |  |
| --- | ------ | ------ | ------ | ------ | ------ | --- |

### MedCap  Treated  Untreated

|  |  |  |  | 7 |  | 21 JUNE 2018 |
| --- | --- | --- | --- | --- | --- | ------------- |
IMM Service Request Report – Heroic Measures  S-20170724-388

Table 4 and figure 2 show the average CHI across all of the DRMs.

Table 4: CHI for the DRMs

|  |  |  |  | CHI | 95% CI |  |
| --- | ------ | ---------- | --- | ------ | ------- | ------ |
|  |  | MedCap |  | 90.28 | 72.70 | 97.24 |
|  | DRM 1 | Treated |  | 91.88 | 74.18 | 97.96 |
|  |  | Untreated |  | 30.86 | 18.46 | 41.73 |
|  |  | MedCap |  | 88.80 | 70.47 | 96.72 |
|  |  | Treated |  | 91.88 | 74.18 | 97.95 |

DRM 2

|  |  | Untreated |  | 30.88 | 18.53 | 41.76 |
| --- | --- | ---------- | --- | ------ | ------ | ------ |
|  |  | MedCap |  | 89.18 | 71.49 | 96.79 |
|  | DRM 3 | Treated |  | 91.89 | 74.27 | 97.95 |
| --- | ------ | ---------- | --- | ------ | ------ | ------ |
|  |  | Untreated |  | 30.88 | 18.53 | 41.73 |
|  |  | MedCap |  | 89.73 | 72.24 | 96.97 |
|  | DRM 4 | Treated |  | 91.87 | 74.05 | 97.96 |
| --- | ------ | ---------- | --- | ------ | ------ | ------ |
|  |  | Untreated |  | 30.90 | 18.48 | 41.78 |
|  |  | MedCap |  | 90.11 | 72.56 | 97.12 |
|  | DRM 5 | Treated |  | 91.86 | 74.08 | 97.96 |
|  |  | Untreated |  | 30.86 | 18.38 | 41.75 |
Figure 2: CHI for the DRMs

CHI (%) 100 90 80 70 60 50 40 30 20 10 0

|  | DRM 1 | DRM 2 | DRM 3 | DRM 4 | DRM 5 |  |
| --- | ------ | ------- | -------- | ---------- | ------ | ------------- |
|  |  | MedCap | Treated | Untreated |  |  |
|  |  |  |  | 8 |  | 21 JUNE 2018 |
IMM Service Request Report – Heroic Measures  S-20170724-388

Table 5 along with figures 3 and 4 show the probability of EVAC and LOCL across all of the DRMs.

Table 5: EVAC and LOCL for the DRMs

|  |  |  | EVAC |  |  |  |  | LOCL |  |
| --- | -------- | ------------ | ------- | ------- | ------- | ------------ | --- | ------- | ------- |
|  |  | Probability |  | 95% CI |  | Probability |  | 95% CI |  |
|  | MedCap | 0.1333 | 0.1314 |  | 0.1354 | 0.0095 |  | 0.0088 | 0.0100 |
|  | Treated | 0.0728 | 0.0712 |  | 0.0743 | 0.0093 |  | 0.0087 | 0.0099 |

DRM 1

|  | Untreated | 0.8568 | 0.8547 |  | 0.8589 | 0.0333 |  | 0.0323 | 0.0344 |
| --- | ---------- | ------- | ------- | --- | ------- | ------- | --- | ------- | ------- |
|  | MedCap | 0.2000 | 0.1975 |  | 0.2024 | 0.0139 |  | 0.0132 | 0.0147 |
DRM 2  Treated  0.0716  0.0702  0.0734  0.0092  0.0086  0.0098

|  | Untreated | 0.8573 | 0.8551 |  | 0.8594 | 0.0325 |  | 0.0314 | 0.0336 |
| --- | ---------- | ------- | ------- | --- | ------- | ------- | --- | ------- | ------- |
|  | MedCap | 0.1904 | 0.1881 |  | 0.1932 | 0.0131 |  | 0.0125 | 0.0139 |
DRM 3  Treated  0.0703  0.0686  0.0718  0.0092  0.0086  0.0097

|  | Untreated | 0.8572 | 0.8548 |  | 0.8593 | 0.0319 |  | 0.0308 | 0.0329 |
| --- | ---------- | ------- | ------- | --- | ------- | ------- | --- | ------- | ------- |
|  | MedCap | 0.1731 | 0.1707 |  | 0.1753 | 0.0119 |  | 0.0113 | 0.0126 |

DRM 4  Treated  0.0729  0.0710  0.0744  0.0098  0.0092  0.0104

|  | Untreated | 0.8572 | 0.8550 |  | 0.8592 | 0.0327 |  | 0.0314 | 0.0336 |
| --- | ---------- | ------- | ------- | --- | ------- | ------- | --- | ------- | ------- |
|  | MedCap | 0.1539 | 0.1516 |  | 0.1562 | 0.0109 |  | 0.0102 | 0.0115 |

DRM 5  Treated  0.0737  0.0720  0.0753  0.0093  0.0087  0.0099

|  | Untreated | 0.8577 | 0.8555 |  | 0.8599 | 0.0329 |  | 0.0317 | 0.0340 |
| --- | ---------- | ------- | ------- | --- | ------- | ------- | --- | ------- | ------- |
Figure 3: Probability of EVAC for the DRMs

### Probability of EVAC

1 0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1 0

|  | DRM 1 | DRM 2 | DRM 3 |  | DRM 4 |  | DRM 5 |  |  |
| --- | ------ | ------- | -------- | ---------- | ------ | --- | ------ | --- | ------------- |
|  |  | MedCap | Treated | Untreated |  |  |  |  |  |
|  |  |  |  |  | 9 |  |  |  | 21 JUNE 2018 |
IMM Service Request Report – Heroic Measures S-20170724-388

Figure 4: Probability of LOCL for the DRMs

### Probability of LOCL

0.04 0.035 0.03 0.025 0.02 0.015 0.01 0.005 0 DRM 1 DRM 2 DRM 3 DRM 4 DRM 5

### MedCap Treated Untreated

Recall that DRM 1 did not have any EVAs. The list of top 10 influential conditions for all the DRMs are presented in tables 6-15.

Table 6: DRM 1 Medcap EVAC top 10 Influential Conditions

### Percent Cumulative

### Scenario Treated Medical Condition Category Total EVAC

### Contribution Percent

BEST PARTIAL EYE CHEMICAL BURN ENVIRONMENTAL 3272 23.10 23.10 CASE WORST PARTIAL URINARY TRACT INFECTION MEDICAL 1127 7.96 31.05 CASE

### VISUAL IMPAIRMENT AND/OR INCREASED

WORST TREATED INTRACRANIAL PRESSURE (VIIP)(SPACE MEDICAL 936 6.61 37.66 CASE ADAPTATION) WORST PARTIAL EYE CHEMICAL BURN ENVIRONMENTAL 516 3.64 41.30 CASE WORST TREATED SMOKE INHALATION ENVIRONMENTAL 478 3.37 44.68 CASE WORST PARTIAL NEPHROLITHIASIS MEDICAL 478 3.37 48.05 CASE WORST TREATED NEPHROLITHIASIS MEDICAL 453 3.20 51.25 CASE WORST TREATED SEPSIS MEDICAL 410 2.89 54.14 CASE WORST PARTIAL BACK SPRAIN/STRAIN INJURY/TRAUMA 406 2.87 57.01 CASE WORST TREATED WRIST FRACTURE INJURY/TRAUMA 306 2.16 59.17 CASE 10 21 JUNE 2018

IMM Service Request Report – Heroic Measures  S-20170724-388

Table 7: DRM 1 Medcap LOCL top 10 Influential Conditions

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |

WORST

|  | TREATED  SEPSIS |  | MEDICAL | 195 | 20.57 | 20.57 |
| --- | ---------------- | --- | -------- | ---- | ------ | ------ |

CASE WORST TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  135  14.24  34.81 CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED |  | MEDICAL | 91 | 9.60 | 44.41 |
| --- | -------- | --- | -------- | --- | ----- | ------ |

### CASE  REACTION

WORST TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  79  8.33  52.74 CASE WORST

|  | TREATED  SMOKE INHALATION |  | ENVIRONMENTAL | 77 | 8.12 | 60.86 |
| --- | -------------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST

|  | TREATED  HEAD INJURY |  | INJURY/TRAUMA | 74 | 7.81 | 68.67 |
| --- | --------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST

|  | TREATED  CHEST INJURY |  | INJURY/TRAUMA | 58 | 6.12 | 74.79 |
| --- | ---------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST TREATED  TOXIC EXPOSURE (AMMONIA)  ENVIRONMENTAL  46  4.85  79.64 CASE WORST

|  | TREATED  APPENDICITIS |  | MEDICAL | 41 | 4.32 | 83.97 |
| --- | ---------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SEPSIS |  | MEDICAL | 32 | 3.38 | 87.34 |
| --- | ---------------- | --- | -------- | --- | ----- | ------ |

CASE

Table 8: DRM 2 Medcap EVAC top 10 Influential Conditions

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  | Contribution | Percent |

BEST  PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  6390  29.32  29.32 CASE WORST  PARTIAL  URINARY TRACT INFECTION  MEDICAL  2938  13.48  42.80 CASE WORST  TREATED  VISUAL IMPAIRMENT AND/OR INCREASED  MEDICAL  971  4.46  47.25 CASE  INTRACRANIAL PRESSURE (VIIP)(SPACE ADAPTATION)

| WORST | PARTIAL  NEPHROLITHIASIS |  | MEDICAL | 927 | 4.25 | 51.51 |
| ------ | ------------------------- | --- | -------- | ---- | ----- | ------ |

CASE WORST  PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  879  4.03  55.54 CASE

| WORST | PARTIAL  DIARRHEA |  | MEDICAL | 719 | 3.30 | 58.84 |
| ------ | ------------------ | --- | -------- | ---- | ----- | ------ |

CASE WORST  PARTIAL  BACK SPRAIN/STRAIN  INJURY/TRAUMA  710  3.26  62.10 CASE WORST  PARTIAL  SMOKE INHALATION  ENVIRONMENTAL  623  2.86  64.96 CASE

|  | PARTIAL  SEPSIS |  | MEDICAL | 457 | 2.10 | 67.05 |
| --- | ---------------- | --- | -------- | ---- | ----- | ------ |

WORST CASE

| WORST | PARTIAL  DENTAL ABSCESS |  | MEDICAL | 452 | 2.07 | 69.13 |
| ------ | ------------------------ | --- | -------- | ---- | ----- | ------ |

CASE

|  |  |  | 11 |  |  | 21 JUNE 2018 |
| --- | --- | --- | --- | --- | --- | ------------- |
IMM Service Request Report – Heroic Measures  S-20170724-388

Table 9: DRM 2 Medcap LOCL top 10 Influential Conditions

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |

WORST  PARTIAL  SMOKE INHALATION  ENVIRONMENTAL  302  21.62  21.62 CASE

| WORST | PARTIAL  SEPSIS |  | MEDICAL | 275 | 19.69 | 41.30 |
| ------ | ---------------- | --- | -------- | ---- | ------ | ------ |

CASE WORST  PARTIAL  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  135  9.66  50.97 CASE WORST  PARTIAL  MEDICATION OVERDOSE/ADVERSE  MEDICAL  96  6.87  57.84

### CASE  REACTION

WORST  PARTIAL  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  86  6.16  63.99 CASE

| WORST | PARTIAL  HEAD INJURY |  | INJURY/TRAUMA | 80 | 5.73 | 69.72 |
| ------ | --------------------- | --- | -------------- | --- | ----- | ------ |

CASE

| BEST | PARTIAL  SEPSIS |  | MEDICAL | 78 | 5.58 | 75.30 |
| ----- | ---------------- | --- | -------- | --- | ----- | ------ |

CASE WORST  PARTIAL  CHEST INJURY  INJURY/TRAUMA  75  5.37  80.67 CASE WORST  PARTIAL  TOXIC EXPOSURE (AMMONIA)  ENVIRONMENTAL  54  3.87  84.54 CASE

| WORST | PARTIAL  APPENDICITIS |  | MEDICAL | 53 | 3.79 | 88.33 |
| ------ | ---------------------- | --- | -------- | --- | ----- | ------ |

CASE

Table 10: DRM 3 Medcap EVAC top 10 Influential Conditions

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  | Contribution | Percent |

BEST  PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  5858  28.27  28.27 CASE WORST  PARTIAL  URINARY TRACT INFECTION  MEDICAL  2802  13.52  41.79 CASE WORST  TREATED  VISUAL IMPAIRMENT AND/OR INCREASED  MEDICAL  983  4.74  46.53 CASE  INTRACRANIAL PRESSURE (VIIP)(SPACE ADAPTATION) WORST  PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  841  4.06  50.59 CASE WORST  PARTIAL  BACK SPRAIN/STRAIN  INJURY/TRAUMA  694  3.35  53.94 CASE

|  | PARTIAL  NEPHROLITHIASIS |  | MEDICAL | 685 | 3.31 | 57.25 |
| --- | ------------------------- | --- | -------- | ---- | ----- | ------ |

WORST CASE

| WORST | PARTIAL  DIARRHEA |  | MEDICAL | 585 | 2.82 | 60.07 |
| ------ | ------------------ | --- | -------- | ---- | ----- | ------ |

CASE WORST  PARTIAL  SMOKE INHALATION  ENVIRONMENTAL  475  2.29  62.36 CASE BEST  PARTIAL  FINGER DISLOCATION  INJURY/TRAUMA  444  2.14  64.50 CASE

| WORST | PARTIAL  DENTAL ABSCESS |  | MEDICAL | 384 | 1.85 | 66.36 |
| ------ | ------------------------ | --- | -------- | ---- | ----- | ------ |

CASE

|  |  |  | 12 |  | 21 JUNE 2018 |  |
| --- | --- | --- | --- | --- | ------------- | --- |
IMM Service Request Report – Heroic Measures  S-20170724-388

| Table 11: | DRM 3 Medcap LOCL top 10 Influential Conditions |  |  |  |  |  |
| ---------- | ------------------------------------------------ | --- | --- | --- | --- | --- |
|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |

WORST  PARTIAL  SMOKE INHALATION  ENVIRONMENTAL  277  21.02  21.02 CASE

| WORST | PARTIAL  SEPSIS |  | MEDICAL | 228 | 17.30 | 38.32 |
| ------ | ---------------- | --- | -------- | ---- | ------ | ------ |

CASE WORST  PARTIAL  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  103  7.81  46.13 CASE WORST  PARTIAL  MEDICATION OVERDOSE/ADVERSE  MEDICAL  70  5.31  51.44

### CASE  REACTION

| WORST | PARTIAL  HEAD INJURY |  | INJURY/TRAUMA | 65 | 4.93 | 56.37 |
| ------ | --------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST  PARTIAL  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  62  4.70  61.08 CASE

| WORST | TREATED  SEPSIS |  | MEDICAL | 54 | 4.10 | 65.17 |
| ------ | ---------------- | --- | -------- | --- | ----- | ------ |

CASE WORST  PARTIAL  CHEST INJURY  INJURY/TRAUMA  45  3.41  68.59 CASE

| BEST | PARTIAL  SEPSIS |  | MEDICAL | 42 | 3.19 | 71.78 |
| ----- | ---------------- | --- | -------- | --- | ----- | ------ |

CASE WORST  PARTIAL  TOXIC EXPOSURE (AMMONIA)  ENVIRONMENTAL  42  3.19  74.96 CASE

| Table 12: | DRM 4 Medcap EVAC top 10 Influential Conditions |  |  |  |  |  |
| ---------- | ------------------------------------------------ | --- | --- | --- | --- | --- |
|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  | Contribution | Percent |

BEST  PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  4735  25.39  25.39 CASE WORST  PARTIAL  URINARY TRACT INFECTION  MEDICAL  2235  11.99  37.38 CASE WORST  TREATED  VISUAL IMPAIRMENT AND/OR INCREASED  MEDICAL  1009  5.41  42.79 CASE  INTRACRANIAL PRESSURE (VIIP)(SPACE ADAPTATION) WORST  PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  723  3.88  46.66 CASE WORST  PARTIAL  BACK SPRAIN/STRAIN  INJURY/TRAUMA  681  3.65  50.32 CASE

| WORST | PARTIAL  NEPHROLITHIASIS |  | MEDICAL | 562 | 3.01 | 53.33 |
| ------ | ------------------------- | --- | -------- | ---- | ----- | ------ |

CASE BEST  PARTIAL  FINGER DISLOCATION  INJURY/TRAUMA  482  2.58  55.91 CASE

| WORST | PARTIAL  DIARRHEA |  | MEDICAL | 375 | 2.01 | 57.93 |
| ------ | ------------------ | --- | -------- | ---- | ----- | ------ |

CASE

| WORST | TREATED  NEPHROLITHIASIS |  | MEDICAL | 370 | 1.98 | 59.91 |
| ------ | ------------------------- | --- | -------- | ---- | ----- | ------ |

CASE

| WORST | PARTIAL  DENTAL ABSCESS |  | MEDICAL | 311 | 1.67 | 61.58 |
| ------ | ------------------------ | --- | -------- | ---- | ----- | ------ |

CASE

|  |  |  | 13 |  | 21 JUNE 2018 |  |
| --- | --- | --- | --- | --- | ------------- | --- |
IMM Service Request Report – Heroic Measures  S-20170724-388

Table 13: DRM 4 Medcap LOCL top 10 Influential Conditions

|  |  |  |  |  | Percent | Cumulative |
| --------- | ---------------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |
| WORST | PARTIAL  SEPSIS |  | MEDICAL | 153 | 12.81 | 12.81 |

CASE WORST  PARTIAL  SMOKE INHALATION  ENVIRONMENTAL  144  12.06  24.87 CASE

| WORST | TREATED  SEPSIS |  | MEDICAL | 112 | 9.38 | 34.25 |
| ------ | ---------------- | --- | -------- | ---- | ----- | ------ |

CASE WORST  PARTIAL  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  85  7.12  41.37 CASE WORST  TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  82  6.87  48.24 CASE WORST  TREATED  MEDICATION OVERDOSE/ADVERSE  MEDICAL  55  4.61  52.85

### CASE  REACTION

| WORST | PARTIAL  HEAD INJURY |  | INJURY/TRAUMA | 51 | 4.27 | 57.12 |
| ------ | --------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST  PARTIAL  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  46  3.85  60.97 CASE WORST  PARTIAL  MEDICATION OVERDOSE/ADVERSE  MEDICAL  43  3.60  64.57

### CASE  REACTION

| BEST | PARTIAL  SEPSIS |  | MEDICAL | 41 | 3.43 | 68.01 |
| ----- | ---------------- | --- | -------- | --- | ----- | ------ |

CASE

| Table 14: | DRM 5 Medcap EVAC top 10 Influential Conditions |  |  |  |  |  |
| ---------- | ------------------------------------------------ | --- | --- | --- | --- | --- |
|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  | Contribution | Percent |

BEST  PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  3747  22.82  22.82 CASE WORST  PARTIAL  URINARY TRACT INFECTION  MEDICAL  1657  10.09  32.91 CASE WORST  TREATED  VISUAL IMPAIRMENT AND/OR INCREASED  MEDICAL  1012  6.16  39.07 CASE  INTRACRANIAL PRESSURE (VIIP)(SPACE ADAPTATION) WORST  PARTIAL  BACK SPRAIN/STRAIN  INJURY/TRAUMA  629  3.83  42.90 CASE WORST  PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  601  3.66  46.56 CASE

| WORST | PARTIAL  NEPHROLITHIASIS |  | MEDICAL | 476 | 2.90 | 49.46 |
| ------ | ------------------------- | --- | -------- | ---- | ----- | ------ |

CASE BEST  PARTIAL  FINGER DISLOCATION  INJURY/TRAUMA  455  2.77  52.23 CASE

| WORST | TREATED  NEPHROLITHIASIS |  | MEDICAL | 391 | 2.38 | 54.61 |
| ------ | ------------------------- | --- | -------- | ---- | ----- | ------ |

CASE

|  | TREATED  SMOKE INHALATION |  | ENVIRONMENTAL | 323 | 1.97 | 56.57 |
| --- | -------------------------- | --- | -------------- | ---- | ----- | ------ |

WORST CASE

| WORST | TREATED  SEPSIS |  | MEDICAL | 304 | 1.85 | 58.42 |
| ------ | ---------------- | --- | -------- | ---- | ----- | ------ |

CASE

|  |  |  | 14 |  | 21 JUNE 2018 |  |
| --- | --- | --- | --- | --- | ------------- | --- |
IMM Service Request Report – Heroic Measures S-20170724-388

Table 15: DRM 5 Medcap LOCL top 10 Influential Conditions

### Percent Cumulative

### Scenario Treated Medical Condition Category Total LOCL

### Contribution Percent

WORST TREATED SEPSIS MEDICAL 146 13.39 13.39 CASE WORST TREATED TRAUMATIC HYPOVOLEMIC SHOCK INJURY/TRAUMA 97 8.90 22.29 CASE WORST PARTIAL SEPSIS MEDICAL 88 8.07 30.37 CASE WORST TREATED MEDICATION OVERDOSE/ADVERSE MEDICAL 82 7.52 37.89

### CASE REACTION

WORST PARTIAL SMOKE INHALATION ENVIRONMENTAL 82 7.52 45.41 CASE WORST TREATED SMOKE INHALATION ENVIRONMENTAL 67 6.15 51.56 CASE WORST TREATED STROKE (CEREBROVASCULAR ACCIDENT) MEDICAL 61 5.60 57.16 CASE WORST TREATED HEAD INJURY INJURY/TRAUMA 57 5.23 62.39 CASE WORST PARTIAL TRAUMATIC HYPOVOLEMIC SHOCK INJURY/TRAUMA 48 4.40 66.79 CASE WORST TREATED CHEST INJURY INJURY/TRAUMA 48 4.40 71.19 CASE

## References

1. Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114. 2011.

Houston, TX, NASA, Johnson Space Center. Ref Type: Report

2. Integrated Medical Model Project. Integrated Medical Model Software Requirements Specification.

IMM-SFTWR-008. 2017. Houston, Texas, KBRwyle Integrated Science, Technology and Engineering. Ref Type: Report

3. Integrated Medical Model Project. Integrated Medical Model version 4 Assumptions and Limitations.

IMM-GEN-300. 2017. Houston, Texas, KBRwyle Integrated Science and Engineering Space Medicine Information Technology. Ref Type: Report

4. NASA-STD-7009: Standard for Models and Simulations (2008). NASA: Washington, DC.

5. ISS Medical Checklist (Med CL), 04 June 2014, NASA Johnson Space Center, Medical Operations

Group. 15 21 JUNE 2018

IMM Service Request Report – Heroic Measures  S-20170724-388

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

- Integrated Medical  iMED Lockdown ID: For DRM 1: ID 39 (created on 4/30/2018; For DRMs 2-5: ID 40 (created on 6/5/2018)

### Evidence Database

(iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software. MATLAB and all other MathWorks product version  or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to | None |  |  |  |  |  |  |
| ---------------------- | ----- | --- | --- | --- | --- | --- | --- |

the code for analysis

|  |  |  | 16 |  |  | 21 JUNE 2018 |  |
| --- | --- | --- | --- | --- | --- | ------------- | --- |
IMM Service Request Report – Heroic Measures  S-20170724-388

## Appendix B: Medical Conditions in iMED by Category (iMED_20170221)

| ENVIRONMENTAL | MEDICAL ILLNESS (continued) |  |
| ------------------------- | ---------------------------- | --- |
| Acute Radiation Syndrome | Anxiety |  |
| Altitude Sickness | Appendicitis |  |

Barotrauma (ear/sinus block)  Atrial Fibrillation/Atrial Flutter

| Burns secondary to Fire | Back Pain (space adaptation) |  |
| ------------------------ | ----------------------------- | --- |

### Decompression Sickness Secondary to EVA  Behavioral Emergency

(removed from this simulation)  Cardiogenic Shock Secondary to Myocardial infarction

| Eye Chemical Burn | Choking/Obstructed Airway |  |
| ----------------------------------------- | ---------------------------------------- | --- |
| Headache (CO2 induced) | Constipation (space adaptation) |  |
| Smoke Inhalation | Dental: Exposed Pulp |  |
| Toxic Exposure: Ammonia | Dental Caries |  |
| INJURY/TRAUMA | Dental: Abscess |  |
| Abdominal Injury | Dental: Crown Loss |  |
| Acute Compartment Syndrome | Dental: Filling Loss |  |
| Ankle Sprain/Strain | Depression |  |
| Back Sprain/Strain | Diarrhea |  |
| Chest Injury | EVA_Deplete (added for this simulation) |  |
| Dental: Avulsion (tooth loss) | Eye Corneal Ulcer |  |
| Elbow Dislocation | Eye Infection |  |
| Elbow Sprain/Strain | Gastroenteritis |  |
| Eye Irritation/Abrasion | Headache (Late) |  |
| Eye Penetration (foreign body) | Headache (space adaptation) |  |
| Finger Dislocation | Hearing Loss |  |
| Fingernail Delamination Secondary to EVA | Hemorrhoids |  |

(removed from this simulation)  Herpes Zoster Reactivation (shingles)

| Head Injury | Hypertension |  |
| ---------------------------- | ---------------------------- | --- |
| Hip Sprain/Strain | Indigestion |  |
| Hip/Proximal Femur Fracture | Influenza |  |
| Knee Sprain/Strain | Insomnia (space adaptation) |  |

### Lower Extremity Stress Fracture  Medication Overdose/Adverse Reaction

| Lumbar Spine Fracture | Mouth Ulcer |  |
| ------------------------------ | ------------------------------------ | --- |
| Neck Sprain/Strain | Nasal Congestion (space adaptation) |  |
| Neurogenic Shock | Nephrolithiasis |  |
| Paresthesias Secondary to EVA |  |  |

(removed from this simulation)  Nose bleed (space adaptation)

| Shoulder Dislocation | Otitis Externa |  |
| ----------------------------- | ----------------------------------------- | --- |
| Shoulder Sprain/Strain | Otitis Media |  |
| Skin Abrasion | Pharyngitis |  |
| Skin Laceration | Respiratory Infection |  |
| Traumatic Hypovolemic Shock | Retinal Detachment |  |
| Wrist Fracture | Seizures |  |
| Wrist Sprain/Strain | Sepsis |  |
| MEDICAL ILLNESS | Skin Infection |  |
| Abdominal Wall Hernia | Skin Rash |  |
| Abnormal Uterine Bleeding | Sleep Disorder |  |
| Acute Angle-Closure Glaucoma | Small Bowel Obstruction |  |
| Acute Arthritis | Space Motion Sickness (space adaptation) |  |

Acute Cholecystitis/Biliary Colic  Stroke (Cerebrovascular Accident)

| Acute Diverticulitis | Sudden Cardiac Arrest |  |
| --------------------- | -------------------------------------- | --- |
| Acute Pancreatitis | Urinary Incontinence (space adaption) |  |
| Acute Prostatitis | Urinary Retention (space adaptation) |  |
| Acute Sinusitis | Urinary Tract Infection |  |

Allergic Reaction (mild to moderate)  Vaginal Yeast Infection

| Anaphylaxis |  |  |
| ------------ | --- | --- |

### Visual Impairment and Increased Intracranial

### Angina/Myocardial Infarction

Pressure (VIIP) (space adaptation)

|  | 17 | 21 JUNE 2018 |
| --- | --- | ------------- |

---

## Source metadata

```yaml
source_filename: "impact-of-heroic-medical-care-measures.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports"
source_url: "https://drive.google.com/file/d/1zA4fbIo058VSiET5YkqiZN3NKN1ZgozH/view"
source_drive_id: "1zA4fbIo058VSiET5YkqiZN3NKN1ZgozH"
source_sha256: bec53097b504e789f0921f950699363cd1caef3f62c7d5a115eb7fe676cd1c2b
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 17
ocr_performed: false
```
