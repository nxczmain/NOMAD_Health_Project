# Space Adaptation Headache CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1RdDnBdvaxu3A4q68CQj2m4_rqfjn-J2N/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Headache/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Overview](#overview)
- [References](#references)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL94_Space Adaptation - Headache Spaceflight headache or space adaptation headache is a headache attributed to travel in microgravity (Starling 2018). Previously, space motion sickness syndrome was inclusive of this condition, but it is now recognized as a separate disorder. There has been acknowledgment that space adaptation headaches often do not occur concomitantly with motion sickness. In the 3rd edition of the International Classification of Headache Disorders (ICHD-3), the International Headache Society (IHS) defines this condition as a nonspecific headache with the following: “A. Any new headache fulfilling criterion C; B. The subject has travelled through space; C. Evidence of causation demonstrated by both of the following: 1. headache has occurred exclusively during space travel and 2. headache has spontaneously improved on return to earth; D. Not better accounted for by another ICHD-3 diagnosis.” Headaches that occur within the first five days of spaceflight are typically attributed to this condition. They are usually self-limited and typically resolve when homeostasis of cephalad fluid shifts occur (Hodkinson et al., 2017). Analog studies using simulated microgravity have demonstrated that in addition to fluid redistribution, there are changes in hemoconcentration, hormones and tight-junctions that may contribute to space adaptation headaches as well (Feuerecker et al., 2016). Other conditions that are related but not covered in this CLiFF include: headache, headache-CO2 and altitude sickness.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

The incidence rate was derived two LSAH data gathering events (Walton, 2010; Saile et. al, 2017). Regrettably, the authors of this CLiFF did not have direct access to the data from those LSAH events. Consequently, information was taken detailing these events from the previous IMM CLiFF entitled " Headache (Space Adaptation) Cliff.” Per this resource: “headaches that began during Days 1 to 5 and for which no other attribution, such as CO or CO2 exposure, caffeine withdrawal, toxic exposure or DCS, had been determined. When a crew member took an analgesic and the reason indicated was headache, we counted that as a headache event.” In total, they found 281 events over 807 person-missions. At the time of this CLIFF completion, a repeat LSAH data gathering event was not possible and missions past 2017 are not represented. Antonsen et al. (2017) was rated less highly than the data in the previous IMM CLiFF as the data in Table 1 could not be adequately reconciled with this specific condition’s definition. For example, Table 1 described 33 cases of headache for an incidence of 2.27. The same table also listed ‘Fluid shift’ as a category and described this as “composition change and facial fullness.” In this category, there were a total of four events and incidence of 0.28.

Unfortunately, it is unknown how many headaches or fluid shifts are specific to space adaptation. Of note, it was observed that in the Antonsen et al. paper Table 1 was mislabeled as 'ISS through Exp 40' when it should read ' ISS expeditions 9 and 14 through 40'. Table 2 from the same source detailed 233 events in the ‘Headache (space adaptation)’ category. Vein et al. (2009), analyzed survey data from 17 participants. Symptoms were categorized into four specific time frames of space flight were used and the ‘launch’ classification would be applicable to this condition. Nine astronauts (53%) experienced headache during this time-period. This study was downrated secondary to its cross-sectional design, limited years of inclusivity and vulnerability to recall bias.

### ANALOG LITERATURE

This is a space-related condition and there are no analog studies that are applicable to deriving an incidence value. However, there are several studies in which the microgravity environment has been simulated on earth for the purpose of studying physiological changes (Oosterhout et al., 2015; Feuerecker et al., 2016).

### TERRESTRIAL LITERATURE

This is a space-related condition and there are no applicable terrestrial studies.

### OVERALL INCIDENCE SUMMARY

9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 1

## INCIDENCE

- Mean: 0.3488 person-missions and SD 0.01678.

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate given the spaceflight data (281 events over 807 person-missions) under an uninformative prior is Beta(shape1=281.02, shape2=542.67) with mean 0.3488 and SD 0.01678. Evidence: Spaceflight – IMM LSAH data requests (Walton and Saile) 281 events over 807 person-missions. IP: 0.3482 (95%CI: 0.3153, 0.3822). Antonsen table 2 reflects the IMM categorizations of symptoms from the initial LSAH data request (Walton). Table 1 reflects a different categorization of symptoms from the second LSAH data request (Saile).

Since both are based on identical data sources but IMM data is categorized specifically for Space Adaptation headaches, the editors and biostatistician decided to just use the IMM data.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

SAS Segment

### Space Adaptation

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Beta Mean 0.341172 SD 0.0165093 Beta (Alpha): 281.02 (Beta): 542.67 Onset Timing (Hours) (Min): 1 (Max): 120 (Most Likely): 12 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Walton, 2010 Spaceflight 4 Saile et al., 2017 Spaceflight 4 Antonsen et al., 2017 Spaceflight 3 Vein et al., 2009 Spaceflight 2 Oosterhout et al., 2015 Analog 0 Feuerecker et al., 2016 Analog 0 Spaceflight incidence data was rated the highest as this is a condition, by definition, that can only occur in space. Analog and terrestrial studies would not accurately represent incidence for this condition. 9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

This CLiFF condition is event-based and consequently there are no known preventative measures. However, to help exclude other causes of headache pathologies, at L-21/18 months, if greater than 2 years since ISS section, crewmembers undergo MRI/MRA neuroimaging, a full annual medical exam L-6/9 months and brief medical exams at L-7/10 and L-1/2 days by the Flight Surgeon. Barratt et al. (2019) reports that applicants with a history of migraines or cluster headaches are disqualified from the selection process.

### BEST CASE SCENARIO DEFINITION

An uncomplicated course of space adaptation syndrome-related headache, which resolves spontaneously or with minor symptomatic treatment.

### WORSE CASE SCENARIO DEFINITION

A severe space adaptation related headache poorly responsive to available treatment.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

- Per the previous IMM effort: “Based on the Real World System data set there were 48 events and of those events, one was the worst case. Since

there is a worst case the percentage can be calculated from the empirical data. The worst case is 2.08% (1/48), while the best case is 97.92% (47/48) (Saile L., 2017).” In Vein et al. (2009), time in microgravity was split into four categories for use in their survey: launch, stay at space station, landing and EVA. Although it can currently take less than 24 hours to international space station, a decade prior, the average was reported as three days of travel time ('NASA STEM Engagement' 7/12/2021). Consequently, the launch and stay at space station would be pertinent to this condition, as space adaptation would be expected to occur within the first 5 days of spaceflight. Out of 17 astronauts, one astronaut had a severe headache during launch and zero had a severe headache during stay at the space station (0-5.9%). Given that the Saile LSAH data had access to reported events in real time and was not subject to recall bias and also covered a greater number of missions, 2.08% was chosen as the worst-case probability. Space headache was studied in a head-down-tilted bed simulation on earth, which is the considered the “gold standard for simulating the physiological effects of weightlessness on the human body” (van Oosterhout et al,, 2015). Out of 50 headache episodes in this study, 17 were considered severe (34%). Given that the proportion of severe cases were greatly different from data taken from true flight data, this study was not used to calculate the worst-case probability.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Saile et al., 2017 Spaceflight 4 Vein et al., 2009 Spaceflight 2 van Oosterhout et al., 2015 Analog 1 Only spaceflight data was utilized given the condition’s definition. Worst-case probability estimates from the previous IMM CLiFF effort were used as there had been no further studies published in the interim. 9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

Condition Case Scenario Composite Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best 0.3488 person- 98 - 98 100 0.21 23.2527 1 8 0 0 0 0 0 Case (TBC) missions and SD 0.01678 Treated Worst 2 - 2 100 1.03 26.7606 24 120 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.21 29.1257 1 8 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.03 53.8932 24 120 0 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Space headaches are part of the Space Adaptation Syndrome (SAS), theorized to be due to the cephalad fluid shifts that occur in the first several days of microgravity (Hodkinson et al., 2017). The best-case scenario refers to a headache that is self-resolving or resolves with one or two doses of medication (NSAID, acetaminophen). The worst-case scenario may require several doses of multiple oral medications or even intravenous or intramuscular formulations. Given that this condition only exists in microgravity, there is no acceptable RTDC terrestrial-surrogate for this condition.

TREATED BEST CASE (TBC) SCENARIO COMMENTS In the prior IMM iteration, duration was estimated to be one-to-eight hours based on the terrestrially accepted medication regimen of NSAID or acetaminophen dosage for headache of every four-to-eight hours as-needed (Schachtel et al., 1996; Gilmore et al, 2011). The authors for this CLiFF could find no published data regarding the duration of the treated best-case scenario. Unfortunately, crewmembers can use certain medications with flight surgeon input for low-risk conditions including headache (Blue et al. 2019). Consequently, subject matter expert opinion concurred that one-to-eight hours was a reasonable estimate. RTDC and LOCL are not expected for this condition.

TREATED WORST CASE SCENARIO (TWC) COMMENTS In the prior IMM iteration, duration was estimated to be 24 to 120 hours based on the consensus that spaceflight headaches would resolve within 120 hours (five days). In a head-down-tilted bed rest simulation study, there were six headaches reported from 22 subjects on day one, with three that persisted into day five (van Oosterhout et al,, 2015). The study-period did not extend beyond day five. However, headaches that occur beyond the initial 72 hours need to be further investigated for other etiologies, such as carbon monoxide toxicity (Barratt et al., 2019). To date, there have been no instances of RTDC or LOCL secondary to this condition in spaceflight.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS There exists little accessible data regarding duration for the untreated best case. Subject matter expert consensus was that it would be no less than the treated best-case-scenario. Again, RTDC and LOCL are not expected for this condition.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Duration is expected to be no less than the treated worst-case-scenario. To date, there have been no instances of RTDC or LOCL secondary to this condition in spaceflight TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Schachtel et al., 1996 Terrestrial Gilmore et al, 2011 Terrestrial 1 Blue et al. 2019 Spaceflight van Oosterhout et al,, 2015 Analog There was a lack of literature available to derive duration ranges and therefore these values are based largely on estimates from terrestrial treatments and subject matter consensus.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC) 9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 5

