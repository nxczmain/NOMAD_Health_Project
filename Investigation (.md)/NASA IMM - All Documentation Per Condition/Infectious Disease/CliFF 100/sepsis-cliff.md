# Sepsis CLiFF

[View original PDF](https://drive.google.com/file/d/15gFNm_H8UJf0as79Do5BgJeQDNkA0AEp/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Infectious Disease/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

### Sepsis Cliff

## Branch Baseline

The sepsis syndrome is a clinically defined continuum which includes SIRS (Severe Inflammatory Response Syndrome), sepsis (SIRS plus infection), severe sepsis (sepsis plus organ dysfunction), and septic shock (severe sepsis plus hypotension refractory to fluid resuscitation)(Levy, 2003)

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

| Data Category: | Fixed |  |
| ----------------- | ----- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Fixed |  |
| ----------- | ------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Fixed Rate: | 0.0024 |  |
| -------------------- | ------------ | ------- |
| 5/11/2020 4:41:25 PM | Sepsis Cliff | page: 1 |
## Incidence Comments

Multiple large population studies to determine the incidence of sepsis in the general population have been completed over the last few decades.

A study based on the US National Hospital Discharge Survey estimated the incidence of sepsis at 0.0024 events / person-year (240.4 cases per 100,000 population ) has been included as our model incidence data (Martin, 2003).

Incidences were normalized to the population distribution in the 2000 U.S. Census.

The overarching rationale for choosing data from one study over another for inclusion in the IMM encompasses many variables. When in-flight data are non-existent or rare, as is the case for sepsis, terrestrial analogs are sought; factors for IMM consideration include age match of population, health of population, recency of data, and numbers behind reported incidence values. Graphical interpolation of sepsis incidence rate is approximate for the age range of mission-ready astronauts in the Angus, 2001 article and spans a range (0.001-0.003 events per person-year) encompassing the generalized population data incidence rate of 0.0024 events per person-year specified in Martin, 2003 (Angus, 2001). A consensus committee of 68 international experts representing 30 international organizations convened in 2012 to produce “International Guidelines for Management of Severe Sepsis and Septic Shock”, published in the Critical Care Medicine Journal (Vol 42, No. 2, p. 580, 2013)(Dellinger, 2013), which still cited these two sepsis manuscripts (Angus, 2001 and Martin, 2003) as seminal for sepsis incidence rate.

There are increased co-existing conditions in these general population data that are less prevalent in astronauts, however, the use of generalized population data is thought to be preferable in order to get a more conservative value due to the many spaceflight factors that could potentially increase the likelihood of sepsis. These include spaceflight-induced immunosuppression in astronauts (see “Immune Dysfunction in

- Spaceflight: An Integrative View”. Yi, B. et al. p. 61 in “Effect of Spaceflight and Spaceflight Analog Culture on Human and Microbial Cells: Novel

Insights into Disease Mechanisms” Ed. Nickerson, C.A., et al., Springer, New York, 2016) (Yi, 2016) and higher virulence rates of microorganisms (for historical timeline charting this phenomenon from 1973- 2015, see “Chronology of Key Spaceflight and Spaceflight Analogue Culture Experiments on Human and Microbial Cells” p. xiii, ibid.).

There is no definitive evidence of an episode of in-flight sepsis among U.S. crew, although the Apollo 13 event may have been a severe enough UTI to reach the threshold for a case of sepsis. Review of published references shows both UTI and urosepsis as diagnoses for the same astronaut (UTI: Biomedical Results of Apollo, 1975 and urosepsis: Table 7.1 p. 141 in Principles of Clinical Medicine for Spaceflight, 2008)(Marshburn, 2008). As a point of interest, there has been one documented case of urosepsis among Russian cosmonauts (ibid).

Assuming approximately one hundred thirty person-years of total human spaceflight to date, this one case results in an incidence rate of one event in one hundred thirty person-years, which yields an incidence rate of 0.0077 events per person-year. This incidence is somewhat higher than the 0.0024 events per person-year incidence rate currently used in the IMM, and may reflect a higher likelihood of sepsis due to spaceflight factors. We have not currently included Russian medical data in the IMM for several reasons including access to reliable data.

### Information Regarding Prevention

Selection criteria Disqualifying conditions in the Infectious Disease category include: Acute or chronic infectious disease, until appropriately treated with confirmed eradication, that might compromise mission operations, performance of duty, or crew health and safety; active tuberculosis; history of tuberculosis until two years after completion of a CDC approved treatment regimen; history of malaria or other blood-borne parasites, unless adequately treated and cured; clinical or laboratory evidence of Human Immunodeficiency Virus (HIV) infection or Acquired Immune Deficiency Syndrome (AIDS); lyme disease, unless appropriately treated with resolution of all signs and symptoms; history of methicillin resistant staphylococcal aureus (MRSA) requires further evaluation; frequent, recurrent herpes simplex virus type I or type II that may interfere with performance of duties; history of Herpes Zoster, unless resolved for more than one month and with no evidence of post-herpetic neuralgia; presence of pathological intestinal bacteria or parasites from any site, until resolved; H. pylori carrier state, until resolved; sexually transmitted disease such as syphilis, gonorrhea, and chlamydia, unless appropriately treated with no sequelae; history of genital human papilloma virus infection requires further evaluation.(NASA, 2007)

Contingency measures

- Preventive treatment(s): Prompt and appropriate antibiotic treatment of infectious processes should reduce the risk of infections progressing to

sepsis. In addition, the pre-launch Health Stabilization Period (HSP, crew quarantine) greatly reduces the risk of crewmembers launching with an infectious condition. Other No incidence of sepsis has been reported in flight (Walton, 2010)

From STS 1 through STS 89, 26 infectious diseases have been reported (Risin, 2009) but none progressed to sepsis.

A close call was reported in Apollo 13: a urinary tract infection in one of the crewmen could have resulted in a serious inflight illness if the mission had lasted 24 hours longer. During the return flight following the inflight accident, the combined stresses of cold, dehydration (caused by voluntary rationing of water), and prolonged wearing of the urine collecting device (UCD) were contributing factors. (NASA, 1975) 5/11/2020 4:41:25 PM Sepsis Cliff page: 2

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| -------------------- | ------------ | ------------ | ------- |
| Martin, 2003 | 4 | Incidence |  |
| 5/11/2020 4:41:25 PM | Sepsis Cliff |  | page: 3 |
Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

| Data Category: | Fixed |  |
| ----------------- | ----- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Fixed |  |
| ----------- | ------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Fixed Rate: | 0.003 |  |
| ----------- | ----- | --- |

## Incidence Comments

Another retrospective US study (Angus, 2001) estimated the incidence of sepsis at 0.003 events / person-year, while in 45-49 year olds, the incidence was closer to 0.0002 events / person-year. 55% had an underlying comorbidity and 21% were surgical patients 51.1% received intensive care and an additional 17.3% were ventilated in an intermediate care unit or cared for in a coronary care unit.

Excluding patients with HIV disease, the overall incidence rate for women was similar to that of men.

The overall hospital mortality rate was 28.6%. The estimated 215,000 deaths were 9.3% of all deaths in the United States in 1995.

| 5/11/2020 4:41:25 PM | Sepsis Cliff | page: 4 |
| -------------------- | ------------ | ------- |
Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

| Data Category: | Fixed |  |
| ----------------- | ----- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Fixed |  |
| ----------- | ------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Fixed Rate: | 0.0006 |  |
| ----------- | ------ | --- |

## Incidence Comments

In the Dutch population (van Gestel, 2004) the incidence of sepsis, severe sepsis, and septic shock was 0.00060, 0.00054, 0.00024 events / person-year. The study included patients with infection at the time of ICU admission. 29.5% patients met criteria for severe sepsis, 11.6% for septic shock The most common failing organ system was the respiratory system (90%), and most patients were admitted following surgery (37%) and were admitted because of acute infection (62%). Mortality rate was not provided.

| 5/11/2020 4:41:25 PM | Sepsis Cliff | page: 5 |
| -------------------- | ------------ | ------- |
Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

| Data Category: | Fixed |  |
| ----------------- | ----- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Fixed |  |
| ----------- | ------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Fixed Rate: | 0.03 |  |
| ----------- | ---- | --- |

## Incidence Comments

A retrospective US study in emergency departments, using data by the NHCMS (Wang, 2007) suggests that more than two thirds may present initially to the ED, highlighting the community-acquired (vs. nosocomial) nature of the condition. Their incidence for severe sepsis was 0.03 Approximately 40% of the patients in our series had both fever and hypotension.

### Alternative Incidence Data

Thomas listed 187 cases of infectious diseases per 100 person years (1.87 per person-year) in US submarines during periods of isolation.

Infections were also listed under different body systems, e.g. upper respiratory and skin infections. No data are provided on evacuation(Thomas, 2003) Among US Navy, during a 9 months period, 8% of medevacs were due to infectious diseases, primarily hepatitis. No additional data are provided in other types of infection (Nice, 1987).

IMM recognizes that a tighter age range to match the astronaut group is desirable. While the Angus (Angus, 2001)article does have a better age match, the patient population comprises multiple comorbidities which preclude us from using data from that study as part of the primary IMM incidence. For this condition, the use of generalized population data is thought to be preferable in order to get a more conservative value due to the many spaceflight factors that could increase the likelihood of sepsis.

| 5/11/2020 4:41:25 PM | Sepsis Cliff | page: 6 |
| -------------------- | ------------ | ------- |
### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 1 2 - 36 24 - 96 - 168 0 0 0 (best case scenario %: 66.4) ISS-based Treatment 100 1 - 2 16 - 58 0 - 12 - 24 0 - 58 100 29 - 70 (worst case scenario %: 33.6) Untreated Best Case 0 0 16 - 58 48 - 60 - 72 16 - 58 100 0 - 100 Untreated Worst Case 0 0 38 - 75 0 - 12 - 24 38 - 75 100 100 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 4:41:25 PM Sepsis Cliff page: 7

### Scenario Comments

The best case scenario is defined as sepsis, (SIRS and source of infection) without organ dysfunction or hypotension, which responds to the available antibiotic treatment. The worst case scenario is defined as a case of severe sepsis, involving organ dysfunction or a prolonged course of septic illness with poor response to available antibiotic treatment.

Percentages of how often best versus worst case scenarios occur were determined using terrestrial incidence data for sepsis vs. severe sepsis. The proportion of patients with sepsis who had any organ failure, a marker of the severity of illness, increased over time. Organ failure occurred in 33.6 percent of patients during the most recent subperiod, 1995-2000. Organ failure had a cumulative effect on mortality: approximately 15 percent of patients without organ failure died, whereas 70 percent of patients with three or more failing organs (classified as having severe sepsis and septic shock) died.. The organs that failed most frequently in patients with sepsis were the lungs (in 18 percent of patients) and the kidneys (in 15 percent of patients); less frequent were cardiovascular failure (7 percent), hematologic failure (6 percent), metabolic failure (4 percent), and neurologic failure (2 percent). (Martin, 2003)

Based on SME recommendation, values are discrete numbers instead of ranges. (Kerstman, 2013)

### Best Case Comments

Sepsis is not listed in the AMA Guides to the Evaluation of Permanent Impairment. The functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Sepsis may affect respiratory function and cause unconsciousness, which are the bases for our calculations. Neurogenic Respiratory Dysfunction ratings are based on Table 13-16, p.338 (American Medical Association, 2008). Episodic Loss of Consciousness and Awareness is based on Table 13-5, p.328 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). See this CliFF Appendix for further description of gradings and calculation.

