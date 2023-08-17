---
"@kaizen/select": minor
---

- updates sectionName to be optional if sectionHeader is provided
  - This will solve the issue of sectionName and sectionHeader being read twice when they are the same
- Minor style change to ensure hide bullet lists as filtering 
- Minor style changes to allow for default text styles for section headings with just text
- add conditional check to render the sectionName only if provided
- add tests to validate type accessible names are constructed as expected