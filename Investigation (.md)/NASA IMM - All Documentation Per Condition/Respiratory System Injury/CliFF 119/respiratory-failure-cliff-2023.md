# Respiratory Failure CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1XlP3E0TpC1O_-7I6Ird08QeqZ4ZYzZ1S/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Respiratory System Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

### ICL80_Respiratory Failure

The definition of respiratory failure is somewhat ambiguous and is used in varying ways in different literature, societies, or even providers. In more recent years, particularly in reference to the COVID pandemic, the term has generally been accepted to include patients that cannot maintain adequate oxygenation or ventilation without support. As a result, the incidence of "respiratory failure" has increased by up to 200% over the last few decades, primarily driven by a broadened definition. Typically this condition is broken into hypoxemic or hypercarbic depending on the underlying process. Countless conditions can result in respiratory failure and range from short and transient to chronic and life long. In spaceflight this is anticipated to be the end state of one of many medical conditions including infection, toxic exposure, or trauma. The severity of this condition is also broad, ranging from mild and requiring minimal low flow oxygen to severe and requiring endotracheal intubation and invasive mechanical ventilation.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

No spaceflight literature was identified

### ANALOG LITERATURE

No relevant analog literature was found regarding respiratory failure. There are studies evaluating ARDS among service members with specific injuries such as chemical exposure or burns but these were not relevant to this condition

### TERRESTRIAL LITERATURE

Many studies exist evaluating the rate of respiratory failure in terrestrial cohorts however the vast majority are specific to a certain disease process.

For example, there is extensive critical care literature on the incidence and outcomes of ARDS. This was not relevant for our definition of respiratory failure as it includes patients with severe disease and high mortality rate. The two large population studies, Kempker, JA et al. 2020 and Stefan, MS et al. 2013 were the most generalizable to the astronaut corps as they include all diagnosis of respiratory failure and report incidence by age.

However, Stefan, MS et al. 2013 was used as our incidence because the dataset presented was more complete and allowed for a more accurate calculation of incidence.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

Mean 0.00189 events per person-year and SD 4.188E-6

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate given the terrestrial US population evidence for those aged 18-44, under an uninformative prior, is Gamma(shape=203662.1, rate=107757736) with mean 0.00189 and SD 4.188E-6. Stefan 2012 – Table 2 reports 189 per 100 thousand person years in 2009 for those aged 18-44 years. Going back to Table 1, we see that there were 209,052 hospitalized patients in that age range in

2009. 10.9% of 1,917,910 patients. This translates to 110609524 person-years. IR: 1.89E-3 (95%CI: 1.882E-3, 1.898E-3)

6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 1

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.00189 SD 4.188E-06 Gamma (Shape): 203662 (Rate): 1.07758E+08 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Rubenfeld, GD et al. 2005 Terrestrial 2 Kempker, JA et al. 2020 Terrestrial 3 Stefan, MS et al. 2013 Terrestrial 3 There are numerous retrospective, large population studies evaluating the rates of respiratory failure. Several of these were reviewed to determine the incidence of respiratory failure among astronaut crew members in flight. These studies typically evaluated patients with a specific pathology such as lung injury, infection, or ARDS. Rubenfel, GD et al. 2005 was one such study that evaluated all patients with acute lung injury, a precursor to ARDS. However, this cohort has more severe illness than our definition for acute respiratory failure and thus was not used to estimate incidence.

In this condition we are evaluating the rate of respiratory failure from all etiologies as opposed to a specific disease process. The most useful literature was from Kempker, JA et al. 2020 and Stefan, MS et al. 2013 which evaluated the incidence of the diagnosis of respiratory failure among hospital discharges. This data is specific to hospital admissions, however the rates of discharge with home oxygen were much lower prior to the start of the COVID pandemic and the standard of care was to admit all patients with new oxygen requirements to the hospital. Both datasets reported incidence by age group but due to incomplete data reporting, we were unable to accurately scale Kempker, JA et al. 2020 by age. Stefan reported an incidence of 189/100,000 for ages 18-44 which is younger than the range of the astronaut corps but also includes patients with medical comorbidities that would have been screened out. This terrestrial incidence likely overestimates the true incidence of respiratory failure in spaceflight based on these medical conditions. The age range 18-44 was felt to be most representative of spaceflight incidence. 6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Preflight screening includes annual medical examinations which include pulmonary function tests with vital signs, spirometry and diffusion capacity.

