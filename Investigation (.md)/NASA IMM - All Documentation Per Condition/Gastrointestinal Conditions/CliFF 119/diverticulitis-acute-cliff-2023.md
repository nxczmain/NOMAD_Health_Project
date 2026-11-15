# Diverticulitis Acute CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1qEwlDQsgDZInixK6-Q8NUqzHtX_9j_1_/view) · **16 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Best Case](#best-case)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL35_Diverticulitis, Acute Wilkins et al, 2013 provides the following overview of acute diverticulitis terrestrially: “Uncomplicated diverticulitis is localized diverticular inflammation, whereas complicated diverticulitis is diverticular inflammation associated with an abscess, phlegmon, fistula, obstruction, bleeding, or perforation.

Patients with acute diverticulitis may present with left lower quadrant pain, tenderness, abdominal distention, and fever. Other symptoms may include anorexia, constipation, nausea, diarrhea, and dysuria. Initial laboratory studies include a complete blood count, basic metabolic panel, urinalysis, and measurement of C-reactive protein. Computed tomography, the most commonly performed imaging test, is useful to establish the diagnosis and the extent and severity of disease, and to exclude complications in selected patients. Colonoscopy is recommended four to six weeks after resolution of symptoms for patients with complicated disease or for another indication, such as age-appropriate screening. In mild, uncomplicated diverticulitis, antibiotics do not accelerate recovery, or prevent complications or recurrences. Hospitalization should be considered if patients have signs of peritonitis or there is suspicion of complicated diverticulitis. Inpatient management includes intravenous fluid resuscitation and intravenous antibiotics.

Patients with a localized abscess may be candidates for computed tomography–guided percutaneous drainage. Fifteen to 30 percent of patients admitted with acute diverticulitis require surgical intervention during that admission. Laparoscopic surgery results in a shorter length of stay, fewer complications, and lower in-hospital mortality compared with open colectomy. The decision to proceed to surgery in patients with recurrent diverticulitis should be individualized and based on patient preference, comorbidities, and lifestyle. Interventions to prevent recurrences of diverticulitis include increased intake of dietary fiber, exercise, cessation of smoking, and, in persons with a body mass index of 30 kg per m or higher, weight loss.”

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

No cases of diverticulitis during spaceflight have been observed/recorded to date in the literature. Antonsen et al, 2021, projected 156.45 incidents (130-182, 95% Confidence Interval) of diverticulitis during a simulated Accelerated Mars Mission (AMM) scenario with 426 days total trip time, and 603.3 (482-673, 95% Confidence Interval) of diverticulitis during a Standard Mars Mission scenario with 923 days total trip time. Both mission scenarios included 4 crewmembers, 2 male and 2 female. The AMM scenario assumed 60 surface EVAs in pairs. The SMM assumed 401 4-person EVAs. Both scenarios assumed solar maximum radiation levels. This reference was not used to inform the incidence for this CLiFF because the data driving the simulation was the terrestrial data included in the IMM. This CLiFF will update that terrestrial data.

### ANALOG LITERATURE

No analog studies for diverticulitis were identified in the literature.

### TERRESTRIAL LITERATURE

The majority of data available on incidence of diverticulitis is from terrestrial retrospective epidemiological reports. Overall, these indicate an increasing incidence of diverticulitis among US citizens over time, as well as an expected increase in incidence with age. There is also a slightly higher incidence among women (Bollom et al, 2017; Bharucha et al, 2015). Cao et al, 2018 and Strate et al, 2011 are both large prospective cohort studies of male subjects only from the Health Professionals Follow-up Study, examining the relationship of dietary meat intake and NSAID use, respectively, to diverticulitis. Subjects were 40-75 years of age. These references were not used to inform the incidence for this CLiFF since they exclude females. Bollom et al, 2017 is a large retrospective study utilizing the National Emergency Department Sample (NEDS) database and therefore only captures diverticulitis diagnosis that presented to the emergency department. It includes females and stratifies the incidence by age and sex. However, it only includes diverticulitis diagnoses that were made in the Emergency Department. Many cases of diverticulitis (particularly uncomplicated cases) are managed on an outpatient basis. Thus, this is anticipated to underestimate the true incidence of diverticulitis. Bharucha et al, 2015 is a retrospective study from the Rochester Epidemiology Projected database, including 3,222 diverticulitis patients in Olmstead County, MN over a 27 year period (1980-2007). It includes approximately 50% females and stratifies the results by age and gender. This includes outpatient, emergency department, and inpatient care. Notably, as is the case with all of the terrestrial studies considered, this incidence will overestimate the risk of diverticulitis in the astronaut corps since known risk factors for diverticulitis include sedentary lifestyle, obesity, smoking, and overuse of NSAIDs (all less common in the astronaut cohort). Recurrent cases were also included, which is also anticipated to overestimate the incidence for the astronaut corps as it is assumed that astronauts would either have definitive surgical intervention or not be qualified for 6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 1

spaceflight. Despite this, Bharucha et al, 2015 was felt to be the most representative data available for the incidence for this condition, once age- restricted to match the age of the astronaut corps. Thus, this study was used to inform the incidence for this CLiFF.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

- Males: Mean 0.001616 SD 6.628E-5 Females: Mean 0.00183 SD 5.703E-5

### INCIDENCE SUMMARY

