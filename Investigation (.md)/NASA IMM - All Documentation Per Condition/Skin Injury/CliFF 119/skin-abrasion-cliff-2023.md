# Skin Abrasion CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1oyJIhpGGoixzcMk94MNEhX6yG2lUf68W/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

### ICL86_Skin Abrasion

Classically, a skin abrasion is defined as the lifting or removal of the epithelium, usually by shearing forces; however, this condition can occasionally result from transverse forces (blunt injuries) (Shrestha et al., 2020). Abrasions differ from lacerations which involve the deeper layers of the skin and often the subcutaneous tissue. Most abrasions are considered minor injuries that do not require any medical treatment in most terrestrial scenarios.

Rarely, depending on the surface area involved, the comorbid conditions of patient, and the surrounding environment, wound infections may develop.

To prevent infections, especially in resource-poor conditions such as spaceflight, preventative care should be initiated upon occurrence. Treatment involves cleansing the wound, removing foreign bodies, potentially applying a topical medication, and covering the injury. Superficial skin trauma is common among spaceflight participants and likely more prevalent with longer missions given that epidermal thinning results from spaceflight (Dunn et al., 2018; Barratt et al., 2019). Even though the severity of this condition is considered much less that many other CLiFF pathologies, given its frequent occurrence (albeit it is still likely underreported), it has the propensity to be resource intense.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Spaceflight literature were derived from two LSAH data gathering events (Walton, 2010; Saile et. al, 2017), a NASA white paper (Antonsen et al.,

2017) and a research article (Scheuring et al., 2009). Unfortunately, the authors of this CLiFF did not have direct access to the data from those

LSAH events. Consequently, information was taken detailing these events from the previous IMM CLiFF entitled "Skin Abrasion" Of importance, for this effort, condition definitions changed and this CLiFF specifically excludes EVA related events. In the prior CliFF, there were no means to distinguish skin abrasion events from those that occurred secondary to EVA actions. At the time of this CLIFF completion, a repeat LSAH data gathering event was not possible and missions past 2017 are not represented. The Antonsen paper did describe events related to EVAs in one of its tables, and thus this source was rated higher than the previous IMM data. Of note, it was observed that in the Antonsen et al. paper Table 1 was mislabeled as 'ISS through Exp 40' when it should read ' ISS expeditions 9 and 14 through 40'; this CLIFF corrects for that error. In Scheuring et al., a database of inflight musculoskeletal injuries among United States astronauts was analyzed. There were a total for 231,724.7 inflight hours (up to Expedition 13). In total, there were 70 abrasions with 21 being attributed to EVA suits and one attributed to EVA activity. As such, there were 48 incidents that related to this CLiFF condition (=70-21-1).

### ANALOG LITERATURE

In Thomas et al. (2003), a retrospective analysis was conducted of the medical records between January 1, 1997 and September 30, 2000 of 1389 officers and 11,952 enlisted crew members. This accounted for a total of 215,086 and 1,955,521 person-days at sea, respectively. The subjects in this study were a highly screened, healthy population and the study was conducted to develop epidemiological data to determine risk in space medicine. “Skin and Subcutaneous Tissue Disorders” had a reported 18 officer events for 3.1/100 person-years and 436 enlisted men events for 8.1/100 person-years. Unfortunately, there were no further details regarding the types of pathologies involved. In a prospective epidemiological study describing the distribution and rates of medical conditions suffered during a physically demanding 25-week Naval Special Warfare Center indoctrination training of male U.S. Navy SEALs, Linenger et al. (1993) reported one “abrasion/friction burn” event in 482 trainee-months at risk (0.2 per 100 trainee months). McLaughlin et al. (2006) analyzed injury patterns during the 2003 Subaru Primal Quest Expedition Length Adventure Race was held in Lake Tahoe, CA, from September 5 to 14, 2003. Over the 10-day study period participants completed mountain biking, trekking, flat-water boating, in-line skating, white-water boating and orienteering legs over a 455-mile course. Of the 406 injuries and illnesses recorded, “abrasion/contusion(s)” encompassed 43 (10.6%) of the events.

### TERRESTRIAL LITERATURE

