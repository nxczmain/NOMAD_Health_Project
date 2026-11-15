# Appendicitis CLiFF

[View original PDF](https://drive.google.com/file/d/1XHqiizZV6NbgBVx7xoEY66-1SAJPJou3/view) · **10 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

### Appendicitis Cliff

## Branch Baseline

Appendicitis is acute inflammation of the veriform appendix. It usually presents with abdominal pain, anorexia and tenderness especially referred to the lower right quadrant. Appendicitis is thought to result from obstruction of the appendiceal lumen typically by lymphoid hyperplasia but occasionally by a fecalith. Terrestrial standard or care is surgical treatment. Non-space remote care analogs, such as submarine crews and Antarctic explorers, have reported success with treatment consisting of bowel rest, intravenous fluids and appropriate antibiotics. There has not been a reported confirmed case of appendicitis in-flight the US Space Program to date. (Marshburn, 2008), (Campbell, 2004)

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

| Data Category: | Model |  |
| ----------------- | ----- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Lognormal |  |
| ----------- | --------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Mean: | 0.000934 |  |
| -------------------- | ------------------ | ------- |
| Standard Deviation: | 0.000103 |  |
| 5/11/2020 4:51:38 PM | Appendicitis Cliff | page: 1 |
## Incidence Comments

The majority of appendicitis cases occur in young adults (10-18 yrs old) or in the elderly, therefore most incidence rates reported in the literature are for these two age groups. A wide range of reported incidence rates was identified through the conducted literature search.

Because appendicitis has never occurred in flight, a Bayesian analysis on this condition, was prepared by NASA Glenn Research Center (Gilkey, 2012). To estimate the probability of a crewmember developing appendicitis during an exploration mission, it was assumed the incidence rates of appendicitis were constant over the period of interest. This in turn led to the assumption of the probability of occurrence following a Poisson distribution. General population data regarding the incidence rate of appendicitis were extracted using a longitudinal, nationally representative, population- based study that was conducted on the incidence of appendicitis among the general U.S. population using data from the National Ambulatory Medical Care Survey (NAMCS) and National Hospital Ambulatory Medical Care Survey (NHAMCS), 3-year average 2003 to 2005) (Everhart, 2008). Gender and race data in this source do not differentiate by age, thus incidence rates differentiating between males and females, and whites and blacks, have not been included in this calculation. Only data for the hospital discharges, all-listed diagnoses were included, as this data are presumably more reliable than data from ambulatory care visits. The incidence is 98/100,000 in females and 118/100,000 in males, for a ratio of 1:1.20. Using the data for the 45 to 64 year old age ranges, the average incidence rate of appendicitis for both males and females (total) was 9.30×10–4 events per person-year. The incidence rate for the 45 to 64 year old persons was used as this more accurately reflects the age of the active astronaut corps and does not run the risk of a higher incidence rate due to 15 to 24 year old range, which has the highest incidence rate (Ref. 8). The EF was estimated to be 1.2 using data from Addiss et al (ADDISS, 1990) which included data for gender stratified by age groups. Data regarding the incidence of appendicitis among the astronaut corps were obtained from the LSAH (Halm, 2012). There were no occurrences of appendicitis among in-flight astronauts, and there were no occurrences among female astronauts. The highest rate of incidence was among pre-flight male astronauts at 0.00143 events per person year. When male and female incidences were combined, the incidence rate of appendicitis was 0.00122 events per person-year. Because there was no age-differentiated data for male and females available for the general population, the total astronaut data for both males and females were used.

To improve the estimate of the rate of occurrence in the astronaut corps and provide a first-order approximation suitable for use in the GRC-IMM modeling effort, the following approach was taken using the numerical Bayesian update code WinBUGS. The general population data were used to determine an informed log-normal conjugate prior for the incidence rate of appendicitis among the general U.S. population. This was used as a prior to update LSAH pre-flight data in Step 1 of the Bayesian implementation, yielding a posterior for the updated incidence rate of appendicitis. In Step 2, the posterior of Step 1 was used as the prior and updated with LSAH in-flight data in WinBUGS. The result is the estimation for the incidence rate of appendicitis among astronauts during an exploration mission. This process returned an estimate of the rate of appendicitis in the astronaut corps with respect to the general population. This rate can be used as the input rate to a Poisson distribution probability model to estimate the probability of appendicitis occurring in-flight. The mean incidence rate of appendicitis for total in-flight astronauts was 0.000934 events per person-year, with a standard deviation of 0.000103 (Gilkey, 2012).