This evaluates for underlying pulmonary pathology however acute respiratory failure can also be spontaneous from direct insult or infection.

### BEST CASE SCENARIO DEFINITION

Respiratory failure requiring low flow oxygen such as nasal cannula, facemask, or non-rebreather at a flow rate of less than 10LPM to maintain oxygen saturation

### WORSE CASE SCENARIO DEFINITION

Respiratory failure requiring high flow oxygen at >10LPM or ventilatory support with noninvasive ventilation, or invasive ventilation CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Respiratory Distress Syndrome, Acute

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Kempker, JA et al. 2020 reports rates of any ventilatory support (invasive or non-invasive) ventilation as 35% of all admissions for respiratory failure. This is most consistent with a WC scenario definition when compared to other literature. This data does exclude high flow nasal cannula however this modality was not nearly as prevalent in 2017 as it is in more recent years and as such likely represents and extremely small proportion of patients. TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Kempker, JA et al. 2020 Terrestrial 3 Stefan, MS et al. 2013 Terrestrial 2 Kempker, JA et al. 2020 was used as the proportion of BC to WC scenarios with a rate of 35% of patients requiring mechanical ventilation (NIV or IV). This study does not include high flow nasal cannula which has become more commonly used in the last several years but also may not be available in flight. One limitation to this study was that the majority of patients requiring ventilatory support were above the age of 60 (~65%) thus this proportion may overestimate the rate of WC scenario. However, Stefan, MS et al. 2013 reported a rate of 49.7% of patients requiring ventilatory support. Their cohort was much older and had a higher mortality rate and thus was not used to determine proportion of BC/WC scenario. 6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

Condition Case Scenario Composite Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Mean 0.00189 events 65 - 65 100 2.5 50 24 168 0 8.5 18 0 12 Case (TBC) per person-year and SD 4.188E-6 Treated Worst 35 - 35 100 2.5 50 168 360 0 100 100 23 36 Case (TWC) Untreated Best N/A N/A N/A 2.5 100 48 240 100 50 100 5 15 Case (UTBC) Untreated N/A N/A N/A 2.5 100 240 1152 100 100 100 36 100

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Diagnosis of this condition with likely be the result of symptomatic changes in respiration including cough, chest pain, or shortness of breath.

Determination of underlying etiology will guide management and be dependent on history and physical exam. Lung imaging can aide in the diagnosis and may be obtained with radiography or ultrasonography. In tandem with diagnosis, patient's oxygenation or ventilation will need to be supported depending on severity and cause. Typically a patient is started on low flow oxygen with increasing amounts of support as needed, unless in respiratory distress in which case support may be started with mechanical ventilation and down titrated as needed. Therapies can range from nasal cannula to endotracheal intubation with mechanical ventilation depending on disease severity. Airway and respiratory care is complex and requires expert skill level for diagnosis and management.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The definition of the BC scenario was respiratory failure requiring low flow oxygen such as nasal cannula, facemask, or non-rebreather at a flow rate of less than 10LPM to maintain oxygen saturation. The duration of illness was determined to be from 1-7d. This range was based on Stefan, MS et al. 2013 and expert opinion. Respiratory failure can be due to infection, which may require days of respiratory support or a brief insult such as exposure to a toxic substance that is self limited once the toxin has been removed. Stefan, MS et al. 2013 reported a mean hospital LOS of 7.1 days which included a large number of patients requiring mechanical ventilation, a much more severe disease process than the BC scenario. This was chosen as the maximum duration with 24h chosen to as the minimum duration to account for more transient hypoxia. The RTDC surrogate for this condition is the need for hospitalization and the rate was determined to be 8.5%-18% based on Banerjee, J et al . 2021 and Grutters, LA et al.

2020. Traditionally, any acute hypoxia was considered an indication for inpatient treatment, both to treat the underlying condition but also to

