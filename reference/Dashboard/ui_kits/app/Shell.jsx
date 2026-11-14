(function(){
const { Logo, Icon, Avatar, IconButton, Badge, Tooltip } = window.KontrakDesignSystem_5cbea0;

const NAV = [
  ['dashboard','layout-dashboard','Dashboard'],
  ['briefs','search','Find briefs'],
  ['contracts','file-signature','Contracts'],
  ['messages','message-square','Messages'],
  ['payments','wallet','Payments'],
];

function Sidebar({ route, go }) {
  return (
    <aside style={{ width:236, flexShrink:0, background:'var(--navy-900)', display:'flex', flexDirection:'column', padding:'22px 14px', gap:26 }}>
      <div style={{ padding:'0 8px' }}><Logo tone="onNavy" size={34} tagline={false} /></div>
      <nav style={{ display:'flex', flexDirection:'column', gap:2 }}>
        {NAV.map(([id, ic, label]) => {
          const on = route === id;
          return (
            <a key={id} onClick={() => go(id)} style={{
              display:'flex', alignItems:'center', gap:11, padding:'10px 12px', borderRadius:'var(--radius-md)', cursor:'pointer',
              fontFamily:'var(--font-body)', fontSize:'var(--fs-base)',
              background: on ? 'rgba(255,255,255,0.09)' : 'transparent',
              color: on ? '#fff' : 'rgba(255,255,255,0.6)',
              transition:'var(--transition-ui)',
            }}>
              <Icon name={ic} size={17} color={on ? 'var(--gold-400)' : 'rgba(255,255,255,0.55)'} />{label}
              {id === 'messages' && <span style={{ marginLeft:'auto', width:6, height:6, borderRadius:'50%', background:'var(--gold-500)' }} />}
            </a>
          );
        })}
      </nav>
      <div style={{ marginTop:'auto', padding:16, borderRadius:'var(--radius-md)', background:'rgba(255,255,255,0.04)', border:'1px solid var(--border-inverse)' }}>
        <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-micro)', letterSpacing:'var(--ls-label-xs)', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', marginBottom:10 }}>Visa hours · this week</div>
        <div style={{ display:'flex', justifyContent:'space-between', fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'#fff', marginBottom:8 }}>
          <span>12.5 h</span><span style={{ color:'rgba(255,255,255,0.45)' }}>of 20 h</span>
        </div>
        <div style={{ height:5, borderRadius:3, background:'rgba(255,255,255,0.12)', overflow:'hidden' }}>
          <div style={{ width:'62%', height:'100%', background:'var(--gold-500)' }} />
        </div>
      </div>
    </aside>
  );
}

function TopBar({ title, eyebrow, actions }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, padding:'28px 32px 22px', borderBottom:'1px solid var(--border-subtle)', background:'var(--warm-white)' }}>
      <div>
        {eyebrow && <div className="k-label" style={{ marginBottom:10 }}>{eyebrow}</div>}
        <h1 style={{ font:'300 32px/1.15 var(--font-serif)', color:'var(--text-strong)' }}>{title}</h1>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        {actions}
        <Tooltip label="Notifications"><IconButton label="Notifications" variant="outline"><Icon name="bell" /></IconButton></Tooltip>
        <Avatar name="Aisha Rahman" verified />
      </div>
    </div>
  );
}
Object.assign(window, { Sidebar, TopBar });
})();