### Citation Source LOC Value

Walton, 2010 Spaceflight 4 Saile et al., 2017 Spaceflight Only spaceflight data was utilized given the condition’s definition.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Walton, 2010 Spaceflight 4 Saile et al., 2017 Spaceflight Only spaceflight data was utilized given the condition’s definition.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

While the cause is not known (as is true for many terrestrial headaches) space adaptation headaches are largely self limited and require symptomatic treatment only. These headaches are likely caused by multiple variables in the flight environment and may not represent a single condition, such as; dehydration, fatigue, poor lighting, stress, and atmospheric conditions.

- CNES: NONE

### Diagnostic Scope and Resourcing

Diagnosis relies on history and physical exam Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.21 hours for set up, history, and physical exam.

CP1 WC (Treated or Untreated): 1.03 for a set up, history, and a more thorough exam including neurological, fundoscopic, and vision testing to rule out other, more dangerous causes of headaches.

This condition requires a Scope of Practice 4 to manage and rule out other similar presenting conditions, assess treatment response, and assess fitness for duty. However, most of the treatment will not rise above level 1 and the more common best case requires only SoP 1.

### Treatment Scope and Resourcing

The best case is mild and uses pain medications, with primacy given to NSAIDs over acetaminophen and antiemetics. The worst case adds medications for a refractory headache including metoclopramide, oral steroids, promethazine, magnesium gluconate, and caffeine.

