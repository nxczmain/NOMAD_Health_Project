# Trauma Chest Injury Blunt CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1ZZ4_Nz5meN3a8cFQCdtwKYuEhFI3dLTZ/view) · **15 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Chest Injury/CliFF 119

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

ICL113_Trauma - Chest Injury (Blunt)

Thoracic injury is a common reason to be admitted to major trauma centers. The spectrum of thoracic injuries ranges from brief, uneventful injuries to critical conditions requiring treatment in intensive care units (ICUs) such as pneumothorax, hemothorax, rib fracture, flail chest, and acute respiratory distress syndrome (ARDS). Chest trauma is traditionally classified as blunt or penetrating. In blunt trauma the chest wall remains intact; in penetrating injuries the integrity of the chest wall is breached. Blunt trauma is more common than penetrating chest injury. Ribs may be fractured and produce bruising or puncture the lung. Associated pain may impair breathing. Pneumothoraces and hemothoraces are space-occupying lesions that interfere with gas exchange primarily by compressing otherwise healthy lung parenchyma. Pneumothorax is the collection of air within the pleural cavity. As the pneumothorax enlarges, the lung becomes smaller. A hemothorax can accommodate approximately 40% of the total blood volume. A lung contusion is usually a combination of alveolar hemorrhage with interstitial hemorrhage and edema. Most patients have minimal respiratory deficit as a result of the injury. Extensive contusions may result in respiratory difficulty or progress to acute respiratory distress syndrome (Khan, 2008). For this CliFF, modeling of chest injuries in spaceflight on the International Space Station (Lewandowski, 2013) is used to estimate the incidence of blunt chest injury among astronauts in spaceflight and to estimate the best case/worst case percentages. Terrestrial general population studies are used to estimate the outcomes (RTDC and LOCL) for chest injury in spaceflight.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

As of December of 2006, the incidence of trunk injuries occurring during spaceflight has been 6 cases in 29.67 person-years (Scheuring, 2009).

However, it is not clear from this study how many of these trunk injuries were chest injuries. There have been no documented cases of severe blunt chest injury during spaceflight. Therefore, this study has limited utility in the estimation of the incidence of blunt chest injury for this ClIFF. (Lewandowski, 2013) describes the IMM Chest Injury Module (CIM). The CIM calculates the incidence rate of chest injury per person-year of spaceflight on the International Space Station (ISS). Probability distributions were determined for three different levels of chest injury during one year on ISS and were characterized with lognormal distributions. The probability of an Abbreviated Injury Scale (AIS) 1 or greater chest injury during one year on ISS is a lognormal distribution with a mean of 1.2 x 10-2, standard deviation of 6.0 x10-3and 5th and 95th percent values of 5.35 x 10- 3and 2.3 x 10-2, respectively. The probability of an AIS 2 or greater chest injury during one year on ISS is a lognormal distribution with a mean of 3.9 x 10-3, standard deviation of 2.2 x 10-3 and 5th and 95th percent values of 1.5 x 10-3 and 7.9 x 10-3, respectively. The probability of an AIS 3 or greater chest injury during one year on ISS is a lognormal distribution with a mean of 8.9 x 10-4, standard deviation of 5.8 x 10-4 and 5th and 95th percent values of 2.9 x 10-4 and 2.0 x 10-3, respectively. Although the CIM applies to the ISS, it is used to estimate the incidence of blunt chest injury for this CliFF. For IMPACT, the occurrence of blunt chest injury will be limited to partial gravity surface operations for exploration missions due to the expected small size of vehicles during the microgravity transit phase.

### ANALOG LITERATURE

Analog incidence of blunt chest injury is difficult to apply to incidence during spaceflight given the substantial difference in mechanisms of injury that are likely to be encountered between these settings. From 23,797 cases of injury occurring in a combat theater over a ten year span, 2,049 cases of blunt chest injury occurred with 328 of those cases described as non-combat related injuries over a span of 1,400,520 troop/person years (Ivey, 2012 and Baiocchi, 2013).

