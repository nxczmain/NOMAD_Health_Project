# Shock Cardiogenic CLiFF 2023

[View original PDF](https://drive.google.com/file/d/13lTxp6mVm2tyeAK6dhD6nakNuhuZOJk8/view) · **14 pages**

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

ICL85_Shock - Cardiogenic Cardiogenic shock is a hemodynamically complex syndrome characterized by a low cardiac output that often culminates in multiorgan system failure and death (American College of Cardiology, 2020). Despite recent advances, clinical outcomes remain poor, with mortality rates exceeding 40%. It is characterized by inadequate tissue perfusion results from cardiac dysfunction, most commonly following acute myocardial infarction. A clinical definition of cardiogenic shock is decreased cardiac output and evidence of tissue hypoxia in the presence of adequate intravascular volume. The diagnosis of cardiogenic shock is made at the bedside by observing hypotension and clinical signs of poor tissue perfusion in the proper clinical context. These signs may include distended jugular veins, pulmonary edema, S3 gallop, oliguria, cyanosis, cool extremities, and altered mentation.

The clinical manifestations of cardiogenic shock in microgravity are unknown, but we would assume that the presentation would be different without a gravity gradient to exacerbated orthostatic hypotension. Therefore the recorded blood pressure may read higher than the patient’s condition would suggest. The other signs of central and peripheral perfusion may also be altered on orbit by the cephalad fluid shift. [Marshburn, T. H. (2008). Acute care. In Principles of clinical medicine for space flight. Springer, New York, NY.].

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

None.

### ANALOG LITERATURE

None.

### TERRESTRIAL LITERATURE

(1) Astro-CHARM is used to estimate 10 year risk. We were able to obtain AstroCHARM risk scores for all active astronauts (without the ASCANS) as of July 31, 2020. These probabilities were modeled according to a beta distribution. Further, the distribution of probabilities was converted to an incidence rate by solving for θ in the equation score=1-e^(-10θ). Given constant incidence rate, λ, the probability of seeing at least one event over 10 years is 1-e^(-10θ). The inverted equation is then θ=-1/10 ln⁡(1-score). The raw data was entered into the Bayesian model. Data for the cerebrovascular accident (1 event over 4430 person-years of active astronaut follow-up) were also included to remove that rate from the model derived rates (which would include both ACS and CA). The data are redacted from the BUGS code to protect privacy, but the mean score is 0.015085 (SD 0.012034) and the density is [chart at right]. (2) Proportion of MI events that were STEMI or NSTEMI: Terrestrial – (Rothwell, 2005).

Population-based study of event-rate, incidence, case fatality, and mortality for all acute vascular events in all arterial territories (Oxford Vascular Study). In this study the relevant diagnoses that could attributed to incident MI are 130 STEMI, and 220 NSTEMI. These numbers will inform the proportion split in the joint model. (3) Rates of CS given STEMI and NSTEMI Terrestrial – (Khalid, 2008) – A Review of Cardiogenic Shock in Acute Myocardial Infarction. 7.1% Cardiogenic shock amongst STEMI. Reference 2 (STEMI rate of CS) – (Goldberg, 1991) – Cardiogenic shock after acute myocardial infarction. 7.5% of all MI go to CS. Shock happened in 358 of the 4762 MI events (7.5%). -- (Goldberg, 1999) (STEMI rate of CS) – Temporal trends in cardiogenic shock complicating acute myocardial infarction. 644 shock out of 9076 (7.1%). -- (Holmes, 1995) (STEMI rate of CS) – Contemporary reperfusion therapy for cardiogenic shock: The GUSTO-I Trial Experience. Shock occurred in 2972 patients out of 41,021 (7.2%). – (Jacobs, 2000) (NSTEMI rate of CS)– Cardiogenic shock with non-ST-segment elevation myocardial infarction. Only CS patients. Non-ST- segment MI 152 patients, and 729 STEMI patients amongst CS patients. Unfortunately, this is proportion of CS that are STEMI or NSTEMI instead of the proportion of NSTEMI that go to CS. Using (Holmes, 1999) for this. – (Holmes, 1999) (rates of both)– Cardiogenic shock in patients with acute ischemic syndromes with and without ST-segment elevation. Cardiogenic shock developed in 4.2% of ST-segment elevation patients compared with 2.5% of patients without ST-segment elevation. 4087 total patients with STEMI and 7986 with NSTEMI. 173 developed CS in the STEMI group, and 200 in the NSTEMI group. Data Summary: • Current Active Astronauts astrocharm scores in the last year (excluding ASCANs). • LSAH active astronaut health – 1 stroke over 4430 person-years (for reducing astrocharm predictions) • Data supporting death, STEMI, and NSTEMI split of MI o Death/STEMI/NSTEMI split – (Rothwell, 2005) Incident MI cases – 84 death, 130 STEMI, and 220 N-STEMI (only one with death numbers) – using 84/434 for death and 130/350 for prop STEMI (out of STEMI + NSTEMI) o STEMI / NSTEMI split – (Holmes, 1999) – prop STEMI 4087/(4087 + 7986)=4087/12073 • Data supporting probability of CS given death, STEMI, NSTEMI o Probability of CS given death is set as 1 to be conservative given the lack of observable data. o STEMI rate of CS – (Goldberg, 1991) – 358 / 4762 o STEMI rate of CS – (Goldberg, 1999) – 644 / 9076 o 6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 1

STEMI rate of CS – (Holmes, 1995) – 2972/41021 o STEMI rate of CS – (Holmes, 1999) – 173/4087 o NSTEMI rate of CS – (Holmes, 1999) – 200/7986 All these data points are incorporated into the joint Bayesian model

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 4.234E-5 and SD 9.242E-6.

### INCIDENCE SUMMARY

- Modeling approach: 1) Use Astrocharm estimates reduced by active astronaut LSAH data on stroke to get a background rate of MI. 2) Proportion

