# Trauma Severe Head CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1GdldFrkTHHh03dgZzQUWe0wC6zcfqGJL/view) · **15 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Head Injury/CliFF 119

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

ICL115_Trauma - Severe Head Traumatic Brain Injury (TBI) occurs as a result of a "violent blow" or jolt to the head (Mayo, 2021). This CLiFF pertains only to severe TBI.

Unfortunately, there is no globally accepted definition of severe TBI and multiple classifications systems exist. The classification is complicated by the heterogeneity of presentations with TBI. Classification systems can be based on symptoms, pathoanatomic, etiologic, mechanistic, or prognostic. A post-resuscitative Glasgow Coma Scale (GCS) score of < 9 is often used as one of the criteria for severe TBI. (Hawryluk and Manley, 2015) This CLiFF uses a GCS of < 9. Most severe TBI injuries involve a loss of consciousness and many classification systems also describe a length of loss of consciousness as part of their criteria. Because of the heterogeneity between these classification systems, this was not considered for the definition of this CLiFF. Symptoms of severe TBI may include loss of consciousness, headache, nausea and vomiting, convulsions/seizures, pupillary changes, weakness or numbness, loss or coordination, and/or cerebrospinal fluid leaking from the nose or ears (Mayo, 2021). Note that seizures are a separate CLiFF (ICL 83 - Seizures) and not considered in this CLiFF.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Scheuring et al, 2009 was the only source of spaceflight data identified. The study evaluated the incidence musculoskeletal in-flight injuries among astronauts, as well as skin abrasions, contusions, and lacerations in a review spanning Mercury - Expedition 13 of the ISS Program. Unfortunately, head injuries were not categorized by type. Anecdotally, there have been no TBI injuries in spaceflight. Thus, the data on head injuries from this source, if used, would drastically overestimate the incidence of TBI in spaceflight. This source was not used to inform the incidence for this CLiFF.

### ANALOG LITERATURE

Levin, 2021 provides unpublished analog incidence compiled from University-National Oceanographic Laboratory System data. It provides an incidence of 96.6/person day. Although the crew characteristics from UNOLS data may be a closer approximation to the astronaut corps (i.e. medical pre-screening), the ocean environment is inherently different from the spaceflight environment. Rough seas present more opportunities for head injuries in general (and possibly TBI). Thus, these data were felt to be an overestimate of the risk in spaceflight and this source did not inform the incidence for this condition.

### TERRESTRIAL LITERATURE

The Peterson et al, 2017 provides incidence of TBI based on 2016 and 2017 Healthcare Cost and Utilization Project’s (HCUP) National Inpatient Sample sponsored by the Agency for Healthcare Research and Quality. These data allow for restriction by age, and removal of common terrestrial causes of TBI that are not expected in spaceflight (e.g. motor vehicle accident, assault, war), which would over-estimate the incidence of TBI in spaceflight. This source was used to inform the incidence for this condition. Marin et al, 2014 provides incidence of various head injury types between 2006-2010 from data extracted from the Nationwide Emergency Department Sample (NEDS) database. All comer incidence of TBI from this source is 637/100,00 person years. After removing the unspecified head injury, concussion, and cerebral laceration/contusion, the incidence of severe head injury from this study is 79/100,000 person years. An additional source provided an incidence of 285/100,000 person years based on data from the 2017 Global Burden of Disease data (Feigin et al, 2021). However, it did not provide a case definition for severe head injury, and is therefore anticipated to be an overestimate.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 1

- Mean: 1.96E-4 SD: 1.037E-6

### INCIDENCE SUMMARY

The incidence for this condition is informed from the CDC 2016/2017 report, Traumatic Brain Injury-related Hospitalizations and Deaths by Age Group, Sex, and Mechanism of Injury. Table 1 reports numbers and rates by age group, year, and mechanism of injury. These numbers will be used to estimate an age-adjusted (to flown astronauts) incidence rate from the relevant mechanisms. Crude overall incidence rate (from relative age categories and mechanisms) IR: 5.438E-4 (95%CI: 5.416E-4, 5.46E-4). The incidence of this condition in microgravity was assumed to be 0.

