(function(){
const { Card, Input, Select, Tag, Switch, Icon, GigCard, Button, Tabs } = window.KontrakDesignSystem_5cbea0;

const ROWS = [
  { title:'Research memo: data transfers post-adequacy', client:'Halden & Co', location:'Remote · EU', rate:'£560', period:'fixed', tags:['Privacy','Research'], badge:'Visa-safe', rating:5.0, reviews:9 },
  { title:'Trademark filing support — 6 classes', client:'Studio Mor', location:'Remote', rate:'£300', period:'fixed', tags:['IP','Filings'], rating:4.8, reviews:6 },
  { title:'Tenancy dispute bundle preparation', client:'Bright Legal Aid', location:'Manchester', rate:'£24', period:'hour', tags:['Litigation'], rating:4.4, reviews:31 },
  { title:'Employment policy refresh for 40 staff', client:'Kelvin Foods', location:'Leeds', rate:'£480', period:'fixed', tags:['Employment'], badge:'Visa-safe', rating:4.6, reviews:12 },
];

function Briefs({ go }) {
  const [areas, setAreas] = React.useState(['Privacy']);
  const [visaOnly, setVisaOnly] = React.useState(false);
  const [tab, setTab] = React.useState('matched');
  const toggle = a => setAreas(areas.includes(a) ? areas.filter(x => x !== a) : [...areas, a]);
  const rows = visaOnly ? ROWS.filter(r => r.badge) : ROWS;
  return (
    <div style={{ padding:'24px 32px 48px', display:'flex', gap:20, alignItems:'start' }}>
      <Card style={{ width:248, flexShrink:0, position:'sticky', top:24 }} padding="sm">
        <div className="k-label" style={{ marginBottom:14 }}>Filters</div>
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <Select placeholder="All jurisdictions" options={['England & Wales','New York','Ontario','EU']} size="sm" />
          <Select placeholder="Any fee type" options={['Fixed fee','Hourly','Retainer']} size="sm" />
          <div>
            <div className="k-label" style={{ marginBottom:10 }}>Practice area</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
              {['Privacy','IP','Litigation','Employment','Corporate','Commercial'].map(a => (
                <Tag key={a} selected={areas.includes(a)} onClick={() => toggle(a)}>{a}</Tag>
              ))}
            </div>
          </div>
          <div style={{ height:1, background:'var(--border-hairline)' }} />
          <Switch checked={visaOnly} onChange={setVisaOnly} label="Visa-safe only" />
          <Button variant="secondary" size="sm" block>Reset</Button>
        </div>
      </Card>
      <div style={{ flex:1, display:'flex', flexDirection:'column', gap:16 }}>
        <div style={{ display:'flex', gap:12 }}>
          <Input placeholder="Search briefs, clients, practice areas…" iconLeft={<Icon name="search" size={15} />} />
          <Select options={['Newest first','Highest fee','Fewest bids']} style={{ width:180 }} />
        </div>
        <Tabs value={tab} onChange={setTab} items={[
          { value:'matched', label:'Matched', count:rows.length },
          { value:'all', label:'All open', count:34 },
          { value:'saved', label:'Saved', count:4 },
        ]} />
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          {rows.map(r => <GigCard key={r.title} {...r} onClick={() => go('contracts')} />)}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Briefs });
})();
