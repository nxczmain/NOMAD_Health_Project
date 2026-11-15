# Ebullism CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1qoJtPUFJnL55WswoaStTjuvaCM7pRwMa/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Overview](#overview)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL37_Ebullism Ebullism occurs when body tissue is exposed to ambient pressure less than the vapor pressure of water at human body temperature (47mmHg). In the context of spaceflight, this would occur with a failure of the pressure containment layers of the habitat, spacecraft, or spacesuit. Since a vehicle or habitat failure would be catastrophic and not likely survivable, this condition refers only to the chance of Ebullism occurring from suit failures while on EVA.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

This condition has never occurred during an EVA (Skowron, 2020). Catastrophic vehicle failures causing cabin depressurization have occurred but these conditions are typically associated with multiple potentially fatal events and have been considered not survivable for the purposes of this model (Packham, 2012). Since this condition is unique to extremely low pressure environments and related only to EVA it is predicated on engineering failures rather than medical events. Prolonged exposure to vacuum is universally fatal (Barratt, 2019) so the presumed scenario is a suit failure while on EVA causing a leak large enough to depressurize the suit and induce ebullism while the affected crew member is only a few minutes away from rescue to a pressurized environment. Since the condition depends on suit failures probabilistic risk assessment (PRA) data for a large suit leak was determined to be the best model for incidence of this condition. Unfortunately PRA data for the new lunar suits was not available at the time of this writing (December, 2021) so PRA data for the existing EMU (the SPLAT model) is used to inform the Evidence Library. The SPLAT model predicts 1.02E-5 probability that there will be a large suit leak over an EVA lasting 6.5 hours. Unfortunately, there are no uncertainty estimates to use to create a distribution. So, we will set this as a Fixed Incidence Proportion of 1.02E-5. This corresponds to a rough chance of 1 in 98,000 EVAs. According to the PRA analysis a "large leak" is a hole in the suit of 1.1cm which could exceed the EMU secondary oxygen pack flow rate of 7.5lbm/hr and induce a rapid and near complete depressurization of the suit. This would be sufficient to induce ebullism.

### ANALOG LITERATURE

As above, conditions under which ebullism can occur are rare outside of spaceflight. Data is limited to case reports involving vacuum chamber accidents or high altitude suited operations such as parachute jumps.

### TERRESTRIAL LITERATURE

Ebullism does not occur under normal terrestrial conditions.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

Fixed Incidence Proportion of 0.00001025

### INCIDENCE SUMMARY

We used the EMU SPLAT Suit Leak Rates reported PRA estimate of the suit leak probability as 1.02E-5 per EVA for large leaks (7.5 Pounds).

Since no uncertainty estimates were included, we set the incidence proportion as fixed. This condition is tied to EVAs. 8/22/2023 6:57:09 PM ICL37_Ebullism Cliff page: 1

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

EVA Segment

### EVA All

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Fixed Mean 1.02E-05 SD 0

### Fixed Incidence

(Rate): (Prop.): 1.02E-05 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Skowron, 2020 Spaceflight 2 Packham, 2012 Spaceflight 2 Kolesari, 1982 Analogue 1 Barratt, 2019 Analogue 2 Duncan, 2017 Spaceflight 2 With the exception of catastrophic vehicle failures, such as Soyuz-11 and STS-107, there have been no ebullism events reported in spaceflight to date and ebullism only occurs in a near space environment. Thus all attempts to calculate incidence must rely on logical deductions based on models and/or analogues. For the purposes of the Evidence Library we used the EMU SPLAT trade study report (Duncan, 2017). This PRA sets the probability for a large suit leak occurring on a 6.5 hour ISS EVA in the EMU at 0.00001025. 8/22/2023 6:57:09 PM ICL37_Ebullism Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Suits and seals will be engineered to limit the risk of catastrophic pressure loss.

### BEST CASE SCENARIO DEFINITION

Ebullism not requiring any respiratory support and not leading to mission impacting long term neurologic deficits.

