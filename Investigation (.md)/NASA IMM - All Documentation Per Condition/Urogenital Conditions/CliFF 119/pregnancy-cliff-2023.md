---
source_filename: "pregnancy-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Urogenital Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/1xr5JujhN5ZWirnoqRqn3Kb3Knn9F0fg6/view"
source_drive_id: "1xr5JujhN5ZWirnoqRqn3Kb3Knn9F0fg6"
source_sha256: 5c48da67e5d5a4a529a6086a90fd978d373f660440239ab6e546972902a55668
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
---

# pregnancy-cliff-2023

[Original PDF](https://drive.google.com/file/d/1xr5JujhN5ZWirnoqRqn3Kb3Knn9F0fg6/view)

> Automatically extracted text. Check the original PDF for figures, scanned pages, tables, and equations.

Clinical Finding Form (CliFF)
Branch Baseline
ICL123_Pregnancy
Pregnancy is currently an absolute contraindication for space travel. Not only is there a paucity of animal research evaluating the risks to both the
mother and the fetus in the space environment, but a pregnancy in space would have dramatic impacts on the crew dynamics, medical risks, and
mission outcomes for the entire crew. While the risk of becoming pregnant can be optimally mitigated with perfect use of contraceptive modalities and
emergency contraception, even the best hormonal modalities and human intentions are imperfect. While CLiFF 76 covers the risk of pregnancy
following success or failure of emergency contraception, this CLiFF pertains to first trimester pregnancy. Terrestrially, while 98-99% of pregnancies
are intrauterine, 1-2% are extrauterine (ectopic) pregnancies. Miscarriage occurs in 8-15% of clinically recognized pregnancies and possibly upwards
of ~30% of all pregnancies, however, there is a severe paucity of data on such outcomes during spaceflight as a human pregnancy has never been
reported in space. This CLiFF presumes a viable intrauterine pregnancy, a miscarriage, or an ectopic pregnancy in the first trimester. Risks of
pregnancy outside of the first trimester are beyond the scope of this CLiFF and may be part of a future effort for long-duration spaceflight.
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
There is no spaceflight data evaluating the risk of pregnancy. Review of internal data reveals that of the 126 total flights involving females, that
there were 6 post-menopausal female astronauts and 120 reproductive-aged astronauts. All males for long-duration missions are presumed to be
of reproductive age. The percentage of male or female astronauts who are infertile, have undergone a sterility procedure, or are using
contraceptive options has never been formally assessed.
ANALOG LITERATURE
Some of the closest analogs of spaceflight for this condition might include mixed crews at remote research stations such as in Antarctica or
deployed military populations. While we do not have access to Antarctic station data, Grindlay has evaluated unintended pregnancy among active-
duty women in the military multiple times. The most representative sample within this analog is the officer population. In Grindlay 2013, the rate of
unintended pregnancy among officers was 0.02055 (95% CI: 1.389E-2, 2.923E-2), and in Grindlay 2015 it was 0.02774 (95%CI: 2.048E-2, 3.679E-
2). To be clear, this would mean that of female officers in the military during a given 12-month period, 1 in 40 would have an unintended pregnancy.
Grindlay also evaluated whether the soldiers were on deployment during the period in which unintended pregnancy occurs which can also be used
to adjust our modeling and lowers the incidence substantially as discussed below. While US servicewomen had access and autonomy of using
contraception during deployment, there is no mention of whether emergency contraception was available and Grindlay’s manuscripts call for access
to EC for this population. Lastly, while an incidence rate cannot formally be calculated, Belmont 2010 independently evaluated disease and
nonbattle injuries sustained by the US Army Brigade Combat Team during Operation Iraqi Freedom and found that of women who were medically
evacuated, that 10.8% (35 out of 325) were evacuated for pregnancy-related concerns, providing further evidence of pregnancy as a concern
during deployment. Unfortunately, it is not known what percent of unintended pregnancies were ectopic pregnancies, miscarriages, or viable
intrauterine pregnancies in this analog population.
TERRESTRIAL LITERATURE
Finer 2016 evaluated unintended pregnancy rates in the U.S. For those of reproductive age with a college degree, the rate of unintended
pregnancy is 0.025 (95%CI: 2.271E-2, 2.746E-2) which is consistent with the rates in the analog population above. While only case reports of
ectopic pregnancy in analog populations exist, from terrestrial populations we understand that ectopic pregnancy accounts for ~2% of all
recognized pregnancies with an annual incidence of 0.0064 in reproductive-aged women 15-44. In the subset of women 35-44, the incidence is
0.0099 (Marion 2012). Early pregnancy loss occurs in 10% of all clinically recognized pregnancies (ACOG, 2015).
OVERALL INCIDENCE SUMMARY
8/22/2023 4:38:02 PM ICL123_Pregnancy Cliff page: 1

INCIDENCE
Mean 0.005955 SD 4.08E-4
INCIDENCE SUMMARY
The adjusted Bayesian posterior distribution for the incidence rate of unintended pregnancy given all the relevant data under uninformative priors
is Gamma (shape=212.927, rate=35755.97) with mean 0.005955 and SD 4.081E-4 per female person year. The incidence rate of unintended
pregnancies is taken from terrestrial women with college degrees and officers in the military, adjusted for deployment status, and further adjusted
for the rate of pre-menopausal astronauts who have historically flown. This condition should only be applied in the presence of mixed-sex crews.
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
0.00595501
SD
0.0004081
Gamma
(Shape): 212.927
(Rate): 35756
TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
Finer, 2016 Terrestrial 2
Grindlay, 2013 Analog 2
Grindlay, 2015 Analog 2
Belmont, 2010 Analog 1
Marion, 2012 Terrestrial 2
ACOG, 2015 Terrestrial 2
Given that all data is taken from terrestrial and analog populations and requires multiple adjustments, our LOC remains neutral.
8/22/2023 4:38:02 PM ICL123_Pregnancy Cliff page: 2

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
First trimester intrauterine pregnancy inclusive of uncomplicated early pregnancy loss not requiring surgical management.
WORSE CASE SCENARIO DEFINITION
Ectopic pregnancy OR complicated early pregnancy loss requiring surgical management.
CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)
None.
BEST CASE/WORST CASE PROBABILITY COMMENTS
While there is no spaceflight data or analog data evaluating the rate of intrauterine vs. ectopic pregnancy, per terrestrial data, the incidence of
ectopic pregnancy is 19.7/1000 confirmed pregnancies (Marion, 2012). Furthermore, the rate of emergency curettage for excessive bleeding
following medical treatment failure of an intrauterine pregnancy with mifepristone and misoprostol is less than 1% (ACOG 2014). As mifepristone
and misoprostol are now a standard of care for maximizing the success of non-surgical management of early pregnancy loss (Schreiber, 2018), an
overall BC/WC probability of 98%/2% is reasonable.
TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
Marion, 2012 Terrestrial 2
ACOG, 2014 Terrestrial 2
Schreiber, 2018 Terrestrial 2
The BC/WC probability is limited by the fact that we do not know rates of ectopic pregnancy amongst spaceflight or analog populations and thus
must use terrestrial data (Marion, 2012). Further, if pregnancy were to occur during spaceflight, it is unknown if risks inherent to the space
environment may increase the risk of ectopic pregnancy or complicated early pregnancy loss or interfere with medical treatment leading to the need
for surgical management.
8/22/2023 4:38:02 PM ICL123_Pregnancy Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE
CP1: Diagnosis CP2: Treatment CP3: Condition End State
TI% Duration TI% Duration TI% RTDC LOCL
Composite Condition
Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max%
Treated Best mean 0.005955 98 - 98 100 1.416 3.25538 24 1344 0 100 100 0 0
Case (TBC) and SD 4.081E-4
Treated Worst 2 - 2 100 1.916 36.5001 24 336 0 100 100 0 30
Case (TWC)
Untreated Best N/A N/A N/A 1.416 6.85623 24 1344 6.85623 100 100 0 0
Case (UTBC)
Untreated Worst N/A N/A N/A 1.916 100 24 336 100 100 100 0 60
Case (UTWC)
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
8/22/2023 4:38:02 PM ICL123_Pregnancy Cliff page: 4

