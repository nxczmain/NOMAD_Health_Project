# Space Adaptation Epistaxis CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1fJdejmJEVQJyRzEipHWX5RK1m01NORBO/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL93_Space Adaptation - Epistaxis Epistaxis, or nosebleeds, are regular events and often do not require medical treatment. Only six percent of people who experience an epistaxis event will ever seek additional expertise (Seikaly, 2021). Although nearly all nosebleeds will resolve with minimal involvement, the severity of the bleed can be complicated by the location, coagulation abnormalities, platelet dysfunction, and cardiovascular disease. Most bleeds are ‘anterior bleeds’ and occur along the septum from the Kiesselbach plexus in Little’s area. This vascular supply is formed by terminal branches of the internal carotid artery and external carotid artery. Anterior bleeds are typically simpler to manage as the area is visible and compressible. Frequently, nasal compression and topical vasoconstrictors are all that is necessary; albeit cauterization, topical hemostasis agents and anterior packs are commonly used as well.

Posterior bleeds comprise of 10-20% of cases and occur along the posterior septum, the lateral nasal wall, or the nasal floor (Krulewitz et al., 2019).

These areas are supplied by the sphenopalatine and ascending pharyngeal arteries and often result in brisk bleeds warranting immediate intervention to prevent aspiration and hemorrhagic shock (Womack et al, 2018). Posterior packing is painful both upon insertion and in situ. This type of packing is associated with a higher risk of complications such as otitis media, sinusitis, pressure necrosis, airway obstruction, vagal nerve stimulation, cavernous sinus thrombosis, and toxic shock syndrome (Feusi et al., 2005; Morgan et al. 2014). There have been several epistaxis events in spaceflight. Nosebleeds occurring in the first five days of a mission are associated with space adaptation epistaxis. These are typically attributed to the cephalad fluid shift secondary to increased blood volume and intravascular pressure (Barratt et al., 2019). As a result of these shifts, astronauts experience facial edema and report subjective symptoms of nasal stuffiness and head pressure. The engorgement of the nasal mucosa, use of decongestants and the propensity for digital trauma during this time increases the likelihood of an epistaxis event. After the first five days, an equilibrium is established. The temporal nature of these fluid shifts is further supported by the finding that there is no significant difference in paranasal sinus opacification in head magnetic resonance imaging after spaceflight (Inglesby et al., 2020). Events that occur after five days are covered separately in another CLiFF (ICL 38- Epistaxis) and can be attributed to the low relative humidity of the mission craft, overuse of decongestants, trauma, sinusitis, or upper respiratory infections.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Spaceflight literature were derived from two LSAH data gathering events (Walton, 2010; Saile et. al, 2017) and a NASA white paper (Antonsen et al. 2017). Unfortunately the authors of this CLiFF did not have direct access to the data from those LSAH events. Consequently, information was taken detailing these events from the previous IMM CLiFF entitled "Nose bleed (space adaptation)." Of importance, for this effort, epistaxis events were divided into two categories: space adaptation associated epistaxis (detailed here) and epistaxis (detailed in a separate CLiFF) The statistician of this CLiFF was able to contact the authors of Antonsen et al. and verify the data (which was also based on the prior LSAH events). During her analysis it was observed that in the Antonsen et al. paper Table 1 was mislabeled as 'ISS through Exp 40' when it should read ' ISS expeditions 9 and 14 through 40'; this CLIFF corrects for that error. At the time of this CLIFF completion, a repeat LSAH data gathering event was not possible and missions past 2017 are not represented.

### ANALOG LITERATURE

Analog populations are not applicable to this condition as by condition definition, occurrences must happen in spaceflight. Analog literature for epistaxis is included in ICL 38 Also not included in the incidence calculation as it did not occur during spaceflight, was one severe case of epistaxis in an astronaut during a ground medical event that required hospitalization (Barratt et al., 2019).

