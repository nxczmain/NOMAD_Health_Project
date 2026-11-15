# Small Bowel Obstruction CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1fFEJvHDfKKXS0GrY4xh_Y7LXglDgGfgd/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 119

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

### ICL90_Small Bowel Obstruction

Small bowel obstructions are common, accounting for 12 to 16 percent of surgical hospital admissions and more than 300,000 operations annually in the United States. Patients diagnosed with acute small bowel obstruction should be admitted to the hospital and evaluated by a surgeon.

Postoperative adhesions and strangulated hernias are the most common causes of small bowel obstruction, while a variety of conditions, such as cancer, diverticulitis, volvulus, constipation and inflammatory bowel disease, can cause large bowel obstruction. The common symptoms of small bowel obstruction are pain (colicky at first), abdominal distension, vomiting, and after some time absence of flatus and stool, vomiting and dehydration. The goals of initial management are to relieve discomfort and to restore normal fluid volume and electrolytes. Bowel compromise (ischemia, necrosis, or perforation) and a surgically correctable cause (e.g., incarcerated hernia) require immediate surgical exploration; other patients may be a candidate for nonoperative management. It is essential to identify the patient with threatening or actual strangulation of the bowel.

This is suggested by a sharper, more constant and more localized pain, and the patient often has fever and signs of peritonitis (diffuse tenderness, guarding). A small bowel obstruction requires urgent care and may require medical evacuation.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

There are no documented events of small bowel obstruction during spaceflight.

### ANALOG LITERATURE

Glover reported 1 bowel obstruction aboard UK Polaris submarines, during the period 1968-1978. The incidence was estimated to be 1 surgical patient per 7,944 man-days (0.000125 x 365) = 0.0459 events/person-years. No EVAC was reported (Glover, 1981). Tansey reported medical events in US submarines. There were 2 small bowel obstruction events during the period 1968-73, causing 7 sick days (Tansey, 1979). We estimated the incidence rate as 0.000165 events/person-year (2/4,410,000 man-days * 365 days/1 year). There were EVACs for surgical conditions but they were not segregated by condition (Tansey, 1979). The Tansey study is used to estimate the incidence rate for this condition since this is a large healthy medically screened population somewhat similar to the astronaut population.

### TERRESTRIAL LITERATURE

(Scott, 2012) found the incidence of SBO to be 28.9 to 41.6 events per 100,000 person-years in persons aged 15-44 years. This study involves a large terrestrial general population. However, this population is not a healthy screened population like the astronauts and therefore is only given an LOC = 2 (neutral).

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 1.667E-4 and SD 1.175E-4

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate given the Polaris submariner analog data, under an uninformative prior, is 6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 1

Gamma(shape=2.0128, rate=12074.24) with mean 1.667E-4 and SD 1.175E-4. Evidence: Analog – Submariners – Tansey 1979. Analysis of health data from 10 years of Polaris submarine patrols. Total man-days for submarines: 4,410,000 which is 12073.92 person-years (365.25 days per year). 2 cases of small bowel obstruction reported. IR: 1.656E-4 (95%CI: 0.2777E-4, 5.473E-4)

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.000166702 SD 0.000117501 Gamma (Shape): 2.0128 (Rate): 12074.2 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Tansey, 1979 Analog 3 (Tansey, 1979) is based on a large analog military population study. This study is used to estimate the incidence rate for small bowel obstruction in astronauts during spaceflight since it involves a large healthy medically screened population somewhat similar to the astronaut population. This study is given an LOC = 3 (somewhat confident). 6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

There are no specific preflight preventive measures for small bowel obstruction.

### BEST CASE SCENARIO DEFINITION

A small bowel obstruction which responds to conservative medical treatment such as bowel rest, fluid resuscitation, analgesics and NG tube.

### WORSE CASE SCENARIO DEFINITION

