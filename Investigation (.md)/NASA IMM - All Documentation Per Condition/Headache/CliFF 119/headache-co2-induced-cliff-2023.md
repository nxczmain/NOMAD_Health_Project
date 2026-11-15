# Headache CO₂ Induced CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1BOeaCEQuvWZyqJRBazLGazauZXZAOvxC/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Headache/CliFF 119

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

ICL64_Headache - Co2 Induced A carbon dioxide induced headache results from the build up of ambient carbon dioxide. Several cases have been reported in the US space program.

Ambient carbon dioxide levels above 2% are known to cause headaches and lethargy. The nominal levels recorded on US spacecraft have been 0.26%. It is thought that pockets of small poorly ventilated volumes in modules may be responsible. Headaches could also be a sign that at carbon dioxide scrubber system has failed. Symptoms typically resolve rapidly and spontaneously with improvement of intramodular airflow. Analgesics are available to be used as needed. (Marshburn, 2008)

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Large review of astronaut data regarding side effects from CO2 exposure in space.

### ANALOG LITERATURE

Simulation training at NASA for CO2 conditions looking at side effects including headache. The other study looks at induced hypoxia which is the effect of excess CO2 inhalation so this creates a nice simulation.

### TERRESTRIAL LITERATURE

None addressed. The spaceflight literature is clear that crew are much more sensitive to CO2 induced headache while on orbit than on ground.

Therefore, terrestrial data would be misleading.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 0.686 and SD 0.587

### INCIDENCE SUMMARY

A Gamma(shape= 1.3685, rate=1.9936) with mean 0.686 and SD 0.587 is used to model the distribution of the incidence rate estimated from transforming excess risk probabilities from the Law model. Excess risk was estimated as the increased probability at 3.0mmHg (current operational limit) as compared to 0.3mmHg (Earth’s ambient CO2 level).

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment 9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 1

All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.686447 SD 0.586792 Gamma (Shape): 1.3685 (Rate): 1.9936 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Subudhi AW, et al. 2010 Terrestrial 3 Law J, et al. 2014 Spaceflight 4 Law J, et al. 2017 Terrestrial 3 We have a fairly limited data set here. The incidence of CO2 induced headache during a mission is an Engineering question more than a medical one. We can calculate the probability of a headache occuring when CO2 levels rise, but the frequency of rising CO2 levels is the major driver of this condition. Therefore, how frequent we reach high levels, being an engineering/design question makes this conditional incidence difficult to assertain. 9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Vehicle requirement(s) CO removal systems are used to scrub the spacecraft or space-station atmosphere, as part of the air revitalization system.

- Contingency measure(s): If the CO levels rise above the pre-determined Spacecraft Maximum Allowable Concentrations (SMAC levels) due to

failure of the nominal air revitalization system or due to a larger number of crewmembers onboard (for example due to visiting vehicles or vehicle contingencies), additional capability to scrub CO out of the cabin atmosphere is utilized. (James, 2008) (Bacal, Beck, & Barratt, 2008)

### BEST CASE SCENARIO DEFINITION

A CO2-induced headache, which resolves spontaneously or with symptomatic treatment and does not impact mission objectives.

### WORSE CASE SCENARIO DEFINITION

Severe CO2-induced headache that is either refractory to initial treatment or impacts mission objectives.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

A worst case scenario has not been observed on orbit and is fairly unlikely. A best/worst case split following roughly that of the original CLiFF data is appropriate and likely reflects mission realities TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Law J, et al. 2014 Spaceflight 4 We have a fairly limited data set here. The incidence of CO2 induced headache during a mission is an Engineering question more than a medical one. We can calculate the probability of a headache occuring when CO2 levels rise, but the frequency of rising CO2 levels is the major driver of this condition. Therefore, how frequent we reach high levels, being an engineering/design question makes this conditional incidence difficult to assertain. Therefore, it is best to utilitize past design constraints as a predictor of future design constraints. Therefore, past spaceflight data is the best we can hope to use for this condition. 9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 0.686 and 95 - 95 100 0.86 0 0.33 1 0 0 0 0 0 Case (TBC) SD 0.587 Treated Worst 5 - 5 100 0.86 32.979 2 6 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.86 30.6139 0.33 2.5 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.86 57.2416 2 48 0 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

CO2 causes generally short-duration, rapidly reversible headaches. Even in the worst case, these may only last for up to 48 hours. There is no expected RTDC or LOCL in any scenario with respect to CO2-induced headaches. The ultimate goal is prevention of rising CO2 levels, and if exposed, rapidly removing the astronaut from that environment and correcting the underlying problem.

