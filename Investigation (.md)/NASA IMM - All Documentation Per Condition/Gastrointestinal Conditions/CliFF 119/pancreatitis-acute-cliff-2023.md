# Pancreatitis Acute CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1iKzIihf_E0ah_O9kNf5Sv6m63hQhwfPC/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 119

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

ICL75_Pancreatitis, Acute Acute pancreatitis is inflammation of the pancreas and can be the result of numerous etiologies. Terrestrially, gallstones, alcohol, and triglycerides are the root cause of 60-90% of all presentations of acute pancreatitis however these etiologies are evaluated in astronaut screening and thus less important for a crew member in flight. Biliary pathology is also covered in another condition and will not be discussed here. Other causes of acute pancreatitis include medications, trauma, toxins, infections, or electrolyte derangements and often fall into an "other" category during diagnosis. May studies do not specify these alternative causes and instead lump them together as "idiopathic" as a catch all term. In this review we have followed suit and will use cause of pancreatitis other than gallstone, alcohol, and triglycerides as potential causes of pancreatitis in crew members. When insulted, the pancreas will release systemic inflammatory mediators that can result in necrosis, pseudocyst formation, and multi-organ injury. The mainstays of treatment are bowel rest, pain control, and hydration. More recent management encourages a more rapid return to oral intake than prior methods which may require prolonged NPO status. Even mild disease can be extremely painful and debilitating while complicated pancreatitis carries a relatively high mortality rate even in the setting of aggressive supportive management. Multiple scoring criteria exist to help prognosticate a patient with acute pancreatitis and in general evaluate the degree of systemic inflammation and organ injury. Recurrent injury to the pancreas may result in chronic pancreatitis with recurrent flares of inflammation and pain however in this CLIFF we will focus on the acute phase of the disease.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Per prior CLiFF, there have been zero cases of acute pancreatitis in astronauts while in spaceflight. There has only been one case of acute pancreatitis in any astronaut, but this occurred terrestrially years after return to Earth. Antonsen, E et al. 2020 is a NASA Internal Report using simulated data derived from the Integrated Medical Model. This shows EVAC incidence in a simulated Accelerated Mars Mission vs Standard Mars Mission of 21 / 100,000 and 62 / 100,000, respectively. However it uses prior IMM data which we are re-evaluating and updating with this CLIFF and thus cannot be used as primary evidence.

### ANALOG LITERATURE

The only analog literature found was provided internally by Dr. Dana Levin. This is a spreadsheet dataset of unpublished data categorizing events on the NSF research vessels between 2014 and 2020. These are large oceangoing laboratories with healthy, screened crew and scientists travelling at sea for days to months at a time, which presents a good analog to space crew. The data showed one occurrence of pancreatitis among these crews, equivalent to an incidence of 2.65 *10^-6 person years. This data is unpublished and thus was not as reliable as large population terrestrial literature.

### TERRESTRIAL LITERATURE

There is extensive terrestrial literature on the rate of pancreatitis within the general population. These studies range from small cohort to country wide population studies. Most valuable among the terrestrial literature reviewed were Garg, SK et al. 2019 and Gapp, J et al. 2019. Garg, SK et al. evaluated a data set with 2 million ED visits for pancreatitis at US hospitals from 2006 to 2012 but did not specify visits based on etiology of pancreatitis. Gapp, J et al. 2019 looked at >2 million US patients admitted with pancreatitis and specified by etiology of pancreatitis. This includes admitted patients only which may underestimate the true incidence of pancreatitis. It is generally accepted that the proportion of pancreatitis that is idiopathic in etiology is approximated at 25%. When this modifier was used with several studies of pancreatitis that were not differentiated, the adjusted incidence was very close to the reported incidence from Gapp, J et al. 2019 and thus this value was used.

### OVERALL INCIDENCE SUMMARY

8/23/2023 5:51:45 PM ICL75_Pancreatitis, Acute Cliff page: 1

## INCIDENCE

Mean 3.536E-4 and SD 3.361E-7.

### INCIDENCE SUMMARY

