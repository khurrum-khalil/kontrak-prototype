(function(){
const { Card, Avatar, Input, Button, Icon, Badge, IconButton } = window.KontrakDesignSystem_5cbea0;

const THREADS = [
  { id:1, name:'Dana Whitlock', org:'Northlane Studio', last:'Perfect — the risk note is exactly what we needed.', time:'10:24', unread:true },
  { id:2, name:'Priya Nandra', org:'Ferrow Legal', last:'Can you start the NDA pack Monday?', time:'Yesterday' },
  { id:3, name:'Tom Halden', org:'Halden & Co', last:'Sending the source documents shortly.', time:'2 Sep' },
];

const MSGS = [
  { me:false, t:'Morning Aisha — did the reseller mark-up land okay?', at:'09:58' },
  { me:true, t:'Yes, uploaded to the contract page along with the one-page risk note. Two clauses I flagged as materially off-market: 7.2 (uncapped indemnity) and 11.4 (auto-renew without notice).', at:'10:11' },
  { me:false, t:'Perfect — the risk note is exactly what we needed. Approving the escrow release now.', at:'10:24' },
];

function Messages() {
  const [active, setActive] = React.useState(1);
  const [draft, setDraft] = React.useState('');
  const [msgs, setMsgs] = React.useState(MSGS);
  const send = () => { if (!draft.trim()) return; setMsgs([...msgs, { me:true, t:draft, at:'now' }]); setDraft(''); };
  return (
    <div style={{ padding:'24px 32px 32px', display:'flex', gap:20, height:'calc(100vh - 122px)' }}>
      <Card padding="none" style={{ width:288, flexShrink:0, overflow:'hidden' }}>
        <div style={{ padding:'16px 18px', borderBottom:'1px solid var(--border-hairline)' }}>
          <Input size="sm" placeholder="Search messages…" iconLeft={<Icon name="search" size={14} />} />
        </div>
        {THREADS.map(t => (
          <div key={t.id} onClick={() => setActive(t.id)} style={{
            display:'flex', gap:11, padding:'14px 18px', cursor:'pointer',
            borderBottom:'1px solid var(--border-hairline)',
            background: active === t.id ? 'var(--surface-hover)' : 'transparent',
            borderLeft:'2px solid ' + (active === t.id ? 'var(--gold-600)' : 'transparent'),
          }}>
            <Avatar name={t.name} size="sm" />
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ display:'flex', justifyContent:'space-between', gap:8 }}>
                <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-base)', color:'var(--text-strong)' }}>{t.name}</span>
                <span style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-xs)', color:'var(--text-faint)' }}>{t.time}</span>
              </div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', marginTop:3 }}>{t.last}</div>
            </div>
          </div>
        ))}
      </Card>

      <Card padding="none" style={{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden' }}>
        <div style={{ padding:'16px 22px', borderBottom:'1px solid var(--border-hairline)', display:'flex', alignItems:'center', gap:12 }}>
          <Avatar name="Dana Whitlock" verified />
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-md)', color:'var(--text-strong)' }}>Dana Whitlock</div>
            <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)' }}>Northlane Studio · GC</div>
          </div>
          <Badge tone="navy">KTK-2026-0413</Badge>
          <IconButton label="Contract details" variant="outline"><Icon name="file-signature" /></IconButton>
        </div>
        <div style={{ flex:1, overflowY:'auto', padding:'22px', display:'flex', flexDirection:'column', gap:14, background:'var(--warm-white)' }}>
          {msgs.map((m, i) => (
            <div key={i} style={{ alignSelf: m.me ? 'flex-end' : 'flex-start', maxWidth:'62%' }}>
              <div style={{
                padding:'12px 16px', borderRadius:'var(--radius-md)',
                background: m.me ? 'var(--navy-900)' : 'var(--surface-card)',
                color: m.me ? '#fff' : 'var(--text-body)',
                border: m.me ? 'none' : '1px solid var(--border-subtle)',
                fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-base)', lineHeight:1.6,
              }}>{m.t}</div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-xs)', color:'var(--text-faint)', marginTop:5, textAlign: m.me ? 'right' : 'left' }}>{m.at}</div>
            </div>
          ))}
        </div>
        <div style={{ padding:16, borderTop:'1px solid var(--border-hairline)', display:'flex', gap:10 }}>
          <Input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Write a message…" />
          <Button onClick={send} iconRight={<Icon name="send" size={15} />}>Send</Button>
        </div>
      </Card>
    </div>
  );
}
Object.assign(window, { Messages });
})();