out MI to STEMI and NSTEMI events. 3) Factor in the probability of cardiogenic shock given status type (STEMI, NSTEMI). This leaves the incidence rate of cardiogenic shock across MI. We have assumed that all sudden deaths (since STEMI status is unobservable) are covered by the separate ICL106 SUDDEN CARDIAC ARREST. The Bayesian posterior distribution for the cardiogenic shock incidence rate given all the available data elements, under uninformative priors, is Gamma(shape=20.989, rate=495700) with mean 4.234E-5 and SD 9.242E-6.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 4.23421E-05 SD 9.24223E-06 Gamma (Shape): 20.989 (Rate): 495700 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Hunizker, 2019 Terrestrial 1 Goldberg, 2009 Terrestrial 1 Fang, 2006 Terrestrial 1 Kolte, 2014 Terrestrial 1 Rothwell, 2005 Terrestrial 3 6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 2

### Citation Source LOC Value

Furman, 2001 Terrestrial 2 Hardoon, 2008 Terrestrial 2 Yeh, 2010 Terrestrial 1 Gillis, 2012 Terrestrial 3 (1) Astro-CHARM is used to estimate 10 year risk. We were able to obtain AstroCHARM risk scores for all active astronauts (without the ASCANS) as of July 31, 2020. These probabilities were modeled according to a beta distribution. Further, the distribution of probabilities was converted to an incidence rate by solving for θ in the equation score=1-e^(-10θ). Given constant incidence rate, λ, the probability of seeing at least one event over 10 years is 1-e^(-10θ). The inverted equation is then θ=-1/10 ln⁡(1-score). The raw data was entered into the Bayesian model. Data for the cerebrovascular accident (1 event over 4430 person-years of active astronaut follow-up) were also included to remove that rate from the model derived rates (which would include both ACS and CA). The data are redacted from the BUGS code to protect privacy, but the mean score is 0.015085 (SD 0.012034) and the density is [chart at right]. (2) Proportion of MI events that were STEMI or NSTEMI: Terrestrial – (Rothwell, 2005).

