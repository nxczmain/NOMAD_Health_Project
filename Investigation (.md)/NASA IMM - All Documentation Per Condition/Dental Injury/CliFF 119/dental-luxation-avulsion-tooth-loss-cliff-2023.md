# Dental Luxation Avulsion Tooth Loss CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1d0p8IyadQRdjzDxjnpN-uS8_e40HIq0q/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Dental Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL32_Dental Luxation/Avulsion (Tooth Loss)

Dental luxation and avulsion are both complications of traumatic dental injuries (TDI) that are more likely to occur in pediatric and adolescent populations and are more likely in males. Dental fracture is the other TDI that is covered in a separate clinical finding form. Luxation can be classified into various types by the degree of displacement (i.e. concussion, subluxation, lateral luxation, extrusion, intrusion) and if the tooth is completely knocked out—avulsion [Goswami 2020]. Various factors such as force and direction of impact, shape and resilience, direction of the impacting object, and the reaction of surrounding tissues determine the extent of damage. Terrestrial complications include pulp canal obliteration, pulp necrosis, repair-related resorption, infection-related resorption, ankylosis-related resorption, or premature tooth loss. Terrestrial treatment options include monitoring (74%), splinting (14%), extraction (5%), and installation of a prosthesis (7%) [Assuncao 2011]. During spaceflight, though luxation/avulsion has never occurred before, the standard of care has been for expectant management without splinting or reimplantation of the avulsed tooth with symptom control including pain management and bleeding control.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

There have been 0 reported events of luxation/avulsion over 45.49 person-years (Menon 2012).

### ANALOG LITERATURE

When evaluating analog and terrestrial evidence, nearly all sources report evidence is with regards to mouth injuries in general, however, this CLiFF is specific to dental luxations and avulsions. While the majority of these injuries occur in non-permanent teeth and in males, we first sought to understand what percentage of dental injuries are luxations and avulsions before being able to calculate incidence. Vukovic et al 2013 revealed that 87.4% of dental injuries were luxations. Bucher et al 2013 revealed that luxations of permanent teeth accounted for 36.2% of dental injuries.

Avulsion rates were not reported in either study. In Wright et al 2007, 18.8% of the injuries were avulsions and 63.1% were luxations for a total of 81.9% of dental injuries being combined luxations and avulsions. In our modeling, we thus assume the probability of luxation or avulsion given the injury is 0.75. In other words, 75% of these injuries result in luxation or avulsion. Under this pretense, Deutsch 2008 reports on dental events during periods of isolation in the U.S. Submarine Force. There were 109 dental emergency initial visits. Rate of dental visits was 5.0 per 100,000 person- days. For injury to mouth, there were 18 cases with an IR of 0.8 per 100kpd. The IR is 0.002922 per person-year which means the person-years at sea is 6160.164. IR: 0.00292 (95%CI: 0.001786, 0.004529). Thomas et. al. 2003, officers had 215,086 person-days (588.8734 person-years) and enlisted had 1,955,521 person-days (5353.925 person-years). IR rate was 0.031 in officers indicating a total of 18 cases for officers. IR rate was 0.085 for enlisted indicating a total of 455 cases in the enlisted. Total cases is 473 (18+455) and total person-years at sea is 5942.8. IR: 0.080 (95%CI: 0.073, 0.087). Thomas et. al. 2003 revealed that officers had 215,086 person-days (588.8734 person-years) and enlisted had 1,955,521 person-days (5353.925 person-years). IR rate was 0.031 in officers indicating a total of 18 cases for officers. IR rate was 0.085 for enlisted indicating a total of 455 cases in the enlisted. Total cases is 473 (18+455) and total person-years at sea is 5942.8. IR: 0.080 (95%CI: 0.073, 0.087).

### TERRESTRIAL LITERATURE

Petti 2018 performed a metanalysis evaluating 102 primary studies of dental injury in permanent dentition accounting for 268,755 individuals. Under the assumptions made above, IR: 0.0282 (9%CI: 0.0228, 0.0342). 140,416 person-years indicates 3960 events.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 1

mean 0.02188 SD 3.32E-4

### INCIDENCE SUMMARY

