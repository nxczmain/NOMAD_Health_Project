# Fracture Distal Leg CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1GH9oVT3fUQnw_v49KWxIFMr6imOnWXjA/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Lower Extremity Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Best Case](#best-case)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL53_Fracture - Distal Leg Fracture - Distal leg encompasses any traumatic fracture of the patella, tibia, or fibula. However, fracture - ankle is a separate condition for consideration in future iterations of IMPACT. It is somewhat unclear where a distal leg fracture stops and an ankle fractures starts based on their definitions. For the purposes of this CLiFF the mesh term "ankle" was excluded in literature searches.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

There have been no published accounts of a distal leg fracture (or any fracture) in spaceflight.

### ANALOG LITERATURE

Military analog population data focuses primarily on stress fractures. Stress fractures are not included in this Cliff.

### TERRESTRIAL LITERATURE

Wennergren et al, 2018 completed a 5 year retrospective review of tibial fracture incidence in Sweden in patients age 16-101 (stratified ages less than 50 and 50 years and older). The overall incidence of tibial fracture in this population was 51.7/100,000 py, with an incidence of 24.12/100,000 person-years in patients age 16-49. The most common cause of fractures was falls, followed by traffic accidents. Beerekamp et al, 2017 conducted a similar retrospective review of lower leg fractures in the Netherlands in a 9 year study inclusive of 12% of the emergency department patients in the country. The overall incidence in this study was 44.8/100,000 person years.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

- Surface-Ops EVA: mean 3.183E-7 SD 2.758E-9.

### INCIDENCE SUMMARY

This cliff pertains only to traumatic fractures of the distal leg. The incidence of traumatic fractures outside of surface EVA was assumed to approach

0. Thus, the incidence only applies to Surface-ops EVA exposure. It is an incidence proportion, utilizing terrestrial traumatic distal leg fracture data

(Beerekamp et al, 2017; Wennergren et al, 2018). This incidence proportion distribution is a Beta(shape1=13319.4, shape2=41845411064) with mean 3.183E-7 and SD 2.758E-9. This is the result of Bayesian analysis generating the posterior of the incidence rate for a meta-analysis of 2 terrestrial references (Beerekamp et al, 2017; Wennergren et al, 2018) (12271 events over 26686430py and 1371 events over 2650000py) and then utilizing the posterior samples to generate a posterior distribution for the probability of observing at least one fracture over a 6-hour EVA.

Beerekamp et al, 2017 included information on distal leg fractures, whereas Wennergren included data specific to tibial fractures. Beerekamp et al, 2017 was not age adjusted because, although the female rates increase with age, the male rates decrease with age. If you assume the population is half male and half female, the rates become consistent across the age spans. Given this, the data were not sex or age-adjusted from Beerekamp et al, 2017. Wennergren et al did not provide demographics to allow for sex or age-adjustment. These two data sources were entered into a Bayesian model to get a posterior distribution for the incidence rate. That incidence rate was used to calculate the probability of experiencing at 6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 1

least 1 fracture event over an EVA (assumed to be 6 hours).

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

EVA Segment

### EVA Surface

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Beta Mean 3.183E-07 SD 2.758E-09 Beta (Alpha): 13319.4 (Beta): 4.18454E+10 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Wennergren et al, 2018 Terrestrial 3 Stattin et al, 2018 Terrestrial 0 Beerekamp et al, 2017 Terrestrial 3 Larsen et al, 2016 Terrestrial 1 Wennergren et al, 2018 (Swedish) and Beerekamp et al, 2017 (Dutch) provide retrospective analysis over 5 and 9 years, respectively, of skeletally mature patients of ages 16 years and older. They use national databases to determine the incidence of tibial (Wennergren et al) and lower leg (Beerekamp et al) fractures. Stattin et al, 2018 provides a hazard ratio comparison of all fracture types, including lower leg fractures, in cross- country skiing athletes compared to controls. This data is not well suited for incidence for this CLiFF. Larsen et al, 2016 provides the incidence of all patellar fractures in Denmark from 2005-2014. Patellar fractures are uncommon, thus this article is less applicable to the astronaut corps. 6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Pre-flight requirements include training on exercise devices to prepare for in-flight use. In-flight, on the International Space Station (and previously on Mir), crewmembers are required to exercise for 2.5 hours per day (1 hour of aerobic conditioning and 1.5 hours or resistive exercise) (NASA, MedB 5.2).

