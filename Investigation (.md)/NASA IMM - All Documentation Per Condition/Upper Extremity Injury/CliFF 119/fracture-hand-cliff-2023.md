# Fracture Hand CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1HO4f5QvlPzf9geB75YhojlAucgfdo9H1/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Upper Extremity Injury/CliFF 119

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

ICL55_Fracture - Hand During nominal operations, the crew members are unlikely to generate loads similar to the athletes studied in these references. Athletes are likely to be performing more dangerous (i.e. more likely to lead to fracture) than astronauts would, so the evidence is not a perfect analog and is likely to over represent risk. Therefore, the assumptions made by the team is to use this risk assessment only for instances when crew are performing operations similar to an athlete, such as an EVA. During nominal operations, incidence of hand fracture is assumed to be 0%. The hands are used to provide stability and propulsion on microgravity the chance of injury may be greater in space flight than on the ground. (Marshburn, 2008) Spaceflight- induced bone atrophy is due to the mechanical unloading of the skeletal system and is targeted to specific regions of the skeleton. These site- specific losses occur at normally weight-bearing skeletal areas (on Earth) suggesting that the regions that experience the larger deficits in mechanical loading undergo the greater adaptation. Collectively, the average decrement of preflight areal bone mineral density (BMD) per month is 1-1.5%, although there are considerable variations of loss between different skeletal sites and between different crewmembers. In microgravity demineralization is potentiated by the poor absorption of vitamin D. The radiation shielding on ISS prevents ultraviolet conversion of 7- dehydrocholesterol in the skin to vitamin D. Vitamin D is associated with improved neuromuscular coordination. In addition, a deficiency in vitamin D could lead to mal-absorption of calcium in the intestine and poor re-absorption by the proximal tubules of the kidney. The failure to conserve calcium because of vitamin D deficiency will limit the availability of calcium to support the anabolic effects of exercise and physical activity on bone and muscles. It is noted that the hands and wrists are the primary means of ambulation on orbit.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

No CLIFF available or evidence of incidence in space in literature review

### ANALOG LITERATURE

One participant of the Juneau Icefield Research Program from 1994-2000 had a closed fracture of the index finger and returned to the program the same day following xray and splinting.

### TERRESTRIAL LITERATURE

An NEISS database of hand fracture incidence for all ages from 2002-2006 found an estimated incidence rate of 29.7/100,000/yr with the most likely mechanism being accidental fall and transportation method (bicycle or moped) being a risk fracture. Another population based 5-year retrospective review of British Columbia residents found an incident rate for all hand fractures of 3.63/1,000/yr. An institutional review of phalangeal fractures at the University Hospital Frankfurt between 2017-2018 found 26% required surgical repair.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 2.485E-6 and SD 9.343E-9

### INCIDENCE SUMMARY

6/15/2023 1:58:22 PM ICL55_Fracture - Hand Cliff page: 1

This is a surface-ops EVA condition. The posterior distribution for the incidence rate of fracture given the terrestrial data under an uninformative prior is Gamma(shape=70721, rate=19482394) with mean 0.00363 and SD 1.365E-5. The resulting posterior distribution for the probability of experiencing a fracture over a 6-hour surface-ops EVA is Beta(shape1=70742, shape2=28467644705) with mean 2.485E-9 and SD 9.343E-9.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

EVA Segment

### EVA Surface

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Beta Mean 2.48499E-06 SD 9.34298E-09 Beta (Alpha): 70742 (Beta): 2.84676E+10 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Feehan, et al. 2006 Terrestrial 3 Farr, et al. 2017 Terrestrial 2 Nakashian, et al. 2012 Terrestrial 2 Kremer, et al. 2020 Terrestrial 2 Ho, et al. 2003 Terrestrial 2 The data is fairly weak for this condition. We have only one analog population which had 1 fracture out of 60 participants for 7 years… So, 1/(60*7) events per person-years. Additionally we have a population study that has 3.63 events/ 1000 person-years in British Columbia. Bot of these values are actually pretty close (incidence of 0.00363 vs 0.002381 respectively). At this point, I believe they are the two best studies for us to use. I think they will are very likely to overestimate the incidence of hand fractures on orbit however, because of the nature of spaceflight the situations where these arise on the ground are just much more likely. We are using the following papers (first and last on the 3E tab): - Feehan, L. M., and S. B.

