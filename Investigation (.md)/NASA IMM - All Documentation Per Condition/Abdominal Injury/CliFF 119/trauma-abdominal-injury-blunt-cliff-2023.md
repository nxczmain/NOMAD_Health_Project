# Trauma Abdominal Injury Blunt CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1axwveukCR2DQppDZUC0oxVF7L-8iewzB/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Abdominal Injury/CliFF 119

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

ICL112_Trauma - Abdominal Injury (Blunt)

Trauma injuries, in general, account for 8% of terrestrial mortality (WHO 2021), and are one of the leading causes of death for those under age 45.

Blunt abdominal trauma (BAT) makes up a significant proportion of these injuries and can be as benign as acute abdominal pain or abdominal wall bruising, or can lead to serious organ or vascular injury. Injury to abdominal organs occurs through several mechanisms including but not limited to crush injuries from direct trauma, transmission of stress waves from direct trauma, or shear injury from deceleration. Such complications from blunt injuries may not always be immediately clinically apparent, thus making diagnosis, especially in a resource-limited setting, important. However, as BAT encompasses a heterogenous group of injuries, management can range from expectant management to immediate need for surgical intervention. In this CLiFF we explore acute blunt abdominal traumas that may occur during spaceflight, namely during surface operations.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

There have been 6 reported cases of truncal injuries during spaceflight, but there was no specification as to location or severity of the trauma.

Thus, this information was not informative.

### ANALOG LITERATURE

Often, the analog literature features a deployed military population in a resource poor or isolated setting which shares many common traits with our astronaut population, however, looking at trauma incidence and severity in a military population is not a valid analog as the type of operations are very different. We unfortunately do not have incidence data on possible blunt abdominal traumas in our Antarctic research stations which is another commonly used analog.

### TERRESTRIAL LITERATURE

The incidence rate for blunt abdominal trauma is based on the 2016 National Trauma Data Bank (American College of Surgeons, 2016) which reviewed nationally-reported traumas from 2015 in the U.S. More recent data could not be used as this reporting format was retired in 2016. In 2015, there were 100,996 overall incidents of abdominal trauma. We excluded incidents with mechanisms of injury unlikely to occur among our crew population or that would result in penetrating abdominal trauma as this is not included in our condition definition, such as motor vehicle traffic (26%), pedal/cyclist (2%), other transport (5%), cut/pierce (4%), and fire arms-related (4%) abdominal injuries. Unfortunately, we couldn’t access the actual database numbers to perfectly review all of the cases placed into these exclusions; however, we can estimate it by assuming independence of the mechanism and injury location. Thus, we estimate that 56% (56,558/100,996) of overall BAT injuries in the 2016 NTDB may remain relevant to spaceflight. As, the US census reports a 2015 resident population (U.S. Census Bureau, 2015) of 316,515,021, using this terrestrial incidence gives us an IR of 1.787E-4 (95%CI: 1.772E-4, 1.802E-4).

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 1.787E-4 and SD 7.607E-7

### INCIDENCE SUMMARY

6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 1

The Bayesian posterior distribution for the incidence rate given the National Trauma Bank evidence, under an uninformative prior, is Gamma(shape=55185.16, rate=308814526) with mean 1.787E-4 and SD 7.607E-7. The incidence rate only applies during surface operations and is assumed to be zero during microgravity operations.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

UNK Segment Surface Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0001787 SD 7.607E-07 Gamma (Shape): 55185.2 (Rate): 3.08815E+08 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Ball, 1996 Terrestrial 2 Abo-Elhoda, 2021 Terrestrial 2 Abri, 2016 Terrestrial 2 Davis, 1976 Terrestrial 2 Pande, 2017 Terrestrial 2 Level of confidence is neutral for the incidence calculated from these sources. First, the data from these sources are terrestrial data gathered from the entire U.S. population which is unlikely to be representative of the astronaut population. Second, several assumptions were made in calculating the incidence. We excluded mechanisms of injury reported in the National Trauma Data Bank that we felt were unlikely to occur in spaceflight and those we believe would be more likely to cause penetrating abdominal trauma. However, even our estimate may be conservative in that the incidence of this condition during flight in microgravity may be even more rare as circumstances leading to damaging blunt abdominal trauma are hard to imagine outside of a catastrophe. Therefore, the incidence should be applied only to surface operations. However, during an EVA, the hard upper torso (HUT) would provide some protection against these injuries also leading to a conservative incidence estimate. Currently MEDPRAT does not have the capability to exclude surface EVA time from surface operations, but in the future this is recommended when the capability exists. 6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

