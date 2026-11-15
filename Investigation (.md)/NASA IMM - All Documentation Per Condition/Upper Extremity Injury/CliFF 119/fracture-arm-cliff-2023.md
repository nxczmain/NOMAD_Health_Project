# Fracture Arm CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1SiDn58gvFodXblAhUrGJr-vZ3yTDHGdk/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Upper Extremity Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Best Case](#best-case)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL51_Fracture - Arm Arm fractures refer to any fracture of the humerus, or radius/ulna excluding the distal portion of the radius/ulna. Distal radius/ulnar fractures are covered by ICL56 - Wrist Fracture. There have been no reports of arm fractures during spaceflight.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

There are no published reports of arm fracture (or any fracture) in spaceflight.

### ANALOG LITERATURE

Brewster (2008) is a military injury prevention report that provides thorough data on fractures, categorized by location, for all active duty military members over the year 2006. Brewster reports the incidence of "shoulder/upper arm fractures" and "forearm/elbow fractures" to be 263 per 100,000 person-years and 362 per 100,000 person-years, respectively. The incidence values provided are markedly higher than terrestrial counterparts. This is suspected to be secondary to occupational demands of the military or secondary to suspected inclusion of clavicular and scapular fractures in the "shoulder/upper arm fractures" category. Claassen et al. (2014) is a military medical report spanning January 1, 2003 - December 31, 2012. It breaks incidence down by active duty military (not deployed), deployed military, and recruit trainees (basic training). It includes the Army, Navy, Air Force, Marine Corps, and Coast Guard. It reports an incidence of humeral fractures of 30 per 100,000 person years and an incidence of combined radius/ulnar fractures of 150 per 100,000 person years. These incidence values are more in-line with terrestrial counterparts, but distal radius and ulna fractures (the most common fracture types) are included in this data. Distal radius and ulna fractures are accounted for in the incidence distribution for ICL 56 - Fracture - Wrist and should therefore be excluded from this condition.

### TERRESTRIAL LITERATURE

Karl et al (2015) was used to inform the incidence distribution for this CLiFF. It is a retrospective epidemiologic study utilizing the Healthcare Cost and Utilization Project (HCUP) data collected from the State Inpatient Database (SID) and the State Emergency Department Database (SEDD) across 8 representative U.S. states (Arizona, California, Iowa, Maryland, Massachusetts, New Jersey, and Vermont) for the year 2009. The total population served by EDs sampled was 87,232,454. All ages were included in the study. The incidence provided from this study appropriately excludes distal radius/ulnar fractures (ICD9 codes were provided with enough granularity to exclude these fractures). The incidence of distal radius/ulnar fractures is accounted for in ICL56 - Fracture - Wrist. Ekholm et al (2006) is a large population-based epidemiology study of humeral fractures in Stockholm from 1998 to 1999. It reports an incidence of humeral fractures of 14.3 per 100,000 person-years. Unfortunately, this study is limited only to humeral shaft fractures. Court-Brown and Caesar (2016) is a retrospective epidemiologic study of fractures in Edinburgh, Scotland in the year 2000. It is unclear whether "forearm fractures" included distal radius and ulnar fractures (the most common fracture type). Distal radius and ulna fractures are covered by a separate condition, ICL56 - Wrist Fracture and thus should be excluded from this condition.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

- Incidence Proportion: Mean: 1.354E-6 SD: 3.304E-9 Incidence Rate: Mean: 1.978E-3 SD: SD 4.825E-6

6/15/2023 1:53:21 PM ICL51_Fracture - Arm Cliff page: 1

### INCIDENCE SUMMARY

