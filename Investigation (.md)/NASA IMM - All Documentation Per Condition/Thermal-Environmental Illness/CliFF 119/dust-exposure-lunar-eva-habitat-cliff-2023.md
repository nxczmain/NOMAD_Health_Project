# Dust Exposure Lunar EVA Habitat CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1OiJEPL-jz1-gSKYBHMBTDXkxevHra3ND/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 119

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

ICL36B_Dust Exposure - Lunar (EVA Habitat)

Lunar dusts are generally defined as particles from the moon that are less then 20 um in size (Liu and Taylor, 2011). During exploratory activity on the moon surface, generated airborne lunar dust will adhere to the astronaut's suit. While removing their suits in the spacecraft, dusts will be released into the atmosphere, making astronauts susceptible to lunar dust exposure. Exposure to lunar dust can potentially result in health hazards. Being highly abrasive, lunar dusts can cause dermatitis and eye injury with skin and eye exposure. Lunar dust contains very small particles (<10um) that can cause respiratory disease if inhaled. In mild cases, allergic reactions such as sneezing and sore throat may occur (Cain, 2010). Consisting of over 50% of chemically reactive silica oxide, chronic inhalation of these dusts can result in progressive silicosis-like respiratory disease. Measures such as the use of "double shell spacesuits", extracting airborne dust particles in the airlock, and "suit ports" can help diminish impact of dust from spacesuits in terms of astronaut direct exposure to these potentially hazardous dusts (Kennedy and Harris, 1992).

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

During the Apollo missions, lunar dusts posed serious problems to the health of exposed astronauts. Several reports from astronauts during missions mentioned how particles present in the cabin atmosphere after moonwalks affected their vision and made breathing difficult (Bean, 1970; Portree and Trevino, 1997). However, no reliable incidence data were found in current literature. For the lunar missions, space crew members are at risk of exposure to lunar dusts in several scenarios, including: after EVAs (from dust collected on spacesuits and boots), cleaning suits between EVAs, changing Environment Control and Support System filters, and lunar dust carried into the cabin (James, 2009). It is challenging to accurately quantify the degree of exposure, but any crewmember involved in a lunar surface EVA will have 100% chance of exposure to dust. Those that are not directly participating in the EVA will likely be partially exposed, which we have set at a fixed rate of 75%. Although continuous efforts and upgrades of suits and environment have been made to prevent exposure to lunar dusts since the Apollo missions, the future moon missions will involve significantly higher numbers of surface EVAs.

### ANALOG LITERATURE

Despite the lack of lunar dust on Earth, hypersensitivity pneumonitis (Spagnolo 2015), volcanic dust (Baxter 1981) and the irritation potential of respirable crystalline silica found in mines, quartz, and foundries (Churchyard 2004) can be considered analogous. Simulated lunar dusts used in studies of exposure to silica among workers in the mining industry is more likely to provide analog data for lunar dust exposure among space crew members. With high content of silica oxide, lunar dusts might mimic the effect of silica when inhaled. (Churchyard, 2004) reported a silicosis prevalence of 18.3-19.9% among contract workers in a South African goldmine. Another study by (Rajavel, 2020) found abnormal chest x-rays in 42% of mine workers in Rajasthan and silicosis prevalence rate of 37.3%. Similarly, (Nelson, 2013) reported prevalence of 22-32% of silicosis among gold mine workers in South Africa. In these studies, however, mine workers have been working for more than a decade with daily exposure, much longer than that of a space mission, and silicosis is a disease that occurs after chronic exposure. Gravitational differences in space also plays a critical role in pulmonary function and level of retention when particles are inhaled, likely altering disease severity in the space crew population.

Additionally, cosmic and solar radiation can charge the lunar surface components, giving these dusts their unique properties that are not observed on Earth.

### TERRESTRIAL LITERATURE

To date, there is no terrestrial literature on lunar dust exposure due to the lack of lunar dust on Earth. However, few studies have assessed the toxicity of lunar dust simulant exposure on rats (Lam, 2013; Sun, 2019). These studies do not provide data on incidence but can help us understand the toxicity and setting exposure limits before posing serious health risks to space crew members.

### OVERALL INCIDENCE SUMMARY

6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 1

## INCIDENCE

0.75 for non-EVA crewmembers

### INCIDENCE SUMMARY

