# Respiratory Tract Infection Lower CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1Qm3UjezZ8B3_hQztSbcHj9D6KGoxm_Xv/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Respiratory System Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL81_Respiratory Tract Infection - Lower This condition refers to infectious conditions affecting the lower respiratory tract. These conditions interfere with oxygenation/ventilation and can range from mild illnesses with minimal effects to prolonged illnesses that severely impair the crew member. Per the definitions the best case is a viral lower respiratory infection such as bronchitis or influenza. These are generally self limited and non fatal but in some cases, such as influenza, can lead to prolonged feelings of illness. The definitions and resourcing was done with respect to a long duration lunar DRM. Since such crews will be tested and quarantined prior to launch influenza was not considered a significant threat and most of the best case definitions will likely be mild bronchitis. resources were assigned accordingly and are described in the Capabilities and Resource Table (CRT) section below but are largely symptomatic and aim to keep the individual functioning despite the relatively mild illness The worst case includes bacterial superinfections and pneumonia. These are potential threats on any mission since the bacteria responsible are often normal flora that opportunistically infect a weakened or otherwise compromised host. These tend to be more severe and can lead to life threatening illnesses if not addressed with appropriate antibiotic treatments. The data in this CLIFF and the resourcing was arranged appropriately. Again, most healthy individuals will suffer no more than moderate illness. However, there is always a non zero chance of progression or permanent lung damage is pneumonia is not treated and antibiotics for bacterial disease drastically shorten the course of illness, reduce mortality, and reduce the risk of permanent damage. For this reason treatment focuses heavily on the use of antibiotics in all cases of pneumonia regardless of apparent initial severity.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Antonsen et al. discusses bronchitis events (only 1 event total) in ISS missions. Crucian et al. discusses incidences of "flu-like illness" in STS missions, which include respiratory symptoms and fever, of which there have been 3 instances. There have been no reported cases of pneumonia in space except for toxic inhalation pneumonitis (not included here).

### ANALOG LITERATURE

Schlaich et al discusses epidemiology of German cargo ship crews while on long voyages with minimal port contact. Influenza-like illnesses have a rate of 6.6 cases per 100 person-years. While population is not explicitly described, it is most likely healthy working-age males. The population and length of voyages without outside contact makes this a good analog for space missions.

### TERRESTRIAL LITERATURE

Broulette et al breaks down incidence data of community-acquired pneumonia into age and risk category. The most applicable category for comparison to astronauts is 18-49 year old adults with low risk factors, which gives a risk of 7.5 per 1000 person-years.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean: 0.0089 per py, SD: 3.949E-5 per py

### INCIDENCE SUMMARY

8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 1

- Incidence Distribution: Gamma(shape = 50793, rate = 5707103) mean: 0.0089 per py, SD: 3.95E-5 per py; the Bayesian Posterior of the

hierarchical meta-analysis across references.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.00889996 SD 3.94899E-05 Gamma (Shape): 50793 (Rate): 5.7071E+06 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Broulette, 2013 Terrestrial 4 Macfarlane, 2001 Terrestrial 3 Antonsen, 2017 Space 2 Crucian, 2013 Space 0 Schlaich CC, 2009 Analog 2 Broulette and Macfarlane references have the highest LOE values. Spaceflight incidence data are based on only a few cases and the diagnostic criteria may not be reliable. 8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

none

### BEST CASE SCENARIO DEFINITION

Influenza-like illness, or viral bronchitis that resolves with symptomatic treatment.

### WORSE CASE SCENARIO DEFINITION

Bacterial suprainfected influenza-like illness or bronchitis or bacterial pneumonia, that requires treatment but does not result in ARDS or respiratory failure (see Respiratory Failure CliFF, ICL80).

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Respiratory Tract Infection (Lower) - Influenza; Respiratory Tract Infection (Lower) - Bronchitis, Viral; Respiratory Tract Infection (Lower) - Pneumonia, Bacterial; Respiratory Tract Infection (Lower) - Coronavirus

### BEST CASE/WORST CASE PROBABILITY COMMENTS

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case. Best Case

Probability 90%- 99.5% Worst Case Probability 0.5% - 10% TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Prasso JE, 2016 Terrestrial N/A Gonzales R, 2000 Terrestrial 4 Bacterial pneumonia complicates only 0.5-0.6% of influenza cases (worst case) Prasso JE, Deng JC. Postviral Complications: Bacterial Pneumonia.

