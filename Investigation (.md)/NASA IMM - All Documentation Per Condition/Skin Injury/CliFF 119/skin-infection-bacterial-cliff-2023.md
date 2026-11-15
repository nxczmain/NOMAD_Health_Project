# Skin Infection Bacterial CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1_0izjwg37Q5SPoj04iI6y7U9MVVt-cRC/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Best Case](#best-case)
- [Worst Case](#worst-case)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL87_Skin Infection - Bacterial Skin infection is a common condition that has been reported frequently in space. It can be bacterial or fungal. Fungal skin infection is usually asymptomatic and diagnosed by its description. These usually respond well to treatment with appropriate topical medications. The most severe skin infections are of bacterial origin. Cellulitis is an acute bacterial infection of the skin and subcutaneous tissue. It is most commonly caused by streptococci and staphylococci. The presentation is with pain, rapidly spreading erythema, and edema. Also there may be fever, and regional lymph nodes may be enlarged. Treatment is with appropriate antibiotics and analgesics, as indicated. Untreated cellulitis can progress to sepsis and septic shock. Many astronauts have remarked that their wounds healed more slowly while on orbit. Infections may be caused by direct effects of microgravity on immunity; atmospheric characteristics, such as moisture, airborne contaminants, condensate; or both.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

17 occurences of skin infections have occurred in spaceflight. This number was retrieved from the 2017 Skin Infection CLIFF and the same citation was used. Unfortunately this LD68 encompases all sorts of skin infections not just those that are bacterial, so the incidence data is somewhat limited in usefulness. 62% of infections (of which there were a total of 17) were bacterial in nature (Marshburn, 2008). Saile (2017) added 4 more events but it is unclear the etiology of these infections.

### ANALOG LITERATURE

Two analogue papers with translateable populations. Basnyat, 1997: 4/155 trekkers developed cellulitis during 22 day treks in high altitude settings.

This study is some limited applicability due to likely high levels of infectious pathogen exposure [mountain trekkers in Nepal). Stahlman, 2017: During a 4 year surveillance study, the incidence of skin and soft tissue infections among active component US military members was 558.2 per 10,000 person years.

### TERRESTRIAL LITERATURE

Miller, 2015: patients less than 65 years of age, the incidence of skin and soft tissue infections is 48 cases per 1000 person years.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 0.2315 and SD 0.05625

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate of skin infection given the spaceflight data (17 events over 45.49 person-years) under an uninformative prior and adjusting (assuming 62% of skin infections are bacterial) is Gamma(shape=16.94, rate=73.17) with mean 0.2315 and SD 0.05625. TABLE 1. INCIDENCE MODEL 6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 1

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.231516 SD 0.0562501 Gamma (Shape): 16.94 (Rate): 73.17 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Stahlman, et al. 2017 Terrestrial 2 Walton M, et al. 2010 Spaceflight 4 Large retrospective data from a database, wide population characteristics, no individuals measuring, no qualitative data, definition of skin infections is broader than our intended topic of bacterial skin infections (+1 indirectness) . 6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Any acute or chronic infections or any communicable disease until healed and not associated with functional deficit or communicable stated Adherent scars that interfere with the wearing of personal equipment or that impair movement to the extent that emergency egress would be impeded Infections of the skin, systemic or superficial, if communicable, extensive, or not amenable to treatment any skin disorder, acute or chronic, that is severe enough to cause interference with emergency egress, wearing of flight equipment, or successful mission completion.

### BEST CASE SCENARIO DEFINITION

A bacterial skin infection that resolves without treatment, or treatment with topical or a single course of oral antibiotics.

### WORSE CASE SCENARIO DEFINITION

The worst case scenario is defined as a moderate or severe bacterial skin infection requiring a second course of oral antibiotics, a course of intramuscular or intravenous antibiotics, or that is refractory to treatment. (Note necrotizing fasciitis is a separate condition).

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Cellulitis, Erysipelas, Folliculitis, Furuncles, Impetigo, and Erythrasma

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Antibiotic treatment failure rate of 12%. This is a slightly conservative estimate because the "failure" in this case is when antibiotic therapy is not effective, but the condition is for situations when a second line therapy is needed. It is a fairly reasonable estimate for this condition however not quite precise. TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Obaitan et al, 2016 Terrestrial 2 Obaitan, Itegbemie et al. “Failure of antibiotics in cellulitis trials: a systematic review and meta-analysis.” The American journal of emergency medicine vol. 34,8 (2016): 1645-52. doi:10.1016/j.ajem.2016.05.064 6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### Condition TI% Duration TI% Duration TI% RTDC LOCL

### Case Composite Probability

Scenario Incidence % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 0.2315 88 - 88 100 0.53 0 0 120 0 0 0 0 0 Case (TBC) and SD 0.05625 Treated 12 - 12 100 0.91 32.102 120 336 0 7 13 9.09091E- 9.29293E- Worst Case 05 05 (TWC) Untreated N/A N/A N/A 0.53 0 0 168 0 0 0 0 0

## Best Case

(UTBC) Untreated N/A N/A N/A 0.91 75.4983 120 336 75.4983 17 24 3.72 5.25

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Straightforward data for BC/WC as represented by the progression of the definition of skin infection to cellulitis-- large studies available for terrestrial incidence, as well as some analogue population papers with decent representation of our population. Historic IMM CLiFF has some spaceflight incidence data. T&O data supported by excellent clinical guidelines and some pre-antibiotic era papers, which provide some risk approximation of UT definitions. NOTE: per cliff definition, WC RTDC 'appropriate' =0% per instructions. Searches performed and data populated, as greater than 0 for WC RTDC definitions.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Dynamed provides a 'Strong Recommendation' for skin and soft tissue (SSTI) infection ABX duration of 5 days. There is no true upper limit given in the recommendations of this Stevens 2014 paper which is the basis of the guidelines for skin infection tx. 5 days is recommended with additional days if the infection has not resolved. RTDC and LOCL are expected to be 0% for this definition.

TREATED WORST CASE SCENARIO (TWC) COMMENTS Burnham, 2018 is a excellent clinical guideline resource setting TWC duration at 5-14 days. Li, 2019 and the 2011 NIS Healthcare cost and utilization project determined skin infection ABX treatment failures (change in antibiotics, subsequent need for admission) with a TWC RTDC range of 7-13% [surrogate= hospitalization]. LOCL is set at known mortality for cellulitis:4.5/1 million people {Lott,2014) and with an incidence of 49,500 total events per 1 million, the LOCL will result in 4.5/49,500 cases.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The untreated best case scenario is the same as a patient would has been treated, has undergone treatment failure and gets a change of antibiotics. Excellent historic studies from pre-anti-biotic era, cited in recent papers, provide UT data. Peterson, 2014 provides interesting data on treatment failure, however the BC definition, "a bacterial skin infection that resolves without treatment," ultimately supports 0% RTDC and LOCL for UT. UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS UTWC duration data comes from a preantibiotic era 1935 article by surgeon John Robb who said that he assessed patients with cellulitis at the end of 4-7 days for resolution. He says that he sees the patient the next day if there is active worsening of their condition, indicating an escalated level of treatment (surgery) is required- I defined this as his "worst case". He normally assesses the patient in 4-7 days and if there is redness, warmth or fluctuance, surgery is conducted. Peterson 2014, provides data on UTWC RTDC. Untreated worst case was assumed to equate to a patient who had failed initial antibiotic therapy (infection is essentially untreated) and subsequently needed to be hospitalized. This study examined patients who had treatment failure as defined by a change in antibiotics or a subsequent need for hospitalization after their initial oral and/or outpatient IV first treatment. Lott 2014 is used for mortality data but does not distinguish between treated and untreated deaths-- so likely higher for untreated, but conversely would be lowered when considering the comorbidities within this large population surveillance study. The assumption for Untreated Worst Case LOCL was assumed to equate to a patient went untreated and required hospitalization that failed initial therapy. As determined for RTDC, the hospitalization value was (95% CI 17.2%-24.3%) of patients and 21.6% of those had a secondary treatment failure (95% CI 14.7%- 30.5%). Therefore, 21.6% of 17.2 and 24.3% was taken for our LOCL values. The study was at an academic tertiary care center consisting of two EDs with a combined annual census of 140,000 visits in London, Ontario, Canada. Adult patients (18 years or older) whose chief complaints were consistent with skin or soft tissue infections (key words included cellulitis, abscess, infection, bite, ulcer, or rash) were screened for eligibility.

Patients who were admitted on the first visit were excluded. This paper was found through Dynamed Peterson citation that supports the statement: fever, chronic leg ulcers, chronic edema, recurrent cellulitis, and wound site cellulitis each associated with treatment failure in adults with cellulitis).

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Stevens et al, 2014 Terrestrial Burnham, Kollef, 2018 Terrestrial Robb, 1935 Terrestrial 2 Obaitan et al, 2016 Terrestrial 6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 5

