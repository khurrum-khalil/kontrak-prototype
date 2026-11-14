One-sentence: the standard surface container — 6px radius, `--shadow-card`, 36px padding by default.

```jsx
<Card>
  <div className="k-label">Escrow</div>
  <p>Funds release when both parties sign off.</p>
</Card>
<Card tone="navy" padding="lg">…</Card>
```

Notes: never stack two shadowed cards; use `tone="outline"` for nested surfaces. Radius stays 6px at every size.
