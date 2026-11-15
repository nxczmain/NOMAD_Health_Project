# Hemorrhoids CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1DV1Enz_OyURIfTN6BxHopOck-xecM5FF/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 119

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

ICL67_Hemorrhoids Hemorrhoids are one of the most common medical morbidities on Earth. Asymptomatic hemorrhoids can be diagnosed incidentally in 39% of individuals undergoing colorectal cancer screening, the prevalence of symptomatic hemorrhoids in the U.S. is 4.4% (Mott et. al., 2018, Lohsiriwat et. al. 2015, Johanson et. al., 1990). They develop when the venous drainage of the anus is altered leading to dilation of the venous plexus that creates an outgrowth of the anal mucosa from the rectal wall. Hemorrhoids can be classified as internal or external. External hemorrhoids usually require no specific treatment unless they become thrombosed. Depending upon their location and the extent of prolapse and their ability to be reduced, internal hemorrhoids can be graded on a scale from I-IV. However, while this system grades internal hemorrhoids anatomically, it falls short of grading hemorrhoids by complications such as pressure, pain, and bleeding.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

- Upon review of Spaceflight evidence: 4 events occurred over 45.49 person-years for an IR of 0.08793 (95%CI: 0.02794, 0.2121). Data from

previous LSAH data pulls (Walton et. Al., 2010).

### ANALOG LITERATURE

Analog data largely stems from two studies evaluating submarine crews (Tansey 1979, and Thomas 2003). During the Polaris submarine patrols from 1963-1973, there were 5 hemorrhoids that required surgical management between 1963-1967, and an additional 6 thrombosed hemorrhoids requiring sick days between 1968-1973. The average incidence rates ultimately calculated from these missions was 0.0126 per person years, however, it is notable that this is a WC incidence as we do not know about mildly symptomatic hemorrhoids not leading to sick time or surgical management. Thomas et. al. discusses submarine crews more recently. Review of the medical morbidities included 4 hemorrhoids in officers which were felt to be a reasonable surrogate for astronauts leading to a calculated incidence of 0.007 per person year.

### TERRESTRIAL LITERATURE

Our best terrestrial evidence stems from the Everhart review of 2009. The authors evaluated the National Ambulatory Medical Care Survey, National Hospital Ambulatory Medical Care Survey (2003-2005), and Healthcare Cost and Utilization Project Nationwide Inpatient Sample. Among those aged 15-44, the incidence of hemorrhoids leading to ambulatory visits was 569/100,000 in those 15-44 years of age, and 1294/100,000 in those 45-64 years of age which calculates to 0.0057 and 0.0129 per person year, respectively.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 0.088 and SD 0.044

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate given the spaceflight data (4 events over 45.49 person-years) under and uninformative prior is Gamma (shape=3.972, rate=45.202) with mean 0.088 and SD 0.044. As there were limitations to combining this incidence data with the terrestrial and analog data in addition to incomplete evidence, the decision was made to only include spaceflight incidence. Importantly, the 8/24/2023 5:17:19 PM ICL67_Hemorrhoids Cliff page: 1

spaceflight incidence is 8-15-fold higher than the reported incidences uncovered by our analog and terrestrial search. Understanding that this could be biased by a low number, we are also comfortable with a more conservative incidence decision in that spaceflight physiology may theoretically increase the risk of hemorrhoids as there is a known increase in constipation and there may be changes in venous flow or straining in microgravity. TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0878722 SD 0.0440907 Gamma (Shape): 3.972 (Rate): 45.202 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Walton, et al. 2010 Spaceflight 3 Tansey, et al. 1979 Analog 3 Thomas, et al. 2003 Analog 3 Everhart, et al. 2009 Terrestrial 3 Johanson, et al. 1990 Terrestrial 2 Spaceflight, Analog, and Terrestrial incidences are all likely limited by underreporting in that most cases are fairly benign and these incidence rates are more reflective of more pathologic disease. With that said, we have reasonable level of confidence in the data sets themselves as they all have fairly robust numbers with which to evaluate hemorrhoid incidence. 8/24/2023 5:17:19 PM ICL67_Hemorrhoids Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

In addition to the annual medical examination, preflight exams also include a rectal exam and occult blood testing. Additional gastrointestinal exams include proctosigmoidoscopy for those over the age of 40 and colonoscopy for those over the age of 50.

### BEST CASE SCENARIO DEFINITION

Symptomatic hemorrhoids that respond to topical treatment and dietary and fluid modification (Stages I and II).

### WORSE CASE SCENARIO DEFINITION

