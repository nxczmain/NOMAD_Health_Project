# Sprain Strain Back CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1WtqjLhVCb20I6P1DvmXuNKafGjJwTkNd/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Musculoskeletal Conditions/CliFF 119

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

ICL101_Sprain/Strain - Back Back injury usually involves a strain or sprain in the supporting muscles of the vertebral spine, especially common in the lumbar region, and usually involves pain and task impairment. The most common mechanism of injury terrestrially is lifting. The dynamics of this injury are different in microgravity but may occur when a crewmember is translating a high mass object or during regular exercise (Scheuring et al, 2009). A pre-existing history of a significant back injury increases the risk of occurrence on orbit. For the purpose of this CliFF, back sprain/strain injuries are limited to muscles and ligamentous tissue of the back.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Scheuring et al, 2009 is a retrospective review of musculoskeletal injuries in US Spaceflight from Mercury - ISS Expedition 13. The following data sources were utilized in this review: post-flight medical debriefs, the LSAH medical record database, the Johnson Space Center (JSC) electronic medical record system, including ASCR specialist assessment and treatment logs, and the JSC Flight Medicine Clinic vault records. Musculoskeletal injury data in the ISS program was extracted from the private medical conferences held between the ISS crewmembers and their flight surgeon up to and including Expedition 13, as well as from the ASCR specialists supervising the crewmember’s in-flight training regimen. Lastly, several entries came directly from personal communications with astronaut crewmembers or flight surgeons and the authors when not otherwise duplicated.

Information collected on each injury included location, type, and a detailed narrative on the mechanism of injury, the type of exercise the crewmember performed during the flight, previous history of injury, treatment, and post-flight outcome. The term “ in-flight” included lunar surface operations. It reports 54 sprain/strain injuries and 31 "back injuries." (Note the 31 back injuries are corroborated by Johnston III et al, 2020).

Unfortunately, Scheuring et al, 2009 does not report the number of back sprain/strains specifically. Notably, 9 of the 31 back injuries occurred during exercise on ISS which supports resistance exercise as a risk factor for back sprain/strain in-flight. The IMM version 6.5 2017 update obtained data through ISS Expedition 40 to augment the Scheuring et al, 2009 study. They identified an additional 30 back injuries (3 STS and 27 ISS).

These two sources together provide a total incidence of 61 inflight "back injuries" in US spaceflight from Mercury - ISS Expedition 40. This was considered to be the most robust data to inform this CLiFF and was used for the incidence distribution. Note that this may be an overestimate of the incidence because "back injuries" could include injuries beyond sprain/strains, but it was felt to be the best approximation available. Kertsman et al, 2012 is a review of Space Adaptation Back Pain, which is a separate condition that is covered by ICL#91.

### ANALOG LITERATURE

Thomas et al, 2003 is a large (n = 13,441) retrospective review of US Navy submarines. The study population consisted of US Navy officers and enlisted men deployed on 240 submarine patrols. This analog is similar to spaceflight in that it is an isolated and confined environment. The subjects are also highly screened, and healthy, similar to astronauts. Unlike astronaut crews, the Navy submariners were all male, 88-90% were white, and most were between 18-35 yo. It provides an incidence of musculoskeletal strains/sprains or 0.7/100 person-years for officers over 30 years old. However, this incidence is not specific to the back.

### TERRESTRIAL LITERATURE

Hoy et al, 2012 is a large systematic review of 150 studies spanning 1980-2009 of the global prevalence of low back pain. Search terms included, "back pain, lumbar pain, bach ache, backache, and lumbago." Point, 1 month, 1 year, and lifetime prevalence were than estimated from these studies. Demographics for the populations included in the study were not available but it is clear that it included a large population of elderly patients with back pain.

### OVERALL INCIDENCE SUMMARY

9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 1

## INCIDENCE

- Mean: 1.367 SD: 0.1774

### INCIDENCE SUMMARY