Dust is an EVA-related environmental exposure. Since we do not have uncertainty metrics to work with for generating a distribution, we set the probabilities as fixed. Crew that go on EVA will have Fixed Incidence Proportion 1 for exposure (ICL36A condition), and those remaining will be at risk with Fixed Incidence Proportion of 0.75 (halfway between SME range 50-100%) of exposure (ICL36B condition) . For probability of worst case, probability calculations suggest that individual risk of 4E-6 will lead to a 0.1% risk over 251 EVAs.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

EVA Segment

### EVA Habitat

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Fixed Mean 0.75 SD 0

### Fixed Incidence

(Rate): (Prop.): 0.75 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

McCoy, 2019 spaceflight 4 Churchyard, 2004 analog 2 Nelson, 2013 analog 2 Rajavel, 2020 analog 2 No spaceflight and terrestrial incidence data were found. All crew who conduct lunar surface EVAs will be exposed to lunar dust (Fixed Incidence Proportion 1). For the rest of the crew (those who didn’t go on EVA), the SME assessment of likelihood was 50-100% so we set the incidence proportion as fixed at 0.75. (McCoy, 2019) reported Risk of Adverse Health & Performance Effects of Celestial Dust Exposure and evaluated risk of operational lunar dust exposure, receiving a LOC of 4. (Churchyard, 2004) is a study on prevalence of silicosis among goldminers. Providing analog incidence data, it receives a LOC of 2. (Rajavel, 2020) also provided data on prevalence of silicosis among miners, therefore also receiving a LOC of 2. (Nelson, 2013) similarly provided prevalence data on silicosis among goldminers in South Africa. 6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Air Quality Monitoring; photodocumentation of skin injuries and allergic reactions for shuttle crews; ophthalmology examination; Annual Medical Examinations including pulmonary function test and tuberculin skin test

### BEST CASE SCENARIO DEFINITION

Lunar dust causing transient symptoms in the eyes, skin and respiratory tract that respond to conservative management

### WORSE CASE SCENARIO DEFINITION

Lunar dust exposure that leads to sustained pulmonary symptoms requiring greater than 1 week of treatment.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Dust Exposure (Lunar) - Pneumonitis

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Based on subject matter expert opinion, the risk is 100% of having exposure for EVA crewmember, and 75% risk of dust affecting other crew members. The risk of a worst-case condition will be set based on the Lunar Dust HSRB update, which categorized the risk for lunar dust on a Lunar Long mission as <0.1%. The HSRB Lunar Long mission assumes 251 EVAs. To estimate the probability per EVA exposure, we use the formula, 1-〖1-(1-p_EVA )〗^251=0.001. This gives us the probability estimate, p_EVA=4E-6. Since we do not have uncertainty estimates, we simply set the fixed incidence proportion to 4E-6 for the remaining non-EVA crew. The probability of worst case is to be generated at the individual-condition level as opposed to the exposure level. (Scheuring, 2007) documented the reported situations and symptoms of lunar dust exposure during the Apollo missions. In these reports, no serious conditions within the definition of WC scenario were documented. With current evidence, WC scenario has a 0.004% probability. However, it is important not to underestimate the affects of lunar dust with long-term exposure, especially with plans to stay long-term on the lunar surface in the future (Winterhalter, 2020; McCoy, 2019). Toxicity of lunar dusts are mainly studied with lunar dust simulants exposure in animals (Sun, 2018; Lam, 2013). Concentration-dependent changes in lung histopathology (including inflammation, septal thickening, fibrosis, granulomas) were found. For rats, no adverse effects were observed with 4 weeks exposure study of concentrations under 6.8 mg/m3 (Lam, 2013). Similar to silicosis, intensity of exposure, cumulative exposure, and duration of exposure likely determine outcomes for the majority. (James, 2013) estimated that 0.5-1 mg/m³ of lunar dust is safe for periodic human exposures. Studies of volcanic ash inhalation respiratory effects also provides insight to lunar dusts exposure due to their crystalline silica component. For example, asthma and bronchitis were the most common respiratory conditions after Mt St Helens eruption in 1980 (Baxter, 1981). Volcanic eruptions leading to suffocation can mimic rare situations in spaceflight when sudden inhalation of large amounts of lunar dust can lead to hypoxia. Despite proven toxicity of inhaled lunar dust and pinpointed scenarios where exposure can occur, there was no data found on the estimated amount of lunar dust exposure among spacecrew members.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Scheuring, 2007 Spaceflight 3 Lam, 2013 Terrestrial 2 James, 2013 Terrestrial 2 Scully, 2013 Terrestrial 2 Sun, 2019 Terrestrial 2 Baxter, 1981 analog 2 Searl, 2002 analog 2 (Scheuring, 2007) is a Apollo Medical Operations Project reviewing medical operations during Apollo Missions 7 through 17. It provided insight into the situations and symptoms of lunar dust exposure during the Apollo mission. No serious events within the definition of WC scenarios were reported. The absence of serious conditions aid with the estimation of WC/BC probability, receiving a LOC of 3. (Lam, 2013), (James, 2013), (Scully, 2013), and (Sun, 2019) are all animal studies of lunar dust inhalation effects. They provide data on concentration and physiological effects of lunar dusts, aiding to improve understanding in human exposure, receiving a LOC of 2. (Baxter, 1981) looked at the respiratory conditions after eruptions of Mt St Helens in 1980. It provides data on conditions after volcanic ash exposure, mimicking that of lunar dusts, therefore receiving a LOC of 2. (Searl, 2002) studied the health effects among islanders after Soufriere Hills volcano eruption, receiving a LOC of 2. 6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best 0.75 for non-EVA 99.9996 - 100 0.81 1.925 1 24 0 0 0 0 0 Case (TBC) crewmembers 99.9996 Treated Worst 0.0004 - 100 0.81 15.3069 168 1344 0 0 30 0 0 Case (TWC) 0.0004 Untreated Best N/A N/A N/A 0.81 4.73 2 48 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 0.81 34.795 336 4368 35.98 30 70 0 30 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Best case scenario are conditions from lunar dust exposure that spontaneously resolve. Quantity of dust and the duration of exposure play important roles in determining the outcome of exposure. Without adequate data and event records of the effects of lunar dust exposure among astronauts, we used expert opinion provided by resources familiar with the impact of lunar dust exposure to help provide data on BC/WC probability. Symptom treatment duration, RTDC and LOCL estimations were based upon terrestrial data such as crystalline silica exposure, volcanic ash exposure or hypersensitivity pneumonitis.

