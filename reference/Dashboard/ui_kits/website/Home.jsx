(function(){
const { Button, Card, Badge, Icon, StatTile, GigCard, Tag } = window.KontrakDesignSystem_5cbea0;

/* Reveals a block once, on first scroll into view. Fade + 14px rise, nothing else. */
function Reveal({ children, delay = 0, style }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { rootMargin: '-8% 0px -12%' });
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return (
    <div ref={ref} className={'k-reveal' + (seen ? ' in' : '')} style={{ animationDelay: delay + 'ms', ...style }}>
      {children}
    </div>
  );
}

/* Counts a figure up once it is in view. Prefix/suffix keep the brand's formatting. */
function Figure({ to, prefix = '', suffix = '', decimals = 0, duration = 1100 }) {
  const ref = React.useRef(null);
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(to); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setV(to * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { rootMargin: '-10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const shown = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-GB');
  return <span ref={ref}>{prefix}{shown}{suffix}</span>;
}

function Home({ go }) {
  return (
    <div>
      {/* HERO */}
      <section style={{ background:'var(--navy-900)', color:'#fff', padding:'96px 40px 88px' }}>
        <div style={{ maxWidth:'var(--maxw-content)', margin:'0 auto', display:'grid', gridTemplateColumns:'1.15fr 0.85fr', gap:64, alignItems:'center' }}>
          <div>
            <div className="k-enter" style={{ animationDelay:'40ms', fontFamily:'var(--font-body)', fontSize:'var(--fs-tiny)', letterSpacing:'var(--ls-eyebrow)', textTransform:'uppercase', color:'var(--gold-400)', marginBottom:16 }}>
              Legal freelancing for international students · Germany
            </div>
            <div className="k-rule" style={{ animationDelay:'220ms', width:64, height:1.5, background:'var(--gold-500)', marginBottom:24 }} />
            <h1 style={{ font:'300 64px/1.08 var(--font-serif)', color:'#fff', letterSpacing:'-0.01em', marginBottom:22 }}>
              <span className="k-enter" style={{ animationDelay:'120ms', display:'block' }}>Paid legal work</span>
              <span className="k-enter" style={{ animationDelay:'240ms', display:'block' }}>that fits your visa</span>
            </h1>
            <p className="k-enter" style={{ animationDelay:'340ms', fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-lg)', lineHeight:1.6, color:'var(--text-on-navy-muted)', maxWidth:'46ch', marginBottom:32 }}>
              Kontrak matches law students at German universities with real contract work from vetted clients. Every brief is checked against your §16b day account, every fee sits in escrow, every engagement is a signed contract.
            </p>
            <div className="k-enter" style={{ animationDelay:'440ms', display:'flex', gap:12, marginBottom:36 }}>
              <Button variant="accent" size="lg" onClick={() => go('signup')} iconRight={<Icon name="arrow-right" size={17} />}>Join as a student</Button>
              <Button variant="onNavy" size="lg" onClick={() => go('work')}>Browse open briefs</Button>
            </div>
            <div className="k-enter" style={{ animationDelay:'560ms', display:'flex', gap:22, alignItems:'center' }}>
              {[['shield-check','140-day account tracked'],['file-signature','Contract on every gig'],['wallet','Escrow-held fees in EUR']].map(([ic,t]) => (
                <span key={t} style={{ display:'flex', gap:8, alignItems:'center', fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'rgba(255,255,255,0.6)' }}>
                  <Icon name={ic} size={16} color="var(--gold-400)" />{t}
                </span>
              ))}
            </div>
          </div>
          <Card tone="default" padding="none" className="k-fade" style={{ animationDelay:'480ms', overflow:'hidden' }}>
            <div style={{ padding:'20px 24px', borderBottom:'1px solid var(--border-hairline)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span className="k-label">Live briefs</span>
              <span className="k-pulse"><Badge tone="success" dot>34 open</Badge></span>
            </div>
            <div style={{ padding:16, display:'flex', flexDirection:'column', gap:12, background:'var(--warm-white)' }}>
              <GigCard title="Review a SaaS reseller agreement" client="Aurelis Studio" location="Remote · Berlin" rate="€480" period="fixed" tags={['SaaS & IT']} badge="Day-cap safe" posted="Posted 2h ago" onClick={() => go('work')} />
              <GigCard title="DPA and SCC pack for a cloud migration" client="Ferrow Rechtsanwälte" location="München" rate="€34" period="hour" tags={['Data protection']} posted="Posted today" onClick={() => go('work')} />
            </div>
          </Card>
        </div>
      </section>

      {/* PROOF */}
      <section style={{ padding:'56px 40px', background:'var(--parchment)' }}>
        <div style={{ maxWidth:'var(--maxw-content)', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
          {[
            { label:'Students earning', node:<Figure to={2400} suffix="+" /> },
            { label:'Avg. fee per brief', node:<Figure to={410} prefix="€" /> },
            { label:'Paid through escrow', node:<Figure to={2.1} prefix="€" suffix="M" decimals={1} /> },
            { label:'Visa breaches', node:<Figure to={0} />, delta:'Day caps enforced' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <StatTile label={s.label} value={s.node} delta={s.delta} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding:'88px 40px', maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
        <Reveal>
          <div className="k-eyebrow" style={{ marginBottom:14 }}>How it works</div>
          <h2 style={{ font:'300 40px/1.15 var(--font-serif)', color:'var(--text-strong)', marginBottom:48, maxWidth:'22ch' }}>
            Four steps from brief to bank transfer
          </h2>
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
          {[
            ['search','Get matched','We surface briefs that match your practice area, jurisdiction and remaining §16b working days.'],
            ['gavel','Bid your terms','Send a scope, a fee and a timeline. No auctions, no race to the bottom.'],
            ['file-signature','Sign the contract','Kontrak generates the engagement letter under German law. Both sides sign in the app.'],
            ['wallet','Get paid','The client funds escrow before you start. Funds release on sign-off.'],
          ].map(([ic,t,d], i) => (
            <Reveal key={t} delay={i * 110}>
              <Card tone="outline" padding="sm" style={{ display:'flex', flexDirection:'column', gap:14, height:'100%' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <Icon name={ic} size={22} color="var(--navy-700)" />
                  <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-2xl)', color:'var(--gold-200)' }}>0{i+1}</span>
                </div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-md)', color:'var(--text-strong)' }}>{t}</div>
                <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-base)', lineHeight:1.6, color:'var(--text-muted)' }}>{d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VISA BAND */}
      <section style={{ padding:'0 40px 88px', maxWidth:'var(--maxw-content)', margin:'0 auto' }}>
        <Reveal>
          <Card tone="navy" padding="lg" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
            <div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-tiny)', letterSpacing:'var(--ls-eyebrow)', textTransform:'uppercase', color:'var(--gold-400)', marginBottom:16 }}>Built for German student permits</div>
              <h3 style={{ font:'300 32px/1.2 var(--font-serif)', color:'#fff', marginBottom:16 }}>Your 140 days are a hard limit, not a warning</h3>
              <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-md)', lineHeight:1.65, color:'var(--text-on-navy-muted)', marginBottom:24 }}>
                Non-EU students may work 140 full days or 280 half days per calendar year, and 20 hours a week in the lecture period. Kontrak blocks bids that would breach either limit, logs every billed hour against the contract, and keeps an exportable record for your Ausländerbehörde.
              </p>
              <Button variant="onNavy" size="sm" style={{ marginBottom:20 }} onClick={() => go('visa')} iconRight={<Icon name="arrow-right" size={15} />}>Read the German rules</Button>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                {['140 full days / year','20 h/week in lecture period','€13.90 statutory floor','Exportable hour log'].map(t => (
                  <span key={t} style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', padding:'5px 12px', borderRadius:'var(--radius-pill)', border:'1px solid var(--border-inverse)', color:'rgba(255,255,255,0.8)' }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid var(--border-inverse)', borderRadius:'var(--radius-md)', padding:28 }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12 }}>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-micro-plus)', letterSpacing:'var(--ls-label-xs)', textTransform:'uppercase', color:'rgba(255,255,255,0.45)' }}>This week</span>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'#fff' }}>12.5 / 20 h</span>
              </div>
              <Meter />
              {[['Contract review · Aurelis','6.0 h'],['DPA pack · Ferrow Rechtsanwälte','4.5 h'],['Research memo · Halden & Co','2.0 h']].map(([n,hh]) => (
                <div key={n} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderTop:'1px solid var(--border-inverse)', fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)' }}>
                  <span style={{ color:'rgba(255,255,255,0.72)' }}>{n}</span><span style={{ color:'#fff' }}>{hh}</span>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </section>

      {/* QUOTE */}
      <section style={{ padding:'0 40px 96px', maxWidth:'var(--maxw-narrow)', margin:'0 auto', textAlign:'center' }}>
        <Reveal>
          <div style={{ width:1.5, height:52, background:'var(--rule-fade)', margin:'0 auto 28px' }} />
          <p style={{ font:'300 32px/1.35 var(--font-serif)', color:'var(--text-strong)', marginBottom:20 }}>
            “I billed 180 hours in my second year without once guessing whether I was allowed to.”
          </p>
          <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-micro-plus)', letterSpacing:'var(--ls-label-xs)', textTransform:'uppercase', color:'var(--text-faint)' }}>
            Aisha R. · LLM candidate, Humboldt-Universität zu Berlin · Kontrak since 2024
          </div>
        </Reveal>
      </section>
    </div>
  );
}

/* Hour meter that fills once, when the band is reached. */
function Meter() {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setW(62); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setW(62); io.disconnect(); } }, { rootMargin: '-10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ height:6, borderRadius:3, background:'rgba(255,255,255,0.12)', overflow:'hidden', marginBottom:22 }}>
      <div style={{ width: w + '%', height:'100%', background:'var(--gold-500)', transition:'width 1100ms var(--ease-out)' }} />
    </div>
  );
}

Object.assign(window, { Home });
})();