### TERRESTRIAL LITERATURE

The 2016 incidence rate for thoracic injury is based on the National Trauma Data Bank. (American College of Surgeons, 2016) There were 194,622 overall incidents by AIS body region-thorax in 2016 (Table 27). We discounted incidents with mechanisms of injury (Table 19) unlikely to occur among our crew population on orbit. Percentages per gender were averaged and rounded to the nearest integer to determine the discounts; e.g. 30% of motor vehicle traffic, 5% of transport/other, 4% of fire arms, 2% of pedal/cyclist. We also discounted 1% of self-inflicted injuries (Table 25 - Incidents and Case Fatality rate by intent). Overall injuries minus our discounted data resulted in 58% of injuries that may occur on board, or 118,881. The US census resident population estimates for 2016 (U.S.Census Bureau, 2016) of 318,558,162 served as denominator. According to the U.S. Bureau of Labor statistics from 2019, there were 10,780 cases of blunt injury to the trunk resulting in only bruises and contusions out of 187,180 "trunk" injuries occurring over 888,220 person-years (U.S. Bureau of Labor, 2019). This study was not used to estimate chest injury incidence for this CliFF since it involves a terrestrial general population and only includes hospital data. Many minor chest injuries would not require 6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 1

evaluation or treatment in a hospital.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 1.2E-2 and SD6E-3

### INCIDENCE SUMMARY

From the PRA model, the incidence rate distribution is log-normal with mean 1.2E-2 and SD6E-3. Evidence: PRA model – Lewandowski – Estimated probability of chest injury during an international space station mission. From the model, we have a distribution for the probability per year which we can use for the yearly incidence rate distribution. This incidence value will used to determine the occurrence of this condition during partial gravity surface operations for exploration missions due to the expected small size of vehicles during the microgravity transit phase.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

UNK Segment Surface Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Log-Normal Mean 0.012 SD 0.006 Log-Normal (Mean): 0.012 (SD): 0.006 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Lewandowski, 2013 Spaceflight Modeling 1 Ivey et al., 2012 Analog 1 Baiocchi, 2013 Analog 1 American College of Surgeons, 2016 Terrestrial 1 US Census, 2016 Terrestrial 1 U.S. Bureau of Labor, 2019 Terrestrial 1 Scheuring, 2009 Spaceflight 1 6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 2

(Lewandowski, 2013) describes the IMM Chest Injury Module (CIM). The CIM calculates the incidence rate of chest injury per person-year of spaceflight on the International Space Station (ISS). Although the CIM applies to the ISS, it is used to estimate the incidence of blunt chest injury for this CliFF. The CIM is given an LOC = 1 (somewhat unconfident) since it is based on the microgravity environment of ISS and not specifically to exploration missions beyond low Earth orbit (LEO). Ivey et al., 2012 data comes from an active combat theater, but includes data specific to number of cases classified as non-combat related. Data from Baiocchi, 2013 was used to quantify number of person-years. Therefore, updated data from the American College of Surgeons and corresponding US Census data from 2016 were used along with the discounting rate of 58% calculated using data from the previous CLIFF. Data from the U.S. Bureau of Labor was used to quantify the number of blunt injuries to the trunk resulting only in bruises/contusions (U.S. Bureau of Labor, 2019). (Scheuring, 2009) - captures inflight musculoskeletal injuries, including a total of 6 trunk injuries among 29.67 person-years = 0.20 events/person-year. However, it is not clear how many of these trunk injuries were blunt chest injuries. 6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

There are no specific preflight preventive measures for chest injury. However, vehicle design, spaceflight procedures, and astronaut training should mitigate the likelihood and severity of inflight chest injuries.

### BEST CASE SCENARIO DEFINITION

Mild or moderate blunt chest injury resulting in localized pain/discomfort and/or ecchymosis, requiring supportive treatment.

### WORSE CASE SCENARIO DEFINITION

