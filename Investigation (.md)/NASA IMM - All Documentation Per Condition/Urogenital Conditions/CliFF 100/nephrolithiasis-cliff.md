---
source_filename: "nephrolithiasis-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Urogenital Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/1-3rF_S2TA8CU66L80cIL0cxAmCMVMRyT/view"
source_drive_id: "1-3rF_S2TA8CU66L80cIL0cxAmCMVMRyT"
source_sha256: c2cff4ea51184b81c894335dc62d29ac43f90dc6290d17b7a56acc8e72ef850a
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
---

# nephrolithiasis-cliff

[Original PDF](https://drive.google.com/file/d/1-3rF_S2TA8CU66L80cIL0cxAmCMVMRyT/view)

> Automatically extracted text. Check the original PDF for figures, scanned pages, tables, and equations.

Nephrolithiasis Cliff
Branch Baseline
Urolithiasis denotes stones originating anywhere in the urinary tract, including the kidneys and bladder. However, the pathophysiologic bases for the
formation of kidney and bladder stones are entirely different. Kidney stones form as a result of physicochemical or genetic derangements leading to
super saturation of the urine with stone-forming salts or, less commonly, from recurrent urinary tract infection with unease-producing bacteria. Stasis
in the upper urinary tract due to local anatomic anomalies may also promote or enhance stone formation in susceptible individuals. In contrast,
bladder stones form almost exclusively as a result of urinary stasis and/or recurrent infection due to bladder outlet obstruction or neurogenic bladder.
(Pearle, 2007)
Spaceflight is associated with biochemical alterations that promote kidney stone formation. Microgravity associated bone demineralization has been
shown to result in hypercalciuria, and hypocitraturia, and reductions in urinary pH. Citrate, an inhibitor of stone formation, was shown to be reduced
particularly in early spaceflight. Dietary intake known to be protective of stone formation was also found to be reduced including protein, potassium
phosphorus and magnesium. (Whitson, 1997); (Whitson, 1993)
Hypercalciuria is a characteristic of the skeletal adaptation to space, and contributes to the increased super saturation of urine such as with calcium
phosphate or calcium oxalate. However, whether a renal stone forms in supersaturated urine depends upon other risk factors. The presence of these
aggregates in the renal collection or excretion system can potentially result in renal colic, hematuria, infection, and can obstruct urine flow to cause
hydronephrosis. (Sibonga, 2008)
Factors contributing to dehydration on orbit include dehydration associated with space motion sickness in the first few days of flight, and decreased
urine output due to lower oral fluid intake associated with depressed appetite, increased workload and exercise. (Jones, 2008)
Incidence Data Included in the Model
The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data,
incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence
calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not
reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk
for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below
and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and
occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are
randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description
Document.
Incidence
Data Category: Model
Space Adaptation: No
Incidence Type: Rate
Distribution Data
Incidence: Lognormal
Occurrence: Poisson
5/11/2020 5:37:41 PM Nephrolithiasis Cliff page: 1

Data Characteristics
| Mean:                | 0.00396               |         |
| -------------------- | --------------------- | ------- |
| Standard Deviation:  | 0.00046               |         |
| 5/11/2020 5:37:41 PM | Nephrolithiasis Cliff | page: 2 |

Incidence Comments
Kidney Stones have never occurred on flight among US astronauts. NASA’s Glenn Research Center prepared a Bayesian Analysis for the
incidence of kidney stones (Gilkey, 2012)
When looking at the astronaut population data for the medical events investigated, the population and the occurrences are very low. Due to this
low occurrence, Bayesian methods are deemed necessary in order to better predict probability estimates for incidence rates of these medical
events. The Bayesian process allows researchers to make inferences to determine the probability that a hypothesis is true, conditional on all
available evidence.
An estimate of the probability of an astronaut developing a renal stone during or after space flight was estimated using data from LSAH (Wear,
2007) and the Center for Disease Control (CDC) (Litwin, 2004). Information from these sources was combined using a Bayesian update
approach to estimate the average rate of stone formation. By making the average rate assumption, a Poisson probability distribution was
assumed to govern the probability of stone formation. This model uses only data pertaining to stone occurrence, not data related to blood or
urine chemistry.
To begin to estimate the probability of renal stone formation in the astronaut corps, control populations and the general U.S. population, there is
an assumption that the rates of renal stone incidences is constant over the period of interest. This in turn leads to the assumption of the
probability of occurrence following a Poisson distribution. These assumptions are likely erroneous in the larger sense, based on LSAH temporal
distribution of stone formation provided to the GRC-IMM team. However, it is believed that the assumption is currently the “best approximation”
based on non-attributable data from short duration mission (less than 20 days) participants. Only one data point is available on the occurrence
associated with long duration missions (~180 days) at this time.
From the CDC as of 2004 (Litwin, 2004)the incidence of renal stones per 1000 persons per year varied; for males, the range was one to three
incidents while the female range was 0.6 to 1 incidents per 1000 persons per year. For this analysis gender differences were not considered,
and the average incidence rate of renal stones was 0.0018. An EF of 2.236 was found by taking the square root of the ratio 3 to 0.6 (Gilkey,
2012)
The LSAH maintains an astronaut control population database, primarily made up of JSC personnel. This data was of interest, as renal stone
incidence is geographically dependent, due to factors including dietary habits, lifestyle, and so on. The JSC astronaut analog population was
used to capture these discrepancies due to geography. The incidence rate of renal stones for this ground-based comparison population from
Pietrzyk et al. (Pietrzyk, 2007) Out of 927 participants there were 74 occurrences of renal stones over 17740.8 person-years yielding an
incidence rate of 0.0042 events per person-year
Primarily occurring post-flight of short duration missions, there have been a number of renal stone incidences in the astronaut population. Out of
332 astronauts there were 14 occurrences over 5434.5 person-years yielding an incidence rate of 0.0026 events per person year. (Pietrzyk,
2007) Two things should be noted on this data. The first is that this counts all occurrences, including repeat occurrences (two known). Second,
~40 percent of the occurrences occur within 30 months of return, and the remainder occurred after 66 months post return. This may negate the
assumption of an average rate for the entire period of interest. The total number of person years reported includes the time frame for both in-
flight and post-flight data.
To improve the estimate of the rate of occurrence in the astronaut corps and provide a first-order approximation suitable for use in the GRC-IMM
modeling effort, the following approach was taken using the numerical Bayesian update code WinBUGS. One Bayesian update was performed
such that no gender distinction was made. The data from the CDC (Litwin, 2004) was used to form an informed lognormal conjugate prior for the
incidence rate of renal stones among the general U.S. population. This prior was used to update LSAH astronaut control population in Step 1 of
Bayesian implementation, yielding a posterior for the updated incidence rate of renal stones. In Step 2, the posterior of Step 1 was used as the
prior and updated LSAH pre-flight/in-flight astronaut data in WinBUGS. The result is the estimation for the incidence rate of renal stone
formation among astronauts during an exploration mission.
This process returned an estimate of the rate of renal stone formation in the astronaut core (most representative of post-flight) with respect to
the general population and the LSAH control population. This rate can be used as the input rate to a Poisson distribution probability model to
estimate the probability of a renal stone occurrence.
The mean incidence rate of renal stone formation among astronauts was 0.00396 events per person-year. Standard deviation is 0.00046
(Gilkey, 2012)
This model should be considered very limited in that it assumes an average occurrence rate of renal stones, irrespective of the stone type or
environmental conditions. Additionally, the inclusion of repeated occurrences could influence the predicted rate of occurrence as it is know that
the occurrence of one stone increases the likelihood of subsequent stones. Use should be treated with understanding of these limitations.
However, it is likely a reasonable representation of the rate of stone formation given the occurrence data available and given the assumptions
made during construction of the estimate.
More accurate estimates can be made with further analysis of the periods of renal stone occurrence in post-flight sufferers and the
urinary/serum chemistry values that pertain to stone formation. The current model data will serve as the baseline for future estimates that utilize
such biochemical stone forming/inhibiting parameters.
5/11/2020 5:37:41 PM Nephrolithiasis Cliff page: 3

Information Regarding Prevention
Selection criteria
Exclusion criteria in the genitourinary area include: any disorder of the genitourinary tract that may interfere with the performance of duties;
anatomical abnormalities of one or both kidneys and lower urinary tract producing functional impact to the urogenital system. A duplicated
collecting system is considered a variant of normal anatomy and is not disqualifying unless associated with other pathology (e.g.
hydronephrosis, nephrolithiasis, or recurrent episodes of infection); loss or absence of one or both kidneys; presence of acute or chronic
nephropathy; history of tubular necrosis from any cause if associated with residual renal dysfunction that may interfere with the performance of
duties; presence or history of urinary calculus (crystalline concretion within the urine-collecting system); history of urinary calculus formed
secondary to parathyroid adenoma requires further evaluation; history of frequent infections of the urinary tract and/or persistent asymptomatic
bacteriuria associated with urinary tract abnormalities unless predisposing condition is eliminated; bladder, prostate, or urethral diseases that
result in urinary retention, or interfere with micturition. History of same requires further evaluation (NASA, 2007) (International Space Station
Program, 2009)
Countermeasures:
Dietary modification, Potassium citrate, exercise to decrease bone resorption. (Whitson, 2009)
All long duration crewmembers (greater than 30 days ) (Jones, 2008)undergo screening ultrasound of the abdomen and pelvis about 6 weeks
prior to flight.
Potassium citrate (Urocit-K) is available on board.
Prevention of urinary super saturation of salts can be achieved, in part, with regular and adequate oral fluid hydration. (Jones, 2008); (Pietrzyk,
2007)
The first genitourinary ultrasound examination was conducted in space as the Advanced Diagnostic Ultrasound in Microgravity experiment during
Expedition in 2001. It was shown to be feasible for the diagnosis and management of kidney stones on orbit (Jones, 2009). A detailed ISS
ultrasound user guide has been published future (Sargsyan, 2006). The hardware-specific requirements to expand the operational use of
ultrasound in space are available at this time.
Incidence Level of Evidence (LOE)
The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of
sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of
input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest
level of evidence and less relevant data sources are assigned a lower level of evidence.
Citation LOE Value LOE Category
Gilkey, 2012 2 Incidence
5/11/2020 5:37:41 PM Nephrolithiasis Cliff page: 4

Alternative Incidence Data
Tracking the incidence of nephrolithiasis in military personnel in deployed settings is somewhat difficult. Urinary calculi are tracked in the
Operation Iraqi Freedom/Operation Enduring Freedom (OIF/OEF) theater of operations based on International Classification of Diseases (9th
Revision, Clinical Modification) codes through the Joint Patient Tracking Application for inpatient encounters and via the Joint Medical
Workstation application for outpatient clinic visits. Based on review of these numbers, the incidence of nephrolithiasis seems to be increasing
annually. From July 2004 to July 2005, there were a total of 88 cases of nephrolithiasis evacuated from the theater, from July 2005 to July
2006,126 cases, and from July 2006 to July 2007, 159 cases. (Stroup, 2008)
For U.S. Navy-specific reporting systems, including the Disease Non-Battle Injury Report, no official incidence is reported. In a review of
Expeditionary Strike Group and Carrier Strike Group After-Action Reports from surface Pacific forces, there are between 5 and 12 cases of
kidney stones per deployment of approximately 5,000 to 6,000 crew members. Of these, 3 to 5 require medical evacuation (MEDEVAC).
Commander Submarine Force, U.S. Pacific Fleet (COMSUBPAC) medical database records from the Pacific two-thirds of the world and U.S.
Central Command Area of Responsibility indicate that there were 4 MEDEVAC messages in 2006 for kidney stones. Historically, COMSUBPAC
has averaged 2 to 4 kidney stone MEDEVAC messages per year since 1990. Development of symptomatic urolithiasis in more isolated
situations, such as on submarines, may create mission-critical challenges (Commander U.S. Third Fleet B. Poss and COMSUBPAC Surgeon C.
Jankosky, unpublished observations). As more personnel are offered waivers for a history of kidney stones, the incidence of these problems is
likely to increase and the need for improved medical management will become even more important. (Stroup, 2008)
From Stroup study, we calculated that 3 to 5 EVACs out of 5-12 incidents equals 47% EVAC rate.
The time for stone passage is based on size, side, and location. Stones less than 2 mm have a mean passage time of 8 days, 3mm 12 days, and
4-6 mm 22 days. The need for future intervention is 3%, 14%, and 50%, respectively. For stones greater than 6mm 99% require intervention
(Miller, 1999) cited in Stroup (Stroup, 2008). We do not know the estimated size of stones formed by astronauts on the ground or if they
required a procedure
There is anecdotal report of a Russian cosmonaut who passed a kidney stone on board. Leedey cited in (Sibonga, 2008).
Lacking in-flight evidence, there are models to calculate stone formation Pietrzyk (Pietrzyk, 1999) generated a mathematical model with which to
predict the urinary super saturation of calcium stone forming salts. This model, which involves the fewest possible analytical variables (urinary
calcium, citrate, oxalate, phosphorus, and total volume), reliably and accurately predicted the urinary super saturation of the calcium stone
forming salts when compared to results obtained from a group of 6 astronauts who collected urine during flight .
As another part of the Integrated Medical Model, NASA Glenn Research Center is also developing a model to assess the risk of renal (kidney)
stone formation during long duration exploration missions as well as after an astronaut has returned to Earth. This condition can occur due to an
increase of calcium in the blood, which is a result of bone loss during space flight. As an additional complication, astronauts become dehydrated
in microgravity, which may also increase the risk for kidney stone formation. As part of the integrated model, the renal stone model will help
NASA predict the likelihood of occurrence as well as the outcome of treatment(Myers, 2009)
5/11/2020 5:37:41 PM Nephrolithiasis Cliff page: 5

Treatment and Outcomes
Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical
phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration
for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains
for the rest of the mission. Other mission end states include evacuation and loss of crew life.
The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient
essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.
The table below summarizes the treated and untreated best and worst case scenarios.
|                     | Clinical Phase I    | Clinical Phase II    | Clinical Phase III      |        |
| ------------------- | ------------------- | -------------------- | ----------------------- | ------ |
|                     | Diagnosis & Initial | On-going Treatment / | Recovered / Mission End |        |
|                     | Treatment1          | Convalescence2       | State3                  |        |
|                     | FI* Duration        | FI* Duration (hrs)   | FI* EVAC**              | LOCL** |
|                     | (%) (hrs)           | (%) (Min - ML - Max) | (%) (%)                 | (%)    |
| ISS-based Treatment | 100 0.75            | 2 - 39 3 - 13.5 - 24 | 0 0                     | 0      |
(best case scenario %: 36 - 85)
ISS-based Treatment 100 0.75 21 - 61 72 - 96 - 120 0 - 61 100 0
(worst case scenario %: 15 - 64)
| Untreated Best Case  | 0 0 | 21 - 61 3 - 13.5 - 24 | 0 - 39 100  | 0   |
| -------------------- | --- | --------------------- | ----------- | --- |
| Untreated Worst Case | 0 0 | 43 - 85 72 - 96 - 120 | 43 - 85 100 | 0   |
1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and
completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able
to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis
performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable".
2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate
follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS
environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I
necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is
expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by
the model.
3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical
condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to
the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state
results.
*Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability.
**Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to
the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end
state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable
pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.
Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and
Quality Adjusted Mission Time calculations.
Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability
of those scenarios.)
| 5/11/2020 5:37:41 PM | Nephrolithiasis Cliff |     |     | page: 6 |
| -------------------- | --------------------- | --- | --- | ------- |

