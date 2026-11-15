---
source_filename: "prostatitis-acute-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Urogenital Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1HkhKrUib79-VH9yChPocvrGlOKYOWsrF/view"
source_drive_id: "1HkhKrUib79-VH9yChPocvrGlOKYOWsrF"
source_sha256: 08b0e42936999586e7ac473f02a0f3ae39ca58eb78c02b6625674a0b04525228
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
---

# prostatitis-acute-cliff-2023

[Original PDF](https://drive.google.com/file/d/1HkhKrUib79-VH9yChPocvrGlOKYOWsrF/view)

> Automatically extracted text. Check the original PDF for figures, scanned pages, tables, and equations.

Clinical Finding Form (CliFF)
Branch Baseline
ICL77_Prostatitis, Acute
The incidence for this CliFF uses the same study as the IMM LD68 CliFF Acute Prostatitis. Best case/ worst case percentages, CP2 durations, and
RTDC are based on different studies. No events have occurred among U.S. astronauts in spaceflight. 1 anecdotal event during spaceflight (Russian
event). Therefore, terrestrial studies are used.
INCIDENCE DATA INCLUDED IN THE MODEL
The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption
status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the
type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset
occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.
Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk
(proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical
history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions
are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of
occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are
included in the MEDPRAT Technical Description Document.
INCIDENCE DATA
SPACEFLIGHT LITERATURE
No events have occurred among U.S. astronauts in spaceflight. 1 event/nonfatal significant medical events during spaceflight 1961-2013 (Russian
event).
ANALOG LITERATURE
1% incidence of medical evacuation events from McMurdo Station, Antarctica, 1992-1996 (total 71).
TERRESTRIAL LITERATURE
4.9 events/1,000 person-years. Clemens, J Quentin et al. “Incidence and clinical characteristics of National Institutes of Health type III prostatitis in
the community.” The Journal of urology vol. 174,6 (2005): 2319-22. doi:10.1097/01.ju.0000182152.28519.e7. (Clemens, 2005). LOC = 3.
OVERALL INCIDENCE SUMMARY
INCIDENCE
mean 4.895E-3 and SD 1.653E-4
INCIDENCE SUMMARY
The Bayesian posterior distribution for the incidence rate given the terrestrial data (891 cases of newly diagnosed prostatitis over 181,949 person-
years – IR: 4.9E-4) under an uninformative prior is Gamma(shape=876.92, rate=179145.9) with mean 4.895E-3 and SD 1.653E-4. Evidence:
Clemens 2005 – Incidence and Clinical Characteristics of National Institutes of Health Type III Prostatitis in the Community. 1223 events over
181,949 person-years. After chart review of a subset, the overall rate of newly diagnosed prostatitis was estimated as 4.9 per 1kpy. This translates
to about 891 events. 891 events over 181,949 person-years. IR: 6.722E-3 (95%CI: 4.583E-3, 5.227E-3)
TABLE 1. INCIDENCE MODEL
Incidence Details
Incidence Type
General
6/2/2023 4:06:26 PM ICL77_Prostatitis, Acute Cliff page: 1

Segment
All
Env. Exposure
NA
Sex
Male
Crowns
Any
Contacts
Any
Pregnancy
Any
Incidence Distribution
Occurrence Dist
Poisson
Incidence Dist.
Gamma
Mean
0.004895
SD
0.0001653
Gamma
(Shape): 876.92
(Rate): 179146
TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
Clemens et al., 2005 Terrestrial 3
Terrestrial general population study. LOC = 3 (somewhat confident).
6/2/2023 4:06:26 PM ICL77_Prostatitis, Acute Cliff page: 2

CREWMEMBER SELECTION/PREVENTION
DISQUALIFYING CONDITIONS
Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4
(2016).
PREFLIGHT PREVENTATIVE MEASURES
There are no specific preflight prevent measures for acute prostatitis.
BEST CASE SCENARIO DEFINITION
Prostatitis that responds to treatment with analgesics and antibiotics.
WORSE CASE SCENARIO DEFINITION
Prostatitis that requires more than one course of antibiotics or develops an abscess.
CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)
Prostatic Abscess.
BEST CASE/WORST CASE PROBABILITY COMMENTS
Best case/worst case percentage = 76%/24%. Based on 24% of cases with bacterial failure at follow-up. (Etienne, 2008). LOC = 3.
TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
Etienne et al., 2008 Terrestrial study. 3
Based on 24% of cases with bacterial failure at follow-up.
6/2/2023 4:06:26 PM ICL77_Prostatitis, Acute Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE
CP1: Diagnosis CP2: Treatment CP3: Condition End State
TI% Duration TI% Duration TI% RTDC LOCL
Composite Condition
Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%
Treated Best mean 4.895E-3 76 - 76 100 1.56 4.63726 240 336 0 0 0 0 0
Case (TBC) and SD 1.653E-4
Treated Worst 24 - 24 100 1.56 15.3867 672 1008 0 0 0 0 0
Case (TWC)
Untreated Best N/A N/A N/A 1.56 18.27 336 2160 5.76668 0 0 0 0
Case (UTBC)
Untreated N/A N/A N/A 1.56 32.9923 2160 2160 26.92 100 100 0 0
Worst Case
(UTWC)
TABLE 4 KEY
Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).
For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).
Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.
Clinical Phase General Comments:
TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary
to the medical condition.
Durations are defined in hours.
Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition
end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3)
potential for intractable pain.
Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.
Clinical Phase 1: Initial Assessment and Diagnosis:
Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected
crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is
considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not
applicable."
Clinical Phase 2: Stabilization, Treatment, and Convalescence:
The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember
to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or
recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and
maximum hours.
Clinical Phase 3: Condition End State:
Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight
environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical
condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will
be noted in the condition end state results.
6/2/2023 4:06:26 PM ICL77_Prostatitis, Acute Cliff page: 4

