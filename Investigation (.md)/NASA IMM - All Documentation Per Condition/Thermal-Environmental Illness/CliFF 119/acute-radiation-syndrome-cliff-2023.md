# Acute Radiation Syndrome CLiFF 2023

[View original PDF](https://drive.google.com/file/d/109w1_n80NktqehYfL0CZD-j5Uh2o3qFy/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

### ICL4_Acute Radiation Syndrome

During spaceflight, both galactic cosmic radiation (GCR) and solar energetic particles from solar particle events (SPEs) threaten the health and safety of crew members. These high energy particles and waves can cause molecular damage to DNA and pluripotent cell lines increasing the risk of cancer (stochastic effects) but also in high doses can cause direct tissue damage (Non-stochastic/deterministic effects). Acute radiation syndrome (ARS) is the constellation of multi-organ injury that occurs with high doses of radiation in a short period of time. With the exception of the Apollo missions, all of spaceflight has existed within low earth orbit and well within the protection of the earth's magnetosphere, limiting radiation exposure.

As we move toward long duration spaceflight outside of low earth orbit (LEO) the risk of radiation exposures and thus ARS becomes more significant.

SPE's are of particular concern as they are difficult to predict and can release high energy protons for up to several days at a time. These particle events contain enough energy to induce acute radiation syndrome in a crew member if not adequately protected. The vast majority of terrestrial data on radiation exposure comes from nuclear weapons and disasters which typically release low-linear energy transfer (low-LET) radiation such as X- rays and gamma rays. Radiation syndrome progresses through a prodromal phase, a latent phase, and manifest phases. Symptoms are organ specific, but typically the prodromal phase involves headache, nausea, and fatigue. Extremely high doses of radiation may result in vomiting, confusion, and hemodynamic effects. In the latent phase a patient's symptoms improve with the exception of cytopenia. However this phase is then replaced by the manifest phase in which the patient is immunocompromised and develops end organ failure. The duration and severity of each phase is entirely dose dependent. Extensive work has been done to model SPE's and extrapolate from terrestrial data but much is still unknown about the risk and impact of an SPE on a crew member in flight. Over the last 70 years there have been several large SPEs that had the potential to induce ARS among crew members with limited shielding. Newer vehicle designs plan to mitigate this risk with shielding and radiation shelters limit both the stochastic and deterministic effects of long duration flight.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

The radiation environment encountered in spaceflight is unique. Terrestrial data on massive radiation exposure is almost universally around gamma radiation from nuclear disasters, weapons, or medical exposure. The protons and other particles released by the sun are very high energy and carry significant radiation but may not penetrate as deeply into tissue. As such, only spaceflight data is relevant to this condition. Kim, MH et al. 2009, Hu, S et al. 2009, Townsend, LW et al 1991 and Townsend, LW 2018 all review models of the strongest SPE's in documented history in an attempt to calculate dose exposure and risk of radiation effects in crew members. The literature almost universally uses the cutoff of 250mGy as a high dose exposure as this is the 30d radiation exposure limit set by NASA. Prior modeling used 5g/cm2 of shielding as standard however several of these models have shown that this would be inadequate to prevent exceeding the 250mGy event at a high enough certainty for crew safety as several high energy events over the last 50 years would exceed this threshold. New vehicle designs have not been completed but are expected to have much more shielding to reduce this risk and estimated incidence is based on NASA design standards and likelihood of very high energy SPEs

### ANALOG LITERATURE

No analog data was used given the unique nature of radiation in the spaceflight environment

### TERRESTRIAL LITERATURE

There are terrestrial studies on incidence of ARS however they primarily involve gamma radiation from industrial radiation accidents or survivors of Hiroshima and Nagasaki. These studies are less applicable to spaceflight where the risk of ARS will depend on SPE rather than industrial or weapon exposure.

### OVERALL INCIDENCE SUMMARY

8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 1

## INCIDENCE

mean 0.01 and SD 0

### INCIDENCE SUMMARY

The incidence rate distribution for strong Solar Particle Events is Fixed at 0.01 per year. The probability a crew develops ARS given the SPE exposure is 1. The shielding parameters of next generation vehicles have yet to be fully established but are expected to be at a minimum density of 20g/cm-2. Shielding is not expected to be uniform across the entirety of the vehicle and there will likely radiation shelters up to 40g/cm-2 and may include material other than aluminum such as polyethylene, water, or other supplies. The radiation dose received by a crew member and thus their risk of ARS id reduced substantially from 20 to 40g/cm-2 of shielding. There are no vehicle design requirements with regards to specific shielding density, but rather the expectation that shielding will be sufficient to prevent a crew member from exceeding the 30d NASA limit of 250mGy to a blood forming organ based on the October 1989 SPE(s) energy and spectrum (now used as the SPE design standard). NASA requirements also state that vehicles be designed to make the radiation exposure to crew members as low as reasonably achievable (ALARA) to limit the stochastic effects of radiation in flight to a risk of exposure induced death (REID) from cancer to be less than 3%. These standards are more similar to guidelines than requirements and it is extremely hard to predict the risk of ARS without vehicle specifications. It is also assumed that the extensive terrestrial monitoring of solar activity by terrestrial sensors will alert crew members of a large SPE with hours to days of lead time to allow them to finish EVA and/or establish a radiation shelter to minimize the exposed dose. With all of these unknown variables and assumptions, the risk of SPE was determined to be 0.01 events per year based on Townsend, LW et al. 2018 and Xapsos, MA et al. 1999 which note that a solar particle event of >1x10^10cm-2 has a 1% chance of occurring during on solar active year which would result in a dose to BFO exceeding 250mGy at 40g/cm-2 and ~1Gy at 20gm/cm-2. The likelihood that a crew member meets criteria for this condition during one of these events is 1.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Fixed Mean 0.01 SD 0

### Fixed Incidence

(Rate): (Prop.): 1

### Incidence Details

### Incidence Type

Environmental Segment All Env. Exposure SPE Sex Any Crowns Any Contacts 8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 2

Any

Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Fixed Mean 0.01 SD 0

### Fixed Incidence

(Rate): 0.01 (Prop.): TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ------------------------ | ----------- | --------- |
| Hu, S et al. 2009 | Spaceflight | 2 |
| Kim, MH et al. 2009 | Spaceflight | 2 |
| Townsend, L et al. 1991 | Spaceflight | 2 |
| Kennedy 2014 | Spaceflight | 1 |
| Hu, S et al. 2020 | Spaceflight | 2 |
| Townsend, LW et al. 2018 | Spaceflight | 2 |
| Xapsos, MA et al. 1999 | Spaceflight | 2 |

Hu, S et al. 2009, Kim, MH et al. 2009, and Townsend, L et al. 1991 are all papers modeling the dose of radiation received by astronauts during major SPEs in different density of spaceships. They model the SPE's of clinical significance for the last 60 years of spaceflight to identify the risk of radiation exposure. However, they show the doses received by crewmembers with 5g/cm-2 of shielding. This standard was based on older models and vehicle designs. The apollo lunar lander for example had 6g/cm-2 of shielding while future vehicle designs are expected to be 20g/cm-2 of shielding at a minimum with possible "SPE storm shelters" with up to 30 or 40 g/cm-3 of shielding. Current design parameters are not determined however Townsend, LW et al. 2018 was a landmark study recommending minimum vehicle shielding based on models produced by Xapsos, MA et al. 1999 of SPEs with energies predicted to be between the 90th and 100th percentile. These papers combined to provide a reasonable estimate of the likelihood of an SPE occurring with enough energy to meet our BC and WC criteria with the proposed vehicle designs for our DRM. Given these updates to prior design requirements and specifications Townsend, LW et al. 2018 was used instead of Hu, S et al. 2009 and Kim, MH et al. 2009.

There are a large number of assumptions and limitations to the estimated incidence and as such the LOC value at best is a 2. 8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

While no preventative screening measures exist for ARS, there is continuous dosimetry of radiation exposure of crew members while in flight. This is retrospective information and does not substantially change the likelihood of a crew member having ARS. A candidate for a specific flight is not eligible for selection for that flight if the sum of the astronaut’s career occupational exposure to date plus the projected mission exposure, as determined by the Radiation Health Officer (RHO), associated with that flight exceeds the career limits. Occupationally related sources of exposure throughout the career of any USA crewmember shall result in no more than 3% probability of lifetime excess cancer mortality risk.

### BEST CASE SCENARIO DEFINITION

A single exposure dose exceeding the NASA 30d exposure limit of 250mGy (but less than 500mGy) to blood forming organs

### WORSE CASE SCENARIO DEFINITION

A single exposure dose exceeding 500mGy to blood forming organs CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES) 0

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Usoskin, IG and Kovaltsov, GA 2012 estimate that 10% of all solar particles released by the sun exist in extreme, massive SPEs that occur every several hundred years such as the Carrington Event in 1859. This proportion was used to represent a WC scenario in which a crew member receives a BFO dose of >500mGy and suffers ARS symptoms. The absolute maximum possible dose is based on Townsend, LW et al. 2018 which notes that the maximum possible SPE plus one standard deviation would result in <2Gy dose to BFO even at the minimum expected shielding (20g/cm2). This is an extremely conservative upper limit and the true maximum possible dose is likely closer to 1.5Gy.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Usoskin, et al. 2012 Spaceflight 2 Shielding designs are based on large SPEs over the last few decades, however there are reported massive SPEs such as the Carrington Event that would result in much larger effective doses of radiation that have the potential to exceed 500mGy and induce ARS even with current design parameters. These extreme events are expected to occur once every several hundred years and represent approximately 10% of all total solar particle energy produced. This 90:10 ratio combined with the proposed incidence would place one extreme event resulting in ARS every 1000 years. 8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Case mean 0.01 90 - 90 100 1.08 16.2238 0 72 0 0 0 0 0 (TBC) and SD 0 Treated Worst 10 - 10 100 1.08 26.2291 24 144 5.60723 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 1.08 16.742 0 72 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.08 31.7964 24 240 5.60723 0 0 0 0 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

