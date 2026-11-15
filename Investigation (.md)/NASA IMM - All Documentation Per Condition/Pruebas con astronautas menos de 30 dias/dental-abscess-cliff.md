# Dental Abscess CLiFF

[View original PDF](https://drive.google.com/file/d/1z0D_kY5aRJgt-avo1TPQPeFxJJKN0WPC/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Pruebas con astronautas menos de 30 dias

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

### Dental Abscess Cliff

## Branch Baseline

Usually, the acute dental abscess arises secondary to dental caries, trauma, or failed root treatment.After the intact pulp chamber is breached, colonization of theroot canals occurs with a diverse mix of anaerobic bacteria. (Robertson, 2009) Whileasymptomatic necrosis is common, abscess formation occurs whenthese bacteria and their toxic products enter the periapicaltissues via the apical foramen and induce acute inflammationand pus formation. (Nair, 2004) The main signs and symptoms of the acute dental abscess (often referred to as a periapical abscess or infection) are pain, swelling, erythema and suppuration usually localized to the affected tooth. The abscess can frequently spread causing a spreading odontogenic infection which can be accompanied by sepsis syndrome. (Robertson, 2009)

Terrestrially, the vast majority of dental abscesses respond to surgical treatment, such as drainage of pus and elimination of the source of infection, with antibiotic use limited to severe spreading infections.

A dental emergency has not occurred among US astronauts in flight. (Walton, 2010)

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

| Mean: | 0.00816 |  |
| --------------------- | -------------------- | ------- |
| Standard Deviation: | 0.0018 |  |
| 12/20/2016 4:12:52 PM | Dental Abscess Cliff | page: 1 |
## Incidence Comments

A dental emergency has not occurred among US astronauts in flight. IMM requested a Bayesian Analysis based on terrestrial analog population and the astronaut corps on ground from NASA Glenn Research Center. Results of this analysis (Gilkey, 2012) are included in the model data for incidence. Evaluating the probability that an astronaut may encounter a dental abscess during an exploration mission is necessary because this condition may greatly affect crewmember performance, health, and morale. An abscess results from the infection of pulp material in the tooth caused by complications such as decayed, cracked, or broken teeth. An estimate of the probability of an astronaut encountering dental abscess was evaluated using military analog data from the U.S. Submarine Force (Deutsch, 2008)as well as astronaut data from LSAH (Murray, 2010). For the military population data analysis, periapical abscesses were defined as ICD-9-CM code 522 (pulp and periapical). The astronaut data from LSAH defined dental abscess as "abscess diagnosis", with no reference to ICD-9 coding. Information from these sources was combined using a Bayesian update approach to estimate the average rate of abscess. By making the average rate assumption, a Poisson probability distribution was assumed to govern the probability of abscess.

Military analog data were used because of the physiological similarities to astronauts. Deutsch et al. (Deutsch, 2008) studied the incidence of various dental emergencies among U.S. Submarine Force personnel, from 1997 to 2000. Medical history of submarine missions was useful for this statistical analysis because of their similarities to exploration-class missions. Both occur in confined, remotely located environments where professional medical care is not immediately available. Also, a medical event of low probability and high consequence could cause a mission to cease. Smoking was significantly associated with the occurrence of a periodontal-related emergency and also with the occurrence of any dental emergency. There are a greater percentage of smokers among submariners than the astronaut corps. This study is also limited in that it applies only to adult men, 88.5 percent Caucasian, and 70.5 percent were 25 years old or older. There were 21 dentist visits due to abscess over 5946.9 person-years yielding an incidence rate of 0.0035 events per person-year.

Data were obtained regarding the incidence of dental abscess among the astronaut corps from LSAH. Data for the mission-ready, active female astronaut population were not used for this analysis, as the analog military data used in the Bayesian Update were for males in the U.S.

Submarine Force. It is worth noting that the average age for mission-ready male astronauts is 45 years of age, which is older than the age of the average submarine crew member. To improve the estimate of the rate of occurrence in the astronaut corps and provide a first order approximation suitable for use in the GRC-IMM modeling effort, the following approach was taken using the numerical Bayesian update code WinBUGS. One Bayesian update was performed using U.S. Submarine Force data for the analog population and data for mission-ready, active male astronauts. The submarine personnel data was used to form an informed lognormal conjugate prior for the incidence rate of dental abscess among U.S. Submarine Force personnel as well as data on pre-flight incidences among male astronauts, yielding a posterior for the updated incidence rate of abscess. In Step 3, the posterior of Step 1 was used as the prior and updated using LSAH in-flight data in WinBUGS. The result is the estimate for the incidence rate of abscess among astronauts during an exploration mission. The mean incidence rate of dental abscess was 0.00816 events per person-year.

There are limitations with the data available. It is worth noting that the standard deviation (0.0018) for the rate of dental abscess among the mission-ready, active male astronaut corps is not much less than the mean. In both the military and astronaut data, there may be cases of under-reporting. Astronaut health is typically tracked through annual physicals, where questions related to dental health may or may not have been asked. Among the military and astronaut data, there are demographic differences including rates of smoking, age differences and racial differences. The age difference is important to note, as preventive practices are continually improving. These differences between population demographics and access to fluorinated water may lead to discrepancies in incidence rates. Also, due to the absence of women serving as submarine crewmembers, the female astronaut data was not used in this Bayesian calculation. Future models may want to include these data for women. Of note, ICD-9(CM) code 522 includes all diseases of pulp and periapical tissues. Conditions are not stratified by sub-codes in Deutsch’s study.

For clarity, we added the sub-codes. Codes in bold are related to dental abscess: 522.0 pulpal: abscess polyp, pulpitis: acute, chronic (hyper plastic) (ulcerative), suppurative. 522.1 Necrosis of the pulp, Pulp gangrene. 522.2 Pulp degeneration: denticles, pulp calcifications, pulp stones. 522.3 Abnormal hard tissue formation in pulp: Secondary or irregular dentin. 522.4 Acute apical periodontitis of pulpal origin. 522.5 Periapical abscess without sinus; Abscess: dental, dentoalveolar. 522.6 Chronic apical periodontitis: Apical or periapical granuloma, Apical periodontitis NOS. 522.7 Periapical abscess with sinus, Fistula: alveolar process, dental. 522.8 Radicular cyst, Pulp gangrene. (Centers for Disease Control and Prevention (CDC), 2008). Code 528.2 is for oral aphtae, a frequent cause for dental visits, which Deutsch excluded because it is not a dental emergency. 12/20/2016 4:12:52 PM Dental Abscess Cliff page: 2

### Information Regarding Prevention

Disqualifying dental conditions include: Any dental defects that interfere with clear speech or cause changes in the contours of the face which interfere with the performance of duties; complete edentulism or insufficient number of natural healthy teeth to masticate a normal diet or enunciate clearly; dental prostheses (any removable dental prosthesis, which if lost or broken, would not leave enough natural healthy teeth to masticate a normal diet or enunciate clearly; any unilateral removable dental prosthesis that could be swallowed); diseases and abnormalities of the jaws or associated structures, including periodontal disease, that are not easily remedied or may interfere with the performance of duties; severe malocclusion that interferes with the mastication of a normal diet or clear enunciation; any dental defects such as dental caries, dental dysplasia, enamel dysplasia, symptomatic cracked teeth, defective restorations, defective prosthesis, and defective implants until resolved; partially erupted or impacted third molar teeth with the potential to cause erosion of adjacent teeth, pericoronitis, or periodontal defect until resolved; infections of endodontic or periodontic origin until resolved. Active orthodontic treatment requires dental consultation. Active orthodontic treatment is disqualifying for space flight duties (International Space Station Program, 2009).

- Prevention: At 6 months before launch crewmembers undergo a complete denatal examination. If treatment is deemed necessary, all such

treatment is completed 3 months before launch. All astronauts are expected to maintain optimal physical and oral health and to follow oral hygiene practices (Hodapp, 2008).

- Treatment(s): Irreversible pulpitis causes intermittent or continuous paroxysms of pain ranging from moderate to severe. Treatment is local

anesthesia, which may be repeated. It may progress to necrosis, where the condition is guarded. Antibiotics do not eliminate bacteria in the infected tooth (Hodapp, 2008) For a crew member with necrotic pulp or apical abscess antibiotic is the initial course of treatment. If the crew is expected to return in less than a month, root canal therapy should be done upon return. If the mission is to last a month or longer, it might be best to extract the tooth pre-flight.

Tooth extraction in space flight should be considered only as a last resort. (Hodapp, 2008)

Other: Root canal treatment for spontaneously occurring tooth pain requires considerable skill and the transportation of bulky equipment. The treatment includes drilling to access the canal deep in the tooth, locating canal orifices in the presence of internal tooth bleeding, using fine instruments to remove all of the cell contents, and shaping and filling the canal. Considerable skill is essential to achieve this. Local anesthetic is also needed, which entails another set of complex skills.

BioMat Sciences developed a lightweight, miniaturized microwave system to enable emergency dental treatments by a non dental expert (e.g., an astronaut). The system is customized for tooth repair and reconstruction, including treatment of diseased pulpal tissue (root canal) without drilling (Byerly, 2010). At this point, this equipment is not available on board and it is not included in the ISS checklist procedures.

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Gilkey, 2012 2 Incidence 12/20/2016 4:12:52 PM Dental Abscess Cliff page: 3

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

| Fixed Rate: | 0.023 |  |
| ----------- | ----- | --- |

## Incidence Comments

A study in the United Kingdom armed forces (Richardson, 2005), reported that 1800 patients were seen between Feb 1 and May 1 2003. Some of the extractions for which the reason was not given were almost certainly attributable to pulpitis. Pulpitis was the most commonly reported problem to have a serious operational impact, 56/426, or 13.1%.

Morbidity rate established for reservist was 0.148 (148 per 1000) person-year. Army rate was 0.16 (160 cases per 1000) person-year.

Annualized emergency endodontic diagnosis rates per 1000 personnel are: British Army, operation Telic-1, 9 (0.009); Royal Navy and Royal Marines, Operation Telic-1, 12 (0.012); US Marines, Operation Desert Storm, 23 (0.023). Considering differences in categorization many of the cases classed as acute pulpitis were treated endodontically. Then the rate would rise to 24 cases per 1000 personnel (0.024). A large portion of reservists were specialist troops, recognized as having a high dental awareness than reserve infantry

| 12/20/2016 4:12:52 PM | Dental Abscess Cliff | page: 4 |
| --------------------- | -------------------- | ------- |
### Alternative Incidence Data

In Skylab missions the possibility for an unanticipated dental problem occurring in-flight which could significantly impair a crewman’s ability to work effectively was computed at 0.92 percent for a 3-man 28-day mission. This figure was based on studies of dental experiences in other isolated environments, i.e., polar expeditions, United States Navy FBM submarine patrols, and from a 3-year study of the astronaut population.

The most likely problems which could impair a crewman’s effectiveness in-flight were judged to be either a painful tooth due to pulpitis or severe, localized gingival inflammation with or without a periodontal abscess. The pulpitis would be most likely to occur in a tooth which had previously been restored with a deep restoration which suddenly had become symptomatic. This is a common ground-based dental problem and the resulting potentially debilitating pain could occur for a number of reasons, including decreased resistance of the host and/or increased virulence of the organisms involved. No dental problems occurred during the Skylab series of missions which required use of the In-flight Medical Support System-Dental. Some changes in oral health were noted but most significant was the relative nonexistence of health hazardous intra-oral changes (Brown, 1977). The experience with Apollo astronauts in an intensive preventive program leads to the conclusion that the probability of a dental emergency in the Apollo population is one occurrence in 9000 man-days (24.66 person-years). The probability of dental problems of lesser severity, but associated with significant discomfort, is one in 1500 man-days (4.11 person-years). These figures are comparable to those recorded for Navy personnel on long submarine patrols. From these estimations, it is obvious that a provision for emergency in-flight dental care must be made only for very long-duration missions (Hawkins, 1975).

We found anecdotal report of a Russian cosmonaut experiencing severe dental pain for 14 days (Savage, 2002) ( Montgomery, 1989)

A study in US submarines population reported 78 events among enlisted crew men; incidence rate 1.5 per 100 person-years; 54 event in the <30 years cohort; rate 1.6 per 100 person-years; 24 events in the 30+ years cohort; rate 1.2 per 100 person-years. Among officers, total events were 5; rate 0.8 per 100 person-years; <30 years had 1 event, rate 0.3 per 100 person-years; 30+ years had 4 events, rate 1.4 per 100 person- years. Submarine and spacecraft environments share certain characteristics, including conditions of isolation, and a closed environment with an artificial atmosphere. Thus, some medical conditions may be relevant to both submariners and the astronaut population. The number of subjects in the study was large (n =13,441), as was the number of person-days at risk accumulated during the study period (over 2 million). The present study is the first to evaluate morbidity rates among deployed U.S. Navy submarine officers. In summary, potentially mission-impacting medical events reported among officers aboard submarine patrols were rare (36.3 per 100 person-years underway; i.e., among a crew of seven individuals, one medical event would be expected to occur during a 6-mo mission). The officers are most analogous to current space program participants (Thomas, 2003). The study grouped all dental ICD-9 codes (520 to 528) thus we cannot segregate for endodontic related codes (522). 12/20/2016 4:12:52 PM Dental Abscess Cliff page: 5

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.5 6 - 41 24 - 48 - 72 0 0 0 (best case scenario %: 58 - 100) ISS-based Treatment 100 0.5 - 1 26 - 65 24 - 96 - 168 0 - 65 0 - 100 0 (worst case scenario %: 0 - 42) Untreated Best Case N/A N/A 26 - 65 2 - 13 - 24 26 - 65 0 - 100 0 Untreated Worst Case N/A N/A 58 - 80 24 - 96 - 168 58 - 80 100 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.)

