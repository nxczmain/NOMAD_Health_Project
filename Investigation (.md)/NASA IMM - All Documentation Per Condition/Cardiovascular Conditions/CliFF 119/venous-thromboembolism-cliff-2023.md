# Venous Thromboembolism CLiFF 2023

[View original PDF](https://drive.google.com/file/d/14LhVjbZWoDhaWJy_rlIbD7hUSIHknwTv/view) · **15 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 119

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

### ICL119_Venous Thromboembolism

Venous thromboembolism (VTE) - this is intended to be a condition that occurs secondary to the increased stasis of blood in the venous vasculature as a result of the changing fluid dynamics from spaceflight and micro-gravity. At this time, this is an evolving condition for human spaceflight.

Previously, this condition was predicted to be a low risk, due in large part to the lack of symptoms present in crew during missions and upon return to home. However, recent events (potentially more than one crew member with VTE during missions on ISS) have called this risk profile into question.

VTE derives from blood clots that have formed in the deeper venous vasculature and can occlude blood flow return to the heart or can break free (emboli) and lodge into and potentially obstruct flow into the pulmonary or other vasculature causing ischemia (pulmonary embolism). Terrestrially, the venous vasculature that is particularly dangerous are the deeper veins because these are larger in diameter resulting in larger clots that are more damaging when they break free. Immobilization is a strong risk factor for VTE as blood pools platelets aggregate and the coagulation cascade is activated. In microgravity, blood is commonly displaced from its normal flow pattern and can pool more readily, particularly in the vasculature in the upper body, rather than the lower body as is seen on the ground. It is likely for this reason that the VTEs observed on orbit were in the upper body, which is much less common terrestrially.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Data regarding the incidence of VTE is limited to a single prospective cohort study in which 1 confirmed event was discovered among 11 astronauts during long-duration spaceflight missions (0.09) (Marshall-Goebel, 2019).

### ANALOG LITERATURE

Analog data is limited by the paucity of information regarding the total at-risk populations in studies on military personnel, as this may represent a national security risk. The reported total incidence rate of VTEs among healthy, active-duty military personnel is 16.3/100,000 person-years.

Further exclusion of personnel with known predisposing risk factors (i.e. recent surgery) decreases that value to 14.92/100,000 person-years (Freeman, 2011) . Additionally, two cases of VTEs requiring emergency evacuation from the McMurdo Station, Antartica were reported over a five year period (1992-1996) (Barratt, 2019) and represents an incidence rate of 2/7000 person-years.

### TERRESTRIAL LITERATURE

Terrestrial data on VTEs typically reflect the general population regardless of age, fitness, and predisposing risk factors. Though several studies have attempted to control for any one of these confounding factors, none have explicitly investigated idiopathic VTEs in a young, healthy civilian populations. A systematic review of the literature revealed that the incidence rate of VTEs in subjects aged 40-49 years old range from 0.096 to 1.52 per 1,000 population per year (Raskob, 2014) . An epidemiological model based on prior studies estimates a total combined attack rate of 93/100,000 person-years in non-hospitalized individuals (Cohen, 2007).

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 3.98E-4 and SD 1.82E-4 2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 1

### INCIDENCE SUMMARY

The incidence distribution for VTE is Gamma(shape=4.805, rate=12074.3) with mean 3.98E-4 and SD 1.82E-4. This distribution was defined by Bayesian analysis of incidence rates in analog populations, and adjusted for immobilization based on estimated odds ratio adjustments and uncertainty. Baseline rate of VTE in astronaut-like populations was estimated using the Bayesian modeling techniques typically used in CliFF development. We used the adjustment evidence to adjust those rates for immobilization. To integrate the uncertainty related to the Risk adjustment, we used simulation. First the posterior distribution of baseline VTE was estimated. A separate distribution describing the adjustment was also identified by matching the mean and variance to a Gamma distribution (forcing >0 numeric positivity). Samples were then generated from both distributions and multiplied to simulate the adjusted incidence rate distribution. Then, parameters of the resulting distribution were found based on the summary statistics of the adjusted distribution, to match with a Gamma distribution. This distribution defines the incidence rate for MEDPRAT.

Adjusting rates based for immobilization – Samama 2014 – An electronic tool for venous thromboembolism prevention in medical and surgical patients. The Odds Ratio for immobilization is listed as mean 3.89 with SD 1.75. Unfortunately, we couldn’t identify a source of data to inform a hazard rate which would be best for adjusting the incidence rate. Also, this reference doesn’t have a timeframe of follow-up to know the duration which is necessary for an accurate conversion to a hazard rate. This is likely because odds ratios were calculated from case-control (cross- sectional) data that doesn’t allow for estimation of incidence rates. We will assume 1-year as the timeframe to convert the OR to a Hazard rate (Risk Ratio is approximately equivalent to the Hazard Rate for 1 unit in time). Given that the baseline rate is small, the Odds Ratio is approximate to the Relative Risk). This simplifies the adjustment to just multiplying by the estimated OR (mean 3.89 and SD 1.75).

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.000397953 SD 0.000181545 Gamma (Shape): 4.805 (Rate): 12074.3 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Marshal-Goebel, 2019 Spaceflight 2 Barratt, 2019 Analog 3 Freeman, 2011 Analog 3 Raskob, 2014 Terrestrial 3 Conen, 2007 Terrestrial 2 Samana, 2006 Terrestrial 3 (Marshal-Goebel, 2019): Only known instance of spaceflight VTE and will be the most representative in terms of population and environmental conditions. Additionally describes an partially occlussive thrombus discovered retrospectively that was untreated for the remainder of the mission - this may be useful in assessing outcomes. Overall, the quality of this prospective cohort study is strong. Greatest limitation is in regards of the small sample size (11 astronauts). (Barratt, 2019): Briefly notes 2 VTE events requring medical evacuation from McMurdo Station, Antartica. Expect this population to more closely reflect astronauts since these personnel are screened and presumed healthy. Environment also more closely represents 2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 2