The general approach to radiation illness is supportive. In the prodromal phase patients can have significant GI loses, fatigue, and headaches that can be improved with oral or IV medication depending on severity. The latent phase typically involves improvement in patient symptoms however this is self limited and precedes the manifest phase in which the patient can have multiorgan failure. Bone marrow suppression can be severe and the majority of patients ultimately die from sepsis. Terrestrially a patient will receive bone marrow supporting agents or a stem cell transplant however these capabilities are not possible in flight. Radiation doses necessary to induce cytopenia far exceed which is expected based on current SPE modeling and vehicle design however, and the most likely scenario will symptom control during the prodromal period with resolution of symptoms and return to full activity in the order of days. Organ injury, including bone marrow, is expected to be clinically insignificant.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The BC scenario is defined as a single exposure dose exceeding the NASA 30d exposure limit of 250mGy to blood forming organs. Based on Carnell, L et al. 2016, small doses of radiation that induce minor symptoms of ARS may resolve within 1-3d. The RTDC surrogate of neutropenia occurs at doses >2Gy which far exceeds the best case scenario so RTDC is set at 0%. LOCL is was based on Blue, KS et al. 20019 which gave a minimum of 0 and a maximum of <0.1% which was rounded to 0.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The WC scenario is defined as a single exposure dose exceeding 500mGy to blood forming organs. Duration was based on Carnell, L et al. 2016 which discussed the duration of each phase of ARS. The Prodromal phase lastsfrom 2-6 days while the latent can last up to 20 and the manifest phase up to 60d. In WC scenario a crew member would receive a BFO dose of >500 but would be extremely unlikely receive a dose >2Gy based on the absolute maximum modeled SPEs and current vehicle requirements. As such, the latent and manifest stages are assumed to be insignificant as the doses received by the organs do not reach the thresholds for severe injury. Duration is therefore the range of the prodromal phase or 1-6d.