Data from the terrestrial Rochester Epidemiological Project, Temporal Trends in the Incidence and Natural History of Diverticulitis: A Population- Based Study was used to inform the incidence for this CLiFF (Bharucha et al, 2015). Since the rate increased over time, we used estimates from the most recent period, 2000-2007. US Census data were used for population counts as well as age and sex distribution in Olmstead County during this period. The Bayesian posterior distributions for the age-adjusted (to flown astronauts) incidence rates given the terrestrial study, under uninformative priors is Gamma(shape=594.45, rate=367854.7) for males with mean 0.001616 and SD 6.628E-5, and Gamma(shape=430.29, rate=363729.1) for females with mean 0.00183 and SD 5.703E-5.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Male Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.00161599 SD 6.62798E-05 Gamma (Shape): 594.45 (Rate): 367855

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Female Crowns Any Contacts 6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 2

Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.001183 SD 5.70299E-05 Gamma (Shape): 430.29 (Rate): 363729 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Antonsen et al, 2021 Spaceflight 2 Cao et al, 2018 Terrestrial 1 Bollom et al, 2017 Terrestrial 2 Bharucha et al, 2015 Terrestrial 3 Strate et al, 2011 Terrestrial 1 Antonsen et al, 2021 provides a simulation-based projected incidence of diverticulitis during accelerated & standard-length Mars Missions. This was done using IMM. Cao et al, 2018 and Strate et al, 2011 are both large prospective cohort studies of male subjects only from the Health Professionals Follow-up Study, examining the relationship of dietary meat intake and NSAID use, respectively, to diverticulitis. Subjects were 40-75 years of age. Bollom et al, 2017 is a large retrospective study utilizing the National Emergency Department Sample (NEDS) database and therefore only captures diverticulitis diagnosis that presented to the emergency department. It, however, includes females. Bharucha et al, 2015 is a retrospective study from the Rochester Epidemiology Projected database, including 3,222 diverticulitis patients in Olmstead County, MN. It includes approximately 50% females and stratifies the results by age and gender. 6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

There are no specific pre-flight preventive measures to prevent diverticulitis. Crewmembers are typically very physically active and do not smoke, decreasing their risk for diverticulitis.

### BEST CASE SCENARIO DEFINITION

An uncomplicated case of diverticulitis that is self-limited or responds to oral or IV antibiotics.

### WORSE CASE SCENARIO DEFINITION

A complicated case of diverticulitis (i.e. abscess, perforation, fistula, obstruction), requiring IV antibiotics and/or percutaneous or surgical intervention. CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

The American Gastroenterological Association (AGA) Institute Guideline on the Management of Acute Diverticulitis reports that 15% of diverticulitis diagnoses are complicated 15%, defined as an abscess, perforation, fistula, or colonic obstruction (Stollman et al, 2015). This matches the worst- case scenario complicated diverticulitis parameters, but the worst-case scenario also includes "requiring IV antibiotics." The AGA recommends that antibiotics should be used selectively, rather than routinely, in patients with acute uncomplicated diverticulitis (Conditional recommendation, low quality of evidence). Despite this, the 15% value may be an underestimate of our worst-case scenario due to the inclusion of IV antibiotics in our worst-case scenario definition. Stollman and Raskin, 1999 reports that 15-30% of diverticulitis cases require surgical intervention during their hospital admission. Bharucha et al, 2015 in a retrospective study of 3,222 patients over 27 years from 1980-2007, reported 12% (386/3,222) of patients with diverticulitis experienced 1 or more complications, defined as pericolic abscess, peritonitis, obstruction, fistula, septicemia, bacteremia and/or stricture. 250 of these patients with complications required surgery. An additional 204 patients required surgery in this study. (Total of 14% - 454/3,222 required surgery). Based on the aforementioned studies, a range of worst-case probability from 12-30% was assigned and therefore the best-case scenario probability was assigned 70-88%.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Bharucha et al, 2015 Terrestrial 3 Stollman and Raskin, 1999 Terrestrial 2 Stollman et al, 2015 Terrestrial 3 Bharucha et al, 2015 is a retrospective study from the Rochester Epidemiology Projected database, including 3,222 diverticulitis patients in Olmstead County, MN from 1980-2007. Of the 386 patients with complicated disease, 63% were 60 or older, 31% were 40-59 yo, and 7% were <40 yo. Stollman and Raskin, 1999 is an American Academy of Gastroenterology Practice Guidelines for diverticulitis reporting specifically on need for surgical intervention, whereas Stollman et al, 2015 is a more recent management guideline from the American Gastroenterology Association (AGA) that reports complicated cases of diverticulitis, not limited to surgical cases. 6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### Condition TI% Duration TI% Duration TI% RTDC LOCL

### Case Probability

Scenario Composite Incidence % Preset Preset Preset Min Max Preset Min% Max% Min% Max%

- Treated Best Males: Mean 0.001616 70 - 88 100 1.75 15.3069 48 98.4 0 0 6 0 0.4

Case (TBC) SD 6.628E-5 Females: Mean 0.00183 SD Treated 5.703E-5 12 - 30 100 1.75 50 72 360 0 5.1 18.5 3.5 10.1

## Worst Case

(TWC) Untreated N/A N/A N/A 1.75 16.9413 72 840 0 4.6 17.6 0 1.1

## Best Case

(UTBC) Untreated N/A N/A N/A 1.75 100 72 8856 100 55 98 26 100

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

