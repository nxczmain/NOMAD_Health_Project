# Skin Abrasion CLiFF

[View original PDF](https://drive.google.com/file/d/18_7NuxSYbD3E2TrgLv8gH2Nu2xztQ3oE/view) · **12 pages**

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

### Skin Abrasion Cliff

## Branch Baseline

A skin abrasions are tangential injuries that can involve the epidermis and/or dermis. They are evaluated, cleansed and debrided, if necessary, then treated with antibiotic ointment and dressing. They have been reported regularly in flight with causes attibuted to construction, repair and transfer operations. Equipment known to cause abrasions includes Velcro and spacesuit chafing. (Mashburn, 2008)

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

| Events: | 123 |  |
| ---------------------------------------------------- | ------------------------------ | --- |
| Person Years: | 45.49 |  |
| Space Flight Incidence Rate (Events / Person Years): | 123 / 45.49 = 2.70389096504726 |  |

## Incidence Comments

Source of incidence data is a compliation of available in flight medical events. (Walton, 2010)

Integrated the real world systems incidence data. Add 29 new medical events and 18.17 person years (Saile, 2017)

Updated the Person-Years based on the revised real world system integrated incidence data. The integrated person years changed from 18.17 to 18.13 so the conditions person years changed from 45.53 to 45.49 (Saile L., 2017)

| 4/6/2020 5:12:12 PM | Skin Abrasion Cliff | page: 1 |
| ------------------- | ------------------- | ------- |
### Information Regarding Prevention

Pre-flight screening includes skin visual inspection plus photographs of any areas of significant interest. (Hawkins, 1975)

- Disqualifying criteria includes: All injuries, contusions, fractures, or surgery until healed and not associated with functional deficit. Specific to

skin are adherent scars that interfere with the wearing of personal equipment or that impair movement to the extent that emergency egress would be impeded; infections of the skin, systemic or superficial, if communicable, extensive, or not amenable to treatment; any skin disorder, acute or chronic, that is severe enough to cause interference with emergency egress, wearing of flight equipment, or successful mission completion (International Space Station Program, 2009).

Other EVAs may cause dermal injuries, and the introduction of lunar dusts into the suits’ interior, which may enhance skin abrasions. (James, 2010)

While most of the symptoms and injuries sustained during EVA training were “mild, self-limited, and controlled by available countermeasures,” some “represented the potential for significant injury with short and long-term consequences regarding astronaut health and interference with mission objectives.” (Johnston, 1975) A study identified that 50 of 219 of in-flight injuries resulted from wearing the EVA suit. (Scheuring, 2009), (Gernhardt, 2009) LSAH findings indicate that superficial skin trauma is one of the most common reasons of crew members to access resources of the medical kit.

Minor contusions and bruises are common. Also chafing, and subungual hemorrhage caused by extravehicular suits and gloves. (Mashburn, 2008) Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Walton, 2010 1 Incidence Saile L., 2017 1 Incidence 4/6/2020 5:12:12 PM Skin Abrasion Cliff page: 2

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

### Female Data Characteristics

| Fixed Rate: | 0.015 |  |
| ----------- | ----- | --- |

### Male Data Characteristics

| Fixed Rate: | 0.014 |  |
| ----------- | ----- | --- |

## Incidence Comments

Center for Disease Contol calculated the 2001 US general population incidence by multiplying the incidence rate of non-fatal unintentional injurys by the percentage rate of abrasions/contusion by gender and age in 100,000. US abrasion/contusion females 35-44 years of age = 0.016, while 45-54 years of age = 0.014 for an average incidence rate of 0.015. US abrasion/contusion males 35-44 years of age = 0.016, while 45-54 years of age = 0.012 for an average incidence rate of 0.014. We calculated the 2001 US general population incidence by multiplying the percentage rate of abrasions/contusion by the incidence rate of non-fatal unintentional injuries by gender and age in 100,000.

Females 35-44: 7756.5 x 0.2 (20.7%) = 1,551.30 / 100,000 = 0.016 (0.015 – 0.017)

Females 45-54: 6704.8 x 0.211 (21.1%) = 1414.71 / 100,000 = 0.014 (0.013 – 0.015)

Male 35-44: 10158 x 0.166 (16.6%) = 1625.58 / 100,000 = 0.016 (0.015 - 0.017)

Males 45-54: 7360.5 x 0.166 = 1,221.84 / 100,000 = 0.012 (0.011 – 0.013)

Rate per 100,000 population and 95% CI female 35-44 7756.5 (7486.6-8026.3), age 45-54, 6704.8 (6464.9-6944.7) unintentional injury, 2001, Male 35-44, 10158 (9520.4-10795.6), 45-54, 7360.5 (6901.5-7819.4)

Contusion/Abrasion 35-44 16.6%, 45-54 16.6 , females 20.7 and 21.1%, (Vyrostek, 2004)

Of note, terrestrial evidence of contusions and abrasions in emergency departments is provided as a reference, however majority of affected individuals do not seek medical care for minor injuries.

| 4/6/2020 5:12:12 PM | Skin Abrasion Cliff | page: 3 |
| ------------------- | ------------------- | ------- |
Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

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

| Events: | 70 |  |
| ---------------------------------------------------- | ----------------------------- | --- |
| Person Years: | 26.45 |  |
| Space Flight Incidence Rate (Events / Person Years): | 70 / 26.45 = 2.64650283553875 |  |

## Incidence Comments

Scheuring studied the musculoskeletal injuries and minor trauma injuries of US astronauts. He reported 70 abrasions over 26.45 person-years.

Data was collected by reviewing medical records and there is no consistent recording or coding of lesions, thus abrasion data in IMM compilation (94) is higher than abrasions reported by Scheuring’s study (70). Challenges in collecting and analyzing the data were also reported by Scheuring, i.e. no referencing the crew member medical record, not including pre-flight and post-flight findings, data not always elicited from crew members, and changing manner in which data was collected (Scheuring, 2009).

| 4/6/2020 5:12:12 PM | Skin Abrasion Cliff | page: 4 |
| ------------------- | ------------------- | ------- |
Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

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

| Events: | 39 |  |
| ---------------------------------------------------- | --------------- | --- |
| Person Years: | 100 |  |
| Space Flight Incidence Rate (Events / Person Years): | 39 / 100 = 0.39 |  |

## Incidence Comments

Wear studied overall injury rates in Shuttle astronauts. The reported incidence rate per 100 person years, during mission period was 38.6, while incidence rate for a comparison group was 1.3. We calculated the incidence 38.6/100 person-years. Wear’s article does not include standard error, standard deviation, or confidence interval. (Wear, 1999)

| 4/6/2020 5:12:12 PM | Skin Abrasion Cliff | page: 5 |
| ------------------- | ------------------- | ------- |
### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

|  | Clinical Phase I | Clinical Phase II | Clinical Phase III |  |
| ------------------------------------- | ------------------- | -------------------- | ----------------------- | ------ |
|  | Diagnosis & Initial | On-going Treatment / | Recovered / Mission End |  |
|  | Treatment1 | Convalescence2 | State3 |  |
|  | FI* Duration | FI* Duration (hrs) | FI* EVAC** | LOCL** |
|  | (%) (hrs) | (%) (Min - ML - Max) | (%) (%) | (%) |
| ISS-based Treatment | 100 0.25 - | 0 - 9 24 - 48 - 72 | 0 0 | 0 |
| (best case scenario %: 91.94 - 92.74) | 0.5 |  |  |  |

ISS-based Treatment 100 0.5 - 1 - 27 120 - 144 - 168 0 - 9 0 0

| (worst case scenario %: 7.26 - 8.06) | 0.75 |  |  |  |
| ------------------------------------ | ------- | ------------------- | ------- | --- |
| Untreated Best Case | N/A N/A | 1 - 27 24 - 48 - 72 | 0 - 9 0 | 0 |

Untreated Worst Case N/A N/A 11 - 42 120 - 144 - 168 1 - 42 0 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.)

