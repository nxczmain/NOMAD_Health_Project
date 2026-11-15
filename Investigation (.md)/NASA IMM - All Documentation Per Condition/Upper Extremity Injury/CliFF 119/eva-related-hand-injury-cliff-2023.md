# EVA Related Hand Injury CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1nf9SLk5WsVoZ5KhVWnDJbTxUUs02hRmK/view) · **12 pages**

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

### ICL42_Eva Related Hand Injury

This new condition spans hand injuries sustained while in the EVA suit to include: abrasions and repetitive stress injuries of pain, swelling and fatigue.

Note, it does not include fingernail delamination, which is covered by a separate condition (ICL41 - EVA Related Fingernail Delamination). EVA Related Hand injury is known to occur in spaceflight. Factors that predispose to injury include: Small hand size, left-handedness, glove model, moisture in the glove, and longer duration of training sortie (Dervay et al, 2020). It has been documented that wound healing in weightlessness may take longer than terrestrially due to suppressed and altered cellular immune function as well as delayed cutaneous hypersensitivity (Campbell and Billica, 2020).

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Scheuring et al. (2009) was used to inform the incidence distribution for this condition. The study evaluated the incidence musculoskeletal in-flight injuries among astronauts in a review spanning Mercury - Expedition 13 of the ISS Program. 20 hand injuries were attributed to the EVA suit during that timeframe. Of note, these data are based on the Extravehicular Mobility Unit (EMU) suit used on the ISS – not the planned xEMU suit for Lunar surface EVAs. Also of note, the study reports a total of 74 hand injuries from Mercury - ISS Expedition 13, but only specifies that 20 are related to the EVA suit as specified by this condition. The following data sources were utilized in this review: post-flight medical debriefs, the LSAH medical record database, the Johnson Space Center (JSC) electronic medical record system, including ASCR specialist assessment and treatment logs, and the JSC Flight Medicine Clinic vault records. Musculoskeletal injury data in the ISS program was extracted from the private medical conferences held between the ISS crewmembers and their flight surgeon up to and including Expedition 13, as well as from the ASCR specialists supervising the crewmember’s in-flight training regimen. Lastly, several entries came directly from personal communications with astronaut crewmembers or flight surgeons and the authors when not otherwise duplicated. Information collected on each injury included location, type, and a detailed narrative on the mechanism of injury, the type of exercise the crewmember performed during the flight, previous history of injury, treatment, and post-flight outcome. The term “ in-flight” included lunar surface operations. This article notes small lacerations and abrasions to the hands are among the most common injuries occurring throughout the U.S. space program.

### ANALOG LITERATURE

Strauss, 2004 is a prospective observational study of EVA suit symptoms and injuries experienced by NASA astronauts during EVA training at the NBL from July 2002 to January 2004. 770 test runs across 86 subjects were reviewed. Subjects filled out a comprehensive symptom questionnaire after each test run. Hand injuries were the most common complaint, occurring in 47.16% of test-runs. Notably, the majority of these complaints were related to fingernail injury/delamination, which is not included in the definition for the condition, because it is covered by a separate CLiFF: ICL41 - EVA Related Fingernail Delamination. Excluding those complaints, there were a toral of 71 test runs that experienced hand complaints that match the definition of this condition for an overall incidence of 71 hand complaints in 770 test runs. Viegas et al, 2004 presents retrospective data from an NBL study of 83 astronauts, comprising 548 test-runs from July 19, 2002 - July 18, 2003. During the year-long study 122 hand injuries were reported during these 548 test runs. Like Strauss, 2004 the majority of these complaints were related to fingernail damage/delamination. Excluding these injuries, 46 of the 122 hand injuries fit the definition from this CLiFF. Of note, while EVA training in water can achieve neutral buoyancy, the effect of gravity is still in place. Injuries seen in the NBL, not seen in spaceflight have been attributed to gravity shifting inside the suit (Chappell et al, 2017). Also, of consideration is that these data are based on the Extravehicular Mobility Unit (EMU) suit used on the ISS – not the planned xEMU suit for Lunar surface EVAs.

### TERRESTRIAL LITERATURE

It was assumed that terrestrial data would be inadequate for providing input that drives the incidence of this spaceflight specific condition. No terrestrial data searches were performed. 11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 1

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

- Mean: 0.0846 SD: 0.0177

### INCIDENCE SUMMARY

