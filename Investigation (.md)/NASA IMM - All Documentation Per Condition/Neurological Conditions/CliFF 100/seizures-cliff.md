# Seizures CLiFF

[View original PDF](https://drive.google.com/file/d/1--4xuRAYCdw2JOl-07FDURDWYShNTRrf/view) · **8 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Neurological Conditions/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

### Seizures Cliff

## Branch Baseline

A seizure is an episode of neurologic dysfunction caused by abnormal neuronal activity that results in a sudden change in behavior, sensory perception, or motor activity. The clinical spectrum of seizures includes simple and complex focal or partial seizures and generalized seizures. (Pillow,

2011) There have not been any reported cases of seizures occuring in the US space program.

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

| Data Category: | Model |  |
| ----------------- | ----- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Lognormal |  |
| ----------- | --------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Mean: | 0.00027 |  |
| -------------------- | -------------- | ------- |
| Standard Deviation: | 2.88E-05 |  |
| 5/11/2020 4:39:50 PM | Seizures Cliff | page: 1 |
## Incidence Comments

Evaluating the probability that an astronaut may experience a seizure during an exploration mission is necessary because this condition may greatly affect crewmember performance, health, and morale. An estimate of the probability of an astronaut experiencing a seizure was evaluated using data from the general population (Hauser, 1993), as well as astronaut data from the Lifetime Surveillance of Astronaut Health (LSAH) (Mason, 2011). The incidence rates of seizure from these sources were combined using a Bayesian update approach, numerical Bayesian update code WinBUGS, to estimate the appropriate representation for the rate of seizure for the time. By making the constant rate assumption, a Poisson probability distribution could be assumed to govern the probability of seizure (Gilkey, 2012).

The incidence of first unprovoked seizures among individuals 40-54 years of age was slightly higher in males (29) than females (25); however, for the purpose of this estimate the incidence rate of seizures among males and females was averaged (2.7× x 10e-4 events per person-year).

Because there is not a significant variation in the incidence of seizure between males and females, the average incidence rate was considered appropriate. The incidence of seizure is related to age— incidence rates were high among infants younger than 1 year and highest among persons older than 75 years of age. Confidence interval information was not available for first unprovoked seizures, therefore the error factor was estimated from 95% confidence interval constructed from total population data for epilepsy. A person experiencing a single unprovoked seizure was not diagnosed with epilepsy and thus was not included in the confidence interval data. The incidence rate of a first unprovoked seizure was 33% higher than the incidence rate of epilepsy, which is primarily due to the addition of those individuals who experienced only one unprovoked seizure. Data for this estimate was averaged from three age ranges: 40-44, 45-49, and 50-54 yielding and average age of 47 years. The error factor was estimated to be 1.19 from a 95% confidence interval constructed from male and female data from population age 40- 54 years (Gilkey, 2012). The mean incidence rate of seizure among astronauts was 0.00027 events per person-year. Standard deviation is 0.0000288. 95% Confidence Interval is 2.25 x 10e-4 – 3.19 x 10e-4 (Gilkey, 2012).

Limitations include assuming an average incidence rate of seizure irrespective of environmental conditions and the cause of seizure, and the calculation of the error factor was determined using epilepsy data, not unprovoked seizure data, as the paper did not have confidence interval information on first unprovoked seizure data. Additionally, data regarding repeated occurrences of seizures could influence the predicted rate of incidence since it is known that the occurrence of a single seizure greatly increases the likelihood of subsequent seizures. Use should be treated with understanding of these limitations; however, it is likely a reasonable representation of the rate of seizure incidence given the occurrence data available and given the assumptions made during construction of the estimate (Gilkey, 2012)

### Information Regarding Prevention

Selection criteria

- Disqualifying conditions in the neurologic disorders area include: any neurologic disorder that may interfere with the performance of duties;

tumors of the nervous system; vascular disorders of the nervous system (e.g. arteriovenous malformation, intracranial aneurysms, familial cavernous angioma, and temporal arteritis). Sporadic cavernous angiomas require neurologic evaluation. History of cerebrovascular accident (stroke, TIA, or subarachnoid hemorrhage). Asymptomatic disease of the carotid or vertebral arteries requires neurologic evaluation. Seizure disorders or history of seizure disorders, including absence seizures. History of traumatic brain injury with associated intracerebral hemorrhage with persistent neurologic deficits; or intracranial hemorrhage requiring surgery or with persistent neurologic deficits (e.g. subdural or epidural hematoma). (International Space Station Program, 2009); (NASA, 2007) (International Space Station Program, 2009)

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Gilkey, 2012 2 Incidence 5/11/2020 4:39:50 PM Seizures Cliff page: 2

### Alternative Incidence Data

### Analog Populations

In the US Air Force no flying personnel with the diagnosis of epilepsy have received waivers to date. In aviators with provoked seizures and a history of childhood seizures, consideration for a waiver to return to flying duties is entertained. In the US Air Force database, a total of 65 cases were noted that carried a diagnosis of seizure disorder of some sort requesting a flying waiver. Of that total, 25 were granted a waiver for an approval rate of 38.5%. Ten waiver applicants were for initial pilot training, six were for a trained pilot or navigator and the remaining nine were for non-pilot aircrew. In each of the 25 cases, the history was for childhood febrile or infantile seizures or for provoked seizures. There were no listed approved waivers for the diagnosis of epilepsy. (American Society of Aerospace Medicine Specialists, 2008)

An analysis of 10 years of data collected on US Navy Polaris submarine patrols over the ten year period 1963-1973 reported a total of 1685 medical events treated. Illness rates are indicated as new/cases/1000 man-days. There were a total of 53 neurological events during the 1963- 73 period. There were three seizure events; one of unknown etiology caused one sick day, one grand mal epilepsy, caused 2 sick days, and one post traumatic epilepsy caused 7 sick days. Illness rate and rate of days lost were significantly higher than those observed in the surface population (P <0.05) (Tansey, 1979). Our estimate rate per person year is 0.0000007 (3 seizures/4,410,000 person-days). Four EVACs occurred but there is no information by condition.

A study was conducted to examine the risk of undergoing an epileptic seizure as a function of differing levels of occupational stress (physical and mental) in new military recruits with no previous history of epilepsy or with epilepsy in remission for over 2 years. The medical records of over 300,000 18-year-old men recruited to the Israeli Army between mid-eighties and mid-nineties were used to assemble a cohort, which was followed for a period of 30 months. The severity of epilepsy at recruitment was determined according to four categories, 0 (no history of seizures) and 1-3 (history of seizures with different relapse-free periods, with or without treatment). The soldiers were subdivided according to their occupational categories into: combat units (CU), maintenance units (MU), and administrative units (AU). The annual incidence rates per 100,000 in category 0 were 317, 298, and 401 in AU, MU, and CU, respectively. The incidence of seizures in category 0 was higher (relative risk [RR] = 1.29, CI = 1.03-1.62) in CU compared to AU and MU. No differences were found for seizure recurrence among various occupational groups. The increased risk of seizures in CU compared to AU and MU may indicate contribution of service conditions in CU, like physical and mental stress. The equivalent rates of seizure relapse, regardless of the type of occupation, suggest the need for minimal occupational restrictions for epilepsy patients who have been free of seizures for long periods (Moshe, 2008). Rates per person-year are 0.00317, 0.00298, and 0.00401 respectively. 5/11/2020 4:39:50 PM Seizures Cliff page: 3

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.33 - 1 - 20 0.33 - 24.165 - 48 0 100 0 (best case scenario %: 82 - 90) 0.5 ISS-based Treatment 100 0.5 - 11 - 50 0.5 - 24.25 - 48 0 - 50 100 1 - 4 (worst case scenario %: 10 - 18) 0.75 Untreated Best Case 0 0 11 - 35 0.33 - 24.165 - 48 0 - 20 100 0 Untreated Worst Case 0 0 31 - 100 0.5 - 24.25 - 48 31 - 100 100 0 - 100 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.)

