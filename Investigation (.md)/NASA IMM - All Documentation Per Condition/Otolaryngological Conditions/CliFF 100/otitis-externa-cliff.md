# Otitis Externa CLiFF

[View original PDF](https://drive.google.com/file/d/1jFShRt-hLpoAjPI7sgrM7Ob6s-aVvH98/view) · **9 pages**

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

### Otitis Externa Cliff

## Branch Baseline

Otitis externa is an infection of the external ear canal, typically by bacteria. Symptoms include itching, pain and discharge. Inspection reveals significant tenderness, and the canal is swollen with wet debris. Treatment is with oral analgesics, irrigation of debris, wicking, and oral or topical antibiotics. (Merck Manual, 2009) Otitis externa has been reported rarely in the US space program.

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

| Events: | 3 |  |
| ---------------------------------------------------- | ----------------------------- | --- |
| Person Years: | 45.49 |  |
| Space Flight Incidence Rate (Events / Person Years): | 3 / 45.49 = 0.065948560123104 |  |

## Incidence Comments

Source of incidence data is a compilation of available in flight medical events (Walton, 2010).

Added 18.17 to the person years for a total of 45.53 based on the real world system's incidence data (Saile, 2017).

Updated the Person-Years based on the revised real world system integrated incidence data. The integrated person years changed from 18.17 to 18.13 so the conditions person years changed from 45.53 to 45.49(Saile L., 2017)

| 5/11/2020 5:41:31 PM | Otitis Externa Cliff | page: 1 |
| -------------------- | -------------------- | ------- |
### Information Regarding Prevention

- Selection criteria: Disqualifying conditions include: symptomatic chronic external otitis, chronic mastoiditis or mastoid fistula, any disease or

deformity of the ear or mastoid that interferes with auditory or vestibular functions such that emergency egress or successful completion of the mission may be compromised, any chronic disorder or defect that interferes with ventilation of the middle ear (International Space Station Program, 2009). Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Walton, 2010 1 Incidence Saile L., 2017 1 Incidence

### Alternative Incidence Data

Rowlands identified otitis externa occurrences in 1997 and stratified the data by age group and gender. Rowlands’ study reported prevalence rather than incidence because of the impossibility to determine if the first reported occurrence during the year was the first that the individual had had. Rowlands identified a total of 30,412 patients, in the 35-44 age group, 2435 male and 2,698 female cases; in the 45-54 age group, 2446 male and 2697 female. (Rowlands, 2001)

Van Balen conducted a randomized trial in the Netherlands. He referred to incidence of 4 to 14 cases per 1000, which we are not including because this data is from a previous 1995 study (Van Balen, 2003) and there was in flight data available. 5/11/2020 5:41:31 PM Otitis Externa Cliff page: 2

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.5 0 - 9 48 - 60 - 72 0 0 0 (best case scenario %: 98 - 99) ISS-based Treatment 100 0.5 1 - 27 168 - 204 - 240 0 - 9 0 - 1 0 (worst case scenario %: 1 - 2) Untreated Best Case 0 0 1 - 27 48 - 60 - 72 0 - 9 0 0 Untreated Worst Case 0 0 11 - 42 168 - 204 - 240 1 - 42 0 - 100 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 5:41:31 PM Otitis Externa Cliff page: 3

### Scenario Comments

The best case scenario is mild otitis externa resolving in 48 to 72 hours from the start of treatment and controlled of pain by non narcotic analgesics. The worst case scenario is severe otitis externa taking an extended time to respond to medication and pain that may require narcotic analgesics. Malignant or necrotizing otitis externa is not considered to be a real threat in this population because it only occurs in immune compromised or diabetic patients, unlikely among the astronaut population.

Percentages of how often best versus worst case scenarios occur Rowlands' study considered disease persistence within 28 days and recurrence after 28 days. Rowlands’ definition of persistence is comparable to otitis externa worst case scenario. Persistence reported for the 35-44 age range was 1.50 % (CI 95% 1.26-1.77), 45–54 years 1.54 % (CI 95% 1.30–1.83), and 55–64 years 1.37 % (CI 95% 1.14–1.65). He are calculating the average of upper and lower limits in the confidence interval for these 3 age groups, 1.25 to 1.75%, and rounding to 1 to 2% risk of severe otitis externa. (Rowlands, 2001)

### Best Case Comments

During Clinical Phase I Functional impairment (FI) is by definition 100%. The duration was determined based in the ISS Medical Checklist protocol. For best case, 30 minutes (0.5 hours) is the best estimate for how long it will take for the astronaut to inform the Crew Medical Officer (CMO), get the medical checklist, diagnose otitis externa and begin treatment. For Clinical Phase II, FI was determined using Table 8-2 in the AMA Guides for Functional Impairment and using the mid severity grade as the upper limit for our range. FI is estimated at 0-9%. Class 0 is signs of skin disorder present less than 1% of the time, no medication is necessary, and there is essentially no interference with activities of daily living (ADLs). Class 1 is when signs and symptoms are present 1 to 30% of the time, may require intermittent treatment with topical or systemic medications, and there is minimal interference with some ADLs (American Medical Association, 2008). The duration is estimated to be 48 to 72 hours based on the Clinical Practice Guidelines (Rosenfeld, 2006). During Clinical Phase III otitis externa is uncomplicated in this scenario and expected to resolve; therefore the FI is 0%. EVAC or LOCL is not considered a possibility.

### Worst Case Comments

During Clinical Phase I, the FI and duration are similar to the best case scenario. During Clinical Phase II, FI is estimated to be 1-27% based in Class 2 to 3 in the AMA Guides, Table 8-2. Class 2 is when signs and symptoms are present 30 to 60% of the time, may require treatment with topical or systemic medications, and there is mild interference with some ADLs. Class 3 is when signs and symptoms are present more than 60 and up to 90% of the time. Symptoms require intermittent to constant treatment with systemic or topical medications, and cause moderate interference with ADLs. Class 4 is when symptoms are present more than 90% of the time, require treatment on a regular basis and there is severe interference with ADLs (American Medical Association, 2008). Duration is estimated to be 7 to 10 days based on Clinical Practice Guidelines (Rosenfeld, 2006). During Clinical Phase III otitis externa may have a residual impairment of 0 to 9%, or Class 1. In class 1 signs and symptoms are present 1 to 30% of the time, may require intermittent treatment with topical or systemic medications, and there is minimal interference with some ADLs (American Medical Association, 2008). In the rare event that malignant otitis externa is present, its course is slow.

We estimated evacuation risk of 0 to 1% to keep uncertainty. It is unlikely that loss of crew life would occur.

### Untreated Best Case Comments

During Clinical Phase II the FI is estimated to be 1-27%, Class 1 to 2, based in the AMA Guides to Functional Impairment Table 8-2. Class 1 is when signs and symptoms are present 1 to 30% of the time, may require intermittent treatment with topical or systemic medications, and there is minimal interference with some ADLs. Class 2 is when signs and symptoms are present 30 to 60% of the time, may require treatment with topical or systemic medications, and there is mild interference with some ADLs (American Medical Association, 2008). The untreated best case scenario will likely last 7 to 10 days and will resolve without treatment. During Clinical Phase III, FI is estimated at 0% for resolved otitis externa.

Rosenfeld reported on two randomized trials of antimicrobial therapy versus placebo from 1967 and 1970, which we are not including because of the dates. No recent studies were found describing cases left untreated. EVAC and LOCL risk is estimated at 0% for the untreated best case scenario (Rosenfeld, 2006).

### Untreated Worst Case Comments

During Clinical Phase II the FI was determined using the AMA Guides, Class 2-3, or 11 to 42%. (American Medical Association, 2008). The duration is estimated from Van Balen study where otitis externa may last 21 to 42 days (Van Balen, 2003). During Clinical Phase III, there is no resolution and FI is 1-42%, as previously described. In order to account for uncertainty, the risk of evacuation is 0-100% for the unlikely scenario of malignant otitis externa in the untreated worst case scenario. 5/11/2020 5:41:31 PM Otitis Externa Cliff page: 4

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ---------------------------------- | -------------------- | ------------ | ------- |
| Rowlands, 2001 | 4 | BCWC |  |
| American Medical Association, 2008 | 3 | FI |  |
| Rosenfeld, 2006 | 4 | EVAC |  |
| 5/11/2020 5:41:31 PM | Otitis Externa Cliff |  | page: 5 |
### Additional Comments

We searched PubMed with search terms Otitis Externa and Incidence, Otitis Externa and Epidemiology, Otitis Externa and Statistics. We selected articles from 2000 to present. Search for Otitis Externa and aerospace medicine yielded 2 results from 1955 and 1970 which were not included because of their dates. There is a dearth of studies on otitis media incidence and the studies available are retrospective or based on small samples. 5/11/2020 5:41:31 PM Otitis Externa Cliff page: 6

The Resource Table (RT) Units

|  | Units Units | Available |  |  |
| ---------- | ----------------- | ------------------ | -------------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |
| Bactrim DS | 0 14 | 40 Yes | Yes Treatment of infection |  |

(Sulfamethoxazole/Trimethoprim) 800 mg/160 mg tablet Ciprofloxacin and Dexamethasone 0.26 0.26 2 Yes Yes Topical antibiotic (Ciprodex) 3%,7%, 7.5 mL bottle Disposable Otoscope Specula 1 1 90 Yes No Nasal and aural exam (regular, small) Ear Wick 1 1 6 Yes Yes To deliver medication to the ear canal Motrin (Ibuprofen) 400mg 8 8 400 Yes Yes For pain and inflammation Otoscope (Head, Handle, and 1 1 1 No Yes Light source for nasal, oral, aural, and eye

| USB cable) |  |  | exams. |  |
| ------------------------ | --- | ------ | ------------------------- | --- |
| Smooth Forceps | 1 1 | 1 No | Yes To insert Pope Otowic |  |
| Vicodin HP (Hydrocodone/ | 0 8 | 30 Yes | Yes Pain relief |  |

Acetaminophen HP) 10 mg/660 mg

### Resource Comments

- Treatment(s): For treatment on ISS, the Pope Oto-wick is inserted in the ear canal and saturated with Ciprofloxacin ophthalmic/ear solution until

fully expanded al. The saturation procedure is to be repeated twice a day. Ear drops or Pope Oto-wick should not be used if ruptured eardrum is seen or suspected. Aspirin or Tylenol may be used as needed for pain relief. Antibiotic treatment is available in case of infection. (International Space Station Integrated Medical Group, 2006)

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |
| ----------------------------------------------------- | --- | --------- | ------------ | --- |
| International Space Station Integrated Medical Group, |  | 2 | Resources |  |

2008

| 5/11/2020 5:41:31 PM |  | Otitis Externa Cliff |  | page: 7 |
| -------------------- | --- | -------------------- | --- | ------- |
### Level Of Evidence

| Input Data | LOE Average | Description | Range |  |
| ---------------------- | ----------- | -------------------- | ----- | ------- |
| Incidence | 1 | Excellent | 1-2 |  |
| Functional Impairment | 3 | Good | 2.1-3 |  |
| Best Case / Worst Case | 4 | Fair | 3.1-4 |  |
| EVAC / LOCL | 4 | Poor | 4.1-5 |  |
| Resources | 2 |  |  |  |
| QUALITY OF EVIDENCE | 2.8 |  |  |  |
| 5/11/2020 5:41:31 PM |  | Otitis Externa Cliff |  | page: 8 |
### Reference List

Reference American Medical Association. Skin. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 159-82.

International Space Station Integrated Medical Group. Medical Checklist ISS- All Expeditions. Houston: National Aeronautics and Space Administration; 2008. International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

Merck Manual. Lacerations. Porter RS, editor. Merck Manuals Online Medical Library . 2009. Whitehouse Station, N.J, Merck Sharp & Dohme Corp.. 4-23-2010. Rosenfeld RM, Brown L, Cannon CR, Dolor RJ, Ganiats TG, Hannley M, et al. Clinical practice guideline: acute otitis externa. Otolaryngol Head Neck Surg 2006 Apr;134(4 Suppl):S4-23.

Rowlands S, Devalia H, Smith C, Hubbard R, Dean A. Otitis externa in UK general practice: a survey using the UK General Practice Research Database. Br J Gen Pract 2001 Jul;51(468):533-8.

Saile L., Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence V2. 2017.

Saile L, Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence. 2017.

Van Balen FA, Smit WM, Zuithoff NP, Verheij TJ. Clinical efficacy of three common treatments in acute otitis externa in primary care: randomised controlled trial . BMJ 2003 Nov 22;2003(327):1201-5.

Walton M, Kerstman E, IMM. In-flight Compilation v20100414_Incidence_calculation. 2010. 5/11/2020 5:41:31 PM Otitis Externa Cliff page: 9

---

## Source metadata

```yaml
source_filename: "otitis-externa-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/1jFShRt-hLpoAjPI7sgrM7Ob6s-aVvH98/view"
source_drive_id: "1jFShRt-hLpoAjPI7sgrM7Ob6s-aVvH98"
source_sha256: a771100321757821f4cdb3887c04010ea7874baf46a9800e19d7ac9e9113384e
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 9
ocr_performed: false
```
