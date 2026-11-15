# Stroke Cerebrovascular Accident CLiFF

[View original PDF](https://drive.google.com/file/d/15eoByIPyzsY8FRoorOw29Hr2ucNU_ywB/view) · **16 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Neurological Conditions/CliFF 100

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [Incidence Data Included in the Model](#incidence-data-included-in-the-model)
- [Incidence](#incidence)
- [Distribution Data](#distribution-data)
- [Incidence Comments](#incidence-comments)
- [Data Characteristics](#data-characteristics)
- [Appendix A, pp 604-606. (American Medical Association, 2008)](#appendix-a-pp-604-606-american-medical-association-2008)

---

Stroke (cerebrovascular accident) Cliff

## Branch Baseline

Stroke is the sudden diminution or loss of consciousness, sensation, and voluntary motion caused by rupture or obstruction of a blood vessel of the brain; called also cerebro-vascular accident (Merriam-Webster's Medical Dictionary, 2007)

About 87% of all strokes are ischemic, in which blood flow to the brain is blocked by blood clots or fatty deposits called plaque in blood vessel linings. (Lloyd-Jones, 2010). A hemorrhagic stroke occurs when a blood vessel bursts in the brain. Blood accumulates and compresses the surrounding brain tissue. Intracerebral hemorrhage is the most common type of hemorrhagic stroke. It occurs when an artery in the brain bursts, flooding the surrounding tissue with blood.

Subarachnoid hemorrhage is bleeding in the area between the brain and the thin tissues that cover it. (Lloyd-Jones, 2010) ;( Centers for Disease Control and Prevention, 2010) 13% of strokes are hemorrhagic (of which 10% are intracerebral (ICH) and 3% are subarachnoid (SAH). (Lloyd-Jones,

2010) Transient ischemic attack (TIA) is a brief episode of cerebral ischemia that is usually characterized by temporary blurring of vision, slurring of

speech, numbness, paralysis, or syncope and that is often predictive of a serious stroke. TIA is called also mini-stroke or warning stroke (Merriam- Webster's Medical Dictionary, 2007) A TIA results in no lasting damage. Recognizing and treating TIAs immediately can reduce your risk of a major stroke. (Lloyd-Jones, 2010) ;( Centers for Disease Control and Prevention, 2010)

## Incidence Data Included in the Model

The model imports the following incidence information from the IMM database: incidence data category, space adaption status, incidence data, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. fixed data). Space adaptation identifies medical events that onset occurs in the first 5 days of flight and does not reoccur. Incidence values vary by data category and define the number of medical events per person-year or medical events per person-at-risk for each medical condition. Incidence values can be modified by crew characteristics such as gender. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crew member in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the IMM Technical Description Document.

## Incidence

- Data Category: Model

- Space Adaptation: No

- Incidence Type: Rate

## Distribution Data

- Incidence: Lognormal

- Occurrence: Poisson

### Female Data Characteristics

- Mean: 0.00068

- Standard Deviation: 0.000236

5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 1

### Male Data Characteristics

- Mean: 0.00098

- Standard Deviation: 0.000238

5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 2

## Incidence Comments

Stroke has never occurred on flight and no incidence was found for analog populations. NASA’s Glenn Research Center prepared a Bayesian Analysis for the incidence of stroke (Gilkey, 2012)

When looking at the astronaut population data for the medical events investigated, the population and the occurrences are very low. Due to this low occurrence, Bayesian methods are deemed necessary in order to better predict probability estimates for incidence rates of these medical events. The Bayesian process allows researchers to make inferences to determine the probability that a hypothesis is true, conditional on all available evidence The incidence rates of stroke from the LSAH (Hartnett, 2010) and general U.S. population (Lloyd-Jones, 2010)were combined using a Bayesian update approach to estimate the average rate of stroke. By making the average rate assumption, a Poisson probability distribution was assumed to govern the probability of stroke.

To estimate the probability of stroke occurrence in the astronaut corps, control populations and the general U.S. population, an assumption was made that the rate of stroke incidences is constant over the period of interest. This in turn leads to the assumption of the probability of occurrence following a Poisson distribution.

The American Heart Association (Lloyd-Jones, 2010)reported the 2010 incidence rate of ischemic stroke among persons in America, 45 to 54 years of age, as 1.1 to 2.7 per 1000 persons per year for males, and 0.7 to 2.2 per 1000 persons per year for females.

Lloyd et al. considered the higher incidence rate data for black men and women, 2.7 and 2.2, unreliable while the lower incidence rate data are for white men and women are considered reliable. Data for whites only are included in this Bayesian calculation, although the data for black men and women was used to calculate the error factor. Data from this publication indicates the prevalence of stoke among Hispanics and Latinos is higher than the incidence among whites, but smaller than the incidence among blacks (Lloyd-Jones, 2010)

As of 2006, there are 101 astronauts that are mission ready (20 female, 81 male). Data received from LSAH was given by gender, so data for white males, females and total was used for the general population calculation. For this analysis, these factors (gender, age, race and type of stroke - ischemic), were simplified and assumed to be lognormal.

Data received from LSAH states there have been zero strokes for males and females during a mission. Pre-flight, there have been zero strokes per 336.8 total person astronaut years in females and two strokes per 3478.6 total person astronaut years in males. Of these two incidents, one occurred 0 to 3 years prior to flight and one occurred 3 to 6 years prior to flight. In-flight, there have been zero strokes per 2200 total person astronaut years in females and zero strokes per 29.7 total person astronaut years in males. There are no incidents among female astronauts, so this may negate the assumption of an average for the entire period of interest.

To improve the estimate of the rate of occurrence in the astronaut corps and provide a 1st order approximation suitable for use in the GRC-IMM modeling effort, the following approach was taken using the numerical Bayesian update code WinBUGS. A total of two steps and Bayesian updates were performed. The first step used the general population data (Lloyd-Jones, 2010)as a prior to update the LSAH pre-flight data. This step was performed three times, once each for males, females, and total. The posteriors yielded from this step describe the stroke incidence rate for pre-flight. In the second step, the data from these posteriors, namely the mean, 5th and 95th percentiles, were then used as the prior to update the in-flight astronaut data for each gender and the total. Ultimately, six probability distributions were found describing the stroke incidence rate for pre-flight and in-flight for both genders and the total. The input data for each step is outlined below.

Step 1: For females, males, and total, the general population incidence rate per person-year for the general U.S. population and the EF were used for the prior in WinBUGS. The astronaut data from LSAH that were updated included the number of person-years and the number of stroke cases for each gender. For males, females, and the total, the general incidences per person-year were 0.00110, 7.00×10–4, and 9.00×10–4, respectively. The LSAH data for males, females, and the total were two events per 3478.6 person-years, zero events per 336.8 person-years, and two events per 3815.3 person-years.

Step 2: The posteriors found from Step 1 were then used as the priors in WinBUGS to update the in-flight astronaut data. The Step 1 posterior data used include the mean, 5th percentile, and the 95th percentile. These data for males are 9.81×10–4, 6.37×10–4, and 0.0014 per person- year, respectively. The data for females are 6.80×10–4, 3.64×10–4, and 0.0011 per person-year, respectively. For the total, these data are 8.78×10–4, 6.99×10–4, and 0.0011. The LSAH in-flight data used were zero incidences per 29.7 person-years for males, zero incidences per 6.0 person-years for females, and zero incidences per 35.8 person-years for the total. The result of this Bayesian update is a probability distribution for the stroke incidence rate of astronauts in-flight.

The results of the implementations section for stroke among total, male and female, in-flight are: mean 0.000877 total; 0.00098 for male, 0.000680 for female. Standard deviations are 0.000122; 0.000238 and 0.000236 respectively. 5 to 95% confidence intervals (CI) are 0.000693- 0.0011 total; 0.000641 to 0.0014 for male, 0.000371 -0.0011 for female (Gilkey, 2012).

This model should be considered very limited in that it assumes an average occurrence rate of stroke incidence, with little data regarding stroke type or environmental conditions, only considers data from white males and females from the general population. Use should be treated with a full understanding of these limitations. However, it is likely a reasonable representation of the rate of stroke incidence given the occurrence data available and given the assumptions made during construction of the estimate.

This model only uses data pertaining to stroke incidence for ages similar to the mission ready astronaut corps, not data related to blood pressure or other specific physiological conditions.

More accurate estimates can be made with further analysis of the periods of stroke incidence in post-flight sufferers and the physiological data that pertain to stroke occurrence. If reliable data for the general U.S. population (specifically for different races) becomes available in the future, this model should be updated with that data. The current model data will serve as the baseline for future estimates that utilize such stroke risk data. 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 3

### Information Regarding Prevention

Selection criteria

- Disqualifying conditions in the neurologic disorders area include: any neurologic disorders that may interfere with the performance of duties;

tumors of the nervous system; vascular disorders of the nervous system (e.g. arteriovenous malformation, intracranial aneurysms, familial cavernous angioma, and temporal arteritis). Sporadic cavernous angiomas require neurologic evaluation. History of cerebrovascular accident (stroke, TIA, or subarachnoid hemorrhage). Asymptomatic disease of the carotid or vertebral arteries requires neurologic evaluation. Seizure disorders or history of seizure disorders, including absence. History of traumatic brain injury with associated intracerebral hemorrhage with persistent neurologic deficits; or intracranial hemorrhage requiring surgery or with persistent neurologic deficits (e.g. subdural or epidural hematoma). In the cardiovascular area disqualifying conditions include hypertension, if pharmacologically controlled requires special consideration by the MSMB; ventricular or atrial fibrillation and/or flutter; if successfully ablated requires consideration by the MSMB; history of recurrent thrombophlebitis, and deep vein thrombosis. (International Space Station Program, 2009); (NASA, 2007)

Other Approximately half of all patients who experience a TIA fail to report it to their healthcare providers. {Johnston, 2003 3144 / Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Gilkey, 2012 2 Incidence 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 4

Incidence data not included in the model The model pulls the incidence information from the IMM database ... the information shown below does not go into the model.

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

| Mean: | 0.000876 |  |
| ------------------- | -------- | --- |
| Standard Deviation: | 0.000117 |  |

Incidence Level of Evidence (LOE) The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

| Citation | LOE Value | LOE Category |
| ------------ | --------- | ------------ |
| Gilkey, 2012 | 2 | Incidence |

### Alternative Incidence Data

Stroke is the 3rd leading cause of death in the United States, after heart disease and cancer, and the leading cause of disability. (Rosamond, 2008) Ischemic and hemorrhagic strokes are managed very differently, so a first step in treatment is usually neuroimaging to determine the nature of the stroke. Blood can be toxic to brain tissue after a hemorrhage, but note that hemorrhagic strokes often also have an ischemic element – either by the mass effect of the bleeding and edema squeezing off blood supply, or simply by failure to feed blood downstream of a hemorrhage point. Confusing matters further: Stroke symptoms may be fleeting, and if they resolve without treatment within 24 hours the event is termed a TIA – a transient ischemic event. There is a high likelihood of a true stroke following soon after a TIA (a 90-day risk of from 3-17.3%, with most strokes occurring in the first 48 hours).(Rosamond, 2008)

The annual incidence rate of a first-ever stroke in the general U.S. population is 212/100,000 among Caucasians (181/100,000 for ischemic, 31/100,000 for hemorrhagic) and 274/100,000 among blacks. The incidence rate for a TIA in the general U.S. population has been calculated at 68-83/100,000 (Brown, 1998)(Kleindorfer, 2005)

Incidence rates have also been calculated by age. The American Stroke Association (a division of the AHA) estimates an incidence rate of 70- 100/100,000 for those aged 45 to 54, and an incidence rate of 190-270/100,000 for those aged 55 to 64. The lower end of the incidence rate spectrum represents strokes in Caucasians, the higher end strokes in blacks.

An important risk factor for stroke of any kind is hypertension. Subjects with a blood pressure below 120/80 mm Hg have half the lifetime risk of 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 5

those who have hypertension. (Seshadri, 2006)Smoking roughly doubles risk for ischemic stroke subtypes. Atrial fibrillation is an independent risk factor for ischemic stroke, increasing risk about five-fold. (Wolf, 1991)A history of migraines – which may be suffered by as many as 1/4th of all women in their 30s -- will also double risk of stroke.(Etminan, 2005) Use of oral contraceptives will also double risk of stroke. (Gillum, 2000)For a woman using oral contraceptives with a history of migraines, the risk may increase about 8-fold. (Gillum, 2000)

Interestingly, there is also an association between migraines and patent foramen ovale (PFO),(Etminan, 2005) and PFO closure often provides subsequent migraine relief; and between cryptogenic stroke in young adults and patent foramen ovale. (Carod-Artal, 2006)(In one study of 60 young adults with cryptogenic strokes and 100 controls, the prevalence of a PFO was 40% in the stroke group, 25% in the general population, and 10% in the controls.) In the rare cases of stroke in young individuals serving in the military, PFO is occasionally implicated. (Johnson, 2004)

In trying to predict the likelihood of stroke, one frequently turns to the risk assessment scores developed by the Framingham Heart Study. The research behind these scores was based on 10 years of data following individuals aged 55 to 84. (D'Agostino, 2011)These scores, however, are a less-than-perfect fit for the 116 members of the current astronaut corps, where the average age is a relatively young 46.4: The Framingham scoring system starts at age 54, and age is the most important driver of increased risk. For comparison purposes, however, the Framingham- predicted incidence rate for strokes in physically fit 54-year-old men with blood pressures of 125/80 runs to about 30/100,000.

### Stroke in Younger Populations

Neither Framingham nor the American Stroke Association’s statistical arm provide data for younger populations, but other studies do.

Unfortunately some of these smaller studies are of uneven quality. Some claim to offer “stroke” incident rates while actually looking only at ischemic strokes; many do not break strokes down by recognizable sub-categories; and hardly any relate stroke rates and TIA rates, except to note that a TIA is often a sentinel event for an impending major stroke.

The Northern Manhattan Stroke Study (Jacobs, 2002) looked at 74 young patients (aged 20-44) with their first-ever stroke, and came up with an incident rate of 23/100,000. Of those, 10/100,000 were ischemic and 13/100,000 were hemorrhagic (7/100,000 ICH, 6/100,000 SAH). AVM malformations were the underlying pathology in 1.4% of ICHs.

A study of 4,353 strokes in L’Aquilla, Italy, found 2% of stroke victims were under age 45. Of these, 57.3% had suffered ischemic strokes and 42.7% hemorrhagic (evenly split between ICH and SAH). Of the young hemorrhagic stroke patients, more than half (52.6%) were caused by rupture of underlying aneurysms or AVMs – conditions that could be screened for during astronaut selection. The crude annual incident rate of strokes in the young was 10.1/100,000. (Marini, 2001)

The Baltimore-Washington Young Stroke Study (Kittner, 1998) looked at 428 patients (aged 15-44) presenting with the ischemic stroke subtype.

Only 49.5% of the time was it possible to identify a probable cause, so the majority of these strokes were cryptogenic. Cardio emboli were implicated in 31.1% of those strokes. Other probable etiologies included use of illicit drugs (9.4%), OCPs (5.2%) and migraines (1.4%).

A study in Burlington, Vermont of 113 patients (aged 15-45) found 58% of strokes to be hemorrhagic (including 41% ICHs and 17% SAH), and 42% to be ischemic. Important causes of the hemorrhagic strokes were AVMs and aneurysms, while premature atherosclerosis and cardiac emboli accounted for the ischemic strokes.

A small study of stroke patients aged 15-44 in Florence, Italy, again found a predominance of “wet” strokes: 57% were hemorrhagic (of which 35.5% were SAHs). The authors reported that 88% of subarachnoid hemorrhages were caused by AVMs or aneurysms, while half of ischemic strokes were caused by either atherosclerosis or cardiac emboli.

A study in Khorasan, Iran, of 124 patients (aged 15-45) presenting with ischemic stroke calculated an incident rate of 8/100,000, and attributed 54% of these events to cardiac emboli (including 32% related to underlying rheumatic valvular disease).

Some tentative conclusions that can be teased out of these data are:

1. Strokes in the young are more likely to be hemorrhagic.

2. Ischemic strokes are more likely to be caused by clot-predisposing cardiac arrhythmias, or by carotid or vertebral dissections, and less likely

to be caused by underlying atherosclerotic disease.

3. Many strokes in the young are cryptogenic.

4. Many causes of both hemorrhagic and ischemic strokes are routinely screened for with the exceptions of carotid and vertebral dissections,

which account for from 10 to 25 percent of all ischemic strokes in young and middle-aged patients While strokes in the young may often be hemorrhagic, strokes in a screened, healthy astronaut corps would be both exceedingly rare, and also likely to be ischemic.

### Stroke Incidence in the Astronaut Corps

There has been an anecdotal report, described in the popular press (Lenzer, 2008)of a NASA flight surgeon and former astronaut who suffered two post flight episodes of transient global amnesia, each resolving in hours without treatment, each occurring weeks after being started on a statin. This physician-astronaut attributed his stroke-like symptoms to the statins, but the exact diagnosis is unknown.

It is worth noting that micro-gravity encourages a cephalad fluid shift. It is unclear whether this increases intracranial pressure, but studies have shown that it does at least increase intraocular pressure; often well into ranges usually associated with glaucoma, and also intrajugular venous pressure. Therefore one might expect a hemorrhagic stroke in microgravity to have a worse outcome than in Earth gravity.

Carotid and vertebral dissections Carotid and vertebral dissections perhaps deserve special consideration. Studies in the United States and France suggest the annual incidence of spontaneous carotid artery dissection ranges from 2.5 - 3 /100,000, and of vertebral dissection 1-1.5/100,000. (Schievink, 2001)

Spontaneous dissections of the carotid or vertebral artery account for about 2 percent of all ischemic strokes in the general population, but from 10 to 25 percent of ischemic stroke in young and middle-aged patients. About 1/4th of these dissections occur in the context of either a known 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 6

family history, or a known connective tissue disorder such as Ehlers-Danlos, Marfan’s, and polycystic kidney disease or orthogenesis imperfecta.

The remaining 3/4th, however, are usually chalked up to sometimes surprisingly minor precipitating events.

Dissections have been reported in those tossing back toasts, after hyperextension for shampoo treatment, after coughing, sneezing, vomiting, being intubated, and undergoing chiropractic manipulation, in ceiling painters, in office workers after prolonged phone conversations, after rapid ascent from scuba diving,(Gibbs, 2002) and on roller coaster rides. It has also occurred after more serious traumas in sporting events and automobile accidents. There are no reported cases of pilots suffering carotid dissection during G-force maneuvers but the possibility of an arterial dissection should be considered in any astronaut presenting with stroke symptoms. 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 7

### Treatment and Outcomes

Based on the best evidence available best and worst case percentage ranges are assigned. The medical condition is divided into three clinical phases in all three clinical phases a functional impairment is assigned. The clinical phase I and II’s functional impairments remain for the duration for that respective clinical phase. The function impairment in clinical phase III represents final impairment for this medical condition and remains for the rest of the mission. Other mission end states include evacuation and loss of crew life.

The IMM checks medical resource availability once the number of medical events and scenarios has been established. If there is not sufficient essential resources called out in the CliFF, then the medical condition will go down an untreated best or worst case scenario pathway.

The table below summarizes the treated and untreated best and worst case scenarios.

### Clinical Phase I Clinical Phase II Clinical Phase III

Diagnosis & Initial On-going Treatment / Recovered / Mission End

### Treatment1 Convalescence2 State3

FI* Duration FI* Duration (hrs) FI* EVAC** LOCL** (%) (hrs) (%) (Min - ML - Max) (%) (%) (%)

ISS-based Treatment 100 1 8 - 80 0 - 24 - 48 0 0 - 100 0 (best case scenario %: 24 - 45) ISS-based Treatment 100 1 - 2 50 - 96 48 - 60 - 72 0 - 96 100 0 - 100 (worst case scenario %: 55 - 76) Untreated Best Case 0 0 50 - 96 0 - 24 - 48 0 - 80 100 0 Untreated Worst Case 0 0 82 - 100 48 - 60 - 72 82 - 100 100 100 1Clinical Phase I: Clinical phase I covers only the initial assessment of the affected crew member to define his or her medical condition, and completion of appropriate initial treatment to stabilize the crew member. While the affected crew member is being assessed, he or she is not able to perform any assigned tasks, thus Functional Impairment during this phase is considered 100%. In the untreated case, there is no diagnosis performed or treatment given, therefore Functional Impairment and Duration will always be "not applicable". 2Clinical Phase II: On-going Treatment and Convalescence- During clinical phase II, the affected crew member is receiving any appropriate follow-on treatment for his or her medical condition to allow the crew member to recover as much as he or she is able to recover in the ISS environment. Clinical phase II also encompasses relapses or reoccurrences of the same original medical condition in clinical phase I necessitating additional treatment or recovery time due to unsuccessful primary treatment response. The duration in Clinical Phase II is expressed in minimum, most likely (ML) and maximum hours. This was updated for future capabilities in IMM but is currently not being used by the model. 3Clinical Phase III: Recovered/Mission End State- Clinical phase III is reached once the affected crew member has recovered from the medical condition as much as he or she is able to recover in the ISS environment. This may or may not be recovery from the given medical condition to the full extent possible. If this "recovered" state results in an evacuation or loss of the crew member, this will be noted in the mission end state results. *Functional Impairment (FI) is a measure of the affected crew member’s health and performance ability. **Two mission end state results are addressed in the CliFF: 1) Evacuation (EVAC) - crew and patient are evacuated from the spacecraft due to the medical condition, and 2) Loss of crew (LOCL) - death of affected crew member due to medical condition. EVAC is considered as an end state result if any of the following criteria are met: 1) potential LOCL, 2) potential significant permanent impairment, or 3) potential intractable pain. Probability distributions are assigned for each range of values within the Table of Treatments and Outcomes.

Refer to the Integrated Medical Model Technical Document for more information on how risk is reported by the IMM, Crew Health Index (CHI) and Quality Adjusted Mission Time calculations.

- Definition and Probability of Best and Worst Case Scenario: (includes definitions of best and worst case scenarios and identifies the probability

of those scenarios.) 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 8

### Scenario Comments

The best case scenario is defined as a transient ischemic attack (TIA) with no permanent neurologic impairment.

The worst case scenario is defined as a stroke that causes significant impairment or loss of crew life.

Percentages of how often best versus worst case scenarios occur The Paul Coverdell National Acute Stroke registry, reported that 24% of strokes were TIA’s from the January 2005 to September 2006 period (Frankel, 2007); 24% will serve as the lower limit for best case. Each year 610,000 people experience a first stroke, Incidence and Prevalence: 2006 Chart Book on Cardiovascular and Lung Diseases. Bethesda, MD: National Heart, Lung, and Blood Institute, 2006, cited in (Lloyd-Jones, 2010); while 200,000 to 500,000 people will experience a transient ischemic attack (TIA) (Easton, 2009). By adding TIA and stroke, our total population is 1,110,000. We divided the higher limit of TIA by our total population (500,000/1,110,000) to estimate the higher limit for best case, i.e. 45%. Our estimate range for the best case scenario is 24 to 45% ; thus the worst case percentage is estimated at 55 to 76%.

Stroke mortality is high. Among persons 45 to 64 years of age, 8% to 12% of ischemic strokes and 37% to 38% of hemorrhagic strokes result in death within 30 days, according to the ARIC study of the NHLBI (Rosamond, 1999)

The length of time to recover from a stroke depends on its severity. Between 50% and 70% of stroke survivors regain functional independence, but 15% to 30% are permanently disabled, and 20% require institutional care at 3 months after onset. Asplund K, Stegmayr B, Peltonen M. From the twentieth to the twenty-first century: a public health perspective on stroke. In: Ginsberg MD, Bogousslavsky J, eds. Cerebrovascular Disease Pathophysiology, Diagnosis, and Management. Malden, Mass: Blackwell Science; 1998: 2, cited in (Lloyd-Jones, 2010)

Approximately 15% of all strokes are heralded by a TIA. (Hankey, 1996)

Approximately 25% of patients may have neurological worsening during the first 24 to 48 hours after stroke. It is difficult to predict which patients will deteriorate.

### Best Case Comments

The functional impairments (FI) calculation for Stroke follows the IMM severe non-space adaptation template. Stroke may affect multiple systems, e.g. consciousness, mental status, respiration, speech, movement, bowel, bladder, and pain which are the bases for our FI calculations.

Consciousness and awareness ratings are based on Table 13-4, p. 327; Alteration in Mental Status, Cognition, and Highest Integrative Function (MSCHIF) ratings are based on Table 13-8, p. 331; Neurogenic Respiratory Dysfunction ratings are based on Table 13-16, p.338; Aphasia or Dysphasia ratings are based on Table 13-9, p.332; Upper Extremity CNS Dysfunction (Dominant) ratings are based on Table 13-11, p.335; Neurogenic bowel ratings are based on Table 13-13, p.337; Neurogenic bladder ratings are based on Table 13-14, p.337; and Dysesthetic pain ratings are based on Table 13-17, p.339 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606. (American Medical Association, 2008)

By definition during Clinical Phase I, FI is 100% and duration is estimated to be half to one hour for diagnosis evaluation for neurological impairment and initial treatment. During Clinical Phase II, Functional Impairment is estimated in 8-80%. While there is some controversy over the exact standard of care on Earth for a TIA, many physicians would admit a patient with a new TIA for 48-hour observation, hence our estimated duration. By definition, during Clinical Phase III complete recovery and 0% functional impairment is expected. Based in clinical practice guidelines, TIA’s should be admitted to the hospital for evaluation. (Furie, 2011); (Easton, 2009)Therefore EVAC of a crew member with transient ischemic attack symptoms, is estimated at 0-100%. LOCL is not expected.

### Worst Case Comments

The functional impairments (FI) calculation for Stroke follows the IMM severe non-space adaptation template. Stroke may affect multiple systems, e.g. consciousness, mental status, respiration, speech, movement, bowel, bladder, and pain which are the bases for our FI calculations.

Consciousness and awareness ratings are based on Table 13-4, p. 327; Alteration in Mental Status, Cognition, and Highest Integrative Function (MSCHIF) ratings are based on Table 13-8, p. 331; Neurogenic Respiratory Dysfunction ratings are based on Table 13-16, p.338; Aphasia or Dysphasia ratings are based on Table 13-9, p.332; Upper Extremity CNS Dysfunction (Dominant) ratings are based on Table 13-11, p.335; Neurogenic bowel ratings are based on Table 13-13, p.337; Neurogenic bladder ratings are based on Table 13-14, p.337; and Dysesthetic pain ratings are based on Table 13-17, p.339 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606. (American Medical Association, 2008)

By definition during Clinical Phase I, FI is 100% and duration is estimated to be 1-2 hours for diagnosis evaluation for neurological impairment and initial treatment following the ISS Medical Checklist procedures and clinical experience. During Clinical Phase II, FI is estimated at 50 to 96%. Duration is estimated at from 24-72 hours, as the time estimated to arrange for evacuation. During Clinical Phase III, some or incomplete recovery is expected, with functional impairment estimated at 0-96%. EVAC is expected for 100% of worst case scenario. Stroke is a Class III medical event, requiring emergent evacuation from the ISS (Johnston, 2008). LOCL is estimated at 0 to 100%. 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 9

### Untreated Best Case Comments

The functional impairments (FI) calculation for Stroke follows the IMM severe non-space adaptation template. Stroke may affect multiple systems, e.g. consciousness, mental status, respiration, speech, movement, bowel, bladder, and pain which are the bases for our FI calculations.

Consciousness and awareness ratings are based on Table 13-4, p. 327; Alteration in Mental Status, Cognition, and Highest Integrative Function (MSCHIF) ratings are based on Table 13-8, p. 331; Neurogenic Respiratory Dysfunction ratings are based on Table 13-16, p.338; Aphasia or Dysphasia ratings are based on Table 13-9, p.332; Upper Extremity CNS Dysfunction (Dominant) ratings are based on Table 13-11, p.335; Neurogenic bowel ratings are based on Table 13-13, p.337; Neurogenic bladder ratings are based on Table 13-14, p.337; and Dysesthetic pain ratings are based on Table 13-17, p.339 (American Medical Association, 2008). Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in Appendix A, pp 604-606. (American Medical Association, 2008)

During Clinical Phase II, Functional Impairment is estimated in 50-96%. Duration is 48 hours similar to the treated best case scenario. During Clinical Phase III functional impairment is estimated at 0 to 80%. EVAC of a crew member with transient ischemic symptoms is estimated in 0- 100% for in-hospital evaluation, similar to the treated best case scenario. LOCL is not expected.

### Untreated Worst Case Comments

The functional impairments (FI) calculation for Stroke follows the IMM severe non-space adaptation template. Stroke may affect multiple systems, e.g. consciousness, mental status, respiration, speech, movement, bowel, bladder, and pain which are the bases for our FI calculations.

Consciousness and awareness ratings are based on Table 13-4, p. 327; Alteration in Mental Status, Cognition, and Highest Integrative Function (MSCHIF) ratings are based on Table 13-8, p. 331; Neurogenic Respiratory Dysfunction ratings are based on Table 13-16, p.338; Aphasia or Dysphasia ratings are based on Table 13-9, p.332; Upper Extremity CNS Dysfunction (Dominant) ratings are based on Table 13-11, p.335; Neurogenic bowel ratings are based on Table 13-13, p.337; Neurogenic bladder ratings are based on Table 13-14, p.337; and Dysesthetic pain ratings are based on Table 13-17, p.339 (American Medical Association, 2008). Episodic Loss of Consciousness and Awareness is based on

Table 13-5, p. 328. Combined FI ratings are calculated combining the mentioned tables using the Combined Values Chart as indicated in

## Appendix A, pp 604-606. (American Medical Association, 2008)

During Clinical Phase II, FI is estimated at 82 to 100%. Duration is estimated at 24-72 hours, similar to the treated worst case scenario. During Clinical Phase III, no recovery is expected, with functional impairment remaining at 82-100%. EVAC is expected for 100% of worst case scenario. Stroke is a Class III medical event, requiring emergent evacuation from the ISS (Johnston, 2008). LOCL is estimated at 100% without treatment available. Treatment and Options Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

American Medical Association, 2008 3 FI Johnston, 2008 2 EVAC Easton, 2009 4 BCWC Frankel, 2007 4 BCWC Lloyd-Jones, 2010 4 BCWC 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 10

### Additional Comments

A focused PubMed search was conducted to update references included in the previous Clinical Finding Form. 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 11

The Resource Table (RT) Units

|  | Units Units | Available |  |
| -------- | ----------------- | ------------------ | ------------------- |
|  | Required Required | At Start |  |
|  | Best Worst | Of |  |
| Resource | Case Case | Mission Consumable | Essential Rationale |

Ambu bag and mask 0 1 1 No Yes hand-held device used to provide positive pressure ventilation to a patient who is not breathing or is breathing inadequately Blood Oximeter 1 1 1 No Yes monitors the oxygen saturation of a patient's blood Blood Pressure Cuff (regular, 1 1 2 No Yes Measure blood pressure large)

| Blood Pressure Monitor | 1 1 | 1 No | Yes Measure blood pressure |
| ---------------------- | --- | ------ | -------------------------- |
| BZK wipes | 0 2 | 60 Yes | No Cleanse skin. |

Disposable Otoscope Specula 2 2 90 Yes No For use with otoscope for exams (regular, small) ECG Monitor (Device, USB 1 1 1 No Yes Measure and monitor ECG Charge Cable, Lead Set Cable,

### Cue Card)

| IV administration set | 0 1 | 3 Yes | Yes IV Fluids infusion |
| --------------------- | --- | ----- | ----------------------------------------- |
| IV Cap | 0 1 | 5 Yes | No To attach IV fluids to Y-type catheter |

IV Catheter (18G, 20G, or 22G) 0 1 14 Yes Yes IV fluid administration

| IV Fluid 1L (1000mL) | 0 2 | 5 Yes | Yes to replenish fluids |
| -------------------- | --- | ----- | ----------------------------- |
| IV Fluid Air Filter | 0 1 | 3 Yes | No To filter air from IV line |
| IV pressure infuser | 0 1 | 1 No | No IV Fluids infusion |

Medical tape 0 0.1 5 Yes No single-coated tapepressure adhesive tape Otoscope (Head, Handle, and 1 1 1 No Yes Light source for nasal, oral, aural, and eye

| USB cable) |  |  | exams. |
| ---------- | --- | --- | ------ |

Pack of 12 ECG electrodes 1 1 5 Yes Yes Measure and monitor ECG Penlight 1 1 2 No Yes illuminate a patient's eyes, ears and throat, and help measure the pupil size and response time. Sharps container 1 1 40 No No To dispose of medical waste such as used medical needles, scalpels, IV catheters, razors, vials Syringe (10cc) 0 1 6 Yes Yes To inflate resuscitation mask if necessary

| Syringe (3cc) | 0 1 | 20 Yes | Yes to flush IV lock every 8 hours |
| ------------- | --- | ------ | ---------------------------------- |
| Thermometer | 1 1 | 1 No | No To measure temperature |

Tourniquet 0 1 1 No No To stop blood flow and engorge vein, this facilitates IV insertion 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 12

Units

### Units Units Available

### Required Required At Start

### Best Worst Of

### Resource Case Case Mission Consumable Essential Rationale

Variable Oxygen System 0 1 1 No Yes Contains the equipment necessary for oxygen delivery.

### Resource Comments

A patient presenting with a stroke is either experiencing an ischemic or a hemorrhagic event. (Or, they are experiencing a stroke mimic, examples of which include a post-ictal state, hypoglycemia, a toxic-metabolic derangement or a systemic infection.)

Assuming it is truly a stroke, if it is allowed to follow its natural course it may resolve within 24 hours (and be classified a TIA), resolve partially or entirely in the coming days or weeks, never improve or even worsen.

Determining which etiology – ischemic or hemorrhagic – is key to decisions regarding treatment: Thrombolytics can be used for busting up a clot that has provoked a “dry” ischemic event, but they are catastrophic if given in a “wet” hemorrhagic event. An emergent CT is the rule to judge whether a stroke is wet or dry. MRI / MRA is at least as good for answering this question but is not generally available rapidly.

The table was revised on 2/15/2011 to include supplies for IV Fluids, respiratory support, blood analysis, BP-ECG, IV lock and IV injection. We deleted aspirin because it is not possible to rule out hemorrhage without imaging on board.

Stroke is not listed as a medical condition in the ISS Medical Checklist. Treatment is based on the AHA Clinical Guidelines for pre-hospital and hospital management of Stroke (Adams, 2007)and the resources available on board.

All resources included in the table are included in ISS Medical checklist (Mission Operations Directorate (MOD), 2011) and/or ISS Checs Catalog (ISS Medical Operations, 2009). Comparison of terrestrial guidelines versus ISS treatment Pre-hospital guidelines recommendations for EMS (Adams, 2007)include: manage ABCs cardiac monitoring, intravenous access , oxygen (as required oxygen saturation equal or greater than 92%), assess for hypoglycemia, nil per os (NPO), alert receiving ED, and rapid transport to closest appropriate facility capable of treating acute stroke. All EMS treatment can be provided with on board resources.

On arrival to the emergency department or stroke facility, clinical guidelines recommend testing for all patients (Adams, 2007): non contrast brain CT or brain MRI, Blood glucose, Serum electrolytes /renal function tests, ECG, Markers of cardiac ischemia, Complete blood count, including platelet count, prothrombin time/international normalized ratio (INR), activated partial thromboplastin time, and oxygen saturation.

Imaging, ischemia markers, coagulation factors, and platelet count are not available on board.

Admission to a stroke unit or hospital ward for all TIAs is recommended in European and American clinical guidelines (Furie, 2011); (Easton, 2009) Required Resources Level of Evidence (LOE)

The IMM level of evidence appropriate assessment of the quality of the IMM input data. Since IMM incorporates input data from a wide variety of sources including astronaut population, terrestrial or analog populations, and external models, an innovative approach to assess the quality of input data was required. Information obtained from the astronaut population and/or space flight is the more relevant so it is assigned the highest level of evidence and less relevant data sources are assigned a lower level of evidence.

### Citation LOE Value LOE Category

Adams, Jr., 2007 3 Resources 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 13

### Level Of Evidence

| Input Data | LOE Average | Description | Range |
| ---------------------- | ----------- | ----------- | ----- |
| Incidence | 2 | Excellent | 1-2 |
| Functional Impairment | 3 | Good | 2.1-3 |
| Best Case / Worst Case | 4 | Fair | 3.1-4 |
| EVAC / LOCL | 2 | Poor | 4.1-5 |
| Resources | 3 |  |  |
| QUALITY OF EVIDENCE | 2.8 |  |  |

5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 14

### Reference List

Reference Adams HP, Jr., del ZG, Alberts MJ, Bhatt DL, Brass L, Furlan A, et al. Guidelines for the early management of adults with ischemic stroke: a guideline from the American Heart Association/American Stroke Association Stroke Council, Clinical Cardiology Council, Cardiovascular Radiology and Intervention Council, and the Atherosclerotic Peripheral Vascular Disease and Quality of Care Outcomes in Research

- Interdisciplinary Working Groups: The American Academy of Neurology affirms the value of this guideline as an educational tool for

neurologists. Circulation 2007 May 22;115(20):e478-e534.

American Medical Association. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. American Medical Association. Central and Peripheral Nervous System. Guides to the Evaluation of Permanent Impairment. 6th ed. Chicago: American Medical Association Press; 2008. p. 321-45.

Andersson RE. Surgery: Laparoscopy for suspected appendicitis. Nat Rev Gastroenterol Hepatol 2009 Jul;6(7):390-1.

Brown RD, Jr., Petty GW, O'Fallon WM, Wiebers DO, Whisnant JP. Incidence of transient ischemic attack in Rochester, Minnesota, 1985-

1989. Stroke 1998 Oct;29(10):2109-13.

Carod-Artal FJ, da Silveira RL, Braga H, Kummer W, Mesquita HM, Vargas AP. Prevalence of patent foramen ovale in migraine patients with and without aura compared with stroke patients. A transcranial Doppler study. Cephalalgia 2006 Aug;26(8):934-9.

Centers for Disease Control and Prevention. Types of Stroke. National Center for Chronic Disease Prevention and Health Promotion, Division for Heart Disease and Stroke Prevention . 1-14-2010. Atlanta. 2-7-2011.

D'Agostino RB, Wolf PA, Belanger AJ, Kannel WB. Stroke. Framingham Heart Study 2011 January 11 [cited 2011 Feb 11]; Easton JD, Saver JL, Albers GW, Alberts MJ, Chaturvedi S, Feldmann E, et al. Definition and evaluation of transient ischemic attack: a scientific statement for healthcare professionals from the American Heart Association/American Stroke Association Stroke Council; Council on Cardiovascular Surgery and Anesthesia; Council on Cardiovascular Radiology and Intervention; Council on Cardiovascular Nursing; and the Interdisciplinary Council on Peripheral Vascular Disease. The American Academy of Neurology affirms the value of this statement as an educational tool for neurologists. Stroke 2009 Jun;40(6):2276-93.

Etminan M, Takkouche B, Isorna FC, Samii A. Risk of ischaemic stroke in people with migraine: systematic review and meta-analysis of observational studies. BMJ 2005 Jan 8;330(7482):63.

Frankel M, Hinchey J, Schwamm L, Wall H, Rose K, George M, et al. Prehospital and hospital delays after stroke onset--United States, 2005-

2006. MMWR Morb Mortal Wkly Rep 2007 May 18;56(19):474-8.

Furie KL, Kasner SE, Adams RJ, Albers GW, Bush RL, Fagan SC, et al. Guidelines for the prevention of stroke in patients with stroke or transient ischemic attack: a guideline for healthcare professionals from the american heart association/american stroke association. Stroke 2011 Jan;42(1):227-76. Gibbs JW, III, Piantadosi CA, Massey EW. Internal carotid artery dissection in stroke from SCUBA diving: a case report. Undersea Hyperb Med 2002;29(3):167-71. Gilkey KM, McRae MP, Griffin EA, Kalluri AS, Myers JG. Bayesian Analysis For Risk Assessment of Selected Medical Events in Support of the Integrated Medical Model Effort. Technical Paper. Cleveland, OH: National Aeronautics and Space Administration, Glenn Research Center;

2012. Report No.: NASA/TP-2012-217120.

Gillum LA, Mamidipudi SK, Johnston SC. Ischemic stroke risk with oral contraceptives: A meta-analysis. JAMA 2000 Jul 5;284(1):72-8.

Hankey G. Impact of Treatment of People with Transient Ischaemic Attacks on Stroke Incidence and Public Health. Cerebrovasc Dis 19966, Suppl 1:26-33. Hartnett H. Strokes: Lifetime Surveillance of Astronaut Health (LSAH). 6-2-2010.

International Space Station Program. Medical Standards for ISS Crewmembers - MED Vol A. 3.2 ed. NASA; 2011.

Jacobs BS, Boden-Albala B, Lin IF, Sacco RL. Stroke in the young in the northern Manhattan stroke study. Stroke 2002 Dec;33(12):2789-93.

Johnson EG, McCrary BF, Kruyer WB. Transcatheter PFO closure in an aircrew member with cryptogenic stroke: aeromedical disposition.

Aviat Space Environ Med 2004 Feb;75(2):180-3.

Johnston S, Arenare B, Smart K. Medical Evacuation and Vehicles for Transport. In: Barratt M, Pool S, editors. Principles of Clinical Medicine for Space Flight.New York: Springer; 2008. p. 139-61. 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 15

Reference Keenan TD, Salmon JF, Yeates D, Goldacre M. Trends in rates of primary angle closure glaucoma and cataract surgery in England from 1968 to 2004. J Glaucoma 2009 Mar;18(3):201-5.

Kittner SJ, Stern BJ, Wozniak M, Buchholz DW, Earley CJ, Feeser BR, et al. Cerebral infarction in young adults: the Baltimore-Washington Cooperative Young Stroke Study. Neurology 1998 Apr;50(4):890-4.

Kleindorfer D, Panagos P, Pancioli A, Khoury J, Kissela B, Woo D, et al. Incidence and short-term prognosis of transient ischemic attack in a population-based study. Stroke 2005 Apr;36(4):720-3.

Lenzer J. Wonder Drugs That Can Kill. Discover Science, Technology, and The Future [July 2008]. 6-20-2008. New York, Kalmbach Publishing Co. 2-8-2011. Lloyd-Jones D, Adams RJ, Brown TM, Carnethon M, Dai S, de SG, et al. Executive summary: heart disease and stroke statistics--2010 update: a report from the American Heart Association. Circulation 2010 Feb 23;121(7):948-54.

Lloyd-Jones D, Adams RJ, Brown TM, Carnethon M, Dai S, de SG, et al. Heart disease and stroke statistics--2010 update: a report from the American Heart Association. Circulation 2010 Feb 23;121(7):e46-e215.

Marini C, Totaro R, De SF, Ciancarelli I, Baldassarre M, Carolei A. Stroke in young adults in the community-based L'Aquila registry: incidence and prognosis. Stroke 2001 Jan;32(1):52-6.

Merriam-Webster's Medical Dictionary. Stroke. Dictionary com 2007 [cited 2011 Feb 10]; Merriam-Webster's Medical Dictionary. Transient Ischemick Attack (TIA). Dictionary com 2007 [cited 2011 Feb 10]; NASA ISS Medical Operations. US ISS Content Checklist 20110611. version 11.0. 2011. Houston, ISS Medical Operations. 7-16-2010.

NASA Mission Operations Directorate (MOD). International Space Station Integrated Medical Group Medical Checklist. Mission Operations Directorate (MOD), Systems Operations Data File (SODF) . 6-24-2011. Houston, TX, National Aeronautics and Space Administration (NASA).

NASA OCHMO 80771201MED. NASA Crewmembers Medical Standards. Houston: NASA; 2007.

Rosamond W, Flegal K, Furie K, Go A, Greenlund K, Haase N, et al. Heart disease and stroke statistics--2008 update: a report from the American Heart Association Statistics Committee and Stroke Statistics Subcommittee. Circulation 2008 Jan 29;117(4):e25-146.

Schievink WI. Spontaneous dissection of the carotid and vertebral arteries. N Engl J Med 2001 Mar 22;344(12):898-906.

Seshadri S, Beiser A, Kelly-Hayes M, Kase CS, Au R, Kannel WB, et al. The lifetime risk of stroke: estimates from the Framingham Study.

Stroke 2006 Feb;37(2):345-50. 5/11/2020 5:49:05 PM Stroke (cerebrovascular accident) Cliff page: 16

---

## Source metadata

```yaml
source_filename: "stroke-cerebrovascular-accident-cliff.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Neurological Conditions/CliFF 100"
source_url: "https://drive.google.com/file/d/15eoByIPyzsY8FRoorOw29Hr2ucNU_ywB/view"
source_drive_id: "15eoByIPyzsY8FRoorOw29Hr2ucNU_ywB"
source_sha256: 6e3b4633fec8b20c5e61b64e794bef4dd022a1385f03453e04e37d259680468e
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 16
ocr_performed: false
```