The general clinical approach to diverticulitis is to classify it as complicated vs. uncomplicated. If uncomplicated (not requiring surgical intervention, abscess, fistula, obstruction, perforation, etc.), the standard clinical practice is to treat supportively with or without a course of oral antibiotics. The data for outcomes in uncomplicated diverticulitis suggest that oral antibiotics are often not necessary, and the condition often self-resolves. In spaceflight, a more aggressive approach with antibiotics may be preferred. The RTDC surrogate initially selected for all scenarios was the requirement for surgery. However, this does not work well for the best-case scenario because requiring surgery forces a worst-case scenario based on the scenario definitions. Therefore, the requirement for hospitalization was used as an RTDC surrogate for the best-case scenarios and the requirement for surgical intervention was used as the RTDC surrogate for worst-case scenarios. See detailed comments for each scenario below.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The duration is based on data from a review article from the American Academy of Family Physicians (2-4 days for resolution of acute uncomplicated diverticulitis) (Wilkins et al, 2013), and Shabanzadeh and Wille‐Jørgensen, 2012 who reported an average resolution of leukocytosis in acute uncomplicated diverticulitis of between 2.5-4.1 day. Thus the duration was assigned a range of 2-4.1 days (48-98.4 hours). In a retrospective cohort study of 693 patients (54% female, average age 58.5yo) from the Kaiser Permanente southern California database, 2006- 2007, Etzioni et al. report 6% of patients with acute uncomplicated diverticulitis failed outpatient treatment, requiring hospitalization. Thus the RTDC probability was assigned a range of 0-6%. Daniels et al, 2016, in a multi-center randomized controlled trial of CT-proven primary acute uncomplicated, left-sided diverticulitis in the Netherlands, comparing antibiotic treatment to no antibiotic treatment reported a mortality of 0.4% in the treatment arm. Therefore, the LOCL probability for this scenario was assigned a range of 0-0.4%.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The duration for this scenario was assigned a range of 72-360 hours. The minimum duration of 72 hours, based on the average length of time patients have symptoms of uncomplicated diverticulitis before presenting to the hospital, from the best-case scenario (Jaung et al, 2021) will be used as the minimum duration in this scenario as well since no data was found indicating the length of time that patients have symptoms of complicated diverticulitis prior to presenting to the hospital. In a Cochrane Review meta-analysis, the averaged duration of hospital stay for complicated diverticulitis requiring open surgical resection was 7.9 days (Abraha et al, 2017). The maximum duration (360 hours, 15 days) was informed by a retrospective analysis of the nationwide inpatient sample from 1998-2000 that included 18,444 patients who underwent either open colectomy or laparoscopic colectomy for complications of diverticulitis (Guller et al, 2003). Data informing the RTDC probability come from studies regarding failure rates of initial conservative management (antibiotics +/- percutaneous drainage) for complicated diverticulitis. The minimum probability is based on a retrospective cohort of patients drawn from two databases in the UK, the Clinical Practice Research Datalink and the Hospital Episode Statistics. Patients with an incident case of perforated diverticulitis were included. 880 patients were managed without surgical intervention. 767/880 survived to discharge. 5.1% of survivors ultimately required surgical intervention. (Adiamah et al, 2021) In a similar retrospective cohort study of 135 patients with diverticular abscess in Canada managed with antibiotics and percutaneous drainage, 12.3% ultimately had surgery (Garfinkle et al, 2016). The maximum probability of RTDC is based on a single center randomized controlled trial of 137 patients with acute diverticulitis complicated by abscess at Westchester Medical Center, New York Medical College. Of the 81 patients assigned to antibiotics and percutaneous drainage, 15 (18.5%) failed conservative management, and required surgical intervention. The CRT capabilities for this scenario include antibiotics and percutaneous drainage. Thus, the RTDC probability was assigned a range of 5.1-18.5%. The minimum probability of LOCL for this scenario was assigned as 3.5% based on a 3.5% 30-day mortality rate in patients who received percutaneous drainage but not surgery for diverticular abscess (Gregersen et al, 2005). Chapman et al, 2005 reported an overall mortality for patients hospitalized with acute complicated diverticulitis of 6.5%. Adiamah et al, 2021 reported a survival rate of 96.3% at one year in patients under 65 years old (overall survival rate was much lower due to a dismal survival rate of only 39% in patients over 75 years). Given that the astronaut cohort is primarily under 65 years old, this corresponds to an LOCL probability of 4.7%. (Adiamah et al, 2021) The maximum probability 10.1% LOCL was also based on Gregersen et al, 2005, reported as the 30-day mortality rate for patients who received only antibiotics for diverticular abscess. Thus, the LOCL was assigned as 3.5-10.1%. UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS There is a paucity of data regarding truly untreated acute uncomplicated diverticulitis. However, there are many studies comparing use of antibiotics vs. no antibiotics in the treatment of acute uncomplicated diverticulitis. For the purposes of estimating the duration for this scenario these studies will be utilized, in particular, the arm without antibiotic treatment. Jaung et al, 2021, in a double-blinded randomized controlled trial of 180 patients hospitalized across 4 hospitals in New Zealand and Australia with CT proven acute diverticulitis, reported that patients had an average of 3 days of symptoms prior to admission. Therefore, the minimum duration will be assigned 72 hours. The duration of hospital stay in this study ranged from 26-60 hours. Chabok et al, 2012 reported a much longer duration of stay, in a similar multi-center randomized controlled trial of antiobiotics vs. no antiobiotics for acute uncomplicated diverticulitis involving 10 hospitals in Sweden and 1 hospital in Iceland, of 0-25 days in the untreated arm. In another radomized controlled trial of 528 patient with CT-proven acute primary, left-sided uncomplicated diverticulitis randomly assigned to observation vs. antibiotic treatment the inter-quartile range of 5-35 days (full range not provided) (Daniels et al, 2016). Therefore the duration range for this scenario was assigned a range of 72-840 hours (3-35 days). Notably, these studies are based on hospitalized patients. The duration for acute uncomplicated diverticulitis that receives outpatient management is not captured by these data. The RTDC surrogate for this scenario is admission to the hospital. Bolkenstein et al, 2018 presented data based on a retrospective cohort study of 751 patients with uncomplicated diverticulitis. 264 patients were treated as outpatients, without antibiotics in this study. Of these, 12 (4.6%) experienced "treatment failure" defined as, "Admittance to the hospital, mortality, complications (perforation, abscess, colonic obstruction, urinary tract infection, pneumonia), need for antibiotics, operative intervention, or percutaneous abscess drainage within 30 days after initial presentation." Because this is based on outpatient care, 4.6% will be used as the minimum RTDC probability but may be an overestimate since it includes outcomes other than the need for 6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 6

