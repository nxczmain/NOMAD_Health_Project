# Bhp Grief Reaction CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1gVlyJwj5XmdzTr-rA1bFqmgy0yYFm_N1/view) · **15 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Behavioral or Mental Health Alterations/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL16_Bhp - Grief Reaction Grief can be experienced in response to any significant loss, but most profoundly after the death of a close family member. In space, death aboard the spacecraft would have profound effect on the crew, potentially leading to grief, but the more likely scenario would be death of a terrestrial family member while the crewmember is in flight. Acute grief reaction can cause emotional and somatic distress and impaired function, but would generally not require treatment (Shear, 2017). The progression of grief determines whether the reaction is considered pathological. The difference between normal grief and prolonged grief disorder (or complicated grief) is marked by the prolonged functional debilitating symptoms experienced in grief disorder (Prigerson, 2021). When prolonged grief disorder is diagnosed or suspected, treatment is usually necessary to decrease morbidity and mortality (Mancini, 2012). The representations of grief can also differ dramatically between individuals and commonly evolve with time. These symptoms could range from intense sadness and insomnia to feelings of guilt, increased hostility, and social withdrawal (Lindemann, 1979). Although treatment such as pharmacotherapy is generally not required for acute grief reaction (Mancini, 2012), in complicated grief reaction the use of psychotherapy with antidepressant can reduce suicidality from 18% incidence to 3.5% incidence (Shear 2016).

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

There are several studies documenting behavioral health pathologies during spaceflight. However, there is no specific data for grief reaction found in current literature. (Boyd, 2007) provided BHP data by sending out a questionnaire to spacecrew members on the ISS. These questions, unfortunately, did not include anything specific to grief. Grief is highly associated with loss due to death. For spacecrew members, death of loved ones on earth and death of other spacecrew members will be the main sources of loss due to death. The understanding of mortality among astronauts is therefore important in incidence calculation. Several studies look at the mortality of astronauts. These studies agree that astronauts are at greatly reduced risk of all-cause mortality compared to the general population (Reynolds, 2018; Hamm, 2000). Occupational-related accidental death incidence is, however, reported to be greater among astronauts (Hamm, 2000). (Reynolds, 2018) reported a crude mortality of 9.53 deaths per 1000 person-years among astronauts and cosmonauts. They also calculated a standardized mortality ratio (SMR) of 53% comparing all-cause mortality between astronauts and the general population. Nonetheless, there has not been reported deaths of astronauts during past missions with survivors. For this reason, these deaths were not likely to had led to significant grief for other astronauts (at least not during missions). Therefore, mortality data of astronauts is not ideal for grief reaction incidence calculation.

### ANALOG LITERATURE

(Tansey, 1979) is an analysis of health data collected from 10 years of Polaris submarine patrols. They reported 4 cases of situational reaction (which is used as proxy for grief reaction) over 4410,000 man-days from 1968 to 1973. Submarine personnel is a population that is probably the most similar to astronauts in space in terms of environment and also crew resilience. This data therefore contributed to the main calculation of incidence. (Dooley, 2019) stated that the prevalence of grief among military personnel is unknown, but the risks are clearly substantial. The traumatic nature of military mortality undoubtedly results in higher incidence of grief reaction along with PTSD among this analog population compared to the general population and spacecrew members (Delaney, 2017) . Several studies reported the high prevalence of complicated grief among service members who experienced significant loss seeking mental health care, but did not provide overall incidence data on grief reaction (Delaney,2017; Charney, 2018).

### TERRESTRIAL LITERATURE

About 2-3% of people worldwide experience complicated grief (or prolonged grief disorder) (Shear, 2015). It has also been estimated that approximately 7-10% of those bereaved will develop prolonged grief disorder (Shear, 2011; Lundorff, 2017). With these data, it can be estimated that worldwide terrestrial prevalence of grief will be roughly around 14-21%. Due to the difficulty in diagnosing or characterizing the highly individualized and culturally-influenced symptoms of grief reaction (Hardy-Bougere, 2008), it is difficult to precisely calculate this incidence. 11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 1

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