As in other fracture related CLIFFs, the incidence of arm fractures in microgravity is considered to be negligible. Incidence is computed on the basis of the probability of one person having an arm fracture during one surface EVA in a partial gravity field. Karl et al (2015) was used to inform the incidence distribution for this CLiFF. It is a retrospective epidemiologic study utilizing the Healthcare Cost and Utilization Project (HCUP) data collected from the State Inpatient Database (SID) and the State Emergency Department Database (SEDD) across 8 representative U.S. states (Arizona, California, Iowa, Maryland, Massachusetts, New Jersey, and Vermont) for the year 2009. The total population served by EDs sampled was 87,232,454. All ages were included in the study. There were 590,193 fractures with an incidence of 67.7 per 10kpy. This indicates 87,177,695.72 person-years. These person-years with the site-specific incidence rates (proximal humerus, distal humerus, proximal forearm, forearm, and humeral shaft fractures) were used to estimate the events. Notably, distal radius and ulnar fractures were not included in this distribution because they are covered by a separate condition: ICL56 - Fracture - Wrist. Total events 172,438. IR: 1.978E-3 (95%CI: 1.969E-3, 1.987E-3). Incidence distributions were specified for surface-ops EVAs. The posterior distribution for the incidence proportion representing the probability of an event over a 6-hour EVA is Beta(shape1=167941, shape2=1.24E11) with mean 1.354E-6 and SD 3.304E-9.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

EVA Segment

### EVA Surface

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Beta Mean 1.35436E-06 SD 3.30488E-09 Beta (Alpha): 167941 (Beta): 1.24E+11 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Brewster, 2008 Analog 1 Claassen et al, 2014 Analog 2 Court-Brown and Caesar, 2006 Terrestrial 2 Ekholm et al, 2006 Terrestrial 1 Karl et al, 2015 Terrestrial 3 Brewster (2008) is a military injury prevention report that provides thorough data on fractures, categorized by location, for all active duty military members over the year 2006. The incidence values provided are markedly higher than terrestrial counterparts. This is suspected to be secondary to occupational demands of the military. Claassen (2014) is a military medical report that provides the incidence of fractures for the humerus and radius/ulna. Incidence values are more in-line with terrestrial counterparts, but distal radius and ulna fractures are included in this data. Distal radius and ulna fractures are accounted for in the incidence distribution for ICL 56 - Fracture - Wrist and should therefore be excluded from this condition. Court-Brown and Caesar (2016) is a retrospective epidemiologic study of fractures in Edinburgh, Scotland in the year 2000. It is unclear whether "forearm fractures" included distal radius and ulnar fractures. Ekholm et al (2006) is a large population-based epidemiology study specific to humeral shaft fractures. Karl et al (2015) is a retrospective epidemiologic study utilizing the Healthcare Cost and Utilization Project (HCUP) databases across 8 US states. The incidence provided from this study appropriately excludes distal radius/ulnar fractures (ICD9 codes were provided with enough granularity to exclude these fractures) since they are accounted for in ICL56 - Fracture - Wrist. 6/15/2023 1:53:21 PM ICL51_Fracture - Arm Cliff page: 2

| 6/15/2023 1:53:21 PM | ICL51_Fracture - Arm Cliff | page: 3 |
| -------------------- | -------------------------- | ------- |
### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Pre-flight requirements include training on exercise devices to prepare for in-flight use. In-flight, on the International Space Station (and previously on Mir), crewmembers are required to exercise for 2.5 hours per day (1 hour of aerobic conditioning and 1.5 hours or resistive exercise) (NASA, MedB 5.2). All crewmembers undergo DXA scanning pre- and post-flight. Pre-flight at L-21/18 month; and L-180/30 day (As close to launch as possible). Post-flight at R+5/30, then as clinically indicated to assess BMD recovery. (NASA, MedB1.11)

### BEST CASE SCENARIO DEFINITION

A closed, non-comminuted, non-segmented, non-displaced, or minimally displaced fracture resulting in no neurovascular compromise to the affected limb.

### WORSE CASE SCENARIO DEFINITION

- A fracture that is: open, comminuted, segmented, moderately to severely displaced, intra-articular, or results in neurovascular compromise to the

