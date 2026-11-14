(function(){
const { Button, Card, Badge, Tag, Avatar, Rating, Icon, Field, Input, Textarea, Stepper, Dialog, Toast } = window.KontrakDesignSystem_5cbea0;

function GigDetail({ go }) {
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  return (
    <div style={{ maxWidth:'var(--maxw-content)', margin:'0 auto', padding:'40px 40px 88px' }}>
      <a onClick={() => go('work')} style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)', cursor:'pointer', display:'inline-flex', gap:6, alignItems:'center', marginBottom:24 }}>
        <Icon name="arrow-left" size={14} /> All briefs
      </a>
      <div style={{ display:'grid', gridTemplateColumns:'1.6fr 0.9fr', gap:32, alignItems:'start' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
          <Card>
            <div style={{ display:'flex', justifyContent:'space-between', gap:20, marginBottom:20 }}>
              <div>
                <div className="k-label" style={{ marginBottom:12 }}>Commercial · Contract review</div>
                <h1 style={{ font:'300 34px/1.2 var(--font-serif)', color:'var(--text-strong)', marginBottom:12 }}>Review a SaaS reseller agreement</h1>
                <div style={{ display:'flex', gap:8 }}><Badge tone="gold">Day-cap safe</Badge><Badge tone="navy" dot>Escrow ready</Badge></div>
              </div>
              <div style={{ textAlign:'right', flexShrink:0 }}>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-4xl)', color:'var(--text-strong)', lineHeight:1 }}>€480</div>
                <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)', marginTop:6 }}>fixed fee · 14 h scope · €34.29 / h</div>
              </div>
            </div>
            <div style={{ height:1, background:'var(--border-hairline)', margin:'0 0 20px' }} />
            <div style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-md)', lineHeight:1.7, color:'var(--text-body)', display:'flex', flexDirection:'column', gap:14 }}>
              <p>We're signing our first reseller in the Nordics and need a second pair of eyes on the agreement before it goes back to their counsel.</p>
              <p>Deliverable is a marked-up copy plus a one-page risk note. Our Syndikusanwältin will walk you through the commercial context on a 30-minute call.</p>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginTop:28 }}>
              {[['calendar','Deadline','12 Sep 2026'],['globe','Jurisdiction','Germany · BGB / HGB'],['clock','Scoped hours','14 h · 2 full days']].map(([ic,l,v]) => (
                <div key={l} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                  <Icon name={ic} size={17} color="var(--navy-500)" />
                  <div><div className="k-label" style={{ marginBottom:4 }}>{l}</div><div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-base)', color:'var(--text-strong)' }}>{v}</div></div>
                </div>
              ))}
            </div>
          </Card>
          <Card tone="outline">
            <div className="k-label" style={{ marginBottom:16 }}>What happens after you bid</div>
            <Stepper steps={['Bid sent','Client review','Contract signed','Escrow funded']} current={0} />
          </Card>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:16, position:'sticky', top:100 }}>
          <Card>
            <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:16 }}>
              <Avatar name="Aurelis Studio" size="lg" verified />
              <div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:'var(--fs-md)', color:'var(--text-strong)' }}>Aurelis Studio</div>
                <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)' }}>Remote · Berlin · 14 briefs posted</div>
              </div>
            </div>
            <Rating value={4.9} count={22} />
            <div style={{ height:1, background:'var(--border-hairline)', margin:'18px 0' }} />
            <Button variant="accent" block size="lg" onClick={() => setOpen(true)}>Send a bid</Button>
            <Button variant="ghost" block style={{ marginTop:8 }} iconLeft={<Icon name="bookmark" size={15} />}>Save brief</Button>
          </Card>
          <Card tone="accent" padding="sm">
            <div style={{ display:'flex', gap:10 }}>
              <Icon name="shield-check" size={18} color="var(--gold-700)" />
              <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', lineHeight:1.55, color:'var(--text-body)' }}>
                Fits your remaining <strong>7.5 hours</strong> this week and <strong>54 full days</strong> this year.
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Dialog open={open} eyebrow="Your bid" title="Bid on this brief" width={520} onClose={() => setOpen(false)}
        footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button><Button variant="accent" onClick={() => { setOpen(false); setSent(true); }}>Send bid</Button></>}>
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            <Field label="Your fee" htmlFor="fee"><Input id="fee" defaultValue="€480" /></Field>
            <Field label="Hours you'll bill" htmlFor="hrs" hint="7.5 h left this week · floor €13.90/h"><Input id="hrs" defaultValue="14" /></Field>
          </div>
          <Field label="Scope note" htmlFor="sc"><Textarea id="sc" rows={3} placeholder="How you'd approach the mark-up…" /></Field>
        </div>
      </Dialog>

      {sent && (
        <div style={{ position:'fixed', right:24, bottom:24, zIndex:80 }}>
          <Toast tone="success" title="Bid sent" icon={<Icon name="check-circle" />} onDismiss={() => setSent(false)}>
            Aurelis Studio usually replies within a day.
          </Toast>
        </div>
      )}
    </div>
  );
}
Object.assign(window, { GigDetail });
})();
