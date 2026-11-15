---
source_filename: "pregnancy-risk-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Urogenital Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1GKedNaNlZNStUaUHmrD4Et6LvbQmWYYa/view"
source_drive_id: "1GKedNaNlZNStUaUHmrD4Et6LvbQmWYYa"
source_sha256: 801e23b3e0a71100dcbd4dda962496f2f8352d167894ccb89b1e8b9bcf3b570b
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
---

# pregnancy-risk-cliff-2023

[Original PDF](https://drive.google.com/file/d/1GKedNaNlZNStUaUHmrD4Et6LvbQmWYYa/view)

> Automatically extracted text. Check the original PDF for figures, scanned pages, tables, and equations.

Clinical Finding Form (CliFF)
Branch Baseline
ICL76_Pregnancy, Risk For
Pregnancy is currently an absolute contraindication for space travel. Not only is there a paucity of animal research evaluating the risks to both the
mother and the fetus in the space environment, but a pregnancy in space would have dramatic impacts on crew dynamics, medical risks, and mission
outcomes for the entire crew. While the risk of becoming pregnant can be optimally mitigated with perfect use of the various contraceptive options
and emergency contraception, even the best hormonal modalities and human intentions are imperfect. This CliFF specifically addresses the
possibility of intravaginal intercourse between a male and female that can lead to the risk of pregnancy. It does not comment on the risks to crew
dynamics or other risks of intercourse beyond the chance of pregnancy. This CLiFF is also unique in comparison to others in its definitions of treated
and untreated best- and worst-case scenarios as each of these four conditions may alter the risk of becoming pregnant. If pregnancy were to occur,
this is specifically addressed in CLiFF 123: Pregnancy.
INCIDENCE DATA INCLUDED IN THE MODEL
The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption
status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the
type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset
occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.
Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk
(proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical
history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions
are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of
occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are
included in the MEDPRAT Technical Description Document.
INCIDENCE DATA
SPACEFLIGHT LITERATURE
There is no spaceflight data evaluating the risk of pregnancy or incidence of intercourse. Review of internal data reveals that of the 126 total flights
involving females, that there were 6 post-menopausal female astronauts and 120 reproductive-aged astronauts. All males for long-duration
missions are presumed to be of reproductive age. The percentage of male or female astronauts who are infertile, have undergone a sterility
procedure, or are using contraceptive options has never been formally assessed.
ANALOG LITERATURE
Some of the closest analogs of spaceflight for this condition might include mixed crews at remote research stations such as in Antarctica or
deployed military populations. However, frequency of intercourse is not something that is scientifically tracked. The best surrogate for hypothesizing
this rate may be to determine the rate of unintended pregnancy amongst females and then back calculate the rate that a single episode of
intercourse can lead to pregnancy. While we do not have access to Antarctica station data, Grindlay has evaluated unintended pregnancy among
active-duty women in the military multiple times. The most representative sample within this analog is the officer population, thus in Grindlay 2013,
the rate of unintended pregnancy among officers was 0.02055 (95% CI: 1.389E-2, 2.923E-2), and in Grindlay 2015 it was 0.02774 (95%CI: 2.048E-
2, 3.679E-2). To be clear, this would mean that of officers in the military in a given 12-month period, 1 in 40 would have an unintended pregnancy.
Grindlay also evaluated whether the soldiers were on deployment during the period in which unintended pregnancy occurs which lowers the
incidence substantially as discussed below. While they had access and autonomy of using contraception during deployment, there is no mention of
whether emergency contraception was available and Grindlay manuscripts are calling for such access for this population. Lastly, while an incidence
rate cannot formally be calculated, Belmont 2010 independently evaluated disease and nonbattle injuries sustained by the US Army Brigade
Combat Team during Operation Iraqi Freedom and found that of women who were medically evacuated, 10.8% (35 out of 325) were evacuated for
pregnancy-related concerns, providing further evidence of pregnancy as a concern during deployment.
TERRESTRIAL LITERATURE
Building off the analog data above, Finer 2016 evaluated unintended pregnancy rates in the U.S. For those of reproductive age with a college
degree, the rate of unintended pregnancy is 0.025 (95%CI: 2.271E-2, 2.746E-2). This rate fits between the two incidence rates noted in the officer
population showing that this rate is consistent amongst analog and terrestrial data. Again, it is important to recall that this CLiFF is not directly
looking at unintended pregnancy rates. Rather, this CLiFF seeks to determine and model the actual risk for pregnancy following intercourse.
Robust data regarding frequency of intercourse is not available even in the terrestrial literature secondary to the range of methodological
inconsistencies, but terrestrial studies evaluating coital patterns and fecundability (probability of achieving pregnancy within a given menstrual
cycle) are available. Both Li et al 2016 and Colombo et al 2000 model the probability of pregnancy given an act of intercourse. They determined
that while the probability of pregnancy is altered by menstrual day (days 12-22 having the largest chance), that behavior is also altered by
menstrual day in that timing of intercourse and ovulation are not completely independent and that individuals are more likely to have intercourse
during the fertile window. The predicted probability of pregnancy given one act of intercourse averaged over a typical 28-day cycle is 0.0382 per
intercourse-day, meaning that on average it takes 26.2 acts of intercourse to achieve pregnancy. This fecundity data is also utilized to adjust our
risk for pregnancy model below.
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 1

OVERALL INCIDENCE SUMMARY
INCIDENCE
Mean 0.165 SD 0.01067
INCIDENCE SUMMARY
The adjusted Bayesian posterior distribution for the incidence rate of intercourse given all the relevant data under uninformative priors is Gamma
(shape=239.13, rate=1449.29) with mean 0.165 and SD 0.01067. The incidence rate was calculated by first taking the number of unintended
pregnancies in an analog population, adjusting it for officer rank and military deployment status, then utilizing fecundability data that guides the
percentage chance of pregnancy (0.0382) to further adjust the incidence of unintended pregnancy into the risk for pregnancy from an episode of
intercourse. This condition should only be applied in the presence of mixed-sex crews and reveals that per 12-month period there is a 16.5%
chance of intercourse per person. Reported one final way to avoid confusion: one act of intercourse with risk for pregnancy may occur every 6.06
years per person, or with a mixed crew of 2 males and 2 females, one act of intercourse would occur on average per 3-year mission.
TABLE 1. INCIDENCE MODEL
Incidence Details
Incidence Type
General
Segment
All
Env. Exposure
NA
Sex
Female
Crowns
Any
Contacts
Any
Pregnancy
No
Incidence Distribution
Occurrence Dist
Poisson
Incidence Dist.
Gamma
Mean
0.164998
SD
0.0106699
Gamma
(Shape): 239.13
(Rate): 1449.29
TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
Finer, 2016 Terrestrial 2
Grindlay, 2013 Analog 2
Grindlay, 2015 Analog 2
Belmont, 2010 Analog 1
Colombo, 2000 Terrestrial 2
Li, 2016 Terrestrial 2
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 2

The level of confidence in this incidence is limited by the number of adjustments needing to be made. As arriving at this final incidence required
multiple adjustments, we do not pretend to understand human intention, and we do not have a clear example of how the space environment can
affect fertility, our level of confidence in this final incidence calculation is neutral.
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 3

CREWMEMBER SELECTION/PREVENTION
DISQUALIFYING CONDITIONS
Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4
(2016).
PREFLIGHT PREVENTATIVE MEASURES
Astronauts are extensively counseled regarding contraceptive options pre-flight and have the autonomy to choose their form of contraceptive or
decide to not use contraception. Furthermore, a pregnancy test is completed within 10 days of flight. This does not completely exclude the
possibility of intercourse with a risk for pregnancy occurring during the 10-days before flight. While this risk is not directly factoring into our
modeling, the chance of this occurring likely remains consistent with our risk of intercourse modeling already.
BEST CASE SCENARIO DEFINITION
Vaginal intercourse involving a male and pre-menopausal female crewmember in which emergency contraception is used to prevent pregnancy. It is
also considered a Best Case scenario if a crewmember involved is using a long-acting reversible contraceptive (LARC) or undergone procedure for
permanent sterility.
WORSE CASE SCENARIO DEFINITION
Vaginal intercourse involving a male and pre-menopausal female crewmember who is not using a long-acting reversible contraceptive (LARC) or
has not undergone a procedure for permanent sterility AND emergency contraception was either not used or was not successful.
CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)
None.
BEST CASE/WORST CASE PROBABILITY COMMENTS
The rate of contraceptive usage has not been evaluated in the astronaut population even when used for non-contraceptive purposes during
spaceflight. It is informally known that a majority of female astronauts have utilized various methods in the past (predominantly oral contraceptive
pills; Steller 2020), however, there is novel concern that this rate may decrease given the most recent concern for thrombosis/VTE revealed by
Aunon-Chancellor et. al. 2020. In evaluating the above analog studies, 60.2% of US servicewomen did not report using a contraceptive modality,
and 39.8% did report using a contraceptive modality (Grindlay 2011). However, it is critical to understand that the formal IR that was arrived at is
looking at unintended pregnancy rates amongst the entire population and not amongst the 60% of the population who were not using
contraception. Thus, the incidence rate our analysis arrived at is already inclusive of a mixed population rather than adjusting for contraceptive
usage, and the BC and WC definitions do not include barrier contraceptive modalities or non-LARC methods (i.e. pills, patch, ring). This is because
while perfect use of contraception can approach 99% effectiveness in preventing pregnancy, typical use falls far short. In one study, patients who
were incentivized to maintain perfect compliance reached 83% compliance (Westhoff 2012). In female military personnel using oral contraceptives
during missions, <33% maintained perfect compliance (Powell-Dunford 2011, Trego 2010) suggesting that compliance in operational settings may
be compromised. Factors adversely affecting compliance during spaceflight may include circadian shifting, busy operational schedules, and mission
critical events. Given these limitations, while using barrier contraceptives or non-LARC methods at baseline would further decrease the risk of
pregnancy, they are not included in the BC definition for simplification. Fortunately, oral emergency contraceptive options can delay ovulation and
decrease the rate of pregnancy after intercourse. Among terrestrial patients who used emergency contraception following intercourse with
appropriate timing, pregnancy rates are 0-2% (ACOG 2015). Thus, irrespective of traditional contraceptive usage, 98% and 2% would be
reasonable choices to reflect the actual risk for pregnancy for the best-case and worst-case scenarios, respectively. However, of importance is that
decisions regarding intercourse, use of contraceptive modalities, and use of emergency contraception are of incredibly personal nature. As we
cannot guarantee usage of EC and the fact that once this condition occurs once it is highly likely to have greatly increased incidence and that EC
can become unavailable, a more practical BC/WC ratio may be 90%/10%.
TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
Steller, 2020 Spaceflight 2
Grindlay, 2011 Analog 2
Grindlay, 2013 Analog 2
Grindlay, 2015 Analog 2
Trego, 2010 Analog 2
Powell-Dunford, 2011 Analog 2
Westhoff, 2012 Terrestrial 2
ACOG, 2015 Terrestrial 3
While we do have data regarding the effectiveness at emergency contraception at delaying ovulation and thus decreasing the chance of
pregnancy, we don’t have data regarding its effectiveness, stability, and pharmacokinetic during spaceflight. Further, this proportion is limited by
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 4

astronaut privacy concerns in that emergency contraception may not be utilized by personal choice or by not alerting the CMO to the need for such
a medication.
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 5

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE
CP1: Diagnosis CP2: Treatment CP3: Condition End State
TI% Duration TI% Duration TI% RTDC LOCL
Composite Condition
Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%
Treated Best Mean 0.165 90 - 90 100 0.4996 0 0.00917 0.735 0 0 0 0 0
Case (TBC) SD 0.01067
Treated Worst 10 - 10 100 0.4996 2.97635 0.00917 0.735 0 0 100 0 0
Case (TWC)
Untreated Best N/A N/A N/A 0.4996 0 0.00917 0.735 0 0 0 0 0
Case (UTBC)
Untreated N/A N/A N/A 0.4996 6.7898 0.00917 0.735 7.97236 0 100 0 0
Worst Case
(UTWC)
TABLE 4 KEY
Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).
For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).
Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.
Clinical Phase General Comments:
TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary
to the medical condition.
Durations are defined in hours.
Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition
end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3)
potential for intractable pain.
Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.
Clinical Phase 1: Initial Assessment and Diagnosis:
Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected
crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is
considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not
applicable."
Clinical Phase 2: Stabilization, Treatment, and Convalescence:
The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember
to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or
recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and
maximum hours.
Clinical Phase 3: Condition End State:
Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight
environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical
condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will
be noted in the condition end state results.
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 6

