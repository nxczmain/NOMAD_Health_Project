# Altitude Sickness CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1K0uKl5W1oGnQMNODFJjhItEdcV6bRXnN/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 119

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

### ICL6_Altitude Sickness

Altitude Sickness, as we have defined the term, is hypoxia sufficient to cause impairment of function. Hypothetical situations that could cause this condition include: cabin leak that may result in reduced cabin pressure, environmental control mishap in which cabin pressure is maintained but oxygen level is inadequately sustained, inadequate gas mixing and uneven cabin ventilation, acute hypoxic exposure from an EVA suit leak. Altitude sickness represents a spectrum of pathologic states initiated by an exaggerated vascular response to hypoxia. Syndromes include acute mountain sickness (AMS), high altitude cerebral edema (HACE), high altitude pulmonary edema (HAPE), and high altitude retinal hemorrhage. The potential for AMS in space operations exists during staged decompression prior to EVA or following inadvertent pressure reduction due to partial loss of spacecraft atmosphere. (Clark, 2008). In this CLiFF the term "descent" is considered to be a return to a sufficient partial pressure of oxygen to treat symptoms of hypoxia associated with loss of pressurization.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

This condition has not occurred on a space mission to our knowledge. The major challenge of this condition is calculating its incidence.Per the definition the condition itself does not exist outside of an "altitude" or non-ground equivalent atmospheric pressure and O2 concentration.

Therefore, without an engineering decision to the contrary, nominal operations would suggest an atmosphere of 14.7 psi and 21% O2. There may be different configurations in the EMU or habitat or during airlock depressuration with lower pressures but higher concentrations of oxygen. Since the condition occurs in the presence of hypoxia, the partial pressure of inspired oxygen is the key determinant. Secondly, the affected crewmember will need to return to a habitable volume in order for the event to be treated. This implies that if the condition occurs but the vehicle is not salvageable, a loss of mission event has occurred. Therefore, this condition will not apply because a loss of mission or emergency evacuation will occur. Therefore, we have excluded these events. Given these assumptions, this CLiFF only considers EVA or surface ops in small vehicles (rovers, etc) and failures resulting in depressurization events. Therefore, the time duration of exposure would necessarily be limited to events of durations less than 24 hours. Having limited information regarding lunar vehicles, we only have the PRA model calculations using the existing EMU suit. Using this model, (called SPLAT) as a guide to the probability of moderate leakages (Ebullism, or a large leak, is covered in a separate CLiFF) the incidence becomes fairly straightforward. Based on this PRA a failure rate of 1 every 9,900 EVAs per can be applied per the engineering model leakage report.

### ANALOG LITERATURE

Given the assumptions of a return to normal pressures (or at least normal O2 pressure) within a short duration in a reliable (i.e. with a buddy on EVAs, etc) it was not possible to find analog or terrestrial literature that replicated a brief (less than 24 hours at altitude) exposure and quick descent to sea level pressure.

### TERRESTRIAL LITERATURE

Given the assumptions of a return to normal pressures (or at least normal O2 pressure) within a short duration in a reliable (i.e. with a buddy on EVAs, etc) it was not possible to find analog or terrestrial literature that replicated a brief (less than 24 hours at altitude) exposure and quick descent to sea level pressure.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

6/15/2023 1:31:52 PM ICL6_Altitude Sickness Cliff page: 1

Fixed incidence proportion of 1.01E-4

### INCIDENCE SUMMARY

We used the EMU SPLAT Suit Leak Rates reported PRA estimate of the suit leak probability as 1.01E-4 per EVA. Since no uncertainty estimates were included, we set the incidence proportion as fixed. This condition is tied to EVAs.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

EVA Segment

### EVA All

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Fixed Mean 0.000101 SD 0

### Fixed Incidence

(Rate): (Prop.): 0.000101 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Derby, et al. 2010 Terrestrial 1 Gallagher, et al. 2004 Terrestrial 1 Hackett, et al. 2007 Analog 1 Duncan, G et al. 2017 Spaceflight model 3 As articulated earlier in this CLiFF, we were only able to use the SPLAT model data for our incidence of this condition. Condition is only possible resulting from a suit leak on an EVA. 6/15/2023 1:31:52 PM ICL6_Altitude Sickness Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

