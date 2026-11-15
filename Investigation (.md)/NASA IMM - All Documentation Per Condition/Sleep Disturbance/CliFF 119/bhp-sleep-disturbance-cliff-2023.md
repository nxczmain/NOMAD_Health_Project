# Bhp Sleep Disturbance CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1a2UdLpjjn4jiLDLGy5pLIUtr0oh42rb7/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Sleep Disturbance/CliFF 119

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

ICL18_Bhp - Sleep Disturbance Sleep disturbance relates to sleep disorders that occur during spaceflight, affecting the number of hours of sleep, sleep-onset latency, quality of sleep and circadian rhythm, resulting in less than 8 hours of sleep. Sleep disturbance occurs after the first 5 days of spaceflight, not related to space adaptation. Sleep disturbance is a common condition, contributed to by noisy environments, shift work, workload and crew motivation resulting in chronic sleep debt. This is treated with non-benzodiazepine hypnotics and melatonin (Barratt et al., 2019).

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

The incidence rate was derived from two LSAH data gathering events (Walton, 2010; Saile et. al, 2017). Unfortunately, the authors of this CLiFF did not have direct access to the data from those LSAH events. Consequently, information was taken detailing these events from the previous IMM CLiFF entitled "Sleep Disorder.” Per the prior CLiFF: “Source of incidence data is a compilation of the available in flight medical events (Walton, 2010). Added 100 new medical events and 18.17 person years based on the real world system’s incidence data (Saile, 2017). Updated the person- years based on the revised real world system integrated incidence data. The integrated person years changed from 18.17 to 18.13 so the conditions person years changed from 45.54 to 45.49 (Saile, 2017). Duplicate was found in the ISS Real World System events thus 1 ISS event was removed.” At the time of this CLIFF completion, a repeat LSAH data gathering event was not possible and missions past 2017 are not represented.

Antonsen et al. (2017) was rated less highly than the data in the previous IMM CLiFF as the data in Table 1 could not be adequately reconciled with this specific condition’s definition. For example, Table 1 reports 22 cases of “sleep” in several categories: “disruption,” “hypersomnia” and “insomnia.” Unfortunately this table does not distinguish between space adaptation induced sleep disorders versus late-onset sleep disorders.

Table 2 does make this distinction. Of note, it was observed that in the Antonsen et al. paper Table 1 was mislabeled as 'ISS through Exp 40' when

it should read ' ISS expeditions 9 and 14 through 40'. Barger et al. (2014) conducted a prospective, observational study of crew members assigned to Space Transportation System shuttle flights between July 12, 2001, and July 21, 2011, or assigned to International Space Station (ISS) expeditions between Sept 18, 2006, and March 16, 2011. Data from over 78 astronauts demonstrated that crew members obtained significantly less sleep preflight and inflight than postflight. Over 78% of crew members did take a dose of sleep -promoting medication. This source was downrated from others as it was not as comprehensive as the LSAH pulls nor did it differentiate between microgravity-induced sleep disturbance and that thought to be attributed to space adaptation. In a summary report of research conducted up to 2015 (Evans-Flynn et al.), NASA reported that on average astronauts obtained 6 hours daily of sleep, which deviated from current recommendations by the National Sleep Foundation. This document did provide a review of studies (Frost et al.,1976 and Santy et al., 1988 among others) that had been conducted to-date, but no meta- analysis or statistical analysis were completed on the combined reports.

### ANALOG LITERATURE

Basner et al. (2013) examined sleep patterns in a high-fidelity ground simulation of a Mars mission. Four of six participants experienced sleep disruption measured by wrist actigraphy. Further, one participant experienced an increase in the 24 hour circadian rhythm to 25 hours over the course of the experiment.

### TERRESTRIAL LITERATURE