### WORSE CASE SCENARIO DEFINITION

Ebullism requiring prolonged respiratory support and/or resulting in mission impacting neurologic deficits.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Data for the BC/WC probability comes from case studies where exposure to physiological vacuum occurred in a near instantaneous fashion. There are; 1 from Packham, 2012 involving 3 individuals who all died in a 1971 Soyuz capsule depressurization on reentry. Six additional cases are found in Barratt, 2019 and Koesari, 1982. Three met the BC definition, 1 met the WC definition and 2 were fatal. This gives a total of 9 individuals with 3 BC, 1 WC, and 5 fatalities. This publication treats fatalities as meeting the WC definition which provides the BC/WC split as 33%/66%.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Packham, 2012 Spaceflight 1 Kolesari, 1982 Analogue 1 Barratt, 2019 Analogue 1 Given the few known cases of ebullism, estimating BC/WC proportion must again rely on logical deduction. As with the incidence, this should be understood as an estimation with a high degree of uncertainty. The Packham, 2012 report describes 2 cases of vehicle failures while the Barratt, 2019 and Kolesari, 1982 cases add a mix of high altitude bailouts, parachute jumps, and altitude chamber accidents. Since the proportion of BC/WC results from a common end point of pressure containment failure the variety of suits, vehicles, and activities is unlikely to matter as much. 8/22/2023 6:57:09 PM ICL37_Ebullism Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

Condition Case Scenario Composite Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Fixed Incidence 33 - 33 100 1.75 19.4526 4 24 0 0 0 0 0 Case (TBC) Proportion of 0.00001025 Treated Worst 67 - 67 100 1.75 50 336 672 0 100 100 0 84 Case (TWC) Untreated Best N/A N/A N/A 1.75 19.4526 4 24 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.75 100 336 672 100 100 100 100 100 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/22/2023 6:57:09 PM ICL37_Ebullism Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Ebullism occurs when an individual is exposed to a physiological vacuum. Since this is not a common experience for humans on Earth and cannot be systematically studied, treatment and outcomes data relies on case reports, animal studies, and knowledge of supportive care in analogue conditions. Severity is likely to depend on the duration of vacuum exposure with the best case definition requiring no respiratory support and causing no long term deficits and the worst case definition involving extensive respiratory support and/or long term deficits. Treatment requires depressurization followed by supportive respiratory care for diffuse lung injury likely similar to ARDS. Ebullism is also likely to be associated with other injuries such as frostbite, subcutaneous emphysema, barotrauma, ocular injuries, and decompression sickness but these are captured in other CLIFFs and not considered intrinsic parts of ICL37 for the purposes of this model.

TREATED BEST CASE (TBC) SCENARIO COMMENTS According to available data, the BC definition is consistent with about 33% of case reports and requires no significant treatment. Case reports meeting this definition show rapid recovery once the subject is repressurized (Barratt, 2019). The duration of clinical phase 2 is likely to be short and treatment will be minimal. Case reports in humans meeting the best case definition describe minimal treatments and a non specific time of less than one day for recovery (Barratt, 2019). Systematic studies in non human primates have shown a specific recovery time of 4 hours after exposure to vacuum less than 120 seconds. (Koestler, 1965 & Rumbaugh, 1965) for this reason CP2 duration is between 4 and 24 hours. By definition there is no LOCL, need for RTDC, nor CP3 TI.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The WC definition requires respiratory support and or causes permanent neurological deficits. This occurs in 66% of identified case reports. It carries a high mortality, RTDC, and TI. For the purposes of this model the occurrence of permanent disability was chosen as a surrogate for the need to return to definitive care (RTDC). Since exposure to vacuum interrupts the body's ability to acquire new oxygen to support cellular respiration, only existing physiological reserves are available. Once these supplies are exhausted, cellular respiration will cease. This is a catastrophic insult to human physiology and can induce an irreversible, fatal outcome within minutes. This gives little time for rescue and so the majority of WC cases are rapidly fatal. In the single case that permitted rapid access to emergency medical care (Kolesari, 1982), the patient underwent 5 days of intensive care and made a full recovery by 10 months. Clinical Phase 2 is based on this report. Since the patient had largely recovered by 14 days, this provides the low end for CP2 duration. It is worth noting that at 14 days Kolesari,1982 described the patient scoring 25% lower on psychological tests while at 10 months the patient had recovered fully. Since the task impairment for this is 100% for the duration of CP2 and the deficit at 14 days is relatively mild, it is not reasonable to list the upper limit as 10 months so the upper limit for CP2 was chosen as 28 days.