SCENARIO OVERVIEW COMMENTS
Pregnancy in general carries a high rate of morbidity. Ectopic pregnancy is very dangerous and accounts for 4-10% of pregnancy-related deaths
terrestrially. Pregnancy in spaceflight may be extremely high risk not only to the individual who is pregnant, but also places the entire success of the
mission in jeopardy.
TREATED BEST CASE (TBC) SCENARIO COMMENTS
In a TBC scenario either a viable intrauterine pregnancy is found and managed expectantly without complication, or early pregnancy loss occurs
and either resolves without complication spontaneously or is managed with mifepristone/misoprostol and does not lead to excessive bleeding,
retained products of conception, intrauterine infection, or other complication that requires surgical management.
TREATED WORST CASE SCENARIO (TWC) COMMENTS
This scenario in fact encompasses two scenarios. Either an intrauterine pregnancy occurs and it is either a miscarriage that requires surgical
management, OR it is an ectopic pregnancy. Bleeding from a miscarriage would be managed with available non-surgical techniques such as uterine
tamponade with a foley balloon and tranexamic acid, and an unruptured early ectopic pregnancy would be managed with intramuscular
methotrexate.
UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS
As with TBC, either the pregnancy is managed expectantly through the first trimester or ends in a miscarriage that resolves spontaneously.
UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS
In this scenario, a complicated miscarriage with likely heavy bleeding is occurring or an ectopic pregnancy is present. In both of these settings
without treatment, there would be catastrophic risks to the patient and mission.
TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
ACOG, 2015 2
Generally, amongst women having menses, a pregnancy test is performed the first week that a period is missed. This week represents the "4 weeks
of gestation" but in actuality, it is the 2nd week of the pregnancy. As the CLiFF definition is limited to the first trimester, the max duration would be
from Week 4 with an early diagnosis to Week 12 which would represent 8 weeks or 1344 hours. Thus for the BC scenarios, an uncomplicated
intrauterine pregnancy or spontaneous miscarriage may be noted within the first 24 hours after a period is missed or the duration may extend
through 1344 hours (12 weeks). Moving into the second trimester would be beyond the scope of this CLiFF. If a complicated miscarriage or ectopic
pregnancy is noted, the duration can also range from 24 hours through the first trimester, although this would be exceedingly rare as most ectopic
pregnancies will rupture by 12 weeks gestation. Given these uncertainties, the LOCL is neutral.
TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
Clinical subject matter expert consensus opinion 4
8/22/2023 4:38:02 PM ICL123_Pregnancy Cliff page: 5