Diphenhydramine is included to mitigate extrapyramidal symptoms as akathisia in a spacecraft would be a singularly uncomfortable experience.

Additionally, non pharmacological techniques, such as pressure point massage, schedule changes, and location changes within the spacecraft are also included. Communications and Support Needs; Communications are not expected to be necessary beyond the routine medical ground communications given the context and frequency of this condition. However, it is expected that routine ground communication will be present and available to assist with treatment.

## References

Barratt, Michael R., Ellen S. Baker, and Sam L. Pool. 2019. "Principles of clinical medicine for space flight." In. New York, NY: New York, NY : Springer.

### IMM CLIFF RECONCILATION COMMENTS

The predecessor to this CLiFF was entitled “Headache (Space Adaptation).” Given lack of access to the original LSAH pulls and this being a condition that only occurs in microgravity, many of the resources between this CLiFF and the prior iteration remain the same. For this effort, with the help of a biostatistician, incidence data was updated to reflect person-missions rather than person-years as this condition can only be expected to occur at the initiation of spaceflight. 9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 6

### LIMITATIONS SUMMARY

- The authors to this CLiFF did not have access to the original LSAH data and thus there was an implied dependence on already published

sources. • There is some overlap between this condition and other CLiFF conditions such as headache, headache-CO2, altitude sickness. • Several assumptions needed to be made regarding duration and the untreated cases given lack of available studies. • There is likely an underreporting of this condition in spaceflight studies given that most cases do not result with much impairment and do not require consultation with a flight surgeon. 9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  | Cardio- |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  | 89 |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  |  |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 |  | 89 |  | 145 |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  |  | Translation & |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  |  | Extremity Standing (g) |  | Equipment | Ops | Category |  |  |
| --- | ----- | --- | --- | ---------------------- | -------------- | --------- | --------- | -------- | --- | --- |
|  |  |  |  |  | (microgravity) |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  |  |  |  |  |  | 211 875 | 3763 | 0.232527 | 23.2527 |
| ---- | --- | --- | --- | --- | --- | --- | ------- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  | 211 1096 | 3763 | 0.291257 | 29.1257 |
| ---- | --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  |  |  |  |  | 211 1007 | 3763 | 0.267606 | 26.7606 |
| --- | --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 | 564 |  |  |  |  | 211 2028 | 3763 | 0.538932 | 53.8932 |
| --- | --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |
| --- | ----------- | ----------- | -------------- | --------------- | ------- | --------- | --------- | ----- | --- | --- |
|  |  |  | Communications | personal Vision | Hearing |  | Dentition | GI GU |  |  |
|  | Simple | Complex |  |  |  | pulmonary |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 8