N/A

### BEST CASE SCENARIO DEFINITION

High altitude headache or acute mountain sickenss (AMS); which resolves spontaneously, with normalization of oxygen partial pressures, medications, or descent.

### WORSE CASE SCENARIO DEFINITION

High altitude pulmonary edema (HAPE) or high-altitude cerebral edema (HACE).

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

High Altitude Headache High Altitude Pulmonary Edema High Altitude Cerebral Edema

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Escalation beyond AMS is not common in terrestrial settings and has never been seen on orbit. Previous CLiFF and universal literature data supports the 0-3% "worst case" posture. To be conservative, we will use the 1/46 (2.2%) that is an approximation taken from Derby, R and DeWeber, K 2010 using the mean estimation (an average of 46% from a range of 25-67%) hikers having AMS symptoms and 1% of hikers having symptoms more severe (such as HACE, etc). Therefore, our calculation would be =(1/46)*100 or 2.2% TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Derby, et al. 2010 Terrestrial 3 Gallagher, et al. 2004 Terrestrial 3 Hackett, et al. 2007 Analog 3 The best and worst case breakdown is difficult as articulated elsewhere because of the duration of exposure and the probability that the crew could possibly be exposed to low partial pressures of oxygen without return to the nominal pressures/oxygen levels of the vehicle. This breakdown represents a "worst worst" case rather than a best approximation as it is essentially the probability of a patient reaching HAPE or HACE if they were hypoxic far longer than would be expected. 6/15/2023 1:31:52 PM ICL6_Altitude Sickness Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Fixed incidence 98 - 98 100 0.22 15.3069 0 4 0 0 0 0 0 Case (TBC) proportion of 1.01E-4 Treated Worst 2 - 2 100 1.5 53.654 46 192 26.7606 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.22 15.4797 0 4 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.5 98.5384 48 504 98.5384 100 100 4.6 50 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 1:31:52 PM ICL6_Altitude Sickness Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The incidence for this condition is somewhat difficult to determine because as the definition of the condition states, the condition itself does not exist outside of normal sea level pressures. Our current assumptions have nominal ops at 14.7 and 21%, we are unlikely to experience “altitude sickness” outside of a failure. Therefore, only off-nominal conditions will result in this condition occurring. Secondly, the patient will need to return to a habitable volume in order for the event to be treated. Meaning that if the condition occurs but the vehicle is not salvageable, and we have a loss of mission event and this condition will not apply because a loss of mission or quick duration returns will occur. Therefore, we have excluded these events. The above points taken together results in only considering EVA or surface ops in small vehicles (rovers, etc.) and failures resulting in depressurization events. Therefore, the time duration of exposure would necessarily be limited to events of this type (i.e. less than 24 hours).

Having limited information regarding lunar vehicles, we only have the PRA model calculations using the existing EMU suit. Using this model, (called SPLAT) as a guide to the probability of moderate leakages (Ebullism, or a large leak, is covered in a different location) the incidence becomes fairly straightforward we could assume a failure rate of 1 every 9,900 EVAs per their model leakage report.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Under the situation of a mild exposure (hypoxia), the vast majority of patients will not experience any symptoms. Under these circumstances and given our assumptions about small vehicles, the best treatment for this condition will be immediate return to a nominally pressurized vehicle and any existing symptoms will resolve within 4 hours.