conditions and remoteness of space. However, absolute incidence of VTEs unknown as the cases included were severe enough to require evacuation. Data does not include asymtomatic/mild casees of VTE and may not reflect the true, absolute incidence rate. (Freeman, 2011): VTE incidence across all military personnel (2008). Population at risk (active duty, National Guard, Reserve) is more likely to represent astronauts in terms of age and fitness. Includes personnel in remote outposts, which also more closely reflects conditions in space. [Raskob, 2014): Incidence of general population irrespective of age, health status, and fitness. Since the risk and rate of occurance increases with age, the elderly account for the majority of VTE events reported. (Conen, 2007): Incidence value of general population irrespective of age, health status, and fitness. May consider limiting incidence data to community-acquired VTE events to exclude hospital-associated VTEs as a surrogate for age/fitness/recent predisposing events. 2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

At present there are no disqualifying conditions related to this condition.

### PREFLIGHT PREVENTATIVE MEASURES

At present there are no preflight preventive measures related to this condition.

### BEST CASE SCENARIO DEFINITION

Thrombus in situ (DVT) without pulmonary embolism

### WORSE CASE SCENARIO DEFINITION

Pulmonary embolism. CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

### Deep Vein Thrombosis Pulmonary Embolism

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Pulmonary embolism with or without DVT accounts for approximately 40% of all VTEs. Using Heit (2015) for this evaluation an incidence rate of 45- 117 events/100,000 person-years for DVT alone and 29-78 events/100,000 person-years for PE (with or without DVT). Using the mean of these ranges 81 DVTs and 53.5 PEs per 100,000) will result in 60.3% being DVTs without PE and 39.7% being a PE with or without DVT. Systematic review by Raskob (2014) appears to concur with these findings. Epidemiological models derived from literature regarding 6 European Union countries estimated a total of 465,715(404,664-538,189) cases of DVT and 295,982 (242,450-360,363) cases of PE per annum (Cohen, 2007).