The Bayesian posterior distribution given the terrestrial evidence under an uninformative prior is Gamma(shape=1106847, rate=3130222663) with mean 3.536E-4 and SD 3.361E-7. Gapp 2019 – Trends and Outcomes of Hospitalizations Related to Acute Pancreatitis. 1,134,428 hospitalizations with no diagnosis of alcohol abuse, gallstones, or hypertriglyceridemia which are all common causes of pancreatitis that are screened from our astronaut cohort. TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0003536 SD 3.361E-07 Gamma (Shape): 1.10685E+06 (Rate): 3.13022E+09 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Antonsen, E et al. 2021 Spaceflight 1 Barratt, MR et al. 2008 Spaceflight 3 Levin, D 2021 Analog 2 Garg, SK et al. 2019 Terrestrial 3 Gapp, J et al. 2019 Terrestrial 3 Levin, D 2021 provides analog incidence data from oceangoing NSF laboratories, and appears well-conducted in its dataset presentation and analysis. Antonsen, E et al. 2021 is an internal report using NASA's Integrated Medical Model, which only simulates medical outcomes, but provides a few compelling incidence based on those data algorithms. This, however, is data drawn from the very model we are trying to update, so may not be valid. Per prior CLiFF, Barratt, MR et al. 2008 reports there have been zero cases of acute pancreatitis in astronauts while in spaceflight. Garg, SK et al. 2019 looked at emergency department visits in the US for pancreatitis from 2006-2012 and noted an average rate of 0.17/10,000 US person year. However, these studies include all causes of pancreatitis which, as discussed, over represents the incidence among an astronaut cohort because the most common etiologies are screened out of our population. These are all reasonable source material to draw data from however, Gapp, J et al. 2019 was used to calculate incidence instead. This retrospective population study evaluated pancreatitis admissions in the US between 2001 and 2014 and provided specific rates of idiopathic or "no etiology" pancreatitis which is most representative of our astronaut population. This paper was chosen due to the large data set and extensive data reporting in this article when compared to the others reviewed. 8/23/2023 5:51:45 PM ICL75_Pancreatitis, Acute Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Gallstones, a well-documented trigger, are screened for as described by the medical standards for crewmembers. An additional screening abdominal ultrasound within one year of launch is required of astronauts prior to embarking upon a long duration mission of six months or longer.

Alcohol abuse is identified with behavioral evaluations. Alcohol in flight is currently unavailable and prohibited. Annual lipid profiles screen for triglycerides and would identify crew members at risk for hypertriglyceridemia induced pancreatitis.

### BEST CASE SCENARIO DEFINITION

An uncomplicated acute pancreatitis which resolves with minimal intervention (observation while NPO, IV fluid hydration, and minimal pain management). (Note cholecystitis is covered by condition CHOLELITHIASIS/BILIARY COLIC, ACUTE)

### WORSE CASE SCENARIO DEFINITION

Complicated acute pancreatitis with severe systemic manifestations (i.e. acute renal failure, necrotizing pancreatitis) requiring standard (pain management and aggressive IV hydration) as well as more advanced interventions (e.g. IV antibiotics, parenteral nutrition). (Note cholecystitis is covered by condition CHOLELITHIASIS/BILIARY COLIC, ACUTE)

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Worst Case Probability was calculated from multiple sources Garg, K et al . 2005, and Coyle, WJ et al. 2002. Definitions vary between groups and across time however the upper and lower bounds of this range appear to stay constant. Coyle, WJ et al. 2002 noted 6/90 (7%) patients with idiopathic pancreatitis had a prolonged hospital LOS or ICU stay and were classified as severe. The vast majority of this cohort was discharged quickly and thus had a mild average disease course. Garg, KP et al. 2005 classified pancreatitis as having organ failure or increased APACHE II score and noted 67/276 (24%) met this criteria however this was a tertiary referral hospital and thus preselected for a more severe cohort of patients. Expert opinion among pancreatitis researchers places a range of 10-20% of patients with pancreatitis will have severe disease which is consistent with the range of data reviewed in this CLIFF. 15% was chosen as the WC scenario proportion as an appropriate representation.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Coyel, WJ et al. 2002 Terrestrial 2 Garg, KP et al. 2005 Terrestrial 3 Expert Opinion Terrestrial 2 Coyle, WJ et al. 2002 noted 6/90 patients with idiopathic pancreatitis had a prolonged hospital LOS or ICU stay and were classified as severe. The vast majority of this cohort was discharged quickly and thus had a mild average disease course which may underestimate the prevalence of severe disease. It also had a smaller power than other studies provided. Garg, KP et al. 2005 classified pancreatitis as having organ failure or increased APACHE II score and noted 67/276 (24%) met this criteria however this was a tertiary referral hospital and thus preselected for a more severe cohort of patient. Countless studies state this range and typically reference Garg, KP et al. 2005 and several other studies with closer to 10% rates of severe disease. Based on this range and the generally accepted 10-20% prevalence of severe disease, 15% was selected as the WC scenario. 8/23/2023 5:51:45 PM ICL75_Pancreatitis, Acute Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Mean 3.536E-4 85 - 85 100 1.9 15.958 72 168 0 0 0 0 0 Case (TBC) and SD 3.361E-7. Treated Worst 15 - 15 100 1.9 50 168 600 0 50 100 10.5 38 Case (TWC) Untreated Best N/A N/A N/A 1.9 28.9264 72 240 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.9 100 240 1512 100 100 100 10.5 50 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/23/2023 5:51:45 PM ICL75_Pancreatitis, Acute Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The management of acute pancreatitis is primarily supportive. In mild disease such as that seen in the BC scenario this includes IV fluids and pain medication. Patients often are initially NPO with a slow advancing of their diet from liquids to solids as their pain and nausea tolerate. This would be readily managed in flight. More severe disease however often results in multi-organ injury. It may require aggressive supportive care including parenteral nutrition, continuous pain medication, and vasopressor support. There is also often a role for antibiotics and procedural interventions.