A small bowel obstruction that is not responsive to conservative management and requires surgical intervention.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Terrestrial general population studies were used to estimate the best case scenario and worst case scenario percentages. In Shih 2003, there was 155 patients that had a total of 293 admissions (from January 1999 to December 2001). Of the 293 admissions, medical management alone was used during 220 (75.1 %) admissions, repeat laparotomy was performed in 73 admissions. The duration of observation until resolution of bowel obstruction ranged from 2 to 12 days with an average of 6.9 days (Shih, 2003). From Catena 2015, Level I data have shown that non-operative management can be successful in up to 90% of patients without peritonitis (Catena, 2015). Using these studies, it estimate that the best case scenario percentage is 75% to 90% and a worst case scenario percentage is 10% to 25%. It should be noted that the best case percentage will likely be higher in a younger and healthier astronaut population.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Shih, 2003 Terrestrial 3 Catena, 2015 Terrestrial 3 Terrestrial population studies are used to estimate the best case scenario and worst case scenario percentages. In Shih 2003, there was 155 patients that had a total of 293 admissions (from January 1999 to December 2001). Of the 293 admissions, medical management alone was used during 220 (75.1 %) admissions, repeat laparotomy was performed in 73 admissions. The duration of observation until resolution of bowel obstruction ranged from 2 to 12 days (average 6.9 days (Shih, 2003). From Catena 2015, Level I data have shown that non-operative management can be successful in up to 90% of patients without peritonitis (Catena, 2015). Using these two studies results in a best case probability percentage of 75% - 90% and a worst case probability percentage of 10% -25%. It should be noted that the best case percentage may be somewhat higher in a younger and healthier astronaut population. These studies are given a LOC = 3 (somewhat confident). 6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 1.667E-4 75 - 90 100 1.583 34.9588 48 288 0 0 0 0 0 Case (TBC) and SD 1.175E-4 Treated Worst 10 - 25 100 1.583 96.8775 48 336 99.8406 100 100 3 30 Case (TWC) Untreated Best N/A N/A N/A 1.583 86.4204 48 288 100 20 60 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.583 100 48 336 100 100 100 30 100 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Small bowel obstruction incidence is based on a terrestrial general population study that captured all hospitalizations for small bowel obstructions.

The worst case scenario percentage represents the percentage of cases of small bowel obstruction that do not respond to nonoperative management. The RTDC surrogate is the need for surgery.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The duration in treated best case scenarios was characterized in (Shih, 2003). Conservative treatment ranged from 2-12 days, with an average of 6.9 days. In (Cox, 1993 ) complete resolution for non-operative treatment occurred within 48 hours in 75 (88%) cases, the remaining 10 had resolved by 72 hours. RTDC in the treated best case scenario is 0% based on the best case scenario definition. The probability of LOCL for the treated best case scenario is 0% based on the best case scenario definition.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The clinical phase 2 durations encompass relapses or recurrences of the same medical condition necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The literature (Foster, 2016) found recurrence rates of SBO in patients managed nonoperatively 12% within 1 year and 20% within 5 years. This could have implications for long interplanetary missions. The average duration for worst case SBO was 48 to 336 hours (Shih, 2003). The probability of RTDC for the treated worst case scenario SBO 100% based on the worst case definition (SBO that is not responsive to conservative management and requires surgical intervention). A complicated case of small bowel obstruction is considered to be a medical emergency in which the obstruction has progressed to intestinal ischemia, gangrene, and/or perforation.

These are life threatening emergencies that require urgent resuscitation and surgical intervention. These complicated cases of small bowel obstruction may result in loss of crew life. Published studies (Long, 2019) (Rami 2017) indicate that complicated cases of small bowel obstruction have an overall mortality between 3% and 10%, but this increases to 30% with bowel necrosis/perforation. Therefore, LOCL is estimated at 3% to 30%. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS There is little data on untreated SBO. Even in austere environments such as submarines and Antarctic stations, IV fluids are available and used in conservative treatment. The duration for an SBO with no conservative treatment ranges from 2-12 days, with an average of 6.9 days (Shih, 2003).

The probability of RTDC for the untreated best case scenario of a SBO was estimated based on data related to the progression to surgical management in terrestrial patients. This was found to be between 20% and 50-60% by (Cox, 1993) and (Muang, 2012) . Hence, even if a patient is initially responsive to nonoperative treatment, they still may require RTDC up to 60% of the time for operative management. Therefore, the probability of RTDC is estimated as 20% - 60%. SBO that was initially responsive to conservative treatment can progress to a worst case scenario.

The probability of LOCL due to SBO in the best case scenario is 0% by definition.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS For untreated worst case scenarios, immediate evacuation is required. The average duration for worst case SBO was 48 to 336 hours (Shih, 2003).

The probability of RTDC is 100% for the untreated worst case scenario based on the worst case definition. For LOCL , strangulated bowl found on imaging was used a surrogate for "worst case "as these cases are typically more advanced and/or not responsive to conservative treatment.

Mortality data for this population subset was found in systematic reviews of terrestrial patients. The lowest mortality reported with SBO, strangulated bowl, and nonoperative treatment is 30% (Reddy 2017). Smith reported a mortality rate of close to 100% in patients with SBO and any strangulated bowel that is left untreated (Smith 2021). This wide variation is due to many factors including time of presentation to the hospital and the differences in etiology of SBO (tumor, adhesions, hernias). In a medically screened astronaut population with no pre-existing conditions, the mortality rate may be towards the lower end of that range. The probability of LOCL is therefore estimated as 30% - 100%.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Shih, 2003 terrestrial Cox, 1993 terrestrial 6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 5

| Citation | Source | LOC Value |  |
| -------- | ------ | --------- | --- |

1

| Foster, 2006 | terrestrial |  |  |
| ------------- | ----------- | --- | --- |
| Smith, 2021 | terrestrial |  |  |
| Johnson, 2008 | analog |  |  |

The studies that were used to inform duration of illness (CP2) were mainly in terrestrial patients. LOC was 1 (somewhat unconfident) for these because all patient populations were generally older and had significantly more co-morbidities that the average astronaut population. Furthermore, these studies were conducted in hospitalized patients with full access to emergency and ICU care. (Shih, 2003) was the main source used for CP2 durations for the best and worst case scenarios.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------- | ----------- | --------- | --- |
| Shih, 2003 | terrestrial |  |  |
| Cox, 1993 | terrestrial |  |  |
| Muang, 2012 | terrestrial |  | 3 |
| Boudiaf, 2001 | terrestrial |  |  |
| ten Broek, 2018 | terrestrial |  |  |

In a terrestrial study (ten Broek, 2018), nonoperative management was reported to be successful in 70%-80% of patients with partial obstruction without peritonitis. Combining this data we find that the minimum RTDC in the best case treated group was 0% by definition. RTDC for the untreated worst case scenario of small bowl obstruction was set at 100% based on the worst case scenario definition. RTDC is given an LOC = 3 (somewhat confident) based on terrestrial general population studies.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------- | ----------- | --------- | --- |
| Long, 2019 | terrestrial |  |  |
| Rami, 2017 | terrestrial |  |  |
| Paulson, 2015 | terrestrial |  | 2 |
| Reddy, 2017 | terrestrial |  |  |
| Smith 2021 | terrestrial |  |  |

Studies for LOCL were given an LOC value of 2 (neutral) for the worst case scenarios since these studies suffered from some of the same drawbacks as the articles used for the CP2 duration (all patient populations were generally older and had significantly more co-morbidities that the average astronaut population). The strengths of these studies were that they were all meta-analysis of different studies that incorporated a large sample size of patients with different etiologies of SBO and different age ranges, and included studies from many countries and hospitals. LOCL is given an LOC of 4 (confident) for the best case scenarios based on the best case definition.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview In general, SBO occurs when the flow of intestinal contents through the small bowel is impeded and management depends upon the etiology and severity. As adhesions are one of the leading causes of SBO terrestrially, initial often involves surgical consultation and consideration of operative intervention. However, as surgical intervention will not be possible, the condition will be worked up and treated conservatively. CNES: None Diagnostic Scope and Resourcing Diagnosis begins with a history, primary assessment, and abdominal exam.

In patients with high-grade obstruction, ultrasound evaluation of the abdomen has high sensitivity (85%). Terrestrially, CT has largely replaced ultrasonography as the first-line investigation in stable patients with suspected intestinal obstruction, however, during spaceflight, US can be considered to help with the diagnosis if it is equivocal. Lastly, part of the triage in determining severity is also determining volume depletion, electrolyte abnormalities, or metabolic acidosis/alkalosis is present and thus intravenous access, a BMP, and CBC should be obtained. Given the definitions of this case, the diagnostic resourcing remains the same for both the best and worst case. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus 6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 6

duration is as follows: CP1 BC (Treated or Untreated): 1.583 CP1 WC (Treated or Untreated): 1.583 The highest scope of practice required for diagnosis includes the interpretation of the ultrasounds which is SOP 5 (attending). Treatment Scope and Resourcing For the best case, the resourcing standard of care involves making the patient nil per os (NPO) and initiating IV hydration. IV antiemetics can be used to assist with nausea/vomiting caused by the obstruction, however, will not treat the obstruction itself. Other adjunctive medications include the use of oral gastrographin, magnesium oxide, simethicone, and probiotics. All of these modalities have shown an improvement in outcomes with SBO, however, severe SBOs will preclude the ability to utilize oral agents effectively. For the worst case, while all of these modalities can be considered, likely a nasogastric tube will be needed for decompression, low-powered suction, and drainage. Surgical management will not be possible. Communications and Support Needs While ground communications can help guide management and guide RTDC decisions especially if the diagnosis warrants surgical management, the need for picture or video messaging is unlikely. REFERENCES Abbas S, Bissett IP, Parry BR. Oral water soluble contrast for the management of adhesive small bowel obstruction. Cochrane Database Syst Rev. 2007 Jul 18;2007(3):CD004651. doi: 10.1002/14651858.CD004651.pub3. PMID: 17636770; PMCID: PMC6465054. Chen SC, Yen ZS, Lee CC, Liu YP, Chen WJ, Lai HS, Lin FY, Chen WJ. Nonsurgical management of partial adhesive small-bowel obstruction with oral therapy: a randomized controlled trial. CMAJ. 2005 Nov 8;173(10):1165-9. doi: 10.1503/cmaj.1041315. PMID: 16275967; PMCID: PMC1277043.

### IMM CLIFF RECONCILATION COMMENTS

### LIMITATIONS SUMMARY

There are no documented events of small bowel obstruction during spaceflight. Large terrestrial studies do not stratify healthy patients from patients with multiple comorbid medical conditions who may be more likely to develop small bowel obstruction. It is uncertain how a small bowel obstruction would manifest and respond to treatment in microgravity and partial gravity environments. 6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 | 113 | 89 |  |  | 145 |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 223 | 664 |  | 89 |  |  | 145 |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
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

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 2631 | 3763 | 0.699176 | 69.9176 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 2741 | 3763 | 0.728408 | 72.8408 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3534 | 3763 | 0.939144 | 93.9144 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

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

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 8

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

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTBC) Treated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3757 3763 | 0.998406 99.8406 |
| ------- | --- | --------- | ------ | --------- | ---------------- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 9

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

