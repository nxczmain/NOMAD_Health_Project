# Burn Moderate To Severe Thermal CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1fmGn7rtH623VYGKCHKpRA1qkb5a1Koki/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL22_Burn - Moderate To Severe, Thermal Superficial burns occur when thermal stress is applied to skin and induce cell death of the epidermis. Burns can be classified based on the depth of tissue involved and range from superficial to full thickness burn. Burns typically follow a predictable course of healing and can be self limited or life threatening. Complications from burns commonly include infection, chronic pain, and permanent physical disfigurement or functional loss. Any of these complications may have significant impacts on mission objectives and crew safety. Risk of skin and soft tissue infection in flight appears to be much higher than terrestrially which makes any large soft tissue injury concerning. Thermal burn can occur from direct heat from an object or surface, scald from a hot liquid, and/or from open fire. During the Mir program there was a brief fire that resulted from a faulty solid fuel oxygen generator.

One crew member was burned and primarily sustained superficial injury however did have some blistering consistent with a partial thickness burn.

These burns were treated in flight with ointment and gauze and reportedly the crew member recovered without any reported complications.

Substantial work has been done to mitigate the risk of fire and no other significant burn events have been documented in flight. Moderate to severe burns can be extremely dangerous to crew health. The size and depth of a burn is directly correlated with morbidity and mortality. Burns involving greater than 20% of the total body surface area (%TBSA) have an exponential increase in risk of death. The standard of care for a moderate to severe burn requires transfer to a burn center for wound care, surgery, and skin grafting. More severe burns require intensive care including respiratory and blood pressure support. A severe burn in space flight has the potential to be a devastating and life threatening injury to an otherwise healthy crew member. It should be noted that minor skin burn, inhalational injury, chemical skin burn, and chemical eye injury are separate conditions and discussed elsewhere.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Space literature is based on the ISS PRA evaluating the risk of fire. The ISS PRA model calculated total likelihood for a six month time period that at least one crew person is in a module when a crew response-level fire event occurs. The mean was 2.52E-03 events per six months; 5 and 95 percentiles were 4.67E-04 and 6.90E-03 respectively. Therefore, the annual incidence of burns secondary to fire is estimated as 0.00504 events/person years. We then modified this overall risk of fire with the American Burn Association repository data to divide this incidence into minor and moderate/severe burn incidence. The minor thermal skin burn is discussed in another CLIFF. This value is technically the risk that a fire occurs in flight with a crew member within the cabin with the fire. This is a poor surrogate for risk of burn because it is highly likely that a crew member will be able to extinguish a fire without burns. However in the absence of other spaceflight data this was the best incidence we could derive. This is the same approach the IMM took to risk of burn. A newer version of the ISS PRA for fire does not include risk of isolated fire or burn and thus could not be used for incidence. The PRA team for Artemis was consulted and did not have a fire risk calculation available at this time but felt that it was likely less than the ISS due to fewer number of experiments involved in Artemis missions. Touch temperature burns were considered to be extremely unlikely due to automatic shutoff in overheating components and flight rules that limit maintenance until components have cooled for a set time frame.

### ANALOG LITERATURE

No analog literature was used to calculate final incidence as it was inferior to the spaceflight specific literature

### TERRESTRIAL LITERATURE

No terrestrial literature was used to calculate incidence as it was inferior to the spaceflight specific literature

### OVERALL INCIDENCE SUMMARY

6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 1

## INCIDENCE

Mean 4.168E-4 and SD 2.099E-4.

### INCIDENCE SUMMARY