Total Human Translation & Total Tasks Hand Lower Ambul & Don/Doff Pressure System Hand (Any) Upper Extremity Stabilization Impaired By TI Decimal TI % (Dom) Extremity Standing (g) Equipment Ops Category (microgravity) Condition

### Tasks Full

Mission Treated Best 0 3763 0 0 Case (TBC) Untreated Best 0 3763 0 0 Case (UTBC) Treated Worst 0 3763 0 0 Case (TWC) Untreated Worst 0 3763 0 0 Case (UTWC) 9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 9

TABLE 8 KEY

- Human System Task Category (HSTC) Definitions: Cognitive-Simple: Tasks requiring simple cognitive involvement (low levels of attention, following

simple checklists, and not requiring extensive decision making) in conjunction with inputs from other systems. Cognitive-Complex: Tasks requiring complex cognitive involvement (requiring constant attention, frequent interpretation of outside stimuli to inform real-time situations) in conjunction with inputs from other systems. Communication: Tasks requiring primarily communication, via hearing and speaking. Interpersonal Skills: Tasks requiring interpersonal, social interaction between crew including complex technical tasks that require extended crew interaction. Vision: Tasks in which visual information is required. Hearing: Tasks in which primarily auditory information is required, excluding communication, e.g. hearing alarms, medical auscultation, OOHAs. Cardiopulmonary: Tasks requiring greater-than-baseline cardiopulmonary effort, e.g. physically strenuous activities. Dentition: Tasks requiring use of teeth for mastication. GI (Gastrointestinal): Tasks requring use of the alimentary sytem, e.g. solids/liquids consumption and solids excretion. GU (Genitourinary): Tasks requiring use of the male/female genitourinary systems. Hand (Dominant): Tasks performed using primarily the hand, requiring use of the dominant hand (piloting, medical procedures, dental procedures). Hand (Any): Tasks performed using primarily the hand(s), with no preference for dominance, with equivalent bilateral effectiveness. Upper Extremity: Tasks requiring specific use of the upper extremities, excluding hands. Lower Extremity: Tasks requiring specific use of the lower extremities (excluding ambulation and standing in the presence of gravity), e.g. using exercise equipment. Ambulation and Standing (g): Tasks requiring use of both lower extremities to accomplish ambulation or standing in the presence of gravity. Translation and Stabilization (microgravity): Tasks requiring use of either the upper or lower extremities to accomplish translational movement and stabilization (securing oneself to remain stationary) in the setting of microgravity. Don/Doff Equipment: Tasks requiring the donning of personal equipment (including pressure suit, exercise harness, EVA equipment, etc). Pressure Ops: EVA/contingency tasks performed while pressurized in a suit.

