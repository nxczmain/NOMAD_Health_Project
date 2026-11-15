# Burn Mild Thermal CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1zyZDbQ0SwZWm_Pe_mlS6EIRbNltDGfw3/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119

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

ICL21_Burn - Mild, Thermal Superficial burns occur when thermal stress is applied to skin and induce cell death of the epidermis. Burns can be classified based on the depth of tissue involved and range from superficial to full thickness burn. Burns typically follow a predictable course of healing and can be self limited or life threatening. Complications from burns commonly include infection, chronic pain, and permanent physical disfigurement or functional loss. Any of these complications may have significant impacts on mission objectives and crew safety. Risk of skin and soft tissue infection in flight appears to be much higher than terrestrially which makes any large soft tissue injury concerning. Thermal burn can occur from direct heat from an object or surface, scald from a hot liquid, and/or from open fire. During the Mir program there was a brief fire that resulted from a faulty solid fuel oxygen generator.

One crew member was burned and primarily sustained superficial injury however did have some blistering consistent with a partial thickness burn.

These burns were treated in flight with ointment and gauze and reportedly the crew member recovered without any reported complications.

Substantial work has been done to mitigate the risk of fire and no other significant burn events have been documented in flight. Superficial burns are likely to resolve without complication and require very minimal treatment. Most burn literature does not capture these injuries because they are so commonly treated at home with OTC medications and home remedies. Nonetheless, painful superficial burns may limit a crew members function with routine tasks or EVA and thus impact mission objectives. It should be noted that moderate/severe skin burn, inhalational injury, chemical skin burn, and chemical eye injury are separate conditions and discussed elsewhere.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Space literature is based on the ISS PRA evaluating the risk of fire. The ISS PRA model calculated total likelihood for a six month time period that at least one crew person is in a module when a crew response-level fire event occurs. The mean was 2.52E-03 events per six months; 5 and 95 percentiles were 4.67E-04 and 6.90E-03 respectively. Therefore, the annual incidence of burns secondary to fire is estimated as 0.00504 events/person years. We then modified this overall risk of fire with the American Burn Association repository data to divide this incidence into minor and moderate/severe burn incidence. The moderate and severe burn is discussed in another CLIFF. This value is technically the risk that a fire occurs in flight with a crew member within the cabin with the fire. This is a poor surrogate for risk of burn because it is highly likely that a crew member will be able to extinguish a fire without burns. However in the absence of other spaceflight data this was the best incidence we could derive.

This is the same approach the IMM took to risk of burn. A newer version of the ISS PRA for fire does not include risk of isolated fire or burn and thus could not be used for incidence. The PRA team for Artemis was consulted and did not have a fire risk calculation available at this time but felt that it was likely less than the ISS due to fewer number of experiments involved in Artemis missions. Touch temperature burns were considered to be extremely unlikely due to automatic shutoff in overheating components and flight rules that limit maintenance until components have cooled for a set time frame.

### ANALOG LITERATURE

No analog literature was used to calculate final incidence as it was inferior to the spaceflight specific literature

### TERRESTRIAL LITERATURE

No terrestrial literature was used to calculate incidence as it was inferior to the spaceflight specific literature

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 1

Mean 0.004647 and SD 0.00234

### INCIDENCE SUMMARY

