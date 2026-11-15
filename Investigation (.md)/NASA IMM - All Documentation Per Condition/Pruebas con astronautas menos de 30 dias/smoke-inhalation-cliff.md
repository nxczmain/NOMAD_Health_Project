# Smoke Inhalation CLiFF

[View original PDF](https://drive.google.com/file/d/1N0V7TqhhpSNrEKczwivaOFK8PKsVSAup/view) · **11 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Pruebas con astronautas menos de 30 dias

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)
- [Treatment](#treatment)

---

### Smoke Inhalation Cliff

## Branch Baseline

Smoke inhalation has 3 primary mechanisms of injury: thermal damage, asphyxiation, and pulmonary irritation. Thermal damage is typically limited to the oropharyngeal area. In animal studies the inhaled air can be 142o C then when it reaches the carina it has cooled to 38o C. Asphyxia causing tissue hypoxia occurs as the combustion utilizes the oxygen, which decreases the concentration of oxygen to 10-13%. The decrease in fraction of inspired oxygen (FI02) leads to hypoxia. Carbon monoxide further contributes to the tissue hypoxia by decreasing the oxygen-carrying capacity of the blood. Lastly pulmonary irritation can cause direct tissue injury, acute bronchospasm and activation of the body’s inflammatory response system (Lafferty, 2010) Smoke inhalation injury continues to increase morbidity and mortality in burn patients in both the third world and industrialized countries. The lack of uniform criteria for the diagnosis and definition of smoke inhalation injury contributes to the fact that, despite extensive research, mortality rates have changed little in recent decades. The formation of reactive oxygen and nitrogen species, as well as the procoagulant and antifibrinolytic imbalance of alveolar homeostasis, all play a central role in the pathogenesis of smoke inhalation injury. Further hallmarks include massive airway obstruction owing to cast formation, bronchospasm, the increase in bronchial circulation and transvascular fluid flux. Therefore, anticoagulants, antioxidants and bronchodilators, especially when administered as an aerosol, represent the most promising treatment strategies (Rehberg, 2009)

It is important to remember that smoke inhalation injury is not ‘only’ an adjunct to burn trauma; it is an independent injury in and of itself (Alcorta, 2004) Combustion of other materials will be discussed in the Toxic exposure CliFF.

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

- Fixed Rate: 0.01808

5/11/2020 5:48:19 PM Smoke Inhalation Cliff page: 1

## Incidence Comments

Smoke inhalation events have occurred in US astronauts (see detailed description in non-model section) but none have occurred on the ISS.

For this reason, incidence data being used in the IMM are derived from the results of the ISS PRA Fire and Ammonia Model version 3.2.0 (ISS PRA Model v.3.2.0, 2015). The likelihood of the crew needing to respond to a fire event (“FIRE_SUSTAINS”) was used to determine the incidence of smoke inhalation secondary to a fire since this is the most likely scenario for the crew to experience smoke inhalation due to a fire on the ISS. The ISS PRA model calculated total likelihood for a six month time period that at least one crew response-level fire event occurs (“FIRE_SUSTAINS”). Mean was 9.04E-03 events per six months; 5th and 95th percentiles were 1.79E-03 and 2.53E-02 respectively. {Ref: ISS PRA Model v.3.2.0, 2015} Therefore, the IMM annual incidence of smoke inhalation is estimated as 0.01808 events/person years (0.00904 * 2 to convert from 6 months to 1 year). . More detailed description of those events in other vehicles are in the non-model section.

### Information Regarding Prevention

Since this condition results from mechanial failure the NASA medical screening and selection does not apply to this condition. There are engineering standards and equipment readiness to are in in place to prevent this type of even.

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

ISS PRA Model v.3.2.0, 2015 3 Incidence 5/11/2020 5:48:19 PM Smoke Inhalation Cliff page: 2

Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

| Data Category: | In-flight |  |
| ----------------- | --------- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Gamma |  |
| ----------- | ------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Events: | 3 |  |
| ---------------------------------------------------- | ----------------------------- | --- |
| Person Years: | 27.36 |  |
| Space Flight Incidence Rate (Events / Person Years): | 3 / 27.36 = 0.109649122807018 |  |

## Incidence Comments

Our in-flight data compilation showed no cases of smoke inhalation. However we found several references in the literature about cases of smoke inhalation in flight: Several small fires on previous missions have also resulted in episodes of mild smoke inhalation (Summers, 2005). "The smoke was the most surprising thing to me. I did not expect smoke to spread so quickly… it was very surprising how fast and rapid the smoke spread throughout the complex. The crew immediately began putting on oxygen masks. Linenger's first mask failed to activate quickly enough, so he grabbed another one. He said that in the time between trying the two masks, the space station’s atmosphere became unbreathable… everyone immediately went to the oxygen ventilators…From my assessment, I [didn’t] see where anyone had any serious [smoke] inhalation damage, and it was due to good action by the crew to get into the oxygen masks quickly" (Morgan, 2001).

In microgravity a larger portion on of CO is produced than in a comparable earth based fire. 3 fires MIR 1997… Done respirators. No other treatment…, MIR 1998, a fire caused symptoms in 1 crew member, elevated CO for 80 hours, crew seemed fine. Evening and next day, 1 crew member reported headache and nausea (James, 2008)

The experience on Mir provided a glimpse of the potential risks of contamination from the very systems designed to protect the health of the crew... Oxygen canisters in Mir presented a life-threatening problem for the crew when they caught fire…There was danger not only from fire but also from the smoke and particulate matter released from the canisters themselves. (IOM Institute of Medicine, 2001)

| 5/11/2020 5:48:19 PM | Smoke Inhalation Cliff | page: 3 |
| -------------------- | ---------------------- | ------- |
### Information Regarding Prevention

## Treatment

Respiratory (BLS) and Advanced Trauma Life Support (ATLS) can be provided by HMS (Campbell, 2002) ;(Evetts, 2005);(Johnston, 2004).

However, we have to acknowledge the difficulty in providing the patient with suitable intensive care in the short term, or the impossibility of such for exploration-class missions. Certainly many scenarios (possibly the majority) can be envisioned in which even with perfect BLS, the patient will not survive. (Evetts, 2005) Contingency measure Use of respirators Other: NASA requirements and documents support safety first. (Certification of flight readiness Smoke inhalation results from an environmental situation where there are no real medical preventive measures available.

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| -------------------- | ---------------------- | ------------ | ------- |
| Morgan, 2001 | 1 | Incidence |  |
| James, 2008 | 1 | Incidence |  |
| 5/11/2020 5:48:19 PM | Smoke Inhalation Cliff |  | page: 4 |
### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.25 3 - 46 0.58 - 0.79 - 1 0 0 0 (best case scenario %: 72 - 100) ISS-based Treatment 100 1 21 - 70 1 - 24.5 - 48 0 - 70 0 - 58 0 - 11 (worst case scenario %: 0 - 28) Untreated Best Case 0 0 21 - 70 0.58 - 0.79 - 1 0 - 46 0 0 Untreated Worst Case 0 0 48 - 100 1 - 24.5 - 48 48 - 100 100 100 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 5:48:19 PM Smoke Inhalation Cliff page: 5

### Scenario Comments

The best case scenario is defined a small fire with minimal smoke and the crewmember is conscious, with no breathing difficulty.

The worst case scenario is defined as the crewmember having difficulty breathing or is unconscious and not breathing.

Percentages of how often best versus worst case scenarios occur The probabilities of best case and worst case were estimated based on the scenarios provided by the PRA Fire and Ammonia Model version 3.2.0 (ISS PRA Model v.3.2.0, 2015) for a six month ISS mission. The ISS PRA Model estimated the likelihood that one or more crew members will be exposed to a response-level event and in the module where a fire event develops (mean 2.52E-03). ({ISS PRA Model v.3.2.0, 2015)} This is considered to be the worst case scenario since a significant fire event has occurred in close proximity to one or more crew members without the ability to prepare to respond to the fire with the use of personal protective equipment. The ISS PRA Model also calculated the likelihood of the crew needing to respond to a fire event (“FIRE_SUSTAINS”, mean 9.04E-03) {Ref: ISS PRA Model v.3.2.0, 2015}, so that the likelihood that the crew would sustain medical impacts (smoke inhalation, toxic exposure, burn) from responding to that event could be obtained. Therefore, a worst case smoke inhalation event is estimated as 0-28% to account for uncertainty, with the upper bound derived from the ratio of the mean values of the likelihood of these response-level events (0.00252 / 0.00904 = 0.28). Thus a best case event is estimated as 72-100%.

Coincidentally, terrestrial data from the CDC (Blindauer, 2003) reports that overall, 5.9% (95% CI = 2.9%–8.9%) of persons with residential fire– related injuries were hospitalized. For all patients, 54.5% (95% CI = 38.3%--70.8%) had a principal diagnosis of anoxia (carbon monoxide poisoning and smoke inhalation) Based on in-flight anecdotal data, all cases have been best cases.

### Best Case Comments

Smoke inhalation affects respiratory function and may cause unconsciousness. The functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Pulmonary dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008).

Consciousness and Awareness is based on Table 13-4, p.327 (American Medical Association, 2008). Combined FI ratings are calculated combining the Pulmonary dysfunction FI and Consciousness and Awareness using the Combined Values Chart as indicated in Appendix A, pp 604-60 (American Medical Association, 2008). Refer to this CliFF Appendix for further description of grading and calculation of functional impairment. In Clinical Phase I, by definition FI is estimated as 100%. Time to follow ISS procedures for best case smoke inhalation will take approximately 15 minutes. During Clinical Phase II, FI is estimated to be 3 to 46%. Follow-up treatment as per the ISS checklist is estimated in half to 1 hour, considering that vital signs are assessed for 30 minutes and the crew member may need to contact surgeon for PMC.

- Clinical Phase III: Full recovery is expected in this scenario and FI is estimated to be 0%. Based on anecdotal in-flight data (James, 2008);

(Morgan, 2001) By definition EVAC and LOCL are not expected for the best case scenario.

### Worst Case Comments

Smoke inhalation affects respiratory function and may cause unconsciousness. The functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Pulmonary dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008).