Therefore, the incidence should be applied only to surface operations. Similarly, during an EVA, the helmet would protect against head injuries.

Currently MEDPRAT does not have the capability to exclude surface EVA time from surface operations, but in the future, this is recommended when the capability exists. The posterior distribution for the age-adjusted (to flown astronauts) incidence rate given the terrestrial evidence, under an uninformative prior, is Gamma(shape=35723.55, rate=182263019) with mean 1.96E-4 and SD 1.037E-6.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

UNK Segment Surface Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.000196 SD 1.037E-06 Gamma (Shape): 35723.6 (Rate): 1.82263E+08 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Feigin et al, 2021 Terrestrial 2 Marin et al, 2014 Terrestrial 2 Peterson et al, 2017 Terrestrial 3 Levin, 2021 Analog 2 Scheuring et al, 2009 Spaceflight 1 Feigin et al, 2021 provides incidence of TBI based on a systematic analysis of the 2017 Global Burden of Disease study. This used data from the US from 1990-2017. The definition for TBI was not clear in this study. Marin et al, 2014 provides incidence of various head injury types between 2006-2010 from data extracted from the Nationwide Emergency Department Sample (NEDS) database. The Peterson et al, 2017 provides incidence of TBI based on 2016 and 2017 Healthcare Cost and Utilization Project’s (HCUP) National Inpatient Sample. The data is granular enough to be age restricted an remove common terrestrial sources of TI that would not be expected to occur in spaceflight (e.g. motor vehicle accidents and war).

Levin, 2021 provides unpublished analog incidence compiled from University-National Oceanographic Laboratory System. Although this represents ocean vessel crewmembers who received medical pre-screening, and occurs in confined ocean vessels, it is less applicable to exploration missions because of a difference in environment. The UNOLS data is anticipated to overestimate incidence of head injuries, thereby TBI, based on increased risk of head injury during rough sea conditions. Scheuring et al, 2009 evaluated the incidence musculoskeletal in-flight injuries among astronauts from Mercury - Expedition 13 of the ISS Program. Head injuries were not categorized by type limiting the applicability to the category 1 and category 8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 2

2 scenarios in this CLiFF. 8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Engineering measures are taken to prevent injury to crewmembers, including head injury. Further, on EVA the helmet of the EMU provides protection from head injury.

### BEST CASE SCENARIO DEFINITION

This condition does not have a "best-case" and "worst-case" scenario. Rather, it has a "Category 1" scenario encompassing severe non-surgical TBI resulting in diffuse axonal injury (DAI) or persistent vegetative state (PVS) and a "Category 2" scenario encompassing severe surgical TBI, including intracranial bleeding, risk of herniation, and open skull fracture.

Category 1 Scenario Definition: Severe non-surgical TBI (initial GCS < 9) including diffuse axonal injury or other persistent vegetative state

### WORSE CASE SCENARIO DEFINITION

This condition does not have a "best-case" and "worst-case" scenario. Rather, it has a "Category 1" scenario encompassing severe non-surgical TBI resulting in diffuse axonal injury (DAI) or persistent vegetative state (PVS) and a "Category 2" scenario encompassing severe surgical TBI, including intracranial bleeding, risk of herniation, and open skull fracture.

Category 2 Scenario Definition: Severe surgical TBI (GCS < 9) including Epidural Hematoma, extensive subdural hematoma, swelling causing risk of imminent herniation, or open skull fracture CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Traumatic Brain Injury Intracranial Hematoma, Epidural Intracranial Hematoma, Subdural Diffuse Axonal Injury

### BEST CASE/WORST CASE PROBABILITY COMMENTS

