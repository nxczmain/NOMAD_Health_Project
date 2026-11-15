# HRP 48033 Exmc CDSS ConOps

[View original PDF](https://drive.google.com/file/d/1QvZQOJjwnfalk4IAXNzz2g61Yt_aNFEq/view) · **35 pages**

**Collection:** specific situations/Medical Operations and Decision Support

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [TABLE OF CONTENTS](#table-of-contents)
- [SYMPTOMS](#symptoms)
- [DIAGNOSIS](#diagnosis)
- [TREATMENT](#treatment)

---

HRP-48033

### Exploration Medical Capability

### Clinical Decision Support System Concept of

Operations Verify this is the correct version before use https://hrp.sp.jsc.nasa.gov/HRP%20Pages/HRP%20Document%20Management%20System.aspx March 2021 Baseline

### National Aeronautics and Space Administration

Lyndon B. Johnson Space Center Houston, Texas i

HRP-48033

### Exploration Medical Capability

### Clinical Decision Support Concept of Operations

Submitted By:

| /Signature on file/ |  |  |
| ------------------------ | ----- | --- |
| Michael Krihak | Date |  |
| Senior Project Engineer |  |  |

### Exploration Medical Capability

| /Signature on file/ |  |  |
| --------------------------- | ----- | --- |
| Brian Russell | Date |  |
| Senior Biomedical Engineer |  |  |

### Exploration Medical Capability

| /Signature on file/ |  |  |
| ---------------------- | ----- | --- |
| Sandeep Shetye | Date |  |
| Data Systems Lead |  |  |

### Exploration Medical Capability

| /Signature on file/ |  |  |
| -------------------- | ----- | --- |
| Tianna L. Shaw | Date |  |
| Project Manager |  |  |

### Exploration Medical Capability

Approved By:

| /Signature on file/ |  |  |
| -------------------- | --- | --- |

### Nancy Fleming

Date Manager

### Exploration Medical Capability

| /Signature on file/ |  |  |
| ---------------------- | --- | --- |

Kris Lehnhardt, MD Date Scientist

| Exploration Medical Capability |  |  |
| ------------------------------- | --- | --- |
ii

HRP-48033

|  |  | DOCUMENT CHANGE/ |  |  |
| --- | --- | ----------------- | --- | --- |

PAGE  1  OF  1

### REVISION LOG

Change/

|  | Date |  | Description of Change | Pages Affected |
| --- | ----- | --- | ---------------------- | --------------- |

Revision

| Baseline | 03/31/2021 |  |  | All |
| --------- | ----------- | --- | --- | ---- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

iii

HRP-48033

## TABLE OF CONTENTS

### Section Page

1 INTRODUCTION ............................................................................................................................................. 1 1.1 Purpose ....................................................................................................................................................... 1 1.2 Scope .......................................................................................................................................................... 2 1.3 Responsibility and Change Authority ......................................................................................................... 2 2 DOCUMENTS ................................................................................................................................................... 1 2.1 Reference Documents ................................................................................................................................. 1 3 STAKEHOLDER NEEDS ................................................................................................................................ 2 4 CLINICAL DECISION SUPPORT SYSTEM ............................................................................................... 2 4.1 System Goals and Medical Level of Care .................................................................................................. 2 4.2 CDSS Overview ......................................................................................................................................... 3 4.3 CDSS Context ............................................................................................................................................ 4 4.4 Assumptions ............................................................................................................................................... 5 4.5 Constraints .................................................................................................................................................. 6 5 CLINICAL DECISION SUPPORT SYSTEM SCENARIOS ....................................................................... 7 5.1 Personalized Nutrition Scenarios (LevCareV) ........................................................................................... 7 5.1.1 Context ................................................................................................................................................... 7 5.1.2 Narratives ............................................................................................................................................... 8 5.1.3 Highlighted Functionality ...................................................................................................................... 9 5.1.4 Assumptions ......................................................................................................................................... 10 5.2 Kidney Stone Prediction Scenario (LevCareV) ........................................................................................ 10 5.2.1 Context ................................................................................................................................................. 10 5.2.2 Narrative ............................................................................................................................................... 10 5.2.3 Highlighted Functionality .................................................................................................................... 13 5.2.4 Assumptions ......................................................................................................................................... 14 5.3 Data Input Correction During a Cognitively Rigorous Task Scenario (LevCareIV) ................................ 14 5.3.1 Context ................................................................................................................................................. 14 5.3.2 Narrative ............................................................................................................................................... 15 5.3.3 Highlighted Functionality .................................................................................................................... 16 5.3.4 Assumptions ......................................................................................................................................... 17 5.4 Cabin Atmosphere Problem Identification Scenario (LevCareV) ............................................................ 17 5.4.1 Context ................................................................................................................................................. 17 5.4.2 Narrative ............................................................................................................................................... 17 5.4.3 Highlighted Functionality .................................................................................................................... 18 5.4.4 Assumptions ......................................................................................................................................... 18 5.5 Bone Health Scenario (LevCareIV, LevCareV) ....................................................................................... 19 5.5.1 Context ................................................................................................................................................. 19 5.5.2 Narrative ............................................................................................................................................... 19 5.5.3 Highlighted Functionality .................................................................................................................... 20 5.5.4 Assumptions ......................................................................................................................................... 20 5.6 Emergent Scenario (LevCareIV, LevCareV) ............................................................................................ 20 5.6.1 Context ................................................................................................................................................. 20 5.6.2 Narrative ............................................................................................................................................... 21 5.6.3 Highlighted Functionality .................................................................................................................... 24 5.6.4 Assumptions ......................................................................................................................................... 25 6 INTERFACES ................................................................................................................................................. 25 6.1 Internal Interfaces ..................................................................................................................................... 25 6.2 External Interfaces .................................................................................................................................... 26

- APPENDIX A: ACRONYMS AND ABBREVIATIONS .................................................................................. 28

iv

HRP-48033

### LIST OF TABLES

### TABLE Page

Table 1 Reference documents................................................................................................................................... 1

Table 2 Identified roles in CDSS scenarios .............................................................................................................. 7

### LIST OF FIGURES

### FIGURE Page

Figure 1 ExMC CDSS Logical Architecture: Layered Functional View....................................................................... 3

Figure 2 Notional Architectural View of the CHP system ........................................................................................... 4

v

HRP-48033 1 INTRODUCTION The Clinical Decision Support (CDS) project supports the Exploration Medical Capability (ExMC) Element of the Human Research Program (HRP). Specifically, the CDS project addresses the ExMC gap, Medical-701: Enhance medical capabilities within an exploration medical system. For long-duration, deep space missions, computational and data resources will play an important role in maintaining crew health, wellness and performance where the crew will need to be more self-reliant as we enter a new era in space exploration to return to the moon and explore Mars. These ambitious goals will require significant change in in-flight medical care due to constraints on mass, volume, power, crew time, skills reduction over time and medical evacuation capabilities. These constraints make it absolutely necessary to develop transformative solutions using new technologies. Unlike the current paradigm for crew health in low-Earth orbit missions that rely on constant communication with Mission Control, the deep space missions will experience communication delays and possibly, no communications for finite periods of time. Hence, crew health management will benefit from analytics’ capabilities to augment decision support. A comprehensive, multi-functional on-board clinical decision support system (CDSS) will help crews assess and diagnose conditions, decide appropriate responses, and guide the provision of tailored and evidence-based treatments, while reflecting contextual factors and constraints. The context may include present and historical data, viable diagnostic equipment, available supplies and medications, and vehicle and environmental health. Communication time with ground-based personnel is delayed or non-existent during significant portions of the mission so the crew will need to autonomously respond to health, performance and medical situations, particularly those that are unplanned. The CDSS must also provide additional capabilities as complex as training for an emergency situation while augmenting non-expert practitioner skillsets if the Crew Medical Officer (CMO) is incapacitated, and as routine as facilitating delayed communication with flight surgeons on the ground. The CDSS must connect complex issues involving health, wellness, task performance and environmental domains. Furthermore, CDSS functionality will focus on semi-autonomous and autonomous decision-making by the crew that is necessary to address challenges in executing a self-contained medical system that enables health care without assistance from ground clinical experts. The document, ExMC CDSS Architecture Recommendation, (HRP- 48032) establishes a description of the envisioned CDSS architecture.

The analytics, descriptive or advanced, contained in a CDSS will interface with the integrated crew health and performance architecture that provides the appropriate data sets. The aim of the CDS project is to develop requirements for a CDSS through a series of test-bed prototype developments and demonstrations.

### 1.1 Purpose

The purpose of this document is to describe the concept of operations (ConOps) for the CDS project. The intent is to identify system characteristics from a system user’s point of view. This information will stimulate requirement development and provide the foundation for a future CDSS. Furthermore, this ConOps document is intended to guide development of the CDSS functional requirements for medical Level of Care (LevCare) IV and medical LevCareV as stated in NASA-STD-3001, Vol. 1 and Vol. 2, and NASA/TM-2017-219290 (Interpretation of NASA- 1

HRP-48033 STD-3001 Levels of Care for Exploration Medical System Development). The CDS project will provide an iterative development of stand-alone CDS project prototypes that build on and extend the scaffold developed in previous years. The prototypes will demonstrate and evaluate CDSS concepts, based on this ConOps, that lead to developing functional requirements for a CDSS.

The prototype development informs System Modeling Language (SysML) models for medical decision-making and related human health and performance, which allows for more informed trade decisions to be concluded in the final operational system.

### 1.2 Scope

The scope of this document is to address operational scenarios and concepts associated with a CDSS for the Crew Health and Performance (CHP) system. This ConOps is not intended to be a design document describing how to create and develop a CDSS. Rather, the intent is to provide medical scenarios that demonstrate operational exemplars where a CDSS may be applied. This ConOps is a primary source for identifying the functionality of a CDSS, from which functional requirements will be derived. These scenarios are not an exhaustive list but will illustrate examples that will exercise the various components of a CDSS.

### 1.3 Responsibility and Change Authority

This document is under Configuration Management control of the ExMC Control Board (CB).

Changes to this document will result in the issuance of change pages or a full re-issue of the document. 2

HRP-48033 2 DOCUMENTS

### 2.1 Reference Documents

The following documents contain supplemental information to guide the user in the application of this document. These reference documents may or may not be specifically cited within the text of the document. TABLE 1 REFERENCE DOCUMENTS

### Document Number Revision/ Document Title

### Release Date

NASA-STD-3001, Vol 1 Rev A/ Feb 2015 NASA-STD-3001, Vol 1, Space Flight Human-

- System Standard: Crew Health

NASA-STD-3001, Vol 2 Rev A/ Feb 2015 Space Flight Human-System Standard: Human Factors, Habitability, and Environmental Health

### HRP-48012 Recommendation for a Medical System Concept of

### Operations for Gateway Missions

### HRP-48013 Recommendation for a Human Systems Integration

### Concept of Operations for Gateway Missions

### NASA/TM-2017-219290 of NASA-STD-3001 Levels of Care for

### Exploration Medical System Development

### HRP-47065 Human Research Program Integrated Research

Plan

### JSC-67070 Pre-baseline Medical System Concept of Operations for Mars

Exploration Mission-11 (pre-Baseline)

Draft/Oct 2018 Crew Health and Performance System Concept of Operations for Gateway Missions (Level IV)

Preliminary Medical Simulations v4a (includes High Bandwidth

### Worst Communication Scenarios)

HRP-48032 - Exploration Medical Capability Clinical Decision

### Support System Architecture Recommendation

### NASA TM-2019-220299 Development of an Accepted Medical Condition List

(AMCL) for Exploration Medical Capability Scoping (AMCL for Cis Lunar and Mars Transit DRMs)

- Element Scientist Gap Amnesty Content Updates: Risk of Inflight

Working Group (May 21, Medical Conditions 2020) 1

HRP-48033 3 STAKEHOLDER NEEDS The sole stakeholder for this project-level ConOps is the HRP ExMC Element. This ConOps also supports the main CDS project goal, which is the delivery of recommended CHP CDSS functional requirements to the ExMC Element. In addition, the CDS project addresses the ExMC gap Medical-701 within the Inflight Medical Conditions risk: Enhance medical capabilities within an exploration medical system. 4 CLINICAL DECISION SUPPORT SYSTEM

### 4.1 System Goals and Medical Level of Care

The CDS project seeks to develop and implement prototypes to inform and develop medical system requirements for medical LevCareIV and LevCareV. The CDS concepts must provide the functionality suggested by the scenarios in the ConOps recommendation documentation for a medical system (HRP-48012) and human systems integration (HRP-48013).

In addition, the CDSS needs to address the definitions identified by the Interpretation of NASA- STD-3001 Levels of Care for Exploration Medical System Development (NASA/TM-2017- 219290). Definitions of capabilities suggest that CDSS functionality could be realized in medical LevCareIII. For instance, sustainable advanced life support and limited surgical capabilities are included as part of the definition: Resources to support medical decision-making using data obtained from telemedicine, limited physical exam, vital signs, and clinical diagnostics. When considering the assumptions of minimal delay in communications with the ground and no medical doctor as a crew member, resources to support medical decision making could include trending of medical data, notifications (e.g. vital sign outside a normal range, pharmaceutical is in low supply), guided medical care, search, and other basic data calculations (e.g. averaging) and reporting based on descriptive analytics.

Progressing to medical LevCareIV, the definitions for sustainable advanced life support and limited surgical capabilities are defined as ‘Resources to support medical decision-making using data obtained from on-board & telemedicine, limited physical exam, vital signs, clinical diagnostics, and medical imaging modality(s).’ The aforementioned LevCareIII CDSS functionalities would be expanded for more sophisticated Descriptive Analytics and initial Advanced Analytics in LevCareIV to include electrocardiogram (ECG) wave analysis, emergency training, trending vital signs, and guided medical procedure workflows, for example.

However, the imaging is defined as ‘an aid in making a medical diagnosis in a time-independent fashion based on images obtained,’ which seems to imply images will be sent to Ground for analysis. Medical LevCareIV is anticipated for lunar/planetary missions greater than 30 days but equal to or less than 210 days, as well as missions in LEO greater than 30 days. (NASA STD 3001 section 4.1.5.4) For medical LevCareV, the capabilities and definitions maintain ‘Autonomous’ in their description indicating that the crew will have some level of autonomy when there are time dependent decisions to be made on Autonomous Basic Medical Care. More sophisticated Advanced Analytics may be envisioned such as image analysis and interpretation, additional training and guided medical procedure workflows and incorporation of other vehicle data in conjunction with medical models to provide additional insights on a crew member’s condition.

These CDSS algorithms will involve more complexity using Artificial Intelligence tools such as 2

HRP-48033

deep machine learning.  Furthermore, medical LevCareIV and LevCareV will have the ability to incorporate emerging computational technologies (e.g. edge computing), advanced software and potentially, support forward thinking concepts such as remote sensing and pervasive monitoring.

### 4.2  CDSS Overview

The CDSS logical architecture is provided in Figure 1.  The CDSS relies on a data layer that includes sources such as medical images, clinical notes, health records and sensor data among others.  This data layer is the beginning of a data pipeline and produces data that is ingested by the data management layer.  During the data ingestion process, the data may be cleansed (e.g. normalized, associated to common labels, checked for errors), transformed and conformed into a database.  The second process is data preparation where the data are further refined, enriched and orchestrated into a knowledge base.  In addition, the data preparation step may include other processes such as feature extraction and association with truth labels to facilitate retraining. Data management will be performed near real time based on available computational resources.

However, some tasks may be scheduled such as retraining machine learning models. The data management layer extracts, standardizes and integrates data with the decision support layer.  In the CDSS, the decision support layer introduces the modularity for maintaining analytical capabilities separate from the other layers and components in the system.  Functions such as analytical modeling, statistical analysis, and consolidation of clinical decisions are derived from knowledge and translated into actions.  Other analytical toolsets such as machine learning, anomaly detection, regression analysis, predictive and prescriptive analytics may also be implemented in this layer.  In addition, the CDSS architecture must satisfy the compatibility, interoperability and scalability objectives for implementing such a system in the future, where new technologies and computational capabilities will become available.

### IntegratedData Architecture

Clinical Decision Support (CDS)

| Data Layer |  | Data Management Layer |  |  | Decision Support Layer |  |
| ---------- | --- | --------------------- | --- | --- | ----------------------- | --- |

### Knowledge Base

|  | Data | Data Preparation |  |  | Working |  |
| --------------------------- | --------- | ---------------- | --------- | ---------- | -------- | ------------- |
| Pa tie n t  R e c o r d s, |  |  |  |  |  | Rules Process |
|  | Ingestion | Cleansing Enrich | Transform | Knowledge | Memory |  |

m e d ic a l  a n d

| health records |  | Conform Integrate | Refine | Extraction |  |  |
| -------------- | --- | ----------------- | ------ | ---------- | --- | --- |

### Inference Engine

Search &

| Wearable |  |  |  | Query | Workflow | Rules  Engine |
| --------- | --- | --- | --- | ----- | -------- | ------------- |

Sensors

|  |  | Storage |  | Data |  |  |
| ---------------- | -------------- | --------------- | -------- | ------- | ---------------------------- | --- |
|  |  |  |  | Mining | Artificial Intelligence (AI) |  |
|  |  |  |  |  | Reasoning Machine | ANN |
| Labs, images, |  |  |  |  | Learning |  |
| clinical results |  | Data Governance |  |  |  |  |
|  | Data Lifecycle | Data Lineage |  |  | User Interface Layer |  |
|  |  |  | Security | Privacy |  |  |

Real-time

| Other Medical |  |  | Access Control |  |  |  |
| -------------- | --- | --- | -------------- | --- | --- | --- |

Applications Tagging Links Data Standards Visualization monitoring CDSS GUI dashboard IT Infrastructure (Cloud, Edge Computing, etc.)

FIGURE 1 EXMC CDSS LOGICAL ARCHITECTURE: LAYERED FUNCTIONAL VIEW

3

HRP-48033

### 4.3  CDSS Context

The CDSS encompasses the Integrated Data System of the CHP System depicted in Figure 2.  In addition to Descriptive and Advanced Analytics, the CDSS includes the interfaces to the other systems within the CHP system and non-CHP systems to optimize the overall crew health and performance.  The integrated data system is anticipated to capable of gathering data from heterogeneous sources and contexts such as an EHR, wearable and non-wearable devices, labs, clinical results, images, habitat environment, medical references, nutrition, etc. and other data from the vehicle and non-CHP systems.  These data sources include both medical and non- medical sources collected during medical and non-medical sessions that produce clinically relevant data.  These data are then collected, processed and stored via a data management layer within the Integrated Data System that may also be utilized by the CDSS.

|  |  | C r e w  H | e a lt h  a n d  P | e r f o r m a n c e | S y s t e m |
| --- | --- | ---------- | ------------------ | ------------------- | ------------ |

M e d ic a l S y s te m T e s t b e d  a n d  R e s e a r c h  S y s te m T a s k  P e r fo r m a n c e  S u p p o r t S y s te m

| C lin ic | a l C a re |  | R e s | e a rc h |  |
| -------- | ---------- | --- | ----- | -------- | --- |

C re w  In te rfa c e s

| Im | a g in g |  | T e stb | e d |  |
| --- | -------- | --- | ------- | --- | --- |

T a s k  M a n a g e m e n t

| L a b o ra to ry | M a n a g e m | e n t |  |  |  |
| ---------------- | -------------- | ----- | --- | --- | --- |

T ra in in g

| P h a rm a c y  M | a n a g e m | e n t |  |  |  |
| ----------------- | --------------- | ----- | ------------------ | ---------------- | --- |
|  |  |  | In te g ra te d  D | a ta  S y s te m |  |
| M a in te n a | n c e  S y s te | m |  |  |  |

W e lln e s s  S y s te m

|  |  |  | D a ta  U s e | r In te rfa c e |  |
| --- | --- | --- | ------------- | --------------- | --- |

B e h a v io ra l H e a lth  M a n a g e m e n t

|  |  |  | D a ta  S o u rc | e  In te rfa c e s |  |
| --- | --- | --- | ---------------- | ------------------ | --- |

E n v ir o n m e n ta l M o n ito r in g   N u tritio n  M a n a g e m e n t

|  |  |  | D a ta  S | to ra g e |  |
| ----- | ---- | --- | --------- | --------- | --- |
| S y s | te m |  |  |  |  |

P h y s io lo g ic a l H e a lth  M g t.

|  |  |  | D e s c rip tiv | e  A n a ly tic s |  |
| ----------------- | ------------ | ----- | --------------- | ----------------- | --- |
| A c o u stic  E n | v. M o n ito | rin g |  |  |  |

S le e p  M a n a g e m e n t

| In te rn a l A tm | . M o n ito | rin g | A d v a n c e | d  A n a ly tic s |  |
| ------------------------ | ----------- | --------- | ------------- | ----------------- | --- |
| m ic ro -g /A c c e l. E | n v. M o n | ito rin g |  |  |  |

E x t ra v e h ic u la r  A c t iv it y

| M ic ro b ia l E | n v. M o n ito | rin g |  |  |  |
| ---------------- | -------------- | ----- | --- | --- | --- |

S u p p o r t  S y s te m E V A  C re w  H e a lth  S u p p o rt

| R a d ia tio n  E | n v. M o n ito | rin g |  |  |  |
| ----------------- | -------------- | ----- | --- | --- | --- |

E V A  P e rfo rm a n c e  S u p p o rt

| T o x ic o lo g ic a l E | n v. M o n ito | rin g |  |  |  |
| ------------------------ | -------------- | ----- | ------------------- | ------------------ | --- |
|  |  | V | e h ic le / N o n - | C H P  S y s t e m | s |
FIGURE 2  NOTIONAL ARCHITECTURAL VIEW OF THE CHP SYSTEM

Consequently, the CDSS is a highly interactive component within the CHP Data System and externally, with the user. The interactive approach of the CDSS is a result of all human data influencing all human domains.  Using both descriptive and advanced analytics, medical conditions can be managed, and enhanced crew health and performance may be achieved by providing a reduced workload through the automation of workflow, early intervention for degradations in health or performance, and an automated evaluation of resources will enable a crew that operates at peak performance for the conditions and has actionable insight to medically 4

HRP-48033 relevant decision-making. Future technologies such as pervasive monitoring may be enabled along with automated support for crew health such as prediction and risk management that regularly operates in the background. Hence, the CDSS will enable analytics for reporting, searching, data mining, machine learning and deep learning, among others, that enhance the performance of a CHP system and enable autonomy for a self-reliant crew during space exploration missions. The CDSS is a critical component of a data pipeline that enables the movement of raw data from various data sources to a resting location for use by analytics and visualization tools. The two types of analyses that are performed may be generalized as descriptive and advanced analytics.

Descriptive analytics is the first stage of data analysis that creates a summary of historical data to yield useful information and possibly prepare the data for further analysis. In short, descriptive analytics conveys what has happened based on analysis of the past data. Descriptive analytics are useful to learn from past behaviors and understand how future outcomes might be influenced.

Descriptive analytics provides in-flight capabilities for data visualization of what has happened, simple analyses, knowledge extraction, dashboards and reports. Advanced analytics is the set of techniques used to discover intricate relationships, recognize complex patterns or predict current trends in data. Advanced analytics is commonly further classified as descriptive, diagnostic, predictive and prescriptive analytics. In short, advanced analytics provides insight to understanding what happened, why an event happened, what can happen based on the history and patterns, and what can be done to influence an outcome. Examples of in-flight advanced analytics capabilities include alerts, image analysis, risk assessment and advanced decision support system functionality.

### 4.4 Assumptions

A CDSS for space flight is based on the assumption that long-duration exploration missions beyond Lunar proximity will not occur for at least a decade. Such a system must be based on software and hardware technologies, many of which will change in the next decade as technology and tools advance. In addition, with specific Design Reference Missions (DRMs) still to be developed (e.g. a Mars mission) some functionality may not be fully understood nor realized in CDS project development activities.

The following items are assumptions for a CDSS:

1. Hardware and software technologies will evolve over time such that new technologies

can be inserted or exchanged into the CDSS without affecting other components of the system.

2. Interoperability, clinical ontologies, and data metrics will be established and adhered to

over time to ensure seamless integration of functionality all technologies and capabilities.

3. The CDSS will interface with the habitat medical data and the crew health and

performance systems.

4. The CDSS will interface with a data pipeline that starts with a disparate set of data

sources and includes data management, processing and preparation capabilities.

5. Periods of no communication with the ground will be anticipated during missions.

6. Communication delays due to the extended distance from Earth will occur.

7. One of the crew members be trained as a CMO.

5

HRP-48033

8. The mission will consist of at least four crew members.

9. The CMO with a clinical background may be a patient or may become incapacitated.

10. The CDSS will have the ability to provide on-demand training that is context aware of

the situation and user knowledge self-assessment such as a crew member (CM) versus a CMO and may be included in the CDSS treatment feedback.

11. The CDSS will support and integrate delayed clinical input and guidance from ground-

based medical personnel and systems.

12. The CDSS will facilitate asynchronous communication with ground-based medical

personnel and crew family members.

13. The CDSS will have the ability to adapt to different resources available for individual

missions.

14. The CDSS will be able to receive software updates during a mission.

15. There will be unique clinical, physiological and cognitive adaptations on Mars missions

and other deep space exploration missions.

16. The CDSS will use validated decision-making models.

17. The system will be capable of autonomous decision making.

18. In order for the CDSS to be successful, there will need to be acceptance and routine use

so that the correct information is available for use during the decision-making queries.

### 4.5 Constraints

1. The CDSS will have limited computational power and memory on the scale of the

capability of a laptop computer such as a MacBook Pro with the following specifications: 3.1 GHz dual-Core CPU, 8 GB memory, graphics processing unit, 5 TB solid state drive, battery power for 10 hours operation and consuming 70 W of power when charging.

2. Use of a cloud accessing data or servicers on the ground will not be an option on

exploration missions.

3. Internet services will not be accessible on exploration missions.

4. The CDSS will be governed by NASA security policy and protocols.

6

HRP-48033 5 CLINICAL DECISION SUPPORT SYSTEM SCENARIOS This section provides medical scenarios that will be used to identify and develop functional requirements that are related to clinical decision-making support. Each scenario in this ConOps illustrates a situation when clinical decision support is needed. These scenarios are not intended to be a comprehensive list of all the ways a CDSS may be utilized on a mission. Rather, these scenarios are a first attempt at recognizing the instances where a CDSS may be used to derive a result, provide actionable information, or guide a crew member’s decision. Some of the technologies identified in collecting data may currently not be fully developed or used operationally. However, the purpose of these technologies is to provide potential future sources of data that the CDSS may incorporate in making a recommendation or assisting the crew.

Furthermore, it is envisioned that additional scenarios will arise in the future as technological capability expands in the area of advanced analytics, new applications of decision-making in missions are recognized, medical risk uncertainties are identified, and new technologies impacting wellness and preventative care mature.

- Disclaimer: The quoted dialogue and language in these narratives are for demonstration

purposes at this time and exact wording may be adjusted in the development of CDSS prototypes or the final CDSS. TABLE 2 IDENTIFIED ROLES IN CDSS SCENARIOS

### Role Description

Caregiver The crewmember(s) providing medical care in each scenario. This includes the CMO and any crewmember aiding the provision of care.

Ground Caregiver Ground-based clinicians, specialists, and other allied health professionals who will provide medical support during a mission.

Patient The crewmember receiving medical care.

Crewmember Any crewmember that is not a caregiver.

Ground Clinical Decision Any medical hardware, software, or data infrastructure system on Earth Support System used to support a crewed mission.

Clinical Decision Support Any medical hardware, software, and data infrastructure within the habitat.

System Habitat System Any non-medical hardware, software, and data infrastructure that supports habitat operations.

### 5.1 Personalized Nutrition Scenarios (LevCareV)

#### 5.1.1 Context

These scenarios were developed in the context of health quality by demonstrating the ability to note nutritional deficiencies in multiple crew members. In Narratives A&B, an individual's nutritional status can be determined by the integration of various factors including food intake, physiological health, omics, metabolism, and physical activity measures. Narrative C demonstrates how the system can consider trending data to support validation of anomalous test 7

HRP-48033 results. The use of a data-driven approach will require the development of a personalized health data system comprised of advanced computational technologies.

In Narrative A, self-care is being administered where a CM is his/her own caregiver as well as the patient. In the later part of the narrative the CMO becomes the caregiver.

In Narrative B, the CMO is the caregiver who will follow the approved plan that is approved by the ground flight surgeon. The crewmember(s) that will be performing the EVA is the patient in this unplanned event. In Narrative C, self-care is being administered where a CM is his/her own caregiver as well as the patient. In the later part of the narrative the CMO participates as the caregiver in the decision- making process for performing a repeated test.

#### 5.1.2 Narratives

Nutrition Narrative A – During a long duration, deep space mission, crewmembers log into the system to view each of their personalized dietary plans. The crewmembers select their preferred meal. During the mission, food and fluid intake data are entered into the medical database via the food tracker app on crew personal tablets. Routine urine and blood samples are collected and analyzed yielding additional medical data captured by the medical database. Parameters such as protein status, vitamin and mineral status, bone markers, oxidative stress markers, liver and kidney function, urinary protein, lipid profiles in blood, hydration/renal stone risk are assessed.

Other medically relevant parameters such as resting metabolic rate, calories burned through exercise, and/or specific activities like EVAs, vital signs, body mass, planned periodic physical exams, dietary intake, and food inventory remaining, for example, factor into the analysis for nutritional health. The vehicle audio assistant notes psychological stress and team interactions including conflicts. The CDSS analyzes all the data on a regular basis.

The CDSS notes a crew member is losing weight over a period of time (via a body mass measurement device). The CDSS notes metabolic rate and blood analytes remain nominal but food consumption has reduced. During the routine interaction with CDSS the system detects audio cues of psychological stress. Pervasive monitoring of in-vehicle audio has picked up team interactions with increasing aggressive behavior with the CM in common to most incidents. The CDSS notes the evidence with a recommended diagnostic to the CMO.

The CMO reports to the ground for recommendations, which are transmitted back to the vehicle.

The CMO uses the advice from the ground and has a counselling session with the CM. Changes to the CMs routine include additional video calls with family members, changes to sleep, exercise and guidance on food intake.

Over the next month team interaction improves (measured by the CDSS audio analyzer) and the CMs calorie intact normalizes with some weight gain. The issue is considered resolved. 8

HRP-48033 Nutrition Narrative B - During the mission, an unplanned extravehicular activity (EVA) is scheduled to repair micrometeoroid damage to the exterior of the habitat requiring a sudden and dramatic shift in the crew sleep schedule, resulting in a shortened sleep cycle. To prepare, the CDSS analyzes the new requirements and suggests a new sleep schedule, adjusts cabin lighting, and suggests a sleep aid to affected crew members before they retire for the night. The CDSS also proposes reaction time or psychomotor vigilance testing prior to duty for crew members involved in the EVA. Based on the results CDSS recommends stimulants for certain crew members to counter fatigue due to the shortened sleep cycle. These recommendations are also sent to ground where the flight surgeon can review and provide concurrence or an alternative approach towards medical care. Nutrition Narrative C - Fourteen months into the mission, a notice is sent to the CM that a routine blood analysis to be performed. The CM logs into the medical system where CDSS informs the CM of the blood analyzer location. Today’s blood test is a routine comprehensive metabolic panel, which is automatically entered into the blood analyzer from the data system.

The CDSS asks the CM to confirm that this is the correct test. After confirming that the comprehensive metabolic panel is the proper test, the CDSS provides procedures for the CM to obtain a blood sample and transfer the sample into a cartridge that is inserted into the blood analyzer device. The blood analyzer automatically processes the sample and measures the fourteen parameters and exports the data to the CM’s EHR where the CDSS executes baseline checks of the measured values and trending of the historical data. The CDSS recognizes that all values from the blood analysis are within pre-flight determined reference ranges, except for a high level of potassium. This value is flagged, and a notification is sent to the CMO. Upon completion of the test, the CM stows the blood analyzer and logs out of the system.

Meanwhile, the CDSS cross-references the values with the food intake log, recent vital signs and past blood work results. Based on the analysis, the CDSS recommends that the blood work is performed again to determine that the potassium value that is being measured is accurate. The CMO agrees. Upon entering the agreement to the repeated blood work, the CDSS sends this recommendation to ground. The ground clinicians concur that the blood work should be performed again. The blood analysis is accommodated by the scheduler to be repeated in the next hour and the crew scheduler shifts planned work to accommodate the new tasks. The blood analysis was repeated according to the previous description. After analysis by the CDSS, the results showed no values, including potassium, were outside the reference ranges. The CMO is notified of the new results in the CM’s EHR, where those results may view along with trending blood analysis data over time.

#### 5.1.3 Highlighted Functionality

This scenario shows that the CDSS can:

- Collect, analyze and interpret information about various factors including food intake,

metabolism, stool and urine analysis, reaction time testing, and physical activity measures for each crewmember.

- Classify the crewmembers in different categories based on -omics and individual health

information.

- Indicate nutritional deficiencies such as fluid intake and recommend additional intake.

9

HRP-48033

- Interpret information to create a summary report.

- Continue to learn and adjust recommendations.

- Generate a personalized report for the CM.

- Generate reports in the CDSS.

- CDSS is capable of flagging outlier data and bringing it to the attention of the CMO.

#### 5.1.4 Assumptions

This scenario assumes that:

- Crew health, medical and food data is integrated with the Clinical Decision Support

System.

- Stool, blood and urine samples generate data that is part of the Medical System.

- The CDSS can relearn based on the change in information.

### 5.2 Kidney Stone Prediction Scenario (LevCareV)

#### 5.2.1 Context

This scenario was developed in the context of a diagnosis starting with a symptom from a crew member and assisting in the diagnosis and treatment plan. The goal of the scenario is to better diagnose a disease state based on probabilistic analysis informed by symptoms, tests traditional risk scores and a predictive model of kidney stone formation. This scenario includes a decision support model where the CDSS asks for more information to determine which of two possible disease states to diagnose. Although there are many risk factors, one of the leading causes is low fluid intake. By applying modern machine learning (“artificial intelligence”) algorithms on available crew member data including medical records, food intake, and urine sample analysis, CDSS will try to predict the risk of kidney stone formation. The goal is to develop information models to assist with real time diagnosis and also use prediction information for prevention via automated alerting leading to early intervention, in this case recommend an increase in fluid intake to reduce the risk related to kidney stone. This scenario uses a symptom input. However, an automated alert is likely to be implemented also to proactively preserve health and performance. Furthermore, this scenario provides the implementation of basic checks by the CDSS that would typically be provided by a pharmacist and physician regarding drug interactions, allergies and side effects.

In the following narrative, the CM is the patient who initiates an encounter with the CDSS. At first, the CM is receiving self-care. After more information is provided by the patient, the CMO is notified and becomes the caregiver for this unplanned event.

#### 5.2.2 Narrative

## SYMPTOMS

A CM develops right flank pain for several hours and decides it is concerning enough to report.

He logs into the CDSS using his personal electronic device. The CDSS notices there are no scheduled events for this crew member and asks, ‘How can I help?’ The CM responds, ‘I have a pain in my lower back.” 10

HRP-48033 The CDSS notes that “Pain in lower back” is a relevant symptom for several conditions included in the CDSS conditions list database such as kidney stones, pancreatitis and, space adaptation back pain, urinary tract infection/pyelonephritis, etc. and a differential diagnosis is generated based on probability of occurrence for phase of flight, prior medical history, and other patient related data. Low probability diagnosis with high severity is also considered.

The CDSS records the event in the CMs EHR and sends a note to the CMO while asking several more questions to narrow the differential diagnosis such as (note the questions below are illustrative and would be taken from the evidence library): ‘Is the pain constant or intermittent?’ ‘Is it on one side or both sides?’ ‘Is the pain worse with food/drink versus no change?’ ‘Is the pain mostly radiating to your groin or in your back radiating to upper abdomen?’ Based on the responses to the previous questions, the CDSS asks several more questions: ‘Is the pain with urination?’ ‘Do you have a fever?’ ‘Do you have nausea? ‘Is there blood visible in your urine?’

## DIAGNOSIS

The CDSS looks at the CM’s daily fluid intake, fluid output, nutrition, exercise data, family history, other drugs taken and calculates a kidney STONE 1,2 score. Fluid intake per day is lower than recommended. The kidney stone precipitation model3, which calculates the probability of kidney stones based on collected data, is run on a weekly basis and stored in the EHR. During this diagnostic session previous risk scores are accessed for the crew member over the last two weeks, where the daily calculated risk number has gone from 10% to 25% in the last two weeks.

Based on the initial differential and new data the CDSS gives a 65% chance of kidney stone, 70% chance of pancreatitis, and pyelonephritis 10%. The CDSS records this in its medical decision making (MDM) report and displays the process in an easy-to-follow screen to the CMO.

The result of the differential diagnosis is too close to decide and the CDSS suggests lab tests of blood and urine to narrow the diagnosis further. The CDSS alerts the CMO who carries out the tests and results are automatically updated in the CMs EHR.

- NOTE: The current math for each condition is an independent calculation of the total

number of matching symptoms. It is not intended to add to 100%, but this could be a secondary calculation if required. However, there are consequences as there is a very different interpretation of two disease each at 95% versus two diseases at 45%. 1 https://www.mdcalc.com/stone-score-uncomplicated-ureteral-stone#evidence 2 https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3966515/ 3 Mathematical Model to Estimate Risk of Calcium-Containing Renal Stones, Pietrzyk et al., Miner Electrolyte Metab 1999;25:199-203. 11

HRP-48033 After the lab results are stored in the medical system, the CDSS updates the chance of kidney stone to 75%, while pancreatitis reduces to a 15% probability. These results are updated in the MDM report and the system reaches a threshold to recommend treatments. The CDSS analyzes the treatment database and suggests acute phase treatment with non-steroidal anti-inflammatory (NSAID) along with increased fluid intake. These high probability of success/low risk treatments are recommended to the patient and the CMO. The CDSS also suggests an alpha-1 blocker as a potential treatment for CMO approval given fewer clear benefits/risks, along with ultrasound imaging of the kidneys as a next step in diagnosis.

The CMO reviews the data, confirms the system’s diagnosis of “likely kidney stones,” and approves the suggestions of NSAIDs, fluids, and a kidney ultrasound. The CMO decides to hold off on the alpha-1 blocker pending results from the ultrasound and ground team advice. Ground caregivers are also updated with this information and the system suggests that at this stage symptomatic management should be sufficient without need for invasive procedures.

The CMO starts an IV and begins a fluid bolus, scanning the fluid bolus and programming the appropriate fluid and rate into the infusion pump. While fluids are running the CMO retrieves and activates the ultrasound. The CDSS shows the onboard training material for flank imaging where the ultrasound image is monitored by the CDSS in order to guide the CMO’s placement of the probe via on screen (augmented reality) commands to the operator. CDSS notes adequate image acquisition and an analysis of the images shows likely mild to moderate right hydronephrosis. The CMO agrees with the finding and CDSS updates the diagnostic probability with kidney stone as vastly more likely than other pathologies. The images, CDSS and CMO interpretation are transmitted to the ground for radiology review and the on-call ground radiologist is notified.

## TREATMENT

The CDSS suggests a treatment for the next 5 days of water intake 3L per day, a change in nutrition to lower calcium oxalate and uric acid load, reduce exercise, and take an appropriate pharmaceutical treatment. In making the pharmaceutical recommendation, the CDSS automatically examines the patient pharmacy record, drug-drug, drug-food, drug-disease and drug-pharmacogenomic interactions and patient allergies. Additionally, the CDSS provides information related to the suggested pharmaceutical that may include contraindications, warnings, special dosing instructions, adverse drug reaction notification and intravenous compatibility information. During the lengthy mission, the pharmacy domain may receive clinical practice guideline and drug information updates that the CDSS would note. The CDSS analysis reports that nothing is a cause for concern and posts this result to the CMO along with the relevant warnings and potential adverse drug reactions and/or side effects. Current drug inventory and future predicted needs are calculated, and the risk trade off recommends appropriate pharmaceutical treatment. 12

HRP-48033 The CMO reviews the suggestions and approves them. These changes are automatically noted by CDSS in the medical record and altered in the nutrition and exercise records. All relevant consultants on the ground are sent a copy of the plan for review. The exercise team updates the patient’s exercise prescription, the nutrition team updates the diet plan, and the medical team consults with an aerospace urologist regarding further treatment and monitoring. The urologist agrees with the plan and recommends an alpha-1 blocker daily. The CDSS auto checks for drug interactions and allergies. Finding none it notes this check to the CMO who approves the treatment. SCHEDULE The CDSS recommends a scheduled imaging session with the CMO, which is accepted by the CMO. With the plan approved CDSS reviews the patient, CMO and mission schedule for open time blocks and suggests 3 for a follow up session pushing these to the personal computing devices of the patient and CMO. The pair select an agreeable time, and the session is scheduled with the CMO. During this time, the symptoms have resolved and the patient reports passing a small kidney stone in the strainer which is examined and found to be calcium oxalate. The ultrasound of the kidney is carried out and the CDSS confirms no kidney stones are detected.

The CDSS transmits the updated record to the ground.

### FOLLOW UP

The EHR is updated and CMO confirms the treatment is stopped. A training video encouraging 2 L/day fluid intake is scheduled. The CMO reduces the alert threshold for kidney stone risk for the CM so he will be alerted earlier next time. The vehicle system is informed by the CDSS to update predicted water usage and reclamation efforts.

During the long-duration exploration mission, crewmembers follow the prescribed dietary plan where the daily food and liquid intake are captured into the nutrition database. Other medical relevant data from urine samples are collected and periodically tested. The urinalysis data are captured by the medical system database. During periodic examinations, ultrasound images are captured of their own bladder and kidneys, implementing self-guiding software such that the crew member can perform these procedures autonomously. Other relevant data such as those from exercise, vital signs from periodic exams or exercise are analyzed by the CDSS that implements a kidney stone prediction model. If the prediction model scores the risk of kidney stone over a certain pre-defined number, the system sends an alert to the CM and CMO and recalculates the fluid intake required for the crewmember down to the 100-milliliter level. The risk score as well as the new fluid intake recommendations are sent to the crewmember, recorded in the EHR and ground. The CMO receives a notification from the CDSS of the EHR update and is ready for review. The same information is also available to the crewmember when he/she logs into the system.

#### 5.2.3 Highlighted Functionality

This scenario shows that the CDSS can:

- Interact with patient receiving symptoms and requesting additional data.

- The CMO is in the loop and the CDSS reduces time on data entry tasks.

13

HRP-48033

- Perform diagnostics.

- Collect, analyze and interpret information about various factors including symptoms,

medical history, food and liquid intake, personalized medicine (e.g. omics data), urine analysis for each crewmember.

- Analyze all above data in an integrated way for risk assessment.

- Utilize voice recognition for data input.

- Utilize virtual reality assisted medical equipment is used.

- Create alerts for potential issues such as kidney stone.

o To the CM o In the CDSS

- Suggest treatment.

- Provide scheduling and follow up.

- Continue to monitor and analyze for further adjustments.

- Ultrasound with image analysis.

- Provide an updated medical library (e.g. Merck Manual or UpToDate).

- Automatically update the pharmaceutical inventory and provide routine information

about a suggested pharmaceutical.

#### 5.2.4 Assumptions

This scenario assumes that:

- Crew health, medical and nutrition data is integrated with the CDSS.

- Urine test data system is part of the Habitat System.

- The CDSS can relearn based on the change in information.

- Kidney Stone Score (Stone Plus) or equivalent is accepted for space flight.

- Kidney Stone precipitation model is installed in the CDSS and is validated to calculate

the probability of stone formation.

- A differential inference engine is part of the CDSS.

- CDSS can interact with the crew by asking questions and assimilating new data.

### 5.3 Data Input Correction During a Cognitively Rigorous Task Scenario (LevCareIV)

#### 5.3.1 Context

This scenario was developed in the context of identifying an undetected data entry error while performing a troubleshooting procedure that is cognitively demanding. The goal of the scenario is to provide assistance to a CM through a notification to correct an input error. By applying the appropriate algorithms to ensure proper data entry and evaluate a CM’s ability to continue working through a safety-critical task, CDSS will compile data relevant to the cognitive ability of the CM to complete the task and notify the caregiver and CM that a correction to the data input needs to be made. The following narrative introduces an unplanned cognitive event where the CM is the patient, first identified by the CDSS. The CMO is notified of the event and becomes the caregiver in this situation. 14

HRP-48033

#### 5.3.2 Narrative

Four crewmembers are located within a spatially restricted habitat. As per the schedule, one mission specialist (also the medical caregiver) is using the exercise resistance machine (ERM).

The ERM sends resistance values during exercise to the Medical Data System.

Two crewmembers are occasionally conversing at a normal conversation level while performing a shared task that requires an electric screwdriver.

Prior to the mission, the CDSS was calibrated to each crewmember’s motor and cognitive proficiency. Spaceflight nominal values were obtained after the first week of the mission.

The CM, as per the schedule, is troubleshooting a problem encountered with an assembly task.

The assembly task is marked in the schedule as safety-critical and that it requires a high cognitive demand. This information is pushed to the CDSS.

The CM has just input an incorrect value into the troubleshooting procedure (e.g., 4467.54 rather than 446.754) that was obtained from an independent device. He has marked that procedure step as complete (he has not caught his own mistake). The procedure indicates a suggested correction.

The CM accepts it and moves on to the next procedure step.

The combination of the task’s cognitive demand, its safety criticality and the commander’s input error triggers the CDSS to begin monitoring.

The CDSS notes that the CM’s reaction time to notices on the computer is longer than baseline, and acquires additional data suggesting off-nominal cognitive performance.

The CDSS sends a pop-up recommendation to take a break referencing that he appears tired and that this critical task requires high attention. The CM dismisses the notice and continues to press forward incurring another error in the assembly task. The CDSS provides a corrective active suggestion and another suggestion to take a break to the CM who retraces steps to rectify the error. Meanwhile, the CDSS compiles data relevant to the CM’s completion of a cognitively rigorous task:

- Over the course of the mission, the CM’s working memory scores have declined,

although not significantly,

- The CO2 level is currently 4900 ppm, and has not been above the spacecraft maximum

allowable concentration (SMAC) for the past 24 hours,

- No headaches have been reported by the crewmembers, indicating that there probably is

not an environmental factor,

- The noise level (continuous fans, conversation, tool use) in the habitat is fluctuating

between 60 to 80 dBA,

- There are no toxic materials currently being used or leaking into the habitat,

- The atmospheric particulate level has not exceeded the defined limit,

- All crewmembers have been exposed to a rigorous schedule for the past several days,

- The commander slept for approximately 4 hours the previous sleep time,

15

HRP-48033

- The sleep quality score from sleep sensors over the past week has been moderate

- Facial expression and behavior data indicate no signs of an off-nominal mood or

emotional state. The CDSS sends a mid-level alert to the CMO (and ground). The CMO, who was the crewmember exercising, sees the indication on her personal wrist-worn device, that she had temporarily fastened to the ERM. Seeing the alert level, she immediately retrieves the alert message. The message indicates the basis(s) of the alert (i.e., the crew member’s input mistake and evidence of fatigue), why it was graded as mid-level (that he is performing a safety-critical task), that the task is scheduled to continue for another 3 hours, but that the crewmember corrected the mistake when prompted). The CMO proceeds to her personal computer where she again opens the alert message and requests elaboration. She is provided with a summary statement indicating that although all relevant parameters for in-flight cognitive and behavioral health and are within nominal ranges, several are approaching the limit indicated in NASA STD

3001. The CDSS states that there is a 90% chance that the CM is experiencing fatigue based on

the combination of his declining working memory scores, the current CO2 level, the recent high workload and that he did not sleep his usual 8 hours with a suggestion to 1/ reduce CM workload for the next few days and 2/ check vehicle environment and 3/ schedule a CM checkup for any underlying disease. The CDSS supplies a set of recommendations to the CMO: that the CM receives a break if possible, that the CM takes a brief cognitive test or the CDSS executes analysis of pervasive sensing data to assess fatigue level, that the CM receives a backup crewmember on this safety-critical task, and/or that the task be re-assigned to another CM.

The CMO speaks to the Commander of the crew and they decide that a second crewmember will assist on the task. She makes the request to the scheduling tool which automatically readjusts the schedule based on the current constraints. She inputs the resolution to the alert within the system.

The CDSS learning algorithm associates this resolution with this set of parameter value ranges for future recommendation if a similar condition arises. Also, the CDSS assesses the forward schedule in light of the overall crew performance and provides suggestions to the schedulers to adjust it to build-in more down time or personal time for the crew, given evidence of cognitive fatigue.

#### 5.3.3 Highlighted Functionality

This scenario shows that the CDSS can:

- Collect, analyze and interpret information about a CM from various domain sources

within the vehicle and habitat CHP Systems.

- Analyze all above data in an integrated way.

- Generate reports that gather data from various sources to inform the crew of pertinent

information related to the cognitive ability of the CM to perform a safety-critical procedure.

- Provide recommended courses of action.

- Learn (it is an intelligent system).

16

HRP-48033

#### 5.3.4 Assumptions

- The Procedural system can:

o Identify an error in data input. o Notify CM to correct the data input. o Notify CMO of incorrect data entry and that it has been corrected.

- The Scheduling system:

o Can accept CM input. o Can adjust the schedule as requested. o Is knowledgeable about schedule constraints.

- The ECLSS and Habitat CHP systems:

o Contain nominal ranges for each subdomain. o Continuously monitor the data and will indicate anomalous readings.

- These systems and their domains can interact (i.e., the ECLSS shares data with the

Environmental Protection Domain).

### 5.4 Cabin Atmosphere Problem Identification Scenario (LevCareV)

#### 5.4.1 Context

This scenario was developed in the context of predicting increased CO2 levels. The goal of the scenario is to predict change in cabin CO2 concentration based on the crew member, CM, condition and symptoms. Although certain medical conditions (e.g. headache) are not uncommon for any CM, all the CMs having those symptoms within a relatively shorter time span is alarming. Instead of treating each CM independently, the system should analyze integrated data to predict the leading cause of the condition. If more than one CM starts showing symptoms or starts taking a particular medicine, that will be a trigger for an integrated analysis. The goal is to develop a system that will integrate all data including all CMs’ data and develop a prediction model to predict change in cabin atmosphere as a possible cause with a certain level of accuracy.

In this unplanned event, multiple CMs are the patients and the CMO is the identified caregiver.

#### 5.4.2 Narrative

Hours after exercising, a CM logs into the medical system reporting a headache. The system assesses the pharmacy resources, references the CM’s EHR for treatment contraindications, and recommends taking an oral nonsteroidal anti-inflammatory medication. The CM accepts the recommendation and logs consumption in the medical system. Twelve hours later a second CM logs into the system and performs an exercise workout. They both finished early, and the system notices they performed 70% of today’s workout load and tags the event as possible exercise intolerance. A third CM is tagged as fatigued as suggested by their monitored eye-lid closures and/or speech latency, via a personal computer camera that observes a crew member. The CDSS results may be derived from a Percentage eye openness tracking (PERCLOS) model, for example. The CDSS assesses three illnesses as occurring in close time proximity and runs an analysis of overall symptoms to assess for environmental, infectious, or other global problems. This reveals 17

HRP-48033 these symptoms as potential high CO2 levels or a drop in cabin pressure. The CDSS checks the vehicle system pressure and CO2, both report nominal values.

An alert is sent to the CMO and Commander with cabin atmosphere as a possible cause for multiple crew anomalies and nominal reported data. The system indicates this is conflicting information and suggests to “check the system and environment.” The Commander calibrates the pressure sensor and CO2 sensor. Immediately after calibration the vehicle system alerts on CO2 levels. Upon inspection the scrubbing system appears to be responding and the CMO monitors CO2 levels for the next hour until they reach nominal values.

CDSS suggests the CMO follow up with the crew and provides a quick access entry field to update the charts with options like “resolved,” “no change,” “worsened,” and “improved.” All CMs report reduced symptoms over the next day. The EHR is updated with CO2 as the cause for each crew members notifying event.

#### 5.4.3 Highlighted Functionality

This scenario shows that the CDSS can:

- Monitor the symptoms, exercise and medication ingested by each CM.

- Create an internal alert/trigger if more than one CM reports the same/related symptoms or

takes the same medication.

- Have a trigger to run the analytics on integrated data.

- If all the CMs are taking the same medication within a short time span, the model will

predict a common problem such as cabin pressure, infectious disease food/water, as part of a list of probable diagnostics.

- If different CMs have disparate symptoms that are associated with the same probable

cause the CDSS alerts the CMO with recommendations.

- Monitor medication inventory, identify possible drug interactions prior to recommending

a pharmaceutical, input side effects that can be reported by a CM.

- Generate an alert to the system.

- Interpret and analyze integrated information.

- Generate an alert to the entire crew.

#### 5.4.4 Assumptions

This scenario assumes that:

- Crew health, medical and medication intake data is integrated with the CDSS.

- The CDSS can relearn based on the change in information.

- The CDSS is integrated with the vehicle such that environmental data is made available

upon request. 18

HRP-48033

### 5.5 Bone Health Scenario (LevCareIV, LevCareV)

#### 5.5.1 Context

This scenario was developed in the context of assessing the risk for bone fracture injuries to crew and recommendation for providing mitigation strategies. Spaceflight-induced bone loss is an adaptive response to reduced loading or forces to the skeleton due to a lack of gravity.

Spaceflight conditions which reduce bone mass and/or changes to bone structure could result in bone fractures during or after a mission. Therefore, astronauts are considered to be at an increased risk for fracture given the hazardous environment of spaceflight mission operations.

An individual’s bone strength can be determined by integration of multiple factors including bone mass, bone mineral density, geometry and bone microarchitecture. Current mitigation strategies include daily resistive exercise to counter the lack of mechanical load and adjusting nutritional supplements and/or dietary intake. The use of data-driven approach will require the development of a personalized bone health system comprised of advanced analytics for assessing bone fragility and providing mitigation options to lessen impacts on bone health, example devices include quantitative ultrasound4.

The narrative presents a planned evaluation prior to EVA. The CMs are the patients in this scenario where self-care is administered. The ground flight surgeon and CMO are the caregivers.

#### 5.5.2 Narrative

A crewmember logs into the system to view his/her personalized bone health assessment. The crewmember follows the recommended initial exercise protocol that is based on the information collected on ground. During the mission, data collected during daily exercise (vital signs, calories burned, resistive loads, etc.) are entered automatically into the medical database. Also, data on bone mass, bone mineral density, geometry, bone microarchitecture, and urine samples are collected and analyzed periodically yielding additional medical data captured into the medical database. The CDSS analyses the CM range of motion (ROM) and coordination in reaching tasks during exercise warm up protocol using video analysis. The CDSS analyzes all the data on a regular basis to update the bone health risk index.

As the mission progresses, CDSS adjusts the dietary and exercise recommendations based on the analyses and alerts the crewmember about the changes. The crewmember views the updates when he/she logs into the system and is notified there is elevated calcium being excreted as indicated by the urinalysis. The recommendations include an increase in fluid intake and an increased load for specific exercises in the workout protocol. Recommendations such as these related to nutrition and exercise are personalized for each crewmember.

Fast forward, the crew is now on Mars and will perform an EVA tomorrow. The CDSS transmits the EVA mission profile and latest crew metrics back to earth, where the NASA supercomputer analyzes metrics and mission tasks for all crew members. Metrics include ROM, coordination, isometric strength, cardiorespiratory fitness and bone density metrics for the crew. Based on 4 Quantitative ultrasound methods to assess bone mineral status, Braiocelli, Nature Pediatric Research, 2008, vol 63 No 3. 19

HRP-48033 metrics and the expected maneuvers (recover from fall, retrieve hand tool, climb ladder), and gait (walking on flat surface or loose regolith) the ground CDSS assigns tasks and roles to each crew member and transmits these to the CDSS on Mars. These results are reviewed and approved by the ground flight surgeon prior to the data transmission. These task designations are received and reviewed by the CMO. The CDSS notes one CM is above the accepted risk of bone fracture when lifting and is allocated less strenuous role in a multi crew EVA.

In-flight ROM and EVA ROM are correlated for future missions and updated exercise protocols.

#### 5.5.3 Highlighted Functionality

This scenario shows that the CDSS can:

- Collect, analyze and interpret information about multiple factors including bone mass,

bone mineral density, geometry, bone microarchitecture, urinalysis and physical exercise measures (resistive loads) for each crewmember.

- Analyze all above data in an integrated way to establish a bone fracture risk index.

- Classify the crewmembers in different risk categories based on individual health

information.

- Indicate insufficient exercise protocol or deficiency in calcium intake and recommend

adjustments.

- Interpret information to create a summary report.

- Continue to learn and adjust recommendations.

- Generate a personalized report for the CM.

- Generate reports in the CDSS.

#### 5.5.4 Assumptions

This scenario assumes that:

- Crew health, medical and exercise data is integrated with the CDSS.

- Exercise equipment and urine test data system is part of the Habitat System.

- Video analysis of crew with gait and ROM derives these parameters that are incorporated

into the CDSS.

- The CDSS can relearn based on the change in information.

### 5.6 Emergent Scenario (LevCareIV, LevCareV)

#### 5.6.1 Context

This scenario was developed in the context of emergent care with a non-CMO CM performing treatment with just in time training. The CDSS is relied on to diagnose and treat with a human assisting. This scenario is to consider an emergency time critical situation where the CDSS is making critical decisions with no immediate assistance from earth.

The CDSS will follow standard triage clinical algorithms. 20

HRP-48033 Deep space exploration missions will have unplanned emergency care scenarios where a clinician is not always present. Preservation of life is the priority acutely and avoiding evacuation is preferred. Therefore, the CDSS in the future will be depended upon to assist in emergency situations to diagnose, treat and train at the point of care.

An individual’s capacity to take on new information in a complex emergency situation is limited.

The CDSS can supply the required knowledge and assistance including simple tasks that may hinder timely response such as instrument descriptions, location and use.

The narrative presents an unplanned event where the CMO is the patient and a CM is the caregiver, with emergency medical technician-level training.

#### 5.6.2 Narrative

- Situation: The vehicle is in Mars orbit with a 20-minute transmission delay each way and the

crew includes a CMO and second with limited clinical training. The CMO is exercising on the treadmill using the CDSS on her personal tablet in exercise mode connected to wearable sensors, when she starts to feel faint. Five minutes later she is unconscious.

CDSS Activity and Context: The CDSS detects the CMO has stopped exercising but her heart rate remains elevated in an irregularly irregular pattern between 150 and 180 bpm. The CDSS detects a high likelihood of Atrial Fibrillation with Rapid Ventricular Response (RVR) from the wearable sensors.

- CDSS: Audibly asks the CMO “Exercise halted, and abnormal heart rate is detected, is

everything ok?” The CMO is non-responsive. The screen changes to emergency mode with large, clear messages and engages audio commands. The CDSS begins a medical event log and records times and data from all following actions.

The CDSS activates the vehicle master alarm, sets vehicle internal lighting to maximum, and broadcasts throughout the vehicle “Medical Emergency. Crew member non- responsive in the exercise area, please respond.” The assisting CM arrives at the exercise area.

- CM: Speaking to the CDSS, “I’m here, what shall I do?”

The CDSS displays the emergency mode prompt on the exercise area touch screen with instruction “Step 1: Assess ABCs - Is the patient’s Airway Open” and a simple two button yes/no prompt. It responds to the untrained crew member audibly. 21

HRP-48033

- CDSS: “This patient’s heart rate appears dangerously fast; we will need to slow it down. Let’s

start with our primary assessment and check airway, breathing, and circulation, the ABCs. Now step one, is the patient’s airway open?”

- CM: “Yes.”

- CDSS: “That’s great.”

The CDSS changes the screen prompt to “Step 1: Assess ABCs - Is the patient Breathing?” and responds audibly with “Is the patient breathing?” The CDSS changes the touch screen to display “Step 2: Assess ABCs - Does the patient have a pulse?” The tablet changes to a visual indicator of how the pulse is measured at the carotid artery.

- CDSS: “Excellent, can you detect a pulse at their neck? I will show you where on the screen.”

- CM: “I’m not sure.”

- CDSS: “No problem, please remove their T-shirt and move them to the Crew Medical Restraint

System (CMRS) as quickly as possible.” This is also written in text on the exercise area touch screen display. The CDSS has built- in monitors at the medical bench for breathing, heart rate, SpO2, camera and audio. The CM follows directions and secures the patient (CMO) to the CMRS. The CDSS detects that the patient is secure and starts to collect vital signs. The watch and camera-based pulse detector are still detecting abnormal HR.

- CDSS: “I am able to detect this patient has a pulse, but the heart rate is too fast, so her blood

pressure is low. We need to apply the AED to slow it down. Don’t worry I will talk you through the procedure. First, get the AED from the emergency locker. It is the red box with a handle labeled AED.” The CDSS activates a flashing light on the emergency medical supply locker near the CMRS. The CM retrieves the AED and the CDSS detects that the AED has been removed.

- CDSS: “Please secure it to the side of the CMRS.”

The CM attaches it to the CMRS using the attached clips.

- CDSS: “Now, remove the electrodes from the pouch on the AED and connect them as shown.”

A graphic is displayed on the exercise area screen. The CM does this and the CDSS detects the electrodes are connected. 22

HRP-48033

- CDSS: “Great, almost there, now apply the two electrodes to the patient’s chest as shown on the

screen. Make sure all clothing, jewelry, sensors, and other material touching the patient are removed.” The CDSS shows where to place the electrodes on the screen. The electrode pads also show where to place each pad. The CDSS detects the electrodes are now connected.

- CDSS: “Strong work, please stand clear and do not touch the patient while I check their heart

rhythm.” The ECG rhythm strip from the electrodes is sent wirelessly to the CDSS via the Medical Data Architecture and CDSS confirms VFib with RVR. The CDSS determines treatment involves synchronized cardioversion and identifies R wave peaks, ST segments, and T waves within the rhythm strip.

- CDSS: “As we suspected, this patient’s heart rate is too fast causing her blood pressure to drop. I

am charging the AED to administer an electric shock to help slow the heart rate. STAND CLEAR WHILE SHOCK IS ADMINISTERED…AED is now charged, stand clear… administering shock” A configuration command is sent from the CDSS to the AED which administers a 200J biphasic shock synchronized to the ECG. The AED in this instance is an "augmented AED” that has cardioversion capability.

The CDSS detects the shock is administered and reassesses the rhythm from the electrodes. The rhythm is now normal sinus rhythm. The sensors embedded in the CMRS detect stabilized blood pressure, heart rate, and breathing rate; via the camera the CDSS observes the patient open their eyes and color return to their face as they gain consciousness.

- CDSS: “Patient is stabilized, well done, now we need to make sure the problem does not reoccur.

Please apply a blood pressure cuff to confirm camera derived BP and start an Intravenous (IV) line. Once the line is inserted please collect blood for laboratory analysis. I will guide you through the procedure on the screen. Please let me know when the IV is inserted.” The CM retrieves an IV kit and follows the CDSS visual instructions.

The CM tells the CDSS that the IV has been inserted.

- CDSS: “Well done, please place the blood into the analyzer. We need to administer 50 mg of

metoprolol orally. I must make sure the patient is awake enough to swallow. Please have the patient respond, are you able to swallow a pill?” CMO that regained consciousness states, “Yes, I am able to swallow.” 23

HRP-48033

- CDSS: “Thank you, I will select it from the pharmacy for you, show me the container to confirm

the correct drug has been selected.” The CDSS dispenses the medicine container and the CM holds the QR coded label up to the camera. The CDSS checks the medicine is correct by the camera verifying QR code for metoprolol succinate tablets 25mg.

- CDSS: “That is the correct medication, please remove 2 tablets and give them to the patient

along with some water.” The CM does so.

- CDSS: “Strong work, I will now contact mission control and inform them of the event and the

outcome. Please keep the patient on the CMRS and on the monitor until we hear from the flight surgeon. A record of these events is also in the onboard medical record system should you wish to review it. This concludes CDSS guidance for this incident, if you need further assistance please reactivate the system as needed.” In parallel to the treatment the CDSS has logged and transmitted a transcript including exercise session data, detection of fast heart rate, crew on scene, medical restraints, VFib with RVR, cardioversion, rhythm converted, vitals stabilized, crew placed IV, metoprolol 5 mg administered, and the recorded chemistry and blood count values with time stamps.

The transcript is flagged as emergent and pushed to the top of the data transmission cue where it is sent to Earth with routing instructions for the flight surgeon, flight director, biomedical engineer, and other relevant team members. Advice and crew contact are requested. The flight surgeon immediately contacts a consulting cardiologist who is provided with a copy of the report. After assessing the data, a store and forward video is sent to the crew with follow up questions and instructions. After the consultation, the ground crew recommends prescribing the patient daily oral metoprolol and schedules a follow up cardiac assessment is scheduled in one month.

The CMO is cleared to return to duty, with no EVA and no vehicle critical duties until the one-month assessment. The CDSS also receives input from the nutrition and exercise teams to remove caffeine from the patient’s nutrition plan and adjust the exercise routine to limit heart rate for one month. The CDSS adjusts the routines as instructed.

#### 5.6.3 Highlighted Functionality

This scenario shows that the CDSS can:

- Provide training in emergency scenarios to augment the skills of the crew.

- Retrieve data from wearables with medical grade signals to assist diagnosis.

24

HRP-48033

- Display medical data to non-medical crewmembers when appropriate.

- Provide recommended medications.

- Provide recommended treatment including cardioversion.

- Integrate exercise and clinical functionality.

- Display a graphical workflow automatically adapting from motivating exercise related

data during exercise to focused attention seeking low clutter emergency assistance.

- Interact with audio two-way interface.

- Operate in medical bay with camera enabling heart rate, respiration and consciousness.

- Collect wearable data.

- Perform in the medical bay with isolated bed for safe cardioversion electrical shock.

- Maintain a CDSS to AED wireless interface.

- Interface to pharmacy with camera enabled QR code verification.

- Analyze wearable and ECG instrument data.

- Classify a medical condition.

- Change graphical and audio workflow based on situation.

- Generate a personalized report for the CM.

- Generate reports in the CDSS.

- Transcript recording and transmission to earth.

#### 5.6.4 Assumptions

This scenario assumes that:

- Wrist worn wearables are wirelessly connected to CDS.

- Non CMO crew have limited medical training.

- AED can be wirelessly connected to CDSS.

- Camera enabled vital signs and drug verification is possible.

6 INTERFACES The interfaces identified by the implementation of CDSS are internal and external to CDSS.

### 6.1 Internal Interfaces

Systems, domains and subdomains involved in these scenarios:

### Habitat CHP System

- Habitat Data Domain

o Data User Interfaces o Data Storage o Descriptive Analytics o Video – in controlled space and time scenario, i.e. exercise protocol. o Advanced Analytics

- Decision Support Layer

- Knowledge Base

- Inference Engine

25

HRP-48033

- Artificial Intelligence

o Data Sources Interfaces o Data User Interfaces

- Visualization

- Real-time monitoring dashboard

- CDSS GUI

### 6.2 External Interfaces

Systems, domains and subdomains involved in these scenarios:

### Vehicle System Domain Subdomain

- Command and Data Handling (CDH)

o Environmental control and life support systems (ECLSS) o EVA o CHP System

- Integrated Data System Domain

- Data Sources Interfaces

- Data Storage

- Descriptive Analytics

- Advanced Analytics (i.e., Crew Decision Support System (CDSS))

- Data User Interfaces

- Medical Domain

- Clinical Care (i.e., Medical records (e.g., reports of pain including

back, headache, etc., psychological distress)

- Imaging

- Pharmacy Management

- Laboratory Management

- Human Domain

- Crew as Crewmember

- Crew as Patient

- Crew as Caregiver

- Wellness Support Domain

- Physiological Health Management (i.e., crew exercise regimen)

- Nutrition Management

- Behavioral Health Management (i.e., the schedule includes task

demand, time pressure, time since last break)

- Circadian and Sleep Management (i.e., crew sleep quality and

quantity)

- Environment Protection Domain

- Microbial Environment Protection

- Toxicological Environment Protection

- Acoustic Environment Protection

- EVA Activity Support Domain

- EVA Crew Health Support

26

HRP-48033

- EVA Performance Support

- Task Performance Support Domain

- Task Management Subdomain (i.e., procedures, schedule)

- Crew Interfaces (i.e., displays/controls, notifications, and

communication devices that can interpret human speech) 27

HRP-48033

- APPENDIX A: ACRONYMS AND ABBREVIATIONS

### ACRONYMS AND ABBREVIATIONS

### AMCL Accepted Medical Conditions List

### AED Automated External Defibrillator

### CB Control Board

### CDH Command and Data Handling

### CDS Clinical Decision Support

### CDSS Clinical Decision Support System

### CHP Crew Health and Performance

### CM Crew Member

### CMO Crew Medical Officer

### CMRS Crew Medical Restraint System

### CO2 Carbon Dioxide

### ConOps Concept of Operations

dBA A-weighted Decibels

### DRM Design Reference Mission

### GUI Graphical User Interface

### ECG Electrocardiogram

### ECLSS Environmental Control and Life Support System

### EHR Electronic Health Record

### ERM Exercise Resistance Machine

### EVA Extravehicular Activity

### ExMC Exploration Medical Capability

### HR Heart Rate

### HRP Human Research Program

### IV Intravenous

### JSC Johnson Space Center

### L Liter

### LevCare Level of Care

### MDA Medical Data Architecture

### ROM Range of Motion

### RVR Rapid Ventricular Response

### SMAC Spacecraft Maximum Allowable Concentration

### SpO2 Blood Oxygen Saturation Level

STONE Size, Topography (location of stone), Obstruction, Number of stones present, and Evaluation

### SysML System Modeling Language

### VFib Ventricular Fibrillation

28

---

## Source metadata

```yaml
source_filename: "HRP-48033_ExMC_CDSS_ConOps.pdf"
source_folder: "specific situations/Medical Operations and Decision Support"
source_url: "https://drive.google.com/file/d/1QvZQOJjwnfalk4IAXNzz2g61Yt_aNFEq/view"
source_drive_id: "1QvZQOJjwnfalk4IAXNzz2g61Yt_aNFEq"
source_sha256: 87ca049d78f47ab8660cd78fa6641d6a2c5645f4fc6987efac2bc654af7b0825
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 35
ocr_performed: false
```