For LOCL, 5 of the 6 WC cases, immediate care was not available and the individuals died but in the one case where care was available the patient survived (Kolesari,1982, Barratt, 2019). Based on these data, the low end for the treated worst case LOCL is 0% but the upper end is 84%. For RTDC, using the surrogate of permanent disability, there are no reported cases of individuals who survived ebullism with neurological deficits and the one survivor made a full recovery (Kolesari, 1982). However, the definition and the mechanism make anoxic brain injury possible so RTDC ranges from 0 to 100% in this condition.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Outcome severity in ebullism is likely a function of exposure duration. In the included case reports all those meeting the BC definition were either focal or of short duration (less than 1 minute). Since the BC definition does not require respiratory support or produce lasting neurologic deficits, no LOCL, RTDC, or CP3 TI is assigned in either the treated or untreated versions. The CP2 impairment is considered the same as in the treated BC since there is effectively no necessary treatment for the BC definition.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS There are no systematic studies of untreated sustained ebullism. However, in all case reports where prolonged vacuum exposure was not followed by immediate emergency medical care the individuals died. This means untreated prolonged exposure carries a 100% LOCL by the best available literature for the WC definition (Barratt, 2019). For the RTDC metric, not treating a profound lung injury, would lead to profound disability. Since the RTDC surrogate for this condition is severe disability this carries a 100% risk of RTDC. CP2 duration for this would be the same as with the treated condition. TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC) 8/22/2023 6:57:09 PM ICL37_Ebullism Cliff page: 5

| Citation | Source | LOC Value |  |
| ----------------- | --------------- | --------- | --- |
| O'Callaghan, 2013 | Analog |  |  |
| Kolesari, 1982 | Analog |  |  |
| Koestler, 1965 | Analog (Animal) | 1 |  |
| Rumbaugh, 1965 | Analog (Animal) |  |  |
| Barratt, 2019 | Analog |  |  |