### TERRESTRIAL LITERATURE

Terrestrial literature is not applicable to this condition. Terrestrial literature for epistaxis is included in ICL 38.

### OVERALL INCIDENCE SUMMARY

6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 1

## INCIDENCE

mean: 0.0136 and SD:0.00417

### INCIDENCE SUMMARY

Epistaxis needs to be defined for 2 types, those related to space adaptation (occurring within the first 5 days of the mission) and those that occur later. We will use inflight data to inform those distributions. From the LSAH data requests (Walton 2010 and Saile 2014), there have been 14 cases, 6 known to occur in the first 5 days, 2 known to occur after 5 days, and 6 with unknown onset. To impute where those 6 with unknown onset should be applied, we will split them according to the proportions of the known cases (0.75 related to space adaptation, and 0.25 after). This means 4.5 would be expected to be in the space adaptation. In order to not underestimate overall risk across both conditions, 4 will be attributed to space adaptation, and 2 to afterwards. This gives 10 cases over 807 persons-at-risk for the space adaptation condition, and 4 cases over 34.44 person- years (45.49 – (807*5/365.25)). Incidence proportion distribution is Beta(shape1=10.524, shape2=762.18) mean: 0.0136 and SD:0.00417. This is the Bayesian posterior distribution for the proportion using the spaceflight data of 10 cases over 807 persons-at-risk using an uninformative prior.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

SAS Segment

### Space Adaptation

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Beta Mean 0.0136197 SD 0.00416695 Beta (Alpha): 10.524 (Beta): 762.18 Onset Timing (Hours) (Min): 1 (Max): 120 (Most Likely): 12 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Walton, 2010 Spaceflight 4 Saile et al., 2017 Spaceflight 4 Antonsen et al., 2017 Spaceflight 3 Spaceflight incidence data was rated the highest as by definition, this condition must occur during spaceflight. Data gathered from the previous IMM CLiFF efforts were rated slightly higher than the Antonsen NASA white paper as the older CLiFFs included timing of epistaxis events. 6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

- Crewmembers undergo preflight clinical laboratory testing at: L-90/30 days which includes Blood: Hematology – CBC w/differential, reticulocytes;

Chemistry profile – glucose, BUN, creatinine, AST, ALT, GGTP, alkaline phosphatase, total bilirubin, total protein, electrolytes, calcium, magnesium, phosphorus, LDH, uric acid, albumin; Ionized calcium; Thyroid function – free T4, TSH; Iron profile – iron, iron binding capacity, transferrin saturation, ferritin; Special chemistry – C-reactive protein, Serum lipids (total cholesterol, LDL, HDL, Triglycerides)Mouse IgE Allergen Panel Inflight, at the discretion of the crew medical officer, crewmembers are scheduled for blood chemistries L+180 days All astronauts must undergo annual medical examination that includes a medical history review and clinical laboratory testing.

### BEST CASE SCENARIO DEFINITION

An anterior nosebleed that resolves with minimal or no treatment

### WORSE CASE SCENARIO DEFINITION

A posterior nosebleed that requires nasal packing and possibly surgical treatment CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Non-Space Adaptation Epistaxis is covered in a different CLiFF and epistaxis events that occurred after the first 5 days are excluded from this CLiFF's incidence calculation.

### BEST CASE/WORST CASE PROBABILITY COMMENTS