### Citation Source LOC Value

Spellberg et al, 2009 Terrestrial Dynamed provides a 'Strong Recommendation' for skin and soft tissue (SSTI) infection ABX duration of 5 days. There is no true upper limit given in the recommendations of this Stevens 2014 paper which is the basis of the guidelines for skin infection tx. 5 days is recommended with additional days if the infection has not resolved.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Li et al, 2019 Terrestrial NIS HCUP Nationwide Inpatient Sample, 2011 Terrestrial 2 Peterson et al, 2014 Terrestrial RTDC and LOCL are expected to be 0% for this definition.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Lott, Gross, 2014 Terrestrial 2 RTDC and LOCL are expected to be 0% for this definition.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

## Overview

Bacterial skin infection - This is an infection of the skin or underlying soft tissues and does not include deep infections of the muscle or fascia (necrotizing fasciitis). Abscess, which is a potential complication or source of severe skin infection, is covered in a separate condition.

- CNES: N/A

### Diagnostic Scope and Resourcing

In the best-case scenario, the bacterial skin infection is diagnosed by history and physical examination of the skin. In the worst case, diagnosis is made with history and physical examination of the skin as well as use of an ultrasound which can demonstrate evidence of cellulitis or underlying abscess. Lab tests may confirm infection but do not add information that changes management.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.53 hours CP1 WC (Treated or Untreated: 0.91 hours This CRT includes a scope of practice code of 4 (which correlates to an “Intern/PA/NP” and was included for WC management decisions, particularly related to antibiotic choice.

### Treatment Scope and Resourcing

Terrestrially, mild skin infections are managed with watchful waiting, 2-3 days of topical antibiotics, or a short course of oral antibiotics. Mild infections are not associated with fevers, chills, or other systemic symptoms. Moderate to severe infections can have these systemic symptoms, pain, lymph node inflammation, among other symptoms. The more severe infections can require strong IV antibiotics, depending on the suspected bacteria. IV antibiotics can be transitioned to a prolonged course of oral antibiotics as symptoms improve. Pain of these infections is variable, depending on the infection and the person. Pain can be controlled with Tylenol and NSAIDs.

### Communications and Support Needs

Communication with ground based support through video would contribute to the management decisions and ultrasound interpretation; however, it is reasonable to wait for a routine medical conference for this communication since these issues develop over time. 6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 6

## REFERENCES

1. Gottlieb M, DeMott JM, Hallock M, Peksa GD. Systemic Antibiotics for the Treatment of Skin and Soft Tissue Abscesses: A Systematic Review and

Meta-Analysis. Ann Emerg Med 2019;73(1):8-16.

2. Stevens DL, Bisno AL, Chambers HF, et al. Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014

Update by the Infectious Diseases Society of America. Clin Infect Dis 2014;59(2):e10-e52.

3. Up To Date. Cellulitis and Skin Abscesses in Adults: Treatment. Updated May 04, 2021. Available at: https://www.uptodate.com/contents/cellulitis-

and-skin-abscess-in-adults-treatment?search=cellulitis&source=search_result&selectedTitle=1~150&usage_type=default&display_rank=1

### IMM CLIFF RECONCILATION COMMENTS

The most important difference is that the IMM CLiFF encapsulates all skin infections, including fungal infections, while this CLiFF is limited to bacterial infections. As fungal infections are often less severe than bacterial infections most, if not all, of the numbers (eg incidence, bc/wc split, RTCD, LOCL, etc.) are likely to be highly different. Therefore, the use of the IMM CLiFF has been limited to only those areas helpful, such as definitions and for the use of the worst case portions of the condition that are unlikely to include fungal infections.

### LIMITATIONS SUMMARY

The best case/worst case split was not calculated as precisely because "failure rate" of antibiotics likely encompasses second line therapy, which is encapsulated within the "worst case" for the condition. It does, however, reasonably approximate the best case/worst case split. 6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  |  | Cardio- |  |  |  |  |
| --- | ----------------------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 664 |  |  |  |  | 145 |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 664 | 113 | 89 |  |  | 145 |  |  |  |  |
| --- | ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  |  | Translation & |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity | Standing (g) |  | Equipment | Ops | Category |  |  |
| --- | ----- | --- | --------- | ------------ | -------------- | --------- | --------- | -------- | --- | --- |
|  |  |  |  |  | (microgravity) |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (UTBC) Treated Worst

|  | 132 564 | 414 | 22 | 196 | 34 | 34 | 211 2416 | 3763 | 0.642041 | 64.2041 |
| --- | ------- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 564 | 414 | 22 | 196 | 34 | 34 | 211 2841 | 3763 | 0.754983 | 75.4983 |
| --- | ------- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  |  | Cardio- |  |  |  |  |
| --- | ----------------------- | -------------- | -------- | ------ | ------- | --------- | --------- | ----- | --- | --- |
|  |  | Communications | personal | Vision | Hearing |  | Dentition | GI GU |  |  |
|  | Simple Complex |  |  |  |  | pulmonary |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 664 | 113 | 89 |  |  | 145 |  |  |  |  |
| --- | ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 8

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

| 132 564 | 414 | 22 196 34 | 34 211 | 2841 3763 | 0.754983 75.4983 |
| ------- | --- | --------- | ------ | --------- | ---------------- |

Case (UTWC) 6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 9

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

6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 10

## REFERENCES

Reference 1.) Burnham, J. P., and M. H. Kollef. "Treatment of Severe Skin and Soft Tissue Infections: A Review." Curr Opin Infect Dis 31.2 (2018): 113-19.

Print. 2.) Robb JJ. TREATMENT OF CELLULITIS, SUPPURATION, AND BURNS. Br Med J. 1935 Mar 9;1(3870):466-7. doi: 10.1136/bmj.1.3870.466.