Moderate or severe hemorrhoids refractory to initial treatment, or with excessive bleeding (Stages III and IV)

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

There are multiple ways to calculate a worst-case definition. Given the definition, the most logical first search would be to evaluate the prevalence of bleeding or other severe complications from hemorrhoids. However, our effort did not reveal quality evidence to calculate such a probability.

Another would be to evaluate surgical/procedural rates under the assumption that this may represent hemorrhoids refractory to initial treatment.

However, the procedural rate may be more reflective of the grade of hemorrhoids, and with that said, the BC and WC definition do draw a line between Grade 1-2 and Grade 3-4 hemorrhoids. Lastly, as with RTDC, one can infer that hospitalization rate may represent a worst-case scenario.

When searching for hospitalization rates, we also realized that this number includes admissions for surgery thus combining the probabilities of admissions for complications and surgeries for grade 3-4 hemorrhoids. Everhart et al. 2009 in evaluated the National Ambulatory Medical Care Survey, National Hospital Ambulatory Medical Care Survey (2003-2005), and Healthcare Cost and Utilization Project Nationwide Inpatient Sample revealing that among those aged 15-44, the incidence of hemorrhoids was 569/100,000 and the hospitalization rate was 8/100,000 in the same sample of patients. Thus, the hospitalization probability was 1.4%. If evaluating by grade, an Austrian prospective Colorectal cancer study of 976 patients reported on incidental hemorrhoid incidence by grade. 72.89% grade 1, 18.42% grade 2, 8.16% grade 3, 0.53% grade 4 (Riss et. al. 2012). Thus, WC incidence by Grade 3+4 = 8.69%. Lastly, another review estimates that 5-10% of patients fail to respond to conservative measures and require surgical management (Cerato et. al. 2014). Though imperfect, in also considering that astronauts receive preflight medical evaluation which may diminish the rate of WC scenarios occurring in spaceflight, an estimation of 5% is reasonable.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Cerato, et al. 2014 Terrestrial 3 Everhart, et al. 2009 Terrestrial 3 Riss, et al. 2012 Terrestrial 3 As explained above, given finding data to meet the exact definition is difficult, we can't provide the highest level of confidence for each individual study. However, collectively these studies give high confidence in the BC/WC probability. 8/24/2023 5:17:19 PM ICL67_Hemorrhoids Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 0.088 95 - 95 100 0.617 0.172735 72 168 0 0 0 0 0 Case (TBC) and SD 0.044 Treated Worst 5 - 5 100 0.7 17.114 168 8760 0 0 1.4 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.617 13.7258 72 240 0.345469 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.7 31.1188 240 8760 28.0096 0 1.4 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/24/2023 5:17:19 PM ICL67_Hemorrhoids Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

The terrestrial first-line of management is conservative and includes high-fiber diet (25-35 g per day), fiber supplementation, increased water intake, warm water (sitz) baths, and stool softeners. There are also numerous topical modalities including astringents like witch hazel, protectants like zinc oxide, decongestants like phenylephrine, corticosteroids, and topical anesthetics. Over-the-counter hemorrhoid preparations often include combinations of two ore more of these. Topical nitroglycerin can assist with thrombosed hemorrhoids and anal fissures. Topical compounded nifedipine can also help with pain relief. Botulinum toxin injection into the external anal sphincter can also decrease the pain of thrombosed external hemorrhoids. Lastly, surgical options include rubber band ligation, infrared photocoagulation, excisional hemorrhoidectomy, stapled hemorrhoidopexy, and hemorrhoidal artery ligation with or without mucopexy (Mott et. al., 2018). Unfortunately, spaceflight limits the feasibility of the vast majority of these treatment options, however, fortunately, this condition is most often benign rarely warranting RTDC or LOCL. The duration may depend on the individual and the treatments available during spaceflight.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The TBC, by definition, involves the use of dietary and fluid modifications and topical treatments for which the uncomplicated hemorrhoids respond to. By definition, there would not be RTDC or LOCL for this scenario, however, the duration may vary by treatment options available and the individual. With a paucity of data to guide duration of 3-7 days was chosen based off of clinical experience. Furthermore, this max was chosen because steroid ointments for hemorrhoids are often not given beyond 7 days.

TREATED WORST CASE SCENARIO (TWC) COMMENTS In TWC scenarios we are evaluating hemorrhoids that are complicated by continued pain and bleeding despite initial conservative management.