Criteria for Assignment of Conditions to HSTCs (any of the following):

1) Is affected crew member physically incapable of performing the human system task category, without impairment, with the condition?

2) Would the treatment (e.g. medications) impair the crewmember's ability to perform the human system task category? (Does not apply to UTx)

3) Does the condition have a high likelihood of causing a significant aeromedical contraindication with an associated human system task category

4) Would performing tasks in an associated task category worsen the condition? (If so, it is affected).

5) Does pain associated with the condition impair any further human system categories?

### TASK IMPAIRMENT COMMENTS

CP2: No comment. CP3: No comment.

### EVIDENCE COLLECTION PROCESS

Mesh terms that most closely resembled the best-case and worst-case scenarios, and associated Conditions Included but Not Explicitly Stated (CNES), were utilized to build incidence, duration, RTDC, and LOCL searches by best- and worst-case.

## Incidence:

Databases searched for spaceflight and analog incidence data included: PubMed, Google Scholar, NASA Technical Reports Server (NTRS) public search, Defense Technical Information Center (DTIC), and Barratt MR, Baker E, Pool SL. Principles of Clinical Medicine for Space Flight. New York,

- NY: Springer; 2019. 2nd Edition. Databases searched for terrestrial incidence included: DynaMed, PubMed, and Google Scholar.

Duration, RTDC, LOCL: Databases searched for duration, RTDC, and LOCL included: Dynamed, Cochrane, PubMed, and Google Scholar. Note, that if duration, RTDC, or LOCL data was found in a DynaMed search, the other search engines were not included. Relevant articles were selected and reviewed. If applicable, the article was included in the CLiFF.

LEVEL OF CONFIDENCE (LOC) SCORING Articles obtained to update the evidence behind this CLiFF were scored by ExMC editors, based on their applicability to the Exploration Spaceflight environment using the following grading scale: 4 – Confident 3 – Somewhat confident 2 – Neutral 1 – Somewhat unconfident 0 – Not confident The following considerations factor into the grading scale above:

- How closely does the paper describe the medical condition as defined by the IMPACT 1.0 Condiltion List (relevance)?

- How closely does the population included resemble the astronaut population?

- Quality of the paper (number of subjects, methods, etc.)

- How much does the editor trust the source of the evidence?

- How closely does the editor think that the data represents the exploration spaceflight environment?

- Other considerations, at the discretion of the editor, supported in the comments for LOE scoring.

9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 10

## REFERENCES

Reference

1. Antonsen, Erik, Tina Bayuse, Rebecca Blue, Vernie Daniels , Melinda Hailey, Sam Hussey, Eric Kerstman, Mike Krihak, Kara Latorella, Jennifer

Mindock, Jerry Myers, Robert Mulcahy, Rebekah Reed, Davis Reyes, Michelle Urbina, and Marlei Walton. 2017. "Evidence Report: Risk of Adverse Health Outcomes and Decrements in Performance due to In-Flight Medical Conditions." In.

2. Barratt, Michael R., Ellen S. Baker, Sam L. Pool, and SpringerLink (Online service). 2019. "Principles of Clinical Medicine for Space Flight." In,

XVIII, 936 p. 362 illus., 268 illus. in color. New York, NY: Springer New York : Imprint: Springer,.

3. Blue, Rebecca S., Tina M. Bayuse, Vernie R. Daniels, Virginia E. Wotring, Rahul Suresh, Robert A. Mulcahy, and Erik L. Antonsen. 2019.

'Supplying a pharmacy for NASA exploration spaceflight: challenges and current understanding', NPJ microgravity, 5: 14-14.

4. Feuerecker, M., W. P. J. van Oosterhout, B. Feuerecker, S. Matzel, G. Schelling, M. Rehm, A. A. Vein, and A. Choukèr. 2016. 'Headache

under simulated microgravity is related to endocrine, fluid distribution, and tight junction changes', PAIN, 157: 1072-78.

5. Gilmore, B., and M. Michael. 2011. 'Treatment of acute migraine headache', Am Fam Physician, 83: 271-80.

6. 'Headache Classification Committee of the International Headache Society (IHS) The International Classification of Headache Disorders, 3rd

edition'. 2018. Cephalalgia, 38: 1-211.

