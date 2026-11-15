# Sudden Cardiac Arrest CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1LLdNN--wA2pn4JHqhAAB4rsX9tIK9c5P/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 119

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

### ICL106_Sudden Cardiac Arrest

In Sudden Cardiac Arrest (SCA) the heart suddenly and unexpectedly stops beating. If this happens, blood stops flowing to the brain and other vital organs putting them at risk of severe, irreversible damage in as little as 4 minutes if blood flow is not restored (Maron, 2009). In the context of spaceflight with NASA astronauts, who are heavily screened prior to flight, this condition is most likely to occur as a result of an electrical shock or as the end state of one of the other included conditions capable of affecting heart and lung function.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Data is limited regarding general cardiac events in space to generate prediction of incidence. However, to date, no astronaut has experienced an SCA or myocardial infarction (MI) in space or in follow up totaling 4,435 person-years (HSRB CR SA-03267). For arrythmias that could potentially lead to SCA, there is data to suggest the incidence is 0%. Hastings, 2018 followed twelve astronauts with Holter monitors at several points in and around their missions: two preflight; in-Flight Day (FD)-14, 30, 75, 135; 15 days prior to return; and immediately upon landing. No evidence of sustained VT or any other arrythmia that would be concerning to cause SCA was identified. These data strongly support that long duration spaceflight is not associated with changes in arrhythmia frequency or arrhythmic substrate among astronauts (Hastings, 2018). This suggests that astronauts are no more likely to experience SCA than a similar age and health matched terrestrial population.

### ANALOG LITERATURE

In a review of USAF active duty air crew aged 31-53 (average age 44 years) over a 5-year period, 8 out of the total 165,209 people experienced sudden cardiac death (SCD) (Osswald, 1996) yielding an annual rate of 1 sudden cardiac death in 100,000 for this analogue population of health near astronaut age individuals. This study did not capture the rate of sudden cardiac arrest (SCA) and included markedly few women; however, since SCA is likely more common than SCD and there is strong evidence that being female is protective for SCD (Risgard, 2014, Messner, 2003, Mozaffarian, 2015) this estimation is likely within the ballpark of actual risk. This is also supported by the absence of significant evidence for SCA or dangerous arrythmias in the spaceflight literature (HSRB CR SA-03267).

### TERRESTRIAL LITERATURE

Risgard, 2014, Messner, 2003, and Mozaffarian, 2015 provide general population data. This is expected to be markedly higher than the astronauts due to a less healthy substrate. Risgard estimates a rate of 21.7/100,000/yr in a Denmark Population that matches the Osswald, 1996 age range but in a general population cohort. Messner, 2003 describes a population in Northern Sweden with 12/100,000/yr sudden cardiac deaths in women and 65/100,000/yr in men. This yields an overall incidence of 38.5 sudden cardiac death cases/100,000 people/yr in population that skews older and also not as well screened or maintained as the astronaut corps. These numbers are substantially higher than the Osswald, 1996 population and do not capture the intensive screening. However, this is still important data since the astronaut population better fits the Messner, 2003 range.

It is also helpful to see the differences between screened and unscreened populations (Osswald, 1996 and Risgard, 2014) as well as the difference between a younger and older unscreened population (Risgard, 2014 and Messner, 2003). The incidence values for this model emphasize the Osswald, 1996 data while accounting for the effects of an older age identified in the latter two studies.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 4.775E-5 and SD 1.716E-5 7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 1

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate given the LSAH active astronaut and analog USAF Aviator data, under an uninformative prior, is Gamma(shape=7.743, rate=162158.2) with mean 4.775E-5 and SD 1.716E-5.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 4.77497E-05 SD 1.71599E-05 Gamma (Shape): 7.743 (Rate): 162158 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Gontcharov, 2005 Spaceflight 3 Hastings, 2018 Spaceflight 4 HSRB CR SA-03267, 2021 Spaceflight 4 Messner, 2003 Analog 2 Osswald, 1996 Analog 4 Daya, 2015 Terrestrial 3 Mozaffarian, 2015 Terrestrial 3 Risgaard, 2014 Terrestrial 3 The most relevent study for incidence is Osswald, 1996. It uses a population of USAF active duty flight crew which are similar to the astronauts and captures both total population (165,290) and numbers of sudden cardac death cases (8) over the 5 years between 1988 and 1992. However, this population skews younger than the astronauts and includes markedly few female subjects which limits its usefulness. Risgard, 2014 estimates 21.7/100,000/yr in a Denmark Population that matches the Osswald, 1996 age range but in a general population cohort. Messner, 2003 describes an older population that better matches the age range of the astronauts but is not likely to be as well screened or mantained as the Osswald, 1996 population. This study reports an overall incidence of 38.5 sudden cardiac death cases/100,000 people/yr. These numbers are substantially higher than the Osswald, 1996 which likely reflects less intensive health maintinance and is less relevent to the astronaut population. However, this is still important data since the astronaut population will skew older than Osswald, 1996 and better fits the Messner, 2003 range. It is helpful to see the differences between screened and unscreend populations (Osswald, 1996 and Risgard, 2014) as well as the difference between a younger and older unscreened population (Risgard, 2014 and Messner, 2003). Similarly, the Mozaffarian, 2015 population includes an even older general population cohort. These data represent the high end potential annual incidence at 69/100,000/yr The incidence values for IMPACT emphasize the 7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 2