### Scenario Comments

Best case is defined as a seizure that responds to drug therapy and does not recur.

Worst case is defined as a seizure that does not respond to initial drug therapy and/or recurs.

Of note, all seizures occurring within 24 hours are considered a single seizure. (Adams, 2007)

Best case/worst case percentages The percentages of worst versus best case were determined using the rate of recurrence established in the in the United Kingdom at 10-18%. (Bonnett, 2010) 5/11/2020 4:39:50 PM Seizures Cliff page: 4

### Best Case Comments

The functional impairments (FI) calculation for Seizures follows the IMM severe non-space adaptation template. Seizures affect consciousness, which is the basis for our FI calculations. Consciousness and awareness ratings are based on Table 13-4, p. 327.

Episodic Loss of Consciousness or awareness ratings are based on Table 13-5, p. 328. (American Medical Association, 2008)

By definition during Clinical Phase I, FI is 100% and duration is estimated to be 20-30 minutes for diagnosis evaluation for neurological impairment and initial treatment. During Clinical Phase II, Functional Impairment is estimated in 1-20%. Duration s estimated at 20 minutes to 24 hours. By definition, during Clinical Phase III complete recovery and 0% functional impairment is expected. By definition, EVAC is a consideration based on health concerns and the potential to compromise flight safety. It is estimated at 100%. LOCL is not expected for this scenario.

### Worst Case Comments