Severe blunt chest trauma that causes damage of the internal chest organs with secondary complications (e.g. hemo- thorax/mediastinum/pericardium, pneumo-thorax/mediastinum/pericardium, diaphragmatic rupture, rib fractures).

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Trauma (Blunt) - Hemothorax Trauma (Blunt) - Hemomediastinum Trauma (Blunt) - Hemopericardium

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The best case scenario is defined as a mild or moderate blunt chest injury resulting in localized pain/discomfort and/or ecchymosis, requiring only minimal treatment. The worst case scenario is defined as severe blunt chest trauma with secondary complications of hemothorax, pneumothorax, diaphragmatic rupture, ribs fracture. There have been no documented cases of severe blunt chest injury during spaceflight. Best case/worst case scenario percentages were based on the CIM (Lewandowski, 2013). Based on the CIM, the best case scenario percentage is 93% (AIS < 3) and the worst case percentage is estimated as 7% (AIS ≥ 3). Percentages of how often best versus worst case scenarios occur were estimated using the NTDB with AIS (Abbreviated injury scale - see below) of 3 or greater (Table 27 incidents by body region) (American College of Surgeons, 2016) 129,338 serious or greater incidents 194,622 overall. Thorax and Pneumothorax incidents represented 66%. Based in subject matter expert's opinion (Kerstman, 2010) we are using a discrete number (66%) for the worst case percentage rather than a range for this medical condition.

Abbreviated Injury Scale (AIS) The AIS was originally designed to stratify victims of motor vehicle crashes. On its own it's not designed to provide any outcome prediction. It has undergone six revisions since its initial first description in 1971. AIS - 90 has 1300 individual injuries. The AIS injury severity values are consensus-derived and range from 1 (minor) to 6 (fatal). Only blunt injuries were included in the first AIS. Injury - AIS Score: 1=Minor, 2=Moderate, 3= Serious, 4= Severe, 5=Critical, 6= Unsurvivable. Limitation of AIS: 1) Score 5 and 6 represent the "threat to life" associated with an injury and are not intended to provide a comprehensive measure of severity, 2) Ais-90 makes no provision for open or comminuted femoral fractures, important for functional outcome, less important in predicting mortality, 3) AIS on its own is unable to predict mortality or outcomes, 4) AIS assigned rather than derived viz inter and intra rater error, and 5) AIS not a true scale (i.e. difference between AIS 1 and 2 is not the same as between AIS 4 and 5).

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Lewandowski, 2013 IMM CIM 1 There have been no documented cases of severe chest injuries during spaceflight. Best case/worst case scenario percentages are based on the CIM (Lewandowski, 2013). Based on the CIM, the best case scenario percentage is 93% (AIS < 3) and the worst case percentage is estimated as 7% (AIS ≥ 3). This estimate of best case/worst percentages is given a LOC = 1 (somewhat unconfident) since it is based on the microgravity environment of ISS. 6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 1.2E-2 93 - 93 100 1.66 5.18204 6 72 0 0 0 0 0 Case (TBC) and SD6E-3 Treated Worst 7 - 7 100 1.9 52.8036 24 528 5.60723 0 32 0 3.65 Case (TWC) Untreated Best N/A N/A N/A 1.66 22.4422 6 72 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.9 100 72 648 100 100 100 0 49 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