Estimation of treatment duration is based on isolated case reports of industrial and spaceflight incidents (O'Callaghan, 2013, Barratt, 2019, and Kolesari, 1982) and systematic animal studies in non human primates (Koestler, 1965, Rumbaugh, 1965). Cases meeting the BC definition required little in the way of treatment and seemed to recover in less than 1 day with animal studies supporting that short recovery time. For this reason BC CP2 is listed as 4-24 hours. In the WC definition Clinical Phase 2 is based on the Kolesari, 1982 report of a severe case of ebullism that occurred within range of emergency medical care. This patient had largely recovered by 14 days which is listed as the low end for CP2. It is worth noting that at 14 days Kolesari described the patient scoring 25% lower on psychological tests while at 10 months the patient had recovered fully. Since the task impairment for this is 100% for the duration of CP2, and the deficit at 14 days is relatively mild, it is not reasonable to list the upper limit as 10 months so the upper limit for CP2 was chosen as 28 days.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ----------------- | --------------- | --------- | --- |
| O'Callaghan, 2013 | Analog |  |  |
| Kolesari, 1982 | Analog |  |  |
| Koestler, 1965 | Analog (Animal) | 1 |  |
| Rumbaugh, 1965 | Analog (Animal) |  |  |
| Barratt, 2019 | Analog |  |  |

The RTDC surrogate for this condition is permanent disability. Since the available case reports have outcomes of either death or full recovery there is little data to work with on this surrogate (O'Callaghan, 2013, Kolesari, 1982, Barratt, 2019). Studies in non human primates also showed no disabilities after short term vacuum exposure (Koestler, 1965 and Rumbaugh, 1965).

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ----------------- | --------------- | --------- | --- |
| O'Callaghan, 2013 | Analog |  |  |
| Kolesari, 1982 | Analog |  |  |
| Koestler, 1965 | Analog (Animal) |  |  |

1

| Rumbaugh, 1965 | Analog (Animal) |  |  |
| -------------- | --------------- | --- | --- |
| Barratt, 2019 | Analog |  |  |
| Packham, 2012 | Spaceflight |  |  |

Case reports support the supposition that severity of ebullism is related to duration of exposure to vacuum. In the BC there is no risk of LOCL so the data here relates solely to the WC definition. The case reports imply that severe ebullism has a high mortality rate and that survival requires access to immediate emergency care within a window of only a few minutes. The paucity of data gives this value a high degree of uncertainty but given the severity of the injury and the need for a near immediate response, the authors are confident that mortality for the WC of this condition will be high. CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

| 8/22/2023 6:57:09 PM | ICL37_Ebullism Cliff |  | page: 6 |
| -------------------- | -------------------- | --- | ------- |
Ebullism is the rapid or sudden decompression of a suit or ship to below the vapor pressure of water at human body temperature (37C). This occurs at 47mmhg or 0.91psia and at 19,200m (63,000ft) of altitude, often referred to as Armstrong's line. Sometimes described as explosive decompression, this rapid vaporization of liquids and expansion of gases results in multiorgan injury and is particularly damaging to gas containing organs. Hypoxia from hypobaric hypoxia occurs and results in loss of consciousness in 9-11 seconds. This disease process can only occur in very specific settings and is in many ways a unique pathology to the aerospace and space environments. We define the best case scenario as ebullism with assumed recompression that does not require respiratory support or have prolonged neurologic deficit. The worst case scenario is defined as ebullism with assumed recompression requiring prolonged respiratory support or prolonged neurologic deficits that result in mission impact. This is a significant and unique concern in Spaceflight and data on ebullism is limited a number of small studies, case reports, and animal studies. DCS was excluded from consideration in this condition despite its clinical overlap with ebullism and decompression events, as it is a separate condition on the condition list.

- CNES: None

### Diagnostic Scope and Resourcing

The diagnosis of ebullism is primarily a clinical one. While decompression sickness (DCS) may present more subtly with a broad differential diagnosis, ebullism is marked by a sudden, explosive decompression. This is likely to occur either during extra vehicular activity (EVA) or from massive decompression of a module. This rapid gas expansion can result in blunt force and barotrauma with a wide number of possible injuries.

While the diagnosis will be clinically obvious, the extent of bodily injury will require substantial evaluation. Physical exam of all organ systems will be necessary as with all blunt force trauma. EKG was included to evaluate for other causes of syncope and to identify arrhythmia, a known complication of ebullism. Ultrasound will help to further delineate cardiopulmonary pathology such as pneumothorax, arterial gas embolism, pulmonary edema and acute respiratory distress syndrome (ARDS), as the lungs are particularly sensitive to barotrauma in this condition.

Laboratory evaluation was determined to not make a substantial difference in management.

In a best case scenario, physical exam and ultrasound will be adequate to determine severity of injury and fitness for duty. The diagnostic phase (CP1) of a worst case scenario will be identical to the best case scenario as the conditions differ by duration of deficits and response to recompression. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1.75h CP1 WC (Treated or Untreated):1.75h Duration in best case and worst scenario are the same as the definitions differ by response to treatment and not initial presentation The scope of practice for a BC scenario would be 4 (Intern physician) as it would require thorough evaluation but no significant intervention or specialty evaluation The scope of practice for a WC scenario would be 5 (attending physician) as it would require monitoring and management of the critically ill patient including intubation and ventilator management

### Treatment Scope and Resourcing

In a BC scenario of a patient suffering from ebullism, they would be rapidly recompressed to ship or module pressure and after full evaluation would not require significant intervention. By definition no oxygen support would be required. Possible injuries would include focal tissue swelling and ear irritation that would resolve without treatment within hours.

In a WC scenario of a patient suffering from ebullism extensive treatment may be required. The vast majority of patients would have significant improvement when recompressed rapidly so this scenario includes an critically ill subset of patients. Standard oxygen therapy is a requirement as injury in ebullism is due to 'anoxic anoxia'. Further ventilatory support may be required particularly in the setting of prolonged neurologic injury and thus RSI and mechanical ventilation were included. In case reports, ventilation was only required for a very short time period, if at all, so 72 hours of support was resourced. Critical care level monitoring is required so that vent management can occur in the absence of blood gasses. Chest tube placement was also considered a necessity due to the high risk of pneumothorax and subsequent LOCL. Other significant sequela such as arrhythmia and seizure were considered separate conditions and treatment was not resourced for this condition.

### Communications and Support Needs

In the BC scenario, ground communication about the event would be necessary from an engineering and operations perspective but likely not be necessary to immediate management as the severity injury and risk of long term sequela is minute. In the WC scenario however, ground communication would be vital for the management of the critically ill patient. This would be primarily due to likelihood of needing ventilatory or respiratory support.

### IMM CLIFF RECONCILATION COMMENTS

There is no corresponding condition in the IMM condition list.

### LIMITATIONS SUMMARY

This is a condition that can only occur in vacuum and is therefore extremely rare. There are no systematic studies on ebullism in humans and few case reports that describe its' occurrence and outcomes. The best available data comes from engineering PRA trade studies on large suit leaks while performing ISS EVAs in the EMU. This suit is not the same as the lunar suit, will have different PLSS pressurization systems, and microgravity EVAs likely carry a different risk of suit breach than planetary EVAs. These are all likely to affect the PRA, however, these data represent the best 8/22/2023 6:57:09 PM ICL37_Ebullism Cliff page: 7

available evidence as of December, 2021.

| 8/22/2023 6:57:09 PM | ICL37_Ebullism Cliff | page: 8 |
| -------------------- | -------------------- | ------- |
TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best | 223 | 664 |  | 89 |  |  | 145 |  |  |  |  |  |
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

| Best | 132 |  |  |  |  |  |  | 211 | 1464 | 3763 | 0.389051 | 38.9051 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  |  | 211 | 1464 | 3763 | 0.389051 | 38.9051 |
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

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  | 664 |  | 89 |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| -------------------- | --- | --- | --- | -------------------------- | -------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| 8/22/2023 6:57:09 PM |  |  |  |  | ICL37_Ebullism Cliff |  |  |  |  |  |  | page: 9 |
Total Human

|  |  |  |  | Translation & |  | Total Tasks |  |  |
| --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity | Standing (g) | Equipment Ops |  | Category |  |
| --- | ----- | --- | --------- | -------------- | ------------- | --------- | ---------- | --- |
|  |  |  |  | (microgravity) |  | Condition | Tasks Full |  |

Mission Treated Best

|  |  |  |  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  | 132 |  |  | 196 | 211 | 1292 | 3763 0.343343 | 34.3343 |
| --- | --- | --- | --- | --- | --- | ---- | ------------- | ------- |

Case (TWC) Untreated Worst

|  | 132 564 | 414 | 22 | 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| --- | ------- | --- | --- | ------ | ------ | ---- | ------ | --- |

Case (UTWC)

| 8/22/2023 6:57:09 PM |  |  |  | ICL37_Ebullism Cliff |  |  |  | page: 10 |
| -------------------- | --- | --- | --- | -------------------- | --- | --- | --- | -------- |
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

CP2: No comment. CP3: Persistent neurologic deficits could affect any extremity, in addition to gait and ability to stand. As a middle ground, we have affected only ambulation/standing which is approximately half the TI that the upper extremities carries.

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

8/22/2023 6:57:09 PM ICL37_Ebullism Cliff page: 11

## REFERENCES

Reference

1) Alexander, David J. "Illnesses Seen in Spaceflight 47." Handbook of Bioastronautics: 573.

2) Babich, A. "Tumor Necrosis by Controlled Ebullism." [In eng]. Med Hypotheses 64, no. 2 (2005): 318-9.

