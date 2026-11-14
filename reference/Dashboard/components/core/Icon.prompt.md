One-sentence: renders a Lucide glyph masked to `currentColor`, so it inherits text colour like a font icon.

```jsx
<Icon name="shield-check" size={20} />
<Icon name="file-signature" color="var(--gold-600)" />
```

Notes: Lucide is a flagged substitution (Kontrak has no proprietary icon set). Stroke weight is fixed at 1.5 by Lucide's own outline files. Icons load from unpkg, so they need network access; for offline decks, copy the SVGs into `assets/icons/`.