hospitalization. Daniels et al, 2016, in a multi-center randomized controlled trial of CT-proven primary acute uncomplicated, left-sided diverticulitis in the Netherlands, reported a readmission rate of 17.6% in the arm that did not receive antibiotics. Jaung et al, 2021 reported a similar readmission rate of 11% at 30 days in the arm that did not receive antibiotics. Notably, Daniels et al, 2016 and Jaung et al, 2021 are studies of patients who were initially hospitalized and required re-admission. They may, therefore, be an overestimate of readmission rates. The RTDC probability was assigned a range of 4.6-17.6%. Jaung et al, 2021 reported no mortality in the untreated arm. Bolkenstein et al, 2018 reported no deaths directly related to an acute uncomplicated diverticulitis (3/0.53% deaths overall, but 1 was related to perforation and the other 2 were related to comorbidities of heart failure and myocardial infarction). Daniels et al, 2016 reported a mortality rate of 1.1% in the untreated arm. Therefore the LOCL probability was assigned a range of 0-1.1%.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS There is a paucity of data regarding untreated complicated diverticulitis. The only available literature describes partial treatment and it was used to inform the duration for this scenario. In a retrospective cohort study of 3148 diverticulitis patients with a diverticular abscess, drawn from a database of all patients in Denmark between the years 2000-2012, patients were separated into arms by treatment; antibiotics only, percutaneous drainage, or surgery. The antibiotics only arm provided a range of hospital stay of 0-369 days (Gregersen et al, 2016). Interestingly, a similar study by Garfinkle et al, 2016 in Canada of 135 patients with diverticulitis and an abscess between 2000-2013 reports a much shorter length of stay of 6-12 days. The minimum duration for this scenario will be assigned 72 hours based on Jaung et al, 2021 stating the average duration of symptoms prior to presentation to the hospital with uncomplicated diverticulitis is 3 days because a similar statistic for complicated diverticulitis could not be found in the literature. The maximum duration will be assigned 369 days (Gregersen et al, 2016). Thus the duration range was assigned 72-8856 hours.

The RTDC surrogate for this scenario is the requirement for surgery. The RTDC probabilities for this scenario are based on the proportion of patients that underwent surgery from two cohort studies. The minimum probability of RTDC for this scenario was based on a retrospective cohort study of 685,390 patients drawn from the Nationwide Inpatient Sample databank. In 2005, 55% of cases of complicated diverticulitis were treated with colectomy (Ricciardi et al, 2009). The maximum probability of RTDC for this scenario was assigned as 98% based on the proportion of patients who underwent surgical intervention in a retrospective cohort of 337 complicated diverticulitis patients at the Mayo Clinic, Scottsdale between 1990- 2003 (Chapman et al, 2005). Thus the RTDC probability was assigned 55-98%. The minimum LOCL probability was assigned 26% based on the mortality rate reported in a retrospective cohort of 340 patients who required emergency surgery for perforated diverticulitis across five hospitals in Rotterdam, the Netherlands, between 1990 and 2005 (Vermeulen et al, 2009). Although this is not an untreated scenario, it was felt to be a reasonable surrogate for delayed presentation/intervention. The maximum probability was conservatively assigned 100% due to the paucity of data regarding untreated complicated diverticular disease.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Shabanzadeh and Wille‐Jørgensen, 2012 Terrestrial Wilkins et al, 2013 Terrestrial Abraha et al, 2017 Terrestrial Jaung et al, 2021 Terrestrial Daniels et al, 2016 Terrestrial 3 Chabok et al, 2012 Terrestrial Gregersen et al, 2016 Terrestrial Garfinkle et al, 2016 Terrestrial Guller et al, 2003 Terrestrial The duration for the untreated best-case scenario was based on studies comparing antibiotics vs. no-antibiotics, specifically the "no-antibiotic" arm.

