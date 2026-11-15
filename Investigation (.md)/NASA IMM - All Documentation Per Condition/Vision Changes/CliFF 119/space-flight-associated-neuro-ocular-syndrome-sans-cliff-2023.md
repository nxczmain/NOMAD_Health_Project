---
source_filename: "space-flight-associated-neuro-ocular-syndrome-sans-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Vision Changes/CliFF 119"
source_url: "https://drive.google.com/file/d/1KqJymkzFvv603kgLdKGFbKof5mOMfXib/view"
source_drive_id: "1KqJymkzFvv603kgLdKGFbKof5mOMfXib"
source_sha256: f5f41639a8668b9bda4839f1ea75f16762aa992fcb81f58f0a50ded05b3a4c42
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
---

# space-flight-associated-neuro-ocular-syndrome-sans-cliff-2023

[Original PDF](https://drive.google.com/file/d/1KqJymkzFvv603kgLdKGFbKof5mOMfXib/view)

> Automatically extracted text. Check the original PDF for figures, scanned pages, tables, and equations.

Clinical Finding Form (CliFF)
Branch Baseline
ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans)
For the last several decades it has been known that there are changes in visual acuity among astronauts that are due to a complex combination of
retinal, ocular, and neurological changes during spaceflight. Several theories to the underlying etiology exist including cephalad fluid shifts, venous
congestion, ischemia and inflammation but none seem to completely explain the observed changes. Crew members have been found to have
hyperopic shifts, choroidal folds, kinks in the optic nerve, flattening of the posterior globe, increased ICP and several other abnormal findings that are
not consistent with terrestrial ophthalmologic diseases. Initially this condition was called Visual Impairment with Increased Intracranial Pressure (VIIP)
but more recently has been renamed Spaceflight Associated Neuro-ocular Syndrome (SANS). This constellation of changes has been hard to
characterize and classify into a clear and distinct disease process as there is substantial variability among crew members. More recently there has
been standardization with the use of ocular coherence tomography among all crew members preflight, in-flight, and post flight which shows total
retinal thickness (TRT) changes as one of the most reliable and consistent pathophysiologic findings. The onset of this process can start within 14
day and the end point of these changes is still unclear but the incidence of this condition is much higher in long duration flight than short duration
which is troubling for lunar and mars mission planning. For crew members with visual acuity changes due to hyperopic shift, "space anticipation
glasses" have been used effectively. Other countermeasures to changes in IOP or ICP are still theoretical and have unclear clinical benefit. Much is
still unknown about this disease and in preparing this CLIFF the definition and criteria for SANS was being updated based on new data. Our
understanding and mitigation of these visual and neurologic changes is expected to evolve substantially in the ensuing years.
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
Spaceflight incidence data is taken from the LSAH which monitors astronaut health prior to , during, and after flight. Deidentified confidential data
was used to determine the incidence. This condition is unique to spaceflight and only being monitored by NASA clinicians and researchers.
Astronaut health record information is protected and due to the limited number of astronauts each year, much of the LSAH data is limited and
unpublished.
ANALOG LITERATURE
There have been several "head down" analog studies performed in an attempt to replicate the pathophysiology of SANS but they have had varied
results and are much less accurate than spaceflight data. These studies involve placing patients in a supine or prone position for weeks or months
at a time and measuring retinal thickness, visual acuity and retinal architectural changes.
TERRESTRIAL LITERATURE
No terrestrial literature for this condition exists
OVERALL INCIDENCE SUMMARY
INCIDENCE
Mean 0.2789 and SD 0.08342
INCIDENCE SUMMARY
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 1