TREATED BEST CASE (TBC) SCENARIO COMMENTS If small amounts of lunar dust are inhaled, coughing and allergic reactions can occur. Skin and eye irritation due to exposure of lunar dust can also be minor and transient. The definition of the BC scenario is "responds to conservative treatment". Therefore, in these situations, risk of RTDC and LOCL will both be 0%. TREATED WORST CASE SCENARIO (TWC) COMMENTS Moon's reduced gravity enables particles to penetrate deeper into the lungs and deposit in the alveoli (Cain, 2010). This reduction in gravity, the size of the dust particles, and the unique properties of lunar dust also make it more difficult for the respiratory system to remove dust effectively from the lung, leading to longer particle retention and potentially causing more severe damage (Lippmann, 1980). Symptoms reported by (Scheuring, 2007) astronauts on the Apollo missions after lunar dust inhalation after EVAs did not result in acute hypoxia or any permanent symptoms, making RTDC probability difficult to calculate but likely extremely low. According to case reports of acute respiratory diseases after volcanic ash inhalation, acute respiratory symptoms of asthma and bronchitis can last up to 10 days after exposure (Trisnawati, 2015). Duration of treatment in inhalation pneumonitis is unpredictable due to the lack of clinical data. However, as seen after volcanic ash exposures, long term consequences such as COPD can also occur, making duration of treatment long and disqualifying spacecrew members. A reported case of acute silicosis also highlighted the severity of disease and risk of mortality even with treatment (Hutyrová, 2015). There is no evidence on whether acute or chronic exposure leads to the development of COPD (Buist, 1986) and no viable data on the probability of development.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Conservative treatment of the best case scenario will likely involve flushing affected mucous membranes with water, antihistamines or an albuterol inhaler. Probability of RTDC and LOCL will also be 0% despite lack of treatment, although convalescent time will be extended compared to treated BC. UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Untreated cases of pneumonitis and other more severe cases of inhalation would have higher chances of progressing into chronic diseases. For RTDC, reports of acute hypoxia due to silicate dust inhalation are often in the form of asthma, as documented in volcanic ash exposure literature (Gudmudsson, 2010). There are currently no documented deaths from lunar dust inhalation. However, in a mining disaster, 30% of workers with "acute silicosis" died within a few years of exposure (Cherniack, 1986). With data from this horrible and rare event, it can be estimated that if there were a serious event of inhaling extremely high concentrations of lunar dusts, mortality can be as high as 30% (if not more due to the additional properties of lunar dusts) but LOCL would likely occur long after mission conclusion.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Gudmundsson, 2010 analog Buist, 1986 analog Trisnawati, 2015 analog Hutyrová, 2015 analog 1 6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 5