SCENARIO OVERVIEW COMMENTS
This condition will be treated with analgesics and antibiotics. RTDC surrogate is hospitalization due the inability to treat with available resources.
Details regarding diagnosis and treatment are contained in the CRT.
TREATED BEST CASE (TBC) SCENARIO COMMENTS
Treated best case scenario should not result in RTDC or LOCL.
TREATED WORST CASE SCENARIO (TWC) COMMENTS
Treated worst case scenario should not result in RTDC or LOCL.
UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS
Untreated best case scenario should not result in RTDC or LOCL. Untreated best case prostatitis is not likely to cause hospitalization in the healthy
astronaut population.
UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS
Untreated worst case scenario is very likely to result in RTDC (based on RTDC surrogate of hospitalization). LOCL is not expected. LOCL in worst
case scenarios would be secondary to sepsis. Sepsis is a separate condition.
TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)
| Citation    |     | Source      | LOC Value |     |
| ----------- | --- | ----------- | --------- | --- |
| Coker, 2016 |     | Terrestrial |           |     |
| Brede, 2011 |     | Terrestrial |           |     |
3
| Sharp, 2010     |     | Terrestrial |     |     |
| --------------- | --- | ----------- | --- | --- |
| Sutcliffe, 2014 |     | Terrestrial |     |     |
Treated best case CP2 duration = 240 hours - 336 hours. (Coker, 2016). Treated worst case CP2 duration = 672 hours - 1008 hours. (Brede,
2011). Untreated best case CP2 duration = 336 hours - 2160 hours. (Coker, 2016) and (Sharp, 2010). Untreated worst case CP2 duration = 2160
hours (Sutcliffe, 2014).
TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)
| Citation | Source           |     | LOC Value |     |
| -------- | ---------------- | --- | --------- | --- |
| N/A      | Case Definitions |     |           |     |
4
| N/A | RTDC Surrogate |     |     |     |
| --- | -------------- | --- | --- | --- |
RTDC is not expected in the best case scenarios or the worst case treated scenario. RDTC is 100% in the untreated worst case scenario based on
| 6/2/2023 4:06:26 PM |     | ICL77_Prostatitis, Acute Cliff |     | page: 5 |
| ------------------- | --- | ------------------------------ | --- | ------- |

