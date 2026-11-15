# Detailed Lunar Risk

[View original PDF](https://drive.google.com/file/d/127pmjIYxOvv1iJpbZt9qxVuRrKNT_GHc/view) · **18 pages**

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
- [Appendix C: Medical Conditions Modified for the 30 Day DRM](#appendix-c-medical-conditions-modified-for-the-30-day-drm)

---

IMM Service Request Report – Detailed Lunar Risk S-20200619-427

## Executive Summary

The objective of this IMM support request is to provide a medical risk assessment, in particular, a breakdown of evacuations and loss of crew life by day, for Artemis 27.5 day Design Reference Missions (DRM). The probability of EVAC during the mission ranges from a daily minimum of zero to a daily maximum of 0.00038 (1 in 2,632) on day 15. The probability of LOCL during the mission ranges from a daily minimum of zero to a daily maximum of 0.00005 (1 in 20,000) on days 22 and 26.

## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are need for evacuation (EVAC) and loss of crew life (LOCL). The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profiles shown in Table 1. The crew profile is consistent with that of the previous Orion DRM from the IMM Service Request (SR) # S- 20180815-406 except for the addition of 4 EVAs each by 2 crew members for this request. (This 27.5-day DRM will have 4 EVAs performed on mission days 12, 13, 15, and 16.) The outcomes of certain IMM medical conditions are influenced by crew pre-existing medical 1 21 SEPTEMBER 2020

IMM Service Request Report – Detailed Lunar Risk S-20200619-427 history including coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data.

Table 1: 27.5 day DRM crew profile

Prior

### Sex Crowns EVA CAC Contacts Abdominal

Surgery Crew 1 Male Yes Yes (4) Yes Yes No Crew 2 Male No No No Yes No Crew 3 Male No No No No No Crew 4 Female No Yes (4) Yes No Yes

### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix B.

However, to better approximate Artemis real world system, a subset of conditions was removed or modified for this request as described in Appendix C. The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data contained within the Integrated Medical Evidence Database (iMED). For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS.

Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all- untreated (no Medkit) and baseline MedCap (Medkit without resupply). For exploration missions, the MedCap state should most closely resemble a real world deep space mission where resupply is not possible but where utilization of partial and alternative treatment can occur. For this service request, the “MedCap” results for the 27.5 day DRM correspond to the 2 21 SEPTEMBER 2020

IMM Service Request Report – Detailed Lunar Risk S-20200619-427 summation of a 5 lb.-constrained set of resources generated for S-20190528-412 using the IMM 4.1 Optimization module and the 20 lb.-constrained set of resources generated from S- 20180815-406. Fractional units were rounded to the nearest integer for the sets of resources.

Therefore, the actual set of resources may be more than 25 lbs. This summation process did generate some possible unnecessary resource redundancies. Adding the contents of one set of resources to another set of resources results in a list where some items have a greater total quantity than would actually be flown. For example, if one resource set contained a blood oximeter and the second resource set also contained a blood oximeter, the summation of those two sets would contain two blood oximeters when, in reality, it is possible that only one might be flown. The final decision concerning whether those resources are redundant would be made by the program involved.

### Main Outcomes

The IMM primary medical outcomes include the number of total medical events (TME), crew health index (CHI), probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources. CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew. EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. 3 21 SEPTEMBER 2020

IMM Service Request Report – Detailed Lunar Risk S-20200619-427 LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, the simulation usually assigns each crew member only one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model. Catastrophic vehicle failures such as the Challenger and Columbia accidents, and MMOD (micrometeorite and orbital debris) are not considered as possible causes of EVAC and LOCL.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources.

If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap (no resupply) scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If none of the resources are available to treat the event, the event is considered "untreated." The initial quantities for medical resources are derived from the summation of optimized medical kits from IMM S-20190528-412 and S-20180815-406. Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated scenario and a 0-100% chance of going to EVAC in the best case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC.

### Modeling Approach

One hundred thousand (100,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria. Convergence criteria are met when there is less than or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 2 - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport. 4 21 SEPTEMBER 2020

IMM Service Request Report – Detailed Lunar Risk S-20200619-427 IMM outcomes were determined for the DRMs using the ISS MedCap scenario where all conditions are treated, partially treated or untreated based on the available resources of the ISS MedCap without resupply. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, EVAC and LOCL results are presented. Features, assumptions and limitations pertinent to this report are described in a separate section below.

### Optimization Approach

The two optimized medical kits were selected solely to meet the optimization risk criteria within the specified mass and volume constraints for S-20190528-412 and S-20180815-406. The DRM for S-20180815-406 was a 21 day DRM with end user specified mass constraint of 20 lbs. (~9.07 kg) and a volume constraint of 13,721 cm3, optimized to maximize CHI. For S- 20190528-412, the end user specified a constraint of 5 lbs. (2.27 kg) and no volume constraint for the optimization to maximize CHI. It is important to note that the IMM v4.1 optimization routine used in this request considers resources at the unit resource level. Because of this, some resource quantities in the generated optimized kit have decimal values. Quantities for items in the medical kit must be integer-valued (as most resources cannot be fractionalized), therefore these quantities were rounded up to the nearest integer value. It should also be noted that packaging mass and volume are not considered in the IMM and therefore have no effect on optimization of a medical kit. The optimization routine only considers resources marked as essential in iMED when generating the kit. It also does not consider resource dependencies when generating the kit. In other words, even though a set of resources may be required for treatment in reality, the optimization routine may only include a subset of those resources. The entire set of required resources is not bundled together. When generating the optimized kit, the quantity of each resource available to add to the kit is determined by the maximum quantity needed during a simulation trial. It is not restricted to the quantity in the ISS medkit. Therefore, it is possible for the generated optimized medical kit to include a higher quantity for a particular resource than is included in the ISS medkit. The results of this optimization should only be used as an evidence-based guide to the development of medical capability and should not be used in isolation to design a medical kit without the input of subject matter expertise and operational experience. 5 21 SEPTEMBER 2020

IMM Service Request Report – Detailed Lunar Risk S-20200619-427 Features, Assumptions and Limitations of IMM Version 4.1 [3]

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

Solar Particle Events) and EVA-linked conditions (triggered by EVA events), occur independently of the occurrence of mission events and other medical conditions.

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

characteristics (sex, presence of CAC, crowns, contacts, history of abdominal surgery) have the same likelihood distribution of experiencing the condition. 6 21 SEPTEMBER 2020

IMM Service Request Report – Detailed Lunar Risk S-20200619-427

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

IMM assumes the condition begins identically in all affected crew members at the beginning of the solar particle event.

25. The IMM does not decrement non-consumable items and allows all non-consumable

items to be used simultaneously by multiple astronauts (e.g. blood pressure cuff).

### Additional Assumptions and Limitations for This Request

1. The IMM does not consider medical conditions that are specific to Lunar operations in a partial

gravity environment.

2. The IMM is incapable of modeling a ‘mission within a mission’ where the medical capabilities

and the number of crew differ for each.

## Results

A breakdown of the number of Evacuations and Loss of Crew Life events are presented in the tables below. Table 2 shows a breakdown of the number of evacuation events for the 27.5 day DRM Medical Capabilities and fully untreated timelines. Table 3 shows a breakdown of the number of loss of crew life events for the 27.5 day DRM Medical Capabilities and fully untreated timelines.

Table 4 and Table 5 show the same results as Table 2 and Table 3 respectively after adjusting

7 21 SEPTEMBER 2020

IMM Service Request Report – Detailed Lunar Risk S-20200619-427 the number of events on the last day. In the IMM, if the medical event’s endstate is calculated as EVAC or LOCL that would have occurred after the end of the mission, its EVAC or LOCL start time is set as the mission length. Therefore, EVACs and LOCLs with start times equal to the length of the mission were removed in the adjusted tables. Recall that the number of trials processed for each simulation is 100,000. For this request, after the first initial day on which an evacuation or loss of crew life event occurred, any further events of evacuation or loss of crew life were not considered in order to more closely align with the spaceflight reality where an evacuation or loss of crew life would signal the end of a mission. Therefore, for each trial, only the initial evacuation or loss of crew life events were counted for the totals. For example, if evacuation events occurred on days 2,3, and 5, only the evacuation on day 2 would be counted. The total number of evacuation or loss of crew life events in a given column of the table is equivalent to the number of trials (out of 100,000) in which an evacuation or loss of crew life event occurred. In order to generate the tables, the following post-processing steps were performed to extract the reported values from the raw simulation data. With regards to step 3, when IMM calculates clinical phase start times and durations and EVAC/LOCL start times, they are based on parameters in iMED without consideration of the length of the mission. Therefore, the EVAC/LOCL can initially occur after the mission has ended. In order to ensure that QTL is calculated correctly, the start times and durations are adjusted as necessary. For an event that goes to EVAC, the QTL calculated after the EVAC occurred is calculated as the length of the mission minus the EVAC start time. (See Figure 1: Case 1 below.) Therefore, if the EVAC start time was after the mission length, then time would be subtracted from the QTL instead of adding to it. Rather than not including the EVAC in the simulation results in order to calculate QTL correctly, the start time is set so that time difference is zero (so that Quality Time is not lost after the mission has ended). (See Figure 1: Case 2 below.) This is similarly done for LOCL. Including these EVAC and LOCL events with a start time set as mission length is more conservative for the probability EVAC and LOCL but, allows the consideration of those events that would have led to an EVAC or LOCL without miscalculating the QTL.

Figure 1: Case 2 – The EVAC/LOCL is scheduled to occur after the mission ends. *** The calculation

Figure 1: Case 1 – The EVAC/LOCL is scheduled to occur before of the mission ends. only makes sense if [EVAC/LOCL start time] is equal to [Length of Mission]. Therefore, IMM sets the

[EVAC/LOCL start time] equal to [Length of Mission]. 8 21 SEPTEMBER 2020

IMM Service Request Report – Detailed Lunar Risk  S-20200619-427 For evacuations,

| 1. | For the Medcap timeline |  |  |  |
| --- | ------------------------ | --- | --- | --- |

a.  Isolate all timeline events b.  Label the start day of each evacuation.

| 2. | Remove all rows for events that did not go to evacuation. |  |  |  |
| --- | ---------------------------------------------------------- | --- | --- | --- |

3.  Remove all EVACs with start time equal to the length of the mission (the model resets the

start time to the length of the mission if the EVAC was scheduled after the end of the mission). **This step is only performed to create the adjusted tables. **

| 4. | For each trial |  |  |  |
| --- | --------------- | --- | --- | --- |

a.  Keep only first the first instance of evacuation.

| 5. | For each day |  |  |  |
| --- | ------------- | --- | --- | --- |

a.  Count the number of rows on which an evacuation occurred on that day.

For EVA and non-EVA crew, the resulting table from the steps 1- 4 was used as a starting point.

| 6. | Separate the evacuation events by EVA and non-EVA crew. |  |  |  |
| --- | -------------------------------------------------------- | --- | --- | --- |
| 7. | For each set of crew, for each day |  |  |  |

a.  Count the number of rows on which an evacuation occurred on that day. Therefore, for each day the sum of the number of EVACs for the EVA and non-EVA crew is equivalent to the number of evacuations on each day counted in step 4.

8.  The probability of evacuation on each day is calculated as the number of evacuations

divided by (the number of trials minus the sum of the previous days). Consider the table below as an example.

### Number of Trials

|  | Start day | Number of EVACs |  | Probability |
| --- | ---------- | ---------------- | --- | ------------ |

Remaining

|  | 1 | 5 | 100,000 | 5/100,000 |
| --- | --- | --- | -------- | ---------- |
|  | 2 | 4 | 99,995 | 4/99,995 |
|  | 3 | 2 | 99,991 | 2/99,991 |
9.  Steps 1-7 were similarly performed for loss of crew life events.

|  |  |  | 9 | 21 SEPTEMBER 2020 |
| --- | --- | --- | --- | ------------------ |
IMM Service Request Report – Detailed Lunar Risk  S-20200619-427

Table 2: This table presents the number of times the first evacuation event occurred on each day

for the 27.5 day DRM for the Medical Capabilities timeline. The days highlighted in green are days on which EVAs were scheduled to occur.

|  | MedCap (total) |  | MedCap (EVA crew) |  | MedCap (non-EVA crew) |  |
| --- | --------------- | --- | ------------------ | --- | ---------------------- | --- |

Start day  Number of EVACs  Probability  Number of EVACs  Probability  Number of EVACs  Probability

| 1 | 8 | 0.00008 | 6 | 0.00006 | 2 | 0.00002 |
| --- | --- | -------- | --- | -------- | --- | -------- |

0.00006

| 2 | 19 | 0.00019 | 13 | 0.00013 | 6 |  |
| --- | --- | -------- | --- | -------- | --- | --- |

0.00019

| 3 | 31 | 0.000310 | 12 | 0.00012 | 19 |  |
| --- | --- | --------- | --- | -------- | --- | -------- |
| 4 | 25 | 0.000250 | 12 | 0.00012 | 13 | 0.00013 |
| 5 | 21 | 0.000210 | 12 | 0.00012 | 9 | 0.00009 |
| 6 | 23 | 0.000230 | 12 | 0.00012 | 11 | 0.00011 |

0.00010

| 7 | 22 | 0.000220 | 12 | 0.00012 | 10 |  |
| --- | ----- | ---------- | ---- | -------- | ----- | -------- |
| 8 | 16 | 0.000160 | 12 | 0.00012 | 4 | 0.00004 |
| 9 | 27 | 0.000270 | 15 | 0.00015 | 12 | 0.00012 |
| 10 | 22 | 0.000220 | 11 | 0.00011 | 11 | 0.00011 |
| 11 | 29 | 0.000290 | 19 | 0.00019 | 10 | 0.00010 |
| 12 | 21 | 0.000210 | 13 | 0.00013 | 8 | 0.00008 |
| 13 | 23 | 0.000230 | 11 | 0.00011 | 12 | 0.00012 |
| 14 | 26 | 0.000260 | 15 | 0.00015 | 11 | 0.00011 |
| 15 | 38 | 0.000381 | 11 | 0.00011 | 27 | 0.00027 |
| 16 | 25 | 0.000250 | 11 | 0.00011 | 14 | 0.00014 |
| 17 | 28 | 0.000281 | 22 | 0.00022 | 6 | 0.00006 |
| 18 | 33 | 0.000331 | 19 | 0.00019 | 14 | 0.00014 |
| 19 | 37 | 0.000371 | 20 | 0.00020 | 17 | 0.00017 |
| 20 | 22 | 0.000221 | 13 | 0.00013 | 9 | 0.00009 |
| 21 | 30 | 0.000301 | 17 | 0.00017 | 13 | 0.00013 |
| 22 | 37 | 0.000371 | 20 | 0.00020 | 17 | 0.00017 |
| 23 | 31 | 0.000311 | 18 | 0.00018 | 13 | 0.00013 |
| 24 | 27 | 0.000271 | 16 | 0.00016 | 11 | 0.00011 |
| 25 | 36 | 0.000362 | 20 | 0.00020 | 16 | 0.00016 |
| 26 | 34 | 0.0003422 | 19 | 0.00019 | 15 | 0.00015 |
| 27 | 34 | 0.0003423 | 19 | 0.00019 | 15 | 0.00015 |
| 28 | 219* | 0.0022059 | 96* | 0.00096 | 123* | 0.00123 |
*- Not adjusted for events occurring on or after end of mission.

|  |  |  | 10 |  | 21 SEPTEMBER 2020 |  |
| --- | --- | --- | --- | --- | ------------------ | --- |
IMM Service Request Report – Detailed Lunar Risk  S-20200619-427

Table 3: This table presents the number of times the first loss of crew life event occurred on each

day for the 27.5 day DRM for the Medical Capabilities timeline. The days highlighted in green are days on which EVAs were scheduled to occur.

|  | MedCap (total) |  | MedCap (EVA crew) |  | MedCap (non-EVA crew) |  |
| --- | --------------- | --- | ------------------ | --- | ---------------------- | --- |

Start day  Number of LOCLs  Probability  Number of LOCLs  Probability  Number of LOCLs  Probability

| 1 | 1 | 0.00001 | 1 | 0.00001 | 0 | 0 |
| --- | ---- | ------------ | --- | ------------ | --- | ------------ |
| 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4 | 0 | 0 | 0 | 0 | 0 | 0 |
| 5 | 2 | 2.00002E-05 | 1 | 1.00001E-05 | 1 | 0.00001 |
| 6 | 1 | 1.00003E-05 | 0 | 0 | 1 | 1.00001E-05 |
| 7 | 0 | 0 | 0 | 0 | 0 | 0 |
| 8 | 3 | 3.00012E-05 | 1 | 1.00002E-05 | 2 | 2.00004E-05 |
| 9 | 0 | 0 | 0 | 0 | 0 | 0 |
| 10 | 1 | 1.00007E-05 | 0 | 0 | 1 | 1.00004E-05 |
| 11 | 3 | 3.00024E-05 | 1 | 1.00003E-05 | 2 | 2.0001E-05 |
| 12 | 0 | 0 | 0 | 0 | 0 | 0 |
| 13 | 0 | 0 | 0 | 0 | 0 | 0 |
| 14 | 0 | 0 | 0 | 0 | 0 | 0 |
| 15 | 1 | 1.00011E-05 | 1 | 1.00004E-05 | 0 | 0 |
| 16 | 3 | 3.00036E-05 | 1 | 1.00005E-05 | 2 | 2.00014E-05 |
| 17 | 1 | 1.00015E-05 | 0 | 0 | 1 | 1.00009E-05 |
| 18 | 2 | 2.00032E-05 | 2 | 2.00012E-05 | 0 | 0 |
| 19 | 0 | 0 | 0 | 0 | 0 | 0 |
| 20 | 3 | 3.00054E-05 | 2 | 2.00016E-05 | 1 | 1.0001E-05 |
| 21 | 0 | 0 | 0 | 0 | 0 | 0 |
| 22 | 5 | 5.00105E-05 | 4 | 4.0004E-05 | 1 | 1.00011E-05 |
| 23 | 1 | 1.00026E-05 | 1 | 1.00014E-05 | 0 | 0 |
| 24 | 1 | 1.00027E-05 | 1 | 1.00015E-05 | 0 | 0 |
| 25 | 0 | 0 | 0 | 0 | 0 | 0 |
| 26 | 5 | 5.0014E-05 | 3 | 3.00048E-05 | 2 | 2.00024E-05 |
| 27 | 0 | 0 | 0 | 0 | 0 | 0 |
| 28 | 14* | 0.000140046 | 9* | 9.00171E-05 | 5* | 5.0007E-05 |
*- Not adjusted for events occurring on or after end of mission.

|  |  |  | 11 |  | 21 SEPTEMBER 2020 |  |
| --- | --- | --- | --- | --- | ------------------ | --- |
IMM Service Request Report – Detailed Lunar Risk  S-20200619-427

Table 4: This table presents the number of times the first evacuation event occurred on each day

for the 27.5 day DRM for the Medical Capabilities timeline after adjusting the number of evacuation events on the last day for events that would have occurred after the end of the mission. The days highlighted in green are days on which EVAs were scheduled to occur.

|  | MedCap (total) |  | MedCap (EVA crew) |  | MedCap (non-EVA crew) |  |
| --- | --------------- | --- | ------------------ | --- | ---------------------- | --- |

Start day  Number of EVACs  Probability  Number of EVACs  Probability  Number of EVACs  Probability

| 1 | 8 | 0.00008 | 6 | 0.00006 | 2 | 0.00002 |
| --- | ---- | ------------ | --- | ------------ | --- | ------------ |
| 2 | 19 | 0.000190015 | 13 | 0.000130008 | 6 | 6.00012E-05 |
| 3 | 31 | 0.000310084 | 12 | 0.000120023 | 19 | 0.000190015 |
| 4 | 25 | 0.000250145 | 12 | 0.000120037 | 13 | 0.000130035 |
| 5 | 21 | 0.000210174 | 12 | 0.000120052 | 9 | 9.0036E-05 |
| 6 | 23 | 0.000230239 | 12 | 0.000120066 | 11 | 0.000110054 |
| 7 | 22 | 0.00022028 | 12 | 0.00012008 | 10 | 0.00010006 |
| 8 | 16 | 0.000160239 | 12 | 0.000120095 | 4 | 4.0028E-05 |
| 9 | 27 | 0.000270446 | 15 | 0.000150137 | 12 | 0.000120089 |
| 10 | 22 | 0.000220423 | 11 | 0.000110117 | 11 | 0.000110095 |
| 11 | 29 | 0.000290622 | 19 | 0.000190223 | 10 | 0.000100097 |
| 12 | 21 | 0.000210512 | 13 | 0.000130177 | 8 | 8.00857E-05 |
| 13 | 23 | 0.000230609 | 11 | 0.000110164 | 12 | 0.000120138 |
| 14 | 26 | 0.000260748 | 15 | 0.00015024 | 11 | 0.00011014 |
| 15 | 38 | 0.000381193 | 11 | 0.000110193 | 27 | 0.000270373 |
| 16 | 25 | 0.000250881 | 11 | 0.000110205 | 14 | 0.000140231 |
| 17 | 28 | 0.000281057 | 22 | 0.000220434 | 6 | 6.01076E-05 |
| 18 | 33 | 0.000331339 | 19 | 0.000190417 | 14 | 0.000140259 |
| 19 | 37 | 0.000371624 | 20 | 0.000200477 | 17 | 0.000170339 |
| 20 | 22 | 0.000221048 | 13 | 0.000130336 | 9 | 9.01948E-05 |
| 21 | 30 | 0.000301495 | 17 | 0.000170462 | 13 | 0.000130293 |
| 22 | 37 | 0.000371956 | 20 | 0.000200578 | 17 | 0.000170406 |
| 23 | 31 | 0.000311755 | 18 | 0.000180556 | 13 | 0.000130332 |
| 24 | 27 | 0.000271613 | 16 | 0.000160523 | 11 | 0.000110296 |
| 25 | 36 | 0.00036225 | 20 | 0.000200686 | 16 | 0.000160448 |
| 26 | 34 | 0.000342249 | 19 | 0.00019069 | 15 | 0.000150444 |
| 27 | 34 | 0.000342366 | 19 | 0.000190727 | 15 | 0.000150466 |
| 28 | 12* | 0.000120876 | 4* | 4.01606E-05 | 8* | 8.02608E-05 |
*- Adjusted to exclude events occurring on or after end of mission.

|  |  |  | 12 |  | 21 SEPTEMBER 2020 |  |
| --- | --- | --- | --- | --- | ------------------ | --- |
IMM Service Request Report – Detailed Lunar Risk  S-20200619-427

Table 5: This table presents the number of times the first loss of crew life event occurred on each

day for the 27.5 day DRM for the Medical Capabilities timeline after adjusting the number of loss of crew life events on the last day for events that would have occurred after the end of the mission.  The days highlighted in green are days on which EVAs were scheduled to occur.

|  | MedCap (total) |  | MedCap (EVA crew) |  | MedCap (non-EVA crew) |  |
| --- | --------------- | --- | ------------------ | --- | ---------------------- | --- |

Start day  Number of LOCLs  Probability  Number of LOCLs  Probability  Number of LOCLs  Probability

| 1 | 1 | 0.00001 | 1 | 0.00001 | 0 | 0 |
| --- | --- | ------------ | --- | ------------ | --- | ------------ |
| 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4 | 0 | 0 | 0 | 0 | 0 | 0 |
| 5 | 2 | 2.00002E-05 | 1 | 1.00001E-05 | 1 | 0.00001 |
| 6 | 1 | 1.00003E-05 | 0 | 0 | 1 | 1.00001E-05 |
| 7 | 0 | 0 | 0 | 0 | 0 | 0 |
| 8 | 3 | 3.00012E-05 | 1 | 1.00002E-05 | 2 | 2.00004E-05 |
| 9 | 0 | 0 | 0 | 0 | 0 | 0 |
| 10 | 1 | 1.00007E-05 | 0 | 0 | 1 | 1.00004E-05 |
| 11 | 3 | 3.00024E-05 | 1 | 1.00003E-05 | 2 | 2.0001E-05 |
| 12 | 0 | 0 | 0 | 0 | 0 | 0 |
| 13 | 0 | 0 | 0 | 0 | 0 | 0 |
| 14 | 0 | 0 | 0 | 0 | 0 | 0 |
| 15 | 1 | 1.00011E-05 | 1 | 1.00004E-05 | 0 | 0 |
| 16 | 3 | 3.00036E-05 | 1 | 1.00005E-05 | 2 | 2.00014E-05 |
| 17 | 1 | 1.00015E-05 | 0 | 0 | 1 | 1.00009E-05 |
| 18 | 2 | 2.00032E-05 | 2 | 2.00012E-05 | 0 | 0 |
| 19 | 0 | 0 | 0 | 0 | 0 | 0 |
| 20 | 3 | 3.00054E-05 | 2 | 2.00016E-05 | 1 | 1.0001E-05 |
| 21 | 0 | 0 | 0 | 0 | 0 | 0 |
| 22 | 5 | 5.00105E-05 | 4 | 4.0004E-05 | 1 | 1.00011E-05 |
| 23 | 1 | 1.00026E-05 | 1 | 1.00014E-05 | 0 | 0 |
| 24 | 1 | 1.00027E-05 | 1 | 1.00015E-05 | 0 | 0 |
| 25 | 0 | 0 | 0 | 0 | 0 | 0 |
| 26 | 5 | 5.0014E-05 | 3 | 3.00048E-05 | 2 | 2.00024E-05 |
| 27 | 0 | 0 | 0 | 0 | 0 | 0 |
| 28 | 1* | 1.00033E-05 | 0* | 0 | 1* | 1.00014E-05 |
*- Adjusted to exclude events occurring on or after end of mission.

|  |  |  | 13 |  | 21 SEPTEMBER 2020 |  |
| --- | --- | --- | --- | --- | ------------------ | --- |
IMM Service Request Report – Detailed Lunar Risk S-20200619-427

## Discussion

The probabilities of EVAC and LOCL are low due to the short duration of this DRM. The probability of EVAC during the mission ranges from a daily minimum of zero to a daily maximum of 0.00038 (1 in 2,632) on day 15. Day 15 was an EVA day. The probability of LOCL during the mission ranges from a daily minimum of zero to a daily maximum of 0.00005 (1 in 20,000) on days 22 and 26. Days 22 and 26 were not EVA days.

## References

1. Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114.

2011. Houston, TX, NASA, Johnson Space Center. Ref Type: Report

2. Integrated Medical Model Project. Integrated Medical Model Software Requirements

Specification. IMM-SFTWR-008. 2017. Houston, Texas, KBRwyle Integrated Science, Technology and Engineering. Ref Type: Report

3. Integrated Medical Model Project. Integrated Medical Model version 4 Assumptions and

Limitations. IMM-GEN-300. 2017. Houston, Texas, KBRwyle Integrated Science and Engineering Space Medicine Information Technology. Ref Type: Report

4. NASA-STD-7009: Standard for Models and Simulations (2008). NASA: Washington, DC.

5. ISS Medical Checklist (Med CL), 04 June 2014, NASA Johnson Space Center, Medical

### Operations Group

6. ISS PRA Model v.3.2.0. ISS PRA Fire and Ammonia Model Contributions to the Integrated

Medical Model. 2015. Houston, Texas, NASA Johnson Space Center. Ref Type: Report 14 21 SEPTEMBER 2020

IMM Service Request Report – Detailed Lunar Risk  S-20200619-427

## Appendix A: IMM Status at Time of Service Request Report

| Validation status for |  |  |  |  |  |  |  |  |  |
| ---------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

IMM IMM V&V Matrix: The following bar chart shows the IMM v4.1 MATLAB status of IMM validation for each IMM element listed.

- Compliance with  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6);

NASA-Standard-7009  however there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been

| requirements | fully attained. |  |  |  |  |  |  |  |  |
| ------------- | ---------------- | ---------- | --- | ---------------------- | --- | --------------- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |
|  |  | Compliant |  | Compliance Incomplete |  | Not applicable |  |  |  |
|  |  |  | 36 |  | 5 |  | 5 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

- Current NASA-  IMM Credibility Matrix: The following table shows the overall IMM v4.1 MATLAB credibility assessment score (CAS), individual factor CAS,

Standard-7009  customer-specified sufficiency thr esholds, and Fwaecitgohr ted scores. L egeSnudff idcieepniccyts  CA S sFcaocreto rd esign ateWd eriagnhgteed  and  colorO avsesriaglnl mSceonrtes  from credibility assessment  NASA-Standard-7009.  Thresholds  Score  Scores

| score |  |  |  |  |  |  |  |  |  |
| ------ | --- | --- | ------------- | --- | ---- | ------ | --- | -------- | --- |
|  |  |  | Verification |  | 4 | 3.7 |  | 0.28 |  |
|  |  |  | Validation |  | 3 |  | 3 | 0.45 |  |
| --- | --- | --- | ----------- | --- | ---- | --- | ---- | -------- | --- |
|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --------------- | --- | --- | --- | --- | ----- | --- |
|  |  |  | Input Pedigree |  | 3 |  | 3 | 0.53 |  |
|  |  |  | Results Uncertainty |  | 3 |  | 3 | 0.60 | 3.06 |
| --- | --- | --- | -------------------- | --- | ---- | --- | ---- | ------- | ----- |
|  |  |  | Results Robustness |  | 3 |  | 3 | 0.45 |  |
| --- | --- | --- | ------------------- | --- | ---- | --- | ---- | -------- | --- |
|  |  |  | Use History |  | 3 |  | 3 | 0.45 |  |
| --- | --- | --- | ------------ | --- | ---- | --- | ---- | -------- | --- |
|  |  |  | M&S Management |  | 2 |  | 2 | 0.10 |  |
| --- | --- | --- | --------------- | --- | ---- | --- | ---- | -------- | --- |
|  |  |  | People Qualification |  | 4 |  | 4 | 0.20 |  |
| --- | --- | --- | --------------------- | --- | ---- | --- | ---- | -------- | --- |
|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Additional verification | None |  |  |  |  |  |  |  |  |
| ------------------------ | ----- | --- | --- | --- | --- | --- | --- | --- | --- |

and validation information applicable to this analysis

| Integrated Medical | iMED Lockdown IDs: (57), created on (8/2/2019) |  |  |  |  |  |  |  |  |
| ------------------- | ----------------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- |

### Evidence Database

(iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software. MATLAB and all other MathWorks product version  or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to | None |  |  |  |  |  |  |  |  |
| ---------------------- | ----- | --- | --- | --- | --- | --- | --- | --- | --- |

the code for analysis

|  |  |  |  | 15 |  |  |  | 21 SEPTEMBER 2020 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | ------------------ | --- |
IMM Service Request Report – Detailed Lunar Risk  S-20200619-427

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

| Headache (CO | 2  induced) | Choking/Obstructed Airway |  |
| ----------------------------------------- | ------------ | -------------------------------------- | --- |
| Smoke Inhalation |  | Constipation (space adaptation) |  |
| Toxic Exposure: Ammonia |  | Dental: Exposed Pulp |  |
| INJURY/TRAUMA |  | Dental Caries |  |
| Abdominal Injury |  | Dental: Abscess |  |
| Acute Compartment Syndrome |  | Dental: Crown Loss |  |
| Ankle Sprain/Strain |  | Dental: Filling Loss |  |
| Back Sprain/Strain |  | Depression |  |
| Chest Injury |  | Diarrhea |  |
| Dental: Avulsion (tooth loss) |  | Eye Corneal Ulcer |  |
| Elbow Dislocation |  | Eye Infection |  |
| Elbow Sprain/Strain |  | Gastroenteritis |  |
| Eye Irritation/Abrasion |  | Headache (Late) |  |
| Eye Penetration (foreign body) |  | Headache (space adaptation) |  |
| Finger Dislocation |  | Hearing Loss |  |
| Fingernail Delamination Secondary to EVA |  | Hemorrhoids |  |
| Head Injury |  | Herpes Zoster Reactivation (shingles) |  |
| Hip Sprain/Strain |  | Hypertension |  |
| Hip/Proximal Femur Fracture |  | Indigestion |  |
| Knee Sprain/Strain |  | Influenza |  |

Lower Extremity Stress Fracture  Insomnia (space adaptation)

| Lumbar Spine Fracture |  | Medication Overdose/Adverse Reaction |  |
| ------------------------------ | --- | ------------------------------------- | --- |
| Neck Sprain/Strain |  | Mouth Ulcer |  |
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

|  |  | 16 | 21 SEPTEMBER 2020 |
| --- | --- | --- | ------------------ |
IMM Service Request Report – Detailed Lunar Risk S-20200619-427

## Appendix C: Medical Conditions Modified for the 30 Day DRM

Due to limited vehicle size consisting of a single module and limited movement of crew the following major traumatic injury conditions are judged highly unlikely to occur during a 27.5 day DRM (and were removed prior to running the simulation):

- Abdominal Injury

- Acute Compartment Syndrome

- Chest Injury

- Elbow Dislocation

- Head Injury

- Hip/Proximal Femur Fracture

- Lower Extremity (LE) Stress Fracture

- Lumbar Spine Fracture

- Shoulder Dislocation

- Neurogenic Shock

- Traumatic Hypovolemic Shock

Due to short mission duration, the following condition was removed prior to running the simulation:

- Depression

Because ammonia is not planned to be used in the vehicles, the following condition was also removed prior to running the simulation:

- Toxic Exposure - Ammonia

Visual Impairment and/or Increased Intracranial Pressure (VIIP) (Space Adaptation):

- The probability of EVAC and probability of LOCL were set to zero for VIIP.

Rather than considering the entire ISS volume for application of Fire Model result input to the IMM, ISS Node 3 was used to approximate the size of the Orion vehicle. The corresponding Node 3 Fire Model results (directly from the ISS PRA Fire Model v3.2) were used to update Burns Secondary to Fire and Smoke Inhalation for this request as follows:

- Burns Secondary to Fire:

o incidence 0.00613 (events/person year) - probability one or more crew exposed to response level event (value same as for likelihood for Fire Sustains (response level event) since modeling for single compartment, i.e. Node 3) (v3.2); 17 21 SEPTEMBER 2020

IMM Service Request Report – Detailed Lunar Risk S-20200619-427 o worst case scenario = 0-5% - (uncontrollable fire- not vehicle) (value = 0.0486; derived from uncontrolled fire event/probability one or more crew exposed to response level event)

- Smoke Inhalation:

o incidence 0.00613 (events/person year) - Fire Sustains (response level event) (v3.2); o worst case scenario = 0-5% - (uncontrollable fire- not vehicle) (value = 0.0486; derived from uncontrolled fire event/Fire Sustains (response level event)) 18 21 SEPTEMBER 2020

---

## Source metadata

```yaml
source_filename: "detailed-lunar-risk.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports"
source_url: "https://drive.google.com/file/d/127pmjIYxOvv1iJpbZt9qxVuRrKNT_GHc/view"
source_drive_id: "127pmjIYxOvv1iJpbZt9qxVuRrKNT_GHc"
source_sha256: e581321d2336f1eed36193a9f9d8460cda7c4d7e889413b09c56ea7169342f8c
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 18
ocr_performed: false
```