| Citation | Source | LOC Value |  |
| ------------- | ------ | --------- | --- |
| Spagnolo 2015 | analog |  |  |

(Gudmudsson, 2010) reviews the acute and chronic health effects of volcanic ash, which last up to 10 days. (Buist, 1986) is a prospective study on the health effects of volcanic ash after eruption of Mt St Helens. (Trisnawati, 2015) is a case report of traumatic inhalation of Merapi Volcanic ash. (Hutyrová, 2015) reported a case of accelerated silicosis due to occupational exposure. (Spagnolo 2015) reports on hypersensitivity pneumonitis, which is a poor analog for lunar dust pneumonitis but the time frame seems in line with reports from Scheuring. Due to the differences between hypersensitivity reactions and volcanic ash and lunar dust as well as the lack of historical data on lunar dust pulmonary conditions, this section receives a LOC of 1. TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ----------------- | ----------- | --------- | --- |
| Scheuring, 2007 | spaceflight |  |  |
| Gudmundsson, 2010 | analog |  |  |
| Zabert, 2020 | analog |  | 1 |
| Morin, 1997 | analog |  |  |
| Spagnolo 2015 | analog |  |  |

(Scheuring, 2007) is a Apollo Medical Operations Project reviewing medical operations during Apollo Missions 7 through 17. It provided insight into the situations and symptoms of lunar dust exposure during the Apollo mission. No serious events were reported but the exposures were less frequent than on future missions. (Spagnolo 2015) reports on the need for higher level of care for hypersensitivity pneumonitis. (Morin, 1997) describes a case of acute respiratory insufficiency after inhaling concrete dust. Components of concrete do not resemble that of lunar dusts as much as silicate dusts. (Gudmundsson, 2010) reviewed the acute respiratory conditions after inhalation of volcanic dusts. (Zabert, 2020) is a cross- sectional study looking at asthma prevalence after eruption of Calbuco Volcano. However, asthma prevalence does not directly correlate to acute hypoxia due to inhalation. Overall, LOC is a 1.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| --------------- | ------ | --------- | --- |
| Cherniack, 1986 | analog |  |  |
| Hutyrová, 2015 | analog |  | 1 |
| Higuchi, 2012 | analog |  |  |

(Cherniack, 1986) reviewed the Hawk's Nest Tunnel incidence and the effect of acute silicosis leading to mortality. (Hutyrová, 2015) is a reported case of mortality of accelerated silicosis in a sandblaster. (Higuchi, 2012) found increased mortality from pulmonary diseases in areas affected by volcanic ashfall. However, this is a study of long term mortality from pulmonary diseases due to ash inhalation rather than the direct effect of volcanic ash inhalation. This LOCL section also receives a LOC of 1 because there were no reported cases of lunar dust inhalation resulting in (short term) mortality and analog studies did not provide applicable data.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview This condition results from exposure to dust on the lunar surface which is widely considered to be a biochemically inert but mechanical irritant. Lunar dust exposure disease is expected to result from either inhalation or skin/ mucosal surface irritation. However, since our sample size is limited and exposure times are relatively short, the effects remain unknown over an extended time period. CNES: NONE Diagnostic Scope and Resourcing Diagnosis relies on history and physical exam with particular attention paid to the oropharynx, eyes, and lungs. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.81 hours including set up time, history, and physical exam CP1 WC (Treated or Untreated): 0.81 hours including set up time, history, and physical exam This condition requires a Scope of Practice 5 primarily because of the unknown nature, however the team acknowledges that the majority of the likely diagnostic and treatment will not rise above an SoP 4. Treatment Scope and Resourcing The best case is eye and mucosal irritation. treatment includes nasal corticosteroids, eye lubrication drops, antihistamines, throat lozenges, decongestants, and antitussives. the Worst cast is a pneumonitis and adds Communications and Support Needs; Communication needs are not expected to rise above the level of routine medical communications with the ground, given the non emergent, and frequent exposure to this irritant. Should unexpected events occur an SoP 5 provider would be able to recognize the unexpected condition and contact ground but this would be an unanticipated scenario. References; Barratt, Michael R., Ellen S. 6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 6