Population-based study of event-rate, incidence, case fatality, and mortality for all acute vascular events in all arterial territories (Oxford Vascular Study). In this study the relevant diagnoses that could attributed to incident MI are 130 STEMI, and 220 NSTEMI. These numbers will inform the proportion split in the joint model. (3) Rates of CS given STEMI and NSTEMI Terrestrial – (Khalid, 2008) – A Review of Cardiogenic Shock in Acute Myocardial Infarction. 7.1% Cardiogenic shock amongst STEMI. Reference 2 (STEMI rate of CS) – (Goldberg, 1991) – Cardiogenic shock after acute myocardial infarction. 7.5% of all MI go to CS. Shock happened in 358 of the 4762 MI events (7.5%). -- (Goldberg,1999) (STEMI rate of CS) – Temporal trends in cardiogenic shock complicating acute myocardial infarction. 644 shock out of 9076 (7.1%). -- (Holmes, 1995) (STEMI rate of CS) – Contemporary reperfusion therapy for cardiogenic shock: The GUSTO-I Trial Experience. Shock occurred in 2972 patients out of 41,021 (7.2%). – (Jacobs, 2000) (NSTEMI rate of CS)– Cardiogenic shock with non-ST-segment elevation myocardial infarction. Only CS patients. Non-ST- segment MI 152 patients, and 729 STEMI patients amongst CS patients. Unfortunately, this is proportion of CS that are STEMI or NSTEMI instead of the proportion of NSTEMI that go to CS. Using (Holmes, 1999) for this. – (Holmes, 1999) (rates of both)– Cardiogenic shock in patients with acute ischemic syndromes with and without ST-segment elevation. Cardiogenic shock developed in 4.2% of ST-segment elevation patients compared with 2.5% of patients without ST-segment elevation. 4087 total patients with STEMI and 7986 with NSTEMI. 173 developed CS in the STEMI group, and 200 in the NSTEMI group. Data Summary: • Current Active Astronauts astrocharm scores in the last year (excluding ASCANs). • LSAH active astronaut health – 1 stroke over 4430 person-years (for reducing astrocharm predictions) • Data supporting death, STEMI, and NSTEMI split of MI o Death/STEMI/NSTEMI split – (Rothwell, 2005) Incident MI cases – 84 death, 130 STEMI, and 220 N-STEMI (only one with death numbers) – using 84/434 for death and 130/350 for prop STEMI (out of STEMI + NSTEMI) o STEMI / NSTEMI split – (Holmes, 1999) – prop STEMI 4087/(4087 + 7986)=4087/12073 • Data supporting probability of CS given death, STEMI, NSTEMI o Probability of CS given death is set as 1 to be conservative given the lack of observable data. o STEMI rate of CS – (Goldberg, 1991) – 358 / 4762 o STEMI rate of CS – (Goldberg, 1999) – 644 / 9076 o STEMI rate of CS – (Holmes, 1995) – 2972/41021 o STEMI rate of CS – (Holmes, 1999) – 173/4087 o NSTEMI rate of CS – (Holmes, 1999) – 200/7986 All these data points are incorporated into the joint Bayesian model 6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Pre-flight preventive screening measures based on MR/MedBs/MRIDs etc., found at https://lsda.jsc.nasa.gov/MRID. All mission assigned crewmembers for mission durations of 30 days or more are required to undergo the following monitoring: • 24-hour Holter Monitoring at L-365 days and as clinically indicated. (NASA, MedB 1.7) • Exercise treadmill testing ages 30, 35, 40; every two (2) years between ages 40-50; every year after age 50 (NASA, MR089S). When flight assigned at L-180 days and L-30/45 days (NASA, MR006L). • Cycle ergometer aerobic fitness testing: annually, L-12mo, L-90/30d, FD14, FD75, R-14, R+5, R+30 and as clinically indicated (NASA, N3.07). • Resting ECG annually ((NASA, MR089S).

When flight assigned, pre- and post-flight resting ECG at L-9/6 months to L-10 days and R+0/3 days (NASA, MedB 1.6). • Heart-rate monitoring for 2 weeks during exercise training at L-1year, L-45 to L-15 days. In-flight heart-rate monitoring occurs during the first 2 weeks of every mission during every treadmill and cycle ergometer session, as well as during periodic fitness evaluation (PFE) sessions. Thereafter, inflight heart rate monitoring occurs during each (PFE), while exercising on the Russian cycle ergometer, or during contingencies. (NASA, MR019L) • Pulmonary function testing annually (NASA, MR089S). • C-Reactive Protein testing at L-45/30, R+0, R+3/7, and R+30 for long-duration flights (NASA, MR010L). • Coronary artery CT scanning to obtain Coronary Artery Calcification (CAC) score.