1.909E-4 9.576E-5

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate given the Polaris submariners evidence, under an uninformative prior, is Gamma(shape=3.974, rate=20817.94) with mean 1.909E-4 and SD 9.576E-5.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.000190893 SD 9.57582E-05 Gamma (Shape): 3.974 (Rate): 20817.9 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Reynolds, 2018 spaceflight 4 Delaney, et al. 2017 analog 2 Charney, et al. 2018 analog 2 Tansey, 1979 analog 4 Shear, et al. 2011 terrestrial 3 Lundorff, et al. 2017 terrestrial 3 Shear, 2015 terrestrial 3 (Reynolds, 2018) is a review of mortality of space explorers. It provided valuable data on mortality among spacecrew members, helpful for understanding the probability of experiencing grief among spacecrew members compared to the general public, but does not report on astronauts experiencing a grief reaction, therefore only receives a LOC of 3. (Delaney, 2017) and (Charney, 2018) are both studies that sent out 11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 2

questionnaires to military personnel seeking mental health care. They provided data on the incidence of complicated grief among this specific military population. However, this data does not translate into the general military population, therefore only receiving a LOC of 2. (Tansey, 1979) is a health data report from 10 years of Polaris submarine patrols. It provided data on "situational reaction" incidence among submarine personnel during patrols. Although dated, this is an excellent analog population to spacecrew members, with use of "situational reaction" as a surrogate for grief reaction, therefore receiving a LOC of 4. (Shear, 2015) and (Shear, 2011) are both reviews on complicated grief. They provided useful terrestrial data on the prevalence of grief and complicated grief probability, receiving LOC of 3. (Lundorff, 2017) is a meta-analysis looking at prevalence of prolonged grief disorder in adult bereavement. It provided data on complicated grief probability in the terrestrial population, receiving a LOC of 3. 11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Preflight psychiatric/psychological status check and behavioral observation of training are preflight behavioral evaluations that are related to this condition.

### BEST CASE SCENARIO DEFINITION

A grief reaction that resolves within one year without any significant impact on mood, sleep or interpersonal functioning or need for significant intervention. PRN Sleep aids and/or behavioral health intervention, increased behavioral health countermeasures could be used as treatment options.

### WORSE CASE SCENARIO DEFINITION

Persistent or complicated grief that causes significant difficulty to recover from the loss. This condition causes significant distress or decline in areas including but not limited to work performance, sleep, interpersonal dynamics and requires long-term pharmacologic therapy (minimum 6 months) and/or behavioral health intervention.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

BHP - Grief, Complicated

### BEST CASE/WORST CASE PROBABILITY COMMENTS

It has been estimated that approximately 7-10% of those bereaved will develop prolonged grief disorder (Shear, 2011). Given the extremely high resilience in the astronaut population we feel it is appropriate to select 7% as the likelihood of WC. The definition of WC scenario is similar to that of prolonged grief disorder, making this terrestrial data valuable for predicting WC scenario probability. Risk factors of prolonged grief disorder include lack of social support, mood and anxiety disorder, concurrent stressors, multiple important losses, traumatic deaths, etc. (Zisook, 2009; Lobb, 2010). Study by (Delaney, 2017) reported around 65% of military service members who presented to a mental health clinic with experience of loss screened positive for complicated grief. Another similar study by (Charney, 2018) reported 30.4% of those who experienced significant loss experienced complicated grief. These probabilities are understandably much higher than in general public since all of the participants were seeking mental health care at the time of the survey. (Simon, 2017), similarly, reported prevalence of 31.25% of complicated grief among bereaved service members suffering from PTSD. TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Delaney, et al. 2017 analog 3 Charney, et al. 2018 analog 3 Simon, 2017 analog 3 Shear, et al. 2011 terrestrial 3 (Delaney, 2017) did a survey study on military service members at a mental health clinic screening for complicated grief. It provided valuable analog data on the probability of developing complicated grief among those who reported loss. (Charney, 2018) also did a survey on military service members seeking mental health care, providing analog data on complicated grief prevalence among those who experienced significant loss. (Simon, 2017) provided data on probability of complicated grief among service members and veterans with PTSD. (Shear, 2011) is a review of complicated grief. It provided perhaps the most valuable data for WC/BC probability. 11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 1.909E-4 93 - 93 100 0.649967 0 0 4320 0 0 0 0 0 Case (TBC) and SD 9.576E-5 Treated Worst 7 - 7 100 0.649967 29.1257 720 8760 0 9 42 0 4 Case (TWC) Untreated Best N/A N/A N/A 0.649967 0 0 8760 0 0 0 0 0 Case (UTBC) Untreated N/A N/A N/A 0.649967 29.1257 4380 8760 29.1257 9 49 4 18

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