The duration for the treated worst-case scenario are based on hospital-stay data for surgical interventions. The duration for the untreated worst- case scenario is based on complicated diverticulitis patients who received antibiotics (instead of surgical intervention). The evidence informing the durations for this CLiFF includes review articles, Cochrane systemic reviews, cohort data, and RCT data. Most of the populations involved in these studies are foreign; Sweden, (Shabanzadeh and Wille‐Jørgensen, 2012), Australia/New Zealand (Jaung et al, 2021), 3 European countries (Abraha et al, 2017), the Netherlands (Daniels et al, 2016), Sweden and Iceland (Chabok et al, 2012), Denmark (Gregersen et al, 2016), Canada (Garfinkle et al, 2016). Wilkins et al, 2013 is a review article from the American Academy of Family Physicians. Shabanzadeh and Wille‐Jørgensen, 2012 and Abraha et al, 2017 are Cochrane reviews. RCT studies include: Jaung et al, 2021; Daniels et al, 2016; Chabok et al, 2012. Cohort studies include: Guller et al, 2003; Gregersen et al, 2016; and Garfinkle et al, 2016. Advanced age is a pre-disposing factor for diverticulitis. Three cohort studies had subjects that are older than the astronaut corps (median age 62-66yo; Abraha et al, 2017), (mean age 65.1yo; Gregersen et al, 2016), (mean age 61; Garfinkle et al, 2016). However, the RCT studies had subject with a mean age in their 50s (median 56-59yo; Jaung et al, 2021), median 56.3-57.4 yo; Daniels et al, 2016), (median 57.1-57.4; Chabok et al, 2012). The remaining cohort study (Guller et al, 2003) had a mean age of 59.8 yo. Because diverticulitis is more common in females, most studies had a female predominance (53-64%; Abraha et al, 2017), (50-53%, Jaung et al, 2021), (65%; Chabok et al, 2012), (57%; Gregersen et al, 2016), (54%; Guller et al, 2003). Two studies had a male predominance: (51% male; Daniels et al, 2016), (57.5% male, Garfinkle et al, 2016). Overall, given the quality of the evidence which includes 2 Cochrane Reviews and 3 RCTs, the level of confidence for the durations in this CLiFF was assigned a 3. 6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 7

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ----------------------- | ----------- | --------- |
| Ricciardi et al, 2009 | Terrestrial |  |
| Chapman et al, 2005 | Terrestrial |  |
| Daniels et al, 2016 | Terrestrial |  |
| Jaung et al, 2021 | Terrestrial |  |
| Adiamah et al, 2021 | Terrestrial | 3 |
| You et al, 2018 | Terrestrial |  |
| Garfinkle et al, 2016 | Terrestrial |  |
| Etzioni et al, 2010 | Terrestrial |  |
| Bolkenstein et al, 2018 | Terrestrial |  |

RCTs comparing antibiotics vs. no-antibiotics were used to inform the untreated best-case scenario. Specifically, failure rates for the "no-antibiotic" arm were used to estimate the RTDC probability. The treated worst-case scenario RTDC was informed using data regarding failure rates for antibiotics +/- percutaneous drainage, but not surgery since surgical capabilities will require RTDC. There is a paucity of data regarding untreated complicated diverticulitis. The RTDC probability for the untreated, worst-case scenario is therefore based on the overall proportion of complicated diverticulitis patients in two cohort studies (Chapman et al, 2005; Ricciardi et al, 2009). The studies informing the RTDC probabilities include 3 RCTs and 6 cohorts. RCTs include: Jaung et al, 2021; Daniels et al, 2016; You et al, 2018. Cohort studies include: Chapman et al, 2005; Adiamah et al, 2021; Garfinkle et al, 2016; Etzioni et al, 2010; Bolkenstein et al, 2018; Ricciardi et al, 2009. Four studies had subjects that are older than the astronaut corps (67.4% of the study population aged 65+ yo; Adiamah et al, 2021), (mean age 61; Garfinkle et al, 2016), (mean age 65yo; Chapman et al, 2005), (mean age 68.5yo; Ricciardi et al, 2009). The remaining 5 studies had patients with an age that is more representative of the astronaut corps (mean age 58.5yo; Etzioni et al, 2010), (mean age 53.5-55.2yo; You et al, 2018), (median age 56.3-57.4 yo; Daniels et al, 2016), (median age 56-59 yo; Jaung et al, 2021), (mean age 58yo; Bolkenstein et al, 2018). Three studies were predominantly male: (57.5% male; Garfinkle et al, 2016), (61% male, You et al, 2018) (51% male, Daniels et al, 2016). The remaining six studies were predominantly female ranging from 50-61.4%). Only two studies involved American subjects (Chapman et al, 2005 and Etzioni et al, 2010). However, Jaung et al, 2016 involved Australian and New Zealand subjects and Garfinkle et al , 2016 was a Canadian study.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ----------------------- | ----------- | --------- |
| Chapman et al, 2005 | Terrestrial |  |
| Jaung et al, 2021 | Terrestrial |  |
| Bolkenstein et al, 2018 | Terrestrial |  |
| Daniels et al, 2016 | Terrestrial | 3 |
| Adiamah et al, 2021 | Terrestrial |  |
| Gregersen et al, 2016 | Terrestrial |  |
| Vermeulen et al, 2009 | Terrestrial |  |

