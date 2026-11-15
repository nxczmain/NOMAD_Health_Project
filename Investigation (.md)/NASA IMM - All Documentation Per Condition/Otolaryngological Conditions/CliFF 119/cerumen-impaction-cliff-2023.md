# Cerumen Impaction CLiFF 2023

[View original PDF](https://drive.google.com/file/d/10TOdiRit6rxOd8ZdZt_kuQ6hXkPAf6ew/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Overview](#overview)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

### ICL24_Cerumen Impaction

Cerumen (earwax) impaction is a common and often benign medical complication but can be accompanied by more serious symptoms including aural fullness, hearing loss, ear pain, tinnitus (ringing in the ears), and increase risk of otitis externa (ear infection). It occurs when the natural clearing process is impaired and often is iatrogenic in that cotton swabs or digital manipulation can pack cerumen deep into the ear canal. Irrigation of the ear canal and cerumenolytics are common therapies which are also performed with ease terrestrially, however, may be more complicated in a microgravity setting. Manual removal may be required, however is associated with elevated risks of canal laceration or eardrum perforation (Horton et. al., 2020).

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

There are no data regarding spaceflight incidence of cerumen impaction.

### ANALOG LITERATURE

There are no data regarding analog incidence of cerumen impaction.

### TERRESTRIAL LITERATURE

Eekhof et al 2001 discusses a 1994 Dutch study (Lamberts, 1994) which reported an incidence of cerumen impaction in 3.9% of patients, however we cannot analyze that data further. Guest et al 2004 compiles the data from a number of smaller studies revealing an incidence of hearing loss from cerumen impaction to be 2.1%. Lastly, Yang et al 2016 reports an incidence rate of 2.68% after evaluating over 1 million cerumen disimpaction claims to Medicare over a year.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 0.0268 SD 2.358E-5

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate given the reference data (1,323,845 events in 49.4 million people during 1 year) under an uninformative prior is Gamma(shape=1291760, rate=48200017) with mean 0.0268 and SD 2.358E-5. While unfortunately there are not spaceflight or analog data to guide incidence estimation, numerous terrestrial studies have been performed attempting to provide epidemiologic data on cerumen impaction. As explained in Table 2, we had the highest confidence in Yang et. al., 2016 which evaluated 1,323,845 cerumen disimpactions over 49.4 million patients over a year via Medicare clams. From this an incidence rate was calculated to be: 0.0268 (95%CI: 0.02678, 0.02684).

TABLE 1. INCIDENCE MODEL

### Incidence Details

11/22/2022 8:39:56 AM ICL24_Cerumen Impaction Cliff page: 1

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0268 SD 2.358E-05 Gamma (Shape): 1.29176E+06 (Rate): 4.82E+07 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Schwartz, 2017 Terrestrial 2 Eekhof, 2001 Terrestrial 2 Roeser, 1997 Terrestrial 2 Guest, 2004 Terrestrial 2 Yang, 2016 Terrestrial 3 With exception of Yang et al 2016, all of these studies report incidence numbers based on estimations or provide strictly prevalence numbers. Yang includes the data in terms of events and patients from records directly as opposed to citing secondary sources and thus garnered the highest level of confidence and was used exclusively for chosen incidence above. With that said, with limited terrestrial data and no analog or spaceflight data, confidence in this incidence is limited. 11/22/2022 8:39:56 AM ICL24_Cerumen Impaction Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Hearing assessments, consisting of audiometric tests at specified frequencies within the range of 250 Hz - 10,000 Hz, tympanometry, and additional audiological tests as determined by an audiologist are performed pre-flight, on orbit, and post-flight.

### BEST CASE SCENARIO DEFINITION

Cerumen impaction that is easily identified and removed on first attempt.

### WORSE CASE SCENARIO DEFINITION

Cerumen impaction that results in pain, tinnitus, interferes with mission objectives, or requires multiple attempts at removal. (Note "hearing loss" is a separate condition). CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

A worst-case probability is difficult to determine for a number of reasons. First, at least 50% of patients have a symptom such as pain or tinnitus that brings them to the doctor in the first place, however, these symptoms may not be significantly interfering with ADLs. Second, there is not good data on failure to disimpact or immediate recurrent risk, however, one study found a 2.1% failure rate combined with 3.8% of patients continuing to have pain and 3.8% of patients suffering from ear bruising or laceration. These three combined for a 9.7% complication rate (Gabriel 2015). Lastly, children under 20 and adults over 61, in addition to those with intellectual disability or medical comorbidities, are more likely to suffer from excessive symptoms or complications, and thus the astronaut population may be at less risk than the terrestrial literature may present. Unfortunately, it is not known whether microgravity or other factors unique to spaceflight might increase the risk of cerumen impaction. In light of all of these considerations and uncertainties, a 10% worst case probability is reasonable.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Gabriel, 2015 Terrestrial 3 Adegbiji, 2014 Terrestrial 2 Guest, 2004 Terrestrial 2 Yang, 2016 Terrestrial 2 All evidence is terrestrial and is limited by numbers, population, and environment. We have some confidence in the complication rates presented in Gabriel et. Al. 2015 as discussed above. 11/22/2022 8:39:56 AM ICL24_Cerumen Impaction Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 0.0268 SD 90 - 90 100 0.533 100 0.25 0.36 0 0 0 0 0 Case (TBC) 2.358E-5 Treated Worst 10 - 10 100 1.416 100 0.25 0.36 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.533 0 120 336 1.17 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.416 27.9298 120 336 27.93 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 11/22/2022 8:39:56 AM ICL24_Cerumen Impaction Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Cerumen impaction is a very common every-day occurrence for humans on Earth. It rarely leads to complication or significantly complicates activities of daily living. Further, there is a paucity of evidence evaluating durations, RTDC, or LOCL in the setting of these terrestrial symptoms.

However, though these measures are estimated by expert clinical opinion, given the relatively benign nature of cerumen impaction, it is logical to all medical professionals that RTDC or LOCL would be 0%. It should be noted that irrigation, which is a typical treatment for cerumen impaction on Earth would be a more difficult procedure to perform in space because of fluid containment issues. Manual disimpaction may be an alternative consideration, however, it is associated with elevated risks of canal laceration or eardrum perforation.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Pavlidis, 2005 has revealed previous durations of treatment using water irrigation and syringes ranging from 0.25-0.36 hours to disimpact the ear.

RTDC or LOCL would not be expected for this condition.

TREATED WORST CASE SCENARIO (TWC) COMMENTS This review revealed no studies that specifically differentiate between the provided best and worst-case definitions. This is likely due to the benign nature of the condition and the clinical practice guideline (Schwartz, 2017) that asymptomatic cerumen impaction should not be routinely treated as long as the tympanic membrane can be adequately examined. With that said, Pavlidis, 2005 has revealed previous durations of treatment using water and syringes ranging from 0.25-0.36 hours to disimpact the ear. RTDC or LOCL would not be expected for this condition.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Especially in light of the fact that most patients with cerumen impaction that meets the BC definition do not present for care, it is difficult to estimate the number of cerumen impactions that resolve spontaneously. Keane, 1995 revealed that after 5 days of observation 5% of those studied had complete clearing of ear spontaneously and 26% had moderate clearing of the ear. Thus, while 31% of participants likely had spontaneous improvement of the disimpaction, there is a paucity of evidence evaluating the upper limit of UTBC scenarios. Michaudet, 2018 reviews numerous treatments for cerumen impaction and reveals that some non-irrigation home remedies may take up to 14 days. As these are the max ranges for non-first-line therapy they are the closest reasonable estimation for a max untreated scenario. As with treated scenarios, an exhaustive literature review does not find evidence concerning for RTDC or LOCL.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Untreated worst-case scenarios are best felt to operate under the same considerations as UTBC scenarios. No additional literature affected duration, RTDC, or LOCL. TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Pavlidis, 2005 Terrestrial Keane, 1995 Terrestrial 2 Michaudet, 2018 Terrestrial Schwartz, 2017 Terrestrial These studies are limited by being terrestrial only, reporting bias, and incomplete reporting of timing of symptoms with or without treatment, thus the level of confidence in this data remains neutral.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC) 11/22/2022 8:39:56 AM ICL24_Cerumen Impaction Cliff page: 5

