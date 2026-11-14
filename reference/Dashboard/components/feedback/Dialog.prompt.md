One-sentence: modal for confirmations and short flows (sign contract, release escrow).

```jsx
<Dialog open={open} eyebrow="Escrow" title="Release £480 to Maya?" onClose={close}
  footer={<><Button variant="ghost" onClick={close}>Not yet</Button><Button variant="accent">Release funds</Button></>}>
  Once released, this payment can't be reversed.
</Dialog>
```

Notes: serif title, sans body — the brand's signature pairing. Scrim is navy, never black.
