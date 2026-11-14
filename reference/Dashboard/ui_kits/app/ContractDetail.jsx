(function(){
const { Card, Badge, Button, Icon, Stepper, Avatar, Dialog, Toast, Field, Input, Checkbox } = window.KontrakDesignSystem_5cbea0;

function ContractDetail({ go }) {
  const [open, setOpen] = React.useState(false);
  const [released, setReleased] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  return (
    <div style={{ padding:'24px 32px 48px', display:'grid', gridTemplateColumns:'1.6fr 0.85fr', gap:20, alignItems:'start' }}>
      <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
        <Card>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:20, marginBottom:22 }}>
            <div>
              <div className="k-label" style={{ marginBottom:10 }}>Engagement letter · KTK-2026-0413</div>
              <h2 style={{ font:'300 26px/1.25 var(--font-serif)', color:'var(--text-strong)', marginBottom:10 }}>Review a SaaS reseller agreement</h2>
              <div style={{ display:'flex', gap:8 }}><Badge tone="success" dot>Escrow funded</Badge><Badge tone="navy">Signed 04 Sep</Badge></div>
            </div>
            <Button variant="secondary" size="sm" iconLeft={<Icon name="download" size={14} />}>PDF</Button>
          </div>
          <Stepper steps={['Scope','Bid accepted','Contract signed','Escrow released']} current={released ? 3 : 2} />
          <div style={{ height:1, background:'var(--border-hairline)', margin:'24px 0' }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:18 }}>
            {[['Fee','£420 fixed'],['Hours billed','6.0 of 12'],['Deadline','12 Sep 2026'],['Jurisdiction','England & Wales']].map(([l,v]) => (
              <div key={l}><div className="k-label" style={{ marginBottom:5 }}>{l}</div><div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-base)', color:'var(--text-strong)' }}>{v}</div></div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="k-label" style={{ marginBottom:16 }}>Time log</div>
          {[['05 Sep','First-pass mark-up','2.5 h'],['06 Sep','Risk note draft','2.0 h'],['08 Sep','Call with GC + revisions','1.5 h']].map(([d,n,h]) => (
            <div key={n} style={{ display:'flex', gap:16, alignItems:'center', padding:'12px 0', borderTop:'1px solid var(--border-hairline)', fontFamily:'var(--font-body)', fontSize:'var(--fs-base)' }}>
              <span style={{ width:64, color:'var(--text-faint)', fontSize:'var(--fs-sm)' }}>{d}</span>
              <span style={{ flex:1, color:'var(--text-body)' }}>{n}</span>
              <span style={{ color:'var(--text-strong)', fontFamily:'var(--font-display)', fontWeight:600 }}>{h}</span>
            </div>
          ))}
          <Button variant="ghost" size="sm" style={{ marginTop:12 }} iconLeft={<Icon name="plus" size={14} />}>Log time</Button>
        </Card>

        <Card tone="sunken">
          <div className="k-label" style={{ marginBottom:14 }}>Clause 4 · Scope of work</div>
          <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-md)', lineHeight:1.75, color:'var(--text-body)' }}>
            The Consultant shall deliver a marked-up copy of the Reseller Agreement together with a written risk note of no more than one page, identifying provisions that materially depart from market standard in the Client's sector.
          </p>
        </Card>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:16, position:'sticky', top:24 }}>
        <Card>
          <div className="k-label" style={{ marginBottom:14 }}>Escrow</div>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-4xl)', color:'var(--text-strong)', lineHeight:1, marginBottom:8 }}>£420</div>
          <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)', marginBottom:20 }}>
            {released ? 'Released 08 Sep · arriving in 1–2 days' : 'Held since 04 Sep · releases on client sign-off'}
          </div>
          <Button variant="accent" block disabled={released} onClick={() => setOpen(true)}>{released ? 'Released' : 'Request release'}</Button>
        </Card>
        <Card padding="sm">
          <div className="k-label" style={{ marginBottom:14 }}>Client</div>
          <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:14 }}>
            <Avatar name="Northlane Studio" verified />
            <div>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-base)' }}>Northlane Studio</div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)' }}>Dana Whitlock · GC</div>
            </div>
          </div>
          <Button variant="secondary" size="sm" block onClick={() => go('messages')} iconLeft={<Icon name="message-square" size={14} />}>Message</Button>
        </Card>
      </div>

      <Dialog open={open} eyebrow="Escrow" title="Request release of £420?" onClose={() => setOpen(false)}
        footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Not yet</Button><Button variant="accent" disabled={!agree} onClick={() => { setOpen(false); setReleased(true); }}>Request release</Button></>}>
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <p>Northlane Studio has 3 working days to raise an issue. After that, funds release automatically.</p>
          <Field label="Delivery note" htmlFor="dn"><Input id="dn" defaultValue="Mark-up + risk note delivered 08 Sep" /></Field>
          <Checkbox checked={agree} onChange={() => setAgree(!agree)} label="The deliverable is complete and matches clause 4" />
        </div>
      </Dialog>

      {released && (
        <div style={{ position:'fixed', right:24, bottom:24, zIndex:80 }}>
          <Toast tone="success" title="Release requested" icon={<Icon name="check-circle" />} onDismiss={() => setReleased(true)}>
            We've notified Dana. You'll be paid on approval.
          </Toast>
        </div>
      )}
    </div>
  );
}
Object.assign(window, { ContractDetail });
})();