In space, significant loss can result from the loss of loved ones on earth and the loss of a crew member. Due to the high intensity relationship between spacecrew members and the prolonged separation from loved ones on earth, grief reaction can be intensified when spacecrew members experience loss. Behavioral health interventions such as therapy can help one go through the normal process of grief. However, for those suffering from more severe and prolonged symptoms due to grief, cognitive behavioral therapy along with pharmacological treatments such as antidepressants may be necessary to reduce morbidity and mortality. Suicidal Ideation(SI) or worst case incidence refractory to therapy is used as surrogate for RTDC. TREATED BEST CASE (TBC) SCENARIO COMMENTS With this BC scenario definition, those with BC scenarios would be considered those experiencing relatively normal grief reaction. These situations would generally not require pharmacological treatment (Shear, 2017). However, therapy or other behavioral health interventions can aid with going through the process of bereavement, improving the prognosis. Psychotherapy improves grief symptoms in 82.5% of patients (Shear 2016). The use of PRN sleeping aids can also improve quality of life. In treated BC scenarios, with mild symptoms resolving at maximum 6 months (4380 hrs) (Shear 2015), RTDC and LOCL would be highly unlikely.

TREATED WORST CASE SCENARIO (TWC) COMMENTS Interventions such as cognitive-behavioral programs were found to be helpful for those who had high levels of suicidal ideation (Linde, 2017). With adequate treatment, risk of LOCL would be lower than those who did not receive any treatment but (Shear 2011) state minimum duration to be 1 month. Studies reported 9-49% of SI among bereaved individuals (Molina, 2019). Study by (Williams, 2018) reported a suicidal ideation (SI) prevalence of 42% among treatment-seeking survivors of violent loss. (Parkes, 1969) reported 213 deaths out of 4486 widowers (4%) within the first 6 months of experiencing loss. Addition of pharmacotherapy to psychotherapy improves depression symptoms and reduces suicidality from 18% to 3.5% (Shear 2016). However, there is no data found on the difference of mortality between those receiving treatment and those without treatment. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS As mentioned above, treatment is generally unnecessary in BC scenario situations. Without treatment such as behavioral health interventions, it might take longer for these individuals to go through the process of grief. However, due to the self-resolving nature of BC scenarios, RTDC and LOCL would also be unlikely. UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Studies have found increased mortality among grieving individuals. This increase in mortality goes beyond suicidal incidents (Parkes, 1969).

Without treatment, symptoms of complicated grief can be debilitating and lead to unsatisfactory outcomes. Studies reported 9-49% of SI among bereaved individuals (Molina, 2019). Without treatment, SI can be estimated to be as high as 49%. (Parkes, 1969) reported 213 deaths out of 4486 widowers within the first 6 months of experiencing loss. However, they did not specify whether widowers received any treatment. Additionally, this is only a rough estimation as many factors including baseline health and personalities can contribute to the possibility of death. If untreated rate of suicidality can persist at 18% for 20 weeks (Shear 2016).

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Prigerson, et al. 1997 terrestrial 3 Lundorff, et al. 2021 terrestrial (Prigerson, 1997) looked at symptoms of GC at different time points after experiencing loss. (Lundorff, 2021) is a cohort study examining the symptoms of grief at different durations. These studies provide insight and data into how time affects grief reaction, highlighting the long-duration of symptoms in many prolonged grief disorders. This section therefore receives a LOC of 3. 11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 6

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------------- | ----------- | --------- | --- |
| Latham, et al. 2004 | terrestrial |  |  |
| Linde, 2017 | terrestrial |  |  |
| Molina, et al. 2019 | terrestrial |  | 2 |
| Williams, et al. 2018 | terrestrial |  |  |
| Shear, 2016 | terrestrial |  |  |