SCENARIO OVERVIEW COMMENTS
This scenario is unique in comparison to other medical conditions in that it is not a true medical condition. This CLiFF is evaluating the risk of
pregnancy following intercourse with or without emergency contraceptive usage.
TREATED BEST CASE (TBC) SCENARIO COMMENTS
Many crewmembers may not choose to treat the best-case scenario depending on their individual assessment of their own risk for progression to
pregnancy. However, the risk is non-zero, especially if using a non-LARC, barrier contraceptive, or no contraceptive. If a crewmember does not
desire pregnancy, the TBC presumes that EC is used after intercourse to prevent pregnancy if they are not already using a LARC and are not
sterile and is successful in preventing pregnancy.
TREATED WORST CASE SCENARIO (TWC) COMMENTS
Some crewmembers may not wish to use EC depending on their individual assessment of their own risk for progression to pregnancy or their desire
for a pregnancy. The TWC presumes that intercourse occurs between a male and pre-menopausal non-sterile female who is not using a LARC and
EC is used however fails to prevent pregnancy.
UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS
The UTBC scenario is one in which emergency contraception is not used, however, pregnancy does not occur. They may have been sterile, using a
LARC, using a non-LARC modality, or used no preventative measures but did not get pregnant.
UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS
Untreated WC scenarios include the chance that EC is not used and pregnancy occurs.
TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
Waldinger, 2005 Terrestrial 2
Duration is largely irrelevant for this CLiFF. With that said, an international study found that the average duration of vaginal intromission to
completion is 5.4 minutes (range: 0.55-44.1 minutes). This duration would be the same for BC and WC scenarios. As it is unknown how the space
environment would affect duration, the LOC is neutral.
TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
N/A N/A 2
There is not data to guide RTDC following intercourse, however, RTDC would be zero in best case scenarios where pregnancy is unlikely to arise
and 100% in worst cases scenarios where EC fails to prevent pregnancy or is not used.
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 7

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
N/A N/A 2
There is not data to guide LOCL following intercourse, however, this would be presumed to be 0 as this is not a medical comorbidity. Actual
pregnancy which is beyond the scope of this CLiFF would carry a LOCL that is non-zero.
CAPABILITY RESOURCE TABLE (CRT) OVERVIEW
Overview Emergency contraception (EC) can be considered following contraceptive failure, reproductive coercion, or sexual assault to prevent
pregnancy and helps avert unintended pregnancy due to inconsistent use or non-use of contraceptive modalities. This is because sperm can
survive for up to six days after sex waiting to fertilize an egg if one is released. Morning-after pills work like an emergency brake by temporarily
stopping the ovaries from releasing an egg. However, they won’t work if ovulation has already occurred. Emergency contraception sometimes is
confused with medical abortion. Medical abortion is used to terminate an existing pregnancy, whereas emergency contraception is effective only
before a pregnancy is established (ACOG, 2015). For emergency contraception, efficacy can be defined in one of two ways: the first is the
proportion of women becoming pregnant after use of the method. The second is the number of pregnancies observed after treatment divided by
the estimated number of pregnancies that would occur without treatment. When this proportion is subtracted from one, the resulting statistic is the
“prevented fraction,” which represents the estimated percentage of cases averted by the treatment. Reported figures on the efficacy of emergency
contraception vary considerably and are imprecise. Pregnancy rates following use of these methods are 0-2%. Said another way they prevent 56-
94% of pregnancies that may have occurred (ACOG 2015). CNES: None Diagnostic Scope and Resourcing With the definitions as they stand, the
only resourcing required is a history and urine pregnancy test following an act of intercourse that is protected or unprotected (BC or WC scenario).
Serum bHCG or ultrasound are beyond the scope of this condition. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes
physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC
(Treated or Untreated): 0.5 CP1 WC (Treated or Untreated): 0.5 The duration involves obtaining a history, standard set up time and analysis of the
pregnancy test. It is the same for both BC and WC. Treatment Scope and Resourcing While not required of the BC scenario, emergency
contraception as described above would be recommended to prevent pregnancy after this condition occurred. Forms of EC to be considered
include ulipristal, levonorgestrel, or using any formulary of combined oral contraceptive pills in the Yuzpe fashion. Insertion of an IUD for EC is likely
beyond the scope of this CLiFF. Support Needs Ground-support is not needed for diagnosis, however, would be involved in any progression of
care if pregnancy was revealed. References Practice Bulletin No. 152: Emergency Contraception. Obstet Gynecol. 2015 Sep;126(3):e1-e11. doi:
10.1097/AOG.0000000000001047. PMID: 26287787.
IMM CLIFF RECONCILATION COMMENTS
No previous IMM.
LIMITATIONS SUMMARY
The data driving this CLiFF is severely limited. However, just because the limitations are great, does not mean that the condition can be ignored, as
the incidence will never be zero in the setting of mixed crews. Despite the limitations described throughout, the incidence of this scenario may be as
high or higher than most medical complications that may arise in space. As mentioned above, the incidence rate of intercourse during spaceflight or
in analog populations is not tracked. The rate or type of contraceptive use amongst astronauts is also not tracked and utilizing data from analog
population is further limited by access to care issues reported by military populations (Grindlay 2011). We do not have data evaluating the rate of
compliance with contraceptives among astronauts, though, we do have rates from analog and terrestrial populations. However, the barriers to
compliance between these populations are different making any conclusion limited. Relatedly, the BC and WC definitions are limited in that we
cannot stratify the risks based off the clinical scenario at hand. There is a spectrum of BC to WC that includes using no contraception, barrier
contraception, pills, patch, ring, subdermal implant, intrauterine device, +/- emergency contraception. Further, we do not know whether crews will be
mix-gendered, what their sexual orientation may be, what the crew dynamic would be, what their fertility status is, or what their ages are. Age is an
important factor that affects fertility as well as pregnancy risks, however, another limitation of the data above is that it is adjusted by the proportion
of pre-menopausal vs. post-menopausal astronauts who have flown historically. Not all pre-menopausal women are fertile, and thus the CLiFF
incidence is not engineered to adjust perfectly to age-matched fertility outcomes. Data regarding duration, RTDC, and LOCL are also limited as
described above.
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)
Clinical Phase 2: Treatment
Affected HSTCs
Inter-
|     | Cognitive - Cognitive - |     |     |     | Cardio- |     |     |     |     |     |
| --- | ----------------------- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |
Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU
Skills
Treated
| Best |     |     |     |     |     |     |     |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TBC)
Untreated
| Best |     |     |     |     |     |     |     |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTBC)
Treated
| Worst |     |     |     |     |     |     | 13  |     |     |     |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TWC)
Untreated
Worst
|     |     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTWC)
|     |     |     | Affected HSTCs (Continued) |     |     |     |     | TI Calculation |     | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
Total
Human
|     |     |     |     | Translation & |     |     | Total Tasks |     |     |     |
| --- | --- | --- | --- | ------------- | --- | --- | ----------- | --- | --- | --- |
Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %
|     | (Dom) |     | Extremity Standing (g) |                | Equipment | Ops |           | Category |     |     |
| --- | ----- | --- | ---------------------- | -------------- | --------- | --- | --------- | -------- | --- | --- |
|     |       |     |                        | (microgravity) |           |     | Condition |          |     |     |
Tasks Full
Mission
Treated
| Best |     |     |     |     |     |     | 0   | 3763 | 0   | 0   |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |
Case
(TBC)
Untreated
| Best |     |     |     |     |     |     | 0   | 3763 | 0   | 0   |
| ---- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- |
Case
(UTBC)
Treated
Worst
|     |     |     |     |     |     | 211 | 224 | 3763 | 0.059527 | 5.9527 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | -------- | ------ |
Case
(TWC)
Untreated
Worst
|     |     |     |     |     |     | 211 | 211 | 3763 | 0.0560723 | 5.60723 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | --------- | ------- |
Case
(UTWC)
Clinical Phase 3: Condition End State
Affected HSTCs
|     | Cognitive - Cognitive - |                | Inter-          |         | Cardio-   |           |     |     |     |     |
| --- | ----------------------- | -------------- | --------------- | ------- | --------- | --------- | --- | --- | --- | --- |
|     |                         | Communications | personal Vision | Hearing |           | Dentition | GI  | GU  |     |     |
|     | Simple Complex          |                |                 |         | pulmonary |           |     |     |     |     |
Skills
Treated
Best
|     |     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TBC)
Untreated
Best
|     |     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTBC)
Treated
Worst
|     |     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TWC)
Untreated
Worst
|     |     |     | 89  |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTWC)
|     |     |     | Affected HSTCs (Continued) |     |     |     |     | TI Calculation |     | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 9

