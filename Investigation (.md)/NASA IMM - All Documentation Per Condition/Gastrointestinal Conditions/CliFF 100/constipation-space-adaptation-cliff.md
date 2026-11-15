# Constipation Space Adaptation CLiFF

[View original PDF](https://drive.google.com/file/d/1BfAVmRd9GuWGPj4ma6aPXkYoTSNJRMwP/view) · **9 pages**

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

Constipation (space adaptation) Cliff

## Branch Baseline

Thompson’s Rome criteria (Thompson, 1999) has been adopted as consensus definition of constipation by the American Gastroenterological Association and includes several components consisting of straining, hard stools, feelings of incomplete evacuation, or 2 or fewer bowel movements per week (American Gastroenterological Association, 2000). Constipation is a common problem reported by astronauts. It appears to be more likely to occur in space due to the observation that crewmembers experience large bowel ilius, and decreased bowel mobility. This is exasserbated by dehydration due to space motion sickness and hormonal responses to fluid redistribution. Maintaining hydration is encouraged and oral bowel stimulants are available on orbit. (Marshburn, 2008) (International Space Station Integrated Medical Group, 2006)

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

- Data Category: In-flight

- Space Adaptation: Yes

- Incidence Type: Proportion

## Distribution Data

- Incidence: Beta

- Occurrence: Bernoulli

## Data Characteristics

- Occurrence Hour Range: 24 to 192

- Peak Occurrence Hours: 24

- Events: 151

- Persons At Risk: 807

- Space Flight Incidence Rate (Events / Persons at Risk): 151 / 807 = 0.187112763320942

4/6/2020 4:43:03 PM Constipation (space adaptation) Cliff page: 1

## Incidence Comments

Source of model incidence was obtained from a compliation of inflight data (Walton, 2010). Incidence of constipation is much higher in flight than terrestrially, most likely due to the environmental factors such as fluid shifts, diet (Marshburn, 2008) and the use of anti-cholinergic medications.

The incidence data was updated to integrate the Real World System observed events including the person at risk from our validation data set.

There were 5 ISS and 33 STS events added. Also there was 145 persons at risk was added. This data set included the remaining Shuttle missions and ISS Expedition 31/32 through Expedition 39/40 (Saile, 2017).

Updated the Persons at Risk based on the revised real world system integrated incidence data. The integrated RWS persons at risk from 144 to 143 so the conditions integrated iMED value went from 808 to 807 (Saile L., 2017)

### Information Regarding Prevention

Normal screen is in compliance with ISS 50667 Medical Evaluation Documents comprise first two volumes. (Volume A and B). As this conditions is a Spaces Adaptation condition is will resolve though stool softners are available if the crew feels necessary.

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Walton, 2010 1 Incidence Saile L., 2017 1 Incidence 4/6/2020 4:43:03 PM Constipation (space adaptation) Cliff page: 2

Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

- Data Category: Fixed

- Space Adaptation: Yes

- Incidence Type: Rate

## Distribution Data

- Incidence: Fixed

- Occurrence: Poisson

## Data Characteristics

- Occurrence Hour Range: to

Peak Occurrence Hours:

- Fixed Rate: 0.00585

## Incidence Comments

The fixed rate incidence is the average for the entire age range in the National Institutes of Health (NIH) (Everhart, 2008). NIH reported number and age-adjusted rates of ambulatory care visits with first listed constipation diagnosis. 478 per 100,000 for age 15-44 (0.0048 per person), and 696 per 100,000 for age 45-64 (0.0069 per person). Gender incidence is not stratified by age, female 1267 and male 866 per 100,000. 4/6/2020 4:43:03 PM Constipation (space adaptation) Cliff page: 3

Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

- Data Category: Fixed

- Space Adaptation: Yes

- Incidence Type: Rate

## Distribution Data

- Incidence: Fixed

- Occurrence: Poisson

## Data Characteristics

- Occurrence Hour Range: to

Peak Occurrence Hours:

- Fixed Rate: 0.0185

## Incidence Comments

National Ambulatory Medical Care Survey (NAMCS) and National Hospital Ambulatory Medical Care Survey (NHAMCS) study for ages 25-44 and 45-64 the average for incidence of both age groups is 0.0185 per person.

Shah used the National Ambulatory Medical Care Survey (NAMCS) and National Hospital Ambulatory Medical Care Survey (NHAMCS) to collect data on ambulatory care for constipation in the United States (Shah, 2008). The survey weights in the NAMCS and NHAMCS were used to estimate standard errors and 95% confidence intervals (CIs) that account for the complex survey design. During the 2001-2004 time period the visits for constipation by age 25-44 years old were 14.9 per 1000, and 45-64 years old were 21.8 per 1000. Gender incidence is not stratified by age, female 35.2 and male 20.4 per 1,000.

During the 2001-2004 time period constipation increased significantly to 0.72% (95% CI 0.62-0.83). This study reflects physicians coding for medical visits for constipation, and not the actual longitudinal prevalence of symptoms of constipation in the United States. Therefore, this increase in constipation medical visits may reflect increased symptomatic complaints of constipation, or increased patient awareness and demands for treatment, as well as increased physician awareness of treatments and coding.

### Alternative Incidence Data

Other researchers (McCrea, 2009), (Johanson, 2007) found limitations in the literature review. The AGA (American Gastroenterological Association, 2000) emphasizes that all published studies have addressed only the prevalence of constipation at any point in time; data on incidence, i.e. the rate of development of new symptoms of constipation, are lacking. Search with keywords constipation AND space medicine yielded no results. 4/6/2020 4:43:03 PM Constipation (space adaptation) Cliff page: 4

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.25 0 - 9 0 - 36 - 72 0 0 0 (best case scenario %: 95.39 - 96.05)

ISS-based Treatment 100 0.5 1 - 20 72 - 96 - 120 0 0 0 (worst case scenario %: 3.95 - 4.61)

Untreated Best Case 0 0 1 - 20 0 - 36 - 72 0 0 0 Untreated Worst Case 0 0 12 - 38 72 - 96 - 120 0 0 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.)

