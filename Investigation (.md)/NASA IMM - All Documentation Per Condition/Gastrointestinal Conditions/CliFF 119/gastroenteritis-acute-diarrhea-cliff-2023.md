# Gastroenteritis Acute Diarrhea CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1YNsoEJDb7pN7YmSuHFn7e_6uJXAI9YyX/view) · **13 pages**

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

### ICL59_Gastroenteritis/Acute Diarrhea

Gastroenteritis is a non-specific term for various pathologic states of the gastrointestinal tract. However, the primary manifestation is diarrhea. This is often accompanied by associated symptoms of nausea, vomiting, anorexia, abdominal pain/cramping, bloating, and bowel gas. It can be caused by a number of different etiologies ranging from reactions to medications or other chemicals/toxins or even radiation, however, gastroenteritis is typically caused by viruses (ex. rotavirus, norovirus), bacteria (ex. E. coli, Salmonella, Campylobacter, Shigella), or parasites (ex. Giardia, Cryptosporidium).

These can be foodborne, waterborne, or spread from person-to-person, often through a fecal-oral route. However, the threat of many of these infections is likely low in the spaceflight environment with good hygiene and access to clean food and water. Workup of gastroenteritis in spaceflight will be limited as infectious work-up will likely not be feasible. Treatment, as explained below, will be centered around prevention and management of dehydration.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Antonsen et. al. in 2017 evaluated LSAH data for ISS missions through Expedition 40 and found two reported cases of diarrhea with a person year incidence of 0.14. Furthermore, upon evaluating a LSAH data pull of missions inclusive of the Space Shuttle Program, Mir, and ISS (through Expedition 13), an additional 33 cases of diarrhea and 4 cases of gastroenteritis (for a total of 39 cases) were reported. The two cases found within Crucian et al 2013, evaluated in-flight infectious disease from missions STS-1 thru STS-108 from 1981-2003 are encompasses within these 39 cases. Upon evaluation of the primary LSAH data utilized during Antonsen 2017, our team was able to calculate a mean per person year incidence of 0.918.

### ANALOG LITERATURE

The most accurate analog to consider in this setting may be a population of pilots as military populations may often be located in locations with higher susceptibility to viral or bacterial gastroenteritis. One such study determined an incidence among commercial pilots after a standardized questionnaire was mailed to pilots employed by a Swedish airline company in 2012 (Lindgren, et al). Another important analog study included military personnel in Iraqi Freedom and Enduring Freedom (Monteville, 2006). Incidence of gastroenteritis in the analog population was felt to be less accurate than spaceflight data given it is including viral, bacterial, and protozoal sources from around the world that likely may occur in contaminated food/water. These pathogens are unlikely to lead to gastroenteritis in space.

### TERRESTRIAL LITERATURE

While numerous studies have evaluated gastroenteritis terrestrially, Jones et al 2007 evaluated four population based surveys that were conducted from 1996-2003 to determine the burden of acute diarrheal illness in the US. The incidence was specifically evaluated for age-matched controls to our astronauts.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean: 0.92 SD: 0.15 6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 1

### INCIDENCE SUMMARY

For this condition, the best evidence references for incidence came from inflight experience. For ISS, the Antonsen 2017 report cites 2 cases in

Table 1 and 37 relevant events in Table 2. This makes for 39 total events for spaceflight throughout STS and Mir, and ISS through Expedition 40,

