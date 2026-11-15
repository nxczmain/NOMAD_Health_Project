# Skin Infection CLiFF

[View original PDF](https://drive.google.com/file/d/19RlUNT650Xr3luY7wJ9N-sFozFDxTsqC/view) · **12 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

### Skin Infection Cliff

## Branch Baseline

Skin infection is a common condition that has been reported frequently in space. It can be bacterial or fungal. Fungal skin infection is usually asymptomatic and diagnosed by its description. These usually respond well to treatment with appropriate topical medications.

The most severe skin infections are of bacterial origin. Cellulitis is an acute bacterial infection of the skin and subcutaneous tissue. It is most commonly caused by streptococci and staphylococci. The presentation is with pain, rapidly spreading erythema, and edema. Also there may be fever, and regional lymph nodes may be enlarged. Treatment is with appropriate antibiotics and analgesics, as indicated. Untreated cellulitis can progress to sepsis and septic shock. Many astronauts have remarked that their wounds healed more slowly while on orbit. Infections may be caused by direct effects of microgravity on immunity; atmospheric characteristics, such as moisture, airborne contaminants, condensate; or both. (Marshburn, 2008)

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

| Data Category: | In-flight |  |
| ----------------- | --------- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Gamma |  |
| ----------- | ------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Events: | 17 |  |
| ---------------------------------------------------- | ------------------------------ | ------- |
| Person Years: | 45.49 |  |
| Space Flight Incidence Rate (Events / Person Years): | 17 / 45.49 = 0.373708507364256 |  |
| 5/11/2020 4:43:32 PM | Skin Infection Cliff | page: 1 |
## Incidence Comments

Source of the incidence data is a compliation of available in flight medical events (Walton, 2010).

Of skin infections that have occurred in flight, 38% (n=5) were fungal, and 62% (n=8) bacterial. There was one case of cellulitis (Marshburn, 2008). No viral skin infection have been reported. One occurrence of HZV, in MIR, is included in the Herpes Zoster Cliff.

Integrated the incidence information from the real world system. Added 4 new medical events (3 ISS and 1 STS) and 18.17 person years (Saile, 2017). Updated the Person-Years based on the revised real world system integrated incidence data. The integrated person years changed from 18.17 to 18.13 so the conditions person years changed from 45.53 to 45.49 (Saile L., 2017)

### Information Regarding Prevention

- Disqualifying conditions include: In general, any medical condition that, in the judgment of the Multilateral Space Medicine Board (MSMB), may

compromise mission operations or crew safety, or require urgent medical treatment while a resident on the ISS; any acute or chronic infections or any communicable disease until healed and not associated with functional deficit or communicable state; adherent scars that interfere with the wearing of personal equipment or that impair movement to the extent that emergency egress would be impeded; infections of the skin, systemic or superficial, if communicable, extensive, or not amenable to treatment; and any skin disorder, acute or chronic, that is severe enough to cause interference with emergency egress, wearing of flight equipment, or successful mission completion. (International Space Station Program, 2009)

Other: Of interest, most astronauts also remarked that their wounds healed more slowly while on orbit, an important albeit anecdotal observation for space flight immune-response researchers (Scheuring, 2009). Marshburn mentioned anecdotal reports of 50% superficial laceration infections in space. Infections may be caused by direct effects of microgravity on immunity, atmospheric characteristics (moisture, airborne contaminants, condensate) or both (Marshburn, 2008). Skin infection is listed as side effect of Triamcinolone (Kenalog). Benadryl, Duricef, Flagyl (Metronidazole), Lidocaine (Xylocaine), Phenergan, Polysporin, Polytrim, Rocephin, Sertraline (Zoloft), and Sulfamethoxazole Trimethoprim (Bactrim) list skin rash. (International Space Station Integrated Medical Group, 2006)

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Walton, 2010 1 Incidence Saile L., 2017 1 Incidence 5/11/2020 4:43:32 PM Skin Infection Cliff page: 2

Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

| Data Category: | Fixed |  |
| ----------------- | ----- | --- |
| Space Adaptation: | No |  |
| Incidence Type: | Rate |  |

## Distribution Data

| Incidence: | Fixed |  |
| ----------- | ------- | --- |
| Occurrence: | Poisson |  |

## Data Characteristics

| Fixed Rate: | 0.04 |  |
| ----------- | ---- | --- |

## Incidence Comments

McCaig’s results are based on a secondary data analysis of the 1992–1994 and 2001–2003 National Ambulatory Medical Care Surveys (NAMCS) and National Hospital Ambulatory Medical Care Surveys (NHAMCS). NAMCS and NHAMCS data were weighted to produce national estimates, and data were combined in 2 groups of 3 years each (1992–1994 and 2001–2003) to provide more reliable estimates.

During 2001–2003, a total of 11.6 million annual visits were made to US ambulatory care providers for selected skin and soft tissue infections, representing 1.0% (95% CI 0.9–1.1) of all visits; the visit rate was 410.7 per 10,000 persons. For the 45-64 age group the rate was 422.2/10,000 persons-year (McCaig, 2006)

| 5/11/2020 4:43:32 PM | Skin Infection Cliff | page: 3 |
| -------------------- | -------------------- | ------- |
Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

- Data Category: Fixed

- Space Adaptation: No

- Incidence Type: Rate

## Distribution Data

- Incidence: Fixed

- Occurrence: Poisson

## Data Characteristics

- Fixed Rate: 0.02

## Incidence Comments

Pallin et al. conducted a secondary analysis of NHAMCS data from 1993 to 2005 for skin and soft tissue infection .The rate of initial Emergency Department (ED) visits for diagnosis of interest (bacterial skin and soft tissue infections) increased from 1.46% in 2001 (CI 1.27 to 1.65) to 2.73% in 2005 (CI 2.44-3.02). Pallin noted a slightly higher percentage than Mc Caig’s data, which maybe attributed to longer continous time period of analysis (1993-2005) which included some periods when rates increased dramatically. A minor difference in disease codes included is noted (Pallin, 2008)but no details are available.

### Alternative Incidence Data

Thomas gathered demographic and medical encounter data from 240 U.S. Navy submarine patrols of 10 days or greater for the period 1 January 1997 through 30 September 2000. The large sample included 13441 male subjects; over 2 million person-days at risk. Rates were expressed by 100 person-years. Among officers, illness rates increased with age and length of military service, while the rate of illnesses did not vary significantly among enlisted men. Infectious skin diseases were a variety of conditions including dermatophytosis, dermatomycosis, and acariasis. Skin conditions reported among the submarine officers were primarily due to local infections and ingrown toenail.

Submarine and spacecraft environments share certain characteristics, including conditions of isolation, and a closed environment with an artificial atmosphere. Thus, some medical conditions including skin conditions may be relevant to both submariners and the astronaut population. The officers are most analogous to current space program participants. The majority of the medical events reported among officers and enlisted men could be considered minor and non-life threatening, with little or no impact on unit mission (Thomas, 2003).

Prevalence of fungal infections is estimated at 20-25% worldwide (Havlickova, 2008). Occurrence of these diseases is not registered by public health agencies therefore, their true incidence is unknown.

Some of the most common fungal infections go unreported. Among Navy cadets only 0.06% (2 out of 33) were aware of their condition (Ingordo, 2004). Jagou found that in France there is a 23 to 35% discrepancy between self reported and dermatologist diagnoses for chronic dermatoses including fungal infections (Jagou, 2006).

A survey conducted among space medicine experts rated skin disorders as the most likely to occur, but with little effect on mission completion or astronaut health (Billica, 1996), while they are ranked as the fourth risk for submariners. In summary, potentially mission-impacting medical events reported among officers aboard submarine patrols were rare (36.3 per 100 person-years) (Thomas, 2003). 5/11/2020 4:43:32 PM Skin Infection Cliff page: 4

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.5 0 - 9 24 - 48 - 72 0 0 0 (best case scenario %: 94.44 - 100) ISS-based Treatment 100 0.5 1 - 27 168 - 204 - 240 0 - 9 0 - 1 0 (worst case scenario %: 0 - 5.56) Untreated Best Case 0 0 1 - 27 24 - 48 - 72 0 - 9 0 0 Untreated Worst Case 0 0 11 - 42 168 - 204 - 240 1 - 42 0 - 100 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 4:43:32 PM Skin Infection Cliff page: 5

### Scenario Comments

The best case scenario is defined as a mild skin infection, bacterial or fungal, that resolves without treatment or minimal treatment with topical or oral antibiotics. The worst case scenario is defined as a moderate or severe skin infection that could require oral, intramuscular, or intravenous antibiotics, or could be refractory to treatment.

We are not including viral skin infections. Herpes Zoster viral infection is addressed in the Herpes Zoster Clinical Finding Form (CliFF). Serious infections, if they progress into sepsis, are addressed in the Sepsis CliFF.

Percentages of how often best versus worst case scenarios occur: During 2001–2003, 4.0% (95% CI 3.0–5.3) of all visits for skin and soft tissue infections, resulted in hospital admission (McCaig, 2006). Cellulitis has occurred during space flight and treatment with oral antibiotics has been successful. (Marshburn, 2008)

Based on the Real World Systems data there were no worst cases so to integrate this data into the BC/WC percentage the algorithm "if the next case" that was developed with the original data set was used for all the medical events in both data sets. Therefore, if the next case is a worst case we would 13/425 or 3% of cases as worst cases. If the next case is best case, we would have 12/425 or 3%. Thus the percentage for best case is 97% (Saile L., 2017)

### Best Case Comments

By definition functional impairment (FI) during Clinical Phase I is 100%. The time to follow ISS checklist procedures is estimated in 30 minutes duration. During Clinical Phase II, FI is estimated to be 0-9%. Class 0, 0% skin disorder signs have been present in the past but are currently present <1% of the time, no medication is necessary, no interference with activities of daily living. Class 1, 1 to 9%, signs and symptoms are present 1 to 30% of the time; may intermittently require treatment with topical medications; when signs and symptoms are present there is minimal interference with ADLs (American Medical Association, 2008). Duration is estimated to be 24 to 72 hours, 1 to 3 days, considering that recovery starts at the time when treatment is received (Stevens, 2005). EVAC has not occurred for skin conditions among submariners (Tansey, 1979). 0% deaths have been reported by Belmont in deployed troops (Belmont, 2010).

### Worst Case Comments

The worst case scenario During Clinical Phase I, FI and duration are similar to the best case scenario. During Clinical Phase II, FI is estimated to be 1 to 27%. Class 1, 1 to 9%, signs and symptoms are present 1 to 30% of the time; may intermittently require treatment with topical medications; when signs and symptoms are present there is minimal interference with activities of daily living (ADLs). Class 2, 11 to 27%, signs and symptoms are present > 30 to 60%% of the time; often require treatment with topical or systemic medications; when signs and symptoms are present there is mild interference with some ADLs (American Medical Association, 2008). Duration is 168 to 240 hours, 7 to 10 days, and antibiotic treatment alone is effective (Stevens, 2005). During Clinical Phase III FI is estimated to be 0-9%. Class 0 or 0%, skin disorder signs have been present in the past but are currently present <1% of the time, no medication is necessary, no interference with activities of daily living. Class 1, 1 to 9%, signs and symptoms are present 1 to 30% of the time; may intermittently require treatment with topical medications; when signs and symptoms are present there is minimal interference with ADLs. EVAC may be required in case of progressing infection. MEDEVACS have occurred in deployed troops for dermatologic conditions among US soldiers during Operation Iraqi Freedom (Belmont, 2010).

Another author reported a rate of 2.4% of total evacuations (263/11,183) (Harman, 2005). Specifically, bacterial and fungal dermatologic infections caused EVACS, among the UK Army and Royal Navy troops during the 2005-2009 period (Glennie, 2010). LOCL is not expected.

### Untreated Best Case Comments

During Clinical Phase II, FI is estimated to be 1 to 27%. Class 1, 1 to 9%, signs and symptoms are present 1 to 30% of the time; when there is no treatment available; when signs and symptoms are present there is minimal interference with ADLs. Class 2, 11 to 27%, signs and symptoms are present > 30 to 60%% of the time; often require treatment with topical or systemic medications; however, there is no treatment available; when signs and symptoms are present there is mild interference with some ADLs. (American Medical Association, 2008). During Clinical Phase III FI is estimated to be 0-9%. Class 0, 0% Skin disorder signs have been present in the past but are currently present <1% of the time, no medication is necessary, no interference with activities of daily living. Class 1, 1 to 9%, signs and symptoms are present 1 to 30% of the time; no treatment is available; when signs and symptoms are present there is minimal interference with ADLs. EVAC will not be required. LOCL is not expected. 5/11/2020 4:43:32 PM Skin Infection Cliff page: 6

### Untreated Worst Case Comments

During Clinical Phase II, FI is estimated to be 11 to 42%. Class 2, 11 to 27%, signs and symptoms are present > 30 to 60%% of the time; often require treatment with topical or systemic medications; however, there is no treatment available; when signs and symptoms are present there is mild interference with some ADLs. Class 3, 30-42%, signs and symptoms are present > 60 to 90% of the time; when signs and symptoms are present there is moderate interference with some ADLs.

Duration is estimated in 7 to 10 days without antibiotic treatment (Stevens, 2005). During Clinical Phase III FI is estimated to be 1 to 42%.

Class 1, 1 to 9%, signs and symptoms are present 1 to 30% of the time; when signs and symptoms are present there is minimal interference with ADLs. Class 2, 11 to 27%, signs and symptoms are present > 30 to 60%% of the time; when signs and symptoms are present there is mild interference with some ADLs. Class 3, 30-42%, signs and symptoms are present > 60 to 90% of the time; when signs and symptoms are present there is moderate interference with some ADLs (American Medical Association, 2008). EVAC may be required in case of progressing severe infection which requires surgical treatment (Stevens, 2005). To allow for uncertainty the EVAC risk is estimated at 0-100%. LOCL is not expected. Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ---------------------------------- | -------------------- | ------------ | ------- |
| American Medical Association, 2008 | 3 | FI |  |
| Stevens, 2005 | 3 | EVAC |  |
| Tansey, 1979 | 2 | EVAC |  |
| Belmont, Jr., 2010 | 2 | EVAC |  |
| Glennie, 2010 | 2 | EVAC |  |
| Saile L., 2017 | 1 | BCWC |  |
| 5/11/2020 4:43:32 PM | Skin Infection Cliff |  | page: 7 |
### Additional Comments

We searched PubMed with keywords skin infection and incidence, skin infection and epidemiology. We refined the search with keywords fungal skin infection, bacterial skin infection, and skin and soft tissue (SSTI). Abstracts were reviewed and selected by data and relevance.

We are not including viral skin infections. Warts and molluscum contagiosum are the most common. The virus remains solely within the skin and does not spread to other parts of the body. Molluscum contagiosum can infect almost any part of the skin. The bumps usually are not itchy or painful. Inflammation may indicate that the bumps will soon disappear. Most growths disappear spontaneously in 1 to 2 years.

Warts (verrucae) are small skin growths caused by any of 100 or more related human papilloma viruses. Warts can develop at any age but are most common among children and least common among older people. Many warts, particularly common warts, disappear on their own within a year or two. They rarely leave a scar when they heal spontaneously. They may also be removed by chemicals, cryotherapy or surgery (Merck Manual, 2009). Herpes Zoster viral infection is addressed in the Herpes Zoster Clinical Finding Form (CliFF). Serious infections, if they progress into sepsis, are addressed in the Sepsis CliFF. 5/11/2020 4:43:32 PM Skin Infection Cliff page: 8

The Resource Table (RT) Units

|  | Units Units | Available |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |

Bactrim DS 14 0 40 Yes Yes Antibiotic with consideration for MRSA (Sulfamethoxazole/Trimethoprim) 800 mg/160 mg tablet

| BZK wipes | 0 1 | 60 Yes | No Cleanse skin. |  |
| ------------- | --- | ------ | ----------------------------- | --- |
| Camera | 1 1 | 1 No | No To document rash, or wound |  |
| Ertapenem 1gm | 0 7 | 6 Yes | Yes Antibiotic for cellulitis |  |

Lidocaine (Xylocaine) plain 1%, 0 7 3 Yes Yes Anesthetic for ertapenem injection 10mL multi dose vial Lotrimin AF cream (Clotrimazole) 0.1 1 2 Yes Yes Topical anti-fungal firstline 1%, 30gm tube Mupirocin (Bactroban) 2%, 22 gm 0.1 1 2 Yes Yes Anti infective - topical tube

| Needle (23G) | 0 1 | 20 Yes | Yes To draw medication from vial |  |
| ------------ | --- | ------ | -------------------------------- | --- |

Nitrile gloves (large, medium, and 0 1 30 Yes No Personal Protective equipment for CMO small) (pair) Sharps container 0 1 40 No No To dispose of medical waste such as used medical needles, scalpels, IV catheters, razors, vials Syringe (3cc) 0 1 20 Yes Yes To draw and administer medication

### Resource Comments

The source of the resource table data was derived from the International Space Station Integrated Medical Group Medical Checklist (MOD, 2011). Erythromycin ointment and Clotrimazole cream have been added. Rocephin is recommended for skin and skin structure infections caused by Staphylococcus aureus, Staphylococcus epidermidis, Streptococcus pyogenes, Viridans group streptococci, Escherichia coli, Enterobacter cloacae, Klebsiella oxytoca, Klebsiella pneumoniae, Proteus mirabilis, Morganella morganii, Pseudomonas aeruginosa, Serratia marcescens, Acinetobacter calcoaceticus, Bacteroides fragilis, or Peptostreptococcus species (Roche Laboratories, 2009).

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |
| ----------------------------------------------- | --- | -------------------- | ------------ | ------- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 | Resources |  |
| 5/11/2020 4:43:32 PM |  | Skin Infection Cliff |  | page: 9 |
### Level Of Evidence

| Input Data | LOE Average | Description | Range |  |
| ---------------------- | ----------- | -------------------- | ----- | -------- |
| Incidence | 1 | Excellent | 1-2 |  |
| Functional Impairment | 3 | Good | 2.1-3 |  |
| Best Case / Worst Case | 1 | Fair | 3.1-4 |  |
| EVAC / LOCL | 2.25 | Poor | 4.1-5 |  |
| Resources | 2 |  |  |  |
| QUALITY OF EVIDENCE | 1.85 |  |  |  |
| 5/11/2020 4:43:32 PM |  | Skin Infection Cliff |  | page: 10 |
### Reference List

Reference American Medical Association. Skin. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 159-82.

Belmont PJ, Jr., Goodman GP, Waterman B, DeZee K, Burks R, Owens BD. Disease and nonbattle injuries sustained by a U.S. Army Brigade Combat Team during Operation Iraqi Freedom. Mil Med 2010 Jul;175(7):469-76.

Billica RD, Simmons SC, Mathes KL, McKinley BA, Chuang CC, Wear ML, et al. Perception of the medical risk of spaceflight. Aviat Space Environ Med 1996 May;67(5):467-73. Glennie JS, Bailey MS. UK Role 4 military infectious diseases at Birmingham Heartlands Hospital in 2005-9. J R Army Med Corps 2010 Sep;156(3):162-4. Harman DR, Hooper TI, Gackstetter GD. Aeromedical evacuations from Operation Iraqi Freedom: a descriptive study. Mil Med 2005 Jun;170(6):521-7. Havlickova B, Czaika VA, Friedrich M. Epidemiological trends in skin mycoses worldwide. Mycoses 2008 Sep;51 Suppl 4:2-15.

Ingordo V, Naldi L, Fracchiolla S, Colecchia B. Prevalence and risk factors for superficial fungal infections among Italian Navy Cadets.

Dermatology 2004;209(3):190-6. International Space Station Integrated Medical Group. Medical Checklist ISS- All Expeditions. Houston: National Aeronautics and Space Administration; 2008. International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

Jagou M, Bastuji-Garin S, Bourdon-Lanoy E, Penso-Assathiany D, Roujeau JC. Poor agreement between self-reported and dermatologists' diagnoses for five common dermatoses. Br J Dermatol 2006 Nov;155(5):1006-12.

Marshburn TH. Acute Care. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 101-22.

McCaig LF, McDonald LC, Mandal S, Jernigan DB. Staphylococcus aureus-associated skin and soft tissue infections in ambulatory care.

Emerg Infect Dis 2006 Nov;12(11):1715-23.

Merck Manual. Lacerations. Porter RS, editor. Merck Manuals Online Medical Library . 2009. Whitehouse Station, N.J, Merck Sharp & Dohme Corp.. 4-23-2010. NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

Pallin DJ, Egan DJ, Pelletier AJ, Espinola JA, Hooper DC, Camargo CA, Jr. Increased US emergency department visits for skin and soft tissue infections, and changes in antibiotic choices, during the emergence of community-associated methicillin-resistant Staphylococcus aureus. Ann Emerg Med 2008 Mar;51(3):291-8. Roche Laboratories. Rocephin Prescribing information. Genentech, editor. Rocephin Prescribing information . 2009. 1-4-2010.

Saile L., Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence V2. 2017.

Saile L., Boley L, Arellano J, Kerstman E. iMED Best and Worst Case Percentage Update. 2017.

Saile L, Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence. 2017.

Scheuring RA, Mathers CH, Jones JA, Wear ML. Musculoskeletal injuries and minor trauma in space: incidence and injury mechanisms in U.S. astronauts. Aviat Space Environ Med 2009 Feb;80(2):117-24.

Stevens DL, Bisno AL, Chambers HF, Everett ED, Dellinger P, Goldstein EJ, et al. Practice guidelines for the diagnosis and management of skin and soft-tissue infections. Clin Infect Dis 2005 Nov 15;41(10):1373-406.

Tansey WA, Wilson JM, Schaefer KE. Analysis of health data from 10 years of Polaris submarine patrols. Undersea Biomed Res 1979;6 Suppl:S217-S246. Thomas TL, Garland FC, Mole D, Cohen BA, Gudewicz TM, Spiro RT, et al. Health of U.S. Navy submarine crew during periods of isolation.

Aviat Space Environ Med 2003 Mar;74(3):260-5.

Walton M, Kerstman E, IMM. In-flight Compilation v20100414_Incidence_calculation. 2010. 5/11/2020 4:43:32 PM Skin Infection Cliff page: 11

| 5/11/2020 4:43:32 PM | Skin Infection Cliff | page: 12 |
| -------------------- | -------------------- | -------- |

---

## Source metadata

```yaml
source_filename: "skin-infection-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 100"
source_url: "https://drive.google.com/file/d/19RlUNT650Xr3luY7wJ9N-sFozFDxTsqC/view"
source_drive_id: "19RlUNT650Xr3luY7wJ9N-sFozFDxTsqC"
source_sha256: 83e26b6b420ab5573ac45286ab3c8bbd408360b738008cb501f49e11dbb802db
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 12
ocr_performed: false
```
