# EVA Related Heat Illness CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1Mf-aUnDJrt4jFJPxQIe5VwH3PM7_907U/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 119

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

### ICL43_Eva Related Heat Illness

Heat illness is the constellation of syndromes that are associated with an elevated core temperature. This CRT specifically relates to exertional heat illness, commonly seen among military recruits and athletes who are exerting themselves in conditions of high temperature and humidity that limit the bodies ability to dissipate heat. Conditions include heat cramps, heat syncope, heat exhaustion, and heat stroke. While on EVA the temperature can vary between -200F in the dark to 300F in the sun and life support systems must maintain crew member temperatures within homeostatic ranges despite these large swings. The ergonomics of the EMU require crew members to heavily exert themselves to perform tasks and thus can generate large amounts of heat that must be buffered by cooling systems. Several Gemini astronauts noted significant overheating while on EVA and future iterations of EVA suits have been adapted accordingly. The most recent iteration of space suit, the xEMU, places emphasis on better heating and cooling systems to prepare for the increased energy expenditure required for frequent EVAs in partial gravity.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

There have been no incidents of EVA related heat illness in spaceflight to date. During the Gemini programs there were several anecdotes of crew members sweating and overheating while on EVA but none suffered any significant signs or symptoms of heat illness. The xEMU has been designed to minimize the risk of overheating based on engineering parameters. The PRA team that determines risk of engineering failure for the xEMU was consulted and provided the risk that each of 4 redundant systems would fail which allowed for calculation of incidence of suit cooling failure. This in turn was used as a surrogate for incidence of heat illness as this condition can only occur in the setting of engineering failure.

### ANALOG LITERATURE

No analog data was used in this condition

### TERRESTRIAL LITERATURE

There are numerous terrestrial studies evaluating the incidence of exertional heat illness. These are either population based studies of all-comers visits to the emergency department or are looking at a specific cohort exposed to extreme environmental conditions while performing physical activity. Incidences range from 2.5/100,000 person years in population studies to 2.3/1000 in an endurance race cohort study. The large variability seen within exertional heat illness literature is likely due to the correlation with environmental conditions and exercise requirements. On EVA environmental conditions are maintained within a narrow homeostatic range and thus these terrestrial studies have limited external validity when applied to spaceflight.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 7.406E-13 events per EVA SD 8.507E-13

### INCIDENCE SUMMARY

The incidence proportion distribution for EVA-related Heat Illness is Beta(shape1=0.7578871, shape2=1.023318e+12) with mean 7.406E-13 and 8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 1

SD 8.507E-13 events per EVA. This distribution was estimated using simulation based on distributions developed for each hardware system. Either hardware within each system failing leads to system to failure. All systems need to fail to cause heat-related illness.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

EVA Segment

### EVA All

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Beta Mean 7.40617E-13 SD 8.5073E-13 Beta (Alpha): 0.757887 (Beta): 1.02332E+12 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Dagroot, D and Martin, R. 2015 Terrestrial 2 Demartini, JK et al. 2014 Terrestrial 2 Dickinson, JG 1994 Terrestrial 2 Carter, R et al. 2005 Terrestrial 2 Alele, F et al. 2019 Terrestrial 2 Nelson, NG et al. 2011 Terrestrial 2 xEMU PRA Spaceflight 4 There are countless studies looking at the incidence and prevalence of exertional heat related illness terrestrially. They give wide ranges of incidence primarily due to the changes in environmental exposures suffered by each group. Studies such as Dagroot, D 2015, Dickinson, JG 1994, Carter, R et al. 2005 were all military studies among recruits during training drills occurring in high temperatures and humidity. Demartini, JK et al. 2014 included runners from a notoriously difficult endurance race. Alele, F et al. 209 and Nelson, NG et al. 2011 were population based studies that looked at allcomers seeking hospital treatment. Environmental conditions, hydration status, and activity are all correlated to heat illness and as such these terrestrial studies are less indicative of a crew members risk. Heat illness during EVA will be entirely dependent on a suit cooling failure and as such the xEMU PRA group data on failure rates of different components will be the gold standard for calculating incidence. 8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

