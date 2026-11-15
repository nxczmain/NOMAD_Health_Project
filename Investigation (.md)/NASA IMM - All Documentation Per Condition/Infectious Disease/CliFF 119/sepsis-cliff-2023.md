# Sepsis CLiFF 2023

[View original PDF](https://drive.google.com/file/d/14ShjHRgukCTHCYpw6K4UOiGkXCz9gmt8/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Infectious Disease/CliFF 119

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

ICL84_Sepsis The definition and management of sepsis has changed dramatically in the last 20 years. Early signs of developing infection can be somewhat variable and subtle, and changes to the definition aim to help providers make the diagnosis sooner and with higher sensitivity. Outcomes of sepsis are heavily dependent upon early initiation of antibiotics and IV fluids, and as such early diagnosis is paramount to early intervention. Sepsis lies on a spectrum from early inflammatory response known as SIRS to refractory hypotension and end organ damage known as septic shock. In spaceflight there have been a few infections that likely met the criteria for sepsis although the data from these events is limited and the definition of sepsis was substantially different in the era these events occurred. In long duration spaceflight, the risk of sepsis and its sequela is substantial and will need to be effectively mitigated by medical resourcing and support in order to protect crew members and mission objectives.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Review of published references shows 2 cases of urosepsis throughout the history of spaceflight (Barratt, MR et al. 2020). One was a crewmember of Apollo 13 in 1970 and another was a Russian member of the Russian space station Salyut 7 in 1985. It is unclear whether the crewmember on Apollo 13 mission had urosepsis as previous editions of Principles of Clinical Medicine for Spaceflight also lists the possibility of UTI without sepsis.

There was a medical evacuation in 1985 from Russian space station Salyut 7 for urosepsis and prostatitis, occurring 56 days into a 216-day mission, however there is no other published data regarding this event. No other documented episodes of sepsis exist. The calculated incidence within flight is much higher than terrestrial data due to the limited number flight time person years.

### ANALOG LITERATURE

Analog data included a study of US Armed Forces members diagnosed with sepsis or other equivalent terms (ie septicemia) between 2000 and

2012. This population was young, healthy, and medically screened for disqualifying conditions making it more applicable to the astronaut cohort

than general terrestrial population data. This dataset did span a shift in medicine in the definition and classification of sepsis, and thus shows an increase in incidence and change in definition over the years of the study. This is consistent with other terrestrial data during this timeframe but may limit the accuracy of this data.

### TERRESTRIAL LITERATURE

Multiple large population studies to determine the incidence of sepsis in the general population have been completed over the last few decades. A consensus committee of 68 international experts representing 30 international organizations convened in 2012 to produce “International Guidelines for Management of Severe Sepsis and Septic Shock”, published in the Critical Care Medicine Journal, which cited Martin, 2003 as seminal for sepsis incidence rate. The terrestrial incidence of 240 per 100,000 person years is still applicable today in the US, though incidence has been generally recognized to be increasing every year (Martin, 2012). As noted in the previous CLiFF, terrestrial incidence may be misrepresentative of astronauts who are generally healthier than the general population, however use of generalized population data is thought to be preferable in order to get a more conservative value due to the many spaceflight factors that could potentially increase the likelihood of sepsis such as immunosuppression and increased virulence of microorganisms in space.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

8/23/2023 5:52:50 PM ICL84_Sepsis Cliff page: 1

mean 1.32E-4 events per person year and SD 2.705E-6.

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate given the US Armed Forces data, under an uninformative prior, is Gamma(shape=2381.3, rate=18040119) with mean 1.32E-4 and SD 2.705E-6. The analog of US Armed Forces Data from 2000-2012 had 2428 cases of septicemia with IR 13.2 per 100,000 person years. TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.000132 SD 2.705E-06 Gamma (Shape): 2381.3 (Rate): 1.80401E+07 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Barratt, MR et al. 2020 Spaceflight 3 Martin, GS et al. 2003 Terrestrial 2 Martin, GS 2012 Terrestrial 2 Moore, JX et al. 2016 Terrestrial 2 O'Donnell, FL et al. 2013 Analog 3 There is a paucity of space epidemiologic data regarding sepsis. Review of published references shows 2 cases of sepsis, both urosepsis, throughout the history of spaceflight. One was a crewmember of Apollo 13 in 1970 and another was a Russian member of the space station Salyut 7 in 1985 (Barratt, MR et al. 2020). This literature is the most specific to our DRM however the conditions of sepsis in Apollo 13 were due to catastrophic vehicle failure limiting urologic hygiene, and the details of the Salyut 7 prostatitis are limited. These events provide an extremely high incidence of sepsis among astronauts but were not considered to as accurate of representation of incidence as some terrestrial data. Martin, GS et al. 2003 used US population data to calculate a terrestrial incidence of 240 per 100,000 person years that is still used extensively as a standardized sepsis rate. However, this cohort had a 50% IC admission rate and 25% mortality rate which is likely much higher than current rates and driven by patients at the extremes of age or with significant comorbidities. Wardi, G et al. 2021 evaluated patients with sepsis by age in a large California data set and noted an incidence of approximately 150/100,000 for patients between 18 and 44 however this included a number of young adults with comorbidities such as diabetes, autoimmune disease, and HIV. O'Donnell, FL et al. 2013 looked retrospectively at military data over time and found a rate of 13.2/100,000 among young, healthy, medically screened US adults that is more representative of our astronaut cohort than other population data. This value was used although this data is limited by changing sepsis definitions during the time of data collection. 8/23/2023 5:52:50 PM ICL84_Sepsis Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

No specific preflight preventative measures exist for sepsis. However, many medical screens for both astronaut selection and preflight prevention exist to avoid medical events that result in sepsis. For example, nephrolithiasis, cholelithiasis, preflight quarantine, etc...

### BEST CASE SCENARIO DEFINITION

Meeting SIRS criteria, but responsive to intervention.

### WORSE CASE SCENARIO DEFINITION

Septic shock (e.g. requiring vasopressors, end organ failure).

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Shock - Sepsis

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Rhee, C et al. 2017 was a retrospective chart review population based study and looked at the incidence of sepsis and septic shock at US hospitals. In 2014 the rate of ICU admission for sepsis was 56% which is consistent with other sources however this likely includes patients with severe sepsis but not necessarily shock. The reported rate of septic shock was 15% which is more consistent with the WC definition. Wardi, G et al. 2021 reported similar rates of septic shock of approximately 21.5% among California sepsis admissions. These studies may also overestimate the BC:WC scenario given the US population is less healthy than the astronaut population however 18% was chosen as the WC probability.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Rhee, C et al. 2017 Terrestrial 3 Wardi, G et al. 2021 Terrestrial 3 Rhee, C et al. 2017 reported the incidence of Septic Shock among US hospital admissions at 15%. Wardi, G et al. 2021 reported a rate of 21.5% of septic shock. Both studies reported rates of ICU admission and Severe Sepsis but these were considered to be less representative of the WC scenario definition. Both studies used to determine the BC:WC proportion were large retrospective chart review population studies with moderate confidence of accuracy. These may overestimate the rate of septic shock in flight given the relative comorbidities and ages of the US population compared to the astronaut corps. Other population studies evaluated also provided rates of severe sepsis or ICU admission rate but not rates of septic shock. 8/23/2023 5:52:50 PM ICL84_Sepsis Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 1.32E-4 and 82 - 82 100 3.5 29.8033 72 168 0 31.5 41.3 3.2 4.6 Case (TBC) SD 2.705E-6. Treated Worst 18 - 18 100 3.6 50 168 336 0 100 100 22 60.5 Case (TWC) Untreated Best N/A N/A N/A 3.5 99.6811 120 336 100 100 100 4.6 50 Case (UTBC) Untreated Worst N/A N/A N/A 3.6 100 168 720 100 100 100 75 100 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/23/2023 5:52:50 PM ICL84_Sepsis Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The management of sepsis in spaceflight will be similar to terrestrial management in resource poor settings. Initial diagnosis is key and dependent equipment and clinical skill to measure vital signs and the white blood cell count. Early initiation of antibiotics and fluids (typically IV) have been clearly demonstrated to impact disease course and outcome. Identification of infection source will require a thorough history, physical exam, and diagnostic tools to guide infection specific management. Sepsis can be the cause or result of many of the conditions being evaluated in spaceflight and will likely play a central role in medical risk.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The definition of the BC scenario is an infection meeting SIRS criteria, but responsive to intervention. Duration of treatment for SIRS is based on Rhodes, NJ et al. 2015 which is the Surviving Sepsis Guidelines. This is the consensus statement on the definition of sepsis and guidelines on management and considered the gold standard nation wide. The authors recommend a minimum of 3d of antibiotic treatment which was chosen as the minimum. They also note that 5-7 days of antibiotics is sufficient for the vast majority of infections thus 7 days was chosen as the maximum. The RTDC surrogate was SIRS requiring hospitalization an as such RTDC was based on emergency department data that showed hospital admission rates for SIRS patients ranging from 31.5% to as high as 41.3%. LOCL can be approximated by terrestrial mortality among patients who meet SIRS criteria without previously known acute illness. This can be estimated from the mortality among all visitors to emergency departments who meet SIRS criteria, which ranges from 3.2% - 4.6%. (Tuttle, A et al. 2018;Horeczko, E et al. 2014)

TREATED WORST CASE SCENARIO (TWC) COMMENTS The WC scenario is defined as septic shock (e.g. requiring vasopressors, end organ failure). The duration of this condition was based on expert opinion that places the minimum treatment of antibiotics to be approximately 7days. Terrestrial data on hospital LOS for septic shock was found to be approximately 12.5 days and thus 14 days was chosen as the maximum to account for treatment in a low resource setting. By definition the RTDC surrogate is 100% for the WC scenario. LOCL is estimated using the 28-day mortality of terrestrial patients with septic shock, which has a wide range of estimates from 22% to 60.5% (Kaukonen,KM et al. 2014)(Alberti, C et al. 2003).

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The definition of the BC scenario is infection meeting SIRS criteria, but responsive to intervention. Data on untreated SIRS is unavailable but it is assumed that duration is longer and risk of hospitalization or death is substantially higher in an untreated infection. Duration of illness is expected to be longer than the best case scenario with treatment given lack of antibiotic and fluid therapy which has been shown to improve all outcomes in sepsis. Guidelines recommend 3-7d of treatment for antibiotics for mild infection and this was chosen as duration for TBC. Expert opinion for untreated SIRS places duration at 5 to 14 days. In the absence of treatment there is also a high likelihood of progression to severe sepsis and septic shock, thus RTDC was estimated to be 100% to allow for standard of care. LOCL is anticipated to be between 4.6%, the maximum mortality rate for treated SIRS to 50% based on expert opinion in the absence of other data.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The worst case scenario for this condition is defined as septic shock (e.g. requiring vasopressors, end organ failure). In the absence of treatment this is expected to have a very high mortality and medical evacuation rate. The duration of this condition was set at 14-30 days when excluding patients that die or require medical evacuation. This was based on expert opinion in the absence of other data. The RTDC was set at 100% by definition. The LOCL was estimated to be between 75 and 100% based on expert opinion TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Rhodes, et al. 2016 Terrestrial Rhee, C et al. 2017 Terrestrial 3

### Expert Opinion Terrestrial

8/23/2023 5:52:50 PM ICL84_Sepsis Cliff page: 5

The duration of this condition was based on the Surviving Sepsis Campaign guidelines 2016 (Rhodes, et al. 2016) and thus was based on expert consensus. Maximum duration was based on retrospective chart review data on hospital LOS for sepsis and based on large sample size. These sources are both high quality. Duration for the untreated condition was based on expert opinion alone in the absence of data and thus decreases the LOC for the duration of this condition.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ----------------------- | ----------- | --------- | --- |
| Horeczko, E et al. 2014 | Terrestrial |  |  |
| Tuttle, A et al. 2018 | Terrestrial | 4 |  |
| Expert Opinion | Terrestrial |  |  |

RTDC was based on large epidemiologic studies from emergency department literature on the rate of admission/hospitalization among patients presenting with SIRS. The remaining scenarios were based on RTDC surrogate or expert opinion based on condition definition.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ----------------------- | ----------- | --------- | --- |
| Kaukonen,KM et al. 2014 | Terrestrial |  |  |
| Alberti, C et al. 2003 | Terrestrial |  |  |
| Horeczko, E et al. 2014 | Terrestrial | 3 |  |
| Tuttle, A et al. 2018 | Terrestrial |  |  |
| Expert Opinion | Terrestrial |  |  |

LOCL was based on epidemiological data of emergency department data on mortality rate among patients presenting with SIRS or on hospital data on mortality rates of septic shock. The data used for these estimates are of high quality, high powered data however the US population may not accurately represent the astronaut corps cohort. In the untreated scenarios expert opinion was combined with this data to determine relative mortality rates. CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

- Capabilities and Resourcing Scope Overview: This condition involves the evaluation, treatment, and ongoing management of the septic patient in

spaceflight. Both sepsis and septic shock carry high mortality rates and are of significant concern for crew members in resource limited environments. We specifically defined this condition as sepsis from an unknown source but was limited to respiratory, oropharyngeal, urinary tract, and cutaneous bacterial infections CNES: Sepsis- Shock Diagnostic Scope and Resourcing: The definitions provided for best case and worst case scenario characterize the diagnosis of sepsis as 2/4 Systemic Inflammatory Response Syndrome (SIRS) criteria with an infectious source as the cause. This diagnostic criteria is now somewhat dated and numerous studies have validated the Sequential Organ Failure Assessment Score (SOFA) and Quick Sequential Organ Failure Assessment Score (qSOFA) which may have some benefits in specificity and sensitivity over the SIRS approach. Several medical societies and working groups have moved away from the SIRS criteria to SOFA and other scoring systems. Nonetheless the SIRS criteria is still used widely in the United States and was applied to this condition.Septic shock is defined as sepsis with findings of end organ damage, or poor tissue perfusion despite adequate initial resuscitation.

Standard of care is an initial crystalloid bolus of 30mL/kg while monitoring venous blood lactate levels and mean arterial pressure(MAP).

Numerically if the lactate remains elevated >2 or the MAP is <65 the patient meets the diagnosis of septic shock. Portable ultrasound was deemed a necessary part of the diagnosis and guidance of resuscitation of the septic patient due to its versatility, size, and extensive use in spaceflight. It is important to note here that we did not include blood cultures as a necessary capability for these conditions because containment, growth, and analysis of infected human blood samples was logistically challenging and did not provide enough benefit. In standard terrestrial care blood cultures help guide antibiotic use but in flight it was assumed that the formulary would be limited and that crew members would receive a full course of broad spectrum antibiotics for 7-14 days instead of adjusting the regimen over the disease course. We have included these extensive details as the definition of sepsis and its management has changed over time and future versions of this document may require extensive updates. In the best case scenario, diagnosis is based on history, exam, vital signs, and laboratory values. Ultrasound was deemed necessary to determine the source of infection as X-ray, CT, MRI, are unavailable. Antibiotics are intravenous and broad spectrum for 72 hours and then transitioned to oral with similar coverage to finish a course of 14 days. In the worst case scenario, diagnosis is based on history, exam, vital signs, and laboratory values.

Ultrasound was deemed necessary to determine the source of infection as X-ray, CT, MRI, are unavailable. Cardiac ultrasound is used to monitor volume status and cardiac output grossly during diagnosis and resuscitation. Antibiotics are intravenous and broad spectrum for 7 days then transitioned to oral antibiotics. We discussed the possibility of intramuscular antibiotics (IM) instead of oral antibiotics but determined that oral antibiotics were preferable in the "middle of the road" septic shock patient who had received 7 days of IV treatment. Clinical Phase 1 Duration and

- Rationale: This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group

| 8/23/2023 5:52:50 PM | ICL84_Sepsis Cliff |  | page: 6 |
| -------------------- | ------------------ | --- | ------- |
- SME consensus duration is as follows: CP1 BC (Treated or Untreated): 3.5 hours CP1 WC (Treated or Untreated): 3.6 hours CP-1 for both cases

involves an extensive diagnostic evaluation for infection source in order to guide treatment. They also involve blood draws and lab and urinalysis which contributes to the long time to treat. The initial phase of care has the same length of time as the definition states that the difference is in response to fluid resuscitation or not. The highest scope of practice used was level 5 (attending physician) due to the complexity of diagnosis, management, and significant risk of RTDC or LOCL Treatment Scope and Resourcing: We relied heavily on the Surviving Sepsis Guidelines 2016 as well as clinical knowledge of standard of care for sepsis to emphasize a few major components of treatment. First, IV crystalloid fluid resuscitation of 30ml/kg bolus followed by maintenance fluid is critical to maintaining perfusion particularly in flight as many crew members struggle with adequate oral nutrition even in the uninfected state. Next, rapid IV antibiotics have substantial benefits with regards to morbidity and mortality. Last, our antibiotic choices included medication that has been previously flown in space or are included in proposed formularies for the defined reference mission (DRM) and are designed to cover bacterial pathogens broadly. Antibiotic selection will be based on the patient's condition, presumed source, and risk factors. However, in the undifferentiated patient we plan to cover MRSA, Gram +, Gram -, and pseudomonal infections and our antibiotic selections reflect this. We also considered the utility of including another capability for "alternative treatment of sepsis with IV antibiotics" but felt that the average crew member was unlikely to have significant antibiotic resistant organisms due to their minimal medical comorbidities or prolonged exposure to broad spectrum antibiotics (based on standard astronaut selection and screening programs). In standard intensive care units (ICUs) there are numerous adjuncts such as central venous pressure (CVP) monitoring, volume status monitoring devices, pulmonary artery monitors, arterial blood pressure monitors, etc... but the use of these adjuncts varies widely and has not been universally accepted to make substantial differences in outcome. The mass, volume, power, and logistics of these devices was not seen to be valuable equipment to include in spaceflight and was left from this list. Resuscitation instead will be guided by lactate, vital signs, and clinical exam. Vasopressors were included as a capability to worst case scenario. Based on Surviving Sepsis Guidelines norepinephrine was considered the best choice. 72 hours of norepinephrine at a standard drip rate were chosen as this was the agreed upon treatment window that would lead to resolution of shock or discussion of medical futility of further treatment. A capability for "central line placement" was discussed specifically with regards to vasopressor use but we agreed that peripheral access was appropriate for short term drips. Terrestrially standard of care is typically <24h of peripheral vasopressor administration but the benefits of implementing a central line did not outweigh the logistical challenges of placing it whether in microgravity or in a lunar habitat. Instead multiple locations of peripheral access will be utilized 24 hours at a time to avoid local ischemic effects with a maximum drip time of 72 hours as discussed above. Communications and Support Needs: Real-time video and audio loop communications are desired for diagnosis and treatment. While a physician CMO could manage this disease process initially, involvement with the ground will be necessary for ongoing treatment plans, discussion of evacuation, and logistical planning. Sepsis in a crew member is likely to be a substantial event and would impact normal crew function. REFERENCES: Rhodes A, Evans LE, Alhazzani W, Levy MM, Antonelli M, Ferrer R, et al. Surviving Sepsis Campaign.

Critical Care Medicine [Internet]. 2017 Mar [cited 2021 Jul 20];45(3):486–552. Available from: https://journals.lww.com/ccmjournal/Fulltext/2017/03000/Surviving_Sepsis_Campaign___International.15.aspx Uptodate - Evaluation and management of suspected sepsis and septic shock in adults Uptodate - Sepsis syndromes in adults: Epidemiology, definitions, clinical presentation, diagnosis, and prognosis

### IMM CLIFF RECONCILATION COMMENTS

The prior IMM of sepsis had many similarities to the updated version with a few key differences. Condition incidence was based on US National Discharge Survey estimates the incidence at 0.0024 events per person year. This data was limited due to the incorporation of all age groups and medical comorbidities which substantially increases the calculated incidence of sepsis. However, there is acknowledgement that this is a conservative estimate. Prior authors think this is appropriate due to spaceflight associated immunosuppression and increased virulence rates of microorganisms which may become more clinically relevant in long duration spaceflight. From spaceflight literature specifically there are 2 episodes of possible sepsis from urinary sources, Apollo 13 and the Russian Soyuz mission. These two isolated events were calculated to have an incidence of 0.0077 events per person year in flight however there have been no reported events since then. The prior best case definition was defined as sepsis without organ dysfunction or hypotension which responds to antibiotic treatment. The worst case definition was defined as case of severe sepsis involving organ dysfunction or prolonged septic illness with poor response to available antibiotic treatment. These definitions are similar to the current CLIFF but the updated version was modified to be more clinically specific.

### LIMITATIONS SUMMARY

- Incidence of Sepsis in US and Global populations is on the rise over the last 20 years, in large part due to changes in data acquisition. Sepsis

definitions have changed to be as sensitive as possible in order to reduce the rate of death associated with delay in diagnosis and treatment of sepsis. Many billing and hospital accreditation requirements are dependent on sepsis metrics which also incentivizes over-diagnosis when compared to prior years. Together these factors likely overestimate the true incidence of sepsis in a population. •The US Armed Forces Data used for incidence was a chart review study that included years in which the definition of sepsis was changing. They included as many terms as possible (septicemia, sepsis, sever sepsis, etc…) but this may change the accuracy of the data. •Population data on sepsis is often driven by the extremes of age and patients with severe comorbidities which is not representative of the astronaut population. •The BC definition includes patients meeting SIRS criteria but responsive to treatment and the WC scenario includes septic shock however these definitions exclude moderate sepsis that requires prolonged treatment or ICU stay but does not meet criteria for septic shock. This moderate disease course is common and likely represents a large proportion of sepsis admissions. •Sepsis is related to many other conditions on the condition list, both as a cause and effect, and will likely overlap heavily. Pancreatitis or lower respiratory infections can result in sepsis if untreated or inadequately treated. The specific estimates of duration, mortality, and need for RTDC are going to be heavily dependent on the source of the infection and the available antibiotics in flight. 8/23/2023 5:52:50 PM ICL84_Sepsis Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best | 223 | 664 | 113 | 89 |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 223 | 664 | 113 | 89 | 854 | 44 | 145 |  |  |  |  |  |
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

| Best | 132 |  | 414 | 22 | 196 |  | 34 | 211 | 2243 | 3763 | 0.596067 | 59.6067 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3739 | 3763 | 0.993622 | 99.3622 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

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
| -------------------- | --- | --- | --- | -------------------------- | ------------------ | --- | --- | --- | --- | -------------- | --- | -------- |
| 8/23/2023 5:52:50 PM |  |  |  |  | ICL84_Sepsis Cliff |  |  |  |  |  |  | page: 8 |
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

|  | 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| --- | ------- | --- | --------- | ------ | --------- | ----- |

Case (UTBC) Treated Worst

|  |  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

|  | 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| --- | ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 8/23/2023 5:52:50 PM ICL84_Sepsis Cliff page: 9

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

8/23/2023 5:52:50 PM ICL84_Sepsis Cliff page: 10

## REFERENCES

Reference Alberti, C., et al. (2003). "Influence of systemic inflammatory response syndrome and sepsis on outcome of critically ill infected patients." Am J Respir Crit Care Med 168(1): 77-84. Barratt, M. R., et al. (2020). Principles of Clinical Medicine for Space Flight. New York, NY, New York, NY: Springer New York.

Fleischmann-Struzek, C., et al. (2020). "Incidence and mortality of hospital- and ICU-treated sepsis: results from an updated and expanded systematic review and meta-analysis." Intensive Care Med 46(8): 1552-1562.

Horeczko, T., et al. (2014). "Epidemiology of the systemic inflammatory response syndrome (SIRS) in the emergency department." Western Journal of Emergency Medicine 15(3): 329.

Jones, J. A., et al. (2005). "Genitourinary issues during spaceflight: a review." Int J Impot Res 17 Suppl 1: S64-67.

Kaukonen, K. M., et al. (2014). "Mortality related to severe sepsis and septic shock among critically ill patients in Australia and New Zealand, 2000-2012." Jama 311(13): 1308-1316.

Martin, G. S. (2012). "Sepsis, severe sepsis and septic shock: changes in incidence, pathogens and outcomes." Expert Rev Anti Infect Ther 10(6): 701-706. Martin, G. S., et al. (2003). "The epidemiology of sepsis in the United States from 1979 through 2000." N Engl J Med 348(16): 1546-1554.

Moore, J. X., et al. (2016). "Defining Sepsis Mortality Clusters in the United States." Crit Care Med 44(7): 1380-1387.

O'Donnell, F. L., et al. (2013). "Septicemia Diagnosed During Hospitalizations, Active Component Service Members, U.S. Armed Forces, 2000- 2012." Medical Surveillance Monthly Report 20.

Paoli, C. J., et al. (2018). "Epidemiology and Costs of Sepsis in the United States-An Analysis Based on Timing of Diagnosis and Severity Level." Crit Care Med 46(12): 1889-1897. Rhee, C., et al. (2017). "Incidence and Trends of Sepsis in US Hospitals Using Clinical vs Claims Data, 2009-2014." Jama 318(13): 1241-1249.

Rudd, K. E., et al. (2020). "Global, regional, and national sepsis incidence and mortality, 1990-2017: analysis for the Global Burden of Disease Study." Lancet 395(10219): 200-211. Tuttle, A., et al. (2018). "Systemic Inflammatory Response Syndrome (SIRS) in the Emergency Department: An Original Investigation – A Look Back in Time." Emergency Medicine and Critical Care 1.

Wardi, G., et al. (2021). "Age-related incidence and outcomes of sepsis in California, 2008-2015." J Crit Care 62: 212-217.

Singer M, Deutschman CS, Seymour CW, Shankar-Hari M, Annane D, Bauer M, Bellomo R, Bernard GR, Chiche JD, Coopersmith CM, Hotchkiss RS, Levy MM, Marshall JC, Martin GS, Opal SM, Rubenfeld GD, van der Poll T, Vincent JL, Angus DC. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016 Feb 23;315(8):801-10. doi: 10.1001/jama.2016.0287. PMID: 26903338; PMCID: PMC4968574. Dolin HH, Papadimos TJ, Chen X, Pan ZK. Characterization of Pathogenic Sepsis Etiologies and Patient Profiles: A Novel Approach to Triage and Treatment. Microbiol Insights. 2019 Jan 27;12:1178636118825081. doi: 10.1177/1178636118825081. PMID: 30728724; PMCID: PMC6350122.

Mayr FB, Yende S, Angus DC. Epidemiology of severe sepsis. Virulence. 2014 Jan 1;5(1):4-11. doi: 10.4161/viru.27372. Epub 2013 Dec 11.

- PMID: 24335434; PMCID: PMC3916382.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

### CAC Coronary Artery Calcium

### CHS Crew Health and Safety

8/23/2023 5:52:50 PM ICL84_Sepsis Cliff page: 11

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

### NP Nurse Practitioner

### OBGYN Obstetrics and Gynecology

8/23/2023 5:52:50 PM ICL84_Sepsis Cliff page: 12

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

8/23/2023 5:52:50 PM ICL84_Sepsis Cliff page: 13

---

## Source metadata

```yaml
source_filename: "sepsis-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Infectious Disease/CliFF 119"
source_url: "https://drive.google.com/file/d/14ShjHRgukCTHCYpw6K4UOiGkXCz9gmt8/view"
source_drive_id: "14ShjHRgukCTHCYpw6K4UOiGkXCz9gmt8"
source_sha256: 9bd2a06e3308bb19f56554de59940c2faee094515f3bf260eb297d9a97b0337a
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