Osswald, 1996 data while accounting for the effects of an older age as seen in the other studies. 7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Astronauts undergo pre-flight preventive screening measures based on MR/MedBs/MRIDs etc., found at https://lsda.jsc.nasa.gov/MRID. These include screening for cardiovascular risk factors and medical optimization to the greatest extent possible. Before flight each astronaut will also undergo 24 hour Holter monitor style ECG recordings no more than 1 year before flight. These readings will be analyzed for arrythmias. Astronauts also undergo exercised based cardiovascular conditioning.

### BEST CASE SCENARIO DEFINITION

A witnessed arrest with a cardiac rhythm of ventricular tachycardia or ventricular fibrillation, responsive to airway management, defibrillation, and CPR.

### WORSE CASE SCENARIO DEFINITION

An unwitnessed arrest, a witnessed arrest with a cardiac rhythm other than V-Tach/V-Fib, or an arrest that is non-responsive to airway management, defibrillation, and CPR.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Best case scenario is defined as witnessed arrest with a cardiac rhythm of ventricular tachycardia or ventricular fibrillation, responsive to airway management, defibrillation, and CPR. Worst case scenario is defined as an unwitnessed arrest, a witnessed arrest with a cardiac rhythm other than V-Tach/V-Fib, or an arrest that is non-responsive to airway management, defibrillation, and CPR. The WC probability is best given via Gillis, 2012, Daya, 2015, and Mozaffarian, 2015. Gillis estimates a range for the BC definition between 31.5-36.7%, Daya, 21.5-24.1%, and Mozaffarian at 23%.

All three reference a decreasing rate of VT/VF arrests found over time so the later studies were emphasized in this determination with a split of 25% BC and 75% WC. TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Gillis, 2012 Analog 3 Daya, 2015 Terrestrial 3 Mozaffarian, 2015 Terrestrial 3 The WC probability is best given via Gillis, 2012, Daya, 2015, and Mozaffarian, 2015. Gillis estimates a range for the BC definition between 31.5- 36.7%, Daya, 21.5-24.1%, and Mozaffarian at 23%. All three reference a decreasing rate of VT/VF arrests found over time so the later studies are emphasized in determining the 25% BC and 75% WC split. These are rated with a confidence level of 3 because the observed data represent only those cases for which an initial rhythm strip was available in the out of hospital setting. This requires responders to arrive rapidly enough to capture the rhythm before all cardiac activity ceases. Since the best case definition of VT/VF will eventually deteriorate into the WC definition it is likely that these numbers are an underestimation of the true BC/WC split. However, these represent the best available empiric data at the time of this writing in December of 2021. 7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 4.775E-5 25 - 25 100 0.383 54.5575 3.37 432 9.11507 100 100 53 81 Case (TBC) and SD 1.716E-5 Treated Worst 75 - 75 100 0.383 100 3.37 432 100 100 100 94 100 Case (TWC) Untreated Best N/A N/A N/A 0.383 100 0 3.37 100 100 100 100 100 Case (UTBC) Untreated Worst N/A N/A N/A 0.383 100 0 3.37 100 100 100 100 100 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

