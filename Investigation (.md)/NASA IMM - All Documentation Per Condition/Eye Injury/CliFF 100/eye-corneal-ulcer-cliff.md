# Eye Corneal Ulcer CLiFF

[View original PDF](https://drive.google.com/file/d/146WsHjJbpQxQNR5R_RjhGvmeddErMEQC/view) · **12 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Eye Injury/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Incidence Comments](#incidence-comments)

---

### Eye Corneal Ulcer Cliff

## Branch Baseline

A corneal ulcer is a corneal epithelial defect with underlying inflammation, which soon results in necrosis of corneal tissue, due to invasion by bacteria, fungi, viruses, or Acanthamoeba. It can be initiated by mechanical trauma or nutritional deficiencies. Symptoms are progressive redness, foreign body sensation, ache, photophobia, and lacrimation. Diagnosis is by slit-lamp examination, fluorescein staining, and microbial studies.

Treatment with topical antimicrobials and often dilating drops is urgent and requires an ophthalmologist. (Merck Manual, 2008)

Corneal ulcer begins as a corneal epithelial defect that stains with fluorescein and an underlying dull, grayish, circumscribed superficial opacity.

Subsequently, the ulcer suppurates and necroses to form an excavated ulcer. Considerable circumcorneal conjunctival hyperemia is usual. In long- standing cases, blood vessels may grow in from the limbus (corneal neovascularization). The ulcer may spread to involve the width of the cornea, may penetrate deeply, or both. Hypopyon (layered WBCs in the anterior chamber) may occur. Corneal ulcers due to Acanthamoeba are often intensely painful and may show transient corneal epithelial defects, multiple corneal stromal infiltrates, and, later, a large ring-shaped infiltrate. Fungal ulcers, which are more chronic than bacterial ulcers, are densely infiltrated and show occasional discrete islands of infiltrate (satellite lesions) at the periphery. (Merck Manual, 2008)

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

- Data Category: Processed In-flight

- Space Adaptation: No

- Incidence Type: Rate

## Distribution Data

- Incidence: Gamma

- Occurrence: Poisson

5/14/2020 2:14:53 PM Eye Corneal Ulcer Cliff page: 1

### Contacts Data Characteristics

| Events: | 1 |  |
| ----------------------------------------- | ----- | --- |
| Person Years: | 7.58 |  |
| a_prior: | 0.22 |  |
| b_prior: | 22.91 |  |
| a_post (Events + a_prior): | 1.22 |  |
| b_post (Person Years - Events + b_prior): | 29.49 |  |

### No Contacts Data Characteristics

| Events: | 0 |  |
| ----------------------------------------- | ------- | --- |
| Person Years: | 10.51 |  |
| a_prior: | 9.18 |  |
| b_prior: | 6233.36 |  |
| a_post (Events + a_prior): | 9.18 |  |
| b_post (Person Years - Events + b_prior): | 6243.87 |  |

## Incidence Comments

There is very little data collected regarding astronaut incidence of Eye Corneal Ulcer for US crew including Apollo, Skylab, MIR, ISS Exp 1- 39/40, and STS 01-135 missions. We conjectured that using the raw data alone to estimate an incidence rate for Eye Corneal Ulcer may bias the model, since the estimate would be highly unstable. Therefore, it was of interest to take a Bayesian approach when modeling the incidence rate for IMM 4.1. This approach allows the model to take into account observed astronaut data as well as prior information from the literature and clinical expertise. Unfortunately, the current literature base for Eye Corneal Ulcer is sparse and lacks generalizability as well as internal consistency. Therefore, we determined it was important to select a weakly informative prior that accommodated the variability observed across research studies as well as the uncertainty in the quality of their estimates. By accounting for these sources of variability, we intrinsically placed less importance on the selection of the mean. To determine the parameterization for the Bayesian model (i.e., alpha and beta hyperparameters for the gamma prior), we performed a sensitivity analysis with priors of incrementally larger variances at a fixed mean. We chose to use the point estimate from Jeng et el study for the mean, as to our knowledge, it was the only article that reported incidences explicitly for both contact and non-contact wearers. Based on the results of the sensitivity analysis, we chose the prior that accounted for the largest amount of uncertainty that did not bias the overall results of the model. Ultimately, this strategy was chosen under two assumptions (1) the initial parameterization should not be overly influential on the results with such a limited sample size and literature base (2) as more data are collected, the model can be updated to better represent the population. (Jeng, 2010)(Saile L., 2017)

| 5/14/2020 2:14:53 PM | Eye Corneal Ulcer Cliff | page: 2 |
| -------------------- | ----------------------- | ------- |
### Information Regarding Prevention

### Information Regarding Prevention

Selection criteria

- Disqualifying conditions in the eye category include: disease of either eye or supporting structure that may interfere with the performance of

duties; any condition of the eyelids that impairs normal eyelid function; chronic blepharitis or blepharospasm; dacrocystitis; herpetic ulcer or history of herpetic ulcer; and inflammation of the uveal tract (iris, ciliary body, choroid) , acute, chronic or recurrent with the exception of uncomplicated post-traumatic iritis.(International Space Station Program, 2009)

Contingency measures A corneal abrasion, foreign body, or any condition that leads to an epithelial defect may precipitate the development of bacterial keratitis. Ocular injuries should be treated promptly with topical antibiotics. Use of contact lenses is a risk factor. Eye pain in contact lens user on space should be assumed to be a bacterial ulcer. Cultures are not available on space. (Manuel, 2008)

Other Portable ultrasound devices have been tested terrestrially in a gelatinous ocular model for use on board. They may be used to detect foreign objects of varying location, size (0.5-2 mm), and material (glass, plastic, metal) It can be used by operators with varying training to detect the presence, location, and composition of intraocular foreign bodies with high sensitivity, specificity, and accuracy. (Sargsyan, 2008)

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Jeng, 2010 4 Incidence Saile L., 2017 1 Incidence 5/14/2020 2:14:53 PM Eye Corneal Ulcer Cliff page: 3

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

### Contacts Data Characteristics

| Fixed Rate: | 0.001274 |  |
| ----------- | -------- | --- |

### No Contacts Data Characteristics

| Fixed Rate: | 0.00014 |  |
| ----------- | ------- | --- |

## Incidence Comments

Contacts No corneal ulcer has been reported in space flight. Analog submarine populations offer a very small sample size (Tansey, 1979)or do not provide details on the type of conditions. (Thomas, 2003)

Eye injury surveillance in the US Department of Defense (DoD) from medical visit data on active duty personnel, 1996 –2005, and causes of eye injury hospitalizations were obtained from the Defense Medical Surveillance System. Eye injury–related ICD-9-CM codes beyond the traditional 800–999 injury code set were included. Eye injury rates among active duty military personnel increased from 1996 to 2005 among both men and women (p less than 0.001), with the highest rates in 2004; 26/1000 person-years and 21/1000 person-years for women and men respectively.

Women consistently had 7%–21% higher rates than men. From 2002–2005, rates were highest for those aged 40 years and older compared to those aged 17–19 years. Leading causes of eye injury hospitalizations were ordnance handling (16.9%), enemy action (13.1%), and fighting (11.9%). The term “eye” referred to hard and soft tissues of the orbital cavity and/or the adjacent and associated structures. Rates were calculated by dividing the number of injuries by the person-years of the DoD active duty population at risk, By age cohort 40 years and older 26 injuries/1000 person-years, or 0.026 person-years. Reported percentages and rates for corneal injury by contact lenses were 4.9%. Corneal scar not otherwise specified (NOS) accounted for 4% of all patient visits for eye injuries. (Hilber, 2010)We estimated incidence rate without corneal scar at 0.001274 (4.9% of 0.026) per person-years. Incidence rate is similar to civilian contact lens users {Jeng, 2010 3627 /id

### No Contacts

A retrospective, cohort study, reviewed all medical records with diagnosis coding for corneal ulcers during a consecutive 12-month period.

Incidence rates were calculated using a dynamic population model. Within the target population of 1 093 210 patients, 302 developed ulcerative keratitis. The incidence of ulcerative keratitis was 27.6 per 100 000 person-years (95% confidence interval, 24.6-30.9). The incidence of corneal ulceration in contact lens wearers was 130.4 per 100 000 person-years (95% confidence interval, 111.3-151.7), with an adjusted relative risk of 9.31 (7.42-11.7; P < .001) compared with non-contact lens wearers, who had an incidence of ulcerative keratitis of 14.0 per 100 000 person- years (11.7-16.6). The incidence of ulcerative keratitis in this population is higher than previously reported. The author concluded that this may be due to the increasing prevalence of contact lens wear. (Jeng, 2010).

| 5/14/2020 2:14:53 PM | Eye Corneal Ulcer Cliff | page: 4 |
| -------------------- | ----------------------- | ------- |
### Information Regarding Prevention

Selection criteria

- Disqualifying conditions in the eye category include: disease of either eye or supporting structure that may interfere with the performance of

duties; any condition of the eyelids that impairs normal eyelid function; chronic blepharitis or blepharospasm; dacrocystitis; herpetic ulcer or history of herpetic ulcer; and inflammation of the uveal tract (iris, ciliary body, choroid) , acute, chronic or recurrent with the exception of uncomplicated post-traumatic iritis.(International Space Station Program, 2009)

Contingency measures A corneal abrasion, foreign body, or any condition that leads to an epithelial defect may precipitate the development of bacterial keratitis. Ocular injuries should be treated promptly with topical antibiotics. Use of contact lenses is a risk factor. Eye pain in contact lens user on space should be assumed to be a bacterial ulcer. Cultures are not available on space. (Manuel, 2008)

Other Portable ultrasound devices have been tested terrestrially in a gelatinous ocular model for use on board. They may be used to detect foreign objects of varying location, size (0.5-2 mm), and material (glass, plastic, metal) It can be used by operators with varying training to detect the presence, location, and composition of intraocular foreign bodies with high sensitivity, specificity, and accuracy. (Sargsyan, 2008) </b Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Hilber, 2010 2 Incidence Jeng, 2010 4 Incidence 4 Incidence

### Alternative Incidence Data

An analysis of 10 years of data collected on Polaris submarine patrols over the ten year period 1963-1973 reported a total of 1685 medical events treated. Illness rates are indicated as new/cases/1000 man-days. There were a total of 48 eye events. 23 eye cases during the 1963-67 period with an illness rate of 0.007; 77 sick days, and 1 EVAC; 25 cases during the 1968-73 period, with an illness rate of 0.006; 44 sick days and, 2 EVACS. . There were 2 incidents of corneal ulcer from a total of 48 diseases of the eyes. They caused 6 sick days. (Table A9). (Tansey, 1979) Eye events (n 48) accounted for 2.85% of the total medical events. Averaging the two period rates, we calculated an incidence of 0.0065 per 1000 man-days (0.0065*365 = 2.3725 / 1000 person years) or 0.0023725 person-years. Corneal ulcer, (2/48) accounted for 4.16% of total eye events, or a rate of 0.000098696. No information on which conditions required EVAC.

Thomas (Thomas, 2003) reported on health of US Navy submarine crews during periods of isolation. ICD-9 codes 360-379 (Eye and adnexa) occurred in 6 officers and 54 enlisted men. Total rate was 1.0 per 100 person years. Eye conditions included keratitis, disorders of the conjunctiva and inflammation of eyelids among officers. There is no similar information for enlisted men. Effect of illness was minimal 0.75 (officers) to 1 day (enlisted men). Only 4.2 officers and 7% of enlisted man had greater than 2 days illnesses. Some eye injury codes may have been included under the injury category, such as 870 laceration, open wound of eye and adnexa, or 918 eye abrasion but it is not possible to segregate this information further. Thomas concluded that officers are most analogous to current space program participants. Majority of medical events reported were minor, non life-threatening, with little or no impact on unit mission.

Of the major diagnostic categories associated with medical communications, 5% were nervous and sense organs which include the eyes. Eye conditions were not among the leading diagnostic categories for MEDEVACs. (Nice, 1987)

Another report by Thomas, detailed 4.2% of procedures recorded during submarine patrols from January 1997 through December 1998 were Fluorescein staining of the eye. (Thomas, 2000) 5/14/2020 2:14:53 PM Eye Corneal Ulcer Cliff page: 5

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 0.3 8 - 47 72 - 204 - 336 0 0 0 (best case scenario %: 98 - 100) ISS-based Treatment 100 0.3 28 - 72 168 - 252 - 336 0 - 72 0 - 100 0 (worst case scenario %: 0 - 2) Untreated Best Case 0 0 28 - 72 72 - 204 - 336 0 - 47 100 0 Untreated Worst Case 0 0 61 - 85 168 - 252 - 336 61 - 85 100 0 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.)

### Scenario Comments

Best case scenario is defined as a bacterial corneal ulcer that responds to treatment Worst case scenario is defined as a fungal or viral corneal ulcer, or a bacterial ulcer, which may or may not respond to treatment Percentages of best versus worst case percentages probabilities based on the Real World Systems data there were no worst cases so to integrate this data into the BC/WC percentage the algorithm developed with the original data set was used for all the medical events in both data sets. Therefore, if the next case is a worst case we would 1/2 or 50% of cases as worst cases. If the next case is best case, we would have 2/2 or 100%. Thus the percentage for worst case is 0-50% (Saile L., 2017) 5/14/2020 2:14:53 PM Eye Corneal Ulcer Cliff page: 6

### Best Case Comments

Our functional impairments calculation for Eye Corneal ulcer follows the IMM severe non-space adaptation template. Impairments of the Visual System and of the Whole Person are based on Table 12-10, p.307. Impairment for Visual System class 3 is divided in 3a and 3b. We are assigning class 3b which provides more severe impairments for all eye conditions using the severe non-space adaptation template. (American Medical Association, 2008) By definition in Clinical Phase I, FI is 100%. Duration to follow procedures specified in ISS checklist, i.e. eye wash and eye exam, for the best case scenario, is estimated in 20 minutes. During Clinical Phase II, FI is estimated in 8 to 47%. Duration is estimated in 72 to 336 hours, 3 to 14 days. The lower limit is estimated from the minimum treatment time is the ISS medical checklist. The higher limit is estimated based on the treatment of herpetic ulcers (Merck Manual) In Clinical Phase III, full recovery is expected and FI is 0%. By definition EVAC and LOCL would not be expected for the best case scenario.

### Worst Case Comments

Our functional impairments calculation for Eye Corneal ulcer follows the IMM severe non-space adaptation template. Impairments of the Visual System and of the Whole Person are based on Table 12-10, p.307. Impairment for Visual System class 3 is divided in 3a and 3b. We are assigning class 3b which provides more severe impairments for all eye conditions using the severe non space adaptation template. (American Medical Association, 2008) By definition in Clinical Phase I, FI is 100%. Duration to follow procedures specified in ISS checklist, i.e. eye wash and eye exam, and applying topical medications for the worst case scenario, is estimated in 30 minutes, or half hour. During Clinical Phase II, FI is estimated in 28 to 72%.

Duration is estimated in 168 to 336 hours, 7 to 14 days. This is the minimal treatment time for corneal ulcer; if there is no healing, patient may need to be evacuated for care at a definitive care facility. In Clinical Phase III, full recovery may or may not occur and FI is 0-72%. Hospitalization for corneal ulcer has occurred among astronauts on the ground. It is considered as a Class IIc medical event, manageable with HMS but may necessitate emergency evacuation if condition does not improve or worsens. (Johnston, 2008)To allow for uncertainty of crew members not responding to treatment EVAC is estimated in 0-100%. LOCL is not expected for eye conditions.

### Untreated Best Case Comments

Our functional impairments calculation for Eye Corneal ulcer follows the IMM severe non-space adaptation template. Impairments of the Visual System and of the Whole Person are based on Table 12-10, p.307. Impairment for Visual System class 3 is divided in 3a and 3b. We are assigning class 3b which provides more severe impairments for all eye conditions using the severe non space adaptation template. (American Medical Association, 2008) During Clinical Phase II, FI is estimated in 28 to 72%. Duration is 168 to 336 hours, 7 to 14 days, similar to the treated best case scenario. In Clinical Phase III, recovery may or may not occur and FI is 0-47%. EVACs have occurred for corneal ulcers in deployed British military personnel (Musa, 2010). Even minor injuries may incapacitate personnel and if untreated cause severe visual loss. (Aslam, 2005)To allow for uncertainty EVAC is estimated in 0 to 100% for the untreated best case. LOCL is not expected for eye injuries.

### Untreated Worst Case Comments

Our functional impairments calculation for Eye Corneal ulcer follows the IMM severe non-space adaptation template. Impairments of the Visual System and of the Whole Person are based on Table 12-10, p.307. Impairment for Visual System class 3 is divided in 3a and 3b. We are assigning class 3b which provides more severe impairments for all eye conditions using the severe non space adaptation template. (American Medical Association, 2008) During Clinical Phase II, FI is estimated in 61 to 85%. Duration is 168 to 336 hours, 7 to 14 days, similar to the treated worst case scenario. In Clinical Phase III, recovery is unlikely and FI remains 61-85%. Because of potential significant permanent impairment EVAC is estimated in 100%. LOCL is not expected for eye injuries. 5/14/2020 2:14:53 PM Eye Corneal Ulcer Cliff page: 7

Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |  |
| ---------------------------------- | ----------------------- | ------------ | ------- |
| American Medical Association, 2008 | 3 | FI |  |
| Johnston, 2008 | 2 | EVAC |  |
| Musa, 2010 | 2 | EVAC |  |
| Aslam, 2005 | 2 | EVAC |  |
| Saile L., 2017 | 1 | BCWC |  |
| 5/14/2020 2:14:53 PM | Eye Corneal Ulcer Cliff |  | page: 8 |
### Additional Comments

Currently 59% of pilots and 77% of mission specialist astronauts require some form of visual correction. Among those who wear corrective devices, 15% of pilots and 33% of mission specialists elect to wear contact lenses. (Manuel, 2008)

| 5/14/2020 2:14:53 PM | Eye Corneal Ulcer Cliff | page: 9 |
| -------------------- | ----------------------- | ------- |
The Resource Table (RT) Units

|  | Units Units | Available |  |  |
| ------------ | ----------------- | ------------------ | ----------------------- | --- |
|  | Required Required | At Start |  |  |
|  | Best Worst | Of |  |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |  |
| Cotton swabs | 1 1 | 6 Yes | No to apply medications |  |

Cyclopentolate 1% 15mL bottle 0.039 0.08 1 Yes Yes Pupil dilation Erythromycin Ointment 0.5%, 3.5 1 0 4 Yes Yes Single crew member will use one tube as

| gm tube |  |  | 1cm four times per day for 7 days to prevent |  |
| ------- | --- | --- | -------------------------------------------- | --- |

or treat infection. Fluorescein 1mg strips (2 strips) 1 1 10 Yes Yes fluorescent chemical used to examine the cornea.

| Gauze pads (4x4) | 1 1 | 50 Yes | No to absorb medications & tears |  |
| ---------------- | --- | ------ | -------------------------------- | --- |

Moxifloxacin (Avelox) 0.5%, 3ml 0 1 4 Yes Yes Single crew member will use one bottle as 1

| bottle |  |  | drop to eye 3 times per day for 7 days to |  |
| ------ | --- | --- | ----------------------------------------- | --- |

prevent or treat infection. Otoscope (Head, Handle, and 1 1 1 No Yes Light source for eye exam USB cable)

| Penlight | 1 1 | 2 No | Yes Eye exam |  |
| ---------------------------- | ------- | ---- | ----------------- | --- |
| Penlight Blue Filter | 1 1 | 2 No | Yes Eye exam |  |
| Proparacaine eye drops 0.5%, | 0.5 0.5 | 1 No | No eye anesthetic |  |

15mL bottle

| Refresh artificial tears | 1 1 | 40 Yes | Yes to rinse eye |  |
| ------------------------ | --- | ------ | ---------------- | --- |

(Carboxymethylcellulose) 0.5%, 0.4mL bottle Tylenol (Acetaminophen) 325 mg 8 0 150 Yes Yes Pain Management

| Vicodin HP (Hydrocodone/ | 0 24 | 30 Yes | Yes Pain relief |  |
| ------------------------ | ---- | ------ | --------------- | --- |

Acetaminophen HP) 10 mg/660 mg

### Resource Comments

Eye corneal ulcer is included in the ISS medical checklist (MOD, 2011). We updated the resources table and included resources for eye exam, i.e. Otoscope handle, Ophthalmoscope Head, Cotton Swabs, Gauze Pads, Proparacaine Eye Drops, Artificial Tears, Magnifying Glass, Visual Acuity Card, fluorescein strips, and Cyclogyl ophthalmic solution.

Comparison with terrestrial guidelines Eye corneal ulcer in the ISS checklist is comparable to tertiary facility guidelines by the World Health Organization (WHO SEA, 2004)). Terrestrial guidelines for bacterial eye corneal ulcer recommend removing contact lenses, and treatment with topical antibiotics or anti fungals, and avoiding topical steroids. If the ulcer doest heal by 72 hours, switch to different treatment. For fungal infection use antifungal drugs. Steroids are not recommended. Systemic antibiotics are used for perforating ulcers. Surgery is recommended for non-healing treated ulcers and impending or actual perforation.