Clin Chest Med. 2017 Mar;38(1):127-138. doi: 10.1016/j.ccm.2016.11.006. Epub 2016 Dec 13. PMID: 28159155; PMCID: PMC5324726. From microbiological studies only 10% of lower respiratory infections (bronchitis) have bacterial infection (worst-case) Gonzales R, Sande MA.

Uncomplicated acute bronchitis. Ann Intern Med. 2000 Dec 19;133(12):981-91. doi: 10.7326/0003-4819-133-12-200012190-00014. PMID: 11119400. 8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best mean: 0.0089 per 90 - 99.5 100 0.5 7.66676 72 264 0 0.3 0.9 0 0.0002

Case (TBC) py, SD: 3.949E-5 per py Treated Worst 0.5 - 10 100 1.5 16.4895 120 264 0 7.4 19.5 0.1 4.6 Case (TWC) Untreated Best N/A N/A N/A 0.5 16.4895 72 264 0 0.5 1.1 0 0 Case (UTBC) Untreated N/A N/A N/A 1.5 50.3588 120 264 56.6038 100 100 27 50

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

TREATED BEST CASE (TBC) SCENARIO COMMENTS TBC = influenza-like illness or viral bronchitis that resolves with supportive treatment (not antibiotics)

TREATED WORST CASE SCENARIO (TWC) COMMENTS TWC is lower respiratory infection requiring antibiotics, bacterial pneumonia UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS

- Best Case Scenario Definition: Influenza-like illness, or viral bronchitis that resolves with symptomatic treatment. For the untreated best case

scenario, this condition should resolve even without treatment in the healthy astronaut population. Untreated best case scenario has higher task impairment and may have longer CP2 duration than treated best case scenario.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS

- Untreated worst case definition: Bacterial suprainfected influenza-like illness or bronchitis or bacterial pneumonia, that requires treatment but does

not result in ARDS or respiratory failure (see Respiratory Failure CliFF, ICL80). Untreated worst case has higher task impairment and may have longer CP2 duration than treated worst case scenario.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ---------------- | ----------- | --------- |
| Ebell, 2013 | Terrestrial |  |
| Mandell LA, 2007 | Terrestrial |  |

2

| Gundrum, 1919 | Terrestrial |  |
| ------------- | ----------- | --- |
| Caplan, 1939 | Terrestrial |  |

Robust amount of information regarding duration of best and worst case scenarios when left treated or untreated. Not representative of the Astronaut Corps, but provides reasonable duration expectations TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ----------------- | ----------- | --------- |
| Little P, 2017 | Terrestrial |  |
| Broulette J, 2013 | Terrestrial |  |

2

| Moore M, 2019 | Terrestrial |  |
| ----------------------- | ----------- | --- |
| Contreras CL, 2008-2012 | Terrestrial |  |

8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 5

Available data captures tens of thousands of patients. Patient populations do not represent the astronaut corps. Variability in healthcare systems where the studies were conducted could skew decisions of who is admitted and who is treated as an outpatient.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Little P, 2017 Terrestrial Fine MJ, 1997 Terrestrial 3 Luna CM, 2016 Terrestrial Price, 2006 Terrestrial Consistent data demonstrating mortality from best and worst case scenarios, except for untreated bacterial pneumonia. Cohorts do not represent astronaut corps and high degree in treatment variability given international enrollments.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Overview The best case (BC) definition “resolves with symptomatic treatment” so the standard of care to bound capabilities and resources for this condition is that of ILI and of viral bronchitis. Per guidelines this is patient education and supportive care. , , For the worst case (WC) definition the standard of care is that of an uncomplicated healthcare associated pneumonia (HCAP) in both outpatient and inpatient settings. This accounts for both antibiotic sensitive and antibiotic resistant organisms as well as respiratory support for non critical care patients. The definition specifically excludes respiratory failure and ARDS so no critical care resources are included. Diagnostic Scope and Resourcing Both BC and WC include software resources to support diagnostics and prognostics. Given the mild nature of the BC definition there are minimal consequences for imprecise diagnoses from a treatment and outcomes perspectives.1,2,3 For this reason diagnostic capabilities are limited to vital signs, history taking and physical exam. There are higher consequences for resources and outcomes for an imprecise diagnosis in the WC definition (e.g. use of antibiotics, risk of mortality and lung damage). For this reason resources for imaging, lab capability, history, physical, and prognostic capability incorporating decision scores are included. , , While procalcitonin is sometimes included in local protocols to guide antibiotic use, it is still controversial and will add resources without necessarily “paying” for these additions by contributing to resource conservation through its’ use. For this reason SME consensus is to exclude it from this iteration of the ICL-81 CRT. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration; CP1 BC: 0.5 hours for history, pulmonary physical exam, and vital signs. CP1 WC: 1.5 hour for an experienced provider history, pulmonary physical exam, vital signs, blood draw and lab work, ultrasound, and prognostic scoring such as CURB65. Treatment Scope and Resourcing Both the BC and WC for these conditions include software resources for treatment recommendations. The best case (BC) definition “resolves with symptomatic treatment.” Given this definition, treatment resources include those for alleviating fever, myalgia, cough, dehydration, and throat discomfort. While effective antiviral treatments for influenza do exist, they are recommended for hospitalized patients, those with severe disease, and those at high risk for complications. These do not reflect the BC definition nor the astronaut population so these treatment resources are also excluded.1,2,3 The WC definition adds bacterial infection and the possibility of pneumonia without respiratory failure or ARDS. This requires the same symptomatic treatments from the BC and adds broad spectrum antibiotics, oxygen, and chest PT. Antibiotics are included for 3 days of IV antibiotics , , , , followed by a transition to PO therapy for the duration of Clinical Phase 2. Communications and Support Needs The BC definition is one most humans have experienced personally and ground consultation is unlikely to change treatment decisions or outcomes. For this reason ground communication equipment is not considered necessary and are not included in the CRT. The WC definition carries the possibility of more complex disease and more significant risk. For this reason, resources for consultation with the ground and on board clinical decision support are more likely to be needed in ways that affect management and are included in the CRT.