### BEST CASE SCENARIO DEFINITION

A closed, non-comminuted, non-segmented, non-displaced, or minimally displaced fracture resulting in no neurovascular compromise to the affected limb.

### WORSE CASE SCENARIO DEFINITION

- A fracture that is: open, comminuted, segmented, moderatlely to severely displaced, intra-articular, or results in neurovascular compromise to the

affected limb, likely requiring surgical intervention.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Fracture - Knee Fracture - Tibial Shaft Fracture - Proximal Fibular Fracture - Pilon

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The definition of this condition is inclusive of multiple traumatic fractures of the lower leg. The best- and worst-case probabilities vary significantly depending on the type of fracture involved. Best-case/worst case scenario probabilities are as follows based on literature from some of the fracture types included in the condition: Tibial Fracture: BC 57.8%, WC 42.20% (Wennergren et al, 2018), Composite "Lower Leg Fracture:" BC 49.5%, WC 50.5% (Beerekamp et al, 2017), Patellar Fracture: BC 23.6%, WC 76.4% (Larsen et al, 2016). For the purposes of this Cliff the "Lower Leg Fracture" best-case (49.5%) and worst-case (50.5%) probabilities will be used since it most closely meets the broad definition of the Cliff, but individual values are included here should they be needed for future efforts.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Wennergren et al, 2018 Terrestrial 3 Stattin et al, 2018 Terrestrial 2 Beerekamp et al, 2017 Terrestrial 3 Larsen et al, 2016 Terrestrial 2 The applicability of these papers to the astronaut corps varies. Wennergren et al and Beerekamp et al included patients from 16 years of age and older. Stattin et al looked at cross-country skiers vs. non-cross country skiers to compare rates of injuries. Larsen et al focuses specifically on patellar fractures. Notably, all of the studies were outside the United States (Swedish, Danish, and Dutch). Regardless, the values for best- and worst-case probability in these studies appear to be valid and coincide with the worst-case scenario definition for this condition based on complications such as open fractures, or need for surgery. 6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### Condition TI% Duration TI% Duration TI% RTDC LOCL

### Case Composite Probability

Scenario Incidence % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best Surface-Ops EVA: 49.5 - 49.5 100 1.22 6.93596 168 1680 0 0 1.1 0 0

Case (TBC) mean 3.183E-7 SD 2.758E-9. Treated 50.5 - 50.5 100 2.07 28.1557 1008 12600 7.0954 0 100 0 4.9

## Worst Case

(TWC) Untreated N/A N/A N/A 1.22 33.5769 1123 12600 0.58464 0 1.1 0 0

## Best Case

