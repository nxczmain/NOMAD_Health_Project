# Toxic Dermal Exposure CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1qo_qps1xuszPF4doknS3Y3PSIegzkmuC/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119

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

### ICL109_Toxic Dermal Exposure

Toxic dermal exposure involves dermal injury, including urticaria, inflammation, scarring and ulceration, resulting from exposure to a substance.

Conditions under this CLiFF include contact dermatitis and skin injury from toxic substances. Stevens-Johnson syndrome (SJS) may also fall under this as a severe case. Treatment often involves removal of the offending substance. Use of topical corticosteroids can reduce inflammation.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

No reported events of toxic dermal exposure occurring in spaceflight.

### ANALOG LITERATURE

Lack of analog literature

### TERRESTRIAL LITERATURE

Contact allergy with at least one reactant is common in the general population; 40.0% having a positive reaction to at least one allergen (Schäfer T, 2001). Occupational skin reactions are also well documented, with latex/rubber allergies presenting with contact dermatitis (Cherry N. et al., 2000)

Other common substances presenting with skin irritation include nickel and epoxy. Of note, chromium exposure can cause a high incidence of skin disease, leading to ulceration (Lee H. et al., 1988). Population studies for terrestrial incidence are well conducted, drawing data from a diverse population. Studies were found by matching to the best case definition condition terms.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

mean 1.063E-4 and SD 1.062E-6

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the total incidence rate given the component terrestrial data sources under an uninformative prior is Gamma(shape=10018.84, rate=94250623) with mean 1.063E-4 and SD 1.062E-6. Evidence LOE 4 Terrestrial U.K. – Cherry 2000 – Surveillance of occupational skin disease: EPIDERM and OPRA. 12,754 cases of occupational skin disease with incidence rate of 12.9 per 100kpy. This translates to 98,868,217 person-years. The relevant disease categories from Table 1 are contact dermatitis and contact urticaria which comes to a total of 10,371 cases (9937+434). IR: 1.049E-4 (95%CI: 1.029E-4, 1.069E-4) Terrestrial Italy – Diphoorn 2015 – Incidence, causative factors and mortality rates of Stevens-Johnson syndrome (SJS) and toxic epidermal necrolysis (TEN) in northern Italy: data from the REACT registry. 17 cases of TEN and 59 cases of SJS with overall incidence of 1.4 per million person-years. This implies 76 total events and 54,285,714 person-years. IR: 1.4E-6 (95%CI: 1.111E-6, 1.743E-6). These conditions are not captured in the Cherry 2000 reference.

TABLE 1. INCIDENCE MODEL 6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 1

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0001063 SD 1.062E-06 Gamma (Shape): 10018.8 (Rate): 9.42506E+07 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Cherry N et al., 2000 terrestrial 2 Diphoorn J et al., 2015 terrestrial 2 Lee H et al., 1998 terrestrial 2 Schäfer T et al., 2005 terrestrial 2 Alinaghi F et al., 2018 terrestrial 2 Hall AH et al., 2018 Terrestrial 2 Shah KR et al., 2010 terrestrial 2 All studies were well conducted and well designed in representative populations. Studies were matched to best case condition terms, with diverse population. Worst case probability estimate drawn from Shah KR et al., 2010: BC/WC probablility rate is estimated from the rate of ulcerations in workers with chemical exposure to materials including chromium, lime Occupational exposure is common in the general population. First line treatment is removal of the irritant, which generally will resolve irritation/inflammation. In severe cases, corrosive substances can cause ulceration and scarring. 6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

None

### BEST CASE SCENARIO DEFINITION

Dermal exposure to an irritant substance resulting in inflammation/irritation that responds to treatment.

### WORSE CASE SCENARIO DEFINITION

Dermal exposure to a corrosive substance resulting in cell death, ulceration, leading to permanent scarring.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