The RTDC was defined as a dose inducing neutropenia or severe anemia which is unlikely to occur with doses <2Gy and thus was determined to be 0%. Mortality risk at these doses is also assumed to be 0% with supportive care.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The BC scenario is defined as a single exposure dose exceeding the NASA 30d exposure limit of 250mGy to blood forming organs. The treated and untreated BC scenario are expected to have the same outcomes due to the very minor symptoms of exposure. Based on Carnell, L et al. 2016, small doses of radiation that induce minor symptoms of ARS may resolve within 1-3d. The RTDC surrogate of neutropenia occurs at doses >2Gy which far exceeds the best case scenario. LOCL is was based on Blue, KS et al. 20019 which gave a minimum of 0 and a maximum of <0.1% which was rounded to 0. UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The WC scenario is defined as a single exposure dose exceeding 500mGy to blood forming organs. Treatment in this scenario would be primarily supportive with oral and possibly IV medications for symptom control and fluid resuscitation. This would improve crew members experience and likely speed return to work however a dose of >2Gy is not expected even in the WC scenario and so outcomes such as RTDC and LOCL are unchanged from the treated condition. The Prodromal phase lasts from 2-6 days while the latent can last up to 20 and the manifest phase up to 60d. The latent and manifest stages are assumed to be insignificant as discussed. Duration is therefore the range of the prodromal phase or 1-6d however in the absence of symptom control this length of time was extended to 10d. The RTDC was defined as a dose inducing neutropenia or severe anemia which is unlikely to occur with doses <2Gy and thus was determined to be 0%. Mortality risk at these doses is also assumed to be 0% even in the absence of supportive care.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Carnell, L et al. 2016 Terrestrial 3 Carnell, L et al. 2016 is a NASA supported documents that use agreed upon values for duration of symptoms for each phase of ARS. The maximum accepted dose from an SPE with current vehicle requirements is anticipated to be much less than 2Gy thus the latent and prodromal phases are 8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 6