provide low-flow oxygen which is difficult to get arranged during an emergency or primary care visit. However, with the COVID 19 pandemic limiting open beds for inpatient treatment, many hospitals have started arranging for home oxygen for otherwise healthy patients with mild hypoxia. These patients have varying degrees of monitoring from frequent phone calls to long distance telemetry and are a reasonable surrogate for an astronaut crew member that can receive oxygen therapy and close monitoring while in flight. Banerjee, J et al. 2021 and Grutters, LA et al. 2020 are two more credible studies evaluating patients with hypoxia from COVID 19 requiring home oxygen and report outpatient treatment failure requiring hospitalization for 8.5-18% respectively. This is emerging data, however it is expected to change the approach to the acutely hypoxic patient with a reversible cause in the future. More importantly it is very representative of a crew member who can receive some therapies in flight and may not require RTDC. LOCL was determined to be between 0 and 12%. Kempker, et al. 2020 reported that patients without comorbidities requiring respiratory support had a 0% mortality rate. The overall mortality rate of patients with respiratory failure not requiring mechanical ventilation was 12%. TREATED WORST CASE SCENARIO (TWC) COMMENTS The worst case scenario was defined as respiratory failure requiring high flow oxygen at >10LPM or ventilatory support with noninvasive ventilation, or invasive ventilationn. The duration of this condition was determined to be between 7-25 days based on the average hospital LOS reported in Stefan, MS et al. 2013 of 7.1 days, and the average hospital LOS for mechanically ventilated patients which was 15d during the peak year reported in Kempker, JA et al. 2020. The RTDC was determined to be 100% by definition and RTDC surrogate. LOCL was determined to be between 23 and 36%. Phua, J et al. 2009 reported a pooled mortality for all patients with ARDS requiring ventilation among RCTs of 36% however this may be an overestimate of the astronaut corps and thus was chosen as the upper limit. Kempker, JA et al. 2020 reported a mortality rate of 23% for all patients with the diagnosis of respiratory failure and required mechanical ventilation (NIV or IV) which was chosen as the lower limit.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The BC scenario is defined as respiratory failure requiring low flow oxygen such as nasal cannula, facemask, or non-rebreather at a flow rate of less than 10LPM to maintain oxygen saturation. Duration was based on the TBC scenario and expert opinion to estimate a range of 2-10d to account for prolonged recovery without intervention. The RTDC was estimated to be 50-100% based on expert opinion of the need for medical evacuation if no oxygen interventions are available. LOCL was determined to be between 5-15% based on BC literature and adjustment with expert opinion on the impact of low flow oxygen on mortality UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The WC scenario is defined as respiratory failure requiring high flow oxygen at >10LPM or ventilatory support with noninvasive ventilation, or invasive ventilation. Duration was determined to range from 10d to 48d. The minimum duration was based on the treated scenario and expert opinion. The maximum duration was based on Herridge, M 2011 which reviewed hospital discharges of ARDS and showed an average hospital LOS of 48d. This cohort includes patients with numerous comorbidities and severe disease and thus was chosen as the maximum duration to represent the untreated condition of a patient with moderate disease and no comorbidities. RTDC was 100% based on the definition and RTDC surrogate.

LOCL was determined to range from 36% as reported by Phua, J et al. 2009 as the pooled mortality of ARDS and 100% given the disease severity and likelihood of death if untreated. 6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 5

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ----------------------- | ----------- | --------- | --- |
| Stefan, MS et al. 2013 | Terrestrial |  |  |
| Kempker, JA et al. 2020 | Terrestrial |  |  |

3

| Herridge, M 2011 | Terrestrial |  |  |
| ---------------- | ----------- | --- | --- |
| Expert Opinion | Terrestrial |  |  |

The LOC for duration received a score of 3. Stefan, MS et al. 2013 and Kempker, JA et al. 2020 are large retrospective cohort population studies used extensively in this CLIFF as they look at all causes of ARF and provide incidence, hospital LOS, and mortality. Herridge, M 2011 was a review study that reported LOS for ARDS. These studies are well powered but include the US population which is much older and less healthy than the astronaut corps which limits accuracy. Expert opinion was used with these studies to estimate the untreated scenarios in the absence of other data.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------------ | ----------- | --------- | --- |
| Banerjee, J et al. 2021 | Terrestrial |  |  |
| Grutters, LA et al. 2020 | Terrestrial | 2 |  |
| Expert Opinion | Terrestrial |  |  |