There are no pre-flight preventive screening measures based on MR/MedBs/MRIDs to be applied to this condition.

### BEST CASE SCENARIO DEFINITION

Blunt abdominal trauma resulting in localized pain/discomfort and/or ecchymosis, with no hollow or solid organ involvement and no evidence of peritonitis or bleeding, requiring only supportive treatment.

### WORSE CASE SCENARIO DEFINITION

Blunt abdominal trauma that causes abdominal visceral damage with possible secondary complications of internal bleeding, mesenteric injury, or peritonitis. (Note Sepsis and Traumatic Hypovolvemic Shock are separate conditions).

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Trauma (Blunt) - Peritonitis Trauma (Blunt) - Mesenteric Injury

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The best and worst case probabilites were determined by averaging the incidences of intra-abdominal injuries from blunt abdominal trauma consistent with the worst case definition from several terrestrial studies (Ball, 1996, Abo-Elhoda, 2021, Davis, 1976, Abri, 2016, Pande, 2017, and Ismail, 2020). These studies have demonstrated incidences of intra-abdominal injury by specific organ in blunt abdominal trauma, and provided the percentage chance of mesenteric or hollow viscus injury, hepatobiliary injury, splenic injury, vascular injury, and the percentage that required surgery, however, there is a large variation between them ranging from 6-42% of cases meeting our worst case probability definitions. If only using these studies, a worst case probability average of 25% (as previously chosen with the IMM) would be reasonable, however, this is likely conservative given that many of the traumas leading to a WC diagnosis in these studies came from traumas we excluded in our incidence (such as motor vehicle accidents, etc.) and may be in age groups that are not reflective of the astronaut population. Using the information gathered from the National Trauma Data Bank, we estimate that 56% of these WC cases would need to be removed, thus giving us a remaining WC percentage estimation of 14%. Importantly, a strong limitation of our incidence and BC/WC data is that the numbers used from all of these studies only include patients that are hurt badly enough to present to a hospital in the first place. If looking at the BC definition in isolation, it is possible that patients with localized pain or bruising may not even go to the hospital following a blunt abdominal trauma, however, for the purposes of this CLiFF and the data chosen, we are making an assumption that even a best case scenario blunt abdominal trauma is bad enough to at least warrant evaluation in the hospital. TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Ball, 1996 Terrestrial 2 Abo-Elhoda, 2021 Terrestrial 2 Abri, 2016 Terrestrial 2 Davis, 1976 Terrestrial 2 Pande, 2017 Terrestrial 2 Ismail, 2020 Terrestrial 2 Level of confidence is neutral for the best- and worst-case probabilities. While addressed above in the BC/WC prose, all studies analyzed are terrestrial studies with a population that is not likely to be representative of the astronaut population (e.g. several patients are >70 years old).

Further, many of the abdominal injuries in the studies were caused by mechanisms of injury that are irrelevant in spaceflight (e.g. motor vehicle accident). 6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 1.787E-4 86 - 86 100 1.4 3.25538 0 23 0 0 0 0 0 Case (TBC) and SD 7.607E-7 Treated Worst 14 - 14 100 1.67 50 175.2 2880 0 13.7 20 13 15.6 Case (TWC) Untreated Best N/A N/A N/A 1.4 22.4422 0 336 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.67 100 1008 2880 100 20 100 15.6 31 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

As described above, we believe that the predominance of any injuries would occur during EVAs and that the astronaut would be wearing the HUT which may provide some protection. While microgravity and partial gravity would likely decrease the severity of blunt abdominal trauma, it is unknown what scenarios may lead to such traumas at present.