### Scenario Comments

The best case scenario is an abscess that responds to treatment with pain medication and antibiotics.

The worst case scenario is defined as an abscess that does not respond to oral treatment or topical anesthetic and requires extraction. The development of sepsis secondary to necrosis is addressed in the Sepsis CliFF.

- Percentages of how often best versus worst case scenarios occur: based in Boykin study (Boykin, 2003), 13 to 42% patients with an

endodontic diagnosis, required extraction initially or during follow up. Since the astronaut population is healthier and receives better preventive dental care than the general population, and to account for uncertainty, the worst case percentage is estimated as 0-42% and the best case percentage is estimated as 58-100%. 12/20/2016 4:12:52 PM Dental Abscess Cliff page: 6

### Best Case Comments

Dental abscess is a temporary condition and it is not listed in the AMA Guides for Permanent Impairment. Our functional impairments calculation follows the IMM severe non-space adaptation template and Guidelines to the Evaluation of Impairment of the Oral and Maxillofacial Region (American Association of Oral and Maxillofacial Surgeons, 2008) Even with treatment, with acute apical periodontitis and acute apical abscess quick pain relief is not likely (HealthPartners Dental Group, 2009); therefore the functional impairments (FI) calculation deviates from the IMM standard template for the untreated best scenario. Mastication disorders ratings are based on Table 11-7, p.269 (American Medical Association, 2008). Of note, mastication impairments are indicated in percentages, with no class. Complex Regional Pain (UEI) is based on Table 15-26, p.454. The CRPS (UEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 15-1, p 385 (American Medical Association, 2008). Combined FI ratings are calculated combining the Mastication FI and Whole Body Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008).