which is 42.46 total person-years. The Crucian and Sams 2013 report cites 2 events in STS missions through STS-108. Since this overlaps in time with the Antonsen report, we will only use the Antonsen report to develop the incidence distribution. Under the Bayesian framework, this data (39 events over 42.46 person-years) leads to a posterior incidence distribution of Gamma (shape=39, rate=29.16). All other references were deemed irrelevant to the spaceflight environment so no adjustments were made to provide coverage. Incidence distribution: Gamma (shape=35, rate=42.46) mean: 0.918 per py, SD: 0.15 per py. Analog incidence was 0.497 per py and terrestrial incidence was 0.612 per py.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.918 SD 0.15 Gamma (Shape): 35 (Rate): 42.46 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Jones et al, 2007 Terrestrial 2 Antonsen et al, 2017 Spaceflight 4 Crucian et al, 2013 Spaceflight 3 Lindgren et al, 2012 Analog 2 Rees et al, 2004 Analog 2 Monteville et al, 2006 Analog 2 Thomas et al, 2003 Analog 2 Crucian and Antonsen both cite LSAH data pulls, however, the Antonsen reference contains 39 cases compared to Crucian's 2 viral gastroenteritis cases. Furthermore, Antonsen's totals encompass Crucian's. Given that these numbers appear fairly robust and are specific to the space environment and astronauts exposed to that food/water, there is much higher level of confidence than amongst terrestrial and analog studies in locations that make them more susceptible to pathogens that are unlikely to be seen in the space environment. Furthermore, while the spaceflight data may be erroneously low secondary to reporting bias, this is true for all populations as people are less likely to seek treatment for mild gastroenteritis/diarrhea. The fact that the spaceflight incidence is higher than terrestrial and analog incidence is reassuring that this reporting bias may not be significant. 6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Annual medical examination and nutritional assessments are performed. Preflight microbiological testing is limited to MRSA screening.

### BEST CASE SCENARIO DEFINITION

An uncomplicated course of gastroenteritis/acute diarrhea which resolves spontaneously or causes minimal disturbance; with mild nausea/vomiting, diarrhea, or abdominal pain requiring only symptomatic treatment.

### WORSE CASE SCENARIO DEFINITION

A severe course of gastroenteritis/acute diarrhea, requiring parenteral re-hydration, or refractory to treatment.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The best case vs. worst case probability is difficult to calculate given the vast majority of best case scenarios are never reported as health care attention is never sought. Further, any studies evaluating what percentage of patients require parenteral hydration or have refractory symptoms are biased by the fact that these are all patients who are already more likely to present for treatment. Furthermore, in U.S. healthcare systems, if patients are concerned enough regarding their symptomology to present to an emergency room for such symptoms, they may be more likely to receive parenteral fluids even if they are not absolutely needed. One study of military and similar populations being treated for Traveler's diarrhea found that 15% required parenteral fluids, however, this is also from largely bacterial gastroenteritis in the Middle East, Southeast Asia, Latin America, and the Caribbean (Olson 2019). Most other studies evaluating the military populations estimate ~2% of these patients warrant hospitalization (Monteville 2006, Schrader 2017). As another way to evaluate BC/WC, Rees et. al. 2004 reported that 7% of Californians surveyed with infectious gastroenteritis had persistent protracted symptoms despite management. Lastly, the previous CLiFF for IM used a WC percent chance of 17% however this was based on the fact that 5 cases had been reported in spaceflight at that time and if the next case happened to be a worst case, it would bring the odds to 1/6 (or 17%). With all of this said in acknowledging the limitations, choosing a 7% WC probability as the halfway point between this data seems reasonable.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Rees et al, 2004 Analog 2 Monteville et al, 2006 Analog 2 Olson et al, 2019 Analog 2 Thomas TL, 2003 Analog 2 Level of confidence is already diminished given our data does not come from spaceflight. Further, there are a number of limitations that are explained in the best case/worst case prose that have less to do with these specific studies, and more to do with limitations understanding what cases of gastroenteritis are going to meet the definitions of worst case in spaceflight. 6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best mean: 0.92 per py, 93 - 93 100 0.666 6.657 9.7 57 0 0 0 0 0

- Case (TBC) SD: 0.15 per py

Treated Worst 7 - 7 100 1.25 25.9633 21 108 0 2 3 0.0029 0.0032 Case (TWC) Untreated Best N/A N/A N/A 0.666 15.4797 27 71 0 1 13 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.25 78.9265 36 108 100 2 13 0.0032 0.0618 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