TREATED BEST CASE (TBC) SCENARIO COMMENTS By definition, the best case scenario is blunt abdominal trauma causing localized pain and/or ecchymosis requiring only supportive care. The current standard of care for uncomplicated blunt abdominal trauma is a 23-hour observation period, though a retrospective cohort study demonstrated that a mean observation period of only 9.5 hours was necessary (Kendall, 2011). The minimum and maximum duration were therefore assigned as 0 and 23 hours, respectively. There is no evidence available for RTDC or LOCL for best case scenario, so RTDC is assumed to be 0% since uncomplicated blunt abdominal trauma does not require surgery and LOCL is also assumed to be 0%.

TREATED WORST CASE SCENARIO (TWC) COMMENTS Once article (Sawhney, 2014) found an average ICU length of 7.3 days for patients admitted with solid organ damage from blunt abdominal trauma, which represents the minimum TWC duration. Another article (Adam, 2018) recommends return to contact sports which is a surrogate for full return of function including EVAs after 3-4 months for athletes with organ (splenic or hepatic) injury, which represents the maximum TWC duration. This article also states that splenic injury typically resolves in 2-2.5 months and hepatic injury resolves within months, so the longer duration of 4 months was used as the maximum duration in the worst case. RTDC was defined by patients with blunt abdominal trauma requiring surgery, and the percentage of patients requiring surgery ranged from 13.7% (Ward, 2015) to 20% (Prachalias, 2014 and Letoublon, 2016). LOCL ranged from 13% (Kaptanoglu, 2017) to 15.55% (Sawhney, 2014) as these were mortality rates with solid organ injury.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The minimum UTBC duration was assumed to be the maximum TBC duration which is 23 hours. The maximum UTBC duration of 2 weeks was found in Adam et al 2018 which recommended return to play after 1-2 weeks for athletes with rectus sheath hematoma which is a mild to moderate abdominal wall injury. There is no evidence available for RTDC or LOCL for untreated best case scenario, but it is safe to assume that both RTDC and LOCL for UTBC are zero, since uncomplicated abdominal trauma will not require surgery or cause mortality.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The minimum and maximum UTWC duration are again represented by the shortest and longest duration of return to play for intra-abdominal injuries in athletes (Adam, 2018) as this is an analog for astronauts needing to complete tasks such as an EVA. Kidney injury has the shortest recommended return to play of 6-8 weeks, so 6 weeks was used as minimum duration. Splenic and hepatic injury have the longest return to contact sport of 3-4 months, so 4 months was used as maximum duration. There is no available evidence for RTDC for untreated worst-case scenario. We assume the RTDC is greater than or equal to the maximum TWC RTCD which is 20% (Prachalias, 2014 and Letoublon, 2016). Especially without treatment, the WC RTDC rate would be 100%. Minimum UTWC LOCL is assumed to be the maximum TWC LOCL which is 15.55% (Sawhney, 2014). The maximum UTWC LOCL is estimated at 31% based on a retrospective chart review that demonstrated a mortality of 31% for patients with blunt small bowel injury with a diagnostic delay of >24 hours (Fakhry, 2000).

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Kendall, 2011 Terrestrial Sawhney, 2014 Terrestrial 2 Adam, 2018 Terrestrial One article (Kendall, 2011) is a retrospective cohort study in patients presenting with blunt abdominal trauma with negative evaluations in the ED who were admitted for observation, per the ED protocol. This study found that none of the patients admitted for observation were diagnosed with 6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 5

intra-abdominal injury and had an average observation period of 9.5 hours, which is less than the 23-hour observation that is often standard. This data was used for treated best case duration and used for the minimum duration for untreated best case, given there is no evidence for duration of untreated best case. The second article (Sawhney, 2014) is a retrospective cohort study of patients with solid organ injury that found an average ICU stay of 7.3 days, and this data was used for duration of treated worst case duration and for minimum duration for untreated worst case, given there is no evidence for duration of untreated worst case. However, 4% of the patient population experienced penetrating rather than blunt abdominal trauma. Given the articles cited are both terrestrial studies with population samples that may not be representative of the astronaut population and that there is no evidence for untreated cases, the level of confidence assigned to these studies is neutral.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Ward, 2015 Terrestrial 2 Prachalias, 2014 Terrestrial There is no evidence available for RTDC for best case; however, given the definitions it is assumed to be 0. All three articles for worst case RTDC are review articles in terrestrial populations that are limited in their representation of the astronaut population. One review article (Ward, 2015) found that 13.7% of blunt liver injuries are managed operatively. We are using need for operative management as the surrogate for RTDC.