Taking the analog data from Deutsch et al 2008 and Thomas et al 2003 as well world-wide terrestrial data from Petti et al 2018, the posterior distribution for the incidence rate of dental injuries and the assumption that 75% of dental injuries result in avulsion or luxation, under an uninformative prior is Gamma(shape=4343.3, rate=198505) with mean 0.02188 and SD 3.32E-4.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0218801 SD 0.000332 Gamma (Shape): 4343.3 (Rate): 198505 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Menon, 2012 Spaceflight 3 Deutsch, 2008 Analog 3 Thomas, 2003 Analog 3 Petti, 2018 Terrestrial 3 Vukovic, 2013 Terrestrial 2 Bucher, 2013 Terrestrial 2 Wright, 2007 Terrestrial 2 While there is robust evidence to determine the incidence of traumatic dental injuries terrestrially and in analog populations, spaceflight incidence always suffers from low numbers. Other limitations to author confidence in this incidence include the fact that most studies are evaluating dental injuries more broadly, while our definitions are specific to luxation and avulsion. Furthermore, many dental injuries occur in non-permanent teeth, and while we attempted to select for specific incidence of permanent teeth, this incidence estimation may be conservatively elevated. 6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

A preflight dental health check is performed for all crewmembers inclusive of a brief dental history, periodontal evaluation, oral cancer screening, and odontal evaluation. Further, a full dental orthopantomogram x-ray or full mouth x-ray series is performed within two years of launch to fully assess the underlying dental health of crewmembers in order to correct any potential dental problems well in advance of mission launch. All astronauts are expected to maintain optimal physical and oral health and to follow oral hygiene practices.

### BEST CASE SCENARIO DEFINITION

Luxation or avulsion due to trauma with mild pain and bleeding that is easily controlled.

### WORSE CASE SCENARIO DEFINITION

Avulsion due to trauma, with moderate to severe pain that may require narcotic analgesics, bleeding is prolonged beyond 20 minutes.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Calculating a best case versus worst case probability in the setting of dental luxation and avulsion is complicated given limitations of our definitions.

While the data on traumatic dental injuries is primarily considering the severity of the injury itself (i.e. luxation vs. avulsion), we are considering complications from the trauma including pain or bleeding that are lasting longer than 20 minutes. Richardson et al 2005 is unique among our sources in that the author breaks down the complication rates in the setting of dental trauma. Though there is not an exhaustive of complications, in combining the rate of pain and bleeding complications listed, the rate is 4.7% and thus we will assign this as the WC probability.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Richardson, 2005 Analog 3 Wright, 2007 Terrestrial 2 Bastone, 2000 Terrestrial 2 There are no studies that break down complication rates in a way that meet our worst case definition, however, we have reasonable confidence in the combined bleeding/pain complication rate from Richardson et al, 2005 that takes place in an analog population. 6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 0.02188 95.3 - 95.3 100 1.083 30.4677 0.167 2 0 0 0 0 0 Case (TBC) SD 3.32E-4 Treated Worst 4.7 - 4.7 100 1.083 34.9322 0.5 72 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 1.083 30.4677 0.5 72 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.083 34.9322 24 72 0 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

- This CLiFF is one of a series of dental conditions including: dental abscess, dental crown loss, dental filling loss, dental fracture/exposed pulp, and

dental luxation/avulsion. Overall, there is a paucity of evidence evaluating the treatment of dental luxation/avulsion in remote or extreme conditions.

Even the closest analogs from which to draw treatment considerations from (e.g. deployed military settings) have emergency evacuation available for management of traumatic dental injuries. During exploratory spaceflight, dental luxation/avulsion is unlikely to cause significant task impairment or LOCL, and thus, RTDC is not reasonable even if it were feasible. Furthermore, given that splinting or reimplantation are both impractical for just- in-timing training of crewmembers, and that the risk of complication or task impairment without definitive treatment is low, treatment during both best case (luxation) and worst case (avulsion) is largely expectant with symptom control as outlined below.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Treated best case (TBC) scenarios would include a traumatic dental injury that causes luxation (displacement) of the tooth that is either expectantly managed with passive repositioning or gentle active repositioning. Bleeding resolves spontaneously or with active pressure and gauze in less than 20 minutes. Pain is mild and either does not require treatment or is sufficiently treated with onboard non-narcotic analgesics. Possible impairment of mastication caused by luxation/avulsion to many teeth is not considered as part of this modeling. In the absence of following terrestrial guidelines for repositioning or replacing the avulsed tooth with 10 minutes to 2 hours, there is a paucity of data from which to determine the duration of management of pain/bleeding during a luxation/avulsion event. With that said, given the terrestrial expectation for management, especially in a best-case scenario, this time frame is reasonable.