The WC definition is broad and may include hemorrhoids that are capable of treatment during spaceflight with more advanced pharmacologic modalities or rubber band ligation, but also may include thrombosed external hemorrhoids or grade 3-4 internal hemorrhoids which may require surgical management that will not be possible. Thus, for this scenario, the duration may vary widely. With a paucity of data to guide duration, the TWC would range from 168 hours (7 days) given this was the end of failed conservative management for TBC, and potentially could now be rapidly treated with band ligation all the way to 8760 hours (365 days) as many grade 3 and grade 4 hemorrhoids will not resolve spontaneously or with pharmacologic options and continue to remain symptomatic.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS UTBC is a scenario in which uncomplicated hemorrhoids resolve with expectant management alone. By definition, there would not be RTDC or LOCL for this scenario, however, the duration of mild hemorrhoids without treatment is not truly known. Some may only complain of symptoms for a few days whereas many uncomplicated hemorrhoids may take up to 10 days to resolve spontaneously.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS As described in the TWC scenario, worst case hemorrhoids often include those that require surgical management. Without surgical management or even medical management, as these must be untreated by definition, there is a low chance that these resolve. Without robust data to provide evidence for a duration, a broad range of 240 hours to 8760 hours (10 to 365 days) was estimated. These numbers were chosen by taking the max of the untreated best case and the treated worst case.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Sheikh, et al. 2020 Terrestrial Agbo, 2011 Terrestrial 2 Davis, 2018 Terrestrial Yano, 2015 Terrestrial With exception of treated best case scenarios, there is almost no evidence to instill confidence in durations during spaceflight. This is especially true of the WC scenarios for which the vast majority of those that meet this diagnosis require surgery that will not be possible. The duration max of 365 days was chosen arbitrarily, however, we have confidence that this is not an overestimation in that Yano et. al., 2015 attempted treating grade 8/24/2023 5:17:19 PM ICL67_Hemorrhoids Cliff page: 5

3 hemorrhoids and one of the therapies was only 20% effective at 365 days. 80% of those patient continued to have symptoms. With that said some complicated hemorrhoids that meet this WC definition may be able to resolve with expectant management, pharmacologic management, and banding. In sum, our level of confidence is overall level 2, neutral.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Cerato, et al. 2014 Terrestrial Everhart, et al. 2009 Terrestrial 3 Riss, et al. 2012 Terrestrial As extensively described in the BC/WC probability comments, the need for hospitalization or surgery ranges from about 1.4-10%. While hospitalization (often for surgery) is a surrogate definition for RTDC in this scenario, all hemorrhoids that require surgery for pain management don’t necessarily warrant RTDC during a mission. Thus, based off of Everhart’s very large terrestrial data set, a reasonable RTDC is the most liberal percentage of this range: 1.4%. As even the TWC scenario requires surgical management that will be unavailable in spaceflight, 1.4% was chosen for the RTDC for both TWC and UTWC scenarios. RTDC is 0% for best case scenarios.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Everhart, et al. 2009 Terrestrial Halverson, 2007 Terrestrial 3 Mcloud, et al. 2006 Terrestrial Upon evaluation of Everhart’s large terrestrial data set the proportion of hemorrhoid cases in those ages 15-44 was 0.35% and for those 45-64 was 0.62%. Given the health and pre-flight screening of the astronauts, progression of hemorrhoids to the worst case scenario is likely more rare than in comparison to the general population, a reasonable LOCL is the more liberal of the two numbers: 0.35%. Interestingly, however, is that nearly all of the deaths that occur in the setting of hemorrhoids occur following sepsis from rubber band ligation or surgery. Thus, UTWC is likely near 0% without having an exact number, and if death occurred after RBL in spaceflight, the death in the absence of sepsis (a separate condition) is also likely 0%. LOCL is 0% for best case scenarios.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

## Overview

Hemorrhoid treatment has been provided to several crewmembers since 2012, each unique and individualized. While best case scenarios respond to topical treatment, worst case scenarios involve hemorrhoids that are refractory to initial treatment or may have excessive bleeding.

- CNES: None

### Diagnostic Scope and Resourcing

In the best-case scenario, diagnosis is based on history and physical examination. The physical examination would include a digital rectal exam.

For the worst-case scenario, additionally, the physical examination would include a digital rectal exam and anorectal exam with a metal anoscope if present and needed. While these exams may be complicated, foot loops and the walls can be used for stabilization. Furthermore, ground based communications can be utilized as necessary. Lastly, while there may be bleeding in the worst case, this CLiFF does not assume bleeding leading to hemodynamic instability where vital signs are warranted.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.617 hours CP1 WC (Treated or Untreated): 0.700 hours The highest scope of practice needed for diagnosis in the best-case scenario is 3 (experience ED/ICU nurse), and for worst case, 4 (Intern/PA/NP).

