# Traumatic Hypovolemic Shock CLiFF

[View original PDF](https://drive.google.com/file/d/12bxBmeot9h9v7rSZABZg2o8l02YJfSBs/view) · **11 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

### Traumatic Hypovolemic Shock Cliff

## Branch Baseline

Hypovolemic shock refers acute external blood loss secondary to trauma in which rapid fluid loss results in multiple organ failure due to inadequate circulating volume and subsequent inadequate perfusion.

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

- Data Category: Fixed

- Space Adaptation: No

- Incidence Type: Rate

## Distribution Data

- Incidence: Fixed

- Occurrence: Poisson

## Data Characteristics

- Fixed Rate: 0.000641

## Incidence Comments

A study performed by Ledingham, looked at the incidence of shock in a general hospital population and found 21% of all cases of shock to be related to hemorrhage due to trauma (Ledingham, 1974). Trauma patients are at higher risk of hypovolemic shock and the mortality can relate to the severity of injury, co-morbidities, and the level of care available and the hospital proximity (Zenati, 2005)} . Since 21% of all shock patients are related to hemorrhagic shock due to trauma based on this study, the incidence of Traumatic Hypovolemic Shock for our model is estimated as 0.000641 events/person-year considering that in our model, the incidence of Septic Shock (Sepsis) = 0.0024 events/person-year , the incidence of Cardiogenic Shock = 0.00000529 events/person-year, and the incidence of Neurogenic Shock = 0.00000498 events/person-year.

### Information Regarding Prevention

Since this condition results from mechanial failure the NASA medical screening and selection does not apply to this condition. There are engineering standards and equipment readiness to are in in place to prevent this type of even. 5/11/2020 4:37:41 PM Traumatic Hypovolemic Shock Cliff page: 1

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |
| ------------ | --------- | ------------ |
| Zenati, 2005 | 4 | Incidence |

5/11/2020 4:37:41 PM Traumatic Hypovolemic Shock Cliff page: 2

Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

- Data Category: Fixed

- Space Adaptation: No

- Incidence Type: Rate

## Distribution Data

- Incidence: Fixed

- Occurrence: Poisson

## Data Characteristics

- Fixed Rate: 0.00048

## Incidence Comments

This incidence rate was derived from a combination of abdominal and chest injury, burns, acture radiation, diarrhea, indigestion incidences. 5/11/2020 4:37:41 PM Traumatic Hypovolemic Shock Cliff page: 3

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 1 3 - 60 24 - 48 - 72 0 0 - 100 0 (best case scenario %: 19 - 100) ISS-based Treatment 100 1 - 2 32 - 84 1 - 12.5 - 24 100 100 100 (worst case scenario %: 0 - 81) Untreated Best Case 0 0 32 - 84 24 - 48 - 72 0 - 60 100 0 - 100 Untreated Worst Case 0 0 66 - 100 1 - 12.5 - 24 100 100 100 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 4:37:41 PM Traumatic Hypovolemic Shock Cliff page: 4

### Scenario Comments

- Best Case Scenario: The best case scenerio is defined as a crewmember who becomes hypovolemic following a traumatic injury and responds

to fluid resuscitation.

- Worst Case Scenario: The worst case scenerio is defined as a crewmember who goes into hypovolemic shock following a traumatic injury, does

not respond to treatment and is experiencing multi-organ failure resulting from the inadequate circulating volume and poor perfusion.

