# Neck Sprain Strain CLiFF

[View original PDF](https://drive.google.com/file/d/1B40-mI28v24PpzvaAR-_-qmWcpLk0SYb/view) · **8 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Musculoskeletal Conditions/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

### Neck Sprain/Strain Cliff

## Branch Baseline

The neck is made up of cervical vertebra, muscle and other soft tissue. The neck and back have many common features. Neck injuries are the result of sport, working, or action that results in symptoms involving the cervical spine area. Neck pain is typically referred to the back of the neck and pain in the front of the neck is commonly referred to as throat pain or anterior cervical (Reed, 1994). Common neck injuries include sprain and strains, herniated disks and fractured vertebrae. For the purpose of this CliFF, neck injuries are limited to soft tissue.

On orbit, cervical injuries are more likely to occur due to mechanical loading such as with exercise, during EVA or during high mass object transfer operations. (Marshburn, 2008) (Scheuring, 2009)

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

| Events: | 14 |  |
| ---------------------------------------------------- | ------------------------------ | ------- |
| Person Years: | 44.58 |  |
| Space Flight Incidence Rate (Events / Person Years): | 14 / 44.58 = 0.314042171377299 |  |
| 4/6/2020 5:07:10 PM | Neck Sprain/Strain Cliff | page: 1 |
## Incidence Comments

In Scheuring 2009 study, the object was to construct a database of in-flight musculoskeletal injuries including incidence, types, mechanism of injury and relevance to post-flight health outcomes. Hand injuries dominate throughout the space program, with neck injuries occur in the mid- range of musculoskeletal injuries by location throughout U.S. Space Program (Scheuring, 2009).

Integrated real world system incidence data. Added 3 ISS and 2 STS events. Added 18.17 person years (Saile, 2017).

Updated the Person-Years based on the revised real world system integrated incidence data. The integrated person years changed from 18.17 to 18.13 so the conditions person years changed from 44.62 to 44.58 (Saile L., 2017)

### Information Regarding Prevention

The Astronaut Strength, Conditioning and Rehabilitation (ASCR) program and Astronaut gym at Johnson Space Center are strategic to providing not post flight rehabilitation as well as strengthening preflight in attempts to prevent or mitigate injuries. The Strength Coach's primary role is to provide an exercise plan designed to achieve flight physical readiness and prevent musculoskeletal injuries during spaceflight training.

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ------------------- | ------------------------ | ------------ | ------- |
| Scheuring, 2009 | 1 | Incidence |  |
| Saile L., 2017 | 1 | Incidence |  |
| 4/6/2020 5:07:10 PM | Neck Sprain/Strain Cliff |  | page: 2 |
Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

| Data Category: | Fixed |  |
| ----------------- | ----- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Fixed |  |
| ----------- | ------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Fixed Rate: | 0.0038 |  |
| ----------- | ------ | --- |

## Incidence Comments

Based on Barnsley's study in Austrialia, general population experience cervical sprain/strain related to motor vehicle accidents is 3.8 cases per 1000 population (Barnsley, 1994).

### Alternative Incidence Data

Neck injury is one of the most common musculoskeletal problems in the general population. Almost 85 percent of all neck pain results from acute or repetitive neck injury or from chronic stresses and strains (Hunter, 2006).

| 4/6/2020 5:07:10 PM | Neck Sprain/Strain Cliff | page: 3 |
| ------------------- | ------------------------ | ------- |
### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.25 1 - 14 0 - 36 - 72 0 0 0 (best case scenario %: 73.33 - 80) ISS-based Treatment 100 0.75 - 1 9 - 24 72 - 216 - 360 0 - 24 0 0 (worst case scenario %: 20 - 26.67) Untreated Best Case 0 0 9 - 24 0 - 36 - 72 0 - 14 0 0 Untreated Worst Case 0 0 15 - 30 72 - 216 - 360 15 - 30 0 - 3 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.)

### Scenario Comments

Best and worst case scenario percentage based on Real World System data set, there were 5 events and 3 of them were worst case.

Since we now have worst case scenarios, which did not have before, we can use the empirical data so the worst case scenario would be 60% (3/5). Thus the best case scenarios would be 40% (2/5) (Saile L., 2017).

Best case scenario is defined as a mild neck injury that resolves with minimal or no treatment.

Worst case scenario is defined as a moderate or severe neck injury that requires more prolonged treatment, or is refractory to treatment. 4/6/2020 5:07:10 PM Neck Sprain/Strain Cliff page: 4

### Best Case Comments

The functional impairments (FI) calculation for this condition follows the IMM Severe Non-Space Adaptation Medical Conditions template (Kerstman, 2010). According to the template in Clinical Phase II the FI follows Class 1-2 in the Guide to the Evaluation of Permanent Impairment, which translates to a 1-14% Whole Person (WP) impairment for a duration of 0-72 hours (American Medical Association, 2008). While in Clinical Phase III the FI follows Class 0 for 0% WP impairment. Consequently, the outcomes in Clinical Phase III are 0% chance of EVAC or LOCL, which is supported by the actual flight experience of no evacuations to date in the U.S. Space Program.

### Worst Case Comments

The functional impairments (FI) calculation for this condition follows the IMM Severe Non-Space Adaptation Medical Conditions template (Kerstman, 2010). According to the template in Clinical Phase II the FI follows Class 2-3 in the Guide to the Evaluation of Permanent Impairment, which translates to a 9-24% Whole Person (WP) impairment for a duration of 72-360 hours. While in Clinical Phase III the FI follows Class 0-3 for 0-24% WP impairment (American Medical Association, 2008). Though no in-flight musculoskeletal injury to date has caused a failure of mission objectives, the reports of the Apollo EVA crewmembers and other astronauts listed in our investigation suggest their injuries could impact the mission given the right circumstances such as missions of extended duration. The actual flight experience there are no evacuations to date in the U.S. Space Program so the evacuation probablity is zero (0%) (Inflight Compilation Lockdown, 2008)(Saile L., 2017). There is no probability of LOCL (Kerstman, 2011).

### Untreated Best Case Comments

The functional impairments (FI) calculation for this condition follows the IMM Severe Non-Space Adaptation Medical Conditions template (Kerstman, 2010). According to the template in Clinical Phase II the FI follows Class 2-3 in the Guide to the Evaluation of Permanent Impairment, which translates to a 9-24% Whole Person (WP) impairment for a duration of 0-72 hours. While in Clinical Phase III the FI follows Class 0-2 for 0- 14 % WP impairment (American Medical Association, 2008). Consequently, the outcomes in Clinical Phase III are 0% chance of EVAC or LOCL, which is supported by the actual flight experience of no evacuations to date in the U.S. Space Program (Inflight Compilation Lockdown, 2008)(Saile L., 2017).

### Untreated Worst Case Comments

The functional impairments (FI) calculation for this condition follows the IMM Severe Non-Space Adaptation Medical Conditions template (Kerstman, 2010). According to the template in Clinical Phase II the FI follows Class 3-4 in the Guide to the Evaluation of Permanent Impairment, which translates to a 15-30% Whole Person (WP) impairment for a duration of 72-360 hours (3-5 days). While in Clinical Phase III the FI remains Class 3-4 for 15-30 % WP impairment (American Medical Association, 2008). Since there have not been any EVAC of WC the Untreated WC is based on Andersson's study. There were no terrestrial data available regarding non-surgical hospital admission rates or surgical hospital admission rates for neck injuries. Therefore, available terrestrial data for back injuires were used as a surrogate for neck injuries. Incidence of total terrestrial back injuries 9.1/100. The incidence of non-surgical hospital admissions for back injuries was 150/100,000 person years. The incidence of surgical hospital admissions was 158/100,000 person years. Dividing the total number of hospital admissions by the total number of back injuries equals 0.033. Therefore it is estimated 0-3 percent of worst case neck injuries would require EVAC (Andersson, 1999). The LOCL remains at 0% which is supported by the actual flight experience of no evacuations to date in the U.S. Space Program (Inflight Compilation Lockdown, 2008). Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

American Medical Association, 2008 3 FI Andersson, 1999 4 EVAC Inflight Compilation Lockdown, 2008 1 EVAC Saile L., 2017 1 BCWC 1 EVAC 4/6/2020 5:07:10 PM Neck Sprain/Strain Cliff page: 5

### Additional Comments

PubMed keyword searches included cervical, neck, sprain, strain, occupational, and soft tissue injury.

| 4/6/2020 5:07:10 PM | Neck Sprain/Strain Cliff | page: 6 |
| ------------------- | ------------------------ | ------- |
The Resource Table (RT) Units

|  | Units Units | Available |  |  |  |
| ------------------------ | ----------------- | ------------------ | ------------------- | --- | --- |
|  | Required Required | At Start |  |  |  |
|  | Best Worst | Of |  |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |  |
| Hot and Cold Pad | 1 1 | 1 No | No Thermal therapy. |  |  |
| Motrin (Ibuprofen) 400mg | 4 15 | 500 Yes | Yes Pain relief |  |  |

SAM splint - Leg/Arm Splint 0 1 1 No Yes Used as a collar for immobization

| Tylenol (Acetaminophen) 325 mg | 8 45 | 250 Yes | Yes Pain relief |  |  |
| ------------------------------ | ---- | ------- | --------------- | --- | --- |
| Vicodin HP (Hydrocodone/ | 0 30 | 30 Yes | Yes Pain relief |  |  |

Acetaminophen HP) 10 mg/660 mg

### Resource Comments

The source of resource table data was derived from the ISS Medical Check List (MOD, 2011).

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |  |
| ----------------------------------------------- | --- | --------- | ------------ | --- | --- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 | Resources |  |  |

### Level Of Evidence

| Input Data | LOE Average | Description |  | Range |  |
| ---------------------- | ----------- | ------------------------ | --- | ----- | ------- |
| Incidence | 1 | Excellent |  | 1-2 |  |
| Functional Impairment | 3 | Good |  | 2.1-3 |  |
| Best Case / Worst Case | 1 | Fair |  | 3.1-4 |  |
| EVAC / LOCL | 2 | Poor |  | 4.1-5 |  |
| Resources | 2 |  |  |  |  |
| QUALITY OF EVIDENCE | 1.8 |  |  |  |  |
| 4/6/2020 5:07:10 PM |  | Neck Sprain/Strain Cliff |  |  | page: 7 |
### Reference List

Reference American Medical Association. Spine and Pelvis. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 373-431.

Andersson GB. Epidemiological features of chronic low-back pain. Lancet 1999 Aug 14;354(9178):581-5.

Barnsley L, Lord S, Bogduk N. Whiplash injury. Pain 1994 Sep;58(3):283-307.

Hunter OK. eMedicine. Cervical Sprain and STrain. 10-24-2006.

IMM FI Guidelines. IMM Functional Impairment Guidelines for the Clinical Findings Form (CliFFs). 12-31-2010.

Inflight Compilation Lockdown. In-flight medical events for Apollo, MIR, ISS, Skylab, and STS. 7-10-2008. Houston, Texas, NASA, Johnson Space Center. Kerstman EL. Conversation with Dr. Kerstman. Saile L, editor. 2011.

Marshburn TH. Acute Care. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 101-22.

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

Reed P. The Medical Disablity Advisor. 2nd ed. Horsham, PA: 1994.

Saile L., Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence V2. 2017.

Saile L., Boley L, Arellano J, Kerstman E. iMED Best and Worst Case Percentage Update. 2017.

Saile L, Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence. 2017.

Scheuring RA, Mathers CH, Jones JA, Wear ML. Musculoskeletal injuries and minor trauma in space: incidence and injury mechanisms in U.S. astronauts. Aviat Space Environ Med 2009 Feb;80(2):117-24. 4/6/2020 5:07:10 PM Neck Sprain/Strain Cliff page: 8

---

## Source metadata

```yaml
source_filename: "neck-sprain-strain-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Musculoskeletal Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/1B40-mI28v24PpzvaAR-_-qmWcpLk0SYb/view"
source_drive_id: "1B40-mI28v24PpzvaAR-_-qmWcpLk0SYb"
source_sha256: de4b930f916c6d09319987be8612f4e07d2ccc98a245997143319a1b13eafc05
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 8
ocr_performed: false
```