There is relative dearth of information regarding the incidence of VTEs in spaceflight, with only one known case of IJV thromboembolism reported in 2019 (Marshall-Goebel, 2019). As this is the only study to truly reflect spaceflight conditions and the target population, it is unclear how much weight this single value should be given.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Marshal-Goebel, 2019 Spaceflight 2 Anand, 2001 Analog 2 Raskob, 2014 Terrestrial 3 Heit, 2015 Terrestrial 3 Cohen, 2007 Terrestrial 2 Samana, 2006 Terrestrial 3 Deep Vein Thrombosis (DVT) without pulmonary embolism is classified as a best case event. Pulmonary Embolism (PE) is defined as the worst case event. (Marshall-Goebel): Describes 1 known incidence of complete occlusion of the left IJV, an atypical location for thromboembolism in an otherwise young, healthy individual. Noted a possible partial IJV thrombus found on retrospective analysis of ultrasonographic data. Taken alone, 100% of spaceflight VTEs have been best case events. (Heit, 2015): Systematic review of VTE. Reported incidence rate of DVT alone (without PE) 45-117 events/100,000 person-years. Reported incidence rate of PE (with or without DVT) 29-78 events/100,000 person-years (pg 2). Roughly 40% WC events. (Raskob, 2014): Systematic review of studies investigating VTE burden of disease in the general public; reports incidence of DVT and PEs separately in Table 1. Cursory review shows worst-case events accounting for approximately 30-50% of all VTE events. Roughly 40% WC events. (Cohen, 2007): Epidemiological model of VTEs within 6 EU countries, populated with data from published literature and expert opinion.

Estimated total of 465,715(404,664-538,189) cases of DVT and 295,982 (242,450-360,363) cases of PE per annum. Roughly, 39% WC events (PEs). (Anand, 2001): Reports vascular events requiring hospital admission among Indian soldiers stationed at high altitudes (altitude >3000, mean age 32, mean length of stay 10.2 months ). A total of 34 venous thromboembolic events were recorded: 20 DVT, 6 PE, and 8 abdominal veins (i.e. portal, splenic, and superior mesenteric veins). Using our definition of BC/WC, approximately 20% of cases are worst-case scenarios. Limitations include confounding by the high-altitude exposure of these subjects, which may have skewed the data towards more best-case scenarios. 2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 3.98E-4 60 - 60 100 1.416 5.60723 2016 8736 5.60723 4.74 12 1.45 11.1 Case (TBC) and SD 1.82E-4 Treated Worst 40 - 40 100 2 9.46054 2016 8736 5.60723 100 100 2.4 15 Case (TWC) Untreated Best N/A N/A N/A 1.416 9.46054 2016 8736 5.60723 51 51 2.5 20.3 Case (UTBC) Untreated Worst N/A N/A N/A 2 100 2016 8736 100 100 100 5 26.32 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

This condition was added to the ICL because we had so recently observed it on orbit. As such, we have extremely limited data concerning incidence on spaceflight missions. To the best of our knowledge, this condition is rare in spaceflight. However, it is common terrestrially to encounter a VTE using ultrasound that may not exist clinically. Therefore, it is difficult to know the true incidence of the condition, making this particular condition rather difficult to quantify. The separation of bc and wc is very logical. This condition terrestrially is often delineated in the literature based on local vs systemic (embolic) effects. Therefore, this is appropriate. Likewise, the treated vs untreated designation is very similar to the terrestrial therapy so the data here is also very easy to determine from terrestrial literature and is likely fairly accurate.

TREATED BEST CASE (TBC) SCENARIO COMMENTS

- Minor cases of venous thromboembolism (VTE) include: deep vein thromboses (DVT) in which a blood clog obstructs flow in the deep venous