In Clinical Phase I, by definition FI is estimated as 100%. Time to follow ISS procedures for infection, including oral and/or parenteral antibiotics, and monitoring vital signs will take approximately one hour.

During Clinical Phase II, FI is estimated to be 2 to 36%. % is expected for a duration of 24 to 168 hours, 1 to 7 days, based on length of antibiotic treatment. Clinical Phase III: Full recovery is expected in this scenario and FI is estimated to be 0%. By definition EVAC and LOCL are not expected.

### Worst Case Comments

Sepsis is not listed in the AMA Guides to the Evaluation of Permanent Impairment. The functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Sepsis may affect respiratory function and cause unconsciousness, which are the bases for our calculations. Neurogenic Respiratory Dysfunction ratings are based on Table 13-16, p.338 (American Medical Association, 2008). Episodic Loss of Consciousness and Awareness is based on Table 13-5, p.328 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606. (American Medical Association, 2008)See this CliFF Appendix for further description of gradings and calculation.

In Clinical Phase I, by definition FI is estimated at 100%. Time to follow ISS procedures for shock circulatory collapse and respiratory support will take approximately 1 to 2 hours. During Clinical Phase II: FI is estimated to be 16 to 58% and based on emergent EVAC definition, 0-24 hours is the duration in Clinical Phase II. In Clinical Phase III; recovery is possible with adequate treatment, thus FI range is estimated at 0- 58%. Worst case sepsis and/or septic shock would be a Class III medical event, e.g. a significant medical event with potential for mission impact or evacuation (Johnston, 2008). Submarine analog populations had evacuated crew members secondary to infectious diseases (Nice, 1987).

