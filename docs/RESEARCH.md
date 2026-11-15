# Research library

The project includes **510 original PDF files** and **503 Markdown documents**, plus the original collection README. The topic folders and original document bytes are preserved.

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

The [import manifest](../Investigation%20%28.md%29/conversion_manifest.json) records the source file IDs, file sizes, SHA-256 checksums and all 503 PDF-to-Markdown correspondences. Seven additional PDF files currently have no Markdown counterpart in the source folder.

Two source folders contain repeated PDF filenames. Both copies are retained; one copy in each pair has a ` (2)` filename suffix. The manifest records their original names and source IDs.

The imported Markdown README describes the conversion performed before this import. This change imports the available files without changing their contents or recreating the conversion.
