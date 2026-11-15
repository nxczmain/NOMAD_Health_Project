# Barotrauma Ear Sinus Block CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1W0wSUZVF117HLwod1CCz_HVmm9t4oNFI/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 119

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

ICL11_Barotrauma (Ear/Sinus Block) This condition is most likely to be associated with ambient pressure changes during an EVA. Therefore. inflight data would be most applicable.

Barotrauma of the ear and sinuses occurs when there are pressure changes in the gases trapped within these cavities. This condition happens when there is a difference in pressure between the enclosed volume and the ambient pressure, and the change in ambient pressure overcomes the capacity of the enclosed space to equalize. Changes in pressure occur during space flight missions when the crewmember is transferring between habitable volumes of differing pressures (such as in an airlock), when pressurizing and depressurizing for an EVA, and when contingencies result in changing pressures in the spacecraft. During some space shuttle missions, the cabin pressure was lowered to 10.2 psi to reduce the amount of time needed to pre-breathe by EVA astronauts. It is felt that the risk of barotrauma at constant cabin pressure is extremely low and can be considered zero. Accordingly, the incidence is based on the number of EVA’s that are performed during a mission with each participating crewmember at risk. It is felt that this approach represents a significant improvement from the previous IMM CLIFF that covered this condition. This medical condition is mission phase dependent. It is postulated to occur only during the pressure changes associated with EVA. The risk is considered to be zero during periods when the cabin pressure remains constant. Limitations • Under-reporting for this condition could have occurred during past space missions since barotrauma may be mild and easily cleared by the crew. This could result in underestimation of the incidence. • If there are significant cabin pressure changes during transition from a lunar/Martian lander and habitat to an orbiting vehicle, these events may also result in barotrauma. Each such occurrence should be considered as a separate at-risk event, equal to an individual EVA. Reconsideration of these risks will need to be done after IMPACT 1.0. • It is important that MPRAT implement the calculated incidence on a per-crewmember basis. In other words, if three crewmembers experience a pressure change as a result of an EVA, these are three separate events.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Spaceflight incidence was somewhat difficult to ascertain as the key paper used in previous CLIFF (Walton, 2010) was unable to be found via search. A similar incidence was calculated using instances of barotrauma during the apollo program and calculating total person flight hours to estimate an incidence (1 in-flight event/7494 hours of person flight time). Antonsen et al's "Risk of Adverse Health Outcomes and Decrements in Performance due to In-Flight Medical Conditions" provides the most accurate number of events of barotrauma in astronauts, but no time frame is given so it is impossible to calculate an incidence.

### ANALOG LITERATURE

Analog literature mostly included diving and altitude (flight or altitude experiments). Barotrauma has a higher incidence in diving as expected, as pressure changes in diving greatly exceed those in flight. Diving literature was used to estimate incidence of worst case outcomes, as the included paper graded ear damage using a modified TEED score and I was able to calculate what percentage of cases were severe using a modified TEED score >2.

### TERRESTRIAL LITERATURE

No terrestrial incidence included, as barotrauma outside of diving//altitude/flight was not readily found in the literature.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean: 0.1043 and SD: 0.0142 6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 1

### INCIDENCE SUMMARY

Beta(shape1=48.22, shape2=414.09) with mean: 0.1043 and SD: 0.0142. This reflects the Bayesian posterior distribution for the incidence proportion given the inflight data of 48 events over 467 person-EVAs using an uninformative prior. Data: Inflight experience of 48 events over 467 person-EVAs. This aligns with the 2 IMM data requests matching the 31 for the initial LSAH data pull (Walton 2010) which is identical to Table 2 in Antonsen, and 17 additional cases in the Saile 2017 RWS LSAH data request. IP 0.1028 (95%CI: 0.0768, 0.1340).

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

EVA Segment

### EVA All

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Beta Mean 0.104302 SD 0.0142001 Beta (Alpha): 48.22 (Beta): 414.09 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Walton, et al. 2010 Spaceflight 3 LOE = 3 (somewhat confident) based on historical spaceflight data. Not assigned LOE 4 (confident) due to unknown vehicle and atmosphere design for future exploration missions. 6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

No preflight preventive measures from a medical perspective. Prevention will be though vehicle and atmosphere design considerations, and inflight procedures.

