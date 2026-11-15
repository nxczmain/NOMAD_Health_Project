# Space Adaptation Space Motion Sickness CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1NIM7rstlkReHbvyp-0nZIb8XoraNc-G1/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Neurovestibular Disturbance/CliFF 119

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

ICL97_Space Adaptation - Space Motion Sickness Space Motion Sickness (SMS) is a phenomenon that is experienced by large proportion of spaceflight crew members, up to 60% (Davis et al., 1998; Ortega et al., 2019), that results in general malaise, nausea, gastrointestinal discomfort, and fatigue. There are several theories to explain its etiology including cephalad fluid shifts and neuroanatomical sensory conflicts (Russomano et al., 2019; Lackner et al., 2006). SMS is considered to be part of Space Adaptation Syndrome. This CLiFF condition only includes SMS which initiates from transitioning from gravity to microgravity. Entry Motion Sickness (EMS) or Earth-readaptation syndrome is a similar condition that results from transitioning from microgravity to gravity, and is handled in a different CLiFF.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

This condition is tied explicitly to being in spaceflight, and consequently incidence from LSAH pulls and previous IMM efforts are rated most highly.

Unfortunately, at the time of this CLiFF completion, a repeat LSAH gathering event was not possible and missions past 2017 are not represented.

Of note, the authors of this CLiFF recommend that should a repeat LSAH pull become available, the incidence for this CLiFF condition be recalculated given the many limitations and assumptions needed to interpret the prior IMM incidence calculation. In the prior CLiFF effort, entitled “Space Motion Sickness (space adaptation)”, the authors did not use LSAH data from the Walton pull as they believed that this condition was significantly under-reported in the early missions. Instead, data gathered from the Ortega et al. (2008) for Barratt et al (2008) which stemmed from Reschke et al. (1993 and 1996). The crewmembers from Mercury and Gemini (a total of n=26) were subtracted as the other conditions in IMM did not account for these missions. The authors report: “the incidences per mission are: Apollo 11/33 = 0.33; Skylab 5/9 = 0.56; Apollo-Soyuz Test Project = 0; Space Shuttle, 1981-1986 57/85= 0 .67, 1988-1998, 252/315 = 0.80.” which led to “the cumulative incidence (# events / # crew) for the US space program, from 1962 to 1998 is (325/445) = 0.73.” When reviewing this data in the recent corresponding Barratt chapter (2019), the authors of this effort noted some inconsistencies. For example, Shuttle 81-86 is reported as 74 events/103 mission. Further, the Ortega et al. (2019) hypothesize in their chapter that events were less frequent in the early missions as crewmembers had less freedom of movement in their smaller cabin sizes, which is a protective factor against space motion sickness. The previous CliFF furthers adds data from the Saile pull (2017): “Added the incidence information from the real world system. Added 95 new medical events (18 ISS for a total of 18 and 77 STS to the existing 309 events for total of 386 STS events). Added 144 persons at risk to the 445 persons at risk for a new total of 589 persons at risk (Saile, 2017).

Updated the Persons at Risk based on the revised real world system integrated incidence data. The integrated RWS persons at risk from 144 to 143 so the conditions integrated iMED value went from 589 to 588 (Saile L., 2017).” Incidence calculated for the prior CliFF was noted to be 419 events/588 persons at risk. Again, the authors of this effort do not have access to the raw LSAH data, but they are unable to reconcile why the number of events was not 420 (=325 + 95). After consultation with the biostatistician, the authors of this effort chose to not change the previous IMM incidence uncorrected as there was no way to determine which calculations were more right than others without the raw data. However, should future LSAH pulls occur, it is recommended that a new incidence be recalculated using updated data, including the early missions. Antonsen et al. (2017) was rated less highly than the data in the previous IMM CLiFF as the data compiled in these tables come directly from LSAH pulls as well and Table 1 could not be adequately reconciled with this specific condition’s definition. For example, ‘SMS’, ‘Vestibular’ and ‘Fluid Shift categories are all potentially related to this condition.” Table 1 was mislabeled as 'ISS through Exp 40' when it should read ' ISS expeditions 9 and 14 through 40'. Of note, there are 325 events (similar to what is reported in the previous IMM effort above) in Table 2. The authors of this CliFF wonder whether, the authors of the previous effort had mistakenly used this value rather than individually adding the incidences per mission as they report.

There are several other individual studies detailing both the United States and Russian (or Soviet Union) experience with SMS (Davis et al., 1988; Heer et al., 2006, Oman et al., 1996, Gontcharov et al., 2005) however these studies were downrated secondary to limited years of inclusivity and often small sample sizes.

### ANALOG LITERATURE

SMS has been attempted to be replicated by the similar conditions that evokes space adaptation-headache (ICL 94) with a head-down tilt bed rest (Prakash et al., 2015). However, unlike in space adaptation-headache, this is not a clinically relevant method for inducing SMS.

### TERRESTRIAL LITERATURE

This is a space-related condition and there are no applicable terrestrial studies. 9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 1

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 0.7121 person-missions and SD 0.01875

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence proportion given the spaceflight data (419 events over 588 person-missions) under an uninformative prior is Beta(shape1=414.55, shape2=167.6) with mean 0.7121 person-missions and SD 0.01875. Spaceflight evidence – 419 events over 588 person-missions. IP: 0.7126 (95%CI: 0.6742, 0.7489) This translates to a Beta (shape1=414.55, shape2=167.6) distribution.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

SAS Segment

### Space Adaptation

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Beta Mean 0.712102 SD 0.01875 Beta (Alpha): 414.55 (Beta): 167.6 Onset Timing (Hours) (Min): 1 (Max): 120 (Most Likely): 6 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Ortega et al., 2008 Spaceflight 3 Reshcke et al., 1993 Spaceflight 1 Reshcke et al., 1993 Spaceflight 1 Ortega et al., 2019 Spaceflight 3 Saile et al., 2017 Spaceflight 3 Antonsen et al., 2017 Spaceflight 2 9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 2

| Citation | Source | LOC Value |
| ----------------------- | ----------- | --------- |
| Davis et al., 1988 | Spaceflight | 1 |
| Heer et al., 2006 | Spaceflight | 1 |
| Oman et al., 1996 | Spaceflight | 1 |
| Gontcharov et al., 2005 | Spaceflight | 1 |
| Prakash et al., 2015 | Analog | 0 |

Spaceflight incidence data was rated the highest as this is a condition, by definition, that can only occur in space. Analog and terrestrial studies would not accurately represent incidence for this condition. 9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

This CLiFF condition is event-based and consequently there are no known preventative measures. However, to help exclude other causes of neurological pathologies, at L-21/18 months, if greater than 2 years since ISS section, crewmembers undergo MRI/MRA neuroimaging, a full annual medical exam L-6/9 months and brief medical exams at L-7/10 and L-1/2 days by the Flight Surgeon.

### BEST CASE SCENARIO DEFINITION

Space motion sickness including mild to moderate symptoms (e.g. loss of appetite, malaise, stomach awareness, 2 or fewer episodes of emesis, resolves within 72 hours, causes no or minimal performance decrement).

### WORSE CASE SCENARIO DEFINITION

SMS with severe and persistent symptoms (e.g. need to keep head from moving, greater than 2 episodes of emesis, significant performance decrement, persists for greater than 72 hours).

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

- Per the prior IMM iteration: “The BC/WC percentages were updated based on the empirical data from the Real World System data set. We are

estimating our worst-case scenario at 3.19% (3/94), thus our best case is 96.81% 91/94 (Saile L., 2017).” However, in Davis et al. (1988) and replicated in Barratt et al. (2019), severe cases were defined almost exactly to the worst-case definition (“…more than two episodes of vomiting...”) and accounted for 15% of all SMS cases., whereas mild cases were 49% and moderate cases were 36%. The reason for the discrepancy between these two sources is currently unclear, but the authors of this CliFF chose to use the more recent reported LSAH calculations given that it is inclusive of the later missions. However, should a LSAH pull occur in the next effort, the authors recommend repeating this calculation and justifying the discrepancy. TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Saile et al., 2017 Spaceflight 3 Davis et al., 1988 Spaceflight 2 Only spaceflight data was utilized given the condition’s definition. Worst-case probability estimates from the previous IMM CLiFF effort were used as there had been no further studies published in the interim. 9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

Condition Case Scenario Composite Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best mean: 0.7121 97 - 97 100 0.53 13.3138 0 72 0 0 0 0 0

Case (TBC) person-missions SD: 0.01875 Treated Worst 3 - 3 100 0.53 30.9593 72 336 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.53 33.3245 0 72 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.53 66.7287 72 336 0 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

Space motion sickness is part of space adaptation syndrome and is thought as a response of the neuro-vestibular system adapting to microgravity (Ortega et al., 2019). Symptoms of this condition have included nausea, pallor, cold sweating, increased salivation, drowsiness, pain, and central nervous system defects (Graybiel et al., 1968). Most symptoms develop within the first hours of microgravity but have begun to resolve or have dissipated completely by 72-96 hours (Lackner et al., 2006). The best-case adheres to this typical pattern and the worst-case refers to a particularly symptomatic case that continues persist past the fourth day. Given that this condition only exists in microgravity, there is no acceptable RTDC terrestrial-surrogate for this condition.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Symptoms of SMS can occur within minutes of being in microgravity (Ortega et al., 2019); hence the lower bound for duration was set at zero hours.

The treated worst-case is defined as having both severe and persistent symptoms, greater than 72 hours. Consequently, the upper bound of duration was set at 72 hours. TREATED WORST CASE SCENARIO (TWC) COMMENTS By definition, the lower bound for the worst-case is set at 72 hours. In Matsnev et al. (1983) there was a case of SMS that continued over 14 days inflight, creating the upper bound. In the Russian long-duration mission experience, some astronauts intermittently experienced symptoms throughout their entire stay during microgravity (Ortega et al.2019; Kornilova et al., 1996). Still, these occurrences were described as relatively benign and did not affect mission tasks. To date, there have been no instances of RTDC or LOCL secondary to this condition in spaceflight.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS There exists little accessible data regarding duration for the untreated best case. Subject matter expert consensus was that it would be no less than the treated best-case-scenario. Again, RTDC and LOCL are not expected for this condition.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Duration is expected to be no less than the treated worst-case-scenario. To date, there have been no instances of RTDC or LOCL secondary to this condition in spaceflight TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ---------------------- | ----------- | --------- | --- |
| Ortega et al., 2019 | Spaceflight |  |  |
| Matsnev et al., 1983 | Spaceflight |  | 4 |
| Kornilova et al., 1996 | Spaceflight |  |  |

The duration of SMS has been well characterized in several reviews, cross-sectional surveys and case reports.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------ | ----------- | --------- | --- |
| Walton, 2010 | Spaceflight |  |  |

4

| Saile et al., 2017 | Spaceflight |  |  |
| ------------------ | ----------- | --- | --- |

9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 6

Only spaceflight data was utilized given the condition’s definition.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Walton, 2010 Spaceflight 4 Saile et al., 2017 Spaceflight Only spaceflight data was utilized given the condition’s definition.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Space adaptation motion sickness is a common condition experienced by most astronauts. It can often be exacerbated by frequent rapid head movements soon after entering microgravity, and mitigated by limiting such movements until the brain has had time to adapt to the new surroundings.

- CNES: NONE

### Diagnostic Scope and Resourcing

Diagnosis relies on history and physical exam Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.53 hours for set up, history, and physical exam.

CP1 WC (Treated or Untreated): 0.53 for a set up, history, and a more thorough exam including neurological, fundoscopic, and vision testing to rule out other, more dangerous causes of headaches.

This condition requires a Scope of Practice 4 to manage and rule out other similar presenting conditions, assess treatment response, and assess fitness for duty. However, most of the treatment will not rise above level 1 and the more common best case requires only SoP 1.

### Treatment Scope and Resourcing

The best case is mild and treatment includes oral antiemetics. The worst case has the same treatment but lasts longer and will require additional doses of antiemetics. Ondansetron is given a primacy of 1. Anti-vertigo medications are also included for the worst case. and a reassessment of the patient. Communications and Support Needs; Communications are not expected to be necessary beyond the routine medical ground communications given the context and frequency of this condition. However, it is expected that routine ground communication will be present and available to assist with treatment.

## References

Barratt, Michael R., Ellen S. Baker, and Sam L. Pool. 2019. "Principles of clinical medicine for space flight." In. New York, NY: New York, NY : Springer.

### IMM CLIFF RECONCILATION COMMENTS

The predecessor to this CLiFF was entitled “Space Motion Sickness (space adaptation).” Given lack of access to the original LSAH pulls and this being a condition that only occurs in microgravity, many of the resources between this CLiFF and the prior iteration remain the same. For this effort, with the help of a biostatistician, incidence data was updated to reflect person-missions rather than person-years as this condition can only be expected to occur at the initiation of spaceflight. The authors of this CLiFF did not agree with the duration values in the prior effort, and these were updated to better reflect the best- and worst-case definitions with a broader literature search.

### LIMITATIONS SUMMARY

- The incidence should be considered a floor as some crewmembers may have minimized or denied their symptoms over fear of not being

considered for future crew assignment. This was probably more of an issue during the Shuttle era when spaceflight lasted 2 weeks or less than it is 9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 7

during long-duration flights. • The authors did not have access to the original LSAH data and thus there was an implied dependence on already published sources. In the prior IMM CLiFF, the Walton LSAH pull was not used, and the authors of this CLiFF were unable to reconcile their calculations. • There may be some overlap between this condition and other CLiFF conditions, such as space adaptation headache. • Several assumptions needed to be made regarding duration and the untreated cases given lack of available studies. 9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  | 145 |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  | 89 |  | 145 |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  |  |  | 145 |  | 13 |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 |  | 89 |  | 145 |  | 13 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  |  | Translation & |  |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  |  | Extremity Standing (g) |  | Equipment | Ops |  | Category |  |  |
| --- | ----- | --- | --- | ---------------------- | -------------- | --------- | --- | --------- | -------- | --- | --- |
|  |  |  |  |  | (microgravity) |  |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best | 132 |  |  |  |  |  | 211 | 501 | 3763 | 0.133138 | 13.3138 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  | 211 | 1254 | 3763 | 0.333245 | 33.3245 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  |  |  |  |  | 211 | 1165 | 3763 | 0.309593 | 30.9593 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 | 22 | 34 |  | 211 | 2511 | 3763 | 0.667287 | 66.7287 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | -------------- | --------------- | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  |  | Communications | personal Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple | Complex |  |  |  | pulmonary |  |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 9

Total Human Translation & Total Tasks Hand Lower Ambul & Don/Doff Pressure System Hand (Any) Upper Extremity Stabilization Impaired By TI Decimal TI % (Dom) Extremity Standing (g) Equipment Ops Category (microgravity) Condition

### Tasks Full

Mission Treated Best 0 3763 0 0 Case (TBC) Untreated Best 0 3763 0 0 Case (UTBC) Treated Worst 0 3763 0 0 Case (TWC) Untreated Worst 0 3763 0 0 Case (UTWC) 9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 10

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

9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 11

## REFERENCES

Reference

1. Antonsen, Erik, Tina Bayuse, Rebecca Blue, Vernie Daniels , Melinda Hailey, Sam Hussey, Eric Kerstman, Mike Krihak, Kara Latorella, Jennifer

Mindock, Jerry Myers, Robert Mulcahy, Rebekah Reed, Davis Reyes, Michelle Urbina, and Marlei Walton. 2017. "Evidence Report: Risk of Adverse Health Outcomes and Decrements in Performance due to In-Flight Medical Conditions." In.

2. Barratt, Michael R., Ellen S. Baker, Sam L. Pool, and SpringerLink (Online service). 2019. "Principles of Clinical Medicine for Space Flight." In,

XVIII, 936 p. 362 illus., 268 illus. in color. New York, NY: Springer New York : Imprint: Springer,.

3. Davis, J. R., J. M. Vanderploeg, P. A. Santy, R. T. Jennings, and D. F. Stewart. 1988. 'Space motion sickness during 24 flights of the space

shuttle', Aviat Space Environ Med, 59: 1185-9.

4. Gontcharov, I. B., I. V. Kovachevich, S. L. Pool, O. L. Navinkov, M. R. Barratt, V. V. Bogomolov, and N. House. 2005. 'In-flight medical incidents

in the NASA-Mir program', Aviat Space Environ Med, 76: 692-6.

5. Heer, M., and W. H. Paloski. 2006. 'Space motion sickness: incidence, etiology, and countermeasures', Auton Neurosci, 129: 77-9.

6. Kornilova, L. N., Ch Mueller, and L. M. Chernobyl'skii. 1996. 'Phenomenology of spatial illusory reactions under conditions of weightlessness',

Hum Physiol, 21: 344-51.

7. Lackner, James R., and Paul DiZio. 2006. 'Space motion sickness', Experimental Brain Research, 175: 377-99.

8. Matsnev, E. I., I. Y. Yakovleva, I. K. Tarasov, V. N. Alekseev, L. N. Kornilova, A. D. Mateev, and G. I. Gorgiladze. 1983. 'Space motion sickness:

phenomenology, countermeasures, and mechanisms', Aviat Space Environ Med, 54: 312-7.

9. Oman, C. M., C. F. Pouliot, and A. Natapoff. 1996. 'Horizontal angular VOR changes in orbital and parabolic flight: human neurovestibular

studies on SLS-2', Journal of Applied Physiology, 81: 69-81.

10. Ortega HJ, Harm DL. 2008. 'Space and Entry Motion Sickness.' in Pool S Barratt M (ed.), Principles of Clinical Medicine for Space Flight

(Springer: New York).

11. Ortega HJ, Harm DL, Reschke MF. 2019. 'Space and Entry Motion Sickness.' in Baker E. Barratt M, Pool S. (ed.), Principles of Clinical

- Medicine for Space Flight (Springer: New York, NY).

12. Prakash, M., R. Fried, O. Götze, F. May, P. Frings-Meuthen, E. Mulder, J. Valentini, M. Fox, M. Fried, W. Schwizer, and B. Misselwitz. 2015.

'Microgravity Simulated by the 6° Head-Down Tilt Bed Rest Test Increases Intestinal Motility but Fails to Induce Gastrointestinal Symptoms of Space Motion Sickness', Dig Dis Sci, 60: 3053-61.

13. Reschke MF, Harm DL, Parker DE, Sandoz G, Homick JL, Vanderploeg JM. 1993. 'Neurophysiologic Aspects Space Motion Sickness.' in

Leach Huntoon C Nicogossian AE, Pool SL (ed.), Space Physiology and Medicine (Williams & Wilkins: Media, PA).

14. Reschke MF, Kornilova L, Harm DL, Bloomberg J, Paloski WH. 1996. 'Neurosensory and Sensory Motor Function.' in Antipov V Leach

Huntoon C, Grigoriev A (ed.), American Institute of Aeronautics and Astronautics (Reston, VA).

15. Russomano, T., M. da Rosa, and M. A. Dos Santos. 2019. 'Space motion sickness: A common neurovestibular dysfunction in microgravity',

Neurol India, 67: S214-s18.

16. Saile L., Boley L., Kerstman E. 2017. 'Integration RWS ISS STS Observed Incidence V2.'.

17. Walton M, Kerstman E. 2010. ' IMM In-flight Compilation v20100414_Incidence_calculation'.

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

9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 12

### CliFF Clinical Finding Form

### CMO Crew Medical Officer

### COMFORT Clinical Outcome Metrics for Optimization of Robust Training

CP1 Clinical Phase 1 CP2 Clinical Phase 2 CP3 Clinical Phase 3

### CRL Clinical Resource Level

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

9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 13

### PA Physician Assistant

### PDQ Pain Disability Questionnaire

### PFCL Proposed Future Conditions List

### PPE Personal Protective Equipment

### PTRS Project Technical Requirements Specification

### PRL Pharmaceutical Resource Level

### QTL Quality Time Lost

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

9/19/2022 4:51:25 PM ICL97_Space Adaptation - Space Motion Sickness Cliff page: 14

---

## Source metadata

```yaml
source_filename: "space-adaptation-space-motion-sickness-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Neurovestibular Disturbance/CliFF 119"
source_url: "https://drive.google.com/file/d/1NIM7rstlkReHbvyp-0nZIb8XoraNc-G1/view"
source_drive_id: "1NIM7rstlkReHbvyp-0nZIb8XoraNc-G1"
source_sha256: a3a7922ee413e2e28ca9cc7c31a80f740a669ad1fe9a06e33302555b99e642f1
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