The incidence distribution for this CLiFF is based on 61 documented U.S. in-flight “back injuries” (Scheuring et al, 2009; Johnston III et al, 2020; NASA, Back Sprain/Strain CLiFF, 2017) from Mercury through ISS Expedition 40. This is the Bayesian posterior distribution for the incidence rate given the spaceflight data (61 events over 44.58 person-years of flight) under an uninformative prior is Gamma(shape=59.38, rate=43.44) with mean 1.367 and SD 0.1774. TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 1.36694 SD 0.17739 Gamma (Shape): 59.38 (Rate): 43.44 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Scheuring et al, 2009 Spaceflight 3 NASA, Back Sprain/Strain CLiFF, 2017 Spaceflight 3 Johnston III et al, 2020 Spaceflight 3 Kerstman et al, 2012 Spaceflight 1 Thomas et al, 2003 Analog 0 Hoy et al, 2012 Terrestrial 0 Scheuring et al, 2009 is a retrospective review of in-flight musculoskeletal events from Mercury - Expedition 13, in which 31 "back injuries" were reported. This is corroborated by Johnston III et al, 2020 in Chapter 10 of Principles of Clinical Medicine for Spece Flight. The IMM Back Sprain/Strain CLiFF updated of 2017 added an additional 30 back injuries to this number, making the value current through Expedition 40. The incidence used for this CLiFF will be the same as the IMM CLiFF from 2017. Kerstman et al, 2012 is a review of Space Adaptation Back Pain (ICL#91), thus not applicable to this condition. Thomas et al, 2003 is analog data from US Navy Submariners, and presents incidence of sprain/strains but is not specific to back sprain/strain. Hoy et al, 2012 presents incidence data for "low back pain" which was assumed to artificially inflate the incidence given that other disorders (e.g. vertebral disc disorder) would be included in this systematic review. 9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Many in-flight back sprain/strain injuries occur during exercise (Scheuring et al, 2009). The Astronaut Strength, Conditioning and Rehabilitation (ASCR) program and Astronaut gym at Johnson Space Center are strategic to providing pre-flight strengthening in attempts to prevent or mitigate injuries as well as post-flight rehabilitation. The Strength Coach's primary role is to provide an exercise plan designed to achieve flight physical readiness and prevent musculoskeletal injuries during spaceflight training.

### BEST CASE SCENARIO DEFINITION

A Grade I or II strain/sprain in which there is minimal or partial muscle or ligamentous tearing.

### WORSE CASE SCENARIO DEFINITION

A Grade III strain/sprain in which there is full thickness muscle or ligamentous tearing, and/or instability.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

There is an overall paucity of data regarding the probability of best-case scenario (Grade 1/II) vs. worst-case scenario (Grade III) back sprains/strains. Torjussen and Bahr, 2006 is a review of the 2002-2003 Federation Internationale de Ski Snowboard World Cup snowboard accidents. 135 acute injuries occurred, the most common of which was sprains/strains and 13% of injuries occurred to the back. The injuries were graded using the Abbreviated Injury Scale (AIS) as 1 (minor), 2 (moderate), 3 (severe, not life threatening, 4 (serious, life threatening), 5 (critical, survival uncertain), 6 (maximum, currently untreatable). All back injuries were scored as AIS 1 or 2. This approximates to a 100% best-case scenario. The 2017 IMM CLiFF had a best-case probability of 97-98% and a worst-case probability of 2-3%, based on a worst-case scenario definition of "severe back injury accompanied by severe pain." This was based on an algorithm developed with the original IMM, not informed by data. Therefore, both of these sources were considered and the best-case scenario probability was assigned as 97-100% and the worst-case scenario probability was assigned as 0-3%.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Torjussen and Bahr, 2006 Terrestrial 2 NASA, Back Sprain/Strain CLiFF, 2017 Spaceflight 2 Torjussen and Bahr, 2006 is a review of the 2002-2003 Federation Internationale de Ski Snowboard World Cup snowboard accidents. 135 acute injuries occurred, the most common of which was sprains/strains and 13% of injuries occurred to the back. The injuries were graded using the Abbreviated Injury Scale (AIS) as 1 (minor), 2 (moderate), 3 (severe, not life threatening, 4 (serious, life threatening), 5 (critical, survival uncertain), 6 (maximum, currently untreatable). All back injuries were scored as AIS 1 or 2. This approximates to a 100% best-case scenario. The 2017 IMM CLiFF had a best-case probability of 97-98% and a worst-case probability of 2-3%, based on a worst-case scenario definition of "severe back injury accompanied by severe pain." This was based on an algorithm developed with the original IMM, not informed by data. 9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best Mean: 1.367 97 - 100 100 0.87 17.1937 24 336 0 0 0 0 0

- Case (TBC) SD: 0.1774

Treated Worst 0 - 3 100 2.2 44.5952 730 11680 39.2506 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.87 44.5952 72 672 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 2.2 46.8243 730 11680 39.2506 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The best-case scenario RTDC probabilities were pre-determined to be 0% by the Clinical & Science Team of ExMC. The RTDC surrogates assigned for the worst-case scenarios were need for surgery and/or hospitalization. See detailed comments for each scenario below.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The duration is based on non-specific acute low back pain studies. The minimum duration (24 hours) is informed by Carey et al, 1996 as this was the minimum duration necessary to meet criteria for "severe low back pain that leads to the respondent's being unable to perform his or her usual daily activities for at least one day." The maximum duration of 336 hours (2 weeks) is also based on Carey et al, 1996 in which the majority of patients with low back pain did not present for care and had resolution within 2 weeks. RTDC probability for best-case scenarios was pre- determined by the ExMC Clinical & Science Team to be 0%. There was no evidence in the literature to support LOCL from a back strain/sprain.

LOCL was accordingly assigned a probability of 0%.

TREATED WORST CASE SCENARIO (TWC) COMMENTS There is a paucity of data in the literature regarding Grade III sprains/strains of the back. Available literature focuses primarily on the latissimus dorsi in high performance athletes. The best summary of this is a review of 55 cases of latissimus dorsi and teres major ruptures. This review includes 23 cases of latissimus dorsi rupture (11 were treated operatively). All returned to near preinjury function. The range of healing time was 1 month to 16 months for operative cases (Donohue, 2017). The RTDC surrogate for this Cliff was initially assigned as need for hospitalization or surgical intervention. Typically, patients present to the hospital due to pain. Pain control could be provided during spaceflight, so this is not a realistic surrogate for RTDC. While a Grade III sprain/strain requiring surgical intervention is possible in spaceflight, it is unlikely that RTDC would be executive for surgical intervention. Rather, pain control and PT would be the mainstay of treatment inflight and surgical intervention would be pursued post-flight. Lack of prompt surgical intervention will be reflected in TI. Thus, the RTDC probability was according assigned as 0%. There was no evidence in the literature to support LOCL from a back strain/sprain. LOCL was accordingly assigned a probability of 0%.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Derry et al, 2017 included a placebo arm for treatment of "acute low back pain" secondary to sprains/strains. These resolved within 3-14 days. The duration was accordingly assigned as 72-672 hours. RTDC probability for best-case scenarios was pre-determined by the ExMC Clinical & Science Team to be 0%. There was no evidence in the literature to support LOCL from a back strain/sprain. LOCL was accordingly assigned a probability of 0%. UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS There is a paucity of data in the literature regarding Grade III sprains/strains of the back. Available literature focuses primarily on the latissimus dorsi in high performance athletes. The best summary of this is a review of 55 cases of latissimus dorsi and teres major ruptures. This review includes 23 cases of latissimus dorsi rupture (11 were treated operatively). All returned to near preinjury function. The range of healing time was 1 month to 13 months for non-operative cases and 1 month to 16 months for operative cases (Donohue, 2017). While it is plausible that operative intervention could extend healing times, for consistency’s sake within the CLiFF, the 1-16 months (operative intervention) duration will be used again for this scenario. The RTDC surrogate for this Cliff was initially assigned as need for hospitalization or surgical intervention. Typically, patients present to the hospital due to pain. Pain control could be provided during spaceflight, so this is not a realistic surrogate for RTDC. While a Grade III sprain/strain requiring surgical intervention is possible in spaceflight, it is unlikely that RTDC would be executive for surgical intervention.

Rather, pain control and PT would be the mainstay of treatment inflight and surgical intervention would be pursued post-flight. Lack of prompt surgical intervention will be reflected in TI. Thus, the RTDC probability was according assigned as 0%.There was no evidence in the literature to support LOCL from a back strain/sprain. LOCL was accordingly assigned a probability of 0%.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Carey et al, 1996 Terrestrial Donohue et al, 2017 Terrestrial 3 9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 5

3

### Citation Source LOC Value

Derry et al, 2017 Terrestrial Durations are informed primarily by literature regarding "acute low back pain" rather than specifically back sprain/strain, but the durations were felt to be reasonable for this diagnosis based on ExMC SME editor review.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Chesson et al, 1988 Analog 3 Donohue et al, 2017 Terrestrial The Clinical & Science Team of ExMC pre-determined that RTDC probability for best-case scenarios is 0%. For worst-case scenarios, the surrogates of hospitalization and surgery were considered.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

N/A N/A 3 No literature was identified to suggest that LOCL is an outcome of back sprain/strain for any scenario. Thus the probability was assigned 0% for all scenarios. CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview Sprain/strain – Back encompasses sprains or strains of any of the muscles of the back (exclusive of the neck musculature). Best-case scenario involves Grade I/II sprains/strains and worst-case scenario involves Grade III sprains/strains. CNES: N/A Diagnostic Scope and Resourcing In the best-case scenario, diagnosis is based on history, physical examination (musculoskeletal, neurologic). In the worst-case scenario, diagnosis is based on history, physical examination (musculoskeletal, neurologic, ano-rectal examination). Musculoskeletal ultrasound may serve as a useful adjunct to rule out other pathologies in the differential diagnosis but was not considered essential to diagnosis.

The utility of musculoskeletal ultrasound would be determined on a case-by-case basis. It was included as a non-necessary capability. This diagnostic framework is consistent with the terrestrial workup for back sprain/strain with the exception of the inability to perform plain film X-Ray (and if warranted CT or MRI), and thereby using Musculoskeletal Ultrasound as a possible surrogate. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.87 hours CP1 WC (Treated or Untreated: 2.2 hours This CRT includes a scope of practice code of 5 (which correlates to an “Experienced procedure trained generalist attending (ED attending)” and was included for musculoskeletal ultrasound and interpretation. Treatment Scope and Resourcing Terrestrially, back sprains and strains resolve quickly with a period of relative rest, analgesia, and physical therapy. Exercise modification is also recommended, but not built into the CRT as this does not represent a clinical resource. Pain is variable depending on the patient. NSAIDs (both oral and topical), cold packs, lidocaine patches, and acetaminophen were included in the best-case treatment scenario, muscle relaxing agents were additionally included in the worst-case scenario. Although 3D printing offers potential for splinting of musculoskeletal injuries, it remains a largely experimental process and it is not within the scope of this CRT.

Communications and Support Needs While real-time video and audio loop communications are desired for diagnosis and treatment, they were not considered a necessity. REFERENCES 1. Oliveira CB, Maher CG, Pinto RZ, Traeger AC, Lin C-WC, Chenot J-F, et al. Clinical practice guidelines for the management of non-specific low back pain in primary care: an updated overview. Eur Spine J 2018; 27:2791–803. 2. Low Back Pain.

Retrieved 9 December 2020 from https://www.aafp.org/family-physician/patient-care/clinical-recommendations/all-clinical-recommendations/back- pain.html

### IMM CLIFF RECONCILATION COMMENTS

The best and worst-case scenario definitions have changed. Previously the IMM best-case scenario definition was, “mild or moderate back injury which resolves by itself or causes minimal disturbance requiring only symptomatic treatment.” The current best-case scenario definition is, “A Grade I or II strain/sprain in which there is minimal or partial muscle or ligamentous tearing.” The IMM worst-case scenario definition was, “having a severe back injury accompanied by severe pain.” The current worst-case scenario definition is, “A Grade III strain/sprain in which there is full thickness muscle or ligamentous tearing, and/or instability.” The updates to these definitions were made to standardize the best and worst-case scenario definitions for sprains/strains across all sprain/strain conditions in the ICL 1.0. Despite their differences, the current definitions would manifest in 9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 6

symptoms that are similar to the IMM definitions. The incidence from the 2017 version 6.5 update to the IMM was used again in this CLiFF as it was the most robust and accurate representation of in-flight back sprain strain incidence data available.

### LIMITATIONS SUMMARY

- The incidence for this condition is based on spaceflight data regarding inflight “back injuries.” While the vast majority of these can be assumed to

be sprains/strains, it is not explicitly specific to back sprain/strain injuries. • There is a paucity of data to inform the best-case, worst-case probabilities for this condition. The values used in this CLiFF were based on a study in elite snowboarders (Torjussen and Bahr, 2006) and the prior IMM CLiFF (NASA, Back Sprain/Strain CLiFF, 2017). • The duration values are based primarily on studies regarding “acute low back pain” rather than specifically back sprain/strain. 9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 7

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

| Best |  | 664 |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  |  |  |  |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  | 664 |  | 89 |  |  |  |  |  |  |  |  |
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

| Best |  |  | 414 | 22 |  |  |  | 211 | 647 | 3763 | 0.171937 | 17.1937 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 |  | 414 | 22 | 196 |  | 34 | 211 | 1673 | 3763 | 0.444592 | 44.4592 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  | 414 | 22 | 196 |  | 34 | 211 | 1673 | 3763 | 0.444592 | 44.4592 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  | 414 | 22 | 196 |  | 34 | 211 | 1762 | 3763 | 0.468243 | 46.8243 |
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

|  |  | 664 |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  | 664 |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 8

Total Human

|  |  | Translation & |  | Total Tasks |  |
| --- | --- | ------------- | --- | ----------- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) |  | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | --- | ---------------------- | ------------- | -------------------- | --- |
|  |  | (microgravity) |  | Condition Tasks Full |  |

Mission Treated Best

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

| 132 | 414 | 22 | 34 211 | 1477 3763 | 0.392505 39.2506 |
| --- | --- | --- | ------ | --------- | ---------------- |

Case (TWC) Untreated Worst

| 132 | 414 | 22 | 34 211 | 1477 3763 | 0.392506 39.2506 |
| --- | --- | --- | ------ | --------- | ---------------- |

Case (UTWC) 9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 9

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

CP2: The majority of impairment from all sprain/strain-type injuries stems from uncontrolled pain. CP3: No comment

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

9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 10

## REFERENCES

Reference

1. Carey TS, Evans AT, Hadler NM, Lieberman G, Kalsbeek WD, Jackman AM, et al. Acute severe low back pain: a population-based study of

prevalence and care-seeking. Spine. 1996;21(3):339-44.

2. Chesson I, Charles V, Hilton SM. The epidemiology of back-related hospitalizations among US Navy personnel. NAVAL HEALTH RESEARCH

CENTER SAN DIEGO CA, 1988.

3. Derry S, Wiffen PJ, Kalso EA, Bell RF, Aldington D, Phillips T, et al. Topical analgesics for acute and chronic pain in adults - an overview of

Cochrane Reviews. Cochrane Database Syst Rev. 2017;5(5):Cd008609. Epub 2017/05/13. doi: 10.1002/14651858.CD008609.pub2. PubMed

- PMID: 28497473.

4. Donohue BF, Lubitz MG, Kremchek TE. Sports injuries to the latissimus dorsi and teres major. The American journal of sports medicine.

2017;45(10):2428-35.

5. Hoy D, Bain C, Williams G, March L, Brooks P, Blyth F, et al. A systematic review of the global prevalence of low back pain. Arthritis Rheum.

2012;64(6):2028-37. Epub 2012/01/11. doi: 10.1002/art.34347. PubMed PMID: 22231424.

6. Johnston III SL, Smart KT, Pattarini JM. Medical Evacuation Risk and Crew Transport. In: Barratt MR, Baker ES, Pool SL, editors. Principles of

Clinical Medicine For Space Flight. 2nd ed. New York: Springer; 2020. p. 327-56.

7. Kerstman EL, Scheuring RA, Barnes MG, DeKorse TB, Saile LG. Space adaptation back pain: a retrospective study. Aviation, space, and

environmental medicine. 2012;83(1):2-7.

8. NASA. Back Sprain/Strain Clinical Information Findings Form. Integrated Medical Database of the Human Health and Performance Contract

Integrated Medical Model Project. 2017;v6.5.

9. Scheuring RA, Mathers CH, Jones JA, Wear ML. Musculoskeletal injuries and minor trauma in space: incidence and injury mechanisms in U.S.

astronauts. Aviat Space Environ Med. 2009;80(2):117-24. Epub 2009/02/10. doi: 10.3357/asem.2270.2009. PubMed PMID: 19198198.

10. Thomas TL, Garland FC, Molé D, Cohen BA, Gudewicz TM, Spiro RT, et al. Health of US Navy submarine crew during periods of isolation.

Aviation, space, and environmental medicine. 2003;74(3):260-5.

11. Torjussen J, Bahr R. Injuries among elite snowboarders (FIS Snowboard World Cup). Br J Sports Med. 2006;40:230-4. doi:

10.1136/bjsm.2005.021329.

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

9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 11

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

9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 12

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

9/12/2022 2:06:51 PM ICL101_Sprain/Strain - Back Cliff page: 13

---

## Source metadata

```yaml
source_filename: "sprain-strain-back-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Musculoskeletal Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1WtqjLhVCb20I6P1DvmXuNKafGjJwTkNd/view"
source_drive_id: "1WtqjLhVCb20I6P1DvmXuNKafGjJwTkNd"
source_sha256: 6cfee682e58768b07f22e3c641790ed64a1310b0f356a5b94c4f0c4a36ef2520
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