### BEST CASE SCENARIO DEFINITION

INTENTIONALLY LEFT BLANK, only WC scenario for this

### WORSE CASE SCENARIO DEFINITION

Life-threatening circulatory collapse requiring extensive support measures. This condition is a presumed to be post-myocardial infarction unrelated to other conditions such as toxic ingestion, sepsis, etc.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Neurogenic Shock will be included in this when precursor injuries make future iterations of the list.

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Cardiogenic shock is a highly morbid condition, with early revascularization being the standard treatment for cardiogenic shock (Hunizker, 2019).

This can occur in the form of culprit vessel or mutivessel revascularization. In their paper, (Hunizker, 2019) noted still higher rates of mortality even with revascularization (39.1% mortality if culprit vessel-only revascularization; 40.9% mortality if multivessel percutaneous coronary intervention was performed). It can be assumed that if an astronaut suffered cardiogenic shock in the setting of myocardial infarction in outer space that they would not be able to receive a revascularization procedure. Consequently, the parameters of this search there was no BC scenario.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

N/A N/A 3 The condition was set at 100% WC. 6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 4.234E-5 0 - 0 100 0 0 0 0 0 0 0 0 0 Case (TBC) and SD 9.242E-6 Treated Worst 100 - 100 100 0 50 120 213.6 0 100 100 29.8 47.9 Case (TWC) Untreated Best N/A N/A N/A 2.95 0 0 0 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 2.95 100 1 24 100 100 100 75 100 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

Despite recent advances, clinical outcomes for cardiogenic shock outcomes even in tertiary care settings remain poor. Best practices for shock management remain nonuniform yet share common care priorities of rapid diagnosis, early intervention, ongoing hemodynamic assessment, and multidisciplinary longitudinal care. All of these priorities will be severely compromised in spaceflight, and even if full capability for an ACLS code was available [defibrillator, monitor, ACLS pharmacotherapeutics], longitudinal ICU-level care would not be possible. The lack of invasive diagnostics [monitoring catheters] and the mainstay of terrestrial care addressing the major cause of CS, percutaneous coronary intervention, means that supportive care will be limited and offer marginal benefit. [Ex: cooling; inotropic/vasodilatory Rx, ventilatory support].

TREATED BEST CASE (TBC) SCENARIO COMMENTS No BC scenario for this condition TREATED WORST CASE SCENARIO (TWC) COMMENTS Ideally, the definition for duration of cardiogenic shock (CS) would be how long the actual period of shock lasts; this is not reported in the studies listed in Dynamed. Consequently, the duration of CS was defined to be length of hospitalization for CS secondary to MI. Cardiac rehab was not included in this definition as to transition to rehab an individual must be hemodynamically stable and is no longer in shock. Of the studies listed, the time range of hospitalization was from 120 hours (5 days: Hunziker, 2019; Goldberg, 2009) to 213.6 hours (8.9 days: Kolte, 2014). CS requires RTDC 100% of the time as it is a serious, life-threatening condition. CS is a highly lethal condition, but has seen improvement in mortality rates through the years (Babaev, 2005; Kolte, 2014; Hunziker, 2019). This is largely due to increasing rates of percutanteous coronary intervention (PCI) to treat CS (Babaev, 2005; Hunziker, 2019)/early revascularization (Kolte, 2014). In the (Babaev, 2005) and (Hunziker,2019) studies, we have included only the most recent year of mortality reported in them, as mortality rates have improved over time, to hopefully capture the most up-to- date incidence of mortality from CS. The (Kolte, 2014) study only lists the average mortality rate spanning across all years studied for individuals ages <75, so the average is listed instead.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS There is no BC scenario for this condition.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS There is very little data on untreated cardiogenic shock, for if this condition is left untreated the outcome most certainly is death. Almost all of the search results from PubMed and Google Scholar had samples where the patients had at least received some sort of support. The primary treatment for CS is PCI. Before the PCI era, treatment for CS included medical support with fluids and inotropes. Even then, the mortality was very high -- roughly 80%; (Goldberg, 1991). Undoubtably, in the absence of treatment, an individual suffering CS will likely perish. None of the articles gave any specific duration of individuals who were untreated with CS. It would be reasonable to assume though that without treatment, the duration of untreated CS would follow the natural history of MI. Therefore, it would be expected that without medical intervention, cardiogenic shock would develop in individuals with MI left untreated within 24 hours. For the articles included in WC untreated LOCL, the (Warren, 1976) article lists individuals who have MI and developed bradycardia. Of the 4 individuals who had hypotension in this study, 3 of them had bradycardia and 1 had nodal sinus rhythm. This article also does not specify that these individuals had cardiogenic shock, only that they were hypotensive. However, it was included as they may have had cardiogenic shock and they had received no treatment. In (Julian, 1987), this was an RCT that treated patients with either anisoylated plasminogen streptokinase activator complex (APSAC) vs a placebo. It is likely that these patients may have been medically managed outside of this, as the Methods say that patients were later heparinised 4 hours after treatment. Regardless, 2 patients who received placebo developed cardiogenic shock and subsequently died. Lastly, the (Castaigne, 1989) article is a placebo-controlled trial where patients at home would be given either APSAC or a placebo. It included a patient who received placebo at home and died from cardiogenic shock.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Hunziker, 2019 Terrestrial Goldberg, 2009 Terrestrial 2 6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 6