There have been no worst-case events recorded in spaceflight. Consequently, analog and terrestrial literature searches were conducted with the known limitation that these searches were more applicable to ICL 38 Epistaxis than spaceflight associated epistaxis. Analog studies that were found did not differentiate between the best and worst case. Therefore, terrestrial data was used to determine the probability of the worst-case. In Viducich et al. 2016, a review of Akron City Hospital emergency department medical records was conducted between January 1, 1987, and January 31, 1993. One thousand seven hundred episodes of epistaxis were identified and 81 patients (5%), ranging from 27 to 96 years of age (mean: 64.3 years) experienced a posterior bleed. In Sethi et al. 2018, a retrospective review of the United States Nationwide Emergency Sample (NEDS) from 2009-2011 was queried for a primary diagnosis of ‘epistaxis.’ Of the 243,268 epistaxis associated visits, 17,789 (7.3%) patients (average age 64.4 years) had both anterior and posterior packing placed. Lastly, in the INTEGRATE (The National ENT Trainee Research Network) 2017, 113 registered emergency department sites across the United Kingdom were audited for the diagnosis of ‘epistaxis’ during a 30-day window. Although this study did not mention posterior epistaxis bleeds, it did determine that transfusion of blood products was performed in 4.5% of all the cases.

Since both Sethi et al. and INTEGRATE possessed ambiguity in how posterior epistaxis bleeds were defined, data from Viducich et al. was used to represent the worst-case scenario. Of note, the terrestrial data include patients with comorbid conditions not seen in spaceflight crewmembers..

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Viducich et al., 1995 Terrestrial 2 Sethi et al, 2019 Terrestrial 0 INTEGRATE, 2017 Terrestrial 0 Only terrestrial data were obtainable to determine the worst-case probability. Of the available studies, only one study (Viducich et al., 2016) defined the worst-case similarly and provided prevalence data. As such, the other studies were excluded but listed here to help develop context. 6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best mean: 0.0136 95 - 95 100 0.56 4.73027 0.0833333 0.58 0 0 0 0 0

Case (TBC) and SD:0.00417 Treated Worst 5 - 5 100 1.12 50 24 96 0 5.6 18 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.56 6.65692 0.0833333 0.58 0 0 0 0 0 Case (UTBC) Untreated N/A N/A N/A 1.12 100 24 912 100 18 100 0 0

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The best case is a nosebleed that resolves with no or limited treatment. In terrestrial scenarios, patients that experience the best case might not event seek medical care. The worst case, a posterior bleed, is at the minimum treated in the emergency department, often with subspecialist help.

The RTDC surrogate used for the CLiFF was hospitalization or unresolving hemorrhage. These definitions are identical to what was used in ICL 38 (Epistaxis) and the resultant values are the same.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Determining the duration of the treated best case (TBC) scenario is difficult as this definition is an episode that can be self-resolving. In a multidisciplinary epistaxis clinical practice guideline for the American Academy of Otolaryngology- Head and Neck Surgery Foundation (Tunkel et al., 2020), the statement: “firm and sustained pressure to the lower third of the nose, with or without assistance of the patient or caregiver, for 5 minutes or longer” received a strong recommendation (0.08 hours). Outpatient recommendations from other disciplines are similar (Womack et al., 2018; Morgan et al., 2014). The same authors also endorsed that even when active bleeding has ceased, patients should be monitored for next 30 minutes to ensure that epistaxis does not reoccur (0.08 hour + 0.50 hour = 0.58 hours). By definition, events that would lead to RTDC and LOCL are not expected for this condition. This is further supported as only one-tenth of patients that experience nosebleeds will pursue any treatment from a medical provider (Viehweg et al., 2006).

TREATED WORST CASE SCENARIO (TWC) COMMENTS The treated worst-case definition involves a posterior nosebleed that requires packing and may require surgical treatment. Duration of the condition will be limited by the length of treatment. In this case, nasal packing--by means of either an inflatable pack or a foley balloon would be expected.

Nasal packing can be removed in as little as 24 hours or left for as long as 72 hours. Longer durations are associated with pressure necrosis of nasal tissues (Seikaly, 2021; Krulewitz et al., 2019). However, in cases of refractory bleeding, some articles mention leaving packs in place for as much as 96 hours, but with the additional recommendation of initiating antibiotics for toxic shock syndrome (Viducich et al., 1995, Spielmann et al., 2012). “Severe epistaxis” is considered a Class IIa medical event: an incident that can be managed using the International Space Station (ISS)

