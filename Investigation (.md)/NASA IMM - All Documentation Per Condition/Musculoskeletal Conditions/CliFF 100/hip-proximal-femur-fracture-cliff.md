# Hip Proximal Femur Fracture CLiFF

[View original PDF](https://drive.google.com/file/d/1YxymDq6NucelW9tzF-KuoRRCxBw8GWev/view) · **12 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Musculoskeletal Conditions/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Data Characteristics](#data-characteristics)
- [Incidence Comments](#incidence-comments)

---

### Hip/Proximal Femur Fracture Cliff

## Branch Baseline

The hip joint is a large multiaxial ball-and-socket synovial joint, enclosed by a thick articular capsule. The hip joint is designed for stability and a wide range of movement. The length, angle, and narrow circumference of the femoral neck permit substantial range of motion at the hip but also subject the femoral neck to incredible shearing forces. A fracture results when these forces exceed the strength of the bone. The intertrochanteric line is an oblique line that connects the greater and lesser trochanters, dividing the femoral neck from the shaft. Hip fractures involve fracture of any aspect of the proximal femur, from the head to the first 4-5 cm of the subtrochanteric area.

Femoral neck fractures often disrupt the blood supply to the head of the femur. If the blood vessels are ruptured, the fragment of bone may receive no blood and undergo avascular necrosis (AVN).

Hip fractures can be classified based on their relation to the hip capsule (intracapsular and extracapsular), geographic location (head, neck, trochanteric, intertrochanteric, and subtrochanteric), and degree of displacement.

Greater trochanteric fractures usually result from avulsion injuries at the insertion of the gluteus medius. Lesser trochanteric fractures may be caused by avulsion injuries of the iliopsoas secondary to forceful contraction. These are most common in children and young athletes (e.g., dancers, gymnasts). Subtrochanteric fractures have a bimodal age distribution and are seen most often in those aged 20-40 years in association with high-energy trauma and in patients older than 60 years secondary to falls on osteoporotic bones. (Davenport, 2010)

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

- Data Category: Model

- Space Adaptation: No

- Incidence Type: Rate

## Distribution Data

- Incidence: Lognormal

- Occurrence: Poisson

5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 1

## Data Characteristics

- Mean: 0.0001515685

- Standard Deviation: 0.0005778346

## Incidence Comments

After more than 40 years of space travel, there have been no lumbar spine fractures reported during missions in low Earth orbit or in the immediate post flight time frame (Sibonga, 2008). Lacking phenomenological data on fracture risk in space, Glenn Research Center have developed a predictive tool based on biomechanical and bone loading models at any gravitational level of interest. Wrist fracture was the most likely type of fracture, followed by spinal and hip fracture (Nelson, 2009). Estimates of ISS fracture probability for IMM models serve per 180 days mission is 0.0001515685 mean and 0.0005778346 standard deviation. Glenn developed four biomechanical loading models to estimate the loading at the most vulnerable skeletal locations during specific events. The hip fracture probability model utilizes a probabilistic modeling approach. The probability of hip fracture consists of two parts: 1) the impact probability and 2) the fracture risk index probability. A Monte Carlo probabilistic simulation was carried out for each mission scenario and biomechanical models (Lewandowski, 2013). In the IMM, times to fracture event are simulated from an exponential distribution given a set rate. There is simulated from a log normal distribution with mean and std. deviation. Thus in its current form, the probabilities of fracture events within a mission cannot be used to inform the IMM. Therefore, we need to transform the probabilities of a fracture in a given mission type to a rate that can be used to simulate the time to event in simulation settings.

This information can then be used to update the current version of the IMM (Koslovsky, 2017).

### Information Regarding Prevention

Selection criteria

- Disqualifying conditions in the musculoskeletal category include: Traumatic, inflammatory, degenerative, congenital (or hereditary) and