Morin et al. (2011) estimated the prevalence of insomnia symptoms and insomnia syndrome in Canada. Data was procured from telephone questionnaires. 40.2% of participants had at least one insomnia symptom while 13.4% met the criteria for insomnia syndrome (3 or more nights of insomnia a week for at least a month, with daytime impairment). Morphy et al. (2007) determined the prevalence of insomnia in the United Kingdom from questionnaires distributed in primary care practices. 37% of participants possessed insomnia.

### OVERALL INCIDENCE SUMMARY

6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 1

## INCIDENCE

5.119 mean, sd 0.3378

### INCIDENCE SUMMARY

The Bayesian posterior distribution given the spaceflight data (233 events over 45.49 person-years) under an uninformative prior is Gamma(shape=229.64, rate=44.86) with mean 5.119 and SD 0.3378. Evidence – Spaceflight • LSAH data requests to IMM 233 events (133 in Walton and 100 in Saile) over 45.49 person-years. IR: 5.122 (95%CI: 4.495, 5.812).

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 5.11904 SD 0.337804 Gamma (Shape): 229.64 (Rate): 44.86 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Walton, 2010 Spaceflight 4 Saile et al., 2017 Spaceflight 4 Antonsen et al., 2017 Spaceflight 3 Barger et al., 2014 Spaceflight 2 Evans-Flynn et al., 2015 Spaceflight 2 Basner et al., 2013 Analog 2 Morin et al., 2011 Terrestrial 1 Morphy et al., 2007 Terrestrial 1 Spaceflight incidence data was rated the highest as there was an appropriate sample size that occurred in space. Analog and terrestrial studies did not accurately reflect the highly screened crewmembers or the spaceflight environmental conditions. Further, there was concern that analog and terrestrial studies would exert an overwhelming influence on the final incidence distribution given their large number of poorly representative subjects. 6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 2

6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

An earth sleep baseline may be obtained for long duration missions. A cognitive assessment measuring memory, attention reasoning and spatial processing is performed for every crewmember participating in missions greater than 30 days. A behavior observation of training is also required in two preflight training sessions to provide data about individual behavior and crew interactions. An assessment of crew flight readiness is done during the preflight psychiatric/psychologic status check which occurs at both L-240/180 and L-90/30 days. Astronauts may undergo time-shifting during preflight.

### BEST CASE SCENARIO DEFINITION

Transient, mild to moderately disturbed sleep (after day 5 of space flight) caused by but not limited to: environmental factors, sleep shifting, poor sleep hygiene and/or exhaustion, that is effectively treated with appropriate crew scheduling/sleep- shifting, sleep aids or behavioral health interventions.

### WORSE CASE SCENARIO DEFINITION

Sleep-Wake Disorders (after day 5 of spaceflight) such as Insomnia Disorder or Circadian Rhythm Sleep-Wake Disorders that are severe or refractory to treatment with appropriate crew scheduling/sleep-shifting, sleep aids and behavioral health interventions.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

BHP - Insomnia BHP - Circadian Rhythm-Sleep Wake Disorders

### BEST CASE/WORST CASE PROBABILITY COMMENTS

- Per the previous CLiFF effort: “There were 98 events in the Real World System data. In this data set there were 2 WC so empirical data is being

used to determine BC/WC percentages. Therefore, it is calculated that 98% (96/98) of cases of sleep disorders will be best case and 2% (2/98) of cases of sleep disorders will be worst case (Saile L., 2017). From CHS corrections of translation of incidence and best/worst case numbers, the total number of events were 233, of which 231 were best case. (There was 1 worst case event in ISS and 1 worst case event in STS). Using empirical data, as above, the best case is calculated as 99% (231/233) and the worst case as 1% (2/233).” Analog and terrestrial studies estimated the worst-case percentage to be larger than what was found in spaceflight data. For example, in the Mars500 simulation (Basner et al., 2013), the worst-case represented 16.7% of cases (=1/6).

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Walton, 2010 Spaceflight 4 Saile et al., 2017 Spaceflight 4 Basner et al., 2013 Analog 2 Since the worst-case has occurred in spaceflight, spaceflight data was ranked more highly than the single low-powered analog study. 6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best 5.119 mean, 99 - 99 100 0.65 14.5628 24 72 0 0 0 0 0 Case (TBC) sd 0.3378 Treated Worst 1 - 1 100 0.64996 17.5259 24 2920 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.65 29.1257 24 72 29.1257 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.64996 35.0518 24 2920 35.0518 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