TREATED WORST CASE SCENARIO (TWC) COMMENTS Treated worst case (TWC) scenarios would include complete avulsions where, either a) bleeding does not resolve within 20 minutes despite conservative measures including pressure/gauze, or, b) pain is moderate to severe and is not controlled despite onboard non-narcotic analgesics and/or requires escalation to narcotic pain management. TWC scenarios assume that bleeding and pain will eventually be managed successfully (i.e. not leading to RTDC [surrogates: hospitalization or emergency surgery] or LOCL), but may or may not have greater task impairment. Further, this model assumes that the tooth, when avulsed, is not aspirated or reimplanted, and that infection does not occur, as that scenario is featured in the dental abscess CLiFF. Possible impairment of mastication caused by avulsion to many teeth is also not considered as part of this modeling.

With proper treatment it is possible this condition could resolve within 0.5 hours, however in the worst-case scenarios, pain may still be present for up to 72 hours. The current search did not reveal any sources to guide this maximum duration of pain, however, as this number was also used with the previous dental avulsion CLiFF, this is a reasonable and logical estimation.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Treated worst case (TWC) scenarios would include complete avulsions where, either a) bleeding does not resolve within 20 minutes despite conservative measures including pressure/gauze, or, b) pain is moderate to severe and is not controlled despite onboard non-narcotic analgesics and/or requires escalation to narcotic pain management. TWC scenarios assume that bleeding and pain will eventually be managed successfully (i.e. not leading to RTDC [surrogates: hospitalization or emergency surgery] or LOCL), but may or may not have greater task impairment. Further, this model assumes that the tooth, when avulsed, is not aspirated or re-implanted, and that infection does not occur, as that scenario is featured in the dental abscess CLiFF. Possible impairment of mastication caused by avulsion to many teeth is also not considered as part of this modeling.

With proper treatment it is possible this condition could resolve within 0.5 hours, however in the worst case scenarios, pain may still be present for up to 72 hours. The current search did not revealed any sources to guide this maximum duration of pain, however, as this number was also used with the previous dental avulsion CLiFF, this is a reasonable and logical estimation.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Untreated worst case (UTWC) scenarios would include a traumatic dental injury that causes complete avulsion of the tooth. The tooth is not re- implanted. Further, either bleeding continues beyond 20 minutes, or pain is poorly-controlled with non-narcotic pain medications. UTWC scenarios also assume that bleeding and pain will eventually resolve even without treatment and not lead to RTDC or LOCL, but may or may not lead to greater task impairment. Further, this model assumes that the avulsed tooth is not aspirated and that infection does not occur, as that scenario featured in the dental abscess CLiFF. Possible impairment of mastication caused by luxation/avulsion to many teeth is not considered as part of this modeling. In line with the previous CliFF a duration of 24-72 hours of symptoms without treatment is both a logical and reasonable estimate. RTDC surrogates of hospitalization or emergency surgery are not expected for this condition even without treatment.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC) 6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 5

| Citation | Source | LOC Value |  |
| ----------- | ----------- | --------- | --- |
| Khan, 2019 | Terrestrial |  |  |
| Dale, 2000 | Terrestrial |  | 2 |
| Reddy, 2019 | Terrestrial |  |  |

There is a paucity of evidence with which to guide the duration of management of luxation and avulsion in spaceflight especially as the standard of care for formal splinting or replacement of the tooth and endodontic therapy will not be available. Furthermore, spaceflight resourcing or crewmember expertise with managing dental conditions also may alter the duration of treatment or symptoms as well thus leading to a low level of confidence. TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------- | ----------- | --------- | --- |
| Soder, 1977 | Terrestrial |  |  |
| Borssen, 2000 | Terrestrial |  |  |
| Brullmann, 2010 | Terrestrial |  |  |