Health Maintenance System (HMS) and not likely to necessitate evacuation or affect mission length (Barratt et al., 2019). However a small number of patients in terrestrial conditions experience refractory bleeds not responsive to local measures. Out of 933 patients that required admission for epistaxis at NHS hospitals in England and Wales over a three-month period, 52 patients (5.6%) required general anesthesia and surgical intervention for refractory bleeding (Kotecha et al., 1996). In another retrospective review, 16 out 88 (18%) patients who presented to the emergency department for posterior epistaxis failed emergency medicine provider packing and required surgical intervention (Viducich et al., 1995).

Of note, many of these patients were on anticoagulants, had diagnosed liver disease or thrombocytopenia. Mortality in the treated best case is rare: in one study 43 patients that required surgical intervention all survived their perioperative period (Abdelkader et al., 2007) and in another over a 15-year study period and a total of 141 interventions, there were no mortalities reported in the operative or perioperative period (Tessler et al., 2020). UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Similar to the rationale used in in the treated best case, the untreated best case is still a self-limited illness. To our knowledge, there are no studies detailing the time necessary to form a nasal clot without intervention. Consequently, duration was set to be identical to the treated best-case condition. By definition RTDC and LOCL are not expected for the treated or untreated best-case scenario.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Defining parameters for the untreated worst case is difficult as the terrestrial standard of care is to attempt tamponade of any active nasal hemorrhage. Mortality from epistaxis primarily results from airway compromise or hemorrhagic shock, albeit other pathologies such as disseminated intravascular coagulation are possible as well. The first stage of hemorrhagic shock can occur with as little as 750 mL of blood loss and patients can exsanguinate in as little as two hours (median) without resuscitation from massive hemorrhage (Cannon, 2018). However, respiratory arrest and hemorrhagic shock are not covered in this condition but rather in another CliFF. Consequently, the minimum duration for the untreated worst case is estimated to be no less than the treated worst case (24 hours); albeit in actuality, the condition might proceed rapidly to the hemorrhagic shock condition. Literature to gather the maximum duration was limited to dated case-studies. Most described intermittent massive hemorrhages lasting several days (Quinn, 1961). One case described a 20-year-old miner who was struck in the face during an occupational accident in Colorado. He developed severe epistaxis repeatedly which subsequently resolved but reoccurred. After 38 days, the patient died of hemorrhagic shock (Levy, 1896). The minimum RTDC would be the maximum amount of the treated worst-case condition as the untreated version is presumed to have a higher rate of hospitalization or persistent bleeding. The maximum RTDC is estimated in 100%, considering the risk for a crew member with unstoppable bleeding. 6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 5

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------- | ----------- | --------- | --- |
| Tunkel et al., 2020 | Terrestrial |  |  |
| Womack et al., 2018 | Terrestrial |  |  |
| Morgan et al., 2014 | Terrestrial |  |  |
| Seikaly, 2021 | Terrestrial |  |  |

2

| Krulewitz et al., 2019 | Terrestrial |  |  |
| ---------------------- | ----------- | --- | --- |
| Viducich et al., 1995 | Terrestrial |  |  |
| Spielmann et al. 2021 | Terrestrial |  |  |
| Levy, 1896 | Terrestrial |  |  |

Available studies to determine durations for treated cases involved clinical practice guidelines, systematic reviews, and retrospective studies. Due to the increasingly more rigorous Institutional Review Board guidelines of American institutions, literature for untreated best and worst cases were limited to extrapolation from dated case studies.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------------- | ----------- | --------- | --- |
| Viehweg et al., 2006 | Terrestrial |  |  |
| Kotecha et al., 1996 | Terrestrial |  | 2 |
| Viducich et al., 1995 | Terrestrial |  |  |