Improvement of sleep disorders can involve non-pharmacological interventions, including light-dark cycles, exercise and modifying sleep work shifts . Medications are also available and widely used to improve sleep (Barratt et al., 2019). RTDC surrogate was not included for this condition, as based on the definitions of the conTraingirl11!dition, RTDC is not expected.

TREATED BEST CASE (TBC) SCENARIO COMMENTS In the best-case scenario, duration is expected to be at least one night (a 24-hour period) at the lower range. Although there are several prospective sleep-studies of participants in spaceflight (i.e. Barger et al., 2014), the duration for the best case (and worst-case) scenario is not directly reported. In Flynn-Evans et al. (2016), circadian misalignment is reported for 19% of inflight sleep episodes. In this prospective study of 21 astronauts, the average days in flight were 155. Consequently, it was estimated that circadian misalignment was present for at least 29.5 days, or 708 hours (= 0.19 * 155). The authors do report that when sleep schedules were misaligned, astronauts were more likely to use medications, however further information regarding if each episode received ‘a treatment’ is limited. RTDC and LOCL are not expected for this condition.

TREATED WORST CASE SCENARIO (TWC) COMMENTS In the worst-case scenario, the lower range of duration is still expected to be one night, if severe symptoms are experienced. Unfortunately, no data was available regarding the upper-bound for duration using spaceflight studies. In a NASA Analog, Basner et al. (2013) reported that after an initial period of 3-4 months, sleep-time increased in most crewmembers. Consequently, 4 months (2920 hours) was initially estimated as the upper-bound for this condition. However, according to BHP SME, Charles Dukes, "NASA astronauts have been ground tested with the hypnotics for tolerability, effectiveness and emergent awakening utilizing PVT to determine impairment upon awakening. Additionally, this allows a crewmember to have a medication in their med kit which they know they can tolerate without impairment.

Many of the astronauts do utilize the hypnotics and we do not follow the FAA guidelines; we utilize our own guidelines based on our phase one hypnotic medication study which is where we developed our ground medication testing protocol." Therefore, the max CP2 duration for TWC was shortened to 3 days (72 hours). RTDC and LOCL is not expected.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS There was a lack of systematic studies available to determine duration for the untreated best case. The untreated best case would be expected to last no less than the treated best case. RTDC and LOCL are not expected for this condition.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS There was a lack of systematic studies available to determine duration for the untreated worst case. The untreated worst case would be expected to last no less than the treated worst case and accordingly the same range for duration used.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Flynn-Evans et al., 2016 spaceflight Basner et al., 2014 spaceflight 2 Basner et al., 2013 spaceflight Although there were several studies demonstrating that spaceflight decreases total sleep-cycle time (i.e. from eight to six hours), there was a lack of data that detailed the duration circadian rhythm disorders were expected to persist in microgravity. Duration for the best- and worst-case scenarios were estimated from what little was reported in these studies. 6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 6

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

None None 4 RTDC was not expected for this condition TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

None None 4 LOCL was not expected for this condition.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

- Capabilities and Resourcing Scope Overview Worst Case Definition: Sleep-Wake Disorders (after day 5 of spaceflight) such as Insomnia Disorder