2

| Citation |  | Source | LOC Value |  |  |
| ----------- | --- | ----------- | --------- | --- | --- |
| Kolte, 2014 |  | Terrestrial |  |  |  |

The articles presented here represent the average duration of hospitalization for individuals presenting for cardiogenic shock secondary to MI.

These individuals are older (avg age = 70) and are all terrestrial; additionally, they all had access to ICU/OR treatment for cardiogenic shock, so these papers are not reflective of the space environment or astronauts. However, these are high quality papers and reflect the more recent trends of hospitalization duration for CS. There were no papers found that provided specific duration of untreated cases, though we can assume that the duration would last between 1-24 hours if left untreated as it would likely follow the natural history of MI.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source |  | LOC Value |  |  |
| -------- | ------ | --- | --------- | --- | --- |
| N/A | N/A |  |  | 3 |  |

N/A as this condition has a 100% RTDC.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation |  | Source | LOC Value |  |  |
| --------------- | --- | ----------- | --------- | --- | --- |
| Warren, 1976 |  | Terrestrial |  |  |  |
| Julian, 1987 |  | Terrestrial |  |  |  |
| Castaigne, 1989 |  | Terrestrial |  |  |  |

2

| Babaev, 2005 |  | Terrestrial |  |  |  |
| -------------- | --- | ----------- | --- | --- | --- |
| Kolte, 2014 |  | Terrestrial |  |  |  |
| Hunziker, 2019 |  | Terrestrial |  |  |  |

Mortality due to cardiogenic shock since the rise of PCI has greatly declined (Babaev, 2005; Kolte, 2014; Hunziker, 2019). In untreated cases however, the mortality is near 100% (Warren, 1976; Julian, 1987; Castaigne, 1989). It can be reasonably assumed that in outer space, astronauts, while healthier and younger than the vast majority of subjects in these cited studies, will not have access to PCI for definitive treatment in space.