Sudden cardiac arrest is a catastrophic condition that leads to high mortality rates and high rates of disability. While this is exceedingly rare in healthy populations, it is still a possibility from either MI, arrythmia, hazards such as electrocution, or as the end state of other conditions. RTDC in this condition was listed as 100% in all cases due to it's severity.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Best case scenario is defined as a witnessed sudden cardiac arrest with an initial rhythm of ventricular tachycardia or fibrillation that may be responsive to resuscitation efforts. The RTDC of 100% was inherited from the previous IMM CLiFF and carried forward due to the severity of this condition. For LOCL, cardiac arrests meeting the BC definition have a reasonably good prognosis with mortality ranging from 53-81% (Daya, 2015).

For CP2 duration the shortest duration being the longest observed time for out of hospital arrest CPR and the longest duration of ICU stay (18 days) observed among several hospital centers in North America (Reynolds, 2013, Reynolds, 2016). These were chosen because terminating resuscitative efforts will result in a short CP2 while achieving return of spontaneous circulation may result in a prolonged ICU stay. Of note, outcomes are strongly tied to type of cardiac arrest (VT/VF vs. non shockable rhythms) and the time before spontaneous circulation returns. The former is the basis for the BC/WC definitions of this condition. The latter shows that 90% of patients with good neurological outcomes achieve return of spontaneous circulation (ROSC) within 20 minutes of starting CPR.

TREATED WORST CASE SCENARIO (TWC) COMMENTS Treated worst case scenario is defined as a sudden cardiac arrest that is unwitnessed, in a non shockable initial rhythm, or not responsive to airway management defibrillation, or CPR. These SCAs are unlikely to have a good outcome. Duration of CP2 is the same as with the BC because the initial treatment is similar. RTDC is 100% due to the severity of this condition as it was for the heritage IMM condition. LOCL in this case ranges from a low end of 94% to a high end of 100% based on data from Reynolds, 2013 and Reynolds, 2016. Of note, in this cohort of patients if ROSC takes longer than 20 minutes to achieve the probability of a good neurological outcome falls well below 1% (Reynolds, 2013, Reynolds, 2016).

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Cardiac arrest is one of the traditional definitions for death (SOS-Kanto, 2007). If interventions are not taken to restart the heart LOCL is 100% by definition. Interestingly, a systematic review performed in 2010 found 32 cases of autoresuscitation, however all of these were noted in patients who achieved ROSC after "failed" CPR (Hornby, 2010). As far as this effort was able to determine there are no documented cases of ROSC after SCA without medical intervention. Therefore, not treating an SCA meeting the BC definition caries 100% LOCL. RTDC could not be achieved as this patient would be dead and so is listed as 100%. CP2 duration is considered 0 - 3.37 hours. This is based on the fact that untreated SCA can be considered LOCL in itself but that crew members may attempt CPR even without additional resources on board. For this reason the longest observed duration of CPR for out of hospital arrest in Reynolds, 2016 is used as the upper limit.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS This is the same as the untreated best case. Cardiac arrest is one of the traditional definitions for death (SOS-Kanto, 2007). If interventions are not taken to restart the heart LOCL is 100% by definition. Interestingly, a systematic review performed in 2010 found 32 cases of autoresuscitation, however all of these were noted in patients who achieved ROSC after "failed" CPR (Hornby, 2010). As far as this effort was able to determine there are no documented cases of ROSC after SCA without medical intervention. Therefore, not treating an SCA meeting the BC definition caries 100% LOCL. RTDC could not be achieved as this patient would be dead and so is listed as 100%. CP2 duration is considered 0 - 3.37 hours. This is based on the fact that untreated SCA can be considered LOCL in itself but that crew members may attempt CPR even without additional resources on board. For this reason the longest observed duration of CPR for out of hospital arrest in Reynolds, 2016 is used as the upper limit.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Reynolds, 2016 Terrestrial Reynolds, 2013 Terrestrial 3 7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 6

### Citation Source LOC Value

SOS-Kanto, 2007 Terrestrial While none of these studies relate directly to spaceflight there is a substantial amount of terrestrial evidence on out of hospital cardiac arrest and treatment duration. For this reason the confidence in these studies to provide an accurate measure of duration is fairly high. All of these studies deal with multiple hospital centers with large populations and capture granular data on resuscitation times, interventions, and outcomes.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