Scheuring et al, 2009 informed the incidence distribution for this CLiFF. It reported 20 EVA-related hand injuries from Mercury through ISS Expedition 13. Total EVAs Mercury through Expedition 13 was 247. Total events 20 over 247 person-EVAs. IP: 0.081 (95%CI: 0.0502, 0.1223). The Bayesian posterior distribution for the incidence proportion given the spaceflight data (20 events over 247 person-EVAs) under an uninformative prior is Beta(shape1=20.828, shape2=225.36) with mean 0.0846 and SD 0.0177.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

EVA Segment

### EVA All

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Beta Mean 0.084602 SD 0.0177003 Beta (Alpha): 20.828 (Beta): 225.36 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Scheuring et al, 2009 Spaceflight 4 Strauss, 2004 Analog 3 Viegas et al, 2004 Analog 3 Scheuring et al, 2009 is a retrospective review of musculoskeletal injuries in U.S. Astronauts from Mercury - ISS Expedition 13. It reports 20 inflight hand injuries secondary to the EVA suit. Straus, 2004 is an analog prospective observational study conducted at the NBL in which there were 71 reported hand complaints that match the best and Category 2 definitions in this CLIFF (excluding fingernail injury/delamination, which is covered by a separate CLiFF: ICL41 - EVA Related Fingernail Delamination) in 770 test runs. Viegas et al, 2004 presents retrospective data from an NBL study of 83 astronauts, comprising 548 test-runs. There were 46 hand complaints (again excluding fingernail injury/delamination) reported during these 548 test runs. 11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Prevention methods include optimizing suit fit, crew training including avoiding work outside of the normal work envelop, the application of suit padding and pressure absorbing dressings to known affected body areas. (Strauss, 2004)

### BEST CASE SCENARIO DEFINITION

This condition has Category 1 and Category 2 definitions instead of best and worst case definitions.

Category 1 Definition: Abrasions sustained secondary to repetitive hand movements within the EVA suit.

### WORSE CASE SCENARIO DEFINITION

This condition has Category 1 and Category 2 definitions instead of best and worst case definitions.

Category 2 Definition: Hand/finger pain, fatigue, and/or swelling secondary to repetitive use of the hands and fingers in the EVA suit.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Strauss, 2004 is a prospective observational study of EVA suit symptoms and injuries experienced by NASA astronauts during EVA training at the NBL from July 2002 to January 2004. 770 test runs across 86 subjects were reviewed. Subjects filled out a comprehensive symptom questionnaire after each test run. Hand injuries were the most common complaint. There were 71 reported hand complaints that match the definitions in this CLIFF in 770 test runs. 58 (81.7%) of these complaints meet the Category 1 definition of abrasions secondary to repetitive hand movements in the suit. 13 (18.3%) meet the Category 2 definition of hand fatigue secondary to repetitive hand movements in the suit. Similarly, Viegas et al, 2004 presents retrospective data from an NBL study of 83 astronauts, comprising 548 test-runs from July 19, 2002 - July 18, 2003. There were 46 hand complaints that fit the definition of this CLiFF reported during these 548 test runs. 40 (87%) met the Category 1 definition. 6 (13%) met the Category 2 definition. Therefore a range was assigned, incorporating values from both studies. Category 1 probability was assigned 81.7-87% and Category 2 probability was assigned 13-18.3%.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Strauss, 2004 Analog 3 Viegas et al, 2004 Analog 3 Strauss, 2004 is an analog prospective observational study conducted at the NBL in which there were 71 reported hand complaints that match the definitions in this CLIFF in 770 test runs. 58 (81.7%) of these complaints meet the Category 1 definition of abrasions secondary to repetitive hand movements in the suit. 13 (18.3%) meet the Category 2 definition of hand fatigue secondary to repetitive hand movements in the suit. Similarly, Viegas et al, 2004 presents retrospective data from an NBL study of 83 astronauts, comprising 548 test-runs. There were 46 hand complaints that fit the definition of this CLiFF reported during these 548 test runs. 40 (87%) met the Category 1 definition. 6 (13%) met the Category 2 definition. 11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best Mean: 0.0846 81.7 - 87 100 0.6662 9.11507 96 384 0 0 0 0 0

- Case (TBC) SD: 0.0177

Treated Worst 13 - 18.3 100 0.8829 29.1257 72 192 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.6662 9.11507 96 384 9.11507 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.8829 29.1257 72 192 29.1257 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