TREATED BEST CASE (TBC) SCENARIO COMMENTS CO2 induced headache is due to exposure to CO2 for several hours above 15mmHg. First signs of exposure include dyspnea and sweating. Higher CO2 concentrations will cause unconsciousness, muscle twitching, convulsions, and eventually death. Therefore, given that this is an exposure, it makes more sense to attempt to minimize/reverse the excessive CO2 as the form of treatment than the return the astronauts, especially if the excess CO2 is coming from within the spacecraft. These headaches are rapidly reversible when CO2 levels are reduced.

TREATED WORST CASE SCENARIO (TWC) COMMENTS Comprehensive literature searches were run and there is no evidence of loss of crew life from a CO2-induced headache with the parameters listed.

Therefore with known clinical knowledge, LOCL is not expected. Halpern et al (2004) industrial accident paper demonstrates that headaches may last 2-6 hours, and that up to 44% of those involved in the accident were hospitalized. It is important to note that the 44% exposed was a low number (n=11) and it was NOT due to headaches but rather other severe sequalae (e.g. pneumonitis, ECG changes). Therefore, we would expect an RTDC rate of 0% with respect to isolated, CO2-induced headaches. Immense CO2 exposures causing other sequelae are outside the scope of this ICL UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Cetin 2015 study of 1,368,941 candidates in Turkey evaluating CO2 levels rising in crowded exam halls. Within first 10 minutes of elevated CO2, participants started experiencing symptoms related to excess CO2 including headache. No individuals were hospitalized and there were no deaths.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS In Engel 1969 study, 40 individuals underwent an experiment testing their response to 3 different chemicals, one included CO2. Participants were monitored for symptoms including headache induced by CO2. The shortest duration reported was 45min and longest was up to 48 hours.

Ultimately, no patients were hospitalized and there were no deaths.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Law J, et al. 2017 Analog Halpern, et al. 2004 Terrestrial 2 Cetin M, 2017 Terrestrial Engel D, 1969 Terrestrial CO2 induced headache is due to exposure to CO2 for several hours above 15mmHg. First signs of exposure include dyspnea and sweating. Higher CO2 concentrations will cause unconsciousness, muscle twitching, convulsions, and eventually death. Therefore, given that this is an exposure, it makes more sense to attempt to minimize/reverse the excessive CO2 as the form of treatment than the return the astronauts, especially if the excess CO2 is coming from within the spacecraft. Return would likey be futile. Law et al (2017) notes most astronausts have a "space headache" for at least the first 7 days of flight which would further invalidate the use of headache as a measure of CO2 exposure. CO2 exposure training is an important tool to educate astronauts about their potential acute CO2 symptoms. An industrial incident in 2004 caused by a container of liquid carbon dioxide that was unintentionally opened in an enclosed working environment. 25 casualties reached the emergency department. Symptoms included dyspnea, cough, dizziness, chest pain, and headache. Cetin 2015 study of 1,368,941 candidates in Turkey evaluating CO2 levels rising in crowded exam halls. Within first 10 minutes of elevated CO2, participants started experiencing symptoms related to excess CO2 including headache. Engel D. Studies on headache produced by carbon dioxide, histamine and adrenalin. Acta Neurochir (Wien). 1969;21(4):269-83. doi: 10.1007/BF01402961. PMID: 5376373. 9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 5

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Law J, et al. 2017 Analog Halpern P, et al. 2004 Terrestrial 2 Cetin M., 2017 Terrestrial Engel D., 1969 Terrestrial CO2 induced headache is due to exposure to CO2 for several hours above 15mmHg. First signs of exposure include dyspnea and sweating. Higher CO2 concentrations will cause unconsciousness, muscle twitching, convulsions, and eventually death. Therefore, given that this is an exposure, it makes more sense to attempt to minimize/reverse the excessive CO2 as the form of treatment than the return the astronauts, especially if the excess CO2 is coming from within the spacecraft. Return would likey be futile. Law et al (2017) notes most astronausts have a "space headache" for at least the first 7 days of flight which would further invalidate the use of headache as a measure of CO2 exposure. CO2 exposure training is an important tool to educate astronauts about their potential acute CO2 symptoms. An industrial incident in 2004 caused by a container of liquid carbon dioxide that was unintentionally opened in an enclosed working environment. 25 casualties reached the emergency department. Symptoms included dyspnea, cough, dizziness, chest pain, and headache. Eleven (44%) patients were admitted to the hospital: 8 were discharged 24 hours later and the others within 8 days. No patient died. It is important to note that the hospitalizations were NOT due to an isolated headache but rather more serious sequalae (e.g. pneumonitis, ECG changes) Cetin (2015) study of 1,368,941 candidates in Turkey evaluating CO2 levels rising in crowded exam halls. No student needed to be hospitalized and there were no deaths. Students were not removed from the enviroment and were not given any treatment. In 1969, 40 individuals underwent an experiment testing their response to 3 different chemicals, one included CO2.