This condition does not have a "best-case" and "worst-case" scenario. Rather, it has a "Category 1" scenario encompassing severe non-surgical TBI resulting in diffuse axonal injury (DAI) or persistent vegetative state (PVS) and a "Category 2" scenario encompassing severe surgical TBI, including intracranial bleeding, risk of herniation, and open skull fracture. It is feasible that some surgical TBIs may also result in DAI or PVS (i.e. the categories do not have to be mutually exclusive). It was not possible in the literature to separate survival vs. non-surgical TBIs that result in DAI or PVS. However, two sources were found that provide insight into DAI/PVS in severe TBI overall. The StatPearls article titled "Diffuse Axonal Injury" (DAI) provides an incidence of 10% for DAI in TBI patients (Mesfin et al, 2021). A meta-analysis of 21 cohort studies with an outcome of persistent vegetative state, assessed 6 months following severe traumatic brain injury, reports a prevalence of 2.77% (Tang et al, 2017). Therefore, the Category 1 scenario for this condition was assigned a proportion of 2.77-10% and the Category 2 scenario was assigned a proportion of 90- 97.23%. TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Mesfin et al, 2021 Terrestrial 3 Tang et al, 2017 Terrestrial 3 The StatPearls article titled "Diffuse Axonal Injury" (DAI) provides an incidence of 10% for DAI in TBI patients (Mesfin et al, 2021). A meta-analysis of 21 cohort studies with an outcome of persistent vegetative state, assessed 6 months following severe traumatic brain injury, reports a prevalence of 2.77% (Tang et al, 2017). 8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best Mean: 1.96E-4 2.77 - 10 100 1.82 100 96 70080 100 100 100 25 35

- Case (TBC) SD: 1.037E-6

Treated Worst 90 - 97.23 100 1.82 54.5575 0 2568 9.115 100 100 37 65 Case (TWC) Untreated Best N/A N/A N/A 1.82 100 0 336 100 100 100 100 100 Case (UTBC) Untreated Worst N/A N/A N/A 1.82 100 0 64.8 100 100 100 100 100 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

The ExMC Clinical and Science Team pre-determined that the RTDC probability for both Category 1 and Category 2 of this condition is 100%.

Therefore, no literature searches were performed for RTDC. There is a paucity of data regarding untreated TBI with a GCS < 9. Thus, based on treatment measures required to sustain life in the literature, the assumption was made that in both untreated scenarios the LOCL probability is 100%. See specific scenario comments below.

TREATED BEST CASE (TBC) SCENARIO COMMENTS A retrospective study of 102 Diffuse Axonal injury (DAI) patients, spanning 19 years, at the San Raffaele Scientific Institute in Milan, Italy reports variable lengths of time for return to consciousness. The shortest duration was 4 days and the longest duration was 180 days. (Notably 180 days is when the study period was terminated and 12/102 patients remained comatose at 180 days). The Merck Manual states, regarding patients with Persistent Vegetative State (PVS) that "If the cause was a head injury, recovery is unlikely after 12 months. However, a few people improve over a period of months or years. Rarely, improvement occurs late. After 5 years, about 3% of people recover the ability to communicate and understand, but few can live independently, and none can function normally." The Multi-Society Task Force on Persistent Vegetative State (PVS) (1994) corroborates that after 12 months of unconsciousness it is unlikely that consciousness will be regained, citing 7 of 434 patients (1.6%). However, there are patients that remain alive but never regain consciousness when comatose. Kitzinger and Kitzinger (2018) report a duration of PVS of less than a year to 8 years. This is based on a qualitative narrative interview study with 21 members of 12 families, between 2013-2017, who had a relative in a prolonged disorder of consciousness (coma, vegetative or minimally conscious state) who had died after court-approved withdrawal of artificial hydration and nutrition in the UK. While it is possible that someone in a coma could live longer than 8 years, they reported an average of 4- 5years, thus 8 years will be used to approximate the maximum duration. (Kitzinger and Kitzinger, 2018) Therefore, the duration was assigned a range of 96-70,080h (4 days - 8 years). The ExMC Clinical and Science Team pre-determined that the RTDC probability for both Category 1 and Category 2 of this condition is 100%. Therefore, no literature searches for RTDC were performed. Mesfin et al, 2021 estimate that 25% of DAI diagnoses result in death. Thee Multi-Society Task Force on Persistent Vegetative State (PVS) reported a probability of death between 3-6 months of 32-35% (1994). A prospective cohort study of patients with DAI at the Neurosurgical Outpatient Clinic and Trauma at the Central Institute of Hospital da Clinicas da Faculdade de Medicinea da Universidade de Sao Paulo in Sao Paulo, Brazil has similar findings for patients with DAI. 24/78 patients (mean age 32yo) with DAI from July 2013-February 2014 had died by 6 months of follow-up. Inclusion criteria included GCS ≤ 8 at time of admission, age 18-60yo, and a CT/MRI with either normal outcome or signs of DAI. Exclusion criteria: admitted to the hospital more than 6 hours post-trauma, transferred from another hospital with a previous diagnosis of TBI, psychiatric disorders, or other injuries to the head or spinal cord with an AIS ≥ 3. (de Cassia Almeida Vieira et al, 2016) Therefore the LOCL probability for this scenario was assigned a range of 25-35%. Notably, the Ashwal et al, 1994 reports markedly higher mortality rates at longer intervals (82% at 3 years and 95% at 5 years). However, given the DRM of 210 days, the 3-6 month values will be used to approximate LOCL probability. If DRMs of 3 or more years are used in the future, this LOCL probability should be increased accordingly based on the aforementioned data.