RTDC was primarily determined from the RTDC surrogate and condition definition. The TBC scenario RTDC however was determined based on Banerjee, J et al. 2021 and Grutters, LA et al. 2020 which evaluated the rates of hospitalization for patients in ARF discharged from the emergency department on oxygen. This is emerging data and outside the standard of practice currently, but will likely guide the management of acute hypoxia in the future and is directly applicable to this medical condition in flight. The remainder of RTDC was determined with expert opinion. In all the LOC in the RTDC is low given the unknown variables.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ----------------------- | ----------- | --------- | --- |
| Kempker, JA et al. 2020 | Terrestrial |  |  |
| Phua, J et al. 2009 | Terrestrial | 3 |  |
| Expert Opinion | Terrestrial |  |  |

LOCL in this condition was based on 2 major studies. Kempker, JA et al. 2020 reported mortality rate among patients with ARF, both with and without mechanical ventilation. This study is well powered and accurate to our condition but may include a less healthy cohort than the astronaut population. Phua, J et al. 2009 was a meta analysis that evaluated mortality rate for patients with ARDS and reported a pooled mortality. This data is well powered but does not exactly follow the definitions of BC and WC scenario for this condition. Expert opinion was used with these studies to estimate the untreated scenarios in the absence of other data.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Acute respiratory failure is the inability to adequately oxygenate or ventilate and is the final common pathway of a number of different medical conditions. Of particular consequence is acute respiratory distress syndrome (ARDS) which is a complex, multifactorial inflammatory process with a mortality rate of approximately 40%. In an austere environment this may not be possible to manage due to limitations of resources and personnel. A medical officer will need to have an extensive medical knowledge and clinical experience to adequately manage this condition during our defined DRM. Unlike other conditions, the best case and worst case scenarios for this condition are broken up by etiology rather than disease process severity. The definition of the best case scenario is acute respiratory distress syndrome or respiratory failure secondary to infection. The definition of the worst case scenario is acute respiratory distress syndrome or respiratory failure secondary to any of the following: airway burns, pneumonitis, reactive airway disease, or toxic inhalation exposure. As the end state of many other medical conditions, some resources (e.g. antibiotics) were not

| 6/15/2023 2:03:50 PM | ICL80_Respiratory Failure Cliff |  | page: 6 |
| -------------------- | ------------------------------- | --- | ------- |
allocated in this CRT as they are included elsewhere.

- CNES: Acute Respiratory Distress Syndrome (ARDS)

### Diagnostic Scope and Resourcing

Diagnostic evaluation of this condition in the best and worst case scenario is the same. Respiratory failure and ARDS can be due to a number of cardiopulmonary and extra thoracic processes. Evaluation starts with a thorough history and physical exam however depending on severity, a crew member may not be able to provide a comprehensive history. Review of crew member events and tasks in the preceding 24h may be vital, particularly in the setting of toxic inhalational exposure. ARDS can be the downstream result of a number of infectious and inflammatory processes, thus an extensive work up including laboratory evaluation (with blood gasses, electrolytes, and blood counts), EKG, and cardiopulmonary ultrasound is required. A thorough diagnostic phase helps to identify the severity of failure and possible reversible conditions which then guides management. As with all conditions, the diagnostic and management phases will likely be occurring simultaneously not to cause further harm to the patient. This approach is similar but more streamlined than the terrestrial approach to management which will likely include radiography, central venous access, and ICU level monitoring. More advanced diagnostic modalities such as right heart catheterization, bronchoscopy, biopsy, etc... were determined to be too resource intensive to be worth including given their marginal benefit.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 2.5 hours CP1 WC (Treated or Untreated): 2.5 hours The highest scope of practice necessary is 5 (attending physician) due to the complexity in management of this condition

### Treatment Scope and Resourcing