Participants were monitored for symptoms including headache induced by CO2. No participants required hospitalization or other treatment and issue resolved with time. Please note that they were not continously exposed to CO2 so the removal of the CO2 enviroment could account for how they resolved without needing treatment. However, the main treatment is removal from excess CO2 enviroment so this is a double edge sword.

Overall, this is a good study looking at the UTWC RTDC model.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

N/A N/A 4 Comprehensive literature searches were run and there is no evidence of loss of crew life from a CO2-induced headache with the parameters listed.

Therefore with known clinical knowledge, LOCL is not expected.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

- Worst Case Definition: Severe CO2-induced headache that is either refractory to initial treatment or impacts mission objectives.

- Best Case Definition: A CO2-induced headache, which resolves spontaneously or with symptomatic treatment and does not impact mission

objectives. Essentially this is a headache that cannot occurs in the setting of elevated CO2 levels in the cabin. This condition is terrestrially caused when CO2 reaches 7.0 but appears to be much more common in spaceflight and can present at 3.0. Generally this condition is one of discomfort rather than a medical emergency. The CRT condition focuses solely on the relief of this discomfort whether that requires moderate pain management, or not, and the removal of the crew member from the area with high CO2 levels. The extent to which relief is achieved is simply crew preference and there is no medical assessment necessary.

### Diagnostic Scope and Resourcing

In the best-case scenario, diagnosis is based on history and physical examination.

In the worst-case scenario, diagnosis is based on history and physical examination.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.86 hours 9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 6

This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient CP1 WC (Treated or Untreated): 0.86 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a two.

### Treatment Scope and Resourcing

In the best-case scenario, treatment is limited to mild pain medications as this was specifically in the definition of the best case for this condition.

The worst case scenario, where the pain is refractory to mild medications results in an escalation of therapy options including decreasing the CO2 level in the cabin and delivering O2 to the patient.

Most headache in terrestrial populations (best or worst case) are resolved with medication without need for surgical or psychiatric intervention.

### Communications and Support Needs

In the best-case and worst-case scenario, diagnosis and course of treatment is uncomplicated and likely within the scope of care of onboard crew members.

### IMM CLIFF RECONCILATION COMMENTS

Headache is not included as a condition in the American Medical Association guides to the Evaluation of Permanent Impairment. The calculation of functional impairments (FI) follows the IMM standard template for mild non-space adaptation conditions; we combined two tables: Migraine and Complex Regional Pain Syndrome (Upper Extremity). Migraine Whole Person Impairment ratings are based on Table 13-18, p.342 (American Medical Association, 2008). Complex Regional Pain Syndrome (CRPS-UE) gradings for upper extremity impairment are based on Table 15-16, p. 454 (American Medical Association, 2008). The CRPS is converted from localized to Whole Person Impairment based on table 15-1, page 385 (American Medical Association, 2008). Combined FI ratings are calculated using the Combined Values Chart as indicated in Appendix A, pp 604- 606 (American Medical Association, 2008). See the CliFF Appendix for detailed description of grading. For Clinical Phase I, by definition FI is 100% and duration is estimated as 15 minutes to evaluate headache as described in the ISS medical checklist. During Clinical Phase II, FI is estimated in 0 to 10%, and duration is estimated as 1 to 8 hours considering it may take up to 2 doses for relief of headache as indicated in the ISS medical checklist or resolve spontaneously (Headache Classification Subcommittee of the International Headache Society, 2010). During Clinical Phase III, headache (CO induced) is expected to resolve and FI is 0%. Based on space flight data (Walton, 2010) EVAC and LOCL are not expected.

### LIMITATIONS SUMMARY

