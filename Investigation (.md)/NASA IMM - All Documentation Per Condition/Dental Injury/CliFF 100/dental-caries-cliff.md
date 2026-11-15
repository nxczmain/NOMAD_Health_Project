# Dental Caries CLiFF

[View original PDF](https://drive.google.com/file/d/186q8hCtoRxNo_m7QPYrPhNFZd29d-8KM/view) · **10 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Dental Injury/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)
- [Prevention:](#prevention)

---

### Dental Caries Cliff

## Branch Baseline

Dental caries is a transmissible, reversible, diet-and time-dependent multifactorial bacterial disease of the oral cavity that affects people of all ages. It is the most common childhood ailment, and it continues to be a widespread, chronic disease for adults in the United States. Approximately 91 percent of dentate adults 20 years or older have experienced dental caries. (Beltran-Aguilar, 2005)

Indices for dental caries are obtained by clinical exam, recording the number of cavities, fillings and missing teeth. Such a recording is an estimation of the dental caries history from the time of the eruption of the first permanent molars up to the day of examination. Incipient caries lesions ("white spot lesions") are usually not included. These readings are calculated for 28 (permanent) teeth, excluding the 4 third molars. This index provides number of teeth with caries lesions (D), number of teeth extracted (M), and number of teeth or surfaces with fillings or crowns (F). The sum of these three factors provides the DMF (T)-value. When the teeth surfaces are counted instead of the teeth, the index is the DMF(S).

DMF(T) and DMF(S) are used as dental caries indices to describe numerically the amount (the prevalence) of dental caries in an individual. This provides the total cumulative caries experience. The CDC surveillance also report the prevalence of untreated tooth decay. (Beltran-Aguilar, 2005)

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

| Mean: | 0.00941 |  |
| --------------------- | ------------------- | ------- |
| Standard Deviation: | 0.000595 |  |
| 11/15/2016 4:06:32 PM | Dental Caries Cliff | page: 1 |
## Incidence Comments

A dental emergency has not occurred among US astronauts in flight. IMM requested a Bayesian Analysis based on terrestrial analog population and the astronaut corps on ground from NASA Glenn Research Center. Results of this analysis (Gilkey, 2012) are included in the model data for incidence. Evaluating the probability that an astronaut may encounter dental caries during an exploration mission is necessary because this condition may greatly affect crewmember performance, health, and morale. Caries are caused by certain bacteria in the oral flora that release acid as a byproduct of carbohydrate metabolism, dissolving the calcium phosphate of the enamel and dentin (Rethman, 2000); (Todar, 2008). For the military population data analysis, dental caries were defined as: 2010 ICD-9-CM code 521 (hard tissues and caries). An estimate of the probability of an astronaut encountering dental caries was evaluated using military analog data from the U.S. Submarine Force (Deutsch, 2008) as well as astronaut data from LSAH (Murray, 2010). The astronaut data from LSAH defined dental caries as "primary caries, secondary caries, or order unknown", with no reference to ICD-9 coding. For this analysis, the sum of all three caries categories was used for male and female astronauts. Information from these sources was combined using a Bayesian update approach to estimate the average rate of caries. By making the average rate assumption, a Poisson probability distribution was assumed to govern the probability of caries.

To estimate the probability of astronauts and military analogs developing dental caries, the GRC-IMM team assumed the incidence rates (Lambda) of caries were constant over the period of interest. This in turn led to the assumption of the probability of occurrence following a Poisson distribution. Medical history of submarine missions was useful for this statistical analysis because of their similarities to exploration-class missions; for instance, both occur in confined, remotely located environments where professional medical/dental care is not immediately available. Also, a medical event of low probability and high consequence could cause a mission to cease. It is important to note, however, that smoking was significantly associated with the occurrence of any dental emergency. There are likely a greater percentage of smokers among sailors than the astronaut corps. This study is limited in that it applies only to adult men. In addition, the overwhelming majority (88.5 percent) of these men are caucasian. Submarine crew members are generally more senior than the average sailor (70.5 percent were 25 years old or older). There were 29 dentist visits due to caries over 5946.9 person-years yielding an incidence rate of 0.0049 events per person-year.

LSAH data of pre-flight incidences for mission-ready active male astronauts: number of events (168), and the time (475.2 person-years) and the number of events in-flight (zero), and the time (29.8 person-years). were both used for the Bayesian estimate. For this analysis, data for the mission-ready, active female astronaut population was not used, as the analog military data used in the Bayesian.

To improve the estimate of the rate of occurrence in the astronaut corps and provide a 1st order approximation suitable for use in the GRC-IMM modeling effort the numerical Bayesian update code WinBUGS was used. This process returned an estimate of the incidence rate of dental abscess in the astronaut core with respect to military personnel from the U.S. Submarine Force. This rate can be used as the input rate to a Poisson distribution probability model to estimate the probability of abscess occurring in-flight. The mean incidence rate of dental caries was 0.00941 events per person-year. The Standard deviation was 0.000595 (Gilkey, 2012).

As with any data search, there are limitations with the data available. In both the military and astronaut data, there may be cases of under- reporting. Astronaut health is typically tracked through annual physicals, where questions related to dental health may or may not have been asked. Between the military and astronaut data, there may be demographic differences including rates of smoking, age differences and racial differences. The age difference is important to note, as preventative practices are continually improving. Also, due to the absence of women serving as submarine crewmembers, the female astronaut data was not used in this Bayesian calculation. Future models may want to include these data for women. 11/15/2016 4:06:32 PM Dental Caries Cliff page: 2

### Information Regarding Prevention

Disqualifying dental conditions include: Any dental defects that interfere with clear speech or cause changes in the contours of the face which interfere with the performance of duties; complete edentulism or insufficient number of natural healthy teeth to masticate a normal diet or enunciate clearly; dental prostheses (any removable dental prosthesis, which if lost or broken, would not leave enough natural healthy teeth to masticate a normal diet or enunciate clearly; any unilateral removable dental prosthesis that could be swallowed); diseases and abnormalities of the jaws or associated structures, including periodontal disease, that are not easily remedied or may interfere with the performance of duties; severe malocclusion that interferes with the mastication of a normal diet or clear enunciation; any dental defects such as dental caries, dental dysplasia, enamel dysplasia, symptomatic cracked teeth, defective restorations, defective prosthesis, and defective implants until resolved; partially erupted or impacted third molar teeth with the potential to cause erosion of adjacent teeth, pericoronitis, or periodontal defect until resolved; infections of endodontic or periodontic origin until resolved. Active orthodontic treatment requires dental consultation. Active orthodontic treatment is disqualifying for space flight duties (International Space Station Program, 2009)

Treatment(s): Treatment during space flight depends on the extent of the carious lesion and the type of symptoms the patient is experiencing. Caries can present in many ways and produce a variety of symptoms. A simple caries is asymptomatic. A moderate caries destroys a moderate portion of the underlying dentin without communication with the pulp chamber. If a painful carious defect is present, the cavity can be filled with a temporary filling (Cavit). After treatment the patient should be able to resume duties. (Hodapp, 2008)

## Prevention:

At 6 months before launch crewmembers undergo examination, if treatment is deemed necessary, all such treatment is completed 3 months before launch. All astronauts are expected to maintain optimal physical and oral health and to follow optimal oral hygiene practices. (Hodapp, 2008) Other: BioMat Sciences developed a lightweight, miniaturized microwave system to enable emergency dental treatments by a non dental expert (e.g., an astronaut). The system is customized for tooth repair and reconstruction, including treatment of diseased pulpal tissue (root canal) without drilling. (Byerly, 2010) At this point, this equipment is not available on board and therefore is not included in the ISS checklist procedures.

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Gilkey, 2012 2 Incidence 11/15/2016 4:06:32 PM Dental Caries Cliff page: 3

### Alternative Incidence Data

Dental problems that occurred among crewmembers during the Apollo Program resulted in no appreciable mission impact. During the 90-day preflight period, five of the thirty-three Apollo crewmen had dental problems requiring treatment. Prediction of such occurrences is virtually impossible, although the preventive treatment of known causative factors can lower the risk of occurrence. The only other preflight problems were minor fractures of previously placed restorations or minor fractures of part of a crown of a tooth. In flight, no problems were experienced.

No case of barodontalgia ever occurred, although some astronauts had experienced this discomfort during their flying careers. Experience with Apollo astronauts in an intensive preventive dentistry program led to the conclusion that the probability of a disabling dental emergency in the astronaut population is one occurrence in 9000 man-days (1/3,285,000 person-years). The probability of dental problems of lesser severity, but associated with significant discomfort, is one in 1500 man-days (1/547500 person-years) or 1.83e-6. These figures are comparable to those recorded for Navy personnel on long submarine patrols. From these estimations, it is obvious that a provision for emergency in flight dental care must be made only for very long-duration missions. (Hawkins, 1975).

Similarly, no dental problems occurred during the Skylab series of missions which required use of the In-flight Medical Support System-Dental.

Some changes in oral health were noted but most significant was the relative nonexistence of health hazardous intra-oral changes. In Skylab missions the possibility for an unanticipated dental problem occurring in-flight which could significantly impair a crewman’s ability to work effectively was computed at 0.92 percent for a 3-man 28-day mission. This figure was based on studies of dental experiences in other isolated environments, i.e., polar expeditions, United States Navy FBM submarine patrols, and from a 3-year study of the astronaut population. (Brown, 1977) We found anecdotal report of a Russian cosmonaut experiencing severe dental pain for 14 days (Savage, 2002); (Montgomery, 1989).

The national trends of caries reported means of decayed teeth (untreated) in permanent teeth of dentate adults 20–64 years of age: 0.72 for the 35-49 cohort, with standard error 0.05; 0.65 for the 50-64 cohort standard error 0.005, (Dye, 2007) (Table 42).

Analog populations Chaffin (Chaffin, 2001) studied dental emergencies experienced by 2449 US soldiers in Bosnia, in 2000, deployed 201.95 days. The rate for Stabilization Force (SFOR) VII and SFOR VIII was 156 and 170 per 1000 person-year, 0.156 and 0.17 per person-year respectively. ICD-9 codes were not included; an emergency is any condition that prompts a soldier to leave their duty station. The true emergencies like extreme pain due to infection, irreversible pulpitis or trauma represented 25% of patients seem. These conditions would have required evacuation without on site dental care. Based on the 11.5% caries dental emergencies (n=55), we estimated an incidence of 0.0018 and 0.020 per person year for SFOR VII and VIII respectively.

Nice studied 396 US Ships and submarines and 54 ships of the Marine Sealift Command (MCS). A total of 752 medical communications and 743 EVACs were documented during a nine month period.. Dental events accounted for 7% of Medevacs. There is no report of the nature of dental medevacs.(Nice, 1987). Deutsch (Deutsch, 2008) determined that of 5187 total medical consultation, 3% were due to dental reasons. Of 109 initial visits for dental conditions, Caries accounted for 29 visits or 26.6% . The initial visit rate for caries was 1.3 per 100,000 person days at sea, or 0.005 person- years. Evacuations (EVACs) were reported as 7-9% . The nature of dental EVACs was not reported. Not all evacuations are due to emergencies. A toothache survey among submariners on a 101 day submergence designed to collect self-reported minor conditions that might not be recorded in the medical encounter database, estimated the numerator from the number of subjects who answered yes to a specific question and the denominator from the number of respondents to the survey. Nineteen (13.9%) reported toothache. Of those fourteen (11.5%) reported toothache over the preceding year for which they sought care. Three or 2.5% reported a toothache and did not seek care. Their dental conditions improved without intervention. While on patrol 1 (0.8%) on days 1-50, 1 (0.8%) on days 51-101reported toothache and did not seek care. An analysis of 10 years of data collected on Polaris submarines over the ten year period 1963-1973 reported 1 incident of caries from a total of 50 dental events (0.02) (Tansey, 1979)

A study to determine the dental caries risk in the active duty US Air Force (ADAF) population, from FY01 through FY04 reported that over the four-year study period, the percentages of people at high and moderate risk of developing caries declined steadily from 11.0 to 7.6 percent and from 19.7 to 17.3 percent, respectively, while the percentage of people at low risk of developing caries increased from 69.2 to 75.1 percent. Sample sizes ranged from 273,145 ADAF personnel in FY01 to 336,141 in FY04 Higher percentages of people at high risk of developing caries were found in groups with younger age, lower rank, less education, fewer years in military service, unmarried people, tobacco users and non-flyers. Distributions for the last four age groups, i.e. 30-34, 35-39, 40-44, and 45 or older were similar. (Eusepio, 2011) 11/15/2016 4:06:32 PM Dental Caries Cliff page: 4

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

|  | Clinical Phase I | Clinical Phase II | Clinical Phase III |  |
| ------------------- | ------------------- | --------------------- | ----------------------- | ------ |
|  | Diagnosis & Initial | On-going Treatment / | Recovered / Mission End |  |
|  | Treatment1 | Convalescence2 | State3 |  |
|  | FI* Duration | FI* Duration (hrs) | FI* EVAC** | LOCL** |
|  | (%) (hrs) | (%) (Min - ML - Max) | (%) (%) | (%) |
| ISS-based Treatment | 100 0.25 | 0 - 17 0.5 - 0.75 - 1 | 0 0 | 0 |

(best case scenario %: 26 - 100)

| ISS-based Treatment | 100 0.25 | 6 - 34 1 - 12.5 - 24 | 0 - 17 0 | 0 |
| ------------------- | -------- | -------------------- | -------- | --- |

(worst case scenario %: 0 - 74)

| Untreated Best Case | N/A N/A | 6 - 34 0.5 - 0.75 - 1 | 0 - 17 0 | 0 |
| ------------------- | ------- | --------------------- | -------- | --- |

Untreated Worst Case N/A N/A 22 - 55 1 - 12.5 - 24 6 - 55 0 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.)

| 11/15/2016 4:06:32 PM | Dental Caries Cliff |  |  | page: 5 |
| --------------------- | ------------------- | --- | --- | ------- |
### Scenario Comments

The best case scenario is asymptomatic or simple caries. Response to a hot or cold stimulus may result in mild non-lingering pain that resolves when stimuli are removed. The worst case scenario is defined as symptomatic or simple caries that requires oral analgesics.

Moderate or advance caries with reversible or irreversible pulpitis are addressed in the Dental: Exposed Pulp or Dental: Abscess Clinical Finding Forms., Percentages of how often best versus worst case scenarios occur are based on Deutsch’s survey (Deutsch, 2008), of 19 with a toothache 5 did not seek care, we can estimate that 26% (5/19) with minor symptoms may not require pain medication. To allow for uncertainty 0 to 26 % are considered best cases and 74- to 100% worst case. EVAC and LOCL are not expected to occur.

### Best Case Comments

Dental caries is a temporary condition and it is not listed in the AMA Guides for Permanent Impairment. Our functional impairments calculation follows the IMM mild non-space adaptation template and Guidelines to the Evaluation of Impairment of the Oral and Maxillofacial Region (American Association of Oral and Maxillofacial Surgeons, 2008). Mastication disorders ratings are based on Table 11-7, p.269 (American Medical Association, 2008). Glossopharyngeal Neuralgia Whole Person Impairment (WPI) is based on Table 13-19, p.343 (American Medical Association, 2008). Combined FI ratings are calculated combining both the Mastication and Glossopharyngeal Neuralgia (WPI) Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further description of gradings refer to the CliFF Appendix. By definition, functional impairment (FI) is 100% during Clinical Phase I. Duration is estimated to be 30 minutes, to follow the procedure indicated in the ISS Medical checklist for toothache (Hatcher, 2007). Clinical Phase II, FI is estimated in 0 to 17%. Duration is estimated in 30 to 60 minutes based in time to take oral medication and obtain relief. During Clinical Phase III, the pain resolves and FI is 0%. By definition, EVAC and LOCL are not expected in the best case scenario.

### Worst Case Comments

Dental caries is a temporary condition and it is not listed in the AMA Guides for Permanent Impairment. Our functional impairments calculation follows the IMM mild non-space adaptation template and Guidelines to the Evaluation of Impairment of the Oral and Maxillofacial Region (American Association of Oral and Maxillofacial Surgeons, 2008). Mastication disorders ratings are based on Table 11-7, p.269 (American Medical Association, 2008). Glossopharyngeal Neuralgia Whole Person Impairment (WPI) is based on Table 13-19, p.343 (American Medical Association, 2008). Combined FI ratings are calculated combining both the Mastication and Glossopharyngeal Neuralgia (WPI) Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further description of gradings refer to the CliFF Appendix. By definition, functional impairment (FI) is 100% during Clinical Phase I. Duration is estimated to be 15 minutes, to follow the procedures indicated in the ISS Medical checklist for toothache (Hatcher, 2007)During Clinical Phase II FI is estimated at 6 to 34%. Duration is estimated in 1 to 24 hours. During Clinical Phase III, the pain may not resolve or reoccurs thus FI is 0-17%. By definition, EVAC and LOCL are not expected.

### Untreated Best Case Comments

Dental caries is a temporary condition and it is not listed in the AMA Guides for Permanent Impairment. Our functional impairments calculation follows the IMM mild non-space adaptation template and Guidelines to the Evaluation of Impairment of the Oral and Maxillofacial Region (American Association of Oral and Maxillofacial Surgeons, 2008). Mastication disorders ratings are based on Table 11-7, p.269 (American Medical Association, 2008). Glossopharyngeal Neuralgia Whole Person Impairment (WPI) is based on Table 13-19, p.343 (American Medical Association, 2008). Combined FI ratings are calculated combining both the Mastication and Glossopharyngeal Neuralgia (WPI) Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further description of gradings refer to the CliFF Appendix. During Clinical Phase II, FI is estimated in 6 to 34%. Duration is estimated at 30 to 60 minutes similar to the treated best case. During Clinical Phase III, the pain may or may not resolve and FI is estimated at 0 to 17%. EVAC and LOCL are not expected. 11/15/2016 4:06:32 PM Dental Caries Cliff page: 6

### Untreated Worst Case Comments

Dental caries is a temporary condition and it is not listed in the AMA Guides for Permanent Impairment. Our functional impairments calculation follows the IMM mild non-space adaptation template and Guidelines to the Evaluation of Impairment of the Oral and Maxillofacial Region (American Association of Oral and Maxillofacial Surgeons, 2008). Mastication disorders ratings are based on Table 11-7, p.269 (American Medical Association, 2008). Glossopharyngeal Neuralgia Whole Person Impairment (WPI) is based on Table 13-19, p.343 (American Medical Association, 2008). Combined FI ratings are calculated combining both the Mastication and Glossopharyngeal Neuralgia (WPI) Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further description of gradings refer to the CliFF Appendix. During Clinical Phase II, FI is estimated at 22 to 55%. Duration is estimated from 1 to 24 hours, similar to the treated worst scenario. During Clinical Phase III, the pain may not resolve or progress to moderate or severe caries in long duration missions. FI is estimated at 6 to 55%.

Chaffin reported that 18.5% of dental emergencies required palliative treatment (Chaffin, 2001). There is no information on the type of emergency. Based on the low probability of symptomatic or simple caries requiring definitive care (Hodapp, 2008), EVAC is estimated at 0 to1% for this scenario. LOCL is not expected.

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| -------------------------------------------------------- | --------- | ------------ | --- |
| American Medical Association, 2008 | 3 | FI |  |
| American Medical Association, 2008 | 3 | FI |  |
| American Medical Association, 2008 | 3 | FI |  |
| American Association of Oral and Maxillofacial Surgeons, | 3 | FI |  |

2008

| Deutsch, 2008 | 2 | BCWC |  |
| --------------------- | ------------------- | ---- | ------- |
| Hodapp, 2008 | 5 | EVAC |  |
| Chaffin, 2001 | 2 | EVAC |  |
| 11/15/2016 4:06:32 PM | Dental Caries Cliff |  | page: 7 |
The Resource Table (RT) Units

|  | Units Units | Available |  |  |  |
| ------------------------- | ----------------- | ------------------ | ------------------- | --- | --- |
|  | Required Required | At Start |  |  |  |
|  | Best Worst | Of |  |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |  |
| Dental explorer/probe (E) | 1 1 | 1 No | Yes Tooth exam |  |  |
| Dental mirror (H) | 1 1 | 1 No | Yes For dental exam |  |  |

Gauze pads (4x4) 1 2 50 Yes No To absorb blood or fluids from skin or mouth Motrin (Ibuprofen) 400mg 0 4 500 Yes Yes Pain relief - first line Vicodin HP (Hydrocodone/ 0 4 30 Yes Yes Pain relief - second line Acetaminophen HP) 10 mg/660 mg

### Resource Comments

ISS medical checklist does not include caries as a condition. It addresses Toothache treatment. All resources included are addressed in the ISS medical checklist (International Space Station Integrated Medical Group, 2008).

We searched clinical guidelines for treatment of caries. The majority are for prevention and for treatment in children. Terrestrially many common clinical dental procedures do not have high-quality clinical guidelines available. The results of a literature search demonstrated a lack in both the number and quality of clinical dental guidelines that support common dental procedures. (Faggion, 2008)

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |  |
| ----------------------------------------------------- | --- | --------- | ------------ | --- | --- |
| International Space Station Integrated Medical Group, |  | 2 | Resources |  |  |

2008

### Level Of Evidence

| Input Data | LOE Average | Description |  | Range |  |
| ---------------------- | ----------- | ------------------- | --- | ----- | ------- |
| Incidence | 2 | Excellent |  | 1-2 |  |
| Functional Impairment | 3 | Good |  | 2.1-3 |  |
| Best Case / Worst Case | 2 | Fair |  | 3.1-4 |  |
| EVAC / LOCL | 3.5 | Poor |  | 4.1-5 |  |
| Resources | 2 |  |  |  |  |
| QUALITY OF EVIDENCE | 2.5 |  |  |  |  |
| 11/15/2016 4:06:32 PM |  | Dental Caries Cliff |  |  | page: 8 |
### Reference List

Reference American Association of Oral and Maxillofacial Surgeons. Guidelines to the Evaluation of Impairment Of The Oral and Maxillofacial Region.

AAOMS . 2008. AAOMS. 8-4-2010. American Medical Association. Guides to the Evaluation of Permanent Impairment. Rondinelli R, editor. 6th. 2008. Chicago, American Medical Association Press. American Medical Association. Digestive System. Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th[6], 101-127.

2008. Chicago, American Medical Association Press.

American Medical Association. Central and Peripheral Nervous System. Guides to the Evaluation of Permanent Impairment. 6th[13], 321-345.

2008. Chicago, American Medical Association Press.

Beltran-Aguilar ED, Barker LK, Canto MT, Dye BA, Gooch BF, Griffin SO, et al. Surveillance for dental caries, dental sealants, tooth retention, edentulism, and enamel fluorosis--United States, 1988-1994 and 1999-2002. MMWR Surveill Summ. 54[3], 1-43. 8-26-2005.

Brown LR, Frome WJ, Handler S, Wheatcroft MG, Rider LJ. Skylab Oral Health Studies. Johnston RS, Dietlein LF, editors. Biomedical results from Skylab. [6]. 1977. Washington D.C., Library of Congress Cataloging in Publication Data. 6-25-2010.

Byerly D, Arndt D, Sognier M, Stangel I, Dusl J, Ngo P, et al. Innovative Treatments for Dental Emergencies During Lunar and Exploration Missions. HHM7. 2-25-2010. Houston, NASA. Biennial Research Report. 6-18-2010.

Chaffin J, King JE, Fretwell LD. U.S. Army dental emergency rates in Bosnia. Mil.Med. 166[12], 1074-1078. 2001.

Deutsch WM. Dental events during periods of isolation in the U.S. submarine force. Mil.Med. 173[1 Suppl], 29-37. 2008.

Dye BA, Tan S, Smith V, Lewis BG, Barker LK, Thornton-Evans G, et al. Trends in oral health status: United States, 1988-1994 and 1999-

2004. Vital Health Stat.11 [248], 1-92. 2007.

Eusepio M. The U.S. Air Force's High Caries Risk Program. Dent.Assist. 80[1], 6-7. 2011.

Faggion CM, Jr. Clinician assessment of guidelines that support common dental procedures. J.Evid.Based.Dent.Pract. 8[1], 1-7. 2008.

Gilkey KM, McRae MP, Griffin EA, Kalluri AS, Myers JG. Bayesian Analysis For Risk Assessment of Selected Medical Events in Support of the Integrated Medical Model Effort. NASA/TP-2012-217120, 1-46. 2012. Cleveland, OH, National Aeronautics and Space Administration, Glenn Research Center. Hatcher JD. Dental Conditions. Saile L, editor. 11-5-2007.

Hawkins WR, Zieglschmid JF. Clinical Aspects of Crew Health. Johnston RS, Dietlein LF, Berry CA, editors. Biomedical Results of Apollo. NASA SP-368[1], 46-84. 1975. Washington D.C., NASA.

Hodapp MH. Dental Concerns. Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight. [26], 545-557. 2008. New York, Springer. International Space Station Integrated Medical Group. Medical Checklist ISS- All Expeditions. 5-21-2008. Houston, National Aeronautics and Space Administration. International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2[A]. 2011. NASA.

Montgomery P. Cosmonaut reveals ordeal of toothache in space. Journal of the Greater Houston Dental Society 61[5], 7. 1989. Houston, Houston Dental Society. Murray J. Request to LSAH for Incidences of Dental Caries, Abscesses and Periodontal Disease. Lifetime Surveillance of Astronaut Health (LSAH). E-mail correspondence. 8-4-2010.

Nice DS. U.S. Navy medical communications and evacuations at sea. Mil.Med. 152[9], 446-451. 1987.

Rethman J. Trends in preventive care: caries risk assessment and indications for sealants. J.Am.Dent.Assoc. 131 Suppl, 8S-12S. 2000.

Savage DK. A brief history of aerospace dentistry. J.Hist Dent. 50[2], 71-75. 2002.

Tansey WA, Wilson JM, Schaefer KE. Analysis of health data from 10 years of Polaris submarine patrols. Undersea Biomed.Res. 6 Suppl, S217-S246. 1979. 11/15/2016 4:06:32 PM Dental Caries Cliff page: 9

Reference Todar K. Todar's Online Textbook of Bacteriology . http://www.textbookofbacteriology.net/index.html . 2008. Madison, Wisconsin, University of Wisconsin, Department of Bacteriology . 6-6-2011.

| 11/15/2016 4:06:32 PM | Dental Caries Cliff | page: 10 |
| --------------------- | ------------------- | -------- |

---

## Source metadata

```yaml
source_filename: "dental-caries-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Dental Injury/CliFF 100"
source_url: "https://drive.google.com/file/d/186q8hCtoRxNo_m7QPYrPhNFZd29d-8KM/view"
source_drive_id: "186q8hCtoRxNo_m7QPYrPhNFZd29d-8KM"
source_sha256: 49e924ff9f0d2048e0d21a2758bfd8ec85aa9ea8baa27a60f3dafe953ea11470
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 10
ocr_performed: false
```