system. Direct oral anticoagulants (DOACs) offer a number of advantages over vitamin K anticoagulants (i.e. warfarin) that make them more suitable for spaceflight: oral administration, predictable effects, lack of frequent monitoring/redosing, and few known drug interactions (Robertson, 2015). Current guidelines recommend at least three months of anticoagulant medication for the treatment of unprovoked VTE, followed by reevaluation on day 90 to determine if a longer course of medication will be necessary. Only patients with low-moderate bleeding risk should consider continuing therapy (Kearon, 2016) for up to 12 months (Robertson, 2016). The overall one-year rate of recurrent VTEs among all-comers with isolated DVTs is 12% (Spencer, 2009). Of the patients that have been stabilized following a minor VTE and received treatment with DOACs, approximately 4.74-5.08% will experience a recurrent, nonfatal VTE event that would prompt hospitalization or, in the case of the astronaut population, return to definitive care (Robertson, 2015). The overall one-year, all-cause mortality rate is 11.1% (Naess, 2009). Death directly attributed to fatal PE or major bleed following at least 3 months of treatment with DOACs is projected to occur in 1.45-1.53% of these patients.

Furthermore, as complications of VTE tend to occur within the first few weeks following the initial event, the likelihood of experiencing a complication does not change appreciably from 3 months to 6 months (Robertson, 2015). Note that these projections are derived from studies on all-comers with an average age of 55-65 years. Most studies have attempted to exclude participants with obvious confounding factors (i.e. active bleed, cancer, recent VKA) but there is little uniformity regarding exclusion criteria. In particular, the overall rates of recurrence suffers from the inclusion of patients that were critically ill, required advanced medical care, or had recent surgery (Spencer, 2009). As the astronaut population typically includes healthy individuals between the ages of 35-50 years old, the likelihood of hospitalization or death most likely lies towards the lower end of this range. TREATED WORST CASE SCENARIO (TWC) COMMENTS

- Severe cases of venous thromboembolism (VTE) include: acute pulmonary embolism (PE) with or without respiratory compromise; massive PE; or

both. Massive PE refers to acute pulmonary embolic events with one or more of the following: sustained systemic hypotension (SBP <90 mmHg for 15 minutes or that which requires inotropic support); pulselessness; or persistent and profound bradycardia (HR <40 bpm associated with signs of end organ hypoperfusion). Direct oral anticoagulants (DOACs) offer a number of advantages over vitamin K anticoagulants (i.e. warfarin) that make them more suitable for spaceflight: oral administration, predictable effects, lack of frequent monitoring/redosing, and few known drug interactions (Robertson, 2016). There is a single instance of spaceflight thromboembolism treated with anticoagulants from the day of diagnosis until four days prior to the astronaut's return to Earth (Aunon-Chancellor, 2020). As the total duration of treatment was not provided, current guidelines regarding the treatment of PE remain the best resource. With known clinical knowledge, and by definitions provided, pulmonary embolism with respiratory compromise or hemodynamic instability will require return to definitive care for emergency treatment. Initial management of PE includes hemodynamic support for shock, IV unfractionated heparin, and thrombolytics. After the initial event, all patients with PE should receive at least three months of anticoagulant medication, followed by reevaluation (day 90) to determine if a longer course of medication will be necessary. Only patients with low-moderate bleeding risk should consider continuing therapy (Kearon, 2016) for up to 12 months (Robertson, 2016). The overall mortality rate of patients with confirmed PE within the first 72 hours is 15% (Janata, 2002). Among patients that have been stabilized and treated with at least 6 months of DOACS, approximately 2.40% are projected to die due to a fatal PE or major bleed. As complications of VTE tend to occur within the first few weeks following the initial event, the likelihood of death does not change appreciably from 6 months to 1 year (Robertson, 2016).

Note that these projections are derived from studies on all-comers with an average age of 55-60 years. Most studies have attempted to exclude participants with obvious confounding factors (i.e. active bleed, cancer, recent VKA) but there is little uniformity regarding exclusion criteria. As the astronaut population typically includes healthy individuals between the ages of 35-50 years old, the likelihood of hospitalization or death most likely lies towards the lower end of this range.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS

- Minor cases of venous thromboembolism (VTE) include: deep vein thromboses (DVT) in which a blood clog obstructs flow in the deep venous