CP2: The communications HSTC was affected by the placement of an NG tube in the treated best-case and both worst-case scenarios. The treated worst-case scenario largely mirrors the untreated worst-case scenario since the definition states that surgery is required and surgical capabilities are outside the scope of resources for this CLiFF, (i.e. the "treated" worst-case scenario is partial treatment since there are no surgical capabilities). However, while conservative treatment in the worst-case scenario does not resolve the bowel obstruction, it would improve symptoms, which affects TI. Thus there is less TI in the worst-case treated scenario than the worst-case untreated scenario despite lack of surgical intervention in both. CP3: The worst-case treated scenario doesn't constitute true treatment since surgical capabilities are outside the scope of this CLiFF.

Thus, it is anticipated that the patient would be kept comfortable, but die after prolonged starvation in the setting of a non-resolving SBO. TI was therefore assigned nearly 99.8% for this scenario.

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

6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 10

- How much does the editor trust the source of the evidence?

- How closely does the editor think that the data represents the exploration spaceflight environment?

- Other considerations, at the discretion of the editor, supported in the comments for LOE scoring.

6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 11

## REFERENCES

Reference

1. Secular Trends in Small Bowel Obstruction and Adhesiolysis in the United States, 1988-2007. Scott, Frank, et al. Am J Surg. 2012 September:

