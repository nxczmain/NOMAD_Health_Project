# Sprain Strain Neck CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1yhmz6ZtkysQo_fP1C3BSGd9G1KAn8PCa/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Musculoskeletal Conditions/CliFF 119

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

ICL103_Sprain/Strain - Neck Non-specific neck pain is a very common complaint. It affects approximately 66% of individuals during their lifetime, with the highest prevalence being during middle aged years. Acute, non-specific neck pain resolves in 90% of cases and becomes chronic in 10% of cases. (Binder, 2008). There is a paucity of data specifically regarding neck sprains/strains as defined by this CLiFF.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Scheuring et al, 2009 is a retrospective review of musculoskeletal injuries in US Spaceflight from Mercury - ISS Expedition 13. The following data sources were utilized in this review: post-flight medical debriefs, the LSAH medical record database, the Johnson Space Center (JSC) electronic medical record system, including ASCR specialist assessment and treatment logs, and the JSC Flight Medicine Clinic vault records. Musculoskeletal injury data in the ISS program was extracted from the private medical conferences held between the ISS crewmembers and their flight surgeon up to and including Expedition 13, as well as from the ASCR specialists supervising the crewmember’s in-flight training regimen. Lastly, several entries came directly from personal communications with astronaut crewmembers or flight surgeons and the authors when not otherwise duplicated.

Information collected on each injury included location, type, and a detailed narrative on the mechanism of injury, the type of exercise the crewmember performed during the flight, previous history of injury, treatment, and post-flight outcome. The term “ in-flight” included lunar surface operations. It reports 54 sprain/strain injuries and 9 "neck injuries." (Note the 9 neck injuries are corroborated by Johnston III et al, 2020).

Unfortunately, Scheuring et al, 2009 does not report the number of neck sprain/strains specifically. The IMM version 6.5 2017 update obtained data through ISS Expedition 40 to augment the Scheuring et al, 2009 study. They identified an additional 5 neck injuries (2 STS and 3 ISS). These two sources together provide a total incidence of 14 inflight "neck injuries" in US spaceflight from Mercury - ISS Expedition 40. This was considered to be the most robust data to inform this CLiFF and was used for the incidence distribution. Note that this may be an overestimate of the incidence because "neck injuries" could include injuries beyond sprain/strains, but it was felt to be the best approximation available. Ramachandran et al, 2018 is a review of pre-flight neck injuries associated with training in the Neutral Buoyancy Lab. While prior neck injury could pre-dispose to repeat injury, this does not provide in-flight neck injury incidence.

### ANALOG LITERATURE

Thomas et al, 2003 is a large (n = 13,441) retrospective review of US Navy submarines. The study population consisted of US Navy officers and enlisted men deployed on 240 submarine patrols. This analog is similar to spaceflight in that it is an isolated and confined environment. The subjects are also highly screened, and healthy, similar to astronauts. Unlike astronaut crews, the Navy submariners were all male, 88-90% were white, and most were between 18-35 years old. It provides an incidence of musculoskeletal strains/sprains or 0.7/100 person-years for officers over 30 years old. However, this incidence is not specific to the neck. Ballard, 2008 is a review of cervical spine disease in F16 fighter pilots and associated need for corrective surgery. Degenerative joint disease of the cervical spine is common in fighter pilots and outside the scope of this condition as it relates to the bones rather than the muscles, tendons, and ligaments. Neither of these sources were used to inform the incidence.

### TERRESTRIAL LITERATURE

Safiri et al, 2020 reports annual incidence of neck pain of 806.6 per 100,000 person-years in the general public in 195 countries in the 2017 Global Burden of Disease study. The annual incidence in "High Income North America" was higher, 906.4 per 100,000 person-years. "Neck pain" was defined as, "Pain in the cervical spine region (with or without pain referred to the arms) that lasts for at least 24 hours." Search terms included: “neck pain”, “neck ache”, “neckache”, and “cervical pain.” This population is more heterogenous than the astronaut crewmember population.