system. As of October 2021, there is a dearth of studies pertaining to untreated DVTs with regards to the duration of follow-up and outcomes prompting return to definitive care. This is not surprising, given that anticoagulant medications have been in use since 1937 and were soon reported to reduce the mortality rate from PEs. These claims were further supported by a landmark study (1960) that indicated prophylactic anticoagulation reduced deaths by pulmonary embolism in patients with a prior PE (Barritt, 1960). Nevertheless, the duration of treatment for DVT ranges from 3 to 12 months; clots that are refractory after 1 year of treatment are deemed clinically insignificant. With this in mind, one can infer that untreated DVTs will likely persist anywhere from 3 months to the end of the mission. Approximately 51% of DVTs are expected to progress to PEs, an adverse event that would prompt reevaluation and hospitalization (Huisman, 1989). The mortality rate of untreated DVTs is less clear.

Expert opinion places the mortality rate at 2.5% (Perone, 2001), based largely upon the assumption that DVT-related deaths are dependent solely on progression to fatal PE. Spencer (2009) reported an overall one-year, all-cause mortality rate of 20.3% (Spencer, 2009). The true mortality rate can be inferred to exceed this value. Of note, there is an ongoing trial that seeks to characterize the outcomes on minor PE without respiratory compromise (SAFE-SSPE) in untreated patients (Baumgartner, 2020). 2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 6

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS

- Severe cases of venous thromboembolism (VTE) include: acute pulmonary embolism (PE) with or without respiratory compromise; massive PE; or

both. Massive PE refers to acute pulmonary embolic events with one or more of the following: sustained systemic hypotension (SBP <90 mmHg for 15 minutes or that which requires inotropic support); pulselessness; or persistent and profound bradycardia (HR <40 bpm associated with signs of end organ hypoperfusion). As of October 2021, there is a paucity of information regarding the duration of follow up with regards to PEs with cardiorespiratory compromise. This is not surprising, given that anticoagulant medications have been in use since 1937 and were soon reported to reduce the mortality rate from PEs. These claims were further supported by a landmark study (1960) that indicated prophylactic anticoagulation reduced deaths by pulmonary embolism in patients with a prior PE (Barritt, 1960). That said, Stein and Carson both reported outcomes from the multicenter Prospective Investigation of Pulmonary Embolism Diagnosis (PIOPED) project for up to 3 months following discharge from the hospital (Stein, 1995) to 12 months from discharge (Carson, 1992). With known clinical knowledge and by definitions provided, pulmonary embolism with respiratory compromise or hemodynamic instability will require return to definitive care for emergency treatment. Initial management of PE includes hemodynamic support for shock, IV unfractionated heparin, and thrombolytics. Approximately 5-26.32% of patients that do not receive treatment after initial stabilization will likely die in the following months. This value reflects both the lack of information regarding untreated PE and the methodology of the few studies that have reported mortality rates. Stein (1995) reported one death directly attributed to PE out of 20 untreated, all- comers over a 3 month period. Barritt (1960) reported 5 deaths directly attributed to PE among 19 untreated patients. Notable confounding variables include severe medical conditions, old age, and confinement to bed for the first 10 days of treatment (Barritt, 1960).

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------- | ----------- | --------- | --- |
| Robertson, 2015 | Terrestrial |  |  |
| Robertson, 2016 | Terrestrial |  |  |
| Kearon, 2016 | Terrestrial |  | 3 |
| Stein, 1995 | Terrestrial |  |  |
| Carson, 1992 | Terrestrial |  |  |

This domain is limited slightly by the paucity of information regarding untreated DVTs and variations between studies regarding duration of follow up. The duration of treatment for the only known instance of thrombosis in spaceflight was also not reported (Aunon-Chancellor, 2020). That said, there is concensus regarding the minimum duration of treatment and follow up (3 months), which mirrors clinical practice in that all patients would be treated with 3 months of anticoagulant therapy. Continuation of treatment beyond that point would depend upon patient-specific factors.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------- | ----------- | --------- | --- |
| Robertson, 2015 | Terrestrial |  |  |
| Spencer, 2009 | Terrestrial |  | 2 |
| Huismann, 1989 | Terrestrial |  |  |