(UTBC) Untreated N/A N/A N/A 2.07 46.532 1123 17250 20.5687 0 100 28 50

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The RTDC surrogate was "hospitalization," but the need for surgery was also considered an RTDC surrogate for RTDC probabilities. The definition for this condition encompasses any traumatic fracture involving the distal leg . This broad definition made the literature search for duration, RTDC, and LOCL complicated given that different fracture types and locations have very different prognoses. Thus, data was found for individual fracture types and each scenario was analyzed on an individual level to arrive at the most appropriate values. See specific scenarios below for an explanation of how duration, RTDC, and LOCL were derived.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The definition of this condition inherently includes multiple fracture types in the distal leg. Thus, durations of treatment for distal leg fractures, tibial plateau and tibial shaft fractures, patellar fractures, and proximal fibular shaft fractures were obtained. The minimum value for duration of healing (168 hours for proximal fibular shaft fracture) and maximum value for duration of healing (1680 hours for patellar fracture) were used for the duration range (Boden et al, 1999; Melvin and Mehta, 2011). RTDC probabilities for tibial plateau fracture (0%) (Porter and Fenton, 2011), patellar fracture (0-1.1%) (Gwinner et al, 2016), and proximal fibular shaft fracture (0%) (Pallin, 2018) were obtained. The range (0-1.1%) was accordingly assigned for RTDC since it is dependent on the type of fracture. No evidence of mortality secondary to a best-case distal leg fracture could be found from tibial plateau fracture (Porter, 2011), patellar fracture (Gwinner et al, 2016), tibial shaft fracture (Schmidt et al, 2003), or proximal fibular fracture (Pallin, 2018). Thus, LOCL probability was assigned as 0%.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The definition of this condition inherently includes multiple fracture types in the distal leg. Reviewed studies indicate a healing time of 6-8 weeks with surgical intervention for worst-case lower extremity distal leg fractures. The minimum duration was assigned 1,008 hours (6 weeks). This is based on surgical intervention for worst-case tibial plateau fractures (Thomas et al, 2009) and Patellar Fractures (Melvin and Mehta, 2011). The maximum duration, 12600 hours (75 weeks), was re-used from the untreated best-case scenario. Since surgical intervention will be unavailable inflight, it was felt that this was a better approximation for healing time than data based on surgical intervention of these fractures. The RTDC surrogate of need for surgery was used to inform the RTDC probability. RTDC probabilities were obtained from the literature for tibial plateau fracture (100-100%) (Porter and Fenton, 2011), Patellar Fracture (100-100%) (Melvin and Mehta, 2011), Tibial Shaft Fracture (Schmidt et al, 2003) (100-100%) and Proximal Fibular Shaft Fracture (0-87.5%) (Boden et al, 1999). The full range 0-100% was used for RTDC probability. LOCL probability estimates were found in the literature for tibial plateau fracture (0-4.9%) (Elsoe and Larsen, 2020), patellar fracture (0-1.3%) (Larsen and Elsoe, 2018), tibial shaft fractures (0-3%) (Tampe et al, 2018), and proximal fibular fractures (0%) (Pallin, 2018). Accordingly, the LOCL probability range was set at 0- 4.9%. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Due to the paucity of data available regarding untreated distal leg fractures, treated (casting) tibial shaft fracture data were used to estimate the UTBC scenario duration. The minimum duration was assigned 1123 hours (6.7 weeks) and the maximum was assigned 12,600 hours (75 weeks) based on Schmidt et al, 2003. The RTDC probability for this condition is based on need for surgical intervention. By definition, best-case fractures are not anticipated to require surgical intervention. The RTDC probability from the TBC scenario was repeated for this scenario (0-1.1%). No data could be located for RTDC probabilities of traumatic tibial fractures. The full range 0-100% was assigned for RTDC. No data were available to inform the LOCL probability. The LOCL probability was assigned 0% based on SME opinion.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The duration for the UTBC was repeated for the minimum duration for this scenario. The maximum duration was informed by Pritchett, 1997. It is a small study of 18 patients with too many comorbidities to safely undergo surgery for widely displaced patellar fractures. A third of the patient's died, but of the 12 living patients at 2 years of follow-up 9 reported good outcomes, although all patients had extensor lag of more than twenty degrees.

Due to a paucity of data the 2-year follow-up period from this study was used as the upper limit for the duration for this scenario. No data was found informing RTDC for this scenario, thus the RTDC from the TWC scenario was repeated (0-100%). The paucity of data for untreated fractures is most apparent in relation to LOCL probability. The range of 28-50 was taken from the Fracture – Femur cliff data (LOCL of traumatic, displaced intracapsular femur fractures in a non-operative elderly comorbid population - Gregory et al, 2010). SME opinion is that the likelihood of LOCL from a distal leg fracture would not exceed that of a femur fracture.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC) 6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 5