### BEST CASE SCENARIO DEFINITION

Mild barotrauma including minimal ear or sinus pain and/or fullness that responds to analgesics and decongestants.

### WORSE CASE SCENARIO DEFINITION

Moderate to severe barotrauma, including symptoms of significant ear and/or sinus pain, hearing loss, vertigo, nausea, dizziness, and/or ear canal hemorrhage or epistaxis that may require surgical repair (e.g. oval window rupture).

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

### Oval Window Rupture

### BEST CASE/WORST CASE PROBABILITY COMMENTS

This condition was well supported with decent analogue and reasonable spaceflight data. Data relied on military papers as well as dive data-- as this is a reasonable terrestrial analogue to pressure ops, although acknowledging [?] that the characterization of the condition definition "assumes ambient spacecraft atmospheric pressure changes occur regularly in the course of ISS missions operations." BC definition did not support RTDC or LOCL outcomes. There were multiple surrogates cited. Cumulatively, Tab 1A and 4D stated "Hospitalization, Surgery and 'RTDC surrogate is refractory vertigo'." After consultations with preceptors, all were considered for WC RTDC.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Walton, et al. 2010 Spaceflight 4 6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best mean: 0.1043 98 - 98 100 0.7 11.6264 24 288 0 0 0 0 0

- Case (TBC) and SD: 0.0142

Treated Worst 2 - 2 100 1.25 45.3893 24 1344 0 0 9.1 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.7 11.6264 24 288 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.25 53.2421 24 1344 6.77651 0 100 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The best-case scenario is a mild barotrauma event that easily resolves. Minimal pain is expected. The worst case is a moderate to severe barotrauma. The definition also states hearing loss, vertigo, nausea, dizziness, and/or ear canal hemorrhage or epistaxis are all possible, but many of these are separate conditions. TREATED BEST CASE (TBC) SCENARIO COMMENTS Excellent analogue paper from Aerospace medicine and human performance, with a similar cohort to the astronaut corps in age and fitness level [limitation: Korean student pilots]. RTDC and LOCL are expected to be 0 per definition.

TREATED WORST CASE SCENARIO (TWC) COMMENTS Excellent analogue studies-- again citing Sohn 2017 as well as paper for WC definition [Klingmann, 2007], which cites diving accidents-- pressure ops being one of the most likely etiologies for this condition in space. TWC LOCL as expected per definition, yielded no data supporting any mortality. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Similar data used as the treated scenarios, with useful data for UTBC duration. Per definition, Best case untreated are not expected to result in RTDC or LOCL. UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Search methodologies as outlined for Untreated yielded no results. We may assume longer durations than best case definitions, therefore I copied UTBC into UTWC duration with a ">" sign, to give some data, albeit imperfect. One study [Roscycki, 2018--NOT CITED] summarized the conundrum with reconciling WC definition with untreated outcomes "The diagnosis of inner-ear barotrauma remains difficult to define short of visualization through surgical exploration. Early treatment is defined by conservative management with a subsequent observational period to determine symptomatic resolution and need for surgery." Inner ear DCS which requires early recompression cannot be considered equivalent, as many symptoms of vertigo, etc., resolve after recompression confounding, per our definition, UNTREATED "symptoms of significant ear and/or sinus pain, hearing loss, vertigo, nausea, dizziness, and/or ear canal hemorrhage or epistaxis that may require surgical repair." TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Sohn, et al. 2017 Terrestrial 3 CP2 durations based on terrestrial studies. (Sohn, 2017). This data is assigned an LOE = 3 for treated scenarios and an LOE = 1 for untreated scenarios. TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Klingmann, et al. 2007 Terrestrial 3 6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 5

LOE = 4 for best case scenarios. RTDC is not expected in best case scenarios based on best case definition. LOE = 3 for treated worst case scenario. (Klingmann, 2007). LOE = 1 for untreated worst case scenario. Untreated worst case RTDC = 0-100% based on worst case definition and RTDC surrogate of refractory vertigo.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