- Toxic Dermal Exposure: Excludes chemical burns and allergic reactions. SJS and TEN included under this CLiFF

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Worst case probability estimate drawn from Shah KR et al., 2010: BC/WC probability rate is estimated from the rate of ulcerations in workers with chemical exposure to materials including chromium and lime Occupational exposure is common in the general population. First line treatment is removal of the irritant, which generally will resolve irritation/inflammation. In severe cases, corrosive substances can cause ulceration and scarring.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Diphoorn J et al., 2015 terrestrial 2 Lee H et al., 1998 terrestrial 2 Shah KR et al., 2010 terrestrial 2 All studies were well conducted and well designed in representative populations. Studies were matched to best case condition terms and drew from diverse populations. Worst case probability estimates were drawn from Shah KR et al., 2010, with the BC/WC probability rate estimated from the rate of ulcerations in workers with chemical exposures to materials such as chromium and lime Occupational exposure is common in the general population. First line treatment is removal of the irritant, which generally will resolve irritation/inflammation. In severe cases, corrosive substances can cause ulceration and scarring. 6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best mean 1.063E-4 89 - 89 100 0.81 12.5033 0 336 0 0 0 0 0 Case (TBC) and SD 1.062E-6 Treated Worst 11 - 11 100 1.23 25.764 72 730 6.51076 5 100 5 29.4 Case (TWC) Untreated Best N/A N/A N/A 0.81 21.3261 24 435 0 0 0 0 0 Case (UTBC) Untreated Worst N/A N/A N/A 1.23 41.4031 720 1680 25.0066 29 100 29 30 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Exposure to toxic substances is generally well tolerated if the offending substance is removed and the affected skin washed and treated In worst case scenarios, there is weak evidence supporting the use of corticosteroids to reduce inflammation.

TREATED BEST CASE (TBC) SCENARIO COMMENTS Topical corticosteroids are used to reduce inflammation, duration is 3 days following exposure (Fornacier L. et al., 2015). Use of emollient is also advised. Urticaria due to irritating substance is treated with 2nd generation antihistamines, duration 2 weeks, followed by up to a fourfold increase in dose if refractory to treatment (Zuberbier T. et al., 2014). As treatment is generally management of symptoms and removal of irritant, hospitalization and mortality data for best case scenarios are limited. Treatment for toxic dermal exposure in the best case scenario involves removal of the offending agent and reducing inflammation and urticaria. RTDC and LOCL is not expected for the TBC scenario based on the definition provided of the condition. TREATED WORST CASE SCENARIO (TWC) COMMENTS The duration of treated worst case scenarios varies between the type of toxic dermal exposure. For exposure refractory to treatment, second and third line treatment for irritant contact dermatitis involves a 12-24 hour course of systemic steroids (Usatine RP et al., 2010). For patients where corticosteroids are contraindicated, topical tacrolimus is effective (Pacor M et al., 2006). There is no consensus on the best treatment for Stevens- Johnson syndrome (SJS). Prognosis for SJS is poor, with ICU admission indicated if suspected, with up to 29.4% estimated mortality (Creamer D. et al., 2016). Dermal exposure to trichloroethylene has been reported to trigger a SJS/TEN-like presentation, with a similar mortality rate (Kamijima, M. et al., 2007). For chemical exposure to the skin, ulceration and permanent scarring are possible complications which can arise. Depending on the severity and type of irritant, prognosis can vary from uncomplicated to loss of life (AH Hall et al., 2010; Touzopolous P et al., 2011).

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS For dermal exposure to toxic substances, the first line management before treatment is to remove the offending substance. Following this, the best case condition will most likely resolve itself. Treatment consists of using moisturizers to hydrate the dermal layer and reduce irritation (Lodén M et al., 1996), or use of topical corticosteroids to reduce inflammation (Fornacier L. et al., 2015). Without treatment, irritation will resolve, however recovery will be prolonged (Amrol D et al., 2003). ROTC and LOCL is estimated at 0% for UTBC.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS For UTWC, length of treatment and rate of hospitalization depends on the severity of the condition. Emergencies, such as SJS, will require hospitalization for up to 4 weeks (Wolkenstein P et al., 1998). Exposure resulting in chronic skin inflammation may last over 16 weeks without treatment (Griffiths C et al., 2021) . Mortality rate for emergencies resulting from toxic exposure is high in comparison to TWC, at 29-30% (Brown KM et al., 2004; Wolkenstein P et al., 1998).

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Fonacier L et al., 2015 terrestrial Bains S et al., 2018 terrestrial Pacor M et al., 2006 terrestrial Li Y et al.,1993 terrestrial Creamer D et al., 2016 terrestrial Amrol D et al., 2003 terrestrial 2 6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 5