Although liver injury is only one example of a complication of blunt abdominal trauma, liver injury is the most common complication, so this represents the worst case fairly well. Another review article (Prachalias, 2014) found that 20% of blunt abdominal traumas require operation. This number may underestimate RTDC for worst case since it includes both best case and worst case blunt abdominal trauma and best case is unlikely to require operation. Minimum RTDC for untreated for worst case is based on these articles given there is no evidence available. Overall, given these limitations, our LOC would be neutral.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Sawhney, 2014 Terrestrial Kaptanoglu, 2017 Terrestrial 2 Fakhry, 2000 Terrestrial There is no evidence available for LOCL for best case. All three articles for worst case LOCL are terrestrial studies in populations that may not be representative of the astronaut population. One retrospective cohort study (Sawhney, 2014) found a mortality rate of 15.6% in patients with solid organ injury admitted to the ICU. This number is not a perfect representation of treated worst case LOCL, because 4% of the patients experienced penetrating rather than blunt abdominal trauma. This number may also overestimate LOCL, because the mortality rate was calculated in ICU patients who are likely sicker. Another retrospective cohort study (Kaptanoglu, 2017) found a mortality rate of 13% in patients presenting to the ED with blunt abdominal trauma. The article used for untreated worst case is a retrospective cohort study (Fakhry, 2000) that found a mortality rate of 31% in patients with blunt small bowel injury who had diagnostic delays of >24 hours. This article is not a perfect representation of worst case, since small bowel injury is only one example of a complication of blunt abdominal trauma. Thus, our overall LOC for LOCL is again neutral.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Overview Blunt abdominal trauma involves injury to the solid or hollow viscous organs and may involve hemorrhage, perforation, or rupture. A significant injury in flight is likely to confer a very high rate of morbidity and mortality due to the limited resources available. Surgical capabilities will be limited to very simple procedures which do not include exploratory laparoscopy. Diagnosis and management in the austere setting is often very limited because of these factors. CNES: Peritonitis, Mesenteric Injury Diagnostic Scope and Resourcing In the best case scenario, diagnosis is heavily dependent on history and physical exam. Per ATLS guidelines a primary and secondary survey with initial basic vital signs is necessary to identify location and severity of injury. Trauma society guidelines are heavily dependent on CT scan as the next phase of evaluation in the stable trauma patient however this capability is unavailable in flight. Ultrasound is a necessary diagnostic modality to identify injuries in the absence of radiography. Ultrasound is substantially worse at identifying abdominal injuries in trauma but limited surgical capabilities make identification of small injuries less valuable regardless. The Extended Focused Assessment of Sonographic Trauma (EFAST) will be used instead to identify significant injuries and guide management. Diagnosis of blunt abdominal trauma in the worst case scenario is very similar to the best case scenario. It relies on history, primary and secondary survey, and the EFAST exam. It includes a CBC evaluation as well to help identify the severity of injury and observe for hollow viscous injury in addition. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1.4 CP1 WC (Treated or Untreated): 1.67 The highest scope of practice for this condition is 4 (intern physician) for both the BC and WC scenarios Treatment Scope and Resourcing In the best case scenario, treatment is limited to pain control given the bounds of the BC definition. Without bleeding or significant injury no other medical resuscitation is required. In the worst case scenario treatment is more nuanced. With regards to solid organ injury, non-operative management has become the mainstay of treatment for the vast majority of injuries but this is in part due to IR embolization which is also not available in flight. Hollow viscus injury and pancreatic injury are particularly problematic as they can result in leakage of internal contents and cause delayed infection, electrolyte derangement, and multi-organ injury. They are also very hard to diagnose even in 6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 6