RTDC percentages for the TBC and UTBC are expected to be zero given the conditions' definitions; as such articles were not reviewed for these conditions. In the TWC, RTDC was determined from retrospective reviews. The UTWC RTDC used the same studies as the TWC along with subject matter expert consensus given the lack of available literature detailing this scenario.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ----------------------- | ----------- | --------- | --- |
| Viehweg et al., 2006 | Terrestrial |  |  |
| Abdelkader et al., 2007 | Terrestrial |  | 1 |
| Tessler et al., 2020 | Terrestrial |  |  |

Based on the definitions, loss of crew life is not expected for any of the conditions. However, to validate the assumption that mortality was negligible a literature search was still conducted. A narrative review along with two small retrospective studies do provide negligible mortality rates for hospitalized patients. CAPABILITY RESOURCE TABLE (CRT) OVERVIEW ICL - 93, Space Adaptation Epistaxis Definitions: Best Case: An anterior nosebleed that resolves with minimal or no treatment. Worst Case: A posterior nosebleed that requires nasal packing and possibly surgical treatment. Capabilities and Resourcing Scope Overview Epistaxis, or nosebleeds, are common terrestrial occurrences with only approximately 6% of events requiring care by a medical provider (Krulewitz et al. 2019).

Most events resolve spontaneously or with gentle pressure to the bilateral nares. Albeit less frequent, severe events can result in hemorrhage, airway compromise and even hypovolemic shock. Causes of bleeding can range from dry or arid conditions, trauma, intranasal medications, infections, inflammation, malignancy, and systemic pathologies (such as clotting or platelet disorders); however, in many cases, no obvious precipitant is identified.(Seikaly 2021). Epistaxis is frequently classified by the anatomic source of bleeding as either anterior or posterior (Tunkel et 6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 6

al. 2020; Womack et al. 2018). Anterior bleeds usually arise from Kiesselbach’s plexus: a vascular network of the five arteries that supply the nasal septum. Anterior bleeds, somewhat less frequently, can be traced to the inferior or middle turbinates as well. Generally, anterior bleeds are less difficult to treat as the source of bleeding is more readily visible (and therefore amenable to spot treatments such as cautery) and the area is compressible. Approximately 10% of epistaxis occurrences will be from posterior bleeds (Seikaly 2021). Classically these bleeds arise from branches of the sphenopalatine artery and are more profuse in flow. Although they are most likely to occur from the posterior septum, they can also arise from the posterior nasal floor or lateral nasal wall. These areas are difficult to visualize without endoscopy and often require nasal packing, otolaryngology consultation, surgical management, and even intensive care admission. In this CRT, the best-case refers to an anterior nosebleed that is easily resolved. Terrestrially, patients that experience the best-case scenario may not even seek medical care. Conversely, given the already inherent dangers of spaceflight and lack of access to immediate definitive care, resources are allocated to ensure that even a minor epistaxis does not reoccur. The worst-case condition refers to a posterior bleed that requires treatment. Even though the definition states that this condition may require surgical management, missions are not likely to carry the equipment necessary to definitively treat. Consequently. it is feasible that without adequate treatment this condition may progress to more severe pathologies such as respiratory arrest. This CRT does not include resources for these downstream conditions as they are provided for in other CRTs. Also of importance, nosebleeds that occur within the after the five days of spaceflight are covered in a different, but similar CRT entitled ‘Epistaxis.’ Diagnostic Scope and Resourcing In the best case, diagnosis will be made via history and physical exam. Given the benign nature of this condition, it was decided by CRT group consensus not to allocate a tongue depressor or gloves for the exam. In the worst-case scenario, profuse nasal bleeding is expected and as such, personal protective equipment is allocated along with diagnostic equipment for the nasal sand oropharyngeal exams. Although in terrestrial conditions an otolaryngologist might be expected to visualize the bleed with fiberoptic rhinoscopy (Seikaly 2021), this is likely beyond the capabilities of onboard crew members and accordingly, an endoscopic rhinoscope was not resourced in this CRT. Profuse bleeding might result in a hematocrit decrease, but since hypovolemic shock is covered in a different CRT, a complete blood count was thought unnecessary by group CRT consensus for this condition. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.56 hours This is the longest reasonable time to complete the task for an experienced clinician (adjusted for being in the spaceflight environment) 1) to remove a crewmember from duties 2) obtain a history and 3) examine the patient. CP1 WC (Treated or Untreated): 1.12 hours This is the longest reasonable time to complete the task for an experienced clinician (adjusted for being in the spaceflight environment) 1) to remove a crewmember from duties 2)obtain a history 3) perform hand hygiene 4) don personal protective equipment 5) examine the patient 6) establish ground communications. Additional time for the nasal and oropharyngeal exams were apportioned to this worst-case condition. The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment (particularly inserting posterior packing) would be a five: this is at the experienced procedural trained generalist attending (emergency medicine attending). Treatment Scope and Resourcing In the best-case scenario, treatment is limited to non-invasive procedures and medications. Resources are also allocated to preventing recurrence. By its definition, the worst-case scenario requires intervention. The type of involvement will vary by the clinical scenario and resources are allocated for medications, hemostatic agents, and nasal packing. Although the definition does state that this is likely a posterior bleed, spot treatments (silver nitrate, tranexamic acid) are still allocated for the worst case as these would be important (and important to have on missions) in profuse anterior bleeds not amenable to simple compression—a case somewhat in the middle of the best and worst scenarios. In missions where access to definitive care is not immediately accessible, removal of nasal packing would be expected anywhere between three to six days after placement. Removal of packing would likely use the same resources as placement (syringe, etc.) and it would be expected to reuse these resources to limit waste. Similar to the best case, resources to prevent recurrence of epistaxis are also provided in the worst case. Communications and Support Needs In the best- case scenario, diagnosis and course of treatment is uncomplicated and likely within the scope of care of onboard crew members. In the worst-case condition, ground communications are necessary as there may be uncertainty regarding packing placement and other course of care.

