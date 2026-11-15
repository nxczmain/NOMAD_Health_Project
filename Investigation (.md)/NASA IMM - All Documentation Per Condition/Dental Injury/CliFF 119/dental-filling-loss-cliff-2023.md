# Dental Filling Loss CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1SA5_AUF1fgAzJQhbxDcr9XkktRo1HLhS/view) · **15 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Dental Injury/CliFF 119

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

### ICL30_Dental Filling Loss

Over 60% of all restorative dentistry involves the replacement of restorations. (Wilson, 2003). Materials to place fillings in-flight have been flown on ISS (Hodapp and Jeske, 2020) but there have been no documented reports of filling-loss inflight.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

There have been no instances to date of dental filling loss aboard US space missions. There is an overall paucity of incidence data in space literature.

### ANALOG LITERATURE

Analog literature for dental filling loss comes from the military (Alexander, 1996; Deutsch, 2008; Richardson, 2005; Chaffin, 2001; Payne and Posey, 1978). Alexander, 1996 is a retrospective review of medical records for UK naval warships at sea from April 1, 1990- April 1, 1991. Naval dental officers reviewed records for unscheduled dental visits for one year to determine the cause of these visits. Notably, this was an all-male population with an average age of 27.6 years. Defective restoration was the most common cause of unscheduled visits. The incidence of filling loss was 0.0098 per person-year. Payne and Posey, 1978 is a retrospective review of medical records of 24,500 active duty Army personnel over 39 days during their participation in Empire Glacier and Brave Shield field training exercises. Rates of lost or broken fillings was described as "defective restoration." The demographics of this population were not provided, but can be assumed to be a young, primarily male population. The incidence provided in this study for filling loss was 0.00458 per person-year. Richardson, 2005 is a retrospective review of dental visits from mostly UK and some US servicemembers in the Middle East theater and is a known citation from the previous CLiFF. This paper has severely limited applicability to the true incidence as is does not separate lost/fractured restoration from lost/fractured teeth (a separate condition, ICL#31) in its incidence summary. It presents an incidence of 0.0481 lost/fractured teeth and/or restorations per person-year, likely a significant overestimate.

Deustch, 2008 is a retrospective review of U.S. submariners on naval patrol, with an incidence obtained from searching ICD-9 codes for dental- related morbidity encountered in this population. The ICD-9 code for restoration failure/loss also includes other causes of dental morbidity unrelated to dental fillings. The population was also all male. The incidence provided by this source was 0.00511 restoration failures per person- year, likely an overestimation of the true incidence of dental filling loss in this population. Chaffin, 2001 is a retrospective review of dental emergencies encountered by US armored calvary in Bosnia in 2000. This reference does not indicate whether restoration failures are due to lost/fractured restorations or secondary caries. The incidence provided was 0.0377 restoration failures per year, likely an overestimate of filling loss.

### TERRESTRIAL LITERATURE

Lugassy, 1989 was used to inform the incidence for this condition. It is a retrospective analysis PhD thesis of failure rates of dental restorations of various materials in adult patients residing in San Francisco. 1154 patients were included. There was over-representation of Caucasian participants (68.2%) compared to black (17.8 %), Hispanic (1.5 %), or Asian (12.4 %) participants. However, this population is the most analogous to the astronaut corps because the majority of patients were retired military personnel, their families, or in various civil service roles and the mean age was 45.7 years. Fillings were followed for 19 years. Reasons that fillings failed that were included in the incidence for this CLiFF include: Fracture of the filling, open margins, marginal leakage, excessive wear, pulpal hyperemia, inadequate contact/contour, and "other-related" as defined in the paper as these are all valid causes of a filling failure/loss. There were a total of 330 lost fillings out of 20961 filling years, generating an incidence of 0.016 failed/lost fillings per filling-year. The incidence for this condition will be presented per filling year. Astvaldsdottir, 2015 conducted a systematic literature review from 1995-2012 of dental restorations and fixed prosthesis in adult patients in Germany, Sweden, and Denmark with dental fillings. The types of fillings were not controlled for and the minimum follow up time was 4 years. The article did not adequately describe the overall population characteristics from each study that it summarized, making its applicability to this CLiFF limited. It also combined tooth fracture (a separate condition, ICL#31) with filling fracture. The incidence provided was 0.0093 failed restorations per person-year. 11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 1

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

- Mean: 0.07184

- SD: 0.003998

### INCIDENCE SUMMARY

Lugassy, 1989 was chosen as the best source of data to inform the incidence distribution for this condition since the population was most similar to the astronaut corps (retired military and civil servants, average age 45.7, includes 54.5% male and 44.5% female participants). Note the appropriate denominator for this incidence was selected as FILLING-YEARS and an average of 4.96 fillings per person was used to calculate the incidence. Ideally, MEDPRAT will randomize crew characteristics and propagate variability due to those within the simulation. The age, type of filling material, or location of filling were not accounted for in this incidence. The assumption is being made that all crewmember fillings are "like new" at the time of the start of the mission based on preventive dental care at NASA. Lugassy, 1989 reports a total of 330 during filling losses over 20,961 filling-years, IR 1.574E-2 (95%CI: 1.411E-2, 1.751E-2). This incidence rate for fillings was adjusted according to the distribution of the number of fillings in the general population. From NHANES, 8% of the population have no fillings. For those that do have fillings, the average number of fillings from Lugassy was used (5727 total restorations amongst 1154 patients), 4.96 fillings on average per patient. The Bayesian posterior distribution for the incidence rate filling loss at the filling-level given the Lugassy data (330 events over 20961 filling-years) under an uninformative prior is Gamma(shape=322.73, rate=20517.16) with mean 0.01573 and SD 8.756E-4. This rate was adjusted for the 8% of those who have no fillings and the average number of fillings within the Lugassy study 4.96 (5727 total restorations amongst 1154 patients). The resulting posterior distribution for the adjusted incidence rate on the person-level is Gamma(shape=322.88, rate=4494.49) with mean 0.07184 and SD 0.003998.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0718391 SD 0.00399798 Gamma (Shape): 322.88 (Rate): 4494.49 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Alexander, 1996 Analog 2 Payne and Posey, 1978 Analog 2 Richardson, 2005 Analog 0 Deustch, 2008 Analog 0 11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 2

### Citation Source LOC Value

Chaffin, 2001 Analog 0 Astvaldsdottir, 2015 terrestrial 0 Lugassy, 1989 terrestrial 3 Alexander, 1996 is a UK military naval ship analog study. The patient population is all male with an average age of 27.6yo and thus not as representative of our patient population as Lugassy, 1989. Similarly, Payne and Posey, 1978 is an analog study of US active duty army personnel over a 39-day period. Demographic data for this study was not provided. It is assumed that this would also be a young, primarily male population.

Again, Lugassy, 1989 is a better approximation of the astronaut population. Richardson, 2005 is a retrospective review of UK servicemembers deployed to the Middle East. It does not separate lost/fractured fillings from dental fracture and dental avulsion (separate conditions in IMPACT 1.0). Deustch, 2008 is a retrospective review of naval submariners. This article was used to inform IMM but is not granular enough to determine the incidence of dental filling loss due to inclusion of other causes of dental morbidity in the same ICD9 codes. Chaffin, 2001 is another military analog; a retrospective analysis of 2449 soldiers in the 3rd Armored Cavalry deployed to Bosnia in 2000. Again, these data are not granular enough to determine the incidence of dental filling loss due to vagueness in the definition of “restoration failure.” Astvaldsdottir, 2015 is a terrestrial systematic review of adult patients in Germany, Sweden, and Denmark with Dental fillings followed for 4 years. The patient population in this study is unclear and tooth fractures are combined with filling fractures, which would artificially inflate the incidence of filling loss if this was used. Dental Fracture is a separate condition in IMPACT 1.0. Lugassy, 1989 appears to be a PhD dissertation retrospective analysis of failure rates of dental restorations of various materials in adult patients residing in San Francisco. 1154 patients were included, however, there was over-representation of Caucasian participants (68.2%) compared to black (17.8 %), Hispanic (1.5 %), or Asian (12.4 %) participants. The majority of patients were retired military personnel, their families, or in various civil service roles. The mean age was 45.7 years. These demographics make this the most analogous patient population to the astronaut corps. Therefore, it is used to inform the spaceflight incidence of filling loss. 11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Crewmembers undergo dental screening examinations at the time of selection and comprehensive annual dental examinations and cleanings. At 6 months before launch crewmembers additionally undergo a complete dental examination. If treatment is deemed necessary, all such treatment is completed 3 months before launch. All astronauts are expected to maintain optimal physical and oral health and to follow oral hygiene practices (Hodapp and Jeske, 2020).

### BEST CASE SCENARIO DEFINITION

Loss of a filling without any pain that can wait until return to earth for treatment.

### WORSE CASE SCENARIO DEFINITION

Loss of a filling which requires pain management with analgesics and/or temporary filling.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The definitions of best-case scenario (no pain, can wait to return to earth for treatment) and worst-case scenario (pain and/or needs temorary filling) make it extremely hard to find literature that informs these scenarios. Richardson, 2005 provides a worst-case probability of 16.9% based on moderate to severe morbidity associated with fractured/lost tooth/restoration in 80/471 complaints. This is not an ideal source for these probabilities because it lumps restoration loss with fractured teeth (ICL31) and tooth avulsion (ICL 32). It would seem that this would be an overestimate of the worst-case scenario since it includes several conditions, but all literature reviewed unanamously agrees that if a filling is lost, it should be replaced or the cavity could increase in size and cause issues for the crewmember. This would support a worst-case scenario probability of 100%. Yet, there could be fillings that if lost do not need immediate replacement and could wait until return to Earth (particularly if the filling lost is small, superficial, and/or occurred near the end of the mission). To this end, the editor looked for literature from countries with socialized dental care and wait-lists for filling-replacement. Tuominen and Eriksson, 2012 surveyed 112 Finnish patients placed on a national wait-list for non-emergent dental treatment.

The survey assessed the patients' level of "inconvenience." The Finnish term used was "haitta tai vaiva," which best translates to "inconvenience" in English and covers a wide range of terms, like bother, trouble, annoyance, irritation, discomfort, nuisance, etc. The highest inconvenience rankings occurred at and after 4 months time. The editor interpreted this information to mean that lost fillings would require temporary filling after 4 months. (This is substantiated by the lack of concern for dental caries progression for mission durations less than 3 months expressed by Hodapp and Jeske, 2020). The DRM for IMPACT version 1.0 is a 210 day mission to cis-lunar space acting as an analog for future Mars Missions.

Therefore, if a crewmember lost a filling before day 86, they would still have 4 months remaining in the mission. In these cases, they would need a temporary filling because they wouldn’t be able to tolerate it for more than 4 months. 86/210 = 41% of the mission, so Tuominen and Eriksson, 2012 supports a 41% worst-case scenario probability. It is anticipated that Richardson, 2005 is an underestimate of the number of fillings lost that would require temporary filling and that Tuominen and Eriksson, 2012 is an overestimate. The range 16.9-41% will be assigned for worst-case scenario to help account for these uncertainties within the MEDPRAT model. The lack of data regarding fillings requiring temporization is a limitation of this CLiFF. (Note, utilizing the method developed to find the probability of a crewmember requiring a temporary filling because there is more than 4 months of the mission remaining (informed by Tuominen and Eriksson, 2012) would change the worst-case probability depending on the DRM. For instance, a Mars Mission with a DRM of 3.5 years would have a worst-case probability of approximately 94%. (1152 days in the mission with at least 4 months remaining. 1152 days/1227.5 total days = 94%).

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Richardson, 2005 Analog 2 Tuominen and Eriksson, 2012 Terrestrial 3 Hodapp and Jeske, 2020 Spaceflight 3 Richardson, 2005 identifies dental problems experienced by mostly UK servicemembers over 2 months in 2003 during Operation Telic. This paper combines the occurrence of lost/fractured teeth and lost/fractured restorations for incidence. It does not describe the treatments performed for these problems but instead presents moderate/severe morbidity which has been utilized to identify the lower bound of the worst-case probability (16.9%). The assumption was made that minimal morbidity would be associated with the best-case scenario and moderate/severe morbidity would be associated with the worst-case scenario. Tuominen and Eriksson, 2012 surveyed 112 Finnish patients placed on a national wait-list for non- emergent dental treatment. The survey assessed the patients' level of "inconvenience." The Finnish term used was "haitta tai vaiva," which best translates to "inconvenience" in English and covers a wide range of terms, like bother, trouble, annoyance, irritation, discomfort, nuisance, etc. The highest inconvenience rankings occurred at and after 4 months time. The editor interpreted this information to mean that lost fillings would require temporary filling after 4 months and used this to inform the upper bound of the worst-case probability (41%). Note this study was not specific to lost fillings. Hodapp and Jeske, 2020 discusses salivary changes and increased increments of calculus and gingival inflammation (precursors to dental caries) during Skylab missions, and then states that because the flight duration was 3 months or less, the changes were of little concern (corroborating the 4 month timing of being able to wait for a temporary filling from Tuominen and Eriksson, 2012). 11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 4

11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 5

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best Mean: 0.07184 59 - 83.1 100 0.66 0 0 0.5 0 0 0 0 0

- Case (TBC) SD: 0.003998

Treated Worst 16.9 - 41 100 0.66 5.60723 0.5 1 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.66 0 0 0.5 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.66 26.8934 0.5 120 26.8933 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 6

### SCENARIO OVERVIEW COMMENTS

Note the best-case scenario involves loss of a filling with no pain that can wait until return to earth (doesn't require treatment). Therefore the durations for the treated and untreated best-case scenarios are the same (that required for stowage of the filling and dental hygiene). RTDC and LOCL were assumed to be 0% for this CLiFF. No RTDC surrogate was assigned, but dental aspiration of the dental filling (using data from dental crown aspiration) was considered as a cause of RTDC and found to be negligible. See specific comments for each scenario below.

TREATED BEST CASE (TBC) SCENARIO COMMENTS There is an overall lack of dental association recommendations, clinical trials, or bench research studies to inform when a lost filling may not require any intervention. Best practice guidelines suggest that fillings that are lost should be replaced within 2-3 weeks to prevent progression of caries, periodontitis, pulpitis, and abscess formation. Based on the best-case scenario of a filling lost without pain that can wait until return to earth for treatment, the minimum duration of clinical phase 2 was assigned as 0 hours. No literature could be found to inform a maximum duration. It was assigned 0.5 hours to allow for restoration stowage and dental hygiene. RTDC was pre-determined to have a probability of 0% by the ExMC Clinical and Science Team for both the best and worst-case scenarios. However, there could be a theoretical concern for aspiration of the lost filling. Susini et al, 2007 is a French study of aspiration events during root canal treatments that experienced a rate of hospitalization from crown aspiration (closest approximation to a filling loss in this study) or ingestion of approximately 0.014 hospitalizations/100,000 root canals and no fatalities. All aspiration events required hospitalization for bronchoscopy. Applying this rate to an individual event, the incidence of hospitalization due to crown (surrogate for filling loss) aspiration or ingestion is negligible based on these data, confirming the suspected RTDC probability of 0%. LOCL probability was assumed to be 0% and no literature search was performed.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The ISS Medical Checklist describes the procedure to perform a temporary filling in the event of filling loss. The minimum duration of clinical phase 2 was estimated to be 30 minutes based on this procedure (NASA ISS Medical Checklist, 2014). The American Dental Association has published guidelines for oral pain management for dental procedures in which they list dental procedures that may cause mild, moderate, or severe pain and then list appropriate treatment strategies for each category. Dental fillings are not anticipated to cause any pain requiring treatment based on this guideline. (ADA, 2021) Thus the maximum duration has been assigned at 1 hour accounting for an estimated time necessary for revision of the filling if bite occlusion is not satisfactory (Deeb and Johnson, 2017). This condition was pre-determined by ExMC to have an RTDC of 0%. LOCL probability was assumed to be 0% and no literature search was performed.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The best-case scenario does not require treatment and has no pain. So the same duration as the best-case treated scenario was assigned (0-0.5 hours) to allow for restoration stowage and dental hygiene. This condition was pre-determined by ExMC to have an RTDC of 0%. LOCL probability was assumed to be 0% and no literature search was performed.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS When a restoration is lost, the underlying dentin is exposed to oral flora and food particles. This exposure predisposes patients to further tooth decay, pulpitis, periapical abscess, and eventually systemic disease (Yip and Smales, 2012). Factors such as xerostomia, diets rich in simple carbohydrates, lack or fluoride, and poor oral hygiene increase the rate at which carious lesions progress (Yip and Smales, 2012). A minimum duration for clinical phase 2 of 30 minutes was assigned for the time required to stow the lost restoration and perform dental hygiene. A maximum duration of 120 hours for clinical phase 2 was selected for treatment of acute pain. The patient may experience severe pain or dental sensitivity indefinitely until a temporary restoration is placed due to the underlying dentin and pulp sensitivity. Thorough Cochrane, PubMed, and Google scholar searches and hand searches were performed and an overall lack of information was available regarding the duration of convalescence or progression of untreated dental filling loss to other conditions (i.e. pulpitis, periapical abscess, or sepsis) but the consensus in the literature is that a lost filling causing pain should be replaced within 3-5 days. At the onset of the COVID-19 pandemic, the American Dental Association outlined emergent versus non-urgent conditions to mitigate viral spread, and defective restoration causing pain was listed as an urgent condition that should be seen within days (Solana, 2020). This condition was pre-determined by ExMC to have an RTDC of 0%. LOCL probability was assumed to be 0% and no literature search was performed. Note that progression of this untreated condition to others with possible RTDC/LOCL (such as pulpitis, periapical abscess, or sepsis) is possible, but literature to inform the probability of progression for MEDPRAT modeling was not available.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC) 11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 7

| Citation |  | Source | LOC Value |
| ---------------------- | --- | ----------- | --------- |
| Deeb and Johnson, 2017 |  | Terrestrial |  |
| Stefanac, 2016 |  | Terrestrial |  |
| Yip and Smales, 2012 |  | Terrestrial |  |

3

| NASA ISS Medical Checklist, 2014 |  | Terrestrial |  |
| -------------------------------- | --- | ----------- | --- |
| Solana, 2020 |  | Terrestrial |  |
| ADA, 2021 |  | Terrestrial |  |

The best-case scenario requires no treatment, so minimum durations were assigned no time and maximum durations were assigned 0.5 hours to store the lost restoration and perform dental hygiene. The worst-case scenario requires dental filling. The treated worst-case duration is based on performing the temporary dental filling procedure in the ISS Medical Checklist. Note, the checklist does not specify times. These were estimated.

The untreated worst-case maximum duration is based on ADA guidelines stating that loss of a dental filling with pain should be treated urgently with a filling (and is assigned the maximum length of 5 days at which that filling should be placed) (Solana, 2020). Note that pain would likely continue in the absence of temporary filling placement and progression to other conditions like pulpitis and abscess is possible but there is a paucity of data regarding the duration of pain and probability of progression.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------ | ----------- | --------- | --- |
| Susini et al, 2007 | Terrestrial |  | 3 |

RTDC was pre-determined to have a probability of 0% by the ExMC Clinical and Science Team for both the best and worst-case scenarios.

However, there could be a theoretical concern for aspiration of the lost filling. Susini et al, 2007 is a French study of aspiration events during root canal treatments that experienced a rate of hospitalization from crown aspiration (closest approximation to a filling loss in this study) or ingestion of approximately 0.014 hospitalizations/100,000 root canals and no fatalities. All aspiration events required hospitalization for bronchoscopy. Applying this rate to an individual event, the incidence of hospitalization due to crown (surrogate for filling loss) aspiration or ingestion is negligible based on these data, confirming the suspected RTDC probability of 0%.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------ | ----------- | --------- | --- |
| Susini et al, 2007 | Terrestrial |  | 3 |

LOCL probability was assumed to be 0% for all scenarios and no literature searches were performed. Susini et al, 2017 as explained in the Table 6 Caption showed no loss of life from dental crown aspiration or ingestion events. Should an untreated worst-case dental filling progress to more severe conditions (like pulpitis, dental abscess, sepsis) the LOCL probability would be greater than 0, but those other conditions are not accounted for in the scope of this CLiFF and the assumption of a 0% probability of LOCL is reasonable for this isolated condition.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

- Worst Case Definition: Loss of a filling which requires pain management with analgesics and/or temporary filling.

- Best Case Definition: Loss of a filling without any pain that can wait until return to earth for treatment.

Artificial dental filling that is lost and the associated medical response to the pain and discomfort associated with the condition. Generally this condition is one of discomfort rather than a medical emergency.

The CRT condition focuses solely on the relief of this discomfort whether that requires pain management, filling replacement, or not. The extent to which relief is achieved is simply crew preference and there is no medical assessment necessary.

### Diagnostic Scope and Resourcing

In the best-case scenario, diagnosis is based on history and physical examination.

In the worst-case scenario, diagnosis is based on history and physical examination. 11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 8

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.66 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient CP1 WC (Treated or Untreated): 0.66 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a three: this is at a nurse level.

### Treatment Scope and Resourcing

In the best-case scenario, treatment is limited to mild pain medications as this was specifically in the definition of the best case for this condition. In terrestrial conditions where medical capabilities are lacking, this is likely a reasonable course of action. The worst case scenario also allocates for temporary replacement of the filling in addition to the mild pain medications listed for the best case scenario.

Most filling loss in terrestrial populations (best or worst case) are resolved with permanent replacement of the filling and mild pain relief without need for temporary fillings.

### Communications and Support Needs

In the best-case scenario, diagnosis and course of treatment is uncomplicated and likely within the scope of care of onboard crew members. In the worst-case condition, ground communications will be helpful but are not necessary given the uncomplicated nature of the condition and the scope of care onboard.

## REFERENCES

### IMM CLIFF RECONCILATION COMMENTS

The best-case scenario definition is unchanged from IMM. The worst-case scenario no longer includes fractured tooth with exposed pulp as it is now its own condition (ICL#31). The durations in this CLiFF are similar to IMM with the exception of the worst-case untreated maximum duration of 120 hours in this CLiFF (previously max duration of 24 hours in IMM). RTDC and LOCL probabilities in this CLiFF are 0% and their counterparts in IMM were as well.

### LIMITATIONS SUMMARY

- The incidence is provided as a value per filling-year. We will go with FILLING YEARS for denominator. Age, type of filling material, and location of

filling are not factored into the incidence. The assumption was made that any crewmember fillings were “like new” at the start of the mission based on preventive dental care at NASA. • No LOCL searches were performed for this condition. It is a reasonable assumption that LOCL probability is likely 0% (it would definitely be 0% in the BC scenarios), but substantiation of this was not pursued with a literature search. 11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 9

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------------------- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  |  |  |  |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 664 |  |  |  |  | 5 |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  | Translation & |  |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity Standing (g) |  | Equipment | Ops |  | Category |  |  |
| --- | ----- | --- | ---------------------- | -------------- | --------- | --- | --------- | -------- | --- | --- |
|  |  |  |  | (microgravity) |  |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  | 211 | 211 | 3763 | 0.0560723 | 5.60723 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | --------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  |  |  |  | 211 | 1012 | 3763 | 0.268934 | 26.8934 |
| --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |  |
| --- | ----------------------- | -------------- | --------------- | ------- | --------- | --------- | --- | --- | --- | --- |
|  |  | Communications | personal Vision | Hearing |  | Dentition | GI | GU |  |  |
|  | Simple Complex |  |  |  | pulmonary |  |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 664 |  |  |  |  | 5 |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 10

Total Human

|  | Translation & | Total Tasks |  |  |
| --- | ------------- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | ---------------------- | ------------- | -------- | --- |

(microgravity) Condition Tasks Full Mission Treated Best

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 |  | 211 1012 | 3763 0.268934 | 26.8934 |
| --- | --- | -------- | ------------- | ------- |

Case (UTWC) 11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 11

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

CP2: No comment CP3: No comment

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

11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 12

## REFERENCES

Reference

1. ADA. Oral Analgesics for Acute Dental Pain: American Dental Association; [cited 2021 June 4]. Available from:

https://www.ada.org/en/member-center/oral-health-topics/oral-analgesics-for-acute-dental-pain.

2. Alexander DC. Dental recall status and unscheduled dental attendances in British warships. Mil Med. 1996;161(5):268-72. Epub 1996/05/01.

- PubMed PMID: 8855057.

3. Ástvaldsdóttir Á, Dagerhamn J, van Dijken JW, Naimi-Akbar A, Sandborgh-Englund G, Tranæus S, et al. Longevity of posterior resin composite

restorations in adults – A systematic review. J Dent. 2015;43(8):934-54. Epub 2015/05/25. doi: 10.1016/j.jdent.2015.05.001. PubMed PMID: 26003655.

4. Chaffin J, King JE, Fretwell LD. U.S. Army dental emergency rates in Bosnia. Mil Med. 2001;166(12):1074-8. Epub 2002/01/10. PubMed PMID:

11778408.

5. Deeb G, Johnson A. Auerbach's wilderness medicine. Seventh edition.. ed. Auerbach PS, Cushing TA, Harris NS, editors: Philadelphia, PA :

Elsevier; 2017.

6. Deutsch WM. Dental events during periods of isolation in the U.S. submarine force. Mil Med. 2008;173(1 Suppl):29-37. Epub 2008/02/19. doi:

10.7205/milmed.173.supplement_1.29. PubMed PMID: 18277720.

7. Hodapp MH, Jeske AH. Dental Considerations. In: Barratt MR, Baker ES, Pool SL, editors. Principles of Clinical Medicine for Space Flight. 2nd

ed: Springer; 2020.

8. Lugassy A. Clinical Evaluation of Dental Restorative Materials. 1989.

9. NASA. 2.6.302 DENTAL PROCEDURE - TEMPORARY DENTAL FILLING. International Space Station Integrated Medical Group (IMG) Medical

Checklist. 2014;JSC-48522-E4:467-70.

10. Payne T, Posey W. Analysis of Dental Casualties in Prolonged Field Training Exercises. 1978.

11. Richardson PS. Dental morbidity in United Kingdom Armed Forces, Iraq 2003. Mil Med. 2005;170(6):536-41. Epub 2005/07/09. doi:

10.7205/milmed.170.6.536. PubMed PMID: 16001608.

12. Solana K. ADA develops guidance on dental emergency, nonemergency care

Recommendations part of dentists’ response over COVID-19 concerns 2020 [cited 2021 June 4]. Available from: https://www.ada.org/en/publications/ada-news/2020-archive/march/ada-develops-guidance-on-dental-emergency-nonemergency-care.

13. Stefanac S. Treatment and Planning in Dentistry. Third Edition ed: Elsevier; 2017.

14. Susini G, Pommel L, Camps J. Accidental ingestion and aspiration of root canal instruments and other dental foreign bodies in a French

population. International Endodontic Journal. 2007;40(8):585-9. doi: https://doi.org/10.1111/j.1365-2591.2007.01249.x.

15. Tuominen R, Eriksson A-L. Patient experiences during waiting time for dental treatment. Acta Odontol Scand. 2012;70(1):21-6.

16. Wilson NA, Whitehead SA, Mjor IA, Wilson NH. Reasons for the placement and replacement of crowns in general dental practice. Prim Dent

Care. 2003;10(2):53-9. Epub 2003/05/10. doi: 10.1308/135576103322500746. PubMed PMID: 12736961.

17. Yip K, Smales R. Oral diagnosis and treatment planning: part 2. Dental caries and assessment of risk. Br Dent J. 2012;213(2):59-66. Epub

2012/07/28. doi: 10.1038/sj.bdj.2012.615. PubMed PMID: 22836414.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

### CAC Coronary Artery Calcium

### CHS Crew Health and Safety

11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 13

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

### LSAH Lifetime Surveillance of Astronaut Health

### LSO Lunar Surface Operations

### MCL Master Condition List

### MEVA Medical Extravehicular Activity

### NASA National Aeronautics and Space Administration

### N/A Not Applicable

### NP Nurse Practitioner

### OBGYN Obstetrics and Gynecology

11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 14

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

11/22/2022 8:41:40 AM ICL30_Dental Filling Loss Cliff page: 15

---

## Source metadata

```yaml
source_filename: "dental-filling-loss-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Dental Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1SA5_AUF1fgAzJQhbxDcr9XkktRo1HLhS/view"
source_drive_id: "1SA5_AUF1fgAzJQhbxDcr9XkktRo1HLhS"
source_sha256: 8a6872ca902794828982fda8b02a9606ee9076cb7fdb2ca71ee2aebaffcf576b
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 15
ocr_performed: false
```