metabolic disorders, or disease of any bone, joint, muscle or supporting structure that interferes with the performance of duties; chronic arthritis with functional disability that interferes with the performance of duties; benign tumors or cysts, single or multiple, sufficiently large to interfere with performance of duties, or to create a fracture potential. Osteochondromatosis or multiple cartilaginous exostoses that interfere with performance of duties; history of osteochondromatosis or multiple cartilaginous exostoses that have been successfully surgically excised requires special consideration by the MSMB. Joint instability (recurrent subluxations or dislocations of an articulation); history of joint instability that has been medically or surgically corrected requires special consideration by the MSMB. Intra-articular loose bodies in any joint (osteocartilaginous or metallic foreign objects) that interfere with performance of duties; history of intra-articular loose bodies in any joint surgically removed with no residual dysfunction requires special consideration by the MSMB. Non-union of fractures; mal-union of fractures that interferes with performance of duties; any fracture in which hardware (e.g., rod, plate, pin or screw) was used for fixation, if the fixation devices remain in place, will require orthopedic consultation and special consideration by the MSMB. Less than functional range of motion and stability of all joints. A total range of motion of the wrist of 70 degrees dorsal extension plus 80 degrees palmar flexion: ulnar deviation 45 degrees plus 15 degrees radial deviation. Minor deviations from the range of motion of the wrist require special consideration by the MSMB. Pronation of the hand to 90 degrees and supination to 80 degrees. Chronic or recurrent bursitis, tendinitis, and synovitis sufficient to interfere with the performance of duties. Osteopenia requires special consideration by the MSMB and will require endocrine evaluation and possibly other specialized scanning techniques. The WHO definition of osteopenia is based on a DEXA measurement of Bone Mineral Density of total lumbar spine less than 0.937gm/cm2 or femoral neck less than 0.738 gm/cm2, or greater trochanter of the femur less than 0.602 gm/cm2. T-score: -1.0 to -2.5 SD. Osteoporosis: The WHO definition of osteoporosis is based on a DEXA measurement of Bone Mineral Density of total lumbar spine less than 0.772 gm/cm2 or femoral neck less than 0.572 gm/cm2 or greater trochanter of the femur less than 0.451 gm/cm2. T-score: Lower than -2.5 SD. (NASA, 2007), (International Space Station Program, 2009).

Other NASA requirements and documents support safety first. However, injuries result from an accident and there are no other medical preventive measures available. Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Lewandowski, 2013 3 Incidence Koslovsky, 2017 3 Incidence 5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 2

5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 3

Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

## Incidence

- Data Category: Model

- Space Adaptation: No

- Incidence Type: Rate

## Distribution Data

- Incidence: Lognormal

- Occurrence: Poisson

### Female Data Characteristics

- Mean: 0.000112259

- Standard Deviation: 0.00039585

### Male Data Characteristics

- Mean: 0.00041818

- Standard Deviation: 0.00130529

5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 4

## Incidence Comments

After more than 40 years of space travel, it is assumed that fractures have not occurred during missions in low earth orbit nor in the immediate post flight time frame. (Sibonga, 2008)

Lacking phenomenological data on fracture risk in space, Glenn Research Center have developed a predictive tool based on biomechanical and bone loading models at any gravitational level of interest. Wrist fracture is the most likely type of fracture followed by spinal and hip fracture. (Nelson, 2009) Estimates of ISS fracture probability for IMM models per 180 days mission are: 0.0000553 cases for females, Standard Deviation (SD) 0.000195; 0.000206 cases for males; SD 0.000643 (Licata, 2007); (Lewandowski, 2011). We converted to person-year rates to serve as our model incidence: females 0.000112259, SD 0.00039585, males 0.00041818, and SD 0.00130529 The fracture risk index (FRI) is a measure used to help assess the likelihood that a fracture will occur during a particular loading event. FRI is defined as the ratio of load at the wrist during an impact to the strength of the bone.

An FRI of less than one indicates that the bone strength is greater than the applied load, or that it should be capable of withstanding the applied load. An FRI of greater than one indicates that the load is greater than the strength of the bone and that it is likely that a fracture could occur.

