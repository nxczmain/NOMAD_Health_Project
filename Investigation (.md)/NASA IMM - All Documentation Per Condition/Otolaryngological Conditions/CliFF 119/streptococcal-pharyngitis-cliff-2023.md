# Streptococcal Pharyngitis CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1_n-lbeMitwXpIPHaiuvxAaEJiLy5x10n/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 119

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

### ICL105_Streptococcal Pharyngitis

Pharyngitis is the pain or irritation of the throat that can occur with or without swallowing and most often accompanies upper respiratory tract infections. It is a common complaint on earth and about 90% of cases are due to causes other than a bacterial infection, such as irritation or viruses.

Most bacterial pharyngitis is caused by group A streptococcus (GAS) but other strains of streptococci and a number of other bacteria can be the cause of pharyngitis, as well. GAS is of particular concern because if left untreated it can lead to rheumatic heart disease (although less commonly in adults) or post-infectious glomerulonephritis. There are no currently available vaccines against GAS. As this CLIFF is specific to streptococcus, all other bacterial and viral etiologies of pharyngitis are included within ICL 82 - Upper Respiratory Infection.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

11 events of pharyngitis over 45.49 person-years of flight have occurred for an IR: 0.2418 (95%CI: 0.1272, 0.4203). However, these are not separated by etiology, so this data was not used for the incidence distribution as it is not specific for streptococcal pharyngitis.

### ANALOG LITERATURE

The Medical Surveillance Monthly Report (MSMR) provides monthly evidence-based estimates of the incidence, distribution, impact, and trends of health-related conditions among service members. In the April 2017 release of MSMR, acute pharyngitis, unspecified was reported as 60,437 events (43,653 in males, and 16,784 in females) over 1390435 person-years. IR: 4.347E-2 (95%CI: 4.312E-2, 4.381E-2). 20% of cases are estimated to be bacterial.

### TERRESTRIAL LITERATURE

Lewnard 2020 evaluated the incidence of pharyngitis, sinusitis, acute otitis media, and outpatient antibiotic prescribing preventable by vaccination against group A Streptococcus in the United States. GAS pharyngitis incidence rates for 20-39 years old 8.0 per 1kpy (95%CI: 6.0, 10.9), for 40-64 years old 1.1 per 1kpy (95%CI: 0.6, 2.1). Using the estimated rates and confidence limits, we found reasonable approximations of events and person-years that result in the same incidence rate and similar variability. We were not able to match them exactly as the paper did not specify which technique was used for confidence limits. 40 events over 5000py was chosen to reflect the rate for 20-39 year olds. 10 events over 9091py was used to reflect the rate for 40-64 year olds. (LOE 4). Proportion of flown crew for ages 20-39 is 0.31, for ages 40-64 it is 0.69. Thus the incidence rates from this study were adjusted by age and combined with the adjusted rates in the analog population as discussed in the composite incidence description below.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 0.008092 and SD 6.017E-5.

### INCIDENCE SUMMARY

Lewnard 2020 was used to derive age-adjusted (to flown astronauts) incidence rates amongst a terrestrial population. A proportion of 20% was 6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 1

used to adjust the analog incidence rate of unspecified pharyngitis reported in MSMR 2017, reflecting the proportion of acute pharyngitis being bacterial. The overall incidence rate (combining the two adjusted reference rates from the two reports) was derived through an inverse-variance weighted average. The Bayesian posterior given the reference sources under an uninformative prior was Gamma(shape=18086.38, rate=2235094) with mean 0.008092 and SD 6.017E-5. TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.008092 SD 6.017E-05 Gamma (Shape): 18086.4 (Rate): 2.23509E+06 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Lewnard, 2020 Terrestrial 3 MSMR, 2017 Analog 3 Walton, 2010 Spaceflight 2 Both the analog and terrestrial studies have a very high n, however, both IRs required adjustment based off age or presumed percentage of cases that were bacterial thus we chose a lower level of confidence for the IR. While there is spaceflight data, we had even less confidence in this data as it had both a low n and was non-specific pharyngitis. 6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

None.

### BEST CASE SCENARIO DEFINITION

Uncomplicated streptococcal pharyngitis that resolves spontaneously or with oral antibiotics.

### WORSE CASE SCENARIO DEFINITION

A peritonsillar abscess requiring IV antibiotics and possible incision/drainage.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