This model is limited in that it assumes an average incidence rate of appendicitis irrespective of environmental conditions and the cause of appendicitis. There were also limitations in the data for the general population; e.g. the data for male and female incidence rates, as well as for blacks and whites were not stratified by age. Everhart (Everhart, 2008) reports the rate among whites was twice that of blacks, while the rate for males was 20 percent greater than for females (these statements, however, do not take into account the ages being reported). According to Soreide, (Soreide, 1984) the highest incidence rates of appendicitis are found for patients 15 to 24 years of age, with 74 percent of all appendicitis cases found in the 5 to 34 year old age range. Another assumption was made to use only the hospital discharge data, not the ambulatory care data. Patients being discharged from the hospital presumably carry a more definitive diagnosis due to the availability of better imaging technology and the increased likelihood that exploratory surgery was conducted. However, it is likely a reasonable representation of the rate of appendicitis given the occurrence data available and given the assumptions made during construction of the estimate.

Future estimates may be more accurate if data for different genders and races are available for various age ranges. More accurate estimates can also be made with further analysis of appendicitis occurrence in post-flight astronaut sufferers as well as greater understanding of the physiological pathways that lead to the obstruction, inflammation, and infection of the appendix. The current model data will serve as the baseline for future estimates that utilize such biomechanical parameters.

Of note, the Russian space flight experience includes 2 cases of suspected appendicitis. In the first case (1982) the affected crewmember developed severe right lower quadrant abdominal pain on flight day 180 and medical evacuation was considered. However, it became apparent that his symptoms were secondary to ureterolithiasis. He became asymptomatic after several days and evacuation was avoided. The second case (1985) of appendicitis (1985) was suspected on flight day 63 and evacuation occurred on flight day 64. Upon return to Earth prostatitis was diagnosed (Campbell, 2004).

### Information Regarding Prevention

Measures utilized for prevention may potentially include preflight screening and selection, in-flight treatments, and prophylactic appendectomy.

Disqualifying conditions include, in general, any medical condition that may compromise mission operations or crew safety, or require urgent medical treatment while resident on the ISS. Chronic diseases or disorders of the alimentary tract are possibly disqualifying and will require evaluation. History of intestinal obstruction if due to any chronic or recurrent disease will be similarly evaluated. Surgery to relieve childhood pyloric stenosis, intussusceptions, or volvulus is not disqualifying if there are no sequelae. (NASA, 2007)

- Contingency measure(s): The risk of inability to treat an ill or injured crewmember specifically for appendicitis has been considered as one of the

potential risks of space exploration missions (Risin, 2009) but surgical vs. medical treatment is still TBD.

- Other: Prophylactic appendectomy has been utilized by some Antarctic programs in an attempt to decrease the risk of developing appendicitis

during exploration of remote environments. At this time prophylactic appendectomy for long duration flights is not recommended, but may be considered for exploration class missions. (Campbell, 2004). 5/11/2020 4:51:38 PM Appendicitis Cliff page: 2

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| -------------- | --------- | ------------ | --- |
| Gilkey, 2012 | 2 | Incidence |  |
| Everhart, 2008 | 2 | Incidence |  |
| ADDISS, 1990 | 2 | Incidence |  |
| Soreide, 1984 | 2 | Incidence |  |
| Campbell, 2004 | 2 | Incidence |  |
| Halm, 2012 | 1 | Incidence |  |

### Alternative Incidence Data