204(3): 315-320. (Scott, 2012). 2. Adhesive small bowel obstruction: how long can patients tolerate conservative treatment? Shih, Shou-Chuan, et al. World J Gastroenterol. 2003 Mar;9(3):603-5. (Shih, 2003). 3. The Safety and Duration of Non-operative Treatment for Adhesive Small Bowel Obstruction. Cox, M.R., et al. Australian and new Zealand Journal of Surgery. Volume 63, Issue 5. May 1993. Pages 367-371. (Cox, 1993).

4. Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (ABSO): 2017 update of the evidence-based

guidelines from the world society of emergency surgery ASBO working group. ten Broek, Richard, et al. World Journal of Emergency Surgery 13,

- Article number: 24 (2018). (ten Broek, 2018). 5. Emergency Medicine Evaluation and Management of Small Bowel Obstruction: Evidence-Based

Recommendations. Long, Brit, et al. The Journal of Emergency Medicine. Volume 56, Issue 2, February 2019. Pages 166-176. (Brit, 2019). 6. A Systematic Review of the Clinical Presentation, Diagnosis, and Treatment of Small Bowel Obstruction. Rami Reddy, Srinivas, et al. Current Gastroenterology Reports 19, Article number: 28 (2017). (Rami Reddy, 2017). 7. Analysis of Health Data from 10 Years of Polaris Submarine Patrols. Undersea Biomedical Research, Submarine Supplement - 1979. (Tansey, 1979).

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

6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 12

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

### RTDC Removal to Definitive Care

### SANS Spaceflight-Associated Neuro-ocular Syndrome

### SAS Space Adaptation Syndrome

### SEVA Spaceflight Extravehicular Activity

### SME Subject Matter Expert

### SoP Standard Operating Procedure

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 13

6/15/2023 2:09:15 PM ICL90_Small Bowel Obstruction Cliff page: 14

---

## Source metadata

```yaml
source_filename: "small-bowel-obstruction-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1fFEJvHDfKKXS0GrY4xh_Y7LXglDgGfgd/view"
source_drive_id: "1fFEJvHDfKKXS0GrY4xh_Y7LXglDgGfgd"
source_sha256: b52b164df5c86c496081808e7430d4c5ac88553c9f16b155e4011eb1cdfbcb0d
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
