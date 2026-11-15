# EVA Related Dehydration CLiFF 2023

[View original PDF](https://drive.google.com/file/d/148NxCqJVhKO3fh0Ao_j4AULeTCAuCNOe/view) · **13 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Worst Case](#worst-case)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

### ICL40_Eva Related Dehydration

Dehydration is the result of excessive fluid loss (from sweat or GI losses) or inadequate intake and has been shown to reduce athletic performance and cognitive tasks which can be detrimental to crew function and safety. It can be somewhat difficult to define clinically as the term has been used colloquially to indicate anything from mild thirst to heat illness, but most commonly dehydration occurs after a 2% body weight loss of water. In the spaceflight environment, there are several factors that contribute to a relative hypovolemia within the first few days of a mission. The cephalad fluid shifts in microgravity result in diuresis and reduced plasma volume, oral intake is typically much lower than pre-launch, and many antiemetic or motion sickness medications have dehydration as a side effect. In combination this can leave a crew member 2-3% lower in total body water than their preflight measurements. A crew members volume status plateaus during flight and requires over-hydration prior to reentry to reduce orthostatic symptoms on return to earth's gravity. This change in volume status can be of particular concern for a crew member on EVA as they are required to perform very sensitive tasks for up to 8 hours at a time. This is further exacerbated by the maximum absorbency garment (MAG) which is an adult diaper that is used to catch urine and stool waste on EVA. Crew members have been known to reduce their oral intake prior to EVA in order to reduce the urine or stool output into the MAG for comfort. Despite these factors, incidence of dehydration in flight is expected to be rare due to operational and engineering risk mitigation. Prior to EVA, a crew member undergoes a private medical conference (PMC) which includes a general assessment of nutritional intake and hydration status. If a crew member or flight surgeon believes the astronaut is inadequately hydrated an EVA may be scrubbed or delayed. During EVA itself, current xEMU designs include 32oz of water for a 6 hour EVA and 64oz of water for an 8 hour EVA. The disposable in suit drink bag (DIDB) engineered to avoid leaking as in microgravity bag leak can lead to drowning and operationally any amount of leak is likely to leak to scrubbing EVA. It is nonetheless possible that a crew member becomes dehydrated to the point of impacting mission goals particularly during lunar missions where EVA frequency is expected to be much higher than that seen on the ISS.

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Clinically significant dehydration in spaceflight has not been clearly documented. Blood and plasma volumes fall due to fluid shifts and changes in oral intake however crew members are able to drink as needed. Risk of dehydration is estimated by the hazard analysis group for Dehydation on a Lunar Mission EVA to be between 1/100,000 to 1/10,000 risk per mission. The derivation of this risk assessment appears to be primarily from expert opinion. No other spaceflight literature exists. This group also provided the risk of dehydration for the lifetime of an Artemis type program to be between 1/5000 and 1/500. The per mission risk used used and combined with an assumed rate of 250 total person EVAs per mission as dictated by IMPACT parameters.

### ANALOG LITERATURE

There is substantial military literature on dehydration and heat illness however they primarily focus on recruits and servicemembers undergoing basic or advanced training in warm climates. None of the examined literature separated heat illness and dehydration from one another and thus were less applicable to this scenario. Also, a crew member on EVA will have temperature controls and available water for consumption as well as numerous operational steps to prevent dehydration which further lessens the utility of military literature on determining incidence in spaceflight.

After review analog literature was excluded from final incidence calculations

### TERRESTRIAL LITERATURE

Terrestrial literature is primarily centered around older adults admitted to the hospital for other pathology that is then complicated by hypohydration status or around athletes performing specific high intensity activities. The definition of dehydration varies widely between studies and there is no gold standard to what defines dehydration making incidence calculations difficult and inaccurate.

### OVERALL INCIDENCE SUMMARY

8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 1

## INCIDENCE

Per EVA mean 2.19E-7 and SD 8.89E-8.

### INCIDENCE SUMMARY

The incidence distribution for the incidence proportion describing the probability over an entire mission is Beta(shape1=5.975, shape2=108629) with mean 5.5E-5 and SD 2.25E-5. This distribution matches the midpoint of the PRA risk assessment category while providing coverage for the entire range – describing the mission risk. To translate these mission-level probabilities into per EVA probabilities, we assume 251 EVAs over the mission – the HSRB assumption for Lunar Long missions. The incidence proportion distribution for the probability per EVA is Beta(shape1=5.975, shape2=27227397) with mean 2.19E-7 and SD 8.89E-8. Modeling Approach Using the Hazard Report, the risk of dehydration reported by the PRA team is classified as “low” which is defined as falling between 1/10,000 and 1/100,000 per mission. Since we don’t have a defined number of EVAs per mission, we decided to use the HSRB defined EVAs for a Lunar Long mission – 251. Mission-level probability To model this range (over the DRM), we choose the midpoint (5.5E-5) as the expected value of the distribution, and 1/4th the width of the limits (2.25E-5) as the SD of the distribution. Using this will lead to 95% confidence limits that cover the range of the interval. This translates to a Beta(shape1=5.975, shape2=108629) distribution to reflect the probability of at least one event over 251 EVAs (p_mission).

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

EVA Segment

### EVA All

Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Binomial Incidence Dist. Beta Mean 2.19448E-07 SD 8.97765E-08 Beta (Alpha): 5.975 (Beta): 2.72274E+07 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Hazard Analysis Spaceflight 3 Wei-Fong, K et al. 2015 Terrestrial 1 Krabak, BJ 2016 Terrestrial 2 The NASA PRA Hazard Analysis for dehydration is an engineering risk assessment document from the PRA group that assesses the risk of medical conditions in order to mitigate them with engineering design. This document provides a risk of dehydration range of 1/100,000 8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 2

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

No preflight specific preventative measures exist. Crew member's nutritional status is evaluated but does not specifically look at hydration or fluid intake. With regards to EVA, crew members spend a substantial time in the NBL training and are well accustomed to limited fluid intake and MAG use prior to launch which should prepare them operationally to manage their intake during their mission's EVAs.

### BEST CASE SCENARIO DEFINITION

Dehydration from EVA that responds to oral rehydration.

### WORSE CASE SCENARIO DEFINITION

Dehydration from EVA that requires intravenous volume repletion, or interferes with future EVAs.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

None

### BEST CASE/WORST CASE PROBABILITY COMMENTS

There is substantial evidence that oral rehydration is equivalent if not better than IV rehydration in the dehydrated patient. The vast majority of this literature is derived from pediatric RCTs which show failure rates from 0.5 to 7% when attempting oral rehydration. A Cochrane review of gastroenteritis showed a failure rate of 1/25 (4%) when attempting ORT and thus this value was used. Adult literature primarily involves the elderly with multiple comorbidities and is confounded by the elderly adults inability to keep up with volume needs. The astronaut population was deemed to be more similar to the healthy child than the elderly adult and thus this literature was used preferentially.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Casa, DJ et al. 2008 Terrestrial 2 Hartling, L et al. 2006 Terrestrial 3 Spandorfer, PR et al. 2005 Terrestrial 2 Several terrestrial studies in pediatrics aim to compare the rehydration of oral fluids versus IV fluids in the dehydrated patient. Most studies include pediatric patients with acute GI volume loss which is not entirely consistent with this condition which consists of reduced oral intake and/or inadequate water supply as the primary drivers of hypovolemia. Regardless these RCT include high quality data that set the standard of care for rehydration in children and young adults and reflected in society guidelines for exertional dehydration. Hartling, L et al. 2006 received a score of 3 as it is a Cochrane meta-analysis of the literature compared to single RCTs. The remainder of studies received a 2. 8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 3

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Per EVA mean 96 - 96 100 0.6829 22.2296 2 24 0 0 0 0 0 Case (TBC) 2.19E-7 and SD 8.89E-8. Treated Worst 4 - 4 100 0.6829 50 24 72 0 0 0 0 0 Case (TWC) Untreated Best N/A N/A N/A 0.6829 44.4592 24 72 44.4592 0 0 0 0 Case (UTBC) Untreated N/A N/A N/A 0.6829 100 72 168 100 0 0 0 0

## Worst Case

(UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 4

### SCENARIO OVERVIEW COMMENTS

Management of dehydration is primarily with oral intake of fluids. There has been a big push in the last few decades to stop hydrating on a schedule and hydrating with only free water due to the increase in the rate of exercise induced hyponatremia and associated complications including death. Instead there has been a change to 'ad libitum' hydration or letting people exercising hydrate as dictated by their thirst. The term dehydration has been generalized by the public and sports drink companies to include any amount of thirst and has less clinical utility than terms like hypovolemia, hypohydration, or free water loss. In the dehydrated crew member the primary treatment will be water and electrolyte drink intake.

Oral rehydration in children has been shown to be as effective as IV rehydration in the vast majority of patients. Intentional increases in oral intake would be considered "treatment" of this condition as it is outside normal intake and may be necessary for a crew member scheduled for multiple EVAs in a day or in a row. However, a crew member is assumed to eat and drink as needed during flight and normal PO intake was not assumed to be treatment. Thus the treated and untreated conditions will be very similar in outcomes but vary in duration. The RTDC surrogate in this condition was defined as renal failure. This term is sometimes also used colloquially however we will use the RIFLE criteria as defined by Ronco, C et al. 2001 as it seems to be the most universally accepted criteria. The RIFLE criteria defines renal failure as an increase in creatine 3 fold, a reduction in GFR by 75% or a creatinine greater than 4. As discussed in the scenario comments, the likelihood of true renal failure from dehydration alone given the operational steps of PMC prior to each EVA and scheduled prehydration as well as the DIDB that carries 32 to 64oz of water is effectively

0. LOCL is considered to be 0 as well based on these same factors.

TREATED BEST CASE (TBC) SCENARIO COMMENTS The best case scenario is defined as dehydration from EVA that responds to oral rehydration. The estimated duration of illness was based on Spandorfer, PR et al. 2005 which showed that children with dehydration from GI losses had a 90% improvement in hydration status at 2 hours of treatment. This cohort was composed of young children and thus likely more fluids sensitive than a crew member but clinically consistent with the time needed to regain fluid losses in a crew member intentionally replacing %BW loss. The maximum duration was based on Wei-Fong, K et al. 2015 which looked at ultramarathon runners. The vast majority of electrolyte derangements and AKI had return to near baseline at a 24h recheck of blood chemistry. This range of duration for the mild-moderately dehydrated adult is consistent with clinical experience and the Merck Manual.

The RTDC surrogate was renal failure as defined by the RIFLE criteria however no crew member with BC scenario would meet these criteria after an EVA due to operational flight rules and in suit hydration availability. LOCL in mild-moderate dehydration is assumed to be 0.

TREATED WORST CASE SCENARIO (TWC) COMMENTS The worst case scenario is defined as dehydration from EVA that requires intravenous volume repletion, or interferes with future EVAs. The duration of dehydration when hydrated with IVF and oral rehydration is expected to be between 24-72 hours. This range is based on Hartling, L et al. 2006, a systematic Cochrane review which showed children with severe hydration requiring IVF had a hospital LOS from 1.5-5d when excluding one outlier study. This is among children with ongoing fluid losses who cannot keep up with oral rehydration which is more severe dehydration than defined by this condition. Wei-Fong, K et al. 2015 showed that 24h after an ultramarathon most plasma and urine electrolytes return to normal. CK remained elevated for several days but did not induce kidney injury. Based on these two studies and clinical experience, a range of 24-72 hours was chosen for duration of illness. The RTDC surrogate was renal failure and based on Wei-Fong, K et al. 2015 this was expected to be 0 as no members of their ultramarathon cohort met RIFLE criteria for renal failure. An ultramarathon is expected to be more taxing and dehydrating than a single EVA. LOCL was also assumed to be 0.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS The BC scenario is defined as dehydration from EVA that responds to oral rehydration. The duration of illness in the untreated BC scenario was assumed to be 24-72 hours in length. Treatment in this condition consists of intentional oral rehydration outside of normal intake. However, in the untreated condition a crew member is assumed to be eating and drinking based on normal physiologic hunger and thirst and is expected to have some slight increased intake over baseline. In this sense a crew member that is 'untreated' does have improvement in the medical condition. This is different than many other conditions considered in the evidence library. Thus this duration is based on expert opinion and generally accepted ranges of time to euvolemia per the Merck Manual. The RTDC surrogate is renal failure per the RIFLE criteria and is assumed to be 0 based on BC scenario definition, even in the absence of specific goal directed rehydration. LOCL is assumed to be 0 in this condition as well.

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS The worst cases scenario is defined as dehydration from EVA that requires intravenous volume repletion, or interferes with future EVAs. The duration of illness is expected to be between 3-7 days. This range is based on Wei-Fong, K et al. 2015, Hartling, L et al. 2006, and expert opinion.

These studies looked at ultramarathon runners and children with gastroenteritis as proxy cohort groups for the severely dehydrated. In Wei-Fong, K et al. 2015 the maximum time to normalization of plasma and urine derangements was approximately 1 week. This cohort includes a more taxing form of activity than would be expected among a crew member on EVA even in partial gravity but also looks at the 'untreated' patient as these ultramarathoners did not have any hospital based care. Similar to the UTBC scenario, the 'untreated' dehydrated crew member would still be allowed oral intake based on thirst and hunger parameters and thus would return to euvolemia similar to that of the 'treated' patient. However duration of illness would be longer when not specifically hydrating based on volume/weight loss. Hartling, L et al. 2006 showed a similar range among children with clinical dehydration from GI losses. This cohort of children was treated in the hospital with specific oral rehydration goals or IVF however they also represent a group that is more sensitive to volume changes and has ongoing fluid loss from GI sources. Therefore they are 8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 5

likely a more severe version of dehydration than is defined in this condition and may overestimate maximum duration of dehydration even when untreated. The RTDC surrogate was renal failure as defined by the RIFLE criteria. This criteria specifically notes an increase in creatinine 3x, a decrease in GFR by 75% or a creatinine >4. Wei-Fong, K et al. 2015 showed that ultramarathon runners had a peak creatinine of 1.77 immediately after a 100km race which does not meet criteria for renal failure. At 24 hours creatinine was very close to baseline despite up trending CK values and by 1 week lab values are back to normal. No crew members would be expected to go into renal failure in the setting of EVA dehydration due to the operational steps in place, in suit drink bag, and expected fluid loss/activity requirements of an EVA. LOCL from dehydration on EVA is expected to be 0 for these same reasons.

TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Wei-Fong, K et al. 2015 Terrestrial Spandorfer, PR et al. 2005 Terrestrial 2 Hartling, L et al. 2006 Terrestrial Wei-Fong, K et al. 2015 was a prospective observational study looking at hydration among athletes after an ultramarathon. It is small, underpowered, and does not contain a control group. However, it does provide a similarly aged and athletic cohort undergoing an activity that is physically taxing and prolonged. This study likely overestimates duration of treatment when compared to a crew member and thus is valuable in determining an upper bound of treatment. Hartling, L et al. 2006 and Spandorfer, PR et al. 2005 looked at healthy children with moderate to severe dehydration from GI losses who were treated with oral rehydration or IV rehydration which follows the definitions for our BC and WC scenarios.

These studies received a 2 as they are proxies for true EVA dehydration in the absence of more applicable literature/data.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Wei-Fong, K et al. 2015 Terrestrial 3 Wei-Fong, K et al. 2015 looked at serum creatinine levels in ultramarathon runners pre-race, post race, and 24 hours after completion of the race.

This cohort was used to represent the astronaut crew member that suffered from dehydration during a physically demanding EVA. The ultramarathon cohort is expected to be more dehydrated than the EVA cohort, but did not show any evidence of meeting the criteria for renal failure. Thus a 0% RTDC was applied to all scenarios. This was not spaceflight specific data, but does represent an extreme example of dehydration and therefore receives a LOC of 3 TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Expert Opinion Terrestrial 3 As previously discussed, prior to EVA a crew member has a PMC which helps to evaluate their general health. This includes nutrition and hydration evaluation. They also have a specific prehydration protocol and while on EVA have 32-64oz of water available in suit depending on the length and requirements of EVA. Given these features, the health of the crew, and literature on acute dehydration in the absence of significant comorbidities, the risk of LOCL was assumed to be 0. This assumption received a 3 given a paucity of spaceflight specific data.

CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

## Overview

Astronauts may become dehydrated (by up to 2.6% of body weight) during a 5-h EVA, further exacerbating the thermoregulatory challenge (Cowell 2002). Proper hydration and nutrition are just as important, if not more important, during EVA as they are during the remainder of a space mission.

The duration and metabolic demands of an EVA directly inform required nutrition and hydration needs. The longer duration and/or more physically demanding an EVA is, the more nutrition and hydration are required.

Historically, hydration needs in the EMU are currently managed through the availability of an in-suit drink bag (IDB) which can hold 1.9 liters.

Nutrition needs were partially accounted for in the EMU via inclusion of a modified commercial dried fruit bar which was ultimately discontinued years ago. Potential methods for mitigating this contributing factor have included shorter duration EVAs that preclude the need for substantial nutrition and hydration during the EVA. However, implementing shorter duration and more frequent EVAs could decrease overall work efficiency if the overhead associated with O2 prebreathe and suit ingress/egress is not decreased. Thus, EVA suit design, task design, tool design, mission 8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 6

objectives, and exploration environment are all key factors in understanding the hydration and nutrition needs during EVA. The required mass/volume of food and water for EVA over a mission are directly associated with the required EVA hours. The caloric and hydration requirements per hour of EVA is directly associated with the physical demands of the work performed during the EVA. The physical demands of the EVA work are directly associated with the methods and equipment available to perform the tasks and the weight and mobility of the suit in which they must be performed. The potential ramifications of not providing appropriate nutrition and hydration during EVA include the possibility of the need to shorten a planned long-duration EVA and possible loss of mission objectives. Also, health and performance issues may occur due to inadequate hydration or nutrition, within an EVA or over the length of a mission.

- CNES: None

### Diagnostic Scope and Resourcing

For the best-case and worst-case scenarios, diagnosis is based on history and physical examination (cardiac, pulmonary, skin, and focused neurologic). Labs and imaging were not felt to be necessary.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 0.6829 CP1 WC (Treated or Untreated): 0.6829 The highest scope of practice code used in the CRT is 4 for performing and interpreting the physical exam findings.

### Treatment Scope and Resourcing

In the best-case scenario, only oral rehydration is needed. In the worst-case scenario, additional consideration for parenteral hydration can be made.

### Communications and Support Needs

Real-time video and audio loop communications are not critical for diagnosis and treatment.

## REFERENCES

Cowell SA, Stocks JM, Evans DG, Simonson SR, Greenleaf JE. The exercise and environmental physiology of extravehicular activity. Aviat Space Environ Med. 2002 Jan;73(1):54-67. PMID: 11817621. https://humanresearchroadmap.nasa.gov/evidence/reports/eva%20suit.pdf https://www.lpi.usra.edu/lunar/constellation/ChappellEtAl_NASA-JSC-CN-39092_EVA-Ops-Injuries-And-Compromised-Performance.pdf

### IMM CLIFF RECONCILATION COMMENTS

There is no prior IMM CLIFF for this condition

### LIMITATIONS SUMMARY

- Dehydration in spaceflight is multifactorial and heavily dependent on crew members being vigilant about their own hydration status prior to an

surrounding EVA •The current schedule of EVAs for our DRM is undetermined. Multiple EVAs on multiple days will substantially increase incidence of dehydration however we anticipate this risk to still be small •The physical demands of an EVA in partial gravity may vary widely and the exact EVA parameters for lunar missions have not been set. Prolonged exertion may increase the incidence of dehydration over what is approximated in this CLIFF. •Dehydration contributes to more dangerous disease processes such as rhabdomyolysis and heat illness and thus the true effects of isolated dehydration is difficult to decern in literature •Renal failure is an extremely unlikely outcome from dehydration during exertional activity alone and thus the RTDC surrogate may not be the best indicator of need for higher level of care. However, the need for RTDC for dehydration in general is expected to be effectively 0 and thus does not change our approach to this condition 8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 7

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best |  | 664 |  | 89 |  |  | 145 |  |  |  |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best |  | 664 |  | 89 |  |  | 145 |  |  |  |  |  |
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

| Best |  | 564 |  |  |  |  |  | 211 | 1673 | 3763 | 0.444592 | 44.4592 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | -------- | ------- |

Case (TBC) Untreated

| Best |  | 564 |  |  |  |  |  | 211 | 1673 | 3763 | 0.444592 | 44.4592 |
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
|  | Simple | Complex |  | Skills |  |  | pulmonary |  |  |  |  |  |

Treated Best

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated Best

|  |  | 664 |  | 89 |  |  | 145 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (UTBC) Treated Worst

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TWC) Untreated Worst

| Case | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

(UTWC)

|  |  |  |  | Affected HSTCs (Continued) |  |  |  |  |  | TI Calculation |  | TI Score |
| --- | --- | --- | --- | -------------------------- | --- | --- | --- | --- | --- | -------------- | --- | -------- |

8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 8

Total Human

|  |  | Translation & |  | Total Tasks |  |  |
| --- | --- | ------------- | --- | ----------- | --- | --- |

Hand Hand (Any) Upper Extremity Lower Ambul & Stabilization Don/Doff Pressure Impaired By System TI Decimal TI %

| (Dom) |  | Extremity Standing (g) | Equipment Ops |  | Category |  |
| ----- | --- | ---------------------- | ------------- | --------- | ---------- | --- |
|  |  | (microgravity) |  | Condition | Tasks Full |  |

Mission Treated Best

|  |  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | --- | ------ | --- |

Case (TBC) Untreated Best

| 564 |  |  | 211 | 1673 | 3763 0.444592 | 44.4592 |
| --- | --- | --- | --- | ---- | ------------- | ------- |

Case (UTBC) Treated Worst

|  |  |  |  | 0 | 3763 0 | 0 |
| --- | --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 | 3763 1 | 100 |
| ------- | --- | --------- | ------ | ---- | ------ | --- |

Case (UTWC) 8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 9

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

8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 10

## REFERENCES

Reference American College of Sports, M., et al. (2007). "American College of Sports Medicine position stand. Exercise and fluid replacement." Med Sci Sports Exerc 39(2): 377-390. Belobrajdic, B., et al. (2021). "Planetary extravehicular activity (EVA) risk mitigation strategies for long-duration space missions." NPJ Microgravity 7(1): 16. Carter, R. (2008). "Exertional Heat Illness and Hyponatremia: An Epidemiological Prospective." Current Sports Medicine Reports 7.

Casa, D. J., et al. (2008). "Intravenous versus Oral Rehydration: Physiological, Performance, and Legal Considerations." Current Sports Medicine Reports. Castellani, J. W., et al. (2010). "Effect of hypohydration and altitude exposure on aerobic exercise performance and acute mountain sickness." J Appl Physiol (1985) 109(6): 1792-1800.

Cowell, S. A., et al. (2002). "The Exercise and Environmental Physiology of Extravehicular Activity." Aviation Space Environmental Medicine 73.

Dervay, J., et al. (2019). Medical Aspects of Extravehicular Activity. Principles of Clinical Medicine for Space Flight: 519-543.

Fortes, M. B., et al. (2015). "Is this elderly patient dehydrated? Diagnostic accuracy of hydration assessment using physical signs, urine, and saliva markers." J Am Med Dir Assoc 16(3): 221-228.

Gernhardt, M. L., et al. (2009). Risk of Compromised EVA Performance and Crew Health Due to Inadeaute EVA Suit Systems. HRP Requirements. H. R. Program. Hartling, L., et al. (2006). "Oral versus intravenous rehydration for treating dehydration due to gastroenteritis in children." Cochrane Database Syst Rev(3): CD004390. Krabak, B. J., et al. (2017). "Exercise-Associated Hyponatremia, Hypernatremia, and Hydration Status in Multistage Ultramarathons." Wilderness Environ Med 28(4): 291-298. Nolte, H. W., et al. (2019). "Ad libitum water consumption prevents exercise-associated hyponatremia and protects against dehydration in soldiers performing a 40-km route-march." Mil Med Res 6(1): 1.

Nuccio, R. P., et al. (2017). "Fluid Balance in Team Sport Athletes and the Effect of Hypohydration on Cognitive, Technical, and Physical Performance." Sports Med 47(10): 1951-1982.

Olson, A., et al. (2020). Dehydration Hazard Report. NASA xEMU PRA Team.

Ronco, C., et al. (2001). "Acute Dialysis Quality Initiative." Nephrology Dialysis Transplant 16.

Scheuring, R. A., et al. (2007). Recommendations to Improve Crew Health and Performance for Future Exploration Missions and Lunar Surface Operations. The Apollo Medical Operations Project. Johnson Space Center, NASA.

Spandorfer, P. R., et al. (2005). "Oral Versus Intravenous Rehydration of Moderately Dehydrated Children: A Randomized Controlled Trial." Pediatrics. Vos, J. R., et al. (2007). The Walkback Test: A Study to Evaluate Suit and Life Support System Performance Requirements for a 10km Traverse in a Planetary Suit. Johnson Space Center, NASA.

Webb, P. (1967). Human Water Exchange in Space Suits and Capsules, NASA.

Wei-Fong, K., et al. (2015). "Effects of 100-km Ultramarathon on Acute Kidney Injury." Clinical Journal of Sports Medicine 25.

## ACRONYMS

### ACRONYM PHRASE

### AAOMS American Association of Oral and Maxillofacial Surgeons

### AMA American Medical Association

### ARCL All Remaining Conditions List

### ARS Acute Radiation Sickness

### BHP Behavioral Health and Performance

### CAC Coronary Artery Calcium

8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 11

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

8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 12

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

8/23/2023 5:46:11 PM ICL40_Eva Related Dehydration Cliff page: 13

---

## Source metadata

```yaml
source_filename: "eva-related-dehydration-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/148NxCqJVhKO3fh0Ao_j4AULeTCAuCNOe/view"
source_drive_id: "148NxCqJVhKO3fh0Ao_j4AULeTCAuCNOe"
source_sha256: 603b891260fa71ff174bbd2b6eb5e8e1a559c912730694f734ec695550273621
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 13
ocr_performed: false
```