The FRI is converted to a probability, by assuming that there is a range surrounding an FRI = 1 where there is uncertainty as to whether or not a fracture will occur. A FRI that is significantly above 1 corresponds to a probability of fracture of 1. A FRI that is significantly below 1 corresponds to a probability of fracture of 0. A sigmoidal curve is used to define this relation between FRI and fracture probability.

In the dynamic fall scenarios, we assumed that the crew was situated on the reduced-gravity surface of the Moon or Mars. The probabilities are therefore based only on the portion of the mission that occurred on the surface. In a fall to the side, we assumed that the astronaut was initially standing on solid ground and impacted the ground with the hip. The natural response to such a fall is to extend a hand toward the ground to absorb some of the impact. While spacesuits are cumbersome and the field of view is limited, we assumed that only a proportion of the falls would be broken in this way. This kind of active response by the astronaut could protect the hip, but lead to a wrist fracture, which we found to be the most likely type of fracture. While this type of injury is unlikely to be fatal, it can cause great discomfort and jeopardize mission success.

The availability of studies in the literature permitted the inclusion of load orientation into the Bone Fracture Risk Model (BFxRM) model of femoral fracture. In a fall to the side, the failure load for the proximal femur is at a minimum for a posterolateral impact.

Hip fracture was unlikely during extra-vehicular activity for any mission scenario. Sensitivity analysis indicated that the spacesuit padding played a large role in hip protection, although the suit’s bulk, lack of flexibility and reduced peripheral vision are themselves culprits in the frequency of falls during EVAs. Future, more form-fitting spacesuits, may reduce fracture incidence by improving an astronaut’s agility with better field of view and by diminished mass. No practical differences in fracture risk emerged in comparing our lunar short and long missions. (Nelson, 2009)

### Information Regarding Prevention

Selection criteria Disqualifying conditions in the musculoskeletal category include: Traumatic, inflammatory, degenerative, congenital and metabolic disorders, or disease of any bone, joint, muscle or supporting structure that interferes with the performance of duties; chronic arthritis with functional disability that interferes with the performance of duties; benign tumors or cysts, single or multiple, sufficiently large to interfere with performance of duties, or to create a fracture potential. Osteochondromatosis or multiple cartilaginous exostoses that interfere with performance of duties; Joint instability e.g. recurrent subluxations or dislocations of an articulation;. Intra-articular loose bodies, osteocartilaginous or metallic foreign objects, in any joint that interfere with performance of duties; Non- union of fractures; mal-union of fractures that interferes with performance of duties. Less than functional range of motion and stability of all joints. A total range of motion of the wrist of 70 degrees dorsal extension plus 80 degrees palmar flexion: ulnar deviation 45 degrees plus 15 degrees radial deviation. Pronation of the hand to 90 degrees and supination to 80 degrees. Chronic or recurrent bursitis, tendinitis, and synovitis sufficient to interfere with the performance of duties.

- Conditions requiring special consideration by the MSMB include: history of osteochondromatosis or multiple cartilaginous exostoses that have

been successfully surgically excised; history of joint instability that has been medically or surgically corrected; history of intra-articular loose bodies in any joint surgically removed with no residual; any fracture in which hardware, e.g. rod, plate, pin or screw, was used for fixation, if the fixation devices remain in place, will require orthopedic consultation; Minor deviations from the range of motion of the wrist; Osteopenia will require endocrine evaluation and possibly other specialized scanning techniques.

The WHO definition of osteopenia is based on a DEXA measurement of Bone Mineral Density of total lumbar spine less than 0.937gm/cm2 or femoral neck less than 0.738 gm/cm2, or greater trochanter of the femur less than 0.602 gm/cm2. T-score: -1.0 to -2.5 SD. Osteoporosis. The WHO definition of osteoporosis is based on a DEXA measurement of Bone Mineral Density of total lumbar spine less than 0.772 gm/cm2 or femoral neck less than 0.572 gm/cm2 or greater trochanter of the femur less than 0.451 gm/cm2. T-score: Lower than -2.5 SD. (NASA, 2007); (International Space Station Program, 2009)