- PMID: 20778907; PMCID: PMC2459892.

3.) Obaitan, I., et al. "Failure of Antibiotics in Cellulitis Trials: A Systematic Review and Meta-Analysis." Am J Emerg Med 34.8 (2016): 1645-52.

Print. 4.) Brad Spellberg, George H. Talbot, Helen W. Boucher, John S. Bradley, David Gilbert, W. Michael Scheld, John Edwards, Jr., John G. Bartlett, Antimicrobial Availability Task Force of the Infectious Diseases Society of America, Antimicrobial Agents for Complicated Skin and Skin-Structure

- Infections: Justification of Noninferiority Margins in the Absence of Placebo-Controlled Trials, Clinical Infectious Diseases, Volume 49, Issue 3, 1

August 2009, Pages 383–391, https://doi.org/10.1086/600296 5.) Li DG, Joyce C, Mostaghimi A. Patient factors associated with nationwide emergency department utilization for cellulitis. Am J Emerg Med. 2019 Feb;37(2):361-363. doi: 10.1016/j.ajem.2018.06.037. Epub 2018 Jun 18. PMID: 29958742. 6.) NIS, HCUP Nationwide Inpatient Sample. "Healthcare cost and utilization project (HCUP)." (2011). 7.) Peterson D, McLeod S, Woolfrey K, McRae A. Predictors of failure of empiric outpatient antibiotic therapy in emergency department patients with uncomplicated cellulitis. Acad Emerg Med. 2014 May;21(5):526-31. doi: 10.1111/acem.12371. PMID: 24842503. 8.) Lott, J. P., and C. P. Gross. "Mortality from Nonneoplastic Skin Disease in the United States." J Am Acad Dermatol 70.1 (2014): 47-54.e1.