Quinlan et al, 2004 is a review of neck sprains/strains presenting to the emergency department after a motor vehicle accident in the year 2000 in the United States. Unless there is a catastrophic explosion in spaceflight or a crash landing, the forces experienced will not be equal to that of an MVA. Neither of these sources were used to inform the incidence for this CLiFF. 9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 1

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

- Mean: 0.3137 SD: 0.08432

### INCIDENCE SUMMARY

The incidence for this CLiFF is informed by Scheuring et al, 2009; Johnston III et al, 2020; and NASA, Neck Sprain/Strain CLiFF, 2017. It is approximated based on reported cases of “neck injury” in spaceflight. This may be an overestimate given it is not specific to neck sprain/strain, but was felt to be the best data available. There have been a total of 14 cases of “neck injury” in U.S. spaceflight. The first 9 events occurred from Mercury – ISS Expedition 13 and are published in Scheuring et al, 2009; Johnston III et al, 2020. The remaining 5 events occurred from ISS Expedition 14 – ISS Expedition 40 and are documented in the prior IMM CLiFF (NASA, Neck Sprain/Strain CLiFF, 2017). This is the Bayesian posterior distribution for the incidence rate given the spaceflight data (14 events over 44.58 person-years) under an uninformative prior is Gamma(shape=13.84, rate=44.12) with mean 0.3137 and SD 0.08432.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.31369 SD 0.0843204 Gamma (Shape): 13.84 (Rate): 44.12 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Safiri et al, 2020 Terrestrial 0 Quinlan et al, 2004 Terrestrial 0 Scheuring et al, 2009 Spaceflight 3 Johnston III et al, 2020 Spaceflight 3 NASA, Neck Sprain/Strain CLiFF, 2017 Spaceflight 3 Ramachandran et al, 2018 Spaceflight 2 Thomas et al, 2003 Analog 1 9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 2

### Citation Source LOC Value

Ballard, 2008 Analog 1 Scheuring et al, 2009 is a retrospective analysis of in-flight musculoskeletal injuries from Mercury - ISS Expedition 13. Sprains/strains and "neck injury" are reported separately so it is unclear how many of the neck injuries were specifically diagnosed as a sprain/strain. The data from Scheuring et al, 2009 is corroborated by Johnston III et al, 2020. The 2017, v6.5, update of the IMM CLiFF added an additional 5 neck injuries (3 ISS and 2 STS) through Expedition 40 of the ISS program (NASA, Neck Sprain/Strain CLiFF, 2017). Ramachandran et al, 2018 is a review of pre- flight neck injuries secondary to NBL training. Thomas et al, 2003 is analog data from US Navy Submariners, and presents incidence of sprain/strains but is not specific to back sprain/strain. Ballard, 2008 is a review of cervical spine disease in F16 fighter pilots. This is not applicable as this relates to cervical spine degenerative changes, not sprain/strain. Safiri et al, 2020 is a terrestrial systematic review of neck pain incidence in the general population. Quinlan et al, 2004 is a review of neck sprained/strains after motor vehicle accident. Unless there is a catastrophic explosion in spaceflight or a crash landing, the forces experienced will not be equal to that of an MVA. This is not relevant to the incidence for this condition. 9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

The Astronaut Strength, Conditioning and Rehabilitation (ASCR) program and Astronaut gym at Johnson Space Center are strategic to providing pre-flight strengthening in attempts to prevent or mitigate injuries as well as post-flight rehabilitation. The Strength Coach's primary role is to provide an exercise plan designed to achieve flight physical readiness and prevent musculoskeletal injuries during spaceflight training.

### BEST CASE SCENARIO DEFINITION

A Grade I or II strain/sprain in which there is minimal or partial muscle or ligamentous tearing.

### WORSE CASE SCENARIO DEFINITION

A Grade III strain/sprain in which there is full thickness muscle or ligamentous tearing, and/or instability.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