The incidence distribution for mild burns is Gamma(shape=3.9438, rate=848.674) with mean 0.004647 and SD 0.00234. This distribution is developed from the combination of a PRA risk estimate with uncertainty and data from the American Burn Association Repository. The ISS PRA prediction for burns secondary to fire incidence rate will be used as the underlying rate of events. For 6-months, the rate is 2.52E-3 (1 year is 0.00504). 90% Confidence limits are 4.67E-4 and 6.90E-3 (1-year 0.000934, 0.0138). Approximating by 4 events and 793.651 person-years, gives an appropriate measure of the rate and confidence limits. We will use this imputed data in the analysis step. IR: 504E-3 (95%CI: 1.601E-4, 12.16E- 4). This value is technically the risk that a fire occurs in flight with a crew member within the cabin with the fire. This is a poor surrogate for risk of burn because it is highly likely that a crew member will be able to extinguish a fire without burns. To distinguish Mild from Moderate to Severe, we will supplement with a report from the American Burn Association Repository which noted that in 2016, there were 486,000 ED visits for burns with admission of 40k patients. (https://ameriburn.org/who-we-are/media/burn-incidence-fact-sheet/). The data on ED visits is used to parse the underlying prediction model into the 2 conditions – mild or moderate to severe.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.00464701 SD 0.00234 Gamma (Shape): 3.9438 (Rate): 848.674 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

PRA ISS Fire Version 3.2.0 2015 Spaceflight 2 In the absence of other data, prior IMM incidence was used as a baseline rate and modified to reflect risk of mild burn and moderate burn which are separate conditions for the updated CLIFF. Given these significant limitations the ISS PRA model received a score of 2. Terrestrial and analog data was not used due to its lack of applicability to flight. 12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

There are no specific screening or prevention measures for minor skin burns as these are spontaneous events that are the result of an engineering failure and independent of crew health. Chronic diseases that substantially impact wound healing or poor nutritional status will be screened from the astronaut population but this is non specific and applies to all conditions that involve wound healing.

### BEST CASE SCENARIO DEFINITION

Superficial burns to the skin that resolve without treatment.

### WORSE CASE SCENARIO DEFINITION

Isolated superficial-partial thickness burns to the skin that respond to topical treatments, dressings, and/or NSAIDs/Acetaminophen.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Muller, M et al. 2006 evaluated emergency department based on severity of skin burn and provide 103/452 patients in their study suffered superficial burns while 349/452 were superficial partial thickness burns. This proportion is likely a significant overestimate of the proportion of WC scenario visits as the vast majority of superficial burns will not present to an emergency department or burn center and thus will not be captured in epidemiological studies. These probabilities will be used due to paucity of other evidence.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Huspith, J. and S. Rayatt 2004 Terrestrial 1 Muller, M et al. 2016 Terrestrial 2 Hudspith, J and Rayatt, S 2004 note that 90% of burns are minor and can be managed as an OP by primary care. This study is a review article without primarily literature and instead relies on expert opinion. The 90% of burns that can be treated as an OP also include both the BC and WC scenarios for this condition thus this paper received a score of 1 for our BC:WC distribution. Muller, M et al. 2016 is a retrospective study of adult ED visits for burn in a Swiss hospital. Many burns are from scalds and within the home which is less applicable to spaceflight however this study does separate burns based on severity in a similar fashion to our BC:WC definitions and received a 2. 12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Mean 0.004647 23 - 23 100 0.23 0 48 240 0 0 0 0 0 Case (TBC) and SD 0.00234 Treated Worst 77 - 77 100 1.7 6.51076 168 336 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.23 0 48 240 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.7 27.6641 336 504 0 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The general approach to superficial thermal burn includes pain control and topical ointments. The vast majority of superficial or first degree burns will heal well without intervention. There is a risk of superimposed infection but this risk is relatively low. A superficial burn in spaceflight will be managed with OCT treatment and is anticipated to result in full recovery in a few days to weeks. The RTDC surrogate in this condition includes the wilderness medical society guidelines for transport. By definition this condition will not require RTDC or result in LOCL TREATED BEST CASE (TBC) SCENARIO COMMENTS The definition used for the BC scenario is a superficial burn to the skin that resolves without treatment. Based on available literature which provides expert opinion on approximate healing time, time to recovery with this minor injury is between 48h and 10d. The RTDC and LOCL were both 0% as this type of injury by definition is self resolving and thus has no risk of causing significant crew harm that would require RTDC or risk of death.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The definition of the WC scenario is an isolated superficial partial thickness burn to the skin that responds to topical treatments, dressings, and/or NSAIDS/Acetaminophen. The duration of a superficial partial thickness burn when treated ranges from 10-14 days. The RTDC and LOCL for this condition is 0% per TWC definition. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The definition of the BC scenario is a superficial burn to the skin that resolves without treatment. By definition, this scenario of our condition will exactly mimic the TBC scenario. Duration based on available literature is projected to be 48h to 240h. The RTDC and LOCL were both 0% as this type of injury by definition is self resolving and thus has no risk of causing significant crew harm that would require RTDC or risk of death.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The WC scenario definition is an isolated superficial -partial thickness burn to the skin that responds to treatment. Duration in this untreated condition is dependent on TBSA and risk factors that predispose a patient to complications like volume loss and cellulitis. This condition is separate from Burn Moderate to Severe and thus will make the assumption that a superficial partial thickness burn without treatment will still heal spontaneously with mild increase in duration of condition. Expert opinion places duration range from 336h to 504h (2-3 weeks). LOCL and RTDC continue to be 0 as the severity of this condition, even untreated is low. It should be noted that an untreated superficial partial thickness burn would place a crew member at risk for cellulitis which has a non-zero chance of requiring RTDC, or LOCL however this risk is captured in other CLIFFS.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Curling, C and Todd, S 2017 Analog Lloyd, EC et al. 2012 Terrestrial 3 Kagan, RJ et al. 2013 Terrestrial Curlin, C and Todd, S 2017 is a military report looking at superficial flash burns and treatment needs. This report was commissioned by NATO to look specifically at the flash burns suffered after nuclear weapon detonation but the superficial burn care is similar and thus was used to estimate treatment duration. The results of this report are based on literature review and expert opinion but does not provide primary research. Lloyd, EC et al. 2012 is a review and practice guideline by the American College of Family Practice on the treatment of burns. This paper also provides accepted durations of illness for superficial burns but does not provide primary research.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC) 12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 5