In the best case and worst case scenario treatment is similar. The mainstay of management of this condition is respiratory and ventilatory support as needed. This condition requires resourcing of nasal cannula oxygen, facemask non-rebreather, positive pressure ventilation, and intubation for severe disease. Rapid sequence intubation medication and equipment are required, as are sedation medication for patient comfort and vent synchrony. Supportive measures for the intubated patient include enteral nutrition, maintenance fluids, DVT prophylaxis, and frequent if not constant monitoring of the crew member's condition. After prolonged discussion other adjuncts including bronchodilators, corticosteroids, and mucolytics were included to manage the broad presentations of this condition. In the best case scenario resources were allocated for 7 days of intubation and in the worst case resources were allocated for 14 days based on average time of intubation. Infectious causes of respiratory failure were agreed to be more rapidly reversible in the astronaut population than alternative causes listed in the WC scenario. DVT prophylaxis is resourced to continue for several additional days after extubation due to the venous stasis associated with flight and the assumed ongoing recovery from critical illness. Proning is used terrestrially with benefit particularly in ARDS and may have a role in partial gravity environments. In microgravity proning does not provide benefit however many aspects of ventilation and perfusion are actually improved over terrestrial physiology.

As with other critical care conditions, in an attempt to optimize outcomes and mass, volume, and power these durations were chosen. A crew member requiring longer than 1-2 weeks of intubation while in flight will either be medically evacuated to definitive care or by that time will approach medical futility. More aggressive or labor intensive interventions such as paralysis or ECMO were excluded from this condition due to the necessary resources and training as well as marginal benefits.

### Communications and Support Needs

Maximum ground support communication including real-time audio and visual is required for both the best case and worst case scenarios of this condition given the disease complexity and severity.

## REFERENCES

Annane, D., et al. (2017). "Guidelines for the diagnosis and management of critical illness-related corticosteroid insufficiency (CIRCI) in critically ill patients (Part I): Society of Critical Care Medicine (SCCM) and European Society of Intensive Care Medicine (ESICM) 2017." Intensive Care Med 43(12): 1751-1763. Ely, E. W., et al. (1996). "Effects on the Duration of Mechanical Ventilation of Identifying Patients Capable of Breathing Spontaneously." The New England Journal of Medicine. Fan, E., et al. (2017). "An Official American Thoracic Society/European Society of Intensive Care Medicine/Society of Critical Care Medicine Clinical

- Practice Guideline: Mechanical Ventilation in Adult Patients with Acute Respiratory Distress Syndrome." Am J Respir Crit Care Med 195(9): 1253-

1263. Griffiths, M. J. D., et al. (2019). "Guidelines on the management of acute respiratory distress syndrome." BMJ Open Respir Res 6(1): e000420.

McClave, S. A., et al. (2016). "Guidelines for the Provision and Assessment of Nutrition Support Therapy in the Adult Critically Ill Patient: Society of Critical Care Medicine (SCCM) and American Society for Parenteral and Enteral Nutrition (A.S.P.E.N.)." JPEN J Parenter Enteral Nutr 40(2): 159- 211. Meduri, G. U., et al. (2007). "Methylprednisolone infusion in early severe ARDS: results of a randomized controlled trial." Chest 131(4): 954-963.

Morris, P. E., et al. (2016). "Standardized Rehabilitation and Hospital Length of Stay Among Patients With Acute Respiratory Failure: A Randomized Clinical Trial." JAMA 315(24): 2694-2702.

Papazian, L., et al. (2010). "Neuromuscular Blockers in Early Acute Respiratory Distress Syndrome." The New England Journal of Medicine.

Rochwerg, B., et al. (2017). "Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure." Eur Respir J 50(2).

The National Heart, L., and Blood Institute Acute Respiratory Distress Syndrome (ARDS) Clinical Trials Network (2006). "Efficacy and Safety of Corticosteroids for Persistent Acute Respiratory Distress Syndrome." The New England Journal of Medicine.

Villar, J., et al. (2020). "Dexamethasone treatment for the acute respiratory distress syndrome: a multicentre, randomised controlled trial." The Lancet Respiratory Medicine 8(3): 267-276. 6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 7

### IMM CLIFF RECONCILATION COMMENTS

There is no prior IMM CLIFF for this condition. The prior version does include choking and respiratory infection but those conditions are not consistent with respiratory failure.

### LIMITATIONS SUMMARY

- Acute respiratory failure can have some ambiguity as to its definition. We have chosen to define it as a patient unable to maintain oxygen

saturation above 90% without support or meet ventilatory needs. This includes oxygen supplementation such as nasal cannula, face mask, or high flow nasal cannula, and ventilatory support such as non-invasive and invasive mechanical ventilation •Incidence calculation only included patients aged 18-44 in terrestrial populations with respiratory failure. This range is younger than the astronaut corps which may underestimate incidence.