There is a paucity of data regarding the proportion of neck sprains/strains that are Grade I, II, or III based on the definition in this CLiFF. This is likely because non-specific neck pain is graded on a different scale than the definitions used for this CLiFF. The Bone and Joint Decade 2000-2010 Task Force on Neck Pain recommends using a 4 point grading scale for non-specific neck pain, as follows: Grade I neck pain has no signs of major pathology and no or little interference with daily activities; Grade II neck pain has no signs of major pathology, but interference with daily activities; Grade III neck pain has neurologic signs of nerve compression; Grade IV neck pain has signs of major pathology (Guzman et al, 2008). Trying to match these definitions to the current definitions, the split between best and worst-case would be somewhere in Grade II (i.e. some Grade II injuries would be best-case and some would be worst-case). However, despite a discrete grading scale existing for non-specific neck pain, there is still a paucity of data regarding the proportions of each of these grades in all-comer non-specific neck pain. Given the lack of data to inform best and worst-case scenario probabilities, the IMM probabilities will help to inform the best-case and worst-case probabilities of this CLiFF. Using the IMM CLiFF values alone is not an ideal solution, since the best-case and worst-case scenario definitions have changed, but it felt to be a reasonable approximation given there are no available data. The IMM best-case scenario definition was a "mild neck injury that resolves with minimal or no treatment." The current definition is a Grade I or II sprain/strain in which there is minimal or partial muscle or ligamentous tearing. Although these definitions vary, the IMM definition represents how the current best-case scenario would manifest symptoms and require treatment. The IMM definition for worst-case scenario was defined as "a moderate or severe neck injury that requires more prolonged treatment, or is refractory to treatment." The current definition is Grade III strain/sprain in which there is full thickness muscle or ligamentous tearing, and/or instability. The IMM definition again represents how the current worst-case scenario would manifest symptoms and the treatment required. Therefore, it is felt that it is reasonable to use the IMM values (60% worst-case scenario and 40% best-case scenario). Another surrogate for consideration is acute vs. chronic neck pain. 90% of non-specific neck pains resolve acutely, whereas only 60% of whiplash injuries resolve acutely (Binder, 2008). It would be expected that a worst-case scenario neck sprain/strain would be more likely to become chronic than a best-case scenario sprain.

During spaceflight there have been 14 events over 44.58 person-years. Of the 14 events, none would be considered worst case. Under an uninformative uniform(0,1) prior, given the observed 0 out of 14 cases, the posterior distribution for the probability of WC is Beta(alpha=1, beta=15) which has mean 1/16 (6.25%) (95%CI: 0.017%, 21.8%). Recommendation min 0.01%, max 21.8%, and most likely 6.25%. Unfortunately, the model can only handle min and max inputs, and sets the ML as the midpoint between. Given this limitation, I suggest we use the range 0 to 12.5% to get a most-likely close to the true posterior mean (6.25%).

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Guzman et al, 2008 Terrestrial 0 Binder, 2008 Terrestrial 2 NASA, Neck Sprain/Strain CLiFF, 2017 Spaceflight 2 Guzman et al, 2008 is the Bone and Joint Decade 2000-2010 Task Force on Neck Pain, which recommends using a 4 point grading scale for non- specific neck pain, but does not inform the proportion of all-comer neck pain that fits into each grade. Binder, 2008 presents proportions of acute neck pain that become chronic (10% non-specific neck pain, 40% whiplash injuries). The IMM CLiFF has a best-case scenario of 40% and worst- case scenario of 60% based on 3 out of 5 cases in the Real World System data set being defined as worst-case according to the definition used in that CLiFF (which notably is different than the definition in this CLiFF). 9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best Mean: 0.3137 87.5 - 100 100 0.87 21.0205 24 1095 0 0 0 0 0

- Case (TBC) SD: 0.08432

Treated Worst 0 - 12.5 100 1.36 38.666 96 4380 38.666 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.87 38.666 24 2190 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.36 41.0311 96 8760 38.666 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