Sheps. "Incidence and Demographics of Hand Fractures in British Columbia, Canada: A Population-Based Study." J Hand Surg Am 31.7 (2006): 1068-74. Print. - Ho, Christopher, et al. "A Seven-Year Experience in Expedition Medicine: The Juneau Icefield Research Program." The Journal of emergency medicine 25.3 (2003): 257-64. Print. Population-based studies which may not represent the astronaut corps. May suffer from inconsistency due to evaluating different types of hand fractures 6/15/2023 1:58:22 PM ICL55_Fracture - Hand Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Pre-flight requirements include training on exercise devices to prepare for in-flight use. In-flight, on the International Space Station (and previously on Mir), crewmembers are required to exercise for 2.5 hours per day (1 hour of aerobic conditioning and 1.5 hours or resistive exercise) (NASA, MedB 5.2). All crewmembers undergo DXA scanning pre- and post-flight. Pre-flight at L-21/18 month; and L-180/30 day (As close to launch as possible). Post-flight at R+5/30, then as clinically indicated to assess BMD recovery. (NASA, MedB1.11)

### BEST CASE SCENARIO DEFINITION

A closed, non-comminuted, non-segmented, non-displaced, or minimally displaced fracture resulting in no neurovascular compromise to the affected limb.

### WORSE CASE SCENARIO DEFINITION

- A fracture that is: open, comminuted, segmented, moderatlely to severely displaced, intra-articular, or results in neurovascular compromise to the

affected limb, likely requiring surgical intervention.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The BC/WC breakdown is based on the Kramer paper assessing the percentage of fractures requiring surgery (worst case definition). This is a somewhat conservative assessment however because gravity will likely dictate the severity of fracture. Therefore, the team has chosen to use a range of 0-26% with the expert judgement that this is likely to be somewhat of a conservative assessment.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

LOC

### Citation Source Value

Kremer, L., et al. "Epidemiology and Treatment of Phalangeal Fractures: Conservative Treatment Is the Predominant Terrestrial 2 Therapeutic Concept." Eur J Trauma Emerg Surg (2020). Print.

The data is fairly weak for this condition. We have only one analog population which had 1 fracture out of 60 participants for 7 years… So, 1/(60*7) events per person-years. Additionally we have a population study that has 3.63 events/ 1000 person-years in British Columbia. Bot of these values are actually pretty close (incidence of 0.00363 vs 0.002381 respectively). At this point, I believe they are the two best studies for us to use. I think they will are very likely to overestimate the incidence of hand fractures on orbit however, because of the nature of spaceflight the situations where these arise on the ground are just much more likely. We are using the following papers (first and last on the 3E tab): - Feehan, L. M., and S. B.

Sheps. "Incidence and Demographics of Hand Fractures in British Columbia, Canada: A Population-Based Study." J Hand Surg Am 31.7 (2006): 1068-74. Print. - Ho, Christopher, et al. "A Seven-Year Experience in Expedition Medicine: The Juneau Icefield Research Program." The Journal of emergency medicine 25.3 (2003): 257-64 Populations may not represent the astronaut corps, and the incidence of injury requiring surgery may not truly reflect reality as data only evaluates subset of hand fractures 6/15/2023 1:58:22 PM ICL55_Fracture - Hand Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 2.485E-6 74 - 100 100 1.65 5.46107 216 1134 0 0 0 0 0 Case (TBC) and SD 9.343E-9 Treated Worst 0 - 26 100 1.81 19.2931 672 1344 10.0186 8 26 0 0 Case (TWC) Untreated Best N/A N/A N/A 1.65 35.3973 720 1440 10.0186 0 3 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.81 41.7087 840 3696 10.9221 8 26 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 1:58:22 PM ICL55_Fracture - Hand Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

This condition has many subsets of fractures which have various incidence and outcomes, thus confounding the data when reported in aggregate.