Other NASA requirements and documents support safety first. However, injuries result from an accident and there are no real medical preventive measures available. 5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 5

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Licata, 2007 2 Incidence Lewandowski, 2011 2 Incidence

### Alternative Incidence Data

Analog populations A longitudinal cohort study of 4,122 US Army deployed to Iraq for 15 months was performed [ Belmont, 2010 ]. A casualty in customary military usage means active duty service member lost to the theater of operations for medical reasons. This study covers only disease and non battle injuries (DNBI). Musculoskeletal injuries were classified in three major categories: upper extremity, lower extremity and axial spine There were 667 total musculoskeletal injuries; with 19.7% medevacs (13/66), and no deaths. There were a total of 66 fractures; of which 15 occurred to the lower extremity, 9 returned to duty and 6 required MEDEVCAS By location, hip injuries accounted for 2.5% . Musculoskeletal injury incidence rates were fivefold greater than the general population. By gender, the incidence for females was 408.6 and for males 244.0 both per 1000 combat years. Overall 257.0 per 1000 combat years. We calculated rates per person year 0.4086, 0.244, and 0.257 respectively. Hip fracture (2.5% ) amounts to female 0.0010215, male 0.0061, and overall 0.006425 per person-years.

A nine-month study of US Navy medical communications and evacuations at sea [ Nice, 1987 ]determined that 31% of medical communications were related to injuries, mainly fractures and lacerations and 36% of medevacs included fractures and lacerations. Medevac was defined as the non-routine transfer of a patient from a ship at sea for the purpose of receiving more definitive care.

Another study among US Navy Submarines [ Thomas, 2003 ]determined that the incidence of arthropathies was 0.007 (0.7/100) for officers and 0.011 (1.1/100) for enlisted men per person-years. Information was not stratified by type of joint. Among officers most lost duty days were due to musculoskeletal conditions (46 days), and among enlisted men lost duty days (350 days) for musculoskeletal conditions were third, after injury and digestive. The population was composed of 240 submarine patrols, between 1 January 1997 and 30 September 2000; total of 1389 officers and 11,952 enlisted crew members served aboard participating submarines for 215,086 and 1,955,521 person-days at sea.

Non Analog populations Terrestrial population hip fracture data for young adults is scarce.

Overall injury incidence in the Netherlands was 70 per 1000 person-years. For the age groups 0–14, 15–44, 45–64, and 65+, ED attendances per 1000 person years were 85, 85, 43, and 49, respectively. Intentional injuries account for <5% of all injuries, 52% of injuries are home injuries (26% falls, 27% non-falls). The proportions of traffic, sports, and occupational injuries are 14%, 17%, and 10%, respectively. [ Meerding, 2006 ].

Incidence rates per person years for the 15-44 and 45-64 cohorts were 0.085 and 0.043 respectively. To calculate an incidence more approximate to our astronaut population, we deleted 5% intentional injuries, 14% traffic and 17% sports, total 36%, which is 0.0544 and 0.0023392 for the 15-44 and 45-64 cohorts. Hip fracture accounted for 1.6% of total injuries, ergo hip fracture incidence is 0.0008704 and 0.00374272 respectively. 5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 6

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.75 3 - 35 72 - 156 - 240 0 0 0 (best case scenario %: 0 - 13) ISS-based Treatment 100 1.5 21 - 57 72 - 156 - 240 0 - 57 100 0 (worst case scenario %: 87 - 100) Untreated Best Case 0 0 21 - 57 72 - 156 - 240 0 - 35 100 0 Untreated Worst Case 0 0 38 - 82 72 - 156 - 240 38 - 82 100 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.)

### Scenario Comments

The best case scenario is defined as an incomplete, non-displaced hip fracture.

The worst case scenario is defined as an unstable, displaced, or intra-articular fracture.

Percentages of best case vs. worst case scenario Based on terrestrial data (Heikkinen, 2005), 13% of patients in Europe had a non displaced fracture. To allow for uncertainty, we are estimating a 0-13% of best case scenario, thus the worst case percentage is 87-100%. 5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 7

### Best Case Comments