The Bayesian posterior distribution for the incidence proportion given the spaceflight evidence (7 cases out of 27 unique astronaut missions that
had full testing), under an uninformative prior is Beta(alpha=7.781, beta=20.119) with mean 0.2789 and SD 0.08342. Data set includes a minimum
mission duration of 60 days and a maximum of 120 days. Crew members with abnormal findings but incomplete data were excluded from this
calculation. This includes shuttle astronauts which implies a onset of disease within 14 days as this was a common mission duration. Probability of
worst case is 0.14 (1/7) amongst all cases (detected on any test). Data is entirely based on microgravity environment and the role of partial gravity
on the development of this condition is unknown. SANS will be modeled as a "Yes or No" condition meaning once a crew member has the condition
they will continue to have the condition through the remainder of the flight. This is different than most conditions with regards to IMPACT modeling.
Each crew member will be modeled individually. Changes are defined as OCT testing in flight showing abnormalities when compared to L-9/6 mo.
Spaceflight definition of a case includes any of the following •>55-micron change in total retinal thickness in at least one eye •Choroidal folds
anywhere in at least one eye •Visual acuity change in at least one eye >=0.75 diopters – only measured pre- and post-flight. Total cases/over total
tested (at least 1 test) = 10/34 person-missions (including some repeat fliers)…. (Of those that had all 3 measures – change in total retinal
thickness, change in visual acuity, and folds assessment – 8/28 with one repeat or 7/27 for unique astronauts). After talking over the testing, we
decided to use the set of full testing with only unique fliers – 7 cases over 27 person-missions). IP: 0.2593 (95%CI: 0.1111, 0.4628)
TABLE 1. INCIDENCE MODEL
Incidence Details
Incidence Type
SAS
Segment
Space Adaptation
Env. Exposure
NA
Sex
Any
Crowns
Any
Contacts
Any
Pregnancy
Any
Incidence Distribution
Occurrence Dist
Binomial
Incidence Dist.
Beta
Mean
0.278889
SD
0.0834195
Beta
(Alpha): 7.781
(Beta): 20.119
Onset Timing (Hours)
(Min): 336
(Max): 2880
(Most Likely): 720
TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
AOHMG data request - SANS estimates for IMPACT Spaceflight 4
The LSAH data utilized for the incidence of SANS is the gold standard for calculating incidence as this is a condition unique to spaceflight and only
captured by NASA physicians at this time. The data set has some incomplete measures and includes astronauts on multiple missions and had to be
trimmed to maximize accuracy based on current definitions.
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 2

CREWMEMBER SELECTION/PREVENTION
DISQUALIFYING CONDITIONS
Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4
(2016).
PREFLIGHT PREVENTATIVE MEASURES
There is a required preflight ophthalmologic examination among all crew members which includes extensive testing including visual fields, depth
perception, retinal photography, OCT, tonometry and several other tests. Not all of these test are disqualifying if abnormal but do provide a very
clear baseline among crew members. Ophthalmologic examinations also occur yearly or every 3 years (depending on the test) to monitor for
changes over time.
BEST CASE SCENARIO DEFINITION
>55um to 200um change in total retinal thickness (TRT), presence of any choroidal folds, or visual acuity change >0.75 diopters in either eye
measured during or post flight.
WORSE CASE SCENARIO DEFINITION
>200um change in total retinal thickness (TRT), choroidal folds overlying the fovea, or visual field defects with blind spots
CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)
None
BEST CASE/WORST CASE PROBABILITY COMMENTS
Among the 7 unique crew members meeting criteria for SANS, 1 of them met the criteria for our WC definition. This astronaut had >200um TRT but
did not meet the other criteria. Thus 1/7 or 14% was our WC probability
TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
AOHMG data request - SANS estimates for IMPACT Spaceflight 4
The ExMC clinical science team and the SANS research group worked to develop best and worst case definitions for this spaceflight specific
condition. The LSAH dataset was then used to determine the proportion of astronauts that met criteria for the BC and WC definitions to determine
ratio. There are substantial limitations to this dataset but this is the best available data at this time.
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE
CP1: Diagnosis CP2: Treatment CP3: Condition End State
TI% Duration TI% Duration TI% RTDC LOCL
Composite Condition
Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%
Treated Best Mean 0.2789 and 86 - 86 100 2.12 22.6947 0 12 0 0 0 0 0
Case (TBC) SD 0.08342
Treated Worst 14 - 14 100 2.12 49.4552 0 12 0 0 0 0 0
Case (TWC)
Untreated Best N/A N/A N/A 2.12 31.8097 0 12 22.6947 0 0 0 0
Case (UTBC)
Untreated Worst N/A N/A N/A 2.12 49.4552 0 12 31.8097 0 0 0 0
Case (UTWC)
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
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 4