| Citation | Source | LOC Value |
| ---------------------- | ----------- | --------- |
| Thomas et al, 2009 | Terrestrial |  |
| Melvin and Mehta, 2011 | Terrestrial |  |
| Schmidt et al, 2003 | Terrestrial |  |
| Pallin, 2018 | Terrestrial |  |
| Rome et al, 2005 | Terrestrial |  |
| Allen et al, 2004 | Terrestrial | 2 |
| Slatyer, 1995 | Terrestrial |  |
| Swenson et al, 1997 | Terrestrial |  |
| Uvaraj et al, 2007 | Terrestrial |  |
| Boden et al, 1999 | Terrestrial |  |
| Pritchett, 1997 | Terrestrial |  |

This condition covers multiple different traumatic fracture types in the tibia, fibula, and patella.  This is a challenge for duration because the treatment course varies widely between fracture types. The durations listed in Table 4 are the minimum and maximum duration times found in the literature search based on different fracture types when literature was available (tibial shaft fracture, tibial plateau fracture, patellar fracture, proximal fibular fracture).  Thus, the durations values have wide distributions.  This is a limitation due to the multiple fracture types being combined in this condition. TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ----------------------- | ----------- | --------- |
| Porter and Fenton, 2011 | Terrestrial |  |
| Gwinner et al, 2016 | Terrestrial |  |
| Schmidt et al, 2003 | Terrestrial |  |
| Pallin, 2018 | Terrestrial | 2 |
| Melvin and Mehta, 2011 | Terrestrial |  |
| Boden et al, 1999 | Terrestrial |  |
| Uvaraj et al, 2007 | Terrestrial |  |

This condition covers multiple different traumatic fracture types in the tibia, fibula, and patella. This is a challenge for RTDC because the severity/consequence of the fractures varies significantly depending on the location and type of fracture. Therefore, the RTDC probabilities have a wide spread for this condition. Having a lower bound of 0% for some of these scenarios may underestimate the true RTDC probability because it was assigned based on less consequential fracture types/locations.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ----------------------- | ----------- | --------- |
| Porter and Fenton, 2011 | Terrestrial |  |
| Gwinner et al, 2016 | Terrestrial |  |
| Schmidt et al, 2003 | Terrestrial |  |
| Pallin, 2018 | Terrestrial |  |
| Elsoe and Larsen, 2020 | Terrestrial | N/A |
| Larsen and Elsoe, 2018 | Terrestrial |  |
| Tampe et al, 2018 | Terrestrial |  |

6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 6

### Citation Source LOC Value

Gregory et al, 2010 Terrestrial This condition covers multiple different traumatic fracture types in the tibia, fibula, and patella. This is a challenge for LOCL because risk of loss of crew life varies depending on the type and location of the fracture. There is also a paucity of data for untreated fractures.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Distal leg fracture refers to a fracture of the tibia and/or fibula, with the best-case scenario representing uncomplicated fractures and the worst- case scenario representing complicated fractures. Any fracture, if left untreated, could result in further complications such as malunion, loss-of function, and/or chronic pain. A worst-case scenario fracture, left untreated, could result in additional significant complications such as neurovascular compromise.

- CNES: Fracture knee (tibial), tibial shaft fracture, proximal fibular fracture, pilon fracture

Diagnostic Scope and Resourcing: In the best-case scenario, diagnosis is based on history, physical examination (musculoskeletal and neurologic), and imaging. Plain film (X-Ray), CT, and MRI will be unavailable inflight. Musculoskeletal ultrasound was included in the CRT as it may serve as a useful adjunct in diagnosis for some cases, but it was not considered a necessary capability to diagnose distal leg fracture.

In the worst-case scenario, diagnosis is based on history, physical examination (musculoskeletal, neurologic, and vital signs), and imaging. In some cases, musculoskeletal ultrasound may be contraindicated due to risk of contamination of an open fracture, or further displacement of the fracture(s). The utility of musculoskeletal ultrasound would be determined on a case-by-case basis. It was included as a non-necessary capability.