Terrestrially, 58% of patients are admitted to the intensive care unit for treatment (Angus, 2001). Thus EVAC is estimated at 100% . The diagnosis of sepsis carries a high mortality rate, even when aggressively treated in tertiary or quaternary academic hospital ICUs. Mortality rates are estimated from 29% (Angus, 2001) to 70% for sepsis with multi organ failure (Martin, 2003). In support of this range, another recommended study (Rivers, 2001)indicates a 46.5% probability of death from sepsis terrestrially with standard therapy and a 30.5% probability of death from sepsis with goal-directed therapy.

### Untreated Best Case Comments

Sepsis is not listed in the AMA Guides to the Evaluation of Permanent Impairment. The functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Sepsis may affect respiratory function and cause unconsciousness, which are the bases for our calculations. Neurogenic Respiratory Dysfunction ratings are based on Table 13-16, p.338 (American Medical Association, 2008). Episodic Loss of Consciousness and Awareness is based on Table 13-5, p.328 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606. (American Medical Association, 2008)See this CliFF Appendix for further description of gradings and calculation During Clinical Phase II, FI is estimated to be 16-58%. Duration is similar to the treated worst case scenario, based on the likely need for early evacuation without treatment. In Clinical Phase III, FI is estimated to remain 16-58%, with limited or without on board treatment. EVAC is estimated at 100% and LOCL at 0 to 100%. 5/11/2020 4:41:25 PM Sepsis Cliff page: 8