3

| Ceallaigh, 2007 | Terrestrial |  |  |
| --------------- | ----------- | --- | --- |
| Chauhan, 2016 | Terrestrial |  |  |
| Zhang, 2011 | Terrestrial |  |  |

Though all of these are terrestrial studies that are managing dental luxation and avulsion to a different standard of care than that of spaceflight, there is a high level of confidence that dental luxation/avulsion in either best or worst case is unlikely to require hospitalization or emergency surgery (the two surrogates for RTDC).

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------- | ----------- | --------- | --- |
| Enabulele, 2016 | Terrestrial |  |  |

3

| Zallen, 2010 | Terrestrial |  |  |
| ------------ | ----------- | --- | --- |

Though all of these are terrestrial studies that are managing dental luxation and avulsion to a different standard of care than that of spaceflight, there is a high level of confidence that dental luxation/avulsion in either best or worst case is unlikely to lead to LOCL.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Dental luxation or avulsion is likely to occur during a traumatic event that may injure more than just the teeth. However, all other injuries, including other dental injuries, are beyond the scope of this CLiFF. After luxation or avulsion occur, complications include pulp canal obliteration, pulp necrosis, repair-related resorption, infection-related resorption, ankylosis-related resorption, or premature tooth loss, and thus treatment is aimed at mitigating these complications.

- CNES: None

### Diagnostic Scope and Resourcing

In the best-case scenario, diagnosis is based on history and physical examination (limited dental exam). X-rays, mobility testing, and pulp vitality testing will be unavailable inflight. In the worst-case scenario, these diagnostic capabilities and limitations are identical.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1.083 hours CP1 WC (Treated or Untreated): 1.083 hours 6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 6

The highest scope of practice for diagnosis is 4 (intern/PA/NP).

### Treatment Scope and Resourcing

Terrestrial treatment options following luxation in general may include monitoring, splinting, extraction, and installation of a prosthesis. In the best- case scenario in spaceflight, the cornerstones of management are going to revolve around symptom control such as pain control and bleeding control. Mild dental bleeding can be managed with cottons balls/swabs and gauze. Pain management may be treated with oral NSAIDs and Tylenol.

Inflammation and infection prophylaxis of the dental socket should be managed with demeclocycline/triamcinolone topical if available as this may mitigate the risk of infection-related resorption and pulp necrosis if it is available. Alternatives can include triamcinolone topical and chlorhexidine topical if it is not available. While splinting of a luxated tooth can also lead to more injury, gentle movement and splinting with limited resources such as foil can be considered, however, this may just be managed expectantly as historically splinting has not been deemed possible in spaceflight.

Though these are much less likely to be utilized terrestrially, during spaceflight, the typical management by dental teams will not be available.

In worst-case scenarios where there is moderate to severe pain or prolonged bleeding, more resources are required. It is possible that irrigation equipment, oral sutures, tranexamic acid, and gingival anesthesia may also be necessary. Further, oral narcotics may also be needed for a short duration in addition to NSAIDs and Tylenol. Lastly, infection prophylaxis with oral amoxicillin or clindamycin can be considered in certain worse case scenarios. The remainder of the treatment options remain the same, however, because this definition assumes complete avulsion, then dental splinting would not be under consideration. Further endodontic treatment, root canal, more advanced splinting, or replacement of an avulsed tooth are all beyond the scope of treatment.

### Communications and Support Needs

While real-time video and audio loop communications are desired for diagnosis and treatment, they were not considered a necessity, particularly in the best-case scenario. For the WC, consultation with ground specialists to facilitate treatment and healing was considered necessary given the limited diagnostic and treatment capabilities in-flight.

## REFERENCES

All references used for this were already included when making the CLIFF. So none to add to the CLiFF.

### IMM CLIFF RECONCILATION COMMENTS

Multiple analog studies were taken from the previous IMM effort and added to our incidence calculations and best case/worst case probabilities for consideration.