This condition would be extremely hard if not difficult to manage in flight. The RTDC surrogate is thus based on this divide of requiring higher level of care (ICU) or having a BISAP score of >3, indicating high risk of mortality. Multiple scoring systems exist to help prognosticate a patients disease course. TREATED BEST CASE (TBC) SCENARIO COMMENTS The treated best case scenario was defined as an uncomplicated acute pancreatitis which resolves with minimal intervention. Duration of this scenario was based on expert opinions/reviews of acute pancreatitis durations. It is generally accepted that mild pancreatitis will resolve within a range of 3-7 days as noted by Forsmark, CE et al. 2016 and Quinlan, J 2014. Population studies Garg, SK et al. 2019 and Gapp, J et al. 2019 had mean LOS of 3.8 and 6 days respectively which is within this range and includes patients that are more severe than the defined BC scenario. The RTDC surrogate was ICU admission or BISAP score >3. Based on the definition of the BC scenario, no patients meet these criteria and thus RTDC was 0%. Mild pancreatitis that resolves with minimal treatment would also be expected to have a 0% risk of LOCL.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The TWC scenario was defined as complicated acute pancreatitis with severe systemic manifestations (i.e. acute renal failure, necrotizing pancreatitis) requiring standard (pain management and aggressive IV hydration) as well as more advanced interventions (e.g. IV antibiotics, parenteral nutrition). The minimum duration was based on the definition for mild pancreatitis that typically resolves within 7d. The WC excludes this mild form of the disease and thus this was considered the minimum. Maximum duration was based on Garg, PK et al. 2005 which showed a median duration of necrotizing pancreatitis of 25 days (including prehospital duration of symptoms and hospital LOS) and was chosen to represent the complicated pancreatitis cohort defined by the WC definition. The RTDC surrogate was ICU admission or BISAP score >3. By definition the WC scenario includes patients requiring more aggressive interventions for treatment and multiorgan injury with severe features. Medical resourcing is anticipated to be able to provide IV fluids, pain control, and antibiotics which may be adequate for management of pancreatitis with moderate severity. However, this cohort is also very likely to have a need for critical care and an elevated BISAP score. A crew member with the TWC condition may or may not required RTDC based on these features and as such a range of 50-100% was applied per clinical expertise and judgement in the absence of data. LOCL was determined from Husu, HL et al. 2019 which looked at severe pancreatitis at a single center and had a mortality rate of 10.5% among patients with severe disease under the age of 60. Chatterjee, R et al. 2020 was a similar study that showed a mortality rate of 38% among patients with moderate to severe disease. Other studies reviewed fell within this range for severe disease and thus these values were chosen. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The untreated best case scenario was defined as an uncomplicated acute pancreatitis which resolves with minimal intervention. It is generally accepted that mild pancreatitis will resolve within a range of 3-7 days as noted by Forsmark, CE et al. 2016 and Quinlan, J 2014 however this range implies medical treatment as needed. In mild disease there are still many patients that require IV hydration and mild pain control and lack of treatment would be anticipated to prolong duration of symptoms. As such a 10d maximum was chosen rather than 7d in the treated cohort. The RTDC surrogate was ICU admission or BISAP score >3. Based on the definition of the BC scenario, no patients meet these criteria and thus RTDC was 0%. Mild pancreatitis that resolves with minimal treatment would also be expected to have a 0% risk of LOCL even when untreated.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The UTWC scenario was defined as complicated acute pancreatitis with severe systemic manifestations (i.e. acute renal failure, necrotizing pancreatitis) requiring standard (pain management and aggressive IV hydration) as well as more advanced interventions (e.g. IV antibiotics, parenteral nutrition). Complicated pancreatitis is a disease process with high morbidity and mortality thus no literature on the course of the disease in the absence of treatment exists. Values were extrapolated from treated cohorts. The minimum duration was based on the definition for mild pancreatitis that typically resolves within 7d but was expanded to 10d in an untreated BC scenario. The WC excludes this mild form of the disease and thus this was considered the minimum. Maximum duration was based on Garg, PK et al. 2005 which showed a median duration of necrotizing pancreatitis of 25 days (including prehospital duration of symptoms and hospital LOS) but had a standard deviation of +/- 38d. An untreated severely ill patient with pancreatitis would have a much longer and more tenuous course thus this value was chosen as the maximum. The RTDC surrogate was ICU admission or BISAP score >3. By definition the WC scenario includes patients requiring more aggressive interventions for treatment and multiorgan injury with severe features. Without supportive care it is assumed that these crew members will have worsening organ injury and possibly failure within 48 hours of onset of symptoms. This cohort is very likely to have a need for critical care and without any onboard treatment and the high associated mortality rate of complicated pancreatitis the RTDC was assigned at 100%. LOCL was determined from Husu, HL et al. 2019 which looked at severe pancreatitis at a single center and had a mortality rate of 10.5% among patients with severe disease under the 8/23/2023 5:51:45 PM ICL75_Pancreatitis, Acute Cliff page: 5