### Scenario Comments

Probablity of Best and Worst Case Scenrios based on Real World System data set, there were 38 events and 6 of them were worst case.

Since we now have worst case scenarios, which did not have before, we can use the empirical data so the worst case scenario would be 15.79% (6/38). Thus the best case scenarios would be 84.21% (26/38) (Saile L., 2017).

Our best case definition is symptomatic complaints of constipation, requiring minimal to no treatment.

Our worst case definition is symptomatic complaints of constipation that do not respond to initial treatment. 4/6/2020 4:43:03 PM Constipation (space adaptation) Cliff page: 5

### Best Case Comments

- ISS-based Treatment (best case scenario): The majority of cases of constipation occurring during spaceflight is easily treated and results in

complete resolution without functional impairment. Clinical phase I: 0.25 hours of 100% functional impairment based on time required for initial evaluation and treatment of mild constipation using the ISS Medical Checklist. Clinical phase II: 0 to 72 hours of 0% to 9 % functional impairment based on the treatment and convalescence of mild constipation using the AMA Guides for Impairment(American Medical Association,

2008) due to colonic and rectal disorders, Table 6-5, p114. Class 0 FI, i.e. 0% is no active symptoms or signs of disease. Class 1 FI, i.e. 1 to 9%

comprises occasional mild or continuous minimal symptoms and mild functional loss. Clinical Phase III: 0 percent, or Class 0, final impairment based on complete resolution of space adaptation constipation with treatment available on ISS. Based on in-flight data neither EVAC nor LOCL is expected.

### Worst Case Comments

- ISS-based Treatment (worst case scenario): Clinical phase I: 0.5 hours of 100% functional impairment based on time required for initial

evaluation and treatment of moderate to severe constipation using the ISS Medical Checklist. Clinical phase II: 72 to 120 hours of 1 to 20% functional impairment based on the treatment and convalescence of moderate to severe constipation using the AMA Guides (American Medical Association, 2008)for Impairment due to Colonic and Rectal Disorders. Class 1 FI, i.e. 1 to 9% comprises occasional mild or continuous minimal symptoms and mild functional loss. Class 2 or 12-20% FI includes frequent mild or occasional moderate symptoms and moderate functional loss.

- Clinical phase III: 0% final functional impairment based on the resolution of space adaptation constipation with treatment available on ISS. No

EVAC or LOCL is expected (Inflight Compilation Lockdown, 2008).

### Untreated Best Case Comments

- Untreated (best case scenario): Clinical phase II: 0-72 hours of 1-20% functional impairment based on untreated mild constipation using the

AMA Guides. Class 1 FI, i.e. 1 to 9% comprises occasional mild or continuous minimal symptoms and mild functional loss. Class 2 or 12-20% FI includes frequent mild or occasional moderate symptoms and moderate functional loss. Clinical phase III: 0% of functional impairment based on resolution of mild space adaptation constipation. Neither EVAC nor LOCL is expected.

### Untreated Worst Case Comments

- Untreated (worst case scenario): Clinical Phase II: 72-120 hours of 12-38% functional impairment using the AMA Guides based on moderate

to severe untreated constipation. Class 2 or 12-20% FI includes frequent mild or occasional moderate symptoms and moderate functional loss.

