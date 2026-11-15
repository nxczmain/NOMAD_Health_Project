# Cis Lunar Oribter Docked PRA

[View original PDF](https://drive.google.com/file/d/1vfMeX34_Iq8vPL5Hn2tpQ6JH8wd7qmXG/view) · **23 pages**

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
- [Appendix C: Medical Conditions Modified for the 30 Day DRM](#appendix-c-medical-conditions-modified-for-the-30-day-drm)

---

IMM Service Request Report – Cis-Lunar Orbiter Docked PRA S-20181015-408

## Executive Summary

The simulation results from two 30 day DRM with 4 crewmembers and two EVAs is used to provide a medical risk assessment for a “fully assembled” Cis-lunar 30 day DRM using the Medical Capabilities scenario (without resupply). The ISS-based medical kit and a medical kit optimized with 17.09 lb. (7.75 kg.) and 13896 cm3 (generated in IMM Service Request #SR- 20180815-406) were used for the two simulations, respectively. Packaging mass and volume are not considered in the IMM and therefore have no effect on optimization of a medical kit.

The priority for the optimized kit generated in SR-20180815-406 was the Crew Health Index (CHI). The ISS-based medical kit has a total mass of 115.25kg (253.55 lb.) and a total volume of 526,418 cm3 as a baseline/comparison. The contents of the both medical kits are presented in

Table 2. The optimized kit contains some resources that have decimal-valued quantities. For

those resources, the decimal values were rounded up to the nearest integer.

The ISS-based medical kit resulted in a mean CHI of 97.11%. The probability of evacuation (EVAC) is 0.0063, and the probability of loss of crew life (LOCL) is 0.0006. The optimized medical kit resulted in a mean CHI of 97.03%. (For longer duration missions, CHI can be expected to be lower as resources necessary to fully treat conditions are depleted.) The probability of evacuation is 0.0143, and the probability of loss of crew life is 0.0011 with the optimized medical kit. The main simulation results and top ten influential conditions for EVAC and LOCL for the medical capabilities timeline are presented in the results section.

The higher probability of EVAC and LOCL with the optimized medical kit compared to the ISS- based kit is due to the smaller mass and volume of the optimized medical kit (optimized to maximize CHI). The differences in the top 10 influential conditions for EVAC and LOCL in the optimized medical kit compared to the ISS-based medical kit is due to differences in the medical resources. The optimized medical kit contains no AED, IV fluids, ultrasound, or ventilator. It also contains less analgesics and antibiotics than the ISS-based medical kit.

The IMM does not consider either the availability of a vehicle for EVAC nor the additional time involved (with a deep space mission as compared to an ISS mission) from decision to EVAC until crew would be returned to definitive care on the ground. These factors would need additional evaluation from subject matter experts.

IMM does not consider resource dependencies, such as when one resource is required in 1 03 OCTOBER 2019

IMM Service Request Report – Cis-Lunar Orbiter Docked PRA S-20181015-408 order for another resource to function appropriately. This would need to be identified in post- processing by clinical subject matter experts. Thus, the optimized medical kit may not include some resources that have those dependencies but not include others. (For example, the optimized medical kit includes ultrasound gel but does not include an ultrasound machine, etc.) This could lead to some conditions receiving only partial treatment which could impact CHI, EVAC, and LOCL for the optimized medical kit outcomes.

## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are crew health index (CHI), need for evacuation (EVAC) and loss of crew life (LOCL).

The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profile shown in Table 1. This crew profile is consistent with that of the previous Orion DRM from the above-mentioned IMM Service Request (SR) # S- 201808-406. The outcomes of certain IMM medical conditions are influenced by pre-existing medical history including: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data. 2 03 OCTOBER 2019

IMM Service Request Report – Cis-Lunar Orbiter Docked PRA S-20181015-408

Table 1: 30 day DRM crew profile

### Prior Abdominal

### Sex Crowns EVA CAC Contacts

Surgery Crew 1 Male Yes Yes (2) Yes Yes No Crew 2 Male No No No Yes No Crew 3 Male No No No No No Crew 4 Female No Yes (2) Yes No Yes

### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix B.

However, to better approximate the Cis-lunar real world system, the set of conditions was modified for this request as described in Appendix C. The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data contained within the Integrated Medical Evidence Database (iMED). For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS.

Because we do not yet know the volume of the Orion plus Cis-lunar modules, the DRMs conservatively used the entire ISS vehicle volume for application of Fire Model result input to the IMM.

Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all- untreated (no Medkit) and baseline MedCap (Medkit without resupply). For exploration missions, the MedCap state should most closely resemble a real world deep space mission where resupply is not possible but where utilization of partial and alternative treatment can occur.

### Main Outcomes

The IMM primary medical outcomes include the number of total medical events (TME), crew health index (CHI), probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources. CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 3 03 OCTOBER 2019

IMM Service Request Report – Cis-Lunar Orbiter Docked PRA S-20181015-408 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, the simulation usually assigns each crew member only one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model. Catastrophic vehicle failures such as the Challenger and Columbia accidents, and MMOD (micrometeorite and orbital debris) are not considered as possible causes of EVAC and LOCL.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources. If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap (no resupply) scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If none of the resources are available to treat the event, the event is considered "untreated." The initial quantities for medical resources are baselined to a fully stocked ISS medical kit (MedCap) for one simulation and the optimized medical kit from IMM SR-201808-406 for the other simulation. Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated scenario and a 0-100% chance of going to EVAC in the best case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC. 4 03 OCTOBER 2019

IMM Service Request Report – Cis-Lunar Orbiter Docked PRA S-20181015-408

### Modeling Approach

One hundred thousand (100,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria.

Convergence criteria are met when there is less than or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 2 - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport. IMM outcomes were determined for the DRMs using the ISS MedCap scenario where all conditions are treated, partially treated or untreated based on the available resources of the ISS MedCap without resupply. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, TME, CHI, EVAC and LOCL results are presented. Features, assumptions and limitations pertinent to this report are described in a separate section below.

### Optimization Approach

The optimized medical kit was selected solely to meet the optimization risk criteria within the specified mass and volume constraints for SR-20180815-406. The DRM for that request was a 21 day DRM with end user specified mass constraint of 20 lbs. (~9.07 kg) and a 13,721 cm3 volume constraint optimized to maximize CHI. It is important to note that the IMM v4.1 optimization routine used in this request considers resources at the unit resource level. Because of this, some resource quantities in the generated optimized kit have decimal values. Quantities for items in the medical kit must be integer- valued (as most resources cannot be fractionalized), therefore these quantities were rounded up to the nearest integer value. It should also be noted that packaging mass and volume are not considered in the IMM and therefore have no effect on optimization of a medical kit. The optimization routine only considers resources marked as essential in iMED when generating the kit. It also does not consider resource dependencies when generating the kit. In other words, even though a set of resources may be required for treatment in reality, the optimization routine may only include a subset of those resources. The entire set of required resources is not bundled together. When generating the optimized kit, the quantity of each resource available to add to the kit is determined by the maximum quantity needed during a simulation trial. It is not restricted to the quantity in the ISS medkit. Therefore it is possible for the generated optimized medical kit to include a higher quantity for a particular resource than is included in the ISS medkit. . The results of this optimization should only be used as an evidence-based guide to the development of an Orion Medical Kit and should not be used in isolation to design the medical kit without the input of subject matter expertise and operational experience. 5 03 OCTOBER 2019

IMM Service Request Report – Cis-Lunar Orbiter Docked PRA S-20181015-408 Features, Assumptions and Limitations of IMM Version 4.1 [3]

1. All non-space adaption (SA) and non-extravehicular activity (EVA) related conditions have a uniform

likelihood of occurring throughout the mission duration. Space Adaptation Syndrome conditions occur in the first 5 days of the mission, with a peak occurrence at 48 hours.

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

Individual Medical Accessories Kit, (IMAK). 6 03 OCTOBER 2019

IMM Service Request Report – Cis-Lunar Orbiter Docked PRA  S-20181015-408

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

The generated optimized medical kit is presented below in Table 2. The IMM simulation MedCap results for TME, CHI, EVAC, LOCL and the top ten influential conditions for EVAC/LOCL for the simulated DRMs.

Table 2: ISS medical kit and generated optimized medical kit with and 17.09 lbs. (7.75 kg.) -

13896cm3. The highlighted individual resources have quantities with decimal values. Those values were rounded up to the nearest integer for the proceeding simulation, shown in parentheses.

7.75 kg.‐ 13,895.43 cc

### Resource  ISS Quantity

Quantity

| ABILIFY (ARIPIPRAZOLE) 5 MG |  | 60 | 0 |
| --------------------------------------------- | --- | ---- | ---------------- |
| ABILIFY (ARIPIPRAZOLE) 7.5 MG/ML, 1.3 ML |  | 2 | 0 |
| ABSORBABLE SUTURE 3.0 |  | 2 | 2 |
| ACE BANDAGE 2 INCHES |  | 1 | 1 |
| ACE BANDAGE 3 INCHES |  | 1 | 1 |
| ACE BANDAGE 4 INCHES |  | 1 | 1 |
| ADRENALINE (EPINEPHRINE 1:10000) 10ML |  | 2 | 0 |
| AED |  | 1 | 0 |
| AFRIN (OXYMETAZOLINE) 0.05% 15ML BOTTLE |  | 12 | 1 |
| ALBUTEROL INHALER (PROVENTIL) 90 MCG, 6.7 GM |  | 3 | 2 |
| AMBIEN 10MG TABLET |  | 250 | 11 |
| AMBU BAG AND MASK |  | 1 | 0 |
| AMOXICILLIN 500 MG CAPSULE |  | 60 | 22 |
| ANTIVERT (MECLIZINE) 25 MG |  | 20 | 0 |
| ASPIRIN 325MG TAB. |  | 120 | 1 |
| ATIVAN (LORAZEPAM) 1 MG TABLET |  | 60 | 42 |
|  | 7 |  | 03 OCTOBER 2019 |
IMM Service Request Report – Cis-Lunar Orbiter Docked PRA  S-20181015-408

| ATROPINE 1 MG, 10ML SYRINGE. |  |  | 2 | 0 |
| ------------------------------------ | --- | --- | --- | --------- |
| BACITRACIN 500 UNITS/GM. 28 GM TUBE |  |  | 1 | 0.85 (1) |

BACTRIM DS (SULFAMETHOXAZOLE/TRIMETHOPRIM) 800

|  |  |  | 40 | 40 |
| --- | --- | --- | --- | --- |

### MG/160 MG TABLET

| BANDAID (2X3) |  |  | 5 | 0 |
| --------------------------------------------- | ------------------- | ----------- | --- | --------- |
| BANDAID (KNUCKLE) |  |  | 5 | 0 |
| BANDAID DOT |  |  | 10 | 0 |
| BANDAID STRIP |  |  | 10 | 0 |
| BENADRYL 25 MG CAPSULE |  |  | 60 | 26 |
| BENADRYL 50 MG/ML, 1ML INJECTABLE |  |  | 3 | 1 |
| BENZOCAINE SWAB STICK ORAL 20%, 0.15 ML SWAB |  |  | 24 | 0 |
| BIOHAZARD TRASH BAG |  |  | 15 | 0 |
| BLOOD OXIMETER |  |  | 1 | 1 |
| BLOOD PRESSURE /ECG MONITOR |  |  | 1 | 0 |
| BLOOD PRESSURE CUFF ‐ LARGE |  |  | 1 | 0 |
| BLOOD PRESSURE CUFF ‐ SMALL |  |  | 1 | 0 |
| BOUGIE ET TUBE INTRODUCER |  |  | 1 | 0 |
| BURN BANDAGE |  |  | 10 | 0 |
| BZK WIPES |  |  | 60 | 0 |
| CAMERA |  |  | 1 | 0 |
| CIPROFLOXACIN | AND  DEXAMETHASONE | (CIPRODEX) |  |  |
|  |  |  | 2 | 0.52 (1) |

3%,7%, 7.5 ML BOTTLE

| CLARITIN (LORATADINE)10MG TABLET |  |  | 75 | 0 |
| --------------------------------- | --- | --- | --- | -------- |
| CLEAR BANDAGE |  |  | 9 | 0 |
| CLEOCIN (CLINDAMYCIN) 300MG |  |  | 60 | 21 |
| CMRS |  |  | 1 | 0 |
| COTTON BALLS |  |  | 40 | 0 |
| COTTON PELLET |  |  | 6 | 0 |
| COTTON SWABS |  |  | 6 | 0 |
| CYCLOPENTOLATE 2% 15ML BOTTLE. |  |  | 1 | 0.2 (1) |
| DCS EXAMINATION SCORECARD |  |  | 1 | 0 |

DEBROX FOR EARWAX (CARBAMIDE PEROXIDE) 6.5% 15ML

|  |  |  | 4 | 0 |
| --- | --- | --- | --- | --- |

BOTTLE

| DENTAL ADHESIVE (76 GRAMS) |  |  | 1 | 0.1 (1) |
| ------------------------------------------- | --- | --- | --- | ---------------- |
| DENTAL ADHESIVE TIP |  |  | 1 | 1 |
| DENTAL AMALGAM FILE |  |  | 1 | 0 |
| DENTAL CARVER FILE (G) |  |  | 1 | 1 |
| DENTAL CROWN REMOVER |  |  | 1 | 0 |
| DENTAL ELEVATOR ‐ 301 (I) |  |  | 1 | 1 |
| DENTAL ELEVATOR ‐ 34S (J) |  |  | 1 | 1 |
| DENTAL EUGENOL ANESTHETIC 1ML ORAL SYRINGE |  |  | 2 | 2 |
| DENTAL EXPLORER/PROBE (E) |  |  | 1 | 1 |
|  |  | 8 |  | 03 OCTOBER 2019 |
IMM Service Request Report – Cis-Lunar Orbiter Docked PRA  S-20181015-408

| DENTAL FORCEPS‐10S (A) |  |  |  | 1 | 1 |
| ----------------------------------------------- | -------------- | ---------------- | --- | ---- | -------- |
| DENTAL FORCEPS‐151A (B) |  |  |  | 1 | 1 |
| DENTAL FORCEPS‐17 (C) |  |  |  | 1 | 1 |
| DENTAL MIRROR (H) |  |  |  | 1 | 1 |
| DENTAL SYRINGE (TUBEX) |  |  |  | 1 | 0 |
| DERMABOND APPLICATOR 0.5ML |  |  |  | 2 | 1 |
| DEXAMETHASONE (DECADRON) 10MG INJECTABLE |  |  |  | 20 | 1 |
| DIAMOX (ACETAZOLAMIDE) 250 MG TABLETS |  |  |  | 100 | 6 |
| DIFLUCAN (FLUCONAZOLE) 150 MG |  |  |  | 150 | 1 |
| DILANTIN (PHENYTOIN) 300MG CAPSULES |  |  |  | 30 | 6 |
| DILAUDID (HYDROMORPHONE) 2MG/ML, 1ML SYRINGE |  |  |  | 18 | 6 |
| DISPOSABLE OTOSCOPE SPECULA |  |  |  | 80 | 0 |
| DULCOLAX (BISACODYL) TABLET 5MG |  |  |  | 40 | 16 |
| EAR CURETTE |  |  |  | 2 | 0 |
| EAR WICK |  |  |  | 6 | 2 |
| EFFEXOR XR (VENLAFAXINE XR) 75 MG CAPSULES |  |  |  | 60 | 0 |
| ENDOTRACHEAL STYLET |  |  |  | 1 | 1 |
| EPIPEN 1:1000 |  |  |  | 3 | 1 |
| EPT |  |  |  | 2 | 1 |
| ERTAPENEM 1GM |  |  |  | 6 | 6 |
| ERYTHROMYCIN OINTMENT 0.5%, 3.5 GM TUBE |  |  |  | 1 | 1 |
| ESTROGEN 1.25 MG TABLETS |  |  |  | 100 | 7 |
| ETHINYL ESTRADIOL / NORGESTREL 0.05 MG/ 0.5 MG |  |  |  | 42 | 0 |
| EYE SHIELD |  |  |  | 1 | 0 |
| EYE SIMULATOR CORNEA |  |  |  | 2 | 0 |
| EYE WASH GOGGLES & TUBING |  |  |  | 1 | 1 |
| EYEWASH WASTE WATER BAG |  |  |  | 6 | 3 |
| FINGER SPLINT |  |  |  | 1 | 1 |
| FLAGYL (METRONIDAZOLE) 500MG |  |  |  | 60 | 30 |
| FLUOCINONIDE 0.05%, 30GM TUBE |  |  |  | 2 | 0.5 (1) |
| FLUORESCEIN 1MG STRIPS |  |  |  | 20 | 6 |
| FLUTICASONE 220MCG, 12GM INHALER |  |  |  | 2 | 0 |
| FOAM ELECTRODES |  |  |  | 20 | 10 |
| G1 CAMCORDER |  |  |  | 1 | 0 |
| GAUZE PADS (4X4) |  |  |  | 50 | 0 |
| HEIMLICH MANEUVER |  |  |  | 1 | 1 |
| HEMOSTATS |  |  |  | 1 | 1 |
| HOT AND COLD PAD |  |  |  | 1 | 0 |
| ILMA CUE CARD |  |  |  | 1 | 1 |
| ILMA  ENDOTRACHEAL | TUBE  7.0/7.5 | &  ENDOTRACHEAL |  |  |  |
|  |  |  |  | 4 | 1 |

TUBE 7.0/8.0

| ILMA HARDWARE |  |  |  | 1 | 0 |
| -------------- | --- | --- | --- | --- | ---------------- |
|  |  |  | 9 |  | 03 OCTOBER 2019 |
IMM Service Request Report – Cis-Lunar Orbiter Docked PRA  S-20181015-408

| ILMA STABILIZING ROD |  | 1 | 1 |
| ------------------------------------------- | ---- | --- | -------- |
| ILMA SYRINGE |  | 2 | 0 |
| IMODIUM (LOPERAMIDE HCL) 2 MG TABLET |  | 40 | 24 |
| INTRAOSSEOUS DEVICE STARTER KIT |  | 1 | 1 |
| INTRAOSSEOUS INJECTION DEVICE |  | 2 | 1 |
| IODINE SWAB STICK |  | 14 | 0 |
| IV ADMINISTRATION SET |  | 3 | 2 |
| IV CAP |  | 5 | 2 |
| IV CATHETER (14G) |  | 2 | 0 |
| IV CATHETER (18G) |  | 4 | 2 |
| IV CATHETER (20G) |  | 4 | 2 |
| IV CATHETER (22G) |  | 4 | 1 |
| IV FLUID 1L (1000ML) |  | 4 | 0 |
| IV PRESSURE INFUSER |  | 1 | 1 |
| KETAMINE 50 MG/ML, 10 ML MULTI DOSE VIAL |  | 4 | 0.3 (1) |
| LARYNGOSCOPE (BLADE) |  | 1 | 0 |
| LARYNGOSCOPE HANDLE |  | 1 | 0 |
| LEVAQUIN (LEVOFLOXACIN) 500MG |  | 30 | 0 |
| LIDOCAINE (XYLOCAINE) CARDIAC 2% (20MG/ML) | 5ML |  |  |
|  |  | 2 | 0 |

SYRINGE

| LIDOCAINE (XYLOCAINE) PLAIN 1%, 10ML MULTI DOSE VIAL |  | 3 | 1 |
| ----------------------------------------------------- | --- | --- | -------- |
| LIDOCAINE JELLY 2% 30ML TUBE |  | 3 | 1.2 (2) |

LIDOCAINE W/ EPINEPHRINE (XYLOCAINE) 2 %, 2‐ML UNITS

|  |  | 2 | 0.1 (1) |
| --- | --- | --- | -------- |

1:100,000 EPI, 20 ML. MULTI DOSE VIALS.

| LOPRESSOR (METOPROLOL) 50 MG |  | 100 | 62 |
| ------------------------------------------------- | --- | ---- | ---------------- |
| LOTRIMIN AF CREAM (CLOTRIMAZOLE) 1%, 30GM TUBE |  | 2 | 1.1 (2) |
| MAXIMUM ABSORBENCY GARMENT (MAG) |  | 1 | 0 |
| MEDICAL TAPE |  | 5 | 0 |
| MELATONIN 3 MG |  | 200 | 0 |
| MIRROR |  | 1 | 0 |
| MOTRIN (IBUPROFEN) 400MG |  | 500 | 55 |
| MOXIFLOXACIN (AVELOX) 0.5%, 3ML BOTTLE |  | 4 | 0.3 (1) |
| MUPIROCIN (BACTROBAN) 2%, 22 GM TUBE |  | 2 | 1 |
| NASAL AIRWAY 6MM |  | 1 | 0 |
| NASAL AIRWAY 7MM |  | 1 | 0 |
| NASAL PACKING (POSTERIOR NASAL PACKING) |  | 10 | 1 |
| NEEDLE (23G) |  | 20 | 0 |
| NEEDLE [25G] |  | 4 | 1 |
| NEEDLE DRIVER (AA) |  | 1 | 1 |
| NEEDLE PLASTIC |  | 10 | 0 |
| NITRILE GLOVES (LARGE, MEDIUM, AND SMALL) (PAIR) |  | 30 | 0 |
| NITROGLYCERIN TABLET 0.4MG |  | 25 | 10 |
|  | 10 |  | 03 OCTOBER 2019 |
IMM Service Request Report – Cis-Lunar Orbiter Docked PRA  S-20181015-408

| NONSTICK BANDAGE (TELFA PADS) |  | 20 | 0 |
| -------------------------------------- | --- | --- | --- |
| NYLON SUTURE 2.0 |  | 2 | 2 |
| NYLON SUTURE 5.0 |  | 2 | 0 |
| ORAL AIRWAY |  | 2 | 0 |
| OTOSCOPE HANDLE |  | 1 | 1 |
| OTOSCOPE HEAD |  | 1 | 1 |
| OTOSCOPE USB CABLE |  | 1 | 1 |
| OXYGEN MASK ‐ RESUSCITATION MASK |  | 1 | 0 |
| OXYGEN TUBING |  | 1 | 0 |
| PANOPTIC OPHTHALMOSCOPE |  | 1 | 1 |
| PENLIGHT |  | 2 | 1 |
| PEPTO‐BISMOL 262MG CHEWABLE TABS |  | 80 | 6 |
| PHENERGAN (PROMETHAZINE TABLET) 25 MG |  | 30 | 4 |
| PREDNISONE 20 MG |  | 40 | 4 |
| PRILOSEC 20MG |  | 90 | 0 |

PROMETHAZINE  INJECTABLE  (PHENERGAN)  50MG/ML

|  |  | 12 | 1.5 (2) |
| --- | --- | --- | -------- |

### SINGLE DOSE VIAL

| PROPARACAINE EYE DROPS 0.5%, 15ML BOTTLE |  | 1 | 0 |
| ----------------------------------------- | --- | --- | --- |
| PROVIGIL (MODAFINIL) 200 MG TABLETS |  | 30 | 0 |
| PSYCHOTHERAPY |  | 1 | 1 |

REFRESH ARTIFICIAL TEARS (CARBOXYMETHYLCELLULOSE)

|  |  | 40 | 6 |
| --- | --- | --- | --- |

0.5%, 0.4ML BOTTLE REFRESH  EYE  OINTMENT  (PETROLATUM  WHITE  AND

|  |  | 4 | 0 |
| --- | --- | --- | --- |

MINERAL OIL) 42.5%; 57.3%, 3.5GM

| ROBINUL (GLYCOPYRROLATE) 0.2MG/ML |  | 5 | 0 |
| ------------------------------------------------- | --- | --- | ---------------- |
| ROCEPHIN (CEFTRIAXONE) 1 GM |  | 3 | 1 |
| ROLLED GAUZE |  | 2 | 0 |
| SALINE NOSE SPRAY 22ML BOTTLE |  | 1 | 0 |
| SAM SPLINT ‐ LEG/ARM SPLINT |  | 1 | 0 |
| SCALPEL #11 (SCALPEL BLADE & HANDLE) |  | 1 | 1 |
| SCISSORS – TRAUMA |  | 1 | 0 |
| SHARPS CONTAINER |  | 40 | 0 |
| SILVER NITRATE STICK 75%/25% |  | 10 | 0 |
| SKIN STAPLE REMOVER |  | 1 | 1 |
| SKIN STAPLER |  | 2 | 1 |
| SMOOTH FORCEPS |  | 1 | 1 |
| SPACE ANTICIPATION GLASSES |  | 6 | 0 |
| SPACE STATION EYE WASH |  | 1 | 1 |
| STERILE GLOVES (LARGE, MEDIUM, AND SMALL) (PAIR) |  | 6 | 0 |
| STERILE WATER 10 ML VIAL |  | 2 | 0 |
| STETHOSCOPE |  | 2 | 1 |
| STETHOSCOPE EAR PIECES |  | 15 | 0 |
|  | 11 |  | 03 OCTOBER 2019 |
IMM Service Request Report – Cis-Lunar Orbiter Docked PRA  S-20181015-408

| SUCTION CARTRIDGE |  | 1 | 0 |
| ----------------------------------------- | --- | ---- | --- |
| SUCTION DEVICE |  | 1 | 0 |
| SUCTION DEVICE COLLECTION BAG |  | 2 | 0 |
| SUCTION DEVICE SYRINGE |  | 1 | 0 |
| SUCTION TIP ‐ MOUTH (CURETTE) |  | 1 | 0 |
| SUCTION TUBING ‐ ENDOTRACHEAL TUBE |  | 1 | 0 |
| SUCTION TUBING ‐ GASTRIC TUBE |  | 1 | 1 |
| SUDAFED (PSEUDOEPHEDRINE) 30MG |  | 100 | 0 |
| SUDAFED 12 HOUR (PSEUDOEPHEDRINE) 120 MG |  | 125 | 6 |
| SURGICAL LUBRICANT |  | 6 | 0 |
| SURGICAL TOOLS KIT |  | 1 | 0 |
| SUTURE SCISSORS (BB) |  | 1 | 0 |
| SYRINGE (10CC) |  | 6 | 3 |
| SYRINGE (35CC) |  | 1 | 0 |
| SYRINGE (3CC) |  | 20 | 2 |
| SYRINGE (5CC) |  | 6 | 0 |
| SYRINGE (60ML) |  | 1 | 1 |
| TAMSULOSIN 0.4 MG TABLET |  | 10 | 10 |
| TEMPORARY TOOTH FILLING |  | 1 | 0 |
| THERMOMETER |  | 1 | 0 |

TOBRAMYCIN AND DEXAMETHASONE 0.3%; 0.1%, 10ML

|  |  | 1 | 0 |
| --- | --- | --- | --- |

BOTTLE

| TONGUE DEPRESSOR |  | 20 | 0 |
| -------------------------------------------------- | --- | ---- | ---------------- |
| TONOMETER |  | 1 | 0 |
| TONOMETER TIP COVER |  | 150 | 0 |
| TOOTHED FORCEPS (EE) |  | 1 | 0 |
| TORADOL (KETOROLAC) 30MG/ML, 2ML SINGLE DOSE VIAL |  | 3 | 4 |
| TOURNIQUET |  | 1 | 1 |
| TROPICAMIDE 1% |  | 6 | 0 |
| TYLENOL (ACETAMINOPHEN) 325 MG |  | 250 | 96 |
| ULTRASOUND GEL |  | 17 | 2 |
| ULTRASOUND MACHINE |  | 1 | 0 |
| URINARY COLLECTION BAG (LEG BAG) |  | 250 | 1 |
| URINE CATHETER COUDE |  | 2 | 0 |
| URINE CATHETER FOLEY |  | 2 | 0 |
| URINE CATHETER SHORT |  | 10 | 3 |
| URINE CATHETER STRAIGHT |  | 2 | 3 |
| URINE CHEMSTRIPS |  | 10 | 9 |
| URINE COLOR CHART |  | 1 | 0 |
| VALACYCLOVIR 1 GM TABLET |  | 60 | 21 |
| VALIUM (DIAZEPAM) 5 MG/ML, 2 ML SYRINGE |  | 2 | 1 |
| VARIABLE OXYGEN SYSTEM |  | 1 | 0 |
|  | 12 |  | 03 OCTOBER 2019 |
IMM Service Request Report – Cis-Lunar Orbiter Docked PRA  S-20181015-408 VICODIN HP (HYDROCODONE/ ACETAMINOPHEN HP) 10

|  |  |  |  | 30 | 36 |
| --- | --- | --- | --- | --- | --- |

### MG/660 MG

| VOS | INTUBATED | PATIENT | HARDWARE |  |  |
| ---- | ---------- | -------- | --------- | --- | --- |
|  |  |  |  | 1 | 0 |

(VENTILATOR/RESPIRATOR)

| WATER |  |  |  | 1 | 0 |
| --------------------------------- | --- | --- | --- | --- | ---------------- |
| WOUND PACKING |  |  |  | 3 | 0 |
| ZANTAC (RANITIDINE) 150 MG |  |  |  | 60 | 4 |
| ZIPRASIDONE (GEODON 20MG/ML) |  |  |  | 2 | 0 |
| ZITHROMAX (AZITHROMYCIN) 250 MG |  |  |  | 18 | 12 |
| ZOFRAN (ONDANSETRON) 8 MG TABLET |  |  |  | 30 | 12 |
| ZOLOFT (SERTRALINE) 50 MG |  |  |  | 60 | 20 |
| ZYRTEC (CETIRIZINE) 10 MG TABLET |  |  |  | 30 | 0 |
|  |  |  | 13 |  | 03 OCTOBER 2019 |
IMM Service Request Report – Cis-Lunar Docked PRA S-20181015-408 The IMM MedCap results for TME, CHI, EVAC, and LOCL for the simulated DRMs are presented in the tables below. Table 3 and figure 1 show the average number of total medical events (TME) during the mission across all of the DRMs. Note that in the figures “cc” corresponds to cm3 .

Table 3: Average Number of TME for the DRMs

TME 95% CI 30 day 4 crew DRM with ISS MedCap 21.83 14 30 MedKit 30 day 4 crew DRM with 17.09 MedCap 21.79 14 30 lbs. (7.75 kg.) - 13896cm3 MedKit

Figure 1: Average Number of TME for the DRMS

### Total Medical Events

35 30 25 20 15 10 5 0

### ISS Medkit Optimized MedKit

14 03 OCTOBER 2019

IMM Service Request Report – Cis-Lunar Docked PRA S-20181015-408

Table 4 and figure 2 show the average CHI across all of the DRMs.

Table 4: Average CHI for the DRMs

CHI 95% CI 30 day 4 crew DRM with ISS MedCap 97.11 92.71 98.91 MedKit 30 day 4 crew DRM with 17.09 MedCap 97.03 92.45 98.87 lbs. (7.75 kg.) - 13896cm3 MedKit

Figure 2: Average CHI for the DRMs

Crew Health Index (%) 100 98 96 94 92 90 88

### ISS Medkit Optimized MedKit

15 03 OCTOBER 2019

IMM Service Request Report – Cis-Lunar Docked PRA S-20181015-408

Table 5 along with figures 3 and 4 show the probability of EVAC and LOCL across all of the DRMs.

Table 5: Probability of EVAC and LOCL for the DRMs

### EVAC LOCL

Probability 95% CI Probability 95% CI 30 day 4 crew DRM with MedCap 0.0063 0.0059 0.0068 0.0006 0.0005 0.0007

### ISS MedKit

30 day 4 crew DRM with 17.09 lbs. MedCap 0.0143 0.0136 0.0151 0.0011 0.0009 0.0013 (7.75 kg.) - 13896cm3 MedKit

Figure 3: Probability of EVAC for the DRMs

### Probability of Evacuation

0.016 0.014 0.012 0.01 0.008 0.006 0.004 0.002 0

### All Conditions Environmental Injury/Trauma Medical

### ISS Medkit Optimized MedKit

16 03 OCTOBER 2019

IMM Service Request Report – Cis-Lunar Docked PRA S-20181015-408

Figure 4: Probability of LOCL for the DRMs

### Probability of Loss of Crew Life

0.0014 0.0012 0.001 0.0008 0.0006 0.0004 0.0002 0

### All Conditions Environmental Injury/Trauma Medical

### ISS Medkit Optimized MedKit

17 03 OCTOBER 2019

IMM Service Request Report – Cis-Lunar Docked PRA  S-20181015-408

Tables 6 and 8 present the top ten influential conditions for EVAC for both kits. Tables 7 and 9 present the top ten influential conditions for LOCL.

Table 6: ISS Medical Kit Top Ten Influential Conditions for EVAC

|  |  |  |  | Percent | Cumulative |
| --- | --- | --- | --- | ------- | ----------- |

### Scenario  Treated  Medical Condition  Category  Total EVAC

Percent Contribution

### VISUAL IMPAIRMENT AND/OR INCREASED

WORST TREATED  INTRACRANIAL PRESSURE (VIIP)(SPACE  MEDICAL  220  34.81  34.81 CASE ADAPTATION) WORST

|  | TREATED  NEPHROLITHIASIS | MEDICAL | 57 | 9.02 | 43.83 |
| --- | ------------------------- | -------- | --- | ----- | ------ |

CASE WORST

|  | TREATED  SMOKE INHALATION | ENVIRONMENTAL | 33 | 5.22 | 49.05 |
| --- | -------------------------- | -------------- | --- | ----- | ------ |

CASE WORST

|  | TREATED  SEPSIS | MEDICAL | 31 | 4.91 | 53.96 |
| --- | ---------------- | -------- | --- | ----- | ------ |

CASE WORST

|  | TREATED  DENTAL ABSCESS | MEDICAL | 30 | 4.75 | 58.70 |
| --- | ------------------------ | -------- | --- | ----- | ------ |

CASE BEST

|  | TREATED  SMALL BOWEL OBSTRUCTION | MEDICAL | 24 | 3.80 | 62.50 |
| --- | --------------------------------- | -------- | --- | ----- | ------ |

CASE WORST TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  19  3.01  65.51 CASE WORST

|  | TREATED  BACK SPRAIN/STRAIN | INJURY/TRAUMA | 15 | 2.37 | 67.88 |
| --- | ---------------------------- | -------------- | --- | ----- | ------ |

CASE WORST PARTIAL  LOWER EXTREMITY (LE) STRESS FRACTURE  INJURY/TRAUMA  11  1.74  69.62 CASE WORST

|  | TREATED  WRIST FRACTURE | INJURY/TRAUMA | 10 | 1.58 | 71.20 |
| --- | ------------------------ | -------------- | --- | ----- | ------ |

CASE

Table 7: 17.09-lb, 13896 cm3, CHI Optimized Medical Kit Top Ten Influential Conditions for EVAC

|  |  |  |  | Percent | Cumulative |
| --- | --- | --- | --- | ------- | ----------- |

### Scenario  Treated  Medical Condition  Category  Total EVAC

Percent Contribution

### VISUAL IMPAIRMENT AND/OR INCREASED

WORST PARTIAL  INTRACRANIAL PRESSURE (VIIP)(SPACE  MEDICAL  238  16.57  16.57 CASE ADAPTATION) BEST PARTIAL  FINGER DISLOCATION  INJURY/TRAUMA  133  9.26  25.84 CASE WORST

|  | PARTIAL  SKIN INFECTION | MEDICAL | 85 | 5.92 | 31.75 |
| --- | ------------------------ | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  DIARRHEA | MEDICAL | 56 | 3.90 | 35.65 |
| --- | ------------------ | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  ACUTE SINUSITIS | MEDICAL | 53 | 3.69 | 39.35 |
| --- | ------------------------- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SMOKE INHALATION | ENVIRONMENTAL | 47 | 3.27 | 42.62 |
| --- | -------------------------- | -------------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  GASTROENTERITIS | MEDICAL | 46 | 3.20 | 45.82 |
| --- | ------------------------- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  NEPHROLITHIASIS | MEDICAL | 45 | 3.13 | 48.96 |
| --- | ------------------------- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SKIN LACERATION | INJURY/TRAUMA | 39 | 2.72 | 51.67 |
| --- | ------------------------- | -------------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  SEPSIS | MEDICAL | 26 | 3.51 | 54.79 |
| --- | ---------------- | -------- | --- | ----- | ------ |

CASE

|  |  | 18 |  | 03 OCTOBER 2019 |  |
| --- | --- | --- | --- | ---------------- | --- |
IMM Service Request Report – Cis-Lunar Docked PRA  S-20181015-408

Table 8: ISS Medical Kit Top Ten Influential Conditions for LOCL

Percent

### Scenario  Treated  Medical Condition  Category  Total LOCL    Cumulative

|  |  |  |  | Contribution | Percent |
| --- | --- | --- | --- | ------------- | -------- |

WORST TREATED  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  9  15.79  15.79 CASE WORST

|  | TREATED  SEPSIS | MEDICAL | 8 | 14.04 | 29.82 |
| --- | ---------------- | -------- | --- | ------ | ------ |

CASE WORST TREATED  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  8  14.04  43.86 CASE WORST

|  | TREATED  APPENDICITIS | MEDICAL | 6 | 10.53 | 54.39 |
| --- | ---------------------- | -------- | --- | ------ | ------ |

CASE WORST

|  | TREATED  SMOKE INHALATION | ENVIRONMENTAL | 5 | 8.77 | 63.16 |
| --- | -------------------------- | -------------- | --- | ----- | ------ |

CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | TREATED | MEDICAL | 4 | 7.02 | 70.18 |
| --- | -------- | -------- | --- | ----- | ------ |

### CASE  REACTION

WORST

|  | TREATED  CHEST INJURY | INJURY/TRAUMA | 4 | 7.02 | 77.19 |
| --- | ---------------------- | -------------- | --- | ----- | ------ |

CASE WORST

|  | TREATED  ABDOMINAL INJURY | INJURY/TRAUMA | 4 | 7.02 | 84.21 |
| --- | -------------------------- | -------------- | --- | ----- | ------ |

CASE WORST

|  | TREATED  HEAD INJURY | INJURY/TRAUMA | 2 | 3.51 | 87.72 |
| --- | --------------------- | -------------- | --- | ----- | ------ |

CASE WORST

|  | TREATED  SMALL BOWEL OBSTRUCTION | MEDICAL | 2 | 3.51 | 91.23 |
| --- | --------------------------------- | -------- | --- | ----- | ------ |

CASE

Table 9: 17.09-lb, 13896 cm3, CHI Optimized Medical Kit Top Ten Influential Conditions for LOCL

Percent

### Scenario  Treated  Medical Condition  Category  Total LOCL    Cumulative

|  |  |  |  | Contribution | Percent |
| --- | --- | --- | --- | ------------- | -------- |

WORST

|  | PARTIAL  SMOKE INHALATION | ENVIRONMENTAL | 38 | 34.86 | 34.86 |
| --- | -------------------------- | -------------- | --- | ------ | ------ |

CASE WORST

|  | PARTIAL  SEPSIS | MEDICAL | 14 | 12.84 | 47.71 |
| --- | ---------------- | -------- | --- | ------ | ------ |

CASE BEST

|  | PARTIAL  SEPSIS | MEDICAL | 9 | 8.26 | 55.96 |
| --- | ---------------- | -------- | --- | ----- | ------ |

CASE WORST PARTIAL  TRAUMATIC HYPOVOLEMIC SHOCK  INJURY/TRAUMA  9  8.26  64.22 CASE

### WORST  MEDICATION OVERDOSE/ADVERSE

|  | PARTIAL | MEDICAL | 6 | 5.50 | 69.72 |
| --- | -------- | -------- | --- | ----- | ------ |

### CASE  REACTION

WORST PARTIAL  STROKE (CEREBROVASCULAR ACCIDENT)  MEDICAL  6  5.50  75.23 CASE BEST

|  | PARTIAL  APPENDICITIS | MEDICAL | 4 | 3.67 | 78.90 |
| --- | ---------------------- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  HEAD INJURY | INJURY/TRAUMA | 4 | 3.67 | 82.57 |
| --- | --------------------- | -------------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  APPENDICITIS | MEDICAL | 3 | 2.75 | 85.32 |
| --- | ---------------------- | -------- | --- | ----- | ------ |

CASE WORST

|  | PARTIAL  ACUTE DIVERTICULITIS | MEDICAL | 3 | 2.75 | 88.07 |
| --- | ------------------------------ | -------- | --- | ----- | ------ |

CASE

|  |  | 19 |  | 03 OCTOBER 2019 |  |
| --- | --- | --- | --- | ---------------- | --- |
IMM Service Request Report – Cis-Lunar Docked PRA S-20181015-408

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

Model. 2015. Houston, Texas, NASA Johnson Space Center. Ref Type: Report 20 03 OCTOBER 2019

IMM Service Request Report – Cis-Lunar Docked PRA  S-20181015-408

## Appendix A: IMM Status at Time of Service Request Report

| Validation status for |  |  |  |  |  |  |  |  |  |
| ---------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

IMM IMM V&V Matrix: The following bar chart shows the IMM v4.1 MATLAB status of IMM validation for each IMM element listed.

- Compliance with  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6);

NASA-Standard-7009  however there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been

| requirements | fully attained. |  |  |  |  |  |  |  |  |
| ------------- | ---------------- | ---------- | --- | ---------------------- | --- | --------------- | --- | --- | --- |
|  |  | Compliant |  | Compliance Incomplete |  | Not applicable |  |  |  |
|  |  |  | 36 |  | 5 |  | 5 |  |  |

- Current NASA-  IMM Credibility Matrix: The following table shows the overall IMM v4.1 MATLAB credibility assessment score (CAS), individual factor CAS,

Standard-7009  customer-specified sufficiency thresholds, and weighted scores. Legend depicts CAS score designated range and color assignments from

| credibility assessment | NASA-Standard-7009. |  |  |  |  |  |  |  |  |
| ----------------------- | -------------------- | --- | --- | --- | --- | --- | --- | --- | --- |

score    Factor  Sufficiency  Factor  Weighted  Overall Score

|  |  |  |  |  | Thresholds | Score | Scores |  |  |
| --- | --- | --- | --- | --- | ----------- | ------ | ------- | --- | --- |
|  |  |  | Verification |  | 4 | 3.7 |  | 0.28 |  |
| --- | --- | --- | ------------- | --- | --- | ---- | --- | ------- | --- |
|  |  |  | Validation |  | 3 |  | 3 | 0.45 |  |
|  |  |  | Input Pedigree |  | 3 |  | 3 | 0.53 |  |
| --- | --- | --- | -------------------- | --- | --- | --- | --- | ------- | ----- |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  | Results Uncertainty |  | 3 |  | 3 | 0.60 | 3.06 |
|  |  |  | Results Robustness |  | 3 |  | 3 | 0.45 |  |
|  |  |  | Use History |  | 3 |  | 3 | 0.45 |  |
| --- | --- | --- | ------------ | --- | --- | --- | --- | ------- | --- |
|  |  |  | M&S Management |  | 2 |  | 2 | 0.10 |  |
| --- | --- | --- | --------------------- | --- | --- | --- | --- | ------- | --- |
|  |  |  | People Qualification |  | 4 |  | 4 | 0.20 |  |
|  |  |  |  |  |  |  |  |  |  |
| Additional verification | none |  |  |  |  |  |  |  |  |
| ------------------------ | ----- | --- | --- | --- | --- | --- | --- | --- | --- |

and validation information applicable to this analysis

- Integrated Medical  iMED Lockdown IDs: (50), created on (4/8/2019); and (51), created on (4/8/2019)

### Evidence Database

(iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software. MATLAB and all other MathWorks product version  or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to | None |  |  |  |  |  |  |  |  |
| ---------------------- | ----- | --- | --- | --- | --- | --- | --- | --- | --- |

the code for analysis

|  |  |  |  | 21 |  |  |  | 03 OCTOBER 2019 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | ---------------- | --- |
IMM Service Request Report – Cis-Lunar Docked PRA  S-20181015-408

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
| ----------------- | ------------ | -------------------------------- | --- |
| Smoke Inhalation |  | Constipation (space adaptation) |  |

- Toxic Exposure: Ammonia

- Dental: Exposed Pulp

| INJURY/TRAUMA |  | Dental Caries |  |
| ----------------------------------------- | --- | -------------------------------------- | --- |
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

|  |  | 22 | 03 OCTOBER 2019 |
| --- | --- | --- | ---------------- |
IMM Service Request Report – Cis-Lunar Docked PRA S-20181015-408

## Appendix C: Medical Conditions Modified for the 30 Day DRM

- Since the IMM worst case definition of depression specifies symptoms lasting more than 4 weeks,

the following condition was set to follow the best case scenario for 100% of events that occurred for that simulation: o Depression

- Because ammonia is unlikely to be used in Cis-lunar vehicles, removed Toxic Exposure Ammonia

from the condition list

- Used the fire model numbers for the ISS

23 03 OCTOBER 2019

---

## Source metadata

```yaml
source_filename: "cis-lunar-oribter-docked-pra.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/00_IMM_Run_Reports"
source_url: "https://drive.google.com/file/d/1vfMeX34_Iq8vPL5Hn2tpQ6JH8wd7qmXG/view"
source_drive_id: "1vfMeX34_Iq8vPL5Hn2tpQ6JH8wd7qmXG"
source_sha256: 2505ed82fb05de24eef2f47d049d399b8079beab82b811bcc9fbe7a933003ce3
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 23
ocr_performed: false
```