N/A N/A 4 LOCL is not expected for this condition CAPABILITY RESOURCE TABLE (CRT) OVERVIEW ICL - 11, Barotrauma (Ear/Sinus Block) Definitions: Best Case: Mild barotrauma including minimal ear or sinus pain and/or fullness that responds to analgesics and decongestants. Worst Case: Moderate to severe barotrauma, including symptoms of significant ear and/or sinus pain, hearing loss, vertigo, nausea, dizziness, and/or ear canal hemorrhage or epistaxis that may require surgical repair (e.g. oval window rupture). Capabilities and Resourcing Scope Overview Barotrauma is a tissue injury that occurs secondary to rapid, uncompensated fluctuations of a pressure differential outside the body (Battisti et al. 2021). This condition is governed by Boyle’s Law of Gases which states that if temperature is a constant, there is an inverse relationship between pressure and volume of the gas. Physiological systems most affected by barotrauma are those that entrap air including the auditory system, facial sinuses, and lungs. However, any tissue can be affected, especially if there is prior sustained injury. For example, in aerospace conditions, barodontalgia and dental barotrauma occurs due to incompletely filled carries. This CRT condition focuses solely on ear block or “oxygen ear” and barosinusitis. Crew members are most at risks for these conditions during transitions from EVA pressure suits. Most issues occur during repressurization back to craft or station (Barratt et al. 2019). To help circumnavigate ear block, helmets include a ‘Valsalva device’ that astronauts can push against to open their eustachian tubes, which helps equalize their middle ear space. If pressure continues to increase without equalization of the middle ear space, blood vessels will burst and lead to tympanic membrane rupture (Conkin et al. 2018; Landolfi et al. 2010). Implosive or explosive forces transmitted via perilymph can also result in damage to the round or oval windows (inner ear) (OJ et al. 2021). Even once back at stable cabin pressures, eustachian tube function continues to be of importance as it can take several days for pressure differential in the middle ear to resolve. Sinus barotraumas may affect any paranasal sinus (frontal, ethmoid, sphenoid, or maxillary) (Misirovs et al. 2020). The maxillary sinus is often most affected resulting in cheek or facial pain. Sinus barotraumas are not readily relieved by maneuvers to open the Eustachian tube because the obstructed ostia of the sinuses are not in the vicinity of eustachian tube and have their own opening into the nasal cavity (Mohamad 2012). If the affected sinuses’ ostium remains blocked, rupture of vessels inside the sinus can occur resulting in epistaxis (resources for epistaxis are provided in a separate CRT). Treatments for both ear and sinus barotrauma emphasize on relieving the offending obstructions, either eustachian tube or ostium dysfunction, and treating any resultant symptoms. Since both conditions rely on nasal cavity patency, decongestants are a mainstay of treatment. The best-case scenario is a mild barotrauma event that easily resolves.

Minimal pain is expected. The worst case is a moderate to severe barotrauma. Although the definition states hearing loss, vertigo, nausea, dizziness, and/or ear canal hemorrhage or epistaxis are all possible, many of these conditions are separate CRT conditions and not resourced here. In the worst case, most resources are sourced for pain and vertigo treatment in addition to nasal patency. CNES: Oval Window Rupture Diagnostic Scope and Resourcing In the best case, diagnosis will be made via history and physical exam. Given the benign nature of this condition, ground communications are not resourced for the best case. For the worst case, a simple differential can be explored using inflight audiometry.

Inflight audiometry not only serves to quantify the severity of hearing loss but can also differentiate between the type of hearing loss by quantifying Air- and bone conduction thresholds. Since crewmembers have immediate access to this technology, there is no need to possess a tuning fork to conduct Weber and Rinne tests. Further, if a conductive loss is identified, the latest iteration of the inflight audiometric test (KUDUwaveTM) can perform tympanograms or determine how the eardrum moves in response to the air pressure in the ear canal. Although inflight audiometry is expected to be present secondary to other CRT conditions (Hearing Loss) it was group CRT consensus to make the necessity for this resource ‘zero’ so that this condition can still be treated even if this resource is not available. Given the significant pain the crewmember is expected to experience, ground communications is resourced for the worst case. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.70 hours This is the longest reasonable time to complete the task for an experienced clinician (adjusted for being in the spaceflight environment) 1) to remove a crewmember from duties 2) obtain a history and 3) examine the patient CP1 WC (Treated or Untreated): 1.25 hours This is the longest reasonable time to complete the task for an experienced clinician (adjusted for being in the spaceflight environment)