### Untreated Worst Case Comments

Sepsis is not listed in the AMA Guides to the Evaluation of Permanent Impairment. The functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Sepsis may affect respiratory function and cause unconsciousness, which are the bases for our calculations. Neurogenic Respiratory Dysfunction ratings are based on Table 13-16, p.338 (American Medical Association, 2008). Episodic Loss of Consciousness and Awareness is based on Table 13-5, p.328 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606. (American Medical Association, 2008)See this CliFF Appendix for further description of gradings and calculation

- During Clinical Phase II: FI is estimated to be 38 to 75% and duration is 0 to 24 hours similar to the treated worst case scenario. In Clinical

Phase III; recovery is unlikely and FI is estimated to remain 38 to 75%. Worst case sepsis and/or septic shock would be a Class III medical event, e.g. a significant medical event with potential for mission impact or evacuation (Johnston, 2008). Untreated sepsis during spaceflight will likely end in a grim outcome. EVAC is estimated in 100% and LOCL is expected to occur in 100% of the untreated worst case scenarios Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ---------------------------------- | ------------ | ------------ | ------- |
| American Medical Association, 2008 | 3 | FI |  |
| Johnston, 2008 | 2 | EVAC |  |
| Nice, 1987 | 2 | EVAC |  |
| Angus, 2001 | 4 | EVAC |  |
| Martin, 2003 | 4 | EVAC |  |
|  | 4 | BCWC |  |
| 5/11/2020 4:41:25 PM | Sepsis Cliff |  | page: 9 |
The Resource Table (RT) Units

|  | Units Units | Available |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |

Adrenaline (Epinephrine 0 4 4 Yes Yes to constrict blood vessels and relieve

| 1:10000) 10mL |  |  | hypotension, intravenous |  |
| ------------- | --- | --- | ------------------------ | --- |

Ambu bag and mask 0 1 1 No Yes hand-held device used to provide positive pressure ventilation to a patient who is not breathing or is breathing inadequately Blood Oximeter 1 1 1 No Yes monitors the oxygen saturation of a patient's blood Blood Pressure Cuff (regular, 1 1 2 No Yes Measure blood pressure large)

| Blood Pressure Monitor | 1 1 | 1 No | Yes Measure blood pressure |  |
| ---------------------- | --- | ------ | ---------------------------------------- | --- |
| BZK wipes | 6 8 | 60 Yes | No Cleanse skin. |  |
| CMRS | 1 1 | 1 No | No Restrain crew member to ensure safety |  |