Scenario Comments
Best case scenario is defined as a renal stone that responds to conservative treatment (e.g. analgesics and hydration)
Worst case scenario is defined as a renal stone that does not respond to conservative treatment (e.g. requires lithotripsy or surgical
treatment)
Urinary tract infection and sepsis secondary to a kidney stone are addressed in the Urinary tract infection (UTI) and Sepsis CliFFs respectively.
A meta-analysis conducted by the American Urological Association (Preminger, 2007)among five patient groups (224 patients) yielded an
estimate that for stones ≤5 mm, 68% would pass spontaneously (95% confidence interval [CI]: 46% to 85%). For stones >5 mm and ≤10 mm,
analysis of three groups (104 patients) yielded an estimate that 47% would pass spontaneously (95% CI: 36% to 59%). Using the two confidence
intervals, our range for best case scenario was determined to be 36 to 85%. Therefore, worst case scenario is 15 to 64%
Best Case Comments
Kidney Stones functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Complex Regional Pain Syndrome-
Lower Extremity is based on Table 16-15, p.541 (American Medical Association, 2008). The CRPS (LEI) ratings are then converted to
percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 (American Medical Association, 2008). Upper Urinary
Tract Disease is based on Table 7-2, p.134 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned
tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further information
on calculations and description of ratings refer to this CliFF Appendix A
By definition, FI during Clinical Phase I is 100%. Duration is estimated to be 45 minutes, to follow the procedure indicated in the ISS Medical
checklist for kidney stones; e.g. urinalysis, analgesia and scheduling a PMC conference. During Clinical Phase II, FI is estimated in 2 to 39%.
Duration is estimated in 3 to 24 hours based in time to take oral medication and natural history of stone passage. (Miller, 1999). During Clinical
Phase III, the pain resolves and FI is 0%. By definition, EVAC and LOCL are not expected in the best case scenario.
Worst Case Comments
Kidney Stones functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Complex Regional Pain Syndrome-
Lower Extremity is based on Table 16-15, p.541 (American Medical Association, 2008). The CRPS (LEI) ratings are then converted to
percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 (American Medical Association, 2008). Upper Urinary
Tract Disease is based on Table 7-2, p.134 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned
tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further information
on calculations and description of ratings refer to this CliFF Appendix A
By definition, functional impairment (FI) is 100% during Clinical Phase I Duration is estimated to be 45 minutes, to follow the procedure indicated
in the ISS Medical checklist for kidney stones; e.g. urinalysis, analgesia, and scheduling a PMC conference. During Clinical Phase II, FI is
estimated in 21 to 61%, Duration is estimated in three to five days. During Clinical Phase III, the pain may subside or be intermittent based on
natural history of stone passage. FI is estimated at 0 to 61%. EVAC has occurred in analog army and submarines’ populations (Stroup, 2008).
Nephrolithiasis is a Class III medical event, i.e. a significant medical event requiring evacuation if occurring in orbit (Johnston, 2008). Our EVAC
estimate is 100%. LOCL is not expected
Untreated Best Case Comments
Kidney Stones functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Complex Regional Pain Syndrome-
Lower Extremity is based on Table 16-15, p.541 (American Medical Association, 2008). The CRPS (LEI) ratings are then converted to
percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 (American Medical Association, 2008). Upper Urinary
Tract Disease is based on Table 7-2, p.134 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned
tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further information
on calculations and description of ratings refer to this CliFF Appendix A.
During Clinical Phase II, FI is estimated in 21 to 61%. Duration is estimated in 8 to 24 hours similar to the treated best case scenario. During
Clinical Phase III, the pain may not resolve or reoccurs based on stone passage natural history and FI is estimated at 0 to 39%. }. EVAC has
occurred in analog army and submarines’ population for kidney stones (Stroup, 2008). Nephrolithiasis is a Class III medical event, i.e. a
significant medical event requiring evacuation if occurring in orbit (Johnston, 2008). Our EVAC estimate is 100% for the untreated case
scenario. LOCL is not expected.
5/11/2020 5:37:41 PM Nephrolithiasis Cliff page: 7