There are no preflight screening measures available for prevention of EVA heat illness. Poor cardiovascular fitness, medical comorbidities, and age are all correlated to heat illness and there are general health and fitness standards for astronauts. However, no specific standards or screening are available to reduce the risk of this condition

### BEST CASE SCENARIO DEFINITION

Heat cramps, or heat exhaustion responsive to stopping activity and hydration.

### WORSE CASE SCENARIO DEFINITION

Heat stroke (body core temperature > 40°C).

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

EVA Related - Heat cramps EVA Related - Heat Exhaustion EVA Related - Heat Stroke

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Terrestrial data provides a range from 1.8% (Nelson, NG et al. 2011) to 13.6%(Dagroot, D and Martin, R. 2015) of heat stroke as a proportion of all heat illness. Other studies evaluated fall between these values. Incidence of heat illness and severity (i.e. proportion of heat stroke) is heavily correlated with environmental conditions and has considerable variability among studies. Thus 90:10 BC:WC proportion was chosen as an approximate ratio based on the range of data available.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Dagroot, D. and Martin, R. 2015 Terrestrial 2 Dickinson, JG 1994 Terrestrial 2 Alele, F et al. 2019 Terrestrial 2 Nelson, NG et al. 2011 Terrestrial 2 The referenced terrestrial studies received a score of 2. All studies reviewed evaluated prevalence of heat stroke and provided ranges from approximately 2-12%. None of these studies were specific to the spaceflight environment and were dependent on extreme environmental factors which is less applicable to the environmental controls of EVA. As such they may not be accurate representations of BC:WC scenario in flight. 8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

Condition Case Scenario Composite Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 7.406E-13 90 - 90 100 0.91 19.2665 4 24 0 0 0 0 0 Case (TBC) events per EVA SD 8.507E-13 Treated Worst 10 - 10 100 1.25 50 24 504 0 7 100 0 1 Case (TWC) Untreated Best N/A N/A N/A 0.91 69.2665 24 72 100 0 0 0 0 Case (UTBC) Untreated N/A N/A N/A 1.25 100 168 1104 100 100 100 6 100

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

EVA related heat illness is the result of suit colling failure and over heating of a crew member. As crew core temperature rises so does the severity of symptoms. While on EVA, the management of a crew member suffering from heat illness and heat stroke would be extremely limited and would require evacuation to host ship or habitat for cooling and hydration. Cooling can occur both passively and actively depending on severity of symptoms and available resources. Cold water submersion is a common treatment for severe illness however this is not a feasible approach in flight. More likely would be evaporative cooling which is possible with current resource limitations and has been shown to be effective.. Rapid return to core temperature normothermia can be definitive management with this medical condition however delays result in worsening organ injury. One common error of management is over cooling and resulting hypothermia which should be carefully avoided. RTDC in this case is defined as hospitalization or end organ injury. This surrogate was chosen because heat illness can present in broad severity from mild and self limited without intervention to critical care management and multiorgan failure.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The best case scenario for EVA related heat illness is defined as heat cramps, or heat exhaustion responsive to stopping activity and hydration.

Given this definition the duration is assumed to be between 4-24 hours based on expert opinion and Nelson, NG et al. 2011 which noted that 90% of all severities of heat stroke were discharged without hospital admission. This cohort likely represents this scenario. The RTDC surrogate was hospitalization and incidence was assumed to be zero given the definition of BC . The LOCL was also assumed to be zero in the treated mild heat illness patient. TREATED WORST CASE SCENARIO (TWC) COMMENTS The definitions of the worst case scenario is heat stroke (body core temperature > 40°C). The duration of heat stroke was determined to be 24 hours to 3 weeks in length. DiMartini, JK et al. 2014 showed that immediate cold water immersion among endurance athletes suffering from heat stroke can rapidly cool core temperature and had a mortality rate of 0% among a young cohort that is representative of a crew member. Duration of illness at a minimum was assumed to be 24 hours for recovery before return to duty. Dickinson, JG 1994 showed a more protracted course. While 83% of service members with heat illness did not require hospitalization, 5% required 3 weeks of inpatient treatment. This is likely a severely ill cohort with end organ damage and may not represent the typical heat stroke patient. Thus 3 weeks was chosen as the maximum treatment time.