Hip Fracture functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Hip regional grid (LEI) ratings are based on Table 16-4; pp.512-515. (American Medical Association, 2008). The Hip regional grid gradings are converted to Whole Person Impairment (WPI) which is based on Table 16-1, p 495 and Table 16-10 pp.530-531. (American Medical Association, 2008) Complex Regional Pain (LEI) is based on Table 16-15, p.541. The CRPS (LEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 and Table 16-10 pp.530-531. (American Medical Association, 2008) Station and gait disorders ratings are based on Table 13-12, p.336. (American Medical Association, 2008) Total FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008).

By definition in Clinical Phase I, FI is 100%. Duration to follow procedures specified in ISS checklist, i.e. physical exam, splint, oral or intramuscular medications, and observation period for the best case scenario, is estimated in 45 minutes. During Clinical Phase II, FI is estimated in 3 to 35%. Duration is estimated in 72 to 240 hours, or 3 to 10 days. In Clinical Phase III, full recovery is expected and FI is 0%. By definition EVAC and LOCL would not be expected for the best case scenario.

### Worst Case Comments

Hip Fracture functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Hip regional grid (LEI) ratings are based on Table 16-4; pp.512-515. (American Medical Association, 2008). The Hip regional grid gradings are converted to Whole Person Impairment (WPI) which is based on Table 16-1, p 495 and Table 16-10 pp.530-531. (American Medical Association, 2008) Complex Regional Pain (LEI) is based on Table 16-15, p.541. The CRPS (LEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 and Table 16-10 pp.530-531. (American Medical Association, 2008) Station and gait disorders ratings are based on Table 13-12, p.336. (American Medical Association, 2008)Total FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008).

By definition in Clinical Phase I, FI is 100%. Duration to follow procedures specified in ISS checklist, i.e. physical exam, vital signs, dressing to contain bleeding, oral or intramuscular medications, is estimated in 1.5 hours. During Clinical Phase II, FI is estimated in 21 to 57%. Bone healing time is about 6 weeks, 42 days. However, evacuation is necessary for definitive care, we are assigning duration 72-240 hours, 3 to 10 days, similar to the best case scenario.. In Clinical Phase III, full recovery may or may not occur and FI is estimated at 0-57%. EVAC is estimated at 100% to allow for transfer to a definitive care facility. MEDEVACS had occurred for lower extremity fractures in analog populations. (Belmont,

2010) Fractures are a class IIb event, manageable with the HMS but may require return of the astronaut at the next available opportunity for

further evaluation and treatment. (Johnston, 2008)None of the astronaut corps hospitalizations has been for hip fracture.

### Untreated Best Case Comments

Hip Fracture functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Hip regional grid (LEI) ratings are based on Table 16-4; pp.512-515. (American Medical Association, 2008). The Hip regional grid gradings are converted to Whole Person Impairment (WPI) which is based on Table 16-1, p 495 and Table 16-10 pp.530-531. (American Medical Association, 2008) Complex Regional Pain (LEI) is based on Table 16-15, p.541. The CRPS (LEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 and Table 16-10 pp.530-531. (American Medical Association, 2008) Station and gait disorders ratings are based on Table 13-12, p.336. (American Medical Association, 2008) Total FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008).

During Clinical Phase II, FI is estimated in 21 to 57%. Duration is 72 to 240 hours, or 3 to 10 days, similar to the treated best case scenario. In Clinical Phase III, recovery may or may not occur. A splint can be improvised with on board supplies, but there are not analgesics to treat pain. FI is estimated at 0-35%. EVAC is estimated at 100% for the untreated best case. By definition LOCL would not be expected for this scenario.

### Untreated Worst Case Comments