REFERENCES Krulewitz, N. A., and M. L. Fix. 2019. 'Epistaxis', Emerg Med Clin North Am, 37: 29-39. Seikaly, H. 2021. 'Epistaxis', N Engl J Med, 384: 944-51. Tunkel, David E., Samantha Anne, Spencer C. Payne, Stacey L. Ishman, Richard M. Rosenfeld, Peter J. Abramson, Jacqueline D.

Alikhaani, Margo McKenna Benoit, Rachel S. Bercovitz, Michael D. Brown, Boris Chernobilsky, David A. Feldstein, Jesse M. Hackell, Eric H.

Holbrook, Sarah M. Holdsworth, Kenneth W. Lin, Meredith Merz Lind, David M. Poetker, Charles A. Riley, John S. Schneider, Michael D. Seidman, Venu Vadlamudi, Tulio A. Valdez, Lorraine C. Nnacheta, and Taskin M. Monjur. 2020. 'Clinical Practice Guideline: Nosebleed (Epistaxis) Executive Summary', Otolaryngology–Head and Neck Surgery, 162: 8-25. Womack, J. P., J. Kropa, and M. Jimenez Stabile. 2018. 'Epistaxis: Outpatient Management', Am Fam Physician, 98: 240-45.

### IMM CLIFF RECONCILATION COMMENTS

This CLiFF is the successor to the previous IMM CLiFF entitled "Nose bleed (space adaptation)." Of most importance, in this CLiFF effort, Space Adaptation Epistaxis and (conventional) Epistaxis were separated into two different conditions and calculated incidence rates reflect this. There is also some concern that the person-years for the LSAH data gathering (Walton M 2010; Saile L. 2017) was calculated incorrectly. Further a previous NASA internal whitepaper (Antonsen et al. 2017) had a table mislabeled as ‘ISS through Exp 40’ when in actuality, the data included in the table was for only expeditions nine, and 14 through 40. Thus, the spaceflight incidence in this CLiFF does differ from what was reported previously.