### LIMITATIONS SUMMARY

There are multiple limitations throughout this CliFF. The first is that dental luxation and avulsion has not occurred in spaceflight. Further, in microgravity, the forces needed to cause such an injury are unlikely to be generated and safety measures to prevent luxation or avulsion have been engineered into on-board systems. During partial gravity, gravity well, and launch/landing operations, helmets provide protection to the oral cavity. Astronauts have been trained to avoid movements that would result in dental injury. For example, the calculated incidence would predict an occurrence of this medical condition within 45.7 person-years of spaceflight, yet there has not yet been a single case in about 50 person-years.

Thus, the use of terrestrial and analog data, while robust, most likely overestimates the incidence of this medical condition. The second is that both analog and terrestrial data are often generalized for dental traumas rather than reporting specifically on luxation/avulsion. Third is the fact that most luxation/avulsion injuries happen in non-permanent teeth (i.e. in children). The last limitation is our own definitions of best case and worst case.

While considerations of pain and bleeding are both reasonable, there is a paucity of literature specifically evaluating and reporting on the incidence or duration of such complications. 6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  | Cardio- |  |  |  |  |
| --- | ----------------------- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best | 664 |  | 89 |  | 145 | 5 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | ---- | --- | --- | --- |

Case (TBC) Untreated

| Best | 664 |  | 89 |  | 145 | 5 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | ---- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 223 664 | 113 | 89 |  | 145 | 5 13 |  |  |  |
| ----- | ------- | --- | --- | --- | --- | ---- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 664 | 113 | 89 |  | 145 | 5 13 |  |  |  |
| --- | ------- | --- | --- | --- | --- | ---- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  | Translation & |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity Standing (g) |  | Equipment | Ops | Category |  |  |
| --- | ----- | --- | ---------------------- | -------------- | --------- | --------- | -------- | --- | --- |
|  |  |  |  | (microgravity) |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best | 132 564 | 414 | 22 |  | 34 | 211 2293 | 3763 | 0.609354 | 60.9352 |
| ---- | ------- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 564 | 414 | 22 |  | 34 | 211 2293 | 3763 | 0.609354 | 60.9352 |
| ---- | ------- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 564 | 414 | 22 |  | 34 | 211 2629 | 3763 | 0.698645 | 69.8644 |
| --- | ------- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 564 | 414 | 22 |  | 34 | 211 2629 | 3763 | 0.698645 | 69.8644 |
| --- | ------- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |
| --- | ----------------------- | -------------- | --------------- | ------- | --------- | --------- | ----- | --- | --- |
|  |  | Communications | personal Vision | Hearing |  | Dentition | GI GU |  |  |
|  | Simple Complex |  |  |  | pulmonary |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 8

Total Human Translation & Total Tasks Hand Lower Ambul & Don/Doff Pressure System Hand (Any) Upper Extremity Stabilization Impaired By TI Decimal TI % (Dom) Extremity Standing (g) Equipment Ops Category (microgravity) Condition

### Tasks Full

Mission Treated Best 0 3763 0 0 Case (TBC) Untreated Best 0 3763 0 0 Case (UTBC) Treated Worst 0 3763 0 0 Case (TWC) Untreated Worst 0 3763 0 0 Case (UTWC) 6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 9

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

CP2: none. CP3: none.

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

6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 10

## REFERENCES

Reference Goswami M, Rahman B, Singh S. Outcomes of luxation injuries to primary teeth-a systematic review. J Oral Biol Craniofac Res. 2020;2(10):227- 232. Assuncao LRDS, Ferelle A, Iwakura MLH. Luxation injuries in primary teeth: a retrospective study in children assisted at an emergency service.

Braz Oral Res. 2011;25(2):150-156. Menon A. Review of Spaceflight Dental Emergencies. NASA/TM-2012-217368 Deutsch WM. Dental events during periods of isolation in the U.S. submarine force. Mil Med 2008 Jan;173(1 Suppl):29-37.

Chaffin J, King JE, Fretwell LD. U.S. Army dental emergency rates in Bosnia. Mil Med 2001 Dec;166(12):1074-8.

