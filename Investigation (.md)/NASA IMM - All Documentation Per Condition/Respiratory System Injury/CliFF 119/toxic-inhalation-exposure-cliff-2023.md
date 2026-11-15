# Toxic Inhalation Exposure CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1fLAXu_NfrHRKdHd3nk_670w_yEd0bsFY/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Respiratory System Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

### ICL110_Toxic Inhalation Exposure

The vehicles used in spaceflight use an extensive variety of chemical compounds for propulsion, operation, and life support systems. These compounds often have unique properties that make them invaluable for their specific engineering function. However, they often are also potentially hazardous to crew members aboard these vehicles and may result in a toxic chemical exposure. This CLIFF focuses on chemical irritants that injure the bronchopulmonary system and excludes inhalation of combustion products and chemical skin burns as well as respiratory failure, as these are covered in other CLIFFS. Instead the focus is on chemical pneumonitis resulting in mild pulmonary injury. Inhalational injury is dependent on duration of the exposure, concentration of the offending agent, and its unique chemical properties.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

The prior IMM CLIFF focused only on ammonia leak incidence. The mean was 8.22E-05, and 5th-95th percentiles were 1.52E-05 and 2.26E-04 respectively ({ISS PRA Model v.3.2.0, 2015)}. Therefore, the IMM annual incidence of toxic exposure: ammonia was estimated to be 0.000164 events/person years (0.0000822 * 2 to convert from 6 months to 1 year)." However, this rate was small compared to the several recorded ammonia leak events between 2000 and 2015. It also looked only at ammonia exposure while the updated version of this CLIFF includes all toxic inhalational exposures (other than those secondary to combustion events, see other CLIFF. Thus this prior incidence rate likely significantly underestimated the risk of inahalational exposure for this CLIFF. Over several decades of spaceflight there have been an estimated 32 toxic events onboard various spacecraft over 17 years. (James, 2011) The vast plurality (15) of these events were mild with less than 1 day of exposure and little to no adverse health effects. (James, 2011) Ignoring those milder events and all toxic events involving carbon dioxide, dust, bioaerosols, propellants and/or combustibles (such as carbon monoxide, cyanides, nitrogen dioxide, sulfur dioxide, hydrazine, hydrocarbons), there have only been 6 significant inhalation exposures documented; those 6 events primarily involved ammonia, formaldehyde, ethylene glycol, microbial odor causing chemicals, and an unknown compound released by velcro offgassing. (James, 2019), (James, 2011), (James 1998), (Schwartz, 2006), (Jones, 2011) No more thorough incidence data was found for any of these exposures. These events were chosen based on likelihood of recurrence or as representation of future unknown leaks that are anticipated to occur, particulary with increasing private commercial entity involvement. Other non-combustible toxins that carry mininal acute risk but increased long term carcinogenic risk include acetaldehyde, benzene, 1,2-dichloroethane, furan and isopren, and although these do not affect the parameters evaluated in this CLiF should be considered for the LSAH . (NASA Tech Brief 2022)

### ANALOG LITERATURE

No analog incidence data was used in this condition.

### TERRESTRIAL LITERATURE

Available terrestrial data on acute non-combustible chemical inhalation are limited, since events are rare and data collection tends to be brief without the requisite granularity to calculate incidence. Additionally, these events are often confounded by explosions, dermal insult, and/or multi- toxin subjection. (White 2007), (Makarovsky, 2008) That being said, there are a few documented terrestrial case studies that were considered to estimate spaceflight risk. Hospital surveillance data abstracted from emergency departments by the Consumer Product Safety Commission (CPSC) as part of the National Electronic Injury Surveillance System (NEISS) estimates an incidence of 3.6 cases/10^4 workers/year from 1995-1996. (Henneberger, 2000) However, this rate must be adjusted to exclude combustible toxins. This was achieved by multiplying the incidence by the percent of inhalational injuries secondary to the relevant noncombustible agents giving an adjusted estimate of 1.97 cases/10^4 workers/year from 1995-1996.The Agency for Toxic Substances and Disease Registry’s Hazardous Substances Emergency Events Surveillance (HSEES) system's 2012 report, broke down 82 different ammonia releases from 1993 to 1997, with 10 (12.1%) involving 39 victims. There were 33 events that required evacuation (40.2%) and 31 victims had respiratory injuries (79.4%). (NC Department of Health and Human Service, 2012) Detailed clinical reports of these events were not available. Several other studies composed of terrestrial literature were evaluated but excluded due to their lack of applicability to this condition. 6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 1

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

