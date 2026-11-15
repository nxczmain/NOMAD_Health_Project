# Acute Coronary Syndrome CLiFF 2023

[View original PDF](https://drive.google.com/file/d/18f_9gjsHTQTf9NueTbJ6ngznGySsLNuH/view) · **15 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Best Case](#best-case)
- [Overview](#overview)
- [References](#references)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

### ICL3_Acute Coronary Syndrome

Acute Coronary Syndrome (ACS) is an umbrella term that encompasses unstable angina and myocardial infarction. ACS represents an acute blockage of blood flow to the heart, constituting a medical emergency. Typical symptoms can include chest pain; pain in the arms, jaw, neck, back or stomach; shortness of breath; dizziness/lightheadedness; nausea; and sweating. (AHA, 2015) Terrestrially if there is a concern for ACS the gold- standard for risk stratification and possible treatment is cardiac catheterization.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Khera et al, 2018 describes the Astro-CHARM ASCVD risk tool, which is used by NASA for cardiovascular risk prediction in crewmembers. The incidence distribution for this condition was derived using unpublished data internal to NASA from active crewmember Astro-CHARM scores through July 31, 2020 (Coble, 2021). These data were previously compiled for use by the Aerospace Medicine Board at JSC, NASA by utilizing the IMPALA data tool for LSAH data as well as manual chart review for missing fields that were not included in IMPALA (Coble, 2021). Literature searches revealed no published reports of in-flight Acute Coronary Syndrome. There is an anecdotal report of a possible case of ACS during an Apollo Mission. While performing intense work during a lunar surface EVA moving rocks and preparing the Lunar Module for final separation, operating on very little sleep, a crewmember experienced a bigeminal rhythm on cardiac monitoring that reportedly the flight surgeon at mission control conjectured may have been ACS. The crewmember had several myocardial infarctions later in life (Irwin and Emerson, 1973). Given the inability to definitively diagnose the bigemeny that occurred during Apollo as ACS, the incidence distribution for this condition was informed by the average Astro-CHARM scores of active crewmembers as above (Coble, 2021) and the Apollo event was not included.

### ANALOG LITERATURE

Literature searches revealed no relevant published reports of the incidence of ACS in analog populations.

### TERRESTRIAL LITERATURE

Given the comprehensive cardiovascular screening that astronaut crewmembers receive, it was felt that all-comer terrestrial data would inherently overestimate the risk of ACS and these data were not used to inform the incidence distribution for this CLiFF. Terrestrial incidence and prevalence data for Acute Coronary Syndrome (ACS) shows a strong correlation between ACS and advanced-age, chronic medical conditions (i.e., obesity, diabetes, hypertension), smoking and sedentary lifestyle. The astronaut cohort does not have these risk factors. Therefore, terrestrial incidence may overestimate the risk of ACS in the astronaut population. Yeh et al, 2010 is a retrospective study of patients ages 30 and older hospitalized for MI (STEMI or NSTEMI) between 1999 and 2008 in the Kaiser Permanente system in California with a catchment area of 3 million patients at the time of the study. The incidence of ACS in this population increased from 1999 (274 cases per 100,000 person-years) to 2000 (287 cases per 100,000 person-years) then decreased each year thereafter, to 208 cases per 100,000 person-years in 2008. Rea et al, 2020 is an Italian regional study covering an area of approximately 10 million patients. The incidence of unstable angina or MI in this study was 220 events per 100,000 person- years. Murphy et al, 2006 is a Scottish cross-sectional study from 2001-2002 of prevalence and incidence of both stable and unstable angina. The overall incidence of angina (male and female) in 2001–2002 was 160 events per 100,000 person-years.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

- Mean: 0.001541

8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 1

- SD: 3.32E-4

### INCIDENCE SUMMARY

The incidence distribution for this condition is based on average Astro-CHARM scores for active crewmembers (Coble, 2021). The Astro-CHARM ASCVD risk calculator is used to estimate 10-year risk (Khera et al, 2018). We were able to obtain Astro-CHARM risk scores for all active astronauts (without the ASCANS) as of July 31, 2020 (Coble, 2021). These data were previously compiled for use by the Aerospace Medicine Board at JSC, NASA by utilizing the IMPALA data tool for LSAH data as well as manual chart review for missing fields that were not included in IMPALA (Coble, 2021). Note, this is unpublished data, internal to NASA. These probabilities were modeled according to a beta distribution. Further, the distribution of probabilities was converted to an incidence rate by solving for θ in the equation score=1-e^(-10θ). Given constant incidence rate, λ, the probability of seeing at least one event over 10 years is 1-e^(-10θ). The inverted equation is then θ=-1/10. The raw data was entered into the Bayesian model. Data for the cerebrovascular accident were also included to remove that rate from the model derived rates (which would include both ACS and CVA). The incidence distribution for Acute Coronary Syndrome is Gamma(shape=21.43, rate=13905) with mean 0.001541 and SD 3.32E-4. The posterior average score was converted to a rate and reduced by the posterior distribution for the incidence of cerebrovascular accident. This distribution represents the posterior average active astronaut incidence rate due to ACS alone.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.00154117 SD 0.00033292 Gamma (Shape): 21.43 (Rate): 13905 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Yeh et al, 2010 Terrestrial 2 Rea et al, 2020 Terrestrial 3 Murphy et al, 2006 Terrestrial 2 Ali et al, 1999 Terrestrial 0 Castañer et al, 1984 Terrestrial 0 Fox et al, 2007 Terrestrial 0 Khera et al, 2018 Spaceflight 3 Coble, 2021 Spaceflight 4 Yeh et al, 2010 is a retrospective study of patients ages 30 and older hospitalized for MI (STEMI or NSTEMI) between 1999 and 2008 in the Kaiser Permanente system in California with a catchment area of 3 million patients at the time of the study. It provides age and sex adjusted incidence 8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 2

annual trends from 1999 to 2008 but does not provide raw data necessary to age restrict or gender stratify incidence to better approximate the astronaut corps. Rea et al, 2020 is an Italian regional study covering an area of 10 million patients, that provides incidence of new onset unstable angina or MI. Incidence values are not stratified by age or sex. Murphy et al, 2006 is a Scottish cross-sectional study from 2001-2002 of prevalence and incidence of both stable and unstable angina. Ali et al, 1999; Fox et al, 2007; and Castañer et al, 1984 do not provide incidence values for ACS, but they do provide proportions of cases that develop heart failure (the worst-case scenario). Khera et al, 2018 describes the Astro-CHARM ASCVD risk tool, which is used by NASA for cardiovascular risk prediction. Coble, 2021 provided average Astro-CHARM data for active crewmembers through July 31, 2020. 8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

All mission assigned crewmembers for mission durations of 30 days or more are required to undergo the following monitoring: • 24-hour Holter Monitoring at L-365 days and as clinically indicated. (NASA, MedB 1.7) • Exercise treadmill testing ages 30, 35, 40; every two (2) years between ages 40-50; every year after age 50 (NASA, MR089S). When flight assigned at L-180 days and L-30/45 days (NASA, MR006L). • Cycle ergometer aerobic fitness testing: annually, L-12mo, L-90/30d, FD14, FD75, R-14, R+5, R+30 and as clinically indicated (NASA, N3.07). • Resting ECG annually ((NASA, MR089S). When flight assigned, pre- and post-flight resting ECG at L-9/6 months to L-10 days and R+0/3 days (NASA, MedB 1.6). • Heart-rate monitoring for 2 weeks during exercise training at L-1year, L-45 to L-15 days. In-flight heart-rate monitoring occurs during the first 2 weeks of every mission during every treadmill and cycle ergometer session, as well as during periodic fitness evaluation (PFE) sessions.

Thereafter, inflight heart rate monitoring occurs during each (PFE), while exercising on the Russian cycle ergometer, or during contingencies. (NASA, MR019L) • Pulmonary function testing annually (NASA, MR089S). • C-Reactive Protein testing at L-45/30, R+0, R+3/7, and R+30 for long- duration flights (NASA, MR010L). • Coronary artery CT scanning to obtain Coronary Artery Calcification (CAC) score.

### BEST CASE SCENARIO DEFINITION

Unstable angina (unable to exercise without symptoms), or myocardial infarction that can be treated successfully with medications, without clinical signs of congestive heart failure (CHF).

### WORSE CASE SCENARIO DEFINITION

Myocardial infarction resulting in a crewmember suffering signs of symptomatic CHF. (Note cardiogenic shock is a separate condition).

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Myocardial Infarction Angina, Unstable

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The worst-case scenario probability of 11-17% was informed by Fox et al, 2007 and Castañer et al, 1984. The lower limit of 11% is informed by Fox et, 2007, a multinational cohort study of 44,372 patients, across 113 hospitals and 14 countries, between July 1, 1999, and December 31, 2006 with ACS. This study was specifically looking at trends over time in clinical outcomes based on advancing care measures. 11% of patients developed in-hospital HF. The upper limit is informed by Castañer et al, 1984 a prospective observational study from December 1975 to March 1979 of 259 male patients aged 60 years or less admitted with MI. 17% developed left ventricular dysfunction (defined as a left ventricular ejection fraction less than or equal to 30%) within a mean follow-up period of 34 months (range 15-55 months). Although this is a drastically smaller and older study than Fox et al, 2007 it was felt to be valid for inclusion based on the younger population and longer follow-up period. Ali et al, 1999 (not used to inform the best-case/worst-case probability) was a prospective cohort study of 483 consecutive patients in Michigan with their first MI and who were admitted within 24 hrs of symptom onset. 41.6% of these patients developed in-hospital heart failure (HF), clinically. This was felt to be an outlier and thus not used to inform the best-case/worst-case probabilities due to the study being relatively dated, small size of the study, and liberal clinical inclusion criteria for the diagnosis of HF. Therefore the best-case probability was assigned 83-89% and the worst-case probability was assigned 11-17%. TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Ali et al, 1999 Terrestrial 1 Castañer et al, 1984 Terrestrial 3 Fox et al, 2007 Terrestrial 3 Ali et al, 1999 is a prospective cohort study of 483 consecutive patients in Michigan with their first MI and who were admitted within 24 hrs of symptom onset. 41.6% of these patients developed in-hospital heart failure (HF), clinically. HF was diagnosed by any of the following criteria: S3 gallop or pulmonary rales heard on auscultation, alveolar/interstitial edema seen on chest X-ray. Castañer et al, 1984 is a prospective observational study from December 1975 to March 1979 of 259 male patients aged 60 years or less admitted with MI. 17% developed left ventricular dysfunction (defined as a left ventricular ejection fraction less than or equal to 30%) within a mean follow-up period of 34 months (range 15-55 months). Fox et al, 2007 is based on the GRACE trial. The population was a multinational cohort study of 44,372 patients, across 113 hospitals and 14 countries, between July 1, 1999, and December 31, 2006 with ACS. 11% of patients developed in-hospital HF. 8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### Condition TI% Duration TI% Duration TI% RTDC LOCL

### Case Composite Probability

Scenario Incidence % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best Mean: 83 - 89 100 1.783 30.5209 0.616667 1488 9.46054 100 100 3 7.7

Case (TBC) 0.001541 SD: 3.32E-4 Treated 11 - 17 100 1.783 42.7319 0.616667 1728 9.46054 100 100 5.3 14.5

## Worst Case

(TWC) Untreated N/A N/A N/A 1.783 57.5073 0.616667 198720 57.5073 100 100 3 32

## Best Case

(UTBC) Untreated N/A N/A N/A 1.783 75.8305 0.616667 198720 75.6577 100 100 6.18 97

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

The RTDC surrogate for best-case scenario was initially assigned as "congestive heart failure." However, this is incompatible with the best-case scenario definition, which explicitly excludes heart failure. Therefore it was not used as the RTDC surrogate. RTDC was assigned 100% for all scenarios, see reasoning in the captions below. For specific information for each scenario, reference captions below.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The best-case scenario is unstable angina (UA) or a myocardial infarction (MI, aka NSTEMI, STEMI) that is treated with medical management only and does not progress to CHF. Therefore, the minimum duration was informed by Drennan et al, 2017 which found that 99% of patients that will survive to hospital discharge after ACS achieve return of spontaneous circulation by 37 minutes of resuscitation efforts. The maximum duration was informed by American Cardiology and American Heart Association Practice Guidelines indicating that the acute phase of UA/NSTEMI typically lasts about 2 months (Braunwald et al, 2000). Although there are cases of UA/NSTEMI that can successfully be treated with medical management only, the standard of care is cardiac catheterization to make a determination regarding whether stenting vs. medical management will be pursued. Given that cardiac catheterization will not be available inflight, RTDC minimum and maximum were both assigned 100%. The minimum LOCL probability was assigned 3% based on Kaul et al, 2013 a retrospective study of residents in Alberta, Canada aged 20 years or older hospitalized at an acute care facility with a primary diagnosis of ACS (37.1% STEMI, 43.5% NSTEMI, and 19.4% UA) between April 1, 2002, and December 31, 2008.

Patients with a prior admission for ACS or heart failure in the last 5 years were excluded. 3% of patients without heart failure died during the index hospitalization. The maximum LOCL probability was assigned 7.7% based on Chung et al, 2014. This study compared outcomes for patients with acute coronary syndrome in Sweden and the U.K. The study population was drawn from 86 hospitals in Sweden and 242 in the UK. Data on 30-day mortality were available for nearly all patients: 119,786 (100%) in Sweden and 390,951 (99.97%) in U.K. Notably, the rate of in-Hospital Primary PCI in Sweden was 22, 773 (59.3%) and in the U.K. was 34,695 (22.4%). Coronary intervention other than primary PCI in all Non-STEMI and STEMI patients was in Sweden 34,288 (28.6%) and in the U.K. was 58,492 (17.3%). After standardization, the forecast mean 30-day mortality between 2004 and 2010 was 7.7% (95% CI 7.3–8.2). Data for medical managed ACS mortality only was not available.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The minimum duration was informed by Drennan et al, 2017 which found that 99% of patients that will survive to hospital discharge after ACS achieve return of spontaneous circulation by 37 minutes of resuscitation efforts. The maximum duration 1728 hours (72 days) was informed by length of hospital stay from Sinan et al, 2019 a cross-sectional study of 1606 patients (male: 57.2%, mean age: 67.8±13 years) diagnosed with acute heart failure across 37 hospitals in Turkey in the intensive care unit (ICU)/coronary care unit and cardiology wards between September 2015 and September 2016. 17% of presenting patients were admitted and 14.6% of patients had ACS as a predisposing event for their Acute Heart Failure. Note the median duration of hospital stay was 7 days, but this data is not broken down by ACS related HF so the upper bound was used to inform the duration. The ExMC Clinical and Science Team pre-determined that the probability of RTDC for the worst-case scenarios is 100%. LOCL probabilities are based on in-hospital mortality. Ali et al, 1999 is a study of 483 consecutive patients presenting with their first episode of ACS, admitted within 24 hours of symptom onset. The in-hospital mortality in this study was 5.3% which was assigned as the minimum LOCL probability.

Kaul et al, 2013 is a retrospective study of all residents of Alberta Canada, aged 20 years or older hospitalized at an acute care facility with a primary diagnosis of ACS between April 1, 2002, and December 31, 2008. In-hospital mortality in this study was 14.5%, which was assigned as the maximum LOCL probability. (Notably, 18 month mortality from Ali et al, 1999 was similar to this upper bound, 14.9%).

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The minimum duration was informed by Drennan et al, 2017 which found that 99% of patients that will survive to hospital discharge after ACS achieve return of spontaneous circulation by 37 minutes of resuscitation efforts. In an untreated scenario a patient may die sooner than if resuscitative efforts are employed, however there is not good data to inform this length of time, thus 37 minutes will be used in this scenario. The maximum duration of 198,720 hours (276 months) is informed by Levy, 1956 an observational study of 158 patients (75% male, average female age 61.4, average male age 59.2) with angina. Note, there is no distinguishment between stable and unstable angina in this study and it could be assumed that the longer durations represent stable angina (which is not included in the definition of this condition). Standard of care for diagnosis in a best-case scenario ACS is cardiac catheterization to make determine the underlying pathology causing the pain (and in a treated scenario stent vs. provide medical management). Therefore, even in an untreated best-case scenario, given that cardiac catheterization will not be available inflight, RTDC minimum and maximum were both assigned 100%. Mulcahy et al, 1985 is a prospective observational study of unstable angina, confirmed clinically and with ECG between 1980 and 1982. Patients were followed for 1 year and the only treatment offered was nitrates. Three was a 1% mortality rate within 28 days of initial hospitalization and 8% within 1 year. Typically in a treated scenario, the acute phase of UA resolves within about 2 months (Braunwald et al, 2000). However, in this untreated scenario, a higher risk of death would be anticipated post-28 days from presentation. Therefore, the minimum LOCL probability was assigned 8%. The maximum LOCL probability of 32% is informed by Levy, 1956 in which there was a 32% rate of mortality overall in patients followed in this observational study of angina.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS There is paucity of data on the duration of symptoms for the untreated worst-case ACS that progresses to heart failure. The minimum duration was informed by Drennan et al, 2017 which found that 99% of patients that will survive to hospital discharge after ACS achieve return of spontaneous circulation by 37 minutes of resuscitation efforts. In an untreated scenario a patient may die sooner than if resuscitative efforts are employed, 8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 6

however there is not good data to inform this length of time, thus 37 minutes will be used in this scenario. The maximum duration of 198,720 hours (276 months) is informed by Levy, 1956 an observational study of 158 patients (75% male, average female age 61.4, average male age 59.2) with angina. Note, there is no distinguishment between stable and unstable angina in this study and it could be assumed that the longer durations represent stable angina (which is not included in the definition of this condition). The ExMC Clinical and Science Team pre-determined that the probability of RTDC for the worst-case scenarios is 100%. There is a paucity of data regarding untreated worst-case scenario probability of LOCL as defined by this CLiFF. The minimum LOCL probability was assigned 6.18% based on Solomon et al, 2005. This represents patients who survived an MI (note they were treated for the MI) and went on to develop heart failure (HF), but subsequently died within 180 days. This is likely an underestimate given that both the MI and the HF are treated, but data for lack of treatment could not be found. The maximum probability of 97% was informed by Girotra et al, 2016 a large review of the CARES database from 2005-2015, involving 96,992 adult patients with out-of-hospital cardiac arrest across 132 US counties. Notably, this is not complete lack of treatment as bystanders did provide AED and CPR treatments when available. However, EMS witnessed or healthcare-facility located cardiac arrests were excluded so this constitutes a lower level of care (BLS vs.

ACLS). Alabama had the highest out of hospital cardiac arrest death rates of 97%. Note, this is also cardiac arrest not specifically MI and has no relation to HF. This may be an overestimate.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation |  | Source |  | LOC Value |
| --------------------- | --- | ----------- | --- | --------- |
| Levy, 1956 |  | Terrestrial |  |  |
| Braunwald et al, 2000 |  | Terrestrial |  |  |

3

| Drennan et al, 2017 |  | Terrestrial |  |  |
| ------------------- | --- | ----------- | --- | --- |
| Sinan et al, 2019 |  | Terrestrial |  |  |

The minimum duration for all scenarios is based on data from Drennan et al, 2017 reporting that 99% of patients who survive to hospital discharge after ACS achieve return of spontaneous circulation by 37 minutes of resuscitation efforts. In an untreated scenario a patient may die sooner than if resuscitative efforts are employed, however there is not good data to inform this length of time, thus 37 minutes was used for both treated and untreated scenarios. The maximum duration for the treated best-case scenario is informed by the American Cardiology and American Heart Association Practice Guidelines indicating that the acute phase of UA/NSTEMI typically lasts about 2 months (Braunwald et al, 2000). The maximum duration for the treated worst-case scenario is informed by length of hospital stay from Sinan et al, 2019 a cross-sectional study of 1606 patients (male: 57.2%, mean age: 67.8±13 years) diagnosed with acute heart failure across 37 hospitals in Turkey in the intensive care unit (ICU)/coronary care unit and cardiology wards between September 2015 and September 2016. 17% of presenting patients were admitted and 14.6% of patients had ACS as a predisposing event for their Acute Heart Failure. There is a paucity of data regarding untreated durations as defined in this CLiFF.

The untreated scenario durations were informed by Levy, 1956 an observational study of 158 patients (75% male, average female age 61.4, average male age 59.2) with angina in which the only treatment modality was bedrest. Note, there is no distinguishment between stable and unstable angina in this study and it could be assumed that the longer durations represent stable angina (which is not included in the definition of this condition). TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source |  | LOC Value |  |
| -------- | ------ | --- | --------- | --- |
| N/A | N/A |  |  | 3 |

RTDC probability was assigned 100% for both minumum and maximum for all scenarios. Regarding best-case scenarios, although there are cases of UA/NSTEMI that can successfully be treated with medical management only, the standard of care is cardiac catheterization to make a diagnosis and drive treatment, which would require RTDC. The ExMC Clinical and Science Team pre-determined that the probability of RTDC for the worst- case scenarios is 100%. TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation |  | Source |  | LOC Value |
| ------------------- | --- | ----------- | --- | --------- |
| Stone et al, 2011 |  | Terrestrial |  |  |
| Chung et al,2014 |  | Terrestrial |  |  |
| Kaul et al, 2013 |  | Terrestrial |  |  |
| Solomon et al, 2005 |  | Terrestrial |  |  |
| Girotra et al, 2016 |  | Terrestrial |  | 2 |

8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 7

### Citation Source LOC Value

Ali et al, 1999 Terrestrial Mulcahy et al, 1985 Terrestrial For the best-case treated sceanrio, the LOCL probability is based on in-hospital mortality of Canadian patients 20 years or older hospitalized at an acute care facility with a primary diagnosis of ACS (37.1% STEMI, 43.5% NSTEMI, and 19.4% UA) between April 1, 2002, and December 31, 2008 (Kaul et al, 2013). The maximum LOCL probability is based on 30-day mortality outcomes for patients with ACS in Sweden and the U.K. Notably this included PCI as an intervention. (Chung et al, 2014) For the worst-case treated scenario, LOCL probabilities are based on in-hospital mortality (Ali et al, 1999; Kaul et al, 2013). For the untreated best-case scenario, LOCL probabilites were driven by studies regarding angina only (Mulcahy et al, 1985; Levy, 1956). Note, these studies are more dated. Levy, 1956 makes no distinguishment between unstable vs. stable angina and stable angina is not included in the definition of the condition per this CLiFF. For the untreated worst-case scenario, the minimum LOCL probability represents patients who survived an MI (note they were treated for the MI) and went on to develop heart failure (HF), but subsequently died within 180 days (Solomon et al, 2005). This is likely an underestimate given that both the MI and the HF are treated, but data for lack of treatment could not be found. The maximum probability represents death from out-of-hospital cardiac arrest (Girotra et al, 2016). Notably, this is not complete lack of treatment as bystanders did provide AED and CPR treatments when available. However, EMS witnessed or healthcare-facility located cardiac arrests were excluded so this constitutes a lower level of care (BLS vs. ACLS). Note, this is also cardiac arrest not specifically MI and has no relation to HF. This may be an overestimate.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Acute coronary syndrome encompasses unstable angina, and myocardial infarction (both NSTEMI and STEMI).

- CNES: Myocardial Infarction, Unstable angina

Diagnostic Scope and Resourcing: In both the best- and worst-case scenarios, the diagnosis is based on physical examination (cardiopulmonary – key components including elevated JVP and lymphedema -, abdominal, vital signs), laboratory analysis (troponin), EKG, and ultrasound (cardiac, pulmonary). The only laboratory capability that was considered a necessity in this CRT was troponin, however BNP, CMP, and Magnesium would be desirable to rule out associated heart failure and follow electrolytes to guide repletion. These lab values, however, (BNP, CMP, Mag) were not built into the CRT as a necessity as the CRT working group felt that ACS could be diagnosed and managed without them. Ground communications was considered necessary during the diagnostic phase of ACS for both best- and worst-case scenarios. Cardiac stress testing, both exercise and pharmacologic, are outside the scope of medical capabilities. Cardiac catheterization/reperfusion therapy/stenting are outside the scope of the medical capabilities.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. This CRT includes a scope of practice code of 5 (which correlates to an “Experienced procedure trained generalist attending (e.g. ED attending).” The CRT working group SME consensus Clinical Phase 1 duration: Best Case CP1: 1.783 hours Worst Case CP1: 1.783 hours Treatment Scope and Resourcing: For the best-case scenario of unstable angina or an MI that can be treated with medications and has no associated CHF, the acute treatment capabilities consist of IV access, oxygen, nitroglycerin, morphine, beta-blockers, ARB/ACE-I, anti-platelet therapy, Fibrinolytic therapy (in the event of STEMI), potassium and magnesium repletion (if the laboratory capabilities to monitor these are available). Note that calcium channel blockers (2nd line after beta-blockers) were not scoped in this CRT. Cardiac monitoring, serial EKGs, and serial troponins are also included. In the convalescent phase, treatment capabilities consist of empiric lipid lowering (lipid laboratory capabilities are anticipated to be outside the scope of medical capabilities for IMPACT 1.0), hypertensive management for secondary prevention, and cardiac rehabilitation. Exercise modifications would be necessary but are not built into the CRT since this is not a medical resource.

For the worst-case scenario, additional treatment capabilities beyond the best-case scenario include a nitroglycerin patch. Note that a nitroglycerin drip was considered outside the scope of the medical capabilities, and a patch was included instead. For the treatment of CHF in the setting of ACS, furosemide (both IV and PO) and spironolactone were included in the worst-case scenario treatment as well. Cardiac catheterization/reperfusion therapy/stenting, cardiac surgery (bypass), and intra-aortic balloon pumps are all outside the scope of the medical capabilities. Communications and Support Needs: For both best and worst-case scenarios communications with ground specialists to facilitate treatment and healing was considered necessary given the limited diagnostic and treatment capabilities in-flight.

## References

1. Braunwald E, Antman EM, Beasley JW, Califf RM, Cheitlin MD, Hochman JS, et al. ACC/AHA Guidelines for the Management of Patients With

Unstable Angina and Non–ST-Segment Elevation Myocardial Infarction: Executive Summary and Recommendations. Circulation. 2000; 102(10):1193–209

2. Chatterjee S, Chaudhuri D, Vedanthan R, Fuster V, Ibanez B, Bangalore S, et al. Early intravenous beta-blockers in patients with acute coronary

syndrome–A meta-analysis of randomized trials. Int J Cardiol. 2013; 168(2):915–21

3. Colucci WS. Treatment of acute decompensated heart failure: Specific therapies - UpToDate. Up To Date. . 2020 Retrieved 20 May 2021 from

https://www.uptodate.com/contents/treatment-of-acute-decompensated-heart-failure-specific-therapies 8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 8

4. Gibson MC, Corbalan R, Alexander T. Acute ST-elevation myocardial infarction: The use of fibrinolytic therapy - UpToDate. Up To Date. . 2020

Retrieved 20 May 2021 from https://www.uptodate.com/contents/acute-st-elevation-myocardial-infarction-the-use-of-fibrinolytic-therapy? search=thrombolytic%20treatment%20for%20ACS&source=search_result&selectedTitle=4~150&usage_type=default&display_rank=4

5. Kosmas CE, Silverio D, Sourlas A, Montan PD, Guzman E. Role of spironolactone in the treatment of heart failure with preserved ejection

fraction. Ann Transl Med. 2018; 6(23)

6. Lang SH, Manning N, Armstrong N, Misso K, Allen A, Nisio MD, et al. Treatment with tirofiban for acute coronary syndrome (ACS): a systematic

review and network analysis. Centre for Reviews and Dissemination (UK); 2012.

7. O’Gara PT, Kushner FG, Ascheim DD, Casey DE, Chung MK, de Lemos JA, et al. 2013 ACCF/AHA Guideline for the Management of ST-

- Elevation Myocardial Infarction: A Report of the American College of Cardiology Foundation/American Heart Association Task Force on Practice

Guidelines. Circulation. 2013; 127(4)

### IMM CLIFF RECONCILATION COMMENTS

IMM had a condition called Angina/Myocardial Infarction. It defers somewhat from the current CLiFF condition, “Acute Coronary Syndrome.” Notably, the best and worst-case scenario definitions differ. The best-case scenario from IMM was, “Cardiac chest pain that is brief, self-limited, is relieved spontaneously or with sublingual nitroglycerin and does not result in evidence of injury to the heart, e.g. Acute Myocardial Infarction (AMI).” The current best-case scenario is, “Unstable angina (unable to exercise without symptoms), or myocardial infarction that can be treated successfully with medications, without clinical signs of congestive heart failure (CHF).” The IMM worst-case scenario was, “Cardiac chest pain associated with persistent chest pain at rest, with evidence of unstable angina (UA) and /or AMI such as dyspnea, cold clammy skin, and ST changes of at least 1 mm elevation or depression.” The current worst-case scenario, “Myocardial infarction resulting in a crewmember suffering signs of symptomatic CHF. (Note cardiogenic shock is a separate condition).” The incidence from the IMM CLiFF came from a terrestrial source. The incidence for this CLiFF is based on Astro-CHARM data for the astronaut corps (a predictive ASCVD risk model). The durations in this CLiFF differ substantially from the IMM CLiFF. RTDC for this CLiFF is 100% for both the minimum and maximums for all scenarios. This is similar to the IMM CLiFF with the exception of the best-case treated scenario which had a range of 0-100%. This CLiFF has varying probabilities for LOCL. Notably the IMM CLiFF assigned 0% probability of LOCL to all scenarios (including worst-case which encompasses acute myocardial infarction).

### LIMITATIONS SUMMARY

- Terrestrial incidence publications were sourced entirely from DynaMed. No other search engines were utilized. • The maximum duration for the

untreated scenarios is informed by Levy, 1956 an observational study of 158 patients (75% male, average female age 61.4, average male age 59.2) with angina. Note, there is no distinguishment between stable and unstable angina in this study and it could be assumed that the longer durations represent stable angina (which is not included in the definition of this condition). • There is a paucity of data regarding untreated worst- case scenario probability of LOCL as defined by this CLiFF. The minimum LOCL probability was assigned 6.18% based on Solomon et al, 2005.

This represents patients who survived an MI (note they were treated for the MI) and went on to develop heart failure (HF), but subsequently died within 180 days. This is likely an underestimate given that both the MI and the HF are treated, but data for lack of treatment could not be found. The maximum probability of 97% was informed by Girotra et al, 2016 a large review of the CARES database from 2005-2015, involving 96,992 adult patients with out-of-hospital cardiac arrest across 132 US counties. Notably, this is not complete lack of treatment as bystanders did provide AED and CPR treatments when available. However, EMS witnessed or healthcare-facility located cardiac arrests were excluded so this constitutes a lower level of care (BLS vs. ACLS). Alabama had the highest out of hospital cardiac arrest death rates of 97%. Note, this is also cardiac arrest not specifically MI and has no relation to HF. This may be an overestimate. • RTDC probability was assigned 100% for both minimum and maximum for all scenarios. Regarding best-case scenarios, although there are cases of UA/NSTEMI that can successfully be treated with medical management only, the standard of care is cardiac catheterization for risk stratification and possible treatment, which would require RTDC. However, it is possible that there may be cases that do not require further intervention (e.g. stenting, etc.) and could therefore survive without RTDC. The minimum probability of 100% may be an overestimation in these cases, but it was felt by the editor that all ACS cases warrant RTDC for a higher level of care including cardiac catheterization. The ExMC Clinical and Science Team pre-determined that the probability of RTDC for the worst-case scenarios is 100%. 8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 9

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  |  | Cardio- |  |  |  |  |
| --- | ----------------------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best | 664 |  | 89 |  |  | 145 |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 223 664 |  | 89 |  |  | 145 |  |  |  |  |
| ---- | ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 223 664 | 113 | 89 |  |  | 145 | 13 | 6 |  |  |
| ----- | ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 664 | 113 | 89 |  |  | 145 | 13 | 6 |  |  |
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

| Best | 132 | 414 | 22 | 196 | 34 | 34 | 211 1941 | 3763 | 0.515812 | 51.5812 |
| ---- | --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 | 414 | 22 | 196 | 34 | 34 | 211 2164 | 3763 | 0.575073 | 57.5073 |
| ---- | --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 564 | 414 | 22 | 196 | 34 | 34 | 211 2860 | 3763 | 0.760032 | 76.0032 |
| --- | ------- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 564 | 414 | 22 | 196 | 34 | 34 | 211 2860 | 3763 | 0.760032 | 76.0032 |
| --- | ------- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  |  | Cardio- |  |  |  |  |
| --- | ----------------------- | -------------- | -------- | ------ | ------- | --------- | --------- | ----- | --- | --- |
|  |  | Communications | personal | Vision | Hearing |  | Dentition | GI GU |  |  |
|  | Simple Complex |  |  |  |  | pulmonary |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  | 145 |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  | 223 664 |  | 89 |  |  | 145 |  |  |  |  |
| --- | ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  | 145 |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 664 | 113 | 89 |  |  | 145 |  | 6 |  |  |
| --- | ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 10

Total Human

|  |  | Translation & |  | Total Tasks |  |  |
| --- | --- | ------------- | --- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) |  | Extremity Standing (g) | Equipment Ops |  | Category |  |
| ----- | --- | ---------------------- | ------------- | --------- | ---------- | --- |
|  |  | (microgravity) |  | Condition | Tasks Full |  |

Mission Treated Best

|  |  |  | 211 | 356 | 3763 0.0946054 | 9.46054 |
| --- | --- | --- | --- | --- | -------------- | ------- |

Case (TBC) Untreated Best

| 132 | 414 | 22 196 34 | 34 211 | 2164 | 3763 0.575073 | 57.5073 |
| --- | --- | --------- | ------ | ---- | ------------- | ------- |

Case (UTBC) Treated Worst

|  |  |  | 211 | 356 | 3763 0.0946054 | 9.46054 |
| --- | --- | --- | --- | --- | -------------- | ------- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 2847 | 3763 0.756577 | 75.6577 |
| ------- | --- | --------- | ------ | ---- | ------------- | ------- |

Case (UTWC) 8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 11

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

8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 12

## REFERENCES

Reference

1. AHA. A better way to predict heart attacks and strokes in space: American Heart Association News; 2018 [cited 2021 7/28/21]. Available from:

https://www.heart.org/en/news/2018/07/30/a-better-way-to-predict-heart-attacks-and-strokes-in-space.

2. AHA. Acute Coronary Syndrome: American Heart Association; 2015 [cited 2021 July 22]. Available from: https://www.heart.org/en/health-

topics/heart-attack/about-heart-attacks/acute-coronary-syndrome.

3. Ali AS, Rybicki BA, Alam M, Wulbrecht N, Richer-Cornish K, Khaja F, et al. Clinical predictors of heart failure in patients with first acute

myocardial infarction. Am Heart J. 1999;138(6 Pt 1):1133-9. Epub 1999/11/30. doi: 10.1016/s0002-8703(99)70080-3. PubMed PMID: 10577445.

4. Braunwald E, Antman EM, Beasley JW, Califf RM, Cheitlin MD, Hochman JS, et al. ACC/AHA Guidelines for the Management of Patients With

Unstable Angina and Non–ST-Segment Elevation Myocardial Infarction: Executive Summary and Recommendations A Report of the American College of Cardiology/American Heart Association Task Force on Practice Guidelines (Committee on the Management of Patients With Unstable Angina). Circulation 2000;102:1193-209.

5. Castañer A, Betriu A, Sanz G, Paré JC, Coll S, Soler J, et al. Natural history of severe left ventricular dysfunction after myocardial infarction.

Chest. 1984;85(6):744-50. Epub 1984/06/01. doi: 10.1378/chest.85.6.744. PubMed PMID: 6723383.

6. Chung SC, Gedeborg R, Nicholas O, James S, Jeppsson A, Wolfe C, et al. Acute myocardial infarction: a comparison of short-term survival in

national outcome registries in Sweden and the UK. Lancet. 2014;383(9925):1305-12. Epub 2014/01/28. doi: 10.1016/s0140-6736(13)62070-x.

- PubMed PMID: 24461715; PubMed Central PMCID: PMCPMC4255068.

7. Coble C. NASA IMPALA Data Tool. 2021.

8. Drennan I, Case E, Verbeek P, Reynolds J, Goldberger Z, Jasti J, et al. A comparison of the universal TOR Guideline to the absence of

prehospital ROSC and duration of resuscitation in predicting futility from out-of-hospital cardiac arrest Resuscitation. 2017;111:96-102.

9. Fox KA, Steg PG, Eagle KA, Goodman SG, Anderson FA, Jr., Granger CB, et al. Decline in rates of death and heart failure in acute coronary

syndromes, 1999-2006. Jama. 2007;297(17):1892-900. Epub 2007/05/03. doi: 10.1001/jama.297.17.1892. PubMed PMID: 17473299.

10. Girotra S, Diepen S, Nallamothu B, Carrel M, Vellano K, Anderson M, et al. Regional Variation in Out-of-Hospital Cardiac Arrest Survival in

the United States. Circulation 2016;133:2159-68.

11. Irwin JB, Emerson WA. To Rule The Night: The Discovery Voyage of Astronaut Jim Irwin. Nashville Holman Bible Publishers; 1973.

12. Kaul P, Ezekowitz JA, Armstrong PW, Leung BK, Savu A, Welsh RC, et al. Incidence of heart failure and mortality after acute coronary

syndromes. Am Heart J. 2013;165(3):379-85.e2. Epub 2013/03/05. doi: 10.1016/j.ahj.2012.12.005. PubMed PMID: 23453107.

13. Levy H. The natural history of changing patterns of angina pectoris. Ann Intern Med. 1956;44(6):1123-35. Epub 1956/06/01. doi:

10.7326/0003-4819-44-6-1123. PubMed PMID: 13327800.

14. Mulcahy R, Al Awadhi AH, de Buitleor M, Tobin G, Johnson H, Contoy R. Natural history and prognosis of unstable angina. Am Heart J.

1985;109(4):753-8. Epub 1985/04/01. doi: 10.1016/0002-8703(85)90634-9. PubMed PMID: 2858972.

15. Murphy NF, Simpson CR, MacIntyre K, McAlister FA, Chalmers J, McMurray JJ. Prevalence, incidence, primary care burden and medical

treatment of angina in Scotland: age, sex and socioeconomic disparities: a population-based study. Heart. 2006;92(8):1047-54. Epub 2006/01/10. doi: 10.1136/hrt.2005.069419. PubMed PMID: 16399851; PubMed Central PMCID: PMCPMC1861126.

16. NASA. MedB 1.6 Resting ECG. JSC28913. 2013.

https://lsda.jsc.nasa.gov/lsda_data/document/Project/MRID/MEDB_1.6_Resting_ECG_MR011L_1.28.2014_Project_02_26_2015_12_42_04.pdf.

17. NASA. MedB 1.7 24-Hour Ambulatory ECG Monitoring. SLSDCR-SMCCB-07-016-R1. 2007.

https://lsda.jsc.nasa.gov/lsda_data/document/Project/MRID/MEDB_17_MR071L.pdf.

18. NASA. MR006L Exercise Treadmill Test. MSD-MO-023. 2000. https://lsda.jsc.nasa.gov/lsda_data/document/Project/MRID/MR006L.pdf.

19. NASA. MR010L Clinical Laboratory Testing for Long Duration Flights Available from:

https://lsda.jsc.nasa.gov/lsda_data/document/Project/MRID/MR010L.pdf.

20. NASA. MR019L Heart Rate Monitoring. SM-FI-077-R1. 2002. https://lsda.jsc.nasa.gov/lsda_data/document/Project/MRID/MR019L.pdf.

21. NASA. MR089S Annual Medical Examinations. Available from: https://lsda.jsc.nasa.gov/lsda_data/document/Project/MRID/MR089S.pdf.

22. NASA. N3.07 Cycle Ergometer Test/Aerobic Functional Capacity. JSC28913. 2017. Available from:

https://lsda.jsc.nasa.gov/lsda_data/document/Project/MRID/MEDB_N3.07%20Cycle%20Erg%2007_24_17_Project_08_53_38.pdf.

23. Rea F, Ronco R, Pedretti RFE, Merlino L, Corrao G. Better adherence with out-of-hospital healthcare improved long-term prognosis of acute

coronary syndromes: Evidence from an Italian real-world investigation. Int J Cardiol. 2020;318:14-20. Epub 2020/07/01. doi: 10.1016/j.ijcard.2020.06.017. PubMed PMID: 32593725.

24. Sinan Ü Y, Ekmekçi A, Özbay B, Akyıldız Akçay F, Bekar L, Koza Y, et al. The real-life data of hospitalized patients with heart failure: On

behalf of the Journey HF-TR study investigators. Anatol J Cardiol. 2019;21(1):25-30. Epub 2018/12/28. doi: 10.14744/AnatolJCardiol.2018.50880. PubMed PMID: 30587703; PubMed Central PMCID: PMCPMC6382896. 8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 13

Reference

25. Solomon S, Zelenkofske S, McMurray J, Finn P, Velazquez E, Ertl G, et al. Sudden Death in Patients with Myocardial Infarction and Left

Ventricular Dysfunction, Heart Failure, or Both. New England Journal of Medicine. 2005;352:2581-8.

26. Stone GW, Maehara A, Lansky AJ, de Bruyne B, Cristea E, Mintz GS, et al. A prospective natural-history study of coronary atherosclerosis. N

Engl J Med. 2011;364(3):226-35. Epub 2011/01/21. doi: 10.1056/NEJMoa1002358. PubMed PMID: 21247313.

27. Yeh RW, Sidney S, Chandra M, Sorel M, Selby JV, Go AS. Population trends in the incidence and outcomes of acute myocardial infarction. N

Engl J Med. 2010;362(23):2155-65. Epub 2010/06/19. doi: 10.1056/NEJMoa0908610. PubMed PMID: 20558366.

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

IMCL iMED Condition List iMED Integrated Medical Evidence Database 8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 14

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

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

8/23/2023 5:56:24 PM ICL3_Acute Coronary Syndrome Cliff page: 15

---

## Source metadata

```yaml
source_filename: "acute-coronary-syndrome-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/18f_9gjsHTQTf9NueTbJ6ngznGySsLNuH/view"
source_drive_id: "18f_9gjsHTQTf9NueTbJ6ngznGySsLNuH"
source_sha256: 0f27e7e4d8af58295183406acc4bdd0e4f50dcc2fefbf31572cee48f6d8e3792
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 15
ocr_performed: false
```