TREATED WORST CASE SCENARIO (TWC) COMMENTS We have been unable to find documented terrestrial cases of refractory cerebral edema or pulmonary edema (HACE and HAPE) leading to death after descent of 300 - 1,000 meters. A descent of this magnitude is actually more conservative than our assumptions would suggest as a return to a pressurized vehicle would represent a return to sea-level with normal partial pressure of oxygen or equivalent pressures (or perhaps a descent of 1,000's of meters depending on the pressure leakage rate). It is possible that a higher level of care (i.e. an RTDC event) may be required or that even death may occur, it is just difficult to quantify this risk lacking any supporting data. Additionally, descent to a higher partial pressure of oxygen is the most efficacious therapy for the constellation of symptoms associated with altitude sickness. Therefore, it is reasonable to assume that RTDC and LOCL are 0%. One study specifically addressed this issue. Once descent to normal pressures/normal partial pressures of oxygen was achieved, patients did well and that: "None of the patients evacuated to CIWEC died, and all symptoms completely resolved by the end of the follow- up period." UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Similar to the "Treated Best Case", the Untreated case is difficult to separate because "treatment" is likely to simply be returning to the vehicle.

Therefore, under the conditions of a mild exposure, the vast majority of patients will not experience any symptoms. Under these circumstances and given our assumptions about small vehicles, the best treatment for this condition will be immediate return to a nominally pressurized vehicle (i.e. with normal partial pressures of oxygen) and any existing symptoms will resolve within 4 hours.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS For the purposes of this CLiFF, we have assumed that in the Untreated WC scenario, the patient has been exposed for long enough to lead to a state similar to HAPE or HACE, even though the timing appears to require 24-48 hours duration of low pressure/low oxygen tension exposure.

Therefore, it is assumed that the patient could die and that their return to a nominally pressurized volume with normal O2 partial pressures is inhibited. The inability to descend from altitude has been briefly studied in the Nepal region for trekkers who have climbed there. Some of these trekkers are unable to return/descend (because they were alone for example, therefore without assistance, were exposed to lower pressures for longer than we have assumed), this would closely represent the UTWC scenario for our crew leading to the need for escalation of care (RTDC) or death. The RTDC for this scenario is 100% because the LOCL min and max were both greater than 0%. The LOCL min probability is based on the lowest approximation from the death rate vs evacuation rate (i.e. treated vs untreated) from trekkers in the Nepal region. The number is from an approximation of 7.7 deaths / 100,000 trekkers vs an evacuation rate of between 56 and 276 people/100,000 from Nepal. Taking an average of this evacuation rate to be 166 (additional year data is lacking so this approximation is necessary). Therefore, our low end for approximation would be (7.7/166) * 100 or 4.6%. I have taken the max LOCL for this condition to be the "worst-worst" case approximation of LOCL. Therefore, the "Estimation" from the study reference notes of 166 hikers that HAPE if left untreated would lead death at a rate of 50%.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC) 6/15/2023 1:31:52 PM ICL6_Altitude Sickness Cliff page: 5

### Citation Source LOC Value

Fiore, DC et al. 2010 Terrestrial Imray, C et al. 2011 Terrestrial 3 Luks, AM et al. 2019 Analog The duration of symptoms is difficult to assess, especially for patients who are untreated. For treated patients, we have fairly good data.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Fiore, DC et al. 2010 Terrestrial Imray, C et al. 2011 Terrestrial Luks, AM et al. 2019 Analog 2 Ren, Y et al. 2010 Analog Derby, R and DeWeber, K 2010 Terrestrial RTDC, like LOCL and duration, are all difficult because the most efficacious therapy for HAPE and HACE is descent, which will be performed rather quickly upon onset of symptoms simply due to a return to the pressurized vehicle.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Fiore, DC et al. 2010 Terrestrial Imray, C et al. 2011 Terrestrial Luks, AM et al. 2019 Analog 2 Ren, Y et al. 2010 Analog Derby, R and DeWeber, K 2010 Terrestrial Leshem, E et al. 2008 Terrestrial LOCL, like RTDC and duration, are all difficult because the most efficacious therapy for HAPE and HACE is descent, which will be performed rather quickly upon onset of symptoms simply due to a return to the pressurized vehicle. Additionally, it is complex associating Untreated patients with death due to altitude alone, as the majority of patients who die at altitude suffer from concomitant hypothermia, blunt force trauma, avalanche- related injuries, carbon monoxide intoxication, hyponatremia, and intoxication of other types (i.e. alcohol or other drugs of intoxication).

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview Altitude Sickness covers the spectrum of disease including high altitude headache, acute mountain sickness, high altitude retinopathy, high altitude cerebral edema (HACE), and high altitude pulmonary edema (HAPE). These conditions would potentially occur due to a lower cabin atmospheric pressure in the transit vehicle, descent/ascent vehicle, or EVA suits. An engineering failure causing a sudden drop in pressure without a complete depressurization that is not recoverable to baseline pressures is believed unlikely to occur.

