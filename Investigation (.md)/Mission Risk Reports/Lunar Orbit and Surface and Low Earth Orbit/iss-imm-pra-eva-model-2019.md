# ISS IMM PRA EVA Model 2019

[View original PDF](https://drive.google.com/file/d/1LO09RuMqFCqe-N8sjedAnKKpl6GEvRQa/view) · **14 pages**

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

---

IMM Service Request Report – ISS PRA EVA Model S-20180503-402 The following document contains data and analyses developed by the NASA Human Research Program Integrated Medical Model (IMM) v3.0, which has undergone rigorous testing and review within the NASA medical community per NASA Procedural Requirement 7150.2 and NASA Standard 7009, but still requires review by the external space flight medical community.

- Outstanding elements for review include: assessing the applicability of the IMM v3.0 outcomes, the relevance of stated

assumptions, and clearly defining limitations. Given this, it is strongly recommended that care be taken when using the results of the simulation and the output should be weighted appropriately for its level of credibility with respect to informing any decision making. If you have questions regarding remaining review activities, please contact the IMM team. The scheduled release of IMM V4.0 in FY2015 follows completion of a full internal review against NASA standards as well as the successful external review from the appropriate medical and modeling communities.

## Executive Summary

The Integrated Medical Model (IMM) is a probabilistic risk assessment tool used to aid in the evaluation of in-flight crew health requirements as well as mission impacts due to medical events. The objective of this data package is to: Quantify the medical risk during an Extra Vehicular Activity (EVA) on an ISS mission. This quantification includes EVA-related conditions and conditions that might occur during a 6.5 hour window which starts at the beginning of the EVA.

The crew profile for this request consisted of one male and one female performing 3 EVAs apiece during a 6 month DRM. The EVAs were scheduled as early as possible in the mission (at 7, 10, and 13 days) in order to provide ample opportunity for EVAs to occur during the simulation. This resulted in 600,000 total possible EVAs. During the simulation, 59 EVAs could not be performed because the crewmember had already gone to medical evacuation (EVAC) or loss of crew life (LOCL). The events during a 6.5 hour EVA window were captured. During the simulation, 57 of the 4567 DCS events were worst case events, 2 of which resulted in EVAC. There were 4 medical events other than DCS which resulted in EVAC during the 6.5 hour EVA window. There were NO medical events which resulted in LOCL. 1 18 MARCH 2019

IMM Service Request Report – ISS PRA EVA Model S-20180503-402

## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are crew health index (CHI), need for evacuation (EVAC) and loss of crew life (LOCL).

The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The 6 month DRM was configured using the crew profile shown in Table 1. The outcomes of certain IMM medical conditions are influenced by pre-existing medical history including: coronary artery calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre- existing conditions, as defined here, are consistent with historical U.S. crew data.

Given the abilities of the IMM during a simulation, it is possible to have the EVAs performed on specific days of the mission. During an IMM simulation, it is possible for a crewmember to be designated with an EVAC or LOCL end state before the end of the mission, and before performing a scheduled EVA. In an attempt to better quantify risk during an EVA, ample opportunity was provided for EVAs to occur during the mission. That is, EVAs were scheduled consecutively earlier in the mission. Two crewmembers, one male and one female, were scheduled to perform 3 EVAs apiece at 7, 10 and 13 days into the mission thereby, improving the chance that more EVAs would be performed, and thus supplying more data points to help quantify the risk. 2 18 MARCH 2019

IMM Service Request Report – ISS PRA EVA Model  S-20180503-402

Table 1: Crew 1 for DRM 1

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |

### Prior Abdominal

|  | Sex | CAC | Crowns | Contacts |  | EVA |
| --- | ---- | ---- | ------- | --------- | --- | ---- |

Surgery

| Crew 1 | Male | Yes | No | No | No | Yes (3) |
| ------- | ------- | ---- | ---- | ---- | ---- | -------- |
| Crew 2 | Male | No | No | Yes | No | No |
| Crew 3 | Male | Yes | No | No | No | No |
| Crew 4 | Male | No | No | No | Yes | No |
| Crew 5 | Male | No | No | No | No | No |
| Crew 6 | Female | No | Yes | No | Yes | Yes (3) |
### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix A. The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data contained within the iMED. For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS (i.e. the ISS medical capabilities (MedCap)).

Model outcomes can be given for the all-treated or fully-treated (continuous resupply, e.g. ISS in low earth orbit), all-untreated (no Medkit) and baseline MedCap (ISS Medkit without resupply). For longer duration missions, the MedCap state should most closely resemble a real world deep space mission where resupply is not possible but where utilization of partial and alternative treatment can occur. For this simulation, the fully treated state was used in order to more closely mirror a true ISS mission.

For this request, decompression sickness (DCS) secondary to EVA is of particular interest. When DCS occurs during a simulation, it is defined as best case or worst case. A best case DCS is defined as Type I DCS with mild to moderate joint pain that resolves spontaneously or with treatment. A best case, or Type I DCS would not lead to EVAC or LOCL and would probably not terminate an EVA. A

|  |  |  | 3 |  |  | 18 MARCH 2019 |
| --- | --- | --- | --- | --- | --- | -------------- |
IMM Service Request Report – ISS PRA EVA Model S-20180503-402 worst case DCS is defined as Type II DCS with severe joint pain and/or symptoms including central neurological, e.g. spotted vision, slurred speech, coordination difficulty, loss of sensation, headache, seizures, unconsciousness, and cardiopulmonary (chest pain, cough, shortness of breath). A worst case, or Type II DCS, could lead to EVAC or LOCL and could terminate an EVA.

The IMM does not model EVAs in isolation. They are modeled in the context of a mission. For this request, after the simulation finished, there was a variable called “Events” with all the events that occurred in each trial. For each trial, an IMM modeler filtered the “Events” variable to only include events that occurred during the 6.5 hour window. Once those items were all that remained in “Events,” the MATLAB scripts that are used in the normal post-processing step were used to get counts for EVACs and LOCLs. To get the best case and worst case counts, “Events” was used along with MATLAB commands to get a count.

### Main Outcomes

- The IMM primary medical outcomes include: total medical events (TME), crew health index (CHI),

probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources.

CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of 4 18 MARCH 2019

IMM Service Request Report – ISS PRA EVA Model S-20180503-402 the affected crew member(s). In version 4.1 of the IMM, crew members are usually only assigned one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources. If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If there are not enough resources available to treat the event, the event is considered "untreated." The initial quantities for medical resources are baselined to a fully stocked ISS medical kit (MedCap). Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated scenario and a 0-100% chance of going to EVAC in the best case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC.

### Modeling Approach

Simulations were run for a 6 month mission. One hundred thousand (100,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria. Convergence criteria are met when there is less than or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 2 - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport. IMM outcomes were determined for the DRMs using the fully treated scenario where all conditions are treated based on the available resources of the ISS MedCap with unlimited resupply. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, TME, CHI, EVAC and LOCL results, as well as pertinent influential conditions, are described. IMM version 4.1 has certain features, assumptions and limitations that impact modeled outcomes. Features, assumptions and limitations pertinent to this report are described below. 5 18 MARCH 2019

IMM Service Request Report – ISS PRA EVA Model S-20180503-402 Features, Assumptions and Limitations of IMM Version 4.1 [3]

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

supply. 6 18 MARCH 2019

IMM Service Request Report – ISS PRA EVA Model S-20180503-402

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

used simultaneously by multiple astronauts (e.g. blood pressure cuff).

## Results

The results presented below, specifically retrieved for analysis, only pertain to events for the two crewmembers performing the EVAs and only within a 6.5 hour window starting at the beginning of each of the three scheduled EVAs. A condition summary list for the influential conditions from the fully treated timeline is presented in Table 2. The condition summary shows a breakdown by case for the total number of events for the conditions listed in the influential conditions. The influential conditions for EVAC are listed in Table 3. Note, there were NO conditions that resulted in LOCL during the simulation. The full condition summary list of conditions that occurred during the EVAs is presented in Table 4.

When the simulation events are analyzed to obtain event frequency, only valid events are included in the analysis. During a simulation, the event occurrence time is generated for all events, best case or worst case is determined, then the events are processed to determine treatment and outcomes as well as invalid events. One way events become invalid is if they would have occurred after a crewmember goes to EVAC or LOCL. Another way events are invalidated is if the same condition is scheduled to occur during the first 2 clinical phases (diagnosis and treatment) of the event. Note that overlapping EVA conditions (with the exception of DCS) are not invalidated. Because of this invalidation step, there were a small number of EVAs that could not be performed during the simulation because the crewmembers went to EVAC or LOCL before one or more EVAs could be performed. During the 100,000 trials, two crewmembers were scheduled to perform 3 EVAs each for a total of 600,000 total EVAs. Of these 600,000 EVAs, 59 EVAs were invalidated because the crewmember had been scheduled for EVAC or LOCL. During these 59 EVAs, 26 DCS events, all best case, were scheduled to occur.

There were a total of 57 episodes of worst case DCS during the EVAs. It was assumed that all worst case DCS events (Type 2 DCS) would require EVA termination and that no best case DCS events (Type 7 18 MARCH 2019

IMM Service Request Report – ISS PRA EVA Model  S-20180503-402 1 DCS) would require EVA termination.

There were 5 medical events other than DCS which resulted EVAC during the 6.5 hour EVA window.

Two of these medical events were worst case Smoke Inhalation. The other 3 medical events were one each  of  worst  case  Urinary  Tract  Infection,  worst  case  Eye  Chemical  Burn,  and  best  case Angina/Myocardial Infarction. It was assumed that all medical events occurring during EVA that resulted in EVAC (with the exception of Smoke Inhalation) would require EVA termination. Note that worst case UTI leading to EVAC is considered equivalent to a severe UTI terrestrially that would require inpatient hospitalization. While unlikely, it is possible that due to underreporting/possible erroneous self-diagnosis crew could begin an EVA with a UTI that progressively worsens over the hours during pre-breathe and EVA. Also note that all incidences of inflight Eye Chemical Burn recorded in the iMED were historically a result of exposure to a certain EVA mask surfactant (anti-fog agent) that is no longer used.  Smoke Inhalation, as defined for the IMM, only occurs secondary to fire on the ISS vehicle and not in the EMU suit.  Smoke  Inhalation  could,  therefore,  be  excluded  from  the  conditions  under  consideration  for termination of an EVA.

Table 2: Fully Treated EVAC Influential Conditions for crewmembers performing EVAs

|  |  |  |  |  | Percent | Cumulative |
| --------- | --- | ------------------ | --------- | ----------- | ------------- | ----------- |
| Scenario |  | Medical Condition | Category | Total EVAC |  |  |
|  |  |  |  |  | Contribution | Percent |

### DECOMPRESSION SICKNESS SECONDARY

WORST

|  |  |  | ENVIRONMENTAL | 2 | 28.57 | 28.57 |
| ----- | --------------------------- | --- | -------------- | --- | ------ | ------ |
| CASE | TO EXTRAVEHICULAR ACTIVITY |  |  |  |  |  |

WORST

|  | SMOKE INHALATION |  | ENVIRONMENTAL | 2 | 28.57 | 57.14 |
| --- | ----------------- | --- | -------------- | --- | ------ | ------ |

CASE WORST

|  | URINARY TRACT INFECTION |  | MEDICAL | 1 | 14.29 | 71.43 |
| --- | ------------------------ | --- | -------- | --- | ------ | ------ |

CASE WORST

|  | EYE CHEMICAL BURN |  | ENVIRONMENTAL | 1 | 14.29 | 85.71 |
| --- | ------------------ | --- | -------------- | --- | ------ | ------ |

CASE BEST

|  | ANGINA/MYOCARDIAL INFARCTION |  | MEDICAL | 1 | 14.29 | 100.00 |
| --- | ----------------------------- | --- | -------- | --- | ------ | ------- |

CASE

Table 3: Condition summary breakdown (number of events that occurred) by case for EVAC

influential conditions

|  |  | Medical Condition | Scenario | Total Events | Minimum | Maximum |
| --- | ----------------------------- | ------------------ | ----------- | ------------- | -------- | -------- |
|  | ANGINA/MYOCARDIAL INFARCTION |  | Best Case | 1 | 0 | 1 |
|  |  |  | Worst Case | 0 | 0 | 0 |

### ANGINA/MYOCARDIAL INFARCTION

### DECOMPRESSION SICKNESS SECONDARY TO

|  |  |  | Best Case | 4510 | 0 | 2 |
| --- | --- | --- | ---------- | ----- | --- | --- |

### EXTRAVEHICULAR ACTIVITY

### DECOMPRESSION SICKNESS SECONDARY TO

|  |  |  | Worst Case | 57 | 0 | 1 |
| --- | --- | --- | ----------- | --- | --- | --- |

### EXTRAVEHICULAR ACTIVITY

|  |  |  | 8 |  |  | 18 MARCH 2019 |
| --- | --- | --- | --- | --- | --- | -------------- |
IMM Service Request Report – ISS PRA EVA Model  S-20180503-402

|  | EYE CHEMICAL BURN |  | Best Case | 86 | 0 | 1 |
| --- | ------------------------ | --- | ----------- | ---- | --- | --- |
|  | EYE CHEMICAL BURN |  | Worst Case | 10 | 0 | 1 |
|  | SMOKE INHALATION |  | Best Case | 8 | 0 | 1 |
|  | SMOKE INHALATION |  | Worst Case | 5 | 0 | 1 |
|  | URINARY TRACT INFECTION |  | Best Case | 316 | 0 | 1 |
|  |  |  | Worst Case | 15 | 0 | 1 |

### URINARY TRACT INFECTION

Table 2: Full condition summary list of all conditions that occurred during the EVAs

|  |  | Medical Condition | Scenario | Events | Minimum | Maximum |
| --- | ----------------------------- | ------------------ | ----------- | ------- | -------- | -------- |
|  | ABNORMAL UTERINE BLEEDING |  | Best Case | 6 | 0 | 1 |
|  | ABNORMAL UTERINE BLEEDING |  | Worst Case | 0 | 0 | 0 |
|  | ACUTE ANGLE-CLOSURE GLAUCOMA |  | Best Case | 1 | 0 | 1 |
|  | ACUTE ANGLE-CLOSURE GLAUCOMA |  | Worst Case | 0 | 0 | 0 |
|  | ACUTE ARTHRITIS |  | Best Case | 3 | 0 | 1 |
|  | ACUTE ARTHRITIS |  | Worst Case | 0 | 0 | 0 |
|  | ACUTE DIVERTICULITIS |  | Best Case | 1 | 0 | 1 |
|  | ACUTE DIVERTICULITIS |  | Worst Case | 0 | 0 | 0 |
|  | ACUTE PANCREATITIS |  | Best Case | 1 | 0 | 1 |
|  | ACUTE PANCREATITIS |  | Worst Case | 0 | 0 | 0 |
|  | ACUTE RADIATION SYNDROME |  | Best Case | 1 | 0 | 1 |
|  | ACUTE RADIATION SYNDROME |  | Worst Case | 0 | 0 | 0 |
|  | ACUTE SINUSITIS |  | Best Case | 94 | 0 | 1 |
|  | ACUTE SINUSITIS |  | Worst Case | 11 | 0 | 1 |
|  |  |  | Best Case | 180 | 0 | 2 |

ALLERGIC REACTION (MILD TO MODERATE)

|  | ALLERGIC REACTION (MILD TO MODERATE) |  | Worst Case | 6 | 0 | 1 |
| --- | ------------------------------------- | --- | ----------- | ---- | --- | --- |
|  | ANGINA/MYOCARDIAL INFARCTION |  | Best Case | 1 | 0 | 1 |
|  | ANGINA/MYOCARDIAL INFARCTION |  | Worst Case | 0 | 0 | 0 |
|  | ANKLE SPRAIN/STRAIN |  | Best Case | 167 | 0 | 1 |
|  | ANKLE SPRAIN/STRAIN |  | Worst Case | 3 | 0 | 1 |
|  | BACK SPRAIN/STRAIN |  | Best Case | 493 | 0 | 2 |
|  | BACK SPRAIN/STRAIN |  | Worst Case | 12 | 0 | 1 |
|  | BAROTRAUMA (EAR/SINUS BLOCK) |  | Best Case | 483 | 0 | 2 |
|  | BAROTRAUMA (EAR/SINUS BLOCK) |  | Worst Case | 3 | 0 | 1 |
|  | BURNS SECONDARY TO FIRE |  | Best Case | 3 | 0 | 1 |
|  | BURNS SECONDARY TO FIRE |  | Worst Case | 0 | 0 | 0 |
|  | CHOKING/OBSTRUCTED AIRWAY |  | Best Case | 40 | 0 | 1 |
|  | CHOKING/OBSTRUCTED AIRWAY |  | Worst Case | 1 | 0 | 1 |
|  | CONSTIPATION (SPACE ADAPTATION) |  | Best Case | 2 | 0 | 1 |
|  | CONSTIPATION (SPACE ADAPTATION) |  | Worst Case | 0 | 0 | 0 |

### DECOMPRESSION SICKNESS SECONDARY TO

|  |  |  | Best Case | 4510 | 0 | 2 |
| --- | --- | --- | ---------- | ----- | --- | --- |

### EXTRAVEHICULAR ACTIVITY

|  |  |  | Worst Case | 57 | 0 | 1 |
| --- | --- | --- | ----------- | --- | --- | --- |

### DECOMPRESSION SICKNESS SECONDARY TO

|  |  |  | 9 |  |  | 18 MARCH 2019 |
| --- | --- | --- | --- | --- | --- | -------------- |
IMM Service Request Report – ISS PRA EVA Model  S-20180503-402

| EXTRAVEHICULAR ACTIVITY |  |  |  |  |
| ----------------------------- | ------------- | --- | ---- | --- |
| DENTAL ABSCESS | Best Case | 7 | 0 | 1 |
|  |  |  |  |  |
| DENTAL ABSCESS | Worst Case | 0 | 0 | 0 |
| DENTAL AVULSION (TOOTH LOSS) | Best Case | 1 | 0 | 1 |
|  |  |  |  |  |
| DENTAL AVULSION (TOOTH LOSS) | Worst Case | 1 | 0 | 1 |
| DENTAL CARIES | Best Case | 4 | 0 | 1 |
|  |  |  |  |  |
| DENTAL CARIES | Worst Case | 4 | 0 | 1 |
| DENTAL CROWN LOSS | Best Case | 2 | 0 | 1 |
|  |  |  |  |  |
| DENTAL CROWN LOSS | Worst Case | 1 | 0 | 1 |
| DENTAL EXPOSED PULP | Best Case | 8 | 0 | 1 |
|  | Worst Case | 2 | 0 | 1 |

### DENTAL EXPOSED PULP

| DEPRESSION | Best Case | 2 | 0 | 1 |
| ------------------------ | ------------- | ----- | ---- | --- |
|  |  |  |  |  |
| DEPRESSION | Worst Case | 0 | 0 | 0 |
| DIARRHEA | Best Case | 560 | 0 | 2 |
|  |  |  |  |  |
| DIARRHEA | Worst Case | 7 | 0 | 1 |
| ELBOW SPRAIN/STRAIN | Best Case | 174 | 0 | 1 |
|  |  |  |  |  |
| ELBOW SPRAIN/STRAIN | Worst Case | 6 | 0 | 1 |
| EYE CHEMICAL BURN | Best Case | 86 | 0 | 1 |
|  |  |  |  |  |
| EYE CHEMICAL BURN | Worst Case | 10 | 0 | 1 |
| EYE INFECTION | Best Case | 75 | 0 | 1 |
| EYE INFECTION | Worst Case | 6 | 0 | 1 |
| EYE IRRITATION/ABRASION | Best Case | 1094 | 0 | 2 |
|  |  |  |  |  |
| EYE IRRITATION/ABRASION | Worst Case | 0 | 0 | 0 |
| FINGER DISLOCATION | Best Case | 13 | 0 | 1 |
|  |  |  |  |  |
| FINGER DISLOCATION | Worst Case | 0 | 0 | 0 |

### FINGERNAIL DELAMINATION SECONDARY TO

|  | Best Case | 38799 | 0 | 5 |
| --- | ---------- | ------ | --- | --- |

### EXTRAVEHICULAR ACTIVITY

| FINGERNAIL DELAMINATION SECONDARY TO |  |  |  |  |
| ------------------------------------- | ----------- | ----- | --- | --- |
|  | Worst Case | 2335 | 0 | 2 |

### EXTRAVEHICULAR ACTIVITY

| GASTROENTERITIS | Best Case | 57 | 0 | 1 |
| ----------------------- | ----------- | ---- | --- | --- |
|  |  |  |  |  |
| GASTROENTERITIS | Worst Case | 5 | 0 | 1 |
| HEADACHE (CO2 INDUCED) | Best Case | 336 | 0 | 2 |
|  |  |  |  |  |
| HEADACHE (CO2 INDUCED) | Worst Case | 12 | 0 | 1 |
| HEADACHE (LATE) | Best Case | 778 | 0 | 2 |
|  |  |  |  |  |
| HEADACHE (LATE) | Worst Case | 8 | 0 | 1 |
|  | Best Case | 105 | 0 | 1 |

HEADACHE (SPACE ADAPTATION)

|  |  |  |  |  |
| -------------------------------------- | ----------- | --- | --- | -------------- |
| HEADACHE (SPACE ADAPTATION) | Worst Case | 4 | 0 | 1 |
| HEARING LOSS | Best Case | 36 | 0 | 1 |
|  |  |  |  |  |
| HEARING LOSS | Worst Case | 30 | 0 | 1 |
| HEMORRHOIDS | Best Case | 37 | 0 | 1 |
|  |  |  |  |  |
| HEMORRHOIDS | Worst Case | 0 | 0 | 0 |
| HERPES ZOSTER REACTIVATION (SHINGLES) | Best Case | 13 | 0 | 1 |
|  |  |  |  |  |
| HERPES ZOSTER REACTIVATION (SHINGLES) | Worst Case | 4 | 0 | 1 |
| HIP SPRAIN/STRAIN | Best Case | 55 | 0 | 1 |
|  |  |  |  |  |
| HIP SPRAIN/STRAIN | Worst Case | 1 | 0 | 1 |
|  | 10 |  |  | 18 MARCH 2019 |
IMM Service Request Report – ISS PRA EVA Model  S-20180503-402

|  |  |  |  |  |  |  |
| --- | ------------------- | --- | ----------- | ---- | --- | --- |
|  | HYPERTENSION |  | Best Case | 4 | 0 | 1 |
|  | HYPERTENSION |  | Worst Case | 0 | 0 | 0 |
|  | INDIGESTION |  | Best Case | 92 | 0 | 1 |
|  | INDIGESTION |  | Worst Case | 10 | 0 | 1 |
|  | INFLUENZA |  | Best Case | 13 | 0 | 1 |
|  | INFLUENZA |  | Worst Case | 3 | 0 | 1 |
|  | KNEE SPRAIN/STRAIN |  | Best Case | 109 | 0 | 2 |
|  | KNEE SPRAIN/STRAIN |  | Worst Case | 1 | 0 | 1 |
|  |  |  | Best Case | 23 | 0 | 1 |

LOWER EXTREMITY (LE) STRESS FRACTURE

|  | LOWER EXTREMITY (LE) STRESS FRACTURE |  | Worst Case | 2 | 0 | 1 |
| --- | ------------------------------------- | --- | ----------- | ---- | --- | --- |
|  | MEDICATION OVERDOSE/ADVERSE REACTION |  | Best Case | 34 | 0 | 1 |
|  | MEDICATION OVERDOSE/ADVERSE REACTION |  | Worst Case | 0 | 0 | 0 |
|  | MOUTH ULCER |  | Best Case | 137 | 0 | 2 |
|  | MOUTH ULCER |  | Worst Case | 7 | 0 | 1 |
|  | NECK SPRAIN/STRAIN |  | Best Case | 153 | 0 | 1 |
|  | NECK SPRAIN/STRAIN |  | Worst Case | 4 | 0 | 1 |
|  | NEPHROLITHIASIS |  | Best Case | 1 | 0 | 1 |
|  | NEPHROLITHIASIS |  | Worst Case | 0 | 0 | 0 |
|  | OTITIS EXTERNA |  | Best Case | 60 | 0 | 1 |
|  |  |  | Worst Case | 0 | 0 | 0 |

### OTITIS EXTERNA

|  | OTITIS MEDIA |  | Best Case | 45 | 0 | 1 |
| --- | ------------- | --- | ----------- | --- | --- | --- |
|  | OTITIS MEDIA |  | Worst Case | 9 | 0 | 1 |

### PARESTHESIAS SECONDARY TO

|  |  |  | Best Case | 62913 | 0 | 5 |
| --- | --- | --- | ---------- | ------ | --- | --- |

### EXTRAVEHICULAR ACTIVITY

### PARESTHESIAS SECONDARY TO

|  |  |  | Worst Case | 2005 | 0 | 2 |
| --- | --- | --- | ----------- | ----- | --- | --- |

### EXTRAVEHICULAR ACTIVITY

|  | PHARYNGITIS |  | Best Case | 156 | 0 | 1 |
| --- | ----------------------- | --- | ----------- | ----- | --- | --- |
|  | PHARYNGITIS |  | Worst Case | 7 | 0 | 1 |
|  | RESPIRATORY INFECTION |  | Best Case | 523 | 0 | 2 |
|  | RESPIRATORY INFECTION |  | Worst Case | 7 | 0 | 1 |
|  | SHOULDER SPRAIN/STRAIN |  | Best Case | 385 | 0 | 2 |
|  | SHOULDER SPRAIN/STRAIN |  | Worst Case | 10 | 0 | 1 |
|  | SKIN ABRASION |  | Best Case | 1421 | 0 | 2 |
|  | SKIN ABRASION |  | Worst Case | 85 | 0 | 1 |
|  |  |  | Best Case | 176 | 0 | 1 |

### SKIN INFECTION

|  | SKIN INFECTION |  | Worst Case | 7 | 0 | 1 |
| --- | ----------------- | --- | ----------- | ----- | --- | --- |
|  | SKIN LACERATION |  | Best Case | 4 | 0 | 1 |
|  | SKIN LACERATION |  | Worst Case | 21 | 0 | 1 |
|  | SKIN RASH |  | Best Case | 1542 | 0 | 2 |
|  | SKIN RASH |  | Worst Case | 8 | 0 | 1 |
|  | SLEEP DISORDER |  | Best Case | 2140 | 0 | 3 |
|  | SLEEP DISORDER |  | Worst Case | 11 | 0 | 1 |
|  | SMOKE INHALATION |  | Best Case | 8 | 0 | 1 |
|  | SMOKE INHALATION |  | Worst Case | 5 | 0 | 1 |
|  |  |  | Best Case | 4 | 0 | 1 |

URINARY INCONTINENCE (SPACE ADAPTATION)

|  |  | 11 |  |  |  | 18 MARCH 2019 |
| --- | --- | --- | --- | --- | --- | -------------- |
IMM Service Request Report – ISS PRA EVA Model  S-20180503-402 URINARY INCONTINENCE (SPACE ADAPTATION)  Worst Case  0  0  0

|  | URINARY TRACT INFECTION | Best Case | 316 | 0 | 1 |
| --- | ------------------------ | ----------- | ---- | --- | --- |
|  |  |  |  |  |  |
|  | URINARY TRACT INFECTION | Worst Case | 15 | 0 | 1 |
|  | VAGINAL YEAST INFECTION | Best Case | 67 | 0 | 1 |
|  |  |  |  |  |  |
|  | VAGINAL YEAST INFECTION | Worst Case | 13 | 0 | 1 |
|  | WRIST FRACTURE | Best Case | 1 | 0 | 1 |
|  |  |  |  |  |  |
|  | WRIST FRACTURE | Worst Case | 0 | 0 | 0 |
|  | WRIST SPRAIN/STRAIN | Best Case | 82 | 0 | 1 |
|  |  |  |  |  |  |
|  | WRIST SPRAIN/STRAIN | Worst Case | 1 | 0 | 1 |

## References

1.  Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114. 2011.

Houston, TX, NASA, Johnson Space Center. Ref Type: Report

2.  Integrated Medical Model Project. Integrated Medical Model Software Requirements Specification.

IMM-SFTWR-008.  2017.  Houston,  Texas,  KBRwyle  Integrated  Science,  Technology  and Engineering. Ref Type: Report

3.  Integrated Medical Model Project. Integrated Medical Model version 4 Assumptions and Limitations.

IMM-GEN-300.  2017.  Houston,  Texas,  KBRwyle  Integrated  Science  and  Engineering  Space Medicine Information Technology. Ref Type: Report

4.  NASA-STD-7009: Standard for Models and Simulations (2008). NASA: Washington, DC.

5.  ISS Medical Checklist (Med CL), 04 June 2014, NASA Johnson Space Center, Medical Operations

Group.

|  |  | 12 |  |  | 18 MARCH 2019 |
| --- | --- | --- | --- | --- | -------------- |
IMM Service Request Report – ISS PRA EVA Model  S-20180503-402

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
| --- | --- | --- | --- | --- | --- | --- | --- |
| Additional verification | none |  |  |  |  |  |  |
| ------------------------ | ----- | --- | --- | --- | --- | --- | --- |

and validation information applicable to this analysis

| Integrated Medical | iMED Lockdown ID: (26), created on (2/21/2017) |  |  |  |  |  |  |
| ------------------- | ----------------------------------------------- | --- | --- | --- | --- | --- | --- |

### Evidence Database

(iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software. MATLAB and all other MathWorks product version  or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to | None |  |  |  |  |  |  |
| ---------------------- | ----- | --- | --- | --- | --- | --- | --- |

the code for analysis

|  |  | 13 |  |  |  | 18 MARCH 2019 |  |
| --- | --- | --- | --- | --- | --- | -------------- | --- |
IMM Service Request Report – ISS PRA EVA Model S-20180503-402

## Appendix B: Medical Conditions in iMED by Category (iMED_20170221)

ENVIRONMENTAL MEDICAL ILLNESS (continued)

### Acute Radiation Syndrome Anxiety

### Altitude Sickness Appendicitis

Barotrauma (ear/sinus block) Atrial Fibrillation/Atrial Flutter Burns secondary to Fire Back Pain (space adaptation)

### Decompression Sickness Secondary to EVA Behavioral Emergency

### Eye Chemical Burn Cardiogenic Shock Secondary to Myocardial

infarction Headache (CO2 induced) Choking/Obstructed Airway Smoke Inhalation Constipation (space adaptation)

- Toxic Exposure: Ammonia Dental: Exposed Pulp

### INJURY/TRAUMA Dental Caries

- Abdominal Injury Dental: Abscess

- Acute Compartment Syndrome Dental: Crown Loss

- Ankle Sprain/Strain Dental: Filling Loss

### Back Sprain/Strain Depression

### Chest Injury Diarrhea

- Dental: Avulsion (tooth loss) Eye Corneal Ulcer

### Elbow Dislocation Eye Infection

### Elbow Sprain/Strain Gastroenteritis

Eye Irritation/Abrasion Headache (Late)

Eye Penetration (foreign body) Headache (space adaptation)

### Finger Dislocation Hearing Loss

### Fingernail Delamination Secondary to EVA Hemorrhoids

Head Injury Herpes Zoster Reactivation (shingles)

### Hip Sprain/Strain Hypertension

### Hip/Proximal Femur Fracture Indigestion

### Knee Sprain/Strain Influenza

Lower Extremity Stress Fracture Insomnia (space adaptation)

### Lumbar Spine Fracture Medication Overdose/Adverse Reaction

### Neck Sprain/Strain Mouth Ulcer

Neurogenic Shock Nasal Congestion (space adaptation)

### Paresthesias Secondary to EVA Nephrolithiasis

Shoulder Dislocation Nose bleed (space adaptation)

### Shoulder Sprain/Strain Otitis Externa

### Skin Abrasion Otitis Media

### Skin Laceration Pharyngitis

### Traumatic Hypovolemic Shock Respiratory Infection

### Wrist Fracture Retinal Detachment

### Wrist Sprain/Strain Seizures

### MEDICAL ILLNESS Sepsis

### Abdominal Wall Hernia Skin Infection

### Abnormal Uterine Bleeding Skin Rash

### Acute Angle-Closure Glaucoma Sleep Disorder

### Acute Arthritis Small Bowel Obstruction

Acute Cholecystitis/Biliary Colic Space Motion Sickness (space adaptation)

Acute Diverticulitis Stroke (Cerebrovascular Accident)

### Acute Pancreatitis Sudden Cardiac Arrest

Acute Prostatitis Urinary Incontinence (space adaption)

Acute Sinusitis Urinary Retention (space adaptation)

Allergic Reaction (mild to moderate) Urinary Tract Infection

### Anaphylaxis Vaginal Yeast Infection

### Angina/Myocardial Infarction Visual Impairment and Increased Intracranial

Pressure (VIIP) (space adaptation) 14 18 MARCH 2019

---

## Source metadata

```yaml
source_filename: "iss-imm-pra-eva-model-2019.pdf"
source_folder: "Mission Risk Reports/Lunar Orbit and Surface and Low Earth Orbit"
source_url: "https://drive.google.com/file/d/1LO09RuMqFCqe-N8sjedAnKKpl6GEvRQa/view"
source_drive_id: "1LO09RuMqFCqe-N8sjedAnKKpl6GEvRQa"
source_sha256: c500b1d2abf1052d95be8f2f1da71d3a0f9a9912342c0abb026e52f2afae3a7e
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