If pregnancy were to occur in space whether complicated or not, this would necessitate a 100% chance to return to definitive care. This decision by
consensus expert clinical opinion is made with high level of confidence.
TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)
Citation Source LOC Value
Marion, 2012 Terrestrial
Sagiv, 2012 Terrestrial
Lawani, 2013 Terrestrial
2
Barash, 2014 Terrestrial
Harylyshyn, 2018 Terrestrial
Tailor, 2004 Terrestrial
There is not spaceflight or analog data to evaluate LOCL from first trimester pregnancy. Amongst the terrestrial population, there is also not robust
data from resource-limited (no surgical capability) environments. The risk of mortality from ectopic pregnancies with the availability of surgical
management has decreased to a rate of 0.5 per 100,000. Unfortunately, per Tailor, only 40% of all tubal ectopic pregnancies were safely managed
with expectant management (60% failure). In other studies, the rate of treatment failure with methotrexate can still be as high as 40%. With no
surgical options available to treat an ectopic pregnancy that has failed expectant and medical management, the chance of LOCL could theoretically
be as high as 60% in the worst case if the ectopic pregnancy ruptured and led to uncontrollable intra-abdominal hemorrhage. As treatment can
work, this risk was halved for the TBC scenario. This LOC is very limited given the lack of any modern evidence for outcomes without surgical
intervention of ectopic pregnancy.
CAPABILITY RESOURCE TABLE (CRT) OVERVIEW
Overview This CliFF assumes that pregnancy has already occurred. The pregnancy can be intrauterine or extrauterine. If intrauterine, there is a
high risk of miscarriage, and thus management options include expectant management, pharmacologic management of an inevitable, complete,
incomplete, or missed abortion. This condition can also consider pharmacologic management of medical abortion. If extrauterine, given the dangers
associated with a pregnancy occurring in a location that is not compatible with life nor can contain a growing pregnancy, the recommendations
would be for pharmacologic management of the ectopic pregnancy. CNES: None Diagnostic Scope and Resourcing As the best-case scenario may
predominantly be characterized by an uncomplicated intrauterine pregnancy, it can also include an uncomplicated miscarriage. This is deemed
uncomplicated because it does not require surgical management to reach resolution. The diagnostic resourcing for the best case scenario would
involve taking an HPI, checking vital signs, performing an abdominal/pelvic physical exam, checking a pregnancy test, and performing an
ultrasound. Transvaginal ultrasound would be primacy 1 if available, and transabdominal ultrasound would be a secondary option. For the worst-
case scenario which would include complicated intrauterine pregnancies or ectopic pregnancies that may require surgery, additional CP1
resourcing includes placement of an IV and collection of a CBC and serum bHCG. Clinical Phase 1 Duration and Rationale This version of IMPACT
presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows:
CP1 BC (Treated or Untreated): 1.41 CP1 WC (Treated or Untreated): 1.91 The duration involves obtaining a history, standard set up time and
analysis of the pregnancy test. It is the same for both BC and WC. Treatment Scope and Resourcing For the best-case scenario, an uncomplicated
intrauterine pregnancy for which expectant management is desired may only require a prenatal vitamin. However, if a miscarriage occurs or the
pregnancy is desired to be interrupted, mifepristone and misoprostol can used. In the worst-case scenario, retained products of conception leading
to severe can occur, however, surgical options such as dilation and curettage will be unavailable. Thus, management strategies can include TXA,
uterine tamponade with a foley catheter, oral and IV hydration, blood transfusion, and a blood transfusion reaction bundle. If the pregnancy is an
ectopic, the standard of care is intramuscular methotrexate and checking repeat bHCG levels on day 4 and day 7 after. Surgical management for
ectopic pregnancy will not be available. Support Needs Ground-support can assist with worst-case diagnosis, however, is not needed for best-case
diagnosis. They can also assist with treatment recommendations in the worst-case scenario. References The American College of Obstetricians
and Gynecologists Practice Bulletin no. 150. Early pregnancy loss. Obstet Gynecol. 2015 May;125(5):1258-1267. doi:
10.1097/01.AOG.0000465191.27155.25. PMID: 25932865. American College of Obstetricians and Gynecologists' Committee on Practice Bulletins
—Gynecology. ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy. Obstet Gynecol. 2018 Mar;131(3):e91-e103. doi:
10.1097/AOG.0000000000002560. Erratum in: Obstet Gynecol. 2019 May;133(5):1059. PMID: 29470343. Practice bulletin no. 143: medical
management of first-trimester abortion. Obstet Gynecol. 2014 Mar;123(3):676-692. doi: 10.1097/01.AOG.0000444454.67279.7d. PMID: 24553166.
Schreiber CA, Creinin MD, Atrio J, Sonalkar S, Ratcliffe SJ, Barnhart KT. Mifepristone Pretreatment for the Medical Management of Early Pregnancy
Loss. N Engl J Med. 2018 Jun 7;378(23):2161-2170. doi: 10.1056/NEJMoa1715726. PMID: 29874535; PMCID: PMC6437668. Song T, Kim MK, Kim
ML, Jung YW, Yun BS, Seong SJ. Single-dose versus two-dose administration of methotrexate for the treatment of ectopic pregnancy: a randomized
controlled trial. Hum Reprod. 2016 Feb;31(2):332-8. doi: 10.1093/humrep/dev312. Epub 2015 Dec 23. PMID: 26701971.
IMM CLIFF RECONCILATION COMMENTS
No previous IMM.
8/22/2023 4:38:02 PM ICL123_Pregnancy Cliff page: 6