This diagnostic framework is consistent with the terrestrial workup for distal leg fracture with the exception of the inability to perform plain film X-Ray (and if warranted CT or MRI), and thereby using Musculoskeletal Ultrasound as a possible surrogate.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus Clinical Phase 1 duration: Best Case CP1: 1.22 hours Worst Case CP1: 2.07 hours This CRT includes a scope of practice code of 5 (which correlates to an “Experienced procedure trained generalist attending (ED attending)” and was included for musculoskeletal ultrasound and interpretation.

Treatment Scope and Resourcing: Most best-case distal leg fractures in terrestrial populations resolve with an initial period of splinting, followed by 4-6 weeks of casting. Splinting was considered a necessity, whereas casting was included as a capability but not considered a necessity in this CRT. Although 3D printing offers potential for splinting of musculoskeletal injuries, it remains a largely experimental process and it is not within the scope of this CRT. Depending on the fracture location, non-weightbearing status may be used terrestrially. If the fracture were to occur in microgravity phases of flight, non- weightbearing status is already achieved. Should the fracture occur during surface operations, it was assumed that partial gravity combined with improvised mobility assistance utilizing materials available during surface operations would sufficiently provide non-weightbearing status (i.e. crutches were not included in this CRT). Physical therapy is recommended post-immobilization. Exercise modification is also recommended, but not built into the CRT as this does not represent a clinical resource. Pain is variable depending on the patient. Acetaminophen and NSAIDs were included in the best-case treatment scenario (acetaminophen given a higher primacy due to evidence that NSAIDs may interfere with bone healing).

Terrestrially, all worst-case fractures warrant surgical intervention. Thus, a worst-case distal leg fracture in-flight would present a significant treatment challenge. These fractures would warrant an attempted reduction to achieve more physiologic alignment. Note that nerve blocks for fracture reduction are not included in the scope for IMPACT 1.0 but could be considered in the future. Open fractures inflight would be treated with copious irrigation, wound closure, prophylactic antibiotics and splinting with possible casting after wound healing. Again, both splinting and casting were included as capabilities, but only splinting was considered a necessary capability in this CRT. Both plaster and fiberglass (and their associated means of removal) were included for trade-space analysis. Pain from a worst-case fracture may require narcotic analgesia. Physical therapy would be advised until the end of the mission.

Communications and Support Needs: While real-time video and audio loop communications are desired for diagnosis and treatment, they were not considered a necessity, particularly in the best-case scenario. For the WC, consultation with ground specialists to facilitate treatment and healing was considered necessary given the limited diagnostic and treatment capabilities in-flight.

## REFERENCES

1. Boyd AS, Benjamin HJ, Asplund CA. Splints and Casts: Indications and Methods. AFP 2009; 80:491–9.

2. Nanchahal J, British Association of Plastic R and AS. Standards for the management of open fractures of the lower limb. London: Royal Society

of Medicine Press Ltd.; 2009.

3. Clinical Practice Guidel : Distal tibia and-or fibula physeal fractures - Outpatient clinics. Retrieved 1 February 2021 from

https://www.rch.org.au/clinicalguide/guideline_index/fractures/ankle_outpatients/

### IMM CLIFF RECONCILATION COMMENTS

Fracture – Distal Leg is a new condition, not previously accounted for in the IMM. The closest condition in IMM was “Lower Extremity Stress Fracture.” Because of this, the incidence, duration, and outcomes (RTDC, LOCL), and task impairment are appropriately unique in this CLiFF as compared to the IMM “Lower Extremity Stress Fracture” CLiFF.

### LIMITATIONS SUMMARY

6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 7

This condition covers multiple different traumatic fracture types in the tibia, fibula, and patella. This is a challenge for incidence, duration, RTDC, and LOCL as these numbers vary by fracture type, which can have a protracted treatment course. The durations listed in Table 4 are the minimum and maximum duration times found in the literature search based on different fracture types when literature was available (tibial shaft fracture, tibial plateau fracture, patellar fracture, proximal fibular fracture). Thus, the durations values have wide distributions. Overall the confidence in the duration, RTDC, and LOCL is decreased by combining so many fracture types into one condition. 6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  | 89 |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  |  |  |  | 145 |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 |  | 89 |  |  | 145 |  |  |  |  |  |
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

| Best | 132 |  |  |  |  |  | 34 | 211 | 522 | 3763 | 0.138719 | 13.8719 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 2505 | 3763 | 0.665692 | 66.5692 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  | 414 | 22 | 196 | 34 | 34 | 211 | 1852 | 3763 | 0.492161 | 49.2161 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 2728 | 3763 | 0.724953 | 72.4953 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  | Inter- |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | -------------- | -------- | ------ | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  |  | Communications | personal | Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple | Complex |  |  |  |  | pulmonary |  |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  |  |  |  |  |  | 145 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 9

Total Human

|  |  | Translation & |  | Total Tasks |  |  |
| --- | --- | ------------- | --- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) | Extremity Standing (g) |  | Equipment Ops |  | Category |  |
| ----- | ---------------------- | -------------- | ------------- | --------- | ---------- | --- |
|  |  | (microgravity) |  | Condition | Tasks Full |  |