The RTDC surrogate used for worst-case scenarios in this CLiFF was hospitalization and/or the need for surgical intervention. Incidence, duration, RTDC, and LOCL are difficult to determine in the literature based on the definitions of the best and worst-case scenario presented in this CLiFF.

Most of the literature that relates to this CLiFF pertains to non-specific neck pain or whiplash. The Bone and Joint Decade 2000-2010 Task Force on Neck Pain recommends using a 4 point grading scale for non-specific neck pain, as follows: Grade I neck pain has no signs of major pathology and no or little interference with daily activities; Grade II neck pain has no signs of major pathology, but interference with daily activities; Grade III neck pain has neurologic signs of nerve compression; Grade IV neck pain has signs of major pathology (Guzman et al, 2008). Trying to match these definitions to the current definitions, the split between best and worst-case would be somewhere in Grade II (i.e. some Grade II injuries would be best-case and some would be worst-case). Similarly, there are several grading scales for whiplash associated disorder (WAD), which also do not correlate well with the definitions assigned in this CLiFF. It should be noted that for both non-specific neck pain and WAD the grading scales include neurologic signs/involvement and/or fracture/dislocation (i.e. the worst-case for all of these grading scales is worse than the worst-case scenario for a neck sprain/strain according to the definition in this CLiFF). For this reason, the durations are likely over-estimates. These juxtaposed grading scales and definitions make correlating data to the CLiFF challenging. See specific comments for each scenario below.

TREATED BEST CASE (TBC) SCENARIO COMMENTS There is a paucity of data specific to neck "sprain/strains." Most literature is regarding non-specific neck pain or whiplash. There is a paucity of data specific to neck "sprain/strains." Most literature is regarding non-specific neck pain or whiplash. Two such reviews, Verhagen et al, 2007 (non- specific neck pain) and Hurwitz et al, 2009 (non-specific neck pain and whiplash) inform the duration. They both suggest a duration of 24 - 2190 hours (1 day - 6 months). While most of the studies included in these reviews represent best-case sprain strains based on the definition presented in this CLiFF, some represent worst-case. They also represent a range of treatments or placebo. Therefore, half of this duration was selected for the best-case treated scenario maximum duration (3 months) and the full 6 months was assigned as the maximum duration in the best-case untreated scenario. The Clinical and Science Team of ExMC pre-determined the RTDC probability for best-case scenarios of this condition to be 0%. However, a literature search corroborated this assumption (Jarzyński et al, 2020). No mortality literature was identified. Therefore the LOCL probability was assigned as 0%. TREATED WORST CASE SCENARIO (TWC) COMMENTS There is a paucity of data related to neck sprains/strains as defined in this CLiFF. Much of the terrestrial literature is based on whiplash (which, mechanistically, is anticipated to be unlikely in the spaceflight environment). There is a great degree of heterogeneity regarding durations of neck injuries the literature, leading to wide estimates from 96 hours to 1 year for the worst-case scenario (Verhagen et al, 2007; Hurwitz et al, 2009).