The Clinical Phase 2 durations are based on terrestrial general population data. The RDTC surrogates for this condition are based on the need for hospitalization or surgery. RTDC and LOCL probabilities are based on the best case and worst case definitions, and terrestrial general population data. TREATED BEST CASE (TBC) SCENARIO COMMENTS The management of blunt chest injury is dependent on mechanism, presenting abnormalities, and evidence of complications within the first 72 hours (Simon, 2012). In the absence of abnormal vital signs, abnormalities noted on primary or secondary survey, and no evidence of internal thoracic injury on eFAST evaluation, patients can be monitored for 6 hours. If the patient continues to have stable vital signs, does not require supplemental oxygen, and is able to have adequate pain control during this time, the patient can be monitored for signs of complications for 72 hours (Simon, 2012 and Cydulka 2018). The probability of RTDC and LOCL are both 0% based on the best case scenario definition of a mild or moderate blunt chest injury only requiring supportive treatment.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The treated worst case of blunt chest injury to the chest can require 1 to 22 days of hospitalization with 32% of cases requiring hospitalization (Liman, 2002). With appropriate diagnosis of a potentially life threatening complication remaining heavily reliant on lab results, imaging studies, and other significant resources, hospitalization could represent an appropriate benchmark for return to definitive care, being 32% (Liman, 2002).

Therefore, the upper bound for the probability of RTDC is estimated as 32%. Of 1490 cases of blunt chest injury, 477 required hospitalization, with 32 of the cases requiring hospitalization resulting in mortality (2.1% of total cases). Since there was mortality in 2.1% of hospitalized patients and 5.2% of total cases, an average of these two values (3.65%) was used as an estimate of the upper bound for the probability of LOCL (Liman, 2002). UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Because cases of mild blunt chest injury often do not present for medical evaluation or are associated with other injury upon presentation, no studies were found describing data on blunt chest injury that did not involve some form of medical intervention. With this, data from Simon, 2012 was used to estimate the shortest and longest duration using criteria for initial management of mild, uncomplicated blunt thoracic injury. Initial management is described as monitoring for vital sign abnormalities, oxygen requirement, and adequate pain control for 6 hours following presentation. If abnormalities are found but the patient remains stable, monitoring for 72 hours following presentation is recommended (Simon, 2012). The probability of RTDC and LOCL are estimated to be 0% based on the best case scenario definition of a mild or moderate blunt chest injury only requiring supportive care.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The probability of RTDC in the untreated worst case scenario is 100% since the worst case scenario is defined as severe blunt chest trauma and therefore would require significant treatment. There is little data that describes untreated severe blunt chest injury, so data describing non- operative severe blunt chest injury or delayed treatment were used to estimate the probability of LOCL. In patients with grade III thoracic aortic injuries that were managed non-operatively, 17% resulted in death before available treatment and the length of stay in the ICU was between 3 and 27 days (Gandhi, 2016). Since 49% of severe injuries required emergency surgery (Gandhi, 2016), the upper range of LOCL was estimated to be 49%. TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Liman, 2003 Terrestrial Simon, 2012 Terrestrial 3 Gandhi, 2016 Terrestrial Cydulka, 2018 Terrestrial The management of blunt chest injury is dependent on mechanism, presenting abnormalities, and evidence of complications within the first 72 6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 6

hours (Simon, 2012). In the absence of abnormal vital signs, abnormalities noted on primary or secondary survey, and no evidence of internal thoracic injury on eFAST evaluation, patients can be monitored for 6 hours. If the patient continues to have stable vital signs, does not require supplemental oxygen, and is able to have adequate pain control during this time, the patient can be monitored for signs of complications for 72 hours (Simon, 2012 and Cydulka 2018). The treated worst case of blunt chest injury to the chest can require 1 to 22 days of hospitalization with 32% of cases requiring hospitalization (Liman, 2002). Because cases of mild blunt chest injury often do not present for medical evaluation or are associated with other injury upon presentation, no studies were found describing data on blunt chest injury that did not involve some form of medical intervention. With this, data from Simon, 2012 was used to estimate the shortest and longest duration using criteria for initial management of mild, uncomplicated blunt thoracic injury. There is little data that describes untreated severe blunt chest injury, so data describing non-operative severe blunt chest injury or delayed treatment were used. In patients with grade III thoracic aortic injuries that were managed non-operatively, 17% resulted in death before available treatment and the maximum length of stay in the ICU was 3-27 days (Gandhi, 2016). LOC = 3 (somewhat confident). TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ----------- | ----------- | --------- |
| Liman, 2002 | Terrestrial |  |
| Simon, 2012 | Terrestrial |  |

