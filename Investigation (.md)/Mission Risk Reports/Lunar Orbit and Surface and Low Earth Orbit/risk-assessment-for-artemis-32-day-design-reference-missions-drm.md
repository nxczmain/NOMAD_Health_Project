# Risk Assessment For Artemis 32 Day Design Reference Missions Drm

[View original PDF](https://drive.google.com/file/d/1dHYp764Q-oS8eGkDkYcrPhmm1F_2MdQn/view) · **15 pages**

**Collection:** Mission Risk Reports/Lunar Orbit and Surface and Low Earth Orbit

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Executive Summary](#executive-summary)
- [Background](#background)
- [Methods](#methods)
- [Results](#results)
- [Discussion](#discussion)
- [References](#references)
- [Appendix A: IMM Status at Time of Service Request Report](#appendix-a-imm-status-at-time-of-service-request-report)
- [Appendix B: Medical Conditions in iMED by Category (iMED_20170221)](#appendix-b-medical-conditions-in-imed-by-category-imed_20170221)
- [Appendix C: Medical Conditions Modified for the 32 Day DRM](#appendix-c-medical-conditions-modified-for-the-32-day-drm)

---

IMM Service Request Report – Artemis IV S-20221028-451

## Executive Summary

The objective of this IMM support request is to provide a medical risk assessment for Artemis 32 day Design Reference Missions (DRM). The simulation results are as follows:

- Average number of Total of Medical Events (TME):

MedCap - 22.75 events Fully Treated – 22.75

- Average Crew Health Index (CHI):

MedCap - 96.98 % Fully Treated – 96.94 %

- Probability of consideration for Evacuation (EVAC):

MedCap - 0.0078 Fully Treated - 0.0037

- Probability of Loss of Crew Life (LOCL):

MedCap - 0.0007 Fully Treated - 0.0004 1 DECEMBER 2022

| IMM Service Request Report – Artemis IV |  |  |  |  |  |  | S-20221028-451 |
| ---------------------------------------- | --- | --- | --- | --- | --- | --- | --------------- |
## Background

The IMM is a stochastic model that uses Monte Carlo methodology to simulate medical outcomes during spaceflight missions. The IMM consists of a three-step process. First, mission and crew member characteristics are specified to define a particular mission profile, or design reference mission (DRM). Next, medical events and outcomes during the space flight mission are randomly generated based on pre-defined incidence values and probability distributions. Finally, total crew health and mission impact outcomes are summarized. For this report, the primary outcomes of interest are crew health index (CHI), need for evacuation (EVAC) and loss of crew life (LOCL).

The IMM is most useful for comparing risks across multiple mission profiles based on probable events and resource availability. Biased results may be incurred due to limitations of the model, but the bias will be consistent across mission profiles within the same service request.

## Methods

### Crew and Mission Parameters

The DRMs were configured using the crew profiles shown in Table 1. The 32 day crew profile is consistent with that of the previous HSRB DRM from the IMM Service Request (SR) # S-20210429- 437 with the exception of 4 EVAs each by 1 male and 1 female crew members for this request. The outcomes of certain IMM medical conditions are influenced by pre-existing medical history including: coronary artery  calcium score (CAC), dental crowns, contact lenses, and history of prior abdominal surgery. Pre-existing conditions, as defined here, are consistent with historical U.S. crew data.

Table 1: 32 day DRM crew profile

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |

### Prior Abdominal

|  | Sex | Crowns | EVA | CAC |  | Contacts |  |
| --- | ---- | ------- | ---- | ---- | --- | --------- | --- |

Surgery

| Crew 1 | Male | Yes | Yes (4) |  | No | No | No |
| ------- | ------- | ---- | -------- | ---- | --- | ---- | -------------- |
| Crew 2 | Male | No | No | Yes |  | No | No |
| Crew 3 | Female | No | Yes (4) |  | No | Yes | No |
| Crew 4 | Female | No | No |  | No | No | Yes |
|  |  |  |  |  | 2 |  | DECEMBER 2022 |
IMM Service Request Report – Artemis IV S-20221028-451 For this request, the 32 day DRM assumes that the resources from a 7.7 lb. set of medical resources on HLS is combined with a 20 lb. set of medical resources on Orion. This 27.7 lb. constraint on the resources was provided by the customer as a possible weight constraint given the mission parameters and is subject to change. More details on the 27.7 lb. set of resources is provided in the next section.

### Medical Conditions and Resources

The one hundred medical conditions currently included in the IMM are shown in Appendix B.

However, to better approximate Artemis real world system, the set of conditions was modified for this request as described in Appendix C. The incidence of IMM medical events occurring during simulated missions are based on historical mission and cohort data contained within the Integrated Medical Evidence Database (iMED). For each condition the percentage of “best case” and “worst case” scenarios are specified, as well as a defined set of medical resources that are used to treat the condition. The iMED entry for each condition details the specific medical resources and quantity necessary for treatment in both the best and worst-case scenarios. In-flight medical treatment is assumed to follow a specified protocol [5] or clinical practice guidelines for each medical condition and is constrained by resource availability on the ISS.

Model outcomes can be given for the all-treated (continuous resupply, e.g. ISS in low earth orbit), all- untreated (no Medkit) and baseline MedCap (Medkit without resupply). For exploration missions, the MedCap state should most closely resemble a real world deep space mission where resupply is not possible but where utilization of partial and alternative treatment can occur.

For this service request, the 27.7 lb. set of resources used for the 32 day DRM was generated using the IMM 4.1 Optimization module. Although the optimization module can generate sets of resources with some non-integer quantities, all resource quantities were rounded up to the nearest integer to be used by the IMM during succeeding simulations. Therefore, the actual total weight of the resources used may be slightly larger than 27.7 lb.

### Main Outcomes

The IMM primary medical outcomes include the number of total medical events (TME), crew health index (CHI), probability of Evacuation (EVAC), probability of Loss of Crew Life (LOCL), and required resources. 3 DECEMBER 2022

IMM Service Request Report – Artemis IV S-20221028-451 CHI is a calculated percentage using the quality-adjusted mission time lost (QAMTL) due to in-flight medical events and resources available to treat those conditions [2].

CHI = (1- (QAMTL ÷ Mission Length)) x 100 For a given condition, QAMTL is determined by summing the product of functional impairment and duration for all three clinical phases of that condition: i) diagnosis and initial treatment, ii) ongoing treatment, and iii) end-state. CHI percent values range from 0-100, where zero represents complete crew impairment and one hundred represents a completely functional crew.

EVAC in the context of IMM means that medical evacuation from the ISS would be considered for definitive treatment of the afflicted crew member(s). EVAC is considered an end state result if any of the following criteria are met: 1) potential LOCL; 2) potential significant permanent impairment; or 3) potential intractable pain. When EVAC is calculated by the IMM, no consideration has been given to the availability of a return vehicle or the likelihood of a successful clinical outcome should a return vehicle be available. LOCL in the context of IMM should be interpreted to mean that the clinical scenario resulted in death of the affected crew member(s). In version 4.1 of the IMM, the simulation usually assigns each crew member only one end state of EVAC or LOCL. In rare instances a crewmember can get a condition that will go to EVAC or LOCL, and then develop another condition that will also go to EVAC or LOCL in the time between the onset of first condition and the EVAC or LOCL time. Both events are recorded as EVAC or LOCL outcomes. These assumptions should result in more accurate IMM forecasts for the occurrence of EVAC and LOCL as compared to the prior versions of the model. Catastrophic vehicle failures such as the Challenger and Columbia accidents, and MMOD (micrometeorite and orbital debris) are not considered as possible causes of EVAC and LOCL.

Required resources for treatment are tracked for each simulated mission trial. The number of each resource that is used to treat a given condition is decremented from available resources. If more of any particular resource is used than is available, then that resource is considered “depleted” in the MedCap (no resupply) scenario. Events that require a “depleted” resource are considered “partially treated” if only a portion of the required resources are available. If there are sufficient available alternate resources in the MedCap, the event is considered "fully treated." If none of the resources are available to treat the event, the event is considered "untreated." The initial quantities for medical resources are baselined to a 27.7 lb.-constrained set of resources generated for this service request. Note that when an event is partially treated, its outcomes are based on a weighted average of the treated and untreated values. For example, if a condition has a 0% chance of going to EVAC in the best case treated 4 DECEMBER 2022

IMM Service Request Report – Artemis IV S-20221028-451 scenario and a 0-100% chance of going to EVAC in the best case untreated scenario, then under best case partial treatment, it is possible the condition will go to EVAC.

### Modeling Approach

Three hundred thousand (300,000) trials were run for each DRM where each trial can be considered an individual “mission”. This ensures that the distribution of outcomes meet convergence criteria.

Convergence criteria are met when there is less than or equal to a 5% change in the average standard deviation of the CHI, EVAC, and LOCL primary model outcomes in the last 2 - 1,000 mission increments. This last step is performed manually by the modelers using the IMMV4ConvergenceReport. IMM outcomes were determined for the DRMs using the MedCap scenario where all conditions are treated, partially treated or untreated based on the available resources of the MedCap without resupply.

The resources available in iMED correspond to those available on the ISS. The quantities of those resources were determined by the IMM optimization module as described below. The total mass and volume for the optimized set of resources is 12.73 kg (28.06 lbs.) and 35882.58 cubic centimeters respectively. CHI is calculated as a percentage, with 95% confidence intervals (CIs) for the associated distributions. EVAC and LOCL are probabilities, with 95% CI for EVAC and LOCL obtained using bootstrap resampling of the simulation output [3]. In this report, TME, CHI, EVAC and LOCL results are presented. Features, assumptions and limitations pertinent to this report are described in a separate section below.

### Optimization Approach

The optimized medical kit was selected solely to meet the optimization risk criteria within the specified mass and volume constraints for this request. For this request, the end user specified a constraint of 27.7 lbs. (12.57 kg) and no volume constraint for the optimization to maximize CHI. It is important to note that the IMM v4.1 optimization routine used in this request considers resources at the unit resource level. Because of this, some resource quantities in the generated optimized kit have decimal values. Quantities for items in the medical kit must be integer-valued (as most resources cannot be fractionalized), therefore these quantities were rounded up to the nearest integer value. It should also be noted that packaging mass and volume are not considered in the IMM and therefore have no effect on optimization of a medical kit. The optimization routine only considers resources marked as essential in iMED when generating the kit. It also does not consider resource dependencies when generating the kit. In other words, even though a set of resources may be required for treatment in reality, the optimization routine may only include a subset of those resources. The entire set of required resources 5 DECEMBER 2022

IMM Service Request Report – Artemis IV S-20221028-451 is not bundled together. When generating the optimized kit, the quantity of each resource available to add to the kit is determined by the maximum quantity needed during a simulation trial. It is not restricted to the quantity in the ISS medkit. Therefore, it is possible for the generated optimized medical kit to include a higher quantity for a particular resource than is included in the ISS medkit. The results of this optimization should only be used as an evidence-based guide to the development of medical capability and should not be used in isolation to design a medical kit without the input of subject matter expertise and operational experience. Additionally, the mass constraint used in the optimization is an approximation and is not derived by any Program requirement.

Features, Assumptions and Limitations of IMM Version 4.1 [3]

1. All non-space adaption (SA) and non-extravehicular activity (EVA) related conditions have a

uniform likelihood of occurring throughout the mission duration. With the exception of VIIP, Space Adaptation Syndrome conditions occur in the first 5 days of the mission, with a peak occurrence at 48 hours.

2. Individuals cannot get the same condition for which they are currently being treated (i.e. during

Clinical Phase (CP) I and II).

3. EVAC and LOCL are generated for each medical event, and then the timing of the EVAC or LOCL

is generated according to a specified distribution.

4. Individuals are no longer at risk for further conditions once their status changes to either EVAC or

LOCL. From the start time of the EVAC or LOCL, the functional impairment of the crew member is assumed to be 100%.

5. When the status of a crew member changes to EVAC, only one crew member is evacuated.

6. The IMM assumes that, per crew member, the first condition requiring a specific therapy utilizes all

resources required for treating that condition before a second condition has access to those resources.

7. Most medical conditions, with exceptions including acute radiation syndrome (triggered by Solar

Particle Events) and EVA-linked conditions (triggered by EVA events), occur independently of the occurrence of mission events and other medical conditions. Currently there is no correlation or association within or between crew members for most medical conditions.

8. The model assumes another crew member is available to act as caregiver but does not track the

time impact of providing this care.

9. Medical procedures are accurately followed and successful; no mistakes occur in executing medical

procedures.

10. Crew medical skill level and preflight/inflight training is not modeled.

11. All diagnoses are 100% accurate.

12. All pharmaceuticals maintain maximum efficacy.

13. All medical events receive the appropriate treatment.

6 DECEMBER 2022

IMM Service Request Report – Artemis IV S-20221028-451

14. All medical events respond to the treatment as expected terrestrially.

15. All medical equipment is 100% reliable.

16. For each of the medical conditions specified in iMED, all crew members with the same

characteristics (sex, presence of CAC, crowns, contacts, history of abdominal surgery) have the same likelihood distribution of experiencing the condition.

17. All crew members are assumed to have all intrinsic body parts intact (i.e. appendix, gall bladder,

and uterus or prostate, etc.).

18. IMM assumes ISS power, potable water and oxygen resources are always available in unlimited

supply.

19. No Russian medical capabilities aboard the ISS are available to US crew members in this model.

20. Medical capabilities do not include the use of personal crew carry-on items contained in the

Individual Medical Accessories Kit, (IMAK).

21. If a crew member is undergoing treatment for concurrent medical conditions requiring the same

consumable resource, the crew member will only utilize resources at the level required by the condition that requires the most resources.

22. If the primary resource required for treating a medical condition is unavailable, one or more

alternative resources are considered, if appropriate. One example might be using acetaminophen in place of ibuprofen.

23. Total quantities of a consumable medical resource requiring a daily dose will be adjusted if a

dosage schedule runs past the end of the mission.

24. If a solar particle event causes acute radiation sickness in one or more crew members, IMM

assumes the condition begins identically in all affected crew members at the beginning of the solar particle event.

25. The IMM does not decrement non-consumable items and allows all non-consumable items to be

used simultaneously by multiple astronauts (e.g. blood pressure cuff).

### Additional Assumptions and Limitations for This Request

1. The IMM does not consider medical conditions that are specific to Lunar operations in a partial gravity

environment.

2. The IMM is incapable of modeling a ‘mission within a mission’ where the medical capabilities and the

number of crew differ for each. 7 DECEMBER 2022

IMM Service Request Report – Artemis IV S-20221028-451

## Results

The IMM results for TME, CHI, EVAC, and LOCL for the simulated DRMs are presented in the tables below.

Table 2 and Figure 1 show the average number of total medical events (TME) during the mission. Table

1 and Figure 2 show the average crew health index (CHI) during the mission. Table 4 along with Figure 3 and Figure 4 show the probability of EVAC and LOCL during the mission. Table 5 and Figure 5 show the probability of EVAC or LOCL.

Table 2: Average Number of TME for the DRM

TME 95% CI MedCap 22.75 15 31 Fully Treated 22.75 15 31

Figure 1: Average Number of TME for the DRM

### Total Medical Events

23.1 23 22.9 22.8 22.7 22.6 22.5 22.4 22.3

### MedCap Fully Treated

*In untreated scenarios, the probability of EVAC and LOCL will increase. Total medical events will decrease due to crew members being removed from the simulation. 8 DECEMBER 2022

| IMM Service Request Report – Artemis IV |  |  |  |  |  |  |  | S-20221028-451 |
| ---------------------------------------- | --- | --- | --- | --- | --- | --- | --- | --------------- |
Table 3: Average CHI for the DRM

|  |  |  | CHI |  |  | 95% CI |  |  |
| --- | -------------- | --- | ------ | --- | ------ | ------- | ------ | --- |
|  | Med Cap |  | 96.98 |  | 92.22 |  | 98.91 |  |
|  | Fully Treated |  | 96.94 |  | 92.07 |  | 98.94 |  |
Figure 2: Average CHI for the DRM

### Crew Health Index

98.5

98

97.5

97

96.5

96

95.5

95

### MedCap  Fully Treated

Table 4: Probability of EVAC and LOCL for the DRM

|  |  |  | EVAC |  |  |  | LOCL |  |
| --- | --- | ------------ | ----- | ------- | --- | ------------ | ----- | ------- |
|  |  | Probability |  | 95% CI |  | Probability |  | 95% CI |

MedCap  0.00785  0.00753  0.00815  0.00073  0.00064  0.000836 MedCap non-

|  |  | 0.00707 | 0.00678 |  | 0.00738 | 0.00043 | 0.000363 | 0.00051 |
| --- | --- | -------- | -------- | --- | -------- | -------- | --------- | -------- |

environmental MedCap environmental  0.00078  0.00068  0.00089  0.0003  0.000243  0.000363 Fully Treated  0.00369  0.00349  0.00392  0.00044  0.000374  0.000517 Fully Treated non-

|  |  | 0.00319 | 0.00300 |  | 0.00340 | 0.00036 | 0.000292 | 0.000427 |
| --- | --- | -------- | -------- | --- | -------- | -------- | --------- | --------- |

environmental

### Fully Treated

|  |  | 0.0005 | 0.00043 |  | 0.00058 | 0.00008 | 0.00005 | 0.000123 |
| --- | --- | ------- | -------- | --- | -------- | -------- | -------- | --------- |

environmental

|  |  |  |  |  | 9 |  |  | DECEMBER 2022 |
| --- | --- | --- | --- | --- | --- | --- | --- | -------------- |
IMM Service Request Report – Artemis IV S-20221028-451

Figure 3: Probability of EVAC for the DRM

### EVAC Probability

0.009 0.008 0.007 0.006 0.005 0.004 0.003 0.002 0.001 0

### MedCap Fully Treated

### Non Environmental Environmental

Figure 4: Probability of LOCL for the DRM

### LOCL Probability

0.0008 0.0007 0.0006 0.0005 0.0004 0.0003 0.0002 0.0001 0

### MedCap Fully Treated

### Non Enviromental Environmental

10 DECEMBER 2022

| IMM Service Request Report – Artemis IV |  |  |  | S-20221028-451 |  |
| ---------------------------------------- | --- | --- | --- | --------------- | --- |
Table 5: Probability of EVAC or LOCL

|  |  |  | EVAC or LOCL |  |  |
| --- | --- | ------------ | ------------- | -------- | --- |
|  |  | Probability | 95% CI |  |  |
|  |  | 0.00809 | 0.00778 | 0.00842 |  |

MedCap MedCap non-

|  |  | 0.00718 | 0.00689 | 0.00750 |  |
| --- | --- | -------- | -------- | -------- | --- |

environmental MedCap

|  |  | 0.00091 | 0.00082 | 0.00103 |  |
| --- | --- | -------- | -------- | -------- | --- |

environmental

|  | Fully Treated | 0.00379 | 0.00358 | 0.00402 |  |
| --- | -------------- | -------- | -------- | -------- | --- |

### Fully Treated

|  |  | 0.00325 | 0.00306 | 0.00346 |  |
| --- | --- | -------- | -------- | -------- | --- |

non- environmental

|  | Fully Treated | 0.00054 | 0.00047 | 0.00062 |  |
| --- | -------------- | -------- | -------- | -------- | --- |

environmental

Figure 5: Probability of EVAC or LOCL

|  |  | EVAC or LOCL Probability |  |  |  |
| --- | --- | ------------------------- | --- | --- | --- |
0.009

0.008

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |

0.007

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |

0.006

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |

0.005

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |

0.004

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 0.003 |  |  |  |  |  |
| -------- | --- | --- | --- | --- | --- |

0.002

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |

0.001

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |

0

### MedCap  Fully Treated

|  |  | Non Environmental | Environmental |  |  |
| --- | --- | ------------------ | -------------- | --- | --- |
## Discussion

There is not a significant difference in Total Medical Events (TME) between the MedCap and Fully Treated scenarios. There is a decrease in TME with the untreated scenario which is to be expected due to the untreated scenario having a higher probability of EVAC and LOCL, which leads to removal of crew from the mission. There is not a significant difference in Crew Health Index (CHI) between the MedCap and Fully Treated scenarios.

This indicates that the optimized kit was sufficient in maintaining CHI. There is a significant increase in the probability of EVAC and LOCL in the MedCap scenario

|  |  |  | 11 |  | DECEMBER 2022 |
| --- | --- | --- | --- | --- | -------------- |
IMM Service Request Report – Artemis IV S-20221028-451 compared to the fully treated scenario. This is a result of optimization of the medical kit to maximize CHI and the inability to fully treat all medical events in MedCap scenarios given the mass and volume constraints of the resource allocation. In the MedCap scenario, the influential conditions for EVAC and LOCL are driven by partial treated scenarios.

## References

1. Integrated Medical Model Project. Integrated Medical Model Operations Plan. JSC-66114. 2011.

Houston, TX, NASA, Johnson Space Center. Ref Type: Report

2. Integrated Medical Model Project. Integrated Medical Model Software Requirements Specification.

IMM-SFTWR-008. 2017. Houston, Texas, KBRwyle Integrated Science, Technology and Engineering. Ref Type: Report

3. Integrated Medical Model Project. Integrated Medical Model version 4 Assumptions and Limitations.

IMM-GEN-300. 2017. Houston, Texas, KBRwyle Integrated Science and Engineering Space Medicine Information Technology. Ref Type: Report

4. NASA-STD-7009: Standard for Models and Simulations (2008). NASA: Washington, DC.

5. ISS Medical Checklist (Med CL), 04 June 2014, NASA Johnson Space Center, Medical Operations

Group

6. ISS PRA Model v.3.2.0. ISS PRA Fire and Ammonia Model Contributions to the Integrated Medical

Model. 2015. Houston, Texas, NASA Johnson Space Center. Ref Type: Report 12 DECEMBER 2022

| IMM Service Request Report – Artemis IV |  |  |  |  |  | S-20221028-451 |  |
| ---------------------------------------- | --- | --- | --- | --- | --- | --------------- | --- |

## Appendix A: IMM Status at Time of Service Request Report

| Validation status for |  |  |  |  |  |  |  |
| ---------------------- | --- | --- | --- | --- | --- | --- | --- |

IMM IMM V&V Matrix: The following bar chart shows the IMM v4.1 MATLAB status of IMM validation for each IMM element listed.

- Compliance with  IMM Compliance Matrix: The IMM has no waivers to any of the requirements in the NASA-Standard-7009 for Models and Simulations (6);

NASA-Standard-7009  however there are certain requirements that are not applicable to the IMM and other requirements where IMM compliance has not yet been

| requirements | fully attained. |  |  |  |  |  |  |
| ------------- | ---------------- | ----------- | ------------------------ | --- | ----------------- | --- | --- |
|  |  | Compliant | Compliance Incomplete |  | Not applicable |  |  |
|  |  | 36 |  | 5 | 5 |  |  |
- Current NASA-  IMM Credibility Matrix: The following table shows the overall IMM v4.1 MATLAB credibility assessment score (CAS), individual factor CAS,

Standard-7009  customer-specified sufficiency thresholds, and weighted scores. Legend depicts CAS score designated range and color assignments from

| credibility assessment | NASA-Standard-7009. |  |  |  |  |  |  |
| ----------------------- | -------------------- | --- | --- | --- | --- | --- | --- |

score      Factor    Sufficiency    Factor    Weighted    Overall Score

|  |  |  |  | Thresholds | Score | Scores |  |
| --- | --- | --- | --- | ----------- | ------ | ------- | --- |
|  |  |  | Verification | 4 | 3.7 | 0.28 |  |
| --- | --- | --- | ------------- | ---- | ------ | ------- | --- |
|  |  |  | Validation | 3 | 3 | 0.45 |  |
|  |  |  |  |  |  |  |  |
| --- | --- | ---------------------- | ------------ | ---- | ---- | ------- | ------- |
|  |  | Input Pedigree |  | 3 | 3 | 0.53 |  |
|  |  | Results Uncertainty |  | 3 | 3 | 0.60 | 3.06 |
|  |  | Results Robustness |  | 3 | 3 | 0.45 |  |
|  |  |  | Use History | 3 | 3 | 0.45 |  |
|  |  | M&S Management |  | 2 | 2 | 0.10 |  |
| --- | --- | ----------------------- | --- | ---- | ---- | ------- | --- |
|  |  | People Qualification |  | 4 | 4 | 0.20 |  |
|  |  |  |  |  |  |  |  |
| Additional verification | None |  |  |  |  |  |  |
| ------------------------ | ----- | --- | --- | --- | --- | --- | --- |

and validation information applicable to this analysis

| Integrated Medical | iMED Lockdown IDs: (79), created on (11/30/2022) |  |  |  |  |  |  |
| ------------------- | ------------------------------------------------- | --- | --- | --- | --- | --- | --- |

### Evidence Database

(iMED) code version and date accessed IMM version and code  Data analysis for this report was generated using IMM v4.1 with release 2016a of MATLAB software. MATLAB and all other MathWorks product version  or service names are registered trademarks or trademarks of MathWorks, Natick, MA, USA.

| Modifications made to | None |  |  |  |  |  |  |
| ---------------------- | ----- | --- | --- | --- | --- | --- | --- |

the code for analysis

|  |  |  | 13 |  |  |  | DECEMBER 2022 |
| --- | --- | --- | --- | --- | --- | --- | -------------- |
| IMM Service Request Report – Artemis IV | S-20221028-451 |  |
| ---------------------------------------- | --------------- | --- |

## Appendix B: Medical Conditions in iMED by Category (iMED_20170221)

| ENVIRONMENTAL | MEDICAL ILLNESS (continued) |  |
| ------------------------- | ---------------------------- | --- |
| Acute Radiation Syndrome | Anxiety |  |
| Altitude Sickness | Appendicitis |  |

Barotrauma (ear/sinus block)  Atrial Fibrillation/Atrial Flutter

| Burns secondary to Fire | Back Pain (space adaptation) |  |
| ------------------------ | ----------------------------- | --- |

### Decompression Sickness Secondary to EVA  Behavioral Emergency

### Eye Chemical Burn  Cardiogenic Shock Secondary to Myocardial

infarction Headache (CO induced) 2  Choking/Obstructed Airway

| Smoke Inhalation | Constipation (space adaptation) |  |
| ----------------------------------------- | -------------------------------------- | --- |
| Toxic Exposure: Ammonia | Dental: Exposed Pulp |  |
| INJURY/TRAUMA | Dental Caries |  |
| Abdominal Injury | Dental: Abscess |  |
| Acute Compartment Syndrome | Dental: Crown Loss |  |
| Ankle Sprain/Strain | Dental: Filling Loss |  |
| Back Sprain/Strain | Depression |  |
| Chest Injury | Diarrhea |  |
| Dental: Avulsion (tooth loss) | Eye Corneal Ulcer |  |
| Elbow Dislocation | Eye Infection |  |
| Elbow Sprain/Strain | Gastroenteritis |  |
| Eye Irritation/Abrasion | Headache (Late) |  |
| Eye Penetration (foreign body) | Headache (space adaptation) |  |
| Finger Dislocation | Hearing Loss |  |
| Fingernail Delamination Secondary to EVA | Hemorrhoids |  |
| Head Injury | Herpes Zoster Reactivation (shingles) |  |
| Hip Sprain/Strain | Hypertension |  |
| Hip/Proximal Femur Fracture | Indigestion |  |
| Knee Sprain/Strain | Influenza |  |

Lower Extremity Stress Fracture  Insomnia (space adaptation)

| Lumbar Spine Fracture | Medication Overdose/Adverse Reaction |  |
| ------------------------------ | ------------------------------------- | --- |
| Neck Sprain/Strain | Mouth Ulcer |  |
| Neurogenic Shock | Nasal Congestion (space adaptation) |  |
| Paresthesias Secondary to EVA | Nephrolithiasis |  |
| Shoulder Dislocation | Nose bleed (space adaptation) |  |
| Shoulder Sprain/Strain | Otitis Externa |  |
| Skin Abrasion | Otitis Media |  |
| Skin Laceration | Pharyngitis |  |
| Traumatic Hypovolemic Shock | Respiratory Infection |  |
| Wrist Fracture | Retinal Detachment |  |
| Wrist Sprain/Strain | Seizures |  |
| MEDICAL ILLNESS | Sepsis |  |
| Abdominal Wall Hernia | Skin Infection |  |
| Abnormal Uterine Bleeding | Skin Rash |  |
| Acute Angle-Closure Glaucoma | Sleep Disorder |  |
| Acute Arthritis | Small Bowel Obstruction |  |

Acute Cholecystitis/Biliary Colic  Space Motion Sickness (space adaptation)

| Acute Diverticulitis | Stroke (Cerebrovascular Accident) |  |
| --------------------- | -------------------------------------- | --- |
| Acute Pancreatitis | Sudden Cardiac Arrest |  |
| Acute Prostatitis | Urinary Incontinence (space adaption) |  |
| Acute Sinusitis | Urinary Retention (space adaptation) |  |

Allergic Reaction (mild to moderate)  Urinary Tract Infection

| Anaphylaxis | Vaginal Yeast Infection |  |
| ------------ | ------------------------ | --- |

### Angina/Myocardial Infarction  Visual Impairment and Increased Intracranial

Pressure (VIIP) (space adaptation)

|  | 14 | DECEMBER 2022 |
| --- | --- | -------------- |
IMM Service Request Report – Artemis IV S-20221028-451

## Appendix C: Medical Conditions Modified for the 32 Day DRM

Due to limited vehicle size consisting of a single module and limited movement of crew the following major traumatic injury conditions are judged highly unlikely to occur outside EVA windows during a 32 day DRM. These conditions will only be activated during EVA timeframes (6hr periods) and only for EVA crewmembers:

- Abdominal Injury

- Acute Compartment Syndrome

- Chest Injury

- Elbow Dislocation

- Head Injury

- Hip/Proximal Femur Fracture

- Lower Extremity (LE) Stress Fracture

- Lumbar Spine Fracture

- Shoulder Dislocation

- Neurogenic Shock

- Traumatic Hypovolemic Shock

15 DECEMBER 2022

---

## Source metadata

```yaml
source_filename: "risk-assessment-for-artemis-32-day-design-reference-missions-drm.pdf"
source_folder: "Mission Risk Reports/Lunar Orbit and Surface and Low Earth Orbit"
source_url: "https://drive.google.com/file/d/1dHYp764Q-oS8eGkDkYcrPhmm1F_2MdQn/view"
source_drive_id: "1dHYp764Q-oS8eGkDkYcrPhmm1F_2MdQn"
source_sha256: 0a24db5ca0281c9fb2afb30f8691bf89297572e89dc77c0e30eaa0815ba93754
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 15
ocr_performed: false
```