Ootes et al. (2012) queried the National Electronic Injury Surveillance System for all upper extremity injuries presenting to US emergency departments in 2009. “Contusion/abrasion” accounted for 14% of the total emergency department visits (n=92,601). “Contusion/abrasion” of the shoulder had the highest incidence rate (38.7 per 100,000 persons in the USA) compared to the upper arm, elbow, lower arm, wrist, and finger.

Nonfatal injury data were also analyzed from the National Electronic Injury Surveillance System for the year 2001 in Vyrostek et al. (2004). “Contusions/abrasions” accounted for 18.3% of non-fatal injuries. Dissimilar to Ootes et al., this data encompassed all body regions. Both studies were intended to estimate incidence rates of injuries in the general United States’ population. 11/22/2022 8:51:00 AM ICL86_Skin Abrasion Cliff page: 1

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

- Mean: 2.056 events/person-years and SD: 0.171

### INCIDENCE SUMMARY

The posterior distribution for the incidence rate given the inflight data from both sources (Antonsen – EMR, and Scheuring – MSK) under an uninformative prior is Gamma(shape=144.56, rate=70.31) with mean 2.056 and SD 0.171. • IMED: 123 events over 45.49 person-years but does not distinguish which events are EVA-related. There are 29 events in Saile, and 94 in Walton. • Antonsen et al. 2017: 94 skin abrasion in Table 2 (matching Walton, as expected) and six non-EVA related abrasions in Table 1. This makes for 100 total events over 45.49 person-years. IR 2.198 (95%CI: 1.798, 2.662). Since Antonsen delineates the EVA attributed events, we choose to use this data over IMED as the reference reflecting EMR data. • Scheuring et al. 2009: 48 incidents over 26.45 person-years. Data reported from MSK database. IR 1.815 (95%CI: 1.353, 2.386)

Typically, if spaceflight references were duplicating the same time timeframes, the source with the most coverage would be preferred. However, the Antonsen and Scheuring sources pull data from different documentation records. Specifically, Antonsen used EMR whereas Scheuring use the MSK database. Further, the rates, which were derived independently, were similar for both sources. Consequently, the statistician incorporated both sources into the Bayesian analysis.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 2.05604 SD 0.171004 Gamma (Shape): 144.56 (Rate): 70.31 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Walton, 2010 Spaceflight 3 Saile et al., 2017 Spaceflight 3 Antonsen et al., 2017 Spaceflight 4 Scheuring et al., 2009 Spaceflight 4 11/22/2022 8:51:00 AM ICL86_Skin Abrasion Cliff page: 2

| Citation | Source | LOC Value |  |
| ----------------------- | ----------- | --------- | --- |
| Thomas et al., 2003 | Analog | 1 |  |
| Linenger et al., 1993 | Analog | 2 |  |
| McLaughlin et al., 2006 | Analog | 1 |  |
| Ootes et al., 2012 | Terrestrial | 1 |  |
| Vyrostek et al., 2004 | Terrestrial | 1 |  |

Spaceflight incidence data was rated the highest as there was an appropriate sample size that occurred in space. Analog and terrestrial studies did not accurately reflect the highly screened crewmembers or the spaceflight environmental conditions. Further, there was concern that analog and terrestrial studies would exert an overwhelming influence on the final incidence distribution given their large number of poorly representative subjects.

| 11/22/2022 8:51:00 AM | ICL86_Skin Abrasion Cliff |  | page: 3 |
| --------------------- | ------------------------- | --- | ------- |
### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

This CLiFF condition is event-based and consequently there are no known preventative measures. However, there is serious interest in the documentation and analysis of healing of skin abrasions (and other injuries) during spaceflight. At L-10 days, the crew and flight surgeon undergo training on the use of the 35mm still and digital cameras so that they can document any minor/major infections /allergies /hypersensitivities /injuries inflight. This training is conducted as part of the Medical Operations Preflight Briefing.

### BEST CASE SCENARIO DEFINITION

Mild abrasion(s) resolving spontaneously or requiring minimal intervention. (Note EVA related skin abrasion is covered by "EVA Related Contact Injury OR EVA Related Hand Injury" and this is exclusive of "Cellulitis").