3

| Gandhi, 2016 | Terrestrial |  |
| ------------- | ----------- | --- |
| Cydulka, 2018 | Terrestrial |  |

For best case scenarios, RTDC would not be required based on the best case scenario definition. LOC = 4 (confident). The treated worst case of blunt chest injury to the chest can require 1 to 22 days of hospitalization with 32% of cases requiring hospitalization (Liman, 2002). With appropriate diagnosis of a potentially life threatening complication remaining heavily reliant on lab results, imaging studies, and other significant resources, hospitalization could represent an appropriate benchmark for return to definitive care, being 32% (Liman, 2002). Therefore, the upper bound for the probability of RTDC is estimated as 32% for the treated best case scenario. LOC = 3 (somewhat confident). The probability of RTDC is 100% for the untreated worst case scenario based on the worst case definition. LOC = 4 (confident).

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ----------- | ----------- | --------- |
| Liman, 2002 | Terrestrial |  |
| Simon, 2012 | Terrestrial |  |

3

| Gandhi, 2016 | Terrestrial |  |
| ------------- | ----------- | --- |
| Cydulka, 2018 | Terrestrial |  |

LOCL is not expected in the bast case scenarios based on the best case scenario definition. LOC = 4 (confident). Since there was mortality in 2.1% of hospitalized patients and 5.2% of total cases, an average of these two values (3.65%) was used as an estimate of the upper bound for the probability of LOCL (Liman, 2002) for the treated worst case scenario. LOC = 3 (somewhat confident). Since 49% of severe injuries required emergency surgery (Gandhi, 2016), the upper range of LOCL was estimated to be 49% for the untreated worst case scenario. LOC = 3 (somewhat confident). CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Blunt thoracic trauma involves injury to the chest or back with risk of cardiopulmonary or great vessel complications. Blood and air under pressure can dissect and fill potential spaces limiting cardiac output in the already hypovolemic crew member. Even minor injury can cause prolonged pain and significantly limit a crew member's ability to perform tasks putting mission objectives at risk. Terrestrial standards have changed recently to emphasize aggressive pulmonary rehabilitation due to the rates of these complications particularly in elderly populations. Pain control and incentive spirometry is paramount to reduce complications of splinting such as pneumonia and atelectasis. The best case scenario of this conditions mild or moderate blunt chest injury resulting in localized pain/discomfort and/or ecchymosis, requiring supportive treatment. The worst case scenario is defined as severe blunt chest trauma that causes damage of the internal chest organs with secondary complications (e.g. hemo- thorax/mediastinum/pericardium, pneumo-thorax/mediastinum/pericardium, diaphragmatic rupture, rib fractures).

- CNES: Hemothorax, Hemomediastinum, Hemopericardium

### Diagnostic Scope and Resourcing

6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 7

In the best case scenario diagnosis is made with history and physical exam. Examination involves the primary and secondary trauma survey per ATLS guidelines with initial basic vital signs. Terrestrial evaluation of blunt thoracic trauma typically includes a chest X-ray at minimum and frequently a CT scan of the chest with or without contrast depending on patient presentation. In flight these resources are unavailable and instead ultrasound is used to evaluate for gross injury such as pneumothorax, hemothorax, or pericardial tamponade. More subtle injuries such as rib fractures or contusions made be made clinically while more substantial injuries such as aortic injury or cardiac contusion may be too severe to be managed effectively in flight. The extended focused assessment of sonographic trauma (EFAST) was included due to its evaluation of life threatening injuries. EKG is also included to evaluate for blunt cardiac injury, arrhythmia, coronary artery dissection leading to MI, and tamponade.