### Peritonsillar Abscess

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The calculation of the WC scenario is limited given this CLiFF is specifically evaluating the escalation of strep pharyngitis to a PTA. One study has shown that Group A Strep is the predominant organism in a peritonsillar abscess in about 20% of cases (Klug 2017). However, in comparing the incidences of strep pharyngitis as PTA in general, it appears that the incidence of PTA is at least 100-fold less than strep pharyngitis. Further, the American Family Physician review article on Pharyngitis also reports that PTA "occurs in fewer than 1 percent of patients treated with antibiotics." Given the limitations, a conservative estimate for the WC probability is 1%.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

MSMR, 2017 Analog 3 Vincent, 2004 Terrestrial 3 Risberg, 2008 Terrestrial 3 Klug, 2017 Terrestrial 3 As discussed above, we have some confidence that the WC scenario will occur conservatively in ~1% of cases, however, the level of confidence remains low as we cannot achieve a more specific proportion given the constraints of the definitions for this CliFF being specific to strep pharyngitis leading to PTA from strep. 6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 0.008092 99 - 99 100 0.83 2.80361 24 240 0 0 0 0 0 Case (TBC) and SD 6.017E-5 Treated Worst 1 - 1 100 0.83 29.5908 240 336 0 13 24 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.83 17.991 240 336 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.83 60.085 240 336 60.085 24 24 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Pharyngitis is diagnosed >11 million times a year in the US, largely in outpatient settings. Most infections are caused by viruses, however, group A beta-hemolytic streptococcal (GABHS) infection accounts for approximately 5% to 15% in adults (Kalra 2016). It is often characterized by fever, intensely inflamed or purulent tonsils, and an absence of cough/coryza. In rare cases, it can escalate to a peritonsillar abscess which is the most common deep infection of the head and neck.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Per IDSA Clinical Practice Guidelines, uncomplicated strep pharyngitis can be easily treated with either a one-time intramuscular antibiotic, 10-day course of penicillin, or alternatively a 5-day course of azithromycin. By definition, RTDC and LOCL is not expected.

TREATED WORST CASE SCENARIO (TWC) COMMENTS A worst-case scenario of a peritonsillar abscess can attempt to be treated with 10-14 day courses of antibiotics. However, 2-24% of cases terrestrially will require either a needle aspiration and/or incision & drainage. The surrogate for RTDC in this case was hospitalization which carries a more conservative estimate of the need for true RTDC. Hospitalization terrestrially appears to range from 13-24%, with a great proportion of those cases being admitted for tonsillectomy. LOCL is exceptionally low in treated worst cases, however, this would entail escalation to sepsis/septic shock, which is a separate CliFF. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Uncomplicated strep pharyngitis is expected to resolve on its own within 7-10 days. Standard treatment of antibiotics or I&D are both meant to prevent escalation to WC scenarios. By definition, RTDC and LOCL are not expected.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS There is a paucity of information regarding untreated worst-case scenarios, as medical and surgical interventions are not withheld when patients present with severe strep infections leading to peritonsillar abscess, even in low-resource settings. As with many other infectious conditions, choosing the max duration of CP2 is extremely difficult as there is no evidence to suggest that worst cases will resolve. However, for purposes of this CLiFF the WC scenario would either need to resolve or escalate to RTDC or sepsis which would be a separate condition. PTAs cannot remain stagnant for prolonged periods of time. The same duration was chosen as TWC as the condition would resolve or change to sepsis within 240-336 hours. RTDC is also difficult to determine for UTWC. We would expect that without treatment, RTDC would likely be higher than TWC RTC, however, there is not data properly evaluating hospitalization rates without treatment. Thus, we chose the max of 24%. LOCL was chosen as 0% given that LOCL would be in the setting of an escalation to sepsis/septic shock, which is beyond the scope of this condition.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Brink, 1951 Terrestrial Battaglia, 2018 Terrestrial 3 Randel, 2013 Terrestrial Shulman, 2012 Terrestrial With exception of UTWC scenarios in which duration is difficult to estimate as discussed above, there is reasonable confidence in the duration of illness in the setting of strep pharyngitis. 6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 5

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Risberg, 2008 Terrestrial 3 Johnson, 2017 Terrestrial With exception of UTWC scenarios in which RTDC is difficult to estimate as discussed above, there is reasonable confidence in the duration of illness in the setting of strep pharyngitis.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Galioto, 2017 Terrestrial Johnson, 2017 Terrestrial 4 Klug, 2020 Terrestrial Level of confidence for LOCL is not truly applicable given that all estimations of LOCL are dictated by the CLiFF definitions. For best case scenarios, the disease process should resolve spontaneously. For the worst case scenarios, a PTA will not lead to LOCL. Escalation of an infection to sepsis/sepsis shock will, and thus an increasingly severe case would escalate to that CLiFF.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Overview Streptococcal pharyngitis covers infections from GroupA strep including strep throat and peritonsillar abscess. CNES: Peritonsillar

