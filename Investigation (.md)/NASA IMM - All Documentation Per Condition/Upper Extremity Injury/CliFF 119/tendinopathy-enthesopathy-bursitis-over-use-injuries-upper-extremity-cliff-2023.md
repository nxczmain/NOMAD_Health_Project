# Tendinopathy Enthesopathy Bursitis Over Use Injuries Upper Extremity CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1wcThxU8L1HoAFVpgSVM9up-5nlAiz7X7/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Upper Extremity Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Tendinopathy – Upper Extremity is a fairly broad condition covering overuse in the upper extremity. Specifically covering tendinopathy, enthesopathy, bursitis, and all other overuse injuries of the upper extremity.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

There are no documented episodes of tendinopathy, tendinitis, tenosynovitis, or bursitis in spaceflight. Therefore, terrestrial studies are used to estimate the incidence and outcomes of this condition in spaceflight.

### ANALOG LITERATURE

A military population were used as analog for astronauts in spaceflight. This may result in an overestimation of incidence since the rigorous physical training and activities of typical military personnel compared to astronauts in the spaceflight environment would result in a significant overestimation of the incidence and severity of this condition.

### TERRESTRIAL LITERATURE

General terrestrial population studies were used to estimate the outcomes for astronauts in spaceflight. This may result in a slight overestimation of the impact of this condition since the microgravity environment of spaceflight typically results in decreased forces on joints, muscles, and tendons of the lower extremities. However, exercise countermeasures during the transit phase of spaceflight missions and terrestrial EVAs could contribute to the development of lower extremity tendinopathies and bursitis.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 0.016 and SD 0.005989

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate given data from an analog Naval Special Warfare study, estimated assuming independence of MSK injury location and type, is Gamma(shape=7.137, rate=446.079) with mean 0.016 and SD 0.005989. The rate of MSK injuries was modeled using the data from a Naval Special Warfare analog (63 injuries over 210 person-years). The probability of the injury being located within the upper extremity was also modeled from the same source data (24 out of the 63 injuries). The probability of the injury type being relevant to this condition was modeled from the same source as well (8 out of the 63 injuries). Assuming independence of type and location, the adjusted incidence rate was estimated from the overall model incorporating all the data elements. All priors were uninformative. Analog Naval Special Warfare – Lovalekar 2016. Descriptive Epidemiology of Musculoskeletal Injuries in Naval Special Warfare Sea, Air, and Land Operators. 210 person-years of chart review. 63 total injuries reported over 210 person-years. 24 out of the 63 were located in the upper extremity. 8 of the 63 were relevant to the condition (6 Tendonitis/Tenosynovitis/Tendinopathy and 2 Bursitis). The overall rate and proportions will be used to estimate the site-specific relevant condition incidence rate. Since we don’t have access to data about the joint site and condition distribution, we will assume independence in the probabilities of MSK conditions occurring, i.e. where the injury occurs is independent of which type of injury. This is a noted 6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Cliff page: 1

limitation of the incidence approach for the upper and lower extremity Tendinopathy CliFFs.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0159994 SD 0.00598889 Gamma (Shape): 7.137 (Rate): 446.079 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Lovalekar, 2016 Military Analog 2 LOC = 2 (neutral) based on a military analog population study. This study probably results in an overestimation of incidence. There were no good terrestrial general population studies available to estimate the incidence of this condition. No spaceflight data are available. 6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

The Astronaut Strength, Conditioning and Rehabilitation (ASCR) program and Astronaut gym at Johnson Space Center are strategic to providing pre-flight strengthening in attempts to prevent or mitigate injuries as well as post-flight rehabilitation. The Strength Coach's primary role is to provide an exercise plan designed to achieve flight physical readiness and prevent musculoskeletal injuries during spaceflight training.

### BEST CASE SCENARIO DEFINITION

A tendinopathy/enthesopathy, bursitis, or overuse injury which can be managed symptomatically (e.g. rest, non-opioid analgesics, physical therapy) and does not impact mission objectives.

### WORSE CASE SCENARIO DEFINITION