Mean 0.3543 events per year and SD 0.1468.

### INCIDENCE SUMMARY

The incidence rate distribution for Toxic Exposure Events is Gamma(shape=5.825, rate=16.441) with mean 0.3543 and SD 0.1468. The probability that the crew develops Toxic inhalation given the exposure is 1 (everyone onboard is affected). Incidence is thus not reported in person years as with other conditions but instead as events per year.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Fixed Mean 0.354297 SD 0.146798

### Fixed Incidence

(Rate): (Prop.): 1

### Incidence Details

### Incidence Type

Environmental Segment All Env. Exposure

### Toxic Gas

Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson 6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 2

Incidence Dist. Gamma Mean 0.354297 SD 0.146798

Gamma (Shape): 5.825 (Rate): 16.441 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| --------------------------- | ----------- | --------- |
| Henneberger, PK et al. 2000 | Terrestrial | 1 |
| Barratt, MR et al. 2020 | Spaceflight | 1 |
| James, JT 2011 | Spaceflight | 2 |
| James, JT 1998 | Spaceflight | 1 |

The level of confidence is low given incidence data on toxic inhalation injury are limited in spaceflight, analog, and terrestrial environments. Several sources mentioned multiple mild to moderate non-combustible toxic events in spaceflight (James, 2019; James, 2011; James 1998). While these anecdotes are incredibly representative of the Exploration Spaceflight context, they were not reported with the necessary granularity and lacked some clinical information. Still, information obtained from the astronaut population and/or space flight was the more relevant so it was assigned the highest level of confidence and less representative data sources were assigned a lower level of confidence. These studies are retrospective/historical and represent engineering failures in now outdated vehicles and life support systems and may not accurately represent the risk of toxic exposure in next generation designs. 6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

There are no preflight preventative screening measures for this condition as this is an off nominal process that is the result of engineering failure.

However, inflight there is environmental monitoring of air quality to assess for impurities that may be the result of a chemical leak or build up. These systems are designed to identify toxic substances before reaching dangerous concentrations to allow the crew to protect themselves and intervene on the source of the exposure.

### BEST CASE SCENARIO DEFINITION

An exposure to an inhaled toxin with symptoms that are mild and self-limited. (Note combustion products are covered by a separate condition).

### WORSE CASE SCENARIO DEFINITION

