# Traumatic Hypovolemic Shock CLiFF 2023

[View original PDF](https://drive.google.com/file/d/197ozm1hP3PYW7AgNdESt4Pam9Wm8MbAp/view) · **16 pages**

**Collection:** NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 119

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Branch Baseline](#branch-baseline)
- [INCIDENCE DATA INCLUDED IN THE MODEL](#incidence-data-included-in-the-model)
- [INCIDENCE](#incidence)
- [Overview](#overview)
- [REFERENCES](#references)
- [Incidence:](#incidence)
- [ACRONYMS](#acronyms)

---

Clinical Finding Form (CliFF)

## Branch Baseline

### ICL116_Traumatic Hypovolemic Shock

The state of "shock" is defined as cellular and tissue hypoxia due to circulatory failure to meet cellular metabolic and oxygen requirements. Blood loss can cause depletion of intravascular volume and clinical decompensation, resulting in hypovolemic shock (Suresh, 2018). Blunt or penetrating trauma can often lead to significant blood loss, making traumatic hypovolemic shock one of the most common etiologies of shock. The general principal for treatment of hypovolemic shock is fluid repletion. Delayed treatment can often result in multi-organ failure. In addition to treating the underlying cause of hypovolemia (stopping the bleeding), traumatic hypovolemic shock should generally be managed initially with crystalloid solutions followed by blood products (Neal, 2012). In space, the greatest risk of severe trauma is present during extravehicular activities (EVAs) (McCuaig, 1992; Trunkey, 1986).

Micrometeorites can cause penetrating traumas while many objects can potentially result in crush-type injuries during EVAs (Kirkpatrick, 2009).

## INCIDENCE DATA INCLUDED IN THE MODEL

The model imports the following incidence information from the MEDPRAT Evidence Library Database: incidence data category, space adaption status, EVA status, incidence data type, incidence and occurrence distribution data and incidence data characteristics. Data category defines the type of data available for incidence calculations (i.e. raw data vs. adjusted data). Space adaptation identifies medical events that where onset occurs in the first 5-7 days of flight and does not reoccur. EVA-related incidence values identify medical events that occur only during an EVA.

Incidence values types vary by data category and define the number of medical events per person-year (rates) or medical events per person at-risk (proportion) for each medical condition. Incidence values can be modified by crew characteristics such as gender sex and certain crew medical history characteristics. Modifying characteristics are noted below and incidence values are listed individually for each characteristic. Distributions are assigned to medical events incidence values and occurrences in the model. For each crewmember in a given trial, the incidence and number of occurrences of each medical condition are randomly selected from these probability distributions. Detailed descriptions of the distributions are included in the MEDPRAT Technical Description Document.

### INCIDENCE DATA

### SPACEFLIGHT LITERATURE

Current spaceflight reports on traumatic injury incidents in space are mainly minor injuries to the skin and mucous membranes (Gontcharov, 2005). (Johnston III, 2019) reported a total of 14 hospitalizations due to trauma between 1959 and 2018 among LSAH astronauts, none of which occurred during spaceflight. They also reported "circulatory medical event" incidence of 0.43 per 100 person-years. However, circulatory medical events included: dysrhythmia, coronary disease/angina, myocardial infarction, hypovolemic shock, and anaphylactic shock. There were no isolated incidents provided for traumatic hypovolemic shock. Musculoskeletal injuries and minor traumas in flight during the U.S. space program have been documented by (Scheuring, 2009). Traumatic and accidental deaths of astronauts in space have also been reported (Reynolds, 2018; Ushakov, 2017). However, there has not been a known report of traumatic hypovolemic shock among astronauts during spaceflight.

### ANALOG LITERATURE

(Thomas, 2003) studied U.S. Navy submarine crew during periods of isolation as analogue population for long-term space missions. Similar to spaceflight incident reports, injury was one of the most commonly reported health incidents among this population. However, there were no documentation of severe traumatic hypovolemic shock not in the setting of battle injury.

### TERRESTRIAL LITERATURE

(Ledingham, 1974) found that hemorrhage due to trauma makes up 21% of shock patients in a general hospital. Several more recent studies collected data on the etiologies of shock presenting to the ED. (Arendts, 2012) reported traumatic hypovolemic shock to be the cause of shock in 14% of patients. (Gitz Holler, 2019) is a population-based cohort study at a University Hospital in Denmark. They found 30% of shock patients presenting to the ED are due to hypovolemia and reported a hypovolemic shock incidence rate of 18.4/100,000 (Gitz Holler, 2019). According to additional data from (Ahrendts, 2012), approximately two-thirds of all hypovolemic shock episodes are due to major trauma. With these data, it can be estimated that traumatic hypovolemic shock has an incidence of approximately 12/100,000. Another study by (Standi, 2018) looked at 2017 Trauma Registry of German Trauma Society to identify cases of traumatic hypovolemic shock. 47,786 events occurred in 2017 when the national population of Germany was 82,657,002 according to World Bank data. Incidence can therefore be calculated as approximately 0.005 events/person-year. Combining these two, terrestrial incidence can be estimated at around 0.005-0.012 events/person-year. It is important, however, to note that incidence of trauma greatly varies between location and the outcome of trauma highly depends on the denominator population (age, health condition, etc.). Terrestrial data also does not translate well to spaceflight data due to major dissimilarities of environment and potential trauma etiologies.

### OVERALL INCIDENCE SUMMARY

2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 1

## INCIDENCE

mean 0.004295 SD 0.001155

### INCIDENCE SUMMARY

The Bayesian posterior distribution for the incidence rate given the astronaut data (14 events over 3255.814 person-years) under an uninformative prior is Gamma(shape=13.828, rate=3219.58) with mean 0.004295 and SD 0.001155. This incidence should only be applied for surface based operations as the incidence of trauma will be markedly lower in microgravity.

TABLE 1. INCIDENCE MODEL

### Incidence Details

### Incidence Type

UNK Segment Surface Env. Exposure NA Sex Any Crowns Any Contacts Any Pregnancy Any

### Incidence Distribution

### Occurrence Dist

Poisson Incidence Dist. Gamma Mean 0.00429497 SD 0.001155 Gamma (Shape): 13.828 (Rate): 3219.58 TABLE 2. INCIDENCE LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Gontcharov, 2005 Spaceflight 2 Johnston III, 2019 Analog 3 Thomas, 2003 Analog 2 Arendts, 2012 Terrestrial 1 Gitz Holler, 2019 Terrestrial 1 Ledingham, 1974 Terrestrial 1 Standi, 2018 Terrestrial 1 (Gontcharov, 2005) is a medical incidents report during the NASA-Mir orbital space programs but reported no incidents of traumatic hypovolemic shock so receives a LOC 2. (Johnston III, 2019) provided terrestrial data for trauma and circulatory medical conditions for spaceflight crew while not in spaceflight. Since it was not during spaceflight it is considered analog data and only receives a LOC of 3. (Thomas, 2003) is a analog population study for long-term space missions looking at health of US submarine crew during long periods of isolation. (De Backer, 2010) provided data on traumatic hypovolemic shock among patients presenting with shock in eight centers around the world. Cohort study (Gitz Holler, 2019) is a population-based study conducted in Denmark that provided data on the etiologies of shock presented to the ED. (Arendts, 2012) is an Australian study that also provided terrestrial data on etiologies of shock presenting to the ED. (Ledingham, 1974) is a older study looking at incidence of shock in the hospital. (Standi, 2018) calculated incidence of traumatic hypovolemic shock from Trauma Registry of the German Trauma Society.

Due to dissimilarities between terrestrial trauma etiologies (e.g., gunshots) and potential causes of severe trauma in the spaceflight environment, they are a poor representation for incidence calculation, therefore receiving LOC of 1. 2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 2

2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 3

### CREWMEMBER SELECTION/PREVENTION

### DISQUALIFYING CONDITIONS

Refer to Medical Evaluation Documents (MED) Volume A, Medical Standards for ISS Crewmembers, International Space Station Program, Rev 3.4 (2016).

### PREFLIGHT PREVENTATIVE MEASURES

Bone densitometry; Fitness assessments; EVA Medical Monitoring; Physical examinations; Body mass measurements; Pulmonary assessments

### BEST CASE SCENARIO DEFINITION

Traumatic hypovolemic shock resulting in signs of end organ compromise that resolves with fluid resuscitation.

### WORSE CASE SCENARIO DEFINITION

Traumatic hypovolemic shock resulting in signs of end organ compromise that fails to resolve with fluid resuscitation or requires blood transfusion.

CONDITIONS INCLUDED, BUT NOT EXPLICITLY STATED (CNES)

### Acute Hypovolemia

### BEST CASE/WORST CASE PROBABILITY COMMENTS

Current studies on outcomes of traumatic hypovolemic shock are all studies of the terrestrial population. A study reported 24% of hemorrhagic shock resulted in organ failure (Kauvar, 2006). Meta-analysis by (Owattanapanich, 2018) reported around 14.4% probability of multiple organ failure. A study by (Rau, 2016) looked at trauma patients receiving blood transfusion in the ED. Among these patients, they reported around 4% requiring massive transfusion. Astronauts are at a physiological disadvantage compared to patients on earth due to prolonged periods of weightlessness (Kirkpatrick, 2005). Conditions such as pneumothoraxes may also be exacerbated by the hypobaric stresses associated with EVA (Richardson, 1996). Additionally, cardiovascular adaptation associated with microgravity will most likely alter responses to hemorrhage and fluid resuscitation. It is therefore safe to estimate that probability of WC scenario will be 20%.

TABLE 3.BEST/WORST CASE PROBABILITY LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Kauvar, 2006 Terrestrial 3 Owattanapanich, 2018 Terrestrial 3 Rau, 2016 Terrestrial 3 (Kauvar, 2006) is a review of traumatic hemorrhage outcome. It provided data on WC scenario probabilities in the terrestrial population, receiving a LOC of 3. (Owattanapanich, 2018) is a meta-analysis that provided data on outcomes of traumatic hemorrhagic shock including multiple organ dysfunction, receiving a LOC of 3. (Rau, 2016) is a study of trauma patients presenting to the ED who required blood transfusion. They provided data on necessity of massive transfusion, which is likely to be impossible during spaceflight, among these patients, receiving a LOC of 3. 2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 4

TABLE 4. CLIFF TREATMENT & OUTCOME TABLE BY CLINICAL PHASE CP1: Diagnosis CP2: Treatment CP3: Condition End State

### TI% Duration TI% Duration TI% RTDC LOCL

### Composite Condition

Case Scenario Incidence Probability % Preset Preset Preset Min Max Preset Min% Max% Min% Max% Treated Best Case 0.004295 SD 80 - 80 100 2 100 3 48 0 0 0 0 0 (TBC) 0.001155 Treated Worst Case 20 - 20 100 2 100 264 912 0 86 100 20 100 (TWC) Untreated Best N/A N/A N/A 2 100 24 48 0 20 86 10 20 Case (UTBC) Untreated Worst N/A N/A N/A 2 100 264 912 100 100 100 80 100 Case (UTWC) TABLE 4 KEY

- Composite Incidence: The same composite incidence will be used for both TBC and TWC. For EVA conditions: events per EVA (events/EVA).

- For space adaptation conditions: events per person (events/person). For non-spaceflight conditions: events per person year (events/py).

- Condition Probability: The probability that CLiFF condition progresses to a worst case scenario. Best case scenario: 100%-Worst Case.

Clinical Phase General Comments: TI% = Task Impairment %. Task Impairment is the % of tasks that the crewmember is incapable of performing without impairment secondary to the medical condition. Durations are defined in hours.

- Removal to Definitive Care (RTDC): The probability the entire crew aborts the mission and returns to earth. This is considered as a condition

end state result if any of the following criteria are met: 1) the potential for LOCL, 2) potential for significant permanent task impairment, or 3) potential for intractable pain.

- Loss of Crew Life (LOCL): The probability of death of affected crewmember due to medical condition.

Clinical Phase 1: Initial Assessment and Diagnosis: Covers only the initial assessment and diagnosis of the affected crewmember to define his or her medical condition. While the affected crewmember is being assessed, he or she is not able to perform any assigned tasks, thus Task Impairment (TI) during this phase is considered 100%. In the untreated case, there is no diagnosis performed, therefore Task Impairment and Duration will always be " not applicable." Clinical Phase 2: Stabilization, Treatment, and Convalescence: The affected crewmember is receiving any appropriate initial or follow-on treatment for his or her medical condition to allow the crewmember to recover as much as he or she is able to recover in the spaceflight environment. Clinical phase 2 also encompasses relapses or recurrences of the same original medical condition in Clinical Phase 1. The duration of Clinical Phase 2 is expressed as minimum and maximum hours. Clinical Phase 3: Condition End State: Reached once the affected crewmember has recovered from the medical condition as much as he or she is able to recover in the spaceflight environment amongst treated and untreated best and worst case scenarios. This may or may not be recovery from the given medical condition to the full extent possible. If this “recovered” state results in Removal to Definitive Care (RTDC) or Loss of Crew Life (LOCL) this will be noted in the condition end state results. 2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 5

### SCENARIO OVERVIEW COMMENTS

Immediate control of bleeding and fluid resuscitation are the two most important aspects for treatment of traumatic hypovolemic shock. In space, depending on the location of incident, medical care and ATLS capabilities will be different, therefore altering the probabilities of survival and outcome. In BC scenarios, mortality will be low since fluid resuscitation can be achieved in space. However, limitations including lack of blood storage or surgical capabilities exist in space. Although astronauts are equipped with many supplies to stabilize injured individuals, including IV fluid, TXA, and whole blood through "walking blood banks", surgery remains the major limitation. Therefore, in more severe situations such as the development of organ failure or the need of immediate surgery, RTDC will be warranted. Associated mortality will be high due to the limited medical capacity, time required to return back to earth, and the suited configuration during return to earth (limits capacity for respiratory and circulatory care). TREATED BEST CASE (TBC) SCENARIO COMMENTS Due to the normalization of vital signs achieved after fluid resuscitation and no need for surgery in BC scenarios, these patients will not require extensive treatment (assuming bleeding has been successfully stopped). This makes RTDC and LOCL due to hypovolemic shock unlikely to happen (any RTDC and LOCL would be attributed to the trauma itself or its complications), therefore estimated to be 0%. Treatment of hypovolemic shock usually starts with adequate control of bleeding and initial bolus of 1L of fluid (ATLS guideline, 10th edition). With good initial response to fluid resuscitation, maintenance fluid is generally still continued for a period of time.

TREATED WORST CASE SCENARIO (TWC) COMMENTS 22% mortality was reported by (Cole,2020) among patients with multiple organ dysfunction after traumatic injury. Hemorrhage accounts for approximately 30-40% of all trauma mortality (Sauaia, 1995). (Gitz Holler, 2019) reported a 7-day mortality rate of 19.2% and 90-day mortality of 36.8% among all patients with hypovolemic shock treated in the hospital. Data from meta-analysis by (Owattanapanich, 2018) revealed around 20% of mortality. If bleeding cannot be controlled successfully in time, patient will not be able to survive despite adequate fluid resuscitation. All patients will require longer periods of monitoring for severe hypovolemic shock. (Sisak, 2012) reported urgent surgery rate of 86% among trauma patients requiring blood transfusion. With limitations for treatment of severe trauma in space (Kirkpatrick, 2009), RTDC will have a maximum probability of 100%. Using terrestrial mortality data, it can be estimated that LOCL will be at least 20% (assuming bleeding can be managed and RTDC is prompt) with maximum of 100%. Treatment duration for traumatic hypovolemic shock is highly unpredictable with different forms of trauma and complexity of other potential associated complications. For example, (Bickell, 1994) reported an average of 11-14 days of hospitalization among hypotensive patients with penetrating torso injuries with the longest staying more than 38 days. Another study by (Duke, 2012) reported an mean of 13-18 days of hospital stay also with wide standard deviations.

UNTREATED BEST CASE (UTBC) SCENARIO COMMENTS Without prompt treatment, hypovolemic shock is fatal. However, for minor bleeding in the category of class I hemorrhage, patients can often compensate within 24 hours without the need of fluid resuscitation (Hemodynamic instabilities do not usually occur until Class III hemorrhage) (ATLS guideline, 10th edition). Class II to Class IV hemorrhages, as mentioned above, would require fluid resuscitation and in most cases, blood transfusion in order to stabilize. Without treatment, if bleeding does not spontaneously stop, blood loss will continue and eventually lead to WC scenarios and death. Untreated BC scenarios can progress to WC scenarios. Therefore, maximum probability of RTDC can be estimated to be similar to the minimum RTDC probability of treated WC scenarios (86%). Similarly, for LOCL, maximum probability can be estimated to be that of minimum for treated WC scenarios (20%).

UNTREATED WORST CASE (UTWC) SCENARIO COMMENTS Without treatment, WC scenario traumatic hypovolemic shocks will not survive. Therefore CP2 will not be meaningful under these circumstances, but are reflected as the TWC for maximum CP2 duration given the treatments that were not successful were being administered. LOCL could be estimated to be at least 80-100% when no treatment is administered and given the WC definition, RTDC would be required in every UTWC scenario. TABLE 5. CLINICAL PHASE II DURATION LEVEL OF CONFIDENCE (LOC)

### Citation Source LOC Value

Bickell, 1994 Terrestrial 2 2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 6

2

| Citation | Source |  | LOC Value |  |
| ---------- | ----------- | --- | --------- | --- |
| Duke, 2012 | Terrestrial |  |  |  |

(Bickell, 1994) provided data on the length of hospital stay among patients with penetrating torso injuries. (Duke, 2012) analyzed outcomes of patients with severe hemorrhage. Due to the wide variability of treatment duration, this section receives a LOC of 2.

TABLE 6. RTDC LEVEL OF CONFIDENCE (LOC)

| Citation | Source |  | LOC Value |  |
| ----------------- | ----------- | --- | --------- | --- |
| Kirkpatrick, 2009 | spaceflight |  |  |  |
| Gitz Holler, 2019 | Terrestrial |  |  |  |
| Duke, 2012 | Terrestrial |  |  | 3 |
| Bickell, 1994 | Terrestrial |  |  |  |
| Sisak, 2012 | Terrestrial |  |  |  |

(Kirkpatrick, 2009) outlined the limitations of medical treatments for trauma in space. (Gitz Holler, 2019) provided an overview of treatment requirements for traumatic hypovolemic shock. (Bickell, 1994) and (Duke, 2012) provided insight for treatment complexity for trauma patients, highlighting the importance of good clinical care to reduce mortality. (Sisak, 2012) is a study conducted at a single trauma center providing data on trauma patients requiring urgent surgery. With the evidence of need for early and extensive treatment, LOC is a 3.

TABLE 7. LOCL LEVEL OF CONFIDENCE (LOC)

| Citation |  | Source | LOC Value |  |
| -------------------- | --- | ----------- | --------- | --- |
| Cole, 2020 |  | Terrestrial |  |  |
| Durham, 2003 |  | Terrestrial |  |  |
| Sauaia, 1995 |  | Terrestrial |  | 2 |
| Gitz Holler, 2019 |  | Terrestrial |  |  |
| Owattanapanich, 2018 |  | Terrestrial |  |  |

(Cole, 2020) provided data on mortality of patients with traumatic injury who developed multiple organ dysfunction. (Kauvar, 2006) is a review of traumatic hemorrhage outcome. (Owattanapanich, 2018) is a meta-analysis that provided data on mortality among patients with traumatic hemorrhagic shock. CAPABILITY RESOURCE TABLE (CRT) OVERVIEW

### Capabilities and Resourcing Scope

## Overview

Traumatic hypovolemic shock refers to life threatening end organ injury in the setting of acute blood loss from a traumatic injury suffered by a crew member. This is most likely to be a blunt injury in the spaceflight environment. In a microgravity environment, objects with large mass are weightless which allows them to be moved with relative ease but still exert a significant force. This puts crew members at risk of being struck, pinned or crushed between very 'massive' objects. In partial gravity blunt injury more closely mirrors the terrestrial environment with risk of fall from height, being struck or pinned, or heavy machinery accidents (including rovers and exploration vehicles). There have not been any life threatening traumatic injuries in flight to date however the management of a crew member in shock will be extremely difficult and mirror wartime injury management in austere environments. The best case scenario in this condition is defined as anemia or hypovolemia following a traumatic injury that responds to fluid resuscitation. The worst case is defined as hypovolemic shock following a traumatic injury, requiring blood products, nonresponsive to treatment, requiring surgery, or resulting in multiorgan failure from inadequate circulating volume and poor perfusion.

It is important to note here that we are excluding pneumothorax and cardiac tamponade, spinal shock, hypoxemia from pulmonary dysfunction, and blunt cardiac injury from this condition. These are separate but related issues with trauma and shock but do not pertain to hypovolemic or hemorrhagic shock.

- CNES: Anemia, Acute Hypovolemia, Hemorrhagic Shock

2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 7

### Diagnostic Scope and Resourcing

In the best case scenario, diagnosis is dependent on the history and physical exam. A primary assessment with basic vital signs followed by a secondary trauma assessment of head to toe evaluation is necessary to identify injuries and location of blood loss. Irrigation and suction are needed to remove floating blood from wound sites to attempt to identify large bleeding vessels that can be ligated. Laboratory analysis is needed to trend hemoglobin and hematocrit counts. In terrestrial trauma centers, patients with significant injury or mechanism of injury that are hemodynamically stable receive CT scans to identify injuries however this is unavailable in flight. The unstable trauma patient is taken directly to the operating room for exploratory laparoscopy as a hybrid diagnostic and treatment phase which is even less practical in current mission parameters.

Diagnostics are thus reliant on ultrasound imaging to identify injuries and guide management. We have agreed to include the Rapid Ultrasound for Shock and Hypotension (RUSH exam) as a necessary capability to consider other sources of shock and to do a more extensive ultrasonographic evaluation than the more traditional Extended Focused Assessment with Sonography in Trauma (E-FAST).

The worst case scenario CP1 mirrors that of the best case scenario as the difference between them is the response to treatment.

The diagnostic evaluation of the trauma patient in flight will be similar to injuries that occur in wilderness, wartime, or other austere environments.

The diagnostic and treatment capabilities are limited to minimizing blood loss, resuscitation, and transfer to definitive care.

Clinical Phase 1 Duration and Rationale This version of IMPACT presumes physician level knowledge, skill, and ability will be present on the mission. The CRT working group SME consensus duration is as follows: CP1 BC (Treated or Untreated): 2 CP1 WC (Treated or Untreated): 2 The highest scope of practice for both the best and worst case scenario is 5 (attending physician) due to the necessity of careful identification of injuries with limited diagnostic resources in order to guide management.

### Treatment Scope and Resourcing

In the best case scenario, treatment is dependent on stopping blood loss and resuscitation with crystalloid. Hemostasis of external bleeding occurs with direct pressure with procoagulant impregnated gauze and vessel ligation. Pelvic fracture or injury is stabilized with pelvic compression when appropriate. Modern approaches to hemorrhagic shock limit crystalloid resuscitation due to alteration of pH, coagulation cascades, and worse clinical outcomes. In this CRT we have limited IV crystalloid fluids to 2L. External rewarming occurs to limit hypothermia as part of the trauma triad.

Txa has been included however the authors acknowledge this is a controversial choice in the patient not in hemorrhagic shock. We agreed that intravenous Txa was indicated given our lack of any other treatment options for significant abdominal or thoracic trauma and its safety profile when given to healthy patients within 3 hours of injury. There are currently ongoing studies of Txa use in this population (i.e. the patient with significant trauma that is not in shock) that may guide this capability in the future. Treatment of other sources of bleeding such as long bone fracture, hollow or solid viscous injury, or thoracic injury was excluded from this condition as it is included in other conditions.

In the worst case scenario the early phases of treatment are the same as the best case scenario. This is because the defining feature between the two is response to crystalloid resuscitation. As such, management focuses on limiting external blood loss, initiation of <2L crystalloid fluid, and Txa administration. A crew member still in hemorrhagic shock after limited crystalloid resuscitation then requires blood transfusion. There are several operational approaches to the management of blood transfusion in flight that are many ways beyond the scope of the CRT project however we recommend the 'floating blood bank' as discussed by Nowak et al. 2019. This mirrors a 'walking blood bank' used in military services and includes blood type and reactivity as a parameter for crew selection. The advantages are primarily delivery of whole blood products and limited need for other equipment. Blood product donation limits are a 1-2 pints per crew member. Lyophilized blood is an alternative option but costs mass and volume. As with other critical care level conditions in the condition list, the likelihood of LOCL in this condition is high particularly in the WC scenario as the capabilities necessary to treat this condition at the terrestrial gold standard would require extensive infrastructure and personnel that at this time are unrealistic. The future of spaceflight will eventually require surgical capabilities however they are outside the scope of our defined reference mission.

### Communications and Support Needs

In both the best and worst case scenarios continuous AV communication is necessary if available given the significant risk of loss of life and limb to a crew member suffering from significant trauma.

## REFERENCES

Biffl, W. L., et al. (2013). "Western Trauma Association critical decisions in trauma: management of pancreatic injuries." J Trauma Acute Care Surg 75(6): 941-946. Biffl, W. L., et al. (2018). "Management of colorectal injuries: A Western Trauma Association critical decisions algorithm." J Trauma Acute Care Surg 85(5): 1016-1020. Brasel, K. J., et al. (2017). "Western Trauma Association Critical Decisions in Trauma: Management of rib fractures." J Trauma Acute Care Surg 82(1): 200-203. Braverman, M. A., et al. (2020). "From battlefront to Homefront: creation of a civilian walking blood bank." Transfusion 60 Suppl 3: S167-S172.

Brenner, M., et al. (2018). "Joint statement from the American College of Surgeons Committee on Trauma (ACS COT) and the American College of Emergency Physicians (ACEP) regarding the clinical use of Resuscitative Endovascular Balloon Occlusion of the Aorta (REBOA)." Trauma Surg Acute Care Open 3(1): e000154. Brown, C. V. R., et al. (2018). "Western Trauma Association Critical Decisions in Trauma: Management of renal trauma." J Trauma Acute Care Surg 85(5): 1021-1025. Chang, R., et al. (2017). "Remote Damage Control Resuscitation in Austere Environments." Wilderness Environ Med 28(2S): S124-S134.

Davis, J. W., et al. (2008). "Western trauma association critical decisions in trauma: management of pelvic fracture with hemodynamic instability." J Trauma 65(5): 1012-1015. 2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 8

Eastridge, B. J., et al. (2019). "Outcomes of traumatic hemorrhagic shock and the epidemiology of preventable death from injury." Transfusion 59(S2): 1423-1428. Feliciano, D. V., et al. (2015). "Western Trauma Association Critical Decisions in Trauma: Management of abdominal vascular trauma." J Trauma Acute Care Surg 79(6): 1079-1088. Fernandez-Moure, J., et al. (2018). "The Chemistry of Lyophilized Blood Products." Bioconjug Chem 29(7): 2150-2160.

Galvagno, S. M., Jr., et al. (2019). "Advanced Trauma Life Support((R)) Update 2019: Management and Applications for Adults and Special Populations." Anesthesiol Clin 37(1): 13-32.

Gourlay, T., et al. (2018). "Development of a portable blood salvage and autotransfusion technology to enhance survivability of personnel requiring major medical interventions in austere or military environments." J R Army Med Corps 164(2): 96-102.

Grocott, M. P., et al. (2005). "Resuscitation from Hemorrhagic Shock Using Rectally Administered Fluids in a Wilderness Environment." Wilderness Environ Med 16: 209-211. Hulsebos, H. and J. Bernard (2016). "Consider Autotransfusion in the Field." Mil Med 181(8): e945-947.

Keikha, M., et al. (2018). "Diagnostic Accuracy of Rapid Ultrasound in Shock (RUSH) Exam; A Systematic Review and Meta-analysis." Bull Emerg Trauma 6(4): 271-278. Kirkpatrick, A. W., et al. (2001). "Extraterrestrial Resuscitation of Hemorrhagic Shock: Fluids." Journal of Trauma 50: 162-168.

Kozar, R. A., et al. (2009). "Western Trauma Association critical decisions in trauma: nonoperative management of adult blunt hepatic trauma." J Trauma 67(6): 1144-1148; discussion 1148-1149.

Leibner, E., et al. (2020). "Damage control resuscitation." Clin Exp Emerg Med 7(1): 5-13.

Malhotra, A., et al. (2015). "Western Trauma Association Critical Decisions in Trauma: Diagnosis and management of duodenal injuries." J Trauma Acute Care Surg 79(6): 1096-1101. Matthews, A., et al. (2019). "Fresh Low Titer O Whole Blood Transfusion in the Austere Medical Environment." Wilderness Environ Med 30(4): 425- 430. Moore, F. A., et al. (2008). "Western Trauma Association (WTA) critical decisions in trauma: management of adult blunt splenic trauma." J Trauma 65(5): 1007-1011. Napolitano, L. M., et al. (2013). "Tranexamic acid in trauma: how should we use it?" J Trauma Acute Care Surg 74(6): 1575-1586.

Nowak, E. S., et al. (2019). "Blood transfusion for deep space exploration." Transfusion 59(10): 3077-3083.

Pati, S., et al. (2018). "Lyophilized plasma attenuates vascular permeability, inflammation and lung injury in hemorrhagic shock." PLoS One 13(2): e0192363. Roberts, I. (2015). "Tranexamic acid in trauma: how should we use it?" J Thromb Haemost 13 Suppl 1: S195-199.

Rowell, S. E., et al. (2017). "Western Trauma Association Critical Decisions in Trauma: Management of adult blunt splenic trauma-2016 updates." J Trauma Acute Care Surg 82(4): 787-793.

Sperry, J. L., et al. (2019). "Prehospital resuscitation in adult patients following injury: A Western Trauma Association critical decisions algorithm." J Trauma Acute Care Surg 87(5): 1228-1231.

Stancil, S. A. (2017). "Development of a New Infusion Protocol for Austere Trauma Resuscitations." Air Med J 36(5): 239-243.

Tran, T. L., et al. (2016). "Western Trauma Association Critical Decisions in Trauma: Management of pelvic fracture with hemodynamic instability- 2016 updates." J Trauma Acute Care Surg 81(6): 1171-1174.

### IMM CLIFF RECONCILATION COMMENTS

BC and WC scenario definitions were changed in this CLiFF to be more specific and compatible with potential situations in space. IMM CLiFF reported 19-100% probability of best case scenarios. However, they only accounted for those 19% who required "massive transfusion" within the first 24 hours. With further evidence provided by current terrestrial incidence of development of severe complications such as organ transfusion, we conservatively report a 80% chance of BC scenarios. The reported LOCL and RTDC probabilities are similar to this CLiFF.

### LIMITATIONS SUMMARY

There is currently no documented incident of traumatic hypovolemic shock during spaceflight34. There is also no suitable analog population as etiologies of trauma are dissimilar in military or terrestrial environments. However, using the Johnston paper, which reports trauma of astronauts outside of their spaceflight duties, has been used as a surrogate. This may include injuries from elderly astronaut falls, may include hospitalizations that did not result in traumatic hypovolemic shock and may also include injuries that are only possible terrestrially (e.g. gunshot wounds).

Therefore, this is likely overestimating the incidence, and therefore should only be applied for surface based operations (partial G) as the incidence of trauma will be markedly lower in microgravity. Similarly, for WC/BC scenarios, due to the fundamental differences between possibilities in space 2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 9

and on earth, probability data is most likely not transferable. Additionally, according to current ATLS guideline, those with Class II hemorrhage or above would most likely require blood transfusion. Current treatment guidelines also recommend repleting intravascular volume with blood products as soon as possible following all traumatic hypovolemic shocks. However, in space, blood products are unlikely to be readily available, and therefore crews would rely heavily on IVF for hypovolemia treatment. Therefore, treatment data from terrestrial literature are not ideal representations of scenarios that could happen during spaceflight. It is also difficult to assign treatment durations, RTDC, and LOCL for untreated scenarios as the presence of continued blood loss would greatly alter the need for treatments and outcome. 2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 10

TABLE 8. TASK IMPAIRMENT CALCULATION BASED ON AFFECTED HUMAN SYSTEMS TASK CATEGORIES (HSTC)

Clinical Phase 2: Treatment

### Affected HSTCs

Inter-

|  | Cognitive - | Cognitive - |  |  |  |  | Cardio- |  |  |  |  |  |
| --- | ----------- | ----------- | --- | --- | --- | --- | ------- | --- | --- | --- | --- | --- |

Simple Complex Communications personal Vision Hearing pulmonary Dentition GI GU Skills Treated

| Best | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Case (TBC) Untreated

| Best | 223 | 664 | 113 | 89 | 854 | 44 | 145 | 5 | 13 | 6 |  |  |
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

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

Case (TBC) Untreated

| Best | 132 | 564 | 414 | 22 | 196 | 34 | 34 | 211 | 3763 | 3763 | 1 | 100 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | ---- | ---- | --- | --- |

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

2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 11

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

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (UTBC) Treated Worst

|  |  |  |  | 0 3763 | 0 0 |
| --- | --- | --- | --- | ------ | --- |

Case (TWC) Untreated Worst

| 132 564 | 414 | 22 196 34 | 34 211 | 3763 3763 | 1 100 |
| ------- | --- | --------- | ------ | --------- | ----- |

Case (UTWC) 2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 12

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

2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 13

## REFERENCES

Reference Arendts G, Stone SF, Fatovich DM, van Eeden P, MacDonald E, Brown SG. Critical illness in the emergency department: lessons learnt from the first 12 months of enrolments in the Critical Illness and Shock Study. Emerg Med Australas 2012; 24 1:31–36.

Bickell WH, Wall MJ Jr, Pepe PE, et al. Immediate versus delayed fluid resuscitation for hypotensive patients with penetrating torso injuries. N Engl J Med. 1994;331(17):1105-1109. doi:10.1056/NEJM199410273311701 Duke MD, Guidry C, Guice J, et al. Restrictive fluid resuscitation in combination with damage control resuscitation: time for adaptation. J Trauma Acute Care Surg. 2012;73(3):674-678. doi:10.1097/TA.0b013e318265ce1f Durham, RM, Moran, JJ, Mazuski, JE, Shapiro, MJ, Baue, AE, Flint, LM. Multiple organ failure in trauma patients. J Trauma. 2003;55(4):608–616.

Dutton RP, Mackenzie CF, Scalea TM. Hypotensive resuscitation during active hemorrhage: impact on in-hospital mortality. J Trauma. 2002;52(6):1141-1146. doi:10.1097/00005373-200206000-00020 Gitz Holler, Jon∗; Jensen, Helene Kildegaard∗; Henriksen, Daniel Pilsgaard†; Rasmussen, Lars Melholt‡; Mikkelsen, Søren§; Pedersen, Court||; Lassen, Annmarie Touborg∗ Etiology of Shock in the Emergency Department: A 12-Year Population-Based Cohort Study, SHOCK: January 2019

- Volume 51 - Issue 1 - p 60-67 doi: 10.1097/SHK.0000000000000816

Gontcharov IB, Kovachevich IV, Pool SL, et al. In-flight medical incidents in the NASA-Mir program. Aviat Space Environ Med. 2005;76(7):692- 696. Holler JG, Bech CN, Henriksen DP, Mikkelsen S, Pedersen C, Lassen AT. Nontraumatic hypotension and shock in the emergency department and the prehospital setting, prevalence, etiology, and mortality: a systematic review. PLoS One. 2015;10(3):e0119331. Published 2015 Mar 19. doi:10.1371/journal.pone.0119331 Kauvar, D.S., Wade, C.E. The epidemiology and modern management of traumatic hemorrhage: US and international perspectives. Crit Care 9, S1 (2005). https://doi.org/10.1186/cc3779 Kirkpatrick AW, Dulchavsky SA, Boulanger BR, et al. Extraterrestrial resuscitation of hemorrhagic shock: fluids. J Trauma. 2001;50(1):162-168. doi:10.1097/00005373-200101000-00036\ Kirkpatrick AW, Ball CG, Campbell M, et al. Severe traumatic injury during long duration spaceflight: Light years beyond ATLS. J Trauma Manag Outcomes. 2009;3:4. Published 2009 Mar 25. doi:10.1186/1752-2897-3-4 Kirkpatrick AW, Campbell MR, Jones JA, et al. Extraterrestrial hemorrhage control: terrestrial developments in technique, technology, and philosophy with applicability to traumatic hemorrhage control in long-duration spaceflight. J Am Coll Surg. 2005;200(1):64-76. doi:10.1016/j.jamcollsurg.2004.08.028 Ledingham IM, Fisher WD, McArdle CS, Maddern M. The incidence of the shock syndrome in a general hospital. Postgrad Med J 1974 Jul;50(585):420-4 McCuaig KE, Houtchens BA. Management of trauma andemergency surgery in space.J Trauma. 1992;33:610-626.

Neal MD, Hoffman MK, Cuschieri J, et al. Crystalloid to packed red blood cell transfusion ratio in the massively transfused patient: when a little goes a long way. J Trauma Acute Care Surg. 2012;72(4):892-898. doi:10.1097/TA.0b013e31823d84a7 Rau CS, Wu SC, Kuo SC, et al. Prediction of Massive Transfusion in Trauma Patients with Shock Index, Modified Shock Index, and Age Shock Index. Int J Environ Res Public Health. 2016;13(7):683. Published 2016 Jul 5. doi:10.3390/ijerph13070683 Richardson JD, Miller FB. Injury to the lung and pleura. In: Feliciano DV, Moore EE, Mattox KL, editor. Trauma. Stamford: Appelton & Lange;

1996. pp. 387–407.

Sauaia, A, Moore, FA, Moore, EE. Epidemiology of trauma deaths: a reassessment. J Trauma. 1995;38(2):185–193.

Sisak K, Manolis M, Hardy BM, Enninghorst N, Bendinelli C, Balogh ZJ. Acute transfusion practice during trauma resuscitation: who, when, where and why? Injury. 2013 May;44(5):581-6. doi: 10.1016/j.injury.2012.08.031. Epub 2012 Aug 30. PMID: 22939180.

Standl T, Annecke T, Cascorbi I, Heller AR, Sabashnikov A, Teske W. The Nomenclature, Definition and Distinction of Types of Shock. Dtsch Arztebl Int. 2018;115(45):757-768. doi:10.3238/arztebl.2018.0757 Suresh MR, Chung KK, Schiller AM, Holley AB, Howard JT, Convertino VA. Unmasking the Hypovolemic Shock Continuum: The Compensatory Reserve. J Intensive Care Med. 2019;34(9):696-706. doi:10.1177/0885066618790537 Trunkey DD, Frank IC. Trauma care in space.J Emerg Nurs. 1986;12:32A-35A.

Thomas TL, Garland FC, Mole D, et al. Health of U.S. navy submarine crew during periods of isolation. Aviat Space Environ Med. 2003;74:260– 265. Ushakov IB, Voronkov YI, Bukhtiyarov IV, Tikhonova GI, Gorchakova TY, Bryleva MS. A Cohort Mortality Study Among Soviet and Russian Cosmonauts, 1961-2014. Aerosp Med Hum Perform. 2017;88(12):1060-1065. doi:10.3357/AMHP.4701.2017 2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 14

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

LEO Low-Earth orbit 2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 15

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

2/13/2023 10:32:20 AM ICL116_Traumatic Hypovolemic Shock Cliff page: 16

---

## Source metadata

```yaml
source_filename: "traumatic-hypovolemic-shock-cliff-2023.pdf"
source_folder: "NASA IMM - All Documentation Per Condition/Cardiovascular Conditions/CliFF 119"
source_url: "https://drive.google.com/file/d/197ozm1hP3PYW7AgNdESt4Pam9Wm8MbAp/view"
source_drive_id: "197ozm1hP3PYW7AgNdESt4Pam9Wm8MbAp"
source_sha256: f021cb5c557c006844d5251329862509121565a260f15b823ba6bcee854ad8a4
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 16
ocr_performed: false
```
