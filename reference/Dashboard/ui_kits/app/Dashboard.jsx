(function(){
const { Card, StatTile, Badge, Button, Icon, GigCard, Stepper, Tabs, Avatar } = window.KontrakDesignSystem_5cbea0;

function Dashboard({ go }) {
  const [tab, setTab] = React.useState('active');
  return (
    <div style={{ padding:'28px 32px 48px', display:'flex', flexDirection:'column', gap:20 }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
        <StatTile label="In escrow" value="£1,240" delta="+£480 this week" />
        <StatTile label="Paid out (2026)" value="£8,610" />
        <StatTile label="Hours logged" value="126" />
        <StatTile tone="navy" label="Open bids" value="3" delta="1 awaiting reply" />
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:20, alignItems:'start' }}>
        <Card padding="none">
          <div style={{ padding:'22px 24px 0' }}>
            <Tabs value={tab} onChange={setTab} items={[
              { value:'active', label:'Active work', count:2 },
              { value:'bids', label:'My bids', count:3 },
              { value:'done', label:'Completed', count:11 },
            ]} />
          </div>
          <div style={{ padding:24, display:'flex', flexDirection:'column', gap:18 }}>
            {[
              { title:'Review a SaaS reseller agreement', client:'Northlane Studio', step:2, fee:'£420', due:'Due 12 Sep', badge:['Escrow funded','success'] },
              { title:'Draft an NDA pack for a seed round', client:'Ferrow Legal', step:1, fee:'£38 / h', due:'Due 20 Sep', badge:['Awaiting signature','warning'] },
            ].map(w => (
              <div key={w.title} style={{ display:'flex', flexDirection:'column', gap:14, paddingBottom:18, borderBottom:'1px solid var(--border-hairline)' }}>
                <div style={{ display:'flex', justifyContent:'space-between', gap:16, alignItems:'flex-start' }}>
                  <div style={{ display:'flex', gap:12 }}>
                    <Avatar name={w.client} verified />
                    <div>
                      <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-md)', color:'var(--text-strong)' }}>{w.title}</div>
                      <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)', marginTop:3 }}>{w.client} · {w.due}</div>
                    </div>
                  </div>
                  <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                    <Badge tone={w.badge[1]} dot>{w.badge[0]}</Badge>
                    <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-md)', color:'var(--text-strong)' }}>{w.fee}</span>
                  </div>
                </div>
                <Stepper steps={['Scope','Bid accepted','Contract signed','Escrow released']} current={w.step} />
              </div>
            ))}
            <Button variant="ghost" size="sm" style={{ alignSelf:'flex-start' }} onClick={() => go('contracts')} iconRight={<Icon name="arrow-right" size={14} />}>Open contracts</Button>
          </div>
        </Card>

        <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
          <Card>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
              <span className="k-label">Matched for you</span>
              <a onClick={() => go('briefs')} style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', cursor:'pointer' }}>See all</a>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              <GigCard title="Research memo: data transfers" client="Halden & Co" rate="£560" period="fixed" tags={['Privacy']} badge="Visa-safe" posted="2h ago" onClick={() => go('briefs')} style={{ boxShadow:'none', border:'1px solid var(--border-subtle)' }} />
              <GigCard title="Trademark filing support" client="Studio Mor" rate="£300" period="fixed" tags={['IP']} posted="Today" onClick={() => go('briefs')} style={{ boxShadow:'none', border:'1px solid var(--border-subtle)' }} />
            </div>
          </Card>
          <Card tone="accent" padding="sm">
            <div style={{ display:'flex', gap:10 }}>
              <Icon name="shield-check" size={18} color="var(--gold-700)" />
              <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', lineHeight:1.55 }}>
                7.5 hours left this week. Bids over that limit are blocked automatically.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Dashboard });
})();