Additionally since atmospheric pressures in the cabin would need to be less than a 1,829 meter pressure equivalent to cause a reasonable incidence of altitude sickness and less than 4,267 meter pressure equivalent for an appreciable incidence of HACE or HAPE, these conditions are also not likely to occur. The crew would be most at risk during periods of transition between vehicles from high pressure to low pressure, including launches and descents. CNES: High Altitude Headache High Altitude Pulmonary Edema High Altitude Cerebral Edema Diagnostic Scope and Resourcing Diagnosis is largely clinical and centers on history, physical exam, fundoscopic exam, and vital signs. Ultrasound is not necessary for the diagnosis but may assist in identifying cerebral edema via ophthalmic ultrasound. For this reason it is included but not considered necessary.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.22 hours representing history and a cursory physical exam CP1 WC (Treated or Untreated): 1.5 hours representing, set up time, history, physical exam, fundoscopic exam, and ultrasound scan (though this is not considered necessary). Without ultrasound the CP1 duration is expected to be approximately 1 hour. The highest scope of practice for this condition is 5 commensurate with an attending level procedure trained generalist physician. This is due to the 6/15/2023 1:31:52 PM ICL6_Altitude Sickness Cliff page: 6

complexity of the worst case scenario Treatment Scope and Resourcing The best case includes prevention and treatment with acetazolamide or dexamethasone based on Wilderness Medical Society Guidelines, symptom control for mild pain with NSAIDs prioritized over acetaminophen, and antiemetics. Only symptomatic treatment is considered necessary since the best case definition is not a severe case and patients will recover within a few days. The worst case is far more complex and includes prevention and treatment with acetazolamide or dexamethasone based on Wilderness Medical Society Guidelines, nifedipine for HAPE, and intramuscular and oral steroids for HACE, oxygen, and hyperbaric oxygen therapy utilizing vehicle built in systems (e.g. a space suit, or airlock). Communications and Support Needs: The best case will not require ground communication beyond routine discussions but the worst case will require frequent contact with ground support for both the diagnosis and treatment stages. audio/video links are listed as the highest primacy for ground communication. REFERENCES Barratt, Michael R., Ellen S. Baker, and Sam L. Pool.

2019. "Principles of clinical medicine for space flight." In. New York, NY: New York, NY : Springer. Andrew M. Luks, Paul S. Auerbach, Luanne Freer,

Colin K. Grissom, Linda E. Keyes, Scott E. McIntosh, George W. Rodway, Robert B. Schoene, Ken Zafren, Peter H. Hackett, Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Acute Altitude Illness: 2019 Update, Wilderness & Environmental Medicine, Volume 30, Issue 4, Supplement, 2019, Pages S3-S18

### IMM CLIFF RECONCILATION COMMENTS

Altitude sickness has not occurred among US astronauts in flight. Lacking in-flight data IMM requested a risk trade study. The likelihood is based on the probability of loss of function of the oxygen generation systems on ISS. It does not reflect the rate of change of ppO2 levels or the probability of various ppO2 levels. The version 1.2 interim 10A PRA model was run for a 6 month mission time to extract the event probabilities from the model end states. The results of this analysis include probability of occurrence over a 6 month period and the same probabilities expressed as failure rates, in number of failures per hour. Put simply, the IMM CLiFF deduced the probability of a low pressure event occurring within a 6 month mission duration and concluded that the probability of this condition occurring medically was the same. Our condition is significantly different because we assume that the crew will need to return to a habitable volume and survive a return journey. As such, any mission event that necessarily leads to LOCL is not considered because medical management will not need to be administered. Therefore, events such as a loss of pressure on Gateway that will lead to LOCL are ignored because the medical kit will not be sufficient to resolve these issues. The above points taken together results in only considering EVA or surface ops in small vehicles (rovers, etc.) and failures resulting in depressurization events. Therefore, the time duration of exposure would necessarily be limited to events of this type (i.e. less than 24 hours). Having limited information regarding lunar vehicles, we only have the PRA model calculations using the existing EMU suit. Using this model, (called SPLAT) as a guide to the probability of moderate leakages (Ebullism, or a large leak, is covered in a different location) the incidence becomes fairly straightforward. It is assumed that a failure rate of 1 every 9,900 EVAs per the PRA model leakage report.