It should be noted that unlike other CLiFFs, this CLiFF has "Category 1 and Category 2" definitions instead of best and worst-case definitions. That is, they are separate entities that do not occur on a spectrum like a typical CLiFF. The risk of RTDC was estimated to be negligible by the ExMC composer of this CLiFF, thus no RTDC surrogate was selected as no RTDC specific literature searches were performed. There was no evidence to support RTDC in any of the literature examined for this CLiFF. For details regarding each scenario, see below.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Treated Category 1 Scenario Comments The duration was assigned as a range of 96-384 hours (4-16 days). The minimum duration was informed by Eiland and Ridley, 1996 a review article regarding skin conditions in athletes. The maximum duration was informed by Anderson et al, 2014 (Chapter 9 in Schwartz's Principles of Surgery, devoted to wound healing) based on a graph that provides an estimate of approximate wound breaking strength at various days based on the cellular, biochemical, and mechanical phases of healing. RTDC or LOCL are not anticipated as an outcome of this condition. This assumption was corroborated by Medical Operations at JSC (in particular a flight surgeon with extensive experience with EVAs spanning both the Space Shuttle and ISS programs). Literature searches specific to RTDC and LOCL were not performed, but there was no evidence of risk of RTDC or LOCL in any literature examined for any other sections of the CLiFF. RTDC probability was assigned 0%. LOCL probability was assigned 0%.

TREATED WORST CASE SCENARIO (TWC) COMMENTS Treated Category 2 Scenario Comments There is a paucity of published data regarding the duration of Category 2 scenario EVA related hand injury as defined by this CLiFF. Ultimately, the duration was assigned based on data audited in recent post-EVA PMCs from ISS that indicate a duration of symptoms lasting anywhere from 3 to 8 days (72-192 hours) post EVA. Notably, if EVAs are stacked in close proximity to one another, there seems to be an additive insult that prolongs the recovery of symptoms. RTDC or LOCL are not anticipated as an outcome of this condition. This assumption was corroborated by Medical Operations at JSC (in particular a flight surgeon with extensive experience with EVAs spanning both the Space Shuttle and ISS programs).

Literature searches specific to RTDC and LOCL were not performed, but there was no evidence of risk of RTDC or LOCL in any literature examined for any other sections of the CLiFF. RTDC probability was assigned 0%. LOCL probability was assigned 0%.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Untreated Category 1 Scenario Comments There is a paucity of data related to untreated abrasions. There is evidence to support that topical ointments use on surgical wounds do not decrease healing time. Thus, the Category 1 treated healing time will be re-used for this scenario since it is anticipated that untreated abrasions will heal in a similar timeframe (96-384 hours) (Eiland and Ridley, 1996; Andersen et al, 2014). RTDC or LOCL are not anticipated as an outcome of this condition. This assumption was corroborated by Medical Operations at JSC (in particular a flight surgeon with extensive experience with EVAs spanning both the Space Shuttle and ISS programs). Literature searches specific to RTDC and LOCL were not performed, but there was no evidence of risk of RTDC or LOCL in any literature examined for any other sections of the CLiFF. RTDC probability was assigned 0%. LOCL probability was assigned 0%. UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Untreated Category 2 Scenario Comments There is a paucity of published data regarding the duration of Category 2 scenario EVA related hand injury as defined by this CLiFF. Ultimately, the duration was assigned based on data audited in recent post-EVA PMCs from ISS that indicate a duration of symptoms lasting anywhere from 3 to 8 days post EVA. Notably, if EVAs are stacked in close proximity to one another, there seems to be an additive insult that prolongs the recovery of symptoms. RTDC or LOCL are not anticipated as an outcome of this condition. This assumption was corroborated by Medical Operations at JSC (in particular a flight surgeon with extensive experience with EVAs spanning both the Space Shuttle and ISS programs). Literature searches specific to RTDC and LOCL were not performed, but there was no evidence of risk of RTDC or LOCL in any literature examined for any other sections of the CLiFF. RTDC probability was assigned 0%. LOCL probability was assigned 0%.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC) 11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 5

| Citation |  | Source | LOC Value |
| ----------------------- | --- | ----------- | --------- |
| Eiland and Ridley, 1996 |  | Terrestrial |  |
| Andersen, 2014 |  | Terrestrial |  |
| AAFP |  | Terrestrial | 2 |
| Braun et al, 2019 |  | Spaceflight |  |
| LSAH, 2021 |  | Spaceflight |  |

For the Category 1 scenario, durations are based on terrestrial data indicating the average length of healing time for abrasions. Note, there wound healing in-flight may be vary compared terrestrial durations. In a study of skin changes in-flight, Braun et al, 2019 reported that 4.3% of crewmembers with skin changes complained of slow healing lacerations and contusions. No duration of healing time was provided by Braun et al, however. For Category 2 scenarios, the duration data was obtained via interview with LSAH regarding recent post-EVA PMC data. A formal request for this LSAH data is pending at the time of completion of this CLiFF, but cursory data was provided.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| -------- | ------ | --------- | --- |
| N/A | N/A |  | 3 |