As stated above, the best case scenario involves gastroenteritis that is uncomplicated and can either resolve spontaneously or cause minimal disturbance. This is true for the vast majority of gastroenteritis cases terrestrially, and especially true for non-infectious etiologies. The cornerstones of treatment will likely include symptomatic management of diarrhea and cramping with bulking agents and simethicone, nausea management, and rehydration. Given a paucity of data regarding spaceflight or analog gastroenteritis leading to a return to definitive care, gastroenteritis that was severe enough that it might warrant hospital admission was chosen as the surrogate for RTDC.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The TBC scenario is a self-limited course of gastroenteritis that does not require hospitalization and responds to treatment. Thus, RTDC and LOCL are both expected to be 0%. Duration was decided by terrestrial data treating gastroenteritis with loperamide or loperamide+simethicone.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The chosen RTDC surrogate for the treated worst case scenario was hospitalization. Unfortunately, there is not robust data on hospitalization rates or time of hospitalization rates, however, there was decent data evaluating symptoms. One complicating aspect when considering WC scenarios terrestrially is that they include dysentery from shigella and other infections like ETEC, Salmonella, Giardia, etc. Infections like these are unlikely in spaceflight, but tend to represent the "worst case" infections on Earth. Furthermore, when considering infectious gastroenteritis terrestrially, treatment options may also include antibiotics in addition to bulking agents. However, as these infectious etiologies are unlikely to cause gastroenteritis in spaceflight, antibiotics are not part of the treatment paradigm. Studies involving loperamide or loperamide + simethicone are likely the closest representation of treatment for worst case scenarios. Reviews evaluating these considerations were utilized for TWC duration, RTDC, and LOCL. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS UTBC duration values are taken from RCTs where a treatment was compared to placebo. In these cases, the placebo group outcomes are used to inform our untreated groups. Most best case diarrhea/gastroenteritis cases are likely going to be non-infectious and self-limited. Given a paucity of data looking at non-infectious causes and the severe limitation that most people in best case scenarios do not present to their physicians, most of our data comes from the traveler's diarrhea literature. Hospitalization is the RTDC surrogate and this ranges from 1-13% depending upon study and country. LOCL is not expected as this is a best case scenario that is self-limited.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS As with UTBC, UTWC scenarios involve utilizing the duration and hospitalization data from studies employing placebo arms. Furthermore, in worst case scenarios we are often utilizing hospitalization or mortality data (RTDC and LOCL) from low-resource countries as a surrogate for a worst case scenario without adequate treatment. These numbers are therefore likely more conservative than would be predicted in spaceflight in that they are involving treatment of severe infectious etiologies without treatment. However, in acknowledging this limitation, they were still utilized for truly planning for a worst case scenario. TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Kaplan et al 1999 Terrestrial Murphy et al 1993 Terrestrial CDC 2010 Terrestrial 2 Riddle et al 2008 Terrestrial Kabir et al 1986 Terrestrial 6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 5

We do not have spaceflight or analog data robustly evaluating duration of gastroenteritis. Terrestrially data is severe limited by the fact that there are numerous forms of infectious gastroenteritis, especially forms that may be found while traveling to foreign countries. Many of these etiologies are much less likely to occur in spaceflight. Duration is also limited by reporting bias, especially for best case scenarios, in that most patients do not report mild gastroenteritis that is conservatively management at home.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Monteville et al 2006 Analog Olson et al 2019 Analog Schrader et al 2017 Terrestrial 2 van Sonnengburg et al 2000 Terrestrial Kotloff et al 1999 Terrestrial As with duration, while we do have an analog military population included for RTDC, our confidence is still lower given the severe limitations that many of these cases may be viral, bacterial, or protozoal gastroenteritis caused while traveling abroad without proper sterilization of food our water.