### LIMITATIONS SUMMARY

The analysis assumes that the crew will need to return to a habitable volume and survive a return journey. As such, any mission event that necessarily leads to LOCL is not considered because medical management will not need to be administered. Therefore, events such as a loss of pressure on gateway that will lead to LOCL are ignored because the medical kit will not be sufficient to resolve these issues. Therefore, a major limitation of this analysis is that moderate leaks that lead to modified missions could not be quantified and are ultimately not considered because those contingencies could not be accurately calculated. 6/15/2023 1:31:52 PM ICL6_Altitude Sickness Cliff page: 7

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

| Best |  | 664 |  |  |  |  | 145 |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 223 | 664 |  | 89 | 854 |  | 145 |  | 13 |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 |  | 145 |  | 13 |  |  |  |
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

| Best | 132 |  |  |  |  |  |  | 211 | 1165 | 3763 | 0.309593 | 30.9593 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  | 414 | 22 | 196 | 34 | 34 | 211 | 3031 | 3763 | 0.805474 | 80.5474 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3708 | 3763 | 0.985384 | 98.5384 |
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

|  |  | 664 |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 |  | 145 |  | 13 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| -------------------- | --- | --- | --- | -------------------------- | ---------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| 6/15/2023 1:31:52 PM |  |  |  |  | ICL6_Altitude Sickness Cliff |  |  |  |  |  |  | page: 8 |
Total Human

|  |  |  | Translation & |  | Total Tasks |  |  |
| --- | --- | --- | ------------- | --- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity Standing (g) | Equipment Ops | Category |  |  |
| --- | ----- | --- | ---------------------- | ------------- | -------------------- | --- | --- |
|  |  |  | (microgravity) |  | Condition Tasks Full |  |  |

Mission Treated Best

|  |  |  |  |  | 0 3763 | 0 | 0 |
| --- | --- | --- | --- | --- | ------ | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  | 0 3763 | 0 | 0 |
| --- | --- | --- | --- | --- | ------ | --- | --- |

Case (UTBC) Treated Worst

|  | 132 |  |  | 211 | 1007 3763 | 0.267606 | 26.7606 |
| --- | --- | --- | --- | --- | --------- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 564 | 414 | 22 196 34 | 34 211 | 3708 3763 | 0.985384 | 98.5384 |
| --- | ------- | --- | --------- | ------ | --------- | -------- | ------- |

Case (UTWC)

| 6/15/2023 1:31:52 PM |  |  | ICL6_Altitude Sickness Cliff |  |  |  | page: 9 |
| -------------------- | --- | --- | ---------------------------- | --- | --- | --- | ------- |
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

6/15/2023 1:31:52 PM ICL6_Altitude Sickness Cliff page: 10

## REFERENCES

Reference Leshem E, Pandey P, Shlim DR, Hiramatsu K, Sidi Y, Schwartz E. Clinical features of patients with severe altitude illness in Nepal. J Travel Med. 2008 Sep-Oct;15(5):315-22. doi: 10.1111/j.1708-8305.2008.00229.x. PMID: 19006504.