RTDC is defined as hospitalization or end organ injury. Guideline including the Wilderness Medicine Society recommend hospitalization for anyone suffering from heat stroke. This is standard of care but is likely overly conservative during spaceflight given the resources needed. DiMartini showed that cold water immersion cut their hospital transportation to only 7% if initiated rapidly and evaluated by a physician. This is an outlier from traditional teaching but also represents a more realistic approach to management in the austere setting. LOCL was assumed to be 0% due to this same DiMartini study and a maximum of 1% based on military data from Dickinson, JG et al. 1994 UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The best case scenario for EVA related heat illness is defined as heat cramps, or heat exhaustion responsive to stopping activity and hydration. In the treated scenario it was assumed that intentional oral rehydration and rest would result in a duration of 4-24 hours of symptoms based on expert opinion and Nelson, NG et al. 2011 which noted 90% of patients were discharged home from the emergency department without admission. Rest and oral intake is a standard operational step after EVA and was not assumed to be treatment, however intentional extended rest or increased oral rehydration outside of nominal operations was assumed to be. As such, the duration of symptoms was assumed to be longer in the untreated BC scenario when compared to the treated cohort. The final outcome of complete recovery without RTDC or LOCL however was assumed to be the same as the treated cohort given the definition of best case scenario that notes response to rest and hydration. Duration was expected to be between 24-72 hours based on expert opinion and Nelson, NG et al. 2011. RTDC and LOCL were both accepted to be 0.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The definitions of the worst case scenario is heat stroke (body core temperature > 40°C). The duration of heat stroke was determined to be 7 days to 46 days in duration based on Carter, R et al . 2005 and length of hospital stay data. Average admission time was 2.5d +/-4.5 days for all comers who received treatment including ICU care if needed. Maximum stay was 46 days among this cohort and thus this range was chosen to reflect the UTWC. RTDC is defined as hospitalization or end organ injury. Guideline including the Wilderness Medicine Society recommend hospitalization for anyone suffering from heat stroke. In the patient that suffers from heat stroke but is untreated from presumed lack of capability, a 100% RTDC would be necessary. LOCL was determined from Dickinson, JG which had a mortality rate of 6% among army recruits with heat stroke. This included treated patients. Literature on untreated heat stroke was not available due to the ethics of withholding care in a life threatening condition. A patient who is altered and severely hyperthermic who does not receive any treatment may have up to a 100% mortality rate and thus this maximum was chosen although it is likely an overestimate.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC) 8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 5

| Citation | Source | LOC Value |
| ------------------------- | ----------- | --------- |
| Nelson, NG et al. 2011 | Terrestrial |  |
| Dickinson, JG 1994 | Terrestrial |  |
| Demartini, JK et al. 2014 | Terrestrial | 2 |
| Carter, R et al. 2005 | Terrestrial |  |
| Expert opinion | Terrestrial |  |

Nelson, NG et al. 2011, Dickinson, JG et al 1994, Demartini, JK et al. 2014, and Carter et al. 2005 are all studies evaluating heat stroke among individuals heavily exerting themselves in severe environmental conditions. All studies are well designed but are specific to a cohort within certain temperature and activity parameters. As such they may not be accurate to spaceflight conditions as crew members are maintained within very narrow temperature ranges. TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ------------------------- | ----------- | --------- |
| Demartini, JK et al. 2014 | Terrestrial |  |
| Lipman, GS et al. 2019 | Terrestrial | 2 |
| Expert opinion | Terrestrial |  |

Lipman, GS et al. 2019 sets the wilderness medicine guidelines for heat illness. They recommend hospital evaluation for all patients with exertional heat stroke. Standard of care is admission for these patients given the level of monitoring required and risk of end organ injury. However, many studies and guidelines reference Demartini, JK et al. 2014 which showed a significant reduction in hospitalization if early aggressive cold immersion is initiated for patients with heat illness. These studies set terrestrial standards for management but may not be applicable to the spaceflight environment depending on resources available.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ------------------------- | ----------- | --------- |
| Demartini, JK et al. 2014 | Terrestrial |  |
| Dickinson, JG 1994 | Terrestrial | 2 |
| Expert opinion | Terrestrial |  |