LOCL for the untreated best-case scenario is based on mortality rates the no-antibiotic arm of studies that compared antibiotic treatment to no- antibiotic treatment (Jaung et al, 2018; Bolkenstein et al, 2018). The LOCL for the treated worst-case scenario is based on mortality rates in patients who received percutaneous drainage +/- antibiotics but not surgery (Gregersen et al, 2005). Similar mortality rates were provided by other sources (Chapman et al, 2005; Adiamah et al, 2021). There is a paucity of data regarding untreated complicated diverticulitis. The untreated worst- case scenario LOCL is based on patients who presented with perforation and required emergent surgery (Vermeulen et al, 2009) and the maximum probability was conservatively assigned 100%. The only study for LOCL that was not also used to inform either the duration or RTDC probabilities is Vermeulen et al, 2009; a cohort study reporting on 340 patients in the Netherlands with median age of 66 yo, 56% female.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

## Overview

The definition of uncomplicated acute diverticulitis is often vague and poorly defined. Uncomplicated acute diverticulitis is defined as localized 6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute  Cliff page: 8

diverticular inflammation without abscess or perforation. A universally accepted classification divides intra-abdominal infections (IAIs) into complicated and uncomplicated. In uncomplicated IAIs, the infection only involves a single organ and does not extend to the peritoneum, while in complicated IAIs, the infectious process extends beyond the organ, causing either localized or diffuse peritonitis. Many authors have also separated diverticulitis into different severity levels. As one example, there are different severities if there is a pericolic abscess, pelvic abscess, generalized purulent peritonitis, or fecal peritonitis present (Hinchey 1978). Our best-case definition implies an uncomplicated case that resolves spontaneously or with antibiotics while our worst-case definition is characterized by a complicated course that may require procedural or surgical management.

- CNES: None

Diagnostic Scope and Resourcing: Diagnosis always starts with a history and physical exam inclusive of an abdominal exam and pelvic exam, if female, given can’t miss conditions in the differential diagnosis. Laméris et al. developed a clinical decision rule for diagnosis terrestrially, based on 3 criteria: (1) direct tenderness only in the left lower quadrant, (2) CRP > 50 mg/l, and (3) absence of vomiting and found that 97% (95% CI 83–99%) of patients with all three criteria had diverticulitis. Andeweg et. al. (2011) developed a very similar diagnostic algorithm that was 86% accurate. In addition to these combination exam/lab algorithms, abdominopelvic ultrasound is 90% sensitive (CI 76-98%) and 90% specific (CI 86-94%) compared to CT which was 95% sensitive and 96% specific. However, CT scan will not be available.

Clinical Phase 1 Duration and Rationale: This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1.75 CP1 WC (Treated or Untreated): 1.75 The highest scope of practice required for diagnosis includes the interpretation of the ultrasounds which is SOP 5 (attending). Treatment Scope and Resourcing: The utility of antibiotics in acute uncomplicated acute diverticulitis is controversial given that several studies have demonstrated that antimicrobial treatment does not lead to significant improvement with mild disease. Thus, for best case scenario, as indicated in the definition, it may resolve with expectant management or antibiotics can be considered. Other treatments for mild diverticulitis include oral pain medications, antiemetics, and hydration. For the worst-case scenario, oral antibiotics and IV antibiotics are available. Other considerations during a worst-case scenario include IV hydration, IV antiemetics, and insertion of a percutaneous drain. Surgical management, including laparoscopic lavage, will not be possible.

Communications and Support Needs: Ground communication for confirmation of diagnosis with video or pictures may be considered for the worst-case scenario to help guide management and guide RTDC decisions as the diagnosis warrants surgical management.

## REFERENCES

Hinchey EJ, Schaal PH, Richards MB. Treatment of perforated diverticular disease of the colon. Adv Surg. 1978;12:85–109. Wilkins T, Embry K, George R. Diagnosis and management of acute diverticulitis. Am Fam Physician. 2013 May 1;87(9):612-20. PMID: 23668524. Sartelli M, Weber DG, Kluger Y, et al. 2020 update of the WSES guidelines for the management of acute colonic diverticulitis in the emergency setting. World J Emerg Surg. 2020;15(1):32. Published 2020 May 7. doi:10.1186/s13017-020-00313-4 Mali JP, Mentula PJ, Leppäniemi AK, Sallinen VJ. Symptomatic treatment for uncomplicated acute diverticulitis: a prospective cohort study. Dis Colon Rectum. 2016;59:529–34. Mali, J. P. , Mentula, P. J. , Leppäniemi, A. K. & Sallinen, V. J. (2016). Symptomatic Treatment for Uncomplicated Acute Diverticulitis: A Prospective Cohort Study. Diseases of the Colon & Rectum, 59 (6), 529-534. doi: 10.1097/DCR.0000000000000579. Ridgway PF, Latif A, Shabbir J, Ofriokuma F, Hurley MJ, Evoy D, O'Mahony JB, Mealy K. Randomized controlled trial of oral vs intravenous therapy for the clinically diagnosed acute uncomplicated diverticulitis.

Colorectal Dis. 2009 Nov;11(9):941-6. doi: 10.1111/j.1463-1318.2008.01737.x. Epub 2008 Nov 7. PMID: 19016815.

### IMM CLIFF RECONCILATION COMMENTS