A tendinopathy/enthesopathy, bursitis, or overuse injury which requires treatment (e.g. corticosteroid injection, dry needling, physical therapy, nitroglycerin patches), or impacts mission objectives. Elective surgery may be necessary post-mission.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Probability determined by looking at Table 2 from Hauret, K. G., et al. (2010). To best capture potential "worst cases" for upper extremity, included conditions listed as "Joint derangement; Joint derangement with neurological involvement; Stress fracture; Sprain/strain/rupture; Dislocation" and divided that by the total number of patients in the Upper Extremity category, yielding 10.3%. Trying to accurately represent worst case with our definition including things like needing PT or steroid injections is difficult to capture, but this seems like a reasonable estimate of worst case for overuse injuries. TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Hauret, 2010 Terrestrial 2 Probability determined by looking at Table 2. To best capture potential "worst cases" for upper extremity, included conditions listed as "Joint derangement; Joint derangement with neurological involvement; Stress fracture; Sprain/strain/rupture; Dislocation" and divided that by the total number of patients in the Upper Extremity category, yielding 10.3%. Trying to accurately represent worst case with our definition including things like needing PT or steroid injections is difficult to capture, but this seems like a reasonable estimate of worst case for overuse injuries. 6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 0.016 and 90 - 90 100 1.36 8.75631 336 672 0 0 0 0 0 Case (TBC) SD 0.005989 Treated Worst 10 - 10 100 1.36 10.5102 1080 8760 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 1.36 19.333 720 8760 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.36 41.7752 4320 8760 38.666 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Upper extremity tendinopathy is a broad category of overuse injuries, which can include lateral and medial epicondylitis, biceps tendinosis, supraspinatus calcific tendinosis, and carpal tunnel syndrome. Though most are more mild in nature, self-resolution of any tendinopathy may take months (or years if more severe). Interventions beyond physical therapy are of mixed efficacy, and it is difficult to lump treatments together to provide a confident estimate of recovery versus persistent morbidity for all conditions. There is no LOCL expected under any scenario in this ICL.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Best case scenarios can still last anywhere from 3 weeks to 12 months even with very conservative measures. Anywhere from 10-17% of patients may experience persistent/chronic pain. No RTDC or LOCL is expected.

TREATED WORST CASE SCENARIO (TWC) COMMENTS Worst case scenarios likely persist beyond 6 weeks and may take up to 18 months to completely resolve. Literature directly comparing more advanced treatment modalities are difficult to assess, even within an isolated disease process (e.g. lateral epicondylitis), let alone when taking into account other various/common overuse injuries (e.g. biceps tendinosis, medial epicondylitis, carpal tunnel). Once again, no study found resulted in mortality for this scenario so LOCL is not expected within the scope of this ICL.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Best case scenarios can still last anywhere from 3 weeks to 12 months even with very conservative measures. Anywhere from 10-17% of patients may experience persistent/chronic pain. No RTDC or LOCL is expected.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Worst case episodes of upper extremit tendinosis have been documented to last for years. A high percentage of individuals will experience chronic pain that, depending on their profession, may prevent them or limit them in their work but does not represent a medical emergency. Therefore, RTDC and LOCL are not expected. TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Haahr JP, 2003 Analog Smidt N, 2006 Analog 2 Finnoff, 2011 Analog Sayegh, 2015 Analog These papers focus heavily on lateral epicondylitis (tendinopathy of the common extensor tendon / extensor carpi radialis brevis), but this is one of the most common overuse tendinopathies of the upper extremity. Well described and fairly consistent range in the literature. Main drawback is that patients may not reflect Astronaut Corps likely resulting in a longer than expected return to full function for on orbity missions (i.e. a conservative estimate). As Spaceflight data is fairly sparse, better assessments will be difficult.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC) 6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Cliff page: 5

### Citation Source LOC Value