LIMITATIONS SUMMARY
The data driving this CLiFF is very limited given mammalian pregnancy has never occurred in spaceflight to date. However, if a pregnancy does
occur, this will be very dangerous to the astronaut and the crew. The predominant limitation occurs with the incidence in that spaceflight data for
this condition do not exist. Further limitations include combining multiple pathologic outcomes such as miscarriage and ectopic pregnancy into one
definition despite their clinical differences. Duration is limited by the definition, a proper RTDC decision is assumed by expert clinical opinion, and
the LOCL is extremely limited given we do not even have robust terrestrial data on mortality rates for ectopic pregnancy in the absence of a surgical
option. Thus, LOCL rates are based off of treatment failure rates, though treatment failure does not necessarily equal LOCL.
8/22/2023 4:38:02 PM ICL123_Pregnancy Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)
Clinical Phase 2: Treatment
Affected HSTCs
Inter-
|     | Cognitive - | Cognitive - |     |     |     |     | Cardio- |     |     |     |     |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- |
Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU
Skills
Treated
| Best |     |     |     |     |     |     |     |     |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TBC)
Untreated
| Best |     |     |     |     |     |     |     | 13  |     |     |     |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTBC)
Treated
| Worst | 223 | 664 |     | 89  |     |     | 145 | 13  | 6   |     |     |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TWC)
Untreated
Worst
|     | 223 | 664 | 113 | 89  | 854 | 44  | 145 | 5 13 | 6   |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- | --- |
Case
(UTWC)
|     |     |     |     | Affected HSTCs (Continued) |     |     |     |     | TI Calculation |     | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
Total
Human
|     |     |     |     |     |     | Translation & |     | Total Tasks |     |     |     |
| --- | --- | --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- | --- |
Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %
|     | (Dom) |     |     | Extremity | Standing (g) |                | Equipment | Ops       | Category |     |     |
| --- | ----- | --- | --- | --------- | ------------ | -------------- | --------- | --------- | -------- | --- | --- |
|     |       |     |     |           |              | (microgravity) |           | Condition |          |     |     |
Tasks Full
Mission
Treated
| Best |     |     |     |     |     |     | 34  | 211 245 | 3763 | 0.0651076 | 6.51076 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ------- | ---- | --------- | ------- |
Case
(TBC)
Untreated
| Best |     |     |     |     |     |     | 34  | 211 258 | 3763 | 0.0685623 | 6.85623 |
| ---- | --- | --- | --- | --- | --- | --- | --- | ------- | ---- | --------- | ------- |
Case
(UTBC)
Treated
Worst
|     | 132 | 564 | 414 | 22  | 196 | 34  | 34  | 211 2747 | 3763 | 0.730003 | 73.0003 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |
Case
(TWC)
Untreated
Worst
|     | 132 | 564 | 414 | 22  | 196 | 34  | 34  | 211 3763 | 3763 | 1   | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------- | ---- | --- | --- |
Case
(UTWC)
Clinical Phase 3: Condition End State
Affected HSTCs
|     | Cognitive - | Cognitive - |                | Inter-   |        |         | Cardio-   |           |       |     |     |
| --- | ----------- | ----------- | -------------- | -------- | ------ | ------- | --------- | --------- | ----- | --- | --- |
|     |             |             | Communications | personal | Vision | Hearing |           | Dentition | GI GU |     |     |
|     | Simple      | Complex     |                |          |        |         | pulmonary |           |       |     |     |
Skills
Treated
Best
|     |     |     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TBC)
Untreated
Best
|     |     |     |     |     |     |     |     | 13  |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(UTBC)
Treated
Worst
|     |     |     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Case
(TWC)
Untreated
Worst
|     | 223 | 664 | 113 | 89  | 854 | 44  | 145 | 5 13 | 6   |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- | --- | --- | --- |
Case
(UTWC)
|                      |     |     |     | Affected HSTCs (Continued) |                        |     |     |     | TI Calculation |     | TI Score |
| -------------------- | --- | --- | --- | -------------------------- | ---------------------- | --- | --- | --- | -------------- | --- | -------- |
| 8/22/2023 4:38:02 PM |     |     |     |                            | ICL123_Pregnancy Cliff |     |     |     |                |     | page: 8  |