Thomas TL, Garland FC, Mole D, Cohen BA, Gudewicz TM, Spiro RT, et al. Health of U.S. Navy submarine crew during periods of isolation.

Aviat Space Environ Med 2003 Mar;74(3):260-5.

Reddy, L. V., Bhattacharjee, R., Misch, E., Sokoya, M., & Ducic, Y. (2019). Dental Injuries and Management. Facial Plast Surg, 35(6), 607-613.

Dale, R. A. (2000). Dentoalveolar trauma. Emerg Med Clin North Am, 18(3), 521-538. https://doi.org/10.1016/s0733-8627(05)70141-3 Petti, S., Glendor, U., & Andersson, L. (2018). World traumatic dental injury prevalence and incidence, a meta‐analysis—One billion living people have had traumatic dental injuries. Dental traumatology, 34(2), 71-86.

Vukovic A et al. Traumatic dental injuries in Serbian children--epidemiological study. Srp Arh Celok Lek. 2013;141(11-12):744-9 Bucher K et al. Traumatic dental injuries at a German university clinic 2004-2008. Dent Traumatol. 213;29(2):127-33.

Wright G et al. Dentoalveolar trauma in Glasgow: an audit of mechanism and injury. Dent Traumatol. 2007; 23(4):226-231.

Richardson PS. Dental morbidity in United Kingdom Armed Forces, Iraq 2003. Mil Med 2005 Jun;170(6):536-41.

Bastone, E. B., Freer, T. J., & McNamara, J. R. (2000). Epidemiology of dental trauma: a review of the literature. Australian dental journal, 45(1), 2-9. Khan J, Zusman T, Wang Q, Eliav E. Acute and chronic pain in orofacial trauma patients. Dent Traumatol. 2019; 35(6):348-357.

Söder, P. O., Otteskog, P., Andreasen, J. O., & Modéer, T. (1977). Effect of drying on viability of periodontal membrane. Scand J Dent Res, 85(3), 164-168. https://doi.org/10.1111/j.1600-0722.1977.tb00549.x Borssén, E., & Holm, A. K. (2000). Treatment of traumatic dental injuries in a cohort of 16-year-olds in northern Sweden. Endod Dent Traumatol, 16(6), 276-281. Brüllmann, D., Schulze, R. K., & d'Hoedt, B. (2010). The treatment of anterior dental trauma. Dtsch Arztebl Int, 108(34-35), 565-570.

Ceallaigh, P. O., Ekanaykaee, K., Beirne, C. J., & Patton, D. W. (2007). Diagnosis and management of common maxillofacial injuries in the emergency department. Part 5: Dentoalveolar injuries. Emerg Med J, 24(6), 429-430.

Chauhan, R., Rasaratnam, L., Alani, A., & Djemal, S. (2016). Adult Dental Trauma: What Should the Dental Practitioner Know? Prim Dent J, 5(3), 70-81. Zhang, X., & Gong, Y. (2011). Characteristics of avulsed permanent teeth treated at Beijing Stomatological Hospital. Dent Traumatol, 27(5), 379- 384. Enabulele, J. E., Oginni, A. O., Sede, M. A., & Oginni, F. O. (2016). Pattern of traumatised anterior teeth among adult Nigerians and complications from late presentation. BMC research notes, 9(1), 1-6.

Zallen, R. D., & Byrnside, V. N. (2010). DENTAL AND ORAL SURGICAL EMERGENCIES. Emergency Medicine Secrets E-Book, 146.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 11

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

### MCL Master Condition List

### MEVA Medical Extravehicular Activity

### NASA National Aeronautics and Space Administration

6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 12

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

6/15/2023 1:44:47 PM ICL32_Dental Luxation/Avulsion (Tooth Loss) Cliff page: 13

---

## Source metadata

```yaml
source_filename: "dental-luxation-avulsion-tooth-loss-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Dental Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1d0p8IyadQRdjzDxjnpN-uS8_e40HIq0q/view"
source_drive_id: "1d0p8IyadQRdjzDxjnpN-uS8_e40HIq0q"
source_sha256: e8083d03f19d4acc8dfc04c2eca689ee6334ce94f3c5d45d00d7d47ca4c641fd
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