Haahr JP, 2003 Terrestrial Smidt N, 2006 Terrestrial Feuerstein, 1993 Terrestrial 1 Krogh TP, 2012 Terrestrial Roh YH, 2017 Terrestrial Using a surrogate of hospitalization for RTDC, tendinopathies of the upper extremity are simply not expected to result in hospitalization thus resulting in 0% for RTDC for all condition scenarios.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Haahr JP, 2003 Terrestrial 1 Extensive literature search shows no evidence to support the notion of LOCL in the setting of upper extremity tendinopathy, thus (like RTDC) resulting in 0% for all condition scenarios.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Tendinopathy/enthesopathy/bursitis/over-use injuries encompasses multiple diagnoses that may occur in the upper extremity as stated in the title. (Examples may include but are not limited to lateral common extensor tendinopathy (lateral epicondylitis), subacromial bursitis). The best-case scenario can be managed symptomatically and does not impair mission objectives, whereas the worst-case scenario requires treatment and/or impacts mission objectives and may require surgical intervention post-mission.

- CNES: N/A

### Diagnostic Scope and Resourcing

In both the best- and worst-case scenario, diagnosis is based on history and physical examination (musculoskeletal and neurologic).

Musculoskeletal ultrasound was considered a useful adjunct in diagnosis, but not a necessity for the diagnosis. It was included as a non-necessary capability. X-ray and MRI capabilities will not be possible in-flight.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1.36 hours CP1 WC (Treated or Untreated: 1.36 hours This CRT includes a scope of practice code of 5 (which correlates to an “Experienced procedure trained generalist attending (ED attending)” and was included for musculoskeletal ultrasound and interpretation.

### Treatment Scope and Resourcing

Terrestrially, tendinopathy, enthesopathy, bursitis, and over-use injuries can have a prolonged recovery with progress and relapses based on the activity level of the patient. The best-case scenario management includes pain management, NSAIDs, acetaminophen and iontophoresis with dexamethasone (which terrestrially has shown improvements in both pain and function in tendinopathy). Iontophoresis is a topical application of medication utilizing the charge of the particles to disperse the medication into the skin directly over an affected tendon. Physical therapy is the mainstay of treatment.

Exercise modification is also recommended, but not built into the CRT as this does not represent a clinical resource.

The worst-case scenario management has the following additional resources: Corticosteroid injection for bursitis, needle tenotomy for tendinopathy, and topical nitroglycerin patches for tendinopathy. It should be noted that corticosteroid injections should only be used for bursitis in this condition and not for tendinopathy as injection of corticosteroids into the tendon will weaken the tendon and put it at risk for rupture. Topical nitroglycerin for chronic tendinopathy is an off-label treatment that has been used successfully in Sports Medicine for approximately 20 years with meta-analysis level data supporting its efficacy for pain reduction and improved function. While nitroglycerin patches are not currently included on the spaceflight formulary, nitroglycerin tablets and spray are, providing precedence for flying nitroglycerin. Again, physical therapy is the mainstay of treatment.

Orthopedic surgery capabilities are outside the scope of medical resources for this CRT. 6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Cliff page: 6

### Communications and Support Needs

While real-time video and audio loop communications are desired for diagnosis and treatment, they were not considered a necessity for the best- case scenario. For the worst-case scenario, consultation with ground specialists to facilitate treatment and healing was considered necessary given the limited diagnostic and treatment capabilities in-flight.

## REFERENCES

1. Cardone DA, Tallia AF. Joint and Soft Tissue Injection. AFP 2002; 66:283.

2. Challoumas D, Kirwan PD, Borysov D, Clifford C, McLean M, Millar NL. Topical glyceryl trinitrate for the treatment of tendinopathies: a systematic

review. Br J Sports Med 2019; 53:251–62.

3. Gambito ED, Gonzalez-Suarez CB, Oquiñena TI, Agbayani RB. Evidence on the Effectiveness of Topical Nitroglycerin in the Treatment of

- Tendinopathies: A Systematic Review and Meta-Analysis. Archives of Physical Medicine and Rehabilitation 2010; 91:1291–305.

4. Marovino T, DPT, MPH, DAIPM, Graves C. Iontophoresis in Pain Management. Practical Pain Management. Retrieved 19 January 2021 from

https://www.practicalpainmanagement.com/treatments/interventional/iontophoresis-pain-management

5. Stoychev V, Finestone AS, Kalichman L. Dry Needling as a Treatment Modality for Tendinopathy: a Narrative Review. Curr Rev Musculoskelet

Med 2020; 13:133–40.

6. Iontophoretic Administration of Dexamethasone for Musculoskeletal Pain. Rheumatology Network. Retrieved 19 January 2021 from

https://www.rheumatologynetwork.com/view/iontophoretic-administration-dexamethasone-musculoskeletal-pain

7. tendinopathy.pdf. Retrieved 19 January 2021 from https://wexnermedical.osu.edu/-/media/files/wexnermedical/patient-care/healthcare-

services/sports-medicine/education/medical-professionals/other/tendinopathy.pdf? la=en&hash=7625C8F53C4F5784DB7C2A621AF913918C3E299C

### IMM CLIFF RECONCILATION COMMENTS

No prior IMM CliFF

### LIMITATIONS SUMMARY

- Under-reporting for this condition could have occurred during past space missions due to subtle overuse injuries that were not of clinical

consequence. This may result in underestimation of the incidence. • No spaceflight data are available for this medical condition. • The population studied to calculate incidence was Special Forces operators. They are more likely to be younger and more active than astronauts during spaceflight. • The group studied may result in an overestimation of the incidence and impact of this condition since the microgravity environment of spaceflight typically results in decreased forces on joints, muscles, and tendons of the lower extremities. Since we don’t have access to incidence data about the joint site and condition distribution, we assumed independence in the probabilities of MSK conditions occurring, i.e. where the injury occurs is independent of which type of injury. This is a noted limitation of this incidence approach for both the upper and lower extremity CliFFs. • The incidence and outcomes for overuse injuries was not included because relevant incidence data was not available for overuse. However, many of the other conditions described in this CLiFF result from overuse injuries. 6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  | Cardio- |  |  |  |  |
| --- | ----------------------- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 664 |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  |  |  |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 664 |  | 89 |  | 145 |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  | Translation & |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity Standing (g) |  | Equipment | Ops | Category |  |  |
| --- | ----- | --- | ---------------------- | -------------- | --------- | --------- | -------- | --- | --- |
|  |  |  |  | (microgravity) |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  | 414 |  |  | 34 | 211 659 | 3763 | 0.175126 | 17.5126 |
| ---- | --- | --- | --- | --- | --- | ------- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 | 414 |  |  | 34 | 211 1455 | 3763 | 0.38666 | 38.666 |
| ---- | --- | --- | --- | --- | --- | -------- | ---- | ------- | ------ |

Case (UTBC) Treated Worst

|  | 132 | 414 |  |  | 34 | 211 791 | 3763 | 0.210205 | 21.0205 |
| --- | --- | --- | --- | --- | --- | ------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 | 414 |  |  | 34 | 211 1689 | 3763 | 0.448844 | 44.8844 |
| --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |
| --- | ----------------------- | -------------- | --------------- | ------- | --------- | --------- | ----- | --- | --- |
|  |  | Communications | personal Vision | Hearing |  | Dentition | GI GU |  |  |
|  | Simple Complex |  |  |  | pulmonary |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 664 |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity  Cliff page: 8

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

| 132 | 414 |  | 34 211 | 1455 3763 | 0.38666 38.666 |
| --- | --- | --- | ------ | --------- | -------------- |

Case (UTWC) 6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity  Cliff page: 9

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

6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Cliff page: 10

## REFERENCES

Reference Williams, David & Johnson, Brian. (2003). EMU Shoulder Injury Tiger Team Report. - https://ntrs.nasa.gov/api/citations/20040200968/downloads/20040200968.pdf McFarland, S., et al. (2009). "<Spacesuit Glove-Induced Hand Trauma and Analysis of Potentially Related Risk Variables.pdf>." Laughlin, M. S., et al. Shoulder Injury Incidence Rates in NASA Astronauts. NASA Human Research Program Investigators Workshop (2014).

Qi RR, Wang JQ, Pan LL, Zhou W, Liu JL, Ju JT, Cai YL. Descriptive epidemiology of deployment-related medical conditions and shipboard training-related injuries in a Chinese Navy population. Public Health. 2016 Dec;141:170-177. doi: 10.1016/j.puhe.2016.09.014. Epub 2016 Oct

20. PMID: 27931995.

Hauret, K. G., et al. (2010). "Musculoskeletal injuries description of an under-recognized injury problem among military personnel." Am J Prev Med 38(1 Suppl): S61-70. Kachanathu SJ, Alenazi AM, Hafez AR, Algarni AD, Alsubiheen AM. Comparison of the effects of short-duration wrist joint splinting combined with physical therapy and physical therapy alone on the management of patients with lateral epicondylitis. Eur J Phys Rehabil Med. 2019;55(4):488-

493. doi:10.23736/S1973-9087.19.05280-8

Sims SE, Miller K, Elfar JC, Hammert WC. Non-surgical treatment of lateral epicondylitis: a systematic review of randomized controlled trials. Hand (N Y). 2014;9(4):419-446. doi:10.1007/s11552-014-9642-x L. Bisset, E. Beller, and G. Jull, “Mobilization with movement and exercise, corticosteroid injection,or wait and see for tennis elbow: randomized trial,” BMJ, vol. 333, no. 7575, pp. 939–941, 2006.

Haahr JP, Andersen JH. Prognostic factors in lateral epicondylitis: a randomized trial with one-year follow-up in 266 new cases treated with minimal occupational intervention or the usual approach in general practice. Rheumatology (Oxford). Oct 2003;42(10):1216-25. doi:10.1093/rheumatology/keg360 Smidt N, Lewis M, VAN DER Windt DA, Hay EM, Bouter LM, Croft P. Lateral epicondylitis in general practice: course and prognostic indicators of outcome. J Rheumatol. 2006 Oct;33(10):2053-59. Epub 2006 Aug 1. PMID: 16881095.

Lian J, Mohamadi A, Chan JJ, et al. Comparative Efficacy and Safety of Nonsurgical Treatment Options for Enthesopathy of the Extensor Carpi

- Radialis Brevis: A Systematic Review and Meta-analysis of Randomized Placebo-Controlled Trials. Am J Sports Med. 2019;47(12):3019-3029.

doi:10.1177/0363546518801914 Feuerstein M, Callan-Harris S, Hickey P, Dyer D, Armbruster W, Carosella AM. Multidisciplinary rehabilitation of chronic work-related upper extremity disorders. Long-term effects. J Occup Med. 1993;35(4):396-403.

Sayegh ET, Strauch RJ. Does nonsurgical treatment improve longitudinal outcomes of lateral epicondylitis over no treatment? A meta-analysis.

Clinical Orthopaedics and Related Research®. 2015;473(3):1093-1107.

Krogh TP, Bartels EM, Ellingsen T, Stengaard-Pedersen K, Buchbinder R, Fredberg U, Bliddal H, Christensen R. Comparative effectiveness of injection therapies in lateral epicondylitis: a systematic review and network meta-analysis of randomized controlled trials. Am J Sports Med. 2013 Jun;41(6):1435-46. doi: 10.1177/0363546512458237. Epub 2012 Sep 12. PMID: 22972856.

Roh YH, Oh M, Noh JH, Gong HS, Baek GH. Effect of Metabolic Syndrome on the Functional Outcome of Corticosteroid Injection for Lateral

- Epicondylitis: Retrospective Matched Case-Control Study. Sci Rep. 2017 Sep 7;7(1):10845. doi: 10.1038/s41598-017-11179-z. PMID: 28883422;

- PMCID: PMC5589833.

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

6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Cliff page: 11

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

### OR Occurrence Rate

6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Cliff page: 12

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

6/15/2023 2:13:35 PM ICL108_Tendinopathy/Enthesopathy/Bursitis/Over-Use Injuries - Upper Extremity Cliff page: 13

---

## Source metadata

```yaml
source_filename: "tendinopathy-enthesopathy-bursitis-over-use-injuries-upper-extremity-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Upper Extremity Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1wcThxU8L1HoAFVpgSVM9up-5nlAiz7X7/view"
source_drive_id: "1wcThxU8L1HoAFVpgSVM9up-5nlAiz7X7"
source_sha256: 68ae32bbc86133ee2efadb94e832004d8672f85614be39f6d710e5d387bb5357
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