This is the longest reasonable time to complete the task for an experienced clinician (adjusted for being in the spaceflight environment) 1) to remove a crewmember from duties 2) obtain a history 3) examine the patient 4) conduct and interpret an inflight audiometry test 5) set up for ground communications. The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a four: this is at intern/PA/NP level. Treatment Scope and Resourcing In the best-case scenario, treatment is limited to oral and intranasal decongestants and mild pain medications. Given the concern for nasal patency, a nasal hygiene regimen is recommended throughout CP2. Although in terrestrial conditions a Neti Pot is useful to relieve sinus block, it was CRT group consensus that implementing this in space would be too technically difficult. The worst case scenario also allocates for opioid medications and vertiginous medications acutely. Communications and Support Needs In the best-case scenario, diagnosis and course of treatment is uncomplicated and likely within the scope of care of onboard crew members. In the worst-case condition, ground communications are necessary given the sudden impairment of the affected crewmember and the need to ensure an accurate diagnosis. REFERENCES Barratt, Michael R., Ellen S. Baker, and Sam L. Pool. 2019. "Principles of clinical medicine for space flight." In. New York, NY: New York, NY : Springer. Battisti, A. S., A. Haftel, and H. M.

Murphy-Lavoie. 2021. 'Barotrauma.' in, StatPearls (StatPearls Publishing Copyright © 2021, StatPearls Publishing LLC.: Treasure Island (FL)).

Conkin, J., R. W. Sanders, M. D. Koslovsky, M. L. Wear, A. G. Kozminski, and A. F. J. Abercromby. 2018. 'A Systematic Review and Meta-Analysis of Decompression Sickness in Altitude Physiological Training', Aerosp Med Hum Perform, 89: 941-51. Landolfi, A., A. Autore, F. Torchia, M. Ciniglio Appiani, F. Morgagni, and G. Ciniglio Appiani. 2010. 'Ear pain after breathing oxygen at altitude: prevalence and prevention of delayed barotrauma', Aviat Space Environ Med, 81: 130-2. Misirovs, R., and S. Mohamad. 2020. 'Reverse Squeeze Maxillary Sinus Barotrauma', Ear Nose Throat J, 99: Np9-np10. Mohamad, I. 2012. 'Aeroplane headache and sinus barotrauma: any missing link?', Cephalalgia, 32: 1087. OJ, O. Neill, K.

Brett, and A. J. Frank. 2021. 'Middle Ear Barotrauma.' in, StatPearls (StatPearls Publishing Copyright © 2021, StatPearls Publishing LLC.: Treasure Island (FL)). 6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 6

### IMM CLIFF RECONCILATION COMMENTS

Barotrauma (ear/sinus block) functional impairments (FI) calculation follows the IMM mild non-space adaptation template. Barotrauma is not listed in the AMA Guides for permanent impairment. By related symptomatology and location, we are using Vestibular Disorders, based on Table 11-4, p