### Citation Source LOC Value

Subject Matter Expert Opinion Terrestrial 3 RTDC was determined to be 0% based on the parameters of the condition and RTDC surrogate. Neither the BC nor the WC condition will require RTDC as defined TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Curling, Todd 2017 Analog Iqbal, T et al. 2013 Terrestrial 3

### Expert Opinion Terrestrial

LOCL was determined to be 0 based on Curling, Todd 2017 and Iqbal, T et al. 2013. Iqbal reported a 0% mortality rate with TBSA <20%. Curling, Todd also reported a 0% mortality rate for burns <10% that were superficial. These papers do not specify by burn depth however no other literature for mortality rate based on depth was available. This data is also consistent with reviewer opinion that the LOCL for a superficial partial thickness burn, even if untreated, will be 0% based on the parameters defined for this condition.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

- Worst Case Definition: Isolated superficial-partial thickness burns to the skin that respond to topical treatments, dressings, and/or

NSAIDs/Acetaminophen.

- Best Case Definition: Superficial burns to the skin that resolve without treatment.

Mild Thermal burns associated medical response is to address the pain and discomfort associated with the condition and with antibiotic therapy and dressings to mitigation infection risk. Generally this condition is one of discomfort rather than a medical emergency although some antibiotics may need to be applied to reduce risk. The CRT condition focuses solely on the physical exam in the best case and the prevention of infection and pain management in the worst case.

### Diagnostic Scope and Resourcing

In the best-case scenario, diagnosis is based on history and physical examination.

In the worst-case scenario, diagnosis is based on history and physical examination.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.23 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient CP1 WC (Treated or Untreated): 1.7 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient 3 - Irrigate the affected area The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a four: this is an intern level.

### Treatment Scope and Resourcing

In the best-case scenario, treatment is non-existent, based on definition of the condition. The worst case scenario also allocates for irrigation, dressing application and antibiotic prophylaxis.

Most mild burns in terrestrial populations (best or worst case) are resolved without management. 12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 6

1 - In Worst Case: Did not include any grafting or alternatives as storage vs incidence seemed low value 2 - In Worst Case: Did not include any resources for skin stretching as these are typically either fairly large or specific for the application and makeshift items could be created for a similar purpose and efficacy 3 - In Best Case: We did include moisturizers despite the definition being "without treatment." But the thought was that we would make necessity 0 so that the patient may use it to mitigate long term discomfort but it would not be necessary to treat the condition

### Communications and Support Needs

In the best-case scenario, diagnosis and course of treatment is uncomplicated and likely within the scope of care of onboard crew members. In the worst-case condition, ground communications will be helpful given the complicated nature of the condition and the scope of care onboard.

## REFERENCES

### IMM CLIFF RECONCILATION COMMENTS

The IMM CLIFF "Burns Secondary to Fire" is the most similar CLIFF to this one. The incidence of burn for this version of this condition is based on the same ISS PRA document used in the prior version due to uncertainties about lunar ship and habitat designs at this point in time. This condition only includes minor/superficial burn and more severe burns are included in another condition/CLIFF and incidence is thus stratified by epidemiological data while the previous CLIFF included all types of skin burns from fire. The previous best case scenario was first or second degree burns covering less than 9% TBSA. The worst case scenario was second degree burns greater than 9% TBSA or any 3rd degree burn. Rating burns by degree is outdate nomenclature and less accurate than the superficial to full thickness classification used now. Several studies on analog and terrestrial populations in the prior IMM version were included as alternative incidence data in this CLIFF

### LIMITATIONS SUMMARY

- The vast majority of minor superficial burns are treated at home with OTC and home remedies. This cohort is very difficult to capture in burn