An exposure to an inhaled toxin that requires treatment but does not result in ARDS/Respiratory Failure (see "Respiratory Failure".  (Note combustion products are covered by condition "COMBUSTION PRODUCT INHALATION EXPOSURE").

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Toxic Inhalation Exposure - Can be applied to any substance in theory

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The best case definition is an exposure to an inhaled toxin with symptoms that are mild and self-limited, while the worst case scenario was an exposure to an inhaled toxin that requires symptomatic treatment but does not result i ARDS/Respiratory Failure. Both the BC and WC conditions are relatively mild in severity and the vast majority of toxic exposures in flight are anticipated to be consistent with the BC scenario, requiring limited to no medical intervention. Incidence data was derived from historical spaceflight data with removal of conditions that were not relevant to this CLIFF. Of these events, 1/6 of them resulted in pulmonary edema and hospitalization of the crew with medical interventions. No other events of toxic inhalation required treatment and thus this proportion was used. The other reviewed terrestrial studies of toxic inhalation have a hospitalization rate of between 5-20% which is consistent with spaceflight data albeit less relevant to our condition probability.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| -------------------------------- | ----------- | --------- |
| Makarovsky, I et al. 2008 | Terrestrial | 1 |
| Leung, CM and Foo, CL 2004 | Terrestrial | 1 |
| White, CE et al. 2007 | Terrestrial | 1 |
| Rispens, JR et al. 2020 | Terrestrial | 1 |
| Kim, JA et al. 2014 | Terrestrial | 1 |
| Van Sickle, D et al. 2009 | Terrestrial | 1 |
| Henneberger, PK et al. 2000 | Terrestrial | 1 |
| Wenck, MA et al. 2007 | Terrestrial | 1 |
| Sexton, JD and Pronchik, DJ 1998 | Terrestrial | 1 |
| James, JT 2009 | Spaceflight | 2 |

The level of confidence is relatively low due to the limited number of events in flight and only one isolated event requiring treatment. As previously discussed, without detailed toxicological and engineering data it was difficult to know which chemicals were more or less likely to be encountered within the DRM. Terrestrial data was primarily based on single toxic events or population studies and thus less relevant than the historical spaceflight data which was used to calculate incidence. 6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

Condition Case Scenario Composite Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Mean 0.3543 events 83 - 83 100 1.2 15.3069 0.5 24 0 0 0 0 0 Case (TBC) per year and SD 0.1468. Treated Worst 17 - 17 100 1.2 37.5365 24 168 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 1.2 17.991 0.5 24 0 0 0 0 0 Case (UTBC) Untreated N/A N/A N/A 1.2 75.0731 48 336 75.0731 0 50 0 0

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

Toxic inhalational injury results in airway inflammation and bronchospasm which causes chest pain, shortness of breath and cough. These symptoms are often treated with steroids and inhaled bronchodilators as well as supplemental oxygen as needed, whether for symptoms or hypoxia.

There are also a number of inhaled chemicals that induce systemic toxicity and injury however these are excluded from this condition to narrow the scope to direct irritational injury only. The RTDC surrogate in this condition is hospitalization however will likely be effectively managed in flight for the vast majority of cases so long as they do not progress to respiratory failure.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The BC scenario is defined as an exposure to an inhaled toxin with symptoms that are mild and self-limited. A brief exposure to a noxious chemical would be assumed to be self limited upon removal of the crew member from the source. Mild symptoms of cough were determined to last 30 minutes as a minimum duration per expert opinion and the ISS medical operations checklist that recommends re-evaluation of all crew members within 15 minutes to an hour. Maximum duration was based on several studies that recommend a period of observation after chemical pneumonitis for 12-48 hours depending on severity of symptoms. Given the mild and self limited features of the best case scenario 24 hours was chosen as the duration of symptom maximum. The RTDC and LOCL for this condition was determined to be 0% given the minor severity of symptoms.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The WC scenario is defined as an exposure to an inhaled toxin that requires symptomatic treatment but does not result in ARDS/Respiratory Failure. Many studies evaluated the hospital LOS for patients suffering from respiratory failure after toxic inhalational injury, however this condition is specific to patients with persistent respiratory complaints but who are nomoxic. Duration of symptoms is concentration, duration of exposure, and chemical specific. Terrestrial literature shows that average duration of symptoms after chlorine, ammonia, and other irritants is from 1-7 days. This is also consistent with the Apollo-Soyuz astronauts exposed to nitrogen tetroxide and required hospital admission for 6 days for steroids and monitoring. This excludes patients who go on to develop chronic pulmonary pathology as this was considered outside of the scope of this condition.

The RTDC and LOCL for this condition was determined to be 0 in the absence of respiratory failure. There are some chemicals that can cause systemic toxicity and hospitalization or even death but these were excluded from this calculation given the bounds of the definitions of this condition.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The BC definition is defined as an exposure to an inhaled toxin with symptoms that are mild and self-limited. The duration in the untreated BC scenario was considered to range from 30 minutes to 24 hours given the definition that this condition is self limited. The RTDC and LOCL were also assumed to be 0% based on expert opinion and the defintion for the BC scenario.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The definition for the worst case scenario is an exposure to an inhaled toxin that requires symptomatic treatment but does not result in ARDS/Respiratory Failure. In the untreated WC scenario the duration was determined to be 48 hours to 14 days. Literature on the untreated chemical pneumonitis was limited. Patients often recieved inhalers steroids, and symptomatic oxygen therapy which are excluded in this scenario.

The vast majority of literature also centered around patients with respiratory failure requiring supplemental oxygen or intubation, but these patients are not relevant to this condition. The majority of patients with minor symptoms requiring hospitalization had a LOS of approximately 7-10 days and this is what we would expect to be the predominant case scenario in our astronaut population. The minimum and maximum durations were lengthened to account for the untreated condition. RTDC was similarly hard to predict given this narrow cohort. It was assumed that the treated condition could be managed effectively in flight and thus had a likelihood of RTDC of 0%. Without treatment, however, it is more likely that a crew member will have a more severe and prolonged inflammatory response that may progress to worsening disease. As such a range of 0-50% was chosen for RTDC based on expert opinion. The LOCL, however, was considered to still be 0% given the lack of respiratory failure as discussed in the TWC scenario. TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Tuong, AH et al. 2019 Terrestrial 6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 6

| Citation |  | Source | LOC Value |
| -------------------------- | --- | ----------- | --------- |
| Steverlynck, L et al. 2017 |  | Terrestrial |  |
| Kim, JA et al. 2014 |  | Terrestrial |  |

3

| Cevik, Y et al. 2009 |  | Terrestrial |  |
| -------------------------------- | --- | ----------- | --- |
| Nicogossian, AE et al. 1977 |  | Spaceflight |  |
| Sexton, JD and Pronchik, DJ 1998 |  | Terrestrial |  |
| Leung, CM and Foo, CL 2004 |  | Terrestrial |  |

The estimated durations for all scenarios were somewhat confident since many different terrestrial datasets were incorporated and no evidence was found to suggest that toxic inhalation pathology in space should diverge from the same observed on Earth. Given the mild severity of this condition in the BC and WC scenario the duration values were conservative ranges of prolonged symptomatology.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| -------------- | ----------- | --------- | --- |
| Expert Opinion | Terrestrial |  | 2 |

RTDC was entirely determined by clinical expertise within the confines of the BC and WC definition as well as the RTDC surrogate of hospitalization.

In spaceflight it is assumed that the crew is able to provide the basic level of care required to manage uncomplicated pneumonitis from chemical exposure. Only in the untreated worst case scenario was there a need for hospitalization and this value was estimated which resulted in a neutral confidence rating in the absence of other relevant literature.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| -------------- | ----------- | --------- | --- |
| Expert Opinion | Terrestrial |  | 3 |

LOCL estimates were based on the definitions provided and expert clinical opinion. This condition was specific to a mild chemical pneumonitis and was independent of both "Inhalation of combustion products" and "Respiratory Failure", which are represented in other conditions. It is acknowledged that an event resulting in toxic inhalational injury may be complicated by inhalation of combustion products such as CO or CO2, or progress to respiratory failure and as such these other conditions were excluded from LOCL calculations.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

- Capabilities and Resourcing Scope Overview Worst Case Definition: An exposure to an inhaled toxin that requires treatment but does not result in

ARDS/Respiratory Failure (see "Respiratory Failure"). (Note combustion products are covered by condition "COMBUSTION PRODUCT INHALATION EXPOSURE"). Best Case Definition: An exposure to an inhaled toxin with symptoms that are self-limited or respond to symptomatic treatment. (Note combustion products are covered by a separate condition). Inhalation exposure associated medical response is to maintenance airway primarily and to provide bronchodilator therapy. This condition very likely could represent a medical emergency. Diagnostic Scope and Resourcing In the best-case scenario, diagnosis is based on history and physical examination. In the worst-case scenario, diagnosis is based on history and physical examination. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1.2 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient (Cardiopulmonary) 3 - Lung ultrasound CP1 WC (Treated or Untreated): 1.2 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient (Cardiopulmonary) 3 - Lung ultrasound The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a four: this is an intern level. Treatment Scope and Resourcing In the best-case scenario, treatment is airway management focused and include monitoring (capnography) in case an escalation of conditions is necessary. The worst case scenario is the same. 1 - Did not include positive pressure or invasive ventilation as this will be covered in the Respiratory Failure (ICL - 080) condition. 2 - Capnography is likely to lead to Respiratory Failure, so its use will help determine whether next condition is occurring. 3 - Antidotes are limited to cyanide, CO, Communications and Support Needs In the best-case scenario, diagnosis and course of treatment is uncomplicated and likely within the scope of care of onboard crew members. In the worst-case condition, ground communications will be helpful given the complicated nature of the condition and the scope of care onboard. REFERENCES 6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 7

### IMM CLIFF RECONCILATION COMMENTS

There is not a specific IMM CLIFF for toxic inhalational exposure. However, there was a prior CLIFF specific to ammonia exposure. This colorless, flammable, pungent gas has been used in prior vehicle design as part of the cooling system. Exposure can result in skin and bronchopulmonary irritation to severe airway burns, pulmonary edema, and death with severity of symptoms related to the duration and concentration of exposure.

This is one of many chemicals on the station that can result in an inhalational injury and the updated version here includes all types of chemical exposures (excluding Inhaled Combustion Products). Incidence was calculated based on a PRA for the ISS that specifically evaluated risk of ammonia leak. Duration, RTDC, and LOCL are all calculated however they are specific to ammonia leak alone and thus less relevant for our updated CLIFF

### LIMITATIONS SUMMARY

- Current vehicle and habitat designs are still being finalized and tested. The risk of toxic inhalational exposure is directly related to what noxious

chemical compounds. Without this information the accuracy of this CLIFF is extremely limited with regards to all calculated values (incidence, duration, RTDC, LOCL). •This CLIFF relies heavily on historical data of prior toxic chemical leaks or exposures. Each of these events underwent extensive and thorough evaluation to prevent future exposures and decrease the incidence in next generation vehicles. This theoretically should reduce the incidence of events within our DRM, however without other data, incidence was dependent on historical data which will likely overestimate the risk of this condition. •The severity of this condition is very mild for both the BC and WC scenarios and excludes patients suffering from respiratory failure which is a separate condition. Thus, all inhalational events with the capacity to cause symptoms were included in this condition which increases the calculated incidence. •The best-case scenario for the condition “Respiratory Failure” includes minor respiratory support such as low flow oxygen. In the worst-case scenario for this condition we include symptomatic treatment which may include oxygen for comfort if available. It is assumed that this condition does not include hypoxia requiring support or else change to the respiratory support condition. 6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 8

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

| Best |  | 664 | 113 | 89 |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 223 | 664 | 113 | 89 |  |  | 145 | 5 | 13 |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 |  |  | 145 | 5 | 13 |  |  |  |
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

| Best | 132 |  |  |  |  |  |  | 211 | 1152 | 3763 | 0.306139 | 30.6139 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  |  | 211 | 1354 | 3763 | 0.359819 | 35.9819 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 | 564 | 414 | 22 | 196 |  | 34 | 211 | 2825 | 3763 | 0.750731 | 75.0731 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 | 22 | 196 |  | 34 | 211 | 2825 | 3763 | 0.750731 | 75.0731 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

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

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 |  |  | 145 | 5 | 13 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 9

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

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 | 34 211 | 2825 3763 | 0.750731 75.0731 |
| ------- | --- | ------ | ------ | --------- | ---------------- |

Case (UTWC) 6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 10

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

6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 11

## REFERENCES

Reference Barratt, M. R., et al. (2020). Principles of Clinical Medicine for Space Flight. New York Bruckner, R. J. and R. A. M. II (2014). ISS Ammonia Pump Failure, Recovery, and Lesson Learned – A Hydrodynamic Bearing Perspective. 42nd Aerospace Mechanisms Symposium. NASA Goddard Flight Center.

Cevik, Y., et al. (2009). "Mass casualties from acute inhalation of chlorine gas." South Med J 102(12): 1209-1213.

Chen, T.-M. B., et al. (2013). "Toxic Inhalational Exposures." Journal of Intensive Care Medicine.

Henneberger, P. K., et al. (2000). "Nonfatal work-related inhalations: surveillance data from hospital emergency departments, 1995-1996." Am J Ind Med 38(2): 140-148. James, J. T. (2011). "A History of Space Toxicology Mishaps: Lessons Learned and Risk Management." SAE Journal of Aerospace Engineering.

James, J. T. and S. M. Zalesak (2012). "Prediction of crew health effects from air samples taken aboard the International Space Station." Aviat Space Environ Med 83(8): 795-799. Khan-Mayberry, N., et al. (2011). "Space toxicology: protecting human health during space operations." Int J Toxicol 30(1): 3-18.

Kim, J.-A., et al. (2014). "Acute health effects of accidental chlorine gas exposure." Annals of Occupational and Environmental Medicine.

Leung, C. M. and C. L. Foo (1992). "Mass ammonia inhalational burns--experience in the management of 12 patients." Ann Acad Med Singap 21(5): 624-629. Li, W. and J. Pauluhn (2017). "Phosgene-induced acute lung injury (ALI): differences from chlorine-induced ALI and attempts to translate toxicology to clinical medicine." Clinical and translational medicine 6(1): 1-21.

Makarovsky, I., et al. (2008). "Ammonia – When Something Smells Wrong." IMAJ 10.

Nicogossian, A. E., et al. (1977). The Apollo-Soyuz Test Project Medical Report. Washington, DC, Scientific and Technical Information Office

### National Aeronautics and Space Administration

Rispens, J. R., et al. (2020). "Anhydrous Ammonia Chemical Release — Lake County, Illinois, April 2019." Morbidity and Mortality Weekly Report.

Robertson, J. M., et al. (2020). "Medical Event Management for Future Deep Space Exploration Missions to Mars." J Surg Res 246: 305-314.

Sexton, J. D. and D. J. Pronchik (1998). "Chlorine Inhalation." Journal of Toxicology.

Sickle, D. V., et al. (2009). "Acute health effects after exposure to chlorinegas released after a train derailment." American Journal of Emergency Medicine Steverlynck, L., et al. (2017). "Combined acute inhalation of hydrofluoric acid and nitric acid: a case report and literature review." International Journal of Clinical and Laboratory Medicine.

TJ, J. (1998). "Toxicological Basis for Establishing Spacecraft Air Monitoring Requirements." SAE Journal of Aerospace Engineering.

Tobiasa, B. and C. McMillan (2020). Evolution of Hardware and Philosophy of Emergency Response Actions on the International Space. 16th International Conference on Space Operations,. Cape Town South Africa.

Tuong, A. H., et al. (2019). "Emergency management of chlorine gas exposure – a systematic review." Clinical Toxicology.

Weiss, B., et al. (1992). "Toxicological Implications of Extended Space Flights." Acta Astronautica.

Wenck, M. A., et al. (2007). "Rapid Assessment of Exposure to Chlorine Released from a Train Derailment and Resulting Health Impact." Public Health Reports. White, C. E., et al. (2007). "Burn center treatment of patients with severe anhydrous ammonia injury: case reports and literature review." J Burn Care Res 28(6): 922-928. Shin M, Bronstein AC, Glidden E, et al. Morbidity and Mortality of Unintentional Carbon Monoxide Poisoning: United States 2005 to 2018. Ann Emerg Med. 2023;81(3):309-317 Hampson NB. U.S. Mortality Due to Carbon Monoxide Poisoning, 1999-2014. Accidental and Intentional Deaths. Ann Am Thorac Soc. 2016;13(10):1768 NASA Technical Document https://www.nasa.gov/sites/default/files/atoms/files/spaceflight_toxicology_technical_brief_ochmo_12112020.pdf Siniša S, Nikola Z, Ilija T, Željko S, Bojana R. Ammonia-risk distribution by logistic subsystems and type of consequence. Burns. 2020;46(2):360- 369.

## ACRONYMS

6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 12

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

6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 13

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

6/15/2023 2:14:49 PM ICL110_Toxic Inhalation Exposure Cliff page: 14

---

## Source metadata

```yaml
source_filename: "toxic-inhalation-exposure-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Respiratory System Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1fLAXu_NfrHRKdHd3nk_670w_yEd0bsFY/view"
source_drive_id: "1fLAXu_NfrHRKdHd3nk_670w_yEd0bsFY"
source_sha256: 8b14d6a504cbfd4032a6b72bc9e7a43ed1da51aa2e035a39c2718cdaf47bb733
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