Hip Fracture functional impairments (FI) calculation follows the IMM severe non-space adaptation template. Hip regional grid (LEI) ratings are based on Table 16-4; pp.512-515. (American Medical Association, 2008). The Hip regional grid gradings are converted to Whole Person Impairment (WPI) which is based on Table 16-1, p 495 and Table 16-10 pp.530-531. (American Medical Association, 2008) Complex Regional Pain (LEI) is based on Table 16-15, p.541. The CRPS (LEI) ratings are then converted to percentage of Whole Person Impairment (WPI), which are based on Table 16-1, p 495 and Table 16-10 pp.530-531. (American Medical Association, 2008) Station and gait disorders ratings are based on Table 13-12, p.336. (American Medical Association, 2008) Total FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606 (American Medical Association, 2008).

During Clinical Phase II, FI is estimated in 38 to 82%. Duration is estimated at 72 to 240, or 3 to 10 days, similar to the treated worst case scenario. In Clinical Phase III, recovery is unlikely and FI remains 38-82%. EVAC is estimated in 100%. LOCL is not expected. 5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 8

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |
| ---------------------------------- | --------- | ------------ |
| American Medical Association, 2008 | 3 | FI |
| American Medical Association, 2008 | 3 | FI |
| American Medical Association, 2008 | 3 | FI |
| Belmont, Jr., 2010 | 2 | EVAC |
| Johnston, 2008 | 2 | EVAC |
| Heikkinen, 2005 | 4 | BCWC |

5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 9

The Resource Table (RT) Units

|  | Units Units | Available |  |
| -------------------- | ----------------- | ------------------ | ---------------------- |
|  | Required Required | At Start |  |
|  | Best Worst | Of |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |
| Ace bandage 2 inches | 1 1 | 1 No | Yes For immobilization |

Ace bandage 3 inches 1 1 1 No Yes Elastic bandage (also known as an ACE bandage, elastic wrap or compression bandage) is a "stretchable bandage used to create localized pressure�and secure splint

| Ace bandage 4 inches | 1 1 | 1 No | Yes For immobilization |
| -------------------- | --- | ---- | ---------------------- |

Bandaid strip 0 2 20 Yes No Small adhesive bandages, to cover a wound Blood Pressure Cuff (regular, 0 1 2 No Yes Measure blood pressure large)

| Blood Pressure Monitor | 0 1 | 1 No | Yes Measure blood pressure |
| ------------------------ | ---- | ------ | -------------------------------- |
| BZK wipes | 0 4 | 60 Yes | No Cleanse skin. |
| Camera | 0 1 | 1 No | No To document wound description |
| Dilaudid (Hydromorphone) | 0 18 | 18 Yes | Yes Pain management |

2mg/mL, 1mL syringe

| Gauze pads (4x4) | 0 4 | 50 Yes | No To control bleeding |
| ---------------- | --------- | ------ | ---------------------- |
| Medical tape | 0.03 0.06 | 5 Yes | No To secure bandage |

Motrin (Ibuprofen) 400mg 20 30 400 Yes Yes Pain relief - second line Nitrile gloves (large, medium, and 0 2 30 Yes No Personal Protective equipment for CMO small) (pair) SAM splint - Leg/Arm Splint 1 1 1 No Yes To immobilizehip/lower extremity

| Scissors - Trauma | 0 1 | 1 No | Yes To cut gauze, tape |
| ----------------- | --- | ---- | ---------------------- |

Sharps container 0 1 40 No No To dispose of medical waste such as used medical needles, scalpels, IV catheters, razors, vials

| Thermometer | 1 1 | 1 No | No To measure temperature |
| ----------- | --- | ---- | ------------------------- |

Valium (Diazepam) 5 mg/mL, 2 0 4 2 Yes Yes To mitigate muscle spasm mL syringe Vicodin HP (Hydrocodone/ 8 16 30 Yes Yes Pain relief - third line Acetaminophen HP) 10 mg/660 mg 5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 10

### Resource Comments

ISS medical checklist includes procedures for bone fracture and pain control. All resources listed are available on board.

The table was revised on 7/28/2011. We added resources for wound care. In case of bleeding, resources are included in the Shock/Circulatory Collapse CliFF. Pain medication has been added from the Pain Relief Section in the ISS Medical Checklist (Mission Operations Directorate (MOD), 2011). Comparison between the Med Checklist and Urban treatment guidelines ISS Checklist main focus is emergency immobilization of the joint and pain relief These procedures are similar to pre-hospital and emergency room treatment standards of care (Parks, 2011)

