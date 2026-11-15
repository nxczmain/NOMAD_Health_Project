# ISS IMM PRA 2021 Update

[View original PDF](https://drive.google.com/file/d/1jnt_6gYbuskPOREnAitnDHv6AOurUa-H/view) · **21 pages**

**Collection:** Mission Risk Reports/Lunar Orbit and Surface and Low Earth Orbit

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Executive Summary](#executive-summary)
- [Contents](#contents)
- [Background](#background)
- [Methods](#methods)
- [Appendix C shows all updates made to the iMED between the time of delivery of IMM](#appendix-c-shows-all-updates-made-to-the-imed-between-the-time-of-delivery-of-imm)
- [Results](#results)
- [Discussion](#discussion)
- [References](#references)
- [requirements](#requirements)
- [Appendix B: Medical Conditions in iMED by Category (iMED_20170221)](#appendix-b-medical-conditions-in-imed-by-category-imed_20170221)
- [Appendix C: iMED Updates 03/2018 – 05/2020](#appendix-c-imed-updates-032018--052020)
- [Appendix D: Conceptual Updates from IMM 3.0 to IMM 4](#appendix-d-conceptual-updates-from-imm-30-to-imm-4)

---

### IMM Service Request Report S-20210129-435

The following document contains data and analyses developed by the NASA Human Research Program Integrated Medical Model (IMM) v3.0, which has undergone rigorous testing and review within the NASA medical community per NASA Procedural Requirement 7150.2 and NASA Standard 7009, but still requires review by the external space flight medical community.

- Outstanding elements for review include: assessing the applicability of the IMM v3.0 outcomes, the relevance of stated

assumptions, and clearly defining limitations. Given this, it is strongly recommended that care be taken when using the results of the simulation and the output should be weighted appropriately for its level of credibility with respect to informing any decision making.

## Executive Summary

The objective of this IMM support request is to support a continued dialogue between the ISS PRA and IMM teams to provide updated results of medical risk assessment due to updates made in the iMED database and the IMM model after the last delivery of risk assessment results from IMM to the ISS Probabilistic Assessment (PRA) team, and to aid in accurate interpretation of IMM data. This report compares simulation results from the last simulation delivered to the ISS PRA Model group in 2016 (S-20151123-341 RevA) to a more recent simulation from 2020 (S-20200330- 426). From the more recent S-20200330-426, for the fully treated scenario, the probability of evacuation of one or more crew members was 3.24% (1 in

31) and the probability of loss of crew life of one or more crew members was 0.49% (1 in

204). The probability of emergent evacuation of one or more crew members was 1.83% (95% confidence interval bounds of 1.74% to 1.91%) in the fully treated scenario (1 in 55). This report also includes a list of top ten influential conditions for probability of medical evacuation (EVAC) and probability of medical loss of crew life (LOCL), and a list of conditions that contribute ~75% of the emergent evacuations in the S-20200330-426 simulation. 1 18 MARCH 2019

### IMM Service Request Report S-20210129-435

## Contents

Executive Summary ...................................................................................................................... 3 Background ................................................................................................................................... 5 Methods ........................................................................................................................................ 5 Crew and Mission Parameters ................................................................................................... 5 Medical Conditions and Resources ............................................................................................ 6 Main Outcomes ......................................................................................................................... 7 Modeling Approach .................................................................................................................... 8 Features, Assumptions and Limitations of IMM Version 4.1 [3] ...................................................... 9 Assumptions and Limitations of IMM Version 3.0 ......................................................................... 11 Results ........................................................................................................................................ 11 Discussion .................................................................................................................................. 18 References ................................................................................................................................. 18 Appendix A1: IMM Status at Time of Service Request Report S-20200330-426 .......................... 19 Appendix A2: IMM Status at Time of Service Request Report S-20151123-341 RevA ................. 20

- Appendix B: Medical Conditions in iMED by Category (iMED_20170221) .................................... 21

- Appendix C: iMED Updates 03/2018 – 05/2020 .......................................................................... 22

- Appendix D: Conceptual Updates from IMM 3.0 to IMM 4 ........................................................... 23

2 18 MARCH 2019

### IMM Service Request Report S-20210129-435

## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are need for evacuation (EVAC) and loss of crew life (LOCL). The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

There were some slight differences between the crew profile in S-20151123-341 RevA and S- 20200330-426. The differences are reported in Table 1 and Table 2. The outcomes of certain IMM medical conditions are influenced by crew pre-existing medical history including coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre-existing conditions for both crew profiles, as defined here, are consistent with historical U.S. crew data. The slight difference between the two crew profiles does not have a significant effect on results. 3 18 MARCH 2019

| IMM Service Request Report |  |  |  |  |  | S-20210129-435 |  |  |
| --------------------------- | --- | --- | --- | --- | --- | --------------- | --- | --- |
Table 1: 6 month ISS PRA DRM crew profile S-20151123-341 RevA

|  |  |  |  |  |  |  | Prior |  |
| --- | ---- | ------- | ---- | ---- | --- | --------- | ------ | --- |
|  |  |  |  |  |  |  |  |  |
|  | Sex | Crowns | EVA | CAC |  | Contacts |  |  |

Abdominal Surgery

| Crew 1 | Female | Yes | No | No |  | No | No |  |
| ------- | ------- | ---- | --- | --- | --- | --- | --- | --- |

No

| Crew 2 | Male | No | Yes (3) |  |  | No | No |  |
| ------- | ----- | --- | -------- | ---- | --- | ---- | --- | --- |
| Crew 3 | Male | No | Yes (3) | Yes |  | No | No |  |
| Crew 4 | Male | No | No | Yes |  | No | No |  |
| Crew 5 | Male | No | No | No |  | Yes | No |  |
| Crew 6 | Male | No | No | Yes |  | No | No |  |
Table 2: 6 month ISS PRA DRM crew profile S-20200330-426

|  |  |  |  |  |  |  | Prior |  |
| --- | ---- | ------- | ---- | ---- | --- | --------- | ---------- | --- |
|  | Sex | Crowns | EVA | CAC |  | Contacts | Abdominal |  |

Surgery

| Crew 1 | Female | Yes | No | No |  | No | No |  |
| ------- | ------- | ---- | -------- | ---- | --- | ---- | ---- | --- |
| Crew 2 | Male | No | Yes (3) | No |  | Yes | No |  |
| Crew 3 | Male | No | Yes (3) | No |  | No | No |  |
| Crew 4 | Male | No | No | Yes |  | No | No |  |
| Crew 5 | Male | No | No | No |  | No | Yes |  |
| Crew 6 | Male | No | No | Yes |  | No | No |  |
### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix B.

The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data contained within the Integrated Medical Evidence Database (iMED). For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat

|  |  |  |  | 4 |  |  |  | 18 MARCH 2019 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------------- |
### IMM Service Request Report S-20210129-435

the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. In-flight medical treatment is assumed to follow a specified protocol or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS.

Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all- untreated (no Medkit) and baseline MedCap (Medkit without resupply). . For this service request, the Fully Treated timeline results are reported as they represent ISS capabilities and resupply.

## Appendix C shows all updates made to the iMED between the time of delivery of IMM

Request S-20151123-341 RevA and S-20200330-426.

### Main Outcomes

The IMM primary medical outcomes include the number of total medical events (TME), crew health index (CHI), probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources. CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew. EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent 5 18 MARCH 2019

### IMM Service Request Report S-20210129-435

impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available.

LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, the simulation usually assigns each crew member only one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model. Catastrophic vehicle failures such as the Challenger and Columbia accidents, and MMOD (micrometeorite and orbital debris) are not considered as possible causes of EVAC and LOCL.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources.

If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap (no resupply) scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If none of the resources are available to treat the event, the event is considered "untreated." The initial resources quantities for both comparison simulations are baselined to ISS medical capabilities contained in iMED at the time of those requests. Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated scenario and a 0-100% chance of going to EVAC in the best case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC.

### Modeling Approach

One hundred thousand (100,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet 6 18 MARCH 2019

### IMM Service Request Report S-20210129-435

convergence criteria. Convergence criteria are met when there is less than or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 2 - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport.

IMM outcomes were determined for the DRMs using the Fully Treated timeline where all conditions are considered fully treated based on the available resources of the ISS Medical Capabilities contained in iMED, at the time of the respective comparison requests, with resupply. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, EVAC and LOCL results are presented. Features, assumptions and limitations pertinent to this report are described in a separate section below.

Features, Assumptions and Limitations of IMM Version 4.1 [3]

1. All non-space adaption (SA) and non-extravehicular activity (EVA) related conditions have

a uniform likelihood of occurring throughout the mission duration. With the exception of VIIP, Space Adaptation Syndrome conditions occur in the first 5 days of the mission, with a peak occurrence at 48 hours.

2. Individuals cannot get the same condition for which they are currently being treated

(i.e. during Clinical Phase (CP) I and II).

3. EVAC and LOCL are generated for each medical event, and then the timing of the EVAC

or LOCL is generated according to a specified distribution.

4. Individuals are no longer at risk for further conditions once their status changes to either

EVAC or LOCL. From the start time of the EVAC or LOCL, the functional impairment of the crew member is assumed to be 100%.

5. When the status of a crew member changes to EVAC, only one crew member is evacuated.

6. The IMM assumes that, per crew member, the first condition requiring a specific therapy

utilizes all resources required for treating that condition before a second condition has access to those resources.

7. Most medical conditions, with exceptions including acute radiation syndrome (triggered by

Solar Particle Events) and EVA-linked conditions (triggered by EVA events), occur 7 18 MARCH 2019

### IMM Service Request Report S-20210129-435

independently of the occurrence of mission events and other medical conditions.

Currently there is no correlation or association within or between crew members for most medical conditions.

8. The model assumes another crew member is available to act as caregiver but does not

track the time impact of providing this care.

9. Medical procedures are accurately followed and successful; no mistakes occur in executing

medical procedures.

10. Crew medical skill level and preflight/inflight training is not modeled.

11. All diagnoses are 100% accurate.

12. All pharmaceuticals maintain maximum efficacy.

13. All medical events receive the appropriate treatment.

14. All medical events respond to the treatment as expected terrestrially.

15. All medical equipment is 100% reliable.

16. For each of the medical conditions specified in iMED, all crew members with the same

characteristics (sex, presence of CAC, crowns, contacts, history of abdominal surgery) have the same likelihood distribution of experiencing the condition.

17. All crew members are assumed to have all intrinsic body parts intact (i.e. appendix, gall

bladder, and uterus or prostate, etc.).

18. IMM assumes ISS power, potable water and oxygen resources are always available in

unlimited supply.

19. No Russian medical capabilities aboard the ISS are available to US crew members in this

model.

20. Medical capabilities do not include the use of personal crew carry-on items

contained in the Individual Medical Accessories Kit, (IMAK).

21. If a crew member is undergoing treatment for concurrent medical conditions requiring

the same consumable resource, the crew member will only utilize resources at the level required by the condition that requires the most resources.

22. If the primary resource required for treating a medical condition is unavailable, one or

more alternative resources are considered, if appropriate. One example might be using acetaminophen in place of ibuprofen.

23. Total quantities of a consumable medical resource requiring a daily dose will be

adjusted if a dosage schedule runs past the end of the mission.

24. If a solar particle event causes acute radiation sickness in one or more crew members,

8 18 MARCH 2019

### IMM Service Request Report S-20210129-435

IMM assumes the condition begins identically in all affected crew members at the beginning of the solar particle event.

25. The IMM does not decrement non-consumable items and allows all non-consumable

items to be used simultaneously by multiple astronauts (e.g. blood pressure cuff).

Assumptions and Limitations of IMM Version 3.0

1. The IMM does not include a mission timeline – all conditions occur at launch on day one.

2. Medical conditions are independent of each other – a mission could end in more than one

evacuation or loss of crew life being considered for the same crew member.

3. Conditions are treated in order of incidence and crew member count with Space

Adaptation conditions treated first (i.e. crew member one is treated before crew member two for any given condition and all instances of the highest incidence condition is treated before the next highest incidence).

4. When there are insufficient essential medical resources to treat a condition, all available

resources are consumed to reflect a partial treatment, and the condition is considered untreated.

5. The IMM ISS medical capability scenario does not take into account the availability of

Russian medical resources or the ability to resupply depleted medical resources.

The fully treated scenario provides a more realistic estimate of EVAC and LOCL probabilities for ISS than the baseline scenario of considering only medical capabilities without resupply, and eliminates the limitations associated with assumptions 3 through 5.

## Results

IMM simulation results for 100,000 trials of the ISS DRM are displayed in Figure 1. In the fully treated scenario, the probability of evacuation of one or more crew members was 3.24% (1 in 31) and the probability of loss of crew life of one or more crew members was 0.49% (1 in 204). The probability of EVAC for the fully treated scenario in the prior medical update report (S-20151123- 341 RevA) of 5.03% does not fall within the 95% confidence interval for this request nor do the 95% confidence intervals overlap. However, the probability of LOCL with 0.46% does fall within the 95% confidence interval, respectively and the 95% confidence intervals do overlap (Table 4). The probability of emergent evacuation of one or more crew members was 1.83% (95% confidence interval bounds of 1.74% to 1.91%) in the fully treated scenario (1 in 55). Although probability of emergent EVAC was 1.80% in the fully treated scenario from the prior medical update report (S-20151123-341 RevA), the probability of emergent EVAC falls within prior 95% confidence interval bounds of 1.71% to 1.88% (S-20151123-341 RevA) and vice versa. 9 18 MARCH 2019

| IMM Service Request Report |  |  |  |  |  |  |  | S-20210129-435 |  |  |
| --------------------------- | --- | --- | --- | --- | --- | --- | --- | --------------- | --- | --- |
4.00%

3.50%

|  |  |  |  |  |  | EVAC | LOCL |  |  |  |
| --- | --- | --- | --- | --- | --- | ----- | ----- | --- | --- | --- |

3.00%

2.50%

2.00%

1.50%

1.00%

0.50%

0.00%

|  | All Conditions | Environmental |  | Injury/Trauma |  |  | Medical |  |  |  |
| --- | --------------- | -------------- | --- | -------------- | --- | --- | -------- | --- | --- | --- |
Figure 1: S-20200330-426: Percent of missions with at least one evacuation (EVAC) or loss of

crew life (LOCL), by condition category, and 95% confidence intervals (CI). Data from the fully treated scenario are summarized for 100,000 simulated missions.

Table 3: EVAC and LOCL data corresponding to Figure 1.  S-20200330-426: Percent of

missions with at least one evacuation (EVAC) or loss of crew life (LOCL), by condition category, and 95% confidence intervals (CI). Data from the fully treated scenario are summarized for 100,000 simulated missions.

|  |  |  |  |  |  | 95% CI |  |  | 95% CI |  |
| --- | --- | --- | --- | --- | --- | ------- | --- | --- | ------- | --- |

### Medical Condition Category  Probability  Lower  Upper  Probability  Lower  Upper

|  |  |  | of EVAC |  | Bound |  | Bound | of LOCL | Bound | Bound |
| --------------- | --- | --- | -------- | --- | ------ | --- | ------ | -------- | ------ | ------ |
| All Conditions |  |  | 3.24% |  | 3.13% |  | 3.35% | 0.49% | 0.45% | 0.53% |
| Environmental |  |  | 0.36% |  | 0.32% |  | 0.39% | 0.07% | 0.06% | 0.09% |
| Injury/Trauma |  |  | 0.47% |  | 0.43% |  | 0.51% | 0.12% | 0.10% | 0.14% |
| Medical |  |  | 2.43% |  | 2.33% |  | 2.53% | 0.30% | 0.27% | 0.34% |
Table 4: EVAC and LOCL data from S-20151123-341 RevA. Percent of missions with at least

one evacuation (EVAC) or loss of crew life (LOCL), by condition category, and 95% confidence intervals (CI). Data from the fully treated scenario are summarized for 100,000 simulated missions.

|  |  |  |  |  |  | 95% CI |  |  | 95% CI |  |
| --- | --- | --- | --- | --- | --- | ------- | --- | --- | ------- | --- |

### Medical Condition Category  Probability  Lower  Upper  Probability  Lower  Upper

|  |  |  | of EVAC |  | Bound |  | Bound | of LOCL | Bound | Bound |
| --------------- | --- | --- | -------- | --- | ------ | --- | ------ | -------- | ------ | -------------- |
| All Conditions |  |  | 5.03% |  | 4.90% |  | 5.16% | 0.46% | 0.42% | 0.51% |
| Environmental |  |  | 0.33% |  | 0.29% |  | 0.36% | 0.07% | 0.05% | 0.08% |
| InjuryTrauma |  |  | 0.80% |  | 0.75% |  | 0.85% | 0.13% | 0.11% | 0.16% |
| Medical |  |  | 3.95% |  | 3.83% |  | 4.07% | 0.26% | 0.23% | 0.30% |
|  |  |  |  |  |  | 10 |  |  |  | 18 MARCH 2019 |
| IMM Service Request Report |  |  |  |  | S-20210129-435 |  |  |
| --------------------------- | --- | --- | --- | --- | --------------- | --- | --- |

The probabilities of both EVAC and LOCL decreased in all three categories of medical conditions due with the iMED updates (Table 3 and Table 4).

It is important to note that in the majority of simulations in which an EVAC or LOCL occurred only one crew member underwent EVAC or LOCL (Figure 2). The greatest percentage of evacuation was due primarily to worst-case scenarios; loss of crew life was due exclusively to worst case scenarios. Once a condition occurs it will follow either a best or a worst-case scenario based on a probability distribution. Worst-case scenarios generally require more resources for treatment and have higher probabilities of ending in evacuation or loss of crew life.

|  | Frequency |  |  |  | Percent |  |  |
| --- | ---------- | --- | --- | --- | -------- | --- | --- |
100000  100

|  |  |  |  |  |  |  |  |
| -------- | --- | --- | --- | ---- | --- | --- | --- |
|  |  |  |  | )% |  |  |  |
| s 80000 |  |  |  | 80 |  |  |  |
| la |  |  |  | ( |  |  |  |
| ir |  |  |  | s la |  |  |  |

T

| 60000 |  |  | EVAC | ir 60 |  |  |  |
| ---------- | --- | --- | ----- | ------- | --- | --- | ----- |
| f o |  |  |  | T |  |  | EVAC |
|  |  |  |  | f |  |  |  |
| r e |  |  |  | o |  |  |  |
| b 40000 |  |  |  | t   40 |  |  |  |
| m |  |  |  | n |  |  |  |
|  |  |  |  | e |  |  |  |
| u 20000 |  |  |  | c 20 |  |  |  |
| N |  |  |  | r |  |  |  |
|  |  |  |  | e |  |  |  |

P

| 0 |  |  |  | 0 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | 0 | 1 | 2 |  | 0 | 1 | 2 |
| --- | ------------ | --- | --- | --- | ------------ | --- | --- |
|  | Event Count |  |  |  | Event Count |  |  |
Figure 2: S-20200330-426: Frequency and percent of EVAC and LOCL events in the fully treated

scenario.

Table 5: S-20200330-426: Frequency and percent of EVAC and LOCL events in the fully treated

scenario.

| EVAC Count | Frequency | Percent | LOCL | Frequency | Percent |  |  |
| ----------- | ---------- | -------- | ----- | ---------- | -------- | --- | --- |

Count

| 0 | 96764 | 96.764 | 0 | 99510 | 99.51 |  |  |
| --- | ------ | ------- | --- | ------ | ------ | --- | -------------- |
| 1 | 3180 | 3.18 | 1 | 489 | 0.489 |  |  |
| 2 | 56 | 0.056 | 2 | 1 | 0.001 |  |  |
|  |  |  |  | 11 |  |  | 18 MARCH 2019 |
| IMM Service Request Report |  |  |  |  |  | S-20210129-435 |  |  |
| --------------------------- | --- | --- | --- | --- | --- | --------------- | --- | --- |
Table 6 and Table 7 provide the percent contribution by category for emergent evacuations

and the conditions that contribute ~75% of the total emergent evacuations that occurred during the simulation respectively. Table 8 provides the conditions that contribute ~75% of the total emergent evacuations that occurred during the simulation for S-20151123-341 RevA.

Table 9 and Table 10 provide a list of the top ten influential conditions for EVAC and LOCL

respectively for S-20200330-426. Table 11 and Table 12 provide a list of the top ten influential conditions for EVAC and LOCL respectively for S-20151123-341 RevA.

Table 6: S-20200330-426 vs. S-20151123-341 RevA: The percent of emergent evacuations

that fall within the three medical condition categories. Note, this is only for emergent evacuations, not the total number of evacuations.

Medical Condition Category  Percent [S-20200330-426]  Percent [S-20151123-341 RevA]

| Environmental |  |  | 15.47% |  |  | 16.79% |  |  |
| -------------- | --- | --- | ------- | --- | --- | ------- | --- | --- |
| Injury/Trauma |  |  | 13.20% |  |  | 16.95% |  |  |
| Medical |  |  | 71.33% |  |  | 66.26% |  |  |
Table 7: S-20200330-426: List of medical conditions that contribute approximately 75% to

emergent evacuations for this simulation. Although most emergent evacuations are attributable to worst case scenarios, the total EVAC numbers in this table, consist of both best and worst case scenarios.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

Percent

|  | Medical Condition |  | Category |  | Total EVAC |  |  |  |
| --- | ------------------ | --- | --------- | --- | ----------- | --- | --- | --- |

Contribution

| NEPHROLITHIASIS |  |  | MEDICAL |  | 507 |  | 27.42% |  |
| ----------------- | --- | -------------- | -------- | --- | ---- | --- | ------- | --- |
| SEPSIS |  |  | MEDICAL |  | 229 |  | 12.39% |  |
| SMOKE INHALATION |  | ENVIRONMENTAL |  |  | 217 |  | 11.74% |  |
| STROKE |  |  |  |  |  |  |  |  |
| (CEREBROVASCULAR |  |  | MEDICAL |  | 201 |  | 10.87% |  |

ACCIDENT)

|  |  |  |  |  |  |  |  |  |
| ------------ | --- | -------------- | --- | --- | --- | --- | ------ | --- |
| HEAD INJURY |  | INJURY/TRAUMA |  |  | 73 |  | 3.95% |  |
|  |  |  |  |  |  |  |  |  |

### TRAUMATIC HYPOVOLEMIC

|  |  | INJURY/TRAUMA |  |  | 62 |  | 3.35% |  |
| --- | --- | -------------- | --- | --- | --- | --- | ------ | --- |

SHOCK

| APPENDICITIS |  |  | MEDICAL |  | 60 |  | 3.24% |  |
| --------------------- | --- | --- | -------- | --- | --- | --- | ------ | -------------- |
| ACUTE DIVERTICULITIS |  |  | MEDICAL |  | 52 |  | 2.81% |  |
|  |  |  |  | 12 |  |  |  | 18 MARCH 2019 |
| IMM Service Request Report |  |  |  |  |  |  |  |  | S-20210129-435 |  |  |
| --------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --------------- | --- | --- |
Table 8: S-20151123-341: List of medical conditions that contribute approximately 75% to

emergent evacuations for this simulation. The emergent evacuations are attributable to worst case scenarios.

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Percent

|  | Medical Condition |  |  |  | Category |  |  | Total EVAC |  |  |  |
| --- | ------------------ | --- | --- | --- | --------- | --- | --- | ----------- | --- | --- | --- |

Contribution

| NEPHROLITHIASIS |  |  |  |  | MEDICAL |  |  | 436 |  | 24.00% |  |
| ----------------- | --- | --- | --- | --- | -------------- | --- | --- | ---- | --- | ------- | --- |
| SEPSIS |  |  |  |  | MEDICAL |  |  | 234 |  | 12.88% |  |
| SMOKE INHALATION |  |  |  |  | ENVIRONMENTAL |  |  | 233 |  | 12.82% |  |

STROKE (CEREBROVASCULAR

|  |  |  |  |  | MEDICAL |  |  | 102 |  | 5.61% |  |
| --- | --- | --- | --- | --- | -------- | --- | --- | ---- | --- | ------ | --- |

ACCIDENT)

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

### HIP/PROXIMAL FEMUR

|  |  |  |  |  | INJURY/TRAUMA |  |  | 95 |  | 5.23% |  |
| --- | --- | --- | --- | --- | -------------- | --- | --- | --- | --- | ------ | --- |

FRACTURE

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

### TRAUMATIC HYPOVOLEMIC

|  |  |  |  |  | INJURY/TRAUMA |  |  | 78 |  | 4.29% |  |
| --- | --- | --- | --- | --- | -------------- | --- | --- | --- | --- | ------ | --- |

SHOCK MEDICATION

|  |  |  |  |  | MEDICAL |  |  | 66 |  | 3.63% |  |
| --- | --- | --- | --- | --- | -------- | --- | --- | --- | --- | ------ | --- |

### OVERDOSE/ADVERSE REACTION

| HEAD INJURY |  |  |  |  | INJURY/TRAUMA |  |  | 65 |  | 3.58% |  |
| --------------------- | --- | --- | --- | --- | -------------- | --- | --- | --- | --- | ------ | --- |
| ACUTE DIVERTICULITIS |  |  |  |  | MEDICAL |  |  | 63 |  | 3.47% |  |
| APPENDICITIS |  |  |  |  | MEDICAL |  |  | 47 |  | 2.59% |  |

Table 9: Top ten Influential Conditions for EVAC for the Fully Treated timeline (S-20200330-426).

Percent

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

### Scenario  Treated  Medical Condition  Category  Total EVAC  Contribution

| WORST CASE |  | TREATED | NEPHROLITHIASIS |  |  |  | MEDICAL |  |  | 507 | 15.40% |
| ----------- | --- | -------- | ---------------- | --- | --- | --- | -------- | --- | --- | ---- | ------- |
| WORST CASE |  | TREATED | DENTAL ABSCESS |  |  |  | MEDICAL |  |  | 289 | 8.78% |
| WORST CASE |  | TREATED | SEPSIS |  |  |  | MEDICAL |  |  | 229 | 6.96% |

WORST CASE  TREATED  SMOKE INHALATION  ENVIRONMENTAL  217  6.59%

|  |  |  | STROKE |  |  |  |  |  |  |  |  |
| ----------- | --- | -------- | ----------------- | --- | --- | --- | -------- | --- | --- | ---- | ------ |
| WORST CASE |  | TREATED | (CEREBROVASCULAR |  |  |  | MEDICAL |  |  | 201 | 6.11% |

ACCIDENT)

|  |  |  | HERPES ZOSTER |  |  |  |  |  |  |  |  |
| ----------- | --- | -------- | -------------- | --- | --- | --- | -------- | --- | --- | ---- | ------ |
| WORST CASE |  | TREATED | REACTIVATION |  |  |  | MEDICAL |  |  | 144 | 4.37% |

(SHINGLES) WORST CASE  TREATED  WRIST FRACTURE  INJURY/TRAUMA  134  4.07%

### SMALL BOWEL

| BEST CASE |  | TREATED |  |  |  |  | MEDICAL |  |  | 94 | 2.86% |
| ---------- | --- | -------- | --- | --- | --- | --- | -------- | --- | --- | --- | ------ |

OBSTRUCTION

|  |  |  |  |  |  | 13 |  |  |  |  | 18 MARCH 2019 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | -------------- |
| IMM Service Request Report |  |  |  |  | S-20210129-435 |  |  |
| --------------------------- | --- | --- | --- | --- | --------------- | --- | --- |
ANGINA/MYOCARDIAL

| BEST CASE | TREATED |  |  | MEDICAL |  | 89 | 2.70% |
| ---------- | -------- | --- | --- | -------- | --- | --- | ------ |

INFARCTION

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |

### VISUAL IMPAIRMENT

|  |  | AND/OR INCREASED |  |  |  |  |  |
| --- | --- | ----------------- | --- | --- | --- | --- | --- |

WORST CASE  TREATED  INTRACRANIAL PRESSURE  MEDICAL  87  2.64% (VIIP)(SPACE ADAPTATION)

Table 10: Top ten Influential Conditions for LOCL for the Fully Treated timeline (S-20200330-

426).

|  |  |  |  |  |  |  | Percent |
| --- | --- | --- | --- | --- | --- | --- | -------- |

### Scenario  Treated  Medical Condition  Category  Total LOCL  Contribution

| WORST CASE | TREATED | SEPSIS |  | MEDICAL |  | 125 | 25.46% |
| ----------- | -------- | ----------------- | --- | -------- | --- | ---- | ------- |
|  |  | STROKE |  |  |  |  |  |
| WORST CASE | TREATED | (CEREBROVASCULAR |  | MEDICAL |  | 101 | 20.57% |

ACCIDENT) TRAUMATIC

| WORST CASE | TREATED |  |  | INJURY/TRAUMA |  | 62 | 12.63% |
| ----------- | -------- | --- | --- | -------------- | --- | --- | ------- |

### HYPOVOLEMIC SHOCK

WORST CASE  TREATED  SMOKE INHALATION  ENVIRONMENTAL  45  9.16%

| WORST CASE | TREATED | APPENDICITIS |  | MEDICAL |  | 31 | 6.31% |
| ----------- | -------- | ----------------- | --- | -------------- | --- | --- | ------ |
| WORST CASE | TREATED | HEAD INJURY |  | INJURY/TRAUMA |  | 30 | 6.11% |
|  |  | MEDICATION |  |  |  |  |  |
| WORST CASE | TREATED | OVERDOSE/ADVERSE |  | MEDICAL |  | 25 | 5.09% |

REACTION

| WORST CASE | TREATED | CHEST INJURY |  | INJURY/TRAUMA |  | 22 | 4.48% |
| ----------- | -------- | ------------- | --- | -------------- | --- | --- | ------ |

### TOXIC EXPOSURE

| WORST CASE | TREATED |  |  | ENVIRONMENTAL |  | 20 | 4.07% |
| ----------- | -------- | --- | --- | -------------- | --- | --- | ------ |

(AMMONIA)

### SUDDEN CARDIAC

| WORST CASE | TREATED |  |  |  |  |  |  |
| ----------- | -------- | --- | --- | -------- | --- | --- | ------ |
|  |  |  |  | MEDICAL |  | 8 | 1.63% |

ARREST

Table 11: Top ten Influential Conditions for EVAC for the Fully Treated timeline (S-20151123-341

RevA).

|  |  |  |  |  |  |  | Percent |
| --- | --- | --- | --- | --- | --- | --- | -------- |

### Scenario  Treated  Medical Condition  Category  Total EVAC  Contribution

|  |  | VISUAL IMPAIRMENT |  |  |  |  |  |
| --- | --- | ------------------ | --- | --- | --- | --- | --- |
|  |  | AND/OR INCREASED |  |  |  |  |  |

WORST CASE  TREATED  INTRACRANIAL PRESSURE  MEDICAL  1458  28.26% (VIIP)(SPACE ADAPTATION)

| WORST CASE | TREATED | DENTAL: ABSCESS |  | MEDICAL |  | 744 | 14.42% |
| ----------- | -------- | ---------------- | --- | -------- | --- | ---- | -------------- |
| WORST CASE | TREATED | NEPHROLITHIASIS |  | MEDICAL |  | 436 | 8.45% |
|  |  |  | 14 |  |  |  | 18 MARCH 2019 |
| IMM Service Request Report |  |  |  |  | S-20210129-435 |  |
| --------------------------- | --- | --- | --- | --- | --------------- | --- |
| WORST CASE | TREATED | SEPSIS |  | MEDICAL | 234 | 4.54% |
| ----------- | -------- | ------- | --- | -------- | ---- | ------ |

WORST CASE  TREATED  SMOKE INHALATION  ENVIRONMENTAL  233  4.52% WORST CASE  TREATED  WRIST FRACTURE  INJURY/TRAUMA  167  3.24%

|  |  | STROKE |  |  |  |  |
| --- | --- | ------- | --- | --- | --- | --- |

(CEREBROVASCULAR

| WORST CASE | TREATED |  |  | MEDICAL | 102 | 1.98% |
| ----------- | -------- | --- | --- | -------- | ---- | ------ |

ACCIDENT)

### ATRIAL FIBRILLATION/

| BEST CASE | TREATED |  |  | MEDICAL | 99 | 1.92% |
| ---------- | -------- | --- | --- | -------- | --- | ------ |

### ATRIAL FLUTTER

WORST CASE  TREATED  BACK SPRAIN/STRAIN  INJURY/TRAUMA  97  1.88%

### HIP/PROXIMAL FEMUR

| WORST CASE | TREATED |  |  | INJURY/TRAUMA | 95 | 1.84% |
| ----------- | -------- | --- | --- | -------------- | --- | ------ |

FRACTURE

Table 12: Top ten Influential Conditions for LOCL for the Fully Treated timeline (S-20151123-341

RevA).

|  |  |  |  |  |  | Percent |
| --- | --- | --- | --- | --- | --- | -------- |

### Scenario  Treated  Medical Condition  Category  Total LOCL  Contribution

| WORST CASE | TREATED | SEPSIS |  | MEDICAL | 117 | 25.11% |
| ----------- | -------- | ------- | --- | -------- | ---- | ------- |

TRAUMATIC

| WORST CASE | TREATED |  |  | INJURY/TRAUMA | 78 | 16.74% |
| ----------- | -------- | --- | --- | -------------- | --- | ------- |

### HYPOVOLEMIC SHOCK

|  |  | MEDICATION |  |  |  |  |
| ----------- | -------- | ----------------- | --- | -------- | --- | ------- |
| WORST CASE | TREATED | OVERDOSE/ADVERSE |  | MEDICAL | 51 | 10.94% |

REACTION

|  |  | STROKE |  |  |  |  |
| ----------- | -------- | ----------------- | --- | -------- | --- | ------- |
| WORST CASE | TREATED | (CEREBROVASCULAR |  | MEDICAL | 50 | 10.73% |

ACCIDENT)

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |

WORST CASE  TREATED  SMOKE INHALATION  ENVIRONMENTAL  44  9.44%

|  |  |  |  |  |  |  |
| ----------- | -------- | ------------- | --- | -------------- | --- | ------ |
| WORST CASE | TREATED | CHEST INJURY |  | INJURY/TRAUMA | 25 | 5.36% |
| WORST CASE | TREATED | APPENDICITIS |  | MEDICAL | 24 | 5.15% |
| WORST CASE | TREATED | HEAD INJURY |  | INJURY/TRAUMA | 24 | 5.15% |

TOXIC EXPOSURE:

| WORST CASE | TREATED |  |  | ENVIRONMENTAL | 18 | 3.86% |
| ----------- | -------- | --- | --- | -------------- | --- | ------ |

AMMONIA

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |

### SUDDEN CARDIAC

| WORST CASE | TREATED | ARREST |  | MEDICAL | 11 | 2.36% |
| ----------- | -------- | ------- | --- | -------- | --- | ------ |
|  |  |  | 15 |  |  | 18 MARCH 2019 |
| --- | --- | --- | --- | --- | --- | -------------- |
### IMM Service Request Report S-20210129-435

## Discussion

The results of this updated IMM simulation (S-20200330-426) reveal a significant decrease in the probability of total EVAC compared to the prior IMM simulation (S-20151123-341 Rev A). This decrease in the probability of total EVAC is due to a decreased probability of evacuation secondary to VIIP based on updated input values provided by subject matter experts for S- 20200330-426. There is no significant change in the probability of emergent EVAC or the probability of LOCL.

## References

1. Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114.

2011. Houston, TX, NASA, Johnson Space Center. Ref Type: Report

2. Integrated Medical Model Project. Integrated Medical Model Software Requirements

Specification. IMM-SFTWR-008. 2017. Houston, Texas, KBRwyle Integrated Science, Technology and Engineering. Ref Type: Report

3. Integrated Medical Model Project. Integrated Medical Model version 4 Assumptions and

Limitations. IMM-GEN-300. 2017. Houston, Texas, KBRwyle Integrated Science and Engineering Space Medicine Information Technology. Ref Type: Report

4. NASA-STD-7009: Standard for Models and Simulations (2008). NASA: Washington, DC.

5. ISS PRA Model v.3.2.0. ISS PRA Fire and Ammonia Model Contributions to the Integrated

Medical Model. 2015. Houston, Texas, NASA Johnson Space Center. Ref Type: Report 16 18 MARCH 2019

| IMM Service Request Report |  |  |  |  |  | S-20210129-435 |  |  |  |
| --------------------------- | --- | --- | --- | --- | --- | --------------- | --- | --- | --- |
Appendix A1: IMM Status at Time of Service Request Report S-20200330-426

Validation status for IMM

IMM V&V Matrix: The following bar chart shows the IMM v4.1 MATLAB status of IMM validation for each IMM element listed.

- Compliance with NASA-  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6); however there are certain

Standard-7009  requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been fully attained.

## requirements

|  |  | Compliant |  | Compliance Incomplete |  | Not applicable |  |  |  |
| --- | --- | ----------- | --- | ---------------------- | --- | ----------------- | --- | --- | --- |
|  |  | 36 |  |  | 5 |  | 5 |  |  |
- Current NASA-Standard-  IMM Credibility Matrix: The following table shows the overall IMM v4.1 MATLAB credibility assessment score (CAS), individual factor CAS, customer-specified

7009 credibility  sufficiency thresholds, and weighted scores. Legend depicts CAS score designated range and color assignments from NASA-Standard-7009.

| assessment score |  |  |  |  |  |  |  |  |  |
| ----------------- | --- | --- | ------- | --- | -------------- | --------------- | ----------- | --- | -------------- |
|  |  |  | Factor |  | Sufficiency | Factor Score | Weighted |  | Overall Score |
|  |  |  |  |  | Thresholds |  | Scores |  |  |
| --- | --- | --- | --- | --- | ----------- | --- | ------- | --- | --- |
|  |  |  | Verification |  | 4 | 3.7 | 0.28 |  |  |
| --- | --- | --- | ------------- | --- | ---- | ------ | ------- | --- | --- |
|  |  |  | Validation |  | 3 | 3 | 0.45 |  |  |
| --- | --- | --- | --------------------- | --- | ---- | ---- | ------- | --- | ----- |
|  |  |  | Input Pedigree |  | 3 | 3 | 0.53 |  |  |
|  |  |  | Results Uncertainty |  | 3 | 3 | 0.60 |  | 3.06 |
|  |  |  | Results Robustness |  | 3 | 3 | 0.45 |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  | Use History |  | 3 | 3 | 0.45 |  |  |
|  |  |  | M&S Management |  | 2 | 2 | 0.10 |  |  |
|  |  |  | People Qualification |  | 4 | 4 | 0.20 |  |  |
|  |  |  |  |  |  |  |  |  |  |
| Additional verification and | None |  |  |  |  |  |  |  |  |
| ---------------------------- | ----- | --- | --- | --- | --- | --- | --- | --- | --- |

validation information applicable to this analysis

| Integrated Medical | iMED Lockdown IDs: (68), created on (6/29/2020) |  |  |  |  |  |  |  |  |
| ------------------- | ------------------------------------------------ | --- | --- | --- | --- | --- | --- | --- | --- |

Evidence Database (iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software. MATLAB and all other MathWorks product or service names are

| version | registered trademarks or trademarks of MathWorks, Natick, MA, USA. |  |  |  |  |  |  |  |  |
| -------------------------- | ------------------------------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
| Modifications made to the | None |  |  |  |  |  |  |  |  |

code for analysis

|  |  |  |  | 17 |  |  |  | 18 MARCH 2019 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | -------------- | --- |
| IMM Service Request Report |  |  |  |  |  | S-20210129-435 |  |  |
| --------------------------- | --- | --- | --- | --- | --- | --------------- | --- | --- |

Appendix A2: IMM Status at Time of Service Request Report S-20151123-341 RevA

| Validation status for IMM | IMM  V&V | Matrix:  The | following | bar |  |  |  |  |
| -------------------------- | ------------- | ----------------- | ---------- | ---- | --- | --- | --- | --- |
|  | chart  shows | the  IMM  v3.0 | MATLAB |  |  |  |  |  |
|  | status  of | internal  (black | bars) | and |  |  |  |  |

external (gray bars) IMM validation for each IMM element listed.

- Compliance with NASA-  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for

Standard-7009 requirements  Models and Simulations (Integrated Medical Model Project); however there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been fully attained.

|  |  | Compliant |  | Compliance Incomplete |  |  | Not applicable |  |
| --- | --- | ----------- | --- | ------------------------ | --- | --- | --------------- | --- |
|  |  | 27 |  |  | 20 |  | 2 |  |

Current NASA-Standard-7009  IMM Credibility Ma trix: The following table shows the  Legend

| credibility assessment score | overall  IMM | v3.0  MATLAB | credibility | assessment |  |  |  |  |
| ----------------------------- | ------------- | ------------- | ------------ | ----------- | --- | --- | --- | --- |
score  (CAS),  individual  factor  CAS,  customer-  CAS Score > Threshold

|  | specified sufficiency thresholds, and weighted scores. |  |  |  |  |  |  |  |
| --- | ------------------------------------------------------- | --- | --- | --- | --- | --- | --- | --- |

Threshold > CAS Score > Threshold-0.5 Legend depicts CAS score designated range and color

assignments  from  NASA-Standard-7009.  A  review  Threshold-0.5 > CAS Score > Threshold-1.0 subfactor weight for bolded factors is 0.3.  CAS Score < Threshold - 1.0

|  |  |  |  |  |  | Overall score indicating sufficiency thresholds met |  | 3.075 |
| --- | --- | --- | --- | --- | --- | ---------------------------------------------------- | --- | ------ |
### Factor    Sufficiency    Factor Score    Weighted    Overall

|  |  |  |  |  | Thresholds |  | Scores | Score |
| --- | --- | --------------------- | --- | --- | ----------- | ------ | -------- | ------- |
|  |  | Verification |  |  | 4 | 3 | 0.225 |  |
|  |  | Validation |  |  | 3 | 2.3 | 0.345 |  |
|  |  | Input Pedigree |  |  | 3 | 1.6 | 0.28 |  |
|  |  | Results Uncertainty |  |  | 3 | 3 | 0.6 | 2.50 |
|  |  | Results Robustness |  |  | 3 | 3 | 0.45 |  |
|  |  | Use History |  |  | 3 | 2 | 0.3 |  |
|  |  | M&S Management |  |  | 2 | 2 | 0.1 |  |
|  |  | People Qualification |  |  | 4 | 4 | 0.2 |  |
| Additional verification and | none |  |  |  |  |  |  |  |
| ---------------------------- | ----- | --- | --- | --- | --- | --- | --- | --- |

validation information applicable to this analysis

| Integrated Medical Evidence | iMED_20151118 |  |  |  |  |  |  |  |
| ---------------------------- | -------------- | --- | --- | --- | --- | --- | --- | --- |

Database (iMED) code version and date accessed IMM version and code version  Data analysis for this report was generated using IMM v3.0 with release 2014a of MATLAB software. MATLAB and all other MathWorks product or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to the | None |  |  |  |  |  |  |  |
| -------------------------- | ----- | --- | --- | --- | --- | --- | --- | --- |

code for analysis

|  |  |  |  | 18 |  |  |  | 18 MARCH 2019 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------------- |
### IMM Service Request Report  S-20210129-435

## Appendix B: Medical Conditions in iMED by Category (iMED_20170221)

| ENVIRONMENTAL | MEDICAL ILLNESS (continued) |  |
| ------------------------- | ---------------------------- | --- |
| Acute Radiation Syndrome | Anxiety |  |
| Altitude Sickness | Appendicitis |  |

Barotrauma (ear/sinus block)  Atrial Fibrillation/Atrial Flutter

| Burns secondary to Fire | Back Pain (space adaptation) |  |
| ------------------------ | ----------------------------- | --- |

### Decompression Sickness Secondary to EVA  Behavioral Emergency

Eye Chemical Burn  Cardiogenic Shock Secondary to Myocardial infarction Headache (CO2 induced)

### Choking/Obstructed Airway

| Smoke Inhalation | Constipation (space adaptation) |  |
| ----------------------------------------- | -------------------------------------- | --- |
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
| ------------------------------------- | -------------------------------------- | --- |
| Acute Pancreatitis | Sudden Cardiac Arrest |  |
| Acute Prostatitis | Urinary Incontinence (space adaption) |  |
| Acute Sinusitis | Urinary Retention (space adaptation) |  |
| Allergic Reaction (mild to moderate) | Urinary Tract Infection |  |
| Anaphylaxis | Vaginal Yeast Infection |  |

Angina/Myocardial Infarction  Visual Impairment/Increased Intracranial Pressure (VIIP) (space adaption

|  | 19 | 18 MARCH 2019 |
| --- | --- | -------------- |
### IMM Service Request Report S-20210129-435

## Appendix C: iMED Updates 03/2018 – 05/2020

### Title Comments

- Added Real World Update summary: added data from LSAH including medical events from ISS Exp 15-39/40, ISS exp 9, STS 114-

System (RWS) 135, and STS 107 incidence data

- Added CHS updates Update summary: reconciliation of data entry errors (translational/typographic errors & incorrect denominator

to incidence and for BC/WC numbers). best case/worst case numbers (C2- 20190219-481)

- Updated RWS BC Update summary: applied use of established method for rare event estimation consistently across all BC/WC

and WC inputs values to produce a range of BC/WC values from a single point estimate. probabilities from single point values to a range (IMM CR C2-20190226-482)

- Updated worst case Update summary: Corrected incidence type to "processed in-flight" to accommodate using terrestrial data for

probability for Eye BC/WC due to limited in-flight data. Condition incidence is still based on in-flight data.

Corneal Ulcer (C2- 20190404-483 )

- Updated data for Update summary: 1) Corrected calculation error for WC probability of SANS. 2) Removed Diamox from VIIP

Visual Impairment resources. 3) updated EVAC probability based on SME input. (Probability of worst case EVAC was reduced from and/or Increased 0-21% to 0-1%.) 4) Removed fluorescein strips from VIIP resources, as it is the back of the eye that is being Intracranial examined. (SANS SMEs agree.)

Pressure (VIIP) (space adaptation) (C2-20200312-390)

- Updated incidence Update summary: Updated incidence by removing cases of EVA anti-fog surfactant-related eye irritation as this

for Eye Chemical surfactant is no longer in use.

Burn (C2-20200214- 389)

- Updating resources Update summary: 1) Updated iMED resources to match 2018 ISS Medkit. Also updated some quantity data and

from what was mass/volume data based on 2020 ISS content list. 2) separated ECG and BP monitor into distinct resources as flown on ISS in the combined unit is no longer flown 3) Combined items with equal treatment value among different sizes of 2012 to what is items (e.g. 18g vs 20g catheter) now flown on ISS as of February 2020 (C2-20200224-391) 20 18 MARCH 2019

| IMM Service Request Report |  |  | S-20210129-435 |  |
| --------------------------- | --- | --- | --------------- | --- |

## Appendix D: Conceptual Updates from IMM 3.0 to IMM 4

| Updates in IMM 4 | Description |  | What this means |  |
| ----------------- | ------------ | --- | ---------------- | --- |

Timeline  In addition to generating if  Previously in IMM 3, all

|  | conditions occur, IMM 4 |  | events occurred on day 1, |  |
| --- | -------------------------- | --- | ---------------------------- | --- |
|  | generates when conditions |  | and metrics, e.g. CHI, were |  |

calculated accordingly. In occur. IMM 4, CHI can be better estimated based on this change. Partial Treatment  IMM 4 gives partial credit for  Previously, if a resource was

|  | partial treatment in |  | unavailable for treatment, the |  |
| --- | --------------------- | --- | ------------------------------- | --- |

event was considered fully generating the outcomes of a

|  | condition |  | untreated, CHI, probability of |  |
| --- | ---------- | --- | ------------------------------- | --- |

EVAC and probability of LOCL were calculated based on the event being fully untreated. With partial treatment, CHI, EVAC, and LOCL are weighted between fully treated and fully untreated, i.e. can mean higher CHI, higher likelihood of NOT going to EVAC or LOCL. Alternative Drug  If primary drug required for  IMM 4 looks at available

|  | treatment is not available, |  | resources for equivalences |  |
| --- | ----------------------------- | --- | ----------------------------- | --- |
|  | IMM 4 searches for medically |  | between the primary drug and |  |
|  | appropriate substitutes |  | other pharmaceuticals. This |  |

can translate to less fully untreated events, and/or better partial treatment.

|  |  | 21 |  | 18 MARCH 2019 |
| --- | --- | --- | --- | -------------- |

---

## Source metadata

```yaml
source_filename: "iss-imm-pra-2021-update.pdf"
source_folder: "Mission Risk Reports/Lunar Orbit and Surface and Low Earth Orbit"
source_url: "https://drive.google.com/file/d/1jnt_6gYbuskPOREnAitnDHv6AOurUa-H/view"
source_drive_id: "1jnt_6gYbuskPOREnAitnDHv6AOurUa-H"
source_sha256: 6ae6b431e0ed41da26c8922b14ae7d94aad45885db835a5ce78b11cbed5b7369
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 21
ocr_performed: false
```