The National Institute of Health (Everhart, 2008) reported incidence rates for appendicitis based on data from the National Ambulatory Medical Care Survey (NAMCS) and National Hospital Ambulatory Medical Care Survey (NHAMCS) (3-year average, 2003–2005).

Gender demographics were not stratified by age, thus gender has not been included in the table. The overall incidence is 179/100,000 in females and 232/100,000 in males, ratio 1:1.29.

Everhart also noted that age-adjusted deaths from appendicitis were uncommon in 2004, with the large majority occurring among those age 65 years and older. (rate of 0.1 for the 45-64 year old age group, and 0.8 for those older than 65). (Everhart, 2008)

Campbell et al. studied appendicitis among the astronaut population on the ground based on data from the Longitudinal Study of Astronaut Health; there were 2 cases in 2,014,339 person-days or 0.99 in 1,000,000 person-days; 0.00000099 x 365 days, with a person-year incidence of 0.000361. A matched cohort of NASA employees had 14 cases in 6,798,818 person-days, or 2.06 in 1,000,000 person days, 0.00000206 x 365 days, with a person-year incidence of 0.000751. The publication does not include information on confidence interval or standard deviation.

Of note, this study used an analog cohort, astronaut corps, and a non-analog control group, terrestrial civil servants, comparable to Gilkey’s.

Campbell’s incidence rate is lower for both groups.

Lugg et al studied incidence of appendicitis among the population of the Australian Antarctic program and noted 43 cases from 1947-1972, and 37.2 cases from 1947 to 1979, both in 1,000,000 person-days, 0.0000372 x 365 days = 0.013578. (Campbell, 2004)

| 5/11/2020 4:51:38 PM | Appendicitis Cliff |  | page: 3 |
| -------------------- | ------------------ | --- | ------- |
### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.25 2 - 14 48 - 60 - 72 0 - 14 0 - 25 0 (best case scenario %: 80 - 85) ISS-based Treatment 100 0.5 17 - 50 0 - 12 - 24 0 - 50 100 0 - 100 (worst case scenario %: 15 - 20) Untreated Best Case 0 0 17 - 50 48 - 60 - 72 0 - 50 100 0 - 100 Untreated Worst Case 0 0 31 - 76 0 - 12 - 24 31 - 76 100 0 - 100 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 4:51:38 PM Appendicitis Cliff page: 4

### Scenario Comments

The best case scenario is defined as an uncomplicated course of appendicitis which responds to conservative medical treatment (antibiotics and symptomatic treatment) and involves relatively minor functional impairment.

The worst case scenario is defined as having a complicated course of appendicitis, that is not responsive to conservative treatment and involves significant systemic symptoms, severe pain, complications (such as ruptured appendix), and a major functional impairment.

The percentages of how often best versus worst case scenarios occur were determined based on two studies. The first study is Groetsch’s historical report of 16-20% recurrence rate of appendicitis requiring appendectomy in patients with prior appendicitis treated with antibiotics. (Groetsch, 2001)More recently, Tekin et al. indicated a 14.6% recurrence rate after conservative (non-surgical) treatment of appendicitis. (Tekin, 2008)Based on these data, the worst case scenario is estimated to occur in 15-20% of cases thus making the best case scenario 80- 85%. It is unknown how microgravity will affect the presentation, progression and severity of appendicitis. Due to shifting of abdominal organs an atypical presentation is a possibility, perhaps delaying diagnosis and initiation of treatment. Immunosuppression known to occur in-flight may play a role in a faster dissemination of infection. (Marshburn, 2008), (Campbell, 2004)

### Best Case Comments

Appendicitis is not included in the AMA Guides to the Evaluation of Permanent Impairment, which the IMM uses to derive the level of Functional Impairment (FI). Thus, in order to derive the functional impairment for appendicitis, several conditions were combined, including Colonic and Rectal disorders (Table 6-5, p.114), and Complex Regional Pain - LEI (Table 16-15, p.541) which was then converted to percentage of Whole Person Impairment (WPI) based on Table 16-1, p 495 and Table 16-10 pp.530-531. Combined FI ratings were then calculated combining the Colonic and Rectal FI and Whole Body Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606. (American Medical Association, 2008). For further description of gradings and calculations refer to this CliFF Appendix. The IMM severe non-space adaptation condition template was used to calculate the FI, except in the untreated best case scenario, where a higher class and grading were assigned to capture the severity of anticipated abdominal pain.