- Abscess Diagnostic Scope and Resourcing: In the best- and worst-case scenario, the diagnosis is based on history, physical examination (ENT,

cardiopulmonary, abdominal, and vital signs). Rapid StrepA antigen and strep culture were considered to be outside the scope of in-flight medical capabilities for IMPACT 1.0. Terrestrially, standard of care includes the rapid strep test and culture. Clinical Phase 1 Duration and Rationale: This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. This CRT includes a scope of practice code of 4 (which correlates to an “Intern/PA/NP.”) The CRT working group SME consensus Clinical Phase 1 duration: Best Case CP1: 0.83 hours Worst Case CP1: 0.83 hours Treatment Scope and Resourcing: Best-case scenario includes antibiotic treatment and anti-pyretic/mild pain management medications (NSAIDs, acetaminophen, aspirin). The worst-case scenario is defined as a peritonsillar abscess. This scenario includes resources for both IV and oral antibiotics, peri-tonsillar needle aspiration (which has been shown in studies to be equivalent to incision and drainage), oral and IV hydration, and IV corticosteroids (which have been shown in studies to decrease pain and inflammation increasing oral intake within 12-24 hours of administration). Oral pain/anti-pyretic management (NSAIDs, acetaminophen, aspirin) is also included. Communications and Support Needs: While real-time video and audio loop communications are desired for diagnosis and treatment, they were not considered a necessity, particularly in the best-case scenario. For the WC, consultation with ground specialists to facilitate treatment and healing was considered necessary given the limited diagnostic and treatment capabilities in-flight.

### IMM CLIFF RECONCILATION COMMENTS

The previous CLiFF was evaluated and sources utilized where applicable for incidence, duration, RTDC, and LOCL. Importantly, the current CLiFF is exclusive to strep pharyngitis.

### LIMITATIONS SUMMARY

The first limitation of this CLiFF are the definitions. All non-strep pharyngitis infections are found in ICL 82 - upper respiratory infections. This CLiFF includes all types of streptococcal infections; however, the primary culprit terrestrially is Group A Strep (GAS). Importantly, our worst-case definition discusses the escalation of a strep pharyngitis infection to a peritonsillar abscess. The second limitation of this CLiFF is that GAS only causes about 20% of PTAs with the other 80% being other types of bacteria. Thus, parsing out data of pharyngitis and PTA that are specific to streptococcus was difficult and thus limits the accuracy of our findings. Relatedly, as a PTA was not chosen as the worst-case definition for an upper respiratory infection (ICL-82), our authors note that 80% of PTAs caused by other types of bacteria are not included within the scope of any CLiFF. Another limitation is that we do not know how the space environment may affect the incidence and transmission of strep. However, we believe that the possible increased susceptibility caused by immune modulation in the space environment is probably less than the decreased 6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 6

susceptibility given the age and health of astronauts. Lastly, an important limitation of this CLiFF and every infectious CLiFF is that the UTWC estimations are severely limited. There is rarely terrestrial data to evaluate the duration of an untreated illness in its WC. Further, as discussed above, infectious processes do not remain stagnant. They evolve. Either the untreated infection gets better on its own, or it gets worse. For it to get bad enough to estimate LOCL, the assumption is that the patient has become septic which is beyond the scope of this CLiFF. Thus, LOCL levels are zero by definition purposes, however, a PTA leading to sepsis can truly be a rare cause of mortality if left untreated. 6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 7

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

| Best |  | 664 | 113 | 89 |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 223 | 664 | 113 | 89 |  |  | 145 | 5 | 13 |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 |  |  | 145 | 5 | 13 |  |  |  |
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

| Best |  |  |  |  |  |  |  | 211 | 211 | 3763 | 0.0560723 | 5.60723 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  |  | 211 | 1354 | 3763 | 0.359819 | 35.9819 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  | 414 | 22 | 196 |  |  | 211 | 2227 | 3763 | 0.591815 | 59.1815 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  | 414 | 22 | 196 |  | 34 | 211 | 2261 | 3763 | 0.60085 | 60.085 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | ------- | ------ |

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

|  | 223 | 664 | 113 | 89 |  |  | 145 | 5 | 13 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 8

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

| 132 | 414 | 22 196 | 34 211 | 2261 3763 | 0.60085 60.085 |
| --- | --- | ------ | ------ | --------- | -------------- |

Case (UTWC) 6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 9

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

### No Comments

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

6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 10

## REFERENCES

Reference Galioto NJ. Peritonsillar Abscess. Am Fam Physician. 2017 Apr 15;95(8):501-506. PMID: 28409615.