7. Hodkinson, P. D., R. A. Anderton, B. N. Posselt, and K. J. Fong. 2017. 'An overview of space medicine', BJA: British Journal of Anaesthesia,

119: i143-i53.

8. Saile L., Boley L., Kerstman E. 2017. 'Integration RWS ISS STS Observed Incidence V2.'.

9. Schachtel, Bernard P., Sandy A. Furey, and William R. Thoden. 1996. 'Nonprescription Ibuprofen and Acetaminophen in the Treatment of

Tension-Type Headache', The Journal of Clinical Pharmacology, 36: 1120-25.

10. Starling, A. J. 2018. 'Unusual Headache Disorders', Continuum (Minneap Minn), 24: 1192-208.

11. van Oosterhout, W. P. J., G. M. Terwindt, A. A. Vein, and M. D. Ferrari. 2014. 'Space headache on Earth: Head-down-tilted bed rest studies

simulating outer-space microgravity', Cephalalgia, 35: 335-43.

12. Vein, A. A., H. Koppen, J. Haan, G. M. Terwindt, and M. D. Ferrari. 2009. 'Space Headache: A New Secondary Headache', Cephalalgia, 29:

683-86.

13. Walton M, Kerstman E. 2010. ' IMM In-flight Compilation v20100414_Incidence_calculation'.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

### CAC Coronary Artery Calcium

### CHS Crew Health and Safety

### CL Condition List

### CliFF Clinical Finding Form

### CMO Crew Medical Officer

### COMFORT Clinical Outcome Metrics for Optimization of Robust Training

CP1 Clinical Phase 1 CP2 Clinical Phase 2 CP3 Clinical Phase 3

### CRL Clinical Resource Level

9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 11

### CRT Capability Resource Table

### CST Clinical Science Team

### DCS Decompression Syndrome

### DRM Design Reference Mission

### ED Emergency Medicine Doctor

### EL Evidence Library

### EMCL Exploration Medical Condition List

### EMT Emergency Medical Technician

### EVA Extravehicular Activity

### EXMC Exploration Medical Capability

### HRP Human Research Program

### ICD International Classification of Disease

ICL 1.0 IMPACT 1.0 Medical Conditions List

### ICU Intensive Care Unit

IMCL iMED Condition List iMED Integrated Medical Evidence Database

### IMM Integrated Medical Model

### IMPACT-MD Impact Medical Database

### IP Incidence Proportion

### IR Incidence Rate

### ISS International Space Station

### IV Intravenous

### JSC Johnson Space Center

LEO Low-Earth orbit

### LEVA Lunar Extravehicular Activity

### LOCL Loss of Crew Life

### LOM Loss of Mission

### LSAH Lifetime Surveillance of Astronaut Health

### LSO Lunar Surface Operations

### MCL Master Condition List

### MEVA Medical Extravehicular Activity

### NASA National Aeronautics and Space Administration

### N/A Not Applicable

### NP Nurse Practitioner

### OBGYN Obstetrics and Gynecology

### OR Occurrence Rate

### PA Physician Assistant

### PDQ Pain Disability Questionnaire

### PFCL Proposed Future Conditions List

### PPE Personal Protective Equipment

### PTRS Project Technical Requirements Specification

### PRL Pharmaceutical Resource Level

### QTL Quality Time Lost

9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 12

### RCL Removed Conditions List

### REP Rochester Epidemiology Study

### RTDC Removal to Definitive Care

### SANS Spaceflight-Associated Neuro-ocular Syndrome

### SAS Space Adaptation Syndrome

### SEVA Spaceflight Extravehicular Activity

### SME Subject Matter Expert

### SoP Standard Operating Procedure

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

9/19/2022 4:47:14 PM ICL94_Space Adaptation - Headache Cliff page: 13

---

## Source metadata

```yaml
source_filename: "space-adaptation-headache-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Headache/CliFF 119"
source_url: "https://drive.google.com/file/d/1RdDnBdvaxu3A4q68CQj2m4_rqfjn-J2N/view"
source_drive_id: "1RdDnBdvaxu3A4q68CQj2m4_rqfjn-J2N"
source_sha256: 339400f046a91e2927bf76ccf938b3503bca7dbfe8a5fcd584678b72c26c4c1a
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
