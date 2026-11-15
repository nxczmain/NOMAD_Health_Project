# Orion Medical Kit Contents

[View original PDF](https://drive.google.com/file/d/1L-nHtmWFdR63z7-i_9-_FU0DAuPpvpwd/view) · **22 pages**

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
- [Appendix C: Medical Conditions Excluded or Modified for the 21 Day DRM](#appendix-c-medical-conditions-excluded-or-modified-for-the-21-day-drm)

---

IMM Service Request Report – Orion Medical Kit Contents S-20180815-406

## Executive Summary

The simulation results from a 21 day DRM with 4 crewmembers and zero EVAs is used to generate an optimized medical kit with CHI priority and a 20 lbs. (9.07 kg) mass constraint as well as an optimized kit with CHI priority with a 20 lbs. mass and 13721 cm3 volume constraint.

Before optimization, the simulation was run using a default ISS-based medical kit with a total mass of 115.25kg (253.55 lb.) and a total volume of 526,418 cm3 as a baseline/comparison.

The contents of the optimized medical kits are presented in Table 2. The kits contain some resources that have decimal-valued quantities. For those resources, the decimal values were rounded up to the nearest integer. The 20 lb.-optimized kit without volume constraint, generated from the optimization routine, is approximately 20.39 lbs. (9.25 kg) and 23,594.34 cm3. This optimized medical kit results in a mean CHI of 97.20%. With this optimized kit, the mean probability of EVAC is 0.0065 and the mean probability of LOCL is 0.0005. The optimized kit with a weight constraint of 20 lb. and a volume constraint of 13721 cm3, generated from the optimization routine, is approximately 17.09 lbs. (7.75 kg) and 13,895.43 cm3. This optimized medical kit results in a mean CHI of 97.20%. With this optimized kit, the mean probability of EVAC is 0.0074 and the mean probability of LOCL is 0.0005. The simulation results for the MedCap, or ISS medical capabilities without any resupply, timeline for both simulations are also presented in the results section.

Both optimized medical kits result in the same mean CHI and mean probability of LOCL.

However, the optimized medical kit with a volume constraint results in an increase in the mean probability of EVAC compared to the optimized medical kit without a volume constraint. This increase in the probability of EVAC with the volume constrained medical kit is likely due to the omission of several resources (IV Fluid, Structural Aluminum Malleable (SAM) Splint, and Variable Oxygen System) due to the volume constraints. 1 12 SEPTEMBER 2018

IMM Service Request Report – Orion Medical Kit Contents S-20180815-406

## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are crew health index (CHI), need for evacuation (EVAC) and loss of crew life (LOCL).

The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profile shown in Table 1. The outcomes of certain IMM medical conditions are influenced by pre-existing medical history including: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data.

Table 1: 21 day DRM crew profile

### Prior Abdominal

### Sex Crowns EVA CAC Contacts

Surgery Crew 1 Male Yes No Yes Yes No Crew 2 Male No No No Yes No Crew 3 Male No No No No No Crew 4 Female No No Yes No Yes

### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix B. 2 12 SEPTEMBER 2018

IMM Service Request Report – Orion Medical Kit Contents S-20180815-406 However, to better approximate the MPCV real world system, several conditions were not considered or were modified for this request as described in Appendix C. The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data contained within the Integrated Medical Evidence Database (iMED). For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS.

Rather than considering the entire ISS for application of Fire Model result input to the IMM, ISS Node 3 was used to approximate the Orion vehicle. The corresponding Node 3 Fire Model results [6] were used to update Burns Secondary to Fire and Smoke Inhalation for this request as follows: Burns

- Secondary to Fire: incidence 0.00613 (events/person year), worst case scenario likelihood = 0-5%;

- Smoke Inhalation: incidence 0.00613 (events/person year), worst case scenario likelihood = 0-5%.

Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all- untreated (no Medkit) and baseline MedCap (ISS Medkit without resupply). For exploration missions, the MedCap state should most closely resemble a real world deep space mission where resupply is not possible but where utilization of partial and alternative treatment can occur.

### Main Outcomes

The IMM primary medical outcomes include the number of total medical events (TME), crew health index (CHI), probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources. CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the 3 12 SEPTEMBER 2018

IMM Service Request Report – Orion Medical Kit Contents S-20180815-406 availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, the simulation usually assigns each crew member only one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model. Catastrophic vehicle failures such as the Challenger and Columbia accidents, and MMOD (micrometeorite and orbital debris) are not considered as possible causes of EVAC and LOCL.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources. If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If none of the resources are available to treat the event, the event is considered "untreated." The initial quantities for medical resources are baselined to a fully stocked ISS medical kit (MedCap). Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated scenario and a 0-100% chance of going to EVAC in the best case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC. It should also be noted that packaging mass and volume are not considered in the IMM.

### Modeling Approach

One hundred thousand (100,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria.

Convergence criteria are met when there is less than or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 2 - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport. IMM outcomes were determined for the DRMs using the ISS MedCap scenario where all conditions are treated, partially treated or untreated based on the available resources of the ISS MedCap without 4 12 SEPTEMBER 2018

IMM Service Request Report – Orion Medical Kit Contents S-20180815-406 resupply. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, TME, CHI, EVAC and LOCL results are presented. Features, assumptions and limitations pertinent to this report are described in a separate section below.

### Optimization Approach

The optimized medical kit was selected solely to meet the optimization risk criteria within the specified mass and volume constraints. For 21 day DRM, end user specified mass constraints were 20 lbs. (~9.07 kg) with no volume constraint to maximize CHI, and 20 lbs. (~9.07 kg) with a 13,721 cm3 volume constraint to maximize CHI. It is important to note that the IMM v4.1 optimization routine used in this request considers resources at the unit resource level. Because of this, some resource quantities in the generated optimized kit have decimal values. Quantities for items in the medical kit must be integer- valued (as most resources cannot be fractionalized), therefore these quantities were rounded up to the nearest integer value. The optimization routine only considers resources marked as essential in iMED when generating the kit. It also does not consider resource dependencies when generating the kit. In other words, even though a set of resources may be required for treatment in reality, the optimization routine may only include a subset of those resources. The entire set of required resources is not bundled together. When generating the optimized kit, the quantity of each resource available to add to the kit is determined by the maximum quantity needed during a simulation trial. It is not restricted to the quantity in the ISS medkit. Therefore it is possible for the generated optimized medical kit to include a higher quantity for a particular resource than is included in the ISS medkit. Packaging mass and volume are not considered. The results of this optimization should only be used as an evidence-based guide to the development of an Orion Medical Kit and should not be used in isolation to design the medical kit without the input of subject matter expertise and operational experience.

Features, Assumptions and Limitations of IMM Version 4.1 [3]

1. All non-space adaption (SA) and non-extravehicular activity (EVA) related conditions have a

uniform likelihood of occurring throughout the mission duration. Space Adaptation Syndrome conditions occur in the first 5 days of the mission, with a peak occurrence at 48 hours.

2. Individuals cannot get the same condition for which they are currently being treated (i.e. during

Clinical Phase (CP) I and II).

3. EVAC and LOCL are generated for each medical event, and then the timing of the EVAC or LOCL

is generated according to a specified distribution.

4. Individuals are no longer at risk for further conditions once their status changes to either EVAC or

LOCL. From the start time of the EVAC or LOCL, the functional impairment of the crew member is 5 12 SEPTEMBER 2018

IMM Service Request Report – Orion Medical Kit Contents S-20180815-406 assumed to be 100%.

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

consumable resource, the crew member will only utilize resources at the level required by the condition that requires the most resources.

22. If the primary resource required for treating a medical condition is unavailable, one or more

alternative resources are considered, if appropriate. One example might be using acetaminophen in place of ibuprofen.

23. Total quantities of a consumable medical resource requiring a daily dose will be adjusted if a

dosage schedule runs past the end of the mission. 6 12 SEPTEMBER 2018

IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406

24. If a solar particle event causes acute radiation sickness in one or more crew members, IMM

assumes the condition begins identically in all affected crew members at the beginning of the solar particle event.

25. The IMM does not decrement non-consumable items and allows all non-consumable items to be

used simultaneously by multiple astronauts (e.g. blood pressure cuff).

## Results

The generated optimized medical kit is presented below in Table 2. The IMM simulation MedCap results for TME, CHI, EVAC, and LOCL for the simulated DRMs are presented in the proceeding tables and figures. Some of the resources in the optimized kit have quantities that are decimal values. With decimal values, the 20lb.-constrainted kit without volume constraint is approximately 19.97 lbs. (9.06 kg). When the individual quantities were rounded up to the nearest integer, this kit is approximately 20.39 lbs. (9.25 kg).  With decimal values, the 20lb., 13721 cm3-constrainted kit is approximately 16.76 lbs. (7.60 kg).

When the quantities were rounded up to the nearest integer, the kit is approximately 17.09 lbs. (7.75 kg).

It should be noted that the kit with the 13721 cm3 constraint is an approximation and was obtained by first optimizing to the volume constraint, and then optimizing the resulting kit to the mass constraint.

Table 2: Generated optimized medical kit with 20 lbs. (9.07 kg)-infinite volume constraint and 20

lbs.-13721cm3 constraint. The highlighted individual resources have quantities with decimal values. Those values were rounded up to the nearest integer for the proceeding simulation, shown in parentheses. If the resource name is highlighted in blue, this indicates a difference in quantity between the two kits

|  |  | 20 lb. – Infinite | 20 lb.-13721cc |
| --- | --- | ------------------ | --------------- |

Resource

|  |  | Volume Quantity | Quantity |
| --------------------------------------------- | --- | ---------------- | ------------------ |
| ABILIFY (ARIPIPRAZOLE) 5 MG |  | 0 | 0 |
| ABILIFY (ARIPIPRAZOLE) 7.5 MG/ML, 1.3 ML |  | 0 | 0 |
| ABSORBABLE SUTURE 3.0 |  | 2 | 2 |
| ACE BANDAGE 2 INCHES |  | 1 | 1 |
| ACE BANDAGE 3 INCHES |  | 1 | 1 |
| ACE BANDAGE 4 INCHES |  | 1 | 1 |
| ADRENALINE (EPINEPHRINE 1:10000) 10ML |  | 0 | 0 |
| AED |  | 0 | 0 |
| AFRIN (OXYMETAZOLINE) 0.05% 15ML BOTTLE |  | 1 | 1 |
| ALBUTEROL INHALER (PROVENTIL) 90 MCG, 6.7 GM |  | 1 | 2 |
| AMBIEN 10MG TABLET |  | 11 | 11 |
| AMBU BAG AND MASK |  | 0 | 0 |
| AMOXICILLIN 500 MG CAPSULE |  | 22 | 22 |
| ANTIVERT (MECLIZINE) 25 MG |  | 0 | 0 |
| ASPIRIN 325MG TAB. |  | 1 | 1 |
| ATIVAN (LORAZEPAM) 1 MG TABLET |  | 31 | 42 |
| ATROPINE 1 MG, 10ML SYRINGE. |  | 0 | 0 |
| BACITRACIN 500 UNITS/GM. 28 GM TUBE |  | 0.85 (1) | 0.85 (1) |
|  | 7 |  | 12 SEPTEMBER 2018 |
IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406 BACTRIM DS (SULFAMETHOXAZOLE/TRIMETHOPRIM) 800

|  |  |  | 40 | 40 |
| --- | --- | --- | --- | --- |

### MG/160 MG TABLET

| BANDAID (2X3) |  |  | 0 | 0 |
| --------------------------------------------- | ------------------- | ----------- | --------- | --------- |
| BANDAID (KNUCKLE) |  |  | 0 | 0 |
| BANDAID DOT |  |  | 0 | 0 |
| BANDAID STRIP |  |  | 0 | 0 |
| BENADRYL 25 MG CAPSULE |  |  | 26 | 26 |
| BENADRYL 50 MG/ML, 1ML INJECTABLE |  |  | 1 | 1 |
| BENZOCAINE SWAB STICK ORAL 20%, 0.15 ML SWAB |  |  | 0 | 0 |
| BIOHAZARD TRASH BAG |  |  | 0 | 0 |
| BLOOD OXIMETER |  |  | 1 | 1 |
| BLOOD PRESSURE /ECG MONITOR |  |  | 0 | 0 |
| BLOOD PRESSURE CUFF - LARGE |  |  | 0 | 0 |
| BLOOD PRESSURE CUFF - SMALL |  |  | 0 | 0 |
| BOUGIE ET TUBE INTRODUCER |  |  | 0 | 0 |
| BURN BANDAGE |  |  | 0 | 0 |
| BZK WIPES |  |  | 0 | 0 |
| CAMERA |  |  | 0 | 0 |
| CIPROFLOXACIN | AND  DEXAMETHASONE | (CIPRODEX) |  |  |
|  |  |  | 0.52 (1) | 0.52 (1) |

3%,7%, 7.5 ML BOTTLE

| CLARITIN (LORATADINE)10MG TABLET |  |  | 0 | 0 |
| --------------------------------- | --- | --- | -------- | -------- |
| CLEAR BANDAGE |  |  | 0 | 0 |
| CLEOCIN (CLINDAMYCIN) 300MG |  |  | 21 | 21 |
| CMRS |  |  | 0 | 0 |
| COTTON BALLS |  |  | 0 | 0 |
| COTTON PELLET |  |  | 0 | 0 |
| COTTON SWABS |  |  | 0 | 0 |
| CYCLOPENTOLATE 2% 15ML BOTTLE. |  |  | 0.2 (1) | 0.2 (1) |
| DCS EXAMINATION SCORECARD |  |  | 0 | 0 |

DEBROX FOR EARWAX (CARBAMIDE PEROXIDE) 6.5% 15ML

|  |  |  | 0 | 0 |
| --- | --- | --- | --- | --- |

BOTTLE

| DENTAL ADHESIVE (76 GRAMS) |  |  | 0.1 (1) | 0.1 (1) |
| ------------------------------------------- | --- | --- | -------- | ------------------ |
| DENTAL ADHESIVE TIP |  |  | 1 | 1 |
| DENTAL AMALGAM FILE |  |  | 0 | 0 |
| DENTAL CARVER FILE (G) |  |  | 1 | 1 |
| DENTAL CROWN REMOVER |  |  | 0 | 0 |
| DENTAL ELEVATOR - 301 (I) |  |  | 1 | 1 |
| DENTAL ELEVATOR - 34S (J) |  |  | 1 | 1 |
| DENTAL EUGENOL ANESTHETIC 1ML ORAL SYRINGE |  |  | 2 | 2 |
| DENTAL EXPLORER/PROBE (E) |  |  | 1 | 1 |
| DENTAL FORCEPS-10S (A) |  |  | 0 | 1 |
| DENTAL FORCEPS-151A (B) |  |  | 0 | 1 |
|  |  | 8 |  | 12 SEPTEMBER 2018 |
IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406

| DENTAL FORCEPS-17 (C) |  |  |  | 0 | 1 |
| ----------------------------------------------- | -------------- | ---------------- | --- | -------- | -------- |
| DENTAL MIRROR (H) |  |  |  | 1 | 1 |
| DENTAL SYRINGE (TUBEX) |  |  |  | 0 | 0 |
| DERMABOND APPLICATOR 0.5ML |  |  |  | 1 | 1 |
| DEXAMETHASONE (DECADRON) 10MG INJECTABLE |  |  |  | 1 | 1 |
| DIAMOX (ACETAZOLAMIDE) 250 MG TABLETS |  |  |  | 6 | 6 |
| DIFLUCAN (FLUCONAZOLE) 150 MG |  |  |  | 1 | 1 |
| DILANTIN (PHENYTOIN) 300MG CAPSULES |  |  |  | 6 | 6 |
| DILAUDID (HYDROMORPHONE) 2MG/ML, 1ML SYRINGE |  |  |  | 6 | 6 |
| DISPOSABLE OTOSCOPE SPECULA |  |  |  | 0 | 0 |
| DULCOLAX (BISACODYL) TABLET 5MG |  |  |  | 14 | 16 |
| EAR CURETTE |  |  |  | 0 | 0 |
| EAR WICK |  |  |  | 2 | 2 |
| EFFEXOR XR (VENLAFAXINE XR) 75 MG CAPSULES |  |  |  | 0 | 0 |
| ENDOTRACHEAL STYLET |  |  |  | 0 | 1 |
| EPIPEN 1:1000 |  |  |  | 1 | 1 |
| EPT |  |  |  | 1 | 1 |
| ERTAPENEM 1GM |  |  |  | 6 | 6 |
| ERYTHROMYCIN OINTMENT 0.5%, 3.5 GM TUBE |  |  |  | 1 | 1 |
| ESTROGEN 1.25 MG TABLETS |  |  |  | 7 | 7 |
| ETHINYL ESTRADIOL / NORGESTREL 0.05 MG/ 0.5 MG |  |  |  | 0 | 0 |
| EYE SHIELD |  |  |  | 0 | 0 |
| EYE SIMULATOR CORNEA |  |  |  | 0 | 0 |
| EYE WASH GOGGLES & TUBING |  |  |  | 1 | 1 |
| EYEWASH WASTE WATER BAG |  |  |  | 3 | 3 |
| FINGER SPLINT |  |  |  | 1 | 1 |
| FLAGYL (METRONIDAZOLE) 500MG |  |  |  | 30 | 30 |
| FLUOCINONIDE 0.05%, 30GM TUBE |  |  |  | 0.5 (1) | 0.5 (1) |
| FLUORESCEIN 1MG STRIPS |  |  |  | 6 | 6 |
| FLUTICASONE 220MCG, 12GM INHALER |  |  |  | 0 | 0 |
| FOAM ELECTRODES |  |  |  | 10 | 10 |
| G1 CAMCORDER |  |  |  | 0 | 0 |
| GAUZE PADS (4X4) |  |  |  | 0 | 0 |
| HEIMLICH MANEUVER |  |  |  | 1 | 1 |
| HEMOSTATS |  |  |  | 0 | 1 |
| HOT AND COLD PAD |  |  |  | 0 | 0 |
| ILMA CUE CARD |  |  |  | 1 | 1 |
| ILMA  ENDOTRACHEAL | TUBE  7.0/7.5 | &  ENDOTRACHEAL |  |  |  |
|  |  |  |  | 1 | 1 |

TUBE 7.0/8.0

| ILMA HARDWARE |  |  |  | 0 | 0 |
| --------------------- | --- | --- | --- | --- | ------------------ |
| ILMA STABILIZING ROD |  |  |  | 1 | 1 |
| ILMA SYRINGE |  |  |  | 0 | 0 |
|  |  |  | 9 |  | 12 SEPTEMBER 2018 |
IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406

| IMODIUM (LOPERAMIDE HCL) 2 MG TABLET |  | 24 | 24 |
| ------------------------------------------- | ---- | -------- | -------- |
| INTRAOSSEOUS DEVICE STARTER KIT |  | 1 | 1 |
| INTRAOSSEOUS INJECTION DEVICE |  | 1 | 1 |
| IODINE SWAB STICK |  | 0 | 0 |
| IV ADMINISTRATION SET |  | 2 | 2 |
| IV CAP |  | 2 | 2 |
| IV CATHETER (14G) |  | 0 | 0 |
| IV CATHETER (18G) |  | 2 | 2 |
| IV CATHETER (20G) |  | 2 | 2 |
| IV CATHETER (22G) |  | 1 | 1 |
| IV FLUID 1L (1000ML) |  | 2 | 0 |
| IV PRESSURE INFUSER |  | 1 | 1 |
| KETAMINE 50 MG/ML, 10 ML MULTI DOSE VIAL |  | 0.3 (1) | 0.3 (1) |
| LARYNGOSCOPE (BLADE) |  | 0 | 0 |
| LARYNGOSCOPE HANDLE |  | 0 | 0 |
| LEVAQUIN (LEVOFLOXACIN) 500MG |  | 0 | 0 |
| LIDOCAINE (XYLOCAINE) CARDIAC 2% (20MG/ML) | 5ML |  |  |
|  |  | 0 | 0 |

SYRINGE

| LIDOCAINE (XYLOCAINE) PLAIN 1%, 10ML MULTI DOSE VIAL |  | 1 | 1 |
| ----------------------------------------------------- | --- | -------- | -------- |
| LIDOCAINE JELLY 2% 30ML TUBE |  | 1.2 (2) | 1.2 (2) |

LIDOCAINE W/ EPINEPHRINE (XYLOCAINE) 2 %, 2-ML UNITS

|  |  | 0.1 (1) | 0.1 (1) |
| --- | --- | -------- | -------- |

1:100,000 EPI, 20 ML. MULTI DOSE VIALS.

| LOPRESSOR (METOPROLOL) 50 MG |  | 60 | 62 |
| ----------------------------- | --- | --- | --- |

LOTRIMIN AF CREAM (CLOTRIMAZOLE) 1%, 30GM TUBE  1.1 (2)  1.1 (2)

| MAXIMUM ABSORBENCY GARMENT (MAG) |  | 0 | 0 |
| ------------------------------------------------- | --- | -------- | ------------------ |
| MEDICAL TAPE |  | 0 | 0 |
| MELATONIN 3 MG |  | 0 | 0 |
| MIRROR |  | 0 | 0 |
| MOTRIN (IBUPROFEN) 400MG |  | 52 | 55 |
| MOXIFLOXACIN (AVELOX) 0.5%, 3ML BOTTLE |  | 0.3 (1) | 0.3 (1) |
| MUPIROCIN (BACTROBAN) 2%, 22 GM TUBE |  | 1.1 (2) | 1 |
| NASAL AIRWAY 6MM |  | 0 | 0 |
| NASAL AIRWAY 7MM |  | 0 | 0 |
| NASAL PACKING (POSTERIOR NASAL PACKING) |  | 1 | 1 |
| NEEDLE (23G) |  | 0 | 0 |
| NEEDLE [25G] |  | 1 | 1 |
| NEEDLE DRIVER (AA) |  | 1 | 1 |
| NEEDLE PLASTIC |  | 0 | 0 |
| NITRILE GLOVES (LARGE, MEDIUM, AND SMALL) (PAIR) |  | 0 | 0 |
| NITROGLYCERIN TABLET 0.4MG |  | 10 | 10 |
| NONSTICK BANDAGE (TELFA PADS) |  | 0 | 0 |
| NYLON SUTURE 2.0 |  | 2 | 2 |
|  | 10 |  | 12 SEPTEMBER 2018 |
IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406

| NYLON SUTURE 5.0 |  | 0 | 0 |
| -------------------------------------- | --- | --- | --- |
| ORAL AIRWAY |  | 0 | 0 |
| OTOSCOPE HANDLE |  | 1 | 1 |
| OTOSCOPE HEAD |  | 1 | 1 |
| OTOSCOPE USB CABLE |  | 1 | 1 |
| OXYGEN MASK - RESUSCITATION MASK |  | 0 | 0 |
| OXYGEN TUBING |  | 0 | 0 |
| PANOPTIC OPHTHALMOSCOPE |  | 1 | 1 |
| PENLIGHT |  | 1 | 1 |
| PEPTO-BISMOL 262MG CHEWABLE TABS |  | 6 | 6 |
| PHENERGAN (PROMETHAZINE TABLET) 25 MG |  | 4 | 4 |
| PREDNISONE 20 MG |  | 4 | 4 |
| PRILOSEC 20MG |  | 0 | 0 |

PROMETHAZINE  INJECTABLE  (PHENERGAN)  50MG/ML

|  |  | 1.5 (2) | 1.5 (2) |
| --- | --- | -------- | -------- |

### SINGLE DOSE VIAL

| PROPARACAINE EYE DROPS 0.5%, 15ML BOTTLE |  | 0 | 0 |
| ----------------------------------------- | --- | --- | --- |
| PROVIGIL (MODAFINIL) 200 MG TABLETS |  | 0 | 0 |
| PSYCHOTHERAPY |  | 1 | 1 |

REFRESH ARTIFICIAL TEARS (CARBOXYMETHYLCELLULOSE)

|  |  | 6 | 6 |
| --- | --- | --- | --- |

0.5%, 0.4ML BOTTLE REFRESH  EYE  OINTMENT  (PETROLATUM  WHITE  AND

|  |  | 0 | 0 |
| --- | --- | --- | --- |

MINERAL OIL) 42.5%; 57.3%, 3.5GM

| ROBINUL (GLYCOPYRROLATE) 0.2MG/ML |  | 0 | 0 |
| ------------------------------------------------- | --- | --- | ------------------ |
| ROCEPHIN (CEFTRIAXONE) 1 GM |  | 0 | 1 |
| ROLLED GAUZE |  | 0 | 0 |
| SALINE NOSE SPRAY 22ML BOTTLE |  | 0 | 0 |
| SAM SPLINT - LEG/ARM SPLINT |  | 1 | 0 |
| SCALPEL #11 (SCALPEL BLADE & HANDLE) |  | 1 | 1 |
| SCISSORS – TRAUMA |  | 0 | 0 |
| SHARPS CONTAINER |  | 0 | 0 |
| SILVER NITRATE STICK 75%/25% |  | 0 | 0 |
| SKIN STAPLE REMOVER |  | 1 | 1 |
| SKIN STAPLER |  | 1 | 1 |
| SMOOTH FORCEPS |  | 1 | 1 |
| SPACE ANTICIPATION GLASSES |  | 0 | 0 |
| SPACE STATION EYE WASH |  | 1 | 1 |
| STERILE GLOVES (LARGE, MEDIUM, AND SMALL) (PAIR) |  | 0 | 0 |
| STERILE WATER 10 ML VIAL |  | 0 | 0 |
| STETHOSCOPE |  | 1 | 1 |
| STETHOSCOPE EAR PIECES |  | 0 | 0 |
| SUCTION CARTRIDGE |  | 0 | 0 |
| SUCTION DEVICE |  | 1 | 0 |
|  | 11 |  | 12 SEPTEMBER 2018 |
IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406

| SUCTION DEVICE COLLECTION BAG |  | 0 | 0 |
| ----------------------------------------- | --- | --- | --- |
| SUCTION DEVICE SYRINGE |  | 1 | 0 |
| SUCTION TIP - MOUTH (CURETTE) |  | 0 | 0 |
| SUCTION TUBING - ENDOTRACHEAL TUBE |  | 0 | 0 |
| SUCTION TUBING - GASTRIC TUBE |  | 0 | 1 |
| SUDAFED (PSEUDOEPHEDRINE) 30MG |  | 0 | 0 |
| SUDAFED 12 HOUR (PSEUDOEPHEDRINE) 120 MG |  | 6 | 6 |
| SURGICAL LUBRICANT |  | 0 | 0 |
| SURGICAL TOOLS KIT |  | 0 | 0 |
| SUTURE SCISSORS (BB) |  | 0 | 0 |
| SYRINGE (10CC) |  | 3 | 3 |
| SYRINGE (35CC) |  | 0 | 0 |
| SYRINGE (3CC) |  | 2 | 2 |
| SYRINGE (5CC) |  | 0 | 0 |
| SYRINGE (60ML) |  | 1 | 1 |
| TAMSULOSIN 0.4 MG TABLET |  | 10 | 10 |
| TEMPORARY TOOTH FILLING |  | 0 | 0 |
| THERMOMETER |  | 0 | 0 |

TOBRAMYCIN AND DEXAMETHASONE 0.3%; 0.1%, 10ML

|  |  | 0 | 0 |
| --- | --- | --- | --- |

BOTTLE

| TONGUE DEPRESSOR |  | 0 | 0 |
| -------------------------------------------------- | --- | --- | --- |
| TONOMETER |  | 0 | 0 |
| TONOMETER TIP COVER |  | 0 | 0 |
| TOOTHED FORCEPS (EE) |  | 0 | 0 |
| TORADOL (KETOROLAC) 30MG/ML, 2ML SINGLE DOSE VIAL |  | 4 | 4 |
| TOURNIQUET |  | 1 | 1 |
| TROPICAMIDE 1% |  | 0 | 0 |
| TYLENOL (ACETAMINOPHEN) 325 MG |  | 91 | 96 |
| ULTRASOUND GEL |  | 3 | 2 |
| ULTRASOUND MACHINE |  | 0 | 0 |
| URINARY COLLECTION BAG (LEG BAG) |  | 2 | 1 |
| URINE CATHETER COUDE |  | 0 | 0 |
| URINE CATHETER FOLEY |  | 0 | 0 |
| URINE CATHETER SHORT |  | 3 | 3 |
| URINE CATHETER STRAIGHT |  | 3 | 3 |
| URINE CHEMSTRIPS |  | 9 | 9 |
| URINE COLOR CHART |  | 0 | 0 |
| VALACYCLOVIR 1 GM TABLET |  | 21 | 21 |
| VALIUM (DIAZEPAM) 5 MG/ML, 2 ML SYRINGE |  | 1 | 1 |
| VARIABLE OXYGEN SYSTEM |  | 1 | 0 |

VICODIN HP (HYDROCODONE/ ACETAMINOPHEN HP) 10

|  |  | 36 | 36 |
| --- | --- | --- | --- |

### MG/660 MG

|  | 12 |  | 12 SEPTEMBER 2018 |
| --- | --- | --- | ------------------ |
IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406

|  | VOS | INTUBATED |  | PATIENT | HARDWARE |  |  |  |  |  |  |
| --- | ---- | ---------- | --- | -------- | --------- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  | 0 |  |  | 0 |

(VENTILATOR/RESPIRATOR)

|  | WATER |  |  |  |  |  |  | 0 |  |  | 0 |
| --- | --------------------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | WOUND PACKING |  |  |  |  |  |  | 0 |  |  | 0 |
|  | ZANTAC (RANITIDINE) 150 MG |  |  |  |  |  |  | 4 |  |  | 4 |
|  | ZIPRASIDONE (GEODON 20MG/ML) |  |  |  |  |  |  | 0 |  |  | 0 |
|  | ZITHROMAX (AZITHROMYCIN) 250 MG |  |  |  |  |  |  | 12 |  |  | 12 |
|  | ZOFRAN (ONDANSETRON) 8 MG TABLET |  |  |  |  |  |  | 12 |  |  | 12 |
|  | ZOLOFT (SERTRALINE) 50 MG |  |  |  |  |  |  | 20 |  |  | 20 |
|  | ZYRTEC (CETIRIZINE) 10 MG TABLET |  |  |  |  |  |  | 0 |  |  | 0 |
The IMM MedCap results for TME, CHI, EVAC, and LOCL for the simulated DRMs are presented in the tables below. Table 3 and figure 1 show the average number of total medical events (TME) during the mission across all of the DRMs.  Note that in the f igures “ cc” corresponds to cm 3 .

Table 3: Average Number of TME for the DRMs

|  |  |  |  |  |  | TME |  |  | 95% CI |  |  |
| --- | --- | --- | --- | --- | --- | ---- | --- | --- | ------- | --- | --- |

21 day 4 crew

|  | DRM with 20 lb. |  |  |  |  |  |  |  |  |  |  |
| --- | ---------------- | --- | --- | ------- | --- | ------ | --- | --- | --- | --- | --- |
|  | Infinite Volume |  |  | MedCap |  | 17.69 |  | 11 |  |  | 25 |

Optimization medkit 21 day 4 crew

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | ----------------- | --------- | --- | ------- | --- | ----- | --- | --- | --- | --- | --- |
|  | DRM with 20 lb.- |  |  |  |  |  |  |  |  |  |  |
|  |  | 13721cm3 |  | MedCap |  | 17.7 |  | 11 |  |  | 25 |

Optimization medkit

|  |  |  |  |  |  | 13 |  |  |  | 12 SEPTEMBER 2018 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ------------------ | --- |
IMM Service Request Report – Orion Medical Kit Contents S-20180815-406

Figure 1: Average Number of TME for the DRMS

Total Medical Events (TME) 30 25 20 15 10 5 0 21 day 4 crew DRM with 20lb. Optimization medkit 21 day 4 crew DRM with 20lb.-13721cc Optimization medkit MedCap

Table 4 and figure 2 show the average CHI across all of the DRMs.

Table 4: Average CHI for the DRMs

CHI 95% CI 21 day 4 crew DRM with 20 lb. Infinite Volume MedCap 97.20 93.66 98.88 Optimization medkit 21 day 4 crew DRM with 20 lb.- 13721cm3 MedCap 97.20 93.66 98.87 Optimization medkit 14 12 SEPTEMBER 2018

IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406

Figure 2: Average CHI for the DRMs

|  |  |  | Crew Health Index (CHI)(%) |  |  |  |  |  |  |  |
| --- | --- | --- | --------------------------- | --- | --- | --- | --- | --- | --- | --- |
100

99

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

98

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

97 96 95 94

93

92

91

90 21 day 4 crew DRM with 20lb. Optimization medkit  21 day 4 crew DRM with 20lb.-13721cc Optimization medkit

|  |  |  |  |  | MedCap |  |  |  |  |  |
| --- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |
Table 5 along with figures 3 and 4 show the probability of EVAC and LOCL across all of the DRMs.

Table 5: Probability of EVAC and LOCL for the DRMs

|  |  |  |  | EVAC |  |  |  | LOCL |  |  |
| --- | -------------- | --- | ------------ | ----- | ------- | ------------ | --- | ----- | ------- | --- |
|  |  |  | Probability |  | 95% CI | Probability |  |  | 95% CI |  |
|  | 21 day 4 crew |  |  |  |  |  |  |  |  |  |

DRM with 20

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

lb. Infinite

|  |  | MedCap | 0.0065 | 0.0059 | 0.0070 |  | 0.0005 | 0.0003 |  | 0.0006 |
| --- | --- | ------- | ------- | ------- | ------- | --- | ------- | ------- | --- | ------- |

Volume Optimization medkit 21 day 4 crew

|  | DRM with 20 |  |  |  |  |  |  |  |  |  |
| --- | ------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- |

lb.-13721cm3  MedCap  0.0074  0.0068  0.0079  0.0005  0.0004  0.0007 Optimization medkit

|  |  |  |  |  | 15 |  |  |  | 12 SEPTEMBER 2018 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ------------------ | --- |
IMM Service Request Report – Orion Medical Kit Contents S-20180815-406

Figure 3: Probability of EVAC for the DRMs

### Probability of EVAC

0.01 0.009 0.008 0.007 0.006 0.005 0.004 0.003 0.002 0.001 0 21 day 4 crew DRM with 20lb. Optimization medkit 21 day 4 crew DRM with 20lb.-13721cc Optimization medkit MedCap

Figure 4: Probability of LOCL for the DRMs

### Probability of LOCL

0.0008 0.0007 0.0006 0.0005 0.0004 0.0003 0.0002 0.0001 0 21 day 4 crew DRM with 20lb. Optimization medkit 21 day 4 crew DRM with 20lb.-13721cc Optimization medkit MedCap Tables 6 and 8 present the top ten influential conditions for EVAC and LOCL with regards to the 20 lb., infinite volume.-constrained Optimized Medical Kit. Tables 7 and 9 present the top ten influential conditions for EVAC and LOCL with regards to the 20 lb., 13721 16 12 SEPTEMBER 2018

IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406 cm3-constrained Optimized Medical Kit.

Table 6: 20-lb, infinite volume, CHI Optimized Medical Kit Top Ten Influential Conditions for

EVAC

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  | Contribution | Percent |

BEST PARTIAL  FINGER DISLOCATION  INJURY/TRAUMA  80  12.27  12.27 CASE WORST

|  | PARTIAL  SKIN INFECTION |  | MEDICAL | 56 | 8.59 | 20.86 |
| --- | ------------------------ | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  URINARY TRACT INFECTION |  | MEDICAL | 50 | 7.67 | 28.53 |
| --- | --------------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  NEPHROLITHIASIS |  | MEDICAL | 40 | 6.13 | 34.66 |
| --- | ------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SKIN LACERATION |  | INJURY/TRAUMA | 37 | 5.67 | 40.34 |
| --- | ------------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST

| CASE | PARTIAL  ACUTE SINUSITIS |  | MEDICAL | 28 | 4.29 | 44.63 |
| ----- | ------------------------- | --- | -------- | --- | ----- | ------ |

WORST PARTIAL  HEADACHE (SPACE ADAPTATION)  MEDICAL  27  4.14  48.77 CASE WORST

|  | PARTIAL  DENTAL ABSCESS |  | MEDICAL | 27 | 4.14 | 52.91 |
| --- | ------------------------ | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  DIARRHEA |  | MEDICAL | 26 | 3.99 | 56.90 |
| --- | ------------------ | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  DENTAL EXPOSED PULP |  | MEDICAL | 26 | 3.99 | 60.89 |
| --- | ----------------------------- | --- | -------- | --- | ----- | ------ |

CASE

Table 7: 20-lb, 13721 cm3, CHI Optimized Medical Kit Top Ten Influential Conditions for EVAC

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  | Contribution | Percent |

BEST PARTIAL  FINGER DISLOCATION  INJURY/TRAUMA  98  13.23  13.23 CASE WORST

|  | PARTIAL  SKIN INFECTION |  | MEDICAL | 43 | 5.80 | 19.03 |
| --- | ------------------------ | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  NEPHROLITHIASIS |  | MEDICAL | 41 | 5.53 | 24.56 |
| --- | ------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  DIARRHEA |  | MEDICAL | 40 | 5.40 | 29.96 |
| --- | ------------------ | --- | -------- | --- | ----- | ------ |

CASE WORST PARTIAL  HEADACHE (SPACE ADAPTATION)  MEDICAL  38  5.13  35.09 CASE WORST PARTIAL  SHOULDER SPRAIN/STRAIN  INJURY/TRAUMA  36  4.86  39.95 CASE WORST

|  | PARTIAL  SKIN LACERATION |  | INJURY/TRAUMA | 31 | 4.18 | 44.13 |
| --- | ------------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  ACUTE SINUSITIS |  | MEDICAL | 27 | 3.64 | 47.77 |
| --- | ------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  NECK SPRAIN/STRAIN |  | INJURY/TRAUMA | 26 | 3.51 | 51.28 |
| --- | ---------------------------- | --- | -------------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SEPSIS |  | MEDICAL | 26 | 3.51 | 54.79 |
| --- | ---------------- | --- | -------- | --- | ----- | ------ |

CASE

|  |  |  | 17 |  | 12 SEPTEMBER 2018 |  |
| --- | --- | --- | --- | --- | ------------------ | --- |
IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406

Table 8: 20-lb, infinite volume, CHI Optimized Medical Kit Top Ten Influential Conditions for

LOCL

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |

WORST

|  | PARTIAL  SEPSIS |  | MEDICAL | 17 | 37.78 | 37.78 |
| --- | ---------------- | --- | -------- | --- | ------ | ------ |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | PARTIAL |  | MEDICAL | 5 | 11.11 | 48.89 |
| --- | -------- | --- | -------- | --- | ------ | ------ |

### CASE  REACTION

WORST PARTIAL  TOXIC EXPOSURE (AMMONIA)  ENVIRONMENTAL  4  8.89  57.78 CASE BEST

|  | PARTIAL  APPENDICITIS |  | MEDICAL | 4 | 8.89 | 66.67 |
| --- | ---------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST PARTIAL  BURNS SECONDARY TO FIRE  ENVIRONMENTAL  3  6.67  73.33 CASE WORST PARTIAL  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  3  6.67  80.00 CASE WORST

|  | PARTIAL  CHOKING/OBSTRUCTED AIRWAY |  | MEDICAL | 2 | 4.44 | 84.44 |
| --- | ----------------------------------- | --- | -------- | --- | ----- | ------ |

CASE WORST PARTIAL  ACUTE RADIATION SYNDROME  ENVIRONMENTAL  1  2.22  86.67 CASE BEST

|  | PARTIAL  SEPSIS |  | MEDICAL | 1 | 2.22 | 88.89 |
| --- | ---------------- | --- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  ACUTE DIVERTICULITIS |  | MEDICAL | 1 | 2.22 | 91.11 |
| --- | ------------------------------ | --- | -------- | --- | ----- | ------ |

CASE

Table 9: 20-lb, 13721 cm3, CHI Optimized Medical Kit Top Ten Influential Conditions for LOCL

|  |  |  |  |  | Percent | Cumulative |
| --------- | -------- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario | Treated | Medical Condition | Category | Total LOCL |  |  |
|  |  |  |  |  | Contribution | Percent |

WORST

|  | PARTIAL  SEPSIS |  | MEDICAL | 14 | 28 | 28 |
| --- | ---------------- | --- | -------- | --- | --- | --- |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | PARTIAL |  | MEDICAL | 8 | 16 | 44 |
| --- | -------- | --- | -------- | --- | --- | --- |

### CASE  REACTION

WORST

|  | PARTIAL  CHOKING/OBSTRUCTED AIRWAY |  | MEDICAL | 7 | 14 | 58 |
| --- | ----------------------------------- | --- | -------- | --- | --- | --- |

CASE WORST CASE  PARTIAL  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  6  12  70 BEST

|  | PARTIAL  APPENDICITIS |  | MEDICAL | 4 | 8 | 78 |
| --- | ---------------------- | --- | -------- | --- | --- | --- |

CASE BEST

|  | PARTIAL  SEPSIS |  | MEDICAL | 3 | 6 | 84 |
| --- | ---------------- | --- | -------- | --- | --- | --- |

CASE WORST

|  | PARTIAL  APPENDICITIS |  | MEDICAL | 2 | 4 | 88 |
| --- | ---------------------- | --- | -------- | --- | --- | --- |

CASE WORST

|  | PARTIAL  SMOKE INHALATION |  | ENVIRONMENTAL | 1 | 2 | 90 |
| --- | -------------------------- | --- | -------------- | --- | --- | --- |

CASE BEST

|  | PARTIAL  ANAPHYLAXIS |  | MEDICAL | 1 | 2 | 92 |
| --- | --------------------- | --- | -------- | --- | --- | --- |

CASE WORST

|  | PARTIAL  BURNS SECONDARY TO FIRE |  | ENVIRONMENTAL | 1 | 2 | 94 |
| --- | --------------------------------- | --- | -------------- | --- | --- | --- |

CASE

|  |  |  | 18 |  | 12 SEPTEMBER 2018 |  |
| --- | --- | --- | --- | --- | ------------------ | --- |
IMM Service Request Report – Orion Medical Kit Contents S-20180815-406

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

Model. 2015. Houston, Texas, NASA Johnson Space Center. Ref Type: Report 19 12 SEPTEMBER 2018

IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406

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
| Additional verification | none |  |  |  |  |  |  |
| ------------------------ | ----- | --- | --- | --- | --- | --- | --- |

and validation information applicable to this analysis

- Integrated Medical  iMED Lockdown IDs: (41), created on (8/22/2018); and (46), created on (9/11/2018)

### Evidence Database

(iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software. MATLAB and all other MathWorks product version  or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to | None |  |  |  |  |  |  |
| ---------------------- | ----- | --- | --- | --- | --- | --- | --- |

the code for analysis

|  |  |  | 20 |  |  | 12 SEPTEMBER 2018 |  |
| --- | --- | --- | --- | --- | --- | ------------------ | --- |
IMM Service Request Report – Orion Medical Kit Contents  S-20180815-406

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

|  | 21 | 12 SEPTEMBER 2018 |
| --- | --- | ------------------ |
IMM Service Request Report – Orion Medical Kit Contents S-20180815-406

## Appendix C: Medical Conditions Excluded or Modified for the 21 Day DRM

Due to limited vehicle size consisting of a single module and limited movement of crew the following conditions are judged highly unlikely to occur:

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

Due to short duration of mission (21 days) plus the above limitations, the following conditions are judged highly unlikely to develop:

- Visual Impairment and/or Increased Intracranial Pressure (VIIP) (Space Adaptation)

Due to absence of any EVAs and a constant cabin pressure of 14.7psi, the following condition is judged highly unlikely to occur:

- Barotrauma (ear/sinus block)

Since the IMM worst case definition of depression specifies symptoms lasting more than 4 weeks and the DRM of these missions lasting 21 days, the following condition will follow the best case scenario for 100% of events that occur for this request:

- Depression

Rather than considering the entire ISS volume for application of Fire Model result input to the IMM, ISS Node 3 was used to approximate the size of the Orion vehicle. The corresponding Node 3 Fire Model results (directly from the ISS PRA Fire Model v3.2) were used to update Burns Secondary to Fire and Smoke Inhalation for this request as follows:

- Burns Secondary to Fire:

o incidence 0.00613 (events/person year) - probability one or more crew exposed to response level event (value same as for likelihood for Fire Sustains (response level event) since modeling for single compartment, i.e. Node 3) (v3.2); o worst case scenario = 0-5% - EVAC (uncontrollable fire- not vehicle) (value = 0.0486; derived from uncontrolled fire event/probability one or more crew exposed to response level event)

- Smoke Inhalation:

o incidence 0.00613 (events/person year) - Fire Sustains (response level event) (v3.2); o worst case scenario = 0-5% - EVAC (uncontrollable fire- not vehicle) (value = 0.0486; derived from uncontrolled fire event/Fire Sustains (response level event)) 22 12 SEPTEMBER 2018

---

## Source metadata

```yaml
source_filename: "orion-medical-kit-contents.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports"
source_url: "https://drive.google.com/file/d/1L-nHtmWFdR63z7-i_9-_FU0DAuPpvpwd/view"
source_drive_id: "1L-nHtmWFdR63z7-i_9-_FU0DAuPpvpwd"
source_sha256: 1d7a37198e0f999040b710f14a0116f502c20d8cf1b72b3d4b7e413782a649de
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 22
ocr_performed: false
```