The best- and worst-case definitions have very minor changes from the IMM definitions. In IMM the best case-scenario was defined as an uncomplicated case of diverticulitis, that is self-limited or responds to available non-surgical treatment. The current best-case scenario definition specifies that “non-surgical treatment” refers to oral or IV antibiotics. The IMM worst-case scenario was defined as a complicated case of diverticulitis, which may require surgical intervention. The current definition provides examples of complicated diverticulitis (i.e. abscess, perforation, fistula, obstruction) and specifies the requirement for IV antibiotics and/or percutaneous or surgical intervention. The durations provided in this CLiFF differ from the IMM CLiFF based on the updated evidence. In particular, the durations of the worst-case scenarios are much longer than that provided by the IMM CLiFF which provided a maximum duration of 24 hours for both worst-case scenarios. The RTDC probabilities in this CLiFF are lower than their counterparts in the IMM CLiFF. This is felt to be secondary to updated evidence that antibiotics are not necessary for many uncomplicated cases of diverticulitis and advanced capabilities inflight including IV antibiotics and percutaneous drainage as detailed by the CRT.

The LOCL values are similar between the CLiFFs. Variations in this CLiFF are due to updated evidence. 6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 9

### LIMITATIONS SUMMARY

- The incidence for this CLiFF is based on terrestrial data from Bharucha et al, 2015. These data came from the Rochester Epidemiology Project

database. Known risk factors for diverticulitis include sedentary lifestyle, obesity, smoking, and overuse of NSAIDs. These pre-disposing factors are less common in the astronaut cohort than the general public, so the incidence is likely an overestimation of acute diverticulitis in the astronaut cohort. Further, the data in Bharucha et al, 2015 included recurrent cases of diverticulitis. It is assumed that once an astronaut had a case of diverticulitis, they would either have definitive care via surgery or be disqualified from spaceflight. • This is not a limitation of this CLiFF but listed here to be carried forward for future iterations of the CLiFF. Bharucha et al, 2015 (terrestrial source informing incidence) provides valuable information on repeat diverticulitis infections. Future iterations of IMPACT hope to use this information. • For the untreated best-case scenario, all studies used except Bolkentstein et al, 2018 are based on initially hospitalized patients and may therefore not reflect the true duration, RTDC, or LOCL for acute uncomplicated diverticulitis since they do not include data from patients treated as outpatients. • There is a paucity of data regarding an untreated worst-case diverticulitis. The untreated worst-case scenario duration is based on diverticular disease with an associated abscess treated with antibiotics only. The RTDC is based on the proportion of complicated diverticulitis patients who required surgery in the listed studies. The LOCL is based on a study of patients presenting with perforation requiring emergent surgery (delayed/advanced presentation) and the upper limit of 100% was conservatively assigned since data does not exist to inform this value. 6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 10

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 |  |  |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  | 89 |  |  | 145 |  |  |  |  |  |
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

| Best | 132 |  |  |  |  |  |  | 211 | 1152 | 3763 | 0.306139 | 30.6139 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  |  |  |  | 34 | 211 | 1275 | 3763 | 0.338825 | 33.8825 |
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
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute  Cliff page: 11

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

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute  Cliff page: 12

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

6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 13

## REFERENCES

Reference

1. Abraha I, Binda GA, Montedori A, Arezzo A, Cirocchi R. Laparoscopic versus open resection for sigmoid diverticulitis. Cochrane Database of

Systematic Reviews. 2017(11). doi: 10.1002/14651858.CD009277.pub2. PubMed PMID: CD009277.

2. Adiamah A, Ban L, Otete H, Crooks CJ, West J, Humes DJ. Outcomes after non-operative management of perforated diverticular disease: a

population-based cohort study. BJS Open. 2021;5(2). doi: 10.1093/bjsopen/zraa073.

3. Antonsen. NASA/TM-20210009779 Comparison of Health and Performance Risk for Accelerated Mars Mission Scenarios. 2021.

4. Bharucha AE, Parthasarathy G, Ditah I, Fletcher JG, Ewelukwa O, Pendlimari R, et al. Temporal Trends in the Incidence and Natural History of

- Diverticulitis: A Population-Based Study. Am J Gastroenterol. 2015;110(11):1589-96. Epub 2015/09/30. doi: 10.1038/ajg.2015.302. PubMed

- PMID: 26416187; PubMed Central PMCID: PMCPMC4676761.

5. Bolkenstein HE, Draaisma WA, van de Wall BJM, Consten ECJ, Broeders I. Treatment of acute uncomplicated diverticulitis without antibiotics:

risk factors for treatment failure. International Journal of Colorectal Disease. 2018;33(7):863-9. doi: 10.1007/s00384-018-3055-1.

6. Bollom A, Austrie J, Hirsch W, Nee J, Friedlander D, Ellingson K, et al. Emergency Department Burden of Diverticulitis in the USA, 2006-2013.

Dig Dis Sci. 2017;62(10):2694-703. Epub 2017/03/24. doi: 10.1007/s10620-017-4525-y. PubMed PMID: 28332105; PubMed Central PMCID: PMCPMC5610055.

7. Chabok A, Pahlman L, Hjern F, Haapaniemi S, Smedh K. Randomized clinical trial of antibiotics in acute uncomplicated diverticulitis13. British

Journal of Surgery. 2012;99(4):532-9. doi: 10.1002/bjs.8688.

8. Cao Y, Strate LL, Keeley BR, Tam I, Wu K, Giovannucci EL, et al. Meat intake and risk of diverticulitis among men. Gut. 2018;67(3):466-72.

Epub 2017/01/11. doi: 10.1136/gutjnl-2016-313082. PubMed PMID: 28069830; PubMed Central PMCID: PMCPMC5533623.

9. Chapman J, Davies M, Wolff B, Dozois E, Tessier D, Harrington J, et al. Complicated diverticulitis: is it time to rethink the rules? Annals of