In clinical phase I, by definition a 100% FI is recognized. The duration of this phase is estimated to be 15 minutes, which encompasses use of the ISS Medical Checklist for examination and diagnosis of the affected crewmember. In clinical phase II FI is estimated at 2 to 14%. No duration for improvement with antibiotic treatment alone was found in the literature review. Based on clinical judgment the duration of treatment before improvement is seen in FI is estimated at 48 to 72 hours. For clinical phase III, the signs and symptoms are expected to resolve with medical therapy (IV antibiotics, IV fluids, and other medications), with the FI returning to 0% in most, but remaining up to 14% in a few.

It should be noted that medical management is not considered a terrestrial standard of care, but has been used successfully in remote environments such as submarines on patrol missions and Antarctic bases. (Campbell, 2004)

Medical treatment could delay the need for definitive surgical care until evacuation or completion of the mission. In analog populations, EVAC occurred at a rate of 5% for submariners (Glover, 1981), (Nice, 1987), and 20% in Antarctica (Campbell, 2004). Because of limited treatment options on orbit and the possibility of recurrence, the expectation is that risk of EVAC ranges from 0 to 25%, with no risk of LOCL.

### Worst Case Comments

Appendicitis is not included in the AMA Guides to the Evaluation of Permanent Impairment, which the IMM uses to derive the level of Functional Impairment (FI). Thus, in order to derive the functional impairment for appendicitis, several conditions were combined, including Colonic and Rectal disorders (Table 6-5, p.114), and Complex Regional Pain - LEI (Table 16-15, p.541) which was then converted to percentage of Whole Person Impairment (WPI) based on Table 16-1, p 495 and Table 16-10 pp.530-531. Combined FI ratings were then calculated combining the Colonic and Rectal FI and Whole Body Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606. (American Medical Association, 2008). For further description of gradings and calculations refer to this CliFF Appendix. The IMM severe non-space adaptation condition template was used to calculate the FI, except in the untreated best case scenario, where a higher class and grading were assigned to capture the severity of anticipated abdominal pain.

Similar to the best case scenario, a FI of 100% is assumed for clinical phase I. The duration of this phase is estimated as 30 minutes to follow ISS medical checklist procedures for abdominal pain. For clinical phase II, the FI is estimated at 17 to 50%. The estimated duration of clinical phase II was established using duration of antibiotic treatment in terrestrial guidelines (Solomkin, 2003), which recommend antibiotic treatment until resolution of clinical signs of infection, including normalization of temperature and WBC count and return of gastrointestinal function, which, the paper notes, should occur within 5 to 7 days (or 120 to 168 hours) from starting antibiotics. However, since this is an emergent EVAC, the duration is limited to 0-24 hours. In clinical phase III, because some recovery is expected by this point in the disease process, the FI for the worst case scenario is estimated to be lower than that estimated for clinical phase II, ranging from 0 to 50%. Evacuation (EVAC) is estimated to occur in 100% of the cases, based on the fact that surgical treatment is required in complicated cases of acute appendicitis (Craig, 2009). Acute appendicitis and ruptured retroperitoneal appendicitis are called “Class III medical events,” and require evacuation if occurring on orbit (Johnston, 2008). To capture uncertainty LOCL is estimated to range from 0% to 100%. 5/11/2020 4:51:38 PM Appendicitis Cliff page: 5

### Untreated Best Case Comments