age of 60. These patients were treated with extremely high levels of care including vasopressors and respiratory support when indicated. Without any treatment it is anticipated that this mortality rate will be substantially higher and thus 15% or a 50% increase was chosen as the minimum risk of LOCL. Chatterjee, R et al. 2020 was a similar study that showed a mortality rate of 38% among patients with moderate to severe disease and up to 50% among those with severe disease. The upper bound was chosen to represent a more severe cohort although overall this range of LOCL risk may underestimate untreated mortality.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Quinlan, J 2014. Terrestrial Forsmark, CE et al. 2016 Terrestrial Chatterjee, R et al. 2020 Terrestrial 2 Husu, HL et al. 2019 Terrestrial Garg, PK et al. 2005 Terrestrial Gapp, J et al. 2019 Terrestrial Duration was based on terrestrial population and cohort data that included either all patients with the diagnosis of acute pancreatitis or cohorts with severe pancreatitis. These patient populations included a majority of etiologies for pancreatitis that are screened from the astronaut corps and patients with comorbities that likely overestimate duration of symptoms. However, in the absence of other data these were chosen to represent likely disease course. TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Expert Opinion Terrestrial 3 RTDC was based on the defined surrogate and the provided definitions of the best and worst case scenarios. Based on expert opinion all BC did not meet criteria for RTDC and all worst case did meet criteria TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

### Expert Opinion Terrestrial

Husu, HL et al. 2019 Terrestrial 2 Chatterjee, R et al. 2020 Terrestrial LOCL for the BC scenario was based on expert opinion supported by population data that notes a mild course of pancreatitis that resolves with minimal or no intervention will have a mortality rate of 0%. The WC scenario LOCL was based on small cohort terrestrial studies of severe pancreatitis and thus may not accurately represent a crew member in spaceflight.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

