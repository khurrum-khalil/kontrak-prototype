One-sentence: wraps a control with the brand's uppercase micro label and a hint or error line.

```jsx
<Field label="Practice area" hint="Pick the closest match" htmlFor="area">
  <Select id="area" options={areas} />
</Field>
```

Notes: error text replaces hint text and turns the control border `--danger`. Required marker is a gold asterisk.