RTDC is not an anticipated outcome of this condition. This assumption was corroborated by Medical Operations at JSC (in particular a flight surgeon with extensive experience with EVAs spanning both the Space Shuttle and ISS programs). No literature searches were performed specific to RTDC, but prior searches for incidence, duration, BC/WC probability would not support the need for RTDC.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| -------- | ------ | --------- | --- |
| N/A | N/A |  | 3 |

LOCL is not an anticipated outcome of this condition. This assumption was corroborated by Medical Operations at JSC (in particular a flight surgeon with extensive experience with EVAs spanning both the Space Shuttle and ISS programs). No literature searches were performed specific to LOCL, but prior searches for incidence, duration, BC/WC probability would not indicate LOCL as a feasible outcome.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Overview An injury to the hand is one of the many complications that can occur during an EVA. Specifically this condition encompasses hand/finger pain, abrasions, fatigue, and/or swelling between the best and worst case scenarios. CNES: None Diagnostic Scope and Resourcing Diagnostic resourcing is straightforward and involves collection of history and evaluation of the hands following the injury. While simple evaluation of the wound is all that is needed in the best-case scenario, the worst-case scenario requires focused musculoskeletal and neurologic exams. Vitals, labs, and imaging are not required. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.6662 CP1 WC (Treated or Untreated): 0.8829 The highest scope of practice required for diagnosis includes the interpretation of the physical exam which is SOP

4. Treatment Scope and Resourcing Therapeutic scope is also straightforward and for best-case includes a wound care dressing, mild pain

management with Tylenol or NSAIDs, and moisturizer. For worst case, the treatment is the same with exception of the addition of ice packs.

Splinting, casting, sedation, or digital blocks are not required given the types of hand injuries included in the definitions Communications and Support Needs Ground support and communications are not needed during diagnosis and acute management, however, can be adjunctively considered following the acute period.

### IMM CLIFF RECONCILATION COMMENTS

EVA related suit contact injury is a unique condition to IMPACT 1.0. Therefore, the incidence, duration, and outcomes (RTDC, LOCL) are 11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 6

appropriately unique in this CLiFF.

### LIMITATIONS SUMMARY

- No literature identifying the length of symptoms of pain, fatigue, and swelling in the hand post-EVA could be found. Therefore, the durations for

the Category 2 scenarios were based on cursory data from LSAH post-EVA PMCs from recent EVAs on ISS. • RTDC and LOCL were assumed by the ExMC composer of this CLiFF to be 0% and no literature searches specific to RTDC or LOCL were performed. However, no literature examined in the composer of the remainder of the CLiFF supported either outcome. • Unlike other CLiFFs, the best and Category 2 scenarios for this CLiFF are defined as "Category 1" and "Category 2" indicating that they are separate entities that do not occur on a spectrum as most other conditions do. That is why the "Category 2 scenario" (Category 2) durations are shorter than the "Category 1 scenario" (Category 1) durations in this CLiFF.

In spaceflight, it is not uncommon for crewmembers to have symptoms from both categories (abrasions and swelling/fatigue for instance) concurrently. The MEDPRAT model, however, will pick one category or the other based on the best and Category 2 probabilities provided by this CLiFF. 11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |  |
| ------ | ----------------------- | -------------- | -------------------------- | ------- | --------- | --------- | --- | -------------- | --- | -------- |
|  |  | Communications | personal Vision | Hearing |  | Dentition | GI | GU |  |  |
|  | Simple Complex |  | Skills |  | pulmonary |  |  |  |  |  |
| (TBC) |  |  |  |  |  |  |  |  |  |  |
| (UTBC) |  |  |  |  |  |  |  |  |  |  |
| (TWC) | 664 |  | 89 |  |  |  |  |  |  |  |
| (UTWC) | 664 |  | 89 |  |  |  |  |  |  |  |
|  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |

Total Human Hand Lower Ambul & Translation & Don/Doff Pressure Total Tasks System Hand (Any) Upper Extremity Stabilization Impaired By TI Decimal TI % (Dom) Extremity Standing (g) (microgravity) Equipment Ops Condition Category

### Tasks Full

Mission

