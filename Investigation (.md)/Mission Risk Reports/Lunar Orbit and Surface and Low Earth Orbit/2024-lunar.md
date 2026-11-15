# 2024 Lunar

[View original PDF](https://drive.google.com/file/d/1lgUjphd1TVt6gGA7evmKPQlAEOGnOjab/view) · **25 pages**

**Collection:** Mission Risk Reports/Lunar Orbit and Surface and Low Earth Orbit

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Executive Summary](#executive-summary)
- [Background](#background)
- [Methods](#methods)
- [Results](#results)
- [References](#references)
- [Appendix A: IMM Status at Time of Service Request Report](#appendix-a-imm-status-at-time-of-service-request-report)
- [Appendix B: Medical Conditions in iMED by Category (iMED_20170221)](#appendix-b-medical-conditions-in-imed-by-category-imed_20170221)
- [Appendix C: Medical Conditions Modified for the 30 Day DRM](#appendix-c-medical-conditions-modified-for-the-30-day-drm)

---

IMM Service Request Report – 2024 Lunar S-20190528-412

## Executive Summary

The objective of this IMM support request is to provide a medical risk assessment for Artemis 7.5 day and 27.5 day Design Reference Missions (DRM).The simulation results are as follows:

- Average number of Total of Medical Events (TME):

o For the 7.5 day DRM with 5.22 lb. (2.37 kg) - 6430 cm3 Capabilities was 2.65 events. o For the 27.5 day DRM with 22.31 lbs. (10.12 kg.) – 20326 cm3 was 21.66 events.

- Average Crew Health Index (CHI):

o For the 7.5 day DRM with 5.22 lb. (2.37 kg) - 6430 cm3 Capabilities was 97.63. o For the 27.5 day DRM with 22.31 lbs. (10.12 kg.) – 20326 cm3 was 96.87.

- Probability of consideration for Evacuation (EVAC):

o For the 7.5 day DRM with 5.22 lb. (2.37 kg) - 6430 cm3 Capabilities was 0.0037. o For the 27.5 day DRM with 22.31 lbs. (10.12 kg.) – 20326 cm3 was 0.0094.

- Probability of Loss of Crew Life (LOCL):

o For the 7.5 day DRM with 5.22 lb. (2.37 kg) - 6430 cm3 Capabilities was 0.0002. o For the 27.5 day DRM with 22.31 lbs. (10.12 kg.) – 20326 cm3 Capabilities was 0.0005. 1 03 OCTOBER 2019

IMM Service Request Report – 2024 Lunar S-20190528-412

## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are crew health index (CHI), need for evacuation (EVAC) and loss of crew life (LOCL).

The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profiles shown in Tables 1 and 2. The 27.5 day crew profile is consistent with that of the previous Orion DRM from the IMM Service Request (SR) # S- 201808-406 with the exception of 4 additional EVAs each by 2 crew members for this request. The outcomes of certain IMM medical conditions are influenced by pre-existing medical history including: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data.

Table 1: 7.5 day DRM crew profile

### Prior Abdominal

### Sex Crowns EVA CAC Contacts

Surgery Crew 1 Male Yes Yes (4) Yes Yes No Crew 2 Female No Yes (4) Yes No Yes 2 03 OCTOBER 2019

IMM Service Request Report – 2024 Lunar S-20190528-412

Table 2: 27.5 day DRM crew profile

### Prior Abdominal

### Sex Crowns EVA CAC Contacts

Surgery Crew 1 Male Yes Yes (4) Yes Yes No Crew 2 Male No No No Yes No Crew 3 Male No No No No No Crew 4 Female No Yes (4) Yes No Yes For this request, the 7.5 day DRM assumes that the 7.5 days correspond to the 7.5 days in the middle of the 27.5 day DRM. For the 7.5 day DRM, it is assumed that the 2 crew members have not sustained any medical events, and have therefore not utilized any resources from a 5 lb. set of medical resources. This 5 lb. constraint on the resources was provided by the customer as a possible weight constraint given the mission parameters and is subject to change. More details on the 5 lb. set of resources is provided in the next section.

### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix B.

However, to better approximate Artemis real world system, the set of conditions was modified for this request as described in Appendix C. Note, that because the days in 7.5 day simulation corresponds to the middle 7.5 days in the 27.5 DRM, it is assumed that conditions related to Space Adaptation would not occur and are therefore removed from the 7.5 day DRM. Other conditions were removed or modified for both the 7.5 day and the 27.5 day DRM (as explained in Appendix C). The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data contained within the Integrated Medical Evidence Database (iMED). For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. In- flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS.

Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all- untreated (no Medkit) and baseline MedCap (Medkit without resupply). For exploration missions, the MedCap state should most closely resemble a real world deep space mission where resupply is not possible but where utilization of partial and alternative treatment can occur. 3 03 OCTOBER 2019

IMM Service Request Report – 2024 Lunar S-20190528-412 For this service request, the 5lb. set of resources used for the 7.5 day DRM was generated using the IMM 4.1 Optimization module. Although the optimization module can generate sets of resources with some non-integer quantities, all resource quantities were rounded up to the nearest integer to be used by the IMM during succeeding simulations. Therefore, the actual total weight of the resources used may be slightly larger than 5 lb. The “MedCap” results for the 7.5 day DRM correspond to the above mentioned set of resources. The “MedCap” results for the 27.5 day DRM correspond to the summation of the above mentioned 5 lb. set of resources and the 20 lb. set of resources generated from S-201808-406. This summation process did generate some possible unnecessary resource redundancies. Adding the contents of one set of resources to another set of resources results in a list where some items have a greater total quantity than would actually be flown. For example, if one resource set contained a blood oximeter and the second resource set also contained a blood oximeter, the summation of those two sets would contain two blood oximeters when, in reality, it is possible that only one might be flown. The final decision concerning whether those resources are redundant would be made by the program involved. These redundancies are highlighted in Table 3.

### Main Outcomes

The IMM primary medical outcomes include the number of total medical events (TME), crew health index (CHI), probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources. CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle 4 03 OCTOBER 2019

IMM Service Request Report – 2024 Lunar S-20190528-412 be available. LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, the simulation usually assigns each crew member only one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model. Catastrophic vehicle failures such as the Challenger and Columbia accidents, and MMOD (micrometeorite and orbital debris) are not considered as possible causes of EVAC and LOCL.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources. If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap (no resupply) scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If none of the resources are available to treat the event, the event is considered "untreated." The initial quantities for medical resources are baselined to a fully stocked ISS medical kit (MedCap) for one simulation, a 5 lb.-constrained set of resources generated for this service request for the second simulation, and the summation of the optimized medical kit from IMM SR-201808-406 and the previously mentioned 5 lb.-constrained set of resources for the third simulation. Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated scenario and a 0-100% chance of going to EVAC in the best case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC.

### Modeling Approach

One hundred thousand (100,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria.

Convergence criteria are met when there is less than or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 2 - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport. 5 03 OCTOBER 2019

IMM Service Request Report – 2024 Lunar S-20190528-412 IMM outcomes were determined for the DRMs using the ISS MedCap scenario where all conditions are treated, partially treated or untreated based on the available resources of the ISS MedCap without resupply. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, TME, CHI, EVAC and LOCL results are presented. Features, assumptions and limitations pertinent to this report are described in a separate section below.

### Optimization Approach

The two optimized medical kits were selected solely to meet the optimization risk criteria within the specified mass and volume constraints for this request and SR-20180815-406. The DRM for the aforementioned request was a 21 day DRM with end user specified mass constraint of 20 lbs. (~9.07 kg) and a volume constraint of 13,721 cm3, optimized to maximize CHI. For this request, the end user specified a constraint of 5 lbs. (2.27 kg) and no volume constraint for the optimization to maximize CHI.

It is important to note that the IMM v4.1 optimization routine used in this request considers resources at the unit resource level. Because of this, some resource quantities in the generated optimized kit have decimal values. Quantities for items in the medical kit must be integer-valued (as most resources cannot be fractionalized), therefore these quantities were rounded up to the nearest integer value. It should also be noted that packaging mass and volume are not considered in the IMM and therefore have no effect on optimization of a medical kit. The optimization routine only considers resources marked as essential in iMED when generating the kit. It also does not consider resource dependencies when generating the kit. In other words, even though a set of resources may be required for treatment in reality, the optimization routine may only include a subset of those resources. The entire set of required resources is not bundled together. When generating the optimized kit, the quantity of each resource available to add to the kit is determined by the maximum quantity needed during a simulation trial. It is not restricted to the quantity in the ISS medkit. Therefore it is possible for the generated optimized medical kit to include a higher quantity for a particular resource than is included in the ISS medkit. The results of this optimization should only be used as an evidence-based guide to the development of medical capability and should not be used in isolation to design a medical kit without the input of subject matter expertise and operational experience.

Features, Assumptions and Limitations of IMM Version 4.1 [3]

1. All non-space adaption (SA) and non-extravehicular activity (EVA) related conditions have a

uniform likelihood of occurring throughout the mission duration. With the exception of VIIP, Space Adaptation Syndrome conditions occur in the first 5 days of the mission, with a peak occurrence at 48 hours. 6 03 OCTOBER 2019

IMM Service Request Report – 2024 Lunar S-20190528-412

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

20. Medical capabilities do not include the use of personal crew carry-on items contained in the

Individual Medical Accessories Kit, (IMAK).

21. If a crew member is undergoing treatment for concurrent medical conditions requiring the same

consumable resource, the crew member will only utilize resources at the level required by the 7 03 OCTOBER 2019

IMM Service Request Report – 2024 Lunar S-20190528-412 condition that requires the most resources.

22. If the primary resource required for treating a medical condition is unavailable, one or more

alternative resources are considered, if appropriate. One example might be using acetaminophen in place of ibuprofen.

23. Total quantities of a consumable medical resource requiring a daily dose will be adjusted if a

dosage schedule runs past the end of the mission.

24. If a solar particle event causes acute radiation sickness in one or more crew members, IMM

assumes the condition begins identically in all affected crew members at the beginning of the solar particle event.

25. The IMM does not decrement non-consumable items and allows all non-consumable items to be

used simultaneously by multiple astronauts (e.g. blood pressure cuff).

### Additional Assumptions and Limitations for This Request

1. Although the 7.5 day mission would occur in the middle of the 27.5 day mission, it is assumed that no

medical conditions have occurred (and thus no resources have been decremented) at the beginning of the 7.5 day mission.

2. The IMM does not consider medical conditions that are specific to Lunar operations in a partial gravity

environment.

3. The IMM is incapable of modeling a ‘mission within a mission’ where the medical capabilities and the

number of crew differ for each.

## Results

The generated optimized medical kits are presented below in Table 3. The IMM simulation MedCap results for TME, CHI, EVAC, LOCL and the top ten influential conditions for EVAC/LOCL for the simulated DRMs.

Table 3: The ISS medical kit, and the generated optimized medical kits [from S-20180815-406

with 17.09 lbs. (7.75 kg.) - 13896cm3 ] and [for the 7.5 day Lunar with 5.22 lbs. (2.37 kg.) – 6429.53cm3 ] respectively. The yellow highlighted individual resources have quantities with decimal values. Those values were rounded up to the nearest integer for the proceeding simulation, shown in parentheses. The orange highlighted resources are those which result in possible unnecessary redundancy when the 7.75 kg. set is added to the 2.37 kg. set. 7.5 day Lunar

### ISS Quantity S-406 Optimized

### Resource Optimized

(Reference) Quantity Quantity ABILIFY (ARIPIPRAZOLE) 5 MG 60 0 0 ABILIFY (ARIPIPRAZOLE) 7.5 MG/ML, 1.3 ML 2 0 0 ABSORBABLE SUTURE 3.0 2 2 1 ACE BANDAGE 2 INCHES 1 1 0 8 03 OCTOBER 2019

| IMM Service Request Report – 2024 Lunar |  |  |  |  |  | S-20190528-412 |  |
| ---------------------------------------- | ---------------------------------------- | --- | --- | --- | --- | --------------- | -------- |
|  | ACE BANDAGE 3 INCHES |  | 1 |  | 1 |  | 1 |
|  | ACE BANDAGE 4 INCHES |  | 1 |  | 1 |  | 0 |
|  | ADRENALINE (EPINEPHRINE 1:10000) 10ML |  | 2 |  | 0 |  | 0 |
|  | AED |  | 1 |  | 0 |  | 0 |
|  | AFRIN (OXYMETAZOLINE) 0.05% 15ML BOTTLE |  | 12 |  | 1 |  | 1.2 (2) |

ALBUTEROL INHALER (PROVENTIL) 90 MCG, 6.7

|  |  |  | 3 |  | 2 |  | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- |

GM

|  | AMBIEN 10MG TABLET |  | 250 |  | 11 |  | 4 |
| --- | ------------------------------------ | --- | ---- | --- | --------- | --- | -------- |
|  | AMBU BAG AND MASK |  | 1 |  | 0 |  | 0 |
|  | AMOXICILLIN 500 MG CAPSULE |  | 60 |  | 22 |  | 14 |
|  | ANTIVERT (MECLIZINE) 25 MG |  | 20 |  | 0 |  | 0 |
|  | ASPIRIN 325MG TAB. |  | 120 |  | 1 |  | 3 |
|  | ATIVAN (LORAZEPAM) 1 MG TABLET |  | 60 |  | 42 |  | 6 |
|  | ATROPINE 1 MG, 10ML SYRINGE. |  | 2 |  | 0 |  | 0 |
|  | BACITRACIN 500 UNITS/GM. 28 GM TUBE |  | 1 |  | 0.85 (1) |  | 0.8 (1) |
|  | BACTRIM  DS |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  | (SULFAMETHOXAZOLE/TRIMETHOPRIM) |  | 40 |  | 40 |  | 26 |

800 MG/160 MG TABLET

|  | BANDAID (2X3) |  | 5 |  | 0 |  | 0 |
| --- | ---------------------------------- | --- | --- | --- | --- | --- | --- |
|  | BANDAID (KNUCKLE) |  | 5 |  | 0 |  | 0 |
|  | BANDAID DOT |  | 10 |  | 0 |  | 0 |
|  | BANDAID STRIP |  | 10 |  | 0 |  | 0 |
|  | BENADRYL 25 MG CAPSULE |  | 60 |  | 26 |  | 12 |
|  | BENADRYL 50 MG/ML, 1ML INJECTABLE |  | 3 |  | 1 |  | 0 |

BENZOCAINE SWAB STICK ORAL 20%, 0.15 ML

|  |  |  | 24 |  | 0 |  | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- |

SWAB

|  | BIOHAZARD TRASH BAG |  | 15 |  | 0 |  | 0 |
| --- | ---------------------------- | --- | --- | --- | --- | --- | --- |
|  | BLOOD OXIMETER |  | 1 |  | 1 |  | 1 |
|  | BLOOD PRESSURE /ECG MONITOR |  | 1 |  | 0 |  | 0 |
|  | BLOOD PRESSURE CUFF - LARGE |  | 1 |  | 0 |  | 0 |
|  | BLOOD PRESSURE CUFF – SMALL |  | 1 |  | 0 |  | 0 |
|  | BOUGIE ET TUBE INTRODUCER |  | 1 |  | 0 |  | 0 |
|  | BURN BANDAGE |  | 10 |  | 0 |  | 0 |
|  | BZK WIPES |  | 60 |  | 0 |  | 0 |
|  | CAMERA |  | 1 |  | 0 |  | 0 |

### CIPROFLOXACIN  AND  DEXAMETHASONE

|  |  |  | 2 |  | 0.52 (1) |  | 0.26 (1) |
| --- | --- | --- | --- | --- | --------- | --- | --------- |

(CIPRODEX) 3%,7%, 7.5 ML BOTTLE

|  | CLARITIN (LORATADINE)10MG TABLET |  | 75 |  | 0 |  | 0 |
| --- | --------------------------------- | --- | --- | --- | --- | ---------------- | --- |
|  | CLEAR BANDAGE |  | 9 |  | 0 |  | 0 |
|  | CLEOCIN (CLINDAMYCIN) 300MG |  | 60 |  | 21 |  | 14 |
|  | CMRS |  | 1 |  | 0 |  | 0 |
|  | COTTON BALLS |  | 40 |  | 0 |  | 0 |
|  |  |  | 9 |  |  | 03 OCTOBER 2019 |  |
| IMM Service Request Report – 2024 Lunar |  |  |  |  | S-20190528-412 |
| ---------------------------------------- | --- | --- | --- | -------- | --------------- |
| COTTON PELLET |  |  | 6 | 0 | 0 |
| COTTON SWABS |  |  | 6 | 0 | 0 |
| CYCLOPENTOLATE 2% 15ML BOTTLE. |  |  | 1 | 0.2 (1) | 0.1 (1) |
| DCS EXAMINATION SCORECARD |  |  | 1 | 0 | 0 |

DEBROX FOR EARWAX (CARBAMIDE PEROXIDE)

|  |  |  | 4 | 0 | 0 |
| --- | --- | --- | --- | --- | --- |

6.5% 15ML BOTTLE

| DENTAL ADHESIVE (76 GRAMS) |  |  | 1 | 0.1 (1) | 0 |
| --------------------------- | ----------- | ---------- | --- | -------- | --- |
| DENTAL ADHESIVE TIP |  |  | 1 | 1 | 0 |
| DENTAL AMALGAM FILE |  |  | 1 | 0 | 0 |
| DENTAL CARVER FILE (G) |  |  | 1 | 1 | 0 |
| DENTAL CROWN REMOVER |  |  | 1 | 0 | 0 |
| DENTAL ELEVATOR - 301 (I) |  |  | 1 | 1 | 0 |
| DENTAL ELEVATOR - 34S (J) |  |  | 1 | 1 | 0 |
| DENTAL  EUGENOL | ANESTHETIC | 1ML  ORAL |  |  |  |
|  |  |  | 2 | 2 | 1 |

SYRINGE

| DENTAL EXPLORER/PROBE (E) |  |  | 1 | 1 | 0 |
| --------------------------- | ----------- | ----- | --- | --- | --- |
| DENTAL FORCEPS-10S (A) |  |  | 1 | 1 | 0 |
| DENTAL FORCEPS-151A (B) |  |  | 1 | 1 | 0 |
| DENTAL FORCEPS-17 (C) |  |  | 1 | 1 | 0 |
| DENTAL MIRROR (H) |  |  | 1 | 1 | 1 |
| DENTAL SYRINGE (TUBEX) |  |  | 1 | 0 | 0 |
| DERMABOND APPLICATOR 0.5ML |  |  | 2 | 1 | 0 |
| DEXAMETHASONE | (DECADRON) | 10MG |  |  |  |
|  |  |  | 20 | 1 | 0 |

INJECTABLE

| DIAMOX (ACETAZOLAMIDE) 250 MG TABLETS |  |  | 100 | 6 | 0 |
| -------------------------------------- | --- | --- | ---- | --- | --- |
| DIFLUCAN (FLUCONAZOLE) 150 MG |  |  | 150 | 1 | 1 |
| DILANTIN (PHENYTOIN) 300MG CAPSULES |  |  | 30 | 6 | 0 |

DILAUDID (HYDROMORPHONE) 2MG/ML, 1ML

|  |  |  | 18 | 6 | 0 |
| --- | --- | --- | --- | --- | --- |

SYRINGE

| DISPOSABLE OTOSCOPE SPECULA |  |  | 80 | 0 | 0 |
| -------------------------------- | --- | --- | --- | --- | --- |
| DULCOLAX (BISACODYL) TABLET 5MG |  |  | 40 | 16 | 2 |
| EAR CURETTE |  |  | 2 | 0 | 0 |
| EAR WICK |  |  | 6 | 2 | 1 |

EFFEXOR  XR  (VENLAFAXINE  XR)  75  MG

|  |  |  | 60 | 0 | 0 |
| --- | --- | --- | --- | --- | --- |

CAPSULES

| ENDOTRACHEAL STYLET |  |  | 1 | 1 | 0 |
| -------------------- | ------------------------- | --- | --- | --- | --- |
| EPIPEN 1:1000 |  |  | 3 | 1 | 0 |
| EPT |  |  | 2 | 1 | 0 |
| ERTAPENEM 1GM |  |  | 6 | 6 | 0 |
| ERYTHROMYCIN | OINTMENT  0.5%,  3.5  GM |  |  |  |  |
|  |  |  | 1 | 1 | 0 |

TUBE

| ESTROGEN 1.25 MG TABLETS |  |  | 100 | 7 | 7 |
| ------------------------- | --- | --- | ---- | --- | ---------------- |
|  |  |  | 10 |  | 03 OCTOBER 2019 |
| IMM Service Request Report – 2024 Lunar |  |  |  |  |  | S-20190528-412 |
| ---------------------------------------- | --- | --- | --- | --- | --- | --------------- |

ETHINYL ESTRADIOL / NORGESTREL 0.05 MG/

|  |  |  |  | 42 | 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- |

### 0.5 MG

| EYE SHIELD |  |  |  | 1 | 0 | 0 |
| --------------------------------- | --- | -------------- | --- | --- | -------- | -------- |
| EYE SIMULATOR CORNEA |  |  |  | 2 | 0 | 0 |
| EYE WASH GOGGLES & TUBING |  |  |  | 1 | 1 | 1 |
| EYEWASH WASTE WATER BAG |  |  |  | 6 | 3 | 1 |
| FINGER SPLINT |  |  |  | 1 | 1 | 1 |
| FLAGYL (METRONIDAZOLE) 500MG |  |  |  | 60 | 30 | 21 |
| FLUOCINONIDE 0.05%, 30GM TUBE |  |  |  | 2 | 0.5 (1) | 0.2 (1) |
| FLUORESCEIN 1MG STRIPS |  |  |  | 20 | 6 | 3 |
| FLUTICASONE 220MCG, 12GM INHALER |  |  |  | 2 | 0 | 0 |
| FOAM ELECTRODES |  |  |  | 20 | 10 | 1 |
| G1 CAMCORDER |  |  |  | 1 | 0 | 0 |
| GAUZE PADS (4X4) |  |  |  | 50 | 0 | 0 |
| HEIMLICH MANEUVER |  |  |  | 1 | 1 | 1 |
| HEMOSTATS |  |  |  | 1 | 1 | 0 |
| HOT AND COLD PAD |  |  |  | 1 | 0 | 0 |
| ILMA CUE CARD |  |  |  | 1 | 1 | 0 |
| ILMA  ENDOTRACHEAL |  | TUBE  7.0/7.5 | & |  |  |  |
|  |  |  |  | 4 | 1 | 0 |

ENDOTRACHEAL TUBE 7.0/8.0

| ILMA HARDWARE |  |  |  | 1 | 0 | 0 |
| ----------------------------------------- | ------------ | -------- | --- | --- | -------- | --- |
| ILMA STABILIZING ROD |  |  |  | 1 | 1 | 0 |
| ILMA SYRINGE |  |  |  | 2 | 0 | 0 |
| IMODIUM (LOPERAMIDE HCL) 2 MG TABLET |  |  |  | 40 | 24 | 8 |
| INTRAOSSEOUS DEVICE STARTER KIT |  |  |  | 1 | 1 | 0 |
| INTRAOSSEOUS INJECTION DEVICE |  |  |  | 2 | 1 | 0 |
| IODINE SWAB STICK |  |  |  | 14 | 0 | 0 |
| IV ADMINISTRATION SET |  |  |  | 3 | 2 | 0 |
| IV CAP |  |  |  | 5 | 2 | 0 |
| IV CATHETER (14G) |  |  |  | 2 | 0 | 0 |
| IV CATHETER (18G) |  |  |  | 4 | 2 | 0 |
| IV CATHETER (20G) |  |  |  | 4 | 2 | 1 |
| IV CATHETER (22G) |  |  |  | 4 | 1 | 0 |
| IV FLUID 1L (1000ML) |  |  |  | 4 | 0 | 0 |
| IV PRESSURE INFUSER |  |  |  | 1 | 1 | 0 |
| KETAMINE 50 MG/ML, 10 ML MULTI DOSE VIAL |  |  |  | 4 | 0.3 (1) | 0 |
| LARYNGOSCOPE (BLADE) |  |  |  | 1 | 0 | 0 |
| LARYNGOSCOPE HANDLE |  |  |  | 1 | 0 | 0 |
| LEVAQUIN (LEVOFLOXACIN) 500MG |  |  |  | 30 | 0 | 0 |
| LIDOCAINE | (XYLOCAINE) | CARDIAC | 2% |  |  |  |
|  |  |  |  | 2 | 0 | 0 |

(20MG/ML) 5ML SYRINGE

| LIDOCAINE  (XYLOCAINE)  PLAIN  1%,  10ML |  |  |  | 3 | 1 | 0 |
| ----------------------------------------- | --- | --- | --- | --- | --- | ---------------- |
|  |  |  |  | 11 |  | 03 OCTOBER 2019 |
| IMM Service Request Report – 2024 Lunar |  |  |  |  |  |  | S-20190528-412 |  |
| ---------------------------------------- | ----------------------------- | --- | --- | --- | --- | -------- | --------------- | -------- |
|  | MULTI DOSE VIAL |  |  |  |  |  |  |  |
|  | LIDOCAINE JELLY 2% 30ML TUBE |  |  | 3 |  | 1.2 (2) |  | 0.3 (1) |

LIDOCAINE W/ EPINEPHRINE (XYLOCAINE) 2 %,

|  |  |  |  |  |  |  |  |  |
| --- | --------------------------------------- | --- | --- | --- | --- | -------- | --- | --- |
|  | 2-ML UNITS 1:100,000 EPI, 20 ML. MULTI |  |  | 2 |  | 0.1 (1) |  | 0 |

DOSE VIALS.

|  | LOPRESSOR (METOPROLOL) 50 MG |  |  | 100 |  | 62 |  | 0 |
| --- | --------------------------------- | --- | ---- | ---- | --- | -------- | --- | -------- |
|  | LOTRIMIN AF CREAM (CLOTRIMAZOLE) |  | 1%, |  |  |  |  |  |
|  |  |  |  | 2 |  | 1.1 (2) |  | 0.1 (1) |

30GM TUBE

|  | MAXIMUM ABSORBENCY GARMENT (MAG) |  |  | 1 |  | 0 |  | 0 |
| --- | ---------------------------------------- | -------- | ------------- | ---- | --- | -------- | --- | -------- |
|  | MEDICAL TAPE |  |  | 5 |  | 0 |  | 0 |
|  | MELATONIN 3 MG |  |  | 200 |  | 0 |  | 0 |
|  | MIRROR |  |  | 1 |  | 0 |  | 0 |
|  | MOTRIN (IBUPROFEN) 400MG |  |  | 500 |  | 55 |  | 15 |
|  | MOXIFLOXACIN (AVELOX) 0.5%, 3ML BOTTLE |  |  | 4 |  | 0.3 (1) |  | 0.1 (1) |
|  | MUPIROCIN (BACTROBAN) 2%, 22 GM TUBE |  |  | 2 |  | 1 |  | 0.1 |
|  | NASAL AIRWAY 6MM |  |  | 1 |  | 0 |  | 0 |
|  | NASAL AIRWAY 7MM |  |  | 1 |  | 0 |  | 0 |
|  | NASAL PACKING (POSTERIOR NASAL PACKING) |  |  | 10 |  | 1 |  | 0 |
|  | NEEDLE (23G) |  |  | 20 |  | 0 |  | 0 |
|  | NEEDLE [25G] |  |  | 4 |  | 1 |  | 0 |
|  | NEEDLE DRIVER (AA) |  |  | 1 |  | 1 |  | 0 |
|  | NEEDLE PLASTIC |  |  | 10 |  | 0 |  | 0 |
|  | NITRILE  GLOVES | (LARGE, | MEDIUM,  AND |  |  |  |  |  |
|  |  |  |  | 30 |  | 0 |  | 0 |

SMALL) (PAIR)

|  | NITROGLYCERIN TABLET 0.4MG |  |  | 25 |  | 10 |  | 1 |
| --- | -------------------------------------- | ----------- | ------------ | --- | --- | -------- | --- | --- |
|  | NONSTICK BANDAGE (TELFA PADS) |  |  | 20 |  | 0 |  | 0 |
|  | NYLON SUTURE 2.0 |  |  | 2 |  | 2 |  | 1 |
|  | NYLON SUTURE 5.0 |  |  | 2 |  | 0 |  | 0 |
|  | ORAL AIRWAY |  |  | 2 |  | 0 |  | 0 |
|  | OTOSCOPE HANDLE |  |  | 1 |  | 1 |  | 1 |
|  | OTOSCOPE HEAD |  |  | 1 |  | 1 |  | 1 |
|  | OTOSCOPE USB CABLE |  |  | 1 |  | 1 |  | 1 |
|  | OXYGEN MASK - RESUSCITATION MASK |  |  | 1 |  | 0 |  | 0 |
|  | OXYGEN TUBING |  |  | 1 |  | 0 |  | 0 |
|  | PANOPTIC OPHTHALMOSCOPE |  |  | 1 |  | 1 |  | 1 |
|  | PENLIGHT |  |  | 2 |  | 1 |  | 1 |
|  | PEPTO-BISMOL 262MG CHEWABLE TABS |  |  | 80 |  | 6 |  | 4 |
|  | PHENERGAN (PROMETHAZINE TABLET) 25 MG |  |  | 30 |  | 4 |  | 0 |
|  | PREDNISONE 20 MG |  |  | 40 |  | 4 |  | 0 |
|  | PRILOSEC 20MG |  |  | 90 |  | 0 |  | 0 |
|  | PROMETHAZINE | INJECTABLE | (PHENERGAN) |  |  |  |  |  |
|  |  |  |  | 12 |  | 1.5 (2) |  | 0 |

50MG/ML SINGLE DOSE VIAL

|  |  |  |  | 12 |  |  | 03 OCTOBER 2019 |  |
| --- | --- | --- | --- | --- | --- | --- | ---------------- | --- |
| IMM Service Request Report – 2024 Lunar |  |  |  |  |  | S-20190528-412 |
| ---------------------------------------- | ----------- | ------------ | --- | --- | --- | --------------- |
| PROPARACAINE | EYE  DROPS | 0.5%,  15ML |  |  |  |  |
|  |  |  | 1 |  | 0 | 0 |

BOTTLE

| PROVIGIL (MODAFINIL) 200 MG TABLETS |  |  | 30 |  | 0 | 0 |
| ------------------------------------ | ----------- | -------- | --- | --- | --- | --- |
| PSYCHOTHERAPY |  |  | 1 |  | 1 | 1 |
| REFRESH | ARTIFICIAL | TEARS |  |  |  |  |
| (CARBOXYMETHYLCELLULOSE) |  | 0.5%, | 40 |  | 6 | 3 |

0.4ML BOTTLE REFRESH EYE OINTMENT (PETROLATUM WHITE

|  |  |  | 4 |  | 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- |

AND MINERAL OIL) 42.5%; 57.3%, 3.5GM

| ROBINUL (GLYCOPYRROLATE) 0.2MG/ML |  |  | 5 |  | 0 | 0 |
| ------------------------------------- | -------- | ------------- | --- | --- | --- | --- |
| ROCEPHIN (CEFTRIAXONE) 1 GM |  |  | 3 |  | 1 | 0 |
| ROLLED GAUZE |  |  | 2 |  | 0 | 0 |
| SALINE NOSE SPRAY 22ML BOTTLE |  |  | 1 |  | 0 | 0 |
| SAM SPLINT - LEG/ARM SPLINT |  |  | 1 |  | 0 | 0 |
| SCALPEL #11 (SCALPEL BLADE & HANDLE) |  |  | 1 |  | 1 | 0 |
| SCISSORS – TRAUMA |  |  | 1 |  | 0 | 0 |
| SHARPS CONTAINER |  |  | 40 |  | 0 | 0 |
| SILVER NITRATE STICK 75%/25% |  |  | 10 |  | 0 | 0 |
| SKIN STAPLE REMOVER |  |  | 1 |  | 1 | 0 |
| SKIN STAPLER |  |  | 2 |  | 1 | 0 |
| SMOOTH FORCEPS |  |  | 1 |  | 1 | 1 |
| SPACE ANTICIPATION GLASSES |  |  | 6 |  | 0 | 0 |
| SPACE STATION EYE WASH |  |  | 1 |  | 1 | 0 |
| STERILE  GLOVES | (LARGE, | MEDIUM,  AND |  |  |  |  |
|  |  |  | 6 |  | 0 | 0 |

SMALL) (PAIR)

| STERILE WATER 10 ML VIAL |  |  | 2 |  | 0 | 0 |
| ----------------------------------- | --- | --- | ---- | --- | --- | --- |
| STETHOSCOPE |  |  | 2 |  | 1 | 1 |
| STETHOSCOPE EAR PIECES |  |  | 15 |  | 0 | 0 |
| SUCTION CARTRIDGE |  |  | 1 |  | 0 | 0 |
| SUCTION DEVICE |  |  | 1 |  | 0 | 0 |
| SUCTION DEVICE COLLECTION BAG |  |  | 2 |  | 0 | 0 |
| SUCTION DEVICE SYRINGE |  |  | 1 |  | 0 | 0 |
| SUCTION TIP - MOUTH (CURETTE) |  |  | 1 |  | 0 | 0 |
| SUCTION TUBING - ENDOTRACHEAL TUBE |  |  | 1 |  | 0 | 0 |
| SUCTION TUBING - GASTRIC TUBE |  |  | 1 |  | 1 | 0 |
| SUDAFED (PSEUDOEPHEDRINE) 30MG |  |  | 100 |  | 0 | 0 |

SUDAFED 12 HOUR (PSEUDOEPHEDRINE) 120

|  |  |  | 125 |  | 6 | 7 |
| --- | --- | --- | ---- | --- | --- | --- |

MG

| SURGICAL LUBRICANT |  |  | 6 |  | 0 | 0 |
| --------------------- | --- | --- | --- | --- | --- | ---------------- |
| SURGICAL TOOLS KIT |  |  | 1 |  | 0 | 0 |
| SUTURE SCISSORS (BB) |  |  | 1 |  | 0 | 0 |
| SYRINGE (10CC) |  |  | 6 |  | 3 | 0 |
|  |  |  | 13 |  |  | 03 OCTOBER 2019 |
| IMM Service Request Report – 2024 Lunar |  |  |  |  |  | S-20190528-412 |
| ---------------------------------------- | ------------------- | --- | ------ | --- | --- | --------------- |
| SYRINGE (35CC) |  |  |  | 1 | 0 | 0 |
| SYRINGE (3CC) |  |  |  | 20 | 2 | 0 |
| SYRINGE (5CC) |  |  |  | 6 | 0 | 0 |
| SYRINGE (60ML) |  |  |  | 1 | 1 | 0 |
| TAMSULOSIN 0.4 MG TABLET |  |  |  | 10 | 10 | 0 |
| TEMPORARY TOOTH FILLING |  |  |  | 1 | 0 | 0 |
| THERMOMETER |  |  |  | 1 | 0 | 0 |
| TOBRAMYCIN | AND  DEXAMETHASONE |  | 0.3%; |  |  |  |
|  |  |  |  | 1 | 0 | 0 |

0.1%, 10ML BOTTLE

| TONGUE DEPRESSOR |  |  |  | 20 | 0 | 0 |
| --------------------- | ------------ | --------- | ---- | ---- | --- | --- |
| TONOMETER |  |  |  | 1 | 0 | 0 |
| TONOMETER TIP COVER |  |  |  | 150 | 0 | 0 |
| TOOTHED FORCEPS (EE) |  |  |  | 1 | 0 | 0 |
| TORADOL | (KETOROLAC) | 30MG/ML, | 2ML |  |  |  |
|  |  |  |  | 3 | 4 | 1 |

### SINGLE DOSE VIAL

| TOURNIQUET |  |  |  | 1 | 1 | 1 |
| ---------------------------------------- | --- | -------------- | --- | ---- | --- | --- |
| TROPICAMIDE 1% |  |  |  | 6 | 0 | 0 |
| TYLENOL (ACETAMINOPHEN) 325 MG |  |  |  | 250 | 96 | 4 |
| ULTRASOUND GEL |  |  |  | 17 | 2 | 1 |
| ULTRASOUND MACHINE |  |  |  | 1 | 0 | 0 |
| URINARY COLLECTION BAG (LEG BAG) |  |  |  | 250 | 1 | 0 |
| URINE CATHETER COUDE |  |  |  | 2 | 0 | 0 |
| URINE CATHETER FOLEY |  |  |  | 2 | 0 | 0 |
| URINE CATHETER SHORT |  |  |  | 10 | 3 | 0 |
| URINE CATHETER STRAIGHT |  |  |  | 2 | 3 | 0 |
| URINE CHEMSTRIPS |  |  |  | 10 | 9 | 5 |
| URINE COLOR CHART |  |  |  | 1 | 0 | 0 |
| VALACYCLOVIR 1 GM TABLET |  |  |  | 60 | 21 | 21 |
| VALIUM (DIAZEPAM) 5 MG/ML, 2 ML SYRINGE |  |  |  | 2 | 1 | 0 |
| VARIABLE OXYGEN SYSTEM |  |  |  | 1 | 0 | 0 |
| VICODIN | HP | (HYDROCODONE/ |  |  |  |  |
|  |  |  |  | 30 | 36 | 6 |

ACETAMINOPHEN HP) 10 MG/660 MG

| VOS  INTUBATED | PATIENT | HARDWARE |  |  |  |  |
| --------------- | -------- | --------- | --- | --- | --- | --- |
|  |  |  |  | 1 | 0 | 0 |

(VENTILATOR/RESPIRATOR)

| WATER |  |  |  | 1 | 0 | 0 |
| --------------------------------- | --- | --- | --- | --- | --- | ---------------- |
| WOUND PACKING |  |  |  | 3 | 0 | 0 |
| ZANTAC (RANITIDINE) 150 MG |  |  |  | 60 | 4 | 4 |
| ZIPRASIDONE (GEODON 20MG/ML) |  |  |  | 2 | 0 | 0 |
| ZITHROMAX (AZITHROMYCIN) 250 MG |  |  |  | 18 | 12 | 6 |
| ZOFRAN (ONDANSETRON) 8 MG TABLET |  |  |  | 30 | 12 | 2 |
| ZOLOFT (SERTRALINE) 50 MG |  |  |  | 60 | 20 | 0 |
| ZYRTEC (CETIRIZINE) 10 MG TABLET |  |  |  | 30 | 0 | 0 |
|  |  |  |  | 14 |  | 03 OCTOBER 2019 |
IMM Service Request Report – 2024 Lunar S-20190528-412 The IMM MedCap results for TME, CHI, EVAC, and LOCL for the simulated DRMs are presented in the tables below. Table 4 and figure 1 show the average number of total medical events (TME) during the mission across all of the DRMs. Table 5 and figure 2 show the average CHI across all of the DRMs. Table 6 along with figures 3 and 4 show the probability of EVAC and LOCL across all of the DRMs. Note that in the figures cc corresponds to cm3.

Table 4: Average Number of TME for the DRMs

TME 95% CI 7.5 day DRM with 5.22 lb. (2.37 kg) - MedCap 2.65 0 6 6430 cm3 Capabilities 27.5 day DRM with 22.31 lbs. MedCap 21.66 14 30 (10.12 kg.) – 20326 cm3

Figure 1: Average Number of TME for the DRMs

### Total Medical Events

35 30 25 20 15 10 5 0 1 7.5-day DRM with 5.22 lb. (2.37 kg) - 6430 cc Capabilities 27.5-day DRM with 22.31 lbs. (10.12 kg.) – 20326 cc 15 03 OCTOBER 2019

IMM Service Request Report – 2024 Lunar S-20190528-412

Table 5: Average CHI for the DRMs

CHI 95% CI 7.5 day DRM with 5.22 lb. (2.37 kg) - MedCap 97.63 89.76 100 6430 cc Capabilities 27.5 day DRM with 22.31 lbs. MedCap 96.87 92.43 98.80 (10.12 kg.) – 20326 cc

Figure 2: Average CHI for the DRMs

Crew Health Index (%) 102 100 98 96 94 92 90 88 86 84 1 7.5-day DRM with 5.22 lb. (2.37 kg) - 6430 cc Capabilities 27.5-day DRM with 22.31 lbs. (10.12 kg.) – 20326 cc 16 03 OCTOBER 2019

|  | IMM Service Request Report – 2024 Lunar |  |  |  |  |  |  |  | S-20190528-412 |
| --- | ---------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --------------- |
Table 6: Probability of EVAC and LOCL for the DRMs

|  |  |  |  | EVAC |  |  |  | LOCL |  |
| --- | -------------- | --- | ------------ | ----- | ------- | --- | ------------ | ----- | ------- |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  | Probability |  | 95% CI |  | Probability |  | 95% CI |
|  | 7.5 day DRM |  |  |  |  |  |  |  |  |
|  | with 5.22 lb. |  |  |  |  |  |  |  |  |
(2.37 kg) -  MedCap  0.0037  0.0033  0.0041  0.0002  0.0001  0.0003 6430 cc Capabilities

|  | 27.5 day |  |  |  |  |  |  |  |  |
| --- | --------- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | DRM with |  |  |  |  |  |  |  |  |

22.31 lbs.  MedCap  0.0094  0.0088  0.0100  0.0005  0.0003  0.0006 (10.12 kg.) – 20326 cc

Figure 3: Probability of EVAC for the DRMs

### Probability of Evacuation

0.012 0.01 0.008 0.006 0.004 0.002 0

|  |  | All Conditions |  | Environmental |  | Injury/Trauma |  | Medical |  |
| --- | --- | --------------- | --- | -------------- | --- | -------------- | --- | -------- | --- |

7.5-day DRM with 5.22 lb. (2.37 kg) - 6430 cc Capabilities  27.5-day DRM with 22.31 lbs. (10.12 kg.) – 20326 cc

|  |  |  |  |  | 17 |  |  |  | 03 OCTOBER 2019 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---------------- |
IMM Service Request Report – 2024 Lunar S-20190528-412

Figure 4: Probability of LOCL for the DRMs

### Probability of Loss of Crew Life

0.0007 0.0006 0.0005 0.0004 0.0003 0.0002 0.0001 0

### All Conditions Environmental Injury/Trauma Medical

7.5-day DRM with 5.22 lb. (2.37 kg) - 6430 cc Capabilities 27.5-day DRM with 22.31 lbs. (10.12 kg.) – 20326 cc 18 03 OCTOBER 2019

| IMM Service Request Report – 2024 Lunar |  |  |  |  | S-20190528-412 |  |
| ---------------------------------------- | --- | --- | --- | --- | --------------- | --- |

Tables 7 and 8 show the top ten influential conditions for EVAC for the 7.5 day mission with ~5 lb. capabilities, and 27.5 day mission with ~20 lb. capabilities sets Tables 9 and 10 present the top ten influential conditions for LOCL for those same two missions.

Table 7: 7.5 day DRM with 5.22 lb. (2.37 kg) - 6430 cm3 CHI Optimized Medical Capabilities; Top

### Ten Influential Conditions for EVAC

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  | Contribution | Percent |

BEST

|  | PARTIAL  EYE CHEMICAL BURN |  | ENVIRONMENTAL | 65 | 17.52 | 17.52 |
| --- | --------------------------- | --- | -------------- | --- | ------ | ------ |

CASE

### WORST  DECOMPRESSION SICKNESS SECONDARY

|  | PARTIAL |  | ENVIRONMENTAL | 31 | 8.36 | 25.88 |
| --- | -------- | --- | -------------- | --- | ----- | ------ |

### CASE  TO EXTRAVEHICULAR ACTIVITY

BEST PARTIAL  FINGER DISLOCATION1  INJURY/TRAUMA  28  7.55  33.42 CASE WORST

|  | PARTIAL  DIARRHEA |  | MEDICAL | 25 | 6.74 | 40.16 |
| --- | ------------------ | --- | -------- | --- | ----- | ------ |

CASE WORST PARTIAL  SHOULDER SPRAIN/STRAIN  INJURY/TRAUMA  22  5.93  46.09 CASE WORST

|  | PARTIAL  URINARY TRACT INFECTION |  | MEDICAL | 22 | 5.93 | 52.02 |
| --- | --------------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SKIN LACERATION |  | INJURY/TRAUMA | 21 | 5.66 | 57.68 |
| --- | ------------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  EYE CHEMICAL BURN |  | ENVIRONMENTAL | 16 | 4.31 | 61.99 |
| --- | --------------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  GASTROENTERITIS |  | MEDICAL | 15 | 4.04 | 66.04 |
| --- | ------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SKIN INFECTION |  | MEDICAL | 13 | 3.50 | 69.54 |
| --- | ------------------------ | --- | -------- | --- | ----- | ------ |

CASE

Table 8: 27.5 day DRM with 22.31 lbs. (10.12 kg.) – 20326 cm3 CHI Optimized Medical

Capabilities; Top Ten Influential Conditions for EVAC

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  | Contribution | Percent |

BEST PARTIAL  FINGER DISLOCATION1  INJURY/TRAUMA  98  10.35  10.35 CASE WORST

|  | PARTIAL  SKIN INFECTION |  | MEDICAL | 76 | 8.03 | 18.37 |
| --- | ------------------------ | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  DIARRHEA |  | MEDICAL | 69 | 7.29 | 25.66 |
| --- | ------------------ | --- | -------- | --- | ----- | ------ |

CASE WORST PARTIAL  SHOULDER SPRAIN/STRAIN  INJURY/TRAUMA  50  5.28  30.94 CASE WORST

|  | PARTIAL  NEPHROLITHIASIS |  | MEDICAL | 46 | 4.86 | 35.80 |
| --- | ------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  GASTROENTERITIS |  | MEDICAL | 43 | 4.54 | 40.34 |
| --- | ------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SKIN LACERATION |  | INJURY/TRAUMA | 39 | 4.12 | 44.46 |
| --- | ------------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST PARTIAL  HEADACHE (SPACE ADAPTATION)  MEDICAL  30  3.17  47.62 CASE WORST PARTIAL  ANKLE SPRAIN/STRAIN  INJURY/TRAUMA  29  3.06  50.69 CASE WORST PARTIAL  ELBOW SPRAIN/STRAIN  INJURY/TRAUMA  26  2.75  53.43 CASE

1 Best case finger dislocation is not expected to contribute to EVAC. This EVAC output is due to iMED input data for untreated best case finger dislocation of 0-100% instead of 0%.

|  |  |  | 19 |  | 03 OCTOBER 2019 |  |
| --- | --- | --- | --- | --- | ---------------- | --- |
| IMM Service Request Report – 2024 Lunar |  |  |  |  | S-20190528-412 |  |
| ---------------------------------------- | --- | --- | --- | --- | --------------- | --- |
Table 9: 7.5 day DRM with 5.22 lb. (2.37 kg) - 6430 cm3 CHI Optimized Medical Capabilities, Top

### Ten Influential Conditions for LOCL

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |

### WORST  DECOMPRESSION SICKNESS SECONDARY

|  | PARTIAL |  | ENVIRONMENTAL | 9 | 50.00 | 50.00 |
| --- | -------- | --- | -------------- | --- | ------ | ------ |

### CASE  TO EXTRAVEHICULAR ACTIVITY

WORST

|  | PARTIAL  SEPSIS |  | MEDICAL | 3 | 16.67 | 66.67 |
| --- | ---------------- | --- | -------- | --- | ------ | ------ |

CASE BEST

|  | PARTIAL  SEPSIS |  | MEDICAL | 2 | 11.11 | 77.78 |
| --- | ---------------- | --- | -------- | --- | ------ | ------ |

CASE WORST PARTIAL  BURNS SECONDARY TO FIRE  ENVIRONMENTAL  1  5.56  83.33 CASE WORST

|  | PARTIAL  ACUTE DIVERTICULITIS |  | MEDICAL | 1 | 5.56 | 88.89 |
| --- | ------------------------------ | --- | -------- | --- | ----- | ------ |

CASE BEST

|  | PARTIAL  ANAPHYLAXIS |  | MEDICAL | 1 | 5.56 | 94.44 |
| --- | --------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SUDDEN CARDIAC ARREST |  | MEDICAL | 1 | 5.56 | 100.00 |
| --- | ------------------------------- | --- | -------- | --- | ----- | ------- |

CASE

Table 10: 27.5 day DRM with 22.31 lbs. (10.12 kg.) – 20326 cm3 CHI Optimized Medical

Capabilities; Top Ten Influential Conditions for LOCL

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |

WORST

|  | PARTIAL  SEPSIS |  | MEDICAL | 19 | 40.43 | 40.43 |
| --- | ---------------- | --- | -------- | --- | ------ | ------ |

CASE BEST

|  | PARTIAL  SEPSIS |  | MEDICAL | 7 | 14.89 | 55.32 |
| --- | ---------------- | --- | -------- | --- | ------ | ------ |

CASE

### WORST  DECOMPRESSION SICKNESS SECONDARY

|  | PARTIAL |  | ENVIRONMENTAL | 5 | 10.64 | 65.96 |
| --- | -------- | --- | -------------- | --- | ------ | ------ |

### CASE  TO EXTRAVEHICULAR ACTIVITY

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | PARTIAL |  | MEDICAL | 3 | 6.38 | 72.34 |
| --- | -------- | --- | -------- | --- | ----- | ------ |

### CASE  REACTION

WORST PARTIAL  BURNS SECONDARY TO FIRE  ENVIRONMENTAL  2  4.26  76.60 CASE WORST

|  | PARTIAL  ACUTE DIVERTICULITIS |  | MEDICAL | 2 | 4.26 | 80.85 |
| --- | ------------------------------ | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  APPENDICITIS |  | MEDICAL | 2 | 4.26 | 85.11 |
| --- | ---------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SUDDEN CARDIAC ARREST |  | MEDICAL | 2 | 4.26 | 89.36 |
| --- | ------------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  CHOKING/OBSTRUCTED AIRWAY |  | MEDICAL | 1 | 2.13 | 91.49 |
| --- | ----------------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SMALL BOWEL OBSTRUCTION |  | MEDICAL | 1 | 2.13 | 93.62 |
| --- | --------------------------------- | --- | -------- | --- | ----- | ------ |

CASE

|  |  |  | 20 |  | 03 OCTOBER 2019 |  |
| --- | --- | --- | --- | --- | ---------------- | --- |
IMM Service Request Report – 2024 Lunar S-20190528-412

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

Model. 2015. Houston, Texas, NASA Johnson Space Center. Ref Type: Report 21 03 OCTOBER 2019

| IMM Service Request Report – 2024 Lunar |  |  |  |  |  | S-20190528-412 |  |
| ---------------------------------------- | --- | --- | --- | --- | --- | --------------- | --- |

## Appendix A: IMM Status at Time of Service Request Report

| Validation status for |  |  |  |  |  |  |  |
| ---------------------- | --- | --- | --- | --- | --- | --- | --- |

IMM IMM V&V Matrix: The following bar chart shows the IMM v4.1 MATLAB status of IMM validation for each IMM element listed.

- Compliance with  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6);

NASA-Standard-7009  however there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been

| requirements | fully attained. |  |  |  |  |  |  |
| ------------- | ---------------- | ----------- | ------------------------ | --- | ----------------- | --- | --- |
|  |  | Compliant | Compliance Incomplete |  | Not applicable |  |  |
|  |  | 36 |  | 5 | 5 |  |  |
- Current NASA-  IMM Credibility Matrix: The following table shows the overall IMM v4.1 MATLAB credibility assessment score (CAS), individual factor CAS,

Standard-7009  customer-specified sufficiency thresholds, and weighted scores. Legend depicts CAS score designated range and color assignments from

| credibility assessment | NASA-Standard-7009. |  |  |  |  |  |  |
| ----------------------- | -------------------- | --- | --- | --- | --- | --- | --- |

score      Factor    Sufficiency    Factor    Weighted    Overall Score

|  |  |  |  | Thresholds | Score | Scores |  |
| --- | --- | --- | --- | ----------- | ------ | ------- | --- |
|  |  |  | Verification | 4 | 3.7 | 0.28 |  |
| --- | --- | --- | ------------- | ---- | ------ | ---------- | --- |
|  |  |  | Validation | 3 | 3 | 0.45 |  |
|  |  | Input Pedigree |  | 3 | 3 |  |  |
| --- | --- | ---------------------- | ------------ | ---- | ---- | ---------- | ----- |
|  |  |  |  |  |  | 0.53 |  |
|  |  | Results Uncertainty |  | 3 | 3 | 0.60 | 3.06 |
|  |  | Results Robustness |  | 3 | 3 | 0.45 |  |
|  |  |  | Use History | 3 | 3 | 0.45 |  |
|  |  | M&S Management |  | 2 | 2 | 0.10 |  |
| --- | --- | ----------------------- | --- | ---- | ---- | ---------- | --- |
|  |  | People Qualification |  | 4 | 4 | 0.20 |  |
|  |  |  |  |  |  |  |  |
| Additional verification | None |  |  |  |  |  |  |
| ------------------------ | ----- | --- | --- | --- | --- | --- | --- |

and validation information applicable to this analysis

- Integrated Medical  iMED Lockdown IDs: (53), created on (7/30/2019); and (57), created on (8/2/2019)

### Evidence Database

(iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software. MATLAB and all other MathWorks product version  or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to | None |  |  |  |  |  |  |
| ---------------------- | ----- | --- | --- | --- | --- | --- | --- |

the code for analysis

|  |  |  | 22 |  |  | 03 OCTOBER 2019 |  |
| --- | --- | --- | --- | --- | --- | ---------------- | --- |
| IMM Service Request Report – 2024 Lunar |  | S-20190528-412 |
| ---------------------------------------- | --- | --------------- |

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

infarction Headache (CO induced) 2  Choking/Obstructed Airway

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
| --------------------- | -------------------------------------- | --- |
| Acute Pancreatitis | Sudden Cardiac Arrest |  |
| Acute Prostatitis | Urinary Incontinence (space adaption) |  |
| Acute Sinusitis | Urinary Retention (space adaptation) |  |

Allergic Reaction (mild to moderate)  Urinary Tract Infection

| Anaphylaxis | Vaginal Yeast Infection |  |
| ------------ | ------------------------ | --- |

### Angina/Myocardial Infarction  Visual Impairment and Increased Intracranial

Pressure (VIIP) (space adaptation)

|  | 23 | 03 OCTOBER 2019 |
| --- | --- | ---------------- |
IMM Service Request Report – 2024 Lunar S-20190528-412

## Appendix C: Medical Conditions Modified for the 30 Day DRM

Due to limited vehicle size consisting of a single module and limited movement of crew the following major traumatic injury conditions are judged highly unlikely to occur during a 7.5 day DRM (and were removed prior to running the simulation):

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

Due to the assumption that the 7.5 days are to occur during the middle of a 27.5 day mission, all space adaptation conditions (listed below) were also judged unlikely to occur (and removed before running the 7.5 day simulation) with the exception of Visual Impairment and/or Increased Intracranial Pressure (VIIP) (Space Adaptation). For the 27.5 day DRM, the space adaptation conditions were assumed to possibly occur, and so were included as possible for the 27.5 day DRM.

- Back Pain (Space Adaptation)

- Constipation (space adaptation)

- Headache (space adaptation)

- Insomnia (space adaptation)

- Nasal Congestion (space adaptation)

- Nose bleed (space adaptation)

- Space Motion Sickness (space adaptation)

- Urinary Incontinence (space adaptation)

- Urinary Retention (space adaptation)

Visual Impairment and/or Increased Intracranial Pressure (VIIP) (Space Adaptation):

- The probability of EVAC and probability of LOCL were set to zero for VIIP.

24 03 OCTOBER 2019

IMM Service Request Report – 2024 Lunar S-20190528-412 Rather than considering the entire ISS volume for application of Fire Model result input to the IMM, ISS Node 3 was used to approximate the size of the Orion vehicle. The corresponding Node 3 Fire Model results (directly from the ISS PRA Fire Model v3.2) were used to update Burns Secondary to Fire and Smoke Inhalation for this request as follows:

- Burns Secondary to Fire:

o incidence 0.00613 (events/person year) - probability one or more crew exposed to response level event (value same as for likelihood for Fire Sustains (response level event) since modeling for single compartment, i.e. Node 3) (v3.2); o worst case scenario = 0-5% - EVAC (uncontrollable fire- not vehicle) (value = 0.0486; derived from uncontrolled fire event/probability one or more crew exposed to response level event)

- Smoke Inhalation:

o incidence 0.00613 (events/person year) - Fire Sustains (response level event) (v3.2); o worst case scenario = 0-5% - EVAC (uncontrollable fire- not vehicle) (value = 0.0486; derived from uncontrolled fire event/Fire Sustains (response level event)) 25 03 OCTOBER 2019

---

## Source metadata

```yaml
source_filename: "2024-lunar.pdf"
source_folder: "Mission Risk Reports/Lunar Orbit and Surface and Low Earth Orbit"
source_url: "https://drive.google.com/file/d/1lgUjphd1TVt6gGA7evmKPQlAEOGnOjab/view"
source_drive_id: "1lgUjphd1TVt6gGA7evmKPQlAEOGnOjab"
source_sha256: de32cb1b4823ff33bcf3e25a30b79b6752124df0e019e3e99cbdb581b1d821cb
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 25
ocr_performed: false
```