TREATED WORST CASE SCENARIO (TWC) COMMENTS In a retrospective analysis of 121 patients (age 16-24) with epidural hematoma presenting to emergency departments of 14 hospitals in the Queensland Trama Registry (Australia) between 2005-2007, the mean length of hospitalization was 12.9 days (2 SD range: 0-44 days). Skull fracture was also present in 75% of these patients. (Irie et al, 2011) Another study from Queensland, Australia examined outcomes in 117 TBI patients (median age 28, median GCS score 6) who received speech pathology care for dysphagia after their injury. The mean length of hospitalizationwas 39.8 days (2 SD range: 0-106.6). Thus, the duration was assigned a range of 0-107 days for this scenario. The ExMC Clinical and Science Team pre-determined that the RTDC probability for both Category 1 and Category 2 of this condition is 100%. Therefore, no literature searches for RTDC were performed. The minimum probability of LOCL for this scenario is based on a retrospective study of TBI in Latin America.

Of 484 patients whom six-month outcomes were available for, 37% died. (Bonow et al, 2017) A retrospective study of 256 patients who underwent surgical intervention for non-penatrating trauma resulting in acute subdural hematoma between March 1998 and March 2008 at Masan Samsung Hospital at Sungkyunkwan Universtiy School of Medicine in Korea reported a mortality rate of 55.4% for patients with a GCS score of 3-8 (Kim, 2009). In a retrospective study of 7,191 patients with head trauma in a Trauma-registry based study at the Los Angeles County and University of Southern California Trauma Center from 1993-2002, Demetriades et al report a mortality rate of 30.5% in patients with a GCS of 4-8 and 65.4% in patients with a GCS of 3 during the study period. Thus, the LOCL probability for this scenario was assigned a range of 37-65.4%.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS There is a paucity of data regarding untreated Diffuse Axonal Injury (DAI) or Persistent Vegetative State (PVS) after head trauma. Therefore, data regarding withdrawal of nutrition and hydration in patients with a coma, PVS, or minimally conscious state was used to inform the duration for the untreated category 1 scenario. The minimum duration was assigned a value of 0 hours because it assumed that many patients with a severe TBI and GCS < 9 would perish rapidly without treatment. Kitzinger and Kitzinger (2018) was used to inform the maximum duration. They performed a qualitative narrative interview study with 21 members of 12 families, between 2013-2017, who had a relative in a prolonged disorder of consciousness (coma, vegetative or minimally conscious state) who had died after court-approved withdrawal of artificial hydration and nutrition in the UK. The article reports that most of these patients died within 9-14 days after removal of their feeding tube and hydration. Therefore, the duration for this scenario was assigned a range of 0-336 hours (0-14 days). The ExMC Clinical and Science Team pre-determined that the RTDC probability for both Category 1 and Category 2 of this condition is 100%. Therefore, no literature searches were performed. Mesfin et al (2021) describes that treatment of DAI focuses on prevention of secondary injuries due to hypotension, hypoxia, cerebral edema, and elevated intracranial pressure. Thus, most patients are maintained under general anesthesia with extensive, and sometimes invasive, monitoring. Similarly, Kitzinger and Kitzinger (2018) discuss patients with PVS being maintained by tube feeding, hydration, suctioning, and extensive care requirements. Thus, the assumption was made that all severe TBI cases resulting in DAI and/or PVS would result in death without treatment. Therefore, the LOCL probability 8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 6