### IMM CLIFF RECONCILATION COMMENTS

Respiratory Infection’s functional impairments (FI) calculation follows the IMM mild non-space adaptation template. Pulmonary dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008). By definition in Clinical Phase I, FI is 100%. Duration of physical exam as described in ISS checklist for the best case scenario is estimated to be 15 minutes. During Clinical Phase II, FI is estimated at 0 to 9%. Duration is estimated to be from 96 to 168 hours (4-7 days). (Meneghetti, 2011) In Clinical Phase III, by definition, full recovery is expected. FI is 0%; EVAC and LOCL are not expected for the best case scenario.

### LIMITATIONS SUMMARY

Spaceflight incidence data are based on only a few cases and the diagnostic criteria may not be reliable. Treated best case RTDC should be 0% based on the best case definition. Treated best case LOCL should be 0% based on the best case definition. Untreated worst case RTDC should be 100% based on worst case definition. Untreated CP2 durations should probable be equal to or greater than treated CP2 durations. Adjusted CP2 durations based on available data – assumed that the range of treated case durations are the same as the range of the untreated case durations.

May be able to use the lowest end of the distribution for completely treated scenarios, shift towards the higher end of the distributions based on the 8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 6

percent of unavailable resources for partially treated scenarios, and use the highest end of the distribution for the completely untreated scenarios.

This is the approach currently used for EVAC and LOCL in IMM. Sanity check of adjusted input data gives reasonable outcomes for the probabilities of RTDC and LOCL for DRMs. 8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  | 89 |  |  | 145 |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  | 89 |  |  | 145 |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  | 89 |  |  | 145 |  |  |  |  |
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

| Best | 132 |  |  |  |  |  |  | 211 577 | 3763 | 0.153335 | 15.3335 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ------- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  |  | 211 1241 | 3763 | 0.32979 | 32.979 |
| ---- | --- | --- | --- | --- | --- | --- | --- | -------- | ---- | ------- | ------ |

Case (UTBC) Treated Worst

|  | 132 |  |  |  |  |  |  | 211 1241 | 3763 | 0.32979 | 32.979 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------- | ---- | ------- | ------ |

Case (TWC) Untreated Worst

|  | 132 |  |  |  | 196 |  |  | 211 1660 | 3763 | 0.441137 | 44.1137 |
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

|  | 223 | 664 |  | 89 |  |  | 145 |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 8

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

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 | 414 | 22 196 | 34 211 | 2130 3763 | 0.566038 56.6038 |
| --- | --- | ------ | ------ | --------- | ---------------- |

Case (UTWC) 8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 9

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

CP2: Interpersonal skills were considered to be impaired due to the risk of crewmembers spreading infection in close contact (i.e. they likely would be self-isolating to try to prevent infecting the rest of the crew). CP3: No comments.

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

8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 10

## REFERENCES