affected limb, likely requiring surgical intervention.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Fracture - Humerus Fracture- Elbow (radial head / supracondylar / olecranon fracture) Fracture - Radius (excluding radial head) Fracture - Ulna (excluding olecranon)

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Ekholm et al, 2006 categorizes fractures based on the Orthopedic Trauma Association (OTA) classification system where type A is a simple fracture, B is a wedge fracture, and C is a multifragmentary fracture. Simple fractures (Type A) match the best-case scenario definition. A wedge fracture (Type B) may fall into the best or the worst-case scenario description of fracture for this CLiFF depending on whether it is displaced or comminuted. A multifragmentary fracture (Type C) meets the definition of the worst-case scenario. In this study 29.6% were wedge (Type B) fractures and 9.4% were multifragmentary (Type C). Given that wedge fractures (Type B) could be either best or worst-case scenario fractures, the worst-case scenario was assigned a probability of 9.4-39% to account for this uncertainty. The best-case scenario was likewise assigned a probability of 61-90.6%. TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Ekholm et al, 2006 Terrestrial 3 Ekholm et al, 2006 categorizes fractures based on the Orthopedic Trauma Association (OTA) classification system where type A is a simple fracture, B is a wedge fracture, and C is a multifragmentary fracture. Simple fractures (Type A) match the best-case scenario definition. A wedge fracture (Type B) may fall into the best or the worst-case scenario description of fracture for this CLiFF depending on whether it is displaced or comminuted. A multifragmentary fracture (Type C) meets the definition of the worst-case scenario. In this study 29.6% were wedge (Type B) fractures and 9.4% were multifracmentary (Type C). 6/15/2023 1:53:21 PM ICL51_Fracture - Arm Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### Condition TI% Duration TI% Duration TI% RTDC LOCL

### Case Probability

Scenario Composite Incidence % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Incidence Proportion: 61 - 90.6 100 1.22 5.50093 840 3192 0 0 5.5 0 0

- Best Case Mean: 1.354E-6 SD:

(TBC) 3.304E-9 Incidence

- Rate: Mean: 1.978E-3

- Treated SD: SD 4.825E-6 9.4 - 39 100 2.06 10.5102 1344 8760 0 5.8 20.7 0 0

## Worst Case

(TWC) Untreated N/A N/A N/A 1.22 21.1932 840 3192 17.5126 0 15.2 0 0

## Best Case

(UTBC) Untreated N/A N/A N/A 2.06 31.7699 1344 8760 21.0205 19 29.3 0 50

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 1:53:21 PM ICL51_Fracture - Arm Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

