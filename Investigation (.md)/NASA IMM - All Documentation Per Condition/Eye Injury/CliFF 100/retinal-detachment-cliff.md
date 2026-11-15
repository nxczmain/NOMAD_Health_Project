# Retinal Detachment CLiFF

[View original PDF](https://drive.google.com/file/d/13UxtCwcP2wbhBw1Q3U8QoeWn3ltarN8q/view) · **7 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Eye Injury/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Incidence Comments](#incidence-comments)

---

### Retinal Detachment Cliff

## Branch Baseline

Retinal detachment is a common ophthalmic emergency. Retinal detachment is separation of the neurosensory retina from the underlying retinal pigment epithelium. Retinal detachment occurs when the forces of retinal attachment are overcome and fluid accumulates in the subretinal space.

Symptoms of retinal detachment include photopsia (flashes), floaters, visual field defects, and decreased visual acuity. Once the retinal detachment extends beyond the fovea (central macula), permanent visual impairment is almost inevitable (Kang, 2008).

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

| Data Category: | Fixed |  |
| ----------------- | ----- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Fixed |  |
| ----------- | ------- | --- |
| Occurrence: | Poisson |  |

### Female Data Characteristics

| Fixed Rate: | 6.55E-05 |  |
| ----------- | -------- | --- |

### Male Data Characteristics

| Fixed Rate: | 0.000119 |  |
| ----------- | -------- | --- |

## Incidence Comments

Ages 40 to 49.

- Males: 0.000119 events/person-year (95% CI = 0.0000955, 0.000146)

- Females: 0.0000655 events/person-year (95% CI = 0.000049, 0.0000855) (Mitry, 2010)

| 5/11/2020 5:43:31 PM | Retinal Detachment Cliff | page: 1 |
| -------------------- | ------------------------ | ------- |
### Information Regarding Prevention

ISS 50667 Medical Evaluation Documents comprise three volumes. (Volume A, B, and C)Volume B contains the elements of examination of ISS crewmembers assigned to long-duration space flights. This document (MED Volume B) details the medical evaluation requirements for preflight, inflight,and postflight phases of ISS missions. The medical evaluations are designated for all Volume C includes the medical standards for Space Flight Participants. Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Mitry, 2010 2 Incidence

### Alternative Incidence Data

Incidence values are based on a two-year prospective, popuation-based observational study performed in Scotalnd between November 1, 2009 and October 31, 2009. The above annual incidence rates are for the ages 40-49. 5/11/2020 5:43:31 PM Retinal Detachment Cliff page: 2

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 2 - 3 8 - 47 24 - 24 - 24 8 - 47 100 0 (best case scenario %: 35 - 49) ISS-based Treatment 100 2 - 3 28 - 72 0 - 12 - 24 28 - 72 100 0 (worst case scenario %: 51 - 65) Untreated Best Case N/A N/A 8 - 47 24 - 24 - 24 8 - 47 100 0 Untreated Worst Case N/A N/A 28 - 72 0 - 12 - 24 28 - 72 100 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 5:43:31 PM Retinal Detachment Cliff page: 3

### Scenario Comments

### Best Case Definition

A detached retina without involvement of the macula (central vision and visual acuity are preserved).

### Worst Case Definition

A detached retina with involvement of the macula (central vision and visual acuity may be severely reduced). (Mitry, 2010) (Pastor, 2008) The worst case percentage is estimated as 51% to 65% based on the Mitry study which found that 50.8 to 65 percent of cases of retinal detachment presented with a detached or bisected macula at diagnosis, and the Pastor study which found that 65 percent of cases presented with a detached retina.The best case percentage is therefore estimated as 35% to 49%.

### Best Case Comments

Since retinal detachment may result in significant impairment in vision and requires evacuation for appropriate definitive care, functional impairments are calculated using the severe functional impairment template (American Medical Association, 2008) and Table 12-10 in The Visual System chapter of the AMA Guides to the Evaluation of Permanent Impairment.

Retinal detachment is considered to be an ophthalmological emergency which may result in permanent visual impairment and requires surgical treatment. Since surgical treatment is not available on ISS, EVAC is expected in all cases. LOCL is not expected in any case (ECRI Institute,

2009) (American Optometric Association, 2004) (Kang, 2008).

### Worst Case Comments

Since retinal detachment may result in significant impairment in vision and requires evacuation for appropriate definitive care, functional impairments are calculated using the severe functional impairment template (American Medical Association, 2008) and Table 12-10 in The Visual System chapter of the AMA Guides to the Evaluation of Permanent Impairment.

Retinal detachment is considered to be an ophthalmological emergency which may result in permanent visual impairment and requires surgical treatment. Since surgical treatment is not available on ISS, EVAC is expected in all cases. LOCL is not expected in any case (ECRI Institute, 2009)} (American Optometric Association, 2004) (Kang, 2008).

### Untreated Best Case Comments

Since retinal detachment may result in significant impairment in vision and requires evacuation for appropriate definitive care, functional impairments are calculated using the severe functional impairment template (American Medical Association, 2008) and Table 12-10 in The Visual System chapter of the AMA Guides to the Evaluation of Permanent Impairment.