| 5/14/2020 2:14:53 PM |  | Eye Corneal Ulcer Cliff |  | page: 10 |
| -------------------- | --- | ----------------------- | --- | -------- |
Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation |  | LOE Value | LOE Category |  |  |
| ----------------------------------------------- | --- | --------- | ------------ | --- | --- |
| NASA Mission Operations Directorate (MOD), 2011 |  | 2 | Resources |  |  |

### Level Of Evidence

| Input Data | LOE Average | Description |  | Range |  |
| ---------------------- | ----------- | ----------------------- | --- | ----- | -------- |
| Incidence | 2.5 | Excellent |  | 1-2 |  |
| Functional Impairment | 3 | Good |  | 2.1-3 |  |
| Best Case / Worst Case | 1 | Fair |  | 3.1-4 |  |
| EVAC / LOCL | 2 | Poor |  | 4.1-5 |  |
| Resources | 2 |  |  |  |  |
| QUALITY OF EVIDENCE | 2.1 |  |  |  |  |
| 5/14/2020 2:14:53 PM |  | Eye Corneal Ulcer Cliff |  |  | page: 11 |
### Reference List

Reference American Medical Association. Visual System. In: Rondinelli R, editor. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 281-319.

Aslam S, Griffiths MF. Eye casualties during Operation Telic. J R Army Med Corps 2005 Mar;151(1):34-6.

