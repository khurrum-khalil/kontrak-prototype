(function(){
const { Button, Card, Badge, Tag, Tabs, Icon, StatTile, Stepper, Tooltip } = window.KontrakDesignSystem_5cbea0;

const MODELS = [
  { name:'Minijob', hours:'≈ 43.4 h / month', ceiling:'€603 / month gross', tax:'No income tax, flat employer levy', kontrak:'Fee capped so your month stays under €603' },
  { name:'Werkstudent', hours:'20 h / week in lecture period', ceiling:'≈ €1,205 / month at €13.90', tax:'Pension only (9.3%); no health, care or unemployment', kontrak:'Weekly cap enforced before you can bid' },
  { name:'Fixed-fee brief', hours:'Counts as full or half days', ceiling:'140 full / 280 half days per year', tax:'Depends on your permit wording', kontrak:'Effective hourly shown before you accept' },
];

const WAGE = [
  { year:'2025', rate:'€12.82', note:'Previous statutory floor' },
  { year:'2026', rate:'€13.90', note:'In force since 1 January 2026', now:true },
  { year:'2027', rate:'€14.60', note:'Already legislated' },
];

const LOG = [
  { name:'Contract review · Aurelis Studio', days:'8 full days', hours:'52 h' },
  { name:'NDA pack · Ferrow Rechtsanwälte', days:'6 half days', hours:'21 h' },
  { name:'Research memo · Halden & Co', days:'4 full days', hours:'27 h' },
  { name:'HiWi · Chair of Private Law', days:'Exempt', hours:'64 h', exempt:true },
];

function VisaRules({ go }) {
  const [model, setModel] = React.useState('Werkstudent');
  const [rate, setRate] = React.useState(32);
  const [hours, setHours] = React.useState(12);
  const monthly = Math.round(rate * hours * 4.33);

  return (
    <div>
      {/* HEADER BAND */}
      <section style={{ background:'var(--parchment)', padding:'56px 40px 48px' }}>
        <div style={{ maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
          <div className="k-eyebrow" style={{ marginBottom:14 }}>Visa &amp; rules · Germany</div>
          <h1 style={{ font:'300 48px/1.12 var(--font-serif)', color:'var(--text-strong)', marginBottom:18, maxWidth:'24ch' }}>
            What German student rules let you bill
          </h1>
          <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-lg)', lineHeight:1.6, color:'var(--text-muted)', maxWidth:'62ch', marginBottom:20 }}>
            Every brief on Kontrak is checked against the residence-permit limits in §16b of the Aufenthaltsgesetz and the statutory minimum wage under the Mindestlohngesetz. These are the numbers we enforce.
          </p>
          <div style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap' }}>
            <Badge tone="navy">Non-EU · §16b residence permit</Badge>
            <Badge tone="neutral">Reviewed 28 Aug 2026</Badge>
          </div>
        </div>
      </section>

      {/* KEY FIGURES */}
      <section style={{ padding:'40px', maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
          <StatTile label="Statutory minimum wage" value="€13.90" delta="per hour, since 01.01.2026" />
          <StatTile label="Annual work allowance" value="140" delta="full days, or 280 half days" />
          <StatTile label="Lecture-period cap" value="20 h" delta="per week across all employers" />
          <StatTile tone="navy" label="Minijob ceiling" value="€603" delta="per month · ≈ 43.4 h" />
        </div>
      </section>

      {/* DAY ACCOUNT */}
      <section style={{ padding:'0 40px 48px', maxWidth:'var(--maxw-content)', margin:'0 auto', display:'grid', gridTemplateColumns:'1.25fr 1fr', gap:20, alignItems:'start' }}>
        <Card>
          <div className="k-label" style={{ marginBottom:14 }}>The day account · §16b(3) AufenthG</div>
          <h2 style={{ font:'300 28px/1.25 var(--font-serif)', color:'var(--text-strong)', marginBottom:16 }}>140 full days, 280 half days, one calendar year</h2>
          <div style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-md)', lineHeight:1.7, color:'var(--text-body)', display:'flex', flexDirection:'column', gap:12 }}>
            <p>Since 1 March 2024 the allowance is 140 full working days or 280 half working days per calendar year, raised from 120 / 240. A day of more than four hours is a full day; four hours or fewer is a half day. One full day equals two half days, and the two buckets can be mixed.</p>
            <p>The account resets on 1 January and runs to 31 December — not with your academic year. If you arrive in September, you still get the whole 140 days for that year.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:24 }}>
            <div>
              <div className="k-label" style={{ marginBottom:10 }}>Counts against the cap</div>
              {['Paid briefs through Kontrak','Werkstudent and Minijob days','Days worked for any other employer'].map(t => (
                <div key={t} style={{ display:'flex', gap:9, alignItems:'flex-start', padding:'6px 0', fontFamily:'var(--font-body)', fontSize:'var(--fs-base)', color:'var(--text-body)' }}>
                  <Icon name="dot" size={16} color="var(--navy-500)" />{t}
                </div>
              ))}
            </div>
            <div>
              <div className="k-label" style={{ marginBottom:10 }}>Exempt</div>
              {['HiWi work at your university','Mandatory curriculum internships','Sick days and paid holiday'].map(t => (
                <div key={t} style={{ display:'flex', gap:9, alignItems:'flex-start', padding:'6px 0', fontFamily:'var(--font-body)', fontSize:'var(--fs-base)', color:'var(--text-body)' }}>
                  <Icon name="check" size={16} color="var(--success)" />{t}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card tone="navy">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:16 }}>
            <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-micro-plus)', letterSpacing:'var(--ls-label-xs)', textTransform:'uppercase', color:'var(--text-on-navy-muted)' }}>Your day account · 2026</span>
            <Badge tone="gold">Example</Badge>
          </div>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-5xl)', color:'#fff', lineHeight:1 }}>86<span style={{ fontSize:'var(--fs-xl)', color:'var(--text-on-navy-muted)' }}> / 140</span></div>
          <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-on-navy-muted)', margin:'8px 0 16px' }}>full days used · 54 remaining</div>
          <div style={{ height:6, borderRadius:3, background:'rgba(255,255,255,0.12)', overflow:'hidden', marginBottom:20 }}>
            <div style={{ width:'61%', height:'100%', background:'var(--gold-500)' }} />
          </div>
          {LOG.map(l => (
            <div key={l.name} style={{ display:'flex', justifyContent:'space-between', gap:12, padding:'11px 0', borderTop:'1px solid var(--border-inverse)', fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)' }}>
              <span style={{ color:'rgba(255,255,255,0.72)' }}>{l.name}</span>
              <span style={{ color: l.exempt ? 'var(--gold-400)' : '#fff', whiteSpace:'nowrap' }}>{l.days}</span>
            </div>
          ))}
        </Card>
      </section>

      {/* MODELS TABLE */}
      <section style={{ padding:'0 40px 48px', maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
        <div className="k-eyebrow" style={{ marginBottom:14 }}>Work models</div>
        <h2 style={{ font:'300 34px/1.2 var(--font-serif)', color:'var(--text-strong)', marginBottom:24 }}>Three ways students bill on Kontrak</h2>
        <Card padding="none" style={{ overflow:'hidden' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.1fr 1.1fr 1.4fr 1.4fr', background:'var(--parchment)' }}>
            {['Model','Hours','Ceiling','Social security','What Kontrak does'].map(h => (
              <div key={h} style={{ padding:'14px 20px', fontFamily:'var(--font-body)', fontSize:'var(--fs-micro-plus)', letterSpacing:'var(--ls-label-xs)', textTransform:'uppercase', color:'var(--text-muted)' }}>{h}</div>
            ))}
          </div>
          {MODELS.map(m => (
            <div key={m.name} style={{ display:'grid', gridTemplateColumns:'1fr 1.1fr 1.1fr 1.4fr 1.4fr', borderTop:'1px solid var(--border-hairline)' }}>
              <div style={{ padding:'18px 20px', fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-base)', color:'var(--text-strong)' }}>{m.name}</div>
              {[m.hours, m.ceiling, m.tax, m.kontrak].map((v, i) => (
                <div key={i} style={{ padding:'18px 20px', fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-base)', lineHeight:1.55, color: i === 3 ? 'var(--text-body)' : 'var(--text-muted)' }}>{v}</div>
              ))}
            </div>
          ))}
        </Card>
      </section>

      {/* WAGE FLOOR + ESTIMATOR */}
      <section style={{ padding:'0 40px 48px', maxWidth:'var(--maxw-content)', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1.15fr', gap:20, alignItems:'start' }}>
        <Card>
          <div className="k-label" style={{ marginBottom:14 }}>Minimum wage · MiLoG</div>
          <h3 style={{ font:'300 26px/1.25 var(--font-serif)', color:'var(--text-strong)', marginBottom:18 }}>The floor applies to you too</h3>
          <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-base)', lineHeight:1.65, color:'var(--text-muted)', marginBottom:20 }}>
            The statutory minimum wage applies regardless of nationality. Kontrak blocks any brief whose fee divided by its scoped hours falls below the floor in force.
          </p>
          {WAGE.map(w => (
            <div key={w.year} style={{ display:'flex', alignItems:'center', gap:14, padding:'12px 0', borderTop:'1px solid var(--border-hairline)' }}>
              <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-faint)', width:44 }}>{w.year}</span>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-xl)', color: w.now ? 'var(--gold-700)' : 'var(--text-strong)', width:86 }}>{w.rate}</span>
              <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)', flex:1 }}>{w.note}</span>
              {w.now && <Badge tone="gold">In force</Badge>}
            </div>
          ))}
        </Card>

        <Card>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18 }}>
            <span className="k-label">Earnings estimator</span>
            <Tabs variant="segmented" value={model} onChange={setModel} items={['Minijob','Werkstudent']} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginBottom:22 }}>
            <div>
              <div className="k-label" style={{ marginBottom:10 }}>Your rate · €{rate} / h</div>
              <input type="range" min="13.9" max="60" step="1" value={rate} onChange={e => setRate(Number(e.target.value))} style={{ width:'100%', accentColor:'var(--gold-600)' }} />
              <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-xs)', color:'var(--text-faint)', marginTop:6 }}>Floor €13.90 · median on Kontrak €32</div>
            </div>
            <div>
              <div className="k-label" style={{ marginBottom:10 }}>Hours per week · {hours} h</div>
              <input type="range" min="2" max="20" step="1" value={hours} onChange={e => setHours(Number(e.target.value))} style={{ width:'100%', accentColor:'var(--gold-600)' }} />
              <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-xs)', color:'var(--text-faint)', marginTop:6 }}>Lecture-period cap 20 h</div>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:20, padding:'20px 0', borderTop:'1px solid var(--border-hairline)' }}>
            <div>
              <div className="k-label" style={{ marginBottom:6 }}>Gross per month</div>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-4xl)', color:'var(--text-strong)', lineHeight:1 }}>€{monthly.toLocaleString('en-GB')}</div>
            </div>
            <div style={{ textAlign:'right' }}>
              <div className="k-label" style={{ marginBottom:6 }}>Days billed / year</div>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-2xl)', color:'var(--text-strong)' }}>≈ {Math.min(140, Math.round(hours / 4 * 52))} half days</div>
            </div>
          </div>
          {model === 'Minijob' && monthly > 603 && (
            <div style={{ display:'flex', gap:10, padding:'14px 16px', borderRadius:'var(--radius-md)', background:'var(--warning-soft)', marginTop:4 }}>
              <Icon name="triangle-alert" size={17} color="var(--warning)" />
              <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', lineHeight:1.55, color:'var(--text-body)' }}>
                Over the €603 Minijob ceiling. At this rate the engagement becomes a Midijob and full social contributions apply.
              </span>
            </div>
          )}
          {model === 'Werkstudent' && (
            <div style={{ display:'flex', gap:10, padding:'14px 16px', borderRadius:'var(--radius-md)', background:'var(--surface-accent-soft)', border:'1px solid var(--gold-200)', marginTop:4 }}>
              <Icon name="info" size={17} color="var(--gold-700)" />
              <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', lineHeight:1.55, color:'var(--text-body)' }}>
                Werkstudent status exempts you from health, care and unemployment contributions. Pension insurance of 9.3% still applies.
              </span>
            </div>
          )}
        </Card>
      </section>

      {/* SELF-EMPLOYMENT WARNING */}
      <section style={{ padding:'0 40px 48px', maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
        <Card tone="outline" style={{ display:'grid', gridTemplateColumns:'auto 1fr auto', gap:24, alignItems:'center' }}>
          <Icon name="shield-alert" size={26} color="var(--danger)" />
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-md)', color:'var(--text-strong)', marginBottom:8 }}>Freelance and self-employed work needs separate permission</div>
            <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-base)', lineHeight:1.6, color:'var(--text-muted)', maxWidth:'80ch' }}>
              A §16b permit covers employment, not self-employment. Freelancing generally requires approval from your Ausländerbehörde, and the wording on your permit is what governs. Kontrak asks for your permit wording during verification and routes engagements accordingly — but the decision sits with your authority, not with us.
            </p>
          </div>
          <Button variant="secondary" onClick={() => go('signup')}>Check my permit</Button>
        </Card>
      </section>

      {/* SEMESTER RHYTHM */}
      <section style={{ padding:'0 40px 64px', maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
        <Card tone="sunken">
          <div className="k-label" style={{ marginBottom:20 }}>How a year usually runs</div>
          <Stepper steps={['Lecture period · 20 h/week','Semester break · full-time allowed','Lecture period · back to 20 h','1 January · account resets']} current={1} />
        </Card>
      </section>

      {/* SOURCES */}
      <section style={{ padding:'0 40px 88px', maxWidth:'var(--maxw-narrow)', margin:'0 auto' }}>
        <div className="k-label" style={{ marginBottom:16 }}>Sources</div>
        <div style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-sm)', lineHeight:1.8, color:'var(--text-muted)', display:'flex', flexDirection:'column', gap:4 }}>
          <span>§16b(3) Aufenthaltsgesetz — 140 full / 280 half working days per calendar year, in force since 1 March 2024.</span>
          <span>Fifth Minimum Wage Adjustment Ordinance (MiLoV5) — €13.90 per hour from 1 January 2026, €14.60 from 1 January 2027.</span>
          <span>Geringfügigkeitsgrenze — €603 per month (€7,236 per year) in 2026, indexed to the minimum wage.</span>
          <span style={{ color:'var(--text-faint)', marginTop:10 }}>This page is general information, not legal advice. Your residence permit, your Ausländerbehörde and your university international office govern your individual case.</span>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { VisaRules });
})();
