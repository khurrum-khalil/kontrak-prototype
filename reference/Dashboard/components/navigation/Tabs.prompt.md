One-sentence: tab bar — underline variant for page sections, segmented for filters inside a card.

```jsx
<Tabs items={[{value:'open',label:'Open briefs',count:12},{value:'mine',label:'My bids'}]} value={tab} onChange={setTab} />
<Tabs variant="segmented" items={['Fixed fee','Hourly']} value={mode} onChange={setMode} />
```

Notes: the active underline is gold, never navy; inactive labels are `--text-muted`.