Hilber D, Mitchener TA, Stout J, Hatch B, Canham-Chervak M. Eye injury surveillance in the U.S. Department of Defense, 1996-2005. Am J Prev Med 2010 Jan;38(1 Suppl):S78-S85.

International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

Jeng BH, Gritz DC, Kumar AB, Holsclaw DS, Porco TC, Smith SD, et al. Epidemiology of ulcerative keratitis in Northern California. Arch Ophthalmol 2010 Aug;128(8):1022-8. Johnston S, Arenare B, Smart K. Medical Evacuation and Vehicles for Transport. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 139-61.

Manuel F, Mader T. Ophthalmologic Concerns. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 535-44. Merck Manual. Corneal Ulcer. Porter RS, editor. Merck Manuals Online Medical Library . 2008. Whitehouse Station, N.J, Merck Sharp & Dohme Corp.. 7-18-2011. Musa F, Tailor R, Gao A, Hutley E, Rauz S, Scott RA. Contact lens-related microbial keratitis in deployed British military personnel. Br J Ophthalmol 2010 Aug;94(8):988-93. NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

Nice DS. U.S. Navy medical communications and evacuations at sea. Mil Med 1987 Sep;152(9):446-51.

Saile L., Boley L, Kerstman E. Integration RWS ISS STS Observed Incidence V2. 2017.

