# Herpes Zoster Reactivation Shingles CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1SLE4lR14pHZNhe-nKkGURooS4AXql5k5/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Infectious Disease/CliFF 119

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

ICL68_Herpes Zoster Reactivation (Shingles)

Herpes zoster (HZV) is caused by the varicella virus which can remain latent in the dorsal root ganglia for years and then be reactivated in adults who had a primary infection (chickenpox) in their youth. It can cause a self-limited infection that, while uncomfortable, usually only causes a rash in a single dermatomal distribution. More invasive infections can result in meningoencephalitis, involvement of the auditory and visual systems, and a widely disseminated rash. Facial involvement can result in post-herpetic neuralgia that can last for months or even years. Due to the current average age of current astronauts, the timing of the Varicella vaccine creation (rolled out in the U.S. in 1995), and the extremely high incidence of prior exposure to HZ, most astronauts are at risk for HZ reactivation. While there is laboratory evidence that astronauts may be more at risk due to a compromised immune system, potentially from the stress of spaceflight and the spaceflight environment itself, there have been no reported cases of herpes zoster during spaceflight.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

A significant amount of work has been performed by Rooney, Mehta, and Crucian et. al. seeking to understand the potential for HZ reactivation in spaceflight as current astronauts were likely to have had Chicken Pox before the advent of the vaccine and are thus at risk for HZ reactivation.

Fortunately, while their effort has revealed that ~30-60% of astronauts may show laboratory evidence of reactivation or viral shedding from Herpes viruses in saliva and urinary samples during spaceflight, there have been no reported clinical cases of HZ reactivation. While spaceflight incidence is currently zero, spaceflight studies showing an increase in laboratory HZ reactivation, a possible increase in cold sores (caused by a different Herpes virus; Herpes Simplex Virus), and analog studies (discussed below) raise our level of concern and force a conservative interpretation when creating our best estimates of risk.

### ANALOG LITERATURE

We evaluated to analog manuscripts regarding clinical reactivation of HZ in Antartica (Reyes et al 2017) and at elevation (Singh et al 2018) and see that the risk is increased 7-10-fold above the terrestrial incidence values of Americans at sea level. Clinical Herpes Zoster in Antarctica as a Model for Spaceflight revealed 5 cases with an incidence rate of 33.3 per 1000 py. From this information, we can estimate the person-years at 150.1502 (after age and sex-adjustment to the 2010 census). IR: 0.0333 (95%CI: 0.0108, 0.0778). Unfortunately, we cannot obtain a true incidence rate from the Singh publication at present as it reports on percentages of all skin outpatient department cases as opposed to in terms of the underlying at risk population.

### TERRESTRIAL LITERATURE

While HZ is seen more often in older populations (>50 y/o), immunocompromised or immunosupressed (i.e. HIV/AIDs, pregnancy, cancer chemotherapy), there is robust terrestrial evidence evaluating HZ reactivation by age and gender in the United States (Johnson et al 2015). In <50 year olds, Johnson provides an annual incidence of 2.4 per 1000 person years. 60% of these cases are in women and 40% in men.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 0.03331 and SD 0.01501 6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 1

### INCIDENCE SUMMARY

Since there are no reports of HZV reactivation during spaceflight, terrestrial data was used to calculate the composite incidence. A manuscript by Reyes, et al., was chosen to be the source of incidence data since it used a similar population to astronauts in an analog environment. Two papers showed up to a 10 times higher risk for reactivation in analog populations, possibly due to increased stress compared with the general population.

The Bayesian posterior distribution from Reyes 2017 given the reference evidence (5 events over 150.15 person-years) under an uninformative prior is Gamma(shape=4.925, rate=147.85) with mean 0.03331 and SD 0.01501.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0333108 SD 0.01501 Gamma (Shape): 4.925 (Rate): 147.85 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Reyes, et al. 2017 Analog 3 Singh, et al. 2018 Analog 2 Mehta, et al. 2007 Spaceflight 3 Johnson, et al. 2015 Terrestrial 1 Drolet, et al. 2010 Terrestrial 1 Rooney, et al. 2019 Spaceflight 3 Leung, et al. 2011 Terrestrial 1 Kawai, et al. 2016 Terrestrial 1 As extensively explained with the other incidence captions, the level of confidence in spaceflight, analog, and terrestrial is complicated. While we have reasonable confidence that Mehta and Rooney are truly showing laboratory evidence of HZ reactivation, these studies cant be used to calculate clinical spaceflight incidence risks and the current clinical reactivation incidence in spaceflight is 0. While the analog populations agree with the spaceflight data that reactivation risk may be elevated, the studies are limited by low numbers and both the population and environment are different from the astronaut population and spaceflight environment. The terrestrial data is much more robust, however, despite the increase in numbers, we also do not have high confidence in these incidence rates would apply well to spaceflight given the spaceflight and analog data that is available. 6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