| Citation | Source | LOC Value |
| -------------------------- | ----------- | --------- |
| Lodén M et al., 1996 | terrestrial |  |
| Wolkenstein P et al., 1998 | terrestrial |  |
| Griffiths C et al., 2021 | terrestrial |  |

All studies are representative of the duration of disease in the general population for best case and worst case. Data is drawn from clinical guidelines (Fonacier L et al., 2015; Zuberbier T et al., 2014), and clinical trials. All evidence was selected was taken from adult populations with immunocompetent individuals where possible. However, specifically with UTWC, as the incidence of toxic exposure emergency (Stevens-Johnson syndrom (SJS), Toxic epidemal necrolysis (TEN)) is low, reliability of the data is reduced (Wolkenstein P et al., 1998).

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ---------------------- | ----------- | --------- |
| Morita, K. et al, 2019 | terrestrial |  |

2

| Touzopoulos P et al., 2011 | terrestrial |  |
| -------------------------- | ----------- | --- |

Using the RTDC surrogate, probability of TBC or UTBC RTDC is assumed to be 0%. For medical emergencies such as SJS following toxic exposure, 100% of suspected patients are admitted to an ICU or burn unit (Morita K et al., 2019). The other study included was also well conducted, although had noted limitations due to data collection occuring in a single country. Furthermore, chemical skin exposure causing permanent scarring may also cause little disability (Touzopolous P et al., 2011).

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| -------------------------- | ----------- | --------- |
| Kamijima, M. et al., 2007 | terrestrial |  |
| Diphoorn J et al., 2015 | terrestrial |  |
| Wolkenstein P et al., 1998 | terrestrial | 1 |
| Brown KM et al., 2004 | terrestrial |  |
| Hall AH et al., 2018 | analog |  |

While BC toxic dermal exposure is not likely to have serious impacts on loss of crew life, severe or chronic exposure can result in a high probability of mortality, despite treatment (Kamijima M et al., 2007; Diphoorn J et al., 2015). Evidence for LOCL was drawn from hospitalized patients only. Data for untreated worst case occurrences was given a low level of confidence due to the low number of participants in the trials. Furthermore, one of the trials was terminated prematurely due to excess subject deaths in the intervention group (Wolkenstein P et al, 1998). Chemical skin exposure to caustic and corrosive substances in worst case scenarios among military studies has a high rate of mortality (AH Hall et al., 2010).

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

- Capabilities and Resourcing Scope Overview Worst Case Definition: Dermal exposure to a corrosive substance resulting in cell death, ulceration,

leading to permanent scarring. Best Case Definition: Dermal exposure to an irritant substance resulting in inflammation/irritation that responds to treatment. Toxic skin exposure associated medical response is to address the pain and discomfort associated with the condition and with antibiotic therapy and dressings to mitigation infection risk. Generally this condition is one of discomfort rather than a medical emergency although some antibiotics may need to be applied to reduce risk. The CRT condition focuses solely on the physical exam in the best case and the prevention of infection and pain management in the worst case. Diagnostic Scope and Resourcing In the best-case scenario, diagnosis is based on history and physical examination. In the worst-case scenario, diagnosis is based on history and physical examination. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.81 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Remove impacted clothing 3 - Perform a physical on the patient 4 - Irrigation CP1 WC (Treated or Untreated): 1.23 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Remove impacted clothing 3 - Perform a physical on the patient 4 - Irrigation The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing diagnostic tests and performing treatment would be a four: this is an intern level. Treatment Scope and Resourcing In the best-case scenario, treatment is non-existent, based on definition of the condition. The worst case scenario also allocates for irrigation, dressing application and antibiotic prophylaxis. 1 - Did not include nutritional changes, though these would be recommended 6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 6