Furthermore, hospitalization itself as a surrogate for RTDC is conservative in that many patients may get hospitalized mainly for rehydration purposes. It is also possible that oral and parenteral rehydration can be performed in spaceflight without true RTDC being required. Given these factors, we have neutral confidence.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Troeger et al 2018 Terrestrial 3 This source provides quality data regarding mortality rates from around the world. This allows us to provide a range of BC and WC mortality rates, however is gain biased by many of these deaths likely attributed to infectious etiologies that would be more rare in spaceflight. With that said, we have some confidence that LOCL would likely fall within these range of mortality for gastroenteritis.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW ICL #59 - Gastroenteritis Capabilities and Resourcing Scope Overview Gastroenteritis refers to an acute GI viral or bacterial infection leading to symptomology of nausea, vomiting, diarrhea, abdominal pain, anorexia, and occasionally fever. Acute diarrhea is defined as diarrhea <14 days in duration. These symptoms, if uncontrolled, will lead to dehydration and electrolyte imbalance. The leading sources of such infections would be organisms limited to those carried into space by humans. CNES: None Diagnostic Scope and Resourcing In mild disease, or in the best-case condition, diagnostics are based on clinical symptoms and physical exam. In the worst-case, a history, physical exam, vital signs, and serum chemistry to evaluate for electrolyte imbalance are necessary to guide management. This diagnostic framework is consistent with the terrestrial workup for gastroenteritis. We will not include a microbiological workup with stool antigens or culture, or microscopy due to low sensitivity and low likelihood of affecting management. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.666 hours CP1 WC (Treated or Untreated): 1.25 hours The highest scope of practice for diagnosis is 3 (experienced ED/ICU nurse). Treatment Scope and Resourcing Most cases of mild gastroenteritis in terrestrial populations resolve without any treatment or with anti-emetic or bulking medications as needed. Thus, we included anti-emetics, bulking agents, antipyretic/mild pain control, dietary modifications, and oral hydration. For the worst case, vascular access and intravenous hydration and electrolyte replacement are added. Antibiotic treatment is not typically indicated in the treatment of acute watery diarrhea in resource-limited settings, especially if we do not have the capabilities of identifying the organism so it is excluded from this CRT. Hand washing with soap, appropriate disposal of human waste, and safe handling of food and water are also important. Communications and Support Needs For the BC definition ground consultation is unlikely to change treatment decisions or outcomes. For this reason, ground communication equipment is not considered necessary and are not included in the CRT. The WC definition carries the possibility of more complex disease and more significant risk. For this reason, resources for consultation with the ground and on board clinical decision support are more likely to be needed in ways that affect management and are included in the CRT. REFERENCES 1. World Health Organization. The treatment of diarrhea, a manual for physicians and other senior health workers. -- 4th revision. Geneva, Switzerland: World Health Organization, 2005. 2. World

- Gastroenterology Organization (WGO): Global guidelines on acute diarrhea in adults and children – A global perspective (2012) 3. Global Task

- Force on Cholera Control (GTFCC): Acute diarrheal disease in complex emergencies – Critical steps (2010) Guerrant RL, Van Gilder T, Steiner

TS, et al. Practice guidelines for the management of infectious diarrhea. Clin Infect Dis 2001; 32:331. 4. Victora CG, Bryce J, Fontaine O, Monasch R. Reducing deaths from diarrhea through oral rehydration therapy. Bull World Health Organ 2000; 78:1246. 5. Fewtrell L, Kaufmann RB, Kay D, et al. Water, sanitation, and hygiene interventions to reduce diarrhea in less developed countries: a systematic review and meta-analysis. Lancet Infect Dis 2005; 5:42. 6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 6

### IMM CLIFF RECONCILATION COMMENTS

The previous CLiFF was informative, especially for multiple analog studies which were included in this current effort. Regarding incidence, at the time of its creation there was only data on 5 reported spaceflight cases of gastroenteritis, however, we now have more robust spaceflight data available. Multiple analog studies from this CLiFF were then added to our data collection. As discussed above, one limitation was also that the worst case scenario was based around the possibility that the next case of gastroenteritis could be a worst case scenario leading to a WC scenario percentage of 16.67% (or 1 out of 6). Our search provided some updated data to inform this system as well. Lastly, regarding scenario comments, while we cannot use the functional impairment data given we have moved to task impairment, we also evaluated to sources chosen to inform these comments and added them to our analysis.