SCENARIO OVERVIEW COMMENTS
SANS appears to start within the first 2 weeks of zero G exposure and persist until several months after return to the 1G environment. This is based
on abnormal ocular findings among shuttle astronauts with mission durations of 14 days. These findings were early in our understanding of SANS
and did not include consistent enough measurements to be included in our dataset but do allude to a rapid onset of disease. The effect of a partial
G environment is still unclear. Typically a crew member will notice small visual changes or abnormalities on retinal screening images will show
abnormalities. Those with visual acuity effects will improve with "space anticipation glasses". Other countermeasures for changes in ICP or IOP are
theoretical at this point.
TREATED BEST CASE (TBC) SCENARIO COMMENTS
The BC definition for this condition was >55um change in total retinal thickness (TRT), presence of any choroidal folds, or visual acuity change
>0.75 diopters in either eye measured during or post flight. The duration of this condition was determined based on expert opinion to be 0-12
hours. The RTDC and LOCL are 0% based on condition definition.
TREATED WORST CASE SCENARIO (TWC) COMMENTS
The WC definition for this condition is >200um change in total retinal thickness (TRT), choroidal folds overlying the fovea, or visual field defects with
blind spots. The duration for this condition was determined to be 0-12 hours based on expert opinion. RTDC and LOCL are both 0% based on
condition definition.
UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS
The BC definition for this condition was >55um change in total retinal thickness (TRT), presence of any choroidal folds, or visual acuity change
>0.75 diopters in either eye measured during or post flight. The duration of this condition was determined based on expert opinion to be 0-12
hours. The RTDC and LOCL are 0% based on condition definition.
UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS
The WC definition for this condition is >200um change in total retinal thickness (TRT), choroidal folds overlying the fovea, or visual field defects with
blind spots. The duration for this condition was determined to be 0-12 hours based on expert opinion. RTDC and LOCL are both 0% based on
condition definition.
TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
Expert Opinion Terrestrial 2
Duration of CP2 was determined to be 0-12 hours in all forms of this condition. This was based on subject matter expert opinion regarding
estimated time of treatment. At this time there is not any treatment other than corrective glasses and thus this range was chosen to reflect the
limited necessary interventions.
TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
NA NA 4
RTDC surrogate defines RTDC as 0%
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 5

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
NA NA 4
This condition has no risk of LOCL by definition. There have been no observed cases that have endangered a crew member
CAPABILITY RESOURCE TABLE (CRT) OVERVIEW
Capabilities and Resourcing Scope
Overview
SANS is an investigational condition that is not well understood. Diagnosis will largely follow what is currently done for research purposes on ISS
and treatment is limited to refraction for vision correction. Since the mechanisms are not known, there are no preventive or curative measures
available. To date, vision correction as symptom management is effective and sufficient for management. This is expected to be an active area of
research on future flights so there will likely be additional resources allocated for management as more information is gained. However, none are
included here due to their experimental nature and unknown efficacy.
CNES: NONE
Diagnostic Scope and Resourcing
Diagnosis relies on history and physical exam
Clinical Phase 1 Duration and Rationale
This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME
consensus duration is as follows:
CP1 BC (Treated or Untreated): 2.12 hours for set up, history, and a thorough ophthalmic exam involving fundoscopic, vision, OCT, and intraocular
pressure testing. A focused neurological exam and ophthalmic ultrasound are also included.
CP1 WC (Treated or Untreated): 2.12 hours for set up, history, and a thorough ophthalmic exam involving fundoscopic, vision, OCT, and
intraocular pressure testing. A focused neurological exam and ophthalmic ultrasound are also included. This is no different than the best case
definition because the testing is expected to be the same.
This condition requires a Scope of Practice 5 largely due to its’ unknown nature. While treatment is not complex, ruling out other causes, and
working with unknown diseases is best done by an experienced clinician.
Treatment Scope and Resourcing
Both best and worst cases rely on space anticipation glasses and repeat testing. These will not be needed for every astronaut but we cannot know
which ones will require them so it makes sense to include these as part of the medical system.
The visual changes appear to be variable but consistently hyperopic so specific lens types and correction factors should either be discussed on an
individual basis preflight OR a variable power lens included that can accommodate the varied shift. At the present time there are no commercially
available lenses of this type on market so no single recommendation can be made.
Communications and Support Needs;
Communications are not expected to be necessary beyond the routine medical ground communications given the context of vision changes in
spaceflight and the apparent lack of emergent pathology requiring immediate intervention. However, it is expected that routine ground
communication will be present and available to assist with diagnosis and treatment.
References
Barratt, Michael R., Ellen S. Baker, and Sam L. Pool. 2019. "Principles of clinical medicine for space flight." In. New York, NY: New York, NY :
Springer.
IMM CLIFF RECONCILATION COMMENTS
The IMM CLIFF for Visual Impairment and/or Increased Intracranial Pressure (VIIP) was the previous name for this medical condition. This CLIFF
was made at a time when even less was understood about this disease process than we understand now. Incidence was based on subjective visual
changes among crew members which is less reliable than OCT measurements of TRT, now considered the gold standard for this condition. Optic
disc edema was also removed from the diagnosis of SANS as it has extremely poor inter-rater reliability on review of imaging. Duration of this
condition ranged from 3-28 days but it is unclear where this range originated. LOCL and RTDC were also determined to be 0 in this condition.
LIMITATIONS SUMMARY
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 6