https://doi.org/10.1016/j.mehy.2004.03.019.

3) Bacal, Kira, George Beck, and Michael R Barratt. "Hypoxia, Hypercarbia, and Atmospheric Control." Principles of clinical medicine for space

flight (2008): 445-73.

4) Bancroft, R. W., J. P. Cooke, and S. M. Cain. "Comparison of Anoxia with and without Ebullism. Sam-Tr-68-9." [In eng]. Tech Rep SAM-TR (Jul

1967): 1-12.

5) Blatteau, J. E., E. Gempp, C. Balestra, T. Mets, and P. Germonpre. "Predive Sauna and Venous Gas Bubbles Upon Decompression from 400

Kpa." [In eng]. Aviat Space Environ Med 79, no. 12 (Dec 2008): 1100-5. https://doi.org/10.3357/asem.2377.2008.

6) Blue, R. S., S. C. Norton, J. Law, J. M. Pattarini, E. L. Antonsen, A. Garbino, J. B. Clark, and M. W. Turney. "Emergency Medical Support for a

Manned Stratospheric Balloon Test Program." [In eng]. Prehosp Disaster Med 29, no. 5 (Oct 2014): 532-7. https://doi.org/10.1017/s1049023x14000958.

7) Burkard, M. E., and H. D. Van Liew. "Simulation of Exchanges of Multiple Gases in Bubbles in the Body." [In eng]. Respir Physiol 95, no. 2 (Feb

1994): 131-45. https://doi.org/10.1016/0034-5687(94)90111-2.