Demartini, JK et al. 2014 and Dickinson, JG 1994 evaluated mortality rate among members exerting themselves in severe heat conditions. This is likely not entirely applicable to the space flight environment given the engineering redundancies in place to limit severe injury or death.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Heat illness is the constellation of syndromes that is associated with an elevated core temperature. This CRT specifically relates to exertional heat illness, which includes heat cramps, heat syncope, heat exhaustion, and heat stroke. As with other EVA conditions, the prevention and management of this condition is significantly dependent on engineering to maintain a homeostatic environment and thus this condition will only occur in the setting of engineering failure.

The best case scenario is defined as a crew member on EVA who suffers heat cramps or heat exhaustion that responds to stopping activity and hydration. The worse case scenario is heat stroke with a core temperature above 40C and neurologic symptoms.

- CNES: Heat cramps, heat exhaustion, heat stroke, heat syncope

### Diagnostic Scope and Resourcing

In the best case scenario the diagnosis is made clinically based on history and exam alone. This is consistent with terrestrial standards.

In the worst case scenario the diagnosis is made clinically based on history and physical but includes POC glucose as a crew members mental 8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 6

status will limit history, and to rule out hypoglycemia. This is similar to terrestrial standards. There are instances in which a terrestrial patient who is hyperthermic and has altered mental status may receive a much broader workup for alternative pathology. However, a straight forward presentation of exertional heat stroke is commonly made with clinical evaluation alone. Evaluation for hyponatremia was considered however this was excluded as it was considered a complication to the condition (i.e. often due to large free water intake during exertion) rather than part of heat stroke itself.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated):0.91 CP1 WC (Treated or Untreated): 1.25 The highest scope of practice required is level 4 (Intern) due to the complexity and time sensitivity of the condition

### Treatment Scope and Resourcing

In the best case scenario, treatment of heat cramps and heat exhaustion will include termination of EVA, external cooling, and PO electrolyte containing fluids. This is equivalent to terrestrial standards.

In the worst case scenario, treatment of heat stroke will include termination of EVA, external cooling, and cold IV fluids. Other than cold IV fluids, internal cooling was excluded due to the efficacy of rapid external cooling and the lack of clear benefit when compared to external cooling alone in the treatment of heat stroke. Fridge ration is necessary for cooling IV fluid which may or may not be a standard part of ship design.

Terrestrial external cooling traditionally occurs via cold water submersion or evaporative cooling. Due to the logistical constraints of creating a cold water tub, submersion was excluded as a potential approach to rapid cooling in flight. Evaporative cooling with mist and fans, augmented with ice or cold towels to the core can be effective without the same logistical challenges.

### Communications and Support Needs

While real-time video and audio loop communications are desired for diagnosis and treatment, they were not considered a necessity. Rapid cooling and rehydration are the mainstays of treatment and can be accomplished without realtime guidance.

## REFERENCES

Alele, F., et al. (2020). "Systematic review of gender differences in the epidemiology and risk factors of exertional heat illness and heat tolerance in the armed forces." BMJ Open 10(4): e031825.

American College of Sports, M., et al. (2007). "American College of Sports Medicine position stand. Exertional heat illness during training and competition." Med Sci Sports Exerc 39(3): 556-572.

Bedno, S. A., et al. (2010). "Exertional heat illness among overweight U.S. Army recruits in basic training." Aviat Space Environ Med 81(2): 107-111.

Belobrajdic, B., et al. (2021). "Planetary extravehicular activity (EVA) risk mitigation strategies for long-duration space missions." NPJ Microgravity 7(1): 16. Carter, R. (2008). "Exertional Heat Illness and Hyponatremia: and Epidemiological Prospective." Current Sports Medicine Reports 7.

Carter, R., 3rd, et al. (2005). "Epidemiology of hospitalizations and deaths from heat illness in soldiers." Med Sci Sports Exerc 37(8): 1338-1344.

