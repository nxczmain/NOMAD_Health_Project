# Trauma Minor Head

[View original PDF](https://drive.google.com/file/d/1Yn68MJp2lzct-8ttUycrdJMbs7OimMQs/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Head Injury/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Overview](#overview)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL114_Trauma - Minor Head This CLiFF includes concussion, post-concussion syndrome, and non-operative intracranial bleeds resulting in concussive or post-concussive symptoms. Most sources consider a concussion to be a mild, temporary, traumatic brain injury. Concussions are cause by impact with the head or body that causes the brain to move rapidly within the skull (CDC, 2021). Symptoms of concussion vary, but can include headache, nausea, vomiting, fatigue, changes in vision, confusion, amnesia, dizziness, changes in speech and response time, and forgetfulness (Mayo, 2021). Concussive symptoms typically resolve within 3 months. Post-concussive syndrome involves persistent concussive symptoms. (Mayo, 2021)

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Spaceflight data regarding minor head trauma as defined by this CLiFF are lacking. Scheuring et al, 2009 provides an incidence of head trauma of 34,026 events/100,000 person-years, but this is felt to be a gross overestimation as it includes all head injuries, not exclusively those resulting in the aforementioned. Therefore, it was not used to inform the incidence for this CLiFF.

### ANALOG LITERATURE

Levin, 2021 provides unpublished analog incidence compiled from University-National Oceanographic Laboratory System data. It provides an incidence of 869 events/100,000 person-years. Although the crew characteristics from UNOLS data may be a closer approximation to the astronaut corps (i.e. medical pre-screening), the ocean environment is inherently different from the spaceflight environment. Rough seas present more opportunities for head injuries in general (and possibly TBI). Thus, these data were felt to be an overestimate of the risk in spaceflight and this source did not inform the incidence for this condition. This was not used to inform the incidence for this CLiFF.

### TERRESTRIAL LITERATURE

Data on the terrestrial incidence of minor head trauma is reported as 212 events / 100,000 person-years for the 2010 year [Marin, 2014]. These authors conducted a population-based descriptive epidemiological study of TBI visits to EDs in the United States from 2006 through 2010, using the Nationwide Emergency Department Sample (NEDS) database, a nationally representative data source including 25 million to 50 million visits from more than 950 hospitals each year. US Census data was used to determine the number of person years for 2010. Because NEDS database represented a 20% stratified sampling of emergency departments, the authors applied prescribed weighting procedures to account for the unequal sampling probabilities, stratification, and clustering and to produce a national estimate of 212, with a 95% confidence interval of 195-230 events per 100,000 person-years.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

- Mean: 0.001937

- SD: 3.911E-6

### INCIDENCE SUMMARY

The incidence of this condition in microgravity was assumed to be 0. Therefore, the incidence should be applied only to surface operations. 11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 1

Similarly, during an EVA, the helmet would protect against head injuries. Currently MEDPRAT does not have the capability to exclude surface EVA time from surface operations, but in the future, this is recommended when the capability exists. The Marin et al, 2014 Research Letter – Trends in Visits for Traumatic Brain Injury to Emergency Departments in the United States was used to inform the incidence for this condition. Using Concussion numbers for 2006 and 2010, we see there were 108,993 and 142,376 events with incidence rates of 174 and 212 kpy, respectively.

This implies person-years of 62,639,655 and 67,158,491 respectively. 2006 IR: 1.74E-3 (95%CI: 1.73E-3, 1.75E-3) and 2010: 2.12E-3 (95%CI: 2.109E-3, 2.131E-3).The posterior distribution for the incidence rate given the terrestrial evidence, under an uninformative prior, is Gamma(shape=245292.1, rate=126635068) with mean 0.001937 and SD 3.911E-6.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

UNK Segment Surface Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.001937 SD 3.911E-06 Gamma (Shape): 245292 (Rate): 1.26635E+08 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Levin, 2021 Analog 2 Marin et al, 2014 Terrestrial 3 Scheuring et al, 2009 Spaceflight 1 Levin, 2021 provides unpublished analog incidence compiled from University-National Oceanographic Laboratory System. Although this represents ocean vessel crewmembers who received medical pre-screening, and occurs in confined ocean vessels, it is less applicable to exploration missions because of a difference in environment. The UNOLS data is anticipated to overestimate incidence of head injuries, based on increased risk of head injury during rough sea conditions. Marin et al, 2014 provides incidence of various head injuries (including concussion) between 2006-2010 from data extracted from the Nationwide Emergency Department Sample (NEDS) database. This study included all age groups. Scheuring et al, 2009 evaluated the incidence musculoskeletal in-flight injuries among astronauts from Mercury - Expedition 13 of the ISS Program. Head injuries ("minor trauma" to the head) were not categorized by type limiting the applicability to the best and worst-case scenarios in this CLiFF. 11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Engineering measures are taken to prevent injury to crewmembers, including head injury. Further, on EVA the helmet of the EMU provides protection from head injury.

### BEST CASE SCENARIO DEFINITION

Head trauma resulting in a concussion that impacts mission objectives for less than 2 weeks (this includes concussive symptoms caused by non- surgical intracranial bleeds meeting the above criteria).

### WORSE CASE SCENARIO DEFINITION

Head trauma resulting in post-concussive syndrome interfering with mission objectives or requiring medications for longer than 2 weeks.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Concussion Post-Concussive Syndrome Intracranial Bleed (Non-surgical)

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The prevalence of post-concussive syndrome (PCS) in a well-designed prospective trial that observed 90 mild TBI patients compared to non-TBI trauma controls was found to be 5.7% at three month follow up, as diagnosed by Impact Post-Concussion Symptom Inventory (Ponsford et al, 2011). In another prospective study, using the DSM-IV criteria, the rate of PCS was diagnosed in 19 of 161 patients (11.8%) at three-month follow up (Boake et al, 2005). Finally, in a prospective cohort of 107 mild TBI patients, 24 (22%) met criteria for PCS at 3-months as determined by the BIPQ questionnaire (Hou et al, 2012). These studies were pooled to reveal a rate of post-concussive syndrome after mild traumatic brain injury of 13%. It should be noted that the definition of "traumatic brain injury" varies in the literature and between the three aforementioned studies. Ponsford et al, 2011 used the following inclusion criteria: (1) recent ( < 24 h) history of trauma or acceleration-deceleration movement applied to the head resulting in loss of consciousness (LOC) < 30 min, post-traumatic amnesia (PTA) < 24 h, and a Glasgow Coma Scale (GCS) score of 13–15 on presentation to the ED; (2) age 18 years or over; and (3) English-speaking. Participants were excluded if they: (1) were intubated or required general anesthesia following injury; (2) had a breath alcohol reading > 0.05 mg/L at the time of recruitment; (3) were under the influence of illicit substances at the time of injury; (4) had focal neurological signs, seizures, and/or intracerebral abnormalities on CT; (5) had a dominant upper limb injury that precluded them from using a computer mouse; (6) were under spinal precautions and not able to sit upright; (7) had a history of previous cognitive impairment, neurological illness, significant alcohol or drug abuse, or other psychiatric impairment currently affecting daily functioning; or (8) were unavailable for follow-up. (Ponsford et al, 2011) Hou et al, 2012 had similar criteria, but notably the allowable time for PTA amnesia differed: A traumatically induced physiological disruption of brain function, as manifested by at least one of the following: (1) any loss of consciousness; (2) any loss of memory for events immediately before or after the accident; (3) any alteration in mental state at the time of the accident (e.g., feeling dazed, disoriented or confused); and (4) lack of focal neurological deficit(s), but where the severity of the injury did not exceed the following: (1) loss of consciousness not more than 15 min; (2) an initial Glasgow Coma Scale (GCS) score of 13-15; and (3) post- traumatic amnesia not more than 60 min. (Hou et al, 2012) Boake et al, 2005 had the most liberal definition of TBI which included any GCS greater than 8. Inclusion criteria included: nonpenetrating TBI; lowest post resuscitation Glasgow Coma Scale (GCS) score >8 ; computed tomography (CT) scan of the brain performed within 24 hours of arrival; and if mild TBI, no surgery under general anesthesia during the admission. (Boake et al,

2005) The rate of PCS in the literature is highly variable, with some studies reporting rates as high as 58% using the Rivermead Post-Concussion

Questionnaire (Theadom, 2016), or 64% when using ICD-10 codes (Boake et al, 2005). These studies were excluded however, as there is a very high rate of variability with ICD-10-derived estimates ranging from 6-64% (Polinder, 2018) and several studies suggesting the Rivermead Questionnaire may have very low specificity for concussion related symptoms (Dean, 2012) (Voormolen, 2019).

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Ponsford et al, 2011 Terrestrial 2 Hou et al, 2012 Terrestrial 2 Theadom, 2016 Terrestrial 0 Ponsford et al, 2011, Boake et al, 2005, and Hou et al, 2012 were all ranked as 2. These studies were well designed but are all in small terrestrial populations, and have an earliest follow-up assessment at 3 months (rather than 2 weeks as defined in this CLiFF) which may underestimate the worst-case scenario probability at 2 weeks. Theadom, 2016 utilized the Rivermead Post-Concussion Questionnaire, which was shown in other studies to have a high rate of false-positives for post concussion syndrome (45% of a healthy cohort) (Voormolen, 2019) and poor specificity to symptoms from head trauma (Dean, 2012). 11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best Mean: 0.001937 87 - 87 100 0.783 32.979 24 168 0 7.4 10.3 0 0.6

- Case (TBC) SD: 3.911E-6

Treated Worst 13 - 13 100 0.783 55.6737 336 744 0 10.3 17.8 0 0.6 Case (TWC) Untreated Best N/A N/A N/A 0.783 41.9081 24 336 0 7.4 10.3 0 0.6 Case (UTBC) Untreated Worst N/A N/A N/A 0.783 64.6027 336 8760 0 10.3 17.8 0 0.6 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The RTDC surrogate for this condition is hospitalization. The literature doesn't elucidate a difference in need for hospitalization based on prior treatment vs. no prior treatment. Thus, the RTDC probabilities for the treated and untreated best-case scenarios are the same. Likewise, the RTDC probabilities for the treated and untreated worst-case scenarios are the same. The LOCL probability is the same for all scenarios because neither treatment, nor development of post-concussive syndrome (the worst-case scenario), are expected to affect the probability of LOCL for this condition. See detailed comments for each scenario below.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Minor head trauma with medical evaluation typically resolves in 7 days based on a retrospective study of NCAA collegiate football players (McCrea et al, 2003) but symptoms can resolve as quickly as 24 hours (McCrea et al, 2003). Therefore, the duration for this scenario was assigned 24-336 hours (1-7 days). RTDC (surrogate measure of hospitalization) is required in a minority of cases. Babcock et al, 2013 report that 7.4% of mild traumatic brain injury cases (as defined by the following inclusion criteria: Blow to the head or acceleration/deceleration movement of the head resulting in 1 or more of the following: LOC < 30 min, amnesia < 24 hour or any alteration in mental state, and GSC of 13 or more 30 minutes or more after injury) required hospitalization. Notably, this study was exclusive to children and adolescents, which limits it's generalizability to the astronaut corps. Rhame et al, 2021 reported a hospitalization rate of 10.3% for mild TBI patients in a retrospective chart review from Jan 2016-Dec 2017 for patients admitted through the University of Cincinnati Emergency Department under their mild TBI observation protocol. Inclusion criteria included: mild TBI with GCS of 14 or 15 within 24 hours of injury. Non-surgical intracranial bleeds were included unless they met exclusion criteria.

- Exclusion criteria were: requirement for neurosurgery, focal neurologic deficits, coagulopathy, admission required for other injuries, abnormal vital

signs, other active comorbid conditions, and non-impact seizures. (Rhame et al, 2021) Thus, the RTDC range was assigned 7.4-10.3% for this scenario. Mortality following minor head trauma is very rare. In a retrospective study of 2484 patients with mild head injury presenting to an Emergency Department in Madrid, Spain between December 1991 and April 1993, there was an overall mortality rate of 0.6% (15 deaths). Inclusion criteria included: age > 15 years, GCS of 13-15, experienced a blow to the head independently of whether there were or were not signs of brain dysfunction, such as a transient loss of consciousness (LOC), posttraumatic amnesia (PTA) or associated injuries. Patients were excluded if they had isolated facial trauma, those deteriorating to a GCS of less than 13 within 4h of injury and those showing a lucid interval who were referred from local hospitals after they developed neurological deterioration. (Gomez et al, 1996). Therefore, the LOCL probability was assigned 0-0.6%. Note, this is the same as the probability for all other scenarios in this CLiFF neither treatment, nor development of post-concussive syndrome are expected to affect the probability of LOCL for this condition.

TREATED WORST CASE SCENARIO (TWC) COMMENTS Persistent symptoms after minor head trauma are defined as starting at 14-days duration, and measurable deficits in cognition and memory usually resolve by one month (Barbosa et al, 2012). Thus the duration was assigned 336-744 hours (14-31 days). Rhame et al, 2021 reported a hospitalization rate of 10.3% for mild TBI patients in a retrospective chart review from Jan 2016-Dec 2017 for patients admitted through the University of Cincinnati Emergency Department under their mild TBI observation protocol. Inclusion criteria included: mild TBI with GCS of 14 or 15 within 24 hours of injury. Non-surgical intracranial bleeds were included unless they met exclusion criteria. Exclusion criteria were: requirement for neurosurgery, focal neurologic deficits, coagulopathy, admission required for other injuries, abnormal vital signs, other active comorbid conditions, and non-impact seizures. (Rhame et al, 2021) Babcock et al, 2013 report that 17.8% of mild traumatic brain injury cases (as defined by the following inclusion criteria: Blow to the head or acceleration/deceleration movement of the head resulting in 1 or more of the following: LOC < 30 min, amnesia < 24 hour or any alteration in mental state, and GSC of 13 or more 30 minutes or more after injury) that went on to develop post- concussive syndrome required hospitalization in a retrospective review. Notably, this study was exclusive to children and adolescents, which limits it's generalizability to the astronaut corps. Thus the RTDC probability for this scenario was assigned 10.3-17.8%. Mortality following minor head trauma is very rare. In a retrospective study of 2484 patients with mild head injury presenting to an Emergency Department in Madrid, Spain between December 1991 and April 1993, there was an overall mortality rate of 0.6% (15 deaths). Inclusion criteria included: age > 15 years, GCS of 13-15, experienced a blow to the head independently of whether there were or were not signs of brain dysfunction, such as a transient loss of consciousness (LOC), posttraumatic amnesia (PTA) or associated injuries. Patients were excluded if they had isolated facial trauma, those deteriorating to a GCS of less than 13 within 4h of injury and those showing a lucid interval who were referred from local hospitals after they developed neurological deterioration. (Gomez et al, 1996). Therefore, the LOCL probability was assigned 0-0.6%. Note, this is the same as the probability for all other scenarios in this CLiFF neither treatment, nor development of post-concussive syndrome are expected to affect the probability of LOCL for this condition.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Minor head trauma symptoms can resolve as quickly as 24 hours (McCrea et al, 2003) or last longer than 14 days (McCrory et al, 2017). The Consensus Statement on Concussion in Sport (5th International Conference in Berlin) reports that the expected timeframe for "normal clinical recovery" in an adult is 10-14 days and anything longer than this is considered, "Persistent symptoms" which require a referral. Duration greater than 14 days meets criteria for the worst-case condition, and therefore is not discussed here. Therefore, the duration for this scenario was assigned 24-336 hours (1-14 days). RTDC and LOCL were assumed to be the same in this scenario as in the best-case treated scenario. (The effect of treatment is reflected, rather, in the task impairment). Thus what follows is identical to the best-case treated scenario. RTDC (surrogate measure of hospitalization) is required in a minority of cases. Babcock et al, 2013 report that 7.4% of mild traumatic brain injury cases (as defined by the following inclusion criteria: Blow to the head or acceleration/deceleration movement of the head resulting in 1 or more of the following: LOC < 30 min, amnesia < 24 hour or any alteration in mental state, and GSC of 13 or more 30 minutes or more after injury) required hospitalization.

Notably, this study was exclusive to children and adolescents, which limits it's generalizability to the astronaut corps. Rhame et al, 2021 reported a hospitalization rate of 10.3% for mild TBI patients in a retrospective chart review from Jan 2016-Dec 2017 for patients admitted through the University of Cincinnati Emergency Department under their mild TBI observation protocol. Inclusion criteria included: mild TBI with GCS of 14 or 15 11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 5

within 24 hours of injury. Non-surgical intracranial bleeds were included unless they met exclusion criteria. Exclusion criteria were: requirement for neurosurgery, focal neurologic deficits, coagulopathy, admission required for other injuries, abnormal vital signs, other active comorbid conditions, and non-impact seizures. (Rhame et al, 2021) Thus, the RTDC range was assigned 7.4-10.3% for this scenario. Mortality following minor head trauma is very rare. In a retrospective study of 2484 patients with mild head injury presenting to an Emergency Department in Madrid, Spain between December 1991 and April 1993, there was an overall mortality rate of 0.6% (15 deaths). Inclusion criteria included: age > 15 years, GCS of 13-15, experienced a blow to the head independently of whether there were or were not signs of brain dysfunction, such as a transient loss of consciousness (LOC), posttraumatic amnesia (PTA) or associated injuries. Patients were excluded if they had isolated facial trauma, those deteriorating to a GCS of less than 13 within 4h of injury and those showing a lucid interval who were referred from local hospitals after they developed neurological deterioration. (Gomez et al, 1996). Therefore, the LOCL probability was assigned 0-0.6%. Note, this is the same as the probability for all other scenarios in this CLiFF neither treatment, nor development of post-concussive syndrome are expected to affect the probability of LOCL for this condition.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS 8Persistent symptoms after minor head trauma are defined as starting at 14-days duration. Although measurable deficits in cognition and memory usually resolve by one month, they can last longer, with most patients exhibiting clinical recovering within 3-12 months (Barbosa et al, 2012). It is assumed that without treatment, the clinical recovery would take longer. Thus the duration was assigned 336-8750 hours (14-365 days) for this scenario. The literature doesn't elucidate a difference in need for hospitalization based on prior treatment vs. no prior treatment. Thus, the RTDC for this scenario will be approximated using the same RTDC as the treated worst-case scenario. Rhame et al, 2021 reported a hospitalization rate of 10.3% for mild TBI patients in a retrospective chart review from Jan 2016-Dec 2017 for patients admitted through the University of Cincinnati Emergency Department under their mild TBI observation protocol. Inclusion criteria included: mild TBI with GCS of 14 or 15 within 24 hours of injury.

Non-surgical intracranial bleeds were included unless they met exclusion criteria. Exclusion criteria were: requirement for neurosurgery, focal neurologic deficits, coagulopathy, admission required for other injuries, abnormal vital signs, other active comorbid conditions, and non-impact seizures. (Rhame et al, 2021) Babcock et al, 2013 report that 17.8% of mild traumatic brain injury cases (as defined by the following inclusion criteria: Blow to the head or acceleration/deceleration movement of the head resulting in 1 or more of the following: LOC < 30 min, amnesia < 24 hour or any alteration in mental state, and GSC of 13 or more 30 minutes or more after injury) that went on to develop post-concussive syndrome required hospitalization in a retrospective review. Notably, this study was exclusive to children and adolescents, which limits it's generalizability to the astronaut corps. Thus the RTDC probability for this scenario was assigned 10.3-17.8%. Mortality following minor head trauma is very rare. In a retrospective study of 2484 patients with mild head injury presenting to an Emergency Department in Madrid, Spain between December 1991 and April 1993, there was an overall mortality rate of 0.6% (15 deaths). Inclusion criteria included: age > 15 years, GCS of 13-15, experienced a blow to the head independently of whether there were or were not signs of brain dysfunction, such as a transient loss of consciousness (LOC), posttraumatic amnesia (PTA) or associated injuries. Patients were excluded if they had isolated facial trauma, those deteriorating to a GCS of less than 13 within 4h of injury and those showing a lucid interval who were referred from local hospitals after they developed neurological deterioration. (Gomez et al, 1996). Therefore, the LOCL probability was assigned 0-0.6%. Note, this is the same as the probability for all other scenarios in this CLiFF neither treatment, nor development of post-concussive syndrome are expected to affect the probability of LOCL for this condition.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

McCrea et al, 2003 Terrestrial McCrory et al, 2017 Terrestrial 3 Barbosa et al, 2012 Terrestrial Terrestrial data regarding concussions in collegiate athletes (McCrea et al, 2003) and an international consensus statemetn on concussions in sports (McCrory et al, 2017) were used to inform the best-case scenario durations. These sources provided a range for the duration of concussive symptoms. The lower end of the range was assigned to the best-case treated scenario and the best-case untreated scenario duration was extended to include the upper end of the range cited in this literature. Barbosa et al, 2012, a practice management guideline for mild traumatic brain injuries developed from a review of 112 articles spanning 1998-2011, was used to inform the duration of the worst-case scenarios. Again, a range was presented and the lower end of the range was assigned to the treated worst-case scenario and the untreated worst-case scenario was extended based on these data. TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Rhame et al, 2021 Terrestrial 2 Babcock et al, 2013 Terrestrial Two studies informed the RTDC probabilities for this condition. The literature doesn't elucidate a difference in need for hospitalization based on prior treatment vs. no prior treatment. Thus, the RTDC probabilities for the best-case treated and untreated scenarios are the same and the worst- case treated and untreated scenarios are the same. Rhame et al, 2021 reported a hospitalization rate of 10.3% for mild TBI patients in a retrospective chart review from Jan 2016-Dec 2017 for patients admitted through the University of Cincinnati Emergency Department under their 11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 6

mild TBI observation protocol. Inclusion criteria included: mild TBI with GCS of 14 or 15 within 24 hours of injury. Non-surgical intracranial bleeds were included unless they met exclusion criteria. Exclusion criteria were: requirement for neurosurgery, focal neurologic deficits, coagulopathy, admission required for other injuries, abnormal vital signs, other active comorbid conditions, and non-impact seizures. (Rhame et al, 2021) This case definition is consistent with the best-case scenario definition of this CLiFF. Babcock et al, 2013 was a prospective cohort study involving patients with TBI who participated in a TBI registry funded by the National institues of Health. The cohort was recruited at pediatric and adult Emergency Departements of the University of Rochester Medical Center from January 7, 2003 - September 6, 2004. However, the data presented only pertain to children and adolescents, minimizing the generalizability of this study to the astronaut corps. This study stratified hospitalizations according to our best and worst-case scenarios, reporting a different proportion of hospitalizations for mild traumatic TBI vs. post-concussive syndrome. Mild traumatic brain injury cases were defined by the following inclusion criteria: Blow to the head or acceleration/deceleration movement of the head resulting in 1 or more of the following: LOC < 30 min, amnesia < 24 hour or any alteration in mental state, and GSC of 13 or more 30 minutes or more after injury. Notably, studies that present information based on patients presenting to the emergency department may be skewed towards more severe manifestations of minor head trauma (vs. those who present as outpatients or don't present at all).

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Gomez et al, 1996 Terrestrial 2 Data regarding mortality secondary to minor head trauma were lacking. One retrospective study of 2484 patients with mild head injury presenting to an Emergency Department in Madrid, Spain between December 1991 and April 1993, was found to inform the LOCL probability. Inclusion criteria included: age > 15 years, GCS of 13-15, experienced a blow to the head independently of whether there were or were not signs of brain dysfunction, such as a transient loss of consciousness (LOC), posttraumatic amnesia (PTA) or associated injuries. Patients were excluded if they had isolated facial trauma, those deteriorating to a GCS of less than 13 within 4h of injury and those showing a lucid interval who were referred from local hospitals after they developed neurological deterioration. (Gomez et al, 1996). This provided the maximum probability for all scenarios because neither treatment, nor development of post-concussive syndrome are expected to affect the probability of LOCL for this condition. Notably, studies that present information based on patients presenting to the emergency department may be skewed towards more severe manifestations of minor head trauma (vs. those who present as outpatients or don't present at all), so this estimate would be the maximum probability of LOCL. The generalizability of this study in Spain may be somewhat limited.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

## Overview

Minor head trauma under this definition refers to an injury severe enough to cause a concussion without risk of permanent anatomical injury. The BC is a short duration concussion less than 2 weeks while the worst case lasts longer. Deficits in this case largely cognitive, irritability, and mental endurance and are expected to improve with time. There are no specific disease modifying treatments for concussions or treatments that will shorten duration but symptom control can help limit task impairments.

- CNES: None

### Diagnostic Scope and Resourcing

In both the best-case and worst-case scenario, diagnostics would include a history, primary assessment, and physical exam inclusive of vital signs, and a thorough neurological exam Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.783 hours for history, physical exam, and a thorough neurological exam CP1 WC (Treated or Untreated): 0.783 hours. The initial evaluation is the same for BC and WC since the difference in definitions is the duration.

The highest scope of practice required for performance of a full neurological exam and interpretation of the physical exam which was rated a 4.

Intern level training is also necessary for management decisions and determining fitness for duty.

### Treatment Scope and Resourcing

Treatment is symptom focused since no disease or duration modifying treatments exist at present that are supported by robust clinical evidence.

Symptomatic care includes antiemetics, NSAIDs, medications to facilitate sleep, and ant vertiginous medications.

### Communications and Support Needs

While a best-case scenario will require ground communication with video and audio to facilitate the recovery phase by assisting with schedule planning, neurological reassessments, and fitness for duty assessment.

### IMM CLIFF RECONCILATION COMMENTS

IMM had a condition called, “Head Injury.” Head injury was defined in this CLiFF as, “An injury that is clinically evident on physical examination and is recognized by the presence of ecchymoses, lacerations, deformities, or cerebrospinal fluid leakage. The CLiFF specifically states that traumatic 11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 7

brain injury is a separate entity and defines TBI as, “An injury to the brain itself and is not always clinically evident; if unrecognized, it may result in an adverse outcome.” This CLiFF is unique from the prior IMM CLiFF as it includes concussion, post-concussive syndrome, and non-operative intracranial bleeding, all of which are outside the scope of the definition of “head injury” used in the prior CLiFF. Therefore, this CLiFF has unique incidence, RTDC, LOCL, and TI values as compared to the IMM CLiFF.

### LIMITATIONS SUMMARY

- There are few data in the literature regarding non-operative intracranial bleed as it is described in the best-case scenario. Thus, the data

informing this CLiFF focus primarily on mild TBI (some of which includes intracranial bleed) and concussion for the best-case scenario. The worst- case scenario is informed by literature regarding post-concussive syndrome. • The best-case treated and untreated RTDC probabilities are the same, as are the worst-case treated and untreated RTDC probabilities due to a lack of data representing the need for hospitalization after head injury dependent on initial treatment vs. lack of treatment. • Babcock et al, 2013 informed the worst-case scenario RTDC probabilities. This is a pediatric study, limiting its generalizability to the astronaut corps. • The LOCL probabilities for all scenarios are the same based on the assumption that the worst-case scenario (post-concussive syndrome) does not increase risk of mortality and the assumption that lack of treatment does not increase mortality (rather, lack of treatment extends the duration, which is reflected by increased durations for the untreated scenarios). • Gomez et al, 1996 informed all LOCL probabilities. This study was conducted in Spain, which may limit its generalizability to the astronaut corps. 11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 |  | 89 |  |  | 145 |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 223 | 664 | 113 | 89 |  |  | 145 |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  | 89 | 854 |  | 145 |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 |  | 145 |  |  |  |  |
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

| Best | 132 |  |  |  |  |  |  | 211 1241 | 3763 | 0.32979 | 32.979 |
| ---- | --- | --- | --- | --- | --- | --- | --- | -------- | ---- | ------- | ------ |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  |  | 211 1577 | 3763 | 0.419081 | 41.9081 |
| ---- | --- | --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  |  |  |  |  |  | 211 2095 | 3763 | 0.556737 | 55.6737 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  |  |  |  |  |  | 211 2431 | 3763 | 0.646027 | 64.6027 |
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
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 9

Total Human Translation & Total Tasks Hand Lower Ambul & Don/Doff Pressure System Hand (Any) Upper Extremity Stabilization Impaired By TI Decimal TI % (Dom) Extremity Standing (g) Equipment Ops Category (microgravity) Condition

### Tasks Full

Mission Treated Best 0 3763 0 0 Case (TBC) Untreated Best 0 3763 0 0 Case (UTBC) Treated Worst 0 3763 0 0 Case (TWC) Untreated Worst 0 3763 0 0 Case (UTWC) 11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 10

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

11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 11

## REFERENCES

Reference

1. Babcock L, Byczkowski T, Wade SL, Ho M, Mookerjee S, Bazarian JJ. Predicting postconcussion syndrome after mild traumatic brain injury in

children and adolescents who present to the emergency department. JAMA Pediatr. 2013;167(2):156-61. Epub 2012/12/19. doi: 10.1001/jamapediatrics.2013.434. PubMed PMID: 23247384; PubMed Central PMCID: PMCPMC4461429.

2. Barbosa RR, Jawa R, Watters JM, Knight JC, Kerwin AJ, Winston ES, et al. Evaluation and management of mild traumatic brain injury: an

Eastern Association for the Surgery of Trauma practice management guideline. J Trauma Acute Care Surg. 2012;73(5 Suppl 4):S307-14. Epub 2012/12/27. doi: 10.1097/TA.0b013e3182701885. PubMed PMID: 23114486.

3. Gómez PA, Lobato RD, Ortega JM, De La Cruz J. Mild head injury: differences in prognosis among patients with a Glasgow Coma Scale score

of 13 to 15 and analysis of factors associated with abnormal CT findings. Br J Neurosurg. 1996;10(5):453-60. Epub 1996/10/01. doi: 10.1080/02688699647078. PubMed PMID: 8922703.

4. Hou R, Moss-Morris R, Peveler R, Mogg K, Bradley BP, Belli A. When a minor head injury results in enduring symptoms: a prospective

investigation of risk factors for postconcussional syndrome after mild traumatic brain injury. J Neurol Neurosurg Psychiatry. 2012;83(2):217-23.

Epub 2011/10/27. doi: 10.1136/jnnp-2011-300767. PubMed PMID: 22028384.

5. Levin DR. UNOLS Fleet Safety Data as an Analog for Deep Space (Unpublished Research). 2021.

6. Marin JR, Weaver MD, Yealy DM, Mannix RC. Trends in Visits for Traumatic Brain Injury to Emergency Departments in the United States.

JAMA. 2014;311(18):1917. doi: 10.1001/jama.2014.3979.

7. Concussion: Mayo Clinic; 2021 [cited 2021 December 7]. Available from: https://www.mayoclinic.org/diseases-

conditions/concussion/symptoms-causes/syc-20355594.

8. Persistent post-concussive symptoms (Post-concussion syndrome): Mayo Clinic; 2021 [cited 2021 December 7]. Available from:

https://www.mayoclinic.org/diseases-conditions/post-concussion-syndrome/symptoms-causes/syc-20353352.

9. McCrea M, Guskiewicz KM, Marshall SW, Barr W, Randolph C, Cantu RC, et al. Acute Effects and Recovery Time Following Concussion in

Collegiate Football Players The NCAA Concussion Study. JAMA. 2003;290(19):2556-63. doi: 10.1001/jama.290.19.2556.

10. McCrory P, Meeuwisse W, Dvořák J, Aubry M, Bailes J, Broglio S, et al. Consensus statement on concussion in sport-the 5(the) international

conference on concussion in sport held in Berlin, October 2016. Br J Sports Med. 2017;51(11):838-47. Epub 2017/04/28. doi: 10.1136/bjsports- 2017-097699. PubMed PMID: 28446457.

11. Ponsford J, Cameron P, Fitzgerald M, Grant M, Mikocka-Walus A. Long-term outcomes after uncomplicated mild traumatic brain injury: a

comparison with trauma controls. J Neurotrauma. 2011;28(6):937-46. Epub 2011/03/18. doi: 10.1089/neu.2010.1516. PubMed PMID: 21410321.

12. Rhame K, Le D, Ventura A, Horner A, Andaluz N, Miller C, et al. Management of the mild traumatic brain injured patient using a

multidisciplinary observation unit protocol. Am J Emerg Med. 2021;46:176-82. Epub 2020/10/20. doi: 10.1016/j.ajem.2020.06.088. PubMed PMID: 33071105.

13. Scheuring RA, Mathers CH, Jones JA, Wear ML. Musculoskeletal injuries and minor trauma in space: incidence and injury mechanisms in U.S.

astronauts. Aviat Space Environ Med. 2009;80(2):117-24. Epub 2009/02/10. doi: 10.3357/asem.2270.2009. PubMed PMID: 19198198.

14. Theadom A, Parag V, Dowell T, McPherson K, Starkey N, Barker-Collo S, et al. Persistent problems 1 year after mild traumatic brain injury: a

longitudinal population study in New Zealand. Br J Gen Pract. 2016;66(642):e16-23. Epub 2016/01/01. doi: 10.3399/bjgp16X683161. PubMed

- PMID: 26719482; PubMed Central PMCID: PMCPMC4684031.

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

11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 12

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

### NP Nurse Practitioner

### OBGYN Obstetrics and Gynecology

### OR Occurrence Rate

11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 13

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

11/22/2022 8:53:40 AM ICL114_Trauma - Minor Head Cliff page: 14

---

## Source metadata

```yaml
source_filename: "trauma-minor-head.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Head Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1Yn68MJp2lzct-8ttUycrdJMbs7OimMQs/view"
source_drive_id: "1Yn68MJp2lzct-8ttUycrdJMbs7OimMQs"
source_sha256: 9c87dc9d921bca282f78c0c02b9d428268df587d348d510f1467f6d22de60e25
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