Consciousness and Awareness is based on Table 13-4, p.327 (American Medical Association, 2008). Combined FI ratings are calculated combining the Pulmonary dysfunction FI and Consciousness and Awareness using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). Refer to this CliFF Appendix for further description of grading and calculation of functional impairment. In Clinical Phase I, by definition FI is estimated as 100%. Time to follow ISS procedures for worst case smoke inhalation may take 1 to 2 hours if respiratory support is required. During Clinical Phase II: FI is estimated to be 21 to 70%.

Duration is estimated in 1 to 72 hours to follow procedures indicated in ISS medical checklist. In Clinical Phase III: FI is estimated to be 0 to 70%. Worst case Smoke inhalation would be a Class II medical event, e.g. a significant medical event with potential for mission impact or evacuation (Johnston, 2008). Edelman’s study determined that for the age range 30 to 50 and older, ventilatory support was required for 44 to 58% of survivors with inhalation injury. Since the astronaut population is typically healthier than the general population, and to account for uncertainty, EVAC is estimated as 0 to 58% for this scenario. Mortality rates have been estimated at 7% for subjects with no burn and smoke inhalation (Clark, 1992)and 11% for age 50 years and older in a later study (Edelman, 2006). Based on these rates, given the fact that the astronaut population is typically healthier than the general population, and to account for greater uncertainty, LOCL is etimated as 0 to 11% for this scenario. 5/11/2020 5:48:19 PM Smoke Inhalation Cliff page: 6