Dagroot, D. and R. Martin (2015). Within Year Exertional Heat Illness Incidence in U.S. Army Soldiers, 2008-2012, Army Public Health Center.

Demartini, J. K., et al. (2015). "Effectiveness of cold water immersion in the treatment of exertional heat stroke at the Falmouth Road Race." Med Sci Sports Exerc 47(2): 240-245. Dickinson, J. G. (1994). "Heat Illness in the Service." Journal of Royal Medical Corps(140): 7-12.

Gamage, P. J., et al. (2020). "Epidemiology of exertional heat illnesses in organised sports: A systematic review." J Sci Med Sport 23(8): 701-709.

Gardner, J. W., et al. (2002). "Nontraumatic Exercise-Related Deaths in the U.S. Military, 1996-1999." Military Medicine.

Gubernot, D. M., et al. (2014). "The epidemiology of occupational heat exposure in the United States: a review of the literature and assessment of research needs in a changing climate." Int J Biometeorol 58(8): 1779-1788.

Lipman, G. S., et al. (2014). "Wilderness Medical Society practice guidelines for the prevention and treatment of heat-related illness: 2014 update." Wilderness Environ Med 25(4 Suppl): S55-65.

Lipman, G. S., et al. (2019). "Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2019 Update." Wilderness Environ Med 30(4S): S33-S46.

Nakamura, S. and T. Aruga (2013). "Epidemiology of Heat Illness." Japanese Medical Association.

Nelson, N. G., et al. (2011). "Exertional heat-related injuries treated in emergency departments in the U.S., 1997-2006." Am J Prev Med 40(1): 54- 60. Pryor, R. R., et al. (2015). "Medical Evaluation for Exposure Extremes: Heat." Wilderness Environ Med 26(4 Suppl): S69-75.

Schlotman, T. E., et al. (2019). "Bridging the gap between military prolonged field care monitoring and exploration spaceflight: the compensatory reserve." NPJ Microgravity 5: 29. Waligora, J. M., et al. (1975). Apollo Experience Report - Assessment of Metabolic Expenditures, Lyndon B. Johnson Space Center.

Wallace, R. F. (2003). Risk Factors and Mortality in Relation to Heat Illness Severity, U.S. Army Research Institute of Environmental Medicine. 8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 7

Yaglou, C. P. and D. Minard (1956). Prevention of Heat Casualties at Marine Corps Training Centers.

### IMM CLIFF RECONCILATION COMMENTS

No prior IMM CLIFF exists for this condition

### LIMITATIONS SUMMARY

- Heat illness is significantly correlated if not entirely dependent on high environmental temperatures, humidity, and workload. On EVA these 3

factors are regulated by engineering systems and operational rules. Terrestrial literature therefore is inherently not accurate when evaluating the incidence of this condition. • There are 4 redundant cooling systems within the xEMU specifically to reduce the risk of overheating during EVA to as close to 0 as possible. This medical condition is effectively mitigated by engineering design and may not require medical risk assessment • Treatment for heat illness involve rapid cooling and hydration. By default, a crew member overheating on EVA would be cooled to ambient ship temperatures and would rehydrate with normal oral intake. Untreated scenarios likely overestimate RTDC and LOCL as the simple act of returning from EVA and initiating nominal activity would provide therapeutic benefit 8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 |  | 89 |  |  | 145 |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  | 89 |  |  | 145 |  | 13 |  |  |  |
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

| Best | 132 |  |  |  | 196 |  |  | 211 | 1450 | 3763 | 0.385331 | 38.5331 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  |  | 196 |  |  | 211 | 1450 | 3763 | 0.385331 | 38.5331 |
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

8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 9

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

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTBC) Treated Worst

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 10

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

8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 11

## REFERENCES

Reference Alele, F., et al. (2020). "Systematic review of gender differences in the epidemiology and risk factors of exertional heat illness and heat tolerance in the armed forces." BMJ Open 10(4): e031825.

American College of Sports, M., et al. (2007). "American College of Sports Medicine position stand. Exertional heat illness during training and competition." Med Sci Sports Exerc 39(3): 556-572.