for this scenario was assigned 100%.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS There is a paucity of data regarding untreated severe TBI. Therefore, data regarding delay of transfer in combat patients requiring craniotomy was used to inform this duration. The minimum duration was assigned a value of 0 hours because it assumed that many patients with a severe TBI and GCS < 9 would perish rapidly without treatment. Shackelford et al, 2018 performed a retrospective review, utilizing the Defense Trauma Registry and Joint Trauma System Role 2 Registry, of servicemembers in Iraq or Afghanistan between 2005-2015 who required craniotomy for severe head trauma. They report delays for craniotomy spanning from 0.5 hours - 2.7 days. Notably, this is not true lack of treatment because these patients received intensive care while awaiting craniotomy. Therefore, these durations may be an overestimate. However, given the paucity of data for untreated severe TBI, 2.7 days was assigned as the maximum duration. Thus, the duration was assigned a range of 0-64.8 hours. The ExMC Clinical and Science Team pre-determined that the RTDC probability for both Category 1 and Category 2 of this condition is 100%. Therefore, no literature searches were performed. In a retrospective systematic review from 2000-2003 of 76 patient who required emergent craniotomy for acute traumatic epidural and/or subdural hematoma at the Department of Neurosurgery, University Hospital Bern, in Switzerland, all patients with a GCS < 8 required intubation in the field prior to transfer to the hospital (Taussky et al, 2018). Severe TBI patients with a GCS < 9 require extensive lifesaving measures and ongoing treatment. Thus, the assumption was made that all severe TBI cases as outlined in the Category 2 scenario would result in death without treatment. Therefore, the LOCL probability for this scenario was assigned 100%.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation |  | Source | LOC Value |
| ----------------------------- | --- | ----------- | --------- |
| Calvi et al, 2011 |  | Terrestrial |  |
| Maiese, 2020 |  | Terrestrial |  |
| Kitzinger and Kitzinger, 2018 |  | Terrestrial |  |

3

| Irie et al, 2011 |  | Terrestrial |  |
| ----------------------- | --- | ----------- | --- |
| Ward et al, 2007 |  | Terrestrial |  |
| Shackelford et al, 2018 |  | Analog |  |

The durations for the Category 1 treated scenario are based on literature regarding DAI and PVS. The durations for the Category 2 treated scenario are based on severe TBI literature, with one study being specific to traumatic epidural hematoma (Irie et al, 2011). Data regarding the duration of untreated scenarios are limited. The durations for the untreated Category 1 scenario utilize data regarding withdrawal of life support.

For the Category 2 untreated scenario, data regarding delayed transfer of combat patients (Shackelford et al, 2018) was utilized. Notably, this scenario does not reflect true lack of treatment since servicemembers received intensive care while awaiting transport and therefore may be an overestimate of the duration. TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| -------- | ------ | --------- | --- |
| N/A | N/A |  | 4 |

The ExMC Clinical and Science Team pre-determined that the RTDC probability for both Category 1 and Category 2 of this condition is 100%.

Therefore, no literature searches were performed. This is an assumption that can be made with confidence given that a TBI with a GCS of < 9 would exceed the medical capabilities of the mission.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation |  | Source | LOC Value |
| ----------------- | --- | ----------- | --------- |
| Kim, 2009 |  | Terrestrial |  |
| Bonow et al, 2017 |  | Terrestrial |  |

8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 7

### Citation Source LOC Value