### Untreated Best Case Comments

Smoke inhalation affects respiratory function and may cause unconsciousness. The functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Pulmonary dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008).

Consciousness and Awareness is based on Table 13-4, p.327 (American Medical Association, 2008). Combined FI ratings are calculated combining the Pulmonary dysfunction FI and Consciousness and Awareness using the Combined Values Chart as indicated in Appendix A, pp 604-60 (American Medical Association, 2008). Refer to this CliFF Appendix for further description of grading and calculation of functional impairment. During Clinical Phase II, FI is estimated to be 21 to 70%. Duration is similar to the treated best case scenario. In Clinical Phase III, FI is estimated to be 0 to 46%. Recovery might be possible based in the amount of smoke inhaled, the reaction to it, and scrubbing of the environment by on-board resources, or simply by moving away from the source. By definition, EVAC and LOCL are estimated at 0%.

### Untreated Worst Case Comments

Smoke inhalation affects respiratory function and may cause unconsciousness. The functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Pulmonary dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008).

Consciousness and Awareness is based on Table 13-4, p.327 (American Medical Association, 2008). Combined FI ratings are calculated combining the Pulmonary dysfunction FI and Consciousness and Awareness using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). Refer to this CliFF Appendix for further description of grading and calculation of functional impairment.

- During Clinical Phase II: FI is estimated to be 48 to 100% and duration is 1 to 72 hours similar to the treated worst case scenario. In Clinical

