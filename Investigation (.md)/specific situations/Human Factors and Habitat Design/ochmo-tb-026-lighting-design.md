# OCHMO TB 026 Lighting Design

[View original PDF](https://drive.google.com/file/d/1nF9LrYPifxNgFyNSddy76DRrfvMRoXMc/view) · **15 pages**

**Collection:** specific situations/Human Factors and Habitat Design

> Converted with MarkItDown. Check the original PDF for figures, equations, and complex tables.

## Contents

- [Executive Summary](#executive-summary)
- [Background](#background)

---

### NASA-STD-3001 Technical Brief

Re l e v a n t   Te c h n i c a l Re q u i r e m e n t s

NASA-STD-3001 Volume 2, Rev D

- [V2 3006] Human-Centered Task Analysis

- [V2 5051] Legibility

- [V2 6117] Artificial Light Exposure Limits for

Ultraviolet (UV) Sources

- [V2 8051] Illumination Levels

- [V2 8103] Environmental Lighting

Attenuation

- [V2 8104] Task-Specific Exterior Lighting for

### Operational Areas Partially or Fully Lit by

Sunlight

- [V2 8105] Navigation and Wayfinding

(Exterior)

- [V2 8053] Emergency Lighting

- [V2 8059] White Lighting Chromaticity

- [V2 8060] White Lighting Color Accuracy

- [V2 8055] Physiological Effects of Light

(Circadian Entrainment)

- [V2 8056] Lighting Controls

- [V2 8057] Lighting Adjustability

- [V2 8058] Glare Prevention

- [V2 8106] Extraterrestrial Surface Transport

Vehicle (ESTV) Dashboard and Control Lighting

- [V2 10048] Visual Display Parameters

### Lighting Design

OCHMO-TB-026

### Rev C

## Executive Summary

Spacecraft lighting systems—inside and outside the vehicle—have a large number of contributing variables and factors to consider.

Careful planning and consideration should be given to the development and performance verification of light sources, and for the system architecture integration and control of the lighting system. Improperly integrated lighting systems impact task and behavioral performance of the crew and can impact the performance of automated systems that rely on cameras.

Artist's illustration of Gateway. Photo: NASA

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

## Background

Lighting is important to spacecraft design because visual perception provides the crewmember’s primary source of information about the environment. A lighting system can also impact the operation of sensors that are sensitive to light such as cameras, scanners, and sensors that use light as their primary means of operation.

As such, it has been a crucial consideration since the earliest crewed programs.

Many different factors must be balanced in order to produce a lighting environment that is conducive to crew health and mission success. Light has a large effect on the human circadian rhythm. For example, blue light inhibits the production of melatonin, and should be avoided before crewmembers go to sleep. Since space missions will not necessarily follow a 24-hour day, vehicle lighting must facilitate comfortable rhythms for the crew.

### Units and Terms

- Illuminance: total luminous flux

falling on a surface per unit area, measured in Lux or Foot-Candles

- Lumen: measure of total quantity

of visible light emitted by a source

- Lux: unit of illuminance; 1 lux = 1

lumen per square meter

- Candela: lumens per steradian

- Chromaticity: color balance

- • • • • Risks

If lighting levels are inadequate or inappropriate, crewmembers run the risk of performing tasks poorly (or failing them outright), interrupting their circadian rhythm (posing its own risks, see OCHMO-TB-016 Behavioral Health and Performance), and injuring themselves.

Injuries or discomfort to the eye can result from light sources and specular glare. Some lamps run hot, which can pose a touch-temperature risk to crew or fire risk to nearby material.

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

2

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

## Background

A good lighting system requires integration and support by experts from a wide range of fields.

- Light sources and lighting systems are a part of a larger architectural system that impacts human

perception of the environment, human behavior, human safety or error rates, and artificial vision and sensor systems for remote monitoring.

Several factors and environmental conditions pose performance risks on lighting system electronics, such as power, weight, radiation, thermal, electromagnetic interference, and vibration.

Conflicts may arise between lighting systems and the sensors as a result of insufficient light levels, electromagnetic spectrum wavelengths, and/or pulse frequencies that play havoc with successful operation of their systems.

- • A light source, whether it is a lamp, an indicator, or display, is an

optical system that requires specialized test equipment and facilities to accurately document and refine optical performance.

These resources and services may require use of all of the following:

- • Controlled dark room facility

Spectral irradiance meter to document spectrum at known distances Spectral radiance meter to document spectral brightness Spectral reflectance meter to test material surface properties for integrated architectures Goniophotometer for beam pattern measurements Imaging colorimeter for lamp and display contrast and uniformity verification

- • • • Lab testing of suit lighting

Goniophotometer

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

3

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

## Background

An integrated design, simulation, and test process for subsystem lamp and system lighting is necessary to avoid risks for an incompatible habitat solution. Computer based optical design and simulation tools reduce risk by developing light source solutions and then integrating them into architectural lighting models. This computer based optical analysis process can be used to reduce risk when considering the following trades:

- How do small changes in physical properties of light sources impact various optical

and spectral properties of a deployed lighting system?

How do different light source beam pattern configuration options work together to provide a uniformly lit operational environment at desired light levels? This feedback can in turn drive sub-system lamp performance guidelines and help the developer drive out power and weight issues. Considering where different fixed and mobile cameras are located, will the proposed integrated lighting architecture provide lighting environment required for a fully functional imaging system?

- • • When factoring in human body postures for a range of percentile sizes, how well does

the lighting system address shadowing, illumination at predicted human body locations, and glare?

- When factoring exterior surface reflectance and direction of collimated light from the

sun, how can exterior artificial lighting systems be optimized to maximize visibility for the crew? The NASA Johnson Space Center Lighting Lab uses a forward ray tracer, ZemaxOptics Studio Premium, and a reverse ray tracer, Radiance, for computer lighting simulations.

- Light Source Beam Distribution testing

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

4

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

## Background

Testing Testing for integrated lighting system design typically consists of a combination of methods that include: computer simulation, subjective measures from human-in-the-loop testing and objective measures utilizing specialized test equipment.

### Computer Simulation

Computer simulation by means of optical ray tracing software can do a lot of the legwork involved in balancing tradeoffs and meeting parameters. Once designed, the lighting system in question is placed in a vehicle mockup, where an illuminance meter is used to measure whether the desired lighting levels are being met.

### Computer Modeling of Interior Lighting Environments

Solid State Lighting Assembling’s - ISS Node 2 perceived light intensity images (right) developed using Radiance lighting analysis software. Source: Addressing Challenges to the Design & Test of Operational Lighting Environments for the International Space Station, Clark, T.A., Presentation 03/2016

General lighting

Pre-sleep lighting

### Objective Testing for Product Development

Objective measurement of optical properties provides an “unforgiving” grading tool for evaluation of products produced as a result of end-item subsystem requirements, such as lamps, backlit panels, display devices, indicator panels, and manufactured surfaces. The following lighting testing should be considered: Testing of optical properties should be done in a controlled environment, such as a dark room.

- A high-quality spectral irradiance meter can document lamp intensity at a distance, and lamp

- spectrum which can impact human perception of colored objects and camera white balance.

A spectral radiance meter can be used to document luminous contrast, glare, off-angle-viewing- luminance & color changes for displays, and verification of non-ionizing visible radiation requirements. Radiance and irradiance meter spectral ranges are typically 350 –780 nanometers, but investing in meter that goes to 1000 nanometers provides a means to document issues with near-infrared light sources that are typically used for line-of-site wireless sensor & communication suites.

- • • When developing beam patterns, goniophotometer testing can confirm beam pattern properties.

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

5

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

Application

### Task Lighting Design Considerations

- Task analysis: cabin area and workstation illumination design are based on planned crew

tasks and their visual task needs.

- Intensity/illumination: crew needs to be able to see in order to perform tasks. Different

tasks require different levels of lamination, it can range from 20 lux for night activities, 100-300 lux for nominal activities and to over 1000 lux for high precision activities. Refer to the Illumination Engineering Society Handbook for guidance.

- Color/chromaticity: certain experiments and indicator lights convey color-coded

information and rely on color fidelity.

- Placement of light sources: work and living areas need to be illuminated.

- Distribution of light/beam pattern: a light that is too tightly or broadly focused can

interfere with mission duties. Characteristics of task area surface materials -reflectivity, absorptivity: especially important to consider if light glares off a surface.

- Behavioral health: circadian rhythm is largely dependent on lighting brightness and

spectrum, and it plays a role in crew alertness/behavioral health. Blue light can be used in the “morning” to help wake the crew up, and red light can be used in the “evening” before bed to help promote melatonin production.

- • • • • Task Lighting Examples

Task lighting is supplemental lighting which may be fixed or portable. Task lighting must be designed to support and be compatible with crew tasks. E.g., lighting directed at task surfaces without impeding crew task performance. Consider beam pattern, glare, control & dimming. Example visual tasks and lighting design considerations

- Body waste & hygiene tasks—area lighting needed for locating and identifying hardware

interfaces and supplies. More intense and positionable lighting needed for body and clothing inspection. Food prep—area lighting needed to locate and identify food in stowage, read preparation instructions, operate food warming or rehydration hardware, and clean food prep area and waste. See following page for extreme environment examples.

- • NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

6

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

Application

### Extreme Environments

Extreme and critical lighting environments are those environments where high risks exist because of harsh lighting conditions with the added challenge of failures impacting human life, vehicle safety, and mission performance. The following list outlines typical scenarios and recommendations to mitigate risks:

- Window Viewing of Spacecraft Operations: Window observations are primarily impacted by

- • glare from direct and indirect light sources from both sides of the window. Impacts can be

mitigated through the use of system integration of surface reflectance, architectural shapes, and artificial light sources for planned viewing area.

- Crewed EVA Servicing of Spacecraft: EVA suits have lights, but the suit’s lighting system may not

be sufficient to illuminate large areas for complicated servicing and exploration tasks. Additional spacecraft surface lighting increases visibility for both the crew and any remote monitoring of crewed activities.

- External Spacecraft Robotic Operations: Robotic operations heavily rely on embedded vision

systems and remote camera monitoring. Lighting needs to be sufficient at both the end-effector worksite and from a larger distance to observe potential collision issues between robotic elbow joints and spacecraft structure.

- Manual docking or planetary landing: Directed lighting is needed to locate and identify docking

target and/or landing area surface features. Lighting for camera or electronic sensor views must accommodate and be compatible with selected hardware and consider environmental conditions of the target scene.

- Lunar: The lunar lighting environment will have unforgiving perpetual glare and shadowing from

collimated sunlight. All imagers requiring visible light for timely docking operations will need supplemental lighting to facilitate dynamic range and signal to noise ratios.

- Reference OCHMO-TB-001 Artemis

### Lighting Considerations Overview and

### OCHMO-TB-023 Extraterrestrial

Surface Transport Vehicles (Rovers) for additional information.

These scenarios may require integrated testing with collimated sunlight; a solar simulator that can produce 125,000 lux at the task surface, with a narrow beam angle and a solar-type spectrum is beneficial.

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

7

Example of lunar surface lighting environment

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

Application

### Illumination Levels

Based on ISS experience, a series of illumination values were generated to meet the needs of various crewmember operations. The requirements in NASA-STD-3001 do not go beyond 750 lux, which is standard for home or office lighting.

### White Light Chromaticity

The color of ambient lighting affects how other colors are perceived among both humans and cameras. To address this and the potential issues that could result from it, requirements were set for the solid-state lighting assembly on the ISS.

ANSI has defined a range of “white” lights corresponding to a range of temperatures.

Current limits for white lights in operational environments are set between 2700 K and 6500 K.

These values are based on past ISS experience and technological capabilities.

### Solid-State Lighting Assembly

White light temperature spectrum

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

8

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

Application

### White Light Color Accuracy/Fidelity

Some tasks, such as a hydrazine test and various medical operations, require careful discernment of colors. Surrounding lighting can disturb these tasks if it prevents accurate color assessment. The Illuminating Engineering Society (IEM) has done extensive research into color accuracy and has developed IES TM-30, Method for Evaluating Light Sources Color Rendition methodology, which was found to be the highest quality source for defining lighting accuracy requirements. It evaluates the accuracy of several colors with an average numeric score, where 100 means perfect accuracy.

IES TM-30 color fidelity test with 16 colors

Different color-sensitive tasks might require different levels of color fidelity. The necessary score can be determined by a task analysis. It should be also be noted that due to the final score being based on several scores, the same score can give different results. The images below score the same on the color fidelity test, but the one on the left appears red- enhanced while the one on the right appears desaturated.

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

9

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

Application

### Lighting Safety

The sources of light utilized in the lighting design system must also be assessed for their safety to prevent ocular and skin injury caused by overexposure to visible, infrared (IR), near-IR, and UV artificial light sources. Examples of artificial light sources include:

- Light-emitting diodes (LEDs)

- Illumination lamps

- Ambient lightning

- Display screens

- Welding and carbon arcs, etc.

- [V2 6117] Artificial Light Exposure Limits for Ultraviolet (UV) Sources The system shall limit crew

exposure from Visible, Infrared (IR), near-IR and Ultraviolet (UV) artificial light sources (180 nm to 3000 nm) at or below the threshold limit value (TLV) as calculated per ACGIH version 2022 or later.

- From: NASA-STD-3001 Volume 2

Exposure to visible light sources whose luminance does not exceed 10,000 Nits is safe (1 Nit = 1 Candela per meter squared; 1 Nit = 1cd/m2). Exposure to visible light sources whose luminance exceeds 10,000 Nits and is below 10,000,000 Nits is considered of marginal severity. Therefore, the ACGIH limits for visible light are required only for artificial sources exceeding 10,000,000 Nits as per Table 6.8-4—ACGIH Requirements Applicability. The ACGIH requirement compliance and pass criteria are summarized in Table 6.8-5—ACGIH Requirement Compliance and Pass Criteria. Although not explicitly stated in ACGIH, the assumed viewing distance is 10 cm since this is the minimum focus length of the human eye and thus the largest optical power/hazard potential on to the retina. ACGIH pass criteria for visible light account for the 0.25 seconds human aversion response (i.e., time to look away and/or blink). However, the protection offered by the aversion response will not occur if the light intensity is great enough to produce damage in less than 0.25 seconds, as explained in the ACGIH. Note: Older than 2014 versions of the ACGIH TLVs cannot be utilized due to substantial differences in hazard functions.

Full containment and/or applied shielding are acceptable methods of risk reduction; however, need to assume worst case hazard severity (Catastrophic) and corresponding fault-tolerance requirements. Containment examples include the use of light-tight structures and enclosures to fully contain the light at the source. The applied shielding has to be placed between crewmember and the light source; examples include screens, optical filters, etc.

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

10

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

Back-Up

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

11

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

### Major Changes Between Revisions

Rev B  Rev C

- Added additional information regarding safety

considerations for lighting design.

Rev A  Rev B

- Updated information to be consistent with NASA-STD-3001

Volume 1 Rev C and Volume 2 Rev D.

Original  Rev A

- Updated information to be consistent with NASA-STD-3001

Volume 1 Rev C and Volume 2 Rev C.

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

12

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

### Referenced Technical Requirements

View the current versions of NASA-STD- 3001 Volume 1 & Volume 2 on the OCHMO Standards website

NASA-STD-3001 Volume 2 Revision D

- [V2 3006] Human-Centered Task Analysis Each human space flight program or project shall perform a

human-centered task analysis to support systems and operations design.

- [V2 6117] Artificial Light Exposure Limits for Ultraviolet (UV) Sources The system shall limit crew

exposure from Visible, Infrared (IR), near-IR and Ultraviolet (UV) artificial light sources (180 nm to 3000 nm) at or below the threshold limit value (TLV) as calculated per ACGIH version 2022 or later.

- [V2 8051] Illumination Levels For interior architectures and exterior operations that do not include the

presence of orbital sunlight, the system shall provide illumination levels to support the range of expected crew tasks, at minimum, per Table 8.7-1—Surface Illuminance Levels, that accommodate both human observers and remote camera systems.

- [V2 8103] Environmental Lighting Attenuation The integrated system architecture shall provide

countermeasures to attenuate environmental lighting and complement existing active lighting architecture.

- [V2 8104] Task-Specific Exterior Lighting for Operational Areas Partially or Fully Lit by Sunlight For

operational areas that include shadowed areas and areas illuminated by the Sun and celestial bodies, the system shall provide passive and/or active solutions that reduce the contrast within shadowed areas of worksites/tasks to within 2 orders of magnitude of the predicted maximum surface luminance of objects, that accommodate both human observers and remote camera systems.

- [V2 8105] Navigation and Wayfinding (Exterior) The system shall provide luminous powered and passive

indicators that assist with proximity, navigation, and object recognition for validation of targets critical to the surface operation.

- [V2 8053] Emergency Lighting The system shall provide emergency lighting (interior and exterior) to

maintain visibility in the event of a general power failure.

- [V2 8059] White Lighting Chromaticity Interior and exterior lighting intended for operational

environments requiring human/camera color vision shall have a chromaticity that falls within the chromaticity gamut for white light for the Correlated Color Temperature (CCT) range of 2700 K to 6500 K as defined by ANSI C78-377, Electric Lamps—Specifications for the Chromaticity of Solid State Lighting Products.

- [V2 8060] White Lighting Color Accuracy Interior and exterior lighting intended for human operational

environments requiring photopic vision accuracy shall have a score of 90 ±10 on a color fidelity metric that is appropriate for the utilized lighting technology, as designated by the Color Fidelity Metric (Rf) defined by IES TM-30, Method for Evaluating Light Sources Color Rendition methodology.

- [V2 8055] Physiological Effects of Light (Circadian Entrainment) The system shall provide the levels of

light to support the physiological effects of light in accordance with Table 8.7-2-Physiological Lighting Specifications.

- [V2 8056] Lighting Controls Lighting systems shall have on-off controls.

- [V2 8057] Lighting Adjustability Interior lights shall be adjustable (dimmable).

- [V2 8058] Glare Prevention The integrated system architecture including surrounding surfaces, support

equipment, visualization tools, and supporting lighting systems shall work in conjunction to minimize visibility and eye-safety impacts from direct and indirect glare.

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

13

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

### Referenced Technical Requirements

View the current versions of NASA-STD- 3001 Volume 1 & Volume 2 on the OCHMO Standards website

NASA-STD-3001 Volume 2 Revision D

- [V2 8106] Extraterrestrial Surface Transport Vehicle (ESTV) Dashboard and Control Lighting The system

shall provide active lighting and attenuation of solar light for manual controls (e.g., unpressurized surface transport vehicle joystick controls, switches and dashboard) and display screens to be visible in all potential natural light levels, including complete darkness.

- [V2 10048] Visual Display Parameters The system shall provide IVA displays that meet the visual display

requirements in Table 10.4-2—Visual Display Parameters.

- [V2 5051] Legibility The system shall provide crew interfaces that are legible under expected operating

conditions.

Artist's illustration of two astronauts on the Moon. Photo: NASA

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

15

### NASA-STD-3001 Technical Brief

OCHMO-TB-026

### Lighting Design

### Reference List

1.

Illumination Engineering Society Handbook, 2010 or latest edition. https://www.ies.org/standards/ies- standards-cross-reference/?_ga=2.4500787.145208125.1640725049-1965823099.1640725049

2. NASA-STD-3000 Man-System Integration Standards. https://msis.jsc.nasa.gov/

3. Human Integration Design Handbook (HIDH). (2014). NASA/SP-2010-3407/REV1.

https://www.nasa.gov/sites/default/files/atoms/files/human_integration_design_handbook_revision_1 .pdf

4. Addressing Challenges to the Design & Test of Operational Lighting Environments for the International

Space Station, Clark, T.A., Presentation 03/2016.

NASA Office of the Chief Health & Medical Officer (OCHMO)

This Technical Brief is derived from NASA-STD-3001 and is for reference only.

It does not supersede or waive existing Agency, Program, or Contract requirements.

12/19/2023

### Rev C

15

---

## Source metadata

```yaml
source_filename: "ochmo-tb-026-lighting-design.pdf"
source_folder: "specific situations/Human Factors and Habitat Design"
source_url: "https://drive.google.com/file/d/1nF9LrYPifxNgFyNSddy76DRrfvMRoXMc/view"
source_drive_id: "1nF9LrYPifxNgFyNSddy76DRrfvMRoXMc"
source_sha256: 6b616118ad194457c8e954582c9ba8b5c0ab9cdcfd1a6cc3f0f32a1e8811a08a
converter: Microsoft MarkItDown
converter_version: 0.1.9
pdf_pages: 15
ocr_performed: false
```