### Treatment Scope and Resourcing

In the terrestrial population, there are an assortment of pharmacologic treatment options that can be used to treat hemorrhoids. Those would include various creams, ointments, and suppositories that include low-dose topical steroids like hydrocortisone 1%, phenylephrine 0.25%, witch hazel, nitroglycerine 0.4%, zinc oxide, sitz baths, and topical compounded nifedipine. Furthermore, utilizing psyllium or other stool softeners can 8/24/2023 5:17:19 PM ICL67_Hemorrhoids Cliff page: 6

also reduce pain/irritation of the hemorrhoids.

In best case scenarios during spaceflight, we will recommend a high fiber diet, psyllium, and docusate sodium. Topical hydrocortisone 1% and phenylephrine 0.25% have also been previously used and are most likely to be available in a space formulary. In worst-case scenarios, these same pharmacologic options would be used, and if bleeding were occurring, a simple hemorrhoid suction ligator kit with rubber bands could be used to help treat Grade III or IV hemorrhoids. More advanced terrestrial treatment options such as infrared photocoagulation, hemorrhoidectomy, hemorrhoidal artery ligation with or without mucopexy are beyond the scope of treatment in spaceflight. As above, this CLiFF is not assuming bleeding concerning enough to lead to hemodynamic instability and thus IV access or IV fluids are not scoped to this condition.

### Communications and Support Needs

While real-time video and audio loop communications are desired for diagnosis and treatment, they are not considered a necessity, particularly in the best-case scenario.

### IMM CLIFF RECONCILATION COMMENTS

Numerous sources from the previous IMM were used for calculation of the incidence, duration, RTDC, and LOCL, however some of the interpretations of this data were different as reflected in this CLiFF.

### LIMITATIONS SUMMARY

There are numerous limitations of our assumptions during the creation of this CLiFF. First one limitation, is that while 4 cases have occurred in spaceflight, this n is still low and this spaceflight data could not be combined with the terrestrial and analog data for a combined incidence calculation. Unfortunately, with the statistical methods being used, this data could not be combined with terrestrial and analog studies without unduly influencing the estimated incidence. However, the value that was derived from spaceflight data predicts one case of hemorrhoids approximately every 11.4 person-years which seems reasonable. The spaceflight incidence is notable for being 8-15x that of the terrestrial and analog studies and it is unclear if this is because of the low n or because there are unique risk factors to spaceflight that increase its incidence. With that said, the most important limitation of this CLiFF is that the range of severity of the worst case definition makes calculations of the duration, RTDC, LOCL difficult as the WC can range from bleeding or thrombosis from an external hemorrhoid that fails conservative measures but can ultimately be treated to a grade 4 hemorrhoid that cannot be managed in spaceflight and continues to cause morbidity. Lastly, just as it is likely to be in terrestrial studies, under-reporting for this condition could have been significant during past space missions due to asymptomatic hemorrhoids that may not have been apparent to the crew. This may result in underestimation of the incidence. Despite these limitations, the terrestrial data used was robust, there were good analog studies to reference, and we had spaceflight data available to create this CLiFF. 8/24/2023 5:17:19 PM ICL67_Hemorrhoids Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  |  |  |  |  |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  | 89 |  |  | 145 |  | 13 |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  | 664 |  | 89 |  |  | 145 |  | 13 |  |  |  |
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

| Best |  |  |  |  |  |  |  |  | 13 | 3763 | 0.003454690.345469 |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ------------------ | --- |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  |  | 211 | 1020 | 3763 | 0.27106 | 27.106 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | ------- | ------ |

Case (UTBC) Treated Worst

|  | 132 |  |  |  |  |  | 34 | 211 | 1288 | 3763 | 0.34228 | 34.228 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | ------- | ------ |

Case (TWC) Untreated Worst

|  | 132 |  |  |  |  |  | 34 | 211 | 1288 | 3763 | 0.34228 | 34.228 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | ------- | ------ |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  | Inter- |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | -------------- | -------- | ------ | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  |  | Communications | personal | Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple | Complex |  | Skills |  |  | pulmonary |  |  |  |  |  |

Treated Best

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  | 13 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

| Case |  | 664 |  |  |  |  |  |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

(UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| -------------------- | --- | --- | --- | -------------------------- | ----------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| 8/24/2023 5:17:19 PM |  |  |  |  | ICL67_Hemorrhoids Cliff |  |  |  |  |  |  | page: 8 |
Total Human

|  | Translation & |  | Total Tasks |  |
| --- | ------------- | --- | ----------- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | ---------------------- | ------------- | -------------------- | --- |
|  | (microgravity) |  | Condition Tasks Full |  |

Mission Treated Best

|  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  |  | 13 3763 | 0.003454690.345469 |
| --- | --- | --- | ------- | ------------------ |

Case (UTBC) Treated Worst

|  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 |  | 34 211 | 1054 3763 | 0.280096 28.0096 |
| --- | --- | ------ | --------- | ---------------- |

Case (UTWC)

| 8/24/2023 5:17:19 PM | ICL67_Hemorrhoids Cliff |  |  | page: 9 |
| -------------------- | ----------------------- | --- | --- | ------- |
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

CP2: None. CP3: None.

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

8/24/2023 5:17:19 PM ICL67_Hemorrhoids Cliff page: 10

## REFERENCES

Reference Mott T, Latimer K, Edwards C. Hemorrhoids: Diagnosis and Treatment Options. Am Fam Physician. 2018 Feb 1;97(3):172-179.

Loshiriwat V. Treatment of hemorrhoids: a coloproctologist’s view. World J Gastroenterol 2015; 21(31):9245-9252.

Johanson JF, Sonnenberg A. The prevalence of hemorrhoids and chronic constipation. An epidemiologic study. Gastroenterology. 1990 Feb;98(2):380-6. doi: 10.1016/0016-5085(90)90828-o. PMID: 2295392.

Cerato MM et al. Surgical Treatment of hemorrhoids: a critical appraisal of the current options. Arq Bras Cir Dig. 2014; 27(1):66-70.

Everhart JE, et al. Burden of digestive diseases in the United States part II: lower gastrointestinal diseases. 2009; 136(3):741-754.

Lohsiriwat V. Hemorrhoids: from basic pathophysiology to clinical management. World J Gastroenterol. 2012; 18(17):2009-2014.

Riss S, et al. The prevalence of hemorrhoids in adults. Int J Colorectal Dis. 2012; 27(2):215-20.

Walton M, Kerstman E, IMM. In-flight Compilation v20100414_Incidence_calculation. 2010.

Sheikh P, Lohsiriwat V, Shelygin Y. Micronized Purified Flavonoid Fraction in Hemorrhoid Disease: A Systematic Review and Meta-Analysis. Adv Ther. 2020;37(6):2792-2812. doi:10.1007/s12325-020-01353-7 Agbo SP. Surgical Management of Hemorrhoids. J Surg Tech Case Rep. 2011; 3(2):68-75.

Davis BR. The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Hemorrhoids. Dis Colon Rectum 2018; 61:284-292. Yano T, Yano K. Comparison of injection sclerotherapy between 5% phenol in almond oil and aluminum potassium sulfate and tannic acid for grade 3 hemorrhoids. Ann Coloproctol. 2015; 31(3):103-105.

Halverson Am. Hemorrhoids. Clin Colon Rectal Surg. 2007; 20(2):77-85.

McCloud JM, Jameson JS, Scott AND. Life-threatening sepsis following treatment for haemorrhoids: a systematic review. Colorectal Dis. 2006; 8(9):748-755. Cocurullo G, et. al. The non-surgical management for hemorrhoidal disease. A systematic review. G Chir. 2017; 38(1):5-14.

Jacobs, D. (2014). Hemorrhoids. New England Journal of Medicine, 371(10), 944-951.

Greenspon J, Williams SB, Young HA, Orkin BA. Thrombosed external hemorrhoids: outcome after conservative or surgical management. Dis Colon Rectum. 2004 Sep;47(9):1493-8. doi: 10.1007/s10350-004-0607-y. Epub 2004 Aug 12. PMID: 15486746.

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

CP1 Clinical Phase 1 CP2 Clinical Phase 2 8/24/2023 5:17:19 PM ICL67_Hemorrhoids Cliff page: 11

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

8/24/2023 5:17:19 PM ICL67_Hemorrhoids Cliff page: 12

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

8/24/2023 5:17:19 PM ICL67_Hemorrhoids Cliff page: 13

---

## Source metadata

```yaml
source_filename: "hemorrhoids-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1DV1Enz_OyURIfTN6BxHopOck-xecM5FF/view"
source_drive_id: "1DV1Enz_OyURIfTN6BxHopOck-xecM5FF"
source_sha256: e3ac8844eeb858122e40ab416d95e5822c71d32e5e17888812860da30ae9a15b
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