trauma centers and may have a delayed presentation. Patients with hollow viscus injury that are low grade may be able to be managed non operatively but even moderate injury requires bowel resection and or repair and thus medical evacuation. High grade renal injuries may result in renovascular hypertension and require medical management or nephrectomy. A crew member with severe/high grade abdominal organ injury would be treated with supportive care and medically evacuated. Tranexamic Acid (TXA) was included as a capability however the authors recognize that this is controversial in the stable trauma patient. Time to initiation of <1h seems to have a reduction in bleeding mortality but the vast majority of benefit occurs in the patient in hemorrhagic shock which is a separate condition. EAST trauma guidelines are currently evaluating the use of Txa prior to hemodynamic instability but given the lack of surgical capabilities and safe side effect profile we recommend the use of Txa in the blunt abdominal trauma patient in the WC scenario. This recommendation may change as literature evolves. Other interventions such as resuscitative endovascular occlusion of the aorta (REBOA) were considered to not provide substantial enough benefit without surgical capabilities and thus excluded. Management of hemorrhagic shock from trauma is a separate condition and thus other interventions such as pelvic binder or blood transfusion were resourced elsewhere. Communications and Support Needs In the best case scenario continuous audio and visual communication is not necessary for management as there is no significant injury and the patient improves with supportive care In the worst case scenario the injuries sustained are more significant and audio/visual communication becomes a necessity to diagnosis and management

### IMM CLIFF RECONCILATION COMMENTS

The definitions for BC and WC are very similar to the IMM. Our methodological approach to incidence was also taken from the National Trauma Data Base; however, we updated it and adjusted it by removing penetrative injuries. Another key difference is that based on the difference in size of ISS and exploration vehicles or habitats. Given these differences, we are only applying the incidence to surface operations in a partial gravity environment. We also reviewed their sources to add into our own analysis.

### LIMITATIONS SUMMARY

Limitations extensively discussed throughout the CLiFF above. Likely the largest limitation of this CLiFF is that it is extremely hard to model how likely blunt abdominal trauma is to occur during spaceflight or surface operations and our best estimations are likely over-estimations. With that said without the ability to have full terrestrial resourcing to manage worst case scenarios if they were to occur, RTDC and LOCL are likely underestimations. Other limitations include: • There have been 6 reported cases of truncal injuries during spaceflight, but there was no specification as to location or severity of the trauma. Thus, this information was not informative. • The overall confidence in the mean incidence value is probably overstated because of the large sample size of the National Trauma Data Bank which results in a very narrow probability distribution. • This medical condition is constrained by mission segment. The incidence is assumed to be zero during microgravity operations and is only applied during surface operations. • Estimates of the incidence of BAT on ISS were based on the National Trauma Data Bank incidence rates. However, it is felt that during Artemis missions in which the vehicles are of much smaller size than ISS, the risk of significant abdominal trauma in microgravity is extremely small.

Thus, the terrestrial trauma evidence will only be applied during surface operations. Ideally, this would only be applied to non-EVA surface operations since the hard upper torso of the suit protects the abdomen from blunt trauma. However, the current version of IMPACT prevents us from segmenting the mission into surface EVA or non-EVA surface operations. For now, incidence data will apply to all surface operations but not to microgravity operations. • It is possible that there will be overlap with ICL 116 Traumatic Hypovolemic Shock since abdominal trauma may be the cause of shock. • If looking at the BC definition in isolation, it is possible that patients with localized pain or bruising may not present to the hospital following blunt abdominal trauma; however, for the purposes of this CLiFF the assumption is made that even a best case scenario blunt abdominal trauma is of sufficient severity to warrant evaluation in the hospital. • The BC/WC probability split was based on reports in the general population.

This included patients older than 70 years and by mechanisms of injury unlikely to occur during spaceflight. 6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  | 89 |  |  | 145 |  |  |  |  |  |
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

| Best |  |  |  |  |  |  | 34 | 211 | 245 | 3763 | 0.0651076 | 6.51076 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --------- | ------- |

Case (TBC) Untreated

| Best | 132 |  | 414 |  |  |  | 34 | 211 | 1689 | 3763 | 0.448844 | 44.8844 |
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

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 8

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

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 9

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

6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 10

## REFERENCES

Reference World Health Organization. Injuries and Violence: The Facts. Geneva: WHO; 2021.

Biffl, W. L., et al. (2013). "Western Trauma Association critical decisions in trauma: management of pancreatic injuries." J Trauma Acute Care Surg 75(6): 941-946. Biffl, W. L., et al. (2018). "Management of colorectal injuries: A Western Trauma Association critical decisions algorithm." J Trauma Acute Care Surg 85(5): 1016-1020. Braverman, M. A., et al. (2020). "From battlefront to homefront: creation of a civilian walking blood bank." Transfusion 60 Suppl 3: S167-S172.

