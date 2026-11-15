# Otitis Media CLiFF

[View original PDF](https://drive.google.com/file/d/1uTxFbYQ59feg-xoUyl4uGIxK_iLs2hLn/view) · **8 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

### Otitis Media Cliff

## Branch Baseline

Otitis media is a bacterial or viral infection of the middle ear. It is usually accompanied by an upper respiratory infection. It is characterized by ear pain, a sensation of warmth, and decreased hearing. Signs include a red bulging eardrum, a loss of normal ear drum landmarks and fever. Treatment is with decongestants and antibiotics when a bacterial etiology is suspected. (International Space Station Integrated Medical Group, 2006)

Medical events of otitis media have been reported in the US space program.

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

| Data Category: | In-flight |  |
| ----------------- | --------- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Gamma |  |
| ----------- | ------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Events: | 4 |  |
| ---------------------------------------------------- | ----------------------------- | --- |
| Person Years: | 45.49 |  |
| Space Flight Incidence Rate (Events / Person Years): | 4 / 45.49 = 0.087931413497472 |  |

## Incidence Comments

The source of the incidence data is a compliation of the available in flight medical events (Walton, 2010).

Added 1 event for a total of 4 events and added 18.17 to the person years for a total of 45.53 person years (Saile, 2017).

Updated the Person-Years based on the revised real world system integrated incidence data. The integrated person years changed from 18.17 to 18.13 so the conditions person years changed from 45.53 to 45.49 (Saile L., 2017)

| 5/11/2020 5:41:53 PM | Otitis Media Cliff | page: 1 |
| -------------------- | ------------------ | ------- |
### Information Regarding Prevention

Disqualifying conditions include chronic mastoiditis or mastoid fistula, acute or chronic otitis media, suppurative or serous, history or presence of abnormal labyrinthine function, including Meniere's disease; history of attacks of vertigo, with or without other symptoms; tinnitus that interferes with hearing and communication; any disease or deformity of the ear or mastoid that interferes with auditory or vestibular functions such that emergency egress or successful completion of the mission may be compromised; auditory impairment interfering with speech discrimination; and any chronic disorder or defect that interferes with ventilation of the middle ear. (International Space Station Program, 2002)

- Contingency measure(s): ISS checklist describes symptoms, exam and treatment for otitis media, supurative or serous.

- Other: aspirin causes ringing in the ears

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Walton, 2010 1 Incidence Saile L., 2017 1 Incidence

### Alternative Incidence Data

In the, 2006 National Ambulatory Care Medical Survey presents 1.5% office visits in the United States, with primary diagnosis otitis media and eustachian tubes disorders, with corresponding standard error of 0.1, by patient’s gender. The gender difference is 2.0 for males and 1.2 for females, with a 0.3 and 0.1 standard errors respectively.

Williamson et al. reported 4.86 consultation rate for acute otitis media (AOM) per 1000 by age greater than 21 years old in Britain. and 1.93 for chronic suppurative otitis media (SOM) (Williamson, 2006).

A retrospective study by Leskinen reported severe complications rate of 0.32 per 100,000, in age 16-75 years. 26% of subjects with severe complications developed hear loss. (Leskinen, 2005) 5/11/2020 5:41:53 PM Otitis Media Cliff page: 2

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.5 0 - 9 48 - 108 - 168 0 0 0 (best case scenario %: 80 - 100) ISS-based Treatment 100 0.5 1 - 27 120 - 180 - 240 0 - 9 0.5 - 1 0 (worst case scenario %: 0 - 20) Untreated Best Case 0 0 1 - 27 48 - 108 - 168 0 - 9 0 0 Untreated Worst Case 0 0 11 - 42 120 - 180 - 240 1 - 42 0 - 100 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 5:41:53 PM Otitis Media Cliff page: 3

### Scenario Comments

The best case scenario is defined as having uncomplicated acute otitis media that is treated with antibiotics and improves rapidly, with any pain easily controlled by Ibuprofen.

The worst case scenario is defined as having severe acute otitis media and treatment failure which prolongs the duration of symptoms, requires the use of a different broad spectrum antibiotic, is accompanied by pain that cannot be controlled with Ibuprofen, and may cause hearing loss. Percentages of how often best versus worst case scenarios occur based on the Real World Systems data there were no worst cases so to integrate this data into the BC/WC percentage the algorithm developed with the original data set was used for all the medical events in both data sets. Therefore, if the next case is a worst case we would 1/5 or 20% of cases as worst cases. If the next case is best case, we would have 5/5 or 100%. Thus the percentage for worst case is 0-20% (Saile L., 2017)

The previous best and worst case percentages turned out to be the same percentages used when integrating the Real World Systems data and the algorthim with the "next case" used in the original data set. The first percentage was determined using natural course of otitis media for pediatric population, about 80% will resolve spontaneously and 20% will likely remain symptomatic (Rosenfeld, 2003). Clinical Practice Guidelines for otitis media apply to children less than 12 years old; however, a natural course in adults has not been studied. The literature review of adult studies present a wide range variability of incidence and offer contradictory information. Leskinen presented less than 1% complications in adult population, and they stem from acute otitis media (Leskinen, 2005). De Zinis established that 0.04 % of adults will suffer facial paralysis (de Zinis, 2003). Agrawal stated that complications in adults derive from chronic otitis media (Agrawal, 2005). Vikram’s prospective study has 125 subjects with uncomplicated disease versus 62 with complicated disease for all ages. For age 26-35 the ratio was 20:5, for age 36-45 7:4 and over 46 2:3, however, this was for rural and illiterate population with limited access to health care (Vikram, 2008).

### Best Case Comments

During Clinical phase I the functional impairment (FI) is by definition 100% and its duration is half an hour (0.5) based on the time it takes to obtain the equipment and checklist, follow the protocol for diagnosing this medical problem and initiate treatment. During Clinical Phase II the FI was calculated by using Table 11-4, Vestibular disorders, p 258 of the AMA Guides for Functional Impairment (American Medical Association, 2008). Refer to Appendix A for detailed description of grading. The FI is estimated to be 0 to 9%. Mild otitis media duration is estimated to be 2 days when symptoms will improve to 7 days when treatment is completed (Rosenfeld, 2003). Episodic otitis media is expected to resolve completely with treatment and return to zero % FI for clinical phase III (American Medical Association, 2008).

### Worst Case Comments

The worst case scenario For Clinical Phase I, duration and FI are similar to best case scenario. During Clinical Phase II, the FI was calculated by using Table 11-4, Vestibular disorders, p 258 of the AMA Guides for Functional Impairment (American Medical Association, 2008).

Refer to Appendix A for detailed description of grading. FI is 1 to 27%, based in the AMA Guides. The duration is 5-10 days, the amount of time it would take to recognize that initial treatment failure occurred and to go through a second round of broad-spectrum treatment. For Clinical Phase III, FI will remain 0 to 9%. Unresolved complicated otitis media may require evacuation in the case of intra-temporal or intra-cranial complications requiring surgery, and we are estimating a 0.5 to 1% risk (Leskinen, 2005) (Zernotti, 2005).

### Untreated Best Case Comments

By definition there is no treatment or diagnosis for Clinical Phase I. During Clinical Phase II, the FI was calculated by using Table 11-4, Vestibular disorders, p 258 of the AMA Guides for Functional Impairment (American Medical Association, 2008). Refer to Appendix A for detailed description of grading. FI based in the AMA Guidelines is 1 to 27%. Duration based on the natural course of disease is estimated from 2-7 days according to whether it goes down the best or worst case scenario route. There are a large number of cases of otitis media that resolve without treatment, For Clinical Phase III, FI is 0 to 9% FI.

### Untreated Worst Case Comments

By definition there is no treatment or diagnosis for Clinical Phase I. During Clinical Phase II, the FI was calculated by using Table 11-4, Vestibular disorders, p 258 of the AMA Guides for Functional Impairment (American Medical Association, 2008). Refer to Appendix A for detailed description of grading. FI may range from 11 to 42%. The estimation for duration in Clinical Phase II is 5-10 days. During Clinical Phase III, FI may or may not improve lacking treatment, and is estimated 1 to 42. The untreated worst case scenario may progress into intra-cranial or intra- temporal complications requiring surgery. To account for uncertainty, the risk of evacuation is estimated from 0 to 100%. There is no estimated risk of loss of crew life. In Zernotti's study there were no deaths within the gruop of patients with otological complications. Rather patients deaths related to post-otitis intracranial complications. (Zernotti, 2005) 5/11/2020 5:41:53 PM Otitis Media Cliff page: 4

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ---------------------------------- | ------------------ | ------------ | ------- |
| American Medical Association, 2008 | 3 | FI |  |
| Leskinen, 2005 | 4 | EVAC |  |
| Zernotti, 2005 | 4 | EVAC |  |
| Saile L., 2017 | 1 | BCWC |  |
| 5/11/2020 5:41:53 PM | Otitis Media Cliff |  | page: 5 |
### Additional Comments

- We searched PubMed using keywords: otitis media and incidence, otitis media and epidemiology, and otitis media and statistics. Because otitis

media occurs predominantly in children, the incidence data for adults is difficult to obtain.

| 5/11/2020 5:41:53 PM | Otitis Media Cliff | page: 6 |
| -------------------- | ------------------ | ------- |
The Resource Table (RT) Units

|  | Units Units | Available |  |  |  |  |
| -------- | ----------------- | --------- | -------------------- | --------- | --- | --- |
|  | Required Required | At Start |  |  |  |  |
|  | Best Worst | Of |  |  |  |  |
| Resource | Case Case | Mission | Consumable Essential | Rationale |  |  |

Amoxicillin 500 mg capsule 14 20 100 Yes Yes To fight infection.

| Disposable Otoscope Specula | 1 2 | 90 | Yes No | Aural exams |  |  |
| --------------------------- | --- | --- | ------ | ----------- | --- | --- |

(regular, small) Motrin (Ibuprofen) 400mg 8 24 400 Yes Yes For pain and inflammation Otoscope (Head, Handle, and 1 1 1 No Yes Light source for nasal, oral, aural, and eye

| USB cable) |  |  |  | exams. |  |  |
| ----------- | --- | --- | ----- | ---------------------- | --- | --- |
| Thermometer | 1 1 | 1 | No No | To measure temperature |  |  |

### Resource Comments

The source of the resource table data was derived from ISS Medical Check List. (International Space Station Integrated Medical Group, 2006)

Afrin dosing is 4 sprays (2 per nostril); one spray equals 1 drop, 15 drops equal 1 ml; each 3 ml bottle contains about 45 doses.

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value |  | LOE Category |  |  |
| ----------------------------------------------------- | --- | --------- | --- | ------------ | --- | --- |
| International Space Station Integrated Medical Group, |  | 2 |  | Resources |  |  |

2008

### Level Of Evidence

| Input Data | LOE Average |  | Description |  | Range |  |
| ---------------------- | ----------- | ------------------ | ----------- | --- | ----- | ------- |
| Incidence | 1 |  | Excellent |  | 1-2 |  |
| Functional Impairment | 3 |  | Good |  | 2.1-3 |  |
| Best Case / Worst Case | 1 |  | Fair |  | 3.1-4 |  |
| EVAC / LOCL | 4 |  | Poor |  | 4.1-5 |  |
| Resources | 2 |  |  |  |  |  |
| QUALITY OF EVIDENCE | 2.2 |  |  |  |  |  |
| 5/11/2020 5:41:53 PM |  | Otitis Media Cliff |  |  |  | page: 7 |
### Reference List

Reference Agrawal S, Husein M, MacRae D. Complications of otitis media: an evolving state. J Otolaryngol 2005 Jun;34 Suppl 1:S33-S39.

American Medical Association. Ear, Nose, Throat, and Related Structures. Guides to the Evaluation of Permanent Impairment. 6th ed.

- Chicago: American Medical Association Press; 2008. p. 247-79.

de Zinis LOR, Gamba P, Balzanelli C. Acute Otitis Media and Facial Nerve Paralysis in Adults. Otology & Neurotology 2003;24:113-7.

International Space Station Integrated Medical Group. Medical Checklist ISS- All Expeditions. Houston: National Aeronautics and Space Administration; 2008. International Space Station Program. Medical Standards and Certification Procedures For Space Flight Participants. NASA; 2002.

Leskinen K, Jero J. Acute complications of otitis media in adults. Clin Otolaryngol 2005 Dec;30(6):511-6.

Rosenfeld RM, Kay D. Natural History of Untreated Otitis Media. The Laryngoscope 2003 Oct;(113):1645-57.

Saile L., Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence V2. 2017.

Saile L., Boley L, Arellano J, Kerstman E. iMED Best and Worst Case Percentage Update. 2017.

Saile L, Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence. 2017.

Vikram BK, Khaja N, Udayashankar SG, Venkatesha BK, Manjunath D. Clinico-epidemiological study of complicated and uncomplicated chronic suppurative otitis media. J Laryngol Otol 2008 May;122(5):442-6.

Walton M, Kerstman E, IMM. In-flight Compilation v20100414_Incidence_calculation. 2010.

Williamson I, Benge S, Mullee M, Little P. Consultations for middle ear disease, antibiotic prescribing and risk factors for reattendance: a case- linked cohort study. Br J Gen Pract 2006 Mar;56(524):170-5.

Zernotti ME, Casarotto C, Tosello ML, Zernotti M. [Incidence of complications of otitis media]. Acta Otorrinolaringol Esp 2005 Feb;56(2):59-62. 5/11/2020 5:41:53 PM Otitis Media Cliff page: 8

---

## Source metadata

```yaml
source_filename: "otitis-media-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/1uTxFbYQ59feg-xoUyl4uGIxK_iLs2hLn/view"
source_drive_id: "1uTxFbYQ59feg-xoUyl4uGIxK_iLs2hLn"
source_sha256: a0c64d5a8d6a9997a81f7953c3047a2386c44cf8a63e9e37a5f943e7ac5e2c8d
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 8
ocr_performed: false
```