Appendicitis is not included in the AMA Guides to the Evaluation of Permanent Impairment, which the IMM uses to derive the level of Functional Impairment (FI). Thus, in order to derive the functional impairment for appendicitis, several conditions were combined, including Colonic and Rectal disorders (Table 6-5, p.114), and Complex Regional Pain - LEI (Table 16-15, p.541) which was then converted to percentage of Whole Person Impairment (WPI) based on Table 16-1, p 495 and Table 16-10 pp.530-531. Combined FI ratings were then calculated combining the Colonic and Rectal FI and Whole Body Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606. (American Medical Association, 2008). For further description of gradings and calculations refer to this CliFF Appendix. The IMM severe non-space adaptation condition template was used to calculate the FI, except in the untreated best case scenario, where a higher class and grading were assigned to capture the severity of anticipated abdominal pain.

In clinical phase II, the FI is estimated to range from 17 to 50%, The duration for the untreated case is 24 to 48 hours assuming evacuation will take place within this timeframe. For clinical phase III, FI range is estimated at 0 to 50% depending on the severity of symptoms in the course of the disease. Clinical phase III mission end state results include EVAC, which is estimated to be 100%, based on the fact that EVAC is required for a Class III medical condition (Johnston, 2008). LOCL is estimated to be 0-100% to allow for uncertainty based on untreated disease.

### Untreated Worst Case Comments

Appendicitis is not included in the AMA Guides to the Evaluation of Permanent Impairment, which the IMM uses to derive the level of Functional Impairment (FI). Thus, in order to derive the functional impairment for appendicitis, several conditions were combined, including Colonic and Rectal disorders (Table 6-5, p.114), and Complex Regional Pain - LEI (Table 16-15, p.541) which was then converted to percentage of Whole Person Impairment (WPI) based on Table 16-1, p 495 and Table 16-10 pp.530-531. Combined FI ratings were then calculated combining the Colonic and Rectal FI and Whole Body Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606. (American Medical Association, 2008). For further description of gradings and calculations refer to this CliFF Appendix. The IMM severe non-space adaptation condition template was used to calculate the FI, except in the untreated best case scenario, where a higher class and grading were assigned to capture the severity of anticipated abdominal pain.

In the clinical phase II FI ranges from 31 to 76%. The duration for the untreated case is 0 to 24 hours assuming evacuation will take place within this timeframe. In Clinical Phase III FI remains 31 to 76%. Clinical phase III mission end state results include EVAC, which is estimated to be 100%, based on the fact that EVAC is required for a Class III medical condition (Johnston, 2008). LOCL is estimated to be 0-100% to allow for uncertainty based on untreated disease. Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

American Medical Association, 2008 3 FI Glover, 1981 2 EVAC Nice, 1987 2 EVAC Groetsch, 2001 4 BCWC Johnston, 2008 2 EVAC 5/11/2020 4:51:38 PM Appendicitis Cliff page: 6

### Additional Comments

- A PubMed search was conducted utilizing the keywords: appendicitis incidence and appendicitis AND epidemiology.

| 5/11/2020 4:51:38 PM | Appendicitis Cliff | page: 7 |
| -------------------- | ------------------ | ------- |
The Resource Table (RT) Units

|  | Units Units | Available |  |  |
| -------------- | ----------------- | ------------------ | ------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |
| Blood Oximeter | 1 1 | 1 No | Yes Monitor VS. |  |

Blood Pressure Cuff (regular, 1 1 2 No Yes Measure blood pressure large)

| Blood Pressure Monitor | 1 1 | 1 No | Yes Measure blood pressure |  |
| ---------------------- | ---- | ------ | ---------------------------------------- | --- |
| BZK wipes | 3 25 | 60 Yes | No Cleanse skin. |  |
| CMRS | 1 1 | 1 No | No Restrain crew member to ensure safety |  |

Ertapenem 1gm 0 1 6 Yes Yes Antibiotic when oral not tolerated (WC)

Flagyl (Metronidazole) 500mg 21 0 100 Yes Yes Oral anti-infective Gauze pads (4x4) 2 2 50 Yes No to absorb blood or fluids from skin

| IV administration set | 0 1 | 3 Yes | Yes IV fluid administration |  |
| --------------------- | --- | ----- | --------------------------- | --- |
| IV Cap | 0 1 | 5 Yes | No IV administration |  |