This domain is limited by the dearth of information regarding untreated DVTs and variatons in methodology among studies investigating outcomes among treated DVTs. The participants (all-comers, average age 55-60) do not reflect the astronaut population. Most articles did not distinguish between PE and DVTs; they also did not distinguish between minor PEs and PEs with cardiorespiratory compromise. Furthermore, though many attempted to exclude participants with obvious confounding factors, the exclusion criteria between studies were not uniform (Robertson, 2015).

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------- | ----------- | --------- | --- |
| Robertson, 2015 | Terrestrial |  |  |

2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 7

### Citation Source LOC Value

Robertson, 2016 Terrestrial Perone, 2001 Terrestrial 3 Stein, 1995 Terrestrial Barritt, 1960 Terrestrial Spencer, 2009 Terrestrial Naess, 2007 Terrestrial Janata, 2002 Terrestrial This domain is slightly limited by a lack of information regarding untreated VTEs and the methodology of the landmark study investigating untreated pulmonary embolism. The participants (all-comers, average age 55-60) do not reflect the astronaut population. Many articles did not distinguish between PE and DVTs; they also did not distinguish between minor PEs and PEs with cardiorespiratory compromise. Furthermore, though many attempted to exclude participants with obvious confounding factors, the exclusion criteria between studies were not uniform (Robertson, 2015 and Robertson, 2016). Notable confounding variables include severe medical conditions, old age, and confinement to bed for the first 10 days of treatment (Barritt, 1960). CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview Fortunately, while a thrombosis has now been discovered during spaceflight, a clinical venous thromboembolism has not occurred. Upon diagnosis, anticoagulation is the standard of care, and often anticoagulation is used for prevention of recurrent thrombosis, embolization, or severe morbidity/mortality. CNES: Deep venous thrombosis, Pulmonary Embolism Diagnostic Scope and Resourcing Diagnosis begins with a thorough history of symptoms and possible provoking events, primary assessment, vital signs, cardiac, pulmonary, and extremity exams. Based off these initial findings, if a DVT is suspected, an assessment of pretest probability for DVT can be conducted using terrestrial prediction rules such as the Wells or modified Wells score. This score can assign a risk category with which to consider further workup with a serum D-dimer or whole leg ultrasonography with proximal compression ultrasonography (CUS). In spaceflight, given concern that the cosmic environment increases the risk of DVT/PE, and that the terrestrial Wells criteria cannot be validated, it would automatically upstage the patient to a risk category necessitating US. Thus, the D-Dimer is not felt to be clinically necessary though it could have some negative predictive value. Other routine lab tests are not useful diagnostically above and beyond the US, but may provide insight into the underlying cause of the VTE.

For the best-case scenario in which a DVT or minor PE without respiratory compromise occurs, vitals, an exam, and US are recommended. In the worst-case scenario in which respiratory compromise does occur, it would not be immediately understood that a massive PE has occurred. Thus, a full diagnostic workup that also includes a troponin, CBC, BNP, CMP, magnesium, EKG, and cardiac and pulmonary ultrasound may be required.

Ground communications with video or pictures can also assist with diagnosis, especially with US. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1.416 CP1 WC (Treated or Untreated): 2.00 The highest scope of practice required for diagnosis includes the interpretation of the ultrasounds which is SOP 5 (attending). Treatment Scope and Resourcing For the best case, the resourcing standard of care involves anticoagulation agents such as rivaroxaban, apixaban, or Lovenox. At least three months of anticoagulant therapy is recommended for long-term VTE treatment. However, the evidence that guided that duration dealt with warfarin which is not being flown.

Some anticoagulation reversal agents can be used PRN. Otherwise, compression stockings can be used during CP3. For the worst case, in addition to anticoagulation, noninvasive oxygen therapy, and continuous pulse oximetry will assist. Additional medications can include thrombolytics which are used when cardiopulmonary deterioration is evident, yet frank hypotension has not occurred. Thrombolytic therapy reduces total mortality, PE recurrence, and PE-related mortality in patients. The decrease in overall mortality is, however, not significant in hemodynamically stable patients with acute PE. Endovascular treatment strategies including IVC filter will be beyond the scope of management during spaceflight.