Class 3 or 22 to 38% includes frequent moderate or occasional severe symptoms. Clinical Phase III: 0 to 9% functional impairment based on resolution of untreated moderate to severe space adaptation constipation. No EVAC or LOCL is expected.

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

American Medical Association, 2008 3 FI Inflight Compilation Lockdown, 2008 1 EVAC Saile L., 2017 1 BCWC 4/6/2020 4:43:03 PM Constipation (space adaptation) Cliff page: 6

### Additional Comments

Pub med search with keywords constipation AND epidemiology, constipation AND incidence, constipation AND morbidity, constipation AND prevalence, and constipation AND statistics yielded few relevant results. 4/6/2020 4:43:03 PM Constipation (space adaptation) Cliff page: 7

The Resource Table (RT) Units

|  | Units Units | Available |  |  |  |
| -------- | ----------------- | --------- | -------------------- | --------- | --- |
|  | Required Required | At Start |  |  |  |
|  | Best Worst | Of |  |  |  |
| Resource | Case Case | Mission | Consumable Essential | Rationale |  |

Dulcolax (Bisacodyl) tablet 5mg 2 4 40 Yes Yes Oral medication for the relief of constiation.

### Resource Comments

Based on the International Space Stations medical capabilities treatment for constipation is conservatively treated with oral medication (MOD, 2011). Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value |  | LOE Category |  |
| ----------------------------------------------- | --- | --------- | --- | ------------ | --- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 |  | Resources |  |

### Level Of Evidence

| Input Data | LOE Average |  | Description |  | Range |
| ---------------------- | ----------- | --- | ----------- | --- | ----- |
| Incidence | 1 |  | Excellent |  | 1-2 |
| Functional Impairment | 3 |  | Good |  | 2.1-3 |
| Best Case / Worst Case | 1 |  | Fair |  | 3.1-4 |
| EVAC / LOCL | 1 |  | Poor |  | 4.1-5 |
| Resources | 2 |  |  |  |  |
| QUALITY OF EVIDENCE | 1.6 |  |  |  |  |

4/6/2020 4:43:03 PM Constipation (space adaptation) Cliff page: 8

### Reference List

Reference American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. Everhart JE. Functional Intestinal Disorders. In: Everhart JE, editor. The Burden of Digestive Diseases in the United States.Washington DC: US Department of Health and Human Services, Public Health Service, National Institutes of Health, National Institute of Diabetes and Digestive and Kidney Diseases ; 2008. p. 77-87.

Inflight Compilation Lockdown. In-flight medical events for Apollo, MIR, ISS, Skylab, and STS. 7-10-2008. Houston, Texas, NASA, Johnson Space Center. International Space Station Integrated Medical Group. Medical Checklist ISS- All Expeditions. Houston: National Aeronautics and Space Administration; 2008. Johanson JF, Kralstein J. Chronic constipation: a survey of the patient perspective. Aliment Pharmacol Ther 2007 Mar 1;25(5):599-608.

Locke GR, III, Pemberton JH, Phillips SF. AGA Technical Review on Constipation. GASTROENTEROLOGY 2000 Dec;119(6):1766-78.

Marshburn TH. Acute Care. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 101-22.

McCrea GL, Miaskowski C, Stotts NA, Macera L, Varma MG. A review of the literature on gender and age differences in the prevalence and characteristics of constipation in North America. J Pain Symptom Manage 2009 Apr;37(4):737-45.

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

Saile L., Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence V2. 2017.

Saile L., Boley L, Arellano J, Kerstman E. iMED Best and Worst Case Percentage Update. 2017.

Saile L, Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence. 2017.

Shah ND, Chitkara DK, Locke GR, Meek PD, Talley NJ. Ambulatory Care for Constipation in the United States, 1993-2004. The American Journal of Gastroenterology 2008;103(7):1746-1753 © 2008 2008;103(7):1746-53.

Thompson WG, Longstreth GF, Drossman DA, Heaton KW, Irvine EJ, Muller-Lissner SA. Functional bowel disorders and functional abdominal pain. Gut 1999 Sep;45 Suppl 2:II43-II47.

Walton M, Kerstman E, IMM. In-flight Compilation v20100414_Incidence_calculation. 2010. 4/6/2020 4:43:03 PM Constipation (space adaptation) Cliff page: 9

---

## Source metadata

```yaml
source_filename: "constipation-space-adaptation-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Gastrointestinal Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/1BfAVmRd9GuWGPj4ma6aPXkYoTSNJRMwP/view"
source_drive_id: "1BfAVmRd9GuWGPj4ma6aPXkYoTSNJRMwP"
source_sha256: cacc33842de92283915d14b207ca4f523c5930d5e0368814293df4d9f56c55d4
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 9
ocr_performed: false
```
