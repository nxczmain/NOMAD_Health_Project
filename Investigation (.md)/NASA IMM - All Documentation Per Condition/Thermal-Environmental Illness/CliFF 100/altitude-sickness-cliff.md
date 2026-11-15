# Altitude Sickness CLiFF

[View original PDF](https://drive.google.com/file/d/1pVRi3AzGIQs9Ov5Q-3QkTL_YQQ7M_mQ-/view) · **11 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

### Altitude Sickness Cliff

## Branch Baseline

Hypoxia is a state of oxygen deficiency sufficient to cause impairment of function. A cabin leak may result in reduced cabin pressure resulting in hypobaric hypoxia. An environmental control mishap in which cabin pressure is maintained but oxygen level is inadequately sustained may cause normobaric hypoxia. Once hypoxia has been recognized, resolving the oxygen deficiency is the indicated treatment. In space travel, hypoxia can also occur with inadequate gas mixing and uneven cabin ventilation. Either the rapid or gradual onset of hypoxia can be dangerous. An acute hypoxic exposure is an operational emergency. Immediate corrective action or escape is required. (Bacal, 2008)

Altitude sickness represents a spectrum of pathologic states initiated by an exaggerated vascular response to hypoxia. Syndromes include acute mountain sickness (AMS), high altitude cerebral edema (HACE), high altitude pulmonary edema (HAPE), and high altitude retinal hemorrhage. The potential for AMS in space operations exists during staged decompression prior to EVA or following inadvertent pressure reduction due to partial loss of spacecraft atmosphere. (Clark, 2008)

An AMS worksheet has been developed for space flight, which is a modification of the Lake Louise AMS self-report questionnaire and clinical functional assessment. Fatigue and headache are common during space flight, with or without hypoxia. Changes in these symptoms are not necessarily diagnostic, but providing a numerical score may be useful to monitor treatment and resolution. (Clark, 2008).

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

| Data Category: | Model |  |
| ----------------- | ----- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Lognormal |  |
| ----------- | --------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Mean: | 5.43E-05 |  |
| -------------------- | ----------------------- | ------- |
| Standard Deviation: | 6.32E-05 |  |
| 5/11/2020 4:29:13 PM | Altitude Sickness Cliff | page: 1 |
## Incidence Comments

Altitude sickness has not occurred among US astronauts in flight. (Walton, 2010) Lacking in-flight data IMM requested a risk trade study. The likelihood is based on the probability of loss of function of the oxygen generation systems on ISS. It does not reflect the rate of change of ppO2 levels or the probability of various ppO2 levels. The version 1.2 interim 10A PRA model was run for a 6 month mission time to extract the event probabilities from the model end states. The results of this analysis include probability of occurrence over a 6 month period and the same probabilities expressed as failure rates, in number of failures per hour. (Haines, 2008) The incidence rate and standard deviation were calculated from the PRA analysis results by the IMM biostatistician: 5.43 X 10 e-5 events per year and 6.32 X 10e-5 SD respectively. (Minard, 2011)

### Information Regarding Prevention

Selection criteria Disqualifying conditions in general, are any medical condition that, in the judgment of the MSMB, may compromise mission operations, performance of duties, or crew health or safety. Crew members must meet medically specific standards for periodic altitude chamber exposures to10,000 meters. Appearance of subjective symptoms , such as pain, nausea, dizziness, dyspnea, weakness, visual darkening, itching, bends, or other subjective feelings of discomfort; or certain specific cardiovascular symptoms may require the individual to undergo further training to accomplish the altitude chamber training objectives. They are not in themselves disqualifying for ISS crewmember duties, unless they are determined to be due to a pathological condition after subsequent medical testing. (International Space Station Program, 2009)

Vehicle requirements Oxygen supply. Contingency measures Immediate treatment for altitude hypoxia is with oxygen, preferably with the Quick-Don Mask which delivers 100% oxygen. Periodic crew training in an altitude chamber and drills on orbit allow crewmembers to recognize their own hypoxia symptoms. In the case of a loss of cabin pressure, mitigating factors for the prevention of Altitude Sickness (altitude hypoxia) on orbit for ISS are: Immediate use of Quick-Don Mask and connect to ship’s oxygen supply, or Walk Around Bottle (100% oxygen). Isolate crewmembers from the module that is losing pressure if possible, by sealing off module and translating to another module or to the Soyuz. Flight rules require EVAC of the International Space Station if the oxygen level drops to greater than or equal to 10,000 feet cabin altitude for longer than 24 hours. (Bacal, 2008)

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Haines, 2008 2 Incidence 5/11/2020 4:29:13 PM Altitude Sickness Cliff page: 2

### Alternative Incidence Data

Each year, the US Antarctic Program rapidly transports scientists and support personnel from sea level (SL) to the South Pole (SP), 2835 m (9301 feet) providing a unique natural laboratory to quantify the incidence of acute mountain sickness (AMS). The incidence of AMS at SP tended to be higher than previously reports in other geographic locations at similar altitudes. (Anderson, 2011)

Acute mountain sickness (AMS) is a syndrome typically arising in the first 1–2 days at a higher altitude and is characterized by the presence of a headache along with sleep disturbance, gastrointestinal symptoms, fatigue, and dizziness or lightheadedness. High altitude cerebral edema (HACE) is a syndrome often diagnosed in the presence of acute mountain sickness when mental status changes or ataxia emerge. High altitude pulmonary edema (HAPE), usually occurs after 2–4 days at altitude and may present rapidly in individuals with no signs of AMS. Each of these syndromes presents a health risk to polar workers and may significantly impair judgment or disrupt work productivity. The case definition for AMS utilized the standard Lake Louise Symptom Scoring System (LLSS) which requires the presence of a headache and an overall symptom score of 3 or greater. (Anderson, 2011) This group was 70% male with a mean age of 36.8 +/-10.6 years. Shortness of breath with activity was the most commonly reported symptom (87%), followed by sleeping difficulty (74%), headache (66%), fatigue (65%), dizziness/lightheadedness (46%) and general functional limitation (41%). Overall symptoms peaked on Day 2 (LLSS = 2.5 +/- 2.1). Using strict Lake Louise Criteria, 52% of subjects satisfied acute mountain sickness criteria at some point during their visit to altitude. On Day 1, 24% met acute mountain sickness criteria, and 33% met criteria on Day 2, with steadily decreasing values from 15 to 4% on Days 3 to 7. During the 2006 season, 2.8% (7 of 246) workers were evacuated from the South Pole for symptoms consistent with HAPE. (Anderson, 2011)

A survey was conducted to estimate the incidence of high altitude illness among 3628 unacclimatized persons who had no previous high altitude experience and who traveled to Tibet by air to an altitude of 3600 m (11811 feet.) These subjects were asked to answer questions in a written questionnaire about symptoms associated with high altitude illnesses that occurred within 2 weeks of their first arrival, their severity, and possible contributing factors. Physical examination and appropriate laboratory tests were also performed for hospitalized subjects. They found that 2063 respondents had mild acute mountain sickness with an incidence of 57.2%, and 249 (12.07%) of them were hospitalized for treatment.

The incidence of high altitude pulmonary edema was 1.9%, while no case of high altitude cerebral edema was found. Additionally, there was no report of death. Psychological stresses and excessive physical exertions possibly contributed to the onset of HAPE. Acute mountain sickness is common among unacclimatized persons after their acute ascent to Tibet. The incidence of HAPE and HACE, however, is very low among them. (Ren, 2010) HAPE/HACE The incidence of HAPE is not known. Epidemiology applies numerous different diagnostic criteria and HAPE severity varies across population, thus numerator and denominators have been estimates. The incidence of HAPE is estimated to be one order of magnitude less than that of acute mountain sickness. Hall reported, based on different studies, HAPE ranging from 0.01% at 2,500m (8202 feet), 1.9 at 3600m (11,811 feet) and 2.5 to 5% at 4,300m (14,107 feet). Data above 4,500m (14,764 feet) is less reliable and generally related to mortality (Hall, 2011). The largest study today (Ren, 2010) reported HAPE at 1.9%, while a study with 262 subjects found 15% had chest rales or interstitial edema on radiograph after ascent (Cremona, 2002).

Incidence of HACE ranges from 0.01% at 2000m (6561.7 feet), 1.2% in the Indian armed forces at altitudes of 5,500m (18044.6 feet) to 1.8% in trekkers at 4,300 meters (14107.6 feet). (Roach, 2002)

The mortality rate for combined HACE/HAPE is 0.12% (Windsor, 2009) at extreme altitude and 0.022% at 6194m (20321.5 feet) in Alaska (McIntosh, 2008) . In a number of cases, HAPE and HACE coexist. Up to 20% of those who present with HAPE also demonstrate signs of HACE, while up to 50% of those who died from HAPE also had evidence of HACE on autopsy. (Windsor, 2009) 5/11/2020 4:29:13 PM Altitude Sickness Cliff page: 3

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.5 3 - 46 24 - 36 - 48 0 0 0 (best case scenario %: 97 - 100) ISS-based Treatment 100 0.5 - 1 21 - 70 48 - 60 - 72 0 - 70 100 0 - 100 (worst case scenario %: 0 - 3) Untreated Best Case 0 0 21 - 70 24 - 36 - 48 0 - 46 0 - 100 0 Untreated Worst Case 0 0 48 - 100 48 - 60 - 72 48 - 100 100 100 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 4:29:13 PM Altitude Sickness Cliff page: 4

### Scenario Comments

Acute mountain sickness (AMS) is a syndrome typically arising in the first 1–2 days at an elevated altitude. It is diagnosed by the presence of a headache along with sleep disturbance, gastrointestinal symptoms, fatigue, and dizziness or lightheadedness. High altitude cerebral edema, is a syndrome often diagnosed in the presence of acute mountain sickness when mental status changes or ataxia emerge. High altitude pulmonary edema, usually occurs after 2–4 days at altitude and may present rapidly in individuals with no signs of AMS. (Anderson, 2011)

The best case scenario is defined as a mild case of altitude sickness, which resolves with oxygen use and acetazolamide (Diamox), or return to standard environmental conditions.

The worst case scenario is defined as moderate to severe altitude sickness, which may lead to high altitude pulmonary edema (HAPE) and high-altitude cerebral edema (HACE) which are life-threatening if untreated.

The percentage of how often best versus worst case scenario occur was estimated considering the incidence of HAPE and HACE in terrestrial studies. A group of military recruits ascending by plane to Tibet, 3600m ( 11,811 feet) reported 1.9% HAPE incidence and no cases of HACE (Ren, 2010) In Antarctica (SP, 2835 m (9301 feet), the incidence of HAPE has been reported at 2.84% (7/246) and no cases of HACE. (Anderson, 2011). The incidence of HACE is lower and it ranges from 0.01% in the western United States to 1.8% in Mount Everest. (Roach,

2002) To allow for uncertainty our worst case scenario is estimated at 0-3%, thus our best case percentage is 97-100%.

### Best Case Comments

Altitude Sickness is a multi-system medical condition and it is not included as a condition in the American Medical Association guides to the Evaluation of Medical Impairment. The calculation of functional impairments (FI) follows the IMM standard template for severe conditions. It requires combining two tables. Pulmonary Dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008)and Consciousness and Awareness ratings are based on Table 13-4, p. 327 (American Medical Association, 2008). Combined FI ratings are calculated using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). Refer to the CliFF Appendix for further information. By definition during Clinical Phase I, FI is 100% and duration is estimated to be 30 minutes for health exam as called out in the ISS medical checklist. During Clinical Phase II, Functional Impairment is estimated to be 3-46%. Duration is estimated to be 24 to 48 hours based on the Antarctic analog. (Anderson, 2011) During Clinical Phase III, FI is 0%. By definition complete recovery is expected with no EVAC or LOCL.