Phase III; recovery is unlikely and FI is estimated to remain 48 to 100%. Worst case Smoke inhalation would be a Class III medical event, a significant medical event requiring evacuation if occurring in orbit. Hospitalization has occurred for toxic inhalation among astronauts (Johnston, 2008). Thus EVAC is estimated in 100%. Considering that smoke inhalation injury victims require intensive care and/or ventilatory support (Edelman, 2006), LOCL is estimated at 100% without treatment.

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ---------------------------------- | ---------------------- | ------------ | ------- |
| American Medical Association, 2008 | 3 | FI |  |
| American Medical Association, 2008 | 3 | FI |  |
| American Medical Association, 2008 | 3 | FI |  |
| James, 2008 | 2 | EVAC |  |
| Morgan, 2001 | 2 | EVAC |  |
| Clark, Jr., 1992 | 4 | EVAC |  |
| Edelman, 2006 | 4 | EVAC |  |
| ISS PRA Model v.3.2.0, 2015 | 3 | BCWC |  |
| 5/11/2020 5:48:19 PM | Smoke Inhalation Cliff |  | page: 7 |
The Resource Table (RT) Units

|  | Units Units | Available |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |

Albuterol inhaler (Proventil) 90 0 2 3 Yes Yes to open bronchial airways, In ISS procedure

| mcg, 6.7 gm |  |  | & Terrestrial standard of care (Rehberg) |  |
| ----------- | --- | --- | ---------------------------------------- | --- |

Ambu bag and mask 0 1 1 No Yes hand-held device used to provide positive pressure ventilation to a patient who is not breathing or is breathing inadequately Blood Oximeter 1 1 1 No Yes monitors the oxygen saturation of a patient's blood Blood Pressure Cuff (regular, 1 1 2 No Yes Measure blood pressure large)

| Blood Pressure Monitor | 1 1 | 1 No | Yes Measure blood pressure |  |
| ---------------------- | ---- | ------ | ---------------------------------------- | --- |
| BZK wipes | 0 14 | 60 Yes | No Cleanse skin. |  |
| CMRS | 0 1 | 1 No | No Restrain crew member to ensure safety |  |