### WORSE CASE SCENARIO DEFINITION

Moderate to severe abrasion(s) requiring additional intervention. (Note EVA related skin abrasion is covered by "EVA Related Contact Injury OR EVA Related Hand Injury" and this is exclusive of "Cellulitis").

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Per the prior CLiFF entitled “Skin Abrasion”: “Based on Real World System data set, there were 29 events and 4 of them were worst case. Using empirical data from the real-world system, the worst case scenario would be 13.79% (4/29). Thus the best case scenarios would be 86.21% (25/29) (Saile L., 2017).” The authors of this CLiFF do not have means to verify or update this data. In Ekstrand et al. (2009), a prospective cohort study of injuries sustained by professional football (soccer) teams over seven seasons was conducted. Only seven abrasions were recorded, and one abrasion was rated as “severe” (14.2%). There is limited literature available regarding epidemiology of the best case and worst-case scenarios. In terrestrial conditions, there exists the likelihood of substantial under-reporting of the overall prevalence of abrasions as most people sustaining minor abrasions, scratches, etc. do not seek out medical assistance. Although the possibility of under-reporting still exists in spaceflight, given the preflight training each crewmember receives that details the importance of monitoring each condition, it is the subject matter expert opinion that reporting of skin abrasions would be more accurate in an astronaut population.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Saile et al., 2017 Spaceflight 3 Ekstrand et al., 2011 Terrestrial 1 Since the worst case has occurred in spaceflight, spaceflight data was ranked more highly than the single low-powered terrestrial study. Analog and terrestrial studies were largely unavailable, likely secondary to the underreporting of the condition. 11/22/2022 8:51:00 AM ICL86_Skin Abrasion Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Case mean 2.056 and 86.21 - 86.21 100 0.53 0 24 72 0 0 0 0 0 (TBC) SD 0.171 Treated Worst 13.79 - 13.79 100 0.7 10.0186 58 336 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.53 10.0186 24 168 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.7 56.0191 135 336 0 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 11/22/2022 8:51:00 AM ICL86_Skin Abrasion Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

By definition, the best-case only requires symptomatic treatment and will resolve on its own without therapeutic intervention. This is equivalent to a superficial, linear scratch that does not cover much surface area. The worst case is a deeper injury usually covering more surface area. The worst- case includes grazed, brushed, and patterned abrasions such as road-rash. These abrasions are at greater risk for infection and scarring. The RTDC surrogate for this condition was hospitalization.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Treatment for the best case would typically consist of cleansing the affected area with water, soap or a mild antiseptic wash followed the application of an antibiotic ointment and a dressing. Most studies quote that in the best case reepithelialization or resurfacing of a superficial wound takes approximately three days (Reinke et al., 2012). However, athletic literature suggests that most athletes can return to play immediately if the abrasion is covered (Honsik et al., 2007; Basler et al., 2001; and Basler et al., 2004). By definition, RTDC and LOCL are not expected for this condition. TREATED WORST CASE SCENARIO (TWC) COMMENTS In the worst case, treatment may consist of local wound care for several days. In a prospective trial (Beam, 2008), 16 participants underwent partial- thickness abrasions using several passes of a 60-grit autoclaved SandBlaster attached to a sled. Wounds were followed for 14 days and those treated with either hydrogel or film had almost complete resolve of the wound surface area by day 14. Abrasions treated by a hydrocolloid bandage had healed by day 10 in this study. Of note, the control group (untreated) was not healed by day 14. In Claus et al. (1998), 14 subjects had a 4.09- kg sanding block (60-grit paper) undergo 30 passes on their arms and resultant abrasions were dressed with varying occlusive dressings. Healing times for each group were as follows: Duoderm -142.29 ± 43.61 hr, Bioclusive – 145.71 ± 43.61, Coverlet – 138.86 ± 79.98 and Control (untreated) – 204.00 ± 69.02 hr. Consequently, duration was determined (by considering the standard deviation of the second study for the lower bound) to be 58.0 to 336 hours. Hospitalization rates (RTDC surrogate) were not found after an extensive literature search (including terms like “road rash”), likely secondary to the overall benign nature of this condition. This is further supported by spaceflight data in which the worst-case scenario has occurred and no RTDC occurred. Consequently, it was subject matter expert opinion that the RTDC and LOCL parameters would be set to zero for this condition. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS In the untreated best case, a superficial abrasion would be left to heal without cleansing, ointment application or covering. In Dunkin et al. (2007), 113 healthy subjects underwent a procedure that created a dermal scratch that consisted of a deep end and a superficial/shallow end for the means of characterizing the healing response to skin injury of different depths. After one week, the mean width of the superficial end had completely closed. The lower bound of duration was assigned to the be of similar value of the treated best case as this would be expected to be a slight scratch/graze that would heal without any intervention regardless. By definition, RTDC and LOCL are not expected for this condition.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS In Dunkin et al. (2007), the deep end of the skin wound had reached the maximum width healing by one week, however mean surface area of the wound was still contracting by 36 weeks. However, the authors comment that this is likely secondary to scar formation and collagen remodeling.