N/A N/A 3 RTDC is 100% due to the severe nature of this condition.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Mohamud, 2015 Terrestrial 3 Hornby, 2010 Terrestrial Mortality data for out of hospital cardiac arrest is another metric for which terrestrial studies provide high quality data. While this does not reach the highest level of confidence because the terrestrial population does not match the astronaut population in terms of health level and the proportional causes for cardiac arrest may differ, it is still likely that these data are a reasonable approximation of outcomes in the astronaut population.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview Cardiac arrest can occur for a myriad of reasons (the most common of which are the 5 Hs and the 5 Ts) but in young, healthy persons between 35-50 years of age the etiology is undetermined in 50% of cases in women and 24% of cases in men (Chugh 2003). The BC scenario is a witnessed arrest with a cardiac rhythm of ventricular tachycardia or ventricular fibrillation, responsive to airway management, defibrillation, and CPR. The WC is an unwitnessed arrest, a witnessed arrest with a cardiac rhythm other than V-Tach/V-Fib, or an arrest that is non-responsive to airway management, defibrillation, and CPR. It is critically important to recognize and treat cardiac arrest with the utmost haste, but unlike in older, ill individuals, in the spaceflight population the identification and treatment of the inciting condition may be challenging. However, the scope of this document will be identification and immediate treatment of sudden cardiac arrest, and diagnosis and management of the conditions that would most likely lead to this pathologic state in the young healthy astronaut population. Additionally, etiologies covered in other CLiFFs will not be included here. CNES: None Diagnostic Scope and Resourcing In the best-case and worst-case scenarios, diagnosis is based on lack of palpable pulse on physical exam. BC and WC in a witnessed cardiac arrest will be differentiated based on electrocardiographic analysis of a defibrillator and response to attempts at resuscitation. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. This CRT includes a scope of practice code of 5 (which correlates to an “Experienced procedure trained generalist attending (e.g. ED attending). The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.383. Identification of unconscious patient, with or without agonal breathing, pulse check for 10 seconds. CP1 WC (Treated or Untreated): 0.383 Identification of unconscious patient, with or without agonal breathing, pulse check for 10 seconds Of note, CP2 will begin prior to CP1 conclusion as initiation of CPR to minimize the low flow or no flow cardiac state is paramount in improving patient likelihood of recovery.. Treatment Scope and Resourcing CP1 and CP2 for a sudden cardiac arrest will be essentially unchanged compared to the terrestrial population, but CP3 (Post-Cardiac Arrest Care) in a hospital setting would be preferable to the spaceflight setting. Quantitative real-time capnography is a necessity as are mask with ambu bag, oxygen supply, BP, EKG, pulse oximeter and a defibrillator. Capabilities include supraglottic vs. endotracheal airway devices, arterial catheter for beat-to-beat blood pressure monitoring and a ventilator. Necessary treatment medications include epinephrine, amiodarone and lidocaine. We determined 10 cycles of CPR would be sufficient as an attempt to achieve ROSC as further management is unlikely to result in neurologically meaningful recovery (Adnet 2017). Terrestrially, post cardiac arrest care would result in a thorough workup to elucidate the triggering diagnosis. The most common etiologies of sudden cardiac arrest are the 5 Hs and 5 Ts, which were assessed based on reasonable probability of this occurring in spaceflight and if these were not already covered in other CLiFFs. We dedicated 24 hours to post arrest neurologic assessment given that if the patient is not completely recovered shortly after ROSC the individual would be returning to terrestrial care. Communications and Support Needs For CP1 and CP2, ground support will not be necessary as seconds matter and the algorithm will be very well-delineated. In CP3 (Post Cardiac Arrest State) it will be critical to communicate via real-time video or audio loop communications to determine factors leading to sudden cardiac arrest.

### IMM CLIFF RECONCILATION COMMENTS

7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 7

The main difference between this CLiFF and the Heritage cliff from LD68 is in the definitions. The original definitions split BC as a sudden cardiac arrest that responds to ACLS treatment and WC as one that does not respond to ACLS. Since a cardiac arrest that does not respond to treatment is synonymous with death under the current state of medical care, the definitions were redone to reflect a more useful differential. This definition focuses on established prognostic indicators such as initial rhythm, witnessed vs. unwitnessed, and responsive to specific interventions like airway management, defibrillation, and CPR. Within the definitions reworked the incidence values, outcomes values, and resources were modified to better align with them. In addition the heritage metric of "functional impairment" has been replaced with "task impairment" as this is a more mission focused metric that is likely to be better aligned with the needs of NASA mission planners.

### LIMITATIONS SUMMARY

Since no events have occurred in spaceflight incidence and outcomes cannot be directly assessed. Instead these values must be taken from analogue populations and the general terrestrial population. While there is substantial data on these populations they are not likely to match the demographics, fitness level, and particular task based risks of the astronaut population. However, the fact that no events have occurred in space flight to date provides evidence that SCA is a rare and unlikely event. 7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
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

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (TBC) Untreated

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (UTBC) Treated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

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

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 9

Total Human

|  |  | Translation & |  | Total Tasks |  |  |
| --- | --- | ------------- | --- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) |  | Extremity Standing (g) | Equipment Ops |  | Category |  |
| ----- | --- | ---------------------- | ------------- | --------- | ---------- | --- |
|  |  | (microgravity) |  | Condition | Tasks Full |  |