It is unlikely that BC definition-- by our assumptions-- would need operative repair with conservative treatment. UT conditions provided some questions on whether casting/splinting was UT-- we assumed this was in fact treatment, and therefore relied on unorthodox studies advocating for tape and soft padding alone. This presents an absurdity within this assessment, as tape alone-- along with any rigid piece of material-- could suffice as a splint. So I propose this conundrum for further clarification by NASA.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Excellent data from NCAA athletes-- analogous population, but may overstate injuries given level of activity for divison I collegiate sports. For best case definition, "A closed, non-comminuted, non-segmented, non-displaced, or minimally displaced fracture resulting in no neurovascular compromise to the affected limb", we have made an assumption that the need for operative repair is 0, based on the assumption that this definition assumes conversative, splint/casting. We acknowledge that some subsets of hand fractures, even closed, may be optimized by pinning, etc., but given the thoroughness of the BC definition, we have assumed non-operative treatment is commensurate with this BC condition. LOCL is not expected from this condition. TREATED WORST CASE SCENARIO (TWC) COMMENTS Excellent data from the sports medicine literature [Kremer et al. 2020, Carender et al. 2019] on duration of treatment and RTDC= via need for sugery. LOCL not expected for this condition in isolation and search was limited to to Dynamed associated citations.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Limited data on untreated fractures. Jardn et al., 2016 describes conservative management via taping over splinting for diaphyseal metacarpal fractues re duration of treatment. This paper and Van Aaken et al., 2016 adds to a conservative approach which may be considered UT vs. conventional reduction and casting, for UTBC data. LOCL not expected for this condition in isolation.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Decent data on conservative treament and late presenting injuries. Del Pina et al. 2005 provides some information for UTWC dration for 11 patients [9 cases] of untreated fractures of the base of the middle phalanx. Kremer et al. 2020 describes convervative, unorthodox treament [non-splinting] which can be considered UT initially. Carender et al. 2019 looks at NCAA athletes for some data on UT. and then need for surgical intervention for UTWC RTDC. As they state "There is a paucity of data to guide NCAA team physicians on expected time-loss and return to play after hand fractures treated operatively or non-operatively." Conclusions are difficult because most conservative non-operative data involves casting/spliting-- which we interpret as TREATMENT. So a true, UT condition is limited to the papers describing buddy-taping and soft paddng support only [Jarden et al. 2016, Van Acken et al. 2016]. LOCL is not expected for this condition in isolation.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ---------------------- | --------------------------- | --------- | ------- |
| Carender, et al. 2019 | Terrestrial |  |  |
| Suh, et al. 2014 | Terrestrial |  |  |
| Oetgen, et al. 2008 | Terrestrial |  |  |
| Geissler, 2009 | Terrestrial |  |  |
| Fufa, et al. 2012 | Terrestrial | 3 |  |
| van Aaken, et al. 2016 | Terrestrial |  |  |
| 6/15/2023 1:58:22 PM | ICL55_Fracture - Hand Cliff |  | page: 5 |
| Citation | Source | LOC Value |  |
| ------------------- | ----------- | --------- | --- |
| Jardin, et al. 2016 | Terrestrial |  |  |

Bone healing generally well understood; however timetables vary widely based on particulars of the injury. Populations not necessarily representative of the astronaut corps. Data predominantly from topic reviews rather than randomized control trials TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------------- | ----------- | --------- | --- |
| Carender, et al. 2019 | Terrestrial |  |  |
| Kremer, et al. 2020 | Terrestrial |  |  |

2

| Jardin, et al. 2016 | Terrestrial |  |  |
| ---------------------- | ----------- | --- | --- |
| van Aaken, et al. 2016 | Terrestrial |  |  |

Good epidemiologic data to indicate that, depending on the particular subset of hand fracture sustained, risk of surgery is between 0-26%.

Populations may not represent the astronaut corps.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ---------------------- | ----------- | --------- | --- |
| Kremer, et al. 2020 | Terrestrial |  |  |
| Carender, et al. 2019 | Terrestrial |  |  |
| Del Piñal, et al. 2005 | Terrestrial | 1 |  |
| Jardin, et al. 2016 | Terrestrial |  |  |
| van Aaken, et al. 2016 | Terrestrial |  |  |

No LOCL is expected from this condition CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview Hand fracture refers to a fracture of the metacarpal bones. For the purposes of IMPACT 1.0 fractures of the phalanges were also included (including the thumb) in this CRT. It is anticipated that in future iterations of IMPACT, finger fracture will become its own condition but the CRT working group felt that the resources for a finger fracture should be included in this CRT in the absence of a separate finger fracture condition. The best-case scenario represents uncomplicated fractures and the worst-case scenario represents complicated fractures. Any fracture, if left untreated, could result in further complications such as malunion, loss-of function, and/or chronic pain. A worst-case scenario, left untreated, could result in additional significant complications such as neurovascular compromise. CNES: Fracture – Finger, Fracture – Thumb, Fracture - Metacarpal Diagnostic Scope and Resourcing: In the best-case scenario, diagnosis is based on history, physical examination (musculoskeletal and neurologic), and imaging. Plain film (X-Ray), CT, and MRI will be unavailable inflight. Musculoskeletal ultrasound was included in the CRT as it may serve as a useful adjunct in diagnosis for some cases, but it was not considered a necessary capability to diagnose hand fracture. In the worst-case scenario, diagnosis is based on history, physical examination (musculoskeletal, neurologic, and vital signs), and imaging.