worst case definition and RTDC surrogate of hospitalization.
TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
N/A Case Definitions 4
LOCL = 0% for all scenarios. LOCL is not expected in best case scenarios. LOCL in the worst case scenarios would be secondary to sepsis. Sepsis
is a separate condition.
CAPABILITY RESOURCE TABLE (CRT) OVERVIEW
Capabilities and Resourcing Scope Overview Acute prostatitis refers to an episode of acute, bacterial prostatitis with the best-case scenario
responding to treatment with analgesics and oral antibiotics and the worst-case scenario requiring prolonged antibiotic treatment or developing an
abscess. CNES: Prostatic abscess Diagnostic Scope and Resourcing: In the best- and worst-case scenario, diagnosis is based on history, physical
examination (abdominal, genitourinary, rectal, and vital signs), imaging with ultrasound (a post-void residual is standard of care), and urinalysis.
Terrestrially, standard of care also includes a urine culture, but urine culture was considered outside the scope of medical capabilities for this CRT.
Trans-rectal ultrasound was not included as a capability (to assess for prostatic abscess) because drainage was beyond the scope of the medical
capabilities in this CRT and it was felt without this capability, the ultrasound would not change medical management. Clinical Phase 1 Duration and
Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. This CRT includes a scope
of practice code of 4 (which correlates to an “Intern/PA/NP.” The CRT working group SME consensus Clinical Phase 1 duration: Best Case CP1:
1.56 hours Worst Case CP1: 1.56 hours Treatment Scope and Resourcing: For a best-case acute prostatitis, terrestrial standard of care is 2-4
weeks of oral antibiotics (Ciprofloxacin, Levofloxacin, or Bactrim) and analgesics PRN. Given the best-case definition states that the prostatitis is
“responds to treatment,” a 2-week course of these oral antibiotic agents was included for the best-case scenario, as well as NSAIDs, and
acetaminophen PRN for pain. Terrestrially a urine culture would guide antibiotic treatment, but this was considered outside the scope of medical
capabilities for this CRT, so treatment would be empiric. In a worst-case acute prostatitis, treatment is prolonged. Meropenem IV was chosen as the
antibiotic of choice for empiric treatment of a worst-case acute prostatitis due to its broad coverage, including pseudomonas. There has been one
case of acute bacterial prostatitis in spaceflight and the bacterial agent was thought to be pseudomonas. Notably, Meropenem is not currently
included on the spaceflight formulary, but the benefit of its inclusion was considered for this CRT. The dose is Meropenem 1000mg IV every 8
hours. It is a powder that requires reconstitution. The 1g dose for reconstitution requires dilution with normal saline for a 1-20mg/ml concentration
(i.e.50ml NS minimum for a dose of 1g). Prior to reconstitution, it has a shelf-life of 4 years, but after reconstitution, it is only stable at room
temperature for 3 hours. 14 days of Meropenem IV have been included in the worst-case scenario, followed by an additional 4 weeks of oral
antibiotics. Communications and Support Needs: While real-time video and audio loop communications are desired for diagnosis and treatment,
they were not considered a necessity, particularly in the best-case scenario. For the WC, consultation with ground specialists to facilitate treatment
and healing was considered necessary given the limited diagnostic and treatment capabilities in-flight. References 1. Clinical Practice Guideline.
Retrieved 19 December 2020 from http://www.asams.org/guidelines/Completed/NEW%20Prostatitis.htm 2. Coker TJ, Dierfeldt DM. Acute Bacterial
Prostatitis: Diagnosis and Management. AFP 2016; 93:114–20. 3. Karah N, Rafei R, Elamin W, Ghazy A, Abbara A, Hamze M, et al. Guideline for
Urine Culture and Biochemical Identification of Bacterial Urinary Pathogens in Low-Resource Settings. Diagnostics (Basel) 2020; 10. Retrieved 20
December 2020 from https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7602787/ 4. Meropenem 500 mg powder for solution for injection or infusion -
Summary of Product Characteristics (SmPC) - (emc). Retrieved 7 May 2021 from https://www.medicines.org.uk/emc/product/5070/smpc#gref 5.
Microbiology - 007 - Carbohydrate Fermentation Test | Microbiology Undergraduate Program. Retrieved 20 December 2020 from
https://www.micro.iastate.edu/video/microbiology-007-carbohydrate-fermentation-test
6. URINE CULTURES ** | Student Health Center Manuals. Retrieved 20 December 2020 from http://shs-manual.ucsc.edu/policy/urine-cultures
7. Meropenem. IBM Micromedex. https://www-micromedexsolutions-com
IMM CLIFF RECONCILATION COMMENTS
The incidence for this CliFF uses the same study as the IMM LD68 CliFF Acute Prostatitis. Best case/ worst case percentages, CP2 durations, and
RTDC are based on different studies.
LIMITATIONS SUMMARY
Limited data available regarding untreated scenarios. Terrestrial studies do not account for the possible increased virulence of pathogens in
spaceflight, the possible decreased immune system response of astronauts in spaceflight, and the possible decreased effectiveness of medications
in spaceflight. Also, terrestrial general population studies do not account for the healthy astronaut population.
6/2/2023 4:06:26 PM ICL77_Prostatitis, Acute Cliff page: 6

| 6/2/2023 4:06:26 PM | ICL77_Prostatitis, Acute Cliff | page: 7 |
| ------------------- | ------------------------------ | ------- |

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)
Clinical Phase 2: Treatment
Affected HSTCs
Inter-
|     | Cognitive - | Cognitive - |     |     |     |     | Cardio- |     |     |     |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- |
Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU
Skills
Treated
| Best |     |     |     |     |     |     |     |     | 6   |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TBC)
Untreated
| Best |     | 664 |     |     |     |     | 145 |     | 6   |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTBC)
Treated
| Worst |     | 664 |     |     |     |     | 145 |     | 6   |     |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TWC)
Untreated
Worst
|     | 223 | 664 |     | 89  |     |     | 145 |     | 6   |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTWC)
|     |     |     |     | Affected HSTCs (Continued) |     |     |     |     | TI Calculation | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | -------- |
Total
Human
|     |     |     |     |     |     | Translation & |     | Total Tasks |     |     |
| --- | --- | --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- |
Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %
|     | (Dom) |     |     | Extremity | Standing (g) |                | Equipment | Ops       | Category |     |
| --- | ----- | --- | --- | --------- | ------------ | -------------- | --------- | --------- | -------- | --- |
|     |       |     |     |           |              | (microgravity) |           | Condition |          |     |
Tasks Full
Mission
Treated
| Best | 132 |     |     |     |     |     |     | 211 349 | 3763 0.0927452 | 9.27452 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ------- | -------------- | ------- |
Case
(TBC)
Untreated
| Best | 132 |     |     |     |     |     |     | 211 1158 | 3763 0.307733 | 30.7733 |
| ---- | --- | --- | --- | --- | --- | --- | --- | -------- | ------------- | ------- |
Case
(UTBC)
Treated
Worst
|     | 132 |     |     |     |     |     |     | 211 1158 | 3763 0.307733 | 30.7733 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------- | ------------- | ------- |
Case
(TWC)
Untreated
Worst
|     | 132 |     |     |     |     |     |     | 211 1470 | 3763 0.390646 | 39.0646 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------- | ------------- | ------- |
Case
(UTWC)
Clinical Phase 3: Condition End State
Affected HSTCs
|     | Cognitive - | Cognitive - |                |          | Inter- |         | Cardio-   |           |       |     |
| --- | ----------- | ----------- | -------------- | -------- | ------ | ------- | --------- | --------- | ----- | --- |
|     |             |             | Communications | personal | Vision | Hearing |           | Dentition | GI GU |     |
|     | Simple      | Complex     |                |          |        |         | pulmonary |           |       |     |
Skills
Treated
Best
|     |     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TBC)
Untreated
Best
|     |     |     |     |     |     |     |     |     | 6   |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTBC)
Treated
Worst
|     |     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TWC)
Untreated
Worst
|     |     | 664 |     |     |     |     |     |     | 6   |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTWC)
|                     |     |     |     | Affected HSTCs (Continued) |                                |     |     |     | TI Calculation | TI Score |
| ------------------- | --- | --- | --- | -------------------------- | ------------------------------ | --- | --- | --- | -------------- | -------- |
| 6/2/2023 4:06:26 PM |     |     |     |                            | ICL77_Prostatitis, Acute Cliff |     |     |     |                | page: 8  |

