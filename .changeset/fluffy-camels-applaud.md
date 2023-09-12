---
"@kaizen/rich-text-editor": major
---

Rename `value` prop to reflect uncontrolled form field

To conform to React naming convention for form control props.
Uncontrolled form fields take a `defaultValue` to indicate that
changes to this prop's value will not update the mounted component.
Rather, the component manages its current value as internal state,
and notifies subscribers via `onChange` when it changes.

Consumers will need to update their code to the new prop name. E.g. before:

```jsx
<RichTextEditor value={…}>
```

and after:

```jsx
<RichTextEditor defaultValue={…}>
```