However, the patients included in the terrestrial dataset have significant comorbidities that are disqualifying or pre-screened conditions which likely overestimates incidence. This data was the best data available and thus used as the rate of medical events despite these limitations. •Terrestrial data reporting the prevalence of high flow oxygen and/or ventilatory support are inflated by older and more medically complex patients which makes the BC/WC proportion likely a significant overestimate of what would be expected in flight. Other terrestrial data had higher proportions of severe disease (WC scenario) so the lowest identified proportion was used but still likely is an overestimate of BC/WC split. •The etiology of respiratory failure is varied and may be due to an acute insult, infection, or chronic disease. Each cause has different complication rates and a wide variety of outcomes. This condition aims to address all causes as a whole but this may not accurately represent the duration, RTDC, or LOCL depending on the underlying pathophysiology. •Outpatient treatment of mild respiratory failure requiring low volume, low flow nasal cannula support is limited but gaining momentum during the COVID 19 pandemic. Emerging data may change the estimated RTDC or LOCL, or may recommend against outpatient treatment altogether. •High flow NC, Non-invasive ventilation, and mechanical ventilation all meet criteria for the WC scenario however each modality has very different complication and mortality rates than one another. They are grouped to represent a higher level of resources required for treatment but may not have accurate LOCL or RTDC given the homogeneity of this group. This is similar in the BC scenario with includes low flow nasal cannula and non-rebreather •This condition overlaps with or is the end state of many other conditions evaluated in this evidence library which may complicate the accuracy of the ranges for this condition 6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
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

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (TBC) Untreated

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (UTBC) Treated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  |  | Inter- |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | -------------- | -------- | ------ | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  |  | Communications | personal | Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple | Complex |  |  |  |  | pulmonary |  |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| -------------------- | --- | --- | --- | -------------------------- | ------------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| 6/15/2023 2:03:50 PM |  |  |  |  | ICL80_Respiratory Failure Cliff |  |  |  |  |  |  | page: 9 |
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

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTBC) Treated Worst

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 10

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

6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 11

## REFERENCES

Reference Banerjee, J., et al. (2021). "Mortality and Readmission Rates Among Patients With COVID-19 After Discharge From Acute Care Setting With Supplemental Oxygen." JAMA Netw Open 4(4): e213990.

Barratt, M. R., et al. (2020). Principles of Clinical Medicine for Space Flight. New York, NY Grutters, L. A., et al. (2020). "Home telemonitoring makes early hospital discharge of COVID-19 patients possible." J Am Med Inform Assoc 27(11): 1825-1827. Herridge, M. S. (2011). "Recovery and long-term outcome in acute respiratory distress syndrome." Critical Care Clinics 27(3): 685-704.

Kempker, J. A., et al. (2020). "The Epidemiology of Respiratory Failure in the United States 2002-2017: A Serial Cross-Sectional Study." Crit Care Explor 2(6): e0128. Phua, J., et al. (2009). "Has mortality from acute respiratory distress syndrome decreased over time?: A systematic review." Am J Respir Crit Care Med 179(3): 220-227. Rubenfeld, G. D., et al. (2005). "Incidence and outcomes of acute lung injury." N Engl J Med 353(16): 1685-1693.

Stefan, M. S., et al. (2013). "Epidemiology and outcomes of acute respiratory failure in the United States, 2001 to 2009: a national survey." J Hosp Med 8(2): 76-82.

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

### EL Evidence Library

### EMCL Exploration Medical Condition List

6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 12

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

### SEVA Spaceflight Extravehicular Activity

### SME Subject Matter Expert

6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 13

### SoP Standard Operating Procedure

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

6/15/2023 2:03:50 PM ICL80_Respiratory Failure Cliff page: 14

---

## Source metadata

```yaml
source_filename: "respiratory-failure-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Respiratory System Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1XlP3E0TpC1O_-7I6Ird08QeqZ4ZYzZ1S/view"
source_drive_id: "1XlP3E0TpC1O_-7I6Ird08QeqZ4ZYzZ1S"
source_sha256: bd799ff5e964c9ef657ce8f784e64090c79db66e544b0147728d2cd00d363453
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