The functional impairments (FI) calculation for Seizures follows the IMM severe non-space adaptation template. Seizures affect consciousness, which is the basis for our FI calculations. Consciousness and awareness ratings are based on Table 13-4, p. 327; Episodic Loss of Consciousness or awareness ratings are based on Table 13-5, p. 328. (American Medical Association, 2008)

By definition during Clinical Phase I, FI is 100% and duration is estimated to be 30 to 45 minutes for diagnosis evaluation for neurological impairment and initial treatment following the ISS Medical Checklist procedures and clinical experience. During Clinical Phase II, FI is estimated at 11 to 50%. Duration is estimated at 0.5-48 hours, based in the time estimated to arrange for evacuation. During Clinical Phase III, some or incomplete recovery is expected, with functional impairment estimated at 0-50%. EVAC is expected for 100% of worst case scenario. Sudden epilepsy deaths have been estimated at less than 1% (Jehi, 2010) and in newly diagnosed epilepsy the standardized mortality ratio (SMR) is 2.6; 95% Confidence intervaI1.8-3.5. (Rakitin, 2011)To allow for uncertainty LOCL is estimated at 1 to 4%.

### Untreated Best Case Comments

The functional impairments (FI) calculation for Seizures follows the IMM severe non-space adaptation template. Seizures affect consciousness, which is the basis for our FI calculations. Consciousness and awareness ratings are based on Table 13-4, p. 327; Episodic Loss of Consciousness or awareness ratings are based on Table 13-5, p. 328 (American Medical Association, 2008).

During Clinical Phase II, Functional Impairment is estimated at 11-36%. Duration is 20 minutes to 48 hours similar to the treated best case scenario. During Clinical Phase III functional impairment is estimated at 0 to 20%. EVAC of a crew member with seizures is estimated at 100% for in-hospital evaluation, similar to the treated best case scenario. LOCL is not expected and it is estimated at 0%.

### Untreated Worst Case Comments

The functional impairments (FI) calculation for Seizures follows the IMM severe non-space adaptation template. Seizures affect consciousness, which is the basis for our FI calculations. Consciousness and awareness ratings are based on Table 13-4, p. 327; Episodic Loss of Consciousness or awareness ratings are based on Table 13-5, p. 328 (American Medical Association, 2008). During Clinical Phase II, FI is estimated at 31 to 100%. Duration is estimated at 0.5-48 hours, similar to the treated worst case scenario. During Clinical Phase III, no recovery is expected, with functional impairment remaining at 31-100%. EVAC is expected for 100% of worst case scenario. LOCL is estimated at 0-100% without treatment available.

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

American Medical Association, 2008 3 FI Jehi, 2010 4 EVAC Rakitin, 2011 4 EVAC Bonnett, 2010 4 BCWC 5/11/2020 4:39:50 PM Seizures Cliff page: 5

The Resource Table (RT) Units

|  | Units Units | Available |  |  |
| -------------- | ----------------- | ------------------ | ----------------------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |
| Blood Oximeter | 1 1 | 1 No | Yes To measure blood oxygen levels. |  |

Blood Pressure Cuff (regular, 1 1 2 No Yes Measure blood pressure large)

| Blood Pressure Monitor | 1 1 | 1 No | Yes Measure blood pressure |  |
| ---------------------- | ---- | ------ | ---------------------------------------- | --- |
| BZK wipes | 5 10 | 60 Yes | No Cleanse skin. |  |
| CMRS | 0 1 | 1 No | No Restrain crew member to ensure safety |  |