Consequently, if an astronaut were to develop cardiogenic shock, the risk of LOCL would be likely be 100%.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview Cardiogenic shock is end organ damage due to mismatch between required perfusion and inadequate cardiac output. This condition is primarily the result of myocardial infarction but may also be due to medications, myocarditis, cardiomyopathy, arrhythmia, and valvulopathy. Acute myocardial infarction is a separate condition within the conditions list, and other forms of shock such as distributive and obstructive shock are not included. Cardiogenic shock is an extremely complex condition that carries a high morbidity and mortality rate even in terrestrial cardiac centers let alone in austere environments. Presentation may also be somewhat subtle starting with fatigue or edema and progressing slowly to overt failure or may be a rapid decompensation. Due to the severity of this condition there is not a best case scenario. The worst case definition is life-threatening circulatory collapse requiring extensive supportive measures. CNES: N/A Diagnostic Scope and Resourcing Diagnosis of this condition starts with the history and physical exam. A full physical exam is required to evaluate for alternative causes of shock and to identify disease severity based on peripheral perfusion. Laboratory evaluation with CBC, BMP, BNP, UA, and VBG is necessary to evaluate for alternative diagnosis and guide management. Echocardiography is necessary for diagnosis while pulmonary and abdominal ultrasound are utilized to round out patient evaluation . EKG is also necessary to diagnose electrical causes of shock. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): NA CP1 WC (Treated or Untreated): 2.95 hours The highest scope of practice is level 5 (attending physician) due to disease severity and high risk of mortality and morbidity Treatment Scope and Resourcing Treatment of cardiogenic shock is often etiology dependent. Acute myocardial infarction is a separate condition and not included here. In instances of arrhythmia, cardioversion and external pacing are necessary capabilities for management. Pericardiocentesis is also a requirement in instances of pericardial effusion with cardiac tamponade. Fluid resuscitation and diuretic capabilities are needed depending on the patient's volume status and physiology as dictated by the Starling curve. Intravenous norepinephrine and dobutamine were chosen as first line vasopressors and inotropes as support for all-comers in shock. They have been resourced for 72 hours in order to correct reversible causes of shock, plan medical evacuation, or discuss medical futility. Monitoring vitals, inputs/outputs, physical exam findings of shock, and frequent echocardiography is necessary for determining response to resuscitation and guiding further management. Terrestrial medical care often includes augmentation of cardiac output with mechanical devices such as pumps and balloons however these capabilities are considered impractical to modern flight. ECMO and heart transplant are often employed in severe cases of cardiogenic shock but would not be available until medical evacuation occurred. Communications

| 6/15/2023 2:07:17 PM |  | ICL85_Shock - Cardiogenic Cliff |  |  | page: 7 |
| -------------------- | --- | ------------------------------- | --- | --- | ------- |
and Support Needs Continuous audio and visual communications would be needed to manage this condition due to the severity and high rates of morbidity and mortality. REFERENCES Backer, D. D., et al. (2010). "Comparison of Dopamine and Norepinephrine in the Treatment of Shock." The New England Journal of Medicine 362(9). Daly, M., et al. (2020). "Identifying cardiogenic shock in the emergency department." Am J Emerg Med 38(11): 2425-2433. Vahdatpour, C., et al. (2019). "Cardiogenic Shock." J Am Heart Assoc 8(8): e011991. van Diepen, S., et al. (2017). "Contemporary Management of Cardiogenic Shock: A Scientific Statement From the American Heart Association." Circulation 136(16): e232-e268. van Diepen, S. and H. Thiele (2019). "An overview of international cardiogenic shock guidelines and application in clinical practice." Curr Opin Crit Care 25(4): 365-370.

### IMM CLIFF RECONCILATION COMMENTS

In the previous CLiFF, the incidence for cardiogenic shock was determined by noting that cardiogenic shock is associated with 5-10% of patients with MI. In this iteration, we did an extensive search to calculate incidence via the following modeling methodology: 1) Use Astrocharm estimates reduced by active astronaut LSAH data on stroke to get a background rate of MI. 2) Proportion out MI to STEMI and NSTEMI events. 3) Factor in the probability of cardiogenic shock given status type (STEMI, NSTEMI). This leaves the incidence rate of cardiogenic shock across MI. We have assumed that all sudden deaths (since STEMI status is unobservable) are covered by the separate ICL106 SUDDEN CARDIAC ARREST. This CLiFF update included searches on incidence data using a Dynamed search of MI with the hope of finding incidence in a sample more representative of astronauts (i.e., younger and healthier), and to then add that to the overall incidence calculation for cardiogenic shock secondary to MI.

### LIMITATIONS SUMMARY