Mission Treated Best

|  |  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  | 22 |  |  | 22 | 3763 0.0058464 | 0.58464 |
| --- | --- | --- | --- | --- | -------------- | ------- |

Case (UTBC) Treated Worst

|  | 22 |  | 34 211 | 267 | 3763 0.070954 | 7.0954 |
| --- | --- | --- | ------ | --- | ------------- | ------ |

Case (TWC) Untreated Worst

| 132 | 22 196 | 34 | 34 211 | 774 | 3763 0.205687 | 20.5687 |
| --- | ------ | --- | ------ | --- | ------------- | ------- |

Case (UTWC) 6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 10

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

6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 11

## REFERENCES

Reference

1. Wennergren D, Bergdahl C, Ekelund J, Juto H, Sundfeldt M, Möller M. Epidemiology and incidence of tibia fractures in the Swedish Fracture

Register. Injury. 2018;49(11):2068-74. Epub 2018/09/18. doi: 10.1016/j.injury.2018.09.008. PubMed PMID: 30220634.

2. Stattin K, Hållmarker U, Ärnlöv J, James S, Michaëlsson K, Byberg L. Decreased Hip, Lower Leg, and Humeral Fractures but Increased

Forearm Fractures in Highly Active Individuals. J Bone Miner Res. 2018;33(10):1842-50. Epub 2018/06/23. doi: 10.1002/jbmr.3476. PubMed

- PMID: 29933501.

3. Beerekamp MSH, de Muinck Keizer RJO, Schep NWL, Ubbink DT, Panneman MJM, Goslings JC. Epidemiology of extremity fractures in the

Netherlands. Injury. 2017;48(7):1355-62. Epub 2017/05/11. doi: 10.1016/j.injury.2017.04.047. PubMed PMID: 28487101.

4. Larsen P, Court-Brown CM, Vedel JO, Vistrup S, Elsoe R. Incidence and Epidemiology of Patellar Fractures. Orthopedics. 2016;39(6):e1154-

e8. Epub 2016/08/19. doi: 10.3928/01477447-20160811-01. PubMed PMID: 27536953.

8. NASA. MEDB5.2 On-Orbit Strength & Conditioning. JSC28913. 2013 [cited 2021 5/4]. Available from:

https://lsda.jsc.nasa.gov/lsda_data/document/Project/MRID/MEDB_5_2_MR082L_1.28.2014_Project_02_26_2015_12_06_08.pdf.

9. Thomas C, Athanasiov A, Wullschleger M, Schuetz M. Current concepts in tibial plateau fractures. Acta Chir Orthop Traumatol Cech.

2009;76(5):363-73. Epub 2009/11/17. PubMed PMID: 19912699.

10. Melvin JS, Mehta S. Patellar fractures in adults. J Am Acad Orthop Surg. 2011;19(4):198-207. Epub 2011/04/06. doi: 10.5435/00124635-

201104000-00004. PubMed PMID: 21464213.

11. Schmidt AH, Finkemeier CG, Tornetta P, 3rd. Treatment of closed tibial fractures. Instr Course Lect. 2003;52:607-22. Epub 2003/04/15.

- PubMed PMID: 12690886.

13. Pallin DJ. Rosen's emergency medicine : concepts and clinical practice. In: editor RMWeRSHeMG-H, editor. Knee and Lower Leg. 9th ed.