### Worst Case Comments

Altitude Sickness is a multi-system medical condition and it is not included as a condition in the American Medical Association guides to the Evaluation of Medical Impairment. The calculation of functional impairments (FI) follows the IMM standard template for severe conditions. It requires combining two tables. Pulmonary Dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008) and Consciousness and Awareness ratings are based on Table 13-4, p. 327 (American Medical Association, 2008). Combined FI ratings are calculated using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). Refer to the CliFF Appendix for further information. By definition during Clinical Phase I, FI is 100% and duration is estimated to be 30 to 60 minutes. Including physical exam, respiratory support and starting intravenous fluids. During Clinical Phase II, Functional Impairment is estimated at 21-70%. Estimated duration in the Antarctic was up to 7 days. IMM estimated duration at 48-72 hours, 2 to 3 days, based on time when symptoms peak (Anderson, 2011 4111 /id } and time to EVAC. During Clinical Phase III, recovery may or may not occur; FI is estimated at 0-70%. Hospitalization has occurred at a rate of 12% in the military {Ren, 2010) and EVAC has occurred among Antarctic workers at a rate of 2.8% (Anderson, 2011). Mortality rates have been estimated to be 0.0012 for HACE and HAPE (Windsor, 2009). To allow for uncertainty EVAC and LOCL are estimated to be 100%.