- Capabilities and Resourcing Scope Overview Worst Case Definition: Complicated acute pancreatitis with severe systemic manifestations (i.e. acute

renal failure, necrotizing pancreatitis) requiring standard (pain management and aggressive IV hydration) as well as more advanced interventions (e.g. IV antibiotics, parenteral nutrition). (Note cholecystitis is covered by condition CHOLELITHIASIS/BILIARY COLIC, ACUTE) Best Case Definition: An uncomplicated acute pancreatitis which resolves with minimal intervention (observation while NPO, IV fluid hydration, and minimal pain management). (Note cholecystitis is covered by condition CHOLELITHIASIS/BILIARY COLIC, ACUTE) Acute pancreatitis could very easily represent a medical emergency and often results in severe pain for the patient. Treatment on board would be supportive, with close monitoring. The CRT condition focuses on the physical exam, laboratory values and supportive care (antibiotics, fluids, and pain mitigation). Diagnostic Scope and 8/23/2023 5:51:45 PM ICL75_Pancreatitis, Acute Cliff page: 6

Resourcing In the best-case scenario, diagnosis is based on history, physical examination, and laboratory values. In the worst-case scenario, diagnosis is based on the same. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1.9 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient 3 - Laboratory values including: amylase, CBC, BMP, Glucose, Liver function assays CP1 WC (Treated or Untreated): 1.9 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient 3 - Laboratory values including: amylase, CBC, BMP, Glucose, Liver function assays The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a four: this is an intern level. Treatment Scope and Resourcing In the best-case scenario, treatment is supportive with fluids and mild pain management. The worst case scenario adds systemic antibiotics for prophylaxis, and an escalation in the pain management options and ultimately may lead to incision and drainage as necessary. Most terrestrial cases are managed in the same way as is performed in this CRT. Did not include: 1.) The need for mechanical ventilation as this is covered in respiratory depression condition 2.) Further evaluation for kidney/urinary tract stones 3.)Not including endoscopy due to risk of complications 4.) Glucose management is a separate condition added at a later time, it is included here for assessment of the function of the organ. Communications and Support Needs In the best-case scenario, diagnosis and course of treatment is complicated by the concern for escalation therefore ground communications will be helpful given the complicated nature of the condition and the scope of care onboard. Same for Worst-case. REFERENCES

### IMM CLIFF RECONCILATION COMMENTS

Acute pancreatitis has a number of etiologies. Approximately 25% of these are idiopathic in nature and given the screening for gallstones, alcoholism, and hypertriglyceridemia, the idiopathic causes were the primary focus of the IMM which was a similar approach taken in this CLIFF.

Incidence was calculated at 0.0003074 based on LSAH data for 1 astronaut that suffered from it between 1959-1999. This crew member had pancreatitis several years after completing their mission however the details of this case are limited. The IMM CLIFF also looked at several terrestrial studies and tried to use the incidence of all acute pancreatitis with the general proportion of "idiopathic" pancreatitis to determine a relevant incidence for an astronaut crew member. This was used to calculate 0.0003074 cases of acute pancreatitis/person year that were idiopathic in nature. The BC scenario was defined as a course of an uncomplicated acute pancreatitis which resolves with minimal intervention. The WC scenario was defined as s a complicated acute pancreatitis with severe systemic manifestations (i.e. hemodynamic instability, acute respiratory distress syndrome, acute renal failure, necrotizing pancreatitis, acute cholecystitis). These definitions were effectively reused for this CLIFF. Expert review noted a severe disease course of 15-20% so this was used as WC proportion. RTDC was 0 for TBC then 100 for TWC and UTWC. UTBC 0- 100% range. LOCL was 0 for TBC and UTBC. 0-7 for treated WC and 0-100 for untreated WC. These large ranges were reduced to more practical values in this version of this condition.

### LIMITATIONS SUMMARY

- Acute pancreatitis is primarily due to gallstones, alcoholism, and hypertriglyceridemia however these conditions are screened from our astronaut

crew members which substantially reduces the incidence of this condition. Furthermore, over time the rates of idiopathic pancreatitis have decreased with improving CT imagery and higher rates of ERCP. •The best case scenario includes very mild disease and the worst case scenario includes severe disease however moderate disease is not well represented in this CLIFF. •Literature on pancreatitis includes primarily patients with comorbidities and advanced age. These patients skew the calculated rates of LOCL and RTDC. 8/23/2023 5:51:45 PM ICL75_Pancreatitis, Acute Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  | 145 |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 223 | 664 |  | 89 |  |  | 145 |  | 13 |  |  |  |
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

| Best | 132 |  | 414 | 22 | 196 | 34 | 34 | 211 | 1201 | 3763 | 0.31916 | 31.916 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | ------- | ------ |