The incidence distribution for moderate to severe burns is Gamma(shape=3.943, rate=9460.255) with mean 4.168E-4 and SD 2.099E-4. This distribution is developed from the combination of a PRA risk estimate with uncertainty and data from the American Burn Association Repository. The ISS PRA prediction for burns secondary to fire incidence rate will be used as the underlying rate of events. For 6-months, the rate is 2.52E-3 (1 year is 0.00504). 90% Confidence limits are 4.67E-4 and 6.90E-3 (1-year 0.000934, 0.0138). Approximating by 4 events and 793.651 person- years, gives an appropriate measure of the rate and confidence limits. We will use this imputed data in the analysis step. IR: 504E-3 (95%CI: 1.601E-4, 12.16E-4). This value is technically the risk that a fire occurs in flight with a crew member within the cabin with the fire. This is a poor surrogate for risk of burn because it is highly likely that a crew member will be able to extinguish a fire without burns. To distinguish Mild from Moderate to Severe, we will supplement with a report from the American Burn Association Repository which noted that in 2016, there were 486,000 ED visits for burns with admission of 40k patients. (https://ameriburn.org/who-we-are/media/burn-incidence-fact-sheet/). The data on ED visits is used to parse the underlying prediction model into the 2 conditions – mild or moderate to severe.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.000416796 SD 0.000209899 Gamma (Shape): 3.943 (Rate): 9460.26 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

PRA ISS Fire Version 3.2.0 2015 Spaceflight 2 In the absence of other data, prior IMM incidence was used as a baseline rate and modified to reflect risk of mild burn and moderate burn which are separate conditions for the updated CLIFF. Given these significant limitations the ISS PRA model received a score of 2. Terrestrial and analog data was not used due to its lack of applicability to flight. 6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

There are no specific screening or prevention measures for minor skin burns as these are spontaneous events that are the result of an engineering failure and independent of crew health. Chronic diseases that substantially impact wound healing or poor nutritional status will be screened from the astronaut population but this is non specific and applies to all conditions that involve wound healing.

### BEST CASE SCENARIO DEFINITION

Partial thickness burns covering less than 20% TBSA, OR full thickness burns covering less than 5% TBSA that meet the following criteria: i) non- circumferential, ii) does not cross a major joint line, iii) is not at risk for permanent impairment of body part function (e.g. extensive burns to hands, face, perinium, genitals).

### WORSE CASE SCENARIO DEFINITION

Partial thickness burns involving greater than 20% TBSA, full thickness burns involving greater than 5% TBSA, or burns that meet any of the following criteria: any circumfrential burn, anything crossing a major joint line, or threatening to impair body part function or full-thickness skin burns.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Mosier, MJ et al. 2017 includes the data from the American Burn Association repository for burns in 2017. Of all fire related burns, 61624/73099 were less than 20% TBSA and 11475/73099 had more than 20% TBSA. The definition of our BC and WC scenarios are more convoluted and have some cross over outside of simple TBSA however this gives an approximate figure to the distribution of moderate and severe burns.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Mosier, MJ et al. 2017 Terrestrial 3 Mosier, MJ et al. 2017 was used as the primary source for BC:WC distribution. This document outlines the American Burn Association data for 2017 on all burns from fire and their associated severity by %TBSA. Our BC and WC definition specifies size and burn depth as characteristics of a burn that make it moderate (BC) or severe (WC). In this sense the ABA data does not exactly represent our BC and WC scenarios but does give us approximate proportions that can be used in this CLIFF with moderate accuracy. The sample size of this study is much larger and inclusive than other literature evaluated. However, large population terrestrial studies may not accurately represent the space flight environment thus this paper was assigned a 3. 6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Mean 4.168E-4 84 - 84 100 2.58 29.046 504 1440 0 0 10 0 5.9 Case (TBC) and SD 2.099E- 4. Treated Worst 16 - 16 100 2 55.0093 1440 8760 10.0186 100 100 12.8 32.3 Case (TWC) Untreated Best N/A N/A N/A 2.58 63.274 600 2400 60.1648 0 25 0 12.8 Case (UTBC) Untreated N/A N/A N/A 2 100 1440 17520 100 100 100 25 50

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The general approach to moderate to severe thermal burn is topical ointment and wound care. In terrestrial settings, burn excision and skin grafting plays a large role in healing and prevention of complications. Severe burns often require intensive care for continuous pain control, respiratory support, or blood pressure support. These more advanced treatment options may be limited or impossible in flight and thus many require RTDC or have a substantial risk of morbidity and mortality. Even with the highest level of care, burns >40% TBSA have a 30% mortality and at 70% TBSA there is a 50:50 chance of survival (LD50).