Total
Human
|     |     | Translation & | Total Tasks |     |     |
| --- | --- | ------------- | ----------- | --- | --- |
Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %
|     | (Dom) | Extremity Standing (g) | Equipment Ops | Category |     |
| --- | ----- | ---------------------- | ------------- | -------- | --- |
(microgravity) Condition Tasks Full
Mission
Treated
Best
|     |     |     | 0   | 3763 0 | 0   |
| --- | --- | --- | --- | ------ | --- |
Case
(TBC)
Untreated
Best
|     |     |     | 211 217 | 3763 0.0576668 | 5.76668 |
| --- | --- | --- | ------- | -------------- | ------- |
Case
(UTBC)
Treated
Worst
|     |     |     | 0   | 3763 0 | 0   |
| --- | --- | --- | --- | ------ | --- |
Case
(TWC)
Untreated
Worst
|     | 132 |     | 211 1013 | 3763 0.2692 | 26.92 |
| --- | --- | --- | -------- | ----------- | ----- |
Case
(UTWC)
| 6/2/2023 4:06:26 PM |     | ICL77_Prostatitis, Acute Cliff |     |     | page: 9 |
| ------------------- | --- | ------------------------------ | --- | --- | ------- |

TABLE 8 KEY
Human System Task Category (HSTC) Definitions: Cognitive-Simple: Tasks requiring simple cognitive involvement (low levels of attention, following
simple checklists, and not requiring extensive decision making) in conjunction with inputs from other systems. Cognitive-Complex: Tasks requiring
complex cognitive involvement (requiring constant attention, frequent interpretation of outside stimuli to inform real-time situations) in conjunction
with inputs from other systems. Communication: Tasks requiring primarily communication, via hearing and speaking. Interpersonal Skills: Tasks
requiring interpersonal, social interaction between crew including complex technical tasks that require extended crew interaction. Vision: Tasks in
which visual information is required. Hearing: Tasks in which primarily auditory information is required, excluding communication, e.g. hearing
alarms, medical auscultation, OOHAs. Cardiopulmonary: Tasks requiring greater-than-baseline cardiopulmonary effort, e.g. physically strenuous
activities. Dentition: Tasks requiring use of teeth for mastication. GI (Gastrointestinal): Tasks requring use of the alimentary sytem, e.g.
solids/liquids consumption and solids excretion. GU (Genitourinary): Tasks requiring use of the male/female genitourinary systems. Hand
(Dominant): Tasks performed using primarily the hand, requiring use of the dominant hand (piloting, medical procedures, dental procedures). Hand
(Any): Tasks performed using primarily the hand(s), with no preference for dominance, with equivalent bilateral effectiveness. Upper Extremity:
Tasks requiring specific use of the upper extremities, excluding hands. Lower Extremity: Tasks requiring specific use of the lower extremities
(excluding ambulation and standing in the presence of gravity), e.g. using exercise equipment. Ambulation and Standing (g): Tasks requiring use of
both lower extremities to accomplish ambulation or standing in the presence of gravity. Translation and Stabilization (microgravity): Tasks requiring
use of either the upper or lower extremities to accomplish translational movement and stabilization (securing oneself to remain stationary) in the
setting of microgravity. Don/Doff Equipment: Tasks requiring the donning of personal equipment (including pressure suit, exercise harness, EVA
equipment, etc). Pressure Ops: EVA/contingency tasks performed while pressurized in a suit.
Criteria for Assignment of Conditions to HSTCs (any of the following):
1) Is affected crew member physically incapable of performing the human system task category, without impairment, with the condition?
2) Would the treatment (e.g. medications) impair the crewmember's ability to perform the human system task category? (Does not apply to UTx)
3) Does the condition have a high likelihood of causing a significant aeromedical contraindication with an associated human system task category
4) Would performing tasks in an associated task category worsen the condition? (If so, it is affected).
5) Does pain associated with the condition impair any further human system categories?
TASK IMPAIRMENT COMMENTS
CP2: No comment. CP3: No comment.
EVIDENCE COLLECTION PROCESS
Mesh terms that most closely resembled the best-case and worst-case scenarios, and associated Conditions Included but Not Explicitly Stated
(CNES), were utilized to build incidence, duration, RTDC, and LOCL searches by best- and worst-case.
Incidence:
Databases searched for spaceflight and analog incidence data included: PubMed, Google Scholar, NASA Technical Reports Server (NTRS) public
search, Defense Technical Information Center (DTIC), and Barratt MR, Baker E, Pool SL. Principles of Clinical Medicine for Space Flight. New York,
NY: Springer; 2019. 2nd Edition. Databases searched for terrestrial incidence included: DynaMed, PubMed, and Google Scholar.
Duration, RTDC, LOCL:
Databases searched for duration, RTDC, and LOCL included: Dynamed, Cochrane, PubMed, and Google Scholar. Note, that if duration, RTDC, or
LOCL data was found in a DynaMed search, the other search engines were not included. Relevant articles were selected and reviewed. If
applicable, the article was included in the CLiFF.
LEVEL OF CONFIDENCE (LOC) SCORING
Articles obtained to update the evidence behind this CLiFF were scored by ExMC editors, based on their applicability to the Exploration Spaceflight
environment using the following grading scale:
4 – Confident
3 – Somewhat confident
2 – Neutral
1 – Somewhat unconfident
0 – Not confident
The following considerations factor into the grading scale above:
• How closely does the paper describe the medical condition as defined by the IMPACT 1.0 Condiltion List (relevance)?
• How closely does the population included resemble the astronaut population?
• Quality of the paper (number of subjects, methods, etc.)
• How much does the editor trust the source of the evidence?
• How closely does the editor think that the data represents the exploration spaceflight environment?
• Other considerations, at the discretion of the editor, supported in the comments for LOE scoring.
6/2/2023 4:06:26 PM ICL77_Prostatitis, Acute Cliff page: 10

