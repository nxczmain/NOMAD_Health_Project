# Acute Pancreatitis CLiFF

[View original PDF](https://drive.google.com/file/d/1Eaa8iQqGAtxRxeia2OxevOJH84swkUxu/view) · **8 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

### Acute Pancreatitis Cliff

## Branch Baseline

Acute Pancreatitis is an inflammation of the pancreas, a gland located behind the stomach. Common risk factors include gallstone disease, alcohol abuse, hypertriglyceridemia, medications, and post-procedural complications (i.e. endoscopic retrograde cholangiopancreatography, or ERCP).

However, there are multiple etiologies that fall under the broader categories of toxins, metabolic disorders, mechanical obstruction, trauma, and medication. Of note, approximately 10-25% of cases of acute pancreatitis have no readily identifiable causes and are termed idiopathic (Banks, 2002)

A typical presentation will include sudden-onset, rapidly progressive abdominal pain localized to the epigastric area. However, the pain can also lean heavier on the left or right side of the abdomen. Radiation to the upper back is also normal. Constitutional symptoms made include fever, nausea, vomiting, and perhaps diarrhea. Some patients may present in a jaundiced state while others may complain of dyspnea. In more severe cases pronounced hypotension and tachycardia will be present.

Acute pancreatitis should be distinguished from other causes of abdominal pain (i.e. acute cholecystitis or biliary colic). Diagnosis is made by a combination of patient history and serologies, namely serum lipase levels. Diagnostic imaging may be useful, but ultrasound specifically is normally not indicated due to overlying bowel gas leading to a high number of incomplete examinations (Dervenis, 1999) It is tenable that diagnostic imaging may not be useful, however, in the resource limited setting of spaceflight. The resources required to treat a case of acute pancreatitis are dependent upon the severity of the codition. This can be assessed by coupling clinical judgment with Ranson Criteria (score calculated using the patient’s age, white blood cell count, serum glucose level, serum AST, and serum LDH level). Unfortunately, the ability to assess all of these values is limited in spaceflight. Severe pancreatitis will warrant evacuation and, if progressing to sepsis or organ failure, may lead to loss of crew life.

Future plans include the developmnent of a Bayesian Analysis for this condition in order to provide a better estimate of the incidence of this condition for the astronaut population.

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

- Data Category: Fixed

- Space Adaptation: No

- Incidence Type: Rate

## Distribution Data

- Incidence: Fixed

- Occurrence: Poisson

## Data Characteristics

- Fixed Rate: 0.0003074

5/11/2020 4:27:50 PM Acute Pancreatitis Cliff page: 1

## Incidence Comments

There have been no cases of acute pancreatitis amongst the astronauts during spaceflight. However, one terrestrial case was documented by the Lifetime Surveillance of Astronaut Health (LSAH) as having occurred between 1959-1999, and reequiring hospitalization. (Johnston, 2008)

Determing the Incidence value data for this condition was a two-step process. The overall incidence for acute pancreatitis was obtained from an Annals of Epidemiology study that cited combined data from 1988-2003 in the National Hospital Discharge Survey (NHDS). The NHDS is conducted annually and covers geographic primary sampling units, hospitals within primary sampling units, and patients within hospitals in all 50 states and the District of Columbia (Fagenholz, 2007). The calculation came from ICD-9 coding for acute pancreatitis and was then adjusted by subtracting any records that concurrently coded for chronic pancreatitis. A rate of 0.84 events per 1,000 U.S. population was tabulated (95% CI: 0.65-1.0). Of note, this incidence rate is inclusive of all causes of acute pancreatitis. Gallstones, a well-documented trigger, are screened for as described by the medical standards for crewmembers. An additional screening abdominal ultrasound within one year of launch is required of astronauts prior to embarking upon a long duration mission of six months or longer (International Space Station Program, 2011). Other well-known etiologies of acute pancreatitis include hypertriglyceridemia and alcohol abuse. The former etiology is under the scope of crewmember screening through annual lipid profiles. The latter, alcohol abuse, is usually listed as the second most common cause. Acute pancreatitis rarely occurs in alcoholic patients without underlying changes of chronic pancreatitis already being established (American Gastroenterological Association (AGA), 2007). Screening in this regard is done by annual assessments of a crewmember’s liver function tests (International Space Station Program, 2011). Thus it has been established that many of the common triggers of acute pancreatitis are captured under the scope during medical selection and retention standards for astronauts. The second step in calculating incidence was to seek out only those cases that are classified as idiopathic. A prospective study between 1980 and 1988 performed in Auckland, New Zealand (Lee, 1992) revealed 31 of the 86 patients studied (36%) had an idiopathic cause to their pancreatitis. The mean age of the idiopathic cases was 53 years, range 31-79 years. A separate study based on data from the state of California executed a retrospective analysis from 1994-2001 of 70,231 adult patients hospitalized with first-time acute pancreatitis (Frey, 2006). Demographically, this study population was inclusive of both males and females, and was not limited to any particular race or age group. Idiopathic pancreatitis was labeled in 36.6% of overall cases.

Step 1:Incidence of acute pancreatitis within the 40-49 year-old age bracket is 0.84 cases per 1000 person-years. (Fagenholz, 2007)(0.84/1000 = 0.00084 events/person-year) Step 2:Adjusting this incidence rate to only those 36.6% cases that are idiopathic (Lee, 1992) (0.00084 x 0.366 = 0.0003074 events/person- year)

### Information Regarding Prevention

### Selection Criteria

Disqualifying conditions include, in general, any medical condition that may compromise mission operations or crew safety, or require urgent medical treatment while residing in the International Space Station (ISS). History of acute pancreatitis due to trauma or due to surgically corrected cholecystitis with no further episodes requires Special Consideration by the MSMB (International Space Station Program, 2011).

Other Surgical capabilities are limited in flight although ultrasound is available for diagnostic purposes.

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Frey, 2006 4 Incidence Fagenholz, 2007 4 Incidence Lee, 1992 4 Incidence 5/11/2020 4:27:50 PM Acute Pancreatitis Cliff page: 2

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 1 - 1.5 2 - 28 72 - 96 - 120 0 0 0 (best case scenario %: 80 - 85) ISS-based Treatment 100 2 - 3 17 - 50 24 - 48 - 72 0 - 50 100 0 - 7 (worst case scenario %: 15 - 20) Untreated Best Case N/A N/A 17 - 50 72 - 96 - 120 0 - 50 0 - 100 0 Untreated Worst Case N/A N/A 31 - 76 24 - 48 - 72 31 - 76 100 0 - 100 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 4:27:50 PM Acute Pancreatitis Cliff page: 3

### Scenario Comments

The best case scenario is defined as a course of an uncomplicated acute pancreatitis which resolves with minimal intervention. Such cases require the patient not be fed and kept nil per os (NPO, meaning nothing by mouth). Additional needs include IV fluid hydration and minimal pain management medications; possibly anti-emetics.

The worst case scenario is defined as a complicated acute pancreatitis with severe systemic manifestations (i.e. hemodynamic instability, acute respiratory distress syndrome, acute renal failure, necrotizing pancreatitis, acute cholecystitis). Depending upon the manifestation, multiple resources will be required starting with significant pain management and aggressive IV hydration, and may warrant advanced respiratory support, IV antibiotics, parenteral nutrition, and potentially definitive surgical management.

Percentages of how often best versus worse case scenarios occur were estimated from literature based upon terrestrial studies. Approximately 15-20% of patients with acute pancreatitis will develop severe disease and follow a prolonged course ( Forsmark, 2007)To allow for uncertainty, our estimated worst case scenario is 15-20%; thus the best case scenario is 80-85%.

### Best Case Comments

Functional Impairment values were derived by using the IMM severe non-space adaptation template. We deviated from the template in the untreated best case to account for more severe impairment without treatment. Upper Digestive Tract disease ratings are based on Table 6-4, pg. 107 (American Medical Association, 2008)Complex Regional Pain Syndrome – Lower Extremity (CRPS-LEI) ratings are based on Table 16- 15, pg. 541. The CRPS (LEI) ratings are then converted to a percentage of Whole Person Impairment (WPI), which are based on Table 16-1, pg. 495. (American Medical Association, 2008)Final ratings are calculated combining the Upper Digestive Tract FI and Whole Person Impairment using the Combined Values Chart as indicated in Appendix A, pgs. 604-606 (American Medical Association, 2008).

During Clinical Phase II, FI is estimated to be 2-28%. Mild, self-limiting cases of acute pancreatitis subside within 3-5 days. The lower limit is based on Fagenholz, whose study established a duration of 3-7 days (Fagenholz, 2007) and the upper limit is based on Tansey’s study with a duration of 5 days (Tansey, 1979). A duration of 3 to 5 days was chosen for Clinical Phase II as opposed to 3 to 7 days because the Fagenholz study included an elderly population. The duration of illness is expected to be less in the younger and healthier astronaut population.

During Clinical Phase III, a full recovery is anticipated and FI is estimated to be 0%.

By definition, EVAC and LOCL would not be expected for the best case scenario.

### Worst Case Comments

Functional Impairment values were derived by using the IMM severe non-space adaptation template. We deviated from the template in the untreated best case to account for more severe impairment without treatment. Upper Digestive Tract disease ratings are based on Table 6-4, pg. 107 (American Medical Association, 2008)Complex Regional Pain Syndrome – Lower Extremity (CRPS-LEI) ratings are based on Table 16- 15, pg. 541. The CRPS (LEI) ratings are then converted to a percentage of Whole Person Impairment (WPI), which are based on Table 16-1, pg. 495. (American Medical Association, 2008)Final ratings are calculated combining the Upper Digestive Tract FI and Whole Person Impairment using the Combined Values Chart as indicated in Appendix A, pgs. 604-606 (American Medical Association, 2008).

During Clinical Phase III, a full recovery may or may not occur and FI is estimated to be 0-50%. EVAC has occurred once in the Antarctic setting (abc news, 2012) and one hospitalization has occurred between 1959-1999 amongst the astronauts but not during spaceflight (Johnston, 2008).

EVAC is estimated to be 100%. LOCL upper limit is estimated based upon Fu’s study (Fu, 2007). As per the reference there were 44 early deaths, defined as death within the first 14 days, among the total of 643 patients with severe acute pancreatitis (44/643=7%). To allow for uncertainty we are estimating LOCL at 0-7%.

### Untreated Best Case Comments

Functional Impairment values were derived by using the IMM severe non-space adaptation template. We deviated from the template in the untreated best case to account for more severe impairment without treatment. Upper Digestive Tract disease ratings are based on Table 6-4, pg. 107 (American Medical Association, 2008)Complex Regional Pain Syndrome – Lower Extremity (CRPS-LEI) ratings are based on Table 16- 15, pg. 541. The CRPS (LEI) ratings are then converted to a percentage of Whole Person Impairment (WPI), which are based on Table 16-1, pg. 495. (American Medical Association, 2008)Final ratings are calculated combining the Upper Digestive Tract FI and Whole Person Impairment using the Combined Values Chart as indicated in Appendix A, pgs. 604-606 (American Medical Association, 2008).

During Clinical Phase II, FI is estimated to be 17-50%. Duration is 3-5 days, similar to the treated best case scenario.

During Clinical Phase III, a full recovery may or may not occur. This particular FI calculation deviated from the template to account for more severe impairment without treatment and is estimated to be 0-50% with EVAC estimated between 0-100%. LOCL is not expected. 5/11/2020 4:27:50 PM Acute Pancreatitis Cliff page: 4

### Untreated Worst Case Comments

Functional Impairment values were derived by using the IMM severe non-space adaptation template. We deviated from the template in the untreated best case to account for more severe impairment without treatment. Upper Digestive Tract disease ratings are based on Table 6-4, pg. 107 (American Medical Association, 2008)Complex Regional Pain Syndrome – Lower Extremity (CRPS-LEI) ratings are based on Table 16- 15, pg. 541. The CRPS (LEI) ratings are then converted to a percentage of Whole Person Impairment (WPI), which are based on Table 16-1, pg. 495. (American Medical Association, 2008)Final ratings are calculated combining the Upper Digestive Tract FI and Whole Person Impairment using the Combined Values Chart as indicated in Appendix A, pgs. 604-606 (American Medical Association, 2008).

During Clinical Phase II, FI is estimated to be 31-76%. Duration is 1-3 days, similar to the treated worst case scenario.

During Clinical Phase III, the estimate for FI remains 31-76%. Based on severe systemic manifestations (including pain), EVAC is estimated to be 100%. LOCL is estimated as 0-100% to account for a large degree of uncertainty due to the lack of available resources required to diagnose and treat this condition. Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ---------------------------------- | ------------------------ | ------------ | ------- |
| Forsmark, 2007 | 4 | BCWC |  |
| American Medical Association, 2008 | 3 | FI |  |
| American Medical Association, 2008 | 3 | FI |  |
| American Medical Association, 2008 | 3 | FI |  |
| ABC news, 2012 | 2 | EVAC |  |
| Johnston, 2008 | 2 | EVAC |  |
| Fu, 2007 | 4 | EVAC |  |
| 5/11/2020 4:27:50 PM | Acute Pancreatitis Cliff |  | page: 5 |
The Resource Table (RT) Units

|  | Units Units | Available |  |  |
| -------------- | ----------------- | ------------------ | --------------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |
| Bandaid strip | 2 2 | 20 Yes | No Cover IV insertion site. |  |
| Blood Oximeter | 1 1 | 1 No | Yes For VS Measurement |  |

Blood Pressure Cuff (regular, 1 1 2 No Yes Measure blood pressure large)

| Blood Pressure Monitor | 1 1 | 1 No | Yes Measure blood pressure |  |
| ------------------------ | ----- | ------ | ------------------------------------------- | --- |
| BZK wipes | 12 35 | 60 Yes | No Clean IV access site |  |
| Clear Bandage | 2 2 | 9 Yes | No Cover IV insertion site. |  |
| CMRS | 0 1 | 1 No | No Restrain the crew member while treating. |  |
| Dilaudid (Hydromorphone) | 6 21 | 18 Yes | Yes Pain management. |  |

2mg/mL, 1mL syringe ECG Monitor (Device, USB 1 1 1 No Yes Measure and monitor ECG Charge Cable, Lead Set Cable,

### Cue Card)

| Ertapenem 1gm | 0 6 | 6 Yes | Yes Antibiotic. |  |
| ------------- | --- | ----- | --------------- | --- |

Gauze pads (4x4) 1 1 50 Yes No Collect fluids or blood during the IV insertion.

| IV administration set | 1 1 | 3 Yes | Yes Administer IV fluids |  |
| --------------------- | --- | ----- | ------------------------------------- | --- |
| IV Cap | 1 1 | 5 Yes | No Cap the end of IV so the access is |  |

maintained when not in use. IV Catheter (18G, 20G, or 22G) 1 1 14 Yes Yes IV fluid administration IV Fluid 1L (1000mL) 4 4 5 Yes Yes Hydrate the crew member and provides access for medication administration if needed

| IV Fluid Air Filter | 1 1 | 3 Yes | No To filter air from IV set |  |
| ------------------- | --- | ----- | ---------------------------- | --- |
| IV pressure infuser | 1 1 | 1 No | No Administer IV fluid |  |

Lidocaine (Xylocaine) plain 1%, 0 6 3 Yes Yes Anesthetic for ertapenem injection 10mL multi dose vial

| Medical tape | 0.2 0.2 | 5 Yes | No Secure IV catheter. |  |
| ------------ | ------- | ------ | --------------------------------- | --- |
| Needle (23G) | 6 27 | 20 Yes | Yes Used to administer medication |  |

Nitrile gloves (large, medium, and 2 2 30 Yes No Universal precaution for care giver small) (pair) Pack of 12 ECG electrodes 1 1 5 Yes Yes Measure and monitor ECG

| Prilosec 20mg | 5 0 | 90 Yes | Yes Control gastric acid |  |
| -------------------- | --- | ------------------------ | ------------------------------- | ------- |
| Sharps container | 1 1 | 40 No | No Container for sharp objects. |  |
| 5/11/2020 4:27:50 PM |  | Acute Pancreatitis Cliff |  | page: 6 |
Units

|  | Units Units | Available |  |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- | --- |
|  | Required Required | At Start |  |  |  |
|  | Best Worst | Of |  |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |  |

Stethoscope 1 1 2 No Yes Used to obtain VS and auscultate the abdomen and chest sounds.

| Syringe (3cc) | 6 27 | 20 Yes | Yes Administer medication |  |  |
| ------------- | ---- | ------ | ------------------------- | --- | --- |
| Thermometer | 1 1 | 1 No | No Monitor temperature |  |  |
| Tourniquet | 1 1 | 1 No | No Used to start IV |  |  |

Ultrasound gel (2 packets) 2 2 17 Yes Yes Enhances the signal of the US machine.

Ultrasound machine 1 1 1 No Yes Use of the US machine in diagnosis of medical condition.

### Resource Comments

Acute pancreatitis is not included in the ISS medical checklist (Mission Operations Directorate (MOD), 2011). The resources included in the table are available on board and are based on terrestrial standards of care (Forsmark, 2007) Prilosec has replaced Nexium in the ISS Medical Kit (NASA Mission Operations Directorate (MOD), 2014).

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |  |
| ----------------------------------------------- | --- | --------- | ------------ | --- | --- |
| Forsmark, 2007 |  | 3 | Resources |  |  |
| NASA Mission Operations Directorate (MOD), 2014 |  | 2 | Resources |  |  |

### Level Of Evidence

| Input Data | LOE Average | Description |  | Range |  |
| ---------------------- | ---------------- | ------------------------ | --- | ----- | ------- |
| Incidence | 4 | Excellent |  | 1-2 |  |
| Functional Impairment | 3 | Good |  | 2.1-3 |  |
| Best Case / Worst Case | 4 | Fair |  | 3.1-4 |  |
| EVAC / LOCL | 2.66666666666667 | Poor |  | 4.1-5 |  |
| Resources | 2.5 |  |  |  |  |
| QUALITY OF EVIDENCE | 3.23333333333333 |  |  |  |  |
| 5/11/2020 4:27:50 PM |  | Acute Pancreatitis Cliff |  |  | page: 7 |
### Reference List

Reference ABC news. Antarctic Rescue Under Way; Pole Doc Waits. ABC News, Technology Headlines . 4-24-2012. Wellington, New Zealand, abc NEWS. 12-21-2012. American Gastroenterological Association (AGA) Institute on "Management of Acute Pancreatits" Clinical Practice and Economics Committee.

AGA Institute medical position statement on acute pancreatitis. GASTROENTEROLOGY 2007 May;132(5):2019-21.

American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. American Medical Association. Digestive System. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 101-27.

American Medical Association. Upper Extremities. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 383-492.

Banks PA. Epidemiology, natural history, and predictors of disease outcome in acute and chronic pancreatitis. Gastrointest Endosc 2002 Dec;56(6 Suppl):S226-S230. Dervenis C, Johnson CD, Bassi C, Bradley E, Imrie CW, McMahon MJ, et al. Diagnosis, objective assessment of severity, and management of acute pancreatitis. Santorini consensus conference. Int J Pancreatol 1999 Jun;25(3):195-210.

Fagenholz PJ, Castillo CF, Harris NS, Pelletier AJ, Camargo CA, Jr. Increasing United States hospital admissions for acute pancreatitis, 1988-

2003. Ann Epidemiol 2007 Jul;17(7):491-7.

Forsmark CE, Baillie J. AGA Institute technical review on acute pancreatitis. GASTROENTEROLOGY 2007 May;132(5):2022-44.

Frey CF, Zhou H, Harvey DJ, White RH. The incidence and case-fatality rates of acute biliary, alcoholic, and idiopathic pancreatitis in California, 1994-2001. Pancreas 2006 Nov;33(4):336-44.

Fu CY, Yeh CN, Hsu JT, Jan YY, Hwang TL. Timing of mortality in severe acute pancreatitis: experience from 643 patients. World J Gastroenterol 2007 Apr 7;13(13):1966-9.

International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

Johnston S, Arenare B, Smart K. Medical Evacuation and Vehicles for Transport. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 139-61.

Lee SP, Nicholls JF, Park HZ. Biliary sludge as a cause of acute pancreatitis. N Engl J Med 1992 Feb 27;326(9):589-93.

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 2014. Houston, TX, National Aeronautics and Space Administration (NASA).

Tansey WA, Wilson JM, Schaefer KE. Analysis of health data from 10 years of Polaris submarine patrols. Undersea Biomed Res 1979;6 Suppl:S217-S246. 5/11/2020 4:27:50 PM Acute Pancreatitis Cliff page: 8

---

## Source metadata

```yaml
source_filename: "acute-pancreatitis-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/1Eaa8iQqGAtxRxeia2OxevOJH84swkUxu/view"
source_drive_id: "1Eaa8iQqGAtxRxeia2OxevOJH84swkUxu"
source_sha256: 1289ae7e581574fa6b56d734356596dc2edead6887002280ed44ea05b2015bd4
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 8
ocr_performed: false
```
