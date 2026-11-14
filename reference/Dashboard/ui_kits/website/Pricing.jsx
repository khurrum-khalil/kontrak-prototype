(function(){
const { Button, Card, Badge, Icon, Tabs, Tooltip } = window.KontrakDesignSystem_5cbea0;

const PLANS = [
  { name:'Student', price:'Free', unit:'', line:'You keep your fee. We take nothing from the student side.', items:['Unlimited bids','Day-account tracking','Engagement letter generated','Escrow protection','Exportable hour log for your Ausländerbehörde'], cta:'Join as a student', tone:'default' },
  { name:'Client · Pay per brief', price:'8%', unit:'of the engagement fee', line:'Charged only when work completes. No listing fee.', items:['Unlimited briefs','Verified students only','Escrow held in EUR','Engagement letter under German law','Monthly invoice with VAT'], cta:'Post a brief', tone:'accent', featured:true },
  { name:'Client · Chambers', price:'€490', unit:'per month', line:'For firms running continuous overflow work.', items:['5% engagement fee','Named account manager','Framework agreement','Bulk hour reporting','SSO and shared billing'], cta:'Talk to us', tone:'default' },
];

const FEES = [
  ['Engagement fee (pay per brief)','8% of fee','Client'],
  ['Engagement fee (Chambers)','5% of fee','Client'],
  ['Escrow handling','Included','—'],
  ['SEPA payout','Included','—'],
  ['Non-EUR payout','1.2% FX','Student'],
  ['Dispute mediation','Included','—'],
];

function Pricing({ go }) {
  const [cycle, setCycle] = React.useState('Monthly');
  return (
    <div>
      <section style={{ padding:'56px 40px 40px', maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
        <div className="k-eyebrow" style={{ marginBottom:14 }}>Pricing</div>
        <h1 style={{ font:'300 46px/1.12 var(--font-serif)', color:'var(--text-strong)', marginBottom:16, maxWidth:'26ch' }}>Students pay nothing. Clients pay on completion.</h1>
        <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-lg)', lineHeight:1.6, color:'var(--text-muted)', maxWidth:'58ch', marginBottom:24 }}>
          All figures in EUR, excluding VAT. Escrow is held with a licensed payment institution in the EEA.
        </p>
        <Tabs variant="segmented" value={cycle} onChange={setCycle} items={['Monthly','Annual · 2 months free']} />
      </section>

      <section style={{ padding:'0 40px 56px', maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20, alignItems:'stretch' }}>
          {PLANS.map(p => (
            <Card key={p.name} tone={p.featured ? 'accent' : 'outline'} style={{ display:'flex', flexDirection:'column', gap:18 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span className="k-label">{p.name}</span>
                {p.featured && <Badge tone="gold">Most used</Badge>}
              </div>
              <div>
                <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-5xl)', color:'var(--text-strong)', lineHeight:1 }}>
                  {p.name === 'Client · Chambers' && cycle !== 'Monthly' ? '€408' : p.price}
                </span>
                {p.unit && <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)', marginLeft:8 }}>{p.unit}</span>}
              </div>
              <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-base)', lineHeight:1.6, color:'var(--text-muted)' }}>{p.line}</p>
              <div style={{ height:1, background:'var(--border-hairline)' }} />
              <div style={{ display:'flex', flexDirection:'column', gap:10, flex:1 }}>
                {p.items.map(i => (
                  <span key={i} style={{ display:'flex', gap:10, alignItems:'flex-start', fontFamily:'var(--font-body)', fontSize:'var(--fs-base)', lineHeight:1.5, color:'var(--text-body)' }}>
                    <Icon name="check" size={16} color="var(--gold-700)" style={{ marginTop:2 }} />{i}
                  </span>
                ))}
              </div>
              <Button variant={p.featured ? 'accent' : 'secondary'} block onClick={() => go(p.name === 'Student' ? 'signup' : 'clients')}>{p.cta}</Button>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ padding:'0 40px 56px', maxWidth:'var(--maxw-content)', margin:'0 auto', display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:20, alignItems:'start' }}>
        <Card padding="none" style={{ overflow:'hidden' }}>
          <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', background:'var(--parchment)' }}>
            {['Fee','Amount','Paid by'].map(h => (
              <div key={h} style={{ padding:'14px 20px', fontFamily:'var(--font-body)', fontSize:'var(--fs-micro-plus)', letterSpacing:'var(--ls-label-xs)', textTransform:'uppercase', color:'var(--text-muted)' }}>{h}</div>
            ))}
          </div>
          {FEES.map(row => (
            <div key={row[0]} style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', borderTop:'1px solid var(--border-hairline)' }}>
              {row.map((c, i) => (
                <div key={i} style={{ padding:'16px 20px', fontFamily:'var(--font-body)', fontSize:'var(--fs-base)', color: i === 0 ? 'var(--text-body)' : 'var(--text-muted)', fontWeight: i === 1 ? 500 : 300 }}>{c}</div>
              ))}
            </div>
          ))}
        </Card>
        <Card tone="navy">
          <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-micro-plus)', letterSpacing:'var(--ls-label-xs)', textTransform:'uppercase', color:'var(--text-on-navy-muted)', marginBottom:16 }}>Worked example</div>
          {[['Brief fee','€480'],['Scoped hours','14 h'],['Effective rate','€34.29 / h'],['Statutory floor','€13.90 / h'],['Platform fee (8%)','€38.40'],['Student receives','€480.00'],['Client pays','€518.40']].map(([l,v], i, arr) => (
            <div key={l} style={{ display:'flex', justifyContent:'space-between', padding:'11px 0', borderTop:'1px solid var(--border-inverse)', fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)' }}>
              <span style={{ color:'rgba(255,255,255,0.66)' }}>{l}</span>
              <span style={{ color: i >= arr.length - 2 ? 'var(--gold-400)' : '#fff', fontFamily:'var(--font-display)', fontWeight:600 }}>{v}</span>
            </div>
          ))}
        </Card>
      </section>

      <section style={{ padding:'0 40px 96px', maxWidth:'var(--maxw-narrow)', margin:'0 auto' }}>
        <div className="k-eyebrow" style={{ marginBottom:20 }}>Questions we get</div>
        {[
          ['Do students ever pay a fee?','No. Bidding, contracts, escrow and the exportable hour log are free for students.'],
          ['When is the platform fee charged?','On release of escrow, against the completed engagement. Cancelled briefs cost nothing.'],
          ['What happens if a brief goes over its scoped hours?','The student cannot log hours past the scope without your written approval in-app, and never past their remaining day-account balance.'],
          ['Is VAT included?','No. German VAT at 19% is added on the platform fee and shown on your monthly invoice.'],
        ].map(([q,a]) => (
          <div key={q} style={{ padding:'20px 0', borderTop:'1px solid var(--border-hairline)' }}>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-md)', color:'var(--text-strong)', marginBottom:8 }}>{q}</div>
            <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-base)', lineHeight:1.65, color:'var(--text-muted)' }}>{a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
Object.assign(window, { Pricing });
})();