In Bulger’s study there was improvement noted in subset (19% of the population requiring 10 U or more of packed red blood in the first 24 hours.

Massive transfusion may be a better predictor of ARDS than prehospital hypotension (Bulger, 2008). This is also supported on the Reed Corporation website, mdguidelines.com, which states, the earlier and promptly treatment of traumatic hypovolmic shock has a better outcome.

Though once a fluid loss of more than 25% of total body fluid are loss irreversible shock results and is associated with a poor outcome or even death (Reed, 2011). Based on this study, and accounting for uncertainty and the fact that astronauts have less co-morbidities than the general population, it is estimated that 19%-100% of cases of traumatic hypovolemic shock will be best case scenarios and 0%-81% of cases will be worst case scenario.

### Best Case Comments

The functional impairments (FI) calculation for this condition follows the IMM Severe Non-Space Adaptation Medical Conditions template (Kerstman, 2010). Bleeding disorders, consciousness and awareness, and coronary artery disease; conditions are combined for the determination of the FI. According to the template in Clinical Phase II the FI follows Class 1-2 n the Guide to the Evaluation of Permanent Impairment, which translates to 1-25% Whole Person Impairment (WPI) for bleeding disorder, 1-30% for consciousness and awareness, and lastly 2-23% for CAD (American Medical Association, 2008) (American Medical Association, 2008) (American Medical Association, 2008). Once the scores are combined the CPII is 3-60 WPI for duration of 24-72 hours. The probability of EVAC is estimated as 0-100% to account for uncertainty in the response time to fluid resuscitiation. LOCL probability 0% due to the fact that the crew member responds to fluid resuscitation as per the cest case scenario definition.

### Worst Case Comments

The functional impairments (FI) calculation for this condition follows the IMM Severe Non-Space Adaptation Medical Conditions template (Kerstman, 2010). Bleeding disorders, consciousness and awareness, and coronary artery disease; conditions are combined for the determination of the FI. According to the template in Clinical Phase II the FI follows Class 2-3 n the Guide to the Evaluation of Permanent Impairment, which translates to 15-45% Whole Person Impairment (WPI) for bleeding disorder, 11-50% for consciousness and awareness, and lastly 11-40% for CAD (American Medical Association, 2008) (American Medical Association, 2008) (American Medical Association, 2008). Once the scores are combined the CPII is 32-84 WPI for duration of 24-72 hours.

A fluid loss of more than 25% of total body fluid are loss irreversible shock results and is associated with a poor outcome or even death [3966].

Dr. Baker reports both plasma volume and red blood cell mass decrease in short-term and long-term response. The plasma volume decreases 17% in the first 24 hours, then stabilizes at decrease of 10-15% by flight day 5. The long-term response is from 8.4%-11.1% loss. The red blood cell mass also show at decrease in 10% within the 1 week for short-term response and 11.1% for the long-term response (Baker, 2008). The crew already experiencing these types of volume losses would make recovery almost impossible, thus the FI, EVAC and LOCL all are 100%.

### Untreated Best Case Comments

The functional impairments (FI) calculation for this condition follows the IMM Severe Non-Space Adaptation Medical Conditions template (Kerstman, 2010). Bleeding disorders, consciousness and awareness, and coronary artery disease; conditions are combined for the determination of the FI. According to the template in Clinical Phase II the FI follows Class 2-3 in the Guide to the Evaluation of Permanent Impairment, which translates to 15-45% Whole Person Impairment (WPI) for bleeding disorder, 11-50% for consciousness and awareness, and lastly 11-40% for CAD (American Medical Association, 2008) (American Medical Association, 2008) (American Medical Association, 2008). Once the scores are combined the CPII is 32-84 WPI for duration of 24-72 hours. Consequently, in Clinical Phase III the FI is 0-60% with a 0-100% risk of LOCL since the crew member is unable to be treated and the risk of EVAC is 100% (Goldberg, 2001). 5/11/2020 4:37:41 PM Traumatic Hypovolemic Shock Cliff page: 5

### Untreated Worst Case Comments

The functional impairments (FI) calculation for this condition follows the IMM Severe Non-Space Adaptation Medical Conditions template (Kerstman, 2010). Bleeding disorders, consciousness and awareness, and coronary artery disease; conditions are combined for the determination of the FI. According to the template in Clinical Phase II the FI follows Class 3-4 in the Guide to the Evaluation of Permanent Impairment, which translates to 35-65% Whole Person Impairment (WPI) for bleeding disorder, 31-100% for consciousness and awareness, and lastly 24-65% for CAD (American Medical Association, 2008) (American Medical Association, 2008) (American Medical Association, 2008). Once the scores are combined the CPII is 66-100% WPI for duration of 24-72 hours.

A fluid loss of more than 25% of total body fluid are loss irreversible shock results and is associated with a poor outcome or even death [3966].

Dr. Baker reports both plasma volume and red blood cell mass decrease in short-term and long-term response. The plasma volume decreases 17% in the first 24 hours, then stabilizes at decrease of 10-15% by flight day 5. The long-term response is from 8.4%-11.1% loss. The red blood cell mass also show at decrease in 10% within the 1 week for short-term response and 11.1% for the long-term response (Baker, 2008). The crew already experiencing these types of volume losses would make recovery almost impossible, thus the FI, EVAC and LOCL all are 100%.

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |
| ---------------------------------- | --------- | ------------ |
| American Medical Association, 2008 | 3 | FI |
| American Medical Association, 2008 | 3 | FI |
| American Medical Association, 2008 | 3 | FI |
| Baker, 2008 | 1 | EVAC |
| Goldberg, 2001 | 4 | EVAC |
| Bulger, 2008 | 4 | BCWC |
| Reed, 2011 | 4 | EVAC |

5/11/2020 4:37:41 PM Traumatic Hypovolemic Shock Cliff page: 6

### Additional Comments

PubMed key word searches include trauma, blood volume, shock, tissue perfusion, pentrating wound, and epidimology. 5/11/2020 4:37:41 PM Traumatic Hypovolemic Shock Cliff page: 7

The Resource Table (RT) Units

|  | Units Units | Available |  |
| -------- | ----------------- | ------------------ | ------------------- |
|  | Required Required | At Start |  |
|  | Best Worst | Of |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |

Adrenaline (Epinephrine 0 4 4 Yes Yes Sympathomimetic Vasopressor That

| 1:10000) 10mL |  |  | Increases Heart Rate And Constricts Blood |
| ------------- | --- | --- | ----------------------------------------- |

Vessels Ambu bag and mask 0 1 1 No Yes hand-held device used to provide positive pressure ventilation to a patient who is not breathing or is breathing inadequately Blood Oximeter 1 1 1 No Yes monitors the oxygen saturation of a patient's blood Blood Pressure Cuff (regular, 1 1 2 No Yes Measure blood pressure large)

| Blood Pressure Monitor | 1 1 | 1 No | Yes Measure blood pressure |
| ---------------------- | ---- | ------ | ---------------------------------------- |
| BZK wipes | 5 10 | 60 Yes | No Cleanse skin. |
| CMRS | 1 1 | 1 No | No Restrain crew member to ensure safety |

ECG Monitor (Device, USB 1 1 1 No Yes Measure and monitor ECG Charge Cable, Lead Set Cable,

### Cue Card)

Endotracheal Stylet 0 1 1 No Yes Assist with advanced airway placement Endotracheal Tube 7.0/8.0 0 1 4 Yes Yes Establish and maintain patent airway and ventilation.

| EtCO2 Monitor with EMMA | 0 1 | 1 No | Yes Measure end tidal CO2 |
| ----------------------- | --- | ---- | ------------------------- |

adapter Gauze pads (4x4) 6 6 50 Yes No to absorb blood or fluids from skin IV administration set 1 1 3 Yes Yes For administration of IV fluids.

| IV Cap | 1 1 | 5 Yes | No To maintain IV when not in use |
| ------ | --- | ----- | --------------------------------- |

IV Catheter (18G, 20G, or 22G) 1 1 14 Yes Yes IV fluid administration

| IV Fluid 1L (1000mL) | 2 4 | 5 Yes | Yes to replenish fluids |
| -------------------- | --- | ----- | ----------------------------- |
| IV Fluid Air Filter | 1 1 | 3 Yes | No To filter air from IV line |
| IV pressure infuser | 1 1 | 1 No | No IV Fluids infusion |

Ketamine 50 mg/mL, 10 mL multi 0 0.3 6 Yes Yes For sedation in case of intubation. dose vial King Supraglottic Airway (SGA) 0 1 2 Yes Yes Establish and maintain patent airway and

| Tube (size 3/size 4) |  |  | ventilation. |
| -------------------- | --- | ---- | ------------------ |
| Laryngoscope (blade) | 0 1 | 1 No | Yes For intubation |
| Laryngoscope handle | 0 1 | 1 No | Yes For intubation |

Medical tape 0.03 1 5 Yes No single-coated tapepressure adhesive tape 5/11/2020 4:37:41 PM Traumatic Hypovolemic Shock Cliff page: 8

Units

|  | Units Units | Available |  |
| -------- | ----------------- | ------------------ | ------------------- |
|  | Required Required | At Start |  |
|  | Best Worst | Of |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |

Nasal Airway (6mm, 7mm) 0 1 2 No Yes Establish and maintain patent airway and ventilation.

| Needle (23G) | 0 6 | 20 Yes | Yes For medication administration |
| ------------ | --- | ------ | --------------------------------- |

Nitrile gloves (large, medium, and 1 2 30 Yes No Personal Protective equipment for CMO small) (pair) Oral Airway 0 1 2 No Yes Establish and maintain patent airway and ventilation. Pack of 12 ECG electrodes 1 1 5 Yes Yes Measure and monitor ECG PEEP Valve 0 1 1 No Yes Provides positive airway pressure during ventilation SGA Cue Card 0 1 1 No Yes Guidance for use of supraglottic airway Sharps container 1 1 40 No No To dispose of medical waste such as used medical needles, scalpels, IV catheters, razors, vials Stethoscope 1 1 2 No Yes to listen to lung,heart, and bowel sounds, to blood flow in arteries and veins

| Suction Cartridge | 0 1 | 1 No | Yes Provide medical suction |
| ----------------- | --- | ---- | ------------------------------------ |
| Suction device | 0 1 | 1 No | Yes to clean out secretions or vomit |

Suction device collection bag 0 1 2 Yes No To collect fluids suctioned from mouth/airway Suction device syringe 0 1 1 No Yes to remove fluids, secretions, vomit from mouth Suction tip - mouth (curette) 0 1 1 No Yes used for suction by inserting into the end of a suction tube Suction Tubing - Endotracheal 0 1 1 Yes Yes Provide airway suctioning Tube Surgical Lubricant 0 1 6 Yes No Provide lubrication for the IMLA insertion.

Syringe (10cc) 0 1 6 Yes Yes Drug administration and inflation of cuffs

| Syringe (35cc) | 0 1 | 1 Yes | Yes inflation of SGA |
| -------------- | --- | ------ | ------------------------------------- |
| Syringe (3cc) | 1 6 | 20 Yes | Yes Medication administration. |
| T-adapter | 0 1 | 1 No | Yes Connection for ventilation tubing |
| Thermometer | 1 1 | 1 No | No To measure temperature |

Tongue depressor 0 1 20 Yes No Aids in visualizing vocal cords during endotrachael intubation when necessary.

Tourniquet 1 1 1 No No To stop blood flow and engorge vein, this facilitates IV insertion Valium (Diazepam) 5 mg/mL, 2 0 1 2 Yes Yes For sedation with intubation mL syringe 5/11/2020 4:37:41 PM Traumatic Hypovolemic Shock Cliff page: 9

Units

|  | Units Units | Available |  |  |  |
| -------- | ----------------- | --------- | -------------------- | --------- | --- |
|  | Required Required | At Start |  |  |  |
|  | Best Worst | Of |  |  |  |
| Resource | Case Case | Mission | Consumable Essential | Rationale |  |

Variable Oxygen System 0 1 1 No Yes Contains equipment required to deliver oxygen. VOS Intubated Patient Hardware 0 1 1 No Yes Mechanical Ventilation (Ventilator/Respirator)

### Resource Comments

The sources of the resource table data was derived from the ISS Medical Check List (Mission Operations Directorate (MOD), 2011).

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value |  | LOE Category |  |
| ----------------------------------------------- | --- | --------- | --- | ------------ | --- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 |  | Resources |  |

### Level Of Evidence

| Input Data | LOE Average |  | Description |  | Range |
| ---------------------- | ----------- | --- | ----------- | --- | ----- |
| Incidence | 4 |  | Excellent |  | 1-2 |
| Functional Impairment | 3 |  | Good |  | 2.1-3 |
| Best Case / Worst Case | 4 |  | Fair |  | 3.1-4 |
| EVAC / LOCL | 3 |  | Poor |  | 4.1-5 |
| Resources | 2 |  |  |  |  |
| QUALITY OF EVIDENCE | 3.2 |  |  |  |  |

5/11/2020 4:37:41 PM Traumatic Hypovolemic Shock Cliff page: 10

### Reference List

Reference American Medical Association. Central and Peripheral Nervous System. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 321-45.

American Medical Association. Cardiovascular System. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed.

- Chicago: American Medical Association Press; 2008. p. 47-76.

American Medical Association. Hematopoietic System. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed.

- Chicago: American Medical Association Press; 2008. p. 183-212.

Baker E, Barratt M, Wear M. Human Response to Space Flight. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 27-57.

Bulger EM, Jurkovich GJ, Nathens AB, Copass MK, Hanson S, Cooper C, et al. Hypertonic resuscitation of hypovolemic shock after blunt trauma: a randomized controlled trial. Arch Surg 2008 Feb;143(2):139-48.

Goldberg RJ, Gore JM, Thompson CA, Gurwitz JH. Recent magnitude of and temporal trends (1994-1997) in the incidence and hospital death rates of cardiogenic shock complicating acute myocardial infarction: the second national registry of myocardial infarction. Am Heart J 2001 Jan;141(1):65-72. IMM FI Guidelines. IMM Functional Impairment Guidelines for the Clinical Findings Form (CliFFs). 12-31-2010.

Ledingham IM, Fisher WD, McArdle CS, Maddern M. The incidence of the shock syndrome in a general hospital. Postgrad Med J 1974 Jul;50(585):420-4. NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

Reed P. The Medical Disablity Advisor - Hypovolemic Shock. 2nd. 2011. Horsham, PA.

Zenati M. Hypovolemic Shock: Quantifying the Risk of Hypotension and Hypothermia in Severely Injured Trauma Patients. 2005. 5/11/2020 4:37:41 PM Traumatic Hypovolemic Shock Cliff page: 11

---

## Source metadata

```yaml
source_filename: "traumatic-hypovolemic-shock-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/12bxBmeot9h9v7rSZABZg2o8l02YJfSBs/view"
source_drive_id: "12bxBmeot9h9v7rSZABZg2o8l02YJfSBs"
source_sha256: c4a4233dcd74f47c4f1a493f2c15bde4148d6c31beebcd9adce27ac48ad5a2fb
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 11
ocr_performed: false
```