TREATED BEST CASE (TBC) SCENARIO COMMENTS The best case scenario is defined as partial thickness burns covering less than 20% TBSA, OR full thickness burns covering less than 5% TBSA that meet the following criteria: i) non-circumferential, ii) does not cross a major joint line, iii) is not at risk for permanent impairment of body part function (e.g. extensive burns to hands, face, perinium, genitals). The duration of illness ranged from 21 to 60 days. Kagan, RJ et al. 2013 is a review from the American Burn Association that notes that a partial thickness burn will often heal by 3 weeks based on expert opinion/experience which was chosen as the minimum duration as the definition includes full thickness burns as well. The maximum duration was based on Saavedra, PAE et al. 2020 which is a systematic review of 19 studies that evaluated health care costs from burn admission. This study included mortality rate and hospital length of stay based on %TBSA burn. Among papers evaluating burn admissions with TBSA<20%, average length of stay ranged from 20-30 days. When accounting for time spent in wound clinic as an OP, total duration was approximated to be 60d until resolution. The RTDC surrogate was based on the WMS guidelines for medical evacuation which also influenced the BC scenario definition in this condition. By definition the BC scenario does not meet the WMS criteria for evacuation except in rare circumstances including partial thickness burns involving sensitive tissue. Thus in the treated condition the need for RTDC was between 0-25% based on expert opinion. LOCL ranges from 0-5.9% based on Saavedra, PAE et al. 2020 which compares mortality rates for burns <20%TBSA as noted above. Mosier, et al. 2017 has a mortality rate of approximately 1% based on American Burn Association data of burns <20% TBSA which is consistent with the range provided TREATED WORST CASE SCENARIO (TWC) COMMENTS The worst case scenario is defined as partial thickness burns involving greater than 20% TBSA, full thickness burns involving greater than 5% TBSA, or burns that meet any of the following criteria: any circumferential burn, anything crossing a major joint line, or threatening to impair body part function or full-thickness skin burns. The duration of this condition ranged from 60d to 1y based on Saavedra, PAE et al. 2020 which noted the average hospital LOS for >20% TBSA burn was 30d +/-30d and ranged up to 340 days. Hospital LOS likely underestimates true time to condition resolution so 60d was chosen as the minimum duration. Kagan, RJ et al. 2013 was a review from the American Burn Association and noted that a full thickness burn can take up to 1y to heal. This was consistent with the review from Saavedra, PAE et al. 2020 and was chosen as the duration maximum to represent a typical very severe burn disease course. The RTDC surrogate was based on the WMS society guidelines as was the WC scenario. By definition the WC scenario would have a 100% RTDC. LOCL was based on Saavedra, PAE et al. 2020 which noted a mortality range between 12.8% and 32.3% for burns >20% TBSA. They also noted several papers with mortality rates that fell within this range which further supports this data. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The BC scenario definition is a partial thickness burns covering less than 20% TBSA, OR full thickness burns covering less than 5% TBSA that meet the following criteria: i) non-circumferential, ii) does not cross a major joint line, iii) is not at risk for permanent impairment of body part function (e.g. extensive burns to hands, face, perinium, genitals). The duration chosen for this condition was based on Kagan, RJ et al. 2013 which notes that a partial thickness will typically heal by 3 weeks when treated. LOS for Saavedra, PAE et al. 2020 ranged from 10-15 days which is consistent with this range as it excludes OP treatment. Healing would be anticipated to be slightly delayed without treatment, particularly in a partial thickness burn that is small, and thus 25 days was chosen as a minimum in the BC scenario. The maximum duration was base on Saavedra, PAE et al. 2020 as well which noted the longest duration for cohorts that averaged less than 20% burn was approximately 100d of hospital LOS. This includes burns more severe than the definition for the BC scenario however it also includes aggressive burn and wound care. The RTDC surrogate is based on the WMS guidelines for medical evacuation after burn which is also what the BC definition is based on. However, burns also can worsen in severity within the first 72 hours, particularly when untreated, and thus many burns that start as BC scenario may meet the RTDC surrogate within the first few days when untreated. Similar to the TBC definition there are some specific burns that meet RTDC as well and thus 25% was chosen as the maximum risk of RTDC. LOCL was based on Saavedra, PAE et al. 2020 which noted mortality rates for burns <20% TBSA ranged from 0-5.9%.