### LIMITATIONS SUMMARY

The limitations are extensively discussed above in their representative sections. The largest limitations regarding understanding the incidence, diagnosis, and management of gastroenteritis in space are: 1) mild gastroenteritis is under reported as symptoms are self-limited and often do not require treatment, and 2) the etiologies of gastroenteritis in spaceflight are very likely to be different from terrestrial causes. This distinction affects the overall incidence, severity, duration, diagnosis, and management. Given this limitation, most of the reported values in this CLiFF regarding the severity, duration, and RTDC/LOCL are likely conservative overestimations. 6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best | 0 | 0 | 0 | 0 | 0 | 0 | 145 | 0 | 13 | 0 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 0 | 664 | 0 | 0 | 0 | 0 | 145 | 0 | 13 | 0 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 0 | 664 | 0 | 89 | 0 | 0 | 145 | 0 | 13 | 0 |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 0 | 89 | 0 | 0 | 145 | 0 | 13 | 0 |  |  |
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

| Best | 132 | 0 | 0 | 0 | 0 | 0 | 0 | 211 | 501 | 3763 | 0.133139 | 13.3138 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 | 0 | 0 | 0 | 0 | 0 | 0 | 211 | 1165 | 3763 | 0.309593 | 30.9593 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 | 0 | 414 | 22 | 196 | 34 | 34 | 211 | 1954 | 3763 | 0.519267 | 51.9267 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 | 0 | 414 | 22 | 196 | 34 | 34 | 211 | 2177 | 3763 | 0.578528 | 57.8528 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  | Inter- |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | -------------- | -------- | ------ | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  |  | Communications | personal | Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple | Complex |  |  |  |  | pulmonary |  |  |  |  |  |

Skills Treated Best

|  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 8

Total Human

|  |  | Translation & |  | Total Tasks |  |
| --- | --- | ------------- | --- | ----------- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) |  | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | --- | ---------------------- | ------------- | -------------------- | --- |
|  |  | (microgravity) |  | Condition Tasks Full |  |

Mission Treated Best

| 0 0 | 0 | 0 0 0 | 0 0 | 0 3763 | 0 0 |
| --- | --- | ----- | --- | ------ | --- |

Case (TBC) Untreated Best

| 0 0 | 0 | 0 0 0 | 0 0 | 0 3763 | 0 0 |
| --- | --- | ----- | --- | ------ | --- |

Case (UTBC) Treated Worst

| 0 0 | 0 | 0 0 0 | 0 0 | 0 3763 | 0 0 |
| --- | --- | ----- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 9

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

CP2: In the best case treated scenario, it was assumed that it would be recommended that the ill crewmember not exert themselves (cardiopulmonary) while actively being treated. Worst case scenario would entail a higher degree of impairment due to marked dehydration requiring IV fluid administration. CP3: the Worst-case untreated scenario was assumed to deteriorate in clinical phase 3, increasing the task impairment. (Worsening dehydration. Note this scenario does not include hypovolemic shock as that is a separate condition).

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

6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 10

## REFERENCES

Reference

1. Jones, T. F., et al. (2007). "A population-based estimate of the substantial burden of diarrhoeal disease in the United States; FoodNet, 1996-

2003." Epidemiology and infection 135(2): 293-301.

2. Antonsen, E. (2017) "Risk of Adverse Health Outcomes and Decrements in Performance due to In-Flight Medical Conditions." NTRS.

3. Crucian, B. and C. F. Sams (2013). Evidence Report: Risk of Crew Adverse Health Event Due to Altered Immune Response. NTRS.

4. Lindgren, T., et al. (2012). "Digestive functional symptoms among commercial pilots in relation to diet, insomnia, and lifestyle factors." Aviat