| 4/6/2020 5:12:12 PM | Skin Abrasion Cliff |  |  | page: 6 |
| ------------------- | ------------------- | --- | --- | ------- |
### Scenario Comments

The abrasion best case scenario is defined as skin scrapes that do not fully penetrate the epidermis. (Merck Manual, 2009) or the rubbing or scraping of the surface layer of cells or tissue from an area of the skin or mucous membrane (Merriam-Webster, 2007). Minor cuts requiring cleaning and band-aids are also included in this scenario, as listed in the ISS medical checklist wound care procedures.

The worst case scenario is defined as abrasions covering an extensive area, requiring a dressing, topical antibiotic treatment, and mild non- prescription analgesics. Abrasions are evaluated, cleansed, and debrided similarly to lacerations. After thoroughly removing all debris, antibiotic ointment (e.g., bacitracin) and a non-adherent gauze dressing can be applied. Other wound dressings may be used to keep the wound from drying out, as this interferes with re-epithelialization, and to keep the dressing from adhering (Merck Manual, 2009).

- Percentages of how often best versus worst case scenarios occur: Based on Real World System data set, there were 29 events and 4

of them were worst case. Using empirical data from the real world system, the worst case scenario would be 13.79% (4/29). Thus the best case scenarios would be 86.21% (25/29) (Saile L., 2017).