In some cases, musculoskeletal ultrasound may be contraindicated due to risk of contamination of an open fracture, or further displacement of the fracture(s). The utility of musculoskeletal ultrasound would be determined on a case-by-case basis. It was included as a non-necessary capability.

This diagnostic framework is consistent with the terrestrial workup for hand fracture with the exception of the inability to perform plain film X-Ray (and if warranted CT or MRI), and thereby using Musculoskeletal Ultrasound as a possible surrogate. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. This CRT includes a scope of practice code of 5 (which correlates to an “Experienced procedure trained generalist attending (ED attending).” The CRT working group SME consensus Clinical Phase 1 duration: Best Case CP1: 1.65 hours Worst Case CP1: 1.81 hours Treatment Scope and Resourcing: Most best-case hand fractures involving the metacarpals in terrestrial populations resolve without reduction, with an initial period of splinting, followed by 4-6 weeks of casting.

Splinting was considered a necessity, whereas casting was included as a capability but not considered a necessity in this CRT. Depending on the type of fracture, finger fractures may or may not require casting, but splinting is standard of care. Although 3D printing offers potential for splinting of musculoskeletal injuries, it remains a largely experimental process and it is not within the scope of this CRT. Physical therapy is recommended post-immobilization. Exercise modification is also recommended, but not built into the CRT as this does not represent a clinical resource. Pain is variable depending on the patient. NSAIDs and Acetaminophen were included in the best-case treatment scenario. Terrestrially, all worst-case fractures warrant surgical intervention. Thus, a worst-case hand fracture in-flight would present a significant treatment challenge. These fractures

| 6/15/2023 1:58:22 PM | ICL55_Fracture - Hand Cliff |  | page: 6 |
| -------------------- | --------------------------- | --- | ------- |
would warrant an attempted reduction to achieve more physiologic alignment. Note that nerve blocks for fracture reduction are not included in the scope for IMPACT 1.0 but could be considered in the future. Procedural sedation was included in the scope for difficult reductions. Open fractures inflight would be treated with copious irrigation, wound closure, prophylactic antibiotics and splinting with possible casting after wound healing. Open fractures inflight would be treated with copious irrigation, wound closure, prophylactic antibiotics and splinting with possible casting after wound healing. Again, both splinting and casting were included as capabilities, but only splinting was considered a necessary capability in this CRT. Both plaster and fiberglass (and their associated means of removal) are included for trade-space analysis. Pain from a worst-case fracture may require narcotic analgesia. Physical therapy would be advised until the end of the mission. Exercise modification is also recommended, but not built into the CRT as this does not represent a clinical resource. Ertapenem and Ceftriaxone are provided for antibiotic prophylaxis for open fractures. Although ertapenem is not traditionally used terrestrially, it was selected due to its broad spectrum, daily dosing, and ability to be dosed IM – decreasing mass/volume requirements associated with IV medications. Communications and Support Needs: While real-time video and a+C3udio loop communications are desired for diagnosis and treatment, they were not considered a necessity, particularly in the best-case scenario. For the WC, consultation with ground specialists to facilitate treatment and healing was considered necessary given the limited diagnostic and treatment capabilities in-flight. REFERENCES 1. Boyd AS, Benjamin HJ, Asplund CA. Splints and Casts: Indications and Methods. AFP 2009; 80:491–9. 2.

Daniels JM, Zook EG, Lynch JM. Hand and Wrist Injuries: Part II. Emergent Evaluation. AFP 2004; 69:1949–56. 3. Open-fractures_ADULT.pdf.

Retrieved 23 January 2021 from http://www.med.umich.edu/asp/pdf/adult_guidelines/Open-fractures_ADULT.pdf

### IMM CLIFF RECONCILATION COMMENTS

No CLIFF available or evidence of incidence in space in literature review

### LIMITATIONS SUMMARY

There is a paucity of data for computing the best case/worst case probability. Therefore, the probability is quoted as a range. There is no spaceflight data for this CLIFF as there have been no reports of hand fractures during crewed missions The risk during microgravity operations is assumed to be zero and the calculated incidence applies only to surface operations and EVA's. This CLIFF will need to be updated after IMPACT 1.0 once partial gravity operations are considered in the model. 6/15/2023 1:58:22 PM ICL55_Fracture - Hand Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  | 89 |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  |  |  |  |  |  |  |  |  |  |
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

| Best | 132 |  |  |  |  | 34 | 34 | 211 | 411 | 3763 | 0.109221 | 10.9221 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 | 564 | 414 |  |  | 34 | 34 | 211 | 2287 | 3763 | 0.60776 | 60.776 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | ------- | ------ |

Case (UTBC) Treated Worst

|  | 132 |  |  |  |  | 34 | 34 | 211 | 1075 | 3763 | 0.285676 | 28.5676 |
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

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| -------------------- | --- | --- | --- | -------------------------- | --------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| 6/15/2023 1:58:22 PM |  |  |  |  | ICL55_Fracture - Hand Cliff |  |  |  |  |  |  | page: 8 |
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

|  | 132 |  |  | 34 211 | 377 | 3763 0.100186 | 10.0186 |
| --- | --- | --- | --- | ------ | --- | ------------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  |  | 34 211 | 377 | 3763 0.100186 | 10.0186 |
| --- | --- | --- | --- | ------ | --- | ------------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  | 34 | 34 211 | 411 | 3763 0.109221 | 10.9221 |
| --- | --- | --- | --- | ------ | --- | ------------- | ------- |

Case (UTWC)

| 6/15/2023 1:58:22 PM |  | ICL55_Fracture - Hand Cliff |  |  |  |  | page: 9 |
| -------------------- | --- | --------------------------- | --- | --- | --- | --- | ------- |
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

6/15/2023 1:58:22 PM ICL55_Fracture - Hand Cliff page: 10

## REFERENCES

Reference 1 - Feehan, L. M., and S. B. Sheps. "Incidence and Demographics of Hand Fractures in British Columbia, Canada: A Population-Based Study." J Hand Surg Am 31.7 (2006): 1068-74. Print. 2 - Farr, J. N., et al. "Fracture Incidence and Characteristics in Young Adults Aged 18 to 49 Years: A Population-Based Study." J Bone Miner Res 32.12 (2017): 2347-54. Print. 3 - Nakashian, M. N., et al. "Incidence of Metacarpal Fractures in the Us Population." Hand (N Y) 7.4 (2012): 426-30. Print. 4 - Kremer, L., et al. "Epidemiology and Treatment of Phalangeal Fractures: Conservative Treatment Is the Predominant Therapeutic Concept." Eur J Trauma Emerg Surg (2020). Print. 5 - Ho, Christopher, et al. "A Seven-Year Experience in Expedition Medicine: The Juneau Icefield Research Program." The Journal of emergency medicine 25.3 (2003): 257-64. Print. 6 - Carender, C. N., et al. "Descriptive Epidemiology and Return to Sport after Hand Fractures in Ncaa Athletes." Iowa Orthop J 39.2 (2019): 49-

54. Print.

7 - Oetgen, Matthew E, and Seth D Dodds. "Non-Operative Treatment of Common Finger Injuries." Current reviews in musculoskeletal medicine 1.2 (2008): 97-102. Print. 8 - Suh, Nina, Eugene T. Ek, and Scott W. Wolfe. "Carpal Fractures." The Journal of Hand Surgery 39.4 (2014): 785-91. Print. 9 - Fufa, Duretti T, and Charles A Goldfarb. "Fractures of the Thumb and Finger Metacarpals in Athletes." Hand clinics 28.3 (2012): 379-88, x.

Print. 10 - Geissler, William B. "Operative Fixation of Metacarpal and Phalangeal Fractures in Athletes." Hand clinics 25.3 (2009): 409-21. Print. 11 - Jardin, E., et al. "Functional Treatment of Metacarpal Diaphyseal Fractures by Buddy Taping: A Prospective Single-Center Study." Hand Surg Rehabil 35.1 (2016): 34-9. Print. 12 - van Aaken, J., et al. "Fifth Metacarpal Neck Fractures Treated with Soft Wrap/Buddy Taping Compared to Reduction and Casting: Results of a Prospective, Multicenter, Randomized Trial." Arch Orthop Trauma Surg

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

6/15/2023 1:58:22 PM ICL55_Fracture - Hand Cliff page: 11

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

### RCL Removed Conditions List

6/15/2023 1:58:22 PM ICL55_Fracture - Hand Cliff page: 12

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

6/15/2023 1:58:22 PM ICL55_Fracture - Hand Cliff page: 13

---

## Source metadata

```yaml
source_filename: "fracture-hand-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Upper Extremity Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1HO4f5QvlPzf9geB75YhojlAucgfdo9H1/view"
source_drive_id: "1HO4f5QvlPzf9geB75YhojlAucgfdo9H1"
source_sha256: 455e51732eb346015057474dd7b5071e4bd0b7844a46fd427417e8d8c850d7c9
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