Untreated Worst Case Comments
Kidney Stones functional impairments (FI) calculation follows the IMM severe non-space adaptation template. . Complex Regional Pain
Syndrome-Lower Extremity is based on Table 16-15, p.541 (American Medical Association, 2008). The CRPS (LEI) ratings are then converted to
percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 (American Medical Association, 2008). Upper Urinary
Tract Disease is based on Table 7-2, p.134 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned
tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008). For further information
on calculations and description of ratings refer to this CliFF Appendix A.
During Clinical Phase II, FI is estimated at 43 to 85%. Duration is estimated at 3 to 5 days, similar to the treated scenario. During Clinical Phase
III, the pain would not resolve and FI remains 43 to 85% without definitive care. Nephrolithiasis is a Class III medical event, i.e. a significant
medical event requiring evacuation if occurring in orbit (Johnston, 2008). Based on the need for definitive care EVAC is estimated at 100% for
this scenario. LOCL is not expected, (Preminger, 2007)
Treatment and Options Level of Evidence (LOE)
The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of
sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of
input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest
level of evidence and less relevant data sources are assigned a lower level of evidence.
| Citation                           | LOE Value             | LOE Category |         |
| ---------------------------------- | --------------------- | ------------ | ------- |
| American Medical Association, 2008 | 3                     | FI           |         |
| American Medical Association, 2008 | 3                     | FI           |         |
| American Medical Association, 2008 | 3                     | FI           |         |
| Stroup, 2008                       | 2                     | EVAC         |         |
| Johnston, 2008                     | 2                     | EVAC         |         |
| Preminger, 2007                    | 4                     | BCWC         |         |
| 5/11/2020 5:37:41 PM               | Nephrolithiasis Cliff |              | page: 8 |