8) Chappell, Steven P, Jason R Norcross, Andrew FJ Abercromby, Omar S Bekdash, Elizabeth A Benson, Sarah L Jarvis, Johnny Conkin, et al.

"Evidence Report: Risk of Injury and Compromised Performance Due to Eva Operations." (2017).

9) Duncan, Gary. Emu Splat Suit Leak Rates. (09/20/2017 2017).

10) Germonpré, P., and C. Balestra. "Preconditioning to Reduce Decompression Stress in Scuba Divers." [In eng]. Aerosp Med Hum Perform 88,

no. 2 (Feb 1 2017): 114-20. https://doi.org/10.3357/amhp.4642.2017.

11) Johansen, B. D., R. S. Blue, T. L. Castleberry, E. L. Antonsen, and J. M. Vanderploeg. "Point-of-Care Ultrasound for Pulmonary Concerns in

Remote Spaceflight Triage Environments." [In eng]. Aerosp Med Hum Perform 89, no. 2 (Feb 1 2018): 122-29. https://doi.org/10.3357/amhp.4808.2018.

12) Kolesari, G. L., and E. P. Kindwall. "Survival Following Accidental Decompression to an Altitude Greater Than 74,000 Feet (22,555 M)." [In

eng]. Aviat Space Environ Med 53, no. 12 (Dec 1982): 1211-4.

13) Kot, J., Z. Sicko, and T. Doboszynski. "The Extended Oxygen Window Concept for Programming Saturation Decompressions Using Air and

Nitrox." [In eng]. PLoS One 10, no. 6 (2015): e0130835. https://doi.org/10.1371/journal.pone.0130835.

14) Murray, D. H., A. A. Pilmanis, R. S. Blue, J. M. Pattarini, J. Law, C. G. Bayne, M. W. Turney, and J. B. Clark. "Pathophysiology, Prevention,

and Treatment of Ebullism." [In eng]. Aviat Space Environ Med 84, no. 2 (Feb 2013): 89-96. https://doi.org/10.3357/asem.3468.2013.

