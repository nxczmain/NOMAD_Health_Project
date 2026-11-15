# Space Motion Sickness Space Adaptation CLiFF

[View original PDF](https://drive.google.com/file/d/1IT-UukFgzlzUbWV-YmCig7N6JeRM2Lyw/view) · **9 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Neurovestibular Disturbance/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

Space Motion Sickness (space adaptation) Cliff

## Branch Baseline

Space motion sickness is experienced by 60% to 80% of space travelers during their first 2 to 3 days in microgravity. Space motion sickness symptoms are similar to those in other forms of motion sickness; they include: pallor, increased body warmth, cold sweating, malaise, loss of appetite, nausea, fatigue, vomiting, and anorexia. These are important because they may affect the operational performance of astronauts. Two hypotheses have been proposed to explain space motion sickness: the fluid shift hypothesis and the sensory conflict hypothesis.

The fluid shift hypothesis suggests that space motion sickness results from the cranial shifting of body fluids resulting from the loss of hydrostatic pressure gradients in the lower body when entering microgravity. The cranial fluid shifts lead to visible puffiness in the face, and are thought to increase the intracranial pressure, the cerebrospinal-fluid pressure or the inner ear fluid pressures, altering the response properties of the vestibular receptors and inducing space motion sickness.

The sensory conflict hypothesis suggests that loss of tilt-related otolith signals upon entry into microgravity causes a conflict between actual and anticipated signals from sense organs subserving spatial orientation. Such sensory conflicts are thought to induce motion sickness in other environments. Space motion sickness is usually treated using pharmaceuticals, most of which have undesirable side effects (Heer, 2006).

Symptoms of space motion sickness usually start to develop within the first several hours in weightlessness. After 72–96 h, most astronauts and cosmonauts have either recovered or begun to recover and are able to move about freely without eliciting debilitating symptoms (Lackner, 2006).

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

- Data Category: Raw Data

- Space Adaptation: Yes

- Incidence Type: Proportion

## Distribution Data

- Incidence: Beta

- Occurrence: Bernoulli

5/11/2020 5:48:36 PM Space Motion Sickness (space adaptation) Cliff page: 1

## Data Characteristics

- Occurrence Hour Range: 1 to 48

- Peak Occurrence Hours: 6

- Events: 419

- Persons At Risk: 588

- Space Flight Incidence Rate (Events / Persons at Risk): 419 / 588 = 0.712585034013605

## Incidence Comments

Considering that SMS is widely under reported and IMM compilation at this time includes Shuttle missions 1 through 89, based on SME’s recommendation (Kerstman, 2011) we are using the US incidence compiled by Reschke (Reschke, 1993); (Reschke, 1996) , in (Ortega, 2008).

The number of US crew members reporting SMS symptoms is the numerator (n=325). IMM in-flight compilation data does not include events from Mercury and Gemini. For consistency we discounted events within these two programs, 6 crew members from Mercury and 20 from Gemini. Thus the number of crew members or denominator is 445 (471 minus 26)

The cumulative incidence (# events / # crew) for the US space program, from 1962 to 1998 is (325/445) = 0.73

- The incidences per mission are: Apollo 11/33 = 0.33; Skylab 5/9 = 0.56; Apollo-Soyuz Test Project = 0; Space Shuttle, 1981-1986 57/85= 0 .67,

1988-1998, 252/315 = 0.80 Of note, two cases of moderate motion sickness were reported in MIR. Both were short-term and easily controlled. (Gontcharov, 2005) Crew members’ national origin, e.g. US or Russian, are not published. These events are not included in the incidence compiled by Reschke or in IMM.

In 1984, during the first nine STS missions, the incidence of SMS among 29 crew members was 48% (14/29). Anti-motion sickness and/or anti- emetic medication were used by 21 of the 29 individuals who flew during the first nine STS missions. (21/29 = 72.4%). In general, it is known that the impact on mission operations has been minimal. 10% of all flights, e.g. only four missions, to date have been altered by the syndrome. (Homick, 1984) Based in the Cliff’s definition of worst case (WC), only 1 case was WC.

Added the incidence information from the real world system. Added 95 new medical events (18 ISS for a total of 18 and 77 STS to the exisiting 309 events for total of 386 STS events). Added 144 persons at risk to the 445 persons at risk for a new total of 589 persons at risk (Saile, 2017). Updated the Persons at Risk based on the revised real world system integrated incidence data. The integrated RWS persons at risk from 144 to 143 so the conditions integrated iMED value went from 589 to 588 (Saile L., 2017).

### Information Regarding Prevention

According to NASA, (NASA Office of Bioastronautics, 2005)the risk of SMS is influenced by spacecraft size and availability of room for movement. Habitable volume size of transport and working spacecraft will therefore be an important factor to consider for future exploration missions. Selection criteria SMS is not a disqualifying event. Selection criteria that could be identified during selection include: In the ears category disqualifying conditions are any diseases of the ear or mastoid with residual auditory or vestibular dysfunction sufficient to interfere with performance of duties; history or presence of Meniere’s disease or abnormal labyrinthine function (e.g., vestibular neuronitis), unless an isolated, remote episode with full recovery. In the abdomen category: chronic diseases or disorders of the gastrointestinal tract that interfere with performance of duties. (NASA, 2007); (International Space Station Program, 2009) 5/11/2020 5:48:36 PM Space Motion Sickness (space adaptation) Cliff page: 2

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |
| -------------- | --------- | ------------ |
| Ortega, 2008 | 1 | Incidence |
| Saile L., 2017 | 1 | Incidence |

### Alternative Incidence Data

IMM in flight data at this time include STS missions1 to 89 only. Our total number of events is 254 and the population is 544 crew members (664- 120 not revised from STS). The cumulative incidence (# events / # crew) is 0.47

- The incidences per mission are: Apollo 11/33 = 0.33; Skylab 7/9 = 0.78; Apollo-Soyuz Test Project = 0; Space Shuttle, 1 to 89 235/480= 0 .49

(Walton, 2010) 5/11/2020 5:48:36 PM Space Motion Sickness (space adaptation) Cliff page: 3

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

|  | Clinical Phase I | Clinical Phase II | Clinical Phase III |  |
| -------------------------------------- | ------------------- | -------------------- | ----------------------- | ------ |
|  | Diagnosis & Initial | On-going Treatment / | Recovered / Mission End |  |
|  | Treatment1 | Convalescence2 | State3 |  |
|  | FI* Duration | FI* Duration (hrs) | FI* EVAC** | LOCL** |
|  | (%) (hrs) | (%) (Min - ML - Max) | (%) (%) | (%) |
| ISS-based Treatment | 100 0.2 - | 0 - 17 12 - 30 - 48 | 0 0 | 0 |
| (best case scenario %: 87.62 - 87.86) | 0.25 |  |  |  |
| ISS-based Treatment | 100 0.25 - | 2 - 42 48 - 60 - 72 | 0 0 | 0 |
| (worst case scenario %: 12.14 - 12.38) | 0.33 |  |  |  |
| Untreated Best Case | 0 0 | 2 - 42 12 - 30 - 48 | 0 0 | 0 |
| Untreated Worst Case | 0 0 | 29 - 64 48 - 60 - 72 | 0 0 | 0 |

1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.)

### Scenario Comments

- Best case scenario definition: SMS including mild to moderate symptoms, e.g. loss of appetite, malaise, stomach awareness, 2 or fewer

episodes of emesis, resolves within 72 hours, no or minimal performance decrement. (Davis, 1988)

- Worst Case scenario definition: SMS with severe and persistent symptoms, need to keep head from moving, greater than 2 episodes of

emesis, significant performance decrement, persists for greater than 72 hours. (Davis, 1988)

Percentages of how often best versus worst case scenarios occur The BC/WC percentages were updated based on the empirical data from the Real World System data set.  We are estimating our worst case scenario at 3.19% (3/94), thus our best case is 96.81% 91/94 (Saile L., 2017). 5/11/2020 5:48:36 PM Space Motion Sickness (space adaptation) Cliff page: 4

### Best Case Comments

Space Motion Sickness (space adaptation) functional impairments (FI) calculation follows the IMM space adaptation template. Vestibular disorders ratings are based on Table 11-4, p. 258 (American Medical Association, 2008). Upper Digestive Tract is based on Table 6-4, p 107 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further information on grading refer to the CliFF Appendix.

By definition in Clinical Phase I, FI is 100%. Duration to follow procedures specified in the ISS checklist, i.e. observation period and oral medication for the best case scenario, is estimated at 12 to 15 minutes. During Clinical Phase II, FI is estimated at 0 to 17%. Duration is estimated at 12 to 48 hours based on in-flight data analysis (Davis, 1993). In Clinical Phase III, full recovery is expected and FI is 0%. By definition EVAC and LOCL would not be expected for the best case scenario (In-flight Compilation Lockdown revised, 2010). Based on in flight data, no evacuation or loss of crew life has occurred (Davis, 1993)

### Worst Case Comments

Space Motion Sickness (space adaptation) functional impairments (FI) calculation follows the IMM space adaptation template. Vestibular disorders ratings are based on Table 11-4, p. 258 (American Medical Association, 2008). Upper Digestive Tract is based on Table 6-4, p 107 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further information on grading refer to the CliFF Appendix.

By definition in Clinical Phase I, FI is 100%. Duration to follow procedures specified in ISS checklist, i.e. observation period and oral or injectable medication for the worst case scenario, is estimated in 15 to 20 minutes. During Clinical Phase II, FI is estimated at 2 to 42%. Duration is estimated at 48 to 72 hours, based on analysis of in flight data (Homick, 1984) (Davis, 1993). In Clinical Phase III, by definition, full recovery is expected and FI is 0%. By definition, EVAC and LOCL are not expected for a space adaptation condition (In-flight Compilation Lockdown revised, 2010). After administration of promethazine in the treatment of SMS, there is a potential for adverse side effects. These effects include sedation and urinary retention specifically. A separate CliFF exists within the IMM for Urinary Retention (Space Adaptation) which captures several cases of urinary retention that were associated with the administration of promethazine for the treatment of SMS. It is difficult to quantify the impact of medication side effects as each individual subject may experience either no effect or a variable range of effects. Countermeasures are available for urinary retention and for sedation and would be used if necessary in the operational setting. Countermeasures include, for example, the timing of administration of sedating medication doses to correlate with crew member sleep cycle and administration of a neurostimulant to counteract the sedation side effects.

### Untreated Best Case Comments

Space Motion Sickness (space adaptation) functional impairments (FI) calculation follows the IMM space adaptation template. Vestibular disorders ratings are based on Table 11-4, p. 258 (American Medical Association, 2008). Upper Digestive Tract is based on Table 6-4, p 107 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further information on grading refer to the CliFF Appendix.

During Clinical Phase II, FI is estimated at 2 to 42%. Duration is 12 to 48 hours, similar to the treated best case scenario. In Clinical Phase III, full recovery is expected and FI is 0%. By definition EVAC and LOCL would not be expected for the best case scenario.

### Untreated Worst Case Comments

Space Motion Sickness (space adaptation) functional impairments (FI) calculation follows the IMM space adaptation template. Vestibular disorders ratings are based on Table 11-4, p. 258 (American Medical Association, 2008). Upper Digestive Tract is based on Table 6-4, p 107 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further information on grading refer to the CliFF Appendix.

During Clinical Phase II, FI is estimated in 29 to 64%. Duration is 48 to 72 hours, similar to the treated worst case scenario. In Clinical Phase III, full recovery is expected and FI is 0%. By definition EVAC and LOCL would not be expected for the worst case scenario.

There is a small probability, e.g. 1% or less, that a crew member, with unresolved and/or prolonged symptoms becomes dehydrated without treatment. This scenario is addressed in the Hypovolemic Shock CliFF. 5/11/2020 5:48:36 PM Space Motion Sickness (space adaptation) Cliff page: 5

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |
| ---------------------------------- | --------- | ------------ |
| American Medical Association, 2008 | 3 | FI |
| American Medical Association, 2008 | 3 | FI |
| Lopez, 2010 | 1 | EVAC |
| Saile L., 2017 | 1 | BCWC |

5/11/2020 5:48:36 PM Space Motion Sickness (space adaptation) Cliff page: 6

The Resource Table (RT) Units

|  | Units Units | Available |  |
| --------- | ----------------- | ------------------ | ------------------------------------ |
|  | Required Required | At Start |  |
|  | Best Worst | Of |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |
| BZK wipes | 1 4 | 60 Yes | No Cleanse the skin for IM injection |

Phenergan (Promethazine tablet) 1 0 100 Yes Yes To treat nausea and/or vomiting. 25 mg

| Promethazine (Phenergan) | 1 8 | 24 Yes | Yes Nausea relief |
| ------------------------ | --- | ------ | ----------------- |

25mg/mL 1 mL injectable Sharps container 1 1 40 No No receptacle for needles to prevention needle sticks following IM injections Syringe (3cc) 1 4 20 Yes Yes Need to administer IM injection.

### Resource Comments

The drugs primarily used to treat motion sickness have antihistaminic or anticholinergic actions or a combination thereof. Oral delivery of Promethazine has been used with some success. However, antimotion sickness drugs given orally are often ineffective in suppressing symptoms of motion sickness that have already developed. A motion sick individual may expel some of a drug dose in vomitus. Diminished gastric motility is also one of the signs of motion sickness; consequently, the passage of drugs to absorption sites in the small intestine may be delayed. Drug pharmacokinetics may also be altered in microgravity environments. Parenteral administration of antimotion sickness drugs circumvents these problems and provides a rapid way of getting drugs into the blood circulation. The effective dose duration of the Promethazine used was specified to be 4.5–6 h. (Lackner, 2006)

If a severe reaction to *Promethazine (Phenergan), e.g. spasm of head and neck muscles, occur inject 1 mL (entire syringe) of 50 mg/mL *Dyphenhidramine (Benadryl) (ALSP, Drug-E37 to 40) intramuscularly. (International Space Station Integrated Medical Group, 2008) Because Benadryl is not treatment for motion sickness and it will be used only if needed, it is not included in the resources table.

All resources included in the table follow the ISS procedure for motion sickness (MOD, 2011).

Our review of medication usage in flight showed the following drugs: Phenergan (125), Scopolamine/Dexedrine (56), Phenergan/Dexedrine (27), Reglan (Metoclopramide) (21), Compazine (2), and Scopolamine (2). Of note, Scopolamine, Compazine, and Reglan are not included in the current medical kit. The contents include: Phenergan injectable (6), oral (30), Dexedrine (10 tabs) and Zofran (12).

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |
| ----------------------------------------------- | --- | --------- | ------------ |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 | Resources |

5/11/2020 5:48:36 PM Space Motion Sickness (space adaptation) Cliff page: 7

### Level Of Evidence

| Input Data | LOE Average | Description | Range |
| ---------------------- | ----------- | ----------- | ----- |
| Incidence | 1 | Excellent | 1-2 |
| Functional Impairment | 3 | Good | 2.1-3 |
| Best Case / Worst Case | 1 | Fair | 3.1-4 |
| EVAC / LOCL | 1 | Poor | 4.1-5 |
| Resources | 2 |  |  |
| QUALITY OF EVIDENCE | 1.6 |  |  |

5/11/2020 5:48:36 PM Space Motion Sickness (space adaptation) Cliff page: 8

### Reference List

Reference American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. American Medical Association. Ear, Nose, Throat, and Related Structures. Guides to the Evaluation of Permanent Impairment. 6th ed.

- Chicago: American Medical Association Press; 2008. p. 247-79.

American Medical Association. Digestive System. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 101-27.

Davis JR, Vanderploeg JM, Santy PA, Jennings RT, Stewart DF. Space motion sickness during 24 flights of the space shuttle. Aviat Space Environ Med 1988 Dec;59(12):1185-9. Davis JR, Jennings RT, Beck BG. Comparison of treatment strategies for Space Motion Sickness. Acta Astronaut 1993 Aug;29(8):587-91.

Davis JR, Jennings RT, Beck BG, Bagian JP. Treatment efficacy of intramuscular promethazine for space motion sickness. Aviat Space Environ Med 1993 Mar;64(3 Pt 1):230-3.

Gontcharov IB, Kovachevich IV, Pool SL, Navinkov OL, Barratt MR, Bogomolov VV, et al. In-flight medical incidents in the NASA-Mir program.

Aviat Space Environ Med 2005 Jul;76(7):692-6.

Heer M, Paloski WH. Space motion sickness: incidence, etiology, and countermeasures. Auton Neurosci 2006 Oct 30;129(1-2):77-9.

Homick JL, Reschke MF, Vanderploeg JM. Space Adaptation Syndrome: Incidence and Operationl Implications for the Space Transportation System Program. 1984 May; Neuilly Sur Seine, France: North Atlantic Treaty Organization (NATO) Advisory Group for Aerospace Research and Development (AGARD); 1984 p. 36-1-36-6.

International Space Station Integrated Medical Group. Medical Checklist ISS- All Expeditions. Houston: National Aeronautics and Space Administration; 2008. International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

Kerstman EL. SMS incidence. Lopez V, editor. 4-26-2011.

Lackner JR, DiZio P. Space motion sickness. Exp Brain Res 2006 Nov;175(3):377-99.

Lopez V. In-flight medical events revised_Functional Impairment. 2010. Houston, Texas, NASA, Johnson Space Center.

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

NASA OCHMO 80771201MED. NASA Crewmembers Medical Standards. Houston: NASA; 2007.

NASA Office of Bioastronautics. Bioastronautics Roadmap A Risk Reduction Strategy for Human Space Exploration. Lyndon B. Johnson Space Center, Houston, Texas; 2005 Feb 2. Report No.: NASA SP 2005 6113.

Ortega HJ, Harm DL. Space and Entry Motion Sickness. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New

- York: Springer; 2008. p. 211-22.

Reschke MF, Harm DL, Parker DE, Sandoz G, Homick JL, Vanderploeg JM. Neurophysiologic Aspects Space Motion Sickness. In: Nicogossian AE, Leach Huntoon C, Pool SL, editors. Space Physiology and Medicine. 3rd ed. Media, PA: Williams & Wilkins; 1993. p. 228-60.

Reschke MF, Kornilova L, Harm DL, Bloomberg J, Paloski WH. Neurosensory and Sensory Motor Function. In: Leach Huntoon C, Antipov V, Grigoriev A, editors.Reston, VA: American Institute of Aeronautics and Astronautics; 1996. p. 135-93.

Saile L., Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence V2. 2017.

Saile L., Boley L, Arellano J, Kerstman E. iMED Best and Worst Case Percentage Update. 2017.

Saile L, Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence. 2017.

Walton M, Kerstman E, IMM. In-flight Compilation v20100414_Incidence_calculation. 2010. 5/11/2020 5:48:36 PM Space Motion Sickness (space adaptation) Cliff page: 9

---

## Source metadata

```yaml
source_filename: "space-motion-sickness-space-adaptation-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Neurovestibular Disturbance/CliFF 100"
source_url: "https://drive.google.com/file/d/1IT-UukFgzlzUbWV-YmCig7N6JeRM2Lyw/view"
source_drive_id: "1IT-UukFgzlzUbWV-YmCig7N6JeRM2Lyw"
source_sha256: 32da51585391aee4a4b0233ecf4535187ffcbe3846f454ac18873181d3e728df
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 9
ocr_performed: false
```