For all scenarios, the duration, RTDC probability, and LOCL probability are informed only by humeral fractures (radial and ulnar fracture data were not included for unclear reasons). The RTDC surrogates for this condition were need for surgery and/or permanent disability. See specific comments for each scenario below. TREATED BEST CASE (TBC) SCENARIO COMMENTS The duration was assigned a range of 840 hours (5 weeks) to 3192 hours (19 weeks) based on data regarding proximal, shaft, and diaphyseal humeral fractures (Updegrove et al, 2018; Sarmiento et al, 2000; Wendt et al, 2020). The RTDC surrogates chosen for this condition were surgical intervention and/or permanent disability. Best-case scenarios would warrant surgical intervention in the setting of non-union, thus the RTDC probability for this scenario was assigned a range of 0-5.5% based on data regarding non-union of humeral shaft fractures (Sarmiento et al, 2000; Papasoulis et al, 2010). Several epidemiologic studies accounting for both best and worst-case scenario humeral shaft or diaphyseal fractures, accounting for at least a cumulative 7.8 million person-years, were used to inform the LOCL probability for this scenario (Ekholm et al, 2006; Tsai et al, 2009; Sarmiento et al, 2000). No mortality was reported in these studies. Therefore, the LOCL probability was assigned 0%.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The duration for this scenario was assigned a range of 1344 hours (8 weeks) to 8760 hours (12 months). This wide range is secondary to the data informing these values. The minimum duration was driven by minimum healing time for treated open and segmented fractures of the humeral diaphysis (Sarmiento et al, 2000). The maximum duration was driven by recovery time for the complication of radial nerve palsy associated with humeral shaft fractures (Shao et al, 2005). The RTDC probability for this scenario was assigned a range of 5.8-20.7%. The minimum probability was informed by Sarmiento et al, 2000 in which 5.8% of initially non-surgically treated (functional bracing) humeral shaft fractures developed non- union during healing and required surgical intervention. The maximum duration is informed by Papasoulis, et al 2010. 20.7% of participants in this study did not achieve full range of motion after functional bracing of humeral shaft fractures. (Lack of full range of motion is being interpreted as a permanent disability, an RTDC surrogate for this condition). A third study provided an intermediate value of 11.9% RTDC probability secondary to the complication of permanent radial nerve palsy (Shao et al, 2005). Several epidemiologic studies accounting for both best and worst-case scenario humeral shaft or diaphyseal fractures, accounting for at least a cumulative 7.8 million person-years, were used to inform the LOCL probability for this scenario (Ekholm et al, 2006; Tsai et al, 2009; Sarmiento et al, 2000). No mortality was reported in these studies. Therefore, the LOCL probability was assigned 0%. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS For all untreated searches, fractures treated with a hanging arm cast, sling, or cuff and collar in the included articles were considered "untreated," as these methods of immobilization could be easily improvised with onboard materials, as compared to a functional brace, plaster splint, or surgical procedure. Pidhorz, 2015 reports an average union time of 7.5 weeks with a hanging arm cast, but no range was provided. Spak , 1978 reports 3-6 weeks of healing time with a collar and hand sling. Both of these "untreated" time frames fall within the duration range listed in the best-case treated scenario. Since the full range is unclear based on these articles, the best-case treated values were repeated and the duration was assigned as 840 hours (5 weeks) to 3192 hours (19 weeks). Regarding RTDC probability, the surrogates used in the literature search were non-union leading to surgery (since a best-case arm fracture by definition would not require surgery on presentation) or permanent disability. The RTDC probability was assigned 0-15.2%. The minimum probability was informed by Spak, 1978 in which 59 cases of humeral shaft fractures, over 14 years, were treated with a collar and hand sling. No patients required surgical treatment or had significant permanent disability. The maximum probability is informed by Dallek et al, 1982. Between 1975 and 1979 79 humeral fractures were treated with hanging cast. 12 patients (15.2%) required surgery for delayed union following failed initial conservative management for eight weeks. Several epidemiologic studies accounting for both best and worst-case scenario humeral shaft or diaphyseal fractures, accounting for at least a cumulative 7.8 million person-years, were used to inform the LOCL probability for this scenario (Ekholm et al, 2006; Tsai et al, 2009; Sarmiento et al, 2000). Note that these studies provide treatment. No mortality was reported in these studies. Therefore, the LOCL probability was assigned 0%.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS There is a paucity of data regarding untreated worst-case arm fractures. Therefore, the treated worst-case scenario durations were repeated for this scenario. Notably, the maximum duration is informed by spontaneous time to resolution of radial nerve palsy related to humeral fracture (Shao et al, 2005). For RTDC searches, it was felt that non-union requiring surgery was a reasonable surrogate for lack of treatment in patients with the following treatment types (a) expectant management, (b) conservative treatment when surgery was warranted, or (c) delayed treatment. The minimum probability is informed by Desloges et al, 2015 studied distal humerus fractures in the elderly (average age 77) treated with conservative management (when surgery would have been warranted in a younger, healthier patient). They report a 19% radiographic malunion rate. The maximum duration is informed by Shao et al, 2005 who reported 29.3% of radial nerve palsies from humeral shaft fractures treated with watchful waiting failed to resolve spontaneously. Therefore, the RTDC probability was assigned 19-29.3%. There is a paucity of data regarding mortality rates in worst-case untreated arm fractures. Dhar et al, 2008 reported no mortality in 51 fractures with delayed treatment (more than 24 hours after the injury), but this is not true lack of treatment. Looking to other fracture CLiFFs for guidance, untreated worst-case lower extremity fractures 6/15/2023 1:53:21 PM ICL51_Fracture - Arm Cliff page: 6

(femur and distal leg) have a maximum probability of 100%. Whereas wrist fracture has a maximum probability of 0%. Based on SME from the editor, it is felt that 100% probability of LOCL is an overestimate, but the risk exists. Therefore, the maximum probability was assigned 50% and the minimum probability was assigned 0% to account for this uncertainty, but in an effort to avoid overestimation of LOCL probability.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------------- | ----------- | --------- | --- |
| Sarmiento et al, 2000 | Terrestrial |  |  |
| Updegrove et al, 2018 | Terrestrial |  |  |
| Wendt et al, 2020 | Terrestrial |  |  |

2