Thus, this study is not likely representative for the untreated wound case. Using similar studies that were used in the treated worst case (Beam, 2008 and Claus et al., 1998) duration was determined to be 135 to 336 hours. Using the same rationale explained in the treated worst case, RTDC and LOCL are not expected for this condition.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Reinke et al., 2012 Terrestrial Honsik et al., 2007 Terrestrial Basler et al., 2001 Terrestrial 11/22/2022 8:51:00 AM ICL86_Skin Abrasion Cliff page: 6

| Citation |  | Source | LOC Value |  |  |
| -------- | --- | ------ | --------- | --- | --- |

3

| Basler et al., 2004 |  | Terrestrial |  |  |  |
| ------------------- | --- | ----------- | --- | --- | --- |
| Beam, 2008 |  | Terrestrial |  |  |  |
| Claus et al., 1998 |  | Terrestrial |  |  |  |
| Dunkin et al, 2007 |  | Terrestrial |  |  |  |

Duration ranges were taken from several systematic reviews and low-powered but highly applicable prospective trials.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source |  | LOC Value |  |  |
| -------- | ------ | --- | --------- | --- | --- |
| N/A | N/A |  |  | 3 |  |

There was no literature found that described the hospitalization rates (RTDC) for this pathology.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source |  | LOC Value |  |  |
| -------- | ------ | --- | --------- | --- | --- |
| N/A | N/A |  |  | 4 |  |