Additional Comments
We conducted a PubMed search using the key terms kidney or renal stones and space medicine, kidney or renal stones and astronauts, and
kidney or renal stones and microgravity. The search was refined by relevance and date.
| 5/11/2020 5:37:41 PM | Nephrolithiasis Cliff | page: 9 |
| -------------------- | --------------------- | ------- |

The Resource Table (RT)
Units
|          | Units Units       | Available          |                     |     |
| -------- | ----------------- | ------------------ | ------------------- | --- |
|          | Required Required | At Start           |                     |     |
|          | Best Worst        | Of                 |                     |     |
| Resource | Case Case         | Mission Consumable | Essential Rationale |     |
BZK wipes 0 3 60 Yes No Wound area cleaning (when suturing or
stapling); To clean used instruments after
surgical repair and prior to re-stowage;
Cleaning injection port of saline bag
| CMRS                     | 0 1  | 1 No   | No Restrain crew member to ensure safety |     |
| ------------------------ | ---- | ------ | ---------------------------------------- | --- |
| Cotton swabs             | 3 3  | 6 Yes  | No to collect urine for urinalysis       |     |
| Dilaudid (Hydromorphone) | 0 12 | 18 Yes | Yes Pain Management                      |     |
2mg/mL, 1mL syringe
ECG Monitor (Device, USB 1 0 1 No Yes Measure and monitor ECG
Charge Cable, Lead Set Cable,
Cue Card)
Gauze pads (4x4) 0 3 50 Yes No to absorb blood or fluids from skin
| IV administration set | 1 1 | 3 Yes | Yes Fluid administration           |     |
| --------------------- | --- | ----- | ---------------------------------- | --- |
| IV Cap                | 1 1 | 5 Yes | No To maintain IV when not in use. |     |
IV Catheter (18G, 20G, or 22G) 1 1 14 Yes Yes IV fluid administration
| IV Fluid 1L (1000mL) | 4 4 | 5 Yes | Yes to replenish fluids       |     |
| -------------------- | --- | ----- | ----------------------------- | --- |
| IV Fluid Air Filter  | 1 1 | 3 Yes | No To filter air from IV line |     |
| IV pressure infuser  | 1 1 | 1 No  | No IV Fluids infusion         |     |
Medical tape 0.2 0.2 5 Yes No single-coated tapepressure adhesive tape
Nitrile gloves (large, medium, and 1 2 30 Yes No Personal Protective equipment for CMO
small) (pair)
Pack of 12 ECG electrodes 1 0 5 Yes Yes Measure and monitor ECG
Phenergan (Promethazine tablet) 3 0 100 Yes Yes Nausea relief , first line
25 mg
| Promethazine (Phenergan) | 0 4 | 24 Yes | Yes Nausea relief |     |
| ------------------------ | --- | ------ | ----------------- | --- |
25mg/mL 1 mL injectable
Sharps container 1 1 40 No No To dispose of medical waste such as used
medical needles, scalpels, IV catheters,
razors, vials
| Syringe (3cc) | 1 4 | 20 Yes | Yes to flush IV lock every 8 hours |     |
| ------------- | --- | ------ | ---------------------------------- | --- |
Tamsulosin (Flomax) 0.4mg 30 30 30 Yes Yes To promote urine flow
tablet
Toradol (Ketorolac) 30mg/mL, 1 3 3 Yes Yes pain relief, first line
2mL single dose vial
Tourniquet 1 1 1 No No To stop blood flow and engorge vein, this
facilitates IV insertion
Ultrasound gel (2 packets) 1 1 17 Yes Yes For use with ultrasound machine
| 5/11/2020 5:37:41 PM |     | Nephrolithiasis Cliff |     | page: 10 |
| -------------------- | --- | --------------------- | --- | -------- |