REFERENCES
Reference
Clemens, J Quentin et al. “Incidence and clinical characteristics of National Institutes of Health type III prostatitis in the community.” The Journal of
urology vol. 174,6 (2005): 2319-22. doi:10.1097/01.ju.0000182152.28519.e7. Etienne, M., et al. "Acute Bacterial Prostatitis: Heterogeneity in
Diagnostic Criteria and Management. Retrospective Multicentric Analysis of 371 Patients Diagnosed with Acute Prostatitis." BMC Infect Dis 8
(2008): 12. Print. Coker, T. J., and D. M. Dierfeldt. "Acute Bacterial Prostatitis: Diagnosis and Management." Am Fam Physician 93.2 (2016): 114-
20. Print. Brede, C. M., and D. A. Shoskes. "The Etiology and Management of Acute Prostatitis." Nat Rev Urol 8.4 (2011): 207-12. Print. Sharp
VJ, Takacs EB, Powell CR. Prostatitis: diagnosis and treatment. Am Fam Physician. 2010 Aug 15;82(4):397-406. PMID: 20704171. Sutcliffe, S.,
et al. "Urological Chronic Pelvic Pain Syndrome Symptom Flares: Characterization of the Full Range of Flares at Two Sites in the Multidisciplinary
Approach to the Study of Chronic Pelvic Pain (Mapp) Research Network." BJU Int 114.6 (2014): 916-25. Print.
Wagenlehner FM, Lichtenstern C, Rolfes C, Mayer K, Uhle F, Weidner W, Weigand MA. Diagnosis and management for urosepsis. Int J Urol.
2013 Oct;20(10):963-70. doi: 10.1111/iju.12200. Epub 2013 May 29. PMID: 23714209.
Nagy V, Kubej D. Acute bacterial prostatitis in humans: current microbiological spectrum, sensitivity to antibiotics and clinical findings. Urol Int.
2012;89(4):445-50. doi: 10.1159/000342653. Epub 2012 Oct 18. PMID: 23095643.
ACRONYMS
ACRONYM PHRASE
AAOMS American Association of Oral and Maxillofacial Surgeons
AMA American Medical Association
ARCL All Remaining Conditions List
ARS Acute Radiation Sickness
BHP Behavioral Health and Performance
CAC Coronary Artery Calcium
CHS Crew Health and Safety
CL Condition List
CliFF Clinical Finding Form
CMO Crew Medical Officer
COMFORT Clinical Outcome Metrics for Optimization of Robust Training
CP1 Clinical Phase 1
CP2 Clinical Phase 2
CP3 Clinical Phase 3
CRL Clinical Resource Level
CRT Capability Resource Table
CST Clinical Science Team
DCS Decompression Syndrome
DRM Design Reference Mission
ED Emergency Medicine Doctor
EL Evidence Library
EMCL Exploration Medical Condition List
EMT Emergency Medical Technician
EVA Extravehicular Activity
EXMC Exploration Medical Capability
6/2/2023 4:06:26 PM ICL77_Prostatitis, Acute Cliff page: 11