Total
Human
|     |     |     | Translation & |     | Total Tasks |     |
| --- | --- | --- | ------------- | --- | ----------- | --- |
Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %
|     | (Dom) |     | Extremity Standing (g) | Equipment Ops | Category             |     |
| --- | ----- | --- | ---------------------- | ------------- | -------------------- | --- |
|     |       |     | (microgravity)         |               | Condition Tasks Full |     |
Mission
Treated
Best
|     |     |     |     |     | 0 3763 | 0 0 |
| --- | --- | --- | --- | --- | ------ | --- |
Case
(TBC)
Untreated
Best
|     |     |     |     | 34 211 | 258 3763 | 0.0685623 6.85623 |
| --- | --- | --- | --- | ------ | -------- | ----------------- |
Case
(UTBC)
Treated
Worst
|     |     |     |     |     | 0 3763 | 0 0 |
| --- | --- | --- | --- | --- | ------ | --- |
Case
(TWC)
Untreated
Worst
|     | 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| --- | ------- | --- | --------- | ------ | --------- | ----- |
Case
(UTWC)
| 8/22/2023 4:38:02 PM |     |     | ICL123_Pregnancy Cliff |     |     | page: 9 |
| -------------------- | --- | --- | ---------------------- | --- | --- | ------- |

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
No comments.
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
8/22/2023 4:38:02 PM ICL123_Pregnancy Cliff page: 10