Units
|                    | Units Units       | Available          |                              |     |     |
| ------------------ | ----------------- | ------------------ | ---------------------------- | --- | --- |
|                    | Required Required | At Start           |                              |     |     |
|                    | Best Worst        | Of                 |                              |     |     |
| Resource           | Case Case         | Mission Consumable | Essential Rationale          |     |     |
| Ultrasound machine | 1 1               | 1 No               | Yes For diagnostic purposes. |     |     |
Urine chemstrips 3 3 10 Yes Yes urine test for ph, leukocytes, protein,
glucose, ketones, blood, and nitrites
Vicodin HP (Hydrocodone/ 0 4 30 Yes Yes Pain relief, second line
Acetaminophen HP) 10 mg/660
mg
| Water | 1 0 | 1 No | No For rehydration. |     |     |
| ----- | --- | ---- | ------------------- | --- | --- |
Zofran (Ondansetron) 8 mg 0 2 30 Yes Yes Nausea relief, second line
tablet
Resource Comments
We revised the table on 3/1/2011 and added resources for IV fluids.
The ISS Medical checklist addresses conservative treatment of kidney stones, e.g. pain management nausea/vomiting and hydration (Mission
Operations Directorate (MOD), 2011). Current Clinical guidelines for medical therapy include steroids, calcium channel blockers (Nifedipine) and
alpha receptor antagonists (Tamsulosin) (Preminger, 2007)
Even though ISS procedures recommend urine straining for stone retrieval, there is no urine strainer available on board (Hurst, 2011)).
Required Resources Level of Evidence (LOE)
The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of
sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of
input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest
level of evidence and less relevant data sources are assigned a lower level of evidence.
| Citation                                        |     | LOE Value | LOE Category |     |     |
| ----------------------------------------------- | --- | --------- | ------------ | --- | --- |
| NASA Mission Operations Directorate (MOD), 2011 |     | 2         | Resources    |     |     |
Level Of Evidence
| Input Data             | LOE Average | Description           |     | Range |          |
| ---------------------- | ----------- | --------------------- | --- | ----- | -------- |
| Incidence              | 2           | Excellent             |     | 1-2   |          |
| Functional Impairment  | 3           | Good                  |     | 2.1-3 |          |
| Best Case / Worst Case | 4           | Fair                  |     | 3.1-4 |          |
| EVAC / LOCL            | 2           | Poor                  |     | 4.1-5 |          |
| Resources              | 2           |                       |     |       |          |
| QUALITY OF EVIDENCE    | 2.6         |                       |     |       |          |
| 5/11/2020 5:37:41 PM   |             | Nephrolithiasis Cliff |     |       | page: 11 |

