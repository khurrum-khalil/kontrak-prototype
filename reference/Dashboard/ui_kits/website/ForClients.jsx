(function(){
const { Button, Card, Badge, Icon, StatTile, Stepper, Avatar, Rating, Tag, Field, Input, Select, Textarea } = window.KontrakDesignSystem_5cbea0;

const TALENT = [
  { name:'Aisha Rahman', uni:'Humboldt-Universität zu Berlin', area:['Commercial','Privacy'], rate:'€34 / h', rating:4.9, reviews:22 },
  { name:'Jonas Weber', uni:'LMU München', area:['Corporate','M&A support'], rate:'€38 / h', rating:4.8, reviews:16 },
  { name:'Priya Nandra', uni:'Universität Hamburg', area:['Employment'], rate:'€29 / h', rating:5.0, reviews:9 },
];

function ForClients({ go }) {
  return (
    <div>
      <section style={{ background:'var(--navy-900)', color:'#fff', padding:'80px 40px 72px' }}>
        <div style={{ maxWidth:'var(--maxw-content)', margin:'0 auto', display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:56, alignItems:'center' }}>
          <div>
            <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-tiny)', letterSpacing:'var(--ls-eyebrow)', textTransform:'uppercase', color:'var(--gold-400)', marginBottom:18 }}>For clients</div>
            <h1 style={{ font:'300 52px/1.1 var(--font-serif)', color:'#fff', marginBottom:20 }}>Overflow legal work,<br />compliantly staffed</h1>
            <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-lg)', lineHeight:1.6, color:'var(--text-on-navy-muted)', maxWidth:'46ch', marginBottom:30 }}>
              Post a brief and receive scoped bids from verified law students at German universities. We check enrolment, permit wording and hour caps before anyone can bid on your work.
            </p>
            <div style={{ display:'flex', gap:12 }}>
              <Button variant="accent" size="lg" onClick={() => go('signup')} iconRight={<Icon name="arrow-right" size={17} />}>Post a brief</Button>
              <Button variant="onNavy" size="lg" onClick={() => go('pricing')}>See pricing</Button>
            </div>
          </div>
          <Card padding="md">
            <div className="k-label" style={{ marginBottom:16 }}>Post a brief · example</div>
            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              <Field label="Title" htmlFor="t"><Input id="t" defaultValue="Review a SaaS reseller agreement" /></Field>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
                <Field label="Fee" htmlFor="f"><Input id="f" defaultValue="€480" /></Field>
                <Field label="Scoped hours" htmlFor="h" hint="€34 / h effective"><Input id="h" defaultValue="14" /></Field>
              </div>
              <Field label="Jurisdiction" htmlFor="j"><Select id="j" options={['Germany','Austria','Switzerland','EU-wide']} /></Field>
              <Button variant="primary" block onClick={() => go('signup')}>Publish to 2,400 students</Button>
            </div>
          </Card>
        </div>
      </section>

      <section style={{ padding:'48px 40px', background:'var(--parchment)' }}>
        <div style={{ maxWidth:'var(--maxw-content)', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
          <StatTile label="Median first bid" value="6 h" delta="after publishing" />
          <StatTile label="Avg. brief value" value="€410" />
          <StatTile label="Verified students" value="2,400+" />
          <StatTile label="Compliance escalations" value="0" delta="Hour caps enforced" />
        </div>
      </section>

      <section style={{ padding:'80px 40px', maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
        <div className="k-eyebrow" style={{ marginBottom:14 }}>How hiring works</div>
        <h2 style={{ font:'300 38px/1.15 var(--font-serif)', color:'var(--text-strong)', marginBottom:40, maxWidth:'24ch' }}>Four steps, one invoice</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
          {[
            ['file-text','Post the brief','Scope, fee, deadline, jurisdiction. Fixed fee or hourly.'],
            ['users','Review bids','Each bid carries the student\'s university, practice areas, rate and remaining permitted hours.'],
            ['file-signature','Sign','We generate the engagement letter under German law. Both sides sign in-app.'],
            ['wallet','Fund escrow','Fees sit in escrow and release on your sign-off. One monthly invoice with VAT.'],
          ].map(([ic,t,d], i) => (
            <Card key={t} tone="outline" padding="sm" style={{ display:'flex', flexDirection:'column', gap:14 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <Icon name={ic} size={22} color="var(--navy-700)" />
                <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-2xl)', color:'var(--gold-200)' }}>0{i+1}</span>
              </div>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-md)', color:'var(--text-strong)' }}>{t}</div>
              <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-base)', lineHeight:1.6, color:'var(--text-muted)' }}>{d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ padding:'0 40px 80px', maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, alignItems:'start' }}>
          <Card>
            <div className="k-label" style={{ marginBottom:16 }}>Verification we run</div>
            {[
              ['badge-check','Enrolment confirmed with the university registrar'],
              ['shield-check','Residence permit wording read and recorded'],
              ['clock','Remaining day-account balance checked before every bid'],
              ['scale','Practice-area references from prior engagements'],
            ].map(([ic,t]) => (
              <div key={t} style={{ display:'flex', gap:12, alignItems:'flex-start', padding:'13px 0', borderTop:'1px solid var(--border-hairline)' }}>
                <Icon name={ic} size={18} color="var(--navy-500)" />
                <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-base)', lineHeight:1.55, color:'var(--text-body)' }}>{t}</span>
              </div>
            ))}
          </Card>
          <Card>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
              <span className="k-label">Students bidding this week</span>
              <Badge tone="neutral">Example data</Badge>
            </div>
            {TALENT.map(t => (
              <div key={t.name} style={{ display:'flex', gap:12, alignItems:'center', padding:'14px 0', borderTop:'1px solid var(--border-hairline)' }}>
                <Avatar name={t.name} verified />
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-base)', color:'var(--text-strong)' }}>{t.name}</div>
                  <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)' }}>{t.uni}</div>
                  <div style={{ display:'flex', gap:5, marginTop:7 }}>{t.area.map(a => <Tag key={a}>{a}</Tag>)}</div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-md)', color:'var(--text-strong)' }}>{t.rate}</div>
                  <div style={{ marginTop:6 }}><Rating value={t.rating} count={t.reviews} size={11} /></div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </section>

      <section style={{ padding:'0 40px 96px', maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
        <Card tone="navy" padding="lg" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:40 }}>
          <div>
            <h3 style={{ font:'300 30px/1.25 var(--font-serif)', color:'#fff', marginBottom:12 }}>Your first brief is free to post</h3>
            <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-md)', color:'var(--text-on-navy-muted)', maxWidth:'52ch' }}>
              No listing fee, no subscription. We take a platform fee on completed engagements only.
            </p>
          </div>
          <Button variant="accent" size="lg" onClick={() => go('signup')}>Post a brief</Button>
        </Card>
      </section>
    </div>
  );
}
Object.assign(window, { ForClients });
})();