Mission Treated Best

| 132 |  |  | 211 | 343 | 3763 0.0911507 | 9.11507 |
| --- | --- | --- | --- | --- | -------------- | ------- |

Case (TBC) Untreated Best

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| ------- | --- | --------- | ------ | ---- | ------ | --- |

Case (UTBC) Treated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| ------- | --- | --------- | ------ | ---- | ------ | --- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| ------- | --- | --------- | ------ | ---- | ------ | --- |

Case (UTWC) 7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 10

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

7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 11

## REFERENCES

Reference

1) Adnet F, Triba MN, Borron SW, Lapostolle F, Hubert H, Gueugniaud PY, Escutnaire J, Guenin A, Hoogvorst A, Marbeuf-Gueye C, Reuter PG,

Javaud N, Vicaut E, Chevret S. Cardiopulmonary resuscitation duration and survival in out-of-hospital cardiac arrest patients. Resuscitation. 2017 Feb;111:74-81. doi: 10.1016/j.resuscitation.2016.11.024.

2) Adult Cardiac Arrest Algorithm. American Heart Association – Emergency Cardiac Care Guideline 2020.

3) Chugh SS, Chung K, Zheng ZJ, John B, Titus JL. Cardiac pathologic findings reveal a high rate of sudden cardiac death of undetermined

etiology in younger women. Am Heart J. 2003 Oct;146(4):635-9.

4) Daya, Mohamud. "Out-of-Hospital Cardiac Arrest Survival Improving over Time: Results from the Resuscitation Outcomes Consortium."

https://doi.org/10.1016/j.resuscitation.2015.02.003 (2015).

5) Gillis, D. B., and D. R. Hamilton. "Estimating Outcomes of Astronauts with Myocardial Infarction in Exploration Class Space Missions." Aviat

Space Environ Med (2012).

6) Gontcharov, I. B., I. V. Kovachevich, S. L. Pool, O. L. Navinkov, M. R. Barratt, V. V. Bogomolov, and N. House. "In-Flight Medical Incidents in

the Nasa-Mir Program." [In eng]. Aviat Space Environ Med 76, no. 7 (Jul 2005): 692-6.

7) Group, SOS-Kanto Study. "Cardiopulmonary Resuscitation by Bystanders with Chest Compression Only (Sos-Kanto): An Observational

Study." The Lancet 369, no. 9565 (2007): 920-26.

8) Hastings, J. "Cardiac Arrhythmias During Long Duration Spaceflight." Circulation (2018).

9) Hastings, Jeffrey L, Jaime Kowal, James Daniels, Shigeki Shibata, Steven H Platts, Doug R Hamilton, Richard L Page, et al. "Cardiac

Arrhythmias During Long Duration Spaceflight." Am Heart Assoc, 2013.

10) Hornby, Karen, Laura Hornby, and Sam D Shemie. "A Systematic Review of Autoresuscitation after Cardiac Arrest." Critical care medicine 38,

no. 5 (2010): 1246-53.

11) Karwatowska-Prokopczuk, E., W. Wang, M. L. Cheng, D. Zeng, P. J. Schwartz, and L. Belardinelli. "The Risk of Sudden Cardiac Death in

Patients with Non-St Elevation Acute Coronary Syndrome and Prolonged Qtc Interval: Effect of Ranolazine." [In eng]. Europace 15, no. 3 (Mar 2013): 429-36. https://doi.org/10.1093/europace/eus400.