to be high in protein, because food will not be a part of the med kit and we were instructed not to include resources not in the med kit 2 - Did not include any grafting or alternatives as storage vs incidence seemed low value 3 - Did not include any resources for skin stretching as these are typically either fairly large or specific for the application and makeshift items could be created for a similar purpose and efficacy 4 - Not including ECLSS equipment shutoff for same reasons as food changes 5 - Any condition requiring IV antibiotics would result in Sepsis and will be considered part of that condition 6 - NG tube not included as the scope of this condition will require a patient who remains awake and able to self feed 7 - No ventilation is needed because if it is, we would assume respiratory failure has occurred and that condition would apply 8 - Duloxetine is not very effective and was therefore excluded from consideration. 9 - Antidote application is not being included because we will not know the toxins being flown. Communications and Support Needs In the best-case scenario, diagnosis and course of treatment is uncomplicated and likely within the scope of care of onboard crew members. In the worst-case condition, ground communications will be helpful given the complicated nature of the condition and the scope of care onboard. REFERENCES

### IMM CLIFF RECONCILATION COMMENTS

No previous CLiFF data for this condition

### LIMITATIONS SUMMARY

Lacking spaceflight data and a prior CLiFF to draw from, this CLiFF was largely informed by terrestrial findings (e.g. large scale population-based studies). While many of the terrestrial studies included healthy adult populations with few pre-existing conditions, the CLiFF is still limited by the lack of good quality spaceflight data to inform estimates throughout. 6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - Cognitive - |  |  |  | Cardio- |  |  |  |  |
| --- | ----------------------- | --- | --- | --- | ------- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 664 |  |  |  |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 664 |  | 89 |  |  |  |  |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 664 | 113 | 89 |  | 145 |  |  |  |  |
| --- | ------- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

Total Human

|  |  |  |  | Translation & |  | Total Tasks |  |  |  |
| --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity Standing (g) |  | Equipment | Ops | Category |  |  |
| --- | ----- | --- | ---------------------- | -------------- | --------- | --------- | -------- | --- | --- |
|  |  |  |  | (microgravity) |  | Condition |  |  |  |

### Tasks Full

Mission Treated

| Best | 132 564 |  |  |  | 34 | 211 941 | 3763 | 0.250066 | 25.0066 |
| ---- | ------- | --- | --- | --- | --- | ------- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 564 |  |  |  | 34 | 211 1605 | 3763 | 0.426521 | 42.6521 |
| ---- | ------- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 564 |  |  |  | 34 | 211 1694 | 3763 | 0.450173 | 45.0173 |
| --- | ------- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (TWC) Untreated Worst

|  | 132 564 |  |  |  | 34 | 211 2175 | 3763 | 0.577996 | 57.7996 |
| --- | ------- | --- | --- | --- | --- | -------- | ---- | -------- | ------- |

Case (UTWC) Clinical Phase 3: Condition End State

### Affected HSTCs

|  | Cognitive - Cognitive - |  | Inter- |  | Cardio- |  |  |  |  |
| --- | ----------------------- | -------------- | --------------- | ------- | --------- | --------- | ----- | --- | --- |
|  |  | Communications | personal Vision | Hearing |  | Dentition | GI GU |  |  |
|  | Simple Complex |  |  |  | pulmonary |  |  |  |  |

Skills Treated Best

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  | Affected HSTCs (Continued) |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | -------------------------- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 8

Total Human

|  | Translation & |  | Total Tasks |  |
| --- | ------------- | --- | ----------- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | ---------------------- | ------------- | -------------------- | --- |
|  | (microgravity) |  | Condition Tasks Full |  |

Mission Treated Best

|  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  | 34 211 | 245 3763 | 0.0651076 6.51076 |
| --- | --- | ------ | -------- | ----------------- |

Case (TWC) Untreated Worst

| 132 564 |  | 34 211 | 941 3763 | 0.250066 25.0066 |
| ------- | --- | ------ | -------- | ---------------- |

Case (UTWC) 6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 9

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

6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 10

## REFERENCES

Reference Fonacier L, Bernstein D, Pacheco K et al. Contact Dermatitis: A Practice Parameter–Update 2015. The Journal of Allergy and Clinical

- Immunology: In Practice. 2015;3(3):S1-S39. doi:10.1016/j.jaip.2015.02.009

