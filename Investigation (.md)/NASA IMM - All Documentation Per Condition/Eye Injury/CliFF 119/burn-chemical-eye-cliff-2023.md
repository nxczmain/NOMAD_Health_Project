# Burn Chemical Eye CLiFF 2023

[View original PDF](https://drive.google.com/file/d/15k4OBf4dzoppU0Jmmgingc7898sSoZ2K/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Eye Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL19_Burn - Chemical Eye Chemical burns to the eye vary in severity, with severe cases often resulting in complications such as glaucoma, leading to profound visual consequences. In adults, these injuries are often occupation-related, and are amongst one of the most common workplace related injuries (Xiang, 2005). Alkali chemicals have been shown to cause more severe damage to the eye compared to acidic chemicals. Immediate eye irrigation therapy is the most important initial management of chemical eye burns. It has been shown to reduce severity of ocular damage, need for surgery, and improve visual outcome (Kuckelkorn, 1995). Subsequent treatments aim to promote reepithelization and surgical management to restore normal ocular surface anatomy and visual function. Prompt referral to receive advance treatments and good adherence to therapy have been found to greatly improve visual outcomes (Bizrag, 2019). Most cases of chemical eye burns can be prevented with the use of proper eye protection (Kuckelkorn, 1995).

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Walton and Saile 2017 (LSAH data) reported 4 cases of chemical eye burn among US astronauts during the Space Shuttle Program, Mir, and ISS (through Expedition 13 in 2006) missions.

### ANALOG LITERATURE

Mason, 1984 is a NASA document that provides 10-year Polaris submarine data reporting 5 eye burns per 20,960 man-years.

### TERRESTRIAL LITERATURE

Xiang, 2005 looked at the incidence of work-related eye injuries treated in hospital EDs in the US in 1999. They reported an eye injury incidence rate of 17 to 39 injuries per 10,000 full-time equivalent workers (Xiang, 2005). Among all eye injuries, 6.1% were diagnosed as chemical burns.

Although data not provided, assuming all source of work-related eye injuries occurred evenly among age groups, incidence of chemical eye burns will be approximately between 1.02 to 2.34 per 10,000 full-time equivalent workers. White, 2015 looked at chemical eye burns treated in EDs in the US between 2010 and 2012. They reported an incidence of 51.1 per million people (White, 2015). McGwin, 2005 similarly looked at incidence of ED treated eye injury in the US in the year 2000. They reported an incidence of 3.15 per 1000 population, with burn constituting 10.2% of cases (McGwin, 2005). Therefore calculated as approximately 3.2 per 10,000 population but we do not know how these data reflect on the space crew population.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 0.08787 and SD 0.04409.

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate given the spaceflight data (4 events over 45.49 person-years) under an uninformative prior is Gamma(shape=3.972, rate=45.202) with mean 0.08787 and SD 0.04409. 8/23/2023 5:44:14 PM ICL19_Burn - Chemical Eye Cliff page: 1

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0878722 SD 0.0440907 Gamma (Shape): 3.972 (Rate): 45.202 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Walton, 2017 spaceflight 4 Mason, 1984 analog 3 Xiang, 2005 terrestrial 2 White, 2015 terrestrial 2 McGwin, 2005 terrestrial 2 (Walton and Saile 2017) receives a LOC of 4 because it is an incidence report among US astronauts during previous spaceflight missions (t – LSAH data requests – 4 events over 45.49 person-years. (Mason, 1984) was a large data pool of active duty submarine crews, a good analog to astronauts, therefore receiving a 3 – NASA Technical Memorandum 58255. Space Station Medical Sciences Concepts. 5 eye burns out of 20960 person-years. Since Mason is lower graded, it was not incorporated into the incidence distribution analysis but is reported here for informational purposes. The estimates are much lower and the sample size (person-years of follow-up) are much higher. If included, it would drive the analysis results. (Xiang, 2005) provided incidence data on terrestrial occupation-related eye injury. They included an age stratified data analysis--although these various occupational injuries are unlikely to occur in space, therefore receiving a LOC of 2. (White, 2015) was an examination of a very large population, average age in range of astronauts; however, assaults and other occupational injuries included are not likely relevant for the astronaut population. (McGwin, 2005) also provided data of eye-injury incidence in the general population, receiving a LOC of 2. 8/23/2023 5:44:14 PM ICL19_Burn - Chemical Eye Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Environmental toxicologic assessment, optometry exam (MR014S) as part of the neurological assessment.

### BEST CASE SCENARIO DEFINITION

Chemical exposure to the eyes in which tear pH normalizes within a few minutes and no permanent corneal scaring is expected.

### WORSE CASE SCENARIO DEFINITION

Chemical exposure to the eyes in which tear pH does not normalize within a few minutes, or results in significant scarring/ulceration, or that results in intra-ocular pressure changes. CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

There is no literature found on severity stratified incidence on chemical eye burns, therefore it is hard to estimate BC/WC probability. Xiang, 2005 reported only 0.7% of work-related eye injuries required hospitalization. However, they did not elaborate on the reasons for hospitalization and the severity of burn. Another study by Wong, 2018 conducted in Singapore reported 10% hospitalization rate among chemical eye burn patients (Wong, 2018). It is known, however, even among those with milder forms of chemical eye burn who do not require hospitalization, close monitoring and frequent follow-up are usually warranted (Sharma, 2017). To be conservative, we will use the higher percentile 10% hospitalization rate as our WC probability. TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Xiang, 2005 terrestrial 2 Kuckelkorn, 1995 terrestrial 2 Wong, 2018 terrestrial 2 Population based study conducted in Singapore by (Wong 2018) provided hospitalization incidence for chemical eye burn injuries, receiving a LOC of 2. (Xiang, 2005) provided incidence data and hospitalization rate on terrestrial occupation-related eye injury. They included an age stratified data analysis--although these various occupational injuries are unlikely to occur in space, therefore receiving a LOC of 2. (Kuckelhorn, 1995) also provided data on terrestrial chemical eye burn prognosis. However, study was done more than two decades ago, therefore receiving a LOC of 2. 8/23/2023 5:44:14 PM ICL19_Burn - Chemical Eye Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 0.08787 90 - 90 100 0.5 50 0 2 0 0 0 0 0 Case (TBC) and SD 0.04409 Treated Worst 10 - 10 100 0.5 54.5575 2 5040 9.11507 0 100 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.5 50 0 168 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.5 65.9049 168 5040 31.8097 100 100 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/23/2023 5:44:14 PM ICL19_Burn - Chemical Eye Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Best case scenario for chemical eye burn is defined as one in which the eye pH normalizes within a few minutes and no permanent corneal scarring occurs. With the universal recommendation of immediate ocular irrigation to minimize damage, it is most common for patients to receive some kind of irrigation prior to presentation, making it almost impossible to identify those with "tear pH normalization within a few minutes". Even the mildest form of chemical eye burn, with damage to the corneal epithelium, corneal scarring can occur without optimal treatment and prevention. Therefore, it is challenging to acquire data on best case and worst case scenario probabilities. Given a paucity of data regarding spaceflight or analog chemical eye burn leading to a return to definitive care, severe forms of chemical eye burn usually require hospitalization. Therefore, hospitalization was chosen as a surrogate for RTDC and provided data for LOCL.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Duration data for TBC is obtained from (Spector, 2008) who estimates the regeneration time of minor chemical eye burns between 30 minutes and 2 hours. By definition, the best case scenario chemical eye burn is one in which the eye pH normalizes within a few minutes and no permanent corneal scarring occurs; no evacuation/hospitalization is required and this minor condition would not lead to mortality, so RTDC and LOCL are both 0%. These patients, however, should still receive regular follow-up and potentially topical therapies to promote healing.

TREATED WORST CASE SCENARIO (TWC) COMMENTS (Dua 2001). proposed a grading system that is commonly used for ocular burn injuries, based on corneal injury and opacity: Grade I: minor epithelial damage, Grade II: corneal haze; Grade III total epithelial loss; Grade IV, corneal opacity. The Worst Case scenario proposed ("tear pH does not normalize within a few minutes, or results in significant scarring/ulceration") corresponds with Grade II and higher injuries. Although there is no definite guideline for admission among these patients, close monitoring and frequent follow-up are required in most, if not all, cases of chemical eye burn, so RTDC for the worst case scenario should be 100%. There were no reports of mortality from eye injury in the literature, and no reasonable mechanism for mortality aside from sepsis which is accounted for separately, so LOCL is 0%. Regarding TWC duration, at the low end, a textbook source (Farjo, 2004) provides evidence for healing time from complied clinical and laboratory studies on the cornea. In general, following destruction of the basement membrane, about 6 weeks is required for reconstitution and healing (although in some cases, the cornea is never restored). (Kuckelkorn, 1995) reported an average of 5.2 months (+/- 4.1 months) of hospitalization among those with severe chemical eye burn. However, this study was done more than 2 decades ago, making the duration of treatment less accurate. Regardless, severe cases of ocular chemical burn will require vigorous treatment lasting more than 1 month. Therefore, maximum treatment duration will be more than 5040 hours.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Untreated best case is a scenario in which tear pH normalizes within a few minutes with no corneal scarring; this is indicative of a very minor burn not requiring hospitalization/evacuation or causing serious injury or death, so RTDC and LOCL are both 0%. Treatments of chemical eye burn aim to promote epithelialization and repair, minimize inflammation, and prevent complications (Sharma, 2018). Despite the best case scenario, these patients will still require monitoring and topical therapy. Anti-inflammatory therapy is recommended for 7 days immediately after all chemical injuries (Brodovsky, 2000). Other interventions such as bandage contact lens, frequent lubrication, and topical antibiotics are also warranted to promote wound healing and provide prophylaxis against infection (Bizrah, 2019). Therefore, treatment duration is estimated up to 168 hours.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Immediate irrigation of the eye is critical for the prognosis of such injuries. Duration of recovery from untreated worst-case ocular burn is estimated from (Kuckelkorn 1995), who found that ocular burns with delayed or no treatment took on average 6 months to heal. As described in TWC RTDC, although there is no definite guideline for admission among these patients, close monitoring and frequent follow-up are required in most cases of chemical eye burn, so RTDC for the worst case scenario should be 100%. There are no reports of mortality resulting from an ocular burn in literature, and no reasonable mechanism for mortality from ocular burn without other complications, so LOCL is 0%. If mortality coincided with ocular burn, it would be related to burns on other parts of the body or infections, which are covered in other topics.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Kuckelkorn, 1995 terrestrial Spector, 2008 terrestrial 8/23/2023 5:44:14 PM ICL19_Burn - Chemical Eye Cliff page: 5

2

| Citation |  | Source | LOC Value |  |  |
| --------------- | --- | ----------- | --------- | --- | --- |
| Brodovsky, 2000 |  | terrestrial |  |  |  |
| Caldwell, 2008 |  | terrestrial |  |  |  |

(Kuckelhorn, 1995) provided data on terrestrial chemical eye burn duration of hospitalization. However, study was conducted more than two decades ago. (Spector, 2008) is a review that estimated the time required for regeneration of minor chemical eye burns. (Brodovsky, 2000) is a retrospective study looking at the treatment and prognosis of alkali eye burns. (Caldwell, 2008), although strong in design (prospective, randomized control assessment) was based on a patient population of post-PRK surgery subjects-- indirect surrogate for our primary condition (also cause for downgrading the LOE). Due to the evaluation of treatment strategies and lack of clear evidence for duration of treatment, collectively, LOC is a 2.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation |  | Source | LOC Value |  |  |
| ---------------- | --- | ----------- | --------- | --- | --- |
| Xiang, 2005 |  | terrestrial |  |  |  |
| Kuckelkorn, 1995 |  | terrestrial |  | 3 |  |
| Bizrah, 2019 |  | terrestrial |  |  |  |

Surrogate for RTDC is hospitalization. (Xiang, 2005) provided incidence data and hospitalization rate on terrestrial occupation-related eye injury. (Kuckelhorn, 1995) also provided data on probability of hospitalization. (Bizrah, 2019) provided information on treatment strategies for mild to severe ocular chemical burn injuries. With more severe cases usually requiring advanced treatment such as human amniotic membrane transplantation and limbal stem cell transplantation, hospitalization is most likely necessary.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source |  | LOC Value |  |  |
| -------- | ------ | --- | --------- | --- | --- |
| N/A | N/A |  |  | 3 |  |

No articles found on mortality directly resulting from isolated chemical eye burn.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

- Worst Case Definition: Chemical exposure to the eyes in which tear pH does not normalize within a few minutes, or results in significant

scarring/ulceration, or that results in intra-ocular pressure changes.

- Best Case Definition: Chemical exposure to the eyes in which tear pH normalizes within a few minutes and no permanent corneal scaring is

expected. Essentially this is a eye damage when a chemical is released in the cabin and comes in contact with the eye. There are no assumed medical preconditions. The CRT condition focuses solely on the removal of the chemical and recovery of the eye all as quickly as possible.

### Diagnostic Scope and Resourcing

In the best-case scenario, diagnosis is based on history and physical examination. The eye exam after initial assessment will involve inspecting for scratches and scarring. In the worst-case scenario, diagnosis is based on history and physical examination and will include all of the same assessment as the best-case scenario for eye damage. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.5 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the

| 8/23/2023 5:44:14 PM |  | ICL19_Burn - Chemical Eye Cliff |  |  | page: 6 |
| -------------------- | --- | ------------------------------- | --- | --- | ------- |
following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient CP1 WC (Treated or Untreated): 0.5 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a two.

### Treatment Scope and Resourcing

In the best-case scenario, treatment is limited to mild pain medications and lubrication.

The worst case scenario, will be the same as the best-case scenario with the exception of the severity of eye damage. Therefore the degree of pain management may need to be increased (i.e. stronger pain medication may be required). Shielding of the eye will also be needed to protect from further damage.

### Communications and Support Needs

In the best-case and worst-case scenario, initial diagnosis and cleaning is uncomplicated and likely within the scope of care of onboard crew members. Later diagnosis of damage will require ground communications.

## REFERENCES

### IMM CLIFF RECONCILATION COMMENTS

Best case scenario definition has changed from mild eyelid or ocular burn which does not effect vision to chemical eye burns in which tear pH normalizes within a few minutes with no corneal scarring. This alteration changes best case and worst case scenario probabilities. However, with the current definition, there is no severity stratified incidence found in current literature. In order to minimize the risk of permanent damage, vision loss, and other complications such as glaucoma, we found that long and comprehensive treatment plans are usually warranted for those with chemical eye burn. Therefore, durations of treatment in this current CLiFF are longer than those estimated in the IMM CLiFF. RTDC probability remains the same at 100% for untreated individuals due to the necessity of hospitalization in moderate to severe cases during the entire course of treatment.

LOCL also remains the same at 0% without evidence of isolated chemical eye burns resulting in death in current literature. The IMM CLiFF also reports 6 cases of spaceflight condition incidence but we have verified with the LSAH data that there are only 4 verified incidents.

### LIMITATIONS SUMMARY

Most studies of chemical eye burns reflect general terrestrial populations. With different work environments and safety protocols, occupation- related chemical eye burn incidence varies greatly. It is not known how likely space crew members will encounter potential hazardous chemicals and whether protective eyewear will be mandated in high risk situations. There is also no literature found on severity stratified incidence on chemical eye burns, therefore it is hard to estimate BC/WC probability. The current definition of BC scenario "tear pH normalization within a few minutes" does make challenging to differentiate literature for BC/WC data, especially with the universal recommendation of immediate eye irrigation after all incidents of chemical eye burn until pH normalizes. 8/23/2023 5:44:14 PM ICL19_Burn - Chemical Eye Cliff page: 7

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

|  |  |  |  |  | 854 |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| -------------------- | --- | --- | --- | -------------------------- | ------------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| 8/23/2023 5:44:14 PM |  |  |  |  | ICL19_Burn - Chemical Eye Cliff |  |  |  |  |  |  | page: 8 |
Total Human

|  |  | Translation & | Total Tasks |  |  |
| --- | --- | ------------- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) | Extremity Standing (g) | Equipment Ops | Category |  |
| --- | ----- | ---------------------- | ------------- | -------- | --- |

(microgravity) Condition Tasks Full Mission Treated Best

|  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  | 132 |  | 211 343 | 3763 0.0911507 | 9.11507 |
| --- | --- | --- | ------- | -------------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  | 211 1197 | 3763 0.318097 | 31.8097 |
| --- | --- | --- | -------- | ------------- | ------- |

Case (UTWC)

| 8/23/2023 5:44:14 PM |  | ICL19_Burn - Chemical Eye Cliff |  |  | page: 9 |
| -------------------- | --- | ------------------------------- | --- | --- | ------- |
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

8/23/2023 5:44:14 PM ICL19_Burn - Chemical Eye Cliff page: 10

## REFERENCES

Reference Bizrah M, Yusuf A, Ahmad S. Adherence to Treatment and Follow-Up in Patients with Severe Chemical Eye Burns. Ophthalmol Ther. 2019 Jun;8(2):251-259. doi: 10.1007/s40123-019-0173-y. Epub 2019 Mar 13. PMID: 30868417; PMCID: PMC6514011.

Brodovsky SC, McCarty CA, Snibson G, et al. Management of alkali burns : an 11-year retrospective review. Ophthalmology. 2000;107:1829– 35.B Choi SH, Kim MK, Oh JY. Glaucoma after ocular chemical burns: Incidence, risk factors, and outcome. Sci Rep. 2020 Mar 16;10(1):4763. doi: 10.1038/s41598-020-61822-5. PMID: 32179804; PMCID: PMC7076008.

Dua HS, King AJ, Joseph A. A new classification of ocular surface burns. Br J Ophthalmol. 2001 Nov;85(11):1379-83. doi: 10.1136/bjo.85.11.1379. Kuckelkorn R, Kottek A, Schrage N, Reim M. Poor prognosis of severe chemical and thermal eye burns: the need for adequate emergency care and primary prevention. Int Arch Occup Environ Health. 1995;67(4):281-4. doi: 10.1007/BF00409410. PMID: 7591189.

Macdonald EC, Cauchi PA, Azuara-Blanco A, Foot B. Surveillance of severe chemical corneal injuries in the UK. Br J Ophthalmol. 2009 Sep;93(9):1177-80. doi: 10.1136/bjo.2008.154831. Epub 2009 May 4. PMID: 19416936.

McGwin G Jr, Owsley C. Incidence of emergency department-treated eye injury in the United States. Arch Ophthalmol. 2005 May;123(5):662-6. doi: 10.1001/archopht.123.5.662. PMID: 15883286.

Pargament JM, Armenia J, Nerad JA. Physical and chemical injuries to eyes and eyelids. Clin Dermatol. 2015 Mar-Apr;33(2):234-7. doi: 10.1016/j.clindermatol.2014.10.015. Epub 2015 Jan 17. PMID: 25704943.

Sharma N, Kaur M, Agarwal T, Sangwan VS, Vajpayee RB. Treatment of acute ocular chemical burns. Surv Ophthalmol. 2018 Mar- Apr;63(2):214-235. doi: 10.1016/j.survophthal.2017.09.005. Epub 2017 Sep 19. PMID: 28935121.

Spector J, Fernandez WG. Chemical, thermal, and biological ocular exposures. Emerg Med Clin North Am. 2008 Feb;26(1):125-36, vii. doi: 10.1016/j.emc.2007.11.002. PMID: 18249260.

Xiang H, Stallones L, Chen G, Smith GA. Work-related eye injuries treated in hospital emergency departments in the US. Am J Ind Med. 2005 Jul;48(1):57-62. doi: 10.1002/ajim.20179. PMID: 15940717.

White ML, Chodosh J, Jang J, Dohlman C. Incidence of Stevens-Johnson Syndrome and Chemical Burns to the Eye. Cornea. 2015 Dec;34(12):1527-33. doi: 10.1097/ICO.0000000000000646. PMID: 26488629.

Wong MY, Man RE, Gupta P, et alPrevalence, subtypes, severity and determinants of ocular trauma: The Singapore Chinese Eye Study British Journal of Ophthalmology 2018;102:204-209.

Analog incidence here in CLiFF : Mason 1984 (unable to find reference…)

Thomas 2003 (unable to find reference)

Tansey 1979 (unable to find reference)

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

8/23/2023 5:44:14 PM ICL19_Burn - Chemical Eye Cliff page: 11

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

8/23/2023 5:44:14 PM ICL19_Burn - Chemical Eye Cliff page: 12

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

8/23/2023 5:44:14 PM ICL19_Burn - Chemical Eye Cliff page: 13

---

## Source metadata

```yaml
source_filename: "burn-chemical-eye-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Eye Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/15k4OBf4dzoppU0Jmmgingc7898sSoZ2K/view"
source_drive_id: "15k4OBf4dzoppU0Jmmgingc7898sSoZ2K"
source_sha256: ed1c968f72a067bc35754ac3325905b7ca33e3de3cae4e3c5605057e7d523fd2
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
