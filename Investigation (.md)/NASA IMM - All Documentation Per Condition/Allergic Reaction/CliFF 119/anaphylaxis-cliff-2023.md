# Anaphylaxis CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1B_BwwcoyagNMiCikDcQ8k4f8axfmY3qA/view) · **14 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Allergic Reaction/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Best Case](#best-case)
- [Incidence:](#incidence)
- [REFERENCES](#references)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

ICL7_Anaphylaxis Anaphylaxis is an acute, life-threatening, IgE-mediated allergic reaction that occurs in previously sensitized people when they are re-exposed to the sensitizing antigen. Symptoms include stridor, dyspnea, wheezing, and hypotension. The diagnosis is clinical. Epinephrine is the first-line treatment for anaphylaxis. Bronchospasm and upper airway edema are treated with inhaled or injected β-agonists and sometimes endotracheal intubation.

Hypotension requires IV fluids and vasopressors. History of atopy does not increase risk of anaphylaxis but increases risk of death when anaphylaxis occurs. Anaphylactoid reactions: These reactions are clinically indistinguishable from anaphylaxis but do not involve IgE and do not require prior sensitization. They occur via direct stimulation of mast cells or via immune complexes that activate complement. An anaphylactic reaction in space would be a significant medical emergency. The most likely sensitizing antigen for a crewmember would be on board medication. Other potential antigens are tracers and markers used in life sciences experiments. Crewmembers are tested for these common allergens before flight, but that does not fully obviate the risk of an anaphylactic reaction, particularly with repeated exposures. Another risk factor is that immune dysregulation occurs in space flight. The clinical manifestations of a vasodilation-induced hypotension in microgravity are not known, but presumably would present differently than in a 1g environment. There are no documented cases of anaphylaxis in spaceflight (Crucian, 2016). Therefore, terrestrial data are used for incidence, CP2 durations, and outcomes.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Crucian et al. 2016 is the only study found that looks into incidence of anaphylaxis in spaceflight. This study would be the most accurate representation of the data we are looking for since it studied long-duration ISS crew members, which is the same as the astronaut population that we are considering.

### ANALOG LITERATURE

Chough et al. 2012 is the only analog study that was found, and this paper reports the incidence of anaphylaxis in wilderness literature. This may not be completely applicable to the astronaut population because although they will be operating in an austere environment, the wilderness environment in the paper was not properly defined and therefore, the conditions may not be the same.

### TERRESTRIAL LITERATURE

Lieberman et al. 2006 and Decker et al. 2008 report the terrestrial incidence of anaphylaxis in the general population. Once again, the spaceflight environment might not mimic the terrestrial environment, so this data may not be completely applicable to the astronaut population. Both studies report similar incidence rates, suggesting that there is consistency in the anaphylaxis rates found on earth.

### OVERALL INCIDENCE SUMMARY

## INCIDENCE

Males = mean 4.065E-4 and SD 4.49E-5. Females = mean 5.902E-4 and SD 5.084E-5.

### INCIDENCE SUMMARY

8/23/2023 5:37:04 PM ICL7_Anaphylaxis Cliff page: 1

Bayesian analysis was performed on sex and age-binned Incidence rates from the Rochester Epidemiology Project to produce posterior distributions for the age-adjusted sex-specific incidence rates. The incidence distribution for males is Gamma(shape=81.965, rate=201635.9) with mean 4.065E-4 and SD 4.49E-5. The incidence distribution for females is Gamma(shape=134.7682, rate=228343.2) with mean 5.902E-4 and SD 5.084E-5. The overall incidence rate is estimated as 0.000491 events/person-year based on a terrestrial general population study (Decker, 2008).

The incidence rate for 40 to 49 year old males and females = 0.000491 events/person-year. Evidence: Terrestrial – Decker 2008 – The etiology and incidence of anaphylaxis in Rochester, Minnesota: A report from the Rochester Epidemiology Project. 211 events (118 in females). Age-specific rates are missing for 60-79. To be conservative, we will assume the same rates as the 50-59 groups for those 50+. Best case/worst case percentages are 69%/31% based on terrestrial data indicating that 69% of patients with anaphylaxis were discharged from the emergency department (Decker, 2008). TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Male Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0004065 SD 4.49E-05 Gamma (Shape): 81.965 (Rate): 201636

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Female Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.0005902 SD 5.084E-05 8/23/2023 5:37:04 PM ICL7_Anaphylaxis Cliff page: 2

Gamma (Shape): 134.768 (Rate): 228343 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ---------------------- | ----------- | --------- | --- |
| Crucian, et al. 2016 | Spaceflight | 4 |  |
| Chough, et al. 2012 | Analog | 3 |  |
| Lieberman, et al. 2006 | Terrestrial | 3 |  |
| Decker, et al. 2008 | Terrestrial | 3 |  |

Crucian et al. 2016 was given a grade of 4 due to the applicability of the paper to the spaceflight environment and astronaut population, reliability of the data, and the fact that the data accurately represents what we will see in spaceflight. Chough et al. 2012 was given a grade of 3 due to the lack of applicability of the paper to the spaceflight environment. This paper gives us the wilderness anaphylaxis incidence; however, the wilderness environment may not fully represent the spaceflight environment (presence of insects, more exposure to outdoor antigens, etc.). Lieberman et al. 2006 is a literature review that reports overall terrestrial incidence; however, the populations in the studies included in this literature review were not explicitly defined and therefore, it has been downgraded to a 3 due to the fact that we cannot be sure about the applicability of this paper to the spaceflight environment and astronaut population. Decker et al. 2008 has been graded a 3 due to the fact that a terrestrial environment may not accurately reflect the spaceflight environment when it comes to anaphylaxis (presence of insects, certain foods, environmental antigens, etc.)

| 8/23/2023 5:37:04 PM | ICL7_Anaphylaxis Cliff |  | page: 3 |
| -------------------- | ---------------------- | --- | ------- |
### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

All crewmembers are tested before flight for their responses to common medications in the ISS medical kits to identify unexpected allergic responses or adverse side effects. An allergic response to these medications is not disqualifying for spaceflight, but it allows appropriate planning of the medical kit inventory. Other antigens that could initiate an anaphylactic response are intravenous tracers and markers occasionally used in life sciences experiments, although these markers are evaluated carefully with the crewmembers before flight.

### BEST CASE SCENARIO DEFINITION

An anaphylactic event that responds to initial treatment.

### WORSE CASE SCENARIO DEFINITION

An anaphylactic shock requiring supportive care.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Shock - Anaphylactic

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Probability of worst case is 30.8%. Best case probability is 69.2% TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Decker, et al. 2008 Terrestrial 4 This article reports that 69.2% of the population diagnosed with anaphylaxis were discharged directly from the ED, meaning that 30.8% required additional care. The additional care was not defined but for our purposes, we define our WC as anything that requires additional supportive care, and this paper fits that criteria. Hence, this paper has been graded a 4. 8/23/2023 5:37:04 PM ICL7_Anaphylaxis Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### Condition TI% Duration TI% Duration TI% RTDC LOCL

### Case Probability

Scenario Composite Incidence % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Males = mean 4.065E-4 69.2 - 69.2 100 1 21.552 4 8 0 0 0 0 0 Best Case and SD 4.49E-5. Females (TBC) = mean 5.902E-4 and SD 5.084E-5. Treated 30.8 - 30.8 100 1 52.8036 8 32 5.60723 0 0.33 0 0.33

## Worst Case

(TWC) Untreated N/A N/A N/A 1 88.068 4 8 100 100 100 10 10

## Best Case

(UTBC) Untreated N/A N/A N/A 1 100 8 32 100 100 100 10 100

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/23/2023 5:37:04 PM ICL7_Anaphylaxis Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

Anaphylaxis is a condition that requires immediate treatment due to the risk of cardiovascular instability and death. Deaths due to anaphylaxis are rare due to the treatment methods that are employed in the ED. Anaphylaxis can be caused by a number of triggers, including food, insect bites, or environmental triggers. This must be taken into consideration because all of these triggers may not be present in spaceflight, leading to different incidences. Furthermore, the immunologic reactions of astronauts can change while in flight so this could lead to a difference in the incidence of anaphylaxis as well. Because anaphylaxis is caused by a trigger, astronauts can be tested for these ahead of time to prevent a reaction in spaceflight. Regardless of the situation, epinephrine is the standard of treatment for anaphylaxis and anaphylactic shock and it will be needed if there is an occurrence of anaphylaxis in flight. Even if the astronauts are tested prior to flight, it does not mean that an in-flight reaction cannot occur. There may also be medicines on board that may lead to an anaphylactic reaction if the astronaut is being treated for another condition.

Therefore, it is important for the medical kits to contain the appropriate medication needed to treat anaphylaxis. Regarding incidence, terrestrial data has limited applicability. For instance, Hymenoptera are the 2nd leading cause of anaphylaxis in all ages-- this exposure will not be relevant in space, so we may assume a lower risk in spaceflight [assuming no particular spacecraft exposures would add to this risk] in undifferentiated, terrestrial incidence data. TREATED BEST CASE (TBC) SCENARIO COMMENTS BC was defined as anaphylaxis that resolved with initial treatment (not requiring hospitalization or additional supportive care). TBC duration was determined from clinical guideline papers. Lieberman et al. 2015 reported that symptoms can progress within minutes to cardiac/respiratory arrest, which was used as the lower duration. Campbell et al. 2014 recommended observing patients in the ED for 4-8 hours before discharge based on the severity of their symptoms, so this was used as the upper duration level. The surrogate used for TBC RTDC was ICU admission, which was found to be anywhere between 0.7% to 5.3%. TBC LOCL was found to be between 0.25% to 0.33%.

TREATED WORST CASE SCENARIO (TWC) COMMENTS WC was defined as anaphylaxis/anaphylactic shock requiring hospitalization or supportive care in addition to epinephrine. TWC duration was determined from clinical guideline papers. Lieberman et al. 2015 was used in the TBC and TWC tabs because it reported the duration to cardiac/respiratory arrest, which can apply to both scenarios - anaphylaxis starts with the same initial symptoms and can progress to become more severe. TWC RTDC includes the two papers from the TBC RTDC tab (Motosue et al. 2018 and Gabrielli et al. 2019) because of similar reasons.

Hospitalization rates should be the same for anaphylaxis and anaphylactic shock because if a patient is unstable or unresponsive to medications, they will be hospitalized. An additional study looking into the hospitalization rates for anaphylactic shock in Denmark was also included in this tab (Jeppesen et al. 2016). TWC LOCL includes two articles, both of which find the fatality for anaphylaxis to be 0.7%.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS BC was defined as anaphylaxis that resolved with initial treatment (not requiring hospitalization or additional supportive care). There were no studies that looked into untreated anaphylaxis because the standard of care treatment is to administer epinephrine as soon as possible. As a result, for the UTBC duration, the same papers from the TBC duration were used for the UTBC duration tab. The papers and data for UTBC RTDC and UTBC LOCL came from the historical anaphylaxis IMM CLiFF since there were no new studies that looked into the hospitalization and mortality rates for untreated anaphylaxis. UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS WC was defined as anaphylaxis/anaphylactic shock requiring hospitalization or supportive care in addition to epinephrine. There were no studies that looked into untreated anaphylactic shock because the standard of care treatment is to administer epinephrine and supportive treatment as soon as possible. As a result, for the UTWC duration, the same papers from the TWC duration were used for the UTWC duration tab. The papers and data for UTWC RTDC and UTWC LOCL came from the historical anaphylaxis CLiFF since there were no new studies that looked into the hospitalization and mortality rates for untreated anaphylactic shock.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Lieberman, et al. 2009 Terrestrial 8/23/2023 5:37:04 PM ICL7_Anaphylaxis Cliff page: 6

| Citation | Source | LOC Value |  |
| -------- | ------ | --------- | --- |

4

| Campbell, et al. 2014 | Terrestrial |  |  |
| ---------------------- | ----------- | --- | --- |
| Lieberman, et al. 2010 | Terrestrial |  |  |

All three papers used for all of the duration tabs are clinical guidelines, making them reliable and applicable to the whole population, which would include the astronaut population in our case. Additionally, because these papers are clinical guidelines, they are reputable soures. These papers clearly define the condition at hand and match the definitions we've created for the scenarios. Terrestrial data regarding anaphylaxis may not accurately reflect the occurrence of anaphylaxis of spaceflight because there are certain factors that may not be present (i.e. anaphylaxis caused by foods/insects that may not necessarily be present in flight, immunologic changes in flight, health of the astronauts/screening for allergies beforehand, etc.); however, once anaphylaxis occurs, the spaceflight environment should not affect the duration of the symptoms. Therefore, the terrestrial data can likely be used to estimate duration in spaceflight as well. Thus, all of these papers have been graded a 4, for an overall grade of 4 for the duration papers. TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ---------------------- | ----------- | --------- | --- |
| Motosue, et al. 2018 | Terrestrial |  |  |
| Gabrielli, et al. 2019 | Terrestrial |  |  |
| Jeppesen, et al. 2016 | Terrestrial |  |  |

4

| Gaeta, et al. 2007 | Terrestrial |  |  |
| ----------------------- | ----------- | --- | --- |
| Peng, et al. 2004 | Terrestrial |  |  |
| Johnston S, et al. 2008 | Terrestrial |  |  |

All papers clearly define the condition at hand and match the definitions that we've created for the various scenarios. The study population included in Gabrielli et al. 2019 was mostly children, with only 1/5 of the study population being adults. Therefore, this paper may not be the most accurate representation of the astronaut population. However, the rest of the papers have study populations with a median or mean age in the 30s-40s, which is more representative of the population. As a result, the overall grade was not downgraded since it is only one paper that is not representative of our population of interest. All papers are published in reputable, peer-reviewed journals so the data is reliable. Once anaphylaxis occurs in spaceflight, it should be similar to anaphylaxis on earth, so the need for definitive care should not change in a spaceflight environment.

Overall, the RTDC papers have been graded a 4.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |  |
| ------------------ | ----------- | --------- | --- |
| Ma, et al. 2014 | Terrestrial |  |  |
| Brown, et al. 2001 | Terrestrial |  |  |

4

| Jeppesen, et al. 2016 | Terrestrial |  |  |
| --------------------- | ----------- | --- | --- |
| Peng, et al. 2004 | Terrestrial |  |  |

All papers clearly define the condition at hand and match the definitions that we've created for the various scenarios. The study populations are not always defined in some of these papers since the data used in the papers came from national databases at times; however, the populations that are mentioned are similar in age to our astronaut population. All papers are published in reputable, peer-reviewed journals so the data is reliable.

Once anaphylaxis occurs in spaceflight, it should be similar to anaphylaxis on earth, so the mortality should not change in a spaceflight environment. Overall, the LOCL papers have been graded a 4.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW Capabilities and Resourcing Scope Overview Anaphylaxis is a true medical emergency that is also reversable with appropriate treatment. The vast majority of cases respond well to single dose administration of epinephrine augmented with antihistamines and corticosteroids. In rare cases repeat doses may be necessary as well as further support for hypotension, severe bronchospasm, and throat swelling. While the most extreme cases require an epinephrine drip, ventilator, fluids, and occasionally other vasoactive agents this level of critical care was excluded under the "middle of the road" approach used for this effort. Additionally, full cardiopulmonary collapse is covered under the cardiac arrest condition. No definitive

| 8/23/2023 5:37:04 PM | ICL7_Anaphylaxis Cliff |  | page: 7 |
| -------------------- | ---------------------- | --- | ------- |
testing capability to determine the allergy cause is included. The present version of IMPACT does not allow for the increase in incidence of subsequent cases once an initial allergic reaction occurs. CNES: anaphylactic shock Diagnostic Scope and Resourcing Diagnosis in this condition must be made swiftly and relies on history vital signs, and physical exam. For this reason, resources for taking periodic vital signs, performing a cardiopulmonary exam, an oropharyngeal exam, and a skin exam are included. No additional resources for instrumentation, biomarker analysis, or imaging were included. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1 hour to perform a primary assessment, take vital signs, and perform a cardiopulmonary exam, a skin exam, and an oropharyngeal exam. This uses the standard of “longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment” CP1 WC (Treated or

- Untreated): 1 hour to perform a primary assessment, take vital signs, and perform a cardiopulmonary exam, a skin exam, and an oropharyngeal

exam. This condition requires a scope of practice 5 commensurate with a skilled, procedure trained, generalist physician such as an emergency medicine doctor or a family medicine doctor. Treatment Scope and Resourcing Treatment in the best case scenario includes 2 doses of IM Epinephrine in conjunction with oral antihistamines, and oral corticosteroids. Treatment after stabilization includes 5 days of antihistamines and corticosteroids. The ability to repeat vital signs periodically is also included. This is terrestrial emergency medicine standard of care and nearly all terrestrial cases respond well to this treatment if caught early. The worst case is refractory to the initial treatment. For this scenario sufficient epinephrine to perform IM injections or IV push doses once an hour for 48 hours is included. along with IV antihistamines and corticosteroids. 3 Liters of IV fluids, non-invasive oxygen therapy, MDI/Spacer based bronchodilators are also included. The need for IV medications is presumed due to the likelihood that pharyngeal swelling and nausea may limit the effectiveness of orally delivered medications. Following stabilization 5 days of oral corticosteroids and antihistamines are also included. Since respiratory failure and cardiopulmonary failure are covered in a separate conditions, full support with IV epinephrine infusions, invasive ventilation, and long term parenteral hydration/nutrition are not included here. It is also presumed that under spaceflight conditions anaphylaxis will be diagnosed early. While early diagnosis and treatment are associated with a high probability of a good outcome conditions refractory to treatment under these conditions are associated with an extremely poor prognosis. In the anticipated astronaut population in the spaceflight environment it is highly likely that anaphylactic shock exceeding the resources scoped in this CRT will be medically futile even with maximal treatment. Therefore these additional resources were not included. Communications and Support Needs Given the emergent nature of this condition communications with audio, video, and remote telemetry will be needed in as close to real time as possible for both the best and worst case scenarios

### IMM CLIFF RECONCILATION COMMENTS

The IMM CliFF for Anaphylaxis provides a reasonable estimate for incidence. Best case/worst case percentages, CP2 durations, RDTC, and LOCL are updated based on new terrestrial studies, and the updated best case and worst case definitions.

### LIMITATIONS SUMMARY

No cases of anaphylaxis have occurred in spaceflight. Only general terrestrial population data are available to determine the incidence and outcomes for anaphylaxis in spaceflight. The spaceflight environment may result in immune dysregulation which may affect the incidence and outcomes of anaphylaxis among astronauts in spaceflight. 8/23/2023 5:37:04 PM ICL7_Anaphylaxis Cliff page: 8

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 |  |  |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 223 | 664 | 113 | 89 |  |  | 145 | 5 | 13 | 6 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated

| Worst | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
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

| Best | 132 |  | 414 | 22 |  |  | 34 | 211 | 1622 | 3763 | 0.431039 | 43.1039 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 2865 | 3763 | 0.761361 | 76.1361 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (UTBC) Treated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (TWC) Untreated Worst

|  | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

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

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| -------------------- | --- | --- | --- | -------------------------- | ---------------------- | --- | --- | --- | --- | -------------- | --- | -------- |
| 8/23/2023 5:37:04 PM |  |  |  |  | ICL7_Anaphylaxis Cliff |  |  |  |  |  |  | page: 9 |
Total Human

|  |  |  |  | Translation & |  | Total Tasks |  |  |
| --- | --- | --- | --- | ------------- | --- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

|  | (Dom) |  | Extremity | Standing (g) | Equipment Ops |  | Category |  |
| --- | ----- | --- | --------- | -------------- | ------------- | --------- | ---------- | --- |
|  |  |  |  | (microgravity) |  | Condition | Tasks Full |  |

Mission Treated Best

|  |  |  |  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  | 132 564 | 414 | 22 | 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| --- | ------- | --- | --- | ------ | ------ | ---- | ------ | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  | 211 | 211 | 3763 0.0560723 | 5.60723 |
| --- | --- | --- | --- | --- | --- | --- | -------------- | ------- |

Case (TWC) Untreated Worst

|  | 132 564 | 414 | 22 | 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| --- | ------- | --- | --- | ------ | ------ | ---- | ------ | --- |

Case (UTWC)

| 8/23/2023 5:37:04 PM |  |  |  | ICL7_Anaphylaxis Cliff |  |  |  | page: 10 |
| -------------------- | --- | --- | --- | ---------------------- | --- | --- | --- | -------- |
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

8/23/2023 5:37:04 PM ICL7_Anaphylaxis Cliff page: 11

## REFERENCES

Reference Decker, Wyatt W et al. “The etiology and incidence of anaphylaxis in Rochester, Minnesota: a report from the Rochester Epidemiology Project.” The Journal of allergy and clinical immunology vol. 122,6 (2008): 1161-5. doi:10.1016/j.jaci.2008.09.043. Lieberman, Phillip et al. “Anaphylaxis--a practice parameter update 2015.” Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology vol. 115,5 (2015): 341-84. doi:10.1016/j.anai.2015.07.019. Lieberman, Phillip et al. “The diagnosis and management of anaphylaxis practice parameter: 2010 update.” The Journal of allergy and clinical immunology vol. 126,3 (2010): 477-80.e1-42. doi:10.1016/j.jaci.2010.06.022 Campbell, Ronna L et al. “Emergency department diagnosis and treatment of anaphylaxis: a practice parameter.” Annals of allergy, asthma & immunology : official publication of the American College of Allergy, Asthma, & Immunology vol. 113,6 (2014): 599-

608. doi:10.1016/j.anai.2014.10.007. Ma, Larry et al. “Case fatality and population mortality associated with anaphylaxis in the United States.”

The Journal of allergy and clinical immunology vol. 133,4 (2014): 1075-83. doi:10.1016/j.jaci.2013.10.029. Peng, Michael M, and Hershel Jick. “A population-based study of the incidence, cause, and severity of anaphylaxis in the United Kingdom.” Archives of internal medicine vol. 164,3 (2004): 317-9. doi:10.1001/archinte.164.3.317

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

8/23/2023 5:37:04 PM ICL7_Anaphylaxis Cliff page: 12

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

8/23/2023 5:37:04 PM ICL7_Anaphylaxis Cliff page: 13

| 8/23/2023 5:37:04 PM | ICL7_Anaphylaxis Cliff | page: 14 |
| -------------------- | ---------------------- | -------- |

---

## Source metadata

```yaml
source_filename: "anaphylaxis-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Allergic Reaction/CliFF 119"
source_url: "https://drive.google.com/file/d/1B_BwwcoyagNMiCikDcQ8k4f8axfmY3qA/view"
source_drive_id: "1B_BwwcoyagNMiCikDcQ8k4f8axfmY3qA"
source_sha256: 2c943f780bc2fd24c92e8bfd09936f3af011adc2d204425e2d70dc0576f495ed
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 14
ocr_performed: false
```