The assumption was made that all cases of CS are caused by MI. This is a reasonable assumption for astronauts who presumably have normal cardiac function at launch, but there could be other causes such as toxins, metabolic causes, electrical shock, worsening congestive heart failure from idiopathic cardiomyopathy, myocarditis. · The assumption was made that the ACS risk for astronauts that was estimated in ICL 3 ACS is equivalent to the risk for MI. This is a reasonable assumption since nearly all ACS can be classified as either NSTEMI or STEMI. · The case definition did not include a best case. This was based on the fact that there will be inadequate treatment available onboard the spacecraft to treat cardiogenic shock. · The “treated worst case” is a misnomer as ICU level are, PCI, pressors, etc. will not available onboard. In reality, treated and untreated cases will have very similar outcomes. · There were no papers found that provided specific duration of untreated cases although it can be assumed that the duration would last between 1-24 hours if left untreated. · Since astronauts have fewer risk factors than the general population, it is expected that the ratio of NSTEMI:STEMI would be higher in the astronaut cohort. · The etiologies of sudden cardiac death are widely debated. Sudden cardiac arrest risk is covered in ICL106 and has been left out of ICL85 Cardiogenic Shock risk assessment. · There were no papers found that provided specific duration of untreated cases although we can assume that the duration would last between 1-24 hours if left untreated as it would likely follow the natural history of MI. 6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 8

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

| Best |  |  |  |  |  |  |  |  |  |  |  |  |
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

| Best |  |  |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (UTBC) Treated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  |  | Inter- |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | -------------- | --- | --------------- | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  |  | Communications |  | personal Vision | Hearing |  | Dentition |  | GI GU |  |  |
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

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| -------------------- | --- | --- | --- | -------------------------- | ------------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| 6/15/2023 2:07:17 PM |  |  |  |  | ICL85_Shock - Cardiogenic Cliff |  |  |  |  |  |  | page: 9 |
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

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 10

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

6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 11

## REFERENCES

Reference

- Babaev, A., Frederick, P. D., Pasta, D. J., Every, N., Sichrovsky, T., Hochman, J. S., & NRMI Investigators. (2005). Trends in management and

outcomes of patients with acute myocardial infarction complicated by cardiogenic shock. Jama, 294(4), 448-454.

- Castaigne, A. D., Hervé, C., Duval-Moulin, A. M., Gaillard, M., Dubois-Rande, J. L., Boesch, C., ... & Huguenard, P. (1989). Prehospital use of

- APSAC: results of a placebo-controlled study. The American journal of cardiology, 64(2), A30-A33.

- Fang, J., Mensah, G. A., Alderman, M. H., & Croft, J. B. (2006). Trends in acute myocardial infarction complicated by cardiogenic shock, 1979-

2003, United States. American heart journal, 152(6), 1035-1041.

- Furman, M. I., Dauerman, H. L., Goldberg, R. J., Yarzbeski, J., Lessard, D., & Gore, J. M. (2001). Twenty-two year (1975 to 1997) trends in the

incidence, in-hospital and long-term case fatality rates from initial Q-wave and non-Q-wave myocardial infarction: a multi-hospital, community- wide perspective. Journal of the American College of Cardiology, 37(6), 1571-1580.

- Gillis, D. B., & Hamilton, D. R. (2012). Estimating outcomes of astronauts with myocardial infarction in exploration class space missions. Aviation,

space, and environmental medicine, 83(2), 79-91.

- Goldberg, R. J., Gore, J. M., Alpert, J. S., Osganian, V., De Groot, J., Bade, J., ... & Dalen, J. E. (1991). Cardiogenic shock after acute

myocardial infarction: incidence and mortality from a community-wide perspective, 1975 to 1988. New England journal of medicine, 325(16), 1117-1122.

- Goldberg, R. J., Samad, N. A., Yarzebski, J., Gurwitz, J., Bigelow, C., & Gore, J. M. (1999). Temporal trends in cardiogenic shock complicating

acute myocardial infarction. New England Journal of Medicine, 340(15), 1162-1168.

- Goldberg, R. J., Spencer, F. A., Gore, J. M., Lessard, D., & Yarzebski, J. (2009). Thirty-year trends (1975 to 2005) in the magnitude of,

management of, and hospital death rates associated with cardiogenic shock in patients with acute myocardial infarction: a population-based perspective. Circulation, 119(9), 1211-1219.

- Hasdai, D., Topol, E. J., Califf, R. M., Berger, P. B., & Holmes Jr, D. R. (2000). Cardiogenic shock complicating acute coronary syndromes. The