Total
Human
|     | Translation & | Total Tasks |     |     |
| --- | ------------- | ----------- | --- | --- |
Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %
| (Dom) | Extremity Standing (g) | Equipment Ops | Category |     |
| ----- | ---------------------- | ------------- | -------- | --- |
(microgravity) Condition Tasks Full
Mission
Treated
Best
|     |     | 0   | 3763 0 | 0   |
| --- | --- | --- | ------ | --- |
Case
(TBC)
Untreated
Best
|     |     | 0   | 3763 0 | 0   |
| --- | --- | --- | ------ | --- |
Case
(UTBC)
Treated
Worst
|     |     | 0   | 3763 0 | 0   |
| --- | --- | --- | ------ | --- |
Case
(TWC)
Untreated
Worst
|     |     | 211 300 | 3763 0.0797236 | 7.97236 |
| --- | --- | ------- | -------------- | ------- |
Case
(UTWC)
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 10

TABLE 8 KEY
Human System Task Category (HSTC) Definitions: Cognitive-Simple: Tasks requiring simple cognitive involvement (low levels of attention, following
simple checklists, and not requiring extensive decision making) in conjunction with inputs from other systems. Cognitive-Complex: Tasks requiring
complex cognitive involvement (requiring constant attention, frequent interpretation of outside stimuli to inform real-time situations) in conjunction
with inputs from other systems. Communication: Tasks requiring primarily communication, via hearing and speaking. Interpersonal Skills: Tasks
requiring interpersonal, social interaction between crew including complex technical tasks that require extended crew interaction. Vision: Tasks in
which visual information is required. Hearing: Tasks in which primarily auditory information is required, excluding communication, e.g. hearing
alarms, medical auscultation, OOHAs. Cardiopulmonary: Tasks requiring greater-than-baseline cardiopulmonary effort, e.g. physically strenuous
activities. Dentition: Tasks requiring use of teeth for mastication. GI (Gastrointestinal): Tasks requring use of the alimentary sytem, e.g.
solids/liquids consumption and solids excretion. GU (Genitourinary): Tasks requiring use of the male/female genitourinary systems. Hand
(Dominant): Tasks performed using primarily the hand, requiring use of the dominant hand (piloting, medical procedures, dental procedures). Hand
(Any): Tasks performed using primarily the hand(s), with no preference for dominance, with equivalent bilateral effectiveness. Upper Extremity:
Tasks requiring specific use of the upper extremities, excluding hands. Lower Extremity: Tasks requiring specific use of the lower extremities
(excluding ambulation and standing in the presence of gravity), e.g. using exercise equipment. Ambulation and Standing (g): Tasks requiring use of
both lower extremities to accomplish ambulation or standing in the presence of gravity. Translation and Stabilization (microgravity): Tasks requiring
use of either the upper or lower extremities to accomplish translational movement and stabilization (securing oneself to remain stationary) in the
setting of microgravity. Don/Doff Equipment: Tasks requiring the donning of personal equipment (including pressure suit, exercise harness, EVA
equipment, etc). Pressure Ops: EVA/contingency tasks performed while pressurized in a suit.
Criteria for Assignment of Conditions to HSTCs (any of the following):
1) Is affected crew member physically incapable of performing the human system task category, without impairment, with the condition?
2) Would the treatment (e.g. medications) impair the crewmember's ability to perform the human system task category? (Does not apply to UTx)
3) Does the condition have a high likelihood of causing a significant aeromedical contraindication with an associated human system task category
4) Would performing tasks in an associated task category worsen the condition? (If so, it is affected).
5) Does pain associated with the condition impair any further human system categories?
TASK IMPAIRMENT COMMENTS
CP2: No comment. CP3: No comment.
EVIDENCE COLLECTION PROCESS
Mesh terms that most closely resembled the best-case and worst-case scenarios, and associated Conditions Included but Not Explicitly Stated
(CNES), were utilized to build incidence, duration, RTDC, and LOCL searches by best- and worst-case.
Incidence:
Databases searched for spaceflight and analog incidence data included: PubMed, Google Scholar, NASA Technical Reports Server (NTRS) public
search, Defense Technical Information Center (DTIC), and Barratt MR, Baker E, Pool SL. Principles of Clinical Medicine for Space Flight. New York,
NY: Springer; 2019. 2nd Edition. Databases searched for terrestrial incidence included: DynaMed, PubMed, and Google Scholar.
Duration, RTDC, LOCL:
Databases searched for duration, RTDC, and LOCL included: Dynamed, Cochrane, PubMed, and Google Scholar. Note, that if duration, RTDC, or
LOCL data was found in a DynaMed search, the other search engines were not included. Relevant articles were selected and reviewed. If
applicable, the article was included in the CLiFF.
LEVEL OF CONFIDENCE (LOC) SCORING
Articles obtained to update the evidence behind this CLiFF were scored by ExMC editors, based on their applicability to the Exploration Spaceflight
environment using the following grading scale:
4 – Confident
3 – Somewhat confident
2 – Neutral
1 – Somewhat unconfident
0 – Not confident
The following considerations factor into the grading scale above:
• How closely does the paper describe the medical condition as defined by the IMPACT 1.0 Condiltion List (relevance)?
• How closely does the population included resemble the astronaut population?
• Quality of the paper (number of subjects, methods, etc.)
• How much does the editor trust the source of the evidence?
• How closely does the editor think that the data represents the exploration spaceflight environment?
• Other considerations, at the discretion of the editor, supported in the comments for LOE scoring.
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 11