negligible. TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Expert Opinion Terrestrial 3 The symptoms of ARS even in the WC scenario are not expected to exceed the medical capabilities of the DRM. Even in the untreated scenario this is expected to be a self limited illness lasting several days at worst. The RTDC surrogate will not be met by the modeled radiation exposure and thus expert opinion places the RTDC at 0% for all scenarios.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Blue, RS et al. 2019 Spaceflight Townsend, LW et al. 2018 Spaceflight 3 Carnell, L et al. 2016 Spaceflight Blue, RS et al. 2019 defines risk of LOCL based on BFO exposure in a high energy solar particle event. Even in an event double the size of their model "Worst case" event (1972) the mortality risk is expected to be negligible. These estimates are also based on 5g/cm2 of shielding which is much lower than the expected dose. Townsend, LW et al. 2018 shows the expected BFO dose with higher levels of shielding up to 100g/cm2. This CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview In cases of mild thermal burns, the associated medical response is to address the pain and discomfort associated with the condition as well as antibiotic therapy and dressings to mitigation infection risk. Generally, this condition is one of discomfort rather than a medical emergency although some antibiotics may need to be applied to reduce risk. The CRT condition focuses mostly on the symptomatic recovery from exposure. Little therapy is available to mitigate the radiation exposure, but symptoms can be managed to both improve symptoms and also increase survival (eg treat neutropenic fever, etc.). Diagnostic Scope and Resourcing In the best-case scenario, diagnosis is based on history and physical examination. In the worst-case scenario, diagnosis is based on history and physical examination. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1.08 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2

- Perform a physical on the patient (cardiopulmonary, neurologic, and skin exams) CP1 WC (Treated or Untreated): 1.08 hours This is the longest

reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient (cardiopulmonary, neurologic, and skin exams) The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a four: this is an intern level. Treatment Scope and Resourcing In the best-case scenario, treatment is prophylactic and addresses nausea/vomiting/diarrhea. The worst case scenario is the same. Assumptions: 1.) Only covered radiation source of outside the vehicle, rather than exposure from material present.

So, "cleaning" is not covered. No wound decontamination, or eating, or skin care, etc. 2.) CNS symptomatic therapy is not included in this CRT 3.)

Cutaneous manifestations should be treated like a mild burn (ICL 21) 4.) Blood transfusion is not included because the assumption is that all crew would have some exposure and would need to keep their own blood. Communications and Support Needs In the best and worst-case scenario, diagnosis and course of treatment is uncomplicated and likely within the scope of care of onboard crew members however, communication is very likely to be a high priority for other reasons as a radiation exposure will likely result in other issues and communication would be highly preferred.

## REFERENCES

1. Bentzen SM. Preventing or reducing late side effects of radiation therapy: radiobiology meets molecular pathology. Nat Rev Cancer 2006;