### Untreated Best Case Comments

Altitude Sickness is a multi-system medical condition and it is not included as a condition in the American Medical Association guides to the Evaluation of Medical Impairment. The calculation of functional impairments (FI) follows the IMM standard template for severe conditions. It requires combining two tables. Pulmonary Dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008) and Consciousness and Awareness ratings are based on Table 13-4, p. 327 (American Medical Association, 2008). Combined FI ratings are calculated using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). Refer to the CliFF Appendix for further information. During Clinical Phase II, Functional Impairment is estimated to be 21-70%. Duration is estimated to be 24-48 hours, similar to the treated best case scenario. During Clinical Phase III, FI is 0-46%. Without treatment available, EVAC is estimated at 0-100%. LOCL is estimated at 0%. 5/11/2020 4:29:13 PM Altitude Sickness Cliff page: 5

### Untreated Worst Case Comments

Altitude Sickness is a multi-system medical condition and it is not included as a condition in the American Medical Association guides to the Evaluation of Medical Impairment. The calculation of functional impairments (FI) follows the IMM standard template for severe conditions. It requires combining two tables. Pulmonary Dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008) and Consciousness and Awareness ratings are based on Table 13-4, p. 327 (American Medical Association, 2008). Combined FI ratings are calculated using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). Refer to the CliFF Appendix for further information. During Clinical Phase II, Functional Impairment is estimated to be 48-100%. Duration is estimated at 48 to 72 hours, similar to the treated worst case scenario. During Clinical Phase III, FI remains 48 to 100%. EVAC and LOCL are expected at 100% without available treatment.

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ---------------------------------- | ----------------------- | ------------ | ------- |
| Ren, 2010 | 4 | BCWC |  |
| Anderson, 2011 | 2 | BCWC |  |
| Roach, 2002 | 4 | BCWC |  |
| American Medical Association, 2008 | 3 | FI |  |
| American Medical Association, 2008 | 3 | FI |  |
| American Medical Association, 2008 | 3 | FI |  |
| Windsor, 2009 | 4 | EVAC |  |
| 5/11/2020 4:29:13 PM | Altitude Sickness Cliff |  | page: 6 |
### Additional Comments