ECG Monitor (Device, USB 1 1 1 No Yes Measure and monitor ECG Charge Cable, Lead Set Cable,

### Cue Card)

Endotracheal Stylet 0 1 1 No Yes Assist with advanced airway placement Endotracheal Tube 7.0/8.0 0 1 4 Yes Yes Establish and maintain patent airway and ventilation.

| Ertapenem 1gm | 1 3 | 6 Yes | Yes Antibiotic |  |
| ----------------------- | --- | ----- | ------------------------- | --- |
| EtCO2 Monitor with EMMA | 0 1 | 1 No | Yes Measure end tidal CO2 |  |

adapter Gauze pads (4x4) 4 8 50 Yes No to absorb blood or fluids from skin

| IV administration set | 1 1 | 3 Yes | Yes IV Fluids infusion |  |
| --------------------- | --- | ----- | --------------------------------- | --- |
| IV Cap | 1 1 | 5 Yes | No To maintain IV when not in use |  |

IV Catheter (18G, 20G, or 22G) 1 1 14 Yes Yes IV fluid administration

| IV Fluid 1L (1000mL) | 2 4 | 5 Yes | Yes to replenish fluids |  |
| -------------------- | --- | ----- | ----------------------------- | --- |
| IV Fluid Air Filter | 1 1 | 3 Yes | No To filter air from IV line |  |
| IV pressure infuser | 1 1 | 1 No | No IV Fluids infusion |  |

Ketamine 50 mg/mL, 10 mL multi 0 0.3 6 Yes Yes For sedation in case of

| dose vial |  |  | intubation/ventilation. |  |
| --------- | --- | --- | ----------------------- | --- |

King Supraglottic Airway (SGA) 0 1 2 Yes Yes Establish and maintain patent airway and

| Tube (size 3/size 4) |  |  | ventilation. |  |
| -------------------- | --- | ------------ | ------------------ | -------- |
| Laryngoscope (blade) | 0 1 | 1 No | Yes For intubation |  |
| Laryngoscope handle | 0 1 | 1 No | Yes For intubation |  |
| 5/11/2020 4:41:25 PM |  | Sepsis Cliff |  | page: 10 |
Units

|  | Units Units | Available |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |

Lidocaine (Xylocaine) plain 1%, 1 1 3 Yes Yes To decrease pain during ertapenem

| 10mL multi dose vial |  |  | administration |  |
| -------------------- | --- | --- | -------------- | --- |

Medical tape 0 0.03 5 Yes No single-coated tapepressure adhesive tape Nasal Airway (6mm, 7mm) 0 1 2 No Yes Establish and maintain patent airway and ventilation.

| Needle (23G) | 1 6 | 20 Yes | Yes To draw medication from vial |  |
| ------------ | --- | ------ | -------------------------------- | --- |
| Needle [25g] | 1 1 | 4 Yes | Yes To inject rocephin |  |

Nitrile gloves (large, medium, and 2 2 30 Yes No Personal Protective equipment for CMO small) (pair) Oral Airway 0 1 2 No Yes Establish and maintain patent airway and ventilation. Pack of 12 ECG electrodes 1 1 5 Yes Yes Measure and monitor ECG PEEP Valve 0 1 1 No Yes Provides positive airway pressure during ventilation SGA Cue Card 0 1 1 No Yes Guidance for use of supraglottic airway Sharps container 1 1 40 No No To dispose of medical waste such as used medical needles, scalpels, IV catheters, razors, vials

| Stethoscope | 1 1 | 2 No | Yes Audible evaluation of lungs |  |
| ----------------- | --- | ---- | --------------------------------- | --- |
| Suction Cartridge | 0 1 | 1 No | Yes Provide airway suctioning |  |
| Suction device | 0 1 | 1 No | Yes Need to maintain open airway. |  |

Suction device collection bag 0 1 2 Yes No To collect secretions from suctioning

| Suction device syringe | 0 1 | 1 No | Yes To generate suction |  |
| ---------------------- | --- | ---- | ----------------------- | --- |

Suction tip - mouth (curette) 0 1 1 No Yes Used for suction by inserting into the end of a suction tube Suction Tubing - Endotracheal 0 1 1 Yes Yes Provide airway suctioning Tube Surgical Lubricant 0 1 6 Yes No to facilitate catheter insertion (Surgilube)

Syringe (10cc) 0 1 6 Yes Yes to inflate endotracheal tube cuff

| Syringe (35cc) | 0 1 | 1 Yes | Yes Inflation of SGA |  |
| -------------- | --- | ----- | -------------------- | --- |

Syringe (3cc) 1 10 20 Yes Yes to administer medication, to flush IV lock as needed

| T-adapter | 0 1 | 1 No | Yes Connection for ventilation tubing |  |
| ----------- | --- | ---- | ------------------------------------- | --- |
| Thermometer | 1 1 | 1 No | No To measure temperature |  |

Tourniquet 0 1 1 No No To stop blood flow and engorge vein, this facilitates IV insertion

| Tylenol (Acetaminophen) 325 mg | 12 24 | 150 Yes | Yes Antipyretic |  |
| ------------------------------ | ----- | ------------ | --------------- | -------- |
| 5/11/2020 4:41:25 PM |  | Sepsis Cliff |  | page: 11 |
Units

|  | Units Units | Available |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |

Ultrasound gel (2 packets) 2 2 17 Yes Yes Required to perform ultrasound exam

| Ultrasound machine | 1 1 | 1 No | Yes For diagnostic assistance |  |
| ------------------ | --- | ---- | ----------------------------- | --- |

Valium (Diazepam) 5 mg/mL, 2 0 1 2 Yes Yes For sedation with intubation mL syringe Variable Oxygen System 0 1 1 No Yes Contains equipment required to deliver oxygen. VOS Intubated Patient Hardware 0 1 1 No Yes Mechanical Ventilation (Ventilator/Respirator)

| Water | 1 1 | 1 No | No For rehydration. |  |
| ----- | --- | ---- | ------------------- | --- |

### Resource Comments

The original table on 11/15/2010 contained 31 resources. The table was revised to include resources for respiratory support, intravenous fluid infusion, BP-ECG, and physical exam as indicated for shock circulatory collapse in the medical checklist (Mission Operations Directorate (MOD), 2011). Comparison of ISS versus terrestrial treatment The diagnosis of SIRS is relatively straight forward, requiring measurement of vital signs and basic laboratory tests (CBC/WBC). Diagnosis of sepsis requires either proof or high suspicion of infection, typically done with imaging (CXR/CT which is unavailable on orbit) or laboratory testing (urinalysis; blood, sputum, urine, and CSF cultures). (Dellinger, 2008)Urinalysis and chemistry blood analysis are available on board; white blood cell count and cultures are not. (ISS Medical Operations, 2009)

Treatment to terrestrial standards is significantly more complex, requiring typically large-volume IV fluid resuscitation, broad-spectrum IV antibiotics, invasive monitoring (arterial blood pressure, central venous pressure (CVP), urine output via Foley catheter, and frequent laboratory tests including arterial blood gases (ABGs), IV vasopressors (for septic shock), tight glucose control, deep vein thrombosis (DVT) and gastrointestinal ulcer prophylaxis, and often advanced mechanical ventilation (low tidal volume, variable FIO2, and PEEP for respiratory failure) and/or renal replacement therapy (for acute renal failure). Despite the best of terrestrial care, mortality is still often high. (Dellinger, 2008)

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |
| ----------------------------------------------- | --- | ------------ | ------------ | -------- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 | Resources |  |
| NASA ISS Medical Operations, 2011 |  | 2 | Resources |  |
| 5/11/2020 4:41:25 PM |  | Sepsis Cliff |  | page: 12 |
### Level Of Evidence

| Input Data | LOE Average | Description | Range |  |
| ---------------------- | ----------- | ------------ | ----- | -------- |
| Incidence | 4 | Excellent | 1-2 |  |
| Functional Impairment | 3 | Good | 2.1-3 |  |
| Best Case / Worst Case | 4 | Fair | 3.1-4 |  |
| EVAC / LOCL | 3 | Poor | 4.1-5 |  |
| Resources | 2 |  |  |  |
| QUALITY OF EVIDENCE | 3.2 |  |  |  |
| 5/11/2020 4:41:25 PM |  | Sepsis Cliff |  | page: 13 |
### Reference List

Reference American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. American Medical Association. Central and Peripheral Nervous System. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 321-45.

Angus DC, Linde-Zwirble WT, Lidicker J, Clermont G, Carcillo J, Pinsky MR. Epidemiology of severe sepsis in the United States: analysis of incidence, outcome, and associated costs of care. Crit Care Med 2001 Jul;29(7):1303-10.

Dellinger RP, Levy MM, Carlet JM, Bion J, Parker MM, Jaeschke R, et al. Surviving Sepsis Campaign: international guidelines for management of severe sepsis and septic shock: 2008. Crit Care Med 2008 Jan;36(1):296-327.

Dellinger RP, Levy MM, Rhodes A, Annane D, Gerlach H. Surviving Sepsis Campaign: International Guidelines for Management of Severe Sepsis and Septic Shock. Intensive Care Med 2013 Jan 30;39(2):165-225.

Forte G, Petrucci F, Bocca B. Metal allergens of growing significance: epidemiology, immunotoxicology, strategies for testing and prevention.

Inflamm Allergy Drug Targets 2008 Sep;7(3):145-62.

Johnston R, Dietlein L, Berry CA. Biomedical Results of Apollo. NASA SP-2006-368 ed. Washington D.C.: NASA; 1975.

Johnston S, Arenare B, Smart K. Medical Evacuation and Vehicles for Transport. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 139-61.

Kerstman EL. Sepsis Best Case/Worst Case percentages. Lopez V, editor. 11-10-2013.

Levy MM, Fink MP, Marshall JC, Abraham E, Angus D, Cook D, et al. 2001 SCCM/ESICM/ACCP/ATS/SIS International Sepsis Definitions Conference. Intensive Care Med 2003 Apr;29(4):530-8.

Marshburn TH. Acute Care. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 101-22.

Martin GS, Mannino DM, Eaton S, Moss M. The epidemiology of sepsis in the United States from 1979 through 2000. N Engl J Med 2003 Apr 17;348(16):1546-54. NASA ISS Medical Operations. US ISS Content Checklist 20110611. version 11.0. 2011. Houston, ISS Medical Operations. 7-16-2010.

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

NASA OCHMO 80771201MED. NASA Crewmembers Medical Standards. Houston: NASA; 2007.

Nice DS. U.S. Navy medical communications and evacuations at sea. Mil Med 1987 Sep;152(9):446-51.

Risin D. Risk of Inability to Adequately Treat an Ill or Injured Crew Member. In: McPhee JC, Charles JB, editors. Human Health and Performance , Risks of Space Exploration Missions.Houston: National Aeronautics and Space Administration; 2009. p. 239-49.

Rivers E, Nguyen B, Havstad S, Ressler J, Muzzin A, Knoblich B, et al. Early goal-directed therapy in the treatment of severe sepsis and septic shock. N Engl J Med 2001 Nov 8;345(19):1368-77.

Thomas TL, Garland FC, Mole D, Cohen BA, Gudewicz TM, Spiro RT, et al. Health of U.S. Navy submarine crew during periods of isolation.

Aviat Space Environ Med 2003 Mar;74(3):260-5. van Gestel A, Bakker J, Veraart CP, van Hout BA. Prevalence and incidence of severe sepsis in Dutch intensive care units. Crit Care 2004 Aug;8(4):R153-R162. Walton M, Kerstman E, IMM. In-flight Compilation v20100414_Incidence_calculation. 2010.

Wang HE, Shapiro NI, Angus DC, Yealy DM. National estimates of severe sepsis in United States emergency departments. Crit Care Med 2007 Aug;35(8):1928-36. Yi B, Crucian B. Immune Dysfunction in Spaceflight: An Integrative View. Effect of Spaceflight and Space Flight Analog Culture on Human and Microbial Cells. 2016. 5/11/2020 4:41:25 PM Sepsis Cliff page: 14

---

## Source metadata

```yaml
source_filename: "sepsis-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Infectious Disease/CliFF 100"
source_url: "https://drive.google.com/file/d/15gFNm_H8UJf0as79Do5BgJeQDNkA0AEp/view"
source_drive_id: "15gFNm_H8UJf0as79Do5BgJeQDNkA0AEp"
source_sha256: 6845f83b918332780d394c5117c39ee0b1897120b3840ebc9bf6eb1f5baa528b
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
