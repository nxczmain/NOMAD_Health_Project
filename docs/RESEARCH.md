# Research library

NOMAD v3.2.0 indexes **554 Markdown references**, including the ISS medical kit and 44 National Institute of Mental Health publications with links to their sources. The Windows download includes the index, local originals where bundled, and page images for the ISS emergency checklist and medical kit.

| Topic | PDF | Markdown |
| --- | ---: | ---: |
| First Aid | [8](../investigation/First%20Aid/) | [1](../Investigation%20%28.md%29/First%20Aid/) |
| Mission Risk Reports | [26](../investigation/Mission%20Risk%20Reports/) | [26](../Investigation%20%28.md%29/Mission%20Risk%20Reports/) |
| NASA IMM - All Documentation Per Condition | [400](../investigation/NASA%20IMM%20-%20All%20Documentation%20Per%20Condition/) | [400](../Investigation%20%28.md%29/NASA%20IMM%20-%20All%20Documentation%20Per%20Condition/) |
| specific situations | [73](../investigation/specific%20situations/) | [73](../Investigation%20%28.md%29/specific%20situations/) |
| Standards and Requirements | [3](../investigation/Standards%20and%20Requirements/) | [3](../Investigation%20%28.md%29/Standards%20and%20Requirements/) |

## Use the documents in NETIN

Clone or download the repository. In NETIN, open **Documents**, choose the local **Investigation (.md)** folder, and allow the Markdown library to finish importing. The PDF folder contains the originals for checking tables, figures and layout.

The existing Windows ZIP continues to include the small demo library. Load the research folder explicitly to use the complete collection.

## File correspondence and integrity

The [original import manifest](../Investigation%20%28.md%29/conversion_manifest.json) records 510 PDF files and 503 PDF-to-Markdown correspondences. Of seven entries initially listed without Markdown, six match an already converted file by SHA-256. This release adds the missing medical kit conversion. NIMH entries contain attributed text and links to the publications. The ERC 2025 reference summarizes its microgravity section and links to the original page.

Two source folders contain repeated PDF filenames. Both copies are retained; one copy in each pair has a ` (2)` filename suffix. The manifest records their original names and source IDs.

The imported Markdown README describes the conversion performed before this import. This change imports the available files without changing their contents or recreating the conversion.