or Circadian Rhythm Sleep-Wake Disorders that are severe or refractory to treatment with appropriate crew scheduling/sleep-shifting, sleep aids and behavioral health interventions. Best Case Definition: Transient, mild to moderately disturbed sleep (after day 5 of space flight) caused by but not limited to: environmental factors, sleep shifting, poor sleep hygiene and/or exhaustion, that is effectively treated with appropriate crew scheduling/sleep-shifting, sleep aids or behavioral health interventions. Diagnostic Scope and Resourcing In the best-case scenario, diagnosis is based on a focused psychiatric history, psychiatric review of systems, mental status exam and assessment and plan. Additionally, vital signs and a cardiopulmonary exam should be conducted For behavioral health conditions ground communication and further higher-level psychiatric consultation should occur for diagnostic clarification. In the worst-case scenario, diagnosis is based on a focused psychiatric history, psychiatric review of systems, mental status exam and assessment and plan. Additionally, vital signs and a cardiopulmonary exam should be conducted For behavioral health conditions ground communication and further higher-level psychiatric consultation should occur for diagnostic clarification.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.65 (39 min). 1. Obtain Vital Signs 2.

Take a proper history of the patient and psychiatric ROS 3. Perform a cardiopulmonary exam 4. Perform a mental status exam 5. Interpret the history, physical exam and MSE 6. Obtain a psychiatry consult 7. Establish ground communication CP1 WC (Treated or Untreated): 0.64996 (39 min) 1. Obtain Vital Signs 2. Take a proper history of the patient and psychiatric ROS 3. Perform a cardiopulmonary exam 4. Perform a mental status exam 5. Interpret the history, physical exam and MSE 6. Obtain a psychiatry consult 7. Establish ground communication The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a four, or an intern level. Treatment Scope and Resourcing Most best-case terrestrial populations resolve with ongoing brief psychotherapeutic interventions and do not require ongoing medication management. Cognitive behavioral therapy for insomnia is an effective psychotherapeutic treatment modality for sleep disturbances on orbit and in the BC should be provided on a weekly basis for one month and be continued bi-weekly thereafter for the duration of the mission. Furthermore, considering the austere environment and communication barriers that exist on long duration missions it is recommended that there be on board private psychological conferences for the direct administration of psychotherapeutic treatment.

Chronobiologic and antihistaminic agents can be helpful for circadian desynchrony. Antihistaminic agents such as diphenhydramine are second line agents for insomnia should be included for their positive soporific effects for sleep initiation. The cognitive effects of fatigue related to chronic insomnia would outweigh the cognitive effects related to temporary use of diphenhydramine from a risk benefit perspective and would justify its inclusion. As with any of the sleep medications performance vigilance testing would be performed to assess for any impairments in performance caused by medication. For critical mission events stimulants can be employed as effective fatigue countermeasures. Other measures such as crew rest/day off should be implemented as necessary. Additionally, non-pharmacologic sleep aids which are part of fatigue management services include: Blue Light Blocking Glasses, Adjustments of the solid state lighting system, sleep masks, ear plugs (when appropriate), Oura Ring (wearable device that provides objective sleep data), performance vigilance testing, sleep hygiene, naps, sleep shift schedule. The CES devices can be helpful for symptom reduction, are safe, require a minimal footprint and can be self-administered. However, justification as a primary treatment modality over psychotherapy remains controversial. However, they should be considered as an adjunct treatment modality along with therapy. Terrestrially, worst case conditions generally require a combination of medications, fatigue management countermeasures and psychotherapy. Cognitive behavioral therapy for insomnia has demonstrated to be an effective psychotherapeutic treatment modality for insomnia and in the WC should be provided on a weekly basis for three months and be continued bi-weekly thereafter for the duration of the mission.