surgery. 2005;242(4):576-83. doi: 10.1097/01.sla.0000184843.89836.35. PubMed PMID: 16192818.

10. Daniels L, Ünlü Ç, de Korte N, van Dieren S, Stockmann HB, Vrouenraets BC, et al. Randomized clinical trial of observational versus

antibiotic treatment for a first episode of CT-proven uncomplicated acute diverticulitis. British Journal of Surgery. 2016;104(1):52-61. doi: 10.1002/bjs.10309.

11. Etzioni DA, Chiu VY, Cannom RR, Burchette RJ, Haigh PI, Abbas MA. Outpatient Treatment of Acute Diverticulitis: Rates and Predictors of

Failure. Dis Colon Rectum. 2010;53:861-5.

12. Garfinkle R, Kugler A, Pelsser V, Vasilevsky CA, Morin N, Gordon P, et al. Diverticular Abscess Managed With Long-term Definitive

Nonoperative Intent Is Safe. Dis Colon Rectum. 2016;59(7):648-55. Epub 2016/06/09. doi: 10.1097/dcr.0000000000000624. PubMed PMID: 27270517.

13. Gregersen R, Andresen K, Burcharth J, Pommergaard H-C, Rosenberg J. Short-term mortality, readmission, and recurrence in treatment of

acute diverticulitis with abscess formation: a nationwide register-based cohort study. International Journal of Colorectal Disease. 2016;31(5):983-

90. doi: 10.1007/s00384-016-2568-8.

14. Guller U, Jain N, Hervey S, Purves H, Pietrobon R. Laparoscopic vs Open Colectomy. Arch Surg 2003:1179-86.

15. Jaung R, Nisbet S, Gosselink MP, Di Re A, Keane C, Lin A, et al. Antibiotics Do Not Reduce Length of Hospital Stay for Uncomplicated

Diverticulitis in a Pragmatic Double-Blind Randomized Trial. Clinical gastroenterology and hepatology. 2021;19(3):503-10.e1. doi: 10.1016/j.cgh.2020.03.049.

16. Ricciardi R, Baxter NN, Read TE, Marcello PW, Hall J, Roberts PL. Is the decline in the surgical treatment for diverticulitis associated with an

increase in complicated diverticulitis? Dis Colon Rectum. 2009;52(9):1558-63. Epub 2009/08/20. doi: 10.1007/DCR.0b013e3181a90a5b.

- PubMed PMID: 19690482.

17. Shabanzadeh DM, Wille‐Jørgensen P. Antibiotics for uncomplicated diverticulitis. Cochrane Database of Systematic Reviews. 2012(11). doi:

10.1002/14651858.CD009092.pub2. PubMed PMID: CD009092.

18. Stollman NH, Raskin JB. Diagnosis and management of diverticular disease of the colon in adults. Ad Hoc Practice Parameters Committee of

the American College of Gastroenterology. Am J Gastroenterol. 1999;94(11):3110-21. Epub 1999/11/24. doi: 10.1111/j.1572- 0241.1999.01501.x. PubMed PMID: 10566700.

19. Stollman N, Smalley W, Hirano I. American Gastroenterological Association Institute Guideline on the Management of Acute Diverticulitis.

Gastroenterology. 2015;149(7):1944-9. Epub 2015/10/11. doi: 10.1053/j.gastro.2015.10.003. PubMed PMID: 26453777.

20. Strate LL, Liu YL, Huang ES, Giovannucci EL, Chan AT. Use of aspirin or nonsteroidal anti-inflammatory drugs increases risk for diverticulitis

and diverticular bleeding. Gastroenterology. 2011;140(5):1427-33. Epub 2011/02/16. doi: 10.1053/j.gastro.2011.02.004. PubMed PMID: 21320500; PubMed Central PMCID: PMCPMC3081980.

21. Vermeulen J, Gosselink MP, Hop WCJ, van der Harst E, Hansen BE, Mannaerts GHH, et al. Long-term survival after perforated diverticulitis.

Colorectal Disease. 2011;13(2):203-9. doi: https://doi.org/10.1111/j.1463-1318.2009.02112.x.

22. Wilkins T, Embry K, George R. Diagnosis and management of acute diverticulitis. Am Fam Physician. 2013;87(9):612-20. Epub 2013/05/15.

- PubMed PMID: 23668524.

6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 14

Reference

23. You K, Bendl R, Taut C, Sullivan R, Gachabayov M, Bergamaschi R. Randomized clinical trial of elective resection versus observation in

diverticulitis with extraluminal air or abscess initially managed conservatively. Br J Surg. 2018;105(8):971-9. Epub 2018/04/24. doi: 10.1002/bjs.10868. PubMed PMID: 29683483.

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

6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 15

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

### SoP Standard Operating Procedure

### SPE Solar Particle Event

### TBD To Be Determined

### TI Task Impairment

6/15/2023 1:47:18 PM ICL35_Diverticulitis, Acute Cliff page: 16

---

## Source metadata

```yaml
source_filename: "diverticulitis-acute-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1qEwlDQsgDZInixK6-Q8NUqzHtX_9j_1_/view"
source_drive_id: "1qEwlDQsgDZInixK6-Q8NUqzHtX_9j_1_"
source_sha256: 267b86d600a7b270f2d8fab5b3c2bc895b29e8c39ecf5eb120139c524da8b58b
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 16
ocr_performed: false
```