Advanced respiratory support for WC treatment is beyond the scope for this condition as such resourcing would escalate to ICL 80 – respiratory failure. Lastly, long term monitoring with PT/INR, global coagulation assays, or thrombin generation assays are likely beyond the scope needed for management of anticoagulation during spaceflight. Communications and Support Needs Ground communications with audio and video can assist with diagnosis of this condition.

### IMM CLIFF RECONCILATION COMMENTS

### LIMITATIONS SUMMARY

This condition was added to the ICL because we had so recently observed it on orbit. As such, we have extremely limited data concerning incidence on spaceflight missions. To the best of our knowledge, this condition is rare in spaceflight. However, it is common terrestrially to encounter a VTE using ultrasound that may not exist clinically. Therefore, it is difficult to know the true incidence of the condition, making this particular condition rather difficult to quantify which is the major limitation of this condition. We just cannot accurately determine the incidence of this condition but have done the best we can. 2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------------------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  |  |  |  |  | 145 |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  |  | Translation & |  |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity | Standing (g) |  | Equipment | Ops |  | Category |  |  |
| --- | ----- | --- | --------- | ------------ | -------------- | --------- | --- | --------- | -------- | --- | --- |
|  |  |  |  |  | (microgravity) |  |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  |  |  |  |  |  | 211 | 211 | 3763 | 0.0560723 | 5.60723 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --------- | ------- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  | 211 | 356 | 3763 | 0.0946054 | 9.46054 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --------- | ------- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  | 211 | 356 | 3763 | 0.0946054 | 9.46054 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --------- | ------- |

Case (TWC) Untreated Worst

|  | 132 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | ------- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  |  | Cardio- |  |  |  |  |  |
| --- | ----------------------- | -------------- | -------- | ------ | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  | Communications | personal | Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple Complex |  |  |  |  | pulmonary |  |  |  |  |  |

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

|  | 223 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 9

Total Human

|  |  | Translation & |  | Total Tasks |  |  |
| --- | --- | ------------- | --- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) |  | Extremity Standing (g) | Equipment Ops |  | Category |  |
| ----- | --- | ---------------------- | ------------- | --------- | ---------- | --- |
|  |  | (microgravity) |  | Condition | Tasks Full |  |

Mission Treated Best

|  |  |  | 211 | 211 | 3763 0.0560723 | 5.60723 |
| --- | --- | --- | --- | --- | -------------- | ------- |

Case (TBC) Untreated Best

|  |  |  | 211 | 211 | 3763 0.0560723 | 5.60723 |
| --- | --- | --- | --- | --- | -------------- | ------- |

Case (UTBC) Treated Worst

|  |  |  | 211 | 211 | 3763 0.0560723 | 5.60723 |
| --- | --- | --- | --- | --- | -------------- | ------- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| ------- | --- | --------- | ------ | ---- | ------ | --- |

Case (UTWC) 2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 10

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

CP2: The CP2 duration is from 84-364 days (which could encompass the entire mission). In a best-case treated scenario, the cardiopulmonary HSTC would be affected but for a short duration - much less than the CP2 duration. Thus, it was unaffected for the best-case treated scenario since TTL is based on CP2 duration. In the worst-case treated scenario, it was felt that the cardiopulmonary HSTC should remain affected despite the possibility of a prolonged CP2 because PE would interfere with nominally performing the tasks in this category, possibly for the CP2 duration.

CP3: No comment.

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

2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 11

2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 12

## REFERENCES

Reference

- Anand, A. C., Jha, S. K., Saha, A., Sharma, V., & Adya, C. M. (2001). Thrombosis as a complication of extended stay at high altitude. Natl Med J

India, 14(4), 197-201.

- Barratt, M. R., Baker, E. S., & Pool, S. L. (2019). Principles of Clinical Medicine for Space Flight (2nd ed. 2019 ed.). New York, NY: New York,

- NY: Springer New York.

- Barritt, D., & Jordan, S. (1960). Anticoagulant drugs in the treatment of pulmonary embolism: a controlled trial. The Lancet, 275(7138), 1309-

1312.

- Carson, J. L., Kelley, M. A., et al. (1992). The clinical course of pulmonary embolism. New England Journal of Medicine, 326(19), 1240-1245.