Print. 9.) Stevens, Dennis L., et al. "Executive Summary: Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update by the Infectious Diseases Society of America." Clinical Infectious Diseases 59.2 (2014): 147-59. Print. 10.) Kaye KS, Petty LA, Shorr AF, Zilberberg MD. Current Epidemiology, Etiology, and Burden of Acute Skin Infections in the United States. Clin Infect Dis. 2019;68(Suppl 3):S193-S199. doi:10.1093/cid/ciz002

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

6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 11

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

6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 12

### RTDC Removal to Definitive Care

### SANS Spaceflight-Associated Neuro-ocular Syndrome

### SAS Space Adaptation Syndrome

### SEVA Spaceflight Extravehicular Activity

### SME Subject Matter Expert

### SoP Standard Operating Procedure

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

6/15/2023 2:08:03 PM ICL87_Skin Infection - Bacterial Cliff page: 13

---

## Source metadata

```yaml
source_filename: "skin-infection-bacterial-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1_0izjwg37Q5SPoj04iI6y7U9MVVt-cRC/view"
source_drive_id: "1_0izjwg37Q5SPoj04iI6y7U9MVVt-cRC"
source_sha256: 1abf8e514fb0c6b948239b247f1eb5adc64dbf5db367c89e3d55328da7ee590c
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