Reference List
Reference
American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press;
2008.
American Medical Association. Urinary and Reproductive System. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment.
6th ed. Chicago: American Medical Association Press; 2008. p. 129-58.
American Medical Association. Lower Extremities. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago:
American Medical Association Press; 2008. p. 493-556.
Gilkey KM, McRae MP, Griffin EA, Kalluri AS, Myers JG. Bayesian Analysis For Risk Assessment of Selected Medical Events in Support of the
Integrated Medical Model Effort. Technical Paper. Cleveland, OH: National Aeronautics and Space Administration, Glenn Research Center;
2012. Report No.: NASA/TP-2012-217120.
Hurst V. HMS Presentation. 2-25-2011.
International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.
Johnston S, Arenare B, Smart K. Medical Evacuation and Vehicles for Transport. In: Barratt M, Pool S, editors. Principles of Clinical Medicine
for Space Flight.New York: Springer; 2008. p. 139-61.
Jones JA, Pietrzyk RA, Whitson PA. Renal and Genitourinary Concerns. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space
Flight.New York: Springer; 2008. p. 273-91.
Jones JA, Sargsyan AE, Barr YR, Melton S, Hamilton DR, Dulchavsky SA, et al. Diagnostic ultrasound at MACH 20: retroperitoneal and pelvic
imaging in space. Ultrasound Med Biol 2009 Jul;35(7):1059-67.
Litwin M, Saigak C. Urologic Diseases in America: Interim Compendium. Washington, DC: US Department of Health and Human Services,
Public Health Service; National Institutes of Health; National Institute of Diabetes and Digestive and Kidney Diseases; US Government
Publishing Office; 2004.
Miller OF, Kane CJ. Time to stone passage for observed ureteral calculi: a guide for patient education. J Urol 1999 Sep;162(3 Pt 1):688-90.
Myers J, Griffin D. Forecasting Renal Stone Occurence for the Integrated Medical Model. 10-9-2009.
NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations
Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).
NASA OCHMO 80771201MED. NASA Crewmembers Medical Standards. Houston: NASA; 2007.
Pearle M, Calhoum E, Curhan GC. Urolithiasis. In: Litwin MS, Saigal CS, editors. Urologic Diseases in America.Washington DC: US
Department of Health and Human Services, Public Health Service, National Institutes of Health, National Institute of Diabetes and Digestive
and Kidney Diseases. Washington, DC: US Government Printing Office; 2007. p. 282-319.
Pietrzyk RA, Feiveson AH, Whitson PA. Mathematical model to estimate risk of calcium-containing renal stones. Miner Electrolyte Metab 1999
May;25(3):199-203.
Pietrzyk RA, Jones JA, Sams CF, Whitson PA. Renal stone formation among astronauts. Aviat Space Environ Med 2007 Apr;78(4 Suppl):A9-
13.
Preminger GM, Tiselius HG, Assimos DG, Alken P, Buck C, Gallucci M, et al. 2007 guideline for the management of ureteral calculi. J Urol
2007 Dec;178(6):2418-34.
Sargsyan AE, Hamilton DR, Melton SL, Young J. The International Space Station Ultrasound Imaging Capability Overview for Prospective
Users. Houston: NASA; 2006 Dec. Report No.: TP-2006-213731.
Sibonga J, Jones JA, Myers J, Lewandowski B, Lang T, Keyak J. Evidence Book Risk of Bone Fracture. Houston: NASA - HRP; 2008 Mar.
Report No.: HRP-47060.
Sibonga J, Pietrzyk RA, Jones JA, Zerwekh J, Odvina C. Evidence Book Risk of Renal Stone Formation. Houston: NASA - HRP; 2008 Mar.
Report No.: HRP-47060.
Stroup SP, Auge BK. Important military role for medical expulsion therapy of urolithiasis. Mil Med 2008 Apr;173(4):393-8.
Wear M. Renal Stones. Lifetime Surveillance of Astronaut Health (LSAH). 7-25-2007.
5/11/2020 5:37:41 PM Nephrolithiasis Cliff page: 12

Reference
Whitson PA, Pietrzyk RA, Pak CY, Cintron NM. Alterations in renal stone risk factors after space flight. J Urol 1993 Sep;150(3):803-7.
Whitson PA, Pietrzyk RA, Pak CY. Renal stone risk assessment during Space Shuttle flights. J Urol 1997 Dec;158(6):2305-10.
Whitson PA, Pietrzyk RA, Jones JA, Nelman-Gonzalez M, Hudson EK, Sams CF. Effect of potassium citrate therapy on the risk of renal stone
formation during spaceflight. J Urol 2009 Nov;182(5):2490-6.
5/11/2020 5:37:41 PM Nephrolithiasis Cliff page: 13