Space Environ Med 83(9): 872-878.

5. Rees, J., Pannier, Mary Ann, McNees, Alexander (2004). "Persistent Diarrhea, Arthritis, and Other Complications of Enteric Infections: A Pilot

Survey Based on California FoodNet Surveillance, 1998–1999." Clinical Infectious Diseases 38.

6. Monteville MR et al. Incidence, etiology, and impact of diarrhea among deployed US military personnel in support of Operation Iraqi Freedom

and Operation Enduring Freedom. Am J Trop Med Hyg. 2006.

7. Olson S et al. Travelers' diarrhea: update on the incidence, etiology and risk in military and similar populations - 1990-2005 vs. 2005-2015,

dose a decade make a difference? Trop Dis Travel Med Vaccines 2019.

8. Michael A. Kaplan, M. M. J. P., PhD, MPH; Rita R. Ash, MS; Kimberly I. McKonly, MS; Eileen C. Helzner, MD, MS; Edward B. Nelson, MD, PhD

(1999). "Loperamide-Simethicone vs Loperamide Alone, Simethicone Alone, and Placebo in the Treatment of Acute Diarrhea With Gas-Related Abdominal Discomfort." Arch Fam Med 8.

9. CDC (2010). "Average Length of Stay for discharges from short-stay hospitals, by age and first-listed diagnosis." International Classification of

Diseases 9th revision.

10. Riddle MS, Arnold S, Tribble DR. Effect of adjunctive loperamide in combination with antibiotics on treatment outcomes in traveler's diarrhea:

a systematic review and meta-analysis. Clin Infect Dis. 2008 Oct 15; 47(8):1007-14.

11. Murphy GS, Bodhidatta L, Echeverria P, et al. Ciprofloxacin and loperamide in the treatment of bacillary dysentery. Ann Intern Med 1993;

118:582–6.

12. Schrader AJ. Strategies to improve management of acute watery diarrhea. Am J Trop Med Hyg. 2017 Dec;97(6):1857-1866

13. Troeger, C., et al. (2018). "Estimates of the global, regional, and national morbidity, mortality, and aetiologies of diarrhoea in 195 countries: a

systematic analysis for the Global Burden of Disease Study 2016." The Lancet Infectious Diseases 18(11): 1211-1228.

14. von Sonnenburg, F., et al. (2000). "Risk and aetiology of diarrhoea at various tourist destinations." The Lancet 356(9224): 133-134.

15. Kabir, I. B., Thomas Khanam, Asma (1986). "Comparative Efficacies of Single Intravenous Doses of Ceftriaxone and Ampicillin for Shigellosis

in a Placebo-Controlled Trial." Antimicrob Agents Chemother: p. 645-648

16. World Health Organization. The treatment of diarrhoea, a manual for physicians and other senior health workers. -- 4th revision. Geneva,

- Switzerland: World Health Organization, 2005.

17. World Gastroenterology Organisation (WGO): Global guidelines on acute diarrhea in adults and children – A global perspective (2012)

18. Thomas TL, Garland FC, Mole D, Cohen BA, Gudewicz TM, Spiro RT, et al. Health of U.S. Navy submarine crew during periods of isolation.

Aviat Space Environ Med 2003 Mar;74(3):260-5

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

### CAC Coronary Artery Calcium

### CHS Crew Health and Safety

6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 11

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

### OBGYN Obstetrics and Gynecology

6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 12

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

6/15/2023 2:00:38 PM ICL59_Gastroenteritis/Acute Diarrhea Cliff page: 13

---

## Source metadata

```yaml
source_filename: "gastroenteritis-acute-diarrhea-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1YNsoEJDb7pN7YmSuHFn7e_6uJXAI9YyX/view"
source_drive_id: "1YNsoEJDb7pN7YmSuHFn7e_6uJXAI9YyX"
source_sha256: 1b9bf1c740243ba18eff5900ac3f6e5bb760fbff842bee501e85fa650e4e3e7a
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
