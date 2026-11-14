(function(){
const { Button, Card, Logo, Field, Input, Select, Checkbox, Radio, Stepper, Icon } = window.KontrakDesignSystem_5cbea0;

function SignUp({ go }) {
  const [role, setRole] = React.useState('student');
  const [ok, setOk] = React.useState(false);
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'calc(100vh - 76px)' }}>
      <div style={{ padding:'72px 64px', display:'flex', flexDirection:'column', justifyContent:'center', maxWidth:560, margin:'0 auto' }}>
        <div className="k-eyebrow" style={{ marginBottom:14 }}>Create your account</div>
        <h1 style={{ font:'300 40px/1.15 var(--font-serif)', color:'var(--text-strong)', marginBottom:28 }}>Start billing legal hours</h1>
        <Stepper steps={['Account','Verify','Practice areas']} current={0} style={{ marginBottom:32 }} />
        <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
          <div style={{ display:'flex', gap:12 }}>
            <Card tone={role==='student'?'accent':'outline'} padding="sm" interactive onClick={() => setRole('student')} style={{ flex:1 }}>
              <Radio checked={role==='student'} label="I'm a student" description="Bid on briefs, bill hours" onChange={() => setRole('student')} />
            </Card>
            <Card tone={role==='client'?'accent':'outline'} padding="sm" interactive onClick={() => setRole('client')} style={{ flex:1 }}>
              <Radio checked={role==='client'} label="I'm hiring" description="Post briefs, fund escrow" onChange={() => setRole('client')} />
            </Card>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            <Field label="First name" htmlFor="f"><Input id="f" placeholder="Aisha" /></Field>
            <Field label="Last name" htmlFor="l"><Input id="l" placeholder="Rahman" /></Field>
          </div>
          <Field label="University email" htmlFor="em" hint="We verify enrolment with your institution."><Input id="em" placeholder="a.rahman@hu-berlin.de" /></Field>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            <Field label="Residence permit" htmlFor="v"><Select id="v" placeholder="Select" options={['§16b student permit (non-EU)','EU / EEA citizen','§16f language course','§20 job-seeking permit']} /></Field>
            <Field label="Work allowance" htmlFor="h"><Select id="h" placeholder="Select" options={['140 full / 280 half days','20 h per week (lecture period)','No restriction (EU/EEA)']} /></Field>
          </div>
          <Checkbox checked={ok} onChange={() => setOk(!ok)} label="I confirm my permit allows paid employment" description="Kontrak enforces your 140-day account and keeps an exportable hour log for your Ausländerbehörde." />
          <Button variant="accent" size="lg" disabled={!ok} onClick={() => go('work')} iconRight={<Icon name="arrow-right" size={17} />}>Continue to verification</Button>
          <div style={{ fontFamily:'var(--font-body)', fontSize:'var(--fs-sm)', color:'var(--text-muted)' }}>
            Already on Kontrak? <a onClick={() => go('work')} style={{ cursor:'pointer' }}>Log in</a>
          </div>
        </div>
      </div>
      <div style={{ background:'var(--navy-900)', padding:'72px 64px', display:'flex', flexDirection:'column', justifyContent:'center', gap:32 }}>
        <Logo tone="onNavy" size={52} />
        <p style={{ font:'300 30px/1.35 var(--font-serif)', color:'#fff', maxWidth:'26ch' }}>
          Every engagement on Kontrak is a signed contract under German law, with the fee already in escrow.
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {[['badge-check','Enrolment verified with your university'],['shield-check','§16b day account tracked automatically'],['scale','No brief below the €13.90 statutory floor'],['wallet','Fees released only on sign-off'],['file-signature','Engagement letter generated for you']].map(([ic,t]) => (
            <span key={t} style={{ display:'flex', gap:12, alignItems:'center', fontFamily:'var(--font-body)', fontWeight:300, fontSize:'var(--fs-md)', color:'var(--text-on-navy-muted)' }}>
              <Icon name={ic} size={18} color="var(--gold-400)" />{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { SignUp });
})();