12) Messner, T., and V. Lundberg. "Trends in Sudden Cardiac Death in the Northern Sweden Monica Area 1985-99." [In eng]. J Intern Med 253,

no. 3 (Mar 2003): 320-8. https://doi.org/10.1046/j.1365-2796.2003.01102.x. https://onlinelibrary.wiley.com/doi/pdfdirect/10.1046/j.1365- 2796.2003.01102.x?download=true.

13) Mozaffarian, Dariush. "Heart Disease and Stroke Statistics—2015 Update." Circulation (2015).

14) Osswald, S., R. Miles, W. Nixon, and P. Celio. "Review of Cardiac Events in Usaf Aviators." [In eng]. Aviat Space Environ Med 67, no. 11 (Nov

1996): 1023-7.

15) Osswald, S. S., F. A. Gaffney, W. B. Kruyer, J. S. Pickard, and W. G. Jackson. "Military Aviators with Mitral Valve Prolapse: Long-Term

Follow-up and Aeromedical Endpoints." [In eng]. Aviat Space Environ Med 78, no. 9 (Sep 2007): 845-51.

16) Reynolds, Joshua. "Association between Duration of Resuscitation and Favorable Outcome after out-of-Hospital Cardiac Arrest." Circulation

134, no. 25 (2016).

17) Reynolds, Joshua C, Adam Frisch, Jon C Rittenberger, and Clifton W Callaway. "Duration of Resuscitation Efforts and Functional Outcome

after out-of-Hospital Cardiac Arrest: When Should We Change to Novel Therapies?". Circulation 128, no. 23 (2013): 2488-94. https://www.ahajournals.org/doi/pdf/10.1161/CIRCULATIONAHA.113.002408?download=true.

18) Risgaard, B., B. G. Winkel, R. Jabbari, E. R. Behr, O. Ingemann-Hansen, J. L. Thomsen, G. L. Ottesen, et al. "Burden of Sudden Cardiac

Death in Persons Aged 1 to 49 Years: Nationwide Study in Denmark." [In eng]. Circ Arrhythm Electrophysiol 7, no. 2 (Apr 2014): 205-11. https://doi.org/10.1161/circep.113.001421. https://www.ahajournals.org/doi/pdf/10.1161/CIRCEP.113.001421?download=true.

19) Russomano, Thais, Justin H Baers, Rochelle Velho, Ricardo B Cardoso, Alexandra Ashcroft, Lucas Rehnberg, Rodrigo D Gehrke, Mariana

KP Dias, and Rafael R Baptista. "A Comparison between the 2010 and 2005 Basic Life Support Guidelines During Simulated Hypogravity and Microgravity." Extreme physiology & medicine 2, no. 1 (2013): 1-9.

20) Zecchin, M., A. D. Lenarda, M. Bonin, C. Mazzone, C. Zanchi, C. Di Chiara, M. Davanzo, et al. "Incidence and Predictors of Sudden Cardiac

Death During Long-Term Follow-up in Patients with Dilated Cardiomyopathy on Optimal Medical Therapy." [In eng]. Ital Heart J 2, no. 3 (Mar 2001): 213-21.

21) Lee, S, Charvat, J, Suresh, R. Risk of Cardiovascular Adaptations Contributing to Adverse Mission Performance and Health Outcomes

Human Systems Risk Board Update, HSRB CR SA-03267, NASA, May, 2021

## ACRONYMS

7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 12

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

### IP Incidence Proportion

### IR Incidence Rate

### ISS International Space Station

### IV Intravenous

### JSC Johnson Space Center

LEO Low-Earth orbit

### LEVA Lunar Extravehicular Activity

### LOCL Loss of Crew Life

### LOM Loss of Mission

7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 13

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

7/24/2023 2:05:42 PM ICL106_Sudden Cardiac Arrest Cliff page: 14

---

## Source metadata

```yaml
source_filename: "sudden-cardiac-arrest-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1LLdNN--wA2pn4JHqhAAB4rsX9tIK9c5P/view"
source_drive_id: "1LLdNN--wA2pn4JHqhAAB4rsX9tIK9c5P"
source_sha256: b658870903960dc4cc4501b320e63a39c9cafbd8f64ef1347ebf00b597c0a354
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
