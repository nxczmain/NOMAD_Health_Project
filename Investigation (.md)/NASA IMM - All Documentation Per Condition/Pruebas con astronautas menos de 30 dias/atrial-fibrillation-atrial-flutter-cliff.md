# Atrial Fibrillation Atrial Flutter CLiFF

[View original PDF](https://drive.google.com/file/d/1w4u99hylARBwLj9nYK68C1ZBQoiRku7c/view) · **9 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Pruebas con astronautas menos de 30 dias

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Incidence Comments](#incidence-comments)

---

### Atrial Fibrillation/ Atrial Flutter Cliff

## Branch Baseline

Atrial fibrillation is a rapid irregularly irregular atrial rhythm. It may be asymtpmatic or symptoms may incluide palpitations and sometimes weakness, dyspnea and presyncope. Atrial thombi may form increasing the risk of thromboembolic stroke. Diagnosis is established by ECG. Treatment includes medications for rate control and anticoagulation, or cardioversion. Prevention can be achieved in selected candidates with radiofrequency ablation. (Miyasaka, 2006) Atrial fibrillation is the most common atrial arrhythmia seen in astronauts on the ground. No cases of atrial fibrillation have been reported in flight. (Barr, 2010) Atrial flutter (AFL) is very similar to atrial fibrillation. AFL is also a type of supraventricular (above the ventricles) tachycardia (rapid heart beat). In atrial flutter, the upper chambers (atria) of the heart beat too fast, which results in atrial muscle contractions that are faster and out of sync with the lower chambers (ventricles). The atrial rates of between 240 and 400 beats per minute and some degree of atrioventricular node conduction block.

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

- Data Category: Model

- Space Adaptation: No

- Incidence Type: Rate

## Distribution Data

- Incidence: Lognormal

- Occurrence: Poisson

### Female Data Characteristics

- Mean: 0.0002343

- Standard Deviation: 6.109E-07

5/11/2020 4:52:03 PM Atrial Fibrillation/ Atrial Flutter Cliff page: 1

### Male Data Characteristics

- Mean: 0.0007107

- Standard Deviation: 6.106E-07

## Incidence Comments

Using the numerical Bayesian update code called Win BUGS, several steps were taken to improve the estimate of the atrial fibrillation/flutter incidence rate in the astronaut corps in order to find an approximation suitable for IMM use. The analysis used the general population data from Miyasaka et al., (Granada, 2000) and LSAH astronauts on the ground.

Results are listed as events per person-year

- Male: Mean 0.0007107, SD 0.0000006106 (5% 0.0007097, 95% 0.0007117)

- Female: Mean 0.0002343, SD 0.0000006109 (5% 0.0002333, 95% 0.0002353)

- Total: Mean 0.0004729, SD 0.0000004869 (5% 0.0004721, 95% 0.0004737)

This model should be considered rather limited because it assumes an average occurrence rate of atrial fibrillation and atrial flutter with no data specifically regarding important factors such as race or previous cardiac diseases and health. Assumptions were also made when non-age- specific 95% confidence intervals were used for age-specific data. The understanding of this limitation is necessary for any use of this model. In spite of this limitation, the assumptions, and the data available, this model is likely a reasonable approximation of atrial fibrillation incidence.

This model would be more accurate with further investigations into the causes of atrial fibrillation in the astronaut corps. This model can serve as a baseline for such future studies that would involve more data and risk parameters of AF (Gilkey, 2012) (Gilkey, 2013).

### Information Regarding Prevention

- Disqualifying criteria: in the Cardiovascular area includes: Pathologic hypertrophy or dilation of the heart; any evidence of coronary heart

disease, treated or untreated (medically or surgically) is potentially disqualifying and will require review by the MSMB; History or evidence of cardiac arrhythmia, conduction defect (or other electrocardiographic abnormality) will require review by the MSMB and is potentially disqualifying; Need for a pacemaker or implantable defibrillator; valvular disorders of the heart associated with hemodynamic anomalies; Development of any of the following signs or symptoms during exercise stress testing to 100% of predicted maximum heart rate (for age) (a)

Ischemic ST segment changes, (b) Hypotension, or other inappropriate BP response, (c) Significant arrhythmias, ectopy, or conduction defects; (d) Development of chest pain or other physical symptoms indicative of myocardial ischemia. (NASA, 2007)

- Other: We found 2 cases of unidentified cardiac arrhythmias in Apollo 1 described as bigeminal rhythm correlated with extreme fatigue. This

experience prompted the inclusion of anti-arrhythmic medications and potassium supplements on subsequent flights. (NASA, 1975).

The longitudinal study of astronaut health reports that all cases of atrial arrhythmias reported among NASA astronauts have occurred terrestrially, were unrelated to space flight, and most were detected incidentally in asymptomatic crewmembers during occupational screening. (Barr, 2010); (Gilkey, 2010) Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Gilkey, 2012 2 Incidence Gilkey, 2013 3 Incidence 5/11/2020 4:52:03 PM Atrial Fibrillation/ Atrial Flutter Cliff page: 2

Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

- Data Category: Fixed

- Space Adaptation: No

- Incidence Type: Rate

## Distribution Data

- Incidence: Fixed

- Occurrence: Poisson

### Female Data Characteristics

- Fixed Rate: 0.00021

### Male Data Characteristics

- Fixed Rate: 0.00064

## Incidence Comments

In 2006, Miyasaka studied popylation of less than 55 years of age and found the above gender difference in incidence. (Miyasaka, 2006) 5/11/2020 4:52:03 PM Atrial Fibrillation/ Atrial Flutter Cliff page: 3

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.5 - 2 - 23 1 - 36.5 - 72 0 0 - 100 0 (best case scenario %: 69 - 92) 0.75 ISS-based Treatment 100 1 11 - 40 48 - 60 - 72 0 - 40 100 0 (worst case scenario %: 8 - 31) Untreated Best Case 0 0 11 - 40 1 - 36.5 - 72 0 - 23 0 - 100 0 Untreated Worst Case 0 0 24 - 65 48 - 60 - 72 24 - 65 100 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 4:52:03 PM Atrial Fibrillation/ Atrial Flutter Cliff page: 4

### Scenario Comments

The best case scenario is defined as an isolated episode of lone atrial fibrillation or atrial flutter. There is low risk of thrombo-embolic events.

The episode is asymptomatic or mildly symptomatic and/or resolves spontaneously. An underlying precipitating factor such as physical stress, infection, etc. may or may not be identified.

The worst case scenario is defined as new onset of atrial fibrillation or atrial flutter that is either symptomatic, sustained, or associated with complications requiring oral or intravenous treatment for rate or rhythm control, as well as prophylaxis for thrombo-embolic complications.

Percentages of how often best versus worst case scenarios occur The Canadian Registry of atrial fibrillation followed up newly diagnosed patients from the time of their diagnosis with ECG of atrial fibrillation. The probability of progression to chronic atrial fibrillation by 1 year was 8.6%. (Kerr, 2005)

In France, the ALFA Study, following a paroxysmal AF group found that, 8% progressed to chronic AF and 31.3% had recurrences. (Nieuwlaat, 2005) Of subjects with paroxysmal AF who participated in the Euro Heart Survey. Progression to chronic AF occurred in 15% of patients after 1 year of follow-up. (de Vos, 2010) Miyasaka reported that 25% of overall of AF cases were asymptomatic. 74% of overall cases were paroxysmal AF; defined as converting to sinus rhythm spontaneously or with treatment. The population sample had many other concurrent diagnoses, e.g. myocardial infarction, heart failure, valvular heart disease, artery disease, stroke, hypertension, diabetes mellitus, and dyslipidemia which are unlikely among the astronaut population. (Miyasaka, 2006) Of note, terrestrial treatment may include cardioversion which is not available on the ISS. Rates of recurrence differ widely and range between 8 and 31% which is the range we chose for the worst case scenario. (Kerr, 2005), (Nieuwlaat, 2005), (de Vos, 2010) Thus, the best case scenario is thus expected to occur in 69 to 92% of cases.

### Best Case Comments

Functional Impairment (FI) is derived from Table 4-9, Dysrhythmias, page 64 (American Medical Association, 2008). For a detailed description of grading refer to the CliFF Appendix. Clinical Phase I: By definition FI is 100%; estimated duration of ISS procedures is 0.5 to 0.75 hours to take vital signs and ECG. During Clinical Phase II, FI is estimated as 2 to 23%; duration is estimated in 1 to 72 hours, based on the AHA Guidelines (Fuster, 2006). During Clinical Phase III, AF is expected to resolve spontaneously or with treatment; FI is 0%. EVAC is estimated in 0 to 100%.

Cardiac arrhythmia is a class IIC medical event, requiring intervention if occurring in orbit, but it may require evacuation because of its potential impact on a mission. (Johnston, 2008) LOCL is not expected.

### Worst Case Comments

Functional Impairment (FI) is derived from Table 4-9, Dysrhythmias, page 64 (American Medical Association, 2008). For detailed description of grading refer to the CliFF Appendix. Clinical Phase I: By definition FI is 100%; estimated duration of ISS procedures is 0.5 to 1 hours to take vital signs, ECG, and give injectable medication. During Clinical Phase II, FI is estimated as 11 to 40%; duration is estimated as 48-72 hours, based on the AHA Guidelines (Fuster, 2006). During Clinical Phase III, AF may not resolve spontaneously or with treatment; FI is 0 to 40%.

Probability of EVAC is estimated as 100%. AF is a Class II b medical event, manageable with the Health Maintence System (HMS) but may require the astronaut to return at the next available deorbit opportunity for further evaluation and treatment (Johnston, 2008)

### Untreated Best Case Comments

Includes explanation of how 1] the FI in Clinical Phases 2 & 3 was derived , 2] the duration in Clinical Phase II and 3] the mission end states and their percentages (Include references for duration and FI (American Medical Association, 2008). Duration is the same as for treated best case scenario) Functional Impairment (FI) is derived from Table 4-9, Dysrhythmias, page 64 (American Medical Association, 2008). For detailed description of grading refer to the CliFF Appendix. During Clinical Phase II, FI is estimated as 11 to 40%; duration is estimated as 1 to 72 hours, similar to the treated best case scenario. During Clinical Phase III, AF is expected to resolve spontaneously in some with FI of 0 to 23% to account for the lack of treatment for those patients who do not convert spontaneously to sinus rhythm. EVAC is estimated to be 0 to 100%. AF is a Class II b medical event, manageable with the Health Maintence System (HMS) but may require the astronaut to return at next available opportunity for further evaluation and treatment (Johnston, 2008).