•The definition of SANS has changed over time as we have understood more about this disease. The definitions used here were created during the
development of this CLIFF and are up to date but also likely to be inaccurate over time as more research is spent understanding the
pathophysiology of SANS. •Many of the ocular abnormalities found in flight have unclear clinical significance. Some members with substantial
changes to retinal thickness do not have any visual changes and vice versa some members with limited abnormal findings do report visual changes
•Progression of SANS is unknown. There is concern that over time vision will continue to worsen however this has not been identified in the data
thus far. Long duration missions such as our DRM may have a higher incidence and impact of SANS than the shorter duration missions that were
the source for our data. •The dataset for this condition is limited to a small number of individuals as it is a spaceflight specific condition and
protected under LSAH for astronaut health privacy •28 of the 34 person missions studied had complete testing. Incomplete testing was removed as
was any return fliers as we do not know if having SANS increases a crew member’s likelihood of having it on subsequent missions. The total unique
astronauts used was 27 •Mission duration also appears to have an impact on incidence of SANS however there are reports of visual changes
among shuttle astronauts which implies a relatively rapid onset of these findings of less than 14 days in the microgravity environment. However,
within this dataset 60d is shortest mission duration and 1y is the longest. It is unclear what changes are expected after very long duration flight
(>1year). There is debate whether these changes will plateau or continue to worsen. •The worst-case definition was agreed upon with the SANS
research group. It includes the criteria “choroidal folds involving the retina” and “visual field defects” which are theoretical severe outcomes but
have never been observed. The 3rd criterion “TRT>200 microns” was in an astronaut with limited visual changes and no increase in ICP. As
discussed, the severity or long-term changes associated with SANS are unknown and thus criteria from our WC scenario may not be possible or
clinically relevant. •The effect of partial gravity on the development of SANS is unknown. In our DRM as well as future lunar and mars missions it is
unknown whether crew members visual changes will improve with partial gravity. In this CLIFF we have determined that a once a crew member is
diagnosed with SANS they will continue to have this condition until a minimum of R+6mo and thus cannot suffer from this condition twice however
this may not accurately reflect the disease process. •Duration of the CP2 of this condition was determined to range from 0-12 hours however this
may not accurately represent the treatment time of this condition. There is no treatment for SANS other than visual correction with glasses. There
also does not appear to be elevated ICP associated clearly with this condition and thus no interventions required to prevent hydrocephalus. Thus
the CP2 of this phase will be extremely short. 12 hours was included as the maximum to account for time spent observing the patient, finding
necessary equipment, and time to return to work. •OCT testing occurs preflight 6-9 months then at regular intervals throughout flight (L+30, L+90,
R+1/3, R+ 30 etc...). These intervals are determined by the operations team and may change over time depending on mission parameters. During
ISS missions these tests did not occur within the first week due to other priorities in flight and thus the minimum time to onset of visual changes is
unknown but assumed to be less than 14 days as many shuttle astronauts had findings of SANS post flight.
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)
Clinical Phase 2: Treatment
Affected HSTCs
Inter-
|     | Cognitive - Cognitive - |     |     |     |     | Cardio- |     |     |     |     |     |
| --- | ----------------------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |
Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU
Skills
Treated
| Best |     |     |     | 854 |     |     |     |     |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TBC)
Untreated
| Best |     |     |     | 854 |     |     |     |     |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTBC)
Treated
| Worst | 664 |     |     | 854 |     |     |     |     |     |     |     |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TWC)
Untreated
Worst
|     | 664 |     |     | 854 |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTWC)
|     |     |     | Affected HSTCs (Continued) |     |     |     |     |     | TI Calculation |     | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |
Total
Human
|     |     |     |     |     | Translation & |     |     | Total Tasks |     |     |     |
| --- | --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | --- |
Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %
|     | (Dom) |     | Extremity | Standing (g) |                | Equipment | Ops |           | Category |     |     |
| --- | ----- | --- | --------- | ------------ | -------------- | --------- | --- | --------- | -------- | --- | --- |
|     |       |     |           |              | (microgravity) |           |     | Condition |          |     |     |
Tasks Full
Mission
Treated
| Best |     |     |     |     |     |     |     | 854 | 3763 | 0.226947 | 22.6947 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |
Case
(TBC)
Untreated
| Best | 132 |     |     |     |     |     | 211 | 1197 | 3763 | 0.318097 | 31.8097 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |
Case
(UTBC)
Treated
Worst
|     | 132 |     |     |     |     |     | 211 | 1861 | 3763 | 0.494552 | 49.4552 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |
Case
(TWC)
Untreated
Worst
|     | 132 |     |     |     |     |     | 211 | 1861 | 3763 | 0.494552 | 49.4552 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |
Case
(UTWC)
Clinical Phase 3: Condition End State
Affected HSTCs
|     | Cognitive - Cognitive - |                | Inter-   |        |         | Cardio-   |           |     |     |     |     |
| --- | ----------------------- | -------------- | -------- | ------ | ------- | --------- | --------- | --- | --- | --- | --- |
|     |                         | Communications | personal | Vision | Hearing |           | Dentition | GI  | GU  |     |     |
|     | Simple Complex          |                |          |        |         | pulmonary |           |     |     |     |     |
Skills
Treated
Best
|     |     |     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TBC)
Untreated
Best
|     |     |     |     | 854 |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTBC)
Treated
Worst
|     |     |     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TWC)
Untreated
Worst
|     |     |     |     | 854 |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTWC)
|     |     |     | Affected HSTCs (Continued) |     |     |     |     |     | TI Calculation |     | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 8