Reference Harris, Aaron M et al. “Appropriate Antibiotic Use for Acute Respiratory Tract Infection in Adults: Advice for High-Value Care From the American College of Physicians and the Centers for Disease Control and Prevention.” Annals of internal medicine vol. 164,6 (2016): 425-34. doi:10.7326/M15-1840 National Institute for Health and Care Excellence. Cough (acute): antimicrobial prescribing https://www.nice.org.uk/guidance/ng120/resources/cough-acute-antimicrobial-prescribing-pdf-66141652166341 (Accessed on February 26, 2021). Wenzel, Richard P, and Alpha A Fowler 3rd. “Clinical practice. Acute bronchitis.” The New England journal of medicine vol. 355,20 (2006): 2125-

30. doi:10.1056/NEJMcp061493

Clark, Tristan W et al. “Adults hospitalized with acute respiratory illness rarely have detectable bacteria in the absence of COPD or pneumonia; viral infection predominates in a large prospective UK sample.” The Journal of infection vol. 69,5 (2014): 507-15. doi:10.1016/j.jinf.2014.07.023 Ramirez, Julio A et al. “Treatment of Community-Acquired Pneumonia in Immunocompromised Adults: A Consensus Statement Regarding Initial Strategies.” Chest vol. 158,5 (2020): 1896-1911. doi:10.1016/j.chest.2020.05.598 American College of Emergency Physicians Practice Guidelines for Community Acquired Pneumonia, October 2020 (accessed March 1st, 2021)

Kalil, Andre C et al. “Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia: 2016 Clinical Practice Guidelines by the Infectious Diseases Society of America and the American Thoracic Society.” Clinical infectious diseases : an official publication of the Infectious Diseases Society of America vol. 63,5 (2016): e61-e111. doi:10.1093/cid/ciw353 Centers for Disease Control and Prevention. Influenza antiviral medications: Summary for clinicians. https://www.cdc.gov/flu/professionals/antivirals/summary-clinicians.htm (Accessed on March, 1st 2021).

Ramirez JA, Srinath L, Ahkee S, Huang A, Raff MJ. Early switch from intravenous to oral cephalosporins in the treatment of hospitalized patients with community-acquired pneumonia. Arch Intern Med. 1995 Jun 26;155(12):1273-6. PMID: 7778957.

Ramirez JA, Vargas S, Ritter GW, Brier ME, Wright A, Smith S, Newman D, Burke J, Mushtaq M, Huang A. Early switch from intravenous to oral antibiotics and early hospital discharge: a prospective observational study of 200 consecutive patients with community-acquired pneumonia. Arch Intern Med. 1999 Nov 8;159(20):2449-54. doi: 10.1001/archinte.159.20.2449. PMID: 10665893.

Oosterheert JJ, Bonten MJ, Schneider MM, Buskens E, Lammers JW, Hustinx WM, Kramer MH, Prins JM, Slee PH, Kaasjager K, Hoepelman AI.

Effectiveness of early switch from intravenous to oral antibiotics in severe community acquired pneumonia: multicentre randomized trial. BMJ. 2006 Dec 9;333(7580):1193. doi: 10.1136/bmj.38993.560984.BE. Epub 2006 Nov 7. PMID: 17090560; PMCID: PMC1693658.

Carratalà J, Garcia-Vidal C, Ortega L, Fernández-Sabé N, Clemente M, Albero G, López M, Castellsagué X, Dorca J, Verdaguer R, Martínez- Montauti J, Manresa F, Gudiol F. Effect of a 3-step critical pathway to reduce duration of intravenous antibiotic therapy and length of stay in community-acquired pneumonia: a randomized controlled trial. Arch Intern Med. 2012 Jun 25;172(12):922-8. doi: 10.1001/archinternmed.2012.1690. PMID: 22732747.

Pinzone, Marilia Rita et al. “Duration of antimicrobial therapy in community acquired pneumonia: less is more.” TheScientificWorldJournal vol. 2014 759138. 21 Jan. 2014, doi:10.1155/2014/759138

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

8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 11

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

### OR Occurrence Rate

### PA Physician Assistant

### PDQ Pain Disability Questionnaire

8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 12

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

8/23/2023 5:52:16 PM ICL81_Respiratory Tract Infection - Lower Cliff page: 13

---

## Source metadata

```yaml
source_filename: "respiratory-tract-infection-lower-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Respiratory System Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1Qm3UjezZ8B3_hQztSbcHj9D6KGoxm_Xv/view"
source_drive_id: "1Qm3UjezZ8B3_hQztSbcHj9D6KGoxm_Xv"
source_sha256: b2793981d49b2285737c926a3ab0f9d8e549a488a6fa3e970b21ea47289102a1
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