(Latham, 2004) is a study examining the influence of complicated grief on suicidality among bereaved adults, providing data for risk of suicidality. (Linde, 2017) is a systematic review looking at how group therapy affects grief among those who were bereaved by suicide. It provided data on the reduction of suicidal ideation after intervention, useful for calculating the risk of RTDC. (Williams, 2018) is a study examining the prevalence of suicidal ideation among traumatically bereaved family members. Overall, this section receives a LOC of 2 due to the unknown treatment quality and options during spaceflight. TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------- | ----------- | --------- | --- |
| Parkes, et al. 1969 | terrestrial |  |  |
| Latham, et al. 2004 | terrestrial |  | 2 |
| Kaprio, et al. 1987 | terrestrial |  |  |

(Parkes, 1969) followed a total of 4486 male widowers, and reported increased overall mortality compared to the same age group of married men.

This study provided valuable data for LOCL. (Latham, 2004) is a study examining the influence of complicated grief on suicidality among bereaved adults. It provided data for risk of suicidality, valuable for predicting LOCL probability. (Kaprio, 1987) studied the mortality of widowed persons, reporting data of increased all-cause mortality. Overall, this section receives a LOC of 2 due to the multifactorial nature of grief and high variabilities between people with different backgrounds.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

- Worst Case Definition: Persistent or complicated grief that causes significant difficulty to recover from the loss. This condition causes significant

distress or decline in areas including but not limited to work performance, sleep, interpersonal dynamics and requires long-term pharmacologic therapy (minimum 6 months) and/or behavioral health intervention.

- Best Case Definition: A grief reaction that resolves within one year without any significant impact on mood, sleep or interpersonal functioning or

need for significant intervention. PRN Sleep aids and/or behavioral health intervention, increased behavioral health countermeasures could be used as treatment options.

### Diagnostic Scope and Resourcing

In the best-case scenario, diagnosis is based on a focused psychiatric history, psychiatric review of systems, mental status exam and assessment and plan. Additionally, vital signs and a cardiopulmonary exam should be conducted For behavioral health conditions ground communication and further higher-level psychiatric consultation should occur for diagnostic clarification.

In the worst-case scenario, diagnosis is based on a focused psychiatric history, psychiatric review of systems, mental status exam and assessment and plan. Additionally, vital signs and a cardiopulmonary exam should be conducted For behavioral health conditions ground communication and further higher-level psychiatric consultation should occur for diagnostic clarification.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.6499667 (39 min)

1. Obtain Vital Signs

2. Take a proper history of the patient and psychiatric ROS

3. Perform a cardiopulmonary exam

11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 7

4. Perform a mental status exam

5. Interpret the history, physical exam and MSE

6. Obtain a psychiatry consult

7. Establish ground communication

CP1 WC (Treated or Untreated): 0.6499667 (39 min)

1. Obtain Vital Signs

2. Take a proper history of the patient and psychiatric ROS

3. Perform a cardiopulmonary exam

4. Perform a mental status exam

5. Interpret the history, physical exam and MSE

6. Obtain a psychiatry consult

7. Establish ground communication

The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a four, or an intern level.

### Treatment Scope and Resourcing

Most best-case terrestrial populations resolve with ongoing brief psychotherapeutic interventions and do not require medication management.