Total
Human
|     | Translation & | Total Tasks |     |     |
| --- | ------------- | ----------- | --- | --- |
Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %
| (Dom) | Extremity Standing (g) | Equipment Ops | Category |     |
| ----- | ---------------------- | ------------- | -------- | --- |
(microgravity) Condition Tasks Full
Mission
Treated
Best
|     |     | 0   | 3763 0 | 0   |
| --- | --- | --- | ------ | --- |
Case
(TBC)
Untreated
Best
|     |     | 854 | 3763 0.226947 | 22.6947 |
| --- | --- | --- | ------------- | ------- |
Case
(UTBC)
Treated
Worst
|     |     | 0   | 3763 0 | 0   |
| --- | --- | --- | ------ | --- |
Case
(TWC)
Untreated
Worst
| 132 |     | 211 1197 | 3763 0.318097 | 31.8097 |
| --- | --- | -------- | ------------- | ------- |
Case
(UTWC)
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 9

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
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 10

REFERENCES
Reference
AOHMG data request - SANS estimates for IMPACT. SANS Clinical Research Team
Brunstetter, T., et al. (2021). A New Case Definition Framework for Spaceflight Associated Neuro-Ocular Syndrome. Aerospace Medical
Association. Denver, Colorado.
Mader, T. H., et al. (2011). "Optic Disc Edema, Globe Flattening, Choroidal Folds, and Hyperopic Shifts Observed in Astronauts after Long-
Duration Space Flight." NASA Publications.
Ong, J., et al. (2021). "Head-Down Tilt Bed Rest Studies as a Terrestrial Analog for Spaceflight Associated Neuro-Ocular Syndrome." Front
Neurol 12: 648958.
Stenger, M. B., et al. (2017). Risk of Spaceflight Associated Neuro-Ocular Syndrome (SANS). Human Research Program Human Health
Countermeasures Element.
Wojcik, P., et al. (2020). "Spaceflight associated neuro-ocular syndrome." Curr Opin Neurol 33(1): 62-67.
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
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 11

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
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 12

TI Task Impairment
9/19/2022 5:00:13 PM ICL100_Space Flight Associated Neuro-Ocular Syndrome (Sans) Cliff page: 13