ECG Monitor (Device, USB 0 1 1 No Yes Measure and monitor ECG Charge Cable, Lead Set Cable,

### Cue Card)

Gauze pads (4x4) 1 7 50 Yes No To absorb blood or fluids from skin Levetiracetram (Keppra) 500mg 30 30 30 Yes Yes Seizure control and prevention Medical tape 0.1 3 5 Yes No Single-coated adhesive tape to secure IV Nitrile gloves (large, medium, and 1 1 30 Yes No Personal Protective equipment for CMO small) (pair) Pack of 12 ECG electrodes 0 1 5 Yes Yes Measure and monitor ECG Sharps container 1 1 40 No No To dispose of medical waste such as used medical needles, scalpels, IV catheters, razors, vials

| Syringe (3cc) | 0 1 | 20 Yes | Yes To flush IV catheter as needed |  |
| ---------------------------- | --- | ------ | ---------------------------------- | --- |
| Valium (Diazepam) 5 mg/mL, 2 | 1 2 | 2 Yes | Yes To treat seizures |  |

mL syringe

| Variable Oxygen System | 0 1 | 1 No | Yes Administration of oxygen |  |
| ---------------------- | --- | ---- | ---------------------------- | --- |

### Resource Comments

The table was revised on 9/21/2011 to include IV tubing, and adding rationales.

Seizures is included as a medical condition in the ISS Medical Checklist. All resources included in the table are included in ISS Medical checklist (International Space Station Integrated Medical Group, 2008)and/or ISS Checs Catalog. (Mission Operations Directorate (MOD), 2011).

Comparison of terrestrial guidelines versus ISS treatment Electroencephalography is recommended for patients presenting with a first seizure, and neuroimaging is recommended for adults before starting antiepileptic medications. These tests are not available on board. Patients with a normal neurologic examination, normal test results, and no structural brain disease do not require hospitalization or antiepileptic medications. (Adams, 2007) (American Society of Aerospace Medicine Specialists, 2008) The treatment recommended in the ISS medical checklist is similar to terrestrial guidelines except that lacking tests and imaging, medications are started immediately.

| 5/11/2020 4:39:50 PM |  | Seizures Cliff |  | page: 6 |
| -------------------- | --- | -------------- | --- | ------- |
Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |  |
| ----------------------------------------------- | --- | --------- | ------------ | --- | --- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 | Resources |  |  |

### Level Of Evidence

| Input Data | LOE Average | Description |  | Range |  |
| ---------------------- | ----------- | -------------- | --- | ----- | ------- |
| Incidence | 2 | Excellent |  | 1-2 |  |
| Functional Impairment | 3 | Good |  | 2.1-3 |  |
| Best Case / Worst Case | 4 | Fair |  | 3.1-4 |  |
| EVAC / LOCL | 4 | Poor |  | 4.1-5 |  |
| Resources | 2 |  |  |  |  |
| QUALITY OF EVIDENCE | 3 |  |  |  |  |
| 5/11/2020 4:39:50 PM |  | Seizures Cliff |  |  | page: 7 |
### Reference List

Reference Adams SM, Knowles PD. Evaluation of a first seizure. Am Fam Physician 2007 May 1;75(9):1342-7.

American Medical Association. Central and Peripheral Nervous System. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 321-45.

American Society of Aerospace Medicine Specialists. Clinical Practice Guideline for Seizure Disorders. Aerospace Medical Association . 2008.

Aerospace Medical Association. 9-21-2011.

Bonnett LJ, Tudur-Smith C, Williamson PR, Marson AG. Risk of recurrence after a first seizure and implications for driving: further analysis of the Multicentre study of early Epilepsy and Single Seizures. BMJ 2010;341:c6477.

Gilkey KM, McRae MP, Griffin EA, Kalluri AS, Myers JG. Bayesian Analysis For Risk Assessment of Selected Medical Events in Support of the Integrated Medical Model Effort. Technical Paper. Cleveland, OH: National Aeronautics and Space Administration, Glenn Research Center;

2012. Report No.: NASA/TP-2012-217120.

Hauser WA, Annegers JF, Kurland LT. Incidence of epilepsy and unprovoked seizures in Rochester, Minnesota: 1935-1984. Epilepsia 1993 May;34(3):453-68. International Space Station Integrated Medical Group. Medical Checklist ISS- All Expeditions. Houston: National Aeronautics and Space Administration; 2008. International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

Jehi L. Sudden death in epilepsy, surgery, and seizure outcomes: the interface between heart and brain. Cleve Clin J Med 2010 Jul;77 Suppl 3:S51-S55. Mason S. Data Request to LSAH for Angina, Seizure, and Biliary Colic. Gilkey K, editor. 3-8-2011.

Moshe S, Shilo M, Chodick G, Yagev Y, Blatt I, Korczyn AD, et al. Occurrence of seizures in association with work-related stress in young male army recruits. Epilepsia 2008 Aug;49(8):1451-6.

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

NASA OCHMO 80771201MED. NASA Crewmembers Medical Standards. Houston: NASA; 2007.

Pillow M. Seizure Assessment in the Emergency Department . Kulkani R, editor. WebMD - Medscape Reference . 5-31-2011. New York, WebMD. 9-20-2011. Rakitin A, Liik M, Oun A, Haldre S. Mortality risk in adults with newly diagnosed and chronic epilepsy: a population-based study. Eur J Neurol 2011 Mar;18(3):465-70. Tansey WA, Wilson JM, Schaefer KE. Analysis of health data from 10 years of Polaris submarine patrols. Undersea Biomed Res 1979;6 Suppl:S217-S246. 5/11/2020 4:39:50 PM Seizures Cliff page: 8

---

## Source metadata

```yaml
source_filename: "seizures-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Neurological Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/1--4xuRAYCdw2JOl-07FDURDWYShNTRrf/view"
source_drive_id: "1--4xuRAYCdw2JOl-07FDURDWYShNTRrf"
source_sha256: a1ecc3962156801b4d520167c670fae6c041346d3114d0e731b76b45b60e40ad
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 8
ocr_performed: false
```