Case (TBC) Untreated

| Best | 132 |  | 414 | 22 | 196 | 34 | 34 | 211 | 2177 | 3763 | 0.578528 | 57.8528 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

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

|  |  |  |  |  |  |  |  |  |  |  |  |  |
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
| 8/23/2023 5:51:45 PM |  |  |  |  | ICL75_Pancreatitis, Acute Cliff |  |  |  |  |  |  | page: 8 |
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

|  |  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

|  | 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| --- | ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC)

| 8/23/2023 5:51:45 PM |  |  | ICL75_Pancreatitis, Acute Cliff |  |  | page: 9 |
| -------------------- | --- | --- | ------------------------------- | --- | --- | ------- |
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

8/23/2023 5:51:45 PM ICL75_Pancreatitis, Acute Cliff page: 10

## REFERENCES

Reference Antonsen, E. (2021). Comparison of Health and Performance Risk for Accelerated Mars Mission Scenarios.

Banks, P. A., et al. (2013). "Classification of acute pancreatitis--2012: revision of the Atlanta classification and definitions by international consensus." Gut 62(1): 102-111. Barratt, M. R., et al. (2020). Principles of Clinical Medicine for Space Flight. New York Chatterjee, R. (2020). "Comparison of Acute Physiology and Chronic Health Evaluation II, Modified Computed Tomography Severity Index, and Bedside Index for Severity in Acute Pancreatitis Score in Predicting the Severity of Acute Pancreatitis." Indian J Crit Care Med.

Coyle, W. (2002). "Evaluation of Unexplained Acute and Acute Recurrent Pancreatitis Using Endoscopic Retrograde Cholangiopancreatography, Sphincter of Oddi Manometry and Endoscopic Ultrasound." Forsmark, C. E., et al. (2007). "AGA Institute technical review on acute pancreatitis." Gastroenterology 132(5): 2022-2044.

Forsmark, C. E., et al. (2016). "Acute Pancreatitis." N Engl J Med 375(20): 1972-1981.

Gapp, J., et al. (2019). "Trends and Outcomes of Hospitalizations Related to Acute Pancreatitis: Epidemiology From 2001 to 2014 in the United States." Pancreas 48(4): 548-554. Garg, P. K., et al. (2005). "Association of Extent and Infection of Pancreatic Necrosis With Organ Failure and Death in Acute Necrotizing Pancreatitis." Clinical Gastroenterology and Hepatology.

Garg, S. K., et al. (2019). "Incidence, Admission Rates, and Predictors, and Economic Burden of Adult Emergency Visits for Acute Pancreatitis: Data From the National Emergency Department Sample, 2006 to 2012." J Clin Gastroenterol 53(3): 220-225.

Husu, H. L., et al. (2019). "Short- and long-term survival after severe acute pancreatitis: A retrospective 17years' cohort study from a single center." J Crit Care 53: 81-86. Levin, D. (2021). UNOLS Fleet Safety Data Reports - Occurrences and Categorization. Internally within Space Medicine elective.

Papachristou, G. I. (2008). "Prediction of severe acute pancreatitis: current knowledge and novel insights." World J Gastroenterol 14(41): 6273- 6275. Quinlan, J. (2014). "Acute Pancreatitis." Am Fam Physician.

Yadav, D. and A. B. Lowenfels (2006). "Trends in the Epidemiology of the First Attack of Acute Pancreatitis. A Systematic Review." Pancreas.

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

CP1 Clinical Phase 1 CP2 Clinical Phase 2 CP3 Clinical Phase 3 8/23/2023 5:51:45 PM ICL75_Pancreatitis, Acute Cliff page: 11

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

### PRL Pharmaceutical Resource Level

8/23/2023 5:51:45 PM ICL75_Pancreatitis, Acute Cliff page: 12

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

8/23/2023 5:51:45 PM ICL75_Pancreatitis, Acute Cliff page: 13

---

## Source metadata

```yaml
source_filename: "pancreatitis-acute-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1iKzIihf_E0ah_O9kNf5Sv6m63hQhwfPC/view"
source_drive_id: "1iKzIihf_E0ah_O9kNf5Sv6m63hQhwfPC"
source_sha256: a0102490b46747a91f928da56689a78b9bef15e029953fca8a0e9f01c77fd2fd
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