Furthermore, considering the austere environment and communication barriers that exist on long duration missions it is recommended that there be on board private psychological conferences for the direct administration of psychotherapeutic treatment. As above chronobiologic and antihistaminic agents can be helpful for circadian desynchrony. Antihistaminic agents such as diphenhydramine are second line agents for insomnia should be included for their positive soporific effects. The cognitive effects of fatigue related to chronic insomnia would outweigh the cognitive effects related to temporary use of diphenhydramine from a risk benefit perspective and would justify its inclusion. As with any of the sleep medications performance vigilance testing would be performed to assess for any impairments in performance caused by medication. In WC sleep disturbances other pharmacologic agents such as ground tested hypnotic agents as well as tetracyclic antidepressants with antihistaminic effects have shown to be effective and should be utilized when necessary. Other measures such as crew rest/day off should be implemented as necessary.

Additionally, non-pharmacologic sleep aids which are part of fatigue management services include: Blue Light Blocking Glasses, Adjustments of the solid state lighting system, sleep masks, ear plugs (when appropriate), Oura Ring (wearable device that provides objective sleep data), performance vigilance testing, sleep hygiene, naps, sleep shift schedule. As above the CES devices can be helpful for symptom reduction, are safe, require a minimal footprint and can be self-administered. However, justification as a primary treatment modality over psychotherapy remains controversial. However, they should be considered as an adjunct treatment modality along with therapy. Communications and Support Needs Sleep 6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 7

disturbances are common in spaceflight and can be managed with coordination between ground and the CMO. In the BC it is recommended that ground communication and a psychiatric consult be established for diagnostic clarification and medication/psychotherapeutic treatment guidance.

Further support would include ongoing onboard private psychological conferences to provide direct psychotherapeutic care for the duration of the mission. Following suit, for WC, ground communication and a psychiatric consult should be established for diagnosis, medication management and psychotherapeutic treatment guidance. Further support would include ongoing onboard private psychological conferences to provide direct psychotherapeutic care for the duration of the mission. Additionally, increased fatigue management countermeasures though the BHP fatigue management services are part of the overall supportive care for this condition. REFERENCES Hales, R., Yudofsky, S., Roberts, L.W. (Eds.). (2014).

- The American Psychiatric Publishing: Textbook Of Psychiatry, Sixth Edition. American Psychiatric Publishing. CES Devices: 1. Alpha Stim:

www.alphastim.com 2. FisherWallace Device: www.fisherwallace.com Wotring VE (2015) Medication use by U.S. crewmembers on the International Space Station. FASEB J Dinges DF, Basner M, Ecker AJ, Baskin P, Johnston SL. Effects of zolpidem and zaleplon on cognitive performance after emergent morning awakenings at Tmax: a randomized placebo-controlled trial. Sleep. 2019;42(3). https://doi.org/10.1093/sleep/zsy258. John A.

Caldwell, Ph.D. and J. Lynn Caldwell, Ph.D Applied Research on the Operational Use of Hypnotics and Stimulants Aerospace Medicine Grand Rounds UTMB/NASA-JSC. January 2. 5, 2005 Psychopharmacology. 2000 Jun;150(3):272-82. Caldwell et al. Provigil Simulator Study with Helicopter Pilots Hilditch CJ, Centofanti SA, Dorrian J, Banks S (2016) A 30-Minute, But Not a 10-Minute Nighttime Nap is Associated with Sleep Inertia. Sleep 39(3):675-685 Van Dongen HP, Price NJ, Mullington JM, Szuba MP, Kapoor SC, Dinges DF (2001) Caffeine eliminates psychomotor vigilance deficits from sleep inertia. Sleep 24(7):813-9 Driskell J, Mullen B The efficacy of naps as a fatigue countermeasure: a meta-analytic integration Hum Factors. Summer 2005;47(2):360-77. doi: 10.1518/0018720054679498 Guarana, C. L., Barnes, C. M., & Ong, W. J. (2021). The effects of blue-light filtration on sleep and work outcomes. Journal of Applied Psychology, 106(5), 784–796. https://doi.org/10.1037/apl0000806 Brainard G, Coyle W, Ayers M, et al. (2013) Solid-state lighting for the International Space Station: tests of visual performance and melatonin regulation. Acta Astronautica 92(1):21-8 Validity and Sensitivity of a Brief Psychomotor Vigilance Test (PVT-B) to Total and Partial Sleep Deprivation Mathias Basner, MD, PhD, MSc,1 Daniel Mollicone, PhD,1,2 and David F. Dinges, PhD1 Acta Astronaut. 2011 Dec 1; 69(11-12): 949–