There are no formal pre-flight preventive screening measures noted on MRID.

### BEST CASE SCENARIO DEFINITION

An uncomplicated course of herpes zoster over several days which causes minimal disturbance with localized pain and may require treatment with antiviral and/or pain medications.

### WORSE CASE SCENARIO DEFINITION

A prolonged course of herpes zoster accompanied by symptoms of either persistent disruptive pain, e.g. post herpetic neuralgia (PHN), or ocular and neurological complications (peripheral motor neuropathy, Ramsay Hunt syndrome, or HZ ophthalmicus).

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The difficulty in evaluating best/case worst case is the fact that while we can find incidence rates for all of the varying complications from HZ reactivation (post-herpetic neuralgia [~5-30%], peripheral motor neuropathy [~3%], Ramsay Hunt sundrome [very rare], HZ opthalmicus [~10%], etc), there is a paucity of data combined incidence of complicated HZ reactivation. One study in Italy found a combined complications rate of 26% in all age groups (Paparatti et al, 1999). Given that terrestrial stressors (and thus spaceflight stressors) will likely increase the rates of some of these complications, while lower ages (as characteristic of our astronauts) converseley decreases the rate of complications from HZ reactivation, assuming an average worst case of 20% is reasonable. This is further substantiated when looking into the Paparatti data further, the complication rate for those aged 35-44 was 14.9% while 45-54 year olds was 23.9%.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Drolet, et al. 2010 Terrestrial 2 Rowbatham, et al. 1998 Terrestrial 2 Kong, et al. 2020 Terrestrial 2 Kawai, et al. 2014 Terrestrial 2 Paparatti U, et al. 1999 Terrestrial 3 As clinical HZ reactivation has yet to occur in spaceflight, complications stemming from reactivation are even more rare and thus the level of confidence dimishes even further that any terrestrial study could apply to astronauts. A neutral LOC value was chosen because astronauts are simultanously under increased stressors that may theoretrically increase the risk of complications while also being of a demographic (age, health, etc) that would decrease this risk. The Paparatti manuscirpt was given a 3 given these authors were able to evaluate combined complication rate by age group. 6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 0.03331 80 - 80 100 0.66 3.25538 168 240 0 0 0 0 0 Case (TBC) and SD 0.01501 Treated Worst 20 - 20 100 1 13.832 240 2160 0 0 0.002 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.66 13.832 168 336 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1 34.7863 240 2160 26.761 0 0.025 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Given the variability in duration and severity of HZ reactivation symptomatology, durations, RTDC, and LOCL are largely based around expert opinion and analysis of previous meta-analyses. As with most every condition, the worst case scenario is not presumed to be the absolute worst imaginable case, however the median presentation that meets the WC definition provided.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Data supporting best-case treated scenarios indicate that the condition will generally resolve within 7-10 days with antivirals and symptomatic control with pain medications. There is no concern for RTDC or LOCL in treated best-case scenarios.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The worst-case definition includes a number of distinct complications of HZ reactivation that all have differing timings. While continued neuropathic pain can persist for longer than 3 months, symptoms lasting a maximum of 3 months was felt to be a reasonable consideration for a maximum treated worst-case scenario. Bouhassira et al 2012 found that pain symptoms dropped to 11.6%, 8.5%, 7.4%, and 6.0% at 3, 6, 9, and 12 months, respectively. This was not broken down by age, and thus there is likely <10% chance that symptoms would remain for longer than 3 months in the astronaut population. A large meta-analysis (Kawai et al, 2014) revealed a range of hospitalization rates from 0.2-2.5 per 10,000 person-years and mortality rates of 0.0017-0.0465 per 10,000 person-years. As this meta-analysis also includes all ages, these numbers are likely elevated beyond our expectations in a health astronaut population.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS In early studies of acyclovir vs. placebo, they found that acyclovir shortened the duration of pain symptoms and decreased the risk of HZ complication, hence why it is now the standard of care. Upon evaluating a meta-analysis of these trials (Wood et al, 1996), it is notable that the relief from moderate pain without treatment lasted until 14 days and thus we extend the duration to 336 hours for UTBC. Upon review of the best case scenario definition, we would not expect RTDC or LOCL.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The worst-case definition includes a number of distinct complications of HZ reactivation that all have differing timings. While we expect <10% of individuals <60 to still have remaining symptoms beyond 3 months with treatment, there is limited data to guide untreated worst case scenario durations. In a young and healthy astronaut population, there is likely <10% chance that symptoms would remain for longer than 3 months. Given that the Wood et al 1996 meta-analysis of early placebo-controlled trials showed that the median time to being pain free was 67 days in the placebo groups, it is likely that as with the treated groups, that untreated WC scenario duration has a low likilihood of extending beyond 90 days (or 2160 hours). Rare cases can extend for many months or years, however, given the astronaut population is young and healthy, this range feels reasonable. Furthermore, based off of Kawai's 2014 meta-analysis of 28 studies evaluation hospitalization and mortality rates, UTWC carries an RTDC risk of 25/100,000 (or 0.025%) and mortality rate of 0.465/100,000 (or 0.000465%).

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Schmader, 2018 2 Huff, et al. 1988 3 Schmidt SA, et al. 2016 3 3 Wood, et al. 1996 3 Helgason, et al. 2000 3 Fortunately, there are a number of studies still available for review that compared acyclovir with placebo for HZ in the 1980s and 1990s. Wood et al, 1996 provided a meta-analysis of these trials, and between this and the other studies, we can be reasonably confident in our duration intervals.