However, this included high level of care including burn ICU admission and excision/grafting. One study that averaged 20% TBSA burns had a mortality rate of 12.8% and thus this was chosen as the maximum to represent an untreated cohort with a moderately severe burn in the absence of other data. UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The worst case definition is a partial thickness burns involving greater than 20% TBSA, full thickness burns involving greater than 5% TBSA, or burns that meet any of the following criteria: any circumferential burn, anything crossing a major joint line, or threatening to impair body part function or full-thickness skin burns. The duration of this untreated WC condition was 60d to 2y. This was based primarily on Saavedra, PAE et al. 2020 which noted a duration of 30d +/-30d average hospital LOS for burns >20% TBSA. This does not include OP treatment and thus 60d was chosen as the minimum duration. The longest duration reported was approximately a year of hospitalization which again does not include outpatient 6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 5

treatments. Kagan, RJ et al. 2013 noted that the most severe burns can take up to 2 years of treatment to reach a steady state. Severe burns often are complicated by infection, functional loss/disfigurement, and PTSD. Considering all of these ongoing treatments, 2 years was determined to be an appropriate maximum duration of the condition when untreated. The RTDC surrogate was based on the WMS guidelines for medical evacuation in burns as was the WC scenario thus the rate of RTDC was 100% by definition. LOCL was based on Saavedra, et al. 2020 which noted a range of 12.8-32.3% mortality among cohorts that averaged>20% TBSA. Mosier, MJ et al. 2017 similarly noted that the national burn repository had a mortality rate of 24% in 2017 for burns >20% TBSA. These cohorts both included patients with moderate burns as well as care in a burn center ICU with surgical treatment, antibiotics, and daily aggressive wound care. There is no data on burns of this severity and outcomes when left untreated due to the obvious ethical considerations thus a range of 25-50% was chosen by extrapolating from the aforementioned data. This may over or underestimate true mortality rate in this cohort.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------------ | ----------- | --------- | --- |
| Saavedra PAE et al. 2020 | Terrestrial |  |  |

2

| Kagan, RJ et al. 2013 | Terrestrial |  |  |
| --------------------- | ----------- | --- | --- |

Saavedra, PAE et al. 2020 reviewed 19 studies that evaluated the cost, LOS, and mortality of burn hospitalizations. This study provided hospital LOS based on %TBSA burn however the BC and WC definitions did not strictly follow %TBSA and thus cohorts reported may not accurately represent the BC and WC definitions. Kagan, RJ et al. 2013 is a review by the American Burn Association and provides general recovery times based on burn severity. TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------ | ----------- | --------- | --- |
| Quinn, et al. 2014 | Terrestrial |  |  |

2

| Expert Opinion | Terrestrial |  |  |
| -------------- | ----------- | --- | --- |

Quinn, et al. 2014 is the Wilderness Medical Society guidelines on wounds and burns. They outline criteria of a burn that requires medical evacuation to a hospital. This is very similar to that of the American Burn Association criteria that define which burns require transport to a burn center. The definitions of the BC and WC scenario are very similar to the WMS criteria with slight differences. Expert opinion was used to determine the RTDC per condition with the WMS criteria in mind. This extrapolation of data may be provider specific and thus may not be accurate to management in spaceflight TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------------ | ----------- | --------- | --- |
| Saavedra PAE et al. 2020 | Terrestrial |  |  |
| Mosier, MJ et al. 2017 | Terrestrial |  | 2 |
| Expert Opinion | Terrestrial |  |  |

Saavedra, PAE et al. 2020 reviewed 19 studies that evaluated the cost, LOS, and mortality of burn hospitalizations. Mosier, MJ et al. 2017 was a report on burns and outcomes in America by the American Burn Association for 2017. This data and expert opinion were combined to provide appropriate ranges of estimated mortality/LOCL of crew members with moderate to severe burns given the limitations of spaceflight and treated versus untreated conditions CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

- Worst Case Definition: Partial thickness burns involving greater than 20% TBSA, full thickness burns involving greater than 5% TBSA, or burns that

meet any of the following criteria: any circumferential burn, anything crossing a major joint line, or threatening to impair body part function or full- thickness skin burns. 6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 6

- Best Case Definition: Partial thickness burns covering less than 20% TBSA,

OR full thickness burns covering less than 5% TBSA that meet the following criteria: i) non-circumferential, ii) does not cross a major joint line, iii) is not at risk for permanent impairment of body part function (e.g. extensive burns to hands, face, perineum, genitals).

Severe Thermal burns associated medical response is to address the pain and discomfort associated with the condition and with antibiotic therapy and dressings to mitigation infection risk. Generally this condition is a major risk for long term infection and may represent a medical emergency.

