---
"@kaizen/button": patch
---

Fix aria-polite presence on buttons without working states.
* The aria-live="polite" will only be added when a workingLabel is provided to the button.
 * This will mean the content should only be read when inner content updates on buttons with working states