| Citation | Source | LOC Value |  |
| -------------- | ----------- | --------- | --- |
| Pavlidis, 2005 | Terrestrial |  |  |
| Keane, 1995 | Terrestrial |  |  |

2

| Michaudet, 2018 | Terrestrial |  |  |
| --------------- | ----------- | --- | --- |
| Schwartz, 2017 | Terrestrial |  |  |

The LOC remains neutral in that there is only terrestrial data without evacuation data from any spaceflight or analog source. With that said, while the LOC is neutral based off of the data, the LOC that RTDC would likely remain 0% remains high given the relatively benign nature of this condition. TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| -------------- | ----------- | --------- | --- |
| Pavlidis, 2005 | Terrestrial |  |  |
| Keane, 1995 | Terrestrial |  |  |

2

| Michaudet, 2018 | Terrestrial |  |  |
| --------------- | ----------- | --- | --- |
| Schwartz, 2017 | Terrestrial |  |  |

The LOC remains neutral in that there is only terrestrial data without evacuation data from any spaceflight or analog source. With that said, while the LOC is neutral based off of the data, the LOC that LOCL would likely remain 0% remains high given the relatively benign nature of this condition. CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Cerumen, or earwax, is substance comprised of glandular secretions and exfoliated squamous epithelium that can accumulate in ear canals.

