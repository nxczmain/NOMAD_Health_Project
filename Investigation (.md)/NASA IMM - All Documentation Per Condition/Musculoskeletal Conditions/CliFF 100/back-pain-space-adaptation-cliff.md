# Back Pain Space Adaptation CLiFF

[View original PDF](https://drive.google.com/file/d/1dQz-2H0vmG1vNbTSKSSvWFl62ORMW5_-/view) · **7 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Musculoskeletal Conditions/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

Back Pain (Space Adaptation) Cliff

## Branch Baseline

Back pain resulting from Space Adaptation Syndrome is the most common musculoskeletal complaint seen in space flight. The mechanism is thought to result from elongation of the paravertebral ligaments. The spine is known to elongate 1-2% during the first few days of microgravity in space flight.

The nature of the pain is localized, non-radiating, and spasmodic involving the paravertebral muscles. Relief is often reported with spinal flexion achieved in the fetal position. Non-steroidal anti-inflammatory agents have also proven to be effective. This syndrome usually subsides after the first several days on orbit. (Kerstman, 2011)

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

- Data Category: Raw Data

- Space Adaptation: Yes

- Incidence Type: Proportion

## Distribution Data

- Incidence: Beta

- Occurrence: Bernoulli

## Data Characteristics

- Occurrence Hour Range: 24 to 120

- Peak Occurrence Hours: 24

- Events: 425

- Persons At Risk: 871

- Space Flight Incidence Rate (Events / Persons at Risk): 425 / 871 = 0.487944890929966

4/6/2020 4:38:22 PM Back Pain (Space Adaptation) Cliff page: 1

## Incidence Comments

In Kerstman et al. Space Adaptation Back Pain (SABP): Retrospective Study the mission records were reviewed for the U.S. space program Flight Medicine Clinic, which included mission summaries, flight surgeon logs, preflight medical exams, postlfight medical exams, and postflight medical debriefs. The objective of this study was to determine the incidence of SABP amoung the crew members in the U.S. Space Program (Kerstman, 2011). The incidence data was updated to integrate the Real World System observed events including the person at risk from our validation data set.

There were 10 ISS and 33 STS events added. Along with 145 more persons at risk. This data set included the remaining Shuttle missions and ISS Expedition 31/32 through Expedition 39/40 (Saile, 2017).

Updated the Person-Years based on the revised real world system integrated incidence data. The integrated persons at risk changed from 144 to 143 so the conditions person at risk when from 872 to 871 (Saile L., 2017)

### Information Regarding Prevention

Shuttle astronauts had the highest incidence of SABP. This may have been due to the fact that Shuttle crewmembers often reported that they were unable to obtain a comfortable position (knees bent to chest) within their sleep compartments. The use of a standardized postflight questionnaire addressing in-flight back pain also may have contributed to the higher incidence of SABP among Shuttle astronauts. While commanders and pilots have lower incidence than mission specialists, payload specialists, or flight engineers. This may be due to that pilots and commanders are more like to be repeat fliers. The complaint of Space Adaptation amoung repeat fliers is lower than first time (Kerstman, 2011).

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Kerstman, 2012 1 Incidence Saile L., 2017 1 Incidence

### Alternative Incidence Data

A retrospective study in 1991 of 58 Shuttle crew members’ medical records at Johnson Space Center NASA was conducted. The incidence of the back pain during space flight was 68% of the crew reported back pain. Additional information was obtained by 19 Shuttle payload specialists, which was a subset of the original 58. A questionnaire was answered and found 74% of the payload specialists reported in flight back pain (Wing, 1991). Then in 1994, a prospective bed rest study was conducted on eight test subjects to compare back with spinal lengthening. The subjects were placed in a head down tilt of 6 degrees to simulate the effects of microgravity. The researchers found that pain in actual and simulated microgravity may result from the stretching of the spine or paraspinal tissue until a new spinal length is reached.

In 2009, another retrospective study was conducted to evaluate in flight musculoskeletal injuries. However in flight back pain related to space adaptation was not delineated separately in this study. So the following year, Eric Kerstman, M.D. et al conducted a study to determine the incidence of Space Adaptation Back Pain, while defining a case definition, which is used in this medical condition (Kerstman, 2011). 4/6/2020 4:38:22 PM Back Pain (Space Adaptation) Cliff page: 2

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.25 0 - 9 0 - 36 - 72 0 0 0 (best case scenario %: 96.95 - 97.18)

ISS-based Treatment 100 0.5 1 - 14 72 - 156 - 240 0 0 0 (worst case scenario %: 2.82 - 3.05)

Untreated Best Case 0 0 1 - 14 0 - 36 - 72 0 0 0 Untreated Worst Case 0 0 10 - 24 72 - 156 - 240 0 0 - 1 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.)