The CRT condition focuses solely on the physical exam in the best case and the prevention of infection and pain management in the worst case.

### Diagnostic Scope and Resourcing

In the best-case scenario, diagnosis is based on history and physical examination.

In the worst-case scenario, diagnosis is based on history and physical examination.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 2.58 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Remove impacted clothing for assessment 3 - Perform a physical on the patient 4 - Take Vital signs 5 - Assess patient with proper laboratory tests CP1 WC (Treated or Untreated): 2.0 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Remove impacted clothing for assessment 3 - Perform a physical on the patient 4 - Take Vital signs 5 - Assess patient with proper laboratory tests The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a four: this is an experienced generalist (level 5).

### Treatment Scope and Resourcing

In the best-case scenario, treatment is limited to dressing application, fluid resuscitation, pain management, and monitoring. Peptic ulcer prophylaxis is also considered. The worst case scenario also allocates for irrigation, dressing application and antibiotic prophylaxis. 1 - In Worst Case: Did not include any grafting or alternatives as storage vs incidence seemed low value 2 - In Worst Case: Did not include any resources for skin stretching as these are typically either fairly large or specific for the application and makeshift items could be created for a similar purpose and efficacy 3 - In Best Case: We did include moisturizers despite the definition being "without treatment." But the thought was that we would make necessity 0 so that the patient may use it to mitigate long term discomfort but it would not be necessary to treat the condition 4 - For resources, we assumed 30% burn TBSA for resource management for CP2 duration because all of our age ranges will have a high probability of survival or RTDC will occur.

### Communications and Support Needs

In the best and worst-case scenarios, diagnosis and course of treatment can be complicated by concern for infection and the severity of the burn (circumferential, etc.). It is therefore desirable to have as much communication as possible during the duration of diagnosis and initial treatment.

## REFERENCES

### IMM CLIFF RECONCILATION COMMENTS

The IMM CLIFF "Burns Secondary to Fire" is the most similar CLIFF to this one. The incidence of burn for this version of this condition is based on the same ISS PRA document used in the prior version due to uncertainties about lunar ship and habitat designs at this point in time. This condition only includes minor/superficial burn and more severe burns are included in another condition/CLIFF and incidence is thus stratified by epidemiological data while the previous CLIFF included all types of skin burns from fire. The previous best case scenario was first or second degree burns covering less than 9% TBSA. The worst case scenario was second degree burns greater than 9% TBSA or any 3rd degree burn. Rating burns by degree is outdate nomenclature and less accurate than the superficial to full thickness classification used now. Several studies on analog and terrestrial populations in the prior IMM version were included as alternative incidence data in this CLIFF

### LIMITATIONS SUMMARY

- The ranges of the burns are not consistent with epidemiological data on burns which is typically limited to cohorts based on burn size •Small burns

6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 7

to sensitive areas are likely to have an impact on crew function and QOL metrics but may not impact LOCL directly. It is difficult to represent these patients with the definitions provided • The best case scenario includes moderate size partial thickness burns which also meet criteria for the worst case scenario in ICL 21 mild to moderate burns. The incidence of each condition was calculated together to limit double representation of thermal skin burns however this overlap between conditions may impact the way it is modeled •There have been several fires in spaceflight particularly during the Mir program however extensive engineering risk mitigation has been performed to reduce this risk •Incidence of burn in this CLIFF is based on ISS probable risk assessment data that approximates the risk of fire within an ISS module and the risk that a crew member is present during a fire. There is no current PRA for Artemis missions and it is anticipated that due to the fewer number of experiment on board the risk of fire will be much less than that on ISS. Risk of fire and risk that a crew member is present is a surrogate for skin burn and likely significantly overestimates true risk of burn •Cause of death in burns is due to many complications including infections, hypermetabolic syndrome, respiratory failure, etc.… In other conditions, complications are left out of duration calculations however in this condition the complications are central to the disease process and thus were included as factors that impact duration and LOCL •LOCL in a large severe burn without any treatment including even local wound care is impossible to know. It is likely very high given the risk of complication, particularly in the spaceflight environment given the physiologic stressors. 100% was chosen as a WC maximum •RTDC and LOCL is likely to vary based on burn location and thus ranges for each are broad 6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 |  |  |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 223 | 664 |  | 89 |  |  | 145 |  |  |  |  |  |
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