Lancet, 356(9231), 749-756.

- Hardoon, S. L., Whincup, P. H., Lennon, L. T., Wannamethee, S. G., Capewell, S., & Morris, R. W. (2008). How much of the recent decline in

the incidence of myocardial infarction in British men can be explained by changes in cardiovascular risk factors? Evidence from a prospective population-based study. Circulation, 117(5), 598-604.

- Holmes, D. R., Bates, E. R., Kleiman, N. S., Sadowski, Z., Horgan, J. H., Morris, D. C., ... & GUSTO-I Investigators. (1995). Contemporary

reperfusion therapy for cardiogenic shock: the GUSTO-I trial experience. Journal of the American College of Cardiology, 26(3), 668-674.

- Holmes Jr, David R., Peter B. Berger, Judith S. Hochman, Christopher B. Granger, Trevor D. Thompson, Robert M. Califf, Alec Vahanian, Eric

R. Bates, and Eric J. Topol. "Cardiogenic shock in patients with acute ischemic syndromes with and without ST-segment elevation." Circulation 100, no. 20 (1999): 2067-2073.

- Hunziker, L., Radovanovic, D., Jeger, R., Pedrazzini, G., Cuculi, F., Urban, P., ... & AMIS Plus Registry Investigators. (2019). Twenty-year trends

in the incidence and outcome of cardiogenic shock in AMIS plus registry. Circulation: Cardiovascular Interventions, 12(4), e007293.

- Jacobs, A. K., French, J. K., Col, J., Sleeper, L. A., Slater, J. N., Carnendran, L., ... & SHOCK Investigators. (2000). Cardiogenic shock with non-

- ST-segment elevation myocardial infarction: a report from the SHOCK Trial Registry. Journal of the American College of Cardiology, 36(3S1),

1091-1096.

- Julian, D. G., Borthwick, L. S., Reid, D., Jennings, K. P., Wainwright, R. J., Rodger, J. C., ... & Phillips, W. S. (1987). Anisoylated Plasminogen

Streptokinase Activator Complex versus Placebo. Drugs, 33(3), 261-267.

- Khalid L and Dhakam SH. "A review of cardiogenic shock in acute myocardial infarction." Current cardiology reviews 4, no. 1 (2008): 34-40.

- Killip III, Thomas, and John T. Kimball. "Treatment of myocardial infarction in a coronary care unit: a two year experience with 250 patients." The

American journal of cardiology 20, no. 4 (1967): 457-464.

- Kolte, D., Khera, S., Aronow, W. S., Mujib, M., Palaniswamy, C., Sule, S., ... & Fonarow, G. C. (2014). Trends in Incidence, Management, and

Outcomes of Cardiogenic Shock Complicating ST‐Elevation Myocardial Infarction in the United States. Journal of the American Heart Association, 3(1), e000590.

- Rothwell, P. M., Coull, A. J., Silver, L. E., Fairhead, J. F., Giles, M. F., Lovelock, C. E., ... & Mehta, Z. (2005). Population-based study of event-

rate, incidence, case fatality, and mortality for all acute vascular events in all arterial territories (Oxford Vascular Study). The Lancet, 366(9499), 1773-1783.

- Warren, J. V., & Lewis, R. P. (1976). Beneficial effects of atropine in the pre-hospital phase of coronary care. The American journal of

cardiology, 37(1), 68-72.

- Yeh, R. W., Sidney, S., Chandra, M., Sorel, M., Selby, J. V., & Go, A. S. (2010). Population trends in the incidence and outcomes of acute

myocardial infarction. New England Journal of Medicine, 362(23), 2155-2165.

## ACRONYMS

6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 12

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

6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 13

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

6/15/2023 2:07:17 PM ICL85_Shock - Cardiogenic Cliff page: 14

---

## Source metadata

```yaml
source_filename: "shock-cardiogenic-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/13lTxp6mVm2tyeAK6dhD6nakNuhuZOJk8/view"
source_drive_id: "13lTxp6mVm2tyeAK6dhD6nakNuhuZOJk8"
source_sha256: 33a6fbe9204be65fcc09793eeb20decf7b4c1fd74d92f354d84c483e2155590d
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