### Scenario Comments

Based on Kerstman’s retrospective review of in-flight space-adaptation back pain, approximately 97 percent of cases are mild to moderate with an excellent response to available treatment and 3 percent are severe and/or have a poor response to treatment (Kerstman, 2011). The best case scenario is defined as back awareness to mild back discomfort in the lumbar region. While the worst case scenario moderate to server back pain in the also in the lumbar region.

Based on the Real World Systems data there were no worst cases so to integrate this data into the BC/WC percentage the algorithm developed with the original data set was used. Therefore, if the next case is a worst case we would 13/425 or 3% of cases as worst cases. If the next case is best case, we would have 12/425 or 3%. Thus the percentage for best case is 97% (Saile L., 2017) 4/6/2020 4:38:22 PM Back Pain (Space Adaptation) Cliff page: 3

### Best Case Comments

Diagnosis and initial treatment is estimated to require approximately 15 minutes based on the ISS Medical Checklist (International Space Station Program, 2009). During the on-going treatment phase in Clinical Phase II the functional impairment is 0-9 percent based on the range for Class 0 and Class1 in the Guides to the Evaluation of Permanent Impairment while the expected duration of 0 to 72 hours. Because of the nature of space adaptation there is neither functional impairment in Clinical Phase III (mission end state) nor chance of evacuation or lost of crew life (American Medical Association, 2008) (Kerstman, 2011).

### Worst Case Comments

In the worst case scenario the back pain starts during the first days of the mission and typically resides within in five days but has been known to last as long as 10 days. None of the astronauts reported SABP after flight day 12, and only two astronauts reported SABP after flight day 10 (Kerstman, 2011). The crew member requires oral medication and fetal positioning during sleep to relieve symptoms. The interruption of sleep crew ability to operate could be impaired for some of the mission tasks (Whitmire, 2009). The functional impairment during clinical phase two, 1- 14 percent, was derived using the Class 1 and Class 2 in the Guides to the Evaluation of Permanent Impairment. Again, the nature of space adaptation there is neither functional impairment in Clinical Phase III (mission end state) nor chance of evacuation or lost of crew life. (American Medical Association, 2008) (Kerstman, 2011).

### Untreated Best Case Comments

Most space adaptation back pain reported was mild and self-limited. In those case where treatment is not available or used the estimated functional impairment in Clinical Phase II is 1-14 percent. The duration is estimated to last 0-72 hours (American Medical Association, 2008). The nature of space adaptation there is neither functional impairment in Clinical Phase III (mission end state) nor chance of evacuation or lost of crew life. (American Medical Association, 2008) (Kerstman, 2011)

### Untreated Worst Case Comments

In the untreated worst case have no treatment available the functional impairment rises in Clinical Phase II to 10-24 percent based on Class 2 and Class 3 from the Guides to the Evaluation of Permanent Impairment (American Medical Association, 2008). The duration remains at 72 hours to 240 hours. Even though by the nature of space adaptation conditions being self limiting, there is a 0-1 percentage of EVAC because of irretractable pain and the ability to manage it and the potential cognitive impairment related to mission tasks. The functional impairment remains at 0 (American Medical Association, 2008) (Kerstman, 2011).

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Kerstman, 2012 1 BCWC 1 EVAC American Medical Association, 2008 3 FI Saile L., 2017 1 BCWC 4/6/2020 4:38:22 PM Back Pain (Space Adaptation) Cliff page: 4

### Additional Comments

PubMed key word search included back pain, spinal lenthening, and space adaptation.

Belavy studied the effectiveness of resistive exercise countermeasure with a whole body vibration during a flight analog study. The study was looking at a countermeasure to reduce the risk for low back injury due to the spinal lengthening, flattening of the spinal curves, increase disc size, and muscle atrophy during space flight. He found that the resistive vibration exercise countermeasure did reduce but not entirely prevent muscle atrophy and passive spinal tissue deconditioning during bed rest. (Belavy, 2008).