de Cassia Almeida Vieira et al, 2016 Terrestrial 3 Mesfin et al, 2021 Terrestrial Ashwal et al, 1994 Terrestrial Taussky et al, 2008 Terrestrial Demetriades et al, 2006 Terrestrial Kitzinger and Kitzinger, 2018 Terrestrial For treated scenarios the LOCL probabilities are based on literature according to the specified definitions for category 1 and 2 and hold a high level of confidence. There is a paucity of data regarding untreated TBI with a GSC of < 9. Thus, the untreated LOCL probabilities were assumed to be 100% based on known treatment methodologies required to sustain life in the setting of a severe TBI.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview Trauma – Severe Head – This is a broad range of conditions related to traumatic brain injury, skull fractures, and associated complications related to increasing pressure within the cranium (which is a fixed non-expandable space). This condition also includes the convalescent phases of severe head injury which can have significant and long lasting symptoms for weeks to years. CNES: N/A Diagnostics Scope and Resourcing The Best Case and Worst Case definitions are not truly on a spectrum but represent separate but overlapping severe head injury conditions. In the best-case scenario, a severe non-surgical traumatic brain injury (TBI) including diffuse axonal injury and other persistent vegetative state is Diagnosed by history, physical examination, and ultrasound studies. Ultimately these severe coma-like states are Diagnosed by the lack of clinical improvement over many hours. Lab tests do not contribute to the Diagnosis although a sodium level is used to look for complications of treatment. In the worst case scenario, a severe surgical TBI, including hematomas, swelling causing risk of herniation, or open skull fracture, the Diagnosis is made by history, physical examination, and ultrasound studies. Lab tests do not contribute to the Diagnosis although a sodium level is used to look for complications of treatment. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or