Cognitive behavioral therapy is an effective psychotherapeutic treatment modality for Grief reactions and in the BC should be provided on a weekly basis for one month and be continued bi-weekly thereafter for the duration of the mission. Furthermore, considering the austere environment and communication barriers that exist on long duration missions it is recommended that there be on board private psychological conferences for the direct administration of psychotherapeutic treatment.

Other measures such as crew rest/day off should be implemented as necessary.

The CES devices can be helpful for symptom reduction, are safe, require a minimal footprint and can be self-administered. However, justification as a primary treatment modality over psychotherapy remains controversial. However, they should be considered as an adjunct treatment modality along with therapy. Terrestrially, worst case conditions generally do not require medications to treat sub-syndromal depression or anxiety and symptom distress is ameliorated by brief psychotherapy. Cognitive behavioral therapy is an effective psychotherapeutic treatment modality for Grief reactions and in the WC should be provided on a weekly basis for three months and be continued bi-weekly thereafter for the duration of the mission. Furthermore, considering the austere environment and communication barriers that exist on long duration missions it is recommended that there be on board private psychological conferences for the direct administration of psychotherapeutic treatment.

As above the CES devices can be helpful for symptom reduction, are safe, require a minimal footprint and can be self-administered. However, justification as a primary treatment modality over psychotherapy remains controversial. However, they should be considered as an adjunct treatment modality along with therapy.

### Communications and Support Needs

Grief reactions generally are self-limited conditions which often resolve over time with adequate adjustment and coping strategies. In the BC it is recommended that ground communication and a psychiatric consult be established for diagnostic clarification and psychotherapeutic treatment guidance. Further support would include regular onboard private psychological conferences to provide direct psychotherapeutic care for the duration of the mission. Following suit, for WC, ground communication and a psychiatric consult should be established for diagnostic clarification psychotherapeutic treatment guidance. Further support would include frequent onboard private psychological conferences to provide direct psychotherapeutic care for the duration of the mission.

## REFERENCES

Hales, R., Yudofsky, S., Roberts, L.W. (Eds.). (2014). The American Psychiatric Publishing: Textbook Of Psychiatry, Sixth Edition. American Psychiatric Publishing. CES Devices:

1. Alpha Stim: www.alphastim.com

2. FisherWallace Device: www.fisherwallace.com

### IMM CLIFF RECONCILATION COMMENTS

There is no IMM CLiFF for grief reaction

### LIMITATIONS SUMMARY

There is a paucity of literature with spaceflight data of grief reaction and therefore there isn’t strong evidence to support the incidence rate of grief or loss. Terrestrial studies of complicated grief often represent populations that are inappropriate comparison groups with the astronaut population and can vary greatly (age, co-morbid substance, medical and mental health conditions). This can lead to an overestimation of LOCL. Therefore we have used an analog population in submarine patrol given that those crewmembers will be similar in age and resilience levels to space crewmembers. However, the Tansey study using “situational reaction” as a proxy for grief is nonspecific and could be confounded by the presence of other problems (stress, depression after receiving bad news etc.) that could be considered situational in nature. Due to the multifactorial nature of the process of grief after experiencing significant loss, it is also difficult to estimate the probability of spacecrew members developing more 11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 8

serious forms of grief such as prolonged grief disorder. This characteristic of grief reaction thereby makes terrestrial incidence and WC/BC probability data less indicative of spaceflight data. "Worst case incidence refractory to therapy" does not have a clear definition when used in this specific condition. Therefore, using "refractory to therapy" as part of the surrogate for RTDC is not clear, and therefore not tremendously useful in estimating RTDC probability. 11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 9

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------------------- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 664 |  | 89 |  |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 664 |  | 89 |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  | Translation & |  |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity Standing (g) |  | Equipment | Ops |  | Category |  |  |
| --- | ----- | --- | ---------------------- | -------------- | --------- | --- | --------- | -------- | --- | --- |
|  |  |  |  | (microgravity) |  |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (UTBC) Treated Worst