Baker, and Sam L. Pool. 2019. "Principles of clinical medicine for space flight." In. New York, NY: New York, NY : Springer. Selman M.

Hypersensitivity pneumonitis. In: Interstitial Lung Disease, 5th ed, Schwarz MI, King TE Jr (Eds), People's Medical Publishing House - USA, Shelton, CT 2011

### IMM CLIFF RECONCILATION COMMENTS

No previous IMM CLiFF

### LIMITATIONS SUMMARY

The most notable limitation is the lack of incidence and informative health records of lunar dust exposure. As highlighted in the incidence section, there are many scenarios when exposure can occur. However, it is hard to estimate the amount/concentration and likelihood of exposure during these situations. Without lunar dust on Earth, expert opinion was used for estimation of duration of WC and BC scenarios and analog data for the treatment durations. Despite having a high silica content and the ability to cause silicosis-like pneumonitis when inhaled, the properties of lunar dust and that of any substance on Earth are fundamentally different. With the known accumulative toxicity and the additional toxicologic effects of lunar dusts, despite no evidence of WC scenarios during the Apollo missions, WC scenario probabilities would definitely not be 0% with future long-term stays on the lunar surface. Additionally, inhaled particle deposition in the respiratory tract is influenced by gravitational segmentation. However, studies have found a non-linear relationship between deposition and gravity level (Darquenne, 1997; Darquenne, 1998), making prediction of deposition difficult. This sets further limitations on BC/WC scenario probabilities and estimations made from analog populations. 6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  |  |  |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  |  |  | 145 |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  | 664 | 113 |  |  | 145 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  |  | Translation & |  |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  |  | Extremity Standing (g) |  | Equipment | Ops |  | Category |  |  |
| --- | ----- | --- | --- | ---------------------- | -------------- | --------- | --- | --------- | -------- | --- | --- |
|  |  |  |  |  | (microgravity) |  |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best |  |  |  |  |  |  |  | 145 | 3763 | 0.0385331 | 3.85331 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --------- | ------- |

Case (TBC) Untreated

| Best |  |  |  |  |  |  | 211 | 356 | 3763 | 0.0946054 | 9.46054 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | --------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  |  |  |  |  | 211 | 1152 | 3763 | 0.306139 | 30.6139 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  |  |  |  |  | 211 | 1265 | 3763 | 0.336168 | 33.6168 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - | Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | -------------- | --------------- | ------- | --------- | --------- | --- | ----- | --- | --- |
|  |  |  | Communications | personal Vision | Hearing |  | Dentition |  | GI GU |  |  |
|  | Simple | Complex |  |  |  | pulmonary |  |  |  |  |  |

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

|  |  | 664 | 113 | 89 |  | 145 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 8

Total Human

|  | Translation & | Total Tasks |  |  |
| --- | ------------- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | ---------------------- | ------------- | -------- | --- |

(microgravity) Condition Tasks Full Mission Treated Best

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 |  | 211 1354 | 3763 0.359819 | 35.9819 |
| --- | --- | -------- | ------------- | ------- |

Case (UTWC) 6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 9

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

6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 10

## REFERENCES

Reference Baxter PJ, Ing R, Falk H, et al. Mount St. Helens eruption, May 18 to June 12, 1980. An overview of the acute health impact. JAMA.1981;246: 2585–9. Bean, A.L. et al., NASA SP-235, 1970 Blanc PD, Annesi-Maesano I, Balmes JR, et al. The Occupational Burden of Nonmalignant Respiratory Diseases. An Official American Thoracic Society and European Respiratory Society Statement. Am J Respir Crit Care Med. 2019;199(11):1312-1334. doi:10.1164/rccm.201904-0717ST Buist AS, Vollmer WM, Johnson LR, Bernstein RS, McCamant LE. A four-year prospective study of the respiratory effects of volcanic ash from Mt.

St. Helens. Am Rev Respir Dis. 1986;133(4):526-534.

Cain, John R. "Lunar dust: the hazard and astronaut exposure risks." Earth, Moon, and Planets 107.1 (2010): 107-125.

Cherniack, M. (1986) The Hawk’s Nest incident: America’s worst industrial disaster. Yale University Press, New Haven, Conn.