| Pidhorz, 2015 | Terrestrial |  |  |
| ---------------- | ----------- | --- | --- |
| Shao et al, 2005 | Terrestrial |  |  |
| Spak, 1978 | Terrestrial |  |  |

The data used to inform the durations of arm fracture are limited to humeral fractures only (radial and ulnar fractures were not included). Most of these studies included patients of all ages. Proximal humeral fracture studies are skewed to the elderly.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ---------------------- | ----------- | --------- | --- |
| Papasoulis et al, 2010 | Terrestrial |  |  |
| Sarmiento et al, 2000 | Terrestrial |  |  |
| Shao et al, 2005 | Terrestrial |  |  |

2

| Dallek et al, 1982 | Terrestrial |  |  |
| -------------------- | ----------- | --- | --- |
| Spak, 1978 | Terrestrial |  |  |
| Desloges et al, 2015 | Terrestrial |  |  |

The data used to inform the RTDC probabilities for arm fracture are limited to humeral fractures only (radial and ulnar fractures were not included).

Most of these studies included patients of all ages and health statuses.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------------- | ----------- | --------- | --- |
| Ekholm et al, 2006 | Terrestrial |  |  |
| Sarmiento et al, 2000 | Terrestrial |  |  |

2

| Tsai et al, 2009 | Terrestrial |  |  |
| ---------------- | ----------- | --- | --- |
| Dhar et al, 2008 | Terrestrial |  |  |

The data informing all scenarios except the worst-case untreated scenario were from several epidemiologic studies accounting for both best and worst-case scenario limited to humeral shaft or diaphyseal fractures, accounting for at least a cumulative 7.8 million person-years (Ekholm et al, 2006; Tsai et al, 2009; Sarmiento et al, 2000). Notably these studies were regarding treated patients. There is a paucity of data regarding worst- case untreated arm fractures, such that the LOCL probability was assigned based on ExMC editor subject matter expertise.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

| 6/15/2023 1:53:21 PM | ICL51_Fracture - Arm Cliff |  | page: 7 |
| -------------------- | -------------------------- | --- | ------- |
Capabilities and Resourcing Scope Overview Arm fracture refers to a fracture of the radius, ulna, or humerus. Note, distal radius and ulnar fractures were included in ICL 56 – Fracture - Wrist. The best-case scenario represents uncomplicated fractures and the worst-case scenario represents complicated fractures. Any fracture, if left untreated, could result in further complications such as malunion, loss-of function, and/or chronic pain. A worst-case scenario, left untreated, could result in additional significant complications such as neurovascular compromise. CNES: Fracture – Humerus; Fracture- Elbow (radial head / supracondylar / olecranon fracture), Fracture - Radius (excluding radial head); Fracture - Ulna (excluding olecranon). Diagnostic Scope and Resourcing: In the best-case scenario, diagnosis is based on history, physical examination (musculoskeletal and neurologic), and imaging. Plain film (X-Ray), CT, and MRI will be unavailable inflight. Musculoskeletal ultrasound was included in the CRT as it may serve as a useful adjunct in diagnosis for some cases, but it was not considered a necessary capability to diagnose arm fracture. In the worst-case scenario, diagnosis is based on history, physical examination (musculoskeletal, neurologic, and vital signs), and imaging.

In some cases, musculoskeletal ultrasound may be contraindicated due to risk of contamination of an open fracture, or further displacement of the fracture(s). The utility of musculoskeletal ultrasound would be determined on a case-by-case basis. It was included as a non-necessary capability.