Retinal detachment is considered to be an ophthalmological emergency which may result in permanent visual impairment and requires surgical treatment. Since surgical treatment is not available on ISS, EVAC is expected in all cases. LOCL is not expected in any case (ECRI Institute,

2009) (American Optometric Association, 2004) (Kang, 2008).

### Untreated Worst Case Comments

Since retinal detachment may result in significant impairment in vision and requires evacuation for appropriate definitive care, functional impairments are calculated using the severe functional impairment template (American Medical Association, 2008) and Table 12-10 in The Visual System chapter of the AMA Guides to the Evaluation of Permanent Impairment.

Retinal detachment is considered to be an ophthalmological emergency which may result in permanent visual impairment and requires surgical treatment. Since surgical treatment is not available on ISS, EVAC is expected in all cases. LOCL is not expected in any case (ECRI Institute,

2009) (American Optometric Association, 2004) (Kang, 2008).

5/11/2020 5:43:31 PM Retinal Detachment Cliff page: 4

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ------------------------------------- | ------------------------ | ------------ | ------- |
| Mitry, 2010 | 2 | BCWC |  |
| American Medical Association, 2008 | 3 | FI |  |
| ECRI Institute, 2009 | 3 | EVAC |  |
| American Optometric Association, 2004 | 3 | EVAC |  |
| Kang, 2008 | 3 | EVAC |  |
| 5/11/2020 5:43:31 PM | Retinal Detachment Cliff |  | page: 5 |
The Resource Table (RT) Units

|  | Units Units | Available |  |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- | --- |
|  | Required Required | At Start |  |  |  |
|  | Best Worst | Of |  |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |  |

Otoscope (Head, Handle, and 1 1 1 No Yes Light source for eye exam USB cable)

| Tonometer | 1 1 | 1 No | Yes To measure intraocular pressure. |  |  |
| --------- | --- | ---- | ------------------------------------ | --- | --- |

Tonometer tip cover 1 1 150 Yes Yes To measure intraocular pressure.

Ultrasound gel (2 packets) 2 2 17 Yes Yes Conductive medium for ultrasound procedure

| Ultrasound machine | 1 1 | 1 No | Yes Device for ultrasound |  |  |
| ------------------ | --- | ---- | ------------------------- | --- | --- |

### Resource Comments

The medical resources required to diagnose and treat retinal detachment are based on clinical practice guidelines and standards of care. (ECRI Institute, 2009) (American Optometric Association, 2004)

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |  |
| ------------------------------------- | --- | --------- | ------------ | --- | --- |
| ECRI Institute, 2009 |  | 3 | Resources |  |  |
| American Optometric Association, 2004 |  | 3 | Resources |  |  |

### Level Of Evidence

| Input Data | LOE Average | Description |  | Range |  |
| ---------------------- | ----------- | ------------------------ | --- | ----- | ------- |
| Incidence | 2 | Excellent |  | 1-2 |  |
| Functional Impairment | 3 | Good |  | 2.1-3 |  |
| Best Case / Worst Case | 2 | Fair |  | 3.1-4 |  |
| EVAC / LOCL | 3 | Poor |  | 4.1-5 |  |
| Resources | 3 |  |  |  |  |
| QUALITY OF EVIDENCE | 2.6 |  |  |  |  |
| 5/11/2020 5:43:31 PM |  | Retinal Detachment Cliff |  |  | page: 6 |
### Reference List

Reference American Medical Association. Visual System. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 281-319.

American Optometric Association. Optometric Clinical Practice Guideline: Care of the patient with retinal detachment and related peripheral vitreoretinal disease. American Optometric Association 2004 ECRI Institute. National Guideline Clearinghouse (NGC) Guideline Synthesis: Care of the patient with retinal detachment and related peripheral vitreoretinal disease. National Guideline Clearinghouse 2009 November 23Available from: URL: http://www.guideline.gov/ Kang HK, Luff AJ. Management of retinal detachment: a guide for non-ophthalmologists. BMJ 2008 May 31;336(7655):1235-40.

Mitry D, Charteris DG, Yorston D, Siddiqui MA, Campbell H, Murphy AL, et al. The epidemiology and socioeconomic associations of retinal detachment in Scotland: a two-year prospective population-based study. Invest Ophthalmol Vis Sci 2010 Oct;51(10):4963-8.

Pastor JC, Fernandez I, Rodriguez dlR, Coco R, Sanabria-Ruiz Colmenares MR, Sanchez-Chicharro D, et al. Surgical outcomes for primary rhegmatogenous retinal detachments in phakic and pseudophakic patients: the Retina 1 Project--report 2. Br J Ophthalmol 2008 Mar;92(3):378-82. 5/11/2020 5:43:31 PM Retinal Detachment Cliff page: 7

---

## Source metadata

```yaml
source_filename: "retinal-detachment-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Eye Injury/CliFF 100"
source_url: "https://drive.google.com/file/d/13UxtCwcP2wbhBw1Q3U8QoeWn3ltarN8q/view"
source_drive_id: "13UxtCwcP2wbhBw1Q3U8QoeWn3ltarN8q"
source_sha256: 08a45c8322bcba2622186d4da0c26f7a39f11f9b7ad38b7a8787409414152eb6
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 7
ocr_performed: false
```