Terrestrially, patients would be referred to orthopedic referral and surgical treatment as indicated.

Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |
| ----------------------------------------------- | --- | --------- | ------------ | --- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 | Resources |  |

### Level Of Evidence

| Input Data | LOE Average | Description |  | Range |
| ---------------------- | ----------- | ----------- | --- | ----- |
| Incidence | 3 | Excellent |  | 1-2 |
| Functional Impairment | 3 | Good |  | 2.1-3 |
| Best Case / Worst Case | 4 | Fair |  | 3.1-4 |
| EVAC / LOCL | 2 | Poor |  | 4.1-5 |
| Resources | 2 |  |  |  |
| QUALITY OF EVIDENCE | 2.8 |  |  |  |

5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 11

### Reference List

Reference American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. American Medical Association. Central and Peripheral Nervous System. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 321-45.

American Medical Association. Lower Extremities. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 493-556.

Belmont PJ, Jr., Goodman GP, Waterman B, DeZee K, Burks R, Owens BD. Disease and nonbattle injuries sustained by a U.S. Army Brigade Combat Team during Operation Iraqi Freedom. Mil Med 2010 Jul;175(7):469-76.

Davenport M. Hip Fracture in Emergency Medicine Treatment and Management. Kulkani R, editor. WebMD - Medscape Reference . 9-22-

2010. New York, WebMD. 7-28-2011.

Heikkinen T, Partanen J, Ristiniemi J, Jalovaara P. Evaluation of 238 consecutive patients with the extended data set of the Standardised Audit for Hip Fractures in Europe (SAHFE). Disabil Rehabil 2005 Sep 30;27(18-19):1107-15.

International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

Johnston S, Arenare B, Smart K. Medical Evacuation and Vehicles for Transport. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 139-61.

Koslovsky M. Hip, Lumbar Spine, and Wrist Fracture Model Probability and Distributions. NASA, Johnson Space Center; 2017.

Lewandowski B. Incidence rates for hip and lumbar spine fracture. Lopez V, editor. http://www.grc.nasa.gov/WWW/RT/2006/PT/PTH- myers.html . 8-1-2011. Cleveland, NASA. 8-1-2011.

Lewandowski B. Hip Fracture Probablity Calculation. NASA, Glenn Research Center; 2013.

Licata A, Myers JB, ., Lewandowski B, Nelson ES. Estimate of ISS fracture Probability for IMM models. http://www.grc.nasa.gov/WWW/RT/2006/PT/PTH-myers.html . 8-30-2007. Cleveland, NASA. 7-26-2011.

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

NASA OCHMO 80771201MED. NASA Crewmembers Medical Standards. Houston: NASA; 2007.

Nelson ES, Lewandowski B, Licata A, Myers JG. Development and validation of a predictive bone fracture risk model for astronauts. Ann Biomed Eng 2009 Nov;37(11):2337-59. Parks SN, Kaufmann CR, Hoyt DB, Meredith JW, Acker J, Ali J, et al. Musculoskeletal Trauma. Advanced Trauma Life Support for Doctors. 7th ed. Chicago: American College of Surgeons; 2011. p. 205-29.

Sibonga J, Jones JA, Myers J, Lewandowski B, Lang T, Keyak J. Evidence Book Risk of Bone Fracture. Houston: NASA - HRP; 2008 Mar.

Report No.: HRP-47060. 5/11/2020 5:26:24 PM Hip/Proximal Femur Fracture Cliff page: 12

---

## Source metadata

```yaml
source_filename: "hip-proximal-femur-fracture-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Musculoskeletal Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/1YxymDq6NucelW9tzF-KuoRRCxBw8GWev/view"
source_drive_id: "1YxymDq6NucelW9tzF-KuoRRCxBw8GWev"
source_sha256: ba06c7ec54b6f199654ecf67fbfac7c1d970593ceed27fb942e73f8d52ef3382
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 12
ocr_performed: false
```