- Untreated): 1.82 hours CP1 WC (Treated or Untreated: 1.82 hours This CRT includes a scope of practice code of 5 (which correlates to an

“Experienced procedure trained generalist attending” and was included for management decisions, Diagnostics ultrasound, medication management, and fitness for duty. Treatment Scope and Resourcing Terrestrially, these patients are clinically stabilized in an emergency department after rapid evaluation in a CT scanner, airway control with intubation, and typically are admitted to a neurosurgical intensive care unit where they may or may not undergo neurosurgical procedures such as intracranial pressure monitors, drainage or a hematoma, or others.

Additional critical care interventions such as central line, invasive arterial blood pressure monitoring, numerous infusions, prolonged paralysis, IV nutrition, and more are also the terrestrial standard of care. Many of these patients are managed for days to months in the intensive care unit before improvement is noted or a poor prognosis can be made. Almost none of the ICU-level standard of care are available in spaceflight nor are the gold standard Diagnostics. Prolonged coma and death are expected outcomes in these cases. Survivors of severe head injuries may have significant residual safety- and mission- threatening issues such as psychosis, agitation, intractable vomiting, cognitive deficits, and others for weeks to months as well. The capability to perform a burr hole was included in this CRT. Terrestrially this is accompanied by 1 day of prophylactic antibiotics. Given that this CRT also includes open skull fracture, the antibiotics used for other open fracture conditions in the ICL 1.0 were also provided here to cover both burr hole and open skull fracture. Ertapenem and Ceftriaxone are provided for antibiotic prophylaxis for open fractures. Although ertapenem is not traditionally used terrestrially, it was selected due to its broad spectrum, daily dosing, and ability to be dosed IM – decreasing mass/volume requirements associated with IV medications Communications and Support Needs Communication with ground based support through video would contribute to the initial evaluation and ongoing management of these severe and complicated cases. REFERENCES American College of Surgeons Committee on Trauma. ACS TQIP best practices in the management of traumatic brain injury. January 2015. Pages 1-33. Mesfin FB, Gupta N, Shapshak AH, Taylor RS. Diffuse Axonal Injury. NCBI Bookshelf; StatPearls. Jan 2021. Hawryluk GWJ, Rublano AM, Totten AM, et al. Guidelines for the management of severe traumatic brain injury: 2020 update of the decompressive craniectomy recommendations. Neurosurgery; 87(3):427-434. Tenny S and Thorell W.

Intracranial Hemorrhage. NCBI Bookshelf; StatPearls. Jan 2021.

### IMM CLIFF RECONCILATION COMMENTS

IMM contains a “Head Injury” CLiFF that is exclusive of traumatic brain injury. This is a new condition exclusive to IMPACT. Therefore, the incidence, durations, and outcomes (RTDC and LOCL) are unique to this condition.

### LIMITATIONS SUMMARY

- The Category 1 and Category 2 scenarios for this condition may not be mutually exclusive in clinical practice, but for the purposes of this CLiFF

they were treated as mutually exclusive. • Calvi et al, 2011 was used to inform the Category 1 treated duration. The maximum duration of 180 days reflects the end of the study period in this paper. No other data were available to determine the true maximum duration. • The LOCL probability for 8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 8

the treated Category 1 scenario is based on data with a 3-6 month follow-up period. Data from the same reference (Ashwal et al, 1994, 2014) presented much higher mortality rates for 3- and 5-year follow-up (82% and 95%, respectively). Given the DRM of 210 days, the 3-6-month values will be used to approximate LOCL probability. If DRMs of 3 or more years are used in the future, this LOCL probability should be increased accordingly. • The maximum duration for the Untreated Category 2 scenario may be an overestimate. It is based on data regarding delay of transfer out of combat for craniotomy after sustaining a severe TBI. However, this is not true lack of treatment because these patients received intensive care while awaiting craniotomy. • There is a paucity of data regarding untreated severe TBI presenting with a GCS < 9. There is literature available regarding the treatment interventions needed for TBI, however. Based on the treatment modalities mentioned in the literature, the assumption was made that both untreated scenarios would result in LOCL with a 100% probability. 8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 9

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

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 10

Total Human

|  |  | Translation & |  | Total Tasks |  |  |
| --- | --- | ------------- | --- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) |  | Extremity Standing (g) | Equipment Ops |  | Category |  |
| ----- | --- | ---------------------- | ------------- | --------- | ---------- | --- |
|  |  | (microgravity) |  | Condition | Tasks Full |  |

Mission Treated Best

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| ------- | --- | --------- | ------ | ---- | ------ | --- |

Case (TBC) Untreated Best

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| ------- | --- | --------- | ------ | ---- | ------ | --- |

Case (UTBC) Treated Worst

| 132 |  |  | 211 | 343 | 3763 0.0911507 | 9.11507 |
| --- | --- | --- | --- | --- | -------------- | ------- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| ------- | --- | --------- | ------ | ---- | ------ | --- |

Case (UTWC) 8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 11

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

8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 12

## REFERENCES

Reference

1. Ashwal S, Cranford R, Bernat JL, Celesia G, Coulter D, Eisenber H, et al. Medical Aspects of the Persistent Vegetative State (Second of Two

Parts) NEJM. 1994;220(22):1572-9.

2. Bonow RH, Barber J, Temkin NR, Videtta W, Rondina C, Petroni G, et al. The Outcome of Severe Traumatic Brain Injury in Latin America.

World Neurosurg. 2018;111:e82-e90. Epub 2017/12/13. doi: 10.1016/j.wneu.2017.11.171. PubMed PMID: 29229352; PubMed Central PMCID: PMCPMC5897054.

3. Calvi MRMB, Luigi MD; Dell'Acqua, Antonio MD; Anzalone, Nicoletta MD; Licini, Gloria MD; Gemma, Marco MD. Early Prognosis After Severe

Traumatic Brain Injury With Minor or Absent Computed Tomography Scan Lesions. The Journal of Trauma: Injury, Infection, and Critical Care. 2011.

4. de Cassia Almeida Vieira R, Paiva WS, de Oliveira DV, Teixeira MJ, de Andrade AF, De Sousa RMC. Diffuse axonal injury: epidemiology,

Outcome and associated risk Factors. Front Neurol 2016;7:178.

5. Demetriades D, Eric Kuncir M, FACS, , Carlos V. R. Brown M, FACS,, Matthew Martin M, FACS, , Ali Salim M, FACS, , Peter Rhee M, FACS,, et

al. Early Prediction of Mortality in Isolated Head Injury Patients: A New Predictive Model. The Journal of TRAUMA Injury, Infection, and Critical Care. 2006.

6. Feigin VL, Vos T, Alahdab F, Amit AML, Bärnighausen TW, Beghi E, et al. Burden of Neurological Disorders Across the US From 1990-2017: A

Global Burden of Disease Study. JAMA Neurol. 2021;78(2):165-76. Epub 2020/11/03. doi: 10.1001/jamaneurol.2020.4152. PubMed PMID: 33136137.

7. Hawryluk GWJ, Manley GT. Classification of traumatic brain injury: past, present, and future. Handbook of Clinical Neurology. Traumatic Brain

Injury, Part I. 127: Elsevier B.V.; 2015.

8. Irie F, Brocque RL, Justin Kenardy P, Nicholas Bellamy M, DSc, MBA, Kevin Tetsworth M, FRACS, Cliff Pollard M, FRACS. Epidemiology of

Traumatic Epidural Hematoma in Young Age. 2011.

9. Kim KT, Park JK, Kang SG, Cho KS, Yoo DS, Jang DK, et al. Comparison of the effect of decompressive craniectomy on different

neurosurgical diseases. Acta Neurochir (Wien). 2009;151(1):21-30. Epub 2008/12/20. doi: 10.1007/s00701-008-0164-6. PubMed PMID: 19096757.

10. Kitzinger J, Kitzinger C. Deaths after feeding-tube withdrawal from patients in vegetative and minimally conscious states: A qualitative study of

family experience. Palliative Medicine. 2018;32:1180-8.

11. Levin DR. UNOLS Fleet Safety Data as an Analog for Deep Space (Unpublished Research). 2021.

12. Maiese K. Vegetative State: Merck; 2020 [updated September, 2020; cited 2021 12/10]. Available from:

https://www.merckmanuals.com/home/brain,-spinal-cord,-and-nerve-disorders/coma-and-impaired-consciousness/vegetative-state.

13. Marin JR, Matthew D. Weaver M, Donald M. Yealy M, al e. Trends in Visits for Traumatic Brain Injury to Emergency Departments in the United

States. 2014.

14. Traumatic Brain Injury: Mayo Clinic; 2021 [cited 2021 December 7]. Available from: https://www.mayoclinic.org/diseases-conditions/traumatic-

brain-injury/symptoms-causes/syc-20378557.

15. Mesfin FB, Gupta N, Shapshak AH, Taylor RS. Diffuse Axonal Injury StatPearls; 2021 [cited 2021 Dec 7]. Available from:

https://www.ncbi.nlm.nih.gov/books/NBK448102/.

16. Peterson AB, Zhou H, Thomas KE, Daugherty J. Surveillance Report: Traumatic Brain Injury-related Hospitalizations and Deaths by Age

Group, Sex, and Mechanism of Injury. Center for Disease Control and Prevention: 2017.

17. Scheuring RA, Mathers CH, Jones JA, Wear ML. Musculoskeletal injuries and minor trauma in space: incidence and injury mechanisms in U.S.

astronauts. Aviat Space Environ Med. 2009;80(2):117-24. Epub 2009/02/10. doi: 10.3357/asem.2270.2009. PubMed PMID: 19198198.

18. Shackelford SA, Deborah J. del Junco P, Michael C. Reade M, DPhil, Randy Bell M, Tyson Becker M, Jennifer Gurney M, et al. Association of

time to craniectomy with survival in patients with severe combat-related brain injury Neurosurgical Focus. 2018.

19. Tang Q, Lei J, Gao G, Feng J, mao q, Jiang J. Prevalence of persistent vegetative state in patients with severe traumatic brain injury and its

trend during the past four decades: A meta-analysis. NeuroRehabilitation. 2017;40:23-31.

20. Taussky P, Widmer HR, Takala J, Fandino J. Outcome after acute traumatic subdural and epidural haematoma in Switzerland: a single-centre

experience. Swiss Med Wkly. 2008;138(19-20):281-5. Epub 2008/05/21. PubMed PMID: 18491241.

21. Ward EC, Green K, Morton AL. Patterns and predictors of swallowing resolution following adult traumatic brain injury. J Head Trauma Rehabil.

2007;22(3):184-91. Epub 2007/05/19. doi: 10.1097/01.HTR.0000271119.96780.f5. PubMed PMID: 17510594.

## ACRONYMS

8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 13

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

8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 14

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

8/23/2023 5:54:57 PM ICL115_Trauma - Severe Head Cliff page: 15

---

## Source metadata

```yaml
source_filename: "trauma-severe-head-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Head Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1GdldFrkTHHh03dgZzQUWe0wC6zcfqGJL/view"
source_drive_id: "1GdldFrkTHHh03dgZzQUWe0wC6zcfqGJL"
source_sha256: 4ff2e4ae7371565719c7846f5b8b0fa0c8f1801cbfba05e168c8629d6a8f268d
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 15
ocr_performed: false
```