- The main limitations include: 1. that most studies do not separate outcomes by age and cmplication rate and duration of complications is affected

by age, 2. That the duration and diversity of complicated symptoms in the worst case scenario can have very braod ranges and very variable 6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 5

outcomes, and 3. our main meta-analysis (Wood et al 1996) doesnt robustly evaluate complicated HZ symptpms.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ----------------------- | ------ | --------- |
| Kawai, et al. 2014 | 4 |  |
| Schmidt SA, et al. 2016 | 3 |  |
| Helgason, et al. 2000 | 3 | 3 |
| Schuster, et al. 2016 | 3 |  |
| Drolet, et al. 2010 | 3 |  |

Though the astronaut population is significantly different from the average HZ reactivation patient, we have reasonable conifdence regarding RTDC rates that are based around the need for hospitalization for symptom management.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ----------------------- | ------ | --------- |
| Kawai, et al. 2014 | 4 |  |
| Schmidt SA, et al. 2016 | 3 |  |

3

| Helgason, et al. 2000 | 3 |  |
| --------------------- | --- | --- |
| Schuster, et al. 2016 | 3 |  |

Though the astronaut population is significantly different from the average HZ reactivation patient, we have reasonable conifdence regarding the LOCL data. CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

## Overview

In addition to the more commonly known shingles, Herpes Zoster can also lead to other complications such as Ramsay Hunt syndrome, post- herpetic neuralgia, peripheral motor neuropathy, and VZV ophthalmicus. Mehta et al have numerous studies over the last two decades raising the concern of reactivation of VZV during or after spaceflight. Ramsay Hunt syndrome (RHS) is manifested by facial palsy, inner ear dysfunction, periauricular pain, and herpetiform vesicles on the pinna. It occurs in 4/100,000 people, and without proper treatment, only 20% will achieve complete recovery. These symptoms are thought to be caused by inflammation, edema, and compression of CN 7. Involvement of other CNs is rare.

Postherpetic neuralgia (PHN) is a chronic neuropathic pain syndrome that results from VZV reactivation that persists for 3 months or more after the onset of rash in the same affected dermatome. In most of the cases, pain improve progressively and is categorized in 3 types: 1) constant pain (burning, aching, throbbing), 2) intermittent pain (stabbing, shooting, electric-shock-like pain), or 3) stimulus-evoked pain such as allodynia or hyperalgesia. HZ ophthalmicus represents up to 25% of reactivation zoster cases and presents with periorbital vesicular rash, conjunctivitis, keratitis, uveitis, and ocular cranial-nerve palsies. This may lead to chronic ocular inflammation, loss of vision, and debilitating pain. It should be noted that vaccination in astronauts older than 50 years could be considered as a preventative strategy and possibly in astronauts younger than 50 if the higher risk of reactivation in space outweighs the risk of vaccination.

- CNES: None

### Diagnostic Scope and Resourcing