On October 5, 1993, U.S. Astronaut Dr. Henize died of High Altitude Pulmonary Edema (HAPE) on Mount Everest, after reaching an altitude of 21,000 feet, (Carr, 1993), (National Aeronautics and Space Administration (NASA), 2007).

| 5/11/2020 4:29:13 PM | Altitude Sickness Cliff | page: 7 |
| -------------------- | ----------------------- | ------- |
The Resource Table (RT) Units

|  | Units Units | Available |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |

Ambu bag and mask 0 1 1 No Yes Hand-held device used to provide positive pressure ventilation to a patient who is not breathing or is breathing inadequately Blood Oximeter 1 1 1 No Yes Monitors the oxygen saturation of a patient's blood Blood Pressure Cuff (regular, 1 1 2 No Yes Measure blood pressure large)

| Blood Pressure Monitor | 1 1 | 1 No | Yes Measure blood pressure |  |
| ---------------------- | --- | ------ | ---------------------------------------- | --- |
| BZK wipes | 0 1 | 60 Yes | No Cleanse skin. |  |
| CMRS | 0 1 | 1 No | No Restrain crew member to ensure safety |  |

Dexamethasone (Decadron) 0 2 20 Yes Yes Administered for the anti-inflammatory effect 10mg injectable Diamox (Acetazolamide) 250 mg 6 0 100 Yes Yes Administered for the effects of symptoms of