### LIMITATIONS SUMMARY

- The separation of 'day 5' for space adaptation epistaxis versus this condition is largely based on anecdotal experience. • The exact start dates of

several inflight occurrences of epistaxis are unknown. • Literature regarding the untreated worst-case scenario was extremely limited and several parameters are based from subject matter expert opinion. 6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best | 0 | 0 | 0 | 0 | 0 | 0 | 145 | 0 |  | 0 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 0 | 0 | 0 | 0 | 0 | 0 | 145 | 0 | 13 | 0 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
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

| Best |  | 0 | 0 | 0 |  | 0 | 0 | 211 | 356 | 3763 | 0.0946054 | 9.46054 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --------- | ------- |

Case (TBC) Untreated

| Best | 132 | 0 | 0 | 0 |  | 0 | 0 | 211 | 501 | 3763 | 0.133138 | 13.3138 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  | Inter- |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | -------------- | -------- | ------ | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  |  | Communications | personal | Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple | Complex |  |  |  |  | pulmonary |  |  |  |  |  |

Skills Treated Best

|  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 8

Total Human

|  |  | Translation & |  | Total Tasks |  |
| --- | --- | ------------- | --- | ----------- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) |  | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | --- | ---------------------- | ------------- | -------------------- | --- |
|  |  | (microgravity) |  | Condition Tasks Full |  |

Mission Treated Best

| 0 0 | 0 | 0 0 0 | 0 0 | 0 3763 | 0 0 |
| --- | --- | ----- | --- | ------ | --- |

Case (TBC) Untreated Best

| 0 0 | 0 | 0 0 0 | 0 0 | 0 3763 | 0 0 |
| --- | --- | ----- | --- | ------ | --- |

Case (UTBC) Treated Worst

| 0 0 | 0 | 0 0 0 | 0 0 | 0 3763 | 0 0 |
| --- | --- | ----- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 9

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

6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 10

## REFERENCES

Reference

1. Abdelkader, M., S. C. Leong, and P. S. White. 2007. 'Endoscopic control of the sphenopalatine artery for epistaxis: long-term results', J

Laryngol Otol, 121: 759-62.

2. Antonsen, Erik, Tina Bayuse, Rebecca Blue, Vernie Daniels , Melinda Hailey, Sam Hussey, Eric Kerstman, Mike Krihak, Kara Latorella, Jennifer

Mindock, Jerry Myers, Robert Mulcahy, Rebekah Reed, Davis Reyes, Michelle Urbina, and Marlei Walton. 2017. "Evidence Report: Risk of Adverse Health Outcomes and Decrements in Performance due to In-Flight Medical Conditions." In.

3. Barratt, Michael R., Ellen S. Baker, Sam L. Pool, and SpringerLink (Online service). 2019. "Principles of Clinical Medicine for Space Flight." In,

XVIII, 936 p. 362 illus., 268 illus. in color. New York, NY: Springer New York : Imprint: Springer,.

4. Cannon, Jeremy W. 2018. 'Hemorrhagic Shock', New England Journal of Medicine, 378: 370-79.

5. 'Epistaxis 2016: national audit of management'. 2017. J Laryngol Otol, 131: 1131-41.

6. Feusi, B., D. Holzmann, and J. Steurer. 2005. 'Posterior epistaxis: systematic review on the effectiveness of surgical therapies', Rhinology, 43:

300-4.

7. Inglesby, D. C., M. U. Antonucci, M. V. Spampinato, H. R. Collins, T. A. Meyer, R. J. Schlosser, K. Shimada, and D. R. Roberts. 2020.

'Spaceflight-Associated Changes in the Opacification of the Paranasal Sinuses and Mastoid Air Cells in Astronauts', JAMA Otolaryngol Head Neck Surg, 146: 571-77.