The CP1 phase of the worst case scenario is similar to the BC scenario. Initial evaluation includes history, primary and secondary trauma survey and basic vital signs. Ultrasound is used to identify gross intrathoracic injury and EKG to evaluate the heart further. In the worst case scenario CBC is also performed to determine degree of injury and provide a baseline hemoglobin and hematocrit level to monitor patient disease progression.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1.66 hours CP1 WC (Treated or Untreated): 1.9 hours The highest scope of practice for the best and worst case scenario is level 5 (attending physician) due to the possible severity of injury

### Treatment Scope and Resourcing

The treatment of the best case scenario is primarily pain control, oxygen support as needed and incentive spirometry. By definition there are no significant injuries and treatment is supportive with pulmonary rehab to limit complications of pain and splinting.

Treatment in the worst case scenario is more complex. Pain control and oxygen are still utilized as supportive care. The life saving interventions of chest tube and pericardiocentesis are required depending on the location and severity of injury. Finger thoracostomy is included as a necessary skill however no new equipment is required as this is the first stage of chest tube placement which already includes necessary resources.

Procedural sedation is also included for these more aggressive interventions for crew member comfort. The chest tube capability includes a pig tail catheter as first line due to ease of placement and better patient tolerance as well as emerging data that suggests there are similar outcomes to large bore chest tubes in most thoracic trauma. There was consideration of resourcing RSI and intubation for the trauma patient that no longer is able to meet their respiration needs however the resources and skills were deferred to the condition "respiratory failure". As with other trauma conditions in this list, Txa is included as an intervention due to the lack of true surgical capabilities and side effect profile. The authors recognize this is a controversial treatment in the patient who is not in hemorrhagic shock however it may be a salvage procedure in an austere environment when there are no other treatment options.

### Communications and Support Needs

Continuous communication for the best case scenario is not necessary for management as care is primarily supportive. In the worst case scenario however the inclusion of continuous communication was considered necessary due to the possibility of severe injury and LOCL.

## REFERENCES

Bauman, Z. M., et al. (2018). "A Prospective Study of 7-Year Experience Using Percutaneous 14-French Pigtail Catheters for Traumatic Hemothorax/Hemopneumothorax at a Level-1 Trauma Center: Size Still Does Not Matter." World J Surg 42(1): 107-113.

Brasel, K. J., et al. (2017). "Western Trauma Association Critical Decisions in Trauma: Management of rib fractures." J Trauma Acute Care Surg 82(1): 200-203. Brenner, M., et al. (2018). "Joint statement from the American College of Surgeons Committee on Trauma (ACS COT) and the American College of Emergency Physicians (ACEP) regarding the clinical use of Resuscitative Endovascular Balloon Occlusion of the Aorta (REBOA)." Trauma Surg Acute Care Open 3(1): e000154. Chang, R., et al. (2017). "Remote Damage Control Resuscitation in Austere Environments." Wilderness Environ Med 28(2S): S124-S134.

Galvagno, S. M., Jr., et al. (2019). "Advanced Trauma Life Support((R)) Update 2019: Management and Applications for Adults and Special Populations." Anesthesiol Clin 37(1): 13-32.

Napolitano, L. M., et al. (2013). "Tranexamic acid in trauma: how should we use it?" J Trauma Acute Care Surg 74(6): 1575-1586.

Roberts, I. (2015). "Tranexamic acid in trauma: how should we use it?" J Thromb Haemost 13 Suppl 1: S195-199.

Kerr-Valentic, M. A., et al. (2003). "Rib fracture pain and disability: can we do better?" J Trauma 54(6): 1058-1063; discussion 1063-1054.

### IMM CLIFF RECONCILATION COMMENTS

The IMM Chest Injury CliFF uses the 2010 National Trauma Databank (NTDB) to estimate incidence. The CIM (Lewandowski, 2013) was never incorporated into the IMM to estimate incidence or best case/worst case percentages. The best case definition in the IMM CliFF is the same as in this CliFF: Mild or moderate blunt chest injury resulting in localized pain/discomfort and/or ecchymosis, requiring only minimal treatment. The worst case definition in the IMM CliFF is different than in this CliFF as the IMM CLiFF included penetrating chest injury while the current one does not. .

