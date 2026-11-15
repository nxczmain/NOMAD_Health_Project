# Skin Laceration CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1TMVrBYTL9bWd-qiyJeSwFaz6ynV7oR7X/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119

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

### ICL89_Skin Laceration

The term laceration for this CLiFF includes cuts caused by sharp objects and skin tearing secondary to blunt trauma.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Scheuring et al. (2009) evaluated the incidence musculoskeletal in-flight injuries among astronauts, as well as skin abrasions, contusions, and lacerations in a review spanning Mercury - Expedition 13 of the ISS Program. 28 lacerations were identified in the time period. The following data sources were utilized in this review: post-flight medical debriefs, the LSAH medical record database, the Johnson Space Center (JSC) electronic medical record system, including ASCR specialist assessment and treatment logs, and the JSC Flight Medicine Clinic vault records. Musculoskeletal injury data in the ISS program was extracted from the private medical conferences held between the ISS crewmembers and their flight surgeon up to and including Expedition 13, as well as from the ASCR specialists supervising the crewmember’s in-flight training regimen. Lastly, several entries came directly from personal communications with astronaut crewmembers or flight surgeons and the authors when not otherwise duplicated.

Information collected on each injury included location, type, and a detailed narrative on the mechanism of injury, the type of exercise the crewmember performed during the flight, previous history of injury, treatment, and post-flight outcome. The term “ in-flight” included lunar surface operations. This article notes small lacerations and abrasions to the hands are among the most common injuries occurring throughout the U.S. space program.

### ANALOG LITERATURE

Thomas et al (2003) is a large (n = 13,441) retrospective review of US Navy submarines. The study population consisted of US Navy officers and enlisted men deployed on 240 submarine patrols. This analog is similar to spaceflight in that it is an isolated and confined environment. The subjects are also highly screened, and healthy, similar to astronauts. Unlike astronaut crews, the Navy submariners were all male, 88-90% were white, and most were between 18-35 yo. Skin injuries were poorly defined in this study, but using the assumption that "open wound events" are synonymous with "skin lacerations" the incidence provided in this study was: Officers: 3.1 open wound events / 100 person-years; Enlisted: 8.5 open wound events / 100 person-years.

### TERRESTRIAL LITERATURE

Stanford et al (2017) found that acute lacerations are common in wilderness exploration activities, making up 18% of reported medical incidents.

Lacerations were primarily associated with hiking. Injury mechanisms included trips, slips, and falls over boulders. Sorock et al (2001) studied occupational injuries suffered from acute trauma to the hand (including the thumb and fingers) in U.S. workers. Gradual onset injuries such as a cumulative trauma disorders were excluded. Burns and injuries due to falls were excluded. Hand injuries were categorized into lacerations, fractures, bruises/contusions, amputations, and non-specific injuries. Incidence rates were provided as follows: 10.1 new cases of finger lacerations per 10,000 full time workers per year, 3.4 new cases of hand laceration per 10,000 full time workers per year. Ootes et al (2012) performed a large, cross-sectional study of US emergency departments utilizing the National Electronic Injury Surveillance System database. They searched for upper extremity injuries and identified 92,501 records of upper extremity injuries presenting to US emergency departments. Data from 100 US hospitals was included and considered representative of the average US population. They found that lacerations make up 23.3% of upper extremity injuries.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

6/15/2023 2:08:39 PM ICL89_Skin Laceration Cliff page: 1

- Mean: 0.944

- SD: 0.18

### INCIDENCE SUMMARY

Scheuring et al, 2009 was selected as the best source to inform the incidence distribution of skin laceration in spaceflight. It reports 28 in-flight laceration events in 29.647 total person-years of flight. IR 0.9444 (95%CI: 0.6399, 1.347). The Bayesian posterior distribution for the incidence rate of skin laceration given the spaceflight evidence (28 events over 29.647 person-years of flight) under an uninformative prior is Gamma(shape=27.5, rate=29.136) with mean 0.944 and SD 0.18.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.94385 SD 0.179985 Gamma (Shape): 27.5 (Rate): 29.136 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Scheuring et al, 2009 Spaceflight 4 Stanford et al, 2017 Terrestrial 1 Thomas et al, 2003 Analog 3 Ootes et al, 2012 Terrestrial 2 Sorock et al, 2001 Terrestrial 2 Braun et al, 2019 Spaceflight 1 Scheuring et al, 2009 is provides incidence data for lacerations from Mercury through Expedition 13 of the ISS Program. This is in-flight, spaceflight data and thus the best incidence source of those provided. The terrestrial sources are not as accurate of a reflection of our patient population and spaceflight environment as Scheuring et al. The analog source (Thomas et al, 2003) is a good analog source of submarine data but is limited to male subjects and again is not as representative of our population as the spaceflight data, but notably, it is likely a better approximation of our population than the all-comer terrestrial data. Braun et al, 2019 provides spaceflight pre- and post-flight survey data from a very small subset of ISS crewmembers (n = 8) regarding any skin symptoms that they experienced during the mission. Most complaints were dry skin. One crewmember noted delayed healing of lacerations, but this does not directly inform the incidence of lacerations inflight and thus was not used to inform incidence in this CLiFF. 6/15/2023 2:08:39 PM ICL89_Skin Laceration Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Whenever possible, tools and the environment are engineered to reduce risk to the crewmember, including from lacerations. There are no specific pre-flight preventive measures taken by the crew.