959. doi: 10.1016/j.actaastro.2011.07.015 JAMA, June 28, 2006-Vol 295, No 24, Table 1 Principles in treatment modules included cognitive

behavioral therapy condition Oura Ring: https://ouraring.com/

### IMM CLIFF RECONCILATION COMMENTS

The predecessor to this CLiFF was entitled “Sleep Disorder.” In this effort, this condition was grouped with BHP pathologies. Incidence data from the LSAH pulls was reviewed with the help of a biostatistician, but ultimately it did not change from the previous effort. Durations were revised using data from more recent studies.

### LIMITATIONS SUMMARY

- There was a lack of clear delineation between the best- and worst-case scenarios • Many spaceflight studies did not differentiate between

insomnia caused by space adaptation and inherent microgravity effects • Several assumptions needed to be made regarding the untreated cases given lack of available studies. • The authors of this CliFF did not have access to the original LSAH data and thus there was an implied dependence on already published sources. 6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  | Cardio- |  |  |  |
| --- | ----------------------- | --- | --- | --- | ------- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best | 664 |  | 89 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 664 |  | 89 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 223 664 |  | 89 |  |  |  |  |  |
| ----- | ------- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 664 |  | 89 |  |  |  |  |  |
| --- | ------- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  | Translation & | Total Tasks |  |  |  |
| --- | --- | --- | --- | ------------- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity Standing (g) |  | Equipment Ops | Category |  |  |
| --- | ----- | --- | ---------------------- | -------------- | ------------- | -------- | --- | --- |
|  |  |  |  | (microgravity) | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best | 132 |  |  |  | 211 1096 | 3763 | 0.291257 | 29.1257 |
| ---- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  |  | 211 1096 | 3763 | 0.291257 | 29.1257 |
| ---- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  |  |  | 211 1319 | 3763 | 0.350518 | 35.0518 |
| --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  |  |  | 211 1319 | 3763 | 0.350518 | 35.0518 |
| --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  | Cardio- |  |  |  |
| --- | ----------------------- | -------------- | --------------- | ------- | --------- | ----- | --- | --- |
|  |  | Communications | personal Vision | Hearing | Dentition | GI GU |  |  |
|  | Simple Complex |  |  |  | pulmonary |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  | 664 |  | 89 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 664 |  | 89 |  |  |  |  |  |
| --- | ------- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | -------------- | --- | -------- |

6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 9

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

| 132 |  | 211 1096 | 3763 0.291257 | 29.1257 |
| --- | --- | -------- | ------------- | ------- |

Case (UTBC) Treated Worst

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 |  | 211 1319 | 3763 0.350518 | 35.0518 |
| --- | --- | -------- | ------------- | ------- |

Case (UTWC) 6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 10

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

CP2: No comment. CP3: No comment

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

6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 11

## REFERENCES

Reference

1. Antonsen, Erik, Tina Bayuse, Rebecca Blue, Vernie Daniels , Melinda Hailey, Sam Hussey, Eric Kerstman, Mike Krihak, Kara Latorella, Jennifer

Mindock, Jerry Myers, Robert Mulcahy, Rebekah Reed, Davis Reyes, Michelle Urbina, and Marlei Walton. 2017. "Evidence Report: Risk of Adverse Health Outcomes and Decrements in Performance due to In-Flight Medical Conditions." In.

2. Barger, Laura K., Erin E. Flynn-Evans, Alan Kubey, Lorcan Walsh, Joseph M. Ronda, Wei Wang, Kenneth P. Wright, and Charles A. Czeisler.