Based on the definitions, loss of crew life is not expected for any of the scenarios associated with this CLiFF.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview Skin Abrasion – A skin abrasion is a superficial wound of the dermis and/or epidermis. Best-case scenario involves a mild abrasion that resolves spontaneously or requires minimal intervention. Worse-case scenario involves a moderate to severe abrasion that requires additional intervention. CNES: N/A Diagnostic Scope and Resourcing In the best-case scenario, diagnosis is based on history and physical examination (musculoskeletal). In the worst-case scenario, diagnosis is based on history and physical examination (musculoskeletal). No adjuncts or additional resources are required for diagnosis. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.53 hours CP1 WC (Treated or Untreated): 0.70 hours This CRT includes a scope of practice code of 2 (which correlates to a “Paramedic/Military Medic” and was included for wound management decision making and skin examination. Treatment Scope and Resourcing Terrestrially, the majority of mild skin abrasions resolve quickly with minimal to no intervention, requiring simple wound cleaning with soap and water. Moderate to severe abrasions require more diligent wound irrigation, removal of devitalized tissue, dressing, and frequent reassessment. Similar approaches can be accomplished in space. A focus on diligent wound care, cleansing, and dressing will prevent infection and cross-contamination. Pain is variable depending on the patient but can be treated with NSAIDs and acetaminophen. Communications and Support Needs No additional needs beyond what can be accomplished in routine medical conferences REFERENCES 1. Quinn RH, Wedmore I, Johnson E, et al. Wilderness Medical Society practice guidelines for basic wound management in the austere environment. Wild Environ Med 2014;25(3):295-310.

### IMM CLIFF RECONCILATION COMMENTS

The previous IMM CLiFF entitled “Skin Abrasion” was the predecessor to this condition. In this iteration, incidence data was derived only from non- EVA related events. Consequently incidence data was updated with additional sources and the use of a biostatistician. Duration ranges were also revised after a new literature search.

### LIMITATIONS SUMMARY

- Under-reporting for this condition could have occurred during past space missions due to subtle abrasions that were not of clinical consequence.

| 11/22/2022 8:51:00 AM |  | ICL86_Skin Abrasion Cliff |  |  | page: 7 |
| --------------------- | --- | ------------------------- | --- | --- | ------- |
This may result in underestimation of the incidence. • The authors did not have access to the original LSAH data and thus there was a dependence on already published sources to delineate between EVA-related and non- EVA events. • After extensive literature searches performed by the editors for this condition, no studies were found that informed hospitalization rates, likely a result of this condition’s mostly benign consequences. • This medical condition is dependent on mission phase as the incidence may be higher during surface operations which are under partial-g conditions. An update for IMPACT 2.0 may be required to account for this. 11/22/2022 8:51:00 AM ICL86_Skin Abrasion Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  |  |  |  |  |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  | 664 |  | 89 |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  |  |  | Translation & |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  |  | Extremity | Standing (g) |  | Equipment | Ops | Category |  |  |
| --- | ----- | --- | --- | --------- | ------------ | -------------- | --------- | --------- | -------- | --- | --- |
|  |  |  |  |  |  | (microgravity) |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  | 34 | 211 377 | 3763 | 0.100186 | 10.0186 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ------- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  |  |  |  |  | 34 | 211 377 | 3763 | 0.100186 | 10.0186 |
| --- | --- | --- | --- | --- | --- | --- | --- | ------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 |  |  |  | 34 | 211 2108 | 3763 | 0.560191 | 56.0191 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  | Inter- |  |  | Cardio- |  |  |  |  |
| --- | ----------- | ----------- | -------------- | -------- | ------ | ------- | --------- | --------- | ----- | --- | --- |
|  |  |  | Communications | personal | Vision | Hearing |  | Dentition | GI GU |  |  |
|  | Simple | Complex |  |  |  |  | pulmonary |  |  |  |  |

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
| --------------------- | --- | --- | --- | -------------------------- | ------------------------- | --- | --- | --- | -------------- | --- | -------- |
| 11/22/2022 8:51:00 AM |  |  |  |  | ICL86_Skin Abrasion Cliff |  |  |  |  |  | page: 9 |
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

|  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

|  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | ------ | --- |

Case (UTWC)

| 11/22/2022 8:51:00 AM |  | ICL86_Skin Abrasion Cliff |  |  | page: 10 |
| --------------------- | --- | ------------------------- | --- | --- | -------- |
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

CP2: No comment CP3: No comment

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

11/22/2022 8:51:00 AM ICL86_Skin Abrasion Cliff page: 11

## REFERENCES

Reference

1. Antonsen, Erik, Tina Bayuse, Rebecca Blue, Vernie Daniels , Melinda Hailey, Sam Hussey, Eric Kerstman, Mike Krihak, Kara Latorella, Jennifer

Mindock, Jerry Myers, Robert Mulcahy, Rebekah Reed, Davis Reyes, Michelle Urbina, and Marlei Walton. 2017. "Evidence Report: Risk of Adverse Health Outcomes and Decrements in Performance due to In-Flight Medical Conditions." In.

2. Basler, R. S., M. A. Garcia, and K. S. Gooding. 2001. 'Immediate steps for treating abrasions', Phys Sportsmed, 29: 69.

3. Basler, R. S., C. M. Hunzeker, and M. A. Garcia. 2004. 'Athletic skin injuries: combating pressure and friction', Phys Sportsmed, 32: 33-40.

4. Beam, Joel W. 2008. 'Occlusive dressings and the healing of standardized abrasions', Journal of athletic training, 43: 600-07.

5. Claus, E. E., C. F. Fusco, T. Ingram, C. D. Ingersoll, J. E. Edwards, and T. J. Melham. 1998. 'Comparison of the effects of selected dressings

on the healing of standardized abrasions', Journal of athletic training, 33: 145-49.

6. Dunkin, Christopher S. J., Jonathon M. Pleat, Patrick H. Gillespie, Michael P. H. Tyler, Anthony H. N. Roberts, and D. Angus McGrouther. 2007.

'Scarring Occurs at a Critical Depth of Skin Injury: Precise Measurement in a Graduated Dermal Scratch in Human Volunteers', Plastic and Reconstructive Surgery, 119.

7. Dunn, C., M. Boyd, and I. Orengo. 2018. 'Dermatologic manifestations in spaceflight: a review', Dermatol Online J, 24.

8. Ekstrand, J., M. Hägglund, and M. Waldén. 2011. 'Injury incidence and injury patterns in professional football: the UEFA injury study', Br J

Sports Med, 45: 553-8.

9. Honsik, K. A., M. W. Romeo, C. J. Hawley, S. J. Romeo, and J. P. Romeo. 2007. 'Sideline skin and wound care for acute injuries', Curr Sports

Med Rep, 6: 147-54.

10. Linenger, Jerry M., Scott Flinn, Bruce Thomas, and Chrisanna Weech Johnson. 1993. 'Musculoskeletal and Medical Morbidity Associated with

Rigorous Physical Training', Clinical Journal of Sport Medicine, 3: 229-34.

11. McLaughlin, K. A., D. A. Townes, I. S. Wedmore, R. T. Billingsley, C. D. Listrom, and L. D. Iverson. 2006. 'Pattern of injury and illness during

expedition-length adventure races', Wilderness Environ Med, 17: 158-61.

12. Ootes, D., K. T. Lambers, and D. C. Ring. 2012. 'The epidemiology of upper extremity injuries presenting to the emergency department in the

United States', Hand (N Y), 7: 18-22.

13. Reinke, J. M., and H. Sorg. 2012. 'Wound repair and regeneration', Eur Surg Res, 49: 35-43.

14. Saile L., Boley L., Kerstman E. 2017. 'Integration RWS ISS STS Observed Incidence V2.'.

15. Scheuring, R. A., C. H. Mathers, J. A. Jones, and M. L. Wear. 2009. 'Musculoskeletal injuries and minor trauma in space: incidence and injury

mechanisms in U.S. astronauts', Aviat Space Environ Med, 80: 117-24.

16. Shrestha, R., K. Krishan, and T. Kanchan. 2021. 'Abrasion.' in, StatPearls (StatPearls Publishing Copyright © 2021, StatPearls Publishing

LLC.: Treasure Island (FL)).

17. Thomas, T. L., F. C. Garland, D. Molé, B. A. Cohen, T. M. Gudewicz, R. T. Spiro, and S. H. Zahm. 2003. 'Health of U.S. Navy submarine crew

during periods of isolation', Aviat Space Environ Med, 74: 260-5.

18. Vyrostek, S. B., J. L. Annest, and G. W. Ryan. 2004. 'Surveillance for fatal and nonfatal injuries--United States, 2001', MMWR Surveill Summ,

53: 1-57.

19. Walton M, Kerstman E. 2010. ' IMM In-flight Compilation v20100414_Incidence_calculation'.

20. Wotring, V. E., and L. K. Smith. 2020. 'Dose Tracker Application for Collecting Medication Use Data from International Space Station Crew',

Aerosp Med Hum Perform, 91: 41-45.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

11/22/2022 8:51:00 AM ICL86_Skin Abrasion Cliff page: 12

### CAC Coronary Artery Calcium

### CHS Crew Health and Safety

### CL Condition List

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

11/22/2022 8:51:00 AM ICL86_Skin Abrasion Cliff page: 13

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

11/22/2022 8:51:00 AM ICL86_Skin Abrasion Cliff page: 14

---

## Source metadata

```yaml
source_filename: "skin-abrasion-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1oyJIhpGGoixzcMk94MNEhX6yG2lUf68W/view"
source_drive_id: "1oyJIhpGGoixzcMk94MNEhX6yG2lUf68W"
source_sha256: 41e90789732b0a6aac8e245ed5f786b2903c286014d4b824784fa38fdecaa241
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