Dexamethasone (Decadron) 0 5 20 Yes Yes For airway inflammation 10mg injectable ECG Monitor (Device, USB 0 1 1 No Yes Measure and monitor ECG Charge Cable, Lead Set Cable,

### Cue Card)

Endotracheal Stylet 0 1 1 No Yes Assist with advanced airway placement Endotracheal Tube 7.0/8.0 0 1 4 Yes Yes Establish and maintain patent airway and ventilation.

| EtCO2 Monitor with EMMA | 0 1 | 1 No | Yes Measure end tidal CO2 |  |
| ----------------------- | --- | ---- | ------------------------- | --- |

adapter Gauze pads (4x4) 0 6 50 Yes No to absorb blood or fluids from skin

| IV administration set | 0 1 | 3 Yes | Yes To infuse IV fluids |  |
| --------------------- | --- | ----- | --------------------------------- | --- |
| IV Cap | 0 1 | 5 Yes | No To maintain IV when not in use |  |

IV Catheter (18G, 20G, or 22G) 0 1 14 Yes Yes IV fluid administration

| IV Fluid 1L (1000mL) | 0 1 | 5 Yes | Yes IV fluid for hydration. |  |
| -------------------- | --- | ----- | ----------------------------- | --- |
| IV Fluid Air Filter | 0 1 | 3 Yes | No To filter air from IV line |  |

IV pressure infuser 0 1 1 No No IV fluid administration in reduced gravity Ketamine 50 mg/mL, 10 mL multi 0 0.3 6 Yes Yes For sedation in case of

| dose vial |  |  | intubation/ventilation. |  |
| --------- | --- | --- | ----------------------- | --- |

King Supraglottic Airway (SGA) 0 1 2 Yes Yes Establish and maintain patent airway and

| Tube (size 3/size 4) |  |  | ventilation. |  |
| -------------------- | --- | ---------------------- | ------------------ | ------- |
| Laryngoscope (blade) | 0 1 | 1 No | Yes For intubation |  |
| Laryngoscope handle | 0 1 | 1 No | Yes For intubation |  |
| 5/11/2020 5:48:19 PM |  | Smoke Inhalation Cliff |  | page: 8 |
Units

|  | Units Units | Available |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |

Medical tape 0 0.03 5 Yes No single-coated tapepressure adhesive tape Nasal Airway (6mm, 7mm) 0 1 2 No Yes Establish and maintain patent airway and ventilation. Needle (23G) 0 4 20 Yes Yes to draw NS from bag or vial and for medication administration Nitrile gloves (large, medium, and 0 2 30 Yes No Personal Protective equipment for CMO small) (pair) Oral Airway 0 1 2 No Yes Establish and maintain patent airway and ventilation. Pack of 12 ECG electrodes 0 1 5 Yes Yes Measure and monitor ECG PEEP Valve 0 1 1 No Yes Provides positive airway pressure during ventilation SGA Cue Card 0 1 1 No Yes Guidance for use of supraglottic airway Sharps container 0 1 40 No No To dispose of medical waste such as used medical needles, scalpels, IV catheters, razors, vials Stethoscope 1 1 2 No Yes to listen to lung,heart, and bowel sounds, to blood flow in arteries and veins

| Suction Cartridge | 0 1 | 1 No | Yes Provide airway suctioning |  |
| ----------------- | --- | ---- | ------------------------------------ | --- |
| Suction device | 0 1 | 1 No | Yes to clean out secretions or vomit |  |

Suction device collection bag 0 1 2 Yes No To collect fluids suctioned from mouth/airway Suction device syringe 0 1 1 No Yes to remove fluids, secretions, vomit from mouth Suction tip - mouth (curette) 0 1 1 No Yes used for suction by inserting into the end of a suction tube Suction Tubing - Endotracheal 0 1 1 Yes Yes Provide airway suctioning Tube Surgical Lubricant 0 1 6 Yes No Provide lubrication for the insertion of the ILMA. Syringe (10cc) 0 1 6 Yes Yes to inflate balloon in ET tube (10 cc)

| Syringe (35cc) | 0 1 | 1 Yes | Yes Inflation of SGA |  |
| -------------- | --- | ----- | -------------------- | --- |

Syringe (3cc) 0 4 20 Yes Yes to inflate resuscitation mask if necessary and for medication administration

| T-adapter | 0 1 | 1 No | Yes Connection for ventilation tubing |  |
| --------- | --- | ---- | ------------------------------------- | --- |

Tongue depressor 0 1 20 Yes No To depress tongue and facilitate airway exam Tourniquet 0 1 1 No No To stop blood flow and engorge vein, this facilitates IV insertion

| 5/11/2020 5:48:19 PM |  | Smoke Inhalation Cliff |  | page: 9 |
| -------------------- | --- | ---------------------- | --- | ------- |
Units

|  | Units Units | Available |  |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- | --- |
|  | Required Required | At Start |  |  |  |
|  | Best Worst | Of |  |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |  |

Valium (Diazepam) 5 mg/mL, 2 0 1 2 Yes Yes For sedation with intubation mL syringe

| Variable Oxygen System | 0 1 | 1 No | Yes ventilatory support |  |  |
| ---------------------- | --- | ---- | ----------------------- | --- | --- |

VOS Intubated Patient Hardware 0 1 1 No Yes Mechanical Ventilation (Ventilator/Respirator)

### Resource Comments

All resources listed are available on board. ISS medical check list include respiratory support and smoke inhalation procedures (Mission Operations Directorate (MOD), 2011). Some of the resources are included in the ISS CHeCS Hardware catalog (ISS Medical Operations, 2009).

We added Albuterol, included in ISS procedures and terrestrial standard of care. We added 1 needle (20g), acetone, razor, adhesive tape remover, Ziploc bag (all part of CPR-ECG group). We added IV administration set.

Comparison between the Med Checklist and Urban treatment guidelines: There is not enough research done on evidence-based practices for smoke inhalation (Palmieri, 2007). We searched and did not find clinical guidelines. Aerosolized adrenaline is recommended (Demling, 2008)) not available in ISS checklist. Inhaled steroids are not available.

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |  |
| ----------------------------------------------- | --- | --------- | ------------ | --- | --- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 | Resources |  |  |
| NASA ISS Medical Operations, 2011 |  | 2 | Resources |  |  |

### Level Of Evidence