IV Catheter (18G, 20G, or 22G) 0 1 14 Yes Yes IV fluid administration

| IV Fluid 1L (1000mL) | 0 4 | 5 Yes | Yes to replenish fluids |  |
| ----------------------------- | --- | ------ | ---------------------------- | --- |
| IV Fluid Air Filter | 0 1 | 3 Yes | No To filter air from IV set |  |
| IV pressure infuser | 0 1 | 1 No | No IV Fluids infusion |  |
| Levaquin (levofloxacin) 500mg | 7 0 | 50 Yes | Yes Antibiotic |  |

Lidocaine (Xylocaine) plain 1%, 0 1 3 Yes Yes To decrease pain during rocephin or

| 10mL multi dose vial |  |  | ertapenem administration |  |
| -------------------- | --- | --- | ------------------------ | --- |

Medical tape 0 1 5 Yes No single-coated tapepressure adhesive tape

| Needle (23G) | 0 9 | 20 Yes | Yes For medication administration |  |
| ------------ | --- | ------ | --------------------------------- | --- |

Nitrile gloves (large, medium, and 1 1 30 Yes No Personal Protective equipment for CMO small) (pair)

| Promethazine (Phenergan) | 0 12 | 24 Yes | Yes Nausea relief |  |
| ------------------------ | ---- | ------ | ----------------- | --- |

25mg/mL 1 mL injectable Sharps container 0 1 40 No No To dispose of medical waste such as used medical needles, scalpels, IV catheters, razors, vials Stethoscope 1 1 2 No Yes to listen to lung,heart, and bowel sounds, to blood flow in arteries and veins Syringe (3cc) 0 10 20 Yes Yes For medication administration and to flush IV

| Thermometer | 1 1 | 1 No | No To measure temperature |  |
| ---------------------------- | --- | ----- | ------------------------- | --- |
| Toradol (Ketorolac) 30mg/mL, | 0 2 | 3 Yes | Yes pain relief |  |

2mL single dose vial

| 5/11/2020 4:51:38 PM |  | Appendicitis Cliff |  | page: 8 |
| -------------------- | --- | ------------------ | --- | ------- |
Units

|  | Units Units | Available |  |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- | --- |
|  | Required Required | At Start |  |  |  |
|  | Best Worst | Of |  |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |  |

Tourniquet 0 1 1 No No To stop blood flow and engorge vein, this facilitates IV insertion

| Vicodin HP (Hydrocodone/ | 12 0 | 30 Yes | Yes Pain relief |  |  |
| ------------------------ | ---- | ------ | --------------- | --- | --- |

Acetaminophen HP) 10 mg/660 mg

### Resource Comments

- In-flight Treatment(s): Antibiotics are available for treatment of acute intra-abdominal infections and analgesics are available for abdominal pain

(Mission Operations Directorate (MOD), 2011). Surgical capabilities are currently limited in flight. Percutaneous drainage and laparoscopic surgery might be available as future capabilities and would require vehicle capabilities, resources, and crew medical officer training. (Campbell, 2008). The condition, Appendicitis is not included in the ISS medical checklist. All resources in this table are listed in the ISS medical checklist (International Space Station Integrated Medical Group, 2006). Metronidazole was added as recommended by the Guidelines issued by the Infectious Diseases Society of America (Solomkin, 2003).

Of note, for Amikacin, Metronidazole and Rocephin; treatment of one crew member would deplete the total on-board supply. Dosage used in this table considers the available medications.

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |  |
| ----------------------------------------------- | --- | --------- | ------------ | --- | --- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 | Resources |  |  |
| Solomkin, 2003 |  | 3 | Resources |  |  |

### Level Of Evidence

| Input Data | LOE Average | Description |  | Range |  |
| ---------------------- | ---------------- | ------------------ | --- | ----- | ------- |
| Incidence | 1.83333333333333 | Excellent |  | 1-2 |  |
| Functional Impairment | 3 | Good |  | 2.1-3 |  |
| Best Case / Worst Case | 4 | Fair |  | 3.1-4 |  |
| EVAC / LOCL | 2 | Poor |  | 4.1-5 |  |
| Resources | 2.5 |  |  |  |  |
| QUALITY OF EVIDENCE | 2.66666666666667 |  |  |  |  |
| 5/11/2020 4:51:38 PM |  | Appendicitis Cliff |  |  | page: 9 |
### Reference List