| Best | 132 | 564 | 414 | 22 |  |  | 34 | 211 | 2186 | 3763 | 0.580919 | 58.0919 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 | 564 | 414 | 22 |  |  | 34 | 211 | 2498 | 3763 | 0.663832 | 66.3832 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

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

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  | 223 | 664 |  |  |  |  |  |  |  |  |  |  |
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

6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 9

Total Human

|  |  | Translation & |  | Total Tasks |  |
| --- | --- | ------------- | --- | ----------- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) |  | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | --- | ---------------------- | ------------- | -------------------- | --- |
|  |  | (microgravity) |  | Condition Tasks Full |  |

Mission Treated Best

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

| 132 564 | 414 | 22 | 34 211 | 2264 3763 | 0.601648 60.1648 |
| ------- | --- | --- | ------ | --------- | ---------------- |

Case (UTBC) Treated Worst

| 132 |  |  | 34 211 | 377 3763 | 0.100186 10.0186 |
| --- | --- | --- | ------ | -------- | ---------------- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 10

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

6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 11

## REFERENCES

Reference ISS PRA Model v.3.2.0. Fire and Ammonia Model Contributions to the Integrated Medical Model. 2015 Sep 25.

Greenhalgh, D. G. (2019). "Management of Burns." N Engl J Med 380(24): 2349-2359.

Grunwald, T. B. and W. L. Garner (2008). "Acute burns." Plast Reconstr Surg 121(5): 311e-319e.

Hashmi, M. and R. Kamal (2013). "Management of patients in a dedicated burns intensive care unit (BICU) in a developing country." Burns 39(3): 493-500. Iqbal, T., et al. (2013). "Epidemiology and outcome of burns: early experience at the country's first national burns centre." Burns 39(2): 358-362.

Jeschke, M. G., et al. (2015). "Morbidity and survival probability in burn patients in modern burn care." Crit Care Med 43(4): 808-815.

Kagan, R. J., et al. (2013). "Surgical management of the burn wound and use of skin substitutes: an expert panel white paper." J Burn Care Res 34(2): e60-79. Kauvar, D. S., et al. (2009). "Burn hazards of the deployed environment in wartime: epidemiology of noncombat burns from ongoing United States military operations." J Am Coll Surg 209(4): 453-460.

Mosier, M. J., et al. (2017). National Burn Repository 2017 Report. American Burn Association.

Muller, M., et al. (2016). "Aetiology of adult burns treated from 2000 to 2012 in a Swiss University Hospital." Burns 42(4): 919-925.

Saavedra, PAE et al. (2020). "The Costs of Burn Victim Hospital Care around the World: A Systematic Review." Quinn, R. H., et al. (2014). "Wilderness Medical Society practice guidelines for basic wound management in the austere environment: 2014 update." Wilderness Environ Med 25(4 Suppl): S118-133.

Rotondo MF, C. C., Smith RS, Williams C (2014). "Resources for Optimal Care of the Injured Patient." American College of Surgeons Committee on Trauma. Seo, D. K., et al. (2015). "Epidemiological trends and risk factors in major burns patients in South Korea: a 10-year experience." Burns 41(1): 181-187.

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

### CMO Crew Medical Officer

### COMFORT Clinical Outcome Metrics for Optimization of Robust Training

CP1 Clinical Phase 1 CP2 Clinical Phase 2 CP3 Clinical Phase 3

### CRL Clinical Resource Level

6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 12

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

### PDQ Pain Disability Questionnaire

### PFCL Proposed Future Conditions List

### PPE Personal Protective Equipment

### PTRS Project Technical Requirements Specification

### PRL Pharmaceutical Resource Level

### QTL Quality Time Lost

6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 13

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

6/15/2023 1:38:57 PM ICL22_Burn - Moderate To Severe, Thermal Cliff page: 14

---

## Source metadata

```yaml
source_filename: "burn-moderate-to-severe-thermal-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1fmGn7rtH623VYGKCHKpRA1qkb5a1Koki/view"
source_drive_id: "1fmGn7rtH623VYGKCHKpRA1qkb5a1Koki"
source_sha256: 1534bc724547829597a06d42aad46307e86faa520554e2443a54e11192e7bcc3
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