Although this substance is typically expelled from the ear canal in a self-cleaning manner via propulsion stemming from jaw improvement, in a limited number of people, the substance can become stuck or obstructed (Michaudet et al. 2018). When cerumen impaction occurs, this can lead to aural fullness, pruritis, otalgia, discharge, odor, hearing loss and tinnitus (McCarter et al. 2007).

The best-case scenario requires minimal intervention. In terrestrial conditions, most subjects who experience the best-case scenario would not seek medical care. In the worst-case, an intervention is required given the high communication-related task-impairment associated with this condition. In the worst case, although not explicitly stated, a conductive hearing loss would be expected secondary to the occlusion of the ear canal. However, related conditions including hearing loss, barotrauma, otitis externa, otitis media are all covered in separated CRT conditions.

- CNES: None

### Diagnostic Scope and Resourcing

In the best case, the diagnosis will be made via history and physical exam. Given the benign nature of this condition, ground communications are not resourced for the best case. Diagnostics in the worst case do not change except for the addition of inflight audiometry to help provide a simple differential diagnosis. Although we expect the diagnosis to be readily apparent on exam with an otoscope, inflight audiometry can serve as a reserve diagnostic in cases when an otoscope cannot be immediately provided. For this effort, we made inflight audiometry a necessity of ‘zero’ as this condition can still be treated without this technology; still, for most missions, we expect crewmembers to have access to inflight audiometry as it is necessary to treat other CRT conditions. Inflight audiometry not only serves to help quantify the severity of and expected hearing loss but can also differentiate between the type of hearing loss by quantifying air- and bone conduction thresholds. With this technology, there is no need to possess a tuning fork to conduct Weber and Rinne tests. Further, if a conductive loss is identified, the latest iteration of the inflight audiometric test (KUDUwaveTM) can perform tympanograms. In the worst case, we would expect a Type B tympanogram, or a flat curve, given the lack of compliance of the cerumen impaction. Of note, tympanometry and pneumatic otoscopy have equivalent sensitivity (approximately 90%) and specificity (70%-80%); there is concern that pneumatic otoscopy may be difficult to perform in microgravity. Given the “interference with mission objectives” explicitly stated in this condition, CRT group consensus was to resource ground communications for the worst-case scenario.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.53 hours This is the longest reasonable time to complete the task for a crewmember (adjusted for being in the spaceflight environment) 1) to remove a crewmember from duties 2) obtain a history and 3) examine the patient CP1 WC (Treated or Untreated): 1.42 hours This is the longest reasonable time to complete the task for a crewmember (adjusted for being in the spaceflight environment) 1) to remove a crewmember from duties 2) obtain a history 3) examine the patient 4) conduct and interpret an inflight audiometry test 5) set up for ground