HRP Human Research Program
ICD International Classification of Disease
ICL 1.0 IMPACT 1.0 Medical Conditions List
ICU Intensive Care Unit
IMCL iMED Condition List
iMED Integrated Medical Evidence Database
IMM Integrated Medical Model
IMPACT-MD Impact Medical Database
IP Incidence Proportion
IR Incidence Rate
ISS International Space Station
IV Intravenous
JSC Johnson Space Center
LEO Low-Earth orbit
LEVA Lunar Extravehicular Activity
LOCL Loss of Crew Life
LOM Loss of Mission
LSAH Lifetime Surveillance of Astronaut Health
LSO Lunar Surface Operations
MCL Master Condition List
MEVA Medical Extravehicular Activity
NASA National Aeronautics and Space Administration
N/A Not Applicable
NP Nurse Practitioner
OBGYN Obstetrics and Gynecology
OR Occurrence Rate
PA Physician Assistant
PDQ Pain Disability Questionnaire
PFCL Proposed Future Conditions List
PPE Personal Protective Equipment
PTRS Project Technical Requirements Specification
PRL Pharmaceutical Resource Level
QTL Quality Time Lost
RCL Removed Conditions List
REP Rochester Epidemiology Study
RTDC Removal to Definitive Care
SANS Spaceflight-Associated Neuro-ocular Syndrome
SAS Space Adaptation Syndrome
SEVA Spaceflight Extravehicular Activity
SME Subject Matter Expert
SoP Standard Operating Procedure
SPE Solar Particle Event
TBD To Be Determined
6/2/2023 4:06:26 PM ICL77_Prostatitis, Acute Cliff page: 12

TI Task Impairment
| 6/2/2023 4:06:26 PM | ICL77_Prostatitis, Acute Cliff | page: 13 |
| ------------------- | ------------------------------ | -------- |
