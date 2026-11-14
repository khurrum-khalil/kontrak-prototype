(function(){
const { Logo, Button, Icon } = window.KontrakDesignSystem_5cbea0;

function SiteHeader({ route, go }) {
  const links = [['work','Find work'],['clients','For clients'],['visa','Visa & rules'],['pricing','Pricing']];
  return (
    <header style={{ position:'sticky', top:0, zIndex:30, background:'rgba(247,245,240,0.88)', backdropFilter:'blur(10px)', borderBottom:'1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth:'var(--maxw-content)', margin:'0 auto', padding:'0 40px', height:76, display:'flex', alignItems:'center', gap:40 }}>
        <span style={{ cursor:'pointer' }} onClick={() => go('home')}><Logo size={38} tagline={false} /></span>
        <nav style={{ display:'flex', gap:28, flex:1 }}>
          {links.map(([id,label]) => (
            <a key={id} onClick={() => go(id)} style={{
              fontFamily:'var(--font-body)', fontSize:'var(--fs-base)', cursor:'pointer',
              color: route === id ? 'var(--text-strong)' : 'var(--text-muted)',
            }}>{label}</a>
          ))}
        </nav>
        <div style={{ display:'flex', gap:10, alignItems:'center' }}>
          <Button variant="ghost" size="sm" onClick={() => go('signup')}>Log in</Button>
          <Button variant="primary" size="sm" onClick={() => go('signup')}>Join as a student</Button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ go = () => {} }) {
  const cols = [
    ['For students', [['Find work','work'],['Visa & hour rules','visa'],['Get verified','signup'],['Rates guide','visa']]],
    ['For clients', [['Post a brief','clients'],['How vetting works','clients'],['Pricing','pricing'],['Escrow & payments','pricing']]],
    ['Company', [['About','home'],['Careers','home'],['Press','home'],['Contact','home']]],
  ];
  return (
    <footer style={{ background:'var(--navy-900)', color:'var(--text-on-navy)', padding:'64px 40px 40px' }}>
      <div style={{ maxWidth:'var(--maxw-content)', margin:'0 auto', display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:40 }}>
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <Logo tone="onNavy" size={40} />
          <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-base)', lineHeight:1.65, color:'var(--text-on-navy-muted)', maxWidth:'30ch' }}>
            Legal freelancing built around international students in Germany — scoped, signed and paid in one place.
          </p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h} style={{ display:'flex', flexDirection:'column', gap:12 }}>
            <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-micro)', letterSpacing:'var(--ls-label-sm)', textTransform:'uppercase', color:'rgba(255,255,255,0.38)' }}>{h}</div>
            {items.map(([label, r]) => <a key={label} onClick={() => go(r)} style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-base)', color:'var(--text-on-navy-muted)', cursor:'pointer' }}>{label}</a>)}
          </div>
        ))}
      </div>
      <div style={{ maxWidth:'var(--maxw-content)', margin:'48px auto 0', paddingTop:24, borderTop:'1px solid var(--border-inverse)', display:'flex', justifyContent:'space-between' }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'rgba(255,255,255,0.38)' }}>© 2026 Kontrak Ltd.</span>
        <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-micro)', letterSpacing:'var(--ls-label-sm)', textTransform:'uppercase', color:'rgba(255,255,255,0.28)' }}>Work Legal · Work Smart</span>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
})();