15) Norfleet, William T. "Options and Plans for Treatment of Decompression Sickness Aboard Space Station Freedom." s DTIC (1990): 315.

16) Parker Jr, James F, and Vita R West. "Bioastronautics Data Book: Nasa Sp-3006." NASA Special Publication 3006 (1973).

17) Randsøe, T. "Effect of Metabolic Gases and Water Vapor, Perfluorocarbon Emulsions, and Nitric Oxide on Tissue Bubbles During

Decompression Sickness." [In eng]. Dan Med J 63, no. 5 (May 2016).

18) Randsøe, T., and O. Hyldegaard. "Treatment of Micro Air Bubbles in Rat Adipose Tissue at 25 Kpa Altitude Exposures with Perfluorocarbon

Emulsions and Nitric Oxide." [In eng]. Eur J Appl Physiol 114, no. 1 (Jan 2014): 135-46. https://doi.org/10.1007/s00421-013-2749-x.

19) Salem, Nagah Atwa. "Surgical Aspects of Space Medicine." International Journal of Medical Arts 1, no. 2 (2019): 119-31.

20) Skowron, Gail, Fiasal, Ali. "Significant Incidents & Close Calls in Human Spaceflight: Eva Operations." nasa.gov, Updated 1/25/2020, 2020,

accessed 9/23/2021, 2021, https://sma.nasa.gov/SignificantIncidentsEVA2018/.

21) Packham, Nigel, Wood, Bill. "Significant Incidents & Close Calls in Human Spaceflight." nasa.gov, Updated 9/30/2019, accessed 12/14/2021,

https://sma.nasa.gov/SignificantIncidents/

22) Steinberg, Susan. 2014 Decompression Sickness/Extravehicular Activity Risks Standing Review Panel. (2015).

23) Tarver, W. J., K. Volner, and J. S. Cooper. "Aerospace Pressure Effects." In Statpearls. Treasure Island (FL): StatPearls Publishing

Copyright © 2021, StatPearls Publishing LLC., 2021.

24) Barratt, MR, et al. (2020). Principles of Clinical Medicine for Space Flight, Springer Nature.

25) Hall, WM and Corey, EL (1949). "Anoxia in Explosive Decompression Injury." Journal of Physiology.

26) Galvagno, SM Jr., et al. (2019). "Advanced Trauma Life Support((R)) Update 2019: Management and Applications for Adults and Special

Populations." Anesthesiol Clin 37(1): 13-32.

27) Greene, M. R. and S. E. Jacobs (2020). "Decompression Sickness Treatment Using a Pressure Suit After Loss of Spacecraft Atmosphere."

Aerosp Med Hum Perform 91(7): 571-577. 8/22/2023 6:57:09 PM ICL37_Ebullism Cliff page: 12

Reference

28) John-Baptiste, A et al. (2006). "Decision Analysis in Aerospace Medicine: Costs and Benefits of a Hyperbaric Facility in Space." Aviation,

Space, and Environmental Medicine.

29) Murray, DH et al. (2013). "Pathophysiology, prevention, and treatment of ebullism." Aviat Space Environ Med 84(2): 89-96.

30) Mayglothling, J et al. (2012). "Emergency tracheal intubation immediately following traumatic injury: An Eastern Association for the Surgery of

Trauma practice management guideline." Journal of Acute Care Surgery.

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

8/22/2023 6:57:09 PM ICL37_Ebullism Cliff page: 13

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

8/22/2023 6:57:09 PM ICL37_Ebullism Cliff page: 14

---

## Source metadata

```yaml
source_filename: "ebullism-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 119"
source_url: "https://drive.google.com/file/d/1qoJtPUFJnL55WswoaStTjuvaCM7pRwMa/view"
source_drive_id: "1qoJtPUFJnL55WswoaStTjuvaCM7pRwMa"
source_sha256: 1d0ef33006b73cdc766918a29c941f3ae643b263529f05ccf8adbb2dceea0c6a
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