### BEST CASE SCENARIO DEFINITION

An uncomplicated, linear, laceration that is not under significant tension with minimal or no foreign body contamination that heals spontaneously or requires a single layer closure.

### WORSE CASE SCENARIO DEFINITION

- A laceration meeting one or more of the following criteria: complex, stellate, multi-layer closure, under significant tension, and/or involving foreign

body contamination requiring exploration and removal.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

There is a paucity of data regarding the probability of best-case vs. worst-case skin lacerations based on the definitions provided in this CLiFF.

Therefore, the worst-case probability will be based on existing spaceflight data. There have been two spaceflight incidents known to have needed closure: dermabond for a fingertip laceration during an STS mission (NASA, Skin Laceration CLiFF, 2017) and an Apollo laceration that was sutured on landing (Hawkins and Zieglschmid, 1975). Both were reported in the predecessor IMM CLiFF. Those two cases are considered worst- case for this probability. 2 worst-case incidents/28 total cases (Scheuring et al, 2009) provides a 7% worst-case probability, and a 93% best-case probability. This is not a perfect probability split based on the current definitions since the current best-case definition includes "single layer closure" (which would encompass dermabond and may have encompassed the Apollo laceration as well, but it was felt to be the best approximation available at the time this CLiFF was created.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Scheuring et al, 2009 Spaceflight 4 NASA, Skin Laceration CLiFF, 2017 Spaceflight 3 Hawkins and Zieglschmid, 1975 Spaceflight 4 Scheuring et al, 2009 provides the total number of spaceflight lacerations (28) that informs the best-case/worst-case probabilities. NASA, Skin Laceration CLiFF, 2017; Hawkins and Zieglschmid, 1975 inform the proportion of skin lacerations that are worst case. (See explanation above for full details). 6/15/2023 2:08:39 PM ICL89_Skin Laceration Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best Case Mean: 0.944 93 - 93 100 0.5 3.25538 120 336 0 0 0 0 0

(TBC) Treated Worst 7 - 7 100 0.85 15.7587 240 504 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.5 5.0093 168 384 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.85 23.1597 240 2232 6.51076 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:08:39 PM ICL89_Skin Laceration Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

RTDC probability was pre-determined to be 0% for all scenarios by the ExMC Clinical & Science Team. The student performing the literature search did watch for mention of hospitalization due to laceration (as an RTDC surrogate) but did not identify any literature supporting this. LOCL for the treated scenarios was assumed to be 0% and no literature searches were performed for LOCL for these scenarios. See detailed comments for each scenario below. TREATED BEST CASE (TBC) SCENARIO COMMENTS The duration values were assigned for uncomplicated lacerations informed by Forsch, 2008 which provides time to suture removal. Suture times for the palms and soles were excluded since they are high tension areas. The minimum duration was assigned 120 hours (5 days) and the maximum duration was assigned 336 hours (14 days). RTDC was pre-determined by the ExMC Clinical & Science Team to be 0% for all scenarios. No RTDC literature searches were performed. LOCL was assumed to be 0% and no literature search was performed.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The duration values were informed by Forsch, 2008 which provides time to suture removal based on sutures for the scalp, arms, and palms/soles.

The minimum duration was assigned 240 hours (10 days) and the maximum duration was assigned 504 hours (21 days). RTDC was pre-determined by the ExMC Clinical & Science Team to be 0% for all scenarios. No RTDC literature searches were performed. LOCL was assumed to be 0% and no literature search was performed. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS There is a paucity of data regarding untreated lacerations. The durations in this scenario are based on Anderson et al, 2014 (Chapter 9 in Schwartz's Principles of Surgery, devoted to wound healing). Specifically the minimum duration, 168 hours (7 days) and the maximum duration, 384 hours (16 days) are based on a graph that provides an estimate of approximate wound breaking strength at various days based on the cellular, biochemical, and mechanical phases of healing. RTDC was pre-determined by the ExMC Clinical & Science Team to be 0% for all scenarios. No RTDC literature searches were performed. A literature search for LOCL probability revealed no articles indicating mortality for an untreated best- case scenario and thus the LOCL was assigned a 0% probability.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Based on differences in location, size, nature, and degree of contamination of the worst-case scenario laceration, there is likely to be a wide range of durations for this condition. The minimum duration was assigned as 240 hours (10 days) and would represent the less complicated end of the spectrum of worst-case lacerations. The maximum duration was assigned as 2232 hours (3 months) based on information presented by the University of Rochester Medical Center stating that at 3 months most wounds have healed to 80% of their original tensile strength (DeMuro et al, 2021). RTDC was pre-determined by the ExMC Clinical & Science Team to be 0% for all scenarios. No RTDC literature searches were performed. A literature search for LOCL probability revealed no articles indicating mortality for an untreated worst-case scenario and thus the LOCL was assigned a 0% probability. Lacerations developing complications such as cellulitis (ICL#87), sepsis (ICL#84), or hypovolemic shock (ICL#116) are covered by other medical conditions.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

DeMuro et al, 2021 Terrestrial Forsch, 2008 Terrestrial 3 Andersen et al, 2014 Terrestrial The treated scenario durations were informed by Forsch, 2008 based on the length of time that sutures are left in place. The untreated best-case scenario was based on tissue properties that determine healing (Andersen et al, 2014). The untreated worst-case scenario is based on a statement from the University of Rochester Medical Center that most [open] wounds heal to 80% of their original tensile strength by 3 months. 6/15/2023 2:08:39 PM ICL89_Skin Laceration Cliff page: 5

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

N/A N/A 3 The ExMC Clinical & Science Team pre-determined that the RTDC probability for all scenarios was 0%. This is likely a fair assumption for best-case lacerations and the worst-case treated laceration. It does ignore necrotizing soft tissue infections (which are not covered elsewhere in the ICL 1.0 condition list). RTDC for the worst-case, untreated scenario is likely an underestimate.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

N/A N/A 3 LOCL was assumed to be 0% for the treated scenarios and no literature searches were performed. For the untreated scenarios, literature searches were performed and no articles indicating mortality were identified.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Skin Laceration is expected to encompass the capability to perform simple single layer repairs in the best case as well as complex, potentially multi layer repairs in the worst case. Complications of this condition, such as infection, are beyond the scope of this CRT.

- CNES: None

### Diagnostic Scope and Resourcing

Diagnosis is expected to require a skin exam, a wound exam, and a basic neurological exam of the affected area for the best case condition. The worst case will require the same techniques but the wound exam is expected to be more extensive.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.5 hours for a skin exam, wound exam, neurological exam, and history. Using the standard of “longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment.” CP1 WC (Treated or Untreated): 0.85 hours for a skin exam, wound exam, neurological exam, and history.

The highest level scope of practice in this condition is 5, commensurate with a skilled, procedure trained generalist physician such as a family medicine or emergency medicine trained doctor.

### Treatment Scope and Resourcing

The best case treatment capabilities include, bleeding control, wound irrigation with pressurized water using suction and towels to absorb the runoff, local anesthetic for pain management, and wound repair using either skin adhesive, adhesive bandages, staples, or sutures. This also includes twice daily wound dressing changes for 7 days.

The worst case will require sutures to repair since the injury is complex and/or under tension. In this case sutures are included for both deep layer repairs and superficial layer repairs. While primacy is set for deep layers to be absorbable sutures and superficial layers to be non absorbable, should this prove unnecessarily mass/volume expensive, lower primacy options exist for absorbable sutures only.

### Communications and Support Needs

This condition is well within the scope of a scope of practice 5 physician to treat without ground communication. No additional communications will be needed.

### IMM CLIFF RECONCILATION COMMENTS

The incidence of in-flight skin laceration for this CLiFF is based off Scheuring et al, 2009, a retrospective review of the spaceflight data spanning 6/15/2023 2:08:39 PM ICL89_Skin Laceration Cliff page: 6

Mercury – Expedition 13 of the ISS Program, including the following sources: post-flight medical debriefs, the LSAH medical record database, the Johnson Space Center (JSC) electronic medical record system, including ASCR specialist assessment and treatment logs, and the JSC Flight Medicine Clinic vault records. Musculoskeletal injury data in the ISS program was extracted from the private medical conferences held between the ISS crewmembers and their flight surgeon up to and including Expedition 13, as well as from the ASCR specialists supervising the crewmember’s in- flight training regimen. Lastly, several entries came directly from personal communications with astronaut crewmembers or flight surgeons and the authors when not otherwise duplicated. Information collected on each injury included location, type, and a detailed narrative on the mechanism of injury, the type of exercise the crewmember performed during the flight, previous history of injury, treatment, and post-flight outcome. The term “in- flight” included lunar surface operations. This source was included in the IMM CLiFF but ultimately not used to inform the incidence, as it was felt to be an over-estimate. The ExMC editor and reviewer for this CLiFF felt that Scheuring et al, 2009 was the most comprehensive source of data, particularly given that PMCs and personal flight surgeon communication were included in their search. The editor and reviewer or this CLiFF felt that the IMM incidence was an underestimate of the true incidence of spaceflight lacerations. The best-case and worst-case definitions have changed substantially from the IMM CLiFF definitions. The best-case scenario definition is now an uncomplicated laceration requiring a single layer closer. IMM previously defined the best-case scenario as requiring skin adhesive or dressing only. The worst-case scenario definition is now a complex laceration with possible contamination/foreign body, requiring a complicated repair. IMM previously defined this a s any laceration requiring sutures or staples for repair. Updated durations are driven by these new definitions. A notable change from the IMM CLiFF is that the EVAC probability for the untreated worst-case scenario was 0-100% previously and RTDC for all scenarios in this CLiFF was pre-determined to be 0%.

RTDC for the untreated worst-case scenario in this CLiFF is likely an underestimate. LOCL probabilities for all scenarios in both the IMM CLiFF and this CLiFF are 0%.

### LIMITATIONS SUMMARY

- Best-Case/Worst-Case Probability: There is a paucity of data regarding the probability of best-case vs. worst-case skin lacerations based on the

definitions provided in this CLiFF. Therefore, the worst-case probability will be based on spaceflight data. There have been two spaceflight incidents known to have needed closure (Dermabond for a fingertip laceration during an STS mission and an Apollo laceration that was sutured on landing). Both were reported in the predecessor IMM CLiFF. Those two cases are considered worst-case for this probability. 2 worst-case incidents/28 total cases (Scheuring et al, 2009) provides a 7% worst-case probability, and a 93% best-case probability. This is not a perfect probability split based on the current definitions since the current best-case definition includes "single layer closure" (which would encompass Dermabond and may have encompassed the Apollo laceration as well, but it was felt to be the best approximation available at the time this CLiFF was created. • LOCL was assumed to be 0% for the best-case scenarios. While this is a reasonable assumption, literature searches would have substantiated this. • The ExMC Clinical & Science Team pre-determined that the RTDC probability for all scenarios was 0%. This is likely a fair assumption for best-case lacerations and the worst-case treated laceration. It does ignore necrotizing soft tissue infections (which are not covered elsewhere in the ICL 1.0 condition list). RTDC for the worst-case, untreated scenario is likely an underestimate. (Notably, IMM had 0% EVAC probability for all scenarios except the untreated worst-case scenario, which was assigned 0-100%). 6/15/2023 2:08:39 PM ICL89_Skin Laceration Cliff page: 7

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

| Worst |  | 664 |  |  |  |  | 145 |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 |  | 89 |  |  | 145 |  |  |  |  |
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

| Best |  |  |  |  |  |  | 34 | 211 245 | 3763 | 0.0651076 | 6.51076 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ------- | ---- | --------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  | 34 | 211 377 | 3763 | 0.100186 | 10.0186 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ------- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  |  |  |  |  | 34 | 211 1186 | 3763 | 0.315174 | 31.5174 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  |  |  |  |  | 34 | 211 1498 | 3763 | 0.398087 | 39.8087 |
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
| -------------------- | --- | --- | --- | -------------------------- | --------------------------- | --- | --- | --- | -------------- | --- | -------- |
| 6/15/2023 2:08:39 PM |  |  |  |  | ICL89_Skin Laceration Cliff |  |  |  |  |  | page: 8 |
Total Human

|  |  | Translation & |  | Total Tasks |  |
| --- | --- | ------------- | --- | ----------- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) | Extremity Standing (g) | Equipment Ops | Category |  |
| --- | ----- | ---------------------- | ------------- | -------------------- | --- |
|  |  | (microgravity) |  | Condition Tasks Full |  |

Mission Treated Best

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

|  |  |  | 34 211 | 245 3763 | 0.0651076 6.51076 |
| --- | --- | --- | ------ | -------- | ----------------- |

Case (UTWC)

| 6/15/2023 2:08:39 PM |  | ICL89_Skin Laceration Cliff |  |  | page: 9 |
| -------------------- | --- | --------------------------- | --- | --- | ------- |
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

CP2: In the worst-case untreated scenario, the TI working group assumed the most likely location for the laceration to occur would be the dominant hand and used this for task impairment calculations. CP3: No comment.

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

6/15/2023 2:08:39 PM ICL89_Skin Laceration Cliff page: 10

## REFERENCES

Reference

1. Andersen DB, Timothy; Dunn, David; Kao, Lillian; Hunter, John; Matthews, Jeffrey; Pollock, Raphael. Schwartz's Principles of Surgery. In:

Brunicardi FC, editor. 1. 10th Edition ed. United States: New York : McGraw-Hill Education; 2014.

2. Braun N, Thomas S, Tronnier H, Heinrich U. Self-Reported Skin Changes by a Selected Number of Astronauts after Long-Duration Mission on

ISS as Part of the Skin B Project. Skin pharmacology and physiology. 2019;32(1):52-7.

3. DeMuro J, Fraser M, Foley M. How Wounds Heal 2021 [cited 2021 June 7]. Available from:

https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentTypeID=134&ContentID=143.

4. Forsch RT. Essentials of skin laceration repair. American family physician. 2008;78(8):945-51.

5. Hawkins W, Zieglschmid J. Clinical Aspects of Crew Health. Washington DC: NASA, 1975 Contract No.: SP-368.

6. NASA. Skin Laceration Clinical Information Findings Form. Integrated Medical Database of the Human Health and Performance Contract

Integrated Medical Model Project. 2017;v6.5.

7. Ootes D, Lambers KT, Ring DC. The epidemiology of upper extremity injuries presenting to the emergency department in the United States.

Hand. 2012;7(1):18-22.

8. Scheuring RA, Mathers CH, Jones JA, Wear ML. Musculoskeletal injuries and minor trauma in space: incidence and injury mechanisms in U.S.

astronauts. Aviat Space Environ Med. 2009;80(2):117-24. Epub 2009/02/10. doi: 10.3357/asem.2270.2009. PubMed PMID: 19198198.

9. Sorock GS, Lombardi DA, Courtney TK, Cotnam J, Mittleman MA. Epidemiology of occupational acute traumatic hand injuries: a literature

review. Safety Science. 2001;38(3):241-56.

10. Stanford KA, Phillips L, Chang Y, Leemon D, Schimelpfenig T, Harris NS. Trends in Skin and Soft Tissue-Related Injuries in NOLS Wilderness

Expeditions from 1984 to 2012. Wilderness Environ Med. 2017;28(4):307-12. Epub 2017/09/09. doi: 10.1016/j.wem.2017.06.005. PubMed PMID: 28882617.

11. Thomas TL, Garland FC, Mole D, Cohen BA, Gudewicz TM, Spiro RT, et al. Health of U.S. Navy submarine crew during periods of isolation.

Aviat Space Environ Med. 2003;74(3):260-5. Epub 2003/03/26. PubMed PMID: 12650274.

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

### CRT Capability Resource Table

### CST Clinical Science Team

6/15/2023 2:08:39 PM ICL89_Skin Laceration Cliff page: 11

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

### RCL Removed Conditions List

### REP Rochester Epidemiology Study

6/15/2023 2:08:39 PM ICL89_Skin Laceration Cliff page: 12

### RTDC Removal to Definitive Care

### SANS Spaceflight-Associated Neuro-ocular Syndrome

### SAS Space Adaptation Syndrome

### SEVA Spaceflight Extravehicular Activity

### SME Subject Matter Expert

### SoP Standard Operating Procedure

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

6/15/2023 2:08:39 PM ICL89_Skin Laceration Cliff page: 13

---

## Source metadata

```yaml
source_filename: "skin-laceration-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1TMVrBYTL9bWd-qiyJeSwFaz6ynV7oR7X/view"
source_drive_id: "1TMVrBYTL9bWd-qiyJeSwFaz6ynV7oR7X"
source_sha256: 983f95e4e929eac8a3be2b266ff6a85572d88790a1828b98b8124dcd01ab6116
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