|  | 132 |  |  |  |  | 211 | 1096 | 3763 | 0.291257 | 29.1257 |
| --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  |  |  |  | 211 | 1096 | 3763 | 0.291257 | 29.1257 |
| --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |  |
| --- | ----------------------- | -------------- | --------------- | ------- | --------- | --------- | --- | --- | --- | --- |
|  |  | Communications | personal Vision | Hearing |  | Dentition | GI | GU |  |  |
|  | Simple Complex |  |  |  | pulmonary |  |  |  |  |  |

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

|  | 664 |  | 89 |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 10

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

| 132 |  | 211 1096 | 3763 0.291257 | 29.1257 |
| --- | --- | -------- | ------------- | ------- |

Case (UTWC) 11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 11

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

11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 12

## REFERENCES

Reference Boyd, Jennifer E., Nick Kanas, Vadim I. Gushin, and Saylor Stephanie. 2007. 'Cultural differences in patterns of mood states on board the International Space Station', Acta Astronautica, 61: 668-71.

Charney ME, Bui E, Sager JC, Ohye BY, Goetter EM, Simon NM. Complicated Grief Among Military Service Members and Veterans Who Served After September 11, 2001. J Trauma Stress. 2018;31(1):157-162. doi:10.1002/jts.22254 Delaney EM, Holloway KJ, Miletich DM, Webb-Murphy JA, Lanouette NM. Screening for Complicated Grief in a Military Mental Health Clinic. Mil Med. 2017;182(9):e1751-e1756. doi:10.7205/MILMED-D-17-00003 Doering BK, Eisma MC. Treatment for complicated grief: state of the science and ways forward. Curr Opin Psychiatry. 2016;29(5):286-291. doi:10.1097/YCO.0000000000000263 Hardy-Bougere M. Cultural manifestations of grief and bereavement: a clinical perspective. J Cult Divers. 2008;15(2):66-69.

Kaprio J, Koskenvuo M, Rita H. Mortality after bereavement: a prospective study of 95,647 widowed persons. Am J Public Health. 1987;77(3):283-287. doi:10.2105/ajph.77.3.283 Latham AE, Prigerson HG. Suicidality and bereavement: complicated grief as psychiatric disorder presenting greatest risk for suicidality. Suicide Life Threat Behav. 2004;34(4):350-362. doi:10.1521/suli.34.4.350.53737 Lindemann, Erich: Beyond Grief: Studies in Crisis Intervention. Jason Aronson New York, 1979.

Lobb EA, Kristjanson LJ, Aoun SM, Monterosso L, Halkett GK, Davies A: Predictors of complicated grief: a systematic review of empirical studies.

Death Stud 2010; 34(8): 673–98. Lundorff M, Johannsen M, O'Connor M. Time elapsed since loss or grief persistency? Prevalence and predictors of ICD-11 prolonged grief disorder using different applications of the duration criterion. J Affect Disord. 2021;279:89-97. doi:10.1016/j.jad.2020.09.116 Lundorff M, Holmgren H, Zachariae R, Farver-Vestergaard I, O'Connor M. Prevalence of prolonged grief disorder in adult bereavement: A systematic review and meta-analysis. J Affect Disord. 2017;212:138-149. doi:10.1016/j.jad.2017.01.030 Mancini AD, Griffin P, Bonanno GA. Recent trends in the treatment of prolonged grief. Curr Opin Psychiatry. 2012;25(1):46-51. doi:10.1097/YCO.0b013e32834de48a Middleton W, Raphael B, Burnett P, Martinek N. A longitudinal study comparing bereavement phenomena in recently bereaved spouses, adult children and parents. Aust N Z J Psychiatry. 1998;32(2):235-241. doi:10.3109/00048679809062734 Molina N, Viola M, Rogers M, et al. Suicidal Ideation in Bereavement: A Systematic Review. Behav Sci (Basel). 2019;9(5):53. Published 2019 May

14. doi:10.3390/bs9050053

Nakajima S, Ito M, Shirai A, Konishi T. Complicated grief in those bereaved by violent death: the effects of post-traumatic stress disorder on complicated grief. Dia- logues Clin Neurosci 2012;14:210-4.