6:702.

2. Reeves GI. Radiation injuries. Crit Care Clin 1999; 15:457.

3. Mole RH. The LD50 for uniform low LET irradiation of man. Br J Radiol 1984; 57:355.

4. Rutherford, MW, Seward, JP. Radiation injuries and illnesses in pediatric emergency medicine. Clin Pediatr Emerg Med 2001; 2:141.

5. Barnett GC, West CM, Dunning AM, et al. Normal tissue reactions to radiotherapy: towards tailoring treatment dose by genotype. Nat Rev

Cancer 2009; 9:134.

6. Mettler FA, Upton AC. Deterministic effects of ionizing radiation. In: Medical effects of radiation, 3rd edition, Mettler FA, Upton AC (Eds),

Saunders Elsevier, Philadelphia 2008.

### IMM CLIFF RECONCILATION COMMENTS

8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 7

The prior IMM CLIFF used similar source material to this updated CLIFF. A significant amount of research was done on SPE during the ISS era of spaceflight and there have not been significant solar radiation events that put crew members at risk since then. Similar to the current version, the prior CLIFF evaluates some terrestrial data but primarily draws upon spaceflight specific research to determine incidence. They used the number of significant SPE over 53 years (3/53) to determine their incidence. However, this newer version instead uses modeling data to determine the rate of SPE and the likelihood that a given SPE will induce ARS. In this way we can more accurately model the ARS risk than the previous version. This approach also allows for more nuanced updating as we learn more about SPE and the risk of acute radiation exposure in flight. The BC/WC distribution used in the prior CLIFF was a 99/1% ratio to reflect the time spent on EVA within a given mission. We took an alternative approach and assumed that any SPE of significance would be identified by terrestrial monitoring hours to days prior to impacting crew. If an SPE occurred during EVA, this would result in immediate return to shielding and thus all crew members have the same risk of SPE and this risk is based on the maximum shielding available. This likely underestimates the total dose received by a crew member slightly and is a limitation to the current version. The definitions of BC and WC scenario were slightly different and used a cutoff of 2Gy while this version uses 250-500 mGy in order to more accurately reflect the highest energy SPE and possible exposure dose ever recorded.

### LIMITATIONS SUMMARY

- Risk of ARS in flight is entirely dependent on the rate of large energy SPE (in the absence of nuclear power). These solar particle events are

extremely hard to predict in advance •There is extensive monitoring of solar activity given the impact of large SPEs on electronics both terrestrially and in orbit. In this CLIFF we assume that a large SPE will be detected by sensors with hours to days ahead of maximum flux to crew members and thus will assume they have maximum shielding available during an event. This also assumes that a crew member will not be on EVA during an SPE.

- Vehicle specifications for this DRM have not been selected and thus the density of shielding is unknown which directly impacts the dose to BFO

received. We will assume based on meetings with SPE modeling teams and current design specifications that the shielding will range from approximately 20 to 40g/cm2 of aluminum. •Most terrestrial literature on high dose radiation is limited to gamma rays which behave differently than the protons and other large particles seen in SPE. Extrapolation of acute radiation syndrome dose and effects are based on terrestrial data what may not accurately reflect solar particle radiation effects. •Our best case and worst-case definitions are based on exposure to bone marrow forming organs. Protons penetrate less deeply into tissue and thus the effective dose of radiation of a crew members skin is likely to be at least an order of magnitude higher than that of the bone marrow. The definition of this condition does not capture skin injury during SPE. 8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 |  |  |  |  | 145 |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  |  |  |  | 145 | 5 | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst |  | 664 |  | 89 |  |  | 145 | 5 | 13 |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 |  | 89 |  |  | 145 | 5 | 13 |  |  |  |
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

| Best | 132 |  |  | 22 |  |  | 34 | 211 | 1221 | 3763 | 0.324475 | 32.4475 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 |  |  | 22 |  | 34 | 34 | 211 | 1260 | 3763 | 0.334839 | 33.4839 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 |  | 414 | 22 |  | 34 | 34 | 211 | 1763 | 3763 | 0.468509 | 46.8509 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 |  | 414 | 22 | 196 | 34 | 34 | 211 | 2182 | 3763 | 0.579856 | 57.9856 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

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

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 9

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