### Best Case Comments

FI for Clinical Phase I is by definition 100%. Duration of evaluation and cleaning the wound as per ISS medical checklist procedure is estimated in 15 to 30 minutes (International Space Station Integrated Medical Group, 2006). During Clinical Phase II, based on Table 8-2 of the AMA Guides for Functional Impairment (American Medical Association, 2008), FI is estimated to be 0-9%. Class 0 or 0% FI indicates that skin disorder signs have been present in the past but are currently present <1% of the time, no medication is necessary, no interference with activities of daily living. Class 1, 1 to 9%, indicates that signs and symptoms are present 1 to 30% of the time; may intermittently require treatment with topical medications; when signs and symptoms are present there is minimal interference with activities of daily living (ADLs).

Duration is expected to be 24 to 72 hours. (Honsik, 2007), (Basler, 2004)During Clinical Phase III, recovery is expected and FI is Class 0 or 0%, which indicates that skin disorder signs have been present in the past but are currently present <1% of the time, no medication is necessary, no interference with ADLs. By definition EVAC or LOCL is not likely to occur because of its superficial nature as evidenced in our in flight data where EVAC or LOCL has not occurred (In-flight compilation rev 2010). Abrasions do not require emergent care (Risin, 2009) and return to activity is expected immediately (Honsik et al., 2007).

### Worst Case Comments

FI for Clinical Phase I and duration are similar to best case scenario, 100% FI and estimated time is 30 minutes to 45 minutes, for following ISS procedures for wound care of abrasion in a larger area (International Space Station Integrated Medical Group, 2006). During Clinical Phase II FI is estimated to be 1 to 27% (American Medical Association, 2008). Class 1 or 1 to 9%, FI indicates that signs and symptoms are present 1 to 30% of the time; may intermittently require treatment with topical medications; when signs and symptoms are present there is minimal interference with ADLs. Class 2 or 11 to 27% FI indicates that signs and symptoms are present > 30 to 60%% of the time; often require treatment with topical or systemic medications; when signs and symptoms are present there is mild interference with some ADLs. Duration: The assumption that most abrasions take at least 5 days based on surgically repaired wound (healing by primary intention), they form an effective protective barrier to water and bacteria in 12 to 24 hours and resemble normal epidermis within 5 days (Merck Manual, 2009) and can take up to 7 days based on Honsik's article that a non-occlusive dressing may stay up to 7 days. (Honsik, 2007) During Clinical Phase III FI is estimated to be 0-9%. Class 0 or 0% FI indicates that skin disorder signs have been present in the past but are currently present <1% of the time, no medication is necessary, no interference with activities of daily living. Class 1, 1 to 9%, indicates that signs and symptoms are present 1 to 30% of the time; may intermittently require treatment with topical medications; when signs and symptoms are present there is minimal interference with activities of daily living (ADLs). In analog populations, the rate of EVAC secondary to soft tissue injury (no details on the type of injury) was 8% for soldiers and 0% for officers, i.e. 92 and 100% returned to duty. (Belmont, Jr., 2010) EVAC or LOCL is not likely to occur in the treated abrasion worst case scenario similar to best case.

### Untreated Best Case Comments

During Clinical Phase II FI is estimated to be 1 to 27% (American Medical Association, 2008). Class 1 or 1 to 9%, FI indicates that signs and symptoms are present 1 to 30% of the time; may intermittently require treatment with topical medications; when signs and symptoms are present there is minimal interference with ADLs. Class 2 or 11 to 27% FI indicates that signs and symptoms are present > 30 to 60%% of the time; often require treatment with topical or systemic medications; when signs and symptoms are present there is mild interference with some ADLs.

- Duration: Duration is expected to be 24 to 72 hours (Honsik, 2007), (Basler, 2004). During Clinical Phase III FI is estimated to be 0-9%. Class