Nakajima S. Complicated grief: recent developments in diagnostic criteria and treatment. Philos Trans R Soc Lond B Biol Sci. 2018;373(1754):20170273. doi:10.1098/rstb.2017.0273 Parkes, C. M., B. Benjamin and R. G. Fitzgerald; Broken Heart: A Statistical Study of Increase of Mortality Among Widows. British Medical Journal , 1, 740-743, 1969 Prigerson HG, Bierhals AJ, Kasl SV, et al. Traumatic grief as a risk factor for mental and physical morbidity. Am J Psychiatry. 1997;154(5):616-

623. doi:10.1176/ajp.154.5.616

Prigerson HG, Boelen PA, Xu J, Smith KV, Maciejewski PK. Validation of the new DSM-5-TR criteria for prolonged grief disorder and the PG-13- Revised (PG-13-R) scale. World Psychiatry. 2021;20(1):96-106. doi:10.1002/wps.20823 Reynolds RJ, Day SM. Mortality Among International Astronauts. Aerosp Med Hum Perform. 2019;90(7):647-651. doi:10.3357/AMHP.5369.2019 Reynolds RJ, Day SM. Mortality of US astronauts: comparisons with professional athletes. Occup Environ Med. 2019;76(2):114-117. doi:10.1136/oemed-2018-105304 Reynolds, Robert J., and Steven M. Day. "The mortality of space explorers." Into Space: A Journey of How Humans Adapt and Live in Microgravity. London: IntechOpen (2018): 253-85.

Shear MK, Muldberg S, Periyakoil V. Supporting patients who are bereaved. BMJ. 2017;358:j2854. Published 2017 Jul 6. doi:10.1136/bmj.j2854 Shear MK. Clinical practice. Complicated grief. N Engl J Med. 2015;372(2):153-160. doi:10.1056/NEJMcp1315618 Shear MK, Simon N, Wall M, et al. Complicated grief and related bereavement issues for DSM-5. Depress Anxiety. 2011;28(2):103-117. doi:10.1002/da.20780 Shear MK, Reynolds CF 3rd, Simon NM, et al. Optimizing Treatment of Complicated Grief: A Randomized Clinical Trial. JAMA Psychiatry. 2016;73(7):685-694. doi:10.1001/jamapsychiatry.2016.0892 Williams JL, Eddinger JR, Rynearson EK, Rheingold AA. Prevalence and Correlates of Suicidal Ideation in a Treatment-Seeking Sample of Violent Loss Survivors. Crisis. 2018;39(5):377-385. doi:10.1027/0227-5910/a000520 11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 13

Reference Zisook S, Iglewicz A, Avanzino J, Maglione J, Glorioso D, Zetumer S, Seay K, Vahia I, Young I, Lebowitz B, Pies R, Reynolds C, Simon N, Shear MK. Bereavement: course, consequences, and care. Curr Psychiatry Rep. 2014 Oct;16(10):482 Zisook S, Shear K: Grief and bereavement: what psychiatrists need to know. World Psychiatry 2009; 8: 67 – 74.

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

ICL 1.0 IMPACT 1.0 Medical Conditions List

### ICU Intensive Care Unit

IMCL iMED Condition List iMED Integrated Medical Evidence Database

### IMM Integrated Medical Model

### IMPACT-MD Impact Medical Database

11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 14

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

11/22/2022 8:37:34 AM ICL16_Bhp - Grief Reaction Cliff page: 15

---

## Source metadata

```yaml
source_filename: "bhp-grief-reaction-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Behavioral or Mental Health Alterations/CliFF 119"
source_url: "https://drive.google.com/file/d/1gVlyJwj5XmdzTr-rA1bFqmgy0yYFm_N1/view"
source_drive_id: "1gVlyJwj5XmdzTr-rA1bFqmgy0yYFm_N1"
source_sha256: d8cd435b55c1387197103bfd19d54ffe3b0fca18738c2e1c9d0d6d07a5c6bb4d
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 15
ocr_performed: false
```