See this CliFF Appendix for further description of FI grading and calculation.

By definition, Functional Impairment (FI) is 100% during Clinical Phase I. Duration is estimated to be 30 minutes, to follow the procedure indicated in the ISS Medical checklist for dental infection. During Clinical Phase II, FI is estimated at 26 to 65%, Duration is estimated at 30 to 90 minutes, based in the time to take oral medications or apply anesthetics. During Clinical Phase III, by definition symptoms resolve and FI is 0% (American Medical Association, 2008). By definition, EVAC and LOCL are not expected in the best case scenario.

### Worst Case Comments

Dental abscess is a temporary condition and it is not listed in the AMA Guides for Permanent Impairment. Our functional impairments calculation follows the IMM severe non-space adaptation template and Guidelines to the Evaluation of Impairment of the Oral and Maxillofacial Region (American Association of Oral and Maxillofacial Surgeons, 2008) Even with treatment, with acute apical periodontitis and acute apical abscess quick pain relief is not likely ( (HealthPartners Dental Group, 2009); therefore the functional impairments (FI) calculation deviates from the IMM standard template for the untreated best scenario. Mastication disorders ratings are based on Table 11-7, p.269 (American Medical Association, 2008). Of note, mastication impairments are indicated in percentages, with no class. Complex Regional Pain (UEI) is based on Table 15-26, p.454. The CRPS (UEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 15-1, p 385 (American Medical Association, 2008). Combined FI ratings are calculated combining the Mastication FI and Whole Body Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). See this CliFF Appendix for further description of FI grading and calculation.

By definition, Functional Impairment (FI) is 100% during Clinical Phase I. Duration is estimated to be 30 to 60 minutes, to follow the procedures indicated in the ISS Medical checklist for extraction. During Clinical Phase II, FI is estimated in 26 to 65%. Duration is estimated in 90 minutes to seven days, based on length of antibiotic therapy. During Clinical Phase III, the pain may resolve, not resolve or reoccurs. Post-extraction recovery is also considered. FI is 0 to 65%, Class 0-3. EVAC has occurred for endodontic diagnoses in analog submarines’ population at a rate of 6.9-9.3% (Deutsch, 2008). Richardson estimated that 25% of troops may have to evacuate without on-site care (Richardson, 2005). ISS Medical checklist includes the possibility of an infection requiring more definitive care. (International Space Station Integrated Medical Group,

2008) To allow for uncertainty, our estimated EVAC is 0 to 100%. LOCL is not expected.

### Untreated Best Case Comments

Dental abscess is a temporary condition and it is not listed in the AMA Guides for Permanent Impairment. Our functional impairments calculation follows the IMM severe non-space adaptation template and Guidelines to the Evaluation of Impairment of the Oral and Maxillofacial Region (American Association of Oral and Maxillofacial Surgeons, 2008) Even with treatment, with acute apical periodontitis and acute apical abscess quick pain relief is not likely (HealthPartners Dental Group, 2009); therefore the functional impairments (FI) calculation deviates from the IMM standard template for the best untreated scenario. Mastication disorders ratings are based on Table 11-7, p.269 (American Medical Association, 2008). Of note, mastication impairments are indicated in percentages, with no class. Complex Regional Pain (UEI) is based on Table 15-26, p.454. The CRPS (UEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 15-1, p 385 (American Medical Association, 2008). Combined FI ratings are calculated combining the Mastication FI and Whole Body Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). See this CliFF Appendix for further description of FI grading and calculation.

During Clinical Phase II, FI is estimated in 26 to 65%, similar to the worst case scenario. Class 2 to 3 (American Medical Association, 2008).

Duration is estimated in 30 to 90 minutes, similar to the treated scenario. During Clinical Phase III, the pain is unlikely to resolve or may reoccur intermittently without treatment. FI remains 26-65% (American Medical Association, 2008) EVAC has occurred for endodontic diagnoses in the analog submarine population at a rate of 6.9-9.3% (Deutsch, 2008). Richardson estimated that 25% of troops may have to evacuate without on-site care (Richardson, 2005). ISS Medical checklist includes the possibility of an infection requiring more definitive care (International Space Station Integrated Medical Group, 2008). To allow for uncertainty, our estimated EVAC is 0 to 100%. LOCL is not expected. 12/20/2016 4:12:52 PM Dental Abscess Cliff page: 7

### Untreated Worst Case Comments

Dental abscess is a temporary condition and it is not listed in the AMA Guides for Permanent Impairment. Our functional impairments calculation follows the IMM severe non-space adaptation template and Guidelines to the Evaluation of Impairment of the Oral and Maxillofacial Region (American Association of Oral and Maxillofacial Surgeons, 2008) Even with treatment, with acute apical periodontitis and acute apical abscess quick pain relief is not likely ( (HealthPartners Dental Group, 2009); therefore the functional impairments (FI) calculation deviates from the IMM standard template for the best untreated scenario. Mastication disorders ratings are based on Table 11-7, p.269 (American Medical Association, 2008). Of note, mastication impairments are indicated in percentages, with no class. Complex Regional Pain (UEI) is based on Table 15-26, p.454. The CRPS (UEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 15-1, p 385 (American Medical Association, 2008). Combined FI ratings are calculated combining the Mastication FI and Whole Body Impairment using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). See this CliFF Appendix for further description of FI grading and calculation.

During Clinical Phase II, FI is estimated in 58 to 80%. Duration is estimated from 1 and a half hours to 7 days, similar to the treated scenario.

During Clinical Phase III, FI remains 58-80% (American Medical Association, 2008). Subsiding pain may be a sign of progression to necrosis.

Similar to the treated scenario, EVAC has occurred in the analog submarine population for endodontic diagnoses (Deutsch, 2008), would have occurred for army troops without local care (Richardson, 2005) and is a consideration in ISS Medical Checklist (International Space Station Integrated Medical Group, 2008). Without treatment, our EVAC estimate is 100%. LOCL is not expected.

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ----------------------------------------------------- | --------- | ------------ | --- |
| Boykin, 2003 | 4 | BCWC |  |
| American Medical Association, 2008 | 3 | FI |  |
| Deutsch, 2008 | 2 | EVAC |  |
| Richardson, 2005 | 2 | EVAC |  |
| International Space Station Integrated Medical Group, | 2 | EVAC |  |

2008

| 12/20/2016 4:12:52 PM | Dental Abscess Cliff |  | page: 8 |
| --------------------- | -------------------- | --- | ------- |
### Additional Comments

There is a dearth of studies in dental epidemiology which was also noted by other authors (Eriksen, 1991) (Bader, 2001).

NASA remains concerned regarding any risk of dental emergencies in space. In 2009, Risin (Risin, 2009) reported two dental emergencies that have occurred in space (Newkirk, 1990; Brown et al., 1977) which we were not able to verify.

Extractions and fillings have also been required in Antarctica ( (Beynon, 1969) (Lisney, 1976). Annual incidence was not calculated. 12/20/2016 4:12:52 PM Dental Abscess Cliff page: 9

The Resource Table (RT) Units

|  | Units Units | Available |  |  |
| -------- | ----------------- | ------------------ | ------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |

Cleocin (Clindamycin) 300mg 21 21 60 Yes Yes Treatment of infection

| CMRS | 0 1 | 1 No | No Restrain crew member to ensure safety |  |
| ---- | --- | ---- | ---------------------------------------- | --- |

Cotton pellet 1 3 6 Yes No To apply topical anesthetic (pain reliever)

Dental elevator - 301 (I) 0 1 1 No Yes To assist in rotate tooth for extraction - initial Dental elevator - 34S (J) 0 1 1 No Yes To assist in rotate tooth for extraction - secondary Dental eugenol anesthetic 1mL 1 2 2 Yes Yes Pain relief - dental oral syringe Dental forceps-10S (A) 0 1 1 No Yes To extract tooth - for upper molars Dental forceps-151A (B) 0 1 1 No Yes To extract tooth - for incisors, cuspids, bicuspids Dental forceps-17 (C) 0 1 1 No Yes To extract tooth - for lower molars

| Dental mirror (H) | 1 1 | 1 No | Yes To examine teeth |  |
| ----------------- | --- | ---- | -------------------- | --- |

Gauze pads (4x4) 3 6 50 Yes No To absorb blood or fluids from skin Lidocaine (Xylocaine) plain 1%, 0 0.5 3 Yes Yes For injectable anesthesia 10mL multi dose vial Motrin (Ibuprofen) 400mg 6 14 500 Yes Yes Treatment for inflammation

| Needle [25g] | 0 1 | 4 Yes | Yes For injectable anesthesia |  |
| ------------ | --- | ----- | ----------------------------- | --- |

Sharps container 1 1 40 No No To dispose of medical waste such as used medical needles, scalpels, IV catheters, razors, vials

| Syringe (3cc) | 0 1 | 20 Yes | Yes For injectable anesthesia |  |
| ------------------------ | ---- | ------ | ----------------------------- | --- |
| Vicodin HP (Hydrocodone/ | 6 28 | 30 Yes | Yes Pain relief |  |

Acetaminophen HP) 10 mg/660 mg

| 12/20/2016 4:12:52 PM |  | Dental Abscess Cliff |  | page: 10 |
| --------------------- | --- | -------------------- | --- | -------- |
### Resource Comments

The table was created in the database on 1/17/2011.

Notes: The list has been completed based in ISS Medical Checklist procedures for toothache (dental abscess/infection) and tooth extraction. All resources are available on board. Tooth Extraction is a last resort and is reserved only for those cases where pain is excessive or an infective process has set in and the amount of time remaining for the mission is greater than the time to safely control infection with antibiotics. A course of antibiotics will not cure a tooth infection. More definitive care is necessary. Extraction should only be done when all other treatment options have been exhausted and on consultation with the Flight Surgeon. (International Space Station Integrated Medical Group, 2008)

The toothache kit (Redcross) comprises 3 cartridges of Eugenol, 1 pair of tweezers, and 6 cotton pellets.

Half (0.5) carpule of Xylocaine is used for upper teeth and 1 for lower teeth. Forceps in the dental kit are for a specific type of tooth. Use of needles varies by tooth location. See rationale for use.

At this time the model will include three forceps sizes and two needle sizes. This may change in future versions.

Dental treatment outlined in Principles of Clinical Medicine for Space-flight (Hodapp, 2008) is very similar to the described ISS procedures.

Comparison of the Med Checklist and current treatment process: The Med Checklist (International Space Station Integrated Medical Group, 2006)goal in the management of pain and infection while terrestrial guidelines focus on abscess drainage, pulpotomy, and root canal treatment (HealthPartners Dental Group, 2009)

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |  |
| ----------------------------------------------------- | --- | --------- | ------------ | --- | --- |
| International Space Station Integrated Medical Group, |  | 2 | Resources |  |  |

2008

| HealthPartners Dental Group, 2009 |  | 3 | Resources |  |  |
| --------------------------------- | --- | --- | --------- | --- | --- |

### Level Of Evidence

| Input Data | LOE Average | Description |  | Range |  |
| ---------------------- | ----------- | -------------------- | --- | ----- | -------- |
| Incidence | 2 | Excellent |  | 1-2 |  |
| Functional Impairment | 3 | Good |  | 2.1-3 |  |
| Best Case / Worst Case | 4 | Fair |  | 3.1-4 |  |
| EVAC / LOCL | 2 | Poor |  | 4.1-5 |  |
| Resources | 2.5 |  |  |  |  |
| QUALITY OF EVIDENCE | 2.7 |  |  |  |  |
| 12/20/2016 4:12:52 PM |  | Dental Abscess Cliff |  |  | page: 11 |
### Reference List

Reference American Association of Oral and Maxillofacial Surgeons. Guidelines to the Evaluation of Impairment Of The Oral and Maxillofacial Region.

AAOMS 2008 [cited 2010 Aug 4];Available from: URL: http://www.aaoms.org American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. American Medical Association. Digestive System. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 101-27.

American Medical Association. Upper Extremities. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 383-492.

Bader JD, Martin JA, Shugars DA. Incidence rates for complete cusp fracture. Community Dent Oral Epidemiol 2001 Oct;29(5):346-53.

Beynon AD. Some observations on dental caries in a polar environment. Dent Pract Dent Rec 1969 Jul;19(11):375-8.

Boykin MJ, Gilbert GH, Tilashalski KR, Shelton BJ. Incidence of endodontic treatment: a 48-month prospective study. J Endod 2003 Dec;29(12):806-9. Brown LR, Frome WJ, Handler S, Wheatcroft MG, Rider LJ. Skylab Oral Health Studies. In: Johnston RS, Dietlein LF, editors. Biomedical results from Skylab.Washington D.C.: Library of Congress Cataloging in Publication Data; 1977.

Byerly D, Arndt D, Sognier M, Stangel I, Dusl J, Ngo P, et al. Innovative Treatments for Dental Emergencies During Lunar and Exploration Missions. Houston: NASA; 2010 Feb 25. Report No.: HHM7.

Centers for Disease Control and Prevention (CDC), National Center for Health Statistics (NCHS). The International Classification of Diseases, 9th Revision, Clinical Modification" (ICD-9-CM). ICD9.chrisendres.com [6th]. 2008. Atlanta, CDC/NCHS. 1-14-2011.

Deutsch WM. Dental events during periods of isolation in the U.S. submarine force. Mil Med 2008 Jan;173(1 Suppl):29-37.

Eriksen HM. Endodontology--epidemiologic considerations. Endod Dent Traumatol 1991 Oct;7(5):189-95.

Gilkey KM, McRae MP, Griffin EA, Kalluri AS, Myers JG. Bayesian Analysis For Risk Assessment of Selected Medical Events in Support of the Integrated Medical Model Effort. Technical Paper. Cleveland, OH: National Aeronautics and Space Administration, Glenn Research Center;

2012. Report No.: NASA/TP-2012-217120.

Hawkins WR, Zieglschmid JF. Clinical Aspects of Crew Health. In: Johnston RS, Dietlein LF, Berry CA, editors. Biomedical Results of Apollo.

NASA SP-368 ed. Washington D.C.: NASA; 1975. p. 46-84.

HealthPartners Dental Group. HealthPartners Dental Group guideline for diagnosing and treating endodontic emergencies. National Guideline Clearinghouse 2009 September 1 [cited 2010 Jun 28];Available from: URL: http://www.guidelines.gov Hodapp MH. Dental Concerns. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 545- 57. International Space Station Integrated Medical Group. Medical Checklist ISS- All Expeditions. Houston: National Aeronautics and Space Administration; 2008. International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

Lisney SJ. Dental problems in Antarctica. Br Dent J 1976 Aug 3;141(3):91-2.

Lopez V. In-flight medical events revised_Functional Impairment. 2010. Houston, Texas, NASA, Johnson Space Center.

Montgomery P. Cosmonaut reveals ordeal of toothache in space. Journal of the Greater Houston Dental Society 1989;61(5):7.

Murray J. Request to LSAH for Incidences of Dental Caries, Abscesses and Periodontal Disease. Lifetime Surveillance of Astronaut Health (LSAH). E-mail correspondence. 8-4-2010.

Nair PN. Pathogenesis of apical periodontitis and the causes of endodontic failures. Crit Rev Oral Biol Med 2004;15(6):348-81.

Richardson PS. Dental morbidity in United Kingdom Armed Forces, Iraq 2003. Mil Med 2005 Jun;170(6):536-41.

Risin D. Risk of Inability to Adequately Treat an Ill or Injured Crew Member. In: McPhee JC, Charles JB, editors. Human Health and Performance , Risks of Space Exploration Missions.Houston: National Aeronautics and Space Administration; 2009. p. 239-49. 12/20/2016 4:12:52 PM Dental Abscess Cliff page: 12

Reference Robertson D, Smith AJ. The microbiology of the acute dental abscess. J Med Microbiol 2009 Feb;58(Pt 2):155-62.

Savage DK. A brief history of aerospace dentistry. J Hist Dent 2002 Jul;50(2):71-5.

Thomas TL, Garland FC, Mole D, Cohen BA, Gudewicz TM, Spiro RT, et al. Health of U.S. Navy submarine crew during periods of isolation.

Aviat Space Environ Med 2003 Mar;74(3):260-5. 12/20/2016 4:12:52 PM Dental Abscess Cliff page: 13

---

## Source metadata

```yaml
source_filename: "dental-abscess-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Pruebas con astronautas menos de 30 dias"
source_url: "https://drive.google.com/file/d/1z0D_kY5aRJgt-avo1TPQPeFxJJKN0WPC/view"
source_drive_id: "1z0D_kY5aRJgt-avo1TPQPeFxJJKN0WPC"
source_sha256: ef42ae8f4b53e2febe4591ecb288e555464a2d1296b518ae8ce6bcd411f0e768
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