The best-case scenario includes an uncomplicated course of shingles, while the worst-case scenario may include the numerous complications above. In the best-case scenario, a history and skin physical exam are all that are required for diagnosis. In the worst case, a focused neurological exam and eye exam may be necessary depending upon the symptomology and location of the reactivation. Tzanck smears, DFA, VZV PCR, or antibody levels will not be available. Furthermore, MRI or lumbar puncture will also not be available.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.66 hours CP1 WC (Treated or Untreated): 1.00 hour While the diagnostic scope of practice for the best case may have been 1, for the worst case, given the complexity of interpretation of the neurologic and eye exam with complicated VZV, the scope of practice is 5 (experienced procedure trained generalist attending). 6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 6

### Treatment Scope and Resourcing

In the best-case scenario, symptom management include valacyclovir, cool compresses/wet dressings, and topical moisturizers/lotions like calamine may be necessary. Tylenol or NSAIDS can be used for pain. In the worst case, oral steroid tapers, neurologic medications such as gabapentin, pregabalin, or topical lidocaine can be used, and an ultrasound-guided stellate ganglion nerve block can be performed for facial pain if the reactivation occurs there. Additionally, oral narcotics can be used for pain if needed in addition to the Tylenol and NSAIDs. However, other anticonvulsants, antidepressants, topical capsaicin, botulinum toxin, intrathecal blocks, electronic neuromodulation (TENS, PNS, SCS), and radiofrequency are unlikely to be possible during spaceflight. Supportive medications beyond valacyclovir for VZV ophthalmicus are covered under ICL 49 – eye irritation.

### Communications and Support Needs

While real-time video and audio loop communications are desired for diagnosis and treatment of the worst-case scenario where consultation with ground specialists can be helpful for facilitating treatment and healing was considered necessary given the limited diagnostic and treatment capabilities in-flight.

### IMM CLIFF RECONCILATION COMMENTS

The sources within the previous CLiFF were evaluated and often used unless newer or more robust trials were located. Ultimately, we elected to be more conservative with higher duration maximum estimations and actually lower with RTDC and mortality rates upon reviewing the newest data.

### LIMITATIONS SUMMARY

Limitations are extensively discussed when applicable throughout the CLiFF above, however, some other limitations not specifically addressed include: • Once an episode occurs, the incidence of further cases will likely increase significantly. This is true because HZV is a highly contagious virus and adequate protective gear may not be available on board. Also, once an individual has a case of reactivation, his/her risk of another case increases. • The use of HZV vaccination for those eligible can decrease the risk of infection and affect the incidence calculation. • The composite incidence would predict a case of HZV reactivation within 33 person-years of spaceflight. There have been no reports of a case in nearly 50 person-years to date. • The worst case includes many of the complications from HZV, but not all of them (e.g., encephalitis). Each of these complications are unique and have different durations. This made defining an “average” worst case problematic. 6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 7

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

| Worst | 664 |  |  |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 664 | 113 | 89 |  | 145 |  |  |  |  |
| --- | ------- | --- | --- | --- | --- | --- | --- | --- | --- |

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

| Best |  |  |  |  | 34 | 211 245 | 3763 | 0.0651076 | 6.51076 |
| ---- | --- | --- | --- | --- | --- | ------- | ---- | --------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  |  | 34 | 211 1041 | 3763 | 0.276641 | 27.6641 |
| ---- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  |  |  | 34 | 211 1041 | 3763 | 0.276641 | 27.6641 |
| --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  |  |  | 34 | 211 1611 | 3763 | 0.428116 | 42.8116 |
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

6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 8

Total Human

|  | Translation & | Total Tasks |  |  |
| --- | ------------- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | ---------------------- | ------------- | -------- | --- |

(microgravity) Condition Tasks Full Mission Treated Best

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 |  | 211 1007 | 3763 0.267606 | 26.7606 |
| --- | --- | -------- | ------------- | ------- |

Case (UTWC) 6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 9

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

6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 10

## REFERENCES

Reference Reyes, D. P., et al. (2017). "Clinical Herpes Zoster in Antarctica as a Model for Spaceflight." Aerosp Med Hum Perform 88(8): 784-788.

Singh, G. K., et al. (2018). "Is High Altitude a Risk Factor in Development of Herpes Zoster?" High Alt Med Biol 19(3): 244-248.

Mehta, S. K. and D. L. Pierson (2007). "Reactivation of latent herpes viruses in cosmonauts during a Soyuz taxi mission." Microgravity Science and Technology 19(5-6): 215-218. Johnson BH, Palmer L, Gatwood J, Lenhart G, Kawai K, Acosta CJ. Annual incidence rates of herpes zoster among an immunocompetent population in the United States. BMC Infect Dis. 2015;15:502.