|  |  | 211 211 | 3763 0.0560723 | 5.60723 |
| --- | --- | ------- | -------------- | ------- |

Case (TWC) Untreated Worst

|  |  | 211 211 | 3763 0.0560723 | 5.60723 |
| --- | --- | ------- | -------------- | ------- |

Case (UTWC) 8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 10

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

8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 11

## REFERENCES

Reference Berger, M. E., et al. (2006). "Medical management of radiation injuries: current approaches." Occup Med (Lond) 56(3): 162-172.

Blue, R. S., et al. (2019). "Challenges in Clinical Management of Radiation-Induced Illnesses During Exploration Spaceflight." Aerosp Med Hum Perform 90(11): 966-977. Carnell, L., et al. (2016). Risk of Acute Radiation Syndromes Due to Solar Particle Events. Lyndon B. Johnson Space Center.

Cucinotta, M.-H. K. M. H. A. F. a. F. (2009). "Prediction of Frequency and Exposure Level of Solar Particle Events." Health Physics Society 97(1): 68-81. Cucinotta, S. H. M.-H. K. G. M. F. (2009). "Modeling the Acute Health Effects of Astronauts from Exposure to Large Solar Particle Events." Health Physics Society 96(4): 465-476. Dainiak, N. (2002). "Hematologic Consequences of Exposure to Ionizing Radiation." Experimental Hematology.

Donnelly, E. H., et al. (2009). "Acute Radiation Syndrome: Assessment and Management." Southern Medical Journal 103.

Durante, M. and F. A. Cucinotta (2011). "Physical basis of radiation protection in space travel." Reviews of Modern Physics 83(4): 1245-1281.

Fliedner, T. M., et al. (2002). "Structure and Function of Bone Marrow Hemopoiesis: Mechanisms of Response to Ionizing Radiation Exposure." Cancer Biotherapy and Radiopharmaceuticals 17.

Hamilton, S. E. D. (2006). "Medical Mitigation Strategies for Acute Radiation Exposure During Spaceflight." Aviation, Space and Environmental Medicine(77): 130-139. Hu, S., et al. (2020). "Acute radiation risk assessment and mitigation strategies in near future exploration spaceflights." Life Sci Space Res (Amst) 24: 25-33. Kennedy, A. R. (2014). "Biological Effects of Space Radiation and Development of Effective Countermeasures." Life Sci Space Res (Amst) 1: 10- 43. Till, J. E. and E. A. McCulloch (1961). "A Direct Measurement of the Radiation Sensitivity of Normal Mouse Bone Marrow Cells." Radiation Research 14: 213-222. Townsend, L. W., et al. (2018). "Solar particle event storm shelter requirements for missions beyond low Earth orbit." Life Sci Space Res (Amst) 17: 32-39. Usoskin, I. G. and G. A. Kovaltsov (2012). "Occurrence of Extreme Solar Particle Events: Assessment from Historical Proxy Data." The Astrophysical Journal 757(1). Vriesendorp, H. and D. Van Bekkum (1984). "Susceptibility to Total Body Irradiation." Waselenko, J. K., et al. (2004). "Medical Management of the Acute Radiation Syndrome: Recommendations of the Strategic National Stockpile Radiation Working Group." Annals of Infernal Medicine(140): 1037-1051.

Wilson, L. T. J. S. J. (1991). "Interplanetary Crew Exposure Estimates for the August 1972 and October 1989 Solar Particle Events." Radiation Research 126: 108-110. Xapsos, M. A., et al. (1999). "Probability Model for Worst Case Solar Proton Event Fluences." IEEE Transactions on Nuclear Science 46.

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

8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 12

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

8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 13

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

8/22/2023 6:53:39 PM ICL4_Acute Radiation Syndrome Cliff page: 14

---

## Source metadata

```yaml
source_filename: "acute-radiation-syndrome-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 119"
source_url: "https://drive.google.com/file/d/109w1_n80NktqehYfL0CZD-j5Uh2o3qFy/view"
source_drive_id: "109w1_n80NktqehYfL0CZD-j5Uh2o3qFy"
source_sha256: db95470265755ef844e15e8d0fd2e32f1809815a5f8227a9a89641bb35251da7
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
