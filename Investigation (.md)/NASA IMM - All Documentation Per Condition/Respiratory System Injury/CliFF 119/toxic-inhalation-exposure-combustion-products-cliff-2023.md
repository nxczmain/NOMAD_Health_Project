# Toxic Inhalation Exposure Combustion Products CLiFF 2023

[View original PDF](https://drive.google.com/file/d/1KRc3EdRj6J8LfV2T8rcra9FtkMASQTxw/view) · **19 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Respiratory System Injury/CliFF 119

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

ICL111_Toxic Inhalation Exposure - Combustion Products Toxic inhalation exposure - combustion products is intended to be a condition that occurs during or after a fire within the habitable volume of the spacecraft in which smoke is inhaled by the crew. This smoke inhalation has 3 primary mechanisms of injury: thermal damage, asphyxiation, and pulmonary irritation. Thermal damage is typically limited to the oropharyngeal area. In animal studies the inhaled air can be 142o C then when it reaches the carina it has cooled to 38o C. Asphyxia causing tissue hypoxia occurs as the combustion utilizes the oxygen, which decreases the concentration of oxygen to 10-13%. The decrease in fraction of inspired oxygen (FI02) leads to hypoxia. Carbon monoxide further contributes to the tissue hypoxia by decreasing the oxygen-carrying capacity of the blood. Lastly pulmonary irritation can cause direct tissue injury, acute bronchospasm and activation of the body’s inflammatory response system (Lafferty, 2010) Smoke inhalation injury continues to increase morbidity and mortality in burn patients in both the third world and industrialized countries. The lack of uniform criteria for the diagnosis and definition of smoke inhalation injury contributes to the fact that, despite extensive research, mortality rates have changed little in recent decades. The formation of reactive oxygen and nitrogen species, as well as the procoagulant and antifibrinolytic imbalance of alveolar homeostasis, all play a central role in the pathogenesis of smoke inhalation injury. Further hallmarks include massive airway obstruction owing to cast formation, bronchospasm, the increase in bronchial circulation and transvascular fluid flux. Therefore, anticoagulants, antioxidants and bronchodilators, especially when administered as an aerosol, represent the most promising treatment strategies (Rehberg, 2009)

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Most of the space incidence data comes from Antonsen, 2007 and the prior CLiFF note, which utilized data from the ISS PRA model to calcuate the risk of fire based on prior US space missions, given equivalent incidence of roughly 3 smoke exposures (i.e. fires) per 28 years of spaceflight (0.11 fires per person-year). However, risk of fire (and by extension, risk of inhalation smoke injury) is dependent on craft design and specifications, including the type and quantity of combustible products on board.

### ANALOG LITERATURE

For the three analog data references provided, each represents a different type of fire/smoke inhalation risk based on analagous environments.

For the UNOLES data (accessed 2021), there has a very low rate of fire accidents on research vessels (0.0039 fires per person-years), an isolated, enclosed situation not unlike a spacecraft. Likewise, data from the National Fire Protection Agency (Ahrens, 2020) provides excellent incidence data on vehicle fires (0.67 vehicle fires per 1000 person -years; 0.00067 per person-year) seperated into the type of vehicle, and includes mortality rates, which may be analogous to smoke inhalation injury, as smoke inhalation and asphyxiation are the primary causes of death in most small fires. Another analog reference included were detailed medical surveys of Japanese antarctic expeditions in which the participants overwintered at an isolated station (Ikeda, 2019), which reported no incidences of fire injury or smoke inhalation in nearly 60 years of expeditions but did note several cases of CO poisoning (0.023 exposures per person-year), most related to engine combustion fumes in vehicles.

### TERRESTRIAL LITERATURE

Terrestrial data should be criticized for lack of information on context and environment for accident data; as such, most attention should be focused on studies specifically addressing enclosed fires, such as residential or other building fires (Blindauer, 2003; Ahrens, 2020). Other epdiemiological studies have focused on carbon monoxide exposure, which shed light on the relation between poisoning events and mortality, but has little to no direct translatability to spaceflight. Nonetheless, the majority of CO poisonings regardless of source are in enclosed spaces.

### OVERALL INCIDENCE SUMMARY

6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 1

## INCIDENCE

9E-3 and SD 6.68E-3

### INCIDENCE SUMMARY

This is an environmental exposure condition. The incidence rate distribution for the combustion exposure is based on the ISS PRA fire model. The identified distribution is Gamma(shape=1.832, rate=202.651) with mean 9E-3 and SD 6.68E-3. This distribution was chosen to match the PRA mean and provide coverage such that the PRA 90% interval covers 90% of the distribution. Modeling Approach This condition will be linked to an environmental exposure to combustion products, which will be labeled “smoke” in the environmental parameters. The condition-level parameters will be modeled as the crew-level probability of the condition given each environmental exposure. Environmental Exposure Incidence Evidence ISS PRA model – 9.04E-3 events per year with 90% CI (1.79E-3, 2.53E-2). Yearly IR: 0.01808 (90%CI: 0.00358, 0.0506. Antonsen report (1st IMM data request) – 3 smoke inhalation events during spaceflight up through 2006 but none were in ISS. 3 events over 27.36 person-years. This is reflective of a person-year rate but doesn’t adequately express the rate of the environmental exposure which should be per year. Using mission-related data from LSAH, calculated the total spaceflight calendar time through 2006 as 13.32464 years. Yearly IR: 0.2251 (95%CI: 0.05727, 0.6128). Modeling Approach This condition is modeled through an environmental exposure. Once the environmental exposure happens, the probability that each crew develops the condition is 100% (Fixed.IP=1). Decided to go with the ISS PRA model as most reflective. Found the distribution parameters such that the mean yearly rate was 0.01808 and SD adjusted until the 90% PRA confidence interval covers 90% of the resulting Gamma distribution. The identified distribution is Gamma(shape=1.832, rate=202.651) with mean 9E-3 and SD 6.68E-3.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

General Segment All Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Fixed Mean 0.00904017 SD 0.00667904

### Fixed Incidence

(Rate): (Prop.): 1

### Incidence Details

### Incidence Type

Environmental Segment All Env. Exposure Smoke Sex Any Crowns Any Contacts Any Pregnancy 6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 2

Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.00904017 SD 0.00667904

Gamma (Shape): 1.832 (Rate): 202.651 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ------------------- | ----------- | --------- |
| ISS PRA Model, 2015 | Spaceflight | 4 |
| Antonsen, 2017 | Spaceflight | 4 |
| UNOLES, 2021 | Analog | 3 |
| Ahrens, 2020 | Analog | 3 |
| Ikeda, 2019 | Analog | 3 |
| Gummin, 2020 | Terrestrial | 3 |
| Blindauer, 2003 | Terrestrial | 3 |
| Ahrens, 2020 | Terrestrial | 3 |
| Mattiuzzi, 2020 | Terrestrial | 2 |
| Hampson, 1998 | Terrestrial | 2 |
| Hampson, 2007 | Terrestrial | 2 |
| Hampson, 2016 | Terrestrial | 2 |
| Iqbal, 2012 | Terrestrial | 2 |
| Lee, 2006 | Terrestrial | 2 |
| Lavigne, 2015 | Terrestrial | 2 |
| Stearns, 2019 | Terrestrial | 2 |
| Simonsen, 2007 | Terrestrial | 2 |

For the ISS PRA model and Antonsen.2017, data is based on smoke inhalation exposures in prior US space flights. However, such missions had different craft from the ones most relevant to this review, and thus different fire/smoke risks. Nonetheless, they represent the best analogies for this analysis. For the terrestrial and analog data, incidence is primarily based on structural fires and vehicle fires, which may have some relevance to outcomes, but is likely not directly translatable to spacecraft used in the missions in question. It is difficult to extrapolate fire-injury data to smoke inhalation; however, smoke inhalation injury is the primary driver of non-burn wound injury requiring hospitaliztion, and inhalation of combustion products is the leading cause of death in most fires. With much of the data pertaining to carbon monoxide poisoning, it must be taken into careful consideration that some incidences of CO poisoning are intentional, skewing the incidence data. 6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

There are no disqualifying conditions specifically related to this condition - Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

There are no preventive measures related to this condition.

### BEST CASE SCENARIO DEFINITION

Inhalation of combustion products resulting in direct toxic damage to tissue or interferes with enzymatic processes, excluding cyanide, responding to supportive treatment.

### WORSE CASE SCENARIO DEFINITION

Inhalation of combustion products resulting in direct toxic damage to tissue or interferes with enzymatic processes, including cyanide, requiring additional treatment. (Note ARDS/Respiratory failure are covered by condition "Respiratory Failure.")

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

Toxic Inhalation Exposure - Carbon Monoxide poisoning Toxic Inhalation Exposure - Cyanide Poisoning Toxic Inhalation Exposure - Nitrogen Dioxide Toxic Inhalation Exposure - Nitrogen Tetroxide Toxic Inhalation Exposure - Sulfur Dioxide Toxic Inhalation Exposure - Hydrocarbons

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Ultimately, based on in-flight space data and anecdotal reports (see Barrett textbook and Antonsen, 2007), all smoke inhalation and combustion- related toxic exposures in space to date have been best case scenarios, with limited exposure minimal to no symptoms or sequelae. Exposure to certain propellents and combustion products, such as nitrogen tetroxide, may have more severe health effects, but incidence data is lacking on such agents apart from the Apollo-Soyuz incident, in which 3 astronauts reported symptoms following a nitrogen tetroxide (propellent) exposure.

Likewise, a Russion MIR mission with exposure to high CO levels produced symptoms in 3 cosmonauts, but the symptoms resolved without treatment, and thus do not represent a worse case scenario. Prior CLiFF notes placed the WC probability as 0-28%, based on the likelihood that a crew member would have to respond to a significant fire without protective equipment. Our defiinition of worse case instead implies exposure to smoke and combustion products causing significant pulmonary distress or metabolic disturbance despite treatment, thus representing a worse scenario than simply unprotected smoke exposure. Based on Blindhauer, 2003, most residential fire-related injuries are smoke inhalation, with only 5.9% resulting in hospitalization, of which 54.5% were due to carbon monoxide-related hypoxia. However, the mission in question will likely include a more confined space than the typical residence. Other terrestrial data from the NFPA (Ahrens, 2020) and (Lee, 2006) suggest a low incidence of mortality and injury from smoke inhalation and fires in the U.S., particularly vehicle fires, and as smoke inhalation (i.e. asphyxiation, carbon monoxide, cyanide posioning) is the primary cause of death in most fires, it is likely thta the low incidence of injury and/or death reflects low incidence of smoke inhalation itself. Unfortunately, more data on some inhalation incidence by itself is lacking, as most documentation of smoke inhalation is either classified as burn-injury related or carbon monoxide/cyanide poisoning . Please see Gummin, 2020 for CO and CN poisoning data in the US, which may provide more information into incidence and outcomes, including that only 6% of CO poisonings requiring treatment at a healthcare facility ended in a major outcome or death. In regards to other toxic products of combustion (SO2, NO2, NO5, hydrocarbons), these agents are released in lower concentrations than CO and CN in fire smoke, and although they contribute to the overall toxicity of smoke, they are unlikely to reach acutely toxic levels in the absence of CO and CN poisoning. Furthermore, incidence data on unintentional inhalational exposures of these agents is practically non-existent. Thus, much of the literature has focused on those two molecules as the fatal effectors of smoke inhalation. Using terrestrial data of CO poisonings (Gummins, 2020; Lavigne, 2015; Stearns, 2019) we can observe a low hospitalization and mortality rate even with relatively high incidence of ED visits, suggesting that most patients respond well to treatment. Most epidemiological data on CN poisoning, however, is found in autopsy reports due to the deadly nature and quick action of severe CN poisoning. As a result, Incidence data on acute inhalational CN poisoning is difficult to delineate from overall mortality due to smoke inhalation and/or CO toxicity being the dominant focus in epidemiological studies of smoke inhalation injury.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

ISS PRA Model, 2015 Spaceflight 4 Antonsen, 2017 Spaceflight 4 Ahrens, 2020 Analog 4 Gummin, 2020 Terrestrial 3 Blindauer, 2003 Terrestrial 3 Ahrens, 2020 Terrestrial 3 Mattiuzzi, 2020 Terrestrial 2 Iqbal, 2012 Terrestrial 2 6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 4

| Citation | Source | LOC Value |
| ------------- | ----------- | --------- |
| Lee, 2006 | Terrestrial | 2 |
| Stearns, 2019 | Terrestrial | 2 |

Based on anecdote and prior experience (Antonsen, 2007) , all spaceflight cases of smoke exposurers have been mild best case scenarios. When examining analog (i.e. vehicle fires, Ahrens, 2020) and terrestrial data, the death rates from smoke and fire injuries are low; likewise, CO poisoning rates in the US have low mortality relative to incidence in studies where both are provided. 6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 5

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Case 9E-3 and SD 94.1 - 100 100 1.2 44.8047 3 24 0 0 27 0 0 (TBC) 6.68E-3 Treated Worst 0 - 5.9 100 1.2 50 22.4 120 0 20 88.6 2.6 47 Case (TWC) Untreated Best N/A N/A N/A 1.2 69.8047 8.7 72 50 0 53.7 0 1.5 Case (UTBC) Untreated Worst N/A N/A N/A 1.2 100 36 168 100 33 100 14.9 100 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 6

### SCENARIO OVERVIEW COMMENTS

Toxic inhalation exposure - combustion products is intended to be a condition that occurs during or after a fire within the habitable volume of the spacecraft in which smoke is inhaled by the crew. The primary difficulty with this condition is related to the incidence. Source materials have been specifically selected to mitigate fire risk in any spacecraft. The extent to which this has been performed is directly correlated with the incidence of this condition. The best approximation of the probability of fire was made using the ISS PRA model, however this model is likely to be slightly different than observe on a smaller/less scientifically focused spacecraft. The medical impacts, recovery duration, RTDC, and LOCL values for this condition can be approximated fairly accurately using spaceflight, analog, and terrestrial data.

TREATED BEST CASE (TBC) SCENARIO COMMENTS For duration (3 - 24 hours), almost all cases of smoke inhalation and CO poisoning from mass exposures in which patients responded to treatment (i.e. normobaric oxygen) required <24 hours of treatment before complete reversal of symptoms, with the shortest duration mentioned as 3-6 hours in Wesley, 1995. Likewise, descriptive studies and systematic reviews of ED patients treated for smoke inhalation and/or CO poisoning requiring normobaric or hyperbaric oxygen therapy required <24 hours of treatment. For RTDC (0 - 27%), the values chosen were from mass exposure reports in which most or all of the patients had mild symptoms, most requiring no hospitalization (0%). Of the incidences with patients requiring hospitalization after treatment, Wesley, 1995 had the highest rate at 27% hospitalized. Descriptive studies included provided hospitalization (non- ICU) values within this range; although it most be noted that most of these studies did not include information on severity of cases treated. For LOCL (0 - 0/8%), a value of 0% was chosen to represent numerous mass exposure events without mortality representing complete response to therapy. Large-scale epidemiological studies identified overall mortality of 0.4% (Huang, 2017) and 0.8% (Nakajima, 2020) in CO poisonings treated in the ED without hospitalization; however, context and severity of cases is unknown.

TREATED WORST CASE SCENARIO (TWC) COMMENTS For duration (22.4 - 120 hours), this range was chosen based on a minimum duration of hyperbaric oxygen treatment for severe CO poisoning (the most common clinical component of smoke inhalation injury) estimated to be <22.4 hours in a systematic review by Liao, 2019. The upper range of 5 days (120 hours) for isolated smoke injury was chosen as an estimate based on median and mean durations of respiratory support and/or ICU level care; although these estimates are analgous to definitive care, they represent supportive care for what could be considered the worst case scenario, i.e. inhalational injury not responding to treatment. Although many references provided information on smoke inhalation injury with burn wounds (i.e. ICU level care), these references were included in this report but not chosen to represent this condition. For RTDC (20 - 88.6%), a lower limit of 20% was chosen based on Brat, 2013, a mass NO2 exposure from a combustion engine (ice-leveler) which caused pneumonitis requiring respiratory support in treated patients with severe exposure symptoms. The upper limit was based on Chong, 2018, which found 88.6% of patients admitted for smoke inhalation injury to require respiratory support and ICU-level care. It should be noted when considering hospitalization rates that smoke inhalation with concurrent burn wound injuries almost invariably requires intensive care. For LOCL (2.6 - 47%), 2.6% was chosen to represent severe CO poisoning requiring hyperbaric oxygen therapy (including cases not responsive to normobaric oxygen), as reported by Hampson, 2008. Of most extreme treated cases, the highest mortality (47%) was in Darling, 1996, a study of burn patients with inhalational injury treated in the ICU. Similar retrospective studies on patients treated for inhalation injury with or without burns diffrered greatly depending on the nature of the inhalation exposure (smoke +/- CO poisoning, presence of burn wounds, etc.).

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS

- Note: in prior spaceflight experiences according to Antonsen, 2017, all of the reported smoke inhalation and combustion product exposures in

spaceflight have been relatively mild and required no treatment, with resolution of symptoms within 24 hours, and as such represent the best case untreated scenarios. Regardless of response to treatment, severity of injury is dependent on extent and duration of exposure, which can vary greatly depended on the circumstances of the accident. An untreated best case scenario is thus one that resolves without treatment, or that is assessed to not require treatment. For duration (8.7 - 72 hours), 8.7 was chosen as the lower limit, being the mean time to compete recovery for untreated victims of a mass CO exposure event (Burney, 1982). However, in a best case scenario, short or limited smoke exposure may result in mild symptoms that resolve before 8.7 hours. The upper limit of 72 hours was selected from Kahan, 2007 based on a toxic inhalation mass exposure in which untreated and treated patients both developed non-severe pulmonary symptoms up to 72 hours after the incident. This value is in agreement with expert opinion of smoke inhalation injury (Nugent, 2007), in which delayed sequelae of exposure are known to occur hours to days after the initial injury, particularly in untreated individuals. Therefore, it is reasonable to conclude that a best case untreated exposure still requires up to 72 hours of observation to rule out development of serious sequelae. Nonetheless, our definition of best case precludes severe cases that would require treatment after the acute phase of injury. For RTDC (0 - 53.7%), a return to definitive care of 0% was chosen as a lower limit due to numerous case reports of mass exposure events and a case series (Nelson, 2006) (these cases were relevant to smoke inhalation, CO poisoning, NO2 exposures) that did not require treatment at a hospital. In theory, a non-severe best case scenario by definition may not require hospitalization even in the absence of standard treatment (i.e. oxygen therapy). An upper limit of 53.7% is based on Iqbal, 2012, which reported that rate of hospitalization in CO poisoning cases. Although this reference and similar findings (Hampson, 1998; Rose, 2018), as well as other case series, have hospitalization rates > 0%, information on the severity of symptoms is lacking for this incidence data, and thus may also represent severe cases that would not respond to treatment (i.e. the worst cases in an otherwise best case scenario). Furthermore, hospitalization rates in the literature must be carefully examined, as many patients with mild symptoms are discharged from the ED without treatment or admission, but are still included in hospitalization counts. For LOCL (0 - 1.5%), these values were chosen from data on non-severe, untreated mass exposure events without fatilities (0%) that included untreated patients, in which the treated patients tended recover quickly as well. Oda, 2019 was chosen as an upper limit of 1.5% as a large epidemiological report of all deaths following CO poisoning, untreated and treated, which would also include severe cases and worst-case scenarios. Unfortunately, large epidemiological data on untreated smoke exposures is lacking, and the references found in these searches almost exclusively referred to treated (in the ED, hospital, or ICU) patients or reported deaths without distinguishing bettween pre- 6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 7

and in-hosptial deaths. UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS

- Note: Data on untreated cases was severely lacking; most references only reported on treated and/or hospitalized patients. As such, much of the

data presented here represent estimates based on pre-hospital information and current medical knowledge on the natural progression of smoke inhalation injury. In many untreated worst case scenarios, death is expected imminently, as severe smoke inhalation is an acutely life threatening event. However, extent of exposure and context is rarely provided for such situations, making it difficult to assess severity of injury for the data available. For duration (36 - 168 hours), estimates have to be made using knowledge of the clinical course of smoke inhalation injury, in which peak airway edema and respiratory compromise can present up to 36 hours after exposure, and possibly longer depending on the composition of the smoke inhaled (Nugent, 2007). However, by this point, most acute effects of other inhaled toxins including CO will have subsided. According to Lee, 1988, clinical pulmonary sequelae of severe smoke inhalation injury was observed up to 7 days (168 hours), giving a rough estimate of the natural history of the illness. It is unlikely that a victim with severe smoke inhalation injury would survive this long without developing progressive respiratory distress (i.e. eventual death without treatment). It should be noted that hospitalized smoke inhalation patients, particularly burn patients, requiring ICU level and mechanical ventilation for much longer durations (weeks to months, implying continued pulmonary dysfunction, see references in TWC duration). However, concomitant burn injury, nosocomial pneumonia, and subglottic stenosis are just a few of the many complications that can prolong duration of illness in such patient populations, and may not be applicable to the natural history of untreated injury. For RTDC (33 - 100%), a lower limit of 33% was based on a mass exposure event to combustion products (chiefly NO2) without smoke exposure (Gupta, 1998); other mass exposure events with severe smoke exposure typically required higher hospitalization rates of those exhibiting symptoms or injury. 92% was found in studies as an upper limit of CO poisoning survivors requiring treatment (Simonsen, 2019), but included non-severe cases as well. Subjectively, it would seem that the vast majority of fatal incidents reported in the literature are either on-site deaths or in patients that received treatment, so the actual RTDC rate is likely in the higher range of this estimate for untreated survivors. Although pre-hospital data is limited for victims of severe smoke inhalation with or without burn injury, the high rates of intubation/mechanical ventilation and ICU standard-of-care for such patients suggest that nearly 100% of worst-case scenarios will require treatment and hospitalization. Such a case would represent a significant exposure with concurrent burn wounds as well. For LOCL (14.9 - 100%), the lowest limit of 14.9% is based on a commercial aircraft fire that caused significant smoke exposure in all passengers, with a relatively low number requiring treatment after landing and evacuation (Nelson, 2006). On-site (i.e. untreated and pre-hospital) death in smoke inhalation studies ranges from 28.1% (Nguyen, 2017) to 82% (Yeoh, 2004). As context is essential to understanding these conditions, case series such as Hampson, 2001, which studied patients with CO poisoning presenting in cardiac dysfunction with 100% mortality, provide clues as to the progression of severe disease manifesting before treatment can be initiated. Likewise, Irrazabal, 2008 found 18% mortality of patients en route to the hospital <2 hours after exposure, suggesting rapid mortality in untreated severe smoke inhalation cases. Given the relatively high on-site mortality rate of fires and the fact that smoke and combustion product inhalation is the primary cause of deaths in most fatal fires (espcially when cyanide toxicity is involved), it can be inferred that untreated worst cases (i.e. severe scenarios that would not respond to treatment if given) have a much higher mortality than can be estimated using pre-hospital data of survivors. As such, an upper limit of 100% represents a situation in which victims of smoke inhalation injury cannot be evacuated, or in which severe symptoms lead to respiratory insufficiency and eventual death without the possibility of receiving treatment.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

| Citation | Source | LOC Value |
| ---------------------- | ----------- | --------- |
| Amaza, 2020 | Terrestrial |  |
| Brandenburg, 2014 | Terrestrial |  |
| Burney, 1982 | Terrestrial |  |
| Cha, 2007 | Terrestrial |  |
| Chacko, 2012 | Terrestrial |  |
| Darling, 1996 | Terrestrial |  |
| Dingle, 2021 | Terrestrial |  |
| Endorf, 2007 | Terrestrial |  |
| Fitzpatrick, 1994 | Terrestrial |  |
| Geldner, 2013 | Terrestrial |  |
| Genovesi, 1977 | Terrestrial |  |
| Hamilton-Farrell, 1999 | Terrestrial |  |
| Hampson, 2012 | Terrestrial |  |
| Hantson, 1997 | Terrestrial |  |
| Heckerling, 1990 | Terrestrial |  |

3

| Irrazabal, 2008 | Terrestrial |  |
| --------------- | ----------- | --- |

6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 8

| Citation |  | Source | LOC Value |
| --------------- | --- | ----------- | --------- |
| Kahan, 2007 |  | Terrestrial |  |
| Ku, 2015 |  | Terrestrial |  |
| Lee, 1988 |  | Terrestrial |  |
| Liao, 2019 |  | Terrestrial |  |
| Nugent, 2007 |  | Terrestrial |  |
| Saeed, 2018 |  | Terrestrial |  |
| San Dogan, 2020 |  | Terrestrial |  |
| Santos, 2018 |  | Terrestrial |  |
| Tawfik, 2017 |  | Terrestrial |  |
| Tredget, 1990 |  | Terrestrial |  |
| Weaver, 2002 |  | Terrestrial |  |
| Wesley, 1995 |  | Terrestrial |  |

- TBC: 3-24 hours TWC: 22.4-120 hours UTBC: 8.7-72 hours UTWC: 36-268 hours As little pre-hospital data exists on duration of smoke inhalation,

most of the data presented here is in the context of treated or hospitalized patients, many of whom only received minimal treatment (i.e. normobaric oxygen). Other treatment capacities of the mission(s) in question influence the duration of therapy, and thus symptoms. Furthermore, duration of illness is dependent on extent of exposure; as such, mass exposure reports and case series are useful for estimating duration based on severty of exposure and symptoms. In untreated situations, established clinical knowledge on the sequelae of smoke inhalation and combustion product exposure is invaluable for estimating the natural history of illness in both mild and severe cases.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source |  | LOC Value |
| ---------------- | ----------- | --- | --------- |
| Amaza, 2020 | Terrestrial |  |  |
| Brat, 2013 | Terrestrial |  |  |
| Burney, 1982 | Terrestrial |  |  |
| CDC, 2011 | Terrestrial |  |  |
| Cha, 2007 | Terrestrial |  |  |
| Chacko, 2012 | Terrestrial |  |  |
| Chong, 2018 | Terrestrial |  |  |
| Clower, 2020 | Terrestrial |  |  |
| Genovesi, 1977 | Terrestrial |  |  |
| Graber, 2007 | Terrestrial |  |  |
| Gupta, 1998 | Terrestrial |  |  |
| Hampson, 1998 | Terrestrial |  |  |
| Heckerling, 1990 | Terrestrial |  |  |
| Hollingsed, 1993 | Terrestrial |  |  |
| Huang, 2017 | Terrestrial |  |  |

4

| Iqbal, 2012 | Terrestrial |  |  |
| --------------- | ------------------------ | --- | --- |
| Irrazabal, 2008 | Terrestrial |  |  |
| Kahan, 2007 | Terrestrial |  |  |
| Liao, 2019 | Terrestrial |  |  |
| Nelson, 2006 | Terrestrial, some analog |  |  |
| Rose, 2018 | Terrestrial |  |  |

6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 9

### Citation Source LOC Value

Roth, 2013 Terrestrial Sari Dogan, 2020 Terrestrial Santos, 2018 Terrestrial Simonsen, 2019 Terrestrial Tawfik, 2017 Terrestrial Tse, 1970 Terrestrial Wesley, 1995 Terrestrial

- TBC: 0-27% TWC: 20-88.6% UTBC: 0-53.7% UTWC: 33-100% Hospitalization rates, particularly from mass exposure reports, were considered to

generate the estimates for return to definitive care (hospitalization). For worst case scenarios (i.e. not responding to pre-hospital or ED/hospital treatment, such as normobaric oxygen), ICU admission and mechanical ventilation can be used as surrogates of smoke inhalation or CO poisoning requiring respiratory support and/or other intensive therapies. It must be noted that smoke inhalation injury with concomitant burn wounds almost always requires intensive care, even after initial treatment.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Baud, 1991 Terrestrial Brandenburg, 2014 Terrestrial Burney, 1982 Terrestrial Cha, 2007 Terrestrial Chacko, 2012 Terrestrial 4 Darling, 1996 Terrestrial El-Helbawy, 2011 Terrestrial Endorf, 2007 Terrestrial Genovesi, 1977 Terrestrial Gummin, 2020 Terrestrial

- TBC: 0-0.8% TWC: 2.6-47% UTBC: 0-1.5% UTWC: 14.9-100% Loss of crew life can be well estimated from both large scale epidemiological studies

of smoke inhalation and CO poisoning, including both pre-treated and treated data, as well as retrospective descriptive studies of hospitalized patients. Such evidene is further supported by numerous mass exposure events of varying severity and context, most involving enclosed environments. Unfortunately, the range of mortality for smoke and combustion product inhalation is highly dependent on many factorsr inclduing the duration of exposure, type of combustibles, environmental airflow, etc. It is therefore difficult to precisely identify the probability of crew loss across a whole gradient of possible situations, as reflected by the large ranges in the estimates provided. However, as smoke inhalation can rapidly progress to respiratory compromise even with treatment, the higher ranges of these estimates may reflect actual risks to crew life, particularly in worst case scenarios. CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

- Capabilities and Resourcing Scope Overview Worst Case Definition: Inhalation of combustion products resulting in direct toxic damage to tissue or

interferes with enzymatic processes, including cyanide, requiring additional treatment. (Note ARDS/Respiratory failure are covered by condition "Respiratory Failure.") Best Case Definition: Inhalation of combustion products resulting in direct toxic damage to tissue or interferes with enzymatic processes, excluding cyanide, responding to supportive treatment. Inhalation exposure associated medical response is to maintenance airway primarily and to provide bronchodilator therapy with antidotes. This condition very likely could represent a medical emergency. Diagnostic Scope and Resourcing In the best-case scenario, diagnosis is based on history and physical examination. In the worst-case scenario, diagnosis is based on history and physical examination. Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 1.2 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient (Cardiopulmonary) 3 - Lung ultrasound 4 - ABG with lactate CP1 WC (Treated or Untreated): 1.2 hours This is the longest reasonable time to complete this task for an experienced clinician adjusted for being in the spaceflight environment to do the following: 1 - Take a proper history of the patient 2 - Perform a physical on the patient (Cardiopulmonary) 3 6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 10

- Lung ultrasound 4 - ABG with lactate The highest scope of practice code used in this CRT which includes interpretation of diagnosis, performing

diagnostic tests and performing treatment would be a four: this is a generalist (level 5). Treatment Scope and Resourcing In the best-case scenario, treatment is airway management focused, including antidotes and monitoring (capnography) in case an escalation of conditions is necessary. The worst case scenario is the same. 1 - Did not include positive pressure or invasive ventilation as this will be covered in the Respiratory Failure (ICL -

080) condition. 2 - Capnography is likely to lead to Respiratory Failure, so its use will help determine whether next condition is occurring. 3 -

Antidotes are limited to cyanide, CO, Communications and Support Needs In the best-case scenario, diagnosis and course of treatment is uncomplicated and likely within the scope of care of onboard crew members. In the worst-case condition, ground communications will be helpful given the complicated nature of the condition and the scope of care onboard. REFERENCES

### IMM CLIFF RECONCILATION COMMENTS

The overall definition of the conditions between IMPACT and IMM are nearly the same. These are conditions dealing with the medical impacts of inhalation of smoke related to fire. The distinction resides in the delineation between the best and worst case. For IMM, the separation between best case and worst case is crewmember consciousness, whereas for IMPACT the focus is on tissue damage.

### LIMITATIONS SUMMARY

The primary limitation of this condition resides in the ability to accurately predict the incidence of this condition. We have used the most reasonable model to predict the likely incidence of fire occurring on a spacecraft so chronologically and philosophically near to our future design. 6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 11

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 |  | 89 | 854 |  | 145 |  | 13 |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  | 89 | 854 |  | 145 |  | 13 |  |  |  |
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

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3372 | 3763 | 0.896094 | 89.6094 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3372 | 3763 | 0.896094 | 89.6094 |
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

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

|  | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 12

Total Human

|  |  | Translation & |  | Total Tasks |  |
| --- | --- | ------------- | --- | ----------- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) |  | Extremity Standing (g) | Equipment Ops | Category |  |
| ----- | --- | ---------------------- | ------------- | -------------------- | --- |
|  |  | (microgravity) |  | Condition Tasks Full |  |

Mission Treated Best

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

|  |  |  |  | 0 3763 | 0.5 50 |
| --- | --- | --- | --- | ------ | ------ |

Case (UTBC) Treated Worst

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 13

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

6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 14

## REFERENCES

Reference Ahrens M, E. B. (2020). NFPA's "Fire Loss in the United States During 2019". National Fire Protection Association Amaza, I. P., & Kreidy, M. P. (2020). Silo-Filler’s Disease: One Health System’s Experience and an Update of the Literature. Journal of Agromedicine, 25(1), 8-13. doi:10.1080/1059924X.2019.1592045 Antonsen, E. (2017). Risk of Adverse Health Outcomes and Decrements in Performance Due to In-Flight Medical Conditions. NASA Johnson

- Space Center: National Aeronautics and Space Administration

Baud, F. J., Barriot, P., Toffis, V., Riou, B., Vicaut, E., Lecarpentier, Y., . . . Bismuth, C. (1991). Elevated blood cyanide concentrations in victims of smoke inhalation. N Engl J Med, 325(25), 1761-1766. doi:10.1056/nejm199112193252502 Blindauer K, G. J., Ballesteros M. (2003). Nonfatal residential fire-related injuries treated in emergency departments--United States, 2001. MMWR Morb Mortal Wkly Rep, 52(38), 906-908. Retrieved from https://www.ncbi.nlm.nih.gov/pubmed/14508438 Brandenburg, R., Brinkman, S., de Keizer, N. F., Meulenbelt, J., & de Lange, D. W. (2014). In-hospital mortality and long-term survival of patients with acute intoxication admitted to the ICU. Crit Care Med, 42(6), 1471-1479. doi:10.1097/CCM.0000000000000245 Brat, K., Merta, Z., Plutinsky, M., Skrickova, J., & Stanek, M. (2013). Ice hockey lung - a case of mass nitrogen dioxide poisoning in the Czech Republic. Can Respir J, 20(6), e100-103. doi:10.1155/2013/237412 Burney, R. E., Wu, S. C., & Nemiroff, M. J. (1982). Mass carbon monoxide poisoning: clinical effects and results of treatment in 184 victims. Ann Emerg Med, 11(8), 394-399. doi:10.1016/s0196-0644(82)80033-4 CDC (2011). Carbon monoxide exposures --- United States, 2000--2009. MMWR: Morbidity and mortality weekly report, 60(30), 1014-1017.

Retrieved from http://dx.doi.org/ Cha, S. I., Kim, C. H., Lee, J. H., Park, J. Y., Jung, T. H., Choi, W. I., . . . Lee, B. K. (2007). Isolated smoke inhalation injuries: acute respiratory dysfunction, clinical outcomes, and short-term evolution of pulmonary functions with the effects of steroids. Burns, 33(2), 200-208. doi:10.1016/j.burns.2006.07.017 Chacko, J., Jahan, N., Brar, G., & Moorthy, R. (2012). Isolated inhalational injury: Clinical course and outcomes in a multidisciplinary intensive care unit. Indian J Crit Care Med, 16(2), 93-99. doi:10.4103/0972-5229.99120 Chong, S. J., Kok, Y. O., Tay, R. X. Y., Ramesh, D. S., Tan, K. C., & Tan, B. K. (2018). Quantifying the impact of inhalational burns: a prospective study. Burns Trauma, 6, 26. doi:10.1186/s41038-018-0126-z Clower, J. H., Hampson, N. B., Iqbal, S., & Yip, F. Y. (2012). Recipients of hyperbaric oxygen treatment for carbon monoxide poisoning and exposure circumstances. Am J Emerg Med, 30(6), 846-851. doi:10.1016/j.ajem.2011.05.028 Darling, G. E., Keresteci, M. A., Ibanez, D., Pugash, R. A., Peters, W. J., & Neligan, P. C. (1996). Pulmonary complications in inhalation injuries with associated cutaneous burn. J Trauma, 40(1), 83-89. doi:10.1097/00005373-199601000-00016 Dingle, L. A., Wain, R. A. J., Bishop, S., Soueid, A., & Sheikh, Z. (2021). Intubation in burns patients: a 5-year review of the Manchester regional burns centre experience. Burns, 47(3), 576-586. doi:https://doi.org/10.1016/j.burns.2020.07.019 El-Helbawy, R. H., & Ghareeb, F. M. (2011). Inhalation injury as a prognostic factor for mortality in burn patients. Ann Burns Fire Disasters, 24(2), 82-88. Retrieved from https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3230152/pdf/Ann-Burns-and-Fire-Disasters-24-82.pdf Endorf, F. W., & Gamelli, R. L. (2007). Inhalation injury, pulmonary perturbations, and fluid resuscitation. J Burn Care Res, 28(1), 80-83. doi:10.1097/BCR.0B013E31802C889F Fitzpatrick JC, Cioffi WG Jr, Cheu HW, Pruitt BA Jr. Predicting ventilation failure in children with inhalation injury. J Pediatr Surg. 1994 Aug;29(8):1122-6. doi: 10.1016/0022-3468(94)90292-5. PMID: 7965518.

Geldner, G., Koch, E. M., Gottwald-Hostalek, U., Baud, F., Burillo, G., Fauville, J. P., . . . Zilker, T. (2013). Report on a study of fires with smoke gas development. Der Anaesthesist, 62(8), 609-616. doi:10.1007/s00101-013-2209-3 Genovesi, M. G., Tashkin, D. P., Chopra, S., Morgan, M., & McElroy, C. (1977). Transient hypoxemia in firemen following inhalation of smoke.

Chest, 71(4), 441-444. doi:10.1378/chest.71.4.441 Graber, J. M., & Smith, A. E. (2007). Results from a state-based surveillance system for carbon monoxide poisoning. Public Health Rep, 122(2), 145-154. doi:10.1177/003335490712200203 Gummin, D. D., Mowry, J. B., Beuhler, M. C., Spyker, D. A., Brooks, D. E., Dibert, K. W., . . . Ryan, M. L. (2020). 2019 Annual Report of the American Association of Poison Control Centers' National Poison Data System (NPDS): 37th Annual Report. Clin Toxicol (Phila), 58(12), 1360-

1541. doi:10.1080/15563650.2020.1834219

Gupta, D., Aggarwal, A. N., & Jain, S. (1998). Acute pulmonary effects of toxic nitrogen dioxide fume inhalation. Occupational Health and Industrial Medicine, 5(39), 225. Hamilton-Farrell, M. R. (1999). British Hyperbaric Association carbon monoxide database, 1993-96. J Accid Emerg Med, 16(2), 98-103. doi:10.1136/emj.16.2.98 Hampson, N. B. (1998). Emergency department visits for carbon monoxide poisoning in the Pacific Northwest. J Emerg Med, 16(5), 695-698. doi:10.1016/s0736-4679(98)00080-8 6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 15

Reference Hampson, N. B., & Weaver, L. K. (2007). Carbon monoxide poisoning: a new incidence for an old disease. Undersea Hyperb Med, 34(3), 163-

168. Retrieved from https://www.ncbi.nlm.nih.gov/pubmed/17672172

Hampson, N. B., Dunn, S. L., Yip, F. Y., Clower, J. H., & Weaver, L. K. (2012). The UHMS/CDC carbon monoxide poisoning surveillance program: three-year data. Undersea Hyperb Med, 39(2), 667-685. Retrieved from https://www.ncbi.nlm.nih.gov/pubmed/22530450 Hampson, N. B. (2016). U.S. Mortality Due to Carbon Monoxide Poisoning, 1999-2014. Accidental and Intentional Deaths. Ann Am Thorac Soc, 13(10), 1768-1774. doi:10.1513/AnnalsATS.201604-318OC Hantson, P., Butera, R., Clemessy, J.-L., Michel, A., & Baud, F. J. (1997). Early Complications and Value of Initial Clinical and Paraclinical Observations in Victims of Smoke Inhalation Without Burns. Chest, 111(3), 671-675. doi:https://doi.org/10.1378/chest.111.3.671 Heckerling, P. S., Leikin, J. B., Maturen, A., Terzian, C. G., & Segarra, D. P. (1990). Screening hospital admissions from the emergency department for occult carbon monoxide poisoning. Am J Emerg Med, 8(4), 301-304. doi:10.1016/0735-6757(90)90079-f Hollingsed, T. C., Saffle, J. R., Barton, R. G., Craft, W. B., & Morris, S. E. (1993). Etiology and consequences of respiratory failure in thermally injured patients. Am J Surg, 166(6), 592-596; discussion 596-597. doi:10.1016/s0002-9610(05)80662-2 Huang, C. C., Ho, C. H., Chen, Y. C., Lin, H. J., Hsu, C. C., Wang, J. J., . . . Guo, H. R. (2017). Hyperbaric Oxygen Therapy Is Associated With Lower Short- and Long-Term Mortality in Patients With Carbon Monoxide Poisoning. Chest, 152(5), 943-953. doi:10.1016/j.chest.2017.03.049 Ikeda, A., Ohno, G., Otani, S., Watanabe, K., & Imura, S. (2019). Disease and injury statistics of Japanese Antarctic research expeditions during the wintering period: evaluation of 6837 cases in the 1st-56th parties - Antarctic health report in 1956-2016. Int J Circumpolar Health, 78(1),

1611327. doi:10.1080/22423982.2019.1611327

Iqbal, S., Law, H. Z., Clower, J. H., Yip, F. Y., & Elixhauser, A. (2012). Hospital burden of unintentional carbon monoxide poisoning in the United States, 2007. Am J Emerg Med, 30(5), 657-664. doi:10.1016/j.ajem.2011.03.003 Irrazabal, C. L., Capdevila, A. A., Revich, L., Del Bosco, C. G., Luna, C. M., Vujacich, P., . . . Jorge, M. A. (2008). Early and late complications among 15 victims exposed to indoor fire and smoke inhalation. Burns, 34(4), 533-538. doi:10.1016/j.burns.2007.06.025 ISS PRA Model, V.3.2.0, (2015). Fire and Ammonia Model Contributions to the Integrated Medical Model. NASA Kahan, E. S., Martin, U. J., Spungen, S., Ciccolella, D., & Criner, G. J. (2007). Chronic cough and dyspnea in ice hockey players after an acute exposure to combustion products of a faulty ice resurfacer. Lung, 185(1), 47-54. doi:10.1007/s00408-006-0094-0 Ku, C. H., Hung, H. M., Leong, W. C., Chen, H. H., Lin, J. L., Huang, W. H., . . . Yen, T. H. (2015). Outcome of patients with carbon monoxide poisoning at a far-east poison center. PLoS ONE, 10(3), e0118995. doi:10.1371/journal.pone.0118995 Lavigne, E., Weichenthal, S., Wong, J., Smith-Doiron, M., Dugandzic, R., & Kosatsky, T. (2015). Mortality and hospital admission rates for unintentional nonfire-related carbon monoxide poisoning across Canada: a trend analysis. CMAJ Open, 3(2), E223-230. doi:10.9778/cmajo.20140122 Lee, M. J., & O'Connell, D. J. (1988). The plain chest radiograph after acute smoke inhalation. Clinical Radiology, 39(1), 33-37. doi:https://doi.org/10.1016/S0009-9260(88)80334-9 Lee, A. S., & Mellins, R. B. (2006). Lung injury from smoke inhalation. Paediatric Respiratory Reviews, 7(2), 123-128. doi:https://doi.org/10.1016/j.prrv.2006.03.003 Liao, W. C., Cheng, W. C., Wu, B. R., Chen, W. C., Chen, C. Y., Chen, C. H., . . . Hsia, T. C. (2019). Outcome and prognostic factors of patients treated in the intensive care unit for carbon monoxide poisoning. J Formos Med Assoc, 118(4), 821-827. doi:10.1016/j.jfma.2018.09.005 Mattiuzzi, C., & Lippi, G. (2020). Worldwide epidemiology of carbon monoxide poisoning. Human & Experimental Toxicology, 39(4), 387-392. doi:10.1177/0960327119891214 Nelson, G. L., & Hinschler, M. (2006). Effects of carbon monoxide in man: Exposure fatality studies. Carbon Monoxide and Human Lethality: Fire and Non-Fire Studies, 3-60. Nugent, N., & Herndon, D. N. (2007). Diagnosis and treatment of inhalation injury. Total Burn Care, 3, 262-272.

Rose, J. J., Nouraie, M., Gauthier, M. C., Pizon, A. F., Saul, M. I., Donahoe, M. P., & Gladwin, M. T. (2018). Clinical Outcomes and Mortality Impact of Hyperbaric Oxygen Therapy in Patients With Carbon Monoxide Poisoning. Crit Care Med, 46(7), e649-e655. doi:10.1097/ccm.0000000000003135 Roth, D., Krammel, M., Schreiber, W., Herkner, H., Havel, C., & Laggner, A. N. (2013). Unrecognized carbon monoxide poisoning leads to a multiple-casualty incident. J Emerg Med, 45(4), 559-561. doi:10.1016/j.jemermed.2013.05.003 Saeed, O., Boyer, N. L., Pamplin, J. C., Driscoll, I. R., DellaVolpe, J., Cannon, J., & Cancio, L. C. (2018). Inhalation Injury and Toxic Industrial Chemical Exposure. Mil Med, 183(suppl_2), 130-132. doi:10.1093/milmed/usy073 Sari Dogan, F., Guneysel, O., Gokdag, E., Gunes, M., & Sumen, S. G. (2020). Demographic characteristics and delayed neurological sequelae risk factors in carbon monoxide poisoning. Am J Emerg Med, 38(12), 2552-2556. doi:10.1016/j.ajem.2019.12.037 Santos, L. R., Alves-Correia, M., Camara, M., Lelis, M., Caldeira, C., Brazao, M. L., & Nobrega, J. J. (2018). Multiple Victims of Carbon Monoxide

- Poisoning in the Aftermath of a Wildfire: A Case Series. Acta Med Port, 31(3), 146-151. doi:10.20344/amp.98

Simonsen, C., Thorsteinsson, K., Mortensen, R. N., Torp-Pedersen, C., Kjærgaard, B., & Andreasen, J. J. (2019). Carbon monoxide poisoning in Denmark with focus on mortality and factors contributing to mortality. PLoS ONE, 14(1), e0210767. doi:10.1371/journal.pone.0210767 Stearns, D., & Sircar, K. (2019). National unintentional carbon monoxide poisoning estimates using hospitalization and emergency department data. Am J Emerg Med, 37(3), 421-426. doi:10.1016/j.ajem.2018.06.002 6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 16

Reference Tawfik, H., & Hafiz, R. (2017). Predictors of Clinical Decision Rule in Hydrocarbon Intoxicated Cases Admitted to Poison Control Center Ain Shams University Hospitals during 2015-2016. Ain Shams Journal of Forensic Medicine and Clinical Toxicology, 28(1), 149-159. doi:10.21608/ajfm.2017.18313 Tredget, E. E., Shankowsky, H. A., Taerum, T. V., Moysa, G. L., & Alton, J. D. (1990). The role of inhalation injury in burn trauma. A Canadian experience. Ann Surg, 212(6), 720-727. doi:10.1097/00000658-199012000-00011 Tse, R. L., & Bockman, A. A. (1970). Nitrogen Dioxide Toxicity Report of Four Cases in Firemen. JAMA, 212(8), 1341-1344. doi:10.1001/jama.1970.03170210047007 UNOLES. (2021). Fleet Data Safety Report.

Weaver, L. K., Hopkins, R. O., Chan, K. J., Churchill, S., Elliott, C. G., Clemmer, T. P., . . . Morris, A. H. (2002). Hyperbaric Oxygen for Acute Carbon Monoxide Poisoning. New England Journal of Medicine, 347(14), 1057-1067. doi:10.1056/NEJMoa013121 Wesley Ely, E., Moorehead, B., & Haponik, E. F. (1995). Warehouse workers' headache: Emergency evaluation and management of 30 patients with carbon monoxide poisoning. The American Journal of Medicine, 98(2), 145-155. doi:10.1016/s0002-9343(99)80398-2

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

6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 17

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

6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 18

6/15/2023 2:15:28 PM ICL111_Toxic Inhalation Exposure - Combustion Products Cliff page: 19

---

## Source metadata

```yaml
source_filename: "toxic-inhalation-exposure-combustion-products-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Respiratory System Injury/CliFF 119"
source_url: "https://drive.google.com/file/d/1KRc3EdRj6J8LfV2T8rcra9FtkMASQTxw/view"
source_drive_id: "1KRc3EdRj6J8LfV2T8rcra9FtkMASQTxw"
source_sha256: e0cb61c4c9a6298be0d1d32baaa8942a22a540ee456bd426263bee3001284cb5
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 19
ocr_performed: false
```