Saile L., Boley L, Arellano J, Kerstman E. iMED Best and Worst Case Percentage Update. 2017.

Sargsyan AE, Dulchavsky AG, Adams J, Melton S, Hamilton DR, Dulchavsky SA. Ultrasound detection of simulated intra-ocular foreign bodies by minimally trained personnel. Aviat Space Environ Med 2008 Jan;79(1):58-61.

Tansey WA, Wilson JM, Schaefer KE. Analysis of health data from 10 years of Polaris submarine patrols. Undersea Biomed Res 1979;6 Suppl:S217-S246. Thomas TL, Hooper TI, Camarca M, Murray J, Sack D, Mole D, et al. A method for monitoring the health of US Navy submarine crewmembers during periods of isolation. Aviat Space Environ Med 2000 Jul;71(7):699-705.

Thomas TL, Garland FC, Mole D, Cohen BA, Gudewicz TM, Spiro RT, et al. Health of U.S. Navy submarine crew during periods of isolation.

Aviat Space Environ Med 2003 Mar;74(3):260-5.

WHO SEA. Guidelines for the Management of Corneal Ulcer at Primary, Secondary and Tertiary Care health facilities in the South-East Asia Region World Health Organization Regional Office for South-East Asia. Srinivasan M, editor. Worl . 2004. World Health Organization Regional Office for South-East Asia. 7-15-2011. 5/14/2020 2:14:53 PM Eye Corneal Ulcer Cliff page: 12

---

## Source metadata

```yaml
source_filename: "eye-corneal-ulcer-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Eye Injury/CliFF 100"
source_url: "https://drive.google.com/file/d/146WsHjJbpQxQNR5R_RjhGvmeddErMEQC/view"
source_drive_id: "146WsHjJbpQxQNR5R_RjhGvmeddErMEQC"
source_sha256: 4b0708b6ae2889908c13e764737ea7a52fa04805b159b28c1bcdc7579bddc19c
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 12
ocr_performed: false
```