0 or 0% FI indicates that skin disorder signs have been present in the past but are currently present <1% of the time, no medication is necessary, no interference with activities of daily living. Class 1, 1 to 9%, indicates that signs and symptoms are present 1 to 30% of the time; when signs and symptoms are present there is minimal interference with activities of daily living (ADLs). EVAC or LOCL is not likely to occur in the untreated abrasion best case scenario. 4/6/2020 5:12:12 PM Skin Abrasion Cliff page: 7

### Untreated Worst Case Comments

During Clinical Phase II FI is estimated to be 11 to 42%. Class 2, 11 to 27% FI indicates that signs and symptoms are present > 30 to 60%% of the time; when signs and symptoms are present there is mild interference with some ADLs. Class 3, 30-42%, FI indicates that signs and symptoms are present > 60 to 90% of the time; when signs and symptoms are present there is moderate interference with some ADLs.

- Duration: The assumption that most abrasions take at least 5 days based on surgically repaired wound (healing by primary intention), they form

an effective protective barrier to water and bacteria in 12 to 24 hours, resemble normal epidermis within 5 days, (Merck Manual, 2009) and can take up to 7 days based on Honsik's article that a non-occlusive dressing may stay up to 7 days. (Honsik, 2007) During Clinical Phase III FI is estimated to be 1 to 42%. Class 1, 1 to 9%, signs and symptoms are present 1 to 30% of the time; when signs and symptoms are present there is minimal interference with ADLs. Class 2, 11 to 27%, signs and symptoms are present > 30 to 60%% of the time; when signs and symptoms are present there is mild interference with some ADLs. Class 3, 30-42%, signs and symptoms are present > 60 to 90% of the time; when signs and symptoms are present there is moderate interference with some ADLs. If there are no dressings available, some may be improvised out of any clean cloth material on board. EVAC or LOCL is not likely to occur in the untreated abrasion worst case scenario.

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ---------------------------------- | ------------------- | ------------ | ------- |
| American Medical Association, 2008 | 3 | FI |  |
| Belmont, Jr., 2010 | 2 | EVAC |  |
| Saile L., 2017 | 1 | BCWC |  |
| 4/6/2020 5:12:12 PM | Skin Abrasion Cliff |  | page: 8 |
### Additional Comments

We searched PubMed using the terms skin abrasions, skin abrasions and incidence, skin abrasions and epidemiology, minor injuries and space medicine. Our search yielded some epidemiological information. We then refined the search by year.

| 4/6/2020 5:12:12 PM | Skin Abrasion Cliff | page: 9 |
| ------------------- | ------------------- | ------- |
The Resource Table (RT) Units

|  | Units Units | Available |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |

Bacitracin 500 units/gm. 28 gm 0 0.15 1 Yes Yes Antibiotic (topical) tube Bandaid strip 2 0 10 Yes No Small adhesive bandages, to cover a wound

| BZK wipes | 2 2 | 60 Yes | No Cleanse skin. |  |
| --------- | --- | ------ | -------------------- | --- |
| Camera | 0 1 | 1 No | No To document wound |  |

Gauze pads (4x4) 0 8 50 Yes No To absorb blood or fluids from skin

| Medical tape | 0 0.06 | 5 Yes | No Single-coated adhesive tape |  |
| ------------ | ------ | ----- | ------------------------------ | --- |

Nitrile gloves (large, medium, and 2 2 30 Yes No Personal Protective equipment for CMO small) (pair)

| Scissors - Trauma | 0 1 | 1 No | Yes To cut gauze, tape |  |
| ------------------------------ | --- | ------- | ---------------------- | --- |
| Tylenol (Acetaminophen) 325 mg | 0 4 | 250 Yes | Yes Pain relief |  |

### Resource Comments

Terrestrial standard of care for wounds does not include alcohol for cleaning wounds (Edlich, 2010). Alcohol is included in the ISS Medical checklist (Mission Operations Directorate (MOD), 2011).

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |
| ----------------------------------------------- | --- | ------------------- | ------------ | -------- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 | Resources |  |
| 4/6/2020 5:12:12 PM |  | Skin Abrasion Cliff |  | page: 10 |
### Level Of Evidence

| Input Data | LOE Average | Description | Range |  |
| ---------------------- | ----------- | ------------------- | ----- | -------- |
| Incidence | 1 | Excellent | 1-2 |  |
| Functional Impairment | 3 | Good | 2.1-3 |  |
| Best Case / Worst Case | 1 | Fair | 3.1-4 |  |
| EVAC / LOCL | 2 | Poor | 4.1-5 |  |
| Resources | 2 |  |  |  |
| QUALITY OF EVIDENCE | 1.8 |  |  |  |
| 4/6/2020 5:12:12 PM |  | Skin Abrasion Cliff |  | page: 11 |
### Reference List