Brenner, M., et al. (2018). "Joint statement from the American College of Surgeons Committee on Trauma (ACS COT) and the American College of Emergency Physicians (ACEP) regarding the clinical use of Resuscitative Endovascular Balloon Occlusion of the Aorta (REBOA)." Trauma Surg Acute Care Open 3(1): e000154. Brown, C. V. R., et al. (2018). "Western Trauma Association Critical Decisions in Trauma: Management of renal trauma." J Trauma Acute Care Surg 85(5): 1021-1025. Chang, R., et al. (2017). "Remote Damage Control Resuscitation in Austere Environments." Wilderness Environ Med 28(2S): S124-S134.

Davis, J. W., et al. (2008). "Western trauma association critical decisions in trauma: management of pelvic fracture with hemodynamic instability." J Trauma 65(5): 1012-1015. Feliciano, D. V., et al. (2015). "Western Trauma Association Critical Decisions in Trauma: Management of abdominal vascular trauma." J Trauma Acute Care Surg 79(6): 1079-1088. Galvagno, S. M., Jr., et al. (2019). "Advanced Trauma Life Support((R)) Update 2019: Management and Applications for Adults and Special Populations." Anesthesiol Clin 37(1): 13-32.

Kirkpatrick, A. W., et al. (2001). "Extraterrestrial Resuscitation of Hemorrhagic Shock: Fluids." Journal of Trauma 50: 162-168.

Kozar, R. A., et al. (2009). "Western Trauma Association critical decisions in trauma: nonoperative management of adult blunt hepatic trauma." J Trauma 67(6): 1144-1148; discussion 1148-1149.

Leibner, E., et al. (2020). "Damage control resuscitation." Clin Exp Emerg Med 7(1): 5-13.

Malhotra, A., et al. (2015). "Western Trauma Association Critical Decisions in Trauma: Diagnosis and management of duodenal injuries." J Trauma Acute Care Surg 79(6): 1096-1101.

Moore, F. A., et al. (2008). "Western Trauma Association (WTA) critical decisions in trauma: management of adult blunt splenic trauma." J Trauma 65(5): 1007-1011. Napolitano, L. M., et al. (2013). "Tranexamic acid in trauma: how should we use it?" J Trauma Acute Care Surg 74(6): 1575-1586.

Nowak, E. S., et al. (2019). "Blood transfusion for deep space exploration." Transfusion 59(10): 3077-3083.

Roberts, I. (2015). "Tranexamic acid in trauma: how should we use it?" J Thromb Haemost 13 Suppl 1: S195-199.

Rowell, S. E., et al. (2017). "Western Trauma Association Critical Decisions in Trauma: Management of adult blunt splenic trauma-2016 updates." J Trauma Acute Care Surg 82(4): 787-793.

Sperry, J. L., et al. (2019). "Prehospital resuscitation in adult patients following injury: A Western Trauma Association critical decisions algorithm." J Trauma Acute Care Surg 87(5): 1228-1231.

Stancil, S. A. (2017). "Development of a New Infusion Protocol for Austere Trauma Resuscitations." Air Med J 36(5): 239-243.

Tran, T. L., et al. (2016). "Western Trauma Association Critical Decisions in Trauma: Management of pelvic fracture with hemodynamic instability- 2016 updates." J Trauma Acute Care Surg 81(6): 1171-1174.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 11

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

### LSAH Lifetime Surveillance of Astronaut Health

### LSO Lunar Surface Operations

### MCL Master Condition List

### MEVA Medical Extravehicular Activity

6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 12

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

6/2/2023 11:44:57 AM ICL112_Trauma - Abdominal Injury (Blunt) Cliff page: 13

---

## Source metadata

```yaml
source_filename: "trauma-abdominal-injury-blunt-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Abdominal Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1axwveukCR2DQppDZUC0oxVF7L-8iewzB/view"
source_drive_id: "1axwveukCR2DQppDZUC0oxVF7L-8iewzB"
source_sha256: 0377ac08b25d13e0e4beacacdd486531801a1813fc4a05d348253870f177bd4f
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