REFERENCES
Reference
Finer LB, Zolna MR. Declines in unintended pregnancy in the United States, 2008-2011. N Engl J Med. 2016; 374(9):843–852.
Grindlay K, Grossman D. Unintended pregnancy among active-duty women in the United States military, 2011. Contraception. 2015
Dec;92(6):589-95. doi: 10.1016/j.contraception.2015.07.015. Epub 2015 Sep 4. PMID: 26345183.
Holt K, Grindlay K, Taskier M, Grossman D. Unintended pregnancy and contraceptive use among women in the U.S. military: a systematic
literature review. Mil Med. 2011 Sep;176(9):1056-64. doi: 10.7205/milmed-d-11-00012. PMID: 21987966.
Li D, Wilcox AJ, Dunson DB. Benchmark pregnancy rates and the assessment of post-coital contraceptives: an update. Contraception.
2015;91(4):344-349. doi:10.1016/j.contraception.2015.01.002
Colombo B, Masarotto G. Daily fecundability: first results from a new data base. Demogr Res. 2000 Sep 6;3:[39] p.. PMID: 12178154.
Goyal V, Borrero S, Schwarz EB. Unintended pregnancy and contraception among active-duty servicewomen and veterans. Am J Obstet
Gynecol. 2012;206(6):463-469. doi:10.1016/j.ajog.2011.11.018
Grindlay K, Grossman D. Contraception access and use among U.S. servicewomen during deployment. Contraception. 2013 Feb;87(2):162-9.
doi: 10.1016/j.contraception.2012.09.019. Epub 2012 Oct 31. PMID: 23121821.
Auñón-Chancellor SM, Pattarini JM, Moll S, Sargsyan A. Venous Thrombosis during Spaceflight. N Engl J Med. 2020 Jan 2;382(1):89-90. doi:
10.1056/NEJMc1905875. PMID: 31893522.
Westhoff CL, Torgal AT, Mayeda ER, Shimoni N, Stanczyk FZ, Pike MC. Predictors of noncompliance in an oral contraceptive clinical trial.
Contraception. 2012 May;85(5):465-9. doi: 10.1016/j.contraception.2011.09.019. Epub 2011 Nov 12. PMID: 22079603.
Powell-Dunford NC, Cuda AS, Moore JL, Crago MS, Kelly AM, Deuster PA. Menstrual suppression for combat operations: advantages of oral
contraceptive pills. Womens Health Issues. 2011 Jan-Feb;21(1):86-91. doi: 10.1016/j.whi.2010.08.006. PMID: 21185993.
Trego LL, Jordan PJ. Military women's attitudes toward menstruation and menstrual suppression in relation to the deployed environment:
development and testing of the MWATMS-9 (short form). Womens Health Issues. 2010 Jul-Aug;20(4):287-93. doi: 10.1016/j.whi.2010.03.002.
PMID: 20627773.
Steller JG, Blue RS, Burns R, Bayuse TM, Antonsen EL, Jain V, Blackwell MM, Jennings RT. Gynecologic Risk Mitigation Considerations for
Long-Duration Spaceflight. Aerosp Med Hum Perform. 2020 Jul 1;91(7):543-564. doi: 10.3357/AMHP.5538.2020. PMID: 32591031.
Practice Bulletin No. 152: Emergency Contraception. Obstet Gynecol. 2015 Sep;126(3):e1-e11. doi: 10.1097/AOG.0000000000001047. PMID:
26287787.
Trussell J, Rodríguez G, Ellertson C. Updated estimates of the effectiveness of the Yuzpe regimen of emergency contraception. Contraception.
1999 Mar;59(3):147-51. doi: 10.1016/s0010-7824(99)00018-9. PMID: 10382076.
ACOG Practice Bulletin No. 112: Emergency contraception. Obstet Gynecol. 2010 May;115(5):1100-1109. doi:
10.1097/AOG.0b013e3181deff2a. PMID: 20410799.
ACRONYMS
ACRONYM PHRASE
AAOMS American Association of Oral and Maxillofacial Surgeons
AMA American Medical Association
ARCL All Remaining Conditions List
ARS Acute Radiation Sickness
BHP Behavioral Health and Performance
CAC Coronary Artery Calcium
CHS Crew Health and Safety
CL Condition List
CliFF Clinical Finding Form
CMO Crew Medical Officer
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 12

