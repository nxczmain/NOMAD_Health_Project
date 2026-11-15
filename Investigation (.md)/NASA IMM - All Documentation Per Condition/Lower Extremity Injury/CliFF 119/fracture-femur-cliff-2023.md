# Fracture Femur CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1TUplJfz70zWgFCz8ppol3o-rZpkOm5jn/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Lower Extremity Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Best Case](#best-case)
- [Worst Case](#worst-case)
- [Overview](#overview)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL54_Fracture - Femur Fracture - Femur encompasses any traumatic fracture of the femur, including the proximal femur and femoral neck (often referred to as "hip" fracture).

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

There have been no published femoral fractures (or any fracture) in spaceflight. However, Lewandowski et al, 2008 utilized the Bone Fracture Risk Model (BFxRM) developed at NASA's Glenn Research Center to model/predict traumatic proximal femur fracture incidence. This takes into account the astronaut corps population and mission characteristics (Lewandowski et al, 2008).

### ANALOG LITERATURE

Military analog data was limited to femoral stress fractures. Stress fractures are not included in this Cliff.

### TERRESTRIAL LITERATURE

Terrestrial literature was obtained informing both traumatic femoral fractures. Leu et al presents a large population study of traumatic proximal femur fractures in Taiwanese adults with comorbidities, age 20-40 years old, with a annual incidence of 7.5 proximal femur fractures/100,000 people. Of these cases, all required internal fixation or hemiarthroplasty. (Leu et al., 2016) Elsoe and Larsen, 2018 was a large, 6-year retrospective population study of traumatic distal femur fractures in Northern Denmark. Average age at time of fracture in males was 44 years, females was 71.6 years. This data is age-stratified and thus can be age adjusted to the astronaut corps. The overall incidence (including those over age 60) of femoral fractures in this study was 8.7/100,000 person years (Elsoe and Larsen., 2018).

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

- Surface-Ops EVA: mean 1.22E-5 SD 4.81E-5

### INCIDENCE SUMMARY

The incidence of traumatic fractures outside of surface EVA was assumed to approach 0. Therefore the incidence distributions for this condition was limited to Surface-ops EVA exposure. It is an incidence proportion, utilizing terrestrial traumatic distal femur fracture data (Elsoe and Larsen,

2018) and traumatic proximal (hip) fracture modeling data from the NASA Glen Research Center (Lewandowski et al, 2008)

This is an incidence proportion distribution Beta(shape1=0.06476, shape2=5294.91) with mean 1.22E-5 and SD 4.81E-5. This is the result of Bayesian analysis generating the posterior distribution of the age-adjusted (21-50y) incidence rate for a terrestrial reference (Elsoe and Larsen,

2018) under an uninformative prior. The resulting incidence rate samples were used to calculate the probability of a fracture occurring during a 6-

hour EVA (mean: 3.85E-6 and SD: 2.66E-7). This reference probability distribution was then combined with the distribution resulting from the Bone Fracture Risk Model (BFxRM) (Lewandowski et al, 2008) (mean: 2.49E-5 and SD: 9.73E-5). Using the BFxRM, it was evident that the probability of hip fracture was similar across sexes and days of the mission. The average distribution across both sexes and days 10 and 150 for moon were 6/15/2023 1:56:45 PM ICL54_Fracture - Femur Cliff page: 1

utilized in this incidence distribution. A simulation study was done to combine the two resulting distributions from Elsoe and Larsen, 2018 and Lewandowski et al, 2008. Independent samples were generated from each and averaged to get samples from a combined distribution. This distribution was then approximated by a Beta by finding the parameters that match the simulation distribution.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

EVA Segment

### EVA Surface

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Beta Mean 1.22305E-05 SD 4.80558E-05 Beta (Alpha): 0.06476 (Beta): 5294.91 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Leu et al, 2016 Terrestrial 2 Elsoe and Larsen, 2018 Terrestrial 3 Lewandowski et al, 2008 Spaceflight 4 Leu et al presents a large population study of traumatic proximal femur fractures in Taiwanese adults age 20-40 years old. Given this is restricted to proximal femur fractures, favor the use of Lewandowski et al, 2008 (also proximal femur fractures) spaceflight modeling to predict traumatic proximal femur fracture incidence as it takes into account the astronaut corps population and mission characteristics. Elsoe and Larsen, 2018 is a large, 6- year retrospective population study of traumatic distal femur fractures in Northern Denmark. Average age at time of fracture in males was 44 years, females was 71.6 years. This data is age-stratified and thus can be age adjusted to the astronaut corps. 6/15/2023 1:56:45 PM ICL54_Fracture - Femur Cliff page: 2

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

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The worst-case scenario probability for this CLiFF is based on the requirement of surgical intervention. Literature identified worst-case probabilities of 39.29% for distal femoral fractures requiring surgery (Elsoe and Larsen, 2018), 100% for proximal femoral fractures requiring surgery (Leu et al, 2016). Given the incidences of these fractures types were similar, ranging from 7-8/100,000 (Elsoe and Larsen, 2018; Leu et al, 2016) the values were averaged to arrive at a worst-case scenario probability of 69.6% and a best-case scenario probability of 30.4%. The high worst-case scenario probability is being driven by the standard of care for surgical intervention for nearly all proximal femoral fractures.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Leu et al, 2016 Terrestrial 3 Elsoe and Larsen, 2018 Terrestrial 3 Leu et al, 2016 provide a WC probabilty of 100% for proximal femoral fracture (which is anticipated as terrestrial standard of care is fixation or hemiarthroplasty for virtually all proximal femoral fractures). Elsoe and Larsen, 2018 present a WC probabiltiy of 38.29% for distal femoral fractures (those requiring surgery). 6/15/2023 1:56:45 PM ICL54_Fracture - Femur Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best Surface-Ops EVA: 30 - 30 100 1.22 18.6553 1008 4368 0 0 56 0 8.58

Case (TBC) mean 1.22E-5 SD 4.81E-5. Treated Worst 70 - 70 100 2.07 32.6867 2016 4368 16.1573 40 100 1.3 28 Case (TWC) Untreated N/A N/A N/A 1.22 41.815 1008 4368 17.0609 0 100 0 8.58

## Best Case

(UTBC) Untreated N/A N/A N/A 2.07 56.5363 2016 4368 40.5793 40 100 28 50

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 1:56:45 PM ICL54_Fracture - Femur Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The RTDC surrogate was "need for surgery/open reduction, internal fixation". The definition for this condition encompasses any traumatic fracture involving the femur. This broad definition made the literature search for duration, RTDC, and LOCL complicated given that different fracture types and locations have very different prognoses. Thus, data was found for individual fracture types and each scenario was analyzed on an individual level to arrive at the most appropriate values. See specific scenarios below for an explanation of how duration, RTDC, and LOCL were derived.

TREATED BEST CASE (TBC) SCENARIO COMMENTS This condition includes fractures of the femur, which includes multiple locations and types of traumatic fractures. The literature search found duration data for non-operative treatments for the following fracture types: hip fracture (1,008-2,880 hours) (LeBlanc et al, 2014), Distal Femur Fracture (2,016 - 4,368 hours) (Thomas and Meggitt, 1981), and distal femoral shaft fracture (1,104 - 1,440) (Kramer et al, 2016). The minimum duration value was assigned at 1,008 hours and the maximum, 4,368 hours. Data were obtained for RTDC probabilities for hip fracture (0-56%) (Handoll and Parker, 2008), distal femoral fractures (0-17.9%) (Thomas and Meggitt, 1981), and femoral shaft fractures (0-30.5%) (Kramer et al, 2016). The full range was assigned (0-56%). Data were obtained for LOCL probability for hip fracture (6.01-8.58%) (Tan et al, 2020), distal femoral fracture (0%) (Thomas and Meggitt, 1981), and femoral shaft fractures (0-0.22%) (Kramer et al, 2016). The full range was used and the LOCL probability was assigned 0-8.58%. TREATED WORST CASE SCENARIO (TWC) COMMENTS Worst case scenario requires surgical intervention in nearly 100% of cases to ensure a functional outcome and/or prevent loss of the limb. There is a paucity of data for non-operative treatments for femoral fractures, and it is anticipated that orthopedic surgical interventions will not be part of the medical capabilities for lunar missions. This makes estimating durations for the treated wort-case scenario difficult. The treated worst-case duration is based on a 1981 study which included duration estimates for comminuted and compound fractures (Thomas and Meggitt, 1981). The duration was assigned as 2,016-4,368 hours. RTDC data were obtained for hip fracture (Florschutz et al, 2015), distal femoral fracture (Martinet et al, 2000), and femoral shaft fracture (Levy et al, 2019). All data indicate the RTDC probability is 100% for a worst-case fracture. However, literature does suggest that a certain percentage of distal femoral fractures will heal without ORIF. Thomas and Meggit, 1981 performed a comparison study of traction/casting to ORIF. Non-operative management yielded complication rates such as malunion or severe deformity as high as 40%. Since this is the best estimation of non-surgically treated healing found in this literature search and orthopedic surgery will not be available in spaceflight, 40% was assigned as the lower bound of RTDC. The RTDC value was set at 40-100%. LOCL probability data were obtained for hip fracture (1.3- 32%) (Haentjens et al, 2010; Leu et al, 2016; Gregory et al, 2010). Leu et al, 2016 reviewed patients age 20-40 with proximal femur fractures (femoral neck and trochanteric) from a Taiwanese national medical database. All patients had surgical interventions, which is not currently possible in spaceflight. 1-year mortality rates were 1.3%. This is anticipated to be an underestimate of mortality for crewmembers given it is based on surgical intervention, but was assigned as the minimum probability LOCL given the representative age group of the population. Haentjens et al, 2010 is a meta-analysis of hip fractures in patients age 50+. The probability of death at 1-year post-hip fracture was quoted as 2-12%. The data were not stratified by site of the hip fracture and the population was primarily patients in the age range of 70-80s. This also assumes standard of care for surgical intervention is present. Gregory et al, 2010 is a study of 102 elderly patients > 70 years old with displaced intracapsular femoral neck fractures (with arms treated operatively and non-operatively). Non-operative patients were those considered too unwell for surgery. The untreated population had a heavy burden of significant comorbidities: CAD, CVA, DM, Malignancy, Dementia, COPD, Heart Failure, Subdural/subarachnoid hemorrhage, PE. They report that “many of these would have been life-threatening without a femoral fracture.” 30-day mortality was 32% in these patients. (Compared to 4% in the operative group). The 1-year mortality in those who survived to 30 days was similar in operative vs. non-operative groups (27%/25% respectively). The operative death rate at 30 days (4%) was subtracted from the non-operative death rate (32%) and the difference (28%) was used as a surrogate for deaths due to hip fracture with non-operative intervention with the known limitation that this patient population was elderly with comorbidities that are not experienced by the astronaut cohort. Thus, this may be a high estimation of death. Unfortunately, data regarding non-operative intervention for proximal femur fractures is hard to find outside elderly comorbid populations. Based on these data, the LOCL probability was assigned a range of 1.3-28%. Since 1.3% is an underestimation (it represents death rate with surgical intervention) and 28% is likely an overestimation (it is non-operative, but in ill and elderly patients) regression toward the mean of this range is felt to be most representative of the actual risk of LOCL which lies somewhere in the middle.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS There is a paucity of data for untreated fractures meeting the best-case scenario definition. The duration (1,008-4,536 hours) from the best-case treated scenario was re-used for this scenario. Due to the range of fracture types and locations within the femur, outcomes vary. Thus, the RTDC was assigned 0-100% probability. There is a paucity of data for mortality associated with untreated best-case femoral fractures, thus the best-case treated LOCL values were repeated for this scenario. This is a limitation of this CLiFF.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The literature search was unable to identify any data regarding the duration, RTDC, or LOCL for untreated worst-case femur fractures, since terrestrial standard of care includes treatment. Thus, the treated worst-case duration and RTDC are used again in this scenario. This is a limitation 6/15/2023 1:56:45 PM ICL54_Fracture - Femur Cliff page: 5

of this CLiFF. Gregory et al (2010) noted a 30-day mortality of 32%, and 1-year mortality was 50% for untreated hip fractures in a heavily burdened comorbid elderly population (age 70y+). The operative death rate at 30 days (4%) was subtracted from the non-operative death rate (32%) and the difference (28%) was used as a surrogate for deaths due to hip fracture with non-operative intervention with the known limitation that this patient population was elderly with comorbidities that are not experienced by the astronaut cohort. This was assigned as the minimum LOCL probability.

The LOCL probability was thus assigned a range of 28-50%.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------------ | ----------- | --------- | --- |
| Thomas and Meggitt, 1981 | Terrestrial |  |  |
| LeBlanc et al, 2014 | Terrestrial | N/A |  |
| Kramer et al, 2016 | Terrestrial |  |  |

This condition covers multiple different traumatic fracture types in the femur.  This is a challenge for duration because the treatment course varies widely between fracture locations and types. The durations listed in Table 4 are the minimum and maximum duration times found in the literature search based on different fracture types when literature was available.  Notably, durations for the untreated scenarios could not be found in the literature search. Thus, the untreated scenarios use their treated counterparts as a surrogate.  This paucity of data is a limitation of this CLiFF.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------------ | ----------- | --------- | --- |
| Handoll and Parker, 2008 | Terrestrial |  |  |
| Thomas and Meggitt, 1981 | Terrestrial |  |  |
| Kramer et al, 2016 | Terrestrial |  |  |
| Florschutz et al, 2015 | Terrestrial | N/A |  |
| Martinet et al, 2000 | Terrestrial |  |  |
| Levy et al, 2019 | Terrestrial |  |  |
| Cantu et al, 2014 | Terrestrial |  |  |

This condition covers multiple different fracture types in the femur. This is a challenge for RTDC because the treatment course varies widely between fracture locations and types. The RTDC probabilities listed in Table 4 are the minimum and maximum probabilities found in the literature search based on different fracture types when literature was available. Notably, RTDC for the untreated worst-case is using the treated worst-case values due to a paucity of data for untreated worst-case femur fractures. This paucity of data is a limitation of this CLiFF.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------------ | ----------- | --------- | --- |
| Thomas and Meggitt, 1981 | Terrestrial |  |  |
| Kramer et al, 2016 | Terrestrial |  |  |
| Handoll and Parker, 2008 | Terrestrial |  |  |
| Florschutz et al, 2015 | Terrestrial | N/A |  |
| Martinet et al, 2000 | Terrestrial |  |  |
| Levy et al, 2019 | Terrestrial |  |  |
| Cantu et al, 2014 | Terrestrial |  |  |

This condition covers multiple different traumatic fracture types in the femur. This is a challenge for LOCL because the risk of mortality varies widely between fracture locations and types. The LOCL probabilities listed in Table 4 are the minimum and maximum probabilities found in the literature

| 6/15/2023 1:56:45 PM | ICL54_Fracture - Femur Cliff |  | page: 6 |
| -------------------- | ---------------------------- | --- | ------- |
search based on different fracture types when literature was available. Notably, LOCL for the untreated best-case is using the treated best-case values due to a paucity of data for untreated best-case femur fractures. This paucity of data is a limitation of this CLiFF.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Femur fracture refers to a fracture of the femur (proximal, mid-shaft or distal), with the best-case scenario representing uncomplicated fractures and the worst-case scenario representing complicated fractures. Any fracture, if left untreated, could result in further complications such as malunion, loss-of function, and/or chronic pain. A worst-case scenario fracture, left untreated, could result in additional significant complications such as neurovascular compromise.

- CNES: N/A

Diagnostic Scope and Resourcing: In the best-case scenario, diagnosis is based on history, physical examination (musculoskeletal and neurologic), and imaging. Plain film (X-Ray), CT, and MRI will be unavailable inflight. Musculoskeletal ultrasound was included in the CRT as it may serve as a useful adjunct in diagnosis for some cases, but it was not considered a necessary capability to diagnose femur fracture.

In the worst-case scenario, diagnosis is based on history, physical examination (musculoskeletal, neurologic, and vital signs), and imaging. In some cases, musculoskeletal ultrasound may be contraindicated due to risk of contamination of an open fracture, or further displacement of the fracture(s). The utility of musculoskeletal ultrasound would be determined on a case-by-case basis. It was included as a non-necessary capability.

This diagnostic framework is consistent with the terrestrial workup for femur fracture with the exception of the inability to perform plain film X-Ray (and if warranted CT or MRI), and thereby uses Musculoskeletal Ultrasound as a possible surrogate.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. This CRT includes a scope of practice code of 5 (which correlates to an “Experienced procedure trained generalist attending (ED attending).” The CRT working group SME consensus Clinical Phase 1 duration: Best Case CP1: 1.22 hours Worst Case CP1: 2.07 hours Treatment Scope and Resourcing: Terrestrially, most proximal femur fractures (whether best-case scenario or worst-case scenario) undergo surgical fixation. Midshaft fractures are typically treated with traction splinting, and distal fractures can be splinted, followed by a period of casting. Since only distal femur fractures would require casting, splinting was considered a necessity in this CRT, whereas casting was included as a capability but not considered a necessity.

Although 3D printing offers potential for splinting of musculoskeletal injuries, it remains a largely experimental process and it is not within the scope of this CRT. Non-weightbearing status would be used as part of treatment terrestrially. If the fracture were to occur in microgravity phases of flight, non-weightbearing status is already achieved. Should the fracture occur during surface operations, it was assumed that partial gravity combined with improvised mobility assistance utilizing materials available during surface operations would sufficiently provide non-weightbearing status (i.e. crutches were not included in this CRT). Physical therapy is recommended post-immobilization. Exercise modification is also recommended, but not built into the CRT as this does not represent a clinical resource. Pain is variable depending on the patient. Acetaminophen and NSAIDs were included in the best-case treatment scenario (acetaminophen given a higher primacy due to evidence that NSAIDs may interfere with bone healing).

Terrestrially, all worst-case fractures warrant surgical intervention. Thus, a worst-case femur fracture in-flight would present a significant treatment challenge. These fractures would warrant an attempted reduction to achieve more physiologic alignment. Note that nerve blocks for fracture reduction are not included in the scope for IMPACT 1.0 but could be considered in the future. Open fractures inflight would be treated with copious irrigation, wound closure, prophylactic antibiotics and splinting with possible casting after wound healing. Midshaft fractures would be treated with traction splinting and distal fractures would be splinted and possibly casted. Again, both splinting and casting were included as capabilities, but only splinting was considered a necessary capability in this CRT. Both plaster and fiberglass (and their associated means of removal) were included for trade-space analysis. Pain from a worst-case fracture may require narcotic analgesia. Physical therapy would be advised until the end of the mission.

- Communications and Support Needs: While real-time video and audio loop communications are desired for diagnosis and treatment, they were not

considered a necessity, particularly in the best-case scenario. For the WC, consultation with ground specialists to facilitate treatment and healing was considered necessary given the limited diagnostic and treatment capabilities in-flight.

### IMM CLIFF RECONCILATION COMMENTS

6/15/2023 1:56:45 PM ICL54_Fracture - Femur Cliff page: 7

Fracture – Femur was not previously accounted for in the same fashion in IMM. The IMM CLiFF is for “Hip/Proximal Femur Fracture.” Notably, this CLiFF represents all fracture types in the entire length of the femur (proximal to distal). Because of this, the incidence, duration, and outcomes (RTDC, LOCL) are appropriately unique in this CLiFF as compared to the IMM “Hip/Proximal Femur Fracture” CLiFF.

### LIMITATIONS SUMMARY

- This condition covers multiple different traumatic fracture types in the femur. This is a challenge for incidence, duration, RTDC, and LOCL as

these numbers vary by fracture type.

- Treated worst-case LOCL is likely an underestimate because literature assumes terrestrial standard of care treatment is available (i.e. surgery).

Orthopedic surgery is not a medical capability planned for lunar exploration missions. For lunar missions, the short evacuation time to return to earth will help decrease LOCL probability, but it is likely that this is an underestimate.

- There is a paucity of data for mortality associated with untreated best-case femoral fractures, thus the best-case treated LOCL values were

repeated for this scenario. This is a limitation of this CLiFF. This likely underestimates the best-case untreated LOCL.

- The literature search was unable to identify any data regarding the duration or RTDC for untreated worst-case femur fractures, since terrestrial

standard of care includes treatment. Thus, the treated worst-case duration and RTDC are used again in this scenario. This is a limitation of this CLiFF. 6/15/2023 1:56:45 PM ICL54_Fracture - Femur Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 |  |  |  |  | 145 |  |  |  |  |  |
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

| Best | 132 |  |  | 22 | 196 |  | 34 | 211 | 1404 | 3763 | 0.373107 | 37.3107 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

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

|  | Cognitive - | Cognitive - |  |  | Inter- |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | -------------- | -------- | ------ | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  |  | Communications | personal | Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple | Complex |  |  |  |  | pulmonary |  |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  | 145 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  | 145 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  | 664 |  | 89 |  |  | 145 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| -------------------- | --- | --- | --- | -------------------------- | ---------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| 6/15/2023 1:56:45 PM |  |  |  |  | ICL54_Fracture - Femur Cliff |  |  |  |  |  |  | page: 9 |
Total Human

|  |  |  | Translation & |  | Total Tasks |  |  |
| --- | --- | --- | ------------- | --- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) | Extremity Standing (g) |  | Equipment Ops |  | Category |  |
| --- | ----- | ---------------------- | -------------- | ------------- | --------- | ---------- | --- |
|  |  |  | (microgravity) |  | Condition | Tasks Full |  |

Mission Treated Best

|  |  |  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  | 22 196 | 34 | 34 211 | 642 | 3763 0.170609 | 17.0609 |
| --- | --- | ------ | --- | ------ | --- | ------------- | ------- |

Case (UTBC) Treated Worst

|  |  | 22 196 |  | 34 211 | 608 | 3763 0.161573 | 16.1573 |
| --- | --- | ------ | --- | ------ | --- | ------------- | ------- |

Case (TWC) Untreated Worst

|  | 132 | 22 196 | 34 | 34 211 | 1527 | 3763 0.405793 | 40.5793 |
| --- | --- | ------ | --- | ------ | ---- | ------------- | ------- |

Case (UTWC)

| 6/15/2023 1:56:45 PM |  | ICL54_Fracture - Femur Cliff |  |  |  |  | page: 10 |
| -------------------- | --- | ---------------------------- | --- | --- | --- | --- | -------- |
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

6/15/2023 1:56:45 PM ICL54_Fracture - Femur Cliff page: 11

## REFERENCES

Reference

3. Cantu RV, Graves SC, Spratt KF. In-hospital mortality from femoral shaft fracture depends on the initial delay to fracture fixation and Injury

- Severity Score: a retrospective cohort study from the NTDB 2002-2006. J Trauma Acute Care Surg. 2014;76(6):1433-40. Epub 2014/05/24. doi:

10.1097/ta.0000000000000230. PubMed PMID: 24854312; PubMed Central PMCID: PMCPMC4537793.

4. Elsoe R, Ceccotti AA, Larsen P. Population-based epidemiology and incidence of distal femur fractures. Int Orthop. 2018;42(1):191-6. Epub

2017/11/09. doi: 10.1007/s00264-017-3665-1. PubMed PMID: 29116356.

5. Florschutz AV, Langford JR, Haidukewych GJ, Koval KJ. Femoral neck fractures: current management. J Orthop Trauma. 2015;29(3):121-9.

Epub 2015/01/31. doi: 10.1097/bot.0000000000000291. PubMed PMID: 25635363.

6. Gregory JJ, Kostakopoulou K, Cool WP, Ford DJ. One-year outcome for elderly patients with displaced intracapsular fractures of the femoral

neck managed non-operatively. Injury. 2010;41(12):1273-6. Epub 2010/07/16. doi: 10.1016/j.injury.2010.06.009. PubMed PMID: 20630527.

7. Haentjens P, Magaziner J, Colón-Emeric CS, Vanderschueren D, Milisen K, Velkeniers B, et al. Meta-analysis: excess mortality after hip

fracture among older women and men. Ann Intern Med. 2010;152(6):380-90. Epub 2010/03/17. doi: 10.7326/0003-4819-152-6-201003160-

00008. PubMed PMID: 20231569; PubMed Central PMCID: PMCPMC3010729.

9. Kramer EJ, Shearer D, Morshed S. The use of traction for treating femoral shaft fractures in low- and middle-income countries: a systematic

review. Int Orthop. 2016;40(5):875-83. Epub 2016/01/09. doi: 10.1007/s00264-015-3081-3. PubMed PMID: 26744164.

11. LeBlanc KE, Muncie HL, Jr., LeBlanc LL. Hip fracture: diagnosis, treatment, and secondary prevention. Am Fam Physician. 2014;89(12):945-

51. Epub 2014/08/28. PubMed PMID: 25162161.

14. Leu TH, Chang WC, Lin JC, Lo C, Liang WM, Chang YJ, et al. Incidence and excess mortality of hip fracture in young adults: a nationwide

population-based cohort study. BMC Musculoskelet Disord. 2016;17:326. Epub 2016/08/09. doi: 10.1186/s12891-016-1166-9. PubMed PMID: 27496130; PubMed Central PMCID: PMCPMC4974740.

15. Levy DM, Meadows MC, Gates DJ. A Novel Traction Frame for Femur Fracture Management in Developing Countries: Technique and

Outcomes. J Orthop Trauma. 2019;33(5):e203-e6. Epub 2019/04/23. doi: 10.1097/bot.0000000000001407. PubMed PMID: 31008820.

16. Lewandowski BE, Myers JG, Sulkowski C, Ruehl K, Licata A. Forcasting proximal femur and wrist fracture caused by a fall to the side during

space exploration missions to the Moon and Mars. 59th International Astronautical Congress, SPACE LIFE SCIENCES SYMPOSIUM2008.

17. Martinet O, Cordey J, Harder Y, Maier A, Bühler M, Barraud GE. The epidemiology of fractures of the distal femur. Injury. 2000;31 Suppl

3:C62-3. Epub 2000/10/29. doi: 10.1016/s0020-1383(00)80034-0. PubMed PMID: 11052383.

18. Miller TL, Jamieson M, Everson S, Siegel C. Expected Time to Return to Athletic Participation After Stress Fracture in Division I Collegiate

Athletes. Sports Health. 2018;10(4):340-4. Epub 2017/12/15. doi: 10.1177/1941738117747868. PubMed PMID: 29240544; PubMed Central

- PMCID: PMCPMC6044125.

19. NASA. MEDB5.2 On-Orbit Strength & Conditioning. JSC28913. 2013 [cited 2021 5/4]. Available from:

https://lsda.jsc.nasa.gov/lsda_data/document/Project/MRID/MEDB_5_2_MR082L_1.28.2014_Project_02_26_2015_12_06_08.pdf.

25. Tan CMP, Park DH, Chen YD, Jagadish MU, Su S, Premchand AXR. Mortality rates for hip fracture patients managed surgically and

conservatively in a dedicated unit in Singapore. Arch Orthop Trauma Surg. 2020. Epub 2020/09/19. doi: 10.1007/s00402-020-03605-1. PubMed

- PMID: 32945956.

26. Thomas TL, Meggitt BF. A comparative study of methods for treating fractures of the distal half of the femur. J Bone Joint Surg Br. 1981;63-

b(1):3-6. Epub 1981/02/01. doi: 10.1302/0301-620x.63b1.7204470. PubMed PMID: 7204470.

Handoll H, Parker MJ. Conservative versus operative treatment for hip fractures in adults. The Cochrane database of systematic reviews. 2008 Jul 16; (3):CD000337. doi:10.1002/14651858.CD000337.pub2. PMID:18646065.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

### CAC Coronary Artery Calcium

6/15/2023 1:56:45 PM ICL54_Fracture - Femur Cliff page: 12

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

### NP Nurse Practitioner

6/15/2023 1:56:45 PM ICL54_Fracture - Femur Cliff page: 13

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

6/15/2023 1:56:45 PM ICL54_Fracture - Femur Cliff page: 14

---

## Source metadata

```yaml
source_filename: "fracture-femur-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Lower Extremity Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1TUplJfz70zWgFCz8ppol3o-rZpkOm5jn/view"
source_drive_id: "1TUplJfz70zWgFCz8ppol3o-rZpkOm5jn"
source_sha256: 2e9fd1a9bbfe1e445199b31990486c1d20fdb76376597d8924a1c361d09ce468
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