8. Kotecha, B., S. Fowler, P. Harkness, J. Walmsley, P. Brown, and J. Topham. 1996. 'Management of epistaxis: a national survey', Annals of the

Royal College of Surgeons of England, 78: 444-46.

9. Krulewitz, N. A., and M. L. Fix. 2019. 'Epistaxis', Emerg Med Clin North Am, 37: 29-39.

10. Levy, R. 1896. 'Fatal Hemorrhage from the Nose and Pharynx', Tr. Colorado M. Soc.: 101-03.

11. Morgan, D. J., and R. Kellerman. 2014. 'Epistaxis: evaluation and treatment', Prim Care, 41: 63-73.

12. Quinn, F. B., Jr. 1961. 'Fatal epistaxis', Calif Med, 94: 88-92.

13. Saile L., Boley L., Kerstman E. 2017. 'Integration RWS ISS STS Observed Incidence V2.'.

14. Seikaly, H. 2021. 'Epistaxis', N Engl J Med, 384: 944-51.

15. Sethi, R. K. V., E. D. Kozin, N. B. Abt, R. Bergmark, and S. T. Gray. 2018. 'Treatment disparities in the management of epistaxis in United

States emergency departments', Laryngoscope, 128: 356-62.

16. Spielmann, P. M., M. L. Barnes, and P. S. White. 2012. 'Controversies in the specialist management of adult epistaxis: an evidence-based

review', Clin Otolaryngol, 37: 382-9.

17. Tessler, I., M. Warman, S. Sharav, H. Rotem Batito, D. Halperin, and O. Cohen. 2020. 'The role of endoscopic sphenopalatine artery ligation

in the management of persistent epistaxis - A 15-year single-center experience', Am J Otolaryngol, 41: 102715.

18. Tunkel, D. E., S. Anne, S. C. Payne, S. L. Ishman, R. M. Rosenfeld, P. J. Abramson, J. D. Alikhaani, M. M. Benoit, R. S. Bercovitz, M. D.

Brown, B. Chernobilsky, D. A. Feldstein, J. M. Hackell, E. H. Holbrook, S. M. Holdsworth, K. W. Lin, M. M. Lind, D. M. Poetker, C. A. Riley, J. S.

Schneider, M. D. Seidman, V. Vadlamudi, T. A. Valdez, L. C. Nnacheta, and T. M. Monjur. 2020. 'Clinical Practice Guideline: Nosebleed (Epistaxis) Executive Summary', Otolaryngol Head Neck Surg, 162: 8-25.

19. Viducich, R. A., M. P. Blanda, and L. W. Gerson. 1995. 'Posterior epistaxis: clinical features and acute complications', Ann Emerg Med, 25:

592-6.

20. Viehweg, T. L., J. B. Roberson, and J. W. Hudson. 2006. 'Epistaxis: diagnosis and treatment', J Oral Maxillofac Surg, 64: 511-8.

22. Walton M, Kerstman E. 2010. ' IMM In-flight Compilation v20100414_Incidence_calculation'.

23. Womack, J. P., J. Kropa, and M. Jimenez Stabile. 2018. 'Epistaxis: Outpatient Management', Am Fam Physician, 98: 240-45.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 11

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

6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 12

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

### SEVA Spaceflight Extravehicular Activity

### SME Subject Matter Expert

### SoP Standard Operating Procedure

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

6/15/2023 2:09:51 PM ICL93_Space Adaptation - Epistaxis Cliff page: 13

---

## Source metadata

```yaml
source_filename: "space-adaptation-epistaxis-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Otolaryngological Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1fJdejmJEVQJyRzEipHWX5RK1m01NORBO/view"
source_drive_id: "1fJdejmJEVQJyRzEipHWX5RK1m01NORBO"
source_sha256: 462eb4db950a1742213f7634ba68cc68b72762e56ec35c86b06e620f37782090
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