| Input Data | LOE Average | Description |  | Range |  |
| ---------------------- | ----------- | ---------------------- | --- | ----- | -------- |
| Incidence | 3 | Excellent |  | 1-2 |  |
| Functional Impairment | 3 | Good |  | 2.1-3 |  |
| Best Case / Worst Case | 3 | Fair |  | 3.1-4 |  |
| EVAC / LOCL | 3 | Poor |  | 4.1-5 |  |
| Resources | 2 |  |  |  |  |
| QUALITY OF EVIDENCE | 2.8 |  |  |  |  |
| 5/11/2020 5:48:19 PM |  | Smoke Inhalation Cliff |  |  | page: 10 |
### Reference List

Reference Alcorta R. Smoke inhalation & acute cyanide poisoning. Hydrogen cyanide poisoning proves increasingly common in smoke-inhalation victims.

JEMS 2004 Aug;29(8):suppl-15. American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. American Medical Association. Pulmonary System. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed.

- Chicago: American Medical Association Press; 2008. p. 77-99.

American Medical Association. Central and Peripheral Nervous System. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 321-45.

Blindauer K, Gilchrist J, Ballesteros M. Nonfatal Residential Fire--Related Injuries Treated in Emergency Departments --- United States, 2001.

CDC; 2003 Sep 26. Report No.: 52. Campbell MR, Billica RD, Johnston SL, III, Muller MS. Performance of advanced trauma life support procedures in microgravity. Aviat Space Environ Med 2002 Sep;73(9):907-12. Clark WR, Jr. Smoke inhalation: diagnosis and treatment. World J Surg 1992 Jan;16(1):24-9.

Demling RH. Smoke inhalation lung injury: an update. Eplasty 2008;8:e27.

Edelman DA, White MT, Tyburski JG, Wilson RF. Factors affecting prognosis of inhalation injury. J Burn Care Res 2006 Nov;27(6):848-53.

Evetts SN, Evetts LM, Russomano T, Castro JC, Ernsting J. Basic life support in microgravity: evaluation of a novel method during parabolic flight. Aviat Space Environ Med 2005 May;76(5):506-10.

Institute of Medicine. Managing Risks to Astronaut Health . In: Ball JR, Evans CH, editors. Safe Passage: Astronaut Care for Exoloration Missions.Washington DC: National Academies Press; 2001. p. 74-115.

ISS PRA Model v.3.2.0. Fire and Ammonia Model Contributions to the Integrated Medical Model. 2015 Sep 25.

James JT. Health Effects of Atmospheric Contamination. In: Barrat MR, Pool SL, editors. Principles of Clinical Medicine for Space Flight.New

- York: Springer; 2008. p. 427-43.

Johnston SL, Campbell MR, Billica RD, Gilmore SM. Cardiopulmonary resuscitation in microgravity: efficacy in the swine during parabolic flight.

Aviat Space Environ Med 2004 Jun;75(6):546-50.

Johnston S, Arenare B, Smart K. Medical Evacuation and Vehicles for Transport. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 139-61.

Lafferty KA, Goett HJ. Smoke Inhalation. WebMD eMedicine 2010 June 30 [cited 2010 Nov 1];Available from: URL: http://emedicine.medscape.com/ Morgan C, Wright R, Johnson S, Vargas P. NASA-4 Jerry Linenberg Fire and Controversy January 12 - May 24, 1997. The History of Shuttle- MIR.Washington DC: NASA; 2001. NASA ISS Medical Operations. US ISS Content Checklist 20110611. version 11.0. 2011. Houston, ISS Medical Operations. 7-16-2010.

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

Palmieri TL. Inhalation injury: research progress and needs. J Burn Care Res 2007 Jul;28(4):549-54.

Rehberg S, Maybauer MO, Enkhbaatar P, Maybauer DM, Yamamoto Y, Traber DL. Pathophysiology, management and treatment of smoke inhalation injury. Expert Rev Respir Med 2009 Jun 1;3(3):283-97.

Summers RL, Johnston SL, Marshburn TH, Williams DR. Emergencies in space. Ann Emerg Med 2005 Aug;46(2):177-84. 5/11/2020 5:48:19 PM Smoke Inhalation Cliff page: 11

---

## Source metadata

```yaml
source_filename: "smoke-inhalation-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Pruebas con astronautas menos de 30 dias"
source_url: "https://drive.google.com/file/d/1N0V7TqhhpSNrEKczwivaOFK8PKsVSAup/view"
source_drive_id: "1N0V7TqhhpSNrEKczwivaOFK8PKsVSAup"
source_sha256: 84cae59ff22f7c185a8e55f6329e253a0dc2c2fd22c2582931570ab057e8a290
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 11
ocr_performed: false
```