Philadelphia, PA: Elsevier; 2018. p. 614-33.

16. Slatyer MA. Lower limb training injuries in an army recruit population: University of Newcastle; 1995.

17. Swenson JR EJ, DeHaven KE, Sebastianelli WJ, Hanks G, Kalenak A, Lynch JM. The effect of a pneumatic leg brace on return to play in

athletes with tibial stress fractures. The American journal of sports medicine. 1997;25(3):322-8.

18. Uvaraj NR, Mayil Vahanan N, Sivaseelam A, Mohd Sameer M, Basha IM. Surgical management of neglected fractures of the patella. Injury.

2007;38(8):979-83. Epub 2007/06/05. doi: 10.1016/j.injury.2007.02.025. PubMed PMID: 17543968.

19. Boden BP, Lohnes JH, Nunley JA, Garrett WE, Jr. Tibia and fibula fractures in soccer players. Knee Surg Sports Traumatol Arthrosc.

1999;7(4):262-6. Epub 1999/08/26. doi: 10.1007/s001670050160. PubMed PMID: 10462219.

20. Porter K, Fenton P. Tibial plateau fractures: A review. Trauma. 2011;13:181-7. doi: 10.1177/1460408610396422.

21. Gwinner C, Märdian S, Schwabe P, Schaser KD, Krapohl BD, Jung TM. Current concepts review: Fractures of the patella. GMS Interdiscip

Plast Reconstr Surg DGPW. 2016;5:Doc01. Epub 2016/01/28. doi: 10.3205/iprs000080. PubMed PMID: 26816667; PubMed Central PMCID: PMCPMC4717300.

22. Elsoe R, Larsen P. Tibial plateau fractures are associated with a long-term increased risk of mortality: a matched cohort study of 7950

patients. Arch Orthop Trauma Surg. 2020;140(11):1705-11. Epub 2020/03/17. doi: 10.1007/s00402-020-03408-4. PubMed PMID: 32172316.

23. Larsen P, Elsoe R. Patella fractures are not associated with an increased risk of mortality in elderly patients. Injury. 2018;49(10):1901-4.

Epub 2018/09/25. doi: 10.1016/j.injury.2018.07.003. PubMed PMID: 30244702.

24. Tampe U, Widmer LW, Weiss RJ, Jansson K. Mortality, risk factors and causes of death in Swedish patients with open tibial fractures - a

nationwide study of 3, 777 patients. Scand J Trauma Resusc Emerg Med. 2018;26(1):62. Epub 2018/07/27. doi: 10.1186/s13049-018-0531-0.

- PubMed PMID: 30045769; PubMed Central PMCID: PMCPMC6060521.

25. Gregory J J, Kostakopoulou K, Cool W P, Ford D J. One-year outcome for elderly patients with displaced intracapsular fractures of the

femoral neck managed non-operatively. Injury. 2010;41(12):1273-1276. Epub 2010/07/13. doi: 10.1016/j.injury.2010.06.009. PubMed PMID: 20630527

26. Pritchett JW. Nonoperative treatment of widely displaced patella fractures. The American Journal of Knee Surgery. 1997; 10(3):154-7;

discussion 147-8. PMID: 9280109

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 12

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

6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 13

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

### RTDC Removal to Definitive Care

### SANS Spaceflight-Associated Neuro-ocular Syndrome

### SAS Space Adaptation Syndrome

### SEVA Spaceflight Extravehicular Activity

### SME Subject Matter Expert

### SoP Standard Operating Procedure

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

6/15/2023 1:55:59 PM ICL53_Fracture - Distal Leg Cliff page: 14

---

## Source metadata

```yaml
source_filename: "fracture-distal-leg-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Lower Extremity Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1GH9oVT3fUQnw_v49KWxIFMr6imOnWXjA/view"
source_drive_id: "1GH9oVT3fUQnw_v49KWxIFMr6imOnWXjA"
source_sha256: 3cde629e71a11f98cef113bfbecedbae62c64c6d8d16667530b39f6a86998a69
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