Bains S, Nash P, Fonacier L. Irritant Contact Dermatitis. Clin Rev Allergy Immunol. 2018;56(1):99-109. doi:10.1007/s12016-018-8713-0 Pacor M, Di Lorenzo G, Martinelli N et al. Tacrolimus ointment in nickel sulphate–induced steroid-resistant allergic contact dermatitis. Allergy Asthma Proc. 2006;27(6):527-531. doi:10.2500/aap.2006.27.2915 Li Y, Liu Y. Analysis of 155 patients with chemical injury: a 5-year experience. Burns. 1993;19(6):516-518. doi:10.1016/0305-4179(93)90011-v Creamer D, Walsh SA, Dziewulski P, et al. U.K. guidelines for the management of Stevens-Johnson syndrome/toxic epidermal necrolysis in adults

2016. Br J Dermatol. 2016;174(6):1194-1227. doi:10.1111/bjd.14530

Amrol D, Keitel D, Hagaman D, Murray J. Topical pimecrolimus in the treatment of human allergic contact dermatitis. Ann Allergy Asthma Immunol. 2003;91(6):563-566. doi:10.1016/S1081-1206(10)61535-9 Lodén M, Andersson AC. Effect of topically applied lipids on surfactant-irritated skin. Br J Dermatol. 1996;134(2):215-220.

Wolkenstein P, Latarjet J, Roujeau JC, et al. Randomised comparison of thalidomide versus placebo in toxic epidermal necrolysis. Lancet. 1998;352(9140):1586-1589. doi:10.1016/S0140-6736(98)02197-7 Griffiths C, de Bruin-Weller M, Deleuran M, et al. Dupilumab in Adults with Moderate-to-Severe Atopic Dermatitis and Prior Use of Systemic Non-

- Steroidal Immunosuppressants: Analysis of Four Phase 3 Trials [published online ahead of print, 2021 Jun 18]. Dermatol Ther (Heidelb).

2021;10.1007/s13555-021-00558-0. doi:10.1007/s13555-021-00558-0 Kamijima, M., Hisanaga, N., Wang, H. et al. Occupational trichloroethylene exposure as a cause of idiosyncratic generalized skin disorders and accompanying hepatitis similar to drug hypersensitivities.

Int Arch Occup Environ Health 80, 357–370 (2007). https://doi.org/10.1007/s00420-006-0147-y Diphoorn J, Cazzaniga S, Gamba C et al. Incidence, causative factors and mortality rates of Stevens-Johnson syndrome (SJS) and toxic epidermal necrolysis (TEN) in northern Italy: data from the REACT registry. Pharmacoepidemiol Drug Saf. 2015;25(2):196-203. doi:10.1002/pds.3937 Wolkenstein P, Latarjet J, Roujeau JC, et al. Randomised comparison of thalidomide versus placebo in toxic epidermal necrolysis. Lancet. 1998;352(9140):1586-1589. doi:10.1016/S0140-6736(98)02197-7 Brown KM, Silver GM, Halerz M, Walaszek P, Sandroni A, Gamelli RL. Toxic epidermal necrolysis: does immunoglobulin make a difference?. J Burn Care Rehabil. 2004;25(1):81-88. doi:10.1097/01.BCR.0000105096.93526.27 Hall AH, Mathieu L, Maibach HI. Acute chemical skin injuries in the United States: a review. Crit Rev Toxicol. 2018;48(7):540-554. doi:10.1080/10408444.2018.1493085

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

### CliFF Clinical Finding Form

### CMO Crew Medical Officer

### COMFORT Clinical Outcome Metrics for Optimization of Robust Training

CP1 Clinical Phase 1 6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 11

CP2 Clinical Phase 2 CP3 Clinical Phase 3

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

### OR Occurrence Rate

### PA Physician Assistant

### PDQ Pain Disability Questionnaire

### PFCL Proposed Future Conditions List

### PPE Personal Protective Equipment

6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 12

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

6/15/2023 2:14:15 PM ICL109_Toxic Dermal Exposure Cliff page: 13

---

## Source metadata

```yaml
source_filename: "toxic-dermal-exposure-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Skin Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1qo_qps1xuszPF4doknS3Y3PSIegzkmuC/view"
source_drive_id: "1qo_qps1xuszPF4doknS3Y3PSIegzkmuC"
source_sha256: 19c48ec80ba063c7f5f024340ea8f682d29bd98616eb98ed6cb8b4ac1600cec3
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