Netzer, N., Strohl, K., Faulhaber, M., Gatterer, H., Burtscher, M., 2013. Hypoxia‐Related Altitude Illnesses. Journal of Travel Medicine 20, 247– 255.. doi:10.1111/jtm.12017 Derby, Richard; deWeber, Kevin. The Athlete and High Altitude, Current Sports Medicine Reports: March 2010 - Volume 9 - Issue 2 - p 79-85 doi: 10.1249/JSR.0b013e3181d404ac Hackett PH, Roach RC. High-altitude illness. In: Auerbach PS, editor. Wilderness Medicine, 5th ed., Philadelphia: Mosby; 2007, p. 2-35.

Taylor AT. High-altitude illnesses: physiology, risk factors, prevention, and treatment. Rambam Maimonides Med J. 2011;2(1):e0022. Published 2011 Jan 31. doi:10.5041/RMMJ.10022 Ren Y, Fu Z, Shen W, Jiang P, He Y, Peng S, Wu Z, Cui B. Incidence of high altitude illnesses among unacclimatized persons who acutely ascended to Tibet. High Alt Med Biol. 2010 Spring;11(1):39-42. doi: 10.1089/ham.2009.1049. PMID: 20367487.

Kühn C, Apel C, Bertsch D, Grass M, Gschwandtl C, Hundt N, Müller-Ost M, Risse J, Schmitz S, Sherpa K, Timmermann L, van der Giet M, van der Giet S, Wernitz K, Morrison A, Küpper T. Inpatient treatment of trekkers and Nepalese workers in the high-altitude environment of Mt. Everest Region 1996-2011: A retrospective analysis. Travel Med Infect Dis. 2019 Sep-Oct;31:101356. doi: 10.1016/j.tmaid.2018.11.012. Epub 2018 Nov

28. PMID: 30502547.

Korzeniewski K, Nitsch-Osuch A, Guzek A, Juszczak D. High altitude pulmonary edema in mountain climbers. Respir Physiol Neurobiol. 2015 Apr;209:33-8. doi: 10.1016/j.resp.2014.09.023. Epub 2014 Oct 5. PMID: 25291181.

Khodaee M, Grothe HL, Seyfert JH, VanBaak K. Athletes at High Altitude. Sports Health. 2016 Mar-Apr;8(2):126-32.

Lobenhoffer HP, Zink RA, Brendel W. High altitude pulmonary edema: analysis of 166 cases. In: Brendel W, Zink RA, eds. High altitude physiology and medicine. New York: Springer-Verlag, 1982:219–31.

Gallagher, SA and Hackett PH. High-altitude illness. Emerg. Med. Clin. N. Am. 2004; 22:329-55.

Duncan, et al. DRD-MAPI-SA-06-ISSPRA-17-22, EMU SPLAT Suit Leak Rates. Report 2017 Imray C, Booth A, Wright A, Bradwell A. Acute altitude illnesses. BMJ. 2011 Aug 15;343:d4943 Luks AM, Auerbach PS, Freer L, et al. Wilderness Medical Society Practice Guidelines for the Prevention and Treatment of Acute Altitude Illness: 2019 Update. Wilderness Environ Med. 2019 Jun 24 early online

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

CP1 Clinical Phase 1 CP2 Clinical Phase 2 6/15/2023 1:31:52 PM ICL6_Altitude Sickness Cliff page: 11

CP3 Clinical Phase 3

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

### PDQ Pain Disability Questionnaire

### PFCL Proposed Future Conditions List

### PPE Personal Protective Equipment

### PTRS Project Technical Requirements Specification

6/15/2023 1:31:52 PM ICL6_Altitude Sickness Cliff page: 12

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

6/15/2023 1:31:52 PM ICL6_Altitude Sickness Cliff page: 13

---

## Source metadata

```yaml
source_filename: "altitude-sickness-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 119"
source_url: "https://drive.google.com/file/d/1K0uKl5W1oGnQMNODFJjhItEdcV6bRXnN/view"
source_drive_id: "1K0uKl5W1oGnQMNODFJjhItEdcV6bRXnN"
source_sha256: d0c551f968d762bb0bd3fe75e3ac8ca395566ea7bdb13dd204965535d9e0b188
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
