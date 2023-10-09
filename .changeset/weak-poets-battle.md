---
"@kaizen/draft-form": patch
---

Pulls inputs out of living inside label for checkbox and radio. Inputs will now be a sibling to label, rather than a child of, which was causing a blank accessible name on Windows/Chromium.