REFERENCES
Reference
The American College of Obstetricians and Gynecologists Practice Bulletin no. 150. Early pregnancy loss. Obstet Gynecol. 2015
May;125(5):1258-1267. doi: 10.1097/01.AOG.0000465191.27155.25. PMID: 25932865.
American College of Obstetricians and Gynecologists' Committee on Practice Bulletins—Gynecology. ACOG Practice Bulletin No. 193: Tubal
Ectopic Pregnancy. Obstet Gynecol. 2018 Mar;131(3):e91-e103. doi: 10.1097/AOG.0000000000002560. Erratum in: Obstet Gynecol. 2019
May;133(5):1059. PMID: 29470343.
Practice bulletin no. 143: medical management of first-trimester abortion. Obstet Gynecol. 2014 Mar;123(3):676-692. doi:
10.1097/01.AOG.0000444454.67279.7d. PMID: 24553166.
Finer LB, Zolna MR. Declines in unintended pregnancy in the United States, 2008-2011. N Engl J Med. 2016; 374(9):843–852.
Grindlay K, Grossman D. Unintended pregnancy among active-duty women in the United States military, 2011. Contraception. 2015
Dec;92(6):589-95. doi: 10.1016/j.contraception.2015.07.015. Epub 2015 Sep 4. PMID: 26345183.
Holt K, Grindlay K, Taskier M, Grossman D. Unintended pregnancy and contraceptive use among women in the U.S. military: a systematic
literature review. Mil Med. 2011 Sep;176(9):1056-64. doi: 10.7205/milmed-d-11-00012. PMID: 21987966.
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
Marion LL, Meeks GR. Ectopic pregnancy: History, incidence, epidemiology, and risk factors. Clin Obstet Gynecol. 2012 Jun;55(2):376-86. doi:
10.1097/GRF.0b013e3182516d7b. PMID: 22510618.
Steller JG, Blue RS, Burns R, Bayuse TM, Antonsen EL, Jain V, Blackwell MM, Jennings RT. Gynecologic Risk Mitigation Considerations for
Long-Duration Spaceflight. Aerosp Med Hum Perform. 2020 Jul 1;91(7):543-564. doi: 10.3357/AMHP.5538.2020. PMID: 32591031.
Sagiv R, Debby A, Feit H, Cohen-Sacher B, Keidar R, Golan A. The optimal cutoff serum level of human chorionic gonadotropin for efficacy of
methotrexate treatment in women with extrauterine pregnancy. Int J Gynaecol Obstet. 2012;116(2):101–104.
Barash JH, Buchanan EM, Hillson C. Diagnosis and management of ectopic pregnancy. Am Fam Physician. 2014 Jul 1;90(1):34-40. PMID:
25077500.
Lawani OL, Anozie OB, Ezeonu PO. Ectopic pregnancy: a life-threatening gynecological emergency. Int J Womens Health. 2013 Aug 19;5:515-
21. doi: 10.2147/IJWH.S49672. PMID: 23983494; PMCID: PMC3751381.
ACRONYMS
ACRONYM PHRASE
AAOMS American Association of Oral and Maxillofacial Surgeons
AMA American Medical Association
ARCL All Remaining Conditions List
ARS Acute Radiation Sickness
BHP Behavioral Health and Performance
CAC Coronary Artery Calcium
8/22/2023 4:38:02 PM ICL123_Pregnancy Cliff page: 11

CHS Crew Health and Safety
CL Condition List
CliFF Clinical Finding Form
CMO Crew Medical Officer
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
8/22/2023 4:38:02 PM ICL123_Pregnancy Cliff page: 12

OBGYN Obstetrics and Gynecology
OR Occurrence Rate
PA Physician Assistant
PDQ Pain Disability Questionnaire
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
8/22/2023 4:38:02 PM ICL123_Pregnancy Cliff page: 13