### LIMITATIONS SUMMARY

6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 8

There is limited spaceflight data regarding chest injuries in spaceflight. Therefore, the CIM (Lewandowski, 2013) was used to estimate the incidence of blunt chest injury among astronauts in spaceflight and to estimate the best case/worst case percentages. The CIM estimated the incidence rate of chest injury per person-year of spaceflight on the International Space Station (ISS) based on a modeling approach. Although the CIM applies to the ISS, it is used to estimate the incidence of blunt chest injury for this CliFF. The CIM is given an LOC = 1 (neutral) since it is based on ISS data and the ISS environment, and not specifically to exploration missions beyond low Earth orbit (LEO). For IMPACT, the occurrence of blunt chest injury will be limited to partial gravity surface operations only for exploration missions due to the expected small size of vehicles during the microgravity transit phase. Terrestrial general population studies were used to estimate the Clinical Phase 2 durations and outcomes (RTDC and LOCL) of chest injury in spaceflight. It is uncertain how chest injuries would manifest and respond to treatment in the microgravity and partial gravity environments of spaceflight. 6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 9

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  | 145 |  |  |  |  |  |
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

| Best |  |  |  |  |  |  | 34 | 211 | 390 | 3763 | 0.103641 | 10.3641 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |

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

6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 10

Total Human

|  |  | Translation & |  | Total Tasks |  |  |
| --- | --- | ------------- | --- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) |  | Extremity Standing (g) | Equipment Ops |  | Category |  |
| ----- | --- | ---------------------- | ------------- | --------- | ---------- | --- |
|  |  | (microgravity) |  | Condition | Tasks Full |  |

Mission Treated Best

|  |  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  |  | 211 | 211 | 3763 0.0560723 | 5.60723 |
| --- | --- | --- | --- | --- | -------------- | ------- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| ------- | --- | --------- | ------ | ---- | ------ | --- |

Case (UTWC) 6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 11

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

6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 12

## REFERENCES

Reference

1. Estimated Probability of Chest Injury During an International Space Station Mission, Lewandowski, et al. (Lewandowski, 2013) 2.

- Musculoskeletal Injuries and Minor Trauma in Space: Incidence and Injury Mechanisms in U.S. Astronauts. Scheuring, et al. Aviation, Space, and

Environmental Medicine. Vol. 80, No. 2 . February 2009. (Scheuring, 2009) 3. National Trauma Data Bank 2016. Annual Report. American College of Surgeons. Chang, et al. (Chang, 2016). 4. Management of pulmonary contusion and flail chest: an Eastern Association for the Surgery of Trauma practice management guideline. Practice Guideline. Simon, et al. J Trauma Acute Care Surg. 2012 Nov;73(5 Suppl 4):S351-

61. (Simon, 2012). 5. Chest injury due to blunt trauma. Liman, et al. European Journal of Cardio-Thoracic Surgery, Volume 23, Issue 3, March

2003, Pages 374-378. (Liman, 2003). 6. Nonoperative management of grade III blunt thoracic aortic injuries. Gandhi, et al. Journal of Vascular Surgery. Volume 64, Issue 6. December 2016. Pages 1580-1586. (Gandhi, 2016).

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

ICL 1.0 IMPACT 1.0 Medical Conditions List 6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 13

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

6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 14

6/15/2023 2:16:13 PM ICL113_Trauma - Chest Injury (Blunt) Cliff page: 15

---

## Source metadata

```yaml
source_filename: "trauma-chest-injury-blunt-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Chest Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1ZZ4_Nz5meN3a8cFQCdtwKYuEhFI3dLTZ/view"
source_drive_id: "1ZZ4_Nz5meN3a8cFQCdtwKYuEhFI3dLTZ"
source_sha256: 130466e36c7d8b60cf57b8437d275f111c91aa3c42fe6b4ff5437bd4caebcb37
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 15
ocr_performed: false
```