The duration range was assigned accordingly as 96-4830 hours. The RTDC surrogate for this Cliff was initially assigned as need for hospitalization or surgical intervention. Typically, patients present to the hospital due to pain. Pain control could be provided during spaceflight, so this is not a realistic surrogate for RTDC. While a Grade III sprain/strain requiring surgical intervention is possible in spaceflight, it is unlikely that RTDC would be executed for surgical intervention. Rather, pain control and PT would be the mainstay of treatment inflight and surgical intervention would be pursued post-flight. Lack of prompt surgical intervention will be reflected in TI. Thus, the RTDC probability was according assigned as 0%. No mortality literature was identified. Therefore, the LOCL probability was assigned as 0%.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS There is a paucity of data specific to neck "sprain/strains." Most literature is regarding non-specific neck pain or whiplash. Two such reviews, Verhagen et al, 2007 (non-specific neck pain) and Hurwitz et al, 2009 (non-specific neck pain and whiplash) inform the duration. They both suggest a duration of 24 - 2190 hours (1 day - 6 months), which was assigned as the duration range for this scenario. The Clinical and Science Team of ExMC pre-determined the RTDC probability for best-case scenarios of this condition to be 0%. However, a literature search corroborated this assumption (Jarzyński et al, 2020). No mortality literature was identified. Therefore the LOCL probability was assigned as 0%.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS There is a paucity of data related to untreated worst-case scenario neck sprains/strains as defined by this CLiFF. There are several grading scales for whiplash, but the literature used to inform previous scenarios defines Grade 4 whiplash as a fracture or dislocation, both of which is outside the scope of this CLiFF definition. "Instability" in the worst-case scenario of this CLiFF is referring to muscular, tendon, and ligamentous instability. While a ruptured ligament or tendon will not repair itself, it would be anticipated that a level of scarring would occur to achieve the point of maximum medical improvement. In their conclusions, Hurwitz et al, 2009 often use 12 months as a clinical cutoff for duration of symptoms and/or care in their systematic review. Therefore, the duration was assigned a range of 96-8760 hours. The RTDC surrogate for this Cliff was initially assigned as need for hospitalization or surgical intervention. Typically, patients present to the hospital due to pain. Pain control could be provided during spaceflight, so this is not a realistic surrogate for RTDC. While a Grade III sprain/strain requiring surgical intervention is possible in spaceflight, it is unlikely that RTDC would be executed for surgical intervention. Rather, pain control and PT would be the mainstay of treatment inflight and surgical intervention would be pursued post-flight. Lack of prompt surgical intervention will be reflected in TI. Thus, the RTDC probability was accordingly assigned as 0%. No mortality literature was identified. Therefore the LOCL probability was assigned as 0%. 9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 6

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Verhagen et al, 2007 Terrestrial 1 Hurwitz et al, 2009 Terrestrial There is a paucity of data related to neck sprains/strains as defined by this CLiFF. Most terrestrial literature either deals with non-specific neck pain, neck injury (typically from high force accidents like motor vehicle accidents), or whiplash (again typically from MVA). This limits the applicability of this data to this CLiFF. The durations are all driven by non-specific neck pain and whiplash data and are likely to be an overestimate of the true duration of a neck sprain/strain as defined by this CLiFF. Note, the durations in this CLiFF are substantially longer than the IMM CLiFF.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Jarzyński et al, 2020 Terrestrial 3 The best-case scenario RTDC probabilities were pre-determined by the Clinical and Science Team of ExMC to be 0%. This was corroborated by Jarzyński et al, 2020. Jarzyński et al, 2020 was used to inform the worst-case scenario RTDC probabilities of 0-0.7%. This was based on a review of 307 cervical spine trauma patients, of which 283 were classified as sprains/strains (note the remaining 24 patients had cervical subluxation or dislocation). The average age of subjects was 34.6 years and 52% were male. Approximately 70% of subjects experienced neck injury due to traffic accidents (whiplash), although other mechanisms of injury were included (e.g. physical activity, fall). Of the all presenting injuries, 7% (24 subjects) required hospitalization and 22 required surgery (including subluxation/dislocations). It is suspected that the majority of these surgical cases were subluxation/dislocations, (implied by a statement in the article that "surgery consisted of dislocation repositioning, decompression of nerve structures if necessary.") This is outside the scope of this CLiFF. Therefore the editor elected to make the maximum probability of RTDC 0.7%. This correlates to the 2 patients that were admitted but did not require surgery in this study. (Jarzyński et al, 2020) This may still be an overestimate of RTDC for this condition. TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