This diagnostic framework is consistent with the terrestrial workup for arm fracture with the exception of the inability to perform plain film X-Ray (and if warranted CT or MRI), and thereby using Musculoskeletal Ultrasound as a possible surrogate. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. This CRT includes a scope of practice code of 5 (which correlates to an “Experienced procedure trained generalist attending (ED attending).” The CRT working group SME consensus Clinical Phase 1 duration: Best Case CP1: 1.22 hours Worst Case CP1: 2.06 hours Treatment Scope and Resourcing: Most best-case arm fractures in terrestrial populations resolve without reduction, with an initial period of splinting, followed by 4-6 weeks of casting. Splinting was considered a necessity, whereas casting was included as a capability but not considered a necessity in this CRT. Although 3D printing offers potential for splinting of musculoskeletal injuries, it remains a largely experimental process and it is not within the scope of this CRT. Physical therapy is recommended post-immobilization. Exercise modification is also recommended, but not built into the CRT as this does not represent a clinical resource. Pain is variable depending on the patient. NSAIDs and Acetaminophen were included in the best-case treatment scenario. Terrestrially, all worst-case fractures warrant surgical intervention. Thus, a worst-case arm fracture in-flight would present a significant treatment challenge.

These fractures would warrant an attempted reduction to achieve more physiologic alignment. Note that nerve blocks for fracture reduction are not included in the scope for IMPACT 1.0 but could be considered in the future. Procedural sedation was included in the scope for difficult reductions.

Open fractures inflight would be treated with copious irrigation, wound closure, prophylactic antibiotics and splinting with possible casting after wound healing. Again, both splinting and casting were included as capabilities, but only splinting was considered a necessary capability in this CRT.

Both plaster and fiberglass (and their associated means of removal) are included for trade-space analysis. Pain from a worst-case fracture may require narcotic analgesia. Physical therapy would be advised until the end of the mission. Exercise modification is also recommended, but not built into the CRT as this does not represent a clinical resource. Ertapenem and Ceftriaxone are provided for antibiotic prophylaxis for open fractures.

Although ertapenem is not traditionally used terrestrially, it was selected due to its broad spectrum, daily dosing, and ability to be dosed IM – decreasing mass/volume requirements associated with IV medications. Communications and Support Needs: While real-time video and audio loop communications are desired for diagnosis and treatment, they were not considered a necessity, particularly in the best-case scenario. For the WC, consultation with ground specialists to facilitate treatment and healing was considered necessary given the limited diagnostic and treatment capabilities in-flight. REFERENCES 1. American Academy of Orthopaedic Surgeons. Management of Distal Radius Fractures: Evidence-Based Clinical Practice Guideline. 2020. Retrieved from https://www.aaos.org/globalassets/quality-and-practice-resources/distal-radius/drfcpg.pdf 2. Black WS, Becker JA. Common Forearm Fractures in Adults. AFP 2009; 80:1096–102. 3. Boyd AS, Benjamin HJ, Asplund CA. Splints and Casts: Indications and Methods. AFP 2009; 80:491–9. 4. Acute Shoulder Injuries in Adults - American Family Physician. Retrieved 27 January 2021 from https://www.aafp.org/afp/2016/0715/p119.html 5. Clinical Practice Guidelines : Supracondylar fracture of the humerus - Emergency Department.

Retrieved 27 January 2021 from https://www.rch.org.au/clinicalguide/guideline_index/fractures/Supracondylar_fracture_of_the_humerus_Emergency_Department/ 6. Open- fractures_ADULT.pdf. Retrieved 23 January 2021 from http://www.med.umich.edu/asp/pdf/adult_guidelines/Open-fractures_ADULT.pdf

### IMM CLIFF RECONCILATION COMMENTS

The only upper extremity fracture included in the IMM was wrist fracture. ICL 56 – Fracture – Wrist relates most closely to that condition. This condition (Fracture – Arm) is a unique condition to IMPACT 1.0. Therefore, the incidence, durations, RTDC, and LOCL are unique.

### LIMITATIONS SUMMARY

- Incidence is informed by Karl et al, 2015 which includes fractures from all ages of patients and could therefore be an overestimate. • Studies

informing the duration, RTDC, and LOCL for all scenarios are limited to humeral fractures. No data for radial or ulnar fractures were included by the student effort. These data may have differed and should have been included. • There is a paucity of data available to inform LOCL probability for the untreated worst-case scenario. Ultimately, the LOCL probability range was assigned based on subject matter expertise of the CLiFF editor. 6/15/2023 1:53:21 PM ICL51_Fracture - Arm Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  | 145 |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  |  |  |  |  |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  | 664 |  |  |  |  | 145 |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  |  |  | Translation & |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  |  | Extremity | Standing (g) |  | Equipment | Ops | Category |  |  |
| --- | ----- | --- | --- | --------- | ------------ | -------------- | --------- | --------- | -------- | --- | --- |
|  |  |  |  |  |  | (microgravity) |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  |  | 414 |  |  |  |  | 414 | 3763 | 0.110019 | 11.0019 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 |  | 414 |  |  |  | 34 | 211 936 | 3763 | 0.248738 | 24.8738 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ------- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  | 414 |  |  |  | 34 | 211 791 | 3763 | 0.210205 | 21.0205 |
| --- | --- | --- | --- | --- | --- | --- | --- | ------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  | 414 |  |  |  | 34 | 211 1600 | 3763 | 0.425193 | 42.5193 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  | Inter- |  |  | Cardio- |  |  |  |  |
| --- | ----------- | ----------- | -------------- | -------- | ------ | ------- | --------- | --------- | ----- | --- | --- |
|  |  |  | Communications | personal | Vision | Hearing |  | Dentition | GI GU |  |  |
|  | Simple | Complex |  |  |  |  | pulmonary |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| -------------------- | --- | --- | --- | -------------------------- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |
| 6/15/2023 1:53:21 PM |  |  |  |  | ICL51_Fracture - Arm Cliff |  |  |  |  |  | page: 9 |
Total Human

|  |  |  | Translation & |  | Total Tasks |  |
| --- | --- | --- | ------------- | --- | ----------- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity Standing (g) | Equipment Ops | Category |  |
| --- | ----- | --- | ---------------------- | ------------- | -------------------- | --- |
|  |  |  | (microgravity) |  | Condition Tasks Full |  |

Mission Treated Best

|  |  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  | 414 |  | 34 211 | 659 3763 | 0.175126 17.5126 |
| --- | --- | --- | --- | ------ | -------- | ---------------- |

Case (UTBC) Treated Worst

|  |  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

|  | 132 | 414 |  | 34 211 | 791 3763 | 0.210205 21.0205 |
| --- | --- | --- | --- | ------ | -------- | ---------------- |

Case (UTWC)

| 6/15/2023 1:53:21 PM |  |  | ICL51_Fracture - Arm Cliff |  |  | page: 10 |
| -------------------- | --- | --- | -------------------------- | --- | --- | -------- |
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

6/15/2023 1:53:21 PM ICL51_Fracture - Arm Cliff page: 11

## REFERENCES

Reference

1. Brewster SJ. Preventing Injuries in the U.S. Military: The Process, Priorities, and Epidemiologic Evidence. 2008.

2. Claassen J. MEDICAL SURVEILLANCE MONTHLY REPORT. 2014.

3. Court-Brown CM, Caesar B. Epidemiology of adult fractures: A review. Injury. 2006;37(8):691-7. Epub 2006/07/04. doi:

10.1016/j.injury.2006.04.130. PubMed PMID: 16814787.

4. Dallek M, Mommsen U, Schöntag H, Jungbluth KH. [Results of conservatively treated upper arm fractures in adults (author's transl)].

Langenbecks Arch Chir. 1982;357(2):117-23. Epub 1982/01/01. doi: 10.1007/bf01237457. PubMed PMID: 7109793.

5. Desloges W, Faber KJ, King GJ, Athwal GS. Functional outcomes of distal humeral fractures managed nonoperatively in medically unwell and

lower-demand elderly patients. Journal of shoulder and elbow surgery. 2015;24(8):1187-96.

6. Dhar SA, Bhat MI, Mustafa A, Mir MR, Butt MF, Halwai MA, et al. 'Damage control orthopaedics' in patients with delayed referral to a tertiary

care center: experience from a place where Composite Trauma Centers do not exist. J Trauma Manag Outcomes. 2008;2:2. Epub 2008/02/15. doi: 10.1186/1752-2897-2-2. PubMed PMID: 18271951; PubMed Central PMCID: PMCPMC2253507.

7. Ekholm R, Adami J, Tidermark J, Hansson K, Törnkvist H, Ponzer S. Fractures of the shaft of the humerus. An epidemiological study of 401

fractures. J Bone Joint Surg Br. 2006;88(11):1469-73. Epub 2006/11/01. doi: 10.1302/0301-620x.88b11.17634. PubMed PMID: 17075092.

8. Karl JW, Olson PR, Rosenwasser MP. The Epidemiology of Upper Extremity Fractures in the United States, 2009. J Orthop Trauma.

2015;29(8):e242-4. Epub 2015/02/26. doi: 10.1097/bot.0000000000000312. PubMed PMID: 25714441.

9. NASA. MEDB1.11 Bone Densitometry. JSC28913. 2012. Available from:

https://lsda.jsc.nasa.gov/lsda_data/document/Project/MRID/MEDB_1.11_BoneFinal-2012_Project_02_26_2015_11_57_24.pdf.

10. NASA. MEDB5.2 On-Orbit Strength & Conditioning. JSC28913. 2013 [cited 2021 5/4]. Available from:

https://lsda.jsc.nasa.gov/lsda_data/document/Project/MRID/MEDB_5_2_MR082L_1.28.2014_Project_02_26_2015_12_06_08.pdf.

11. Papasoulis E, Drosos GI, Ververidis AN, Verettas DA. Functional bracing of humeral shaft fractures. A review of clinical studies. Injury.

2010;41(7):e21-7. Epub 2009/06/16. doi: 10.1016/j.injury.2009.05.004. PubMed PMID: 19523625.

12. Pidhorz L. Acute and chronic humeral shaft fractures in adults. Orthop Traumatol Surg Res. 2015;101(1 Suppl):S41-9. Epub 2015/01/22. doi:

10.1016/j.otsr.2014.07.034. PubMed PMID: 25604002.

13. Sarmiento A, Zagorski JB, Zych GA, Latta LL, Capps CA. Functional bracing for the treatment of fractures of the humeral diaphysis. J Bone

Joint Surg Am. 2000;82(4):478-86. Epub 2000/04/13. doi: 10.2106/00004623-200004000-00003. PubMed PMID: 10761938.

14. Shao YC, Harwood P, Grotz MR, Limb D, Giannoudis PV. Radial nerve palsy associated with fractures of the shaft of the humerus: a

systematic review. J Bone Joint Surg Br. 2005;87(12):1647-52. Epub 2005/12/06. doi: 10.1302/0301-620x.87b12.16132. PubMed PMID: 16326879.

15. Spak I. Humeral shaft fractures. Treatment with a simple hand sling. Acta Orthop Scand. 1978;49(3):234-9. Epub 1978/06/01. doi:

10.3109/17453677809005757. PubMed PMID: 685667.

16. Tsai CH, Fong YC, Chen YH, Hsu CJ, Chang CH, Hsu HC. The epidemiology of traumatic humeral shaft fractures in Taiwan. Int Orthop.

2009;33(2):463-7. Epub 2008/04/17. doi: 10.1007/s00264-008-0537-8. PubMed PMID: 18414861; PubMed Central PMCID: PMCPMC2899047.

17. Updegrove GF, Mourad W, Abboud JA. Humeral shaft fractures. J Shoulder Elbow Surg. 2018;27(4):e87-e97. Epub 2018/01/03. doi:

10.1016/j.jse.2017.10.028. PubMed PMID: 29292035.

18. Wendt KW, Jaeger M, Verbruggen J, Nijs S, Oestern HJ, Kdolsky R, et al. ESTES recommendations on proximal humerus fractures in the

elderly. Eur J Trauma Emerg Surg. 2020. Epub 2020/08/09. doi: 10.1007/s00068-020-01437-7. PubMed PMID: 32767081.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

6/15/2023 1:53:21 PM ICL51_Fracture - Arm Cliff page: 12

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

### NASA National Aeronautics and Space Administration

### N/A Not Applicable

6/15/2023 1:53:21 PM ICL51_Fracture - Arm Cliff page: 13

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

6/15/2023 1:53:21 PM ICL51_Fracture - Arm Cliff page: 14

---

## Source metadata

```yaml
source_filename: "fracture-arm-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Upper Extremity Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1SiDn58gvFodXblAhUrGJr-vZ3yTDHGdk/view"
source_drive_id: "1SiDn58gvFodXblAhUrGJr-vZ3yTDHGdk"
source_sha256: 24e0e15e70d5011dcf80882cfa0cd5bef03d1b9834def9a5532d17db7b5c5b92
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