258. (American Medical Association, 2008) and Complex Regional Pain (UEI) is based on Table 15-26, p.454. (American Medical Association,

2008) The CRPS (UEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 15- 1, p 385

(American Medical Association, 2008). Combined FI ratings are calculated combining Vestibular disorders FI and Whole Body Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further description of gradings refer to the CliFF Appendix. By definition in Clinical Phase I, FI is 100%. Duration to follow procedures specified in ISS checklist, i.e. ear and nose exam is estimated to be 15 minutes. During Clinical Phase II, FI is estimated at 2 to 38%. Duration is estimated in 168 to 1008 hours, 7 to 42 days, or 1 to 6 weeks. For sinus barotrauma symptoms resolve spontaneously; recovery time may extend from 1-2 weeks up to 6 weeks (Weitzel, 2008); (Smith, 1972). For otic barotrauma, including the recommended waiting time for spontaneous resolution is 2-3 weeks (Clark, 2008)In Clinical Phase III, barotrauma may recover or improve. FI is estimated at 0 to 16%. By definition EVAC and LOCL are not expected for the worst case scenario.

Barotrauma could be classified as a Class I Medical Event with no mission impact, or a Class IIa, manageable with the HMS and not likely to require evacuation or affect mission duration (Johnston, 2008).

### LIMITATIONS SUMMARY

Under-reporting for this condition could have occurred during past space missions since barotrauma may be mild and easily cleared by the crew.

This could result in underestimation of the incidence. If there are significant cabin pressure changes during transition from a lunar/Martian lander and habitat to an orbiting vehicle, these events may also result in barotrauma. Each such occurrence should be considered as a separate at-risk event, equal to an individual EVA. Reconsideration of these risks will need to be done after IMPACT 1.0. It is important that MPRAT implement the calculated incidence on a per-crewmember basis. In other words, if three crewmembers experience a pressure change as a result of an EVA, these are three separate events. 6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  | 89 | 854 | 44 | 145 |  | 13 |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 |  | 13 |  |  |  |
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

| Best |  |  |  |  |  |  |  | 211 | 875 | 3763 | 0.232527 | 23.2527 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  |  | 211 | 875 | 3763 | 0.232527 | 23.2527 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3416 | 3763 | 0.907786 | 90.7786 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3752 | 3763 | 0.997077 | 99.7077 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

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

|  |  |  |  |  |  | 44 |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 8

Total Human

|  | Translation & | Total Tasks |  |  |
| --- | ------------- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | ---------------------- | ------------- | -------- | --- |

(microgravity) Condition Tasks Full Mission Treated Best

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

|  |  | 211 255 | 3763 0.0677651 | 6.77651 |
| --- | --- | ------- | -------------- | ------- |

Case (UTWC) 6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 9

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

6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 10

## REFERENCES

Reference Walton M, Kerstman E, IMM. In-flight Compilation v20100414_Incidence_calculation. 2010. Sohn, J. H., & Cho, K. R. (2017). Middle ear barotrauma in student pilots. Aerospace medicine and human performance, 88(4), 406-412. Klingmann, C., Praetorius, M., Baumann, I., & Plinkert, P. K. (2007). Barratt, Michael R., Ellen S. Baker, and Sam L. Pool. 2019. "Principles of clinical medicine for space flight." In. New York, NY: New York, NY : Springer. Battisti, A. S., A. Haftel, and H. M. Murphy-Lavoie. 2021. 'Barotrauma.' in, StatPearls (StatPearls Publishing Copyright © 2021, StatPearls Publishing LLC.: Treasure Island (FL)).

Conkin, J., R. W. Sanders, M. D. Koslovsky, M. L. Wear, A. G. Kozminski, and A. F. J. Abercromby. 2018. 'A Systematic Review and Meta- Analysis of Decompression Sickness in Altitude Physiological Training', Aerosp Med Hum Perform, 89: 941-51.

Landolfi, A., A. Autore, F. Torchia, M. Ciniglio Appiani, F. Morgagni, and G. Ciniglio Appiani. 2010. 'Ear pain after breathing oxygen at altitude: prevalence and prevention of delayed barotrauma', Aviat Space Environ Med, 81: 130-2.

Misirovs, R., and S. Mohamad. 2020. 'Reverse Squeeze Maxillary Sinus Barotrauma', Ear Nose Throat J, 99: Np9-np10.

Mohamad, I. 2012. 'Aeroplane headache and sinus barotrauma: any missing link?', Cephalalgia, 32: 1087.

OJ, O. Neill, K. Brett, and A. J. Frank. 2021. 'Middle Ear Barotrauma.' in, StatPearls (StatPearls Publishing Copyright © 2021, StatPearls Publishing LLC.: Treasure Island (FL)).

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

6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 11

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

6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 12

### SEVA Spaceflight Extravehicular Activity

### SME Subject Matter Expert

### SoP Standard Operating Procedure

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

6/15/2023 1:35:07 PM ICL11_Barotrauma (Ear/Sinus Block) Cliff page: 13

---

## Source metadata

```yaml
source_filename: "barotrauma-ear-sinus-block-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1W0wSUZVF117HLwod1CCz_HVmm9t4oNFI/view"
source_drive_id: "1W0wSUZVF117HLwod1CCz_HVmm9t4oNFI"
source_sha256: 9cf12087578325ac03cbe47e8d543d10b8b32d08640f4bb814b60dec73222d83
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