Gudmundsson, G. (2011), Respiratory health effects of volcanic ash with special reference to Iceland. A review. The Clinical Respiratory Journal, 5: 2-9. Hutyrová B, Smolková P, Na kládalová M, Tichý T, Kolek V. Case of accelerated silicosis in a sandblaster. Ind Health. 2015;53(2):178-183.

John T. James (2009), Risk of Adverse Health Effects from Lunar Dust Exposure Kennedy, R.H. Harris, Dust control research for SEI. Paper presented at SPACE 92: Engineering Construction & Operations in Space. American Society of Civil Engineers, Denver, CO May 31–June 3 (1992)

Lam CW, Scully RR, Zhang Y, et al. Toxicity of lunar dust assessed in inhalation-exposed rats. Inhal Toxicol. 2013;25(12):661-678.

Latch JN, Hamilton RF Jr, Holian A, James JT, Lam CW. Toxicity of lunar and martian dust simulants to alveolar macrophages isolated from human volunteers. Inhal Toxicol. 2008;20(2):157-165.

Lippmann, D.B. Yeates, R.E. Albert, Deposition, retention and clearance of inhaled particles. Br. J. Ind. Med. 37, 337–362 (1980)

Liu Y, Taylor LA. (2011) Characterization of lunar dust and a synopsis of available lunar simulants. Planet Space Sci 59(14):1769-1783 McCoy (2019) HSRB Presentation "Updates to the Risk of Adverse Health and Performance Effects of Celestial Dust Exposure" Nelson G. Occupational respiratory diseases in the South African mining industry. Glob Health Action. 2013;6:19520. Published 2013 Jan 24.

Portree DSF, Treviño RC. (1997) Walking to Olympus: An EVA chronology. In: Monographs in aerospace history series #7. NASA History Office, NASA Headquarters, Washington, D.C. Rajavel S, Raghav P, Gupta MK, Muralidhar V. Silico-tuberculosis, silicosis and other respiratory morbidities among sandstone mine workers in Rajasthan- a cross-sectional study. PLoS One. 2020;15(4):e0230574. Published 2020 Apr 16.

Scheuring RA, Jones JA, Polk JD, Gillis DB, Schmid J, Duncan JM, Davis, JR. (2007) The Apollo Medical Operations Project: Recommendations to improve crew health and performance for future exploration missions and lunar surface operations. TM-2007-214755. NASA Johnson Space Center, Houston. Spagnolo P; Rossi G; Cavazza A; Bonifazi M; Paladini I; Bonella F; Sverzellati N; Costabel U Hypersensitivity Pneumonitis: A Comprehensive Review. J Investig Allergol Clin Immunol. 2015; 25(4):237-50 Sun, Y, Liu, J, Zhang, X, Li, X, Zhou, B, Lv, Z. Mechanisms involved in inflammatory pulmonary fibrosis induced by lunar dust simulant in rats.

Environmental Toxicology. 2019; 34: 131– 140.

Trisnawati I, Budiono E, Sumardi, Setiadi A. Traumatic Inhalation due to Merapi Volcanic Ash. Acta Med Indones. 2015;47(3):238-243.

Wakisaka, I. , Yanagihashi, T. , Tomari, T. , & Ando, T. (1988). Effects of volcanic activity on the mortality figures for respiratory diseases. Nippon Eiseigaku Zasshi (Japanese Journal of Hygiene), 42(6), 1101–1110. 10.1265/jjh.42.1101 Zabert I, Benitez S, Maldonado PDC, Uribe Evhevarría L, Zabert GE. Prevalencia de síntomas de riesgo asma en adolescentes expuestos a ceniza volcánica, en dos ciudades de la Patagonia [Prevalence of asthma at risk symptoms in adolescents exposed to volcanic ash, in two Patagonian cities]. Rev Fac Cien Med Univ Nac Cordoba. 2020;77(2):61-67. Published 2020 Apr 7.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 11

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

6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 12

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

6/15/2023 1:48:56 PM ICL36B_Dust Exposure - Lunar (EVA Habitat) Cliff page: 13

---

## Source metadata

```yaml
source_filename: "dust-exposure-lunar-eva-habitat-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 119"
source_url: "https://drive.google.com/file/d/1OiJEPL-jz1-gSKYBHMBTDXkxevHra3ND/view"
source_drive_id: "1OiJEPL-jz1-gSKYBHMBTDXkxevHra3ND"
source_sha256: 0a6dbffdde9292484079a72f560c5da1bedae3d2667b2ad936029d6c1a7fad1d
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