In 2004, Kershner investigated the relationship of lumbar intrathecal ligaments in the spinal lengthening as a possible etiology for the astronauts report of back pain during space flight. He found there was a significant amount of tension placed on the dorsal nerve roots tethered by the intrathecal ligaments during the spinal lengthening, which can result in the back pain. (Kershner, 2004). 4/6/2020 4:38:22 PM Back Pain (Space Adaptation) Cliff page: 5

The Resource Table (RT) Units

|  | Units Units | Available |  |  |  |
| ------------------------ | ----------------- | --------- | -------------------- | ----------- | --- |
|  | Required Required | At Start |  |  |  |
|  | Best Worst | Of |  |  |  |
| Resource | Case Case | Mission | Consumable Essential | Rationale |  |
| Motrin (Ibuprofen) 400mg | 2 6 | 500 | Yes Yes | Pain relief |  |

### Resource Comments

In the Kerstman's study the use of analgesic medications (primarily ibuprofen) was effective in the treatment of SABP. However, nonsteroidal anti-inflammatories such as ibuprofen have potential adverse side effects, including the potential to cause gastrointestinal bleeding. Fetal positioning, exercise, and spinal loading were also noted as effective treatments for SABP. Decreased spinal lengthening may be a common mechanism of these treatments. None of the astronauts reported the inability to perform assigned mission tasks due to SABP. To date, there have been no reports of operational impact related to SABP (Kerstman, 2011) .

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value |  | LOE Category |  |
| -------------- | --- | --------- | --- | ------------ | --- |
| Kerstman, 2012 |  | 1 |  | Resources |  |

### Level Of Evidence

| Input Data | LOE Average |  | Description |  | Range |
| ---------------------- | ----------- | --- | ----------- | --- | ----- |
| Incidence | 1 |  | Excellent |  | 1-2 |
| Functional Impairment | 3 |  | Good |  | 2.1-3 |
| Best Case / Worst Case | 1 |  | Fair |  | 3.1-4 |
| EVAC / LOCL | 1 |  | Poor |  | 4.1-5 |
| Resources | 1 |  |  |  |  |
| QUALITY OF EVIDENCE | 1.4 |  |  |  |  |

4/6/2020 4:38:22 PM Back Pain (Space Adaptation) Cliff page: 6

### Reference List

Reference American Medical Association. Spine and Pelvis. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 373-431.

Henneberger PK, Metayer C, Layne LA, Althouse R. Nonfatal work-related inhalations: surveillance data from hospital emergency departments, 1995-1996. Am J Ind Med 2000 Aug;38(2):140-8.

International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

Kerstman EL, Barnes MG, DeKorse TB, Scheuring RA, Saile LG. Space Adaptation Back Pain: Retrospective Study. Aviat Space Environ Med 2012 Jan;83(1):2-7. Mlcak RP, Suman OE, Herndon DN. Respiratory management of inhalation injury. Burns 2007 Feb;33(1):2-13.

Saile L., Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence V2. 2017.

Saile L., Boley L, Arellano J, Kerstman E. iMED Best and Worst Case Percentage Update. 2017.

Saile L, Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence. 2017.

Whitmire AM, Leveton LB, Barger L, Brainard G, Dinges DF, Klerman E, et al. Risk of Performance Errors Due to Sleep Loss, Circadian Desynchronization, Fatigue, and Work Overload. In: McPhee JC, Charles JB, editors. Human Health and Performance , Risks of Space Exploration Missions.Houston: National Aeronautics and Space Administration; 2009. p. 85-116.

Wing PC, Tsang IK, Susak L, Gagnon F, Gagnon R, Potts JE. Back pain and spinal changes in microgravity. Orthop Clin North Am 1991 Apr;22(2):255-62. 4/6/2020 4:38:22 PM Back Pain (Space Adaptation) Cliff page: 7

---

## Source metadata

```yaml
source_filename: "back-pain-space-adaptation-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Musculoskeletal Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/1dQz-2H0vmG1vNbTSKSSvWFl62ORMW5_-/view"
source_drive_id: "1dQz-2H0vmG1vNbTSKSSvWFl62ORMW5_-"
source_sha256: 889266b84724c4a55ac903994b42ebebc64f412b3710276e085aa9d4e22ff4e2
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 7
ocr_performed: false
```