2014. 'Prevalence of sleep deficiency and use of hypnotic drugs in astronauts before, during, and after spaceflight: an observational study', The

Lancet Neurology, 13: 904-12.

3. Barratt, Michael R., Ellen S. Baker, Sam L. Pool, and SpringerLink (Online service). 2019. "Principles of Clinical Medicine for Space Flight." In,

XVIII, 936 p. 362 illus., 268 illus. in color. New York, NY: Springer New York : Imprint: Springer,.

4. Basner, M., D. F. Dinges, D. Mollicone, A. Ecker, C. W. Jones, E. C. Hyder, A. Di Antonio, I. Savelev, K. Kan, N. Goel, B. V. Morukov, and J. P.

Sutton. 2013. 'Mars 520-d mission simulation reveals protracted crew hypokinesis and alterations of sleep duration and timing', Proc Natl Acad Sci U S A, 110: 2635-40.

5. Basner, Mathias, David F. Dinges, Daniel J. Mollicone, Igor Savelev, Adrian J. Ecker, Adrian Di Antonio, Christopher W. Jones, Eric C. Hyder,

Kevin Kan, Boris V. Morukov, and Jeffrey P. Sutton. 2014. 'Psychological and Behavioral Changes during Confinement in a 520-Day Simulated Interplanetary Mission to Mars', PLOS ONE, 9: e93298.

6. Evans-Flynn E, Gregory K, Arsintescu L, Whitmire A, Leveton L, and Vessey W. 2015. "Risk of Performance Decrements and Adverse Health

Outcomes Resulting from Sleep Loss, Circadian Desynchronization, and Work overload." In. Houston: Johnson Space Center.

7. Flynn-Evans, Erin E., Laura K. Barger, Alan A. Kubey, Jason P. Sullivan, and Charles A. Czeisler. 2016. 'Circadian misalignment affects sleep

and medication use before and during spaceflight', npj Microgravity, 2: 15019.

8. Frost, J. D., Jr., W. H. Shumate, J. G. Salamy, and C. R. Booher. 1976. 'Sleep monitoring: the second manned Skylab mission', Aviat Space

Environ Med, 47: 372-82.

9. Morin, C. M., M. LeBlanc, L. Bélanger, H. Ivers, C. Mérette, and J. Savard. 2011. 'Prevalence of insomnia and its treatment in Canada', Can J

Psychiatry, 56: 540-8.

10. Morphy, Hannah, Kate M. Dunn, Martyn Lewis, Helen F. Boardman, and Peter R. Croft. 2007. 'Epidemiology of Insomnia: a Longitudinal

Study in a UK Population', Sleep, 30: 274-80.

11. Saile L., Boley L., Kerstman E. 2017. 'Integration RWS ISS STS Observed Incidence V2.'.

12. Santy, P. A., H. Kapanka, J. R. Davis, and D. F. Stewart. 1988. 'Analysis of sleep on Shuttle missions', Aviat Space Environ Med, 59: 1094-7.

13. Walton M, Kerstman E. 2010. ' IMM In-flight Compilation v20100414_Incidence_calculation'.

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

CP1 Clinical Phase 1 6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 12

CP2 Clinical Phase 2 CP3 Clinical Phase 3

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

### PFCL Proposed Future Conditions List

### PPE Personal Protective Equipment

6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 13

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

6/8/2023 12:00:55 PM ICL18_Bhp - Sleep Disturbance Cliff page: 14

---

## Source metadata

```yaml
source_filename: "bhp-sleep-disturbance-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Sleep Disturbance/CliFF 119"
source_url: "https://drive.google.com/file/d/1a2UdLpjjn4jiLDLGy5pLIUtr0oh42rb7/view"
source_drive_id: "1a2UdLpjjn4jiLDLGy5pLIUtr0oh42rb7"
source_sha256: 81309973609b2de27509e69e5a2ab9e281a9947b6f910d6a7b36f0e4df6e33b4
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