Drolet M., et al. 2010. Predictors of postherpetic neuralgia among patients with herpes zoster: a prospective study. J. Pain 11:1211–1221 Rooney B, Crucian B, Pierson D, et al. Herpes Virus Reactivation in Astronauts During Spaceflight and its Application on Earth. Front Microbiol.

2019. https://doi.org/10.3389/fmicb.2019.00016

Leung J, Harpaz R, Molinari NA, Jumaan A, Zhou F. Herpes zoster incidence among insured persons in the United States, 1993-2006: evaluation of impact of varicella vaccination external icon. Clinical Infectious Diseases. 2011;52(3):332-340.

Kawai K, Yawn B, Wollan P, Harpaz R. Increasing Incidence of Herpes Zoster Over 60-year Period From a Population-based Study. Clinical Infectious Disease. 2016;63(2): 221-226.

Kawai K, et al. Systematic review of incidence and complications of herpes zoster: towards a global perspective. BMJ Open. 2014; 4(6): e004833.

Rowbatham M et al. Gabapentin for the treatment of postherpetic neuralgia: a randomized controlled trial. JAMA 1998; 280:1837.

Kong CL et al. Incidence rate of herpes zoster ophtalmicus: a retrospective cohort study from 1994 through 2018.

Paparatti U et al. Herpes zoster and its complications in Italy: an observational sudy. J Infect. 1999; 38(2):116-20.

Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):ITC19-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718. Huff JC, Bean B, Balfour HH Jr, Laskin OL, Connor JD, Corey L, Bryson YJ, McGuirt P. Therapy of herpes zoster with oral acyclovir. Am J Med. 1988 Aug 29;85(2A):84-9. PMID: 3044099.

Rimland D, Moanna A. Increasing incidence of herpes zoster among Veterans. Clin Infect Dis. 2010 Apr 1;50(7):1000-5. doi: 10.1086/651078.

- PMID: 20178416.

Wood MJ, Ogan PH, McKendrick MW, Care CD, McGill JI, Webb EM. Efficacy of oral acyclovir treatment of acute herpes zoster. Am J Med. 1988 Aug 29;85(2A):79-83. PMID: 3044098. Wood M, Kay R, Dworkin R, Soong S-J, Whitley R. Oral acyclovir therapy accelerates pain resolution in patients with herpes zoster: a meta- analysis of placebo-controlled trials. Clinical Infectious Diseases. 1996;22(2):341-347.

Hasbun R, Rosenthal N, Balada-Llasat JM, Chung J, Duff S, Bozzette S, Zimmer L, Ginocchio CC. Epidemiology of Meningitis and Encephalitis in the United States, 2011-2014. Clin Infect Dis. 2017 Aug 1;65(3):359-363. doi: 10.1093/cid/cix319. PMID: 28419350.

Schmidt SA, Kahlert J, Vestergaard M, Schønheyder HC, Sørensen HT. Hospital-based herpes zoster diagnoses in Denmark: rate, patient characteristics, and all-cause mortality. BMC Infect Dis. 2016 Mar 1;16:99. doi: 10.1186/s12879-016-1369-6. PMID: 26932311; PMCID: PMC4773995. Bouhassira D et al. Patient perspective on herpes zoster and its complications: an observational prospective study in patients aged over 50 years in general practice. Pain. 2012 Feb; 153(2):342-349.

Helgason, S., Petursson, G., Gudmundsson, S., & Sigurdsson, J. A. (2000). Prevalence of postherpetic neuralgia after a first episode of herpes zoster: prospective study with long term follow up. BMJ (Clinical research ed.), 321(7264), 794-796. https://doi.org/10.1136/bmj.321.7264.794 Schuster, A. K., Harder, B. C., Schlichtenbrede, F. C., Jarczok, M. N., & Tesarz, J. (2016). Valacyclovir versus acyclovir for the treatment of herpes zoster ophthalmicus in immunocompetent patients. Cochrane Database Syst Rev, 11(11), Cd011503. https://doi.org/10.1002/14651858.CD011503.pub2

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 11

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

6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 12

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

6/15/2023 1:49:43 PM ICL68_Herpes Zoster Reactivation (Shingles) Cliff page: 13

---

## Source metadata

```yaml
source_filename: "herpes-zoster-reactivation-shingles-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Infectious Disease/CliFF 119"
source_url: "https://drive.google.com/file/d/1SLE4lR14pHZNhe-nKkGURooS4AXql5k5/view"
source_drive_id: "1SLE4lR14pHZNhe-nKkGURooS4AXql5k5"
source_sha256: a62f60d0910dbb520401e86da33601dda3de589f163e17d69bfd2cdd91a51fdd
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