Reference American Medical Association. Skin. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 159-82.

Basler RS, Hunzeker CM, Garcia MA. Athletic skin injuries: combating pressure and friction. Phys Sportsmed 2004 May;32(5):33-40.

Belmont PJ, Jr., Thomas D, Goodman GP, Schoenfeld AJ, Zacchilli M, Burks R, et al. Combat Musculoskeletal Wounds in a US Army Brigade Combat Team During Operation Iraqi Freedom. J Trauma 2010 Nov 1.

Edlich RF, Rodeheaver GT, Thacker JG, Lin KY, Drake DB, Mason SS, et al. Revolutionary advances in the management of traumatic wounds in the emergency department during the last 40 years: part I. J Emerg Med 2010 Jan;38(1):40-50.

Gernhardt M, Jones JA, Scheuring RA, Abercromby AF, Tuxhorn JA, Norcross JR. Exercise and Extravehicular activity:Risk of Compromised EVA Performance and Crew Health Due to Inadequate EVA Suit Systems. In: McPhee JC, Charles JB, editors. Human Health and Performance , Risks of Space Exploration Missions.Houston: National Aeronautics and Space Administration; 2009. p. 333-58.

Hawkins WR, Zieglschmid JF. Clinical Aspects of Crew Health. In: Johnston RS, Dietlein LF, Berry CA, editors. Biomedical Results of Apollo.

NASA SP-368 ed. Washington D.C.: NASA; 1975. p. 46-84.

Honsik KA, Romeo MW, Hawley CJ, Romeo SJ, Romeo JP. Sideline skin and wound care for acute injuries. Curr Sports Med Rep 2007 Jun;6(3):147-54. International Space Station Integrated Medical Group. Medical Checklist ISS- All Expeditions. Houston: National Aeronautics and Space Administration; 2008. International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

James JT, Kahn-Mayberry Noreen. Risk of Adverse Health Effects from Lunar Dust Exposure. In: McPhee JC, Charles JB, editors. Human Health and Performance , Risks of Space Exploration Missions.Houston: National Aeronautics and Space Administration; 2010. p. 317-30.

Johnston R, Dietlein L, Berry CA. Biomedical Results of Apollo. NASA SP-2006-368 ed. Washington D.C.: NASA; 1975.

Marshburn TH. Acute Care. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 101-22.

Merck Manual. Lacerations. Porter RS, editor. Merck Manuals Online Medical Library . 2009. Whitehouse Station, N.J, Merck Sharp & Dohme Corp.. 4-23-2010. Merriam-Webster. Merriam-Webster's Medical Dictionary. Dictionary com 2007 [cited 2010 May 5]; NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

Saile L., Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence V2. 2017.

Saile L., Boley L, Arellano J, Kerstman E. iMED Best and Worst Case Percentage Update. 2017.

Saile L, Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence. 2017.

Scheuring RA, Mathers CH, Jones JA, Wear ML. Musculoskeletal injuries and minor trauma in space: incidence and injury mechanisms in U.S. astronauts. Aviat Space Environ Med 2009 Feb;80(2):117-24.

Vyrostek SB, Annest JL, Ryan GW. Surveillance for fatal and nonfatal injuries--United States, 2001. MMWR Surveill Summ 2004 Sep 3;53(7):1-57. Walton M, Kerstman E, IMM. In-flight Compilation v20100414_Incidence_calculation. 2010.

Wear ML. Injury Rate of Shuttle Astronauts. The Longitudinal Study of Astronaut Health - LSAH Newsletter 8[2]. 1999. NASA. 4/6/2020 5:12:12 PM Skin Abrasion Cliff page: 12

---

## Source metadata

```yaml
source_filename: "skin-abrasion-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 100"
source_url: "https://drive.google.com/file/d/18_7NuxSYbD3E2TrgLv8gH2Nu2xztQ3oE/view"
source_drive_id: "18_7NuxSYbD3E2TrgLv8gH2Nu2xztQ3oE"
source_sha256: 1d56b4e3767016355f8d7ce14ae7182e87bd85a42e9119c53342f24c1040e16e
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 12
ocr_performed: false
```