Retrieved from https://www.nejm.org/doi/pdf/10.1056/NEJM199205073261902.

- Cohen, A. T., Agnelli, G., et al. (2007). Venous thromboembolism (VTE) in Europe. The number of VTE events and associated morbidity and

mortality. Thromb Haemost, 98(4), 756-764.

- Freeman, R. J., Li, Y., & Niebuhr, D. W. (2011). Descriptive Epidemiology and Natural History of Idiopathic Venous Thromboembolism in U.S.

Active Duty Enlisted Personnel, 1998–2007. Military Medicine, 176(5), 537-543. doi:10.7205/milmed-d-10-00381.

- Heit, J. A. (2015). Epidemiology of venous thromboembolism. Nat Rev Cardiol, 12(8), 464-474. doi:10.1038/nrcardio.2015.83.

- Huisman, M. V., Büller, H. R., et al. (1989). Unexpected high prevalence of silent pulmonary embolism in patients with deep venous thrombosis.

Chest, 95(3), 498-502. doi:10.1378/chest.95.3.498.

- Janata, K., Holzer, M., et al. (2002). Mortality of patients with pulmonary embolism. Wiener klinische Wochenschrift, 114(17-18), 766-772.

Retrieved from http://europepmc.org/abstract/MED/12416281.

- Kearon, C., Akl, E. A., et al. (2016). Antithrombotic Therapy for VTE Disease: CHEST Guideline and Expert Panel Report. Chest, 149(2), 315-

352. doi:10.1016/j.chest.2015.11.026.

- Marshall-Goebel K, Laurie SS, Alferova IV, et al. Assessment of Jugular Venous Blood Flow Stasis and Thrombosis During Spaceflight

[published correction appears in JAMA Netw Open. 2020 Jan 3;3(1):e1920195]. JAMA Netw Open. 2019;2(11):e1915011. Published 2019 Nov 1.

- Naess, I. A., Christiansen, S. C., et al. (2007). Incidence and mortality of venous thrombosis: a population-based study. J Thromb Haemost,

5(4), 692-699. doi:10.1111/j.1538-7836.2007.02450.x.

- Perone, N., Bounameaux, H., & Perrier, A. (2001). Comparison of four strategies for diagnosing deep vein thrombosis: a cost-effectiveness

analysis. The American journal of medicine, 110(1), 33-40. doi:https://doi.org/10.1016/S0002-9343(00)00598-2.

- Raskob, G. E., Angchaisuksiri, P., et al. (2014). Thrombosis: a major contributor to the global disease burden. J Thromb Haemost, 12(10),

1580-1590. doi:10.1111/jth.12698

- Robertson, L., Kesteven, P., & McCaslin, J. E. (2015). Oral direct thrombin inhibitors or oral factor Xa inhibitors for the treatment of deep vein

thrombosis. Cochrane Database Syst Rev(6), Cd010956. doi:10.1002/14651858.CD010956.pub2.

- Spencer, F. A., Gore, J. M., et al. (2008). Patient outcomes after deep vein thrombosis and pulmonary embolism: the Worcester Venous

Thromboembolism Study. Arch Intern Med, 168(4), 425-430. doi:10.1001/archinternmed.2007.69.

- Stein, P. D., Henry, J. W., & Relyea, B. (1995). Untreated patients with pulmonary embolism. Outcome, clinical, and laboratory assessment.

Chest, 107(4), 931-935. doi:10.1378/chest.107.4.931.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

### CAC Coronary Artery Calcium

### CHS Crew Health and Safety

2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 13

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

2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 14

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

2/13/2023 10:41:17 AM ICL119_Venous Thromboembolism Cliff page: 15

---

## Source metadata

```yaml
source_filename: "venous-thromboembolism-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/14LhVjbZWoDhaWJy_rlIbD7hUSIHknwTv/view"
source_drive_id: "14LhVjbZWoDhaWJy_rlIbD7hUSIHknwTv"
source_sha256: 41f4ded1ce5ea061d12691b4e17b70da7e8f4996c5ce422b764ef5fd8293f7b2
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 15
ocr_performed: false
```