| 11/22/2022 8:39:56 AM | ICL24_Cerumen Impaction Cliff |  | page: 6 |
| --------------------- | ----------------------------- | --- | ------- |
communications. The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a two: this is at Paramedic/Military medic

### Treatment Scope and Resourcing

In the best-case scenario, treatment is limited to irrigation. In general, there are only three recommended cerumen removal techniques in terrestrial conditions: irrigation, topical cerumenolytics and manual removal (Schwartz et al. 2017). Cerumenolytics require multiple doses to be effective, negating their usefulness in the best-case scenario. During microgravity conditions, manual removal is a less favorable option given the risk of tympanic membrane perforation. In the worst-case scenario, cerumenolytics are preferred given the lack of risk of canal or membrane trauma— albeit, these may take longer to be effective. A recent Cochrane review revealed that water or saline are non-inferior to other solutions as cerumenolytics (Aaron et al. 2018; Burton et al. 2009). Consequently, to save resources and space, this CRT prioritizes water and saline over commercial preparations. For severe impactions, terrestrial patients are sometimes referred to otolaryngologists for manual removal with a binocular microscope (Schwartz et al. 2017); in spaceflight, a binocular microscope would not be available. Therefore, manual removal will need to be completed with a handheld otoscope or headlamp. Given the limited visibility with these instruments, CRT consensus was to allocate for only blunt tools inside the canal to decrease the risk of tympanic membrane trauma.

### Communications and Support Needs

In the best-case scenario, diagnosis and course of treatment is uncomplicated and likely within the scope of care of onboard crew members. In the worst-case condition, ground communications are necessary given the sudden impairment of the affected crewmember and the need to ensure an accurate diagnosis.

### IMM CLIFF RECONCILATION COMMENTS

There was no previous IMM CLiFF for this condition.

### LIMITATIONS SUMMARY

There are numerous limitations of the data regarding the diagnosis and management of cerumen impaction in spaceflight. Likely the largest of these limitations is that our robust review revealed no spaceflight or analog manuscripts that were able to inform these measures. Another large limitation of this work is that cerumen impaction is a relatively benign medical complication for which most people can expectantly manage at home or attempt home remedies or over the counter medications for, such as dripping olive oil into the ears or using water. Lastly, the literature on cerumen impaction is very limited in separating out complicated and uncomplicated impactions, especially in ways that meet our definitions of BC and WC. 11/22/2022 8:39:56 AM ICL24_Cerumen Impaction Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  | 664 |  |  |  | 44 |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  |  |  | Translation & |  |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  |  | Extremity | Standing (g) |  | Equipment | Ops |  | Category |  |  |
| --- | ----- | --- | --- | --------- | ------------ | -------------- | --------- | --- | --------- | -------- | --- | --- |
|  |  |  |  |  |  | (microgravity) |  |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (UTBC) Treated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (TWC) Untreated Worst

|  | 132 |  |  |  |  |  |  | 211 | 1051 | 3763 | 0.279298 | 27.93 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ----- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  |  | Inter- |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | -------------- | -------- | ------ | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  |  | Communications | personal | Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple | Complex |  |  |  |  | pulmonary |  |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  | 44 |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  | 664 |  |  |  | 44 |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --------------------- | --- | --- | --- | -------------------------- | ----------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| 11/22/2022 8:39:56 AM |  |  |  |  | ICL24_Cerumen Impaction Cliff |  |  |  |  |  |  | page: 8 |
Total Human

|  |  | Translation & | Total Tasks |  |  |
| --- | --- | ------------- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) | Extremity Standing (g) | Equipment Ops | Category |  |
| --- | ----- | ---------------------- | ------------- | -------- | --- |

(microgravity) Condition Tasks Full Mission Treated Best

|  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  |  | 44 | 3763 0.0116928 | 1.17 |
| --- | --- | --- | --- | -------------- | ---- |

Case (UTBC) Treated Worst

|  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

|  | 132 |  | 211 1051 | 3763 0.279298 | 27.93 |
| --- | --- | --- | -------- | ------------- | ----- |

Case (UTWC)

| 11/22/2022 8:39:56 AM |  | ICL24_Cerumen Impaction Cliff |  |  | page: 9 |
| --------------------- | --- | ----------------------------- | --- | --- | ------- |
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