| (TBC) | 132 |  |  |  |  | 211 | 343 | 3763 | 0.0911507 | 9.11507 |
| ------ | --- | --- | --- | --- | --- | --- | ---- | ---- | --------- | ------- |
| (UTBC) | 132 |  |  |  |  | 211 | 343 | 3763 | 0.0911507 | 9.11507 |
| (TWC) | 132 |  |  |  |  | 211 | 1096 | 3763 | 0.291257 | 29.1257 |
| (UTWC) | 132 |  |  |  |  | 211 | 1096 | 3763 | 0.291257 | 29.1257 |

Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |  |
| --- | ----------------------- | -------------- | --------------- | ------- | --------- | --------- | --- | --- | --- | --- |
|  |  | Communications | personal Vision | Hearing |  | Dentition | GI | GU |  |  |
|  | Simple Complex |  |  |  | pulmonary |  |  |  |  |  |

Skills

| (TBC) |  |  |  |  |  |  |  |  |  |  |
| ------ | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| (UTBC) |  |  |  |  |  |  |  |  |  |  |
| (TWC) |  |  |  |  |  |  |  |  |  |  |
| (UTWC) | 664 |  | 89 |  |  |  |  |  |  |  |
|  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |

Total Human Hand Lower Ambul & Translation & Don/Doff Pressure Total Tasks System Hand (Any) Upper Extremity Stabilization Impaired By TI Decimal TI %

|  | (Dom) |  | Extremity Standing (g) |  | Equipment | Ops |  | Category |  |  |
| --- | ----- | --- | ---------------------- | -------------- | --------- | --- | --------- | ---------- | --- | --- |
|  |  |  |  | (microgravity) |  |  | Condition | Tasks Full |  |  |

Mission

| (TBC) |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ------ | --- | --- | --- | --- | --- | --- | ---- | ---- | --------- | ------- |
| (UTBC) | 132 |  |  |  |  | 211 | 343 | 3763 | 0.0911507 | 9.11507 |
| (TWC) |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| (UTWC) | 132 |  |  |  |  | 211 | 1096 | 3763 | 0.291257 | 29.1257 |

11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 8

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

11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 9

## REFERENCES

Reference

1. AAFP. Choosing Wisely: Don’t routinely use topical antibiotics on a surgical wound. - American Family Physician. Retrieved 11 August 2021

from https://www.aafp.org/afp/recommendations/viewRecommendation.htm?recommendationId=150

2. Braun N, Thomas S, Tronnier H, Heinrich U. Self-Reported Skin Changes by a Selected Number of Astronauts after Long-Duration Mission on

ISS as Part of the Skin B Project. Skin Pharmacol Physiol. 2019; 32(1):52–7

3. Campbell MR, Billica RD. Surgical Capabilities. In: Principles of Clinical Medicine for Space Flight. Springer; :233–52.

4. Eiland G, Ridley D. Dermatological Problems in the Athlete. J Orthop Sports Phys Ther. 1996; 23(6):388–402

5. LSAH. Post-EVA PMC Audit Information.

6. Scheuring RA, Mathers CH, Jones JA, Wear ML. Musculoskeletal injuries and minor trauma in space: incidence and injury mechanisms in U.S.

astronauts. Aviat Space Environ Med. 2009; 80(2):117–24

7. Strauss S. Extravehicular Mobility Unit Training Suit Symptom Study Report. Johnson Space Center: NASA; 2004. No: TP–2004–212075.

8. Viegas SF, Williams D, Jones J, Strauss S, Clark J. Physical demands and injuries to the upper extremity associated with the space program. J

Hand Surg. 2004; 29(3):359–66

9. Andersen, D. B. (2014). Schwartz’s Principles of Surgery. F. C. Brunicardi. United States, New York : McGraw-Hill Education. 1.

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

11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 10

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

### RTDC Removal to Definitive Care

### SANS Spaceflight-Associated Neuro-ocular Syndrome

### SAS Space Adaptation Syndrome

11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 11

### SEVA Spaceflight Extravehicular Activity

### SME Subject Matter Expert

### SoP Standard Operating Procedure

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

11/17/2022 12:06:03 PM ICL42_Eva Related Hand Injury Cliff page: 12

---

## Source metadata

```yaml
source_filename: "eva-related-hand-injury-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Upper Extremity Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1nf9SLk5WsVoZ5KhVWnDJbTxUUs02hRmK/view"
source_drive_id: "1nf9SLk5WsVoZ5KhVWnDJbTxUUs02hRmK"
source_sha256: 68f7c0d655985ef3e5736026ff36922ce6b3ff7dfec4d4e7133bf4652bc32043
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 12
ocr_performed: false
```