### Untreated Worst Case Comments

Functional Impairment (FI) is derived from Table 4-9, Dysrhythmias, page 64 (American Medical Association, 2008). For detailed description of grading refer to the CliFF Appendix. During Clinical Phase II, FI is estimated as 24 to 65%; duration is estimated as 48 to 72 hours, similar to the treated worst case scenario. During Clinical Phase III, AF is less likely to resolve spontaneously and since there is no treatment available ; FI remains 24 to 65%. EVAC is estimated to be 0 to 100%. AF is a Class II b medical event, manageable with the Health Maintence System (HMS) but may require the astronaut to return at the next available deorbit opportunity for further evaluation and treatment (Johnston, 2008). 5/11/2020 4:52:03 PM Atrial Fibrillation/ Atrial Flutter Cliff page: 5

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |
| ---------------------------------- | --------- | ------------ |
| Johnston, 2008 | 4 | EVAC |
| American Medical Association, 2008 | 3 | FI |
| Kerr, 2005 | 4 | BCWC |
| Nieuwlaat, 2005 | 4 | BCWC |
| de Vos, 2010 | 4 | BCWC |

5/11/2020 4:52:03 PM Atrial Fibrillation/ Atrial Flutter Cliff page: 6

The Resource Table (RT) Units

|  | Units Units | Available |  |
| -------- | ----------------- | ------------------ | ------------------- |
|  | Required Required | At Start |  |
|  | Best Worst | Of |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |

Aspirin 325mg tab. 0 3 60 Yes Yes anti-coagulation, to avoid thrombi formation, pain relief

| Blood Oximeter | 1 1 | 1 No | Yes Monitor VS |
| -------------- | --- | ---- | -------------- |

Blood Pressure Cuff (regular, 1 1 2 No Yes Measure blood pressure large)

| Blood Pressure Monitor | 1 1 | 1 No | Yes Measure blood pressure |
| ---------------------- | --- | ---- | -------------------------- |

ECG Monitor (Device, USB 1 1 1 No Yes Measure and monitor ECG Charge Cable, Lead Set Cable,

### Cue Card)

Lopressor (Metoprolol) 50 mg 0 12 60 Yes Yes Beta blocker to slow heart rate.

Pack of 12 ECG electrodes 1 1 5 Yes Yes Measure and monitor ECG

| Variable Oxygen System | 0 1 | 1 No | Yes Administration of oxygen |
| ---------------------- | --- | ---- | ---------------------------- |

### Resource Comments

The source for the resource table data was divered from clinical practice guidelines (Fuster, 2006). Oxygen included in the worst case (ISS Medical Operations, 2011). Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |
| --------------------------------- | --- | --------- | ------------ |
| Fuster, 2006 |  | 3 | Resources |
| NASA ISS Medical Operations, 2011 |  | 2 | Resources |

5/11/2020 4:52:03 PM Atrial Fibrillation/ Atrial Flutter Cliff page: 7

### Level Of Evidence

| Input Data | LOE Average | Description | Range |
| ---------------------- | ----------- | ----------- | ----- |
| Incidence | 2.5 | Excellent | 1-2 |
| Functional Impairment | 3 | Good | 2.1-3 |
| Best Case / Worst Case | 4 | Fair | 3.1-4 |
| EVAC / LOCL | 4 | Poor | 4.1-5 |
| Resources | 2.5 |  |  |
| QUALITY OF EVIDENCE | 3.2 |  |  |

5/11/2020 4:52:03 PM Atrial Fibrillation/ Atrial Flutter Cliff page: 8

### Reference List

Reference American Medical Association. Ear, Nose, Throat, and Related Structures. Guides to the Evaluation of Permanent Impairment. 6th ed.

- Chicago: American Medical Association Press; 2008. p. 247-79.

Barr Y. Atrial Arrhythmia Summit Summary Report. NASA National Aeronautics and Space Administration; 2010 Jun. Report No.: TP-2010- 216124. de Vos CB, Pisters R, Nieuwlaat R, Prins MH, Tieleman RG, Coelen RJ, et al. Progression from paroxysmal to persistent atrial fibrillation clinical correlates and prognosis. J Am Coll Cardiol 2010 Feb 23;55(8):725-31.

Fuster V, Ryden LE, Cannom DS, Crijns HJ, Curtis AB, Ellenbogen KA, et al. ACC/AHA/ESC 2006 Guidelines for the Management of Patients with Atrial Fibrillation: a report of the American College of Cardiology/American Heart Association Task Force on Practice Guidelines and the European Society of Cardiology Committee for Practice Guidelines (Writing Committee to Revise the 2001 Guidelines for the Management of

- Patients With Atrial Fibrillation): developed in collaboration with the European Heart Rhythm Association and the Heart Rhythm Society.

Circulation 2006 Aug 15;114(7):e257-e354.

Gilkey KM, McRae MP, Griffin EA, Kalluri AS, Myers JG. Bayesian Analysis For Risk Assessment of Selected Medical Events in Support of the Integrated Medical Model Effort. Technical Paper. Cleveland, OH: National Aeronautics and Space Administration, Glenn Research Center;

2012. Report No.: NASA/TP-2012-217120.

Gilkey KM, Griffin EA. An Estimate of Atrial Fibrillation and Atrial Flutter Occurrance Probability Based on the Rate of the Incidence in General US Population and in the Astronaut Corp. 2013.

Granada J, Uribe W, Chyou PH, Maassen K, Vierkant R, Smith PN, et al. Incidence and predictors of atrial flutter in the general population. J Am Coll Cardiol 2000 Dec;36(7):2242-6.

Johnston R, Dietlein L, Berry CA. Biomedical Results of Apollo. NASA SP-2006-368 ed. Washington D.C.: NASA; 1975.

Johnston S, Arenare B, Smart K. Medical Evacuation and Vehicles for Transport. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 139-61.

Kerr CR, Humphries KH, Talajic M, Klein GJ, Connolly SJ, Green M, et al. Progression to chronic atrial fibrillation after the initial diagnosis of paroxysmal atrial fibrillation: results from the Canadian Registry of Atrial Fibrillation. Am Heart J 2005 Mar;149(3):489-96.

Miyasaka Y, Barnes ME, Gersh BJ, Cha SS, Bailey KR, Abhayaratna WP, et al. Secular trends in incidence of atrial fibrillation in Olmsted County, Minnesota, 1980 to 2000, and implications on the projections for future prevalence. Circulation 2006 Jul 11;114(2):119-25.

NASA ISS Medical Operations. US ISS Content Checklist 20110611. version 11.0. 2011. Houston, ISS Medical Operations. 7-16-2010.

NASA OCHMO 80771201MED. NASA Crewmembers Medical Standards. Houston: NASA; 2007.

Nieuwlaat R, Capucci A, Camm AJ, Olsson SB, Andresen D, Davies DW, et al. Atrial fibrillation management: a prospective survey in ESC member countries: the Euro Heart Survey on Atrial Fibrillation. Eur Heart J 2005 Nov;26(22):2422-34. 5/11/2020 4:52:03 PM Atrial Fibrillation/ Atrial Flutter Cliff page: 9

---

## Source metadata

```yaml
source_filename: "atrial-fibrillation-atrial-flutter-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Pruebas con astronautas menos de 30 dias"
source_url: "https://drive.google.com/file/d/1w4u99hylARBwLj9nYK68C1ZBQoiRku7c/view"
source_drive_id: "1w4u99hylARBwLj9nYK68C1ZBQoiRku7c"
source_sha256: 1e4337daef24f62756957f90f72d02ae2f130f1d3c73fb9f7e9aeb7792dd4760
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 9
ocr_performed: false
```