| tablets |  |  | altitude sickness. |  |
| ------- | --- | --- | ------------------ | --- |

ECG Monitor (Device, USB 0 1 1 No Yes Measure and monitor ECG Charge Cable, Lead Set Cable,

### Cue Card)

| Endotracheal Stylet | 0 1 | 1 No | Yes To provide ventilation |  |
| ------------------- | --- | ---- | -------------------------- | --- |

Endotracheal Tube 7.0/8.0 0 1 4 Yes Yes Establish and maintain patent airway and ventilation

| EtCO2 Monitor with EMMA | 0 1 | 1 No | Yes Measure end tidal CO2 |  |
| ----------------------- | --- | ---- | ------------------------- | --- |

adapter

| IV administration set | 0 1 | 3 Yes | Yes IV Fluids infusion |  |
| --------------------- | --- | ----- | --------------------------------- | --- |
| IV Cap | 0 1 | 5 Yes | No To maintain IV when not in use |  |

IV Catheter (18G, 20G, or 22G) 0 1 14 Yes Yes IV fluid administration

| IV Fluid 1L (1000mL) | 0 2 | 5 Yes | Yes To replenish fluids |  |
| -------------------- | --- | ----- | ----------------------- | --- |
| IV Fluid Air Filter | 0 1 | 3 Yes | No |  |

To filter air from IV set

| IV pressure infuser | 0 1 | 1 No | No IV Fluids infusion |  |
| ------------------- | --- | ---- | --------------------- | --- |

Ketamine 50 mg/mL, 10 mL multi 0 0.3 6 Yes Yes For sedation in case of

| dose vial |  |  | intubation/ventilation. |  |
| --------- | --- | --- | ----------------------- | --- |

King Supraglottic Airway (SGA) 0 1 2 Yes Yes Establish and maintain patent airway and

| Tube (size 3/size 4) |  |  | ventilation |  |
| -------------------- | --- | ---- | ------------------ | --- |
| Laryngoscope (blade) | 0 1 | 1 No | Yes For intubation |  |
| Laryngoscope handle | 0 1 | 1 No | Yes For intubation |  |

Medical tape 0 0.03 5 Yes No Single-coated tapepressure adhesive tape

| 5/11/2020 4:29:13 PM |  | Altitude Sickness Cliff |  | page: 8 |
| -------------------- | --- | ----------------------- | --- | ------- |
Units

|  | Units Units | Available |  |  |
| ----------------------- | ----------------- | ------------------ | ---------------------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |
| Nasal Airway (6mm, 7mm) | 0 1 | 2 No | Yes Airway management |  |
| Needle (23G) | 0 7 | 20 Yes | Yes For medication administration. |  |
| Oral Airway | 0 1 | 2 No | Yes Airway management |  |

Pack of 12 ECG electrodes 0 1 5 Yes Yes Measure and monitor ECG PEEP Valve 0 1 1 No Yes provide positive pressure ventilation

| Phenergan (Promethazine tablet) | 6 0 | 100 Yes | Yes For N/V. |  |
| ------------------------------- | --- | ------- | ------------ | --- |

25 mg SGA Cue Card 0 1 1 No Yes Guidance for use of supraglottic airway Sharps container 0 1 40 No No For needle and syringe disposal Stethoscope 1 1 2 No Yes To auscultate lungs, heart, and blood flow in arteries and veins

| Suction Cartridge | 0 1 | 1 No | Yes Provide suction |  |
| ----------------- | --- | ---- | ----------------------------------- | --- |
| Suction device | 0 1 | 1 No | Yes To aspirate secretions or vomit |  |

Suction device collection bag 0 1 2 Yes No To collect fluids suctioned from mouth/airway Suction device syringe 0 1 1 No Yes To remove fluids, secretions, vomit from mouth Suction tip - mouth (curette) 0 1 1 No Yes Used for suction by inserting into the end of a suction tube Suction Tubing - Endotracheal 0 1 1 Yes Yes Provide suctioning of airway Tube Surgical Lubricant 0 1 6 Yes No Provide lubrication during the ILMA insertion.

| Syringe (35cc) | 0 1 | 1 Yes | Yes Inflation of SGA tube |  |
| -------------- | --- | ----- | ------------------------- | --- |

Syringe (3cc) 0 8 20 Yes Yes For medication administration and flushing the IV catheter as appropriate.

| T-adapter | 0 1 | 1 No | Yes Ventilation tubing setup |  |
| ---------- | --- | ---- | --------------------------------------- | --- |
| Tourniquet | 0 1 | 1 No | No To stop blood flow and engorge vein, |  |

facilitating IV insertion

| Tylenol (Acetaminophen) 325 mg | 18 0 | 150 Yes | Yes For headache |  |
| ------------------------------ | ---- | ------- | ---------------- | --- |

Valium (Diazepam) 5 mg/mL, 2 0 1 2 Yes Yes for sedation with intubation mL syringe

| Variable Oxygen System | 1 1 | 1 No | Yes To provide ventilation |  |
| ---------------------- | --- | ---- | -------------------------- | --- |

VOS Intubated Patient Hardware 0 1 1 No Yes Mechanical ventilation (Ventilator/Respirator)

| 5/11/2020 4:29:13 PM |  | Altitude Sickness Cliff |  | page: 9 |
| -------------------- | --- | ----------------------- | --- | ------- |
### Resource Comments

The table was revised on December 15, 2011. IV set, Oxygen tubing, ET tube, ET connector, 3 cc syringe, BP cuff. Added IV set, Oxygen tubing, ET tube, ET connector, 3 cc syringe, BP cuff, and BP-ECG were added.

ISS medical checklist include procedures for altitude illness (AMS) (Mission Operations Directorate (MOD), 2011). HAPE and HACE are not addressed. Resources for worst case scenario have been added based on Wilderness Clinical Guidelines (Luks, 2010).

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |  |
| ----------------------------------------------- | --- | --------- | ------------ | --- | --- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 | Resources |  |  |
| Luks, 2010 |  | 3 | Resources |  |  |

### Level Of Evidence

| Input Data | LOE Average | Description |  | Range |  |
| ---------------------- | ---------------- | ----------------------- | --- | ----- | -------- |
| Incidence | 2 | Excellent |  | 1-2 |  |
| Functional Impairment | 3 | Good |  | 2.1-3 |  |
| Best Case / Worst Case | 3.33333333333333 | Fair |  | 3.1-4 |  |
| EVAC / LOCL | 4 | Poor |  | 4.1-5 |  |
| Resources | 2.5 |  |  |  |  |
| QUALITY OF EVIDENCE | 2.96666666666667 |  |  |  |  |
| 5/11/2020 4:29:13 PM |  | Altitude Sickness Cliff |  |  | page: 10 |
### Reference List

Reference American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. American Medical Association. Pulmonary System. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed.

- Chicago: American Medical Association Press; 2008. p. 77-99.

American Medical Association. Central and Peripheral Nervous System. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 321-45.

Anderson PJ, Miller AD, O'Malley KA, Ceridon ML, Beck KC, Wood CM, et al. Incidence and Symptoms of High Altitude Illness in South Pole

- Workers: Antarctic Study of Altitude Physiology (ASAP). Clin Med Insights Circ Respir Pulm Med 2011;5:27-35.

Bacal K, Beck G, Barratt MR. Hypoxia, Hypercarbia, and Atmospheric Control. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 445-73.

Carr J. Former Astronaut Karl Henize Dies on Mt. Everest Expedition. Johnson News . 10-8-1993. Houston, TX, NASA. 12-19-2011.

Clark J. Decompression Related Disorders Pressurization Systems, Barotrauma, and Altitude Sickness. In: Barratt M, Pool S, editors.

Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 247-71.

Cremona G, Asnaghi R, Baderna P, Brunetto A, Brutsaert T, Cavallaro C, et al. Pulmonary extravascular fluid accumulation in recreational climbers: a prospective study. Lancet 2002 Jan 26;359(9303):303-9.

Haines R. Probabilistic Risk Assessment (PRA) Risk Trade Study - Altitude Sickness. PROGRAM INTEGRATION AND CONTROL CONTRACT NNJ04AA01C. Houston, TX: ARES Corporation; 2008 Apr 28. Report No.: ISS-PRA-08-04.

Hall DP, Duncan K, Baillie JK. High altitude pulmonary oedema. J R Army Med Corps 2011 Mar;157(1):68-72.

International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

Luks AM, McIntosh SE, Grissom CK, Auerbach PS, Rodway GW, Schoene RB, et al. Wilderness Medical Society consensus guidelines for the prevention and treatment of acute altitude illness. Wilderness Environ Med 2010 Jun;21(2):146-55.

McIntosh SE, Campbell AD, Dow J, Grissom CK. Mountaineering fatalities on Denali. High Alt Med Biol 2008;9(1):89-95.

Minard C. Altitude Sickness, Incidence Rate & Standard Deviation. Lopez V, editor. 12-15-2011.

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

National Aeronautics and Space Administration (NASA). Karl G. Henize, Biographical Data. National Aeronautics and Space Administration (NASA) Johnson Space Center . 2007. Houston, TX. 12-19-2011.

Ren Y, Fu Z, Shen W, Jiang P, He Y, Peng S, et al. Incidence of high altitude illnesses among unacclimatized persons who acutely ascended to Tibet. High Alt Med Biol 2010;11(1):39-42.

Roach R, Stepanek J, Hackett P. Acute Mountain Sickness and High-Altitude Cerebral Edema. In: Pandolf KB, Burr RE, editors. Medical Aspects of Harsh Environments.Washington, DC: Office of The Surgeon General Department of the Army, United States of America, Borden Institute; 2002. p. 760-88. Walton M, Kerstman E, IMM. In-flight Compilation v20100414_Incidence_calculation. 2010.

Windsor JS, Firth PG, Grocott MP, Rodway GW, Montgomery HE. Mountain mortality: a review of deaths that occur during recreational activities in the mountains. Postgrad Med J 2009 Jun;85(1004):316-21. 5/11/2020 4:29:13 PM Altitude Sickness Cliff page: 11

---

## Source metadata

```yaml
source_filename: "altitude-sickness-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 100"
source_url: "https://drive.google.com/file/d/1pVRi3AzGIQs9Ov5Q-3QkTL_YQQ7M_mQ-/view"
source_drive_id: "1pVRi3AzGIQs9Ov5Q-3QkTL_YQQ7M_mQ-"
source_sha256: b3126855e484ac35015ff97c028719e6ddefff06a5fda069b68a8f2a9fb4164c
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 11
ocr_performed: false
```
