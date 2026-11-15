# Medical Risk Assessment For An Accelerated And Standard Mars Mission

[View original PDF](https://drive.google.com/file/d/1BLgy2JWqorZ86L-s3lJL3jq55tYzP0-7/view) · **21 pages**

**Collection:** Mission Risk Reports/Mars

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
- [Appendix C: Medical Conditions Excluded or Modified for the AMM (426-](#appendix-c-medical-conditions-excluded-or-modified-for-the-amm-426-)
- [Appendix D: Combined instances of influential conditions (i.e. independent of best or worst case,](#appendix-d-combined-instances-of-influential-conditions-ie-independent-of-best-or-worst-case)

---

IMM Service Request Report – Long Duration Risk Posture S-20200303-423

## Executive Summary

The objective of this IMM support request is to provide a medical risk assessment for medical risk posture for long duration Mars DRMs, specifically an Accelerated Mars Mission (AMM) of 426 days with 30 four-person EVAs and a Standard Mars Mission (SMM) of 923 days with 401 four-person EVAs. The IMM was modified to simulate a Mars mission with partial-gravity EVAs. The simulation results are as follows:

- Average number of Total of Medical Events (TME):

- For the (AMM) (426-day DRM): 156.45 events.

- For the (SMM) (923-day DRM): 603.03 events.

- Average Crew Health Index (CHI):

- For the AMM DRM: 91.56.

- For the SMM DRM: 72.52.

- Probability of consideration for Evacuation (EVAC):

- For the AMM DRM: 0.0625.

- For the SMM DRM: 0.2940.

- Probability of Loss of Crew Life (LOCL):

- For the AMM DRM: 0.0057.

- For the SMM DRM: 0.0158.

1 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423

## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are average number of total medical events (TME), crew health index (CHI), need for evacuation (EVAC) and loss of crew life (LOCL). The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profile shown in Table 1. The outcomes of certain IMM medical conditions are influenced by pre-existing medical history including: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data.

Table 1: DRM crew profile

### Prior Abdominal

### Sex Crowns EVA CAC Contacts

Surgery Crew 1 Male Yes Yes No No No Crew 2 Male No Yes Yes No No Crew 3 Female No Yes No Yes No Crew 4 Female No Yes No No Yes 2 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423

### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix B.

However, to better approximate long duration missions with EVAs and partial gravity environments, the set of conditions was modified for this request as described in Appendix C. The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data contained within the Integrated Medical Evidence Database (iMED). For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. In- flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS.

Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all- untreated (no Medkit) and baseline MedCap (Medkit without resupply). For exploration missions, the MedCap state should most closely resemble a real-world deep space mission where resupply is not possible but where utilization of partial and alternative treatment can occur.

For this service request, the “MedCap” results for the DRMs correspond to the set of resources baselined to ISS according to current iMED data.

### Main Outcomes

The IMM primary medical outcomes include the number of total medical events (TME), crew health index (CHI), probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources. CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for 3 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423 definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, the simulation usually assigns each crew member only one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model. Catastrophic vehicle failures such as the Challenger and Columbia accidents, and MMOD (micrometeorite and orbital debris) are not considered as possible causes of EVAC and LOCL.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources. If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap (no resupply) scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If none of the resources are available to treat the event, the event is considered "untreated." The initial quantities for medical resources are baselined to a fully stocked ISS medical kit (MedCap) for one simulation, a 5 lb.-constrained set of resources generated for this service request for the second simulation, and the summation of the optimized medical kit from IMM SR-201808-406 and the previously mentioned 5 lb.-constrained set of resources for the third simulation. Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated scenario and a 0-100% chance of going to EVAC in the best case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC.

### Modeling Approach

One hundred thousand (100,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria.

Convergence criteria are met when there is less than or equal to a 5% change in the average standard 4 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423 deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 2 - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport. IMM outcomes were determined for the DRMs using the ISS MedCap scenario where all conditions are treated, partially treated or untreated based on the available resources of the ISS MedCap without resupply. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, TME, CHI, EVAC and LOCL results are presented. Features, assumptions and limitations pertinent to this report are described in a separate section below. The IMM is baselined to ISS and does not simulate EVAs in partial-gravity environments. For this service request, in accordance with the assumption that crewmembers would perform EVAs in partial gravity environments, the set of conditions listed in Appendix C were invalidated outside the requested EVA windows (i.e. could only occur during the EVAs). These conditions are unlikely to occur during flight within the space vehicle due to normal ambient pressure and limited vehicle size consisting of a single module with limited movement of crew. However, these conditions could occur during EVAs in a partial-gravity environment with decreased ambient pressure. In this case, invalid means that an event cannot and did not occur. During the course of the simulation, an event might normally be considered invalid under items 2 and 3 listed below in “Features, Assumptions and Limitations of IMM Version 4.1.” That is, all events are considered valid when the occurrence is generated, but might become invalid as the simulation processed each event. To meet the assumption that the list of conditions in Appendix C could not occur outside the specified EVA windows, script that deems all the necessary events invalid immediately after event occurrence generation was written into the IMM MATLAB code. Once the necessary events were invalidated, the simulation continued as normal. To be clear, the script is not currently a feature of the IMM and was written specifically for this request.

For the Accelerated Mars Mission (AMM) (426-day DRM), EVAs were scheduled for 30 days, days 181 to 210, of the mission with 4 crew performing one EVA per day, for a total of 30 four-person EVAs. For the Standard Mars Mission (SMM) (923-day DRM), EVAs were scheduled as 5 days on, 2 days off, every week from days 181 to 741 of the mission with 4 crew performing one EVA per day on days with scheduled EVAs, for a total of 401 four-person EVAs.

Features, Assumptions and Limitations of IMM Version 4.1 [3] 5 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423

1. All non-space adaption (SA) and non-extravehicular activity (EVA) related conditions have a

uniform likelihood of occurring throughout the mission duration. With the exception of VIIP, Space Adaptation Syndrome conditions occur in the first 5 days of the mission, with a peak occurrence at 48 hours.

2. Individuals cannot get the same condition for which they are currently being treated (i.e. during

Clinical Phase (CP) I and II).

3. EVAC and LOCL are generated for each medical event, and then the timing of the EVAC or LOCL

is generated according to a specified distribution.

4. Individuals are no longer at risk for further conditions once their status changes to either EVAC or

LOCL. From the start time of the EVAC or LOCL, the functional impairment of the crew member is assumed to be 100%.

5. When the status of a crew member changes to EVAC, only one crew member is evacuated.

6. The IMM assumes that, per crew member, the first condition requiring a specific therapy utilizes all

resources required for treating that condition before a second condition has access to those resources.

7. Most medical conditions, with exceptions including acute radiation syndrome (triggered by Solar

Particle Events) and EVA-linked conditions (triggered by EVA events), occur independently of the occurrence of mission events and other medical conditions. Currently there is no correlation or association within or between crew members for most medical conditions.

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

6 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423

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

used simultaneously by multiple astronauts (e.g. blood pressure cuff).

## Results

The IMM MedCap results for TME, CHI, EVAC, and LOCL for the simulated DRMs are presented in the tables below. Table 2 and Figure 1 show the average number of total medical events (TME) during the mission across all the DRMs. Table 3 and figure 2 show the average CHI across all the DRMs. Table 4 along with Figure 3 and Figure 4 show the probability of EVAC and LOCL across all of the DRMs. Note that in the figures cc corresponds to cm3.

Table 2: Average Number of TME for the DRMs

TME 95% CI AMM - 426-day DRM MedCap 156.45 130 182 SMM - 923-day DRM MedCap 603.03 482 673 7 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423

### Total Medical Events

800 700 600 500 400 300 200 100 0 AMM (426-day DRM) SMM (923-day DRM)

Figure 1: Average Number of TME for the DRMs

Table 3: Average CHI for the DRMs

CHI 95% CI AMM - 426-day DRM MedCap 91.56 75.87 97.76 SMM - 923-day DRM MedCap 72.52 56.33 84.24 8 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423 Crew Health Index (%) 100 90 80 70 60 50 40 30 20 10 0 AMM (426-day DRM) SMM (923-day DRM)

Figure 2: Average CHI for the DRMs

Table 4: Probability of EVAC and LOCL for the DRMs

### EVAC LOCL

Probability 95% CI Probability 95% CI AMM - 426- MedCap 0.0625 0.0610 0.0641 0.0057 0.0053 0.0062 day DRM SMM - 923- MedCap 0.2940 0.2911 0.2967 0.0158 0.0151 0.0166 day DRM 9 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423

### Probability of Evacuation

0.35 0.3 0.25 0.2 0.15 0.1 0.05 0

### All Conditions Environmental Injury/Trauma Medical

AMM (426-day DRM) SMM (923-day DRM)

Figure 3: Probability of EVAC for the DRMs

### Probability of Loss of Crew Life

0.018 0.016 0.014 0.012 0.01 0.008 0.006 0.004 0.002 0

### All Conditions Environmental Injury/Trauma Medical

AMM (426-day DRM) SMM (923-day DRM)

Figure 4: Probability of LOCL for the DRMs

Table 5 and Table 6 show the top ten influential conditions for EVAC the AMM and SMM DRMS

respectively.

Table 7 and Table 8 present the top ten influential conditions for LOCL for those same two missions

10 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture  S-20200303-423 respectively. Combined instances of influential conditions (i.e. independent of best or worst

case, treated, partially treated or untreated) for EVAC and LOCL for both DRMs are shown in Appendix D.

Table 5: AMM (426-day) DRM; Top Ten Influential Conditions for EVAC

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  | Contribution | Percent |

WORST  PARTIAL  HERPES ZOSTER REACTIVATION (SHINGLES)  MEDICAL  991  15.36  15.36 CASE WORST

|  | TREATED  NEPHROLITHIASIS |  | MEDICAL | 460 | 7.13 | 22.49 |
| --- | ------------------------- | --- | -------- | ---- | ----- | ------ |

CASE WORST

|  | TREATED  SEPSIS |  | MEDICAL | 367 | 5.69 | 28.18 |
| --- | ---------------- | --- | -------- | ---- | ----- | ------ |

CASE WORST

|  | PARTIAL  NEPHROLITHIASIS |  | MEDICAL | 283 | 4.39 | 32.57 |
| --- | ------------------------- | --- | -------- | ---- | ----- | ------ |

CASE WORST

|  | PARTIAL  URINARY TRACT INFECTION |  | MEDICAL | 273 | 4.23 | 36.80 |
| --- | --------------------------------- | --- | -------- | ---- | ----- | ------ |

CASE BEST

|  | PARTIAL  EYE CHEMICAL BURN |  | ENVIRONMENTAL | 261 | 4.05 | 40.85 |
| --- | --------------------------- | --- | -------------- | ---- | ----- | ------ |

CASE WORST

|  | TREATED  DENTAL ABSCESS |  | MEDICAL | 237 | 3.67 | 44.52 |
| --- | ------------------------ | --- | -------- | ---- | ----- | ------ |

CASE WORST TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  233  3.61  48.13 CASE BEST

|  | TREATED  SMALL BOWEL OBSTRUCTION |  | MEDICAL | 212 | 3.29 | 51.42 |
| --- | --------------------------------- | --- | -------- | ---- | ----- | ------ |

CASE WORST

|  | TREATED  WRIST FRACTURE |  | INJURY/TRAUMA | 204 | 3.16 | 54.58 |
| --- | ------------------------ | --- | -------------- | ---- | ----- | ------ |

CASE

Table 6: SMM (923-day) DRM; Top Ten Influential Conditions for EVAC

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  | Contribution | Percent |

### BEST  DECOMPRESSION SICKNESS SECONDARY

|  | PARTIAL |  | ENVIRONMENTAL | 10406 | 30.78 | 30.78 |
| --- | -------- | --- | -------------- | ------ | ------ | ------ |

### CASE  TO EXTRAVEHICULAR ACTIVITY

WORST PARTIAL  HERPES ZOSTER REACTIVATION (SHINGLES)  MEDICAL  3886  11.49  42.27 CASE WORST PARTIAL  URINARY TRACT INFECTION  MEDICAL  2719  8.04  50.32 CASE BEST PARTIAL  EYE CHEMICAL BURN  ENVIRONMENTAL  2165  6.40  56.72 CASE WORST

|  | PARTIAL  NEPHROLITHIASIS |  | MEDICAL | 973 | 2.88 | 59.60 |
| --- | ------------------------- | --- | -------- | ---- | ----- | ------ |

CASE WORST

|  | PARTIAL  EYE INFECTION |  | MEDICAL | 787 | 2.33 | 61.92 |
| --- | ----------------------- | --- | -------- | ---- | ----- | ------ |

CASE WORST

|  | PARTIAL  SKIN LACERATION |  | INJURY/TRAUMA | 629 | 1.86 | 63.78 |
| --- | ------------------------- | --- | -------------- | ---- | ----- | ------ |

CASE BEST

|  | PARTIAL  EYE CORNEAL ULCER |  | MEDICAL | 617 | 1.82 | 65.61 |
| --- | --------------------------- | --- | -------- | ---- | ----- | ------ |

CASE WORST

|  | PARTIAL  DENTAL ABSCESS |  | MEDICAL | 594 | 1.76 | 67.37 |
| --- | ------------------------ | --- | -------- | ---- | ----- | ------ |

CASE WORST

|  | TREATED  NEPHROLITHIASIS |  | MEDICAL | 569 | 1.68 | 69.05 |
| --- | ------------------------- | --- | -------- | ---- | ----- | ------ |

CASE

|  |  |  | 11 |  | 13 APRIL 2020 |  |
| --- | --- | --- | --- | --- | -------------- | --- |
IMM Service Request Report – Long Duration Risk Posture  S-20200303-423

Table 7: AMM (426-day) DRM; Top Ten Influential Conditions for LOCL

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |

WORST

|  | TREATED  SEPSIS |  | MEDICAL | 181 | 31.75 | 31.75 |
| --- | ---------------- | --- | -------- | ---- | ------ | ------ |

CASE WORST TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  121  21.23  52.98 CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED |  | MEDICAL | 46 | 8.07 | 61.05 |
| --- | -------- | --- | -------- | --- | ----- | ------ |

### CASE  REACTION

WORST TREATED  TOXIC EXPOSURE (AMMONIA)  ENVIRONMENTAL  43  7.54  68.60 CASE WORST

|  | TREATED  APPENDICITIS |  | MEDICAL | 31 | 5.44 | 74.04 |
| --- | ---------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST PARTIAL  BURNS SECONDARY TO FIRE  ENVIRONMENTAL  30  5.26  79.30 CASE WORST

|  | PARTIAL  SEPSIS |  | MEDICAL | 23 | 4.04 | 83.33 |
| --- | ---------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | TREATED  SUDDEN CARDIAC ARREST |  | MEDICAL | 22 | 3.86 | 87.19 |
| --- | ------------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | TREATED  CHEST INJURY |  | INJURY/TRAUMA | 9 | 1.58 | 88.77 |
| --- | ---------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  8  1.40  90.18 CASE

Table 8: SMM (923-day) DRM; Top Ten Influential Conditions for LOCL

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |

WORST

|  | PARTIAL  SEPSIS |  | MEDICAL | 233 | 14.59 | 14.59 |
| --- | ---------------- | --- | -------- | ---- | ------ | ------ |

CASE WORST TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  233  14.59  29.18 CASE WORST

|  | TREATED  SEPSIS |  | MEDICAL | 166 | 10.39 | 39.57 |
| --- | ---------------- | --- | -------- | ---- | ------ | ------ |

CASE

### WORST  DECOMPRESSION SICKNESS SECONDARY

|  | PARTIAL |  | ENVIRONMENTAL | 120 | 7.51 | 47.09 |
| --- | -------- | --- | -------------- | ---- | ----- | ------ |

### CASE  TO EXTRAVEHICULAR ACTIVITY

### WORST  DECOMPRESSION SICKNESS SECONDARY

|  | TREATED |  | ENVIRONMENTAL | 95 | 5.95 | 53.04 |
| --- | -------- | --- | -------------- | --- | ----- | ------ |

### CASE  TO EXTRAVEHICULAR ACTIVITY

### MEDICATION OVERDOSE/ADVERSE

WORST

|  | TREATED |  | MEDICAL | 89 | 5.57 | 58.61 |
| --- | -------- | --- | -------- | --- | ----- | ------ |

### CASE  REACTION

WORST TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  85  5.32  63.93 CASE WORST TREATED  TOXIC EXPOSURE (AMMONIA)  ENVIRONMENTAL  71  4.45  68.38 CASE WORST

|  | TREATED  APPENDICITIS |  | MEDICAL | 67 | 4.20 | 72.57 |
| --- | ---------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | TREATED  HEAD INJURY |  | INJURY/TRAUMA | 60 | 3.76 | 76.33 |
| --- | --------------------- | --- | -------------- | --- | ----- | ------ |

CASE

|  |  |  | 12 |  | 13 APRIL 2020 |  |
| --- | --- | --- | --- | --- | -------------- | --- |
IMM Service Request Report – Long Duration Risk Posture S-20200303-423

## Discussion

The results of this simulation reveal that there are more total medical events in the SMM (923-day) DRM compared to the AMM (426-day) DRM. This significant increase in total medical events in the SMM DRM is due to the longer duration and the increased number of EVAs in this DRM compared to the AMM DRM.

The mean CHI for the SMM DRM is lower than the mean CHI for the AMM DRM. This is due to the longer duration of this DRM and the increased number of EVAs in this DRM compared to the AMM DRM resulting in a greater depletion of resources. The probability of consideration for EVAC is greater in the SMM DRM than in the AMM DRM. This is due to the longer duration of this DRM and the increased number of EVAs in this DRM compared to the AMM DRM resulting in a greater depletion of resources. The probability of LOCL is greater in the SMM DRM than in the AMM DRM. This is due to the longer duration of this DRM and the increased number of EVAs in this DRM compared to the AMM DRM resulting in a greater depletion of resources. 13 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423

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

Model. 2015. Houston, Texas, NASA Johnson Space Center. Ref Type: Report 14 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture  S-20200303-423

## Appendix A: IMM Status at Time of Service Request Report

Validation status for

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
| --- | --- | --- | ------------- | ----------- | ------ | ------- | --- |
|  |  |  | Verification | 4 | 3.7 | 0.28 |  |
|  |  |  |  |  |  | 0.45 |  |
| --- | --- | --- | -------------------- | ---- | ---- | ------- | ------- |
|  |  |  | Validation | 3 | 3 |  |  |
|  |  |  | Input Pedigree | 3 | 3 | 0.53 |  |
|  |  |  | Results Uncertainty | 3 | 3 | 0.60 | 3.06 |
|  |  |  | Results Robustness | 3 | 3 | 0.45 |  |
|  |  |  | Use History | 3 | 3 | 0.45 |  |
| --- | --- | --- | --------------------- | ---- | ---- | ------- | --- |
|  |  |  | M&S Management | 2 | 2 | 0.10 |  |
|  |  |  | People Qualification | 4 | 4 | 0.20 |  |
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Additional verification | None |  |  |  |  |  |  |
| ------------------------ | ----- | --- | --- | --- | --- | --- | --- |

and validation information applicable to this analysis

| Integrated Medical | iMED Lockdown IDs: (62), created on (3/13/2029) |  |  |  |  |  |  |
| ------------------- | ------------------------------------------------ | --- | --- | --- | --- | --- | --- |

### Evidence Database

(iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software. MATLAB and all other MathWorks product version  or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

None Modifications made to the code for analysis

|  |  |  | 15 |  |  |  | 13 APRIL 2020 |
| --- | --- | --- | --- | --- | --- | --- | -------------- |
IMM Service Request Report – Long Duration Risk Posture  S-20200303-423

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

|  | 16 | 13 APRIL 2020 |
| --- | --- | -------------- |
IMM Service Request Report – Long Duration Risk Posture S-20200303-423

## Appendix C: Medical Conditions Excluded or Modified for the AMM (426-

day) and SMM (923-day) Long Duration DRMs Due to limited vehicle size consisting of a single module and limited movement of crew during flight, the following conditions are judged highly unlikely to occur:

- Abdominal Injury

- Acute Compartment Syndrome

- Barotrauma

- Chest Injury

- Elbow Dislocation

- Head Injury

- Hip/Proximal Femur Fracture

- Lower Extremity (LE) Stress Fracture

- Lumbar Spine Fracture

- Shoulder Dislocation

- Neurogenic Shock

- Traumatic Hypovolemic Shock

However, due to the partial gravity environment during the EVA schedule for this request, these conditions were allowed to occur during, but not outside the EVA windows.

Rather than considering the entire ISS volume for application of Fire Model result input to the IMM, ISS Node 3 was used to approximate the size of the Orion vehicle. The corresponding Node 3 Fire Model results (directly from the ISS PRA Fire Model v3.2) were used to update Burns Secondary to Fire and Smoke Inhalation for this request as follows:

- Burns Secondary to Fire:

incidence 0.00613 (events/person year) - probability one or more crew exposed to o response level event (value same as for likelihood for Fire Sustains (response level event) since modeling for single compartment, i.e. Node 3) (v3.2); worst case scenario = 0-5% - EVAC (uncontrollable fire- not vehicle) (value = 0.0486; o derived from uncontrolled fire event/probability one or more crew exposed to response level event)

- Smoke Inhalation:

incidence 0.00613 (events/person year) - Fire Sustains (response level event) (v3.2); o worst case scenario = 0-5% - EVAC (uncontrollable fire- not vehicle) (value = 0.0486; o derived from uncontrolled fire event/Fire Sustains (response level event)) 17 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423

## Appendix D: Combined instances of influential conditions (i.e. independent of best or worst case,

treated, partially treated or untreated) for EVAC and LOCL for both AMM and SMM DRMs

Table 9: Top Ten Combined Influential Conditions for EVAC (Yellow highlighted conditions are those that occurred during the

EVAs in the simulation). Values in the “1 in X trials” column are rounded to the nearest integer.

EVAC, AMM DRM with 30 four-person EVAs Total per Trial 1 in X trials EVAC, SMM DRM with 401 four-person EVAs Total per Trial 1 in X trials

### DECOMPRESSION SICKNESS SECONDARY TO

HERPES ZOSTER REACTIVATION (SHINGLES) 1157 0.01157 86 10976 0.10976 9

### EXTRAVEHICULAR ACTIVITY

NEPHROLITHIASIS 767 0.00767 130 HERPES ZOSTER REACTIVATION (SHINGLES) 4194 0.04194 24 DENTAL ABSCESS 515 0.00515 194 URINARY TRACT INFECTION 2924 0.02924 34 URINARY TRACT INFECTION 419 0.00419 239 EYE CHEMICAL BURN 2434 0.02434 41 SEPSIS 416 0.00416 240 NEPHROLITHIASIS 1691 0.01691 59 EYE CHEMICAL BURN 316 0.00316 316 DENTAL ABSCESS 1241 0.01241 81 STROKE (CEREBROVASCULAR ACCIDENT) 309 0.00309 324 EYE INFECTION 892 0.00892 112 SMALL BOWEL OBSTRUCTION 292 0.00292 342 SEPSIS 848 0.00848 118 WRIST FRACTURE 205 0.00205 488 EYE CORNEAL ULCER 652 0.00652 153 SKIN LACERATION 189 0.00189 529 STROKE (CEREBROVASCULAR ACCIDENT) 647 0.00647 155 SEIZURES 142 0.00142 704 SKIN LACERATION 629 0.00629 159 ATRIAL FIBRILLATION/ ATRIAL FLUTTER 132 0.00132 758 SMALL BOWEL OBSTRUCTION 623 0.00623 161 APPENDICITIS 128 0.00128 781 WRIST FRACTURE 492 0.00492 203 ANGINA/MYOCARDIAL INFARCTION 126 0.00126 794 ANGINA/MYOCARDIAL INFARCTION 333 0.00333 300 HEADACHE (CO2 INDUCED) 104 0.00104 962 APPENDICITIS 319 0.00319 313 TOXIC EXPOSURE (AMMONIA) 87 0.00087 1149 DENTAL EXPOSED PULP 311 0.00311 322 DENTAL EXPOSED PULP 82 0.00082 1220 ACUTE DIVERTICULITIS 279 0.00279 358 ACUTE DIVERTICULITIS 81 0.00081 1235 NECK SPRAIN/STRAIN 277 0.00277 361 EYE INFECTION 81 0.00081 1235 HEADACHE (CO2 INDUCED) 276 0.00276 362 BURNS SECONDARY TO FIRE 72 0.00072 1389 SEIZURES 272 0.00272 368 INDIGESTION 67 0.00067 1493 ATRIAL FIBRILLATION/ ATRIAL FLUTTER 268 0.00268 373 EYE CORNEAL ULCER 58 0.00058 1724 EYE IRRITATION/ABRASION 266 0.00266 376 RETINAL DETACHMENT 51 0.00051 1961 LOWER EXTREMITY (LE) STRESS FRACTURE 265 0.00265 377

### VISUAL IMPAIRMENT AND/OR INCREASED

51 0.00051 1961 TRAUMATIC HYPOVOLEMIC SHOCK 193 0.00193 518 INTRACRANIAL PRESSURE (VIIP)(SPACE ADAPTATION)

ACUTE CHOLECYSTITIS/BILIARY COLIC 50 0.0005 2000 ACUTE ARTHRITIS 183 0.00183 546 MEDICATION OVERDOSE/ADVERSE REACTION 49 0.00049 2041 TOXIC EXPOSURE (AMMONIA) 166 0.00166 602 18 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423 EVAC, AMM DRM with 30 four-person EVAs Total per Trial 1 in X trials EVAC, SMM DRM with 401 four-person EVAs Total per Trial 1 in X trials NECK SPRAIN/STRAIN 42 0.00042 2381 INDIGESTION 164 0.00164 610 ABDOMINAL WALL HERNIA 33 0.00033 3030 BURNS SECONDARY TO FIRE 157 0.00157 637 EYE IRRITATION/ABRASION 32 0.00032 3125 BACK SPRAIN/STRAIN 150 0.0015 667 DIARRHEA 31 0.00031 3226 HEAD INJURY 130 0.0013 769

### DECOMPRESSION SICKNESS SECONDARY TO

30 0.0003 3333 SKIN RASH 126 0.00126 794

### EXTRAVEHICULAR ACTIVITY

RESPIRATORY INFECTION 29 0.00029 3448 ACUTE CHOLECYSTITIS/BILIARY COLIC 115 0.00115 870 OTITIS MEDIA 26 0.00026 3846 DIARRHEA 113 0.00113 885 SKIN INFECTION 26 0.00026 3846 SKIN INFECTION 112 0.00112 893 ACUTE SINUSITIS 24 0.00024 4167 RETINAL DETACHMENT 100 0.001 1000 SMOKE INHALATION 22 0.00022 4545 MEDICATION OVERDOSE/ADVERSE REACTION 91 0.00091 1099 ACUTE PANCREATITIS 21 0.00021 4762 OTITIS MEDIA 78 0.00078 1282 GASTROENTERITIS 21 0.00021 4762 ACUTE SINUSITIS 76 0.00076 1316 BACK SPRAIN/STRAIN 19 0.00019 5263 GASTROENTERITIS 64 0.00064 1563 TRAUMATIC HYPOVOLEMIC SHOCK 19 0.00019 5263 ACUTE PANCREATITIS 62 0.00062 1613 CHOKING/OBSTRUCTED AIRWAY 16 0.00016 6250 HIP/PROXIMAL FEMUR FRACTURE 62 0.00062 1613 LOWER EXTREMITY (LE) STRESS FRACTURE 15 0.00015 6667 RESPIRATORY INFECTION 62 0.00062 1613

### VISUAL IMPAIRMENT AND/OR INCREASED

URINARY RETENTION (SPACE ADAPTATION) 10 0.0001 10000 INTRACRANIAL PRESSURE (VIIP)(SPACE 52 0.00052 1923 ADAPTATION) CHEST INJURY 8 0.00008 12500 ABDOMINAL WALL HERNIA 49 0.00049 2041 OTITIS EXTERNA 8 0.00008 12500 SMOKE INHALATION 39 0.00039 2564 ACUTE ARTHRITIS 7 0.00007 14286 OTITIS EXTERNA 38 0.00038 2632 ACUTE ANGLE-CLOSURE GLAUCOMA 6 0.00006 16667 CHOKING/OBSTRUCTED AIRWAY 29 0.00029 3448 HEAD INJURY 6 0.00006 16667 DEPRESSION 25 0.00025 4000 DEPRESSION 5 0.00005 20000 CHEST INJURY 24 0.00024 4167 EYE PENETRATION (FOREIGN BODY) 5 0.00005 20000 ACUTE ANGLE-CLOSURE GLAUCOMA 22 0.00022 4545 HIP SPRAIN/STRAIN 5 0.00005 20000 HIP SPRAIN/STRAIN 22 0.00022 4545 HIP/PROXIMAL FEMUR FRACTURE 5 0.00005 20000 LUMBAR SPINE FRACTURE 22 0.00022 4545 HYPERTENSION 5 0.00005 20000 ABDOMINAL INJURY 20 0.0002 5000 SUDDEN CARDIAC ARREST 5 0.00005 20000 ACUTE RADIATION SYNDROME 18 0.00018 5556 SKIN INFECTION 4 0.00004 25000 ACUTE COMPARTMENT SYNDROME 15 0.00015 6667 ACUTE RADIATION SYNDROME 4 0.00004 25000 SHOULDER DISLOCATION 14 0.00014 7143 SKIN RASH 4 0.00004 25000 HYPERTENSION 11 0.00011 9091 19 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423 EVAC, AMM DRM with 30 four-person EVAs Total per Trial 1 in X trials EVAC, SMM DRM with 401 four-person EVAs Total per Trial 1 in X trials

### CARDIOGENIC SHOCK SECONDARY TO MYOCARDIAL

3 0.00003 33333 ELBOW SPRAIN/STRAIN 10 0.0001 10000 INFARCTION NOSE BLEED (SPACE ADAPTATION) 3 0.00003 33333 ACUTE PROSTATITIS 9 0.00009 11111

### CARDIOGENIC SHOCK SECONDARY TO

ACUTE PROSTATITIS 2 0.00002 50000 8 0.00008 12500

### MYOCARDIAL INFARCTION

KNEE SPRAIN/STRAIN 2 0.00002 50000 FINGER DISLOCATION 8 0.00008 12500 SHOULDER DISLOCATION 2 0.00002 50000 SUDDEN CARDIAC ARREST 8 0.00008 12500 ABDOMINAL INJURY 1 0.00001 100000 EYE PENETRATION (FOREIGN BODY) 6 0.00006 16667 ACUTE COMPARTMENT SYNDROME 1 0.00001 100000 ELBOW DISLOCATION 5 0.00005 20000 ALTITUDE SICKNESS 1 0.00001 100000 URINARY RETENTION (SPACE ADAPTATION) 5 0.00005 20000 ANKLE SPRAIN/STRAIN 1 0.00001 100000 ANXIETY 4 0.00004 25000 ANXIETY 1 0.00001 100000 KNEE SPRAIN/STRAIN 4 0.00004 25000 LUMBAR SPINE FRACTURE 1 0.00001 100000 ANAPHYLAXIS 3 0.00003 33333 SHOULDER SPRAIN/STRAIN 1 0.00001 100000 ANKLE SPRAIN/STRAIN 2 0.00002 50000 WRIST SPRAIN/STRAIN 1 0.00001 100000 NOSE BLEED (SPACE ADAPTATION) 2 0.00002 50000 SHOULDER SPRAIN/STRAIN 1 0.00001 100000 WRIST SPRAIN/STRAIN 1 0.00001 100000 20 13 APRIL 2020

IMM Service Request Report – Long Duration Risk Posture S-20200303-423

Table 10: Top Ten Combined Influential Conditions for LOCL (Yellow highlighted conditions are those that occurred during the

EVAs in the simulation). Values in the “1 in X trials” column are rounded to the nearest integer.

LOCL, AMM DRM with 30 four-person 1 in X LOCL, SMM DRM with 401 four- Total per Trial Total per Trial 1 in X trials EVAs trials person EVAs SEPSIS 206 0.00206 485 SEPSIS 435 0.00435 230 STROKE (CEREBROVASCULAR ACCIDENT) 122 0.00122 820 STROKE (CEREBROVASCULAR ACCIDENT) 251 0.00251 398

### DECOMPRESSION SICKNESS SECONDARY TO

MEDICATION OVERDOSE/ADVERSE REACTION 47 0.00047 2128 215 0.00215 465

### EXTRAVEHICULAR ACTIVITY

TOXIC EXPOSURE (AMMONIA) 47 0.00047 2128 APPENDICITIS 125 0.00125 800 APPENDICITIS 39 0.00039 2564 TRAUMATIC HYPOVOLEMIC SHOCK 107 0.00107 935 BURNS SECONDARY TO FIRE 37 0.00037 2703 MEDICATION OVERDOSE/ADVERSE REACTION 99 0.00099 1010 SUDDEN CARDIAC ARREST 22 0.00022 4545 TOXIC EXPOSURE (AMMONIA) 87 0.00087 1149 CHEST INJURY 9 0.00009 11111 HEAD INJURY 67 0.00067 1493

### DECOMPRESSION SICKNESS SECONDARY TO

8 0.00008 12500 BURNS SECONDARY TO FIRE 63 0.00063 1587

### EXTRAVEHICULAR ACTIVITY

TRAUMATIC HYPOVOLEMIC SHOCK 8 0.00008 12500 SUDDEN CARDIAC ARREST 36 0.00036 2778 SMOKE INHALATION 5 0.00005 20000 CHEST INJURY 33 0.00033 3030 ACUTE DIVERTICULITIS 4 0.00004 25000 ACUTE DIVERTICULITIS 15 0.00015 6667

### CARDIOGENIC SHOCK SECONDARY TO MYOCARDIAL

3 0.00003 33333 ABDOMINAL INJURY 13 0.00013 7692 INFARCTION SMALL BOWEL OBSTRUCTION 3 0.00003 33333 SMOKE INHALATION 9 0.00009 11111 ACUTE PANCREATITIS 2 0.00002 50000 ACUTE RADIATION SYNDROME 8 0.00008 12500 ACUTE RADIATION SYNDROME 2 0.00002 50000 SMALL BOWEL OBSTRUCTION 8 0.00008 12500

### CARDIOGENIC SHOCK SECONDARY TO

HEAD INJURY 2 0.00002 50000 7 0.00007 14286

### MYOCARDIAL INFARCTION

ABDOMINAL INJURY 1 0.00001 100000 CHOKING/OBSTRUCTED AIRWAY 7 0.00007 14286 ABDOMINAL WALL HERNIA 1 0.00001 100000 ANAPHYLAXIS 4 0.00004 25000 ALTITUDE SICKNESS 1 0.00001 100000 ABDOMINAL WALL HERNIA 3 0.00003 33333 CHOKING/OBSTRUCTED AIRWAY 1 0.00001 100000 ACUTE PANCREATITIS 2 0.00002 50000 SEIZURES 2 0.00002 50000 NEUROGENIC SHOCK 1 0.00001 100000 21 13 APRIL 2020

---

## Source metadata

```yaml
source_filename: "medical-risk-assessment-for-an-accelerated-and-standard-mars-mission.pdf"
source_folder: "Mission Risk Reports/Mars"
source_url: "https://drive.google.com/file/d/1BLgy2JWqorZ86L-s3lJL3jq55tYzP0-7/view"
source_drive_id: "1BLgy2JWqorZ86L-s3lJL3jq55tYzP0-7"
source_sha256: 73f52d1cea103db5ced9757083453779a4f41920914ef050b4c64609eb40ccd0
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 21
ocr_performed: false
```