There is sparse terrestrial data to inform CP2 and best case-worst case probability split. There were a number of assumptions that needed to be made to derive the composite incidence. These could lead to inaccuracies. CO2 concentrations do not remain constant on spacecraft and can vary by the hour. There are local pockets of higher CO2 levels. Excursions of CO2 levels above the assumed value can lead to much higher incidences of headache as the relationship between the number of headaches and an increase in CO2 levels is not linear. The assumption is that the ventilation and CO2 removal capability of exploration spacecraft will be similar to ISS which may not be the case and may result in higher or lower CO2 concentrations. Because of the large sample size, the study used to compute the composite incidence most likely overestimates the confidence we have in the assigned value. Under-reporting for this condition could have been significant during past space missions due to subtle disease that may not have been apparent to the crew. This may have affected the development of the model that was used and result in underestimation of the incidence. 9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  | 89 |  | 145 |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 |  | 145 |  | 13 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  |  | Translation & |  |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  |  | Extremity Standing (g) |  | Equipment | Ops |  | Category |  |  |
| --- | ----- | --- | --- | ---------------------- | -------------- | --------- | --- | --------- | -------- | --- | --- |
|  |  |  |  |  | (microgravity) |  |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  | 211 | 1152 | 3763 | 0.306139 | 30.6139 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  |  |  |  |  | 211 | 1241 | 3763 | 0.32979 | 32.979 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | ------- | ------ |

Case (TWC) Untreated Worst

|  | 132 | 564 |  |  |  |  | 211 | 2154 | 3763 | 0.572416 | 57.2416 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | -------------- | --------------- | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  |  | Communications | personal Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple | Complex |  |  |  | pulmonary |  |  |  |  |  |

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
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 8

Total Human Translation & Total Tasks Hand Lower Ambul & Don/Doff Pressure System Hand (Any) Upper Extremity Stabilization Impaired By TI Decimal TI % (Dom) Extremity Standing (g) Equipment Ops Category (microgravity) Condition

### Tasks Full

Mission Treated Best 0 0 0 0 Case (TBC) Untreated Best 0 0 0 0 Case (UTBC) Treated Worst 0 0 0 0 Case (TWC) Untreated Worst 0 0 0 0 Case (UTWC) 9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 9

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

9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 10

## REFERENCES

Reference 1 - Law, Jennifer MD, MPH; Van Baalen, Mary MS; Foy, Millennia PhD; Mason, Sara S. BS; Mendez, Claudia MPH; Wear, Mary L. PhD; Meyers, Valerie E. PhD, DABT; Alexander, David MD Relationship Between Carbon Dioxide Levels and Reported Headaches on the International Space Station, Journal of Occupational and Environmental Medicine: May 2014 - Volume 56 - Issue 5 - p 477-483 2 - Subudhi AW, Panerai RB, Roach RC. Effects of hypobaric hypoxia on cerebral autoregulation. Stroke. 2010 Apr;41(4):641-6. doi: 10.1161/STROKEAHA.109.574749. Epub 2010 Feb 25. PMID: 20185774. 3 - Law J, Young M, Alexander D, Mason SS, Wear ML, Méndez CM, Stanley D, Ryder VM, Van Baalen M. Carbon Dioxide Physiological Training at NASA. Aerosp Med Hum Perform. 2017 Oct 1;88(10):897-902. doi: 10.3357/AMHP.4552.2017. PMID: 28923137. 4 - Halpern P, Raskin Y, Sorkine P, Oganezov A. Exposure to extremely high concentrations of carbon dioxide: a clinical description of a mass casualty incident. Ann Emerg Med. 2004 Feb;43(2):196-9. doi: 10.1016/j.annemergmed.2003.08.003. PMID: 14747808. 5 - Cetin M. A Change in the Amount of CO2 at the Center of the Examination Halls: Case Study of Turkey. 2 OCT 2017. https://doi.org/10.1080/09735070.2016.11905483 6 - Engel D. Studies on headache produced by carbon dioxide, histamine and adrenalin. Acta Neurochir (Wien). 1969;21(4):269-83. doi: 10.1007/BF01402961. PMID: 5376373.

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

9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 11

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

### RTDC Removal to Definitive Care

### SANS Spaceflight-Associated Neuro-ocular Syndrome

### SAS Space Adaptation Syndrome

### SEVA Spaceflight Extravehicular Activity

### SME Subject Matter Expert

### SoP Standard Operating Procedure

9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 12

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

9/11/2022 3:53:40 PM ICL64_Headache - Co2 Induced Cliff page: 13

---

## Source metadata

```yaml
source_filename: "headache-co2-induced-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Headache/CliFF 119"
source_url: "https://drive.google.com/file/d/1BOeaCEQuvWZyqJRBazLGazauZXZAOvxC/view"
source_drive_id: "1BOeaCEQuvWZyqJRBazLGazauZXZAOvxC"
source_sha256: 0159abb605f9ffa27cf866cf759f1b7fc71850fa3c16327d3f5c23aa82aee939
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