Reference ADDISS DG, SHAFFER NATH, FOWLER BS, TAUXE RV. The Epidemiology of Appendicitis and Appendectomy in the United States. Am J Epidemiol 1990 Nov 1;132(5):910-25. American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. Brown JW. Crew height measurement, the Apollo-Soyuz test project medical report. Washington DC: NASA; 1977.

Campbell MR, Johnston SL, III, Marshburn T, Kane J, Lugg D. Nonoperative treatment of suspected appendicitis in remote medical care environments: implications for future spaceflight medical care. J Am Coll Surg 2004 May;198(5):822-30.

Campbell MR, Billica RD. Surgical Capabilities. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 123-37. Craig S. Appendicitis, Acute. WebMD 2009 June 1 [cited 2009 Dec 30];Available from: URL: http://emedicine.medscape.com Everhart JE. Appendicitis. In: Everhart JE, editor. The Burden of Digestive Diseases in the United States.Washington DC: US Department of Health and Human Services, Public Health Service, National Institutes of Health, National Institute of Diabetes and Digestive and Kidney Diseases ; 2008. p. 89-92. Gilkey KM, McRae MP, Griffin EA, Kalluri AS, Myers JG. Bayesian Analysis For Risk Assessment of Selected Medical Events in Support of the Integrated Medical Model Effort. Technical Paper. Cleveland, OH: National Aeronautics and Space Administration, Glenn Research Center;

2012. Report No.: NASA/TP-2012-217120.

Glover SD, Taylor EW. Surgical problems presenting at sea during 100 British Polaris submarine patrols. J R Nav Med Serv 1981;67(2):65-9.

Groetsch SMSJM. Medical Management of Acute Appendicitis: A Case Report. Journal of the American Board of Family Practice 2001;14(3):224-5. Halm, artnett, Mason, Murray, Wear M. Data from Lifetime Surveillance of Astronaut Health (LSAH) for Bayesian analysis. Gilkey K, editor.

2012. 7-20-2012.

International Space Station Integrated Medical Group. Medical Checklist ISS- All Expeditions. Houston: National Aeronautics and Space Administration; 2008. Johnston S, Arenare B, Smart K. Medical Evacuation and Vehicles for Transport. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 139-61.

Marshburn TH. Acute Care. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 101-22.

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

NASA OCHMO 80771201MED. NASA Crewmembers Medical Standards. Houston: NASA; 2007.

Nice DS. U.S. Navy medical communications and evacuations at sea. Mil Med 1987 Sep;152(9):446-51.

Risin D. Risk of Inability to Adequately Treat an Ill or Injured Crew Member. In: McPhee JC, Charles JB, editors. Human Health and Performance , Risks of Space Exploration Missions.Houston: National Aeronautics and Space Administration; 2009. p. 239-49.

Solomkin J, Mazuski J, Baron E, Sawyer R, Nathens A, DiPiro J, et al. Guidelines for the Selection of Anti infective Agents for Complicated Intra abdominal Infections. Clinical Infectious Diseases 2003 Oct 15;37(8):997-1005.

Soreide O. Appendicitis--a study of incidence, death rates and consumption of hospital resources. Postgrad Med J 1984 May;60(703):341-5. 5/11/2020 4:51:38 PM Appendicitis Cliff page: 10

---

## Source metadata

```yaml
source_filename: "appendicitis-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/1XHqiizZV6NbgBVx7xoEY66-1SAJPJou3/view"
source_drive_id: "1XHqiizZV6NbgBVx7xoEY66-1SAJPJou3"
source_sha256: dadea8aaa257223cbd85c9603d126324e234eee55dee91ddbb309f578384cc06
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 10
ocr_performed: false
```