COMFORT Clinical Outcome Metrics for Optimization of Robust Training
CP1 Clinical Phase 1
CP2 Clinical Phase 2
CP3 Clinical Phase 3
CRL Clinical Resource Level
CRT Capability Resource Table
CST Clinical Science Team
DCS Decompression Syndrome
DRM Design Reference Mission
ED Emergency Medicine Doctor
EL Evidence Library
EMCL Exploration Medical Condition List
EMT Emergency Medical Technician
EVA Extravehicular Activity
EXMC Exploration Medical Capability
HRP Human Research Program
ICD International Classification of Disease
ICL 1.0 IMPACT 1.0 Medical Conditions List
ICU Intensive Care Unit
IMCL iMED Condition List
iMED Integrated Medical Evidence Database
IMM Integrated Medical Model
IMPACT-MD Impact Medical Database
IP Incidence Proportion
IR Incidence Rate
ISS International Space Station
IV Intravenous
JSC Johnson Space Center
LEO Low-Earth orbit
LEVA Lunar Extravehicular Activity
LOCL Loss of Crew Life
LOM Loss of Mission
LSAH Lifetime Surveillance of Astronaut Health
LSO Lunar Surface Operations
MCL Master Condition List
MEVA Medical Extravehicular Activity
NASA National Aeronautics and Space Administration
N/A Not Applicable
NP Nurse Practitioner
OBGYN Obstetrics and Gynecology
OR Occurrence Rate
PA Physician Assistant
PDQ Pain Disability Questionnaire
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 13

PFCL Proposed Future Conditions List
PPE Personal Protective Equipment
PTRS Project Technical Requirements Specification
PRL Pharmaceutical Resource Level
QTL Quality Time Lost
RCL Removed Conditions List
REP Rochester Epidemiology Study
RTDC Removal to Definitive Care
SANS Spaceflight-Associated Neuro-ocular Syndrome
SAS Space Adaptation Syndrome
SEVA Spaceflight Extravehicular Activity
SME Subject Matter Expert
SoP Standard Operating Procedure
SPE Solar Particle Event
TBD To Be Determined
TI Task Impairment
11/16/2023 3:00:10 PM ICL76_Pregnancy, Risk For Cliff page: 14
