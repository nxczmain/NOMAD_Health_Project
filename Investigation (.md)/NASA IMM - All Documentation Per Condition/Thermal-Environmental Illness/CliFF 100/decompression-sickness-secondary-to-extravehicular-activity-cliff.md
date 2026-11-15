# Decompression Sickness Secondary To Extravehicular Activity CLiFF

[View original PDF](https://drive.google.com/file/d/1yWrQinn62HsLVqX5MJ9hphSMv0oJyQBw/view) · **15 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Incidence Comments](#incidence-comments)

---

### Decompression Sickness Secondary to Extravehicular Activity Cliff

## Branch Baseline

Decompression Sickness (DCS) is caused by evolved gas bubbles which form when living tissues are subjected to reductions in environmental pressure. Such reductions in pressure can occur during decompression prior to EVA in space. Before decompression, nitrogen (N2) is dissolved in the body tissues and fluids at a partial pressure of the N2 in a normal human breathing mixture. Nitrogen supersaturation occurs in the tissues and fluids during decompression as the environmental pressure is reduced more rapidly than the tissue pressure of N2. When the magnitude and rate of environmental pressure reductions are sufficient, supersaturation with N2 can lead to the transition of N2 from the dissolved phase into the gas phase as gas emboli. Various clinical symptoms of altitude DCS are thought to result mainly from physical interactions of gas bubbles with tissues and fluids.

Size and location of these bubbles are thought to have a significant effect on the resulting DCS symptoms. Gas bubbles deform tissues and interact with nerve endings or block microcirculation. In addition, bubbles interacting with lung tissue may release various mediators resulting in systemic symptoms. The resulting symptoms include pain, sensory deprivation, skin manifestations, and respiratory distress. Risk of DCS increases with extended altitude exposure times, very high altitudes, and greater physical activity during the exposure. The risk decreases with preoxygenation, particularly when combined with exercise. (Conkin, 2004)

Disorders arising from changes in ambient pressure have been classified using various schemes. The subset of diseases caused by gas bubbles that evolve from gas dissolved within tissues is referred to as DCS. The syndrome that derives from aerospace operations is called hypobaric or altitude DCS. (Norfleet, 2008) (Brown, 1998) In space flight, the largest planned change in atmospheric pressure is associated with extravehicular activities (EVAs) where they wear pressurized suits. Selected space suit pressures represent a compromise between engineering concerns and, which dictate that the internal pressure of the space suit be low to maximize flexibility, and physiological risks. Crewmembers performing EVAs experience substantial shifts in ambient atmospheric pressure. (Norfleet, 2008) DCS manifestations are often diffuse, multifocal, and protean. The disease can persist and even progress after the bubbles have been resorbed.

Typically altitude (hypobaric) DCS is less severe than diving (hyperbaric) DCS. Symptom onset is expected to occur during the EVA. (Norfleet, 2008)

With current prebreathe protocols, the most likely symptom onset time is within the first two hours of the EVA. (Dervay, 2013)(Balldin, 2002) Thus DCS incidence associated with EVA is best represented as a function of the EVA event itself rather than including a time component and reporting DCS incidence secondary to EVA as a rate.

Traditionally, DCS symptoms have been classified as mild, Type I (pain), and serious, Type II (occurrence of neurological or cardiopulmonary symptoms). The most common DCS symptom is joint pain which is seen in 60-70% of all altitude DCS. 10-15% of DCS symptoms are neurologic manifestations; headache and visual disturbance being the most common symptoms. Less than 2% of DCS symptoms are lung manifestations (i.e. "the chokes"). Manifestations of symptoms involving the skin may be considered its own category and are present in about 10 to 15% of all DCS cases. (Brown, 1998) The Cuff Classification system is used as an operational tool for the International Space Station (Hamilton, 2001) for communication of DCS symptoms, decisions to terminate or abort an EVA, securing EVA worksite, and returning to ambient pressure. DCS acquired in space during EVAs is categorized in four “CUFF CLASSES” rather than Type I and Type II as is the convention used in DCS from diving and other causes. CUFF CLASS 1: Mild pain, at single or multiple sites or single extremity paresthesia. It may be difficult to distinguish from suit pressure points.

Symptoms do not interfere with performance.

CUFF CLASS 2: Moderate Cuff 1 symptoms that interfere with performance or symptoms that resolve upon repress.

CUFF CLASS 3: Severe Cuff 1 symptoms or migratory, truncal, or multiple site paresthesia, unusual headache.

CUFF CLASS 4: Serious symptoms - Central neurological (spotted vision, slurred speech, coordination difficulty, loss of sensation, headache, seizures, unconsciousness), cardiopulmonary (chest pain, cough, shortness of breath). (International Space Station Integrated Medical Group, 2008)

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document. 5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 1

## Incidence

- Data Category: Processed In-flight

- Space Adaptation: No

- Incidence Type: Proportion

## Distribution Data

- Incidence: Beta

- Occurrence: Binomial

### EVA Data Characteristics

- Events: 0

- Persons At Risk: 247

a_prior: 3.01 b_prior: 133.03 a_post (Events + a_prior): 3.01 b_post (Persons at Risk - Events + b_prior): 380.03

## Incidence Comments

The plan is to change the current incidence of DCS to account for the fact that there have been no documented cases of DCS; and to include terrestrial DCS studies and NASA DCS models.

A Bayesian methodology will be used.

Prior base information will use a mode of 1.5% (0.015) based on terrestrial studies using the U.S. pre-breathe protocol suited vacuum tests (Nikolaev, 1998) and a 95th percentile of 4.6% (0.046) based on NASA model predictions of DCS probability using a 4 hour in-suit prebreathe protocol (NASA, 2016). From that we can estimate a beta prior (a = 3.01, b = 133.03) (Christensen, 2011).

The posterior will be based on the empirical data of no documented cases of DCS on any U.S. EVAs including Apollo, MIR, Skylab, STS-1 through STS-114, and ISS Expedition 1 through Expedition13 (247 total EVAs) (Inflight Compilation Lockdown, 2008)(EVA Review Lockdown: 2011). The incidence data obtained from this Bayesian methodology data will be incorporated into the iMED for the DCS incidence using the iMED configuration process as noted below.

In order to accommodate additional information that will be passed to the IMM for the new “Processed In-flight” data type, the IMM will require code modifications. In particular, the modifications will include, but may not be limited to the MATLAB import scripts, and sections of code that calculate the condition incidence using iMED data.

This Bayesian methodology will result in a lower (less conservative) estimate for the incidence of DCS. 5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 2

### Information Regarding Prevention

In the altitude chamber medical standards (10,000 m exposure) category, appearance of subjective symptoms – pain, nausea, dizziness, dyspnea, weakness, visual darkening, itching, bends, or other subjective feelings of discomfort and decompression sickness, including skin manifestations, chokes or neurologic manifestations, visual disturbances (reduced visual acuity and visual fields) may require the individual to undergo further training to accomplish the training objectives, but are not of themselves disqualifying for ISS crewmember duties, unless they are determined to be due to a pathological condition on further medical testing. (International Space Station Program, 2009);(NASA, 2007)

Preventive measures used inflight Current preventive measures include pre-hydration, EVA pre-breathe protocols, and aspirin. Pre-breathe protocols must adequately reduce the amount of inert gas in astronauts’ blood and tissues to prevent DCS (also known as “the bends”) while minimizing the impact on crew efficiency. (Gernhardt, 2009) Four different prebreathe protocols may be used before performing an EVA in the U.S. Extravehicular Mobility Unit (EMU): exercise prebreathe using Cycle Ergometer with Vibration Isolation and Stabilization (CEVIS), the In-suit Light Exercise (ISLE) prebreathe, a four hour in-suit prebreathe, or a Campout prebreathe. The protocols all meet acceptable risk mitigation criteria of DCS. Many factors are considered in selecting a particular prebreathe protocol including: mission timeline, mission and operational constraints, and crew preference. However, no symptoms of DCS have been reported to date by astronauts who have performed EVAs in the EMU spacesuits following any of the four prebreathe protocols (Hamilton, 2001).

Contingency measure Bends Treatment Adapter (BTA) Installation (In-Suit) is available to provide hyperbaric oxygen therapy at 8 psi over ambient (~22.7 psia). (International Space Station EVA System, 2010)

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |
| ----------------------------------- | --------- | ------------ |
| Nikolaev, 1998 | 2 | Incidence |
| NASA, 2016 | 2 | Incidence |
| Christensen, 2011 | 2 | Incidence |
| Inflight Compilation Lockdown, 2008 | 1 | Incidence |
| EVA Review Lockdown: 2011 | 1 | Incidence |

5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 3

Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

- Data Category: Raw Data

- Space Adaptation: No

- Incidence Type: Proportion

## Distribution Data

- Incidence: Beta

- Occurrence: Binomial

### EVA Data Characteristics

- Events: 918

- Persons At Risk: 79366

- Space Flight Incidence Rate (Events / Persons at Risk): 918 / 79366 = 0.0115666658266764

## Incidence Comments

Throughout the history of manned space flight, astronauts and cosmonauts have performed over 300 EVAs (von Puttkamer, 2011). Only 14 of those EVAs have been conducted on the lunar surface in one-sixth gravity (Gernhardt, 2009). Although altitude decompression sickness (DCS) has been experienced by high altitude Air Force pilots and has occurred in ground-based experiments simulating decompression profiles of EVAs (Foster, 2009), no cases have been reported during actual EVAs throughout the history of space flight, among US astronauts (Gernhardt, 2009); (John-Baptiste, 2006); (Foster, 2009)or MIR (Katuntsev, 2004). Lacking EVA evidence, results from terrestrial analog studies using in- flight prebreathe protocols were selected to provide the maximum incidence value for the lMM (Conkin, 2001) (Conkin, 1996), and the mean incidence value was derived from evaluations accomplished by Nikolaev (Nikolaev, 1998).

Conkin’s Model, based on the Hypobaric Decompression Sickness Databank (HDSD), evaluated 258 tests containing information from 79,366 exposures in altitude chambers; from 1942 to 1994. Serious DCS was documented in 918 men during the tests. Serious DCS are signs and symptoms broadly classified as Type II DCS, incidence is 0.0011.The probability of serious DCS is: 0.0014 (0.00096 - 0.00196, 95% confidence interval) with exercise and 0.00025 (0.00016 -0.00035) without exercise. Given 100 Shuttle EVAs to date and no report of serious DCS, the true risk is less than 0.03 with 95% confidence (Binomial Theorem). It is problematic to estimate the risk of serious DCS since it appears infrequently, even if the estimate is based on thousands of altitude chamber exposures. The true risk to astronauts may lie between the extremes of the confidence intervals (0.00016 - 0.00196). (Conkin, 2001) (Hamilton, 2001)

Events considered were substernal disturbances (pulmonary chokes), involvement of the sensory, motor, and cognitive pathways of the brain and spinal cord, sudden collapse (neurocirculatory collapse), and unexplained weakness. Disturbances of the skin, such as rashes, mottling, paresthesia, and edema, which appeared as the only sign or symptom were not considered serious DCS in this analysis because there is no agreement on a classification of skin disturbances into either Type I or Type II DCS. Disturbances involving the skin were often placed into a separate category. Also, the approximately 20 cases of death in research and operational aviation settings since 1940 certainly qualify as more than serious DCS, and therefore are not included in this category. The mean, standard deviation, and range are from the 258 group-tests and not the 79,366 exposures from the tests. 5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 4

### Information Regarding Prevention

In the altitude chamber medical standards (10,000 m exposure) category, appearance of subjective symptoms – pain, nausea, dizziness, dyspnea, weakness, visual darkening, itching, bends, or other subjective feelings of discomfort and decompression sickness, including skin manifestations, chokes or neurologic manifestations, visual disturbances (reduced visual acuity and visual fields) may require the individual to undergo further training to accomplish the training objectives, but are not of themselves disqualifying for ISS crewmember duties, unless they are determined to be due to a pathological condition on further medical testing. (International Space Station Program, 2009);(NASA, 2007)

Preventive measures used inflight Current preventive measures include pre-hydration, EVA pre-breathe protocols, and aspirin. Pre-breathe protocols must adequately reduce the amount of inert gas in astronauts’ blood and tissues to prevent DCS (also known as “the bends”) while minimizing the impact on crew efficiency. (Gernhardt, 2009) Four different prebreathe protocols may be used before performing an EVA in the U.S. Extravehicular Mobility Unit (EMU): exercise prebreathe using Cycle Ergometer with Vibration Isolation and Stabilization (CEVIS), the In-suit Light Exercise (ISLE) prebreathe, a four hour in-suit prebreathe, or a Campout prebreathe. The protocols all meet acceptable risk mitigation criteria of DCS. Many factors are considered in selecting a particular prebreathe protocol including: mission timeline, mission and operational constraints, and crew preference. However, no symptoms of DCS have been reported to date by astronauts who have performed EVAs in the EMU spacesuits following any of the four prebreathe protocols (Hamilton, 2001).

Contingency measure Bends Treatment Adapter (BTA) Installation (In-Suit) is available to provide hyperbaric oxygen therapy at 8 psi over ambient (~22.7 psia). (International Space Station EVA System, 2010)

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Conkin, 1996 2 Incidence Nikolaev, 1998 2 Incidence Conkin, 2001 2 Incidence

### Alternative Incidence Data

According to Biomedical Results of Apollo the Command Module Pilot revealed in his account of the Apollo Program that he had experienced dysbarism (bends) on his first space flight (Gemini 10) as well as on his second space flight (Apollo 11). He experienced pain in his left knee during cabin pressure change from 14.7 to 5.0 psia. He described symptoms involving the left knee as a sharp, throbbing ache which gradually worsened and leveled off at a moderate, but very uncomfortable level of pain. The symptomatology was less painful on Apollo 11 than it had been on Gemini 10 (NASA, 1975). However, neither of these events was associated with extravehicular activity (EVA) and thus is not counted as part of the incidence information used for this medical condition, DCS associated with EVA.

For signs and symptoms broadly classified as Type II DCS, incidence is 0.0011 (1/936 based on Campout prebreathe protocol) (Conkin, 2001); (Conkin, 1996). It is problematic to estimate the risk of Type II DCS since it appears infrequently, even if the estimate is based on thousands of altitude chamber exposures [Conkin, 2001]. The true risk to astronauts may lie between the extremes of the confidence intervals (0.00016 - 0.00196) (Conkin, 2001); (Hamilton, 2001). Events considered were substernal disturbances (pulmonary chokes), involvement of the sensory, motor, and cognitive pathways of the brain and spinal cord, sudden cardiovascular collapse, and unexplained weakness or fatigue. Disturbances of the skin, such as rashes, mottling, paresthesia, and edema that appeared as the only sign or symptom were not considered Type II DCS in this analysis because there is no agreement on a classification of skin disturbances into either Type I or Type II DCS. Disturbances involving the skin were traditionally placed into a separate category. As a note, the approximately 20 cases of death in research and operational aviation settings that have occurred since 1940 are historically not included in the Type II DCS category.

Exercise during oxygen (O2) prebreathe accelerates nitrogen (N2) washout from the tissues. Exercise prebreathe can reduce the risk of DCS on depressurization to 4.3 psia (EMU suit pressure) when performed at the proper intensity and duration. Conkin (Conkin, 2004) developed a probability model with a variable half-time compartment to compute the decrease in tissue N2 pressure given specifics about exercise during the prebreathe. Due to the complexity of the tested prebreathe protocols, a multivariate statistical regression analysis was used. In all tests the goal was to only accept a prebreathe option that produced less than 15% Type I DCS at 95% upper confidence limit and less than 20% Grade IV Venous Gas Embolism (VGE), with no Type II DCS, preferably in a sample size of appropriate statistical power. Grade IV VGE is when bubble signals are detected continuously through the cardiac cycles such that the signal overrides the amplitude of the cardiac motion and blood flow 5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 5

signals. Older individuals are at greater risk of DCS and VGE. Study subjects were about 10 years younger than the average astronaut (Conkin, 2004). The following is from the JSC Procedural Requirement on Decompression Sickness (Johnson Space Center, 2013): "3.4 Crew Disposition a. Evaluation and disposition of a crewmember that has incurred a decompression-related medical event shall follow Appendix B. The following text expands on the medical evaluation and disposition for the various decompression-related disorders. (1) Mild Decompression Sickness (DCS) Type I (a) For aircraft, chamber operations, or immersion facilities, individuals encountering mild DCS where symptoms resolve upon descent to 1- atmosphere, after breathing 100 percent oxygen, or after appropriate hyperbaric chamber treatment, may be cleared to return to duties not involving ambient pressure change 24 hours following resolution of the symptoms. These individuals may be cleared by appropriate medical personnel to engage in various pressure change related activities 72 hours after resolution of the symptoms. (b) For space flight, individuals may return to ambient cabin pressure duties 24 hours after resolution of symptoms. If DCS symptoms resolve upon repressurization to cabin pressure, the crew members may return to pressure change related duties in 72 hours, otherwise 7 days after symptoms resolve. (2) Mild Decompression Sickness (DCS) Type I Repetitive (a) For aircraft, chamber operations, or immersion facilities, individuals encountering repetitive mild DCS where symptoms resolve upon descent to 1-atmosphere, after breathing 100 percent oxygen, or after appropriate hyperbaric chamber treatment, may be cleared to return to duties not involving expected ambient pressure change 24 hours following resolution of the symptoms. These individuals may be cleared to engage in pressure change activities on a case by case consideration by the AMB. (b) For space flight, individuals may return to ambient cabin pressure duties 24 hours after resolution of symptoms. Regarding return to reduced pressure exposure, all cases shall require consideration by the AMB. (3) Cutis Marmorata (CM), also described as Skin Marbling or Skin Mottling (a) For aircraft / chamber operations, individuals encountering CM where sign resolves upon descent to 1-atmosphere, after breathing 100 percent oxygen, or after appropriate hyperbaric chamber treatment, may be cleared to return to duties not involving expected ambient pressure change 24 hours following resolution of the sign. These individuals may be cleared to engage in variable pressure change activities on a case- by-case consideration by the AMB. (b) For space flight, individuals may return to cabin pressure duties 24 hours after resolution of sign. Regarding return to reduced pressure exposure, all cases shall require consideration by the AMB. (4) Serious Decompression Sickness (DCS) Type II (a) For aircraft, chamber operations, or immersion facilities, individuals encountering serious DCS may be cleared to return to 1-atmosphere related duties 48 hours following resolution of the symptoms. These individuals may be cleared to engage in variable pressure change activities on a case-by-case consideration by the AMB. (b) For space flight, individuals may return to ambient cabin pressure duties 48 hours after resolution of symptoms. Regarding return to reduced pressure exposure, all cases shall require consideration by the AMB. (5) Arterial Gas Embolism (a) For aircraft, chamber operations, immersion facilities, and space flight, return to duty and return to reduced pressure environments require review by the AMB. CHAPTER 4 MEDICAL CONSTRAINTS a. All medical data relating to a decompression disorder shall be kept confidential consistent with the Privacy Act. b. Disposition of any of the above conditions shall be made by a credentialed provider and/or Aerospace Medicine Board (AMB). c. Current definitions are clinically based and consistent with commercial and military diving and aviation policies. No administrative decision on flying duties shall be based only on doppler-detectable bubbles. d. All in-flight DCS events that do not resolve with available treatment options, as well as complicated Type II events, may be grounds for medical mission termination." There has been discussion in the past regarding changing the incidence calculation for DCS to be a rate (i.e. include all EVA time) versus a proportion with the number of EVAs. This question was brought up during the January 23, 2013 panel meeting with the DCS-EVA CliFF content review panel. The panel recommended against this given that the likelihood of an individual DCS typically peaks at 2-3 hours into the EVA, after which the likelihood starts decreasing due to breathing 100% O2. 5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 6

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 1 - 5 4 - 57 24 - 96 - 168 0 0 0 (best case scenario %: 98 - 100) ISS-based Treatment 100 3 - 6 28 - 81 48 - 108 - 168 0 - 81 2 - 5 0 - 2 (worst case scenario %: 0 - 2) Untreated Best Case 0 0 28 - 81 24 - 48 - 72 0 - 57 0 - 100 0 Untreated Worst Case 0 0 59 - 100 48 - 108 - 168 59 - 100 100 0 - 100 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 7

### Scenario Comments

Definition and Probability of Best and Worst Case Scenario:(includes definitions of best and worst case scenarios and identifies the probability of those scenarios.) Best case definition is Type I DCS with mild to moderate joint pain that resolves spontaneously or with treatment.

Worst case is defined as Type II DCS with severe joint pain and/or symptoms including central neurological, e.g. spotted vision, slurred speech, coordination difficulty, loss of sensation, headache, seizures, unconsciousness, and cardiopulmonary (chest pain, cough, shortness of breath). Worst and best case percentages Best Case = 98-100% Worst Case = 0-2%

- Rationale: Maximum probability of Type II DCS (worst case) = 1/936 (0.0011) probability based on Campout prebreathe protocol (Conkin,

2001). Maximum total DCS probability = 0.0471 based on in-suit and Campout prebreathe protocols. The worst case percentage is estimated as a maximum of 0.0011/0.0471 (2%) based on this data (Conkin, 2001); (Conkin, 1996). Since there have been no Type II DCS cases in-flight to date, the minimum worst case percentage is considered to be zero. Therefore, the worst case percentage is estimated as 0-2% and the best case percentage is estimated as 98-100%.

- Best case scenario: (includes explanation of (1) how the FI in all 3 Clinical Phases was derived, (2) the duration in Clinical Phases I & II, and

(3) the mission end states and their percentages.)

DCS calculation of FI follows the IMM severe non-space adaptation template (IMM FI Guidelines, 2010).Complex Regional Pain Syndrome-Upper Extremity [CRPS (UEI)] is based on Table 15-26, p 454 (American Medical Association, 2008). The CRPS (UEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 15-1, p 385 (American Medical Association, 2008). Complex Regional Pain Syndrome-Lower Extremity [CRPS (LEI)] is based on Table 16-15, p.541 (American Medical Association, 2008). The CRPS (LEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 (American Medical Association, 2008).

Pulmonary dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008). Consciousness and Awareness ratings are based on table 13-4, p. 327 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp. 604-606 (American Medical Association, 2008). For detailed description of ratings and FI calculation refer to the CliFF Appendix.

### Best Case Comments

Decompression Sickness functional impairments (FI) calculation follows the IMM severe non-space adaptation template. (IMM FI Guidelines, 2010) Complex Regional Pain Syndrome-Upper Extremity [CRPS (UEI)] is based on Table 15-26, p 454 . The CRPS (UEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 15-1, p 385. Complex Regional Pain Syndrome-Lower Extremity [CRPS (LEI)] is based on Table 16-15, p.541. The CRPS (LEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495. Pulmonary dysfunction ratings are based on Table 5-4, p.88. Consciousness and Awareness ratings are based on table 13-4, p. 327. Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp. 604-606 (American Medical Association, 2008). For detailed description of ratings and FI calculation refer to the CliFF Appendix. In Clinical Phase I, by definition FI is estimated at 100%. Time to follow ISS procedures for Cuff Class 2 and EVA DCS Treatment protocol (Hamilton, 2001)including treatment in-suit first then aftercare of oral fluids, DCS evaluation, and oxygen administration for two hours, extensions for 20 to 190 minutes, adds to the estimated range of one to five hours.

During Clinical Phase II, FI is estimated to be 4-57%. Duration is estimated at 24 to 168 hours with a most likely duration of 72 hours, based on Subject Matter Expert opinion of NASA scientists and Flight Surgeons as part of JSC Policy Directive on DCS (Johnson Space Center, 2008).

There is a mandatory recovery time of 24 hours before return to duty in the treatment protocol for DCS and a 72 hour medical check in the aftercare protocol for DCS (Hamilton, 2001).

- Clinical Phase III: Full recovery is expected in this scenario and FI is estimated to be 0%. Therefore, EVAC and LOCL are not expected.

5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 8

### Worst Case Comments

Decompression Sickness functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Complex Regional Pain Syndrome-Upper Extremity CRPS (UEI) is based on Table 15-26, p 454 (American Medical Association, 2008). The CRPS (UEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 15-1, p 385 (American Medical Association, 2008).

Complex Regional Pain Syndrome-Lower Extremity is based on Table 16-15, p.541 (American Medical Association, 2008). The CRPS (LEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 (American Medical Association, 2008). Pulmonary dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008). Consciousness and Awareness ratings are based on table 13-4, p. 327 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For detailed description of ratings and FI calculation refer to the CliFF Appendix.

In Clinical Phase I, by definition FI is estimated at 100%. Time to follow ISS procedures for serious DCS, Cuff 3-4, including intravenous fluids, DCS evaluation, oxygen administration usiing the BTA for 2 hours, with extensions for 20 to 190 minutes, and advanced cardiac life support if necessary, adds up to our estimated range of 3 to 6 hours. (Mission Operations Directorate Operations Division, 2012)

During Clinical Phase II, FI is estimated to be 28-81%. Duration of 48 to 168 hours, 2 to 7 days, is based on mandatory recovery time before return to duty and a minimum 7 days to return to EVAs (Hamilton, 2001).

- Clinical Phase III: Recovery may or may not occur in this scenario and FI is estimated to be 0 to 81%.

The probability of EVAC is estimated as 2% to 5%. This estimate is based on a 95% to 98% overall success rate in the treatment of DCS from 1941 through 1999 in the United States Air Force (USAF). Therefore, 2% to 5% of DCS cases were unable to be treated successfully (Butler, 2000). The probability of LOCL is estimated as 0-2% based on 17 fatalities among 743 serious altitude DCS cases (2%) in the USAF. The probability of death secondary to DCS occurring during an ISS mission is therefore considered to be no higher than 2% (Butler, 2000).

### Untreated Best Case Comments

DCS calculation of FI follows the IMM severe non-space adaptation template (IMM FI Guidelines, 2010). Complex Regional Pain Syndrome- Upper Extremity CRPS (UEI) is based on Table 15-26, p 454 (American Medical Association, 2008). The CRPS (UEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 15-1, p 385 (American Medical Association, 2008). Complex Regional Pain Syndrome-Lower Extremity is based on Table 16-15, p.541 (American Medical Association, 2008). The CRPS (LEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 (American Medical Association, 2008).

Pulmonary dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008). Consciousness and Awareness ratings are based on table 13-4, p. 327 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp. 604-606 (American Medical Association, 2008). For detailed description of ratings and FI calculation refer to the CliFF Appendix.

During Clinical Phase II, FI is estimated to be 28-81%. Duration is estimated at 24 to 72 hours, similar to the treated best case scenario.

- During Clinical Phase III: Recovery may or may not occur without treatment. FI is estimated at 0 to 57%. EVAC may be required if symptoms do

not resolve (Hamilton, 2001). Range is estimated as 0 to 100% to account for uncertainty in recovery without treatment. LOCL is not expected in this scenario since Type I DCS is not associated with fatality.

### Untreated Worst Case Comments

DCS calculation of FI follows the IMM severe non-space adaptation template (IMM FI Guidelines, 2010). Complex Regional Pain Syndrome- Upper Extremity CRPS (UEI) is based on Table 15-26, p 454 (American Medical Association, 2008). The CRPS (UEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 15-1, p 385 (American Medical Association, 2008). Complex Regional Pain Syndrome-Lower Extremity is based on Table 16-15, p.541 (American Medical Association, 2008). The CRPS (LEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 (American Medical Association, 2008).

Pulmonary dysfunction ratings are based on Table 5-4, p.88 (American Medical Association, 2008). Consciousness and Awareness ratings are based on table 13-4, p. 327 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp. 604-606 (American Medical Association, 2008). For detailed description of ratings and FI calculation refer to the CliFF Appendix.

During Clinical Phase II, FI is estimated to be 59-100%. Duration is estimated at 48 to168 hours, similar to the treated worst case scenario.

During Clinical Phase III, outcomes will not be positive without treatment. FI remains 59 to 100%. EVAC is estimated as 100% based on the need to treat all cases of Type II DCS (Hamilton, 2001). LOCL is estimated as 0 to 100% to account for the uncertainty in the outcome of untreated Type II DCS cases. 5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 9

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |
| ---------------------------------- | --------- | ------------ |
| American Medical Association, 2008 | 3 | FI |
| American Medical Association, 2008 | 3 | FI |
| American Medical Association, 2008 | 3 | FI |
| American Medical Association, 2008 | 3 | FI |
| American Medical Association, 2008 | 3 | FI |
| Hamilton, 2001 | 2 | EVAC |
| Conkin, 2001 | 2 | BCWC |

5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 10

### Additional Comments

PubMed was searched using the key terms Decompression sickness (DCS) & aerospace, DCS & astronauts, DCS & space medicine, DCS & microgravity. References were sorted by relevance and date. A search was conducted in the NASA website for technical reports and in-flight information. The DCS Treatment Protocol (Hamilton, 2001), created by the Medical Operations EVA Integrated Product Team, is not currently listed in the master source Level of Evidence (LOE) Table. Based on our IMM Approach to LOE (IMM LOE, 2011), if a reference source is not included in the IMM master source LOE table, the closest matching reference source is selected for assigning the level of evidence. In this case, the closest match for DCS Treatment Protocol is the ISS Medical checklist; therefore LOE 2 was assigned to DCS Treatment Protocol. 5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 11

The Resource Table (RT) Units

|  | Units Units | Available |  |
| -------- | ----------------- | ------------------ | ------------------- |
|  | Required Required | At Start |  |
|  | Best Worst | Of |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |

Aspirin 325mg tab. 1 1 60 Yes Yes To impede DCS induced platelet aggregation Blood Oximeter 1 1 1 No Yes Monitors the oxygen saturation of a patient's blood Blood Pressure Cuff (regular, 0 1 2 No Yes Measure blood pressure large)

| Blood Pressure Monitor | 0 1 | 1 No | Yes Measure blood pressure |
| ------------------------- | --- | ------ | ---------------------------------------- |
| BZK wipes | 0 2 | 60 Yes | No Cleanse skin. |
| CMRS | 0 1 | 1 No | No Restrain crew member to ensure safety |
| DCS Examination Scorecard | 1 1 | 1 No | No Diagnostic Aid |

Disposable Otoscope Specula 2 2 90 Yes No For use with otoscope for exams (regular, small) ECG Monitor (Device, USB 0 1 1 No Yes Measure and monitor ECG Charge Cable, Lead Set Cable,

### Cue Card)

Gauze pads (4x4) 0 2 50 Yes No To absorb blood or fluids from skin IV administration set 0 1 3 Yes Yes Tubing for administration of IV fluids

| IV Cap | 0 1 | 5 Yes | No IV administration |
| ------ | --- | ----- | -------------------- |

IV Catheter (18G, 20G, or 22G) 0 1 14 Yes Yes IV fluid administration

| IV Fluid 1L (1000mL) | 0 4 | 5 Yes | Yes To replenish fluids |
| -------------------- | --- | ----- | ----------------------------- |
| IV Fluid Air Filter | 0 1 | 3 Yes | No To filter air from IV line |

IV pressure infuser 0 1 1 No No Pressure bag to push fluids in microgravity.

Medical tape 0 0.06 5 Yes No Single-coated pressure adhesive tape Nitrile gloves (large, medium, 0 1 30 Yes No Personal Protective equipment for CMO and small) (pair) Otoscope (Head, Handle, and 1 1 1 No Yes Light source for nasal, oral, aural, and eye

| USB cable) |  |  | exams. |
| ---------- | --- | --- | ------ |

Pack of 12 ECG electrodes 0 1 5 Yes Yes Measure and monitor ECG Sharps container 0 1 40 No No To dispose of medical waste such as used medical needles, scalpels, IV catheters, razors, vials Stethoscope 1 1 2 No Yes To listen to lung,heart, bowel sounds, and blood flow in arteries and veins

| Syringe (10cc) | 0 1 | 6 Yes | Yes To inflate respirator mask |
| -------------- | --- | ----- | ------------------------------ |

Syringe (3cc) 0 3 20 Yes Yes To flush IV catheter, as necessary 5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 12

Units

|  | Units Units | Available |  |  |  |
| ----------- | ----------------- | --------- | -------------------- | ---------------------- | --- |
|  | Required Required | At Start |  |  |  |
|  | Best Worst | Of |  |  |  |
| Resource | Case Case | Mission | Consumable Essential | Rationale |  |
| Thermometer | 1 1 | 1 | No No | To measure temperature |  |

Tongue depressor 1 1 20 Yes No To examine throat as necessary Tourniquet 0 1 1 No No To stop blood flow and engorge vein, this facilitates IV insertion Variable Oxygen System 0 1 1 No Yes Administration of oxygen.

| Water | 1 0 | 1 | No No | Oral hydration |  |
| ----- | --- | --- | ----- | -------------- | --- |

### Resource Comments

Aspirin was added to the resource table as recommended for post-symptomatic care for DCS to impede DCS induced platelet aggregation. Pain resolved in Type I DCS by repressurization. The DCS Examination Scorecard is a diagnostic aid to grade and communicate symptoms of a suited EVA crewmember immediately post EVA and to follow symptom progress. It has been refined and validated on the ground and in-flight.

Resources to treat hypovolemic shock or cerebral vascular insult secondary to DCS are included in the Hypovolemic Shock and Stroke CliFFs respectively as described in the DCS Treatment Protocol (Hamilton, 2001).

Comparison of ISS and EVA Treatment with terrestrial guidelines: Several hyperbaric protocols exists, such as Air Force (Butler, 2002), and the Undersea and Hyperbaric Medical Society (UHMS Undersea and Hyperbaric Medical Society, 2002). The treatment of serious cases may require hyperbaric oxygen (HBO) in a chamber, which is not available in space. ISS (Mission Operations Directorate (MOD), 2011) and EVA recommendations (Hamilton, 2001) are based on limited repressurization available in-suit and rehydration orally or intravenously.

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value |  | LOE Category |  |
| ----------------------------------------------- | --- | --------- | --- | ------------ | --- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 |  | Resources |  |
| Hamilton, 2001 |  | 2 |  | Resources |  |

### Level Of Evidence

| Input Data | LOE Average |  | Description |  | Range |
| ---------------------- | ----------- | --- | ----------- | --- | ----- |
| Incidence | 1.6 |  | Excellent |  | 1-2 |
| Functional Impairment | 3 |  | Good |  | 2.1-3 |
| Best Case / Worst Case | 2 |  | Fair |  | 3.1-4 |
| EVAC / LOCL | 2 |  | Poor |  | 4.1-5 |
| Resources | 2 |  |  |  |  |
| QUALITY OF EVIDENCE | 2.12 |  |  |  |  |

5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 13

### Reference List

Reference American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. American Medical Association. Upper Extremities. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 383-492.

American Medical Association. Pulmonary System. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed.

- Chicago: American Medical Association Press; 2008. p. 77-99.

American Medical Association. Central and Peripheral Nervous System. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 321-45.

American Medical Association. Lower Extremities. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 493-556.

Balldin UI, Pilmanis AA, Webb JT. The effect of simulated weightlessness on hypobaric decompression sickness. Aviat Space Environ Med 2002 Aug;73(8):773-8. Brown JR, Antunano J. Altitude Decompression Sickness: Tiny Bubbles, Big Troubles. AVWeb . 1-29-1998. Aviation Publishing Group; Federal Aviation Administration Civil Aerospace Medical Institute.

Butler WP, Wolf EG. USAF Experience with Hyperbaric Therapy of Altitude Decompression Sickness 1941-1999. USAF; 2000 Oct 16.

Butler WP, Topper SM, Dart TS. USAF treatment table 8: treatment for altitude decompression sickness. Aviat Space Environ Med 2002 Jan;73(1):46-9. Christensen R, Johnson W, Branscum A, Hanson T. Bayesian Ideas and Data Analysis: An Introduction for Scientist and Statisticians. CRC Press; 2011. Conkin J, Kumar KV, Powell MR, Foster PP, Waligora JM. A probabilistic model of hypobaric decompression sickness based on 66 chamber tests. Aviat Space Environ Med 1996 Feb;67(2):176-83.

Conkin J. Evidence-Based Approach to the Analysis of Serious Decompression Sickness With Application to EVA Astronauts. Houston: NASA; 2001 Jan 1. Report No.: TP-2001-210196.

Conkin J. A Probability Model of Decompression Sickness AT 4.3 PSIA After Exercise Prebreath. 2004 Dec 10. Report No.: TP-2004-213158.

Dervay JP. Interview with Dr. Joseph P. Dervay as a participating Subject Matter Expert on an external review panel for the IMM DCS-EVA CliFF. 1-23-2013. EVA Review Lockdown. EVA Compilation. Wyle, editor. 2011.

Foster PP, Butler BD. Decompression to altitude: assumptions, experimental evidence, and future directions. J Appl Physiol 2009 Feb;106(2):678-90. Gernhardt M, Jones JA, Scheuring RA, Abercromby AF, Tuxhorn JA, Norcross JR. Exercise and Extravehicular activity:Risk of Compromised EVA Performance and Crew Health Due to Inadequate EVA Suit Systems. In: McPhee JC, Charles JB, editors. Human Health and Performance , Risks of Space Exploration Missions.Houston: National Aeronautics and Space Administration; 2009. p. 333-58.

Hamilton D, Arenare B, Beck G, Dervay J, Gernhardt M. Decompression Sickness in Spaceflight Likelihood, Prevention and Treatment.

- Houston: NASA; 2001 Feb 21.

IMM FI Guidelines. IMM Functional Impairment Guidelines for the Clinical Findings Form (CliFFs). 12-31-2010.

IMM LOE. Integrated Medical Model Approach to Levels of Evidence Document. Sharepoint 2011 December 8 Inflight Compilation Lockdown. In-flight medical events for Apollo, MIR, ISS, Skylab, and STS. 7-10-2008. Houston, Texas, NASA, Johnson Space Center. International Space Station EVA System. Bends Treatment Adapter Installation (In-Suit). 5-10-2010. Houston, NASA.

International Space Station Integrated Medical Group. Medical Checklist ISS- All Expeditions. Houston: National Aeronautics and Space Administration; 2008. International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011. 5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 14

Reference John-Baptiste A, Cook T, Straus S, Naglie G, Gray G, Tomlinson G, et al. Decision analysis in aerospace medicine: costs and benefits of a hyperbaric facility in space. Aviat Space Environ Med 2006 Apr;77(4):434-42.

Johnson Space Center. Johnson Space Center Policy Directive 1800.2B. Decompression Sickness. 5-16-2008.

Johnson Space Center. JPR1800.3C; Decompression Sickness Manual. 2013. NASA. 1-10-2014.

Johnston R, Dietlein L, Berry CA. Biomedical Results of Apollo. NASA SP-2006-368 ed. Washington D.C.: NASA; 1975.

Katuntsev VP, Osipov YY, Barer AS, Gnoevaya NK, Tarasenkov GG. The main results of EVA medical support on the Mir Space Station. Acta Astronaut 2004 Apr;54(8):577-83. Mission Operations Directorate Operations Division. International Space Station Integrated Medical Group Medical Checklist. 11-14-2013.

NASA. 10-2-2013. NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

NASA OCHMO 80771201MED. NASA Crewmembers Medical Standards. Houston: NASA; 2007.

NASA. Human Research Program Evidence Report: Risk of Decompression Sickness (DCS). 2016 Jun 9.

Nikolaev VP. Evaluation of safety of hypobaric decompressions and EVA from positions of probabilistic theory. Acta Astronaut 1998 Jan;42(1- 8):139-58. Norfleet W. Decompression-Related Disorders: Decompression Sickness, Arterial Gas Embolism, and Ebullism Syndrome. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 223-46.

UHMS Undersea and Hyperbaric Medical Society. Adjunctive Therapy for Decompression Illness Undersea and Hyperbaric Medical Society Guidelines. MD: UHMS; 2002 Dec. von Puttkamer J. Extravehicular Activities (EVA) Statistics. Keeter B, editor. 8-24-2011. NASA. 10-2-2013. 5/11/2020 5:04:39 PM Decompression Sickness Secondary to Extravehicular Activity Cliff page: 15

---

## Source metadata

```yaml
source_filename: "decompression-sickness-secondary-to-extravehicular-activity-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Thermal-Environmental Illness/CliFF 100"
source_url: "https://drive.google.com/file/d/1yWrQinn62HsLVqX5MJ9hphSMv0oJyQBw/view"
source_drive_id: "1yWrQinn62HsLVqX5MJ9hphSMv0oJyQBw"
source_sha256: 3ceb51997dee2f7c4dd3e07492a031756b7e77956709518e40c4b78b9a264bdc
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 15
ocr_performed: false
```