Bedno, S. A., et al. (2010). "Exertional heat illness among overweight U.S. Army recruits in basic training." Aviat Space Environ Med 81(2): 107- 111. Belobrajdic, B., et al. (2021). "Planetary extravehicular activity (EVA) risk mitigation strategies for long-duration space missions." NPJ Microgravity 7(1): 16. Carter, R. (2008). "Exertional Heat Illness and Hyponatremia: and Epidemiological Prospective." Current Sports Medicine Reports 7.

Carter, R., 3rd, et al. (2005). "Epidemiology of hospitalizations and deaths from heat illness in soldiers." Med Sci Sports Exerc 37(8): 1338-1344.

Dagroot, D. and R. Martin (2015). Within Year Exertional Heat Illness Incidence in U.S. Army Soldiers, 2008-2012, Army Public Health Center.

Demartini, J. K., et al. (2015). "Effectiveness of cold water immersion in the treatment of exertional heat stroke at the Falmouth Road Race." Med Sci Sports Exerc 47(2): 240-245. Dickinson, J. G. (1994). "Heat Illness in the Service." Journal of Royal Medical Corps(140): 7-12.

Duncan, G., et al. (2021). EVA Dehydration Heat Illness PRA Input. Artemis Risk Analysis. Houston, Texas, Probable Risk Assessment Team.

Gamage, P. J., et al. (2020). "Epidemiology of exertional heat illnesses in organised sports: A systematic review." J Sci Med Sport 23(8): 701-709.

Gardner, J. W., et al. (2002). "Nontraumatic Exercise-Related Deaths in the U.S. Military, 1996-1999." Military Medicine.

Gubernot, D. M., et al. (2014). "The epidemiology of occupational heat exposure in the United States: a review of the literature and assessment of research needs in a changing climate." Int J Biometeorol 58(8): 1779-1788.

Lipman, G. S., et al. (2014). "Wilderness Medical Society practice guidelines for the prevention and treatment of heat-related illness: 2014 update." Wilderness Environ Med 25(4 Suppl): S55-65.

Lipman, G. S., et al. (2019). "Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2019 Update." Wilderness Environ Med 30(4S): S33-S46.

Nakamura, S. and T. Aruga (2013). "Epidemiology of Heat Illness." Japanese Medical Association.

Nelson, N. G., et al. (2011). "Exertional heat-related injuries treated in emergency departments in the U.S., 1997-2006." Am J Prev Med 40(1): 54-60. Pryor, R. R., et al. (2015). "Medical Evaluation for Exposure Extremes: Heat." Wilderness Environ Med 26(4 Suppl): S69-75.

Schlotman, T. E., et al. (2019). "Bridging the gap between military prolonged field care monitoring and exploration spaceflight: the compensatory reserve." NPJ Microgravity 5: 29. Waligora, J. M., et al. (1975). Apollo Experience Report - Assessment of Metabolic Expenditures, Lyndon B. Johnson Space Center.

Wallace, R. F. (2003). Risk Factors and Mortality in Relation to Heat Illness Severity, U.S. Army Research Institute of Environmental Medicine.

Yaglou, C. P. and D. Minard (1956). Prevention of Heat Casualties at Marine Corps Training Centers.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

### CAC Coronary Artery Calcium

8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 12

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

### LSAH Lifetime Surveillance of Astronaut Health

### LSO Lunar Surface Operations

### MCL Master Condition List

### MEVA Medical Extravehicular Activity

### NASA National Aeronautics and Space Administration

### N/A Not Applicable

### NP Nurse Practitioner

8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 13

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

8/23/2023 5:46:41 PM ICL43_Eva Related Heat Illness Cliff page: 14

---

## Source metadata

```yaml
source_filename: "eva-related-heat-illness-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 119"
source_url: "https://drive.google.com/file/d/1Mf-aUnDJrt4jFJPxQIe5VwH3PM7_907U/view"
source_drive_id: "1Mf-aUnDJrt4jFJPxQIe5VwH3PM7_907U"
source_sha256: 5b76658444c6c8e1931ca815bccfb1b1084318fc87fc9d291160ea3b73030b26
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