Kalra MG, Higgins KE, Perez ED. Common Questions About Streptococcal Pharyngitis. Am Fam Physician. 2016 Jul 1;94(1):24-31. Erratum in: Am Fam Physician. 2017 Apr 1;95(7):414. PMID: 27386721.

Vincent MT, Celestin N, Hussain AN. Pharyngitis. Am Fam Physician. 2004 Mar 15;69(6):1465-70. PMID: 15053411.

Shulman ST, Bisno AL, Clegg HW, et al. Clinical practice guideline for the diagnosis and management of group A streptococcal pharyngitis: 2012 update by the Infectious Diseases Society of America. Clin Infect Dis. Nov 15 2012;55(10):e86-102. doi:10.1093/cid/cis629 Randel A; Infectious Disease Society of America. IDSA Updates Guideline for Managing Group A Streptococcal Pharyngitis. Am Fam Physician. 2013 Sep 1;88(5):338-40. PMID: 24010402.

Lewnard, J. A., King, L. M., Fleming-Dutra, K. E., Link-Gelles, R., & Van Beneden, C. A. (2020). Incidence of pharyngitis, sinusitis, acute otitis media, and outpatient antibiotic prescribing preventable by vaccination against group A Streptococcus in the United States. Clin Infect Dis. doi:10.1093/cid/ciaa529 Medical Surveillance Monthly Report (2017).

Walton, 2010. Battaglia A, Burchette R, Hussman J, Silver MA, Martin P, Bernstein P. Comparison of Medical Therapy Alone to Medical Therapy with Surgical Treatment of Peritonsillar Abscess. Otolaryngol Head Neck Surg. Feb 2018;158(2):280-286. doi:10.1177/0194599817739277 Brink WR, Rammelkamp CH, Denny FW, Wannamaker LW. Effect of penicillin and aureomycin on the natural course of streptococcal tonsillitis and pharyngitis. The American Journal of Medicine. 1951/03/01/ 1951;10(3):300-308. doi:https://doi.org/10.1016/0002-9343(51)90274-4 Risberg S, Engfeldt P, Hugosson S. Incidence of peritonsillar abscess and relationship to age and gender: retrospective study. Scand J Infect Dis. 2008;40(10):792-6. doi: 10.1080/00365540802195226. PMID: 18609198.

Johnson RF. Emergency department visits, hospitalizations, and readmissions of patients with a peritonsillar abscess. Laryngoscope. Oct 2017;127 Suppl 5:S1-s9. doi:10.1002/lary.26777 Klug TE, Greve T, Hentze M. Complications of peritonsillar abscess. Ann Clin Microbiol Antimicrob. Jul 30 2020;19(1):32. doi:10.1186/s12941- 020-00375-x Klug TE. Peritonsillar abscess: clinical aspects of microbiology, risk factors, and the association with parapharyngeal abscess. Dan Med J. 2017 Mar;64(3):B5333. PMID: 28260599. Andrews M, Condren M. Once-Daily Amoxicillin for Pharyngitis. J Pediatr Pharmacol Ther. 2010; 15(4):244–8FDA. Flagyl. Retrieved from https://www.accessdata.fda.gov/drugsatfda_docs/label/2013/018353s026lbl.pdf Galioto NJ. Peritonsillar Abscess. AFP. 2017; 95(8):501–6 Gerber Michael A., Baltimore Robert S., Eaton Charles B., Gewitz Michael, Rowley Anne H., Shulman Stanford T., et al. Prevention of Rheumatic Fever and Diagnosis and Treatment of Acute Streptococcal Pharyngitis. Circulation. 2009; 119(11):1541–51 Randel A. IDSA Updates Guideline for Managing Group A Streptococcal Pharyngitis. AFP. 2013; 88(5):338–40 University of Michigan. Pharyngitis. Retrieved from http://www.med.umich.edu/1info/FHP/practiceguides/pharyngitis/pharyn.pdf Vial F. Vancomycin Hydrochloride for Injection, USP. 3

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

### CAC Coronary Artery Calcium

6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 11

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

6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 12

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

6/15/2023 2:12:20 PM ICL105_Streptococcal Pharyngitis Cliff page: 13

---

## Source metadata

```yaml
source_filename: "streptococcal-pharyngitis-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1_n-lbeMitwXpIPHaiuvxAaEJiLy5x10n/view"
source_drive_id: "1_n-lbeMitwXpIPHaiuvxAaEJiLy5x10n"
source_sha256: fb1f9ac3827143977cf35064c81f9c3f59cab93cf40a6d3aa230237399cf4632
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