literature and thus skew the data toward more significant burns which are evaluated in the hospital •There have been several fires in spaceflight particularly during the Mir program however extensive engineering risk mitigation has been performed to reduce this risk •Incidence of burn in this CLIFF is based on ISS probable risk assessment data that approximates the risk of fire within an ISS module and the risk that a crew member is present during a fire. There is no current PRA for Artemis missions and it is anticipated that due to the fewer number of experiment on board the risk of fire will be much less than that on ISS. Risk of fire and risk that a crew member is present is a surrogate for skin burn and likely significantly overestimates true risk of burn •The BC and WC in this scenario are very similar with regards to burn severity. The vast majority of superficial burns will heal without intervention. Gauze and ointment may help reduce pain and improve healing but in a minor injury the impact of this treatment is expected to be minor. 12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  | Cardio- |  |  |  |  |
| --- | ----------------------- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  |  |  |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 664 |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  | Translation & |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity Standing (g) |  | Equipment | Ops | Category |  |  |
| --- | ----- | --- | ---------------------- | -------------- | --------- | --------- | -------- | --- | --- |
|  |  |  |  | (microgravity) |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  | 0 | 3763 | 0 | 0 |
| ---- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  | 34 | 211 245 | 3763 | 0.0651076 | 6.51076 |
| --- | --- | --- | --- | --- | --- | ------- | ---- | --------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  |  |  | 34 | 211 1041 | 3763 | 0.276641 | 27.6641 |
| --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |
| --- | ----------------------- | -------------- | --------------- | ------- | --------- | --------- | ----- | --- | --- |
|  |  | Communications | personal Vision | Hearing |  | Dentition | GI GU |  |  |
|  | Simple Complex |  |  |  | pulmonary |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 8

Total Human Translation & Total Tasks Hand Lower Ambul & Don/Doff Pressure System Hand (Any) Upper Extremity Stabilization Impaired By TI Decimal TI % (Dom) Extremity Standing (g) Equipment Ops Category (microgravity) Condition

### Tasks Full

Mission Treated Best 0 3763 0 0 Case (TBC) Untreated Best 0 3763 0 0 Case (UTBC) Treated Worst 0 3763 0 0 Case (TWC) Untreated Worst 0 3763 0 0 Case (UTWC) 12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 9

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

12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 10

## REFERENCES

Reference ISS PRA Model v.3.2.0. Fire and Ammonia Model Contributions to the Integrated Medical Model. 2015 Sep 25. den Hollander, D., et al. (2014). "Epidemiology and referral patterns of burns admitted to the Burns Centre at Inkosi Albert Luthuli Central Hospital, Durban." Burns 40(6): 1201-1208.

Grunwald, T. B. and W. L. Garner (2008). "Acute burns." Plast Reconstr Surg 121(5): 311e-319e.

Hashmi, M. and R. Kamal (2013). "Management of patients in a dedicated burns intensive care unit (BICU) in a developing country." Burns 39(3): 493-500. Huspith, J. and S. Rayatt (2004). "ABC of burns: First aid and Treatment of Minor Burns." Iqbal, T., et al. (2013). "Epidemiology and outcome of burns: early experience at the country's first national burns centre." Burns 39(2): 358-362.

Kagan, R. J., et al. (2013). "Surgical management of the burn wound and use of skin substitutes: an expert panel white paper." J Burn Care Res 34(2): e60-79. Mosier, M. J., et al. (2017). National Burn Repository 2017 Report. American Burn Association.

Müller, M., et al. (2016). "Aetiology of adult burns treated from 2000 to 2012 in a Swiss University Hospital." Burns 42(4): 919-925.

Seo, D. K., et al. (2015). "Epidemiological trends and risk factors in major burns patients in South Korea: a 10-year experience." Burns 41(1): 181-187. Sozen, I., et al. (2015). "Outpatient burn management and unnecessary referrals." Ulus Trauma Acil Cerrahi Derg 21(1): 27-33.

Curling, C. A. and S. Todd (2017). "Parameters for Estimation of Casualties from First and Third Degree Flash Burns." Institute for Defense Analyses. Williams, E. et al. (2013). "Outpatient Burns: Prevention and Care." American Family Physician 85(1): 25-32.

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

### CRT Capability Resource Table

12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 11

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

### RCL Removed Conditions List

12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 12

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

12/8/2022 2:18:02 PM ICL21_Burn - Mild, Thermal Cliff page: 13

---

## Source metadata

```yaml
source_filename: "burn-mild-thermal-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1zyZDbQ0SwZWm_Pe_mlS6EIRbNltDGfw3/view"
source_drive_id: "1zyZDbQ0SwZWm_Pe_mlS6EIRbNltDGfw3"
source_sha256: bd34c48696b11c2d07fa5daee3c2129c40e5c51a27ca7ea072849510db7952c6
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