N/A N/A 4 No evidence was identified in literature searches to indicate LOCL from this condition.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview Sprain/strain – neck encompasses sprains or strains of any of the muscles of the neck. Best-case scenario involves Grade I/II sprains/strains and worst-case scenario involves Grade III sprains/strains. CNES: N/A Diagnostic Scope and Resourcing In the best-case and worst-case scenarios, diagnosis is based on history, physical examination (musculoskeletal, neurologic). Musculoskeletal ultrasound may serve as a useful adjunct to rule out other pathologies in the differential diagnosis but was not considered essential to diagnosis.

The utility of musculoskeletal ultrasound would be determined on a case-by-case basis. It was included as a non-necessary capability in the worst- case scenario. This diagnostic framework is consistent with the terrestrial workup for neck sprain/strain with the exception of the inability to perform plain film X-Ray, and thereby using Musculoskeletal Ultrasound as a possible surrogate. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.87 hours CP1 WC (Treated or Untreated: 1.36 hours This CRT includes a scope of practice code of 5 (which correlates to an “Experienced procedure trained generalist attending (ED attending)” and was included for musculoskeletal ultrasound and interpretation. Treatment Scope and Resourcing Terrestrially, neck sprains and strains resolve quickly with a period of relative rest, analgesia, and physical therapy. Exercise modification is also recommended, but not built into the CRT as this does not represent a clinical resource. Pain is variable depending on the patient. NSAIDs (both oral and topical), cold packs, lidocaine patches, and acetaminophen were included in the best- case treatment scenario. Muscle relaxing agents and narcotics were additionally included in the worst-case scenario. Bracing of the neck is not recommended for sprains/strains. Communications and Support Needs While real-time video and audio loop communications are desired for diagnosis and treatment, they were not considered a necessity and therefore were not included in this CRT. REFERENCES 1. Parikh P, Santaguida P, Macdermid J, Gross A, Eshtiaghi A. Comparison of CPG’s for the diagnosis, prognosis and management of non-specific neck pain: a systematic review. BMC Musculoskelet Disord. 2019; 20(1):81 9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 7

### IMM CLIFF RECONCILATION COMMENTS

The incidence provided by the IMM CLiFF is the most up-to-date spaceflight incidence available and will be used in this CLiFF. (A total of 14 in- flight cases from Mercury – ISS Expedition 40). The best and worst-case scenario definitions have changed. The IMM best-case scenario definition was a "mild neck injury that resolves with minimal or no treatment." The current definition is “a Grade I or II sprain/strain in which there is minimal or partial muscle or ligamentous tearing.” The IMM definition for worst-case scenario was defined as "a moderate or severe neck injury that requires more prolonged treatment or is refractory to treatment." The current definition is “Grade III strain/sprain in which there is full thickness muscle or ligamentous tearing, and/or instability.” As a result, the durations in this CLiFF are substantially longer than the IMM CLiFF. The RTDC and LOCL probabilities are similar to the prior CLiFFs EVAC and LOCL probabilities.

### LIMITATIONS SUMMARY

- The incidence for this CLiFF is based on in-flight “neck injury” data. While most of these injuries were likely sprains/strains, this may be an

overestimate of the true incidence. • Incidence, duration, RTDC, and LOCL are difficult to determine in the literature based on the definitions of the best and worst-case scenario presented in this CLiFF. Most of the literature that relates to this CLiFF pertains to non-specific neck pain or whiplash. The Bone and Joint Decade 2000-2010 Task Force on Neck Pain recommends using a 4 point grading scale for non-specific neck pain, as follows: Grade I neck pain has no signs of major pathology and no or little interference with daily activities; Grade II neck pain has no signs of major pathology, but interference with daily activities; Grade III neck pain has neurologic signs of nerve compression; Grade IV neck pain has signs of major pathology (Guzman et al, 2008). Trying to match these definitions to the current definitions, the split between best and worst-case would be somewhere in Grade II (i.e. some Grade II injuries would be best-case and some would be worst-case). Similarly, there are several grading scales for whiplash associated disorder (WAD), which also do not correlate well with the definitions assigned in this CLiFF. It should be noted that for both non-specific neck pain and WAD the grading scales include neurologic signs/involvement and/or fracture/dislocation (i.e. the worst-case for all of these grading scales is worse than the worst-case scenario for a neck sprain/strain according to the definition in this CLiFF). For this reason, the durations are likely over-estimates. These juxtaposed grading scales and definitions make correlating data to the CLiFF challenging. • There is a paucity of data available to inform the best and worst-case probabilities, as defined, for this condition. Therefore, a range was assigned using prior IMM values (BC: 40%, WC 60%) and data regarding the proportion of non-specific neck pain cases that become chronic (10%). The final range assigned was BC: 40-90% and WC: 10-60%. This was felt to be the best approximation possible given the paucity of data. • There is a paucity of data related to neck sprains/strains as defined by this CLiFF. Most terrestrial literature either deals with non-specific neck pain, neck injury (typically from high force accidents like motor vehicle accidents), or whiplash (again typically from MVA). This limits the applicability of this data to this CLiFF. The durations are all driven by non-specific neck pain and whiplash data and are likely to be an overestimate of the true duration of a neck sprain/strain as defined by this CLiFF. • The treated worst-case scenario durations are based on selected (unknown) studies within a Cochrane Review by Verhagen et al, 2007. The literature review effort did not provide primary references, so the Cochrane review will be used as the citation. This is a limitation of this CLiFF. 9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  | Cardio- |  |  |  |  |
| --- | ----------------------- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 664 |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 664 |  |  |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 664 |  | 89 |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  | Translation & |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity Standing (g) |  | Equipment | Ops | Category |  |  |
| --- | ----- | --- | ---------------------- | -------------- | --------- | --------- | -------- | --- | --- |
|  |  |  |  | (microgravity) |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best | 132 | 414 |  |  | 34 | 211 791 | 3763 | 0.210205 | 21.0205 |
| ---- | --- | --- | --- | --- | --- | ------- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 | 414 |  |  | 34 | 211 1455 | 3763 | 0.38666 | 38.666 |
| ---- | --- | --- | --- | --- | --- | -------- | ---- | ------- | ------ |

Case (UTBC) Treated Worst

|  | 132 | 414 |  |  | 34 | 211 1455 | 3763 | 0.38666 | 38.666 |
| --- | --- | --- | --- | --- | --- | -------- | ---- | ------- | ------ |

Case (TWC) Untreated Worst

|  | 132 | 414 |  |  | 34 | 211 1544 | 3763 | 0.410311 | 41.0311 |
| --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |
| --- | ----------------------- | -------------- | --------------- | ------- | --------- | --------- | ----- | --- | --- |
|  |  | Communications | personal Vision | Hearing |  | Dentition | GI GU |  |  |
|  | Simple Complex |  |  |  | pulmonary |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  | 664 |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 664 |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 9

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

| 132 | 414 |  | 34 211 | 1455 3763 | 0.38666 38.666 |
| --- | --- | --- | ------ | --------- | -------------- |

Case (TWC) Untreated Worst

| 132 | 414 |  | 34 211 | 1455 3763 | 0.38666 38.666 |
| --- | --- | --- | ------ | --------- | -------------- |

Case (UTWC) 9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 10

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

CP2: No comment CP3: No comment

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

9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 11

## REFERENCES

Reference

1. Ballard TD. Cervical Spine Disease and Surgical Intervention in the US Air Force Fighter Aviator Population 2001-2006: An Assessment of

- Relative Risk: University of Cincinnati; 2008.

2. Binder A. Neck pain. Clinical Evidence. 2008;08:1103.

3. Guzman J, Haldeman S, Carroll LJ, Carragee EJ, Hurwitz EL, Peloso P, et al. Clinical Practice Implications of the Bone and Joint Decade 2000–

2010 Task Force on Neck Pain and Its Associated Disorders: From Concepts and Findings to Recommendations. Spine. 2008;33:S199-S213.

4. Hurwitz EL, Carragee EJ, van der Velde G, Carroll LJ, Nordin M, Guzman J, et al. Treatment of neck pain: noninvasive interventions: results of

the Bone and Joint Decade 2000–2010 Task Force on Neck Pain and Its Associated Disorders. Journal of manipulative and physiological therapeutics. 2009;32(2):S141-S75.

5. Jarzyński T, Pękala P, Baranowska A. Analysis of neurological symptoms and mechanisms in dislocation, sprains and strains of joints and

ligaments at neck level. Pol Merkur Lekarski. 2020;48(288):410-4. Epub 2021/01/03. PubMed PMID: 33387428.

6. Johnston III SL, Smart KT, Pattarini JM. Medical Evacuation Risk and Crew Transport. In: Barratt MR, Baker ES, Pool SL, editors. Principles of

Clinical Medicine For Space Flight. 2nd ed. New York: Springer; 2020. p. 327-56.

7. NASA. Neck Sprain/Strain Clinical Information Findings Form. Integrated Medical Database of the Human Health and Performance Contract

Integrated Medical Model Project. 2017;v6.5.

8. Quinlan KP, Annest JL, Myers B, Ryan G, Hill H. Neck strains and sprains among motor vehicle occupants-United States, 2000. Accid Anal

Prev. 2004;36(1):21-7. Epub 2003/10/24. doi: 10.1016/s0001-4575(02)00110-0. PubMed PMID: 14572823.

9. Ramachandran V, Dalal S, Scheuring RA, Jones JA. Musculoskeletal injuries in astronauts: review of pre-flight, in-flight, post-flight, and

extravehicular activity injuries. Current Pathobiology Reports. 2018;6(3):149-58.

10. Safiri S, Kolahi A-A, Hoy D, Buchbinder R, Mansournia MA, Bettampadi D, et al. Global, regional, and national burden of neck pain in the

general population, 1990-2017: systematic analysis of the global burden of disease study 2017. BMJ. 2020;368.

11. Scheuring RA, Mathers CH, Jones JA, Wear ML. Musculoskeletal injuries and minor trauma in space: incidence and injury mechanisms in U.S.

astronauts. Aviat Space Environ Med. 2009;80(2):117-24. Epub 2009/02/10. doi: 10.3357/asem.2270.2009. PubMed PMID: 19198198.

12. Thomas TL, Garland FC, Mole D, Cohen BA, Gudewicz TM, Spiro RT, et al. Health of U.S. Navy submarine crew during periods of isolation.

Aviat Space Environ Med. 2003;74(3):260-5. Epub 2003/03/26. PubMed PMID: 12650274.

13. Verhagen AP, Scholten‐Peeters G, van Wijngaarden S, de Bie R, Bierma‐Zeinstra SMA. Conservative treatments for whiplash. Cochrane

Database of Systematic Reviews. 2007(2). doi: 10.1002/14651858.CD003338.pub3. PubMed PMID: CD003338.

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

CP1 Clinical Phase 1 CP2 Clinical Phase 2 9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 12

CP3 Clinical Phase 3

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

### OBGYN Obstetrics and Gynecology

### OR Occurrence Rate

### PA Physician Assistant

### PDQ Pain Disability Questionnaire

### PFCL Proposed Future Conditions List

### PPE Personal Protective Equipment

### PTRS Project Technical Requirements Specification

9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 13

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

9/12/2022 9:46:16 PM ICL103_Sprain/Strain - Neck Cliff page: 14

---

## Source metadata

```yaml
source_filename: "sprain-strain-neck-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Musculoskeletal Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1yhmz6ZtkysQo_fP1C3BSGd9G1KAn8PCa/view"
source_drive_id: "1yhmz6ZtkysQo_fP1C3BSGd9G1KAn8PCa"
source_sha256: 5158e62b9acd9921e731842a80a6487a7c1f7395ffe23c22a2993a1e82a00190
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