While most levels of Task Impairment increase from treated best case to untreated worst case, the CP2 TI warrants explanation. In the treated scenarios, there is a high level impairment for the very short duration (<30 minutes) of treatment while astronauts are likely undergoing irrigation or manual disimpaction. For untreated best case scenarios, the TI is 0 given neither the best case cerumen impaction itself or treatment is significantly interfering with tasks. For untreated worst case scenarios, treatment is not interfering, however symptoms may be interfering with some tasks (and for a much longer duration 5-14 days rather than < 30 minutes).

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

11/22/2022 8:39:56 AM ICL24_Cerumen Impaction Cliff page: 10

| 11/22/2022 8:39:56 AM | ICL24_Cerumen Impaction Cliff | page: 11 |
| --------------------- | ----------------------------- | -------- |
## REFERENCES

Reference Horton GA et al. Cerumen Management: An updated clinical review and evidence-based approach for primary care physicians. J Prim Care Community Health. 2020; 11:215-132720904.

Schwartz, S. R., A. E. Magit, R. M. Rosenfeld, B. B. Ballachanda, J. M. Hackell, H. J. Krouse, C. M. Lawlor, K. Lin, K. Parham, D. R. Stutz, S.

Walsh, E. A. Woodson, K. Yanagisawa, and E. R. Cunningham, Jr. 2017. 'Clinical Practice Guideline (Update): Earwax (Cerumen Impaction)', Otolaryngol Head Neck Surg, 156: S1-s29.

Eekhof JA et al (2001). "A quasi-randomized controlled trial of water as a quick softening agen of persistent earwax in general practice.

Roeser RJ, Ballachanda BB. Physiology, pathophysiology, and anthropology/epidemiology of human earcanal secretions. J Am Acad Audiol 1997;8:391– 400. Guest JF, Greener MJ, Robinson AC, et al. Impacted cerumen: composition, production, epidemiology and management. QJM 2004;97:477– 88 Yang EL, Macy TM, Wang KH, et al. Cost burden of cerumen extraction in Medicare beneficiaries. JAMA Otolaryngol Head Neck Surg. 2016;142:157-161. Aaron, K., T. E. Cooper, L. Warner, and M. J. Burton. 2018. 'Ear drops for the removal of ear wax', Cochrane Database Syst Rev, 7: CD012171.

Burton, M. J., and C. Doree. 2009. 'Ear drops for the removal of ear wax', Cochrane Database Syst Rev: CD004326.

McCarter, D. F., A. U. Courtney, and S. M. Pollart. 2007. 'Cerumen impaction', Am Fam Physician, 75: 1523-8.

Michaudet, C. and J. Malaty (2018). "Cerumen impaction: diagnosis and management." American family physician 98(8): 525-529.

Adegbiji WA et al. Earwax Impaction: symptoms, predisposing factors and perception among Nigerians. J Fam Med Prim Care 2014;3(4):379-382.

Gabriel OT. Cerumen impaction: challenges and management profile in a rural health facility. Niger Med J. 2015;56(6):390-393.

Pavlidis C, Pickering JA. Water as a fast-acting wax softening agent before ear syringing. Aust Fam Physician. 2005 Apr;34(4):303-4. PMID: 15861762. Keane EM, Wilson H, McGrane D, Coakley D, Walsh JB. Use of solvents to disperse ear wax. Br J Clin Pract. 1995 Mar-Apr;49(2):71-2. PMID: 7779647.

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

11/22/2022 8:39:56 AM ICL24_Cerumen Impaction Cliff page: 12

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

11/22/2022 8:39:56 AM ICL24_Cerumen Impaction Cliff page: 13

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

11/22/2022 8:39:56 AM ICL24_Cerumen Impaction Cliff page: 14

---

## Source metadata

```yaml
source_filename: "cerumen-impaction-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/10TOdiRit6rxOd8ZdZt_kuQ6hXkPAf6ew/view"
source_drive_id: "10TOdiRit6rxOd8ZdZt_kuQ6hXkPAf6ew"
source_sha256: 67afe7a9b092e7eefb2c2ea2ac0504fc9d7812bd956f4ff98e22e3d30f38116c
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
