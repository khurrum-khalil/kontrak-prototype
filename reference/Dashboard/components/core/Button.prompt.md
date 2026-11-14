One-sentence: the standard Kontrak action button — navy for primary actions, gold only for the one highest-intent action on a screen.

```jsx
<Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" />}>Post a brief</Button>
<Button variant="secondary">Save draft</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Notes: hover darkens (never lightens); press nudges down 1px. `variant="onNavy"` for use on the navy footer/hero. Disabled = 42% opacity, no shadow.
