(function(){
const { Button, Card, Input, Select, Tag, Tabs, Switch, Icon, GigCard, Badge } = window.KontrakDesignSystem_5cbea0;

const BRIEFS = [
  { title:'Review a SaaS reseller agreement', client:'Aurelis Studio', location:'Remote · Berlin', rate:'€480', period:'fixed', tags:['SaaS & IT','Contract review'], badge:'Day-cap safe', rating:4.9, reviews:22 },
  { title:'DPA and SCC pack for a cloud migration', client:'Ferrow Rechtsanwälte', location:'München', rate:'€34', period:'hour', tags:['Data protection','Drafting'], rating:4.7, reviews:14 },
  { title:'AI Act risk-classification memo for a scoring model', client:'Halden & Co', location:'Remote · EU', rate:'€620', period:'fixed', tags:['AI & regulation','Research'], badge:'Day-cap safe', rating:5.0, reviews:9 },
  { title:'Open-source licence audit for a Series A data room', client:'Nordwind Ventures', location:'Hamburg', rate:'€26', period:'hour', tags:['IP & licensing','Due diligence'], rating:4.4, reviews:31 },
  { title:'Trademark filing support — 6 Nizza classes, fintech brand', client:'Studio Mor', location:'Remote · Köln', rate:'€340', period:'fixed', tags:['IP & licensing','Filings'], rating:4.8, reviews:6 },
  { title:'Werkstudent: SaaS contract templates for a Series A', client:'Kelvin Analytics GmbH', location:'Leipzig', rate:'€29', period:'hour', tags:['Corporate','Drafting'], badge:'Day-cap safe', rating:4.6, reviews:12 },
  { title:'BaFin outsourcing clauses for a payments integration', client:'Selfa Pay GmbH', location:'Frankfurt', rate:'€520', period:'fixed', tags:['Fintech','Regulatory'], rating:4.9, reviews:17 },
  { title:'Market-definition note for a merger filing', client:'Ostwald Economics', location:'Remote · Berlin', rate:'€31', period:'hour', tags:['Competition','Economics'], badge:'Day-cap safe', rating:4.8, reviews:11 },
];

function BrowseWork({ go }) {
  const [tab, setTab] = React.useState('open');
  const [areas, setAreas] = React.useState(['SaaS & IT']);
  const [visaOnly, setVisaOnly] = React.useState(false);
  const toggle = (a) => setAreas(areas.includes(a) ? areas.filter(x => x !== a) : [...areas, a]);
  const list = visaOnly ? BRIEFS.filter(b => b.badge) : BRIEFS;

  return (
    <div style={{ maxWidth:'var(--maxw-content)', margin:'0 auto', padding:'48px 40px 88px' }}>
      <div className="k-eyebrow" style={{ marginBottom:12 }}>Open briefs</div>
      <h1 style={{ font:'300 44px/1.15 var(--font-serif)', color:'var(--text-strong)', marginBottom:32 }}>Find contract work</h1>

      <Card padding="sm" style={{ marginBottom:28, display:'flex', flexDirection:'column', gap:16 }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr auto', gap:12 }}>
          <Input placeholder="Search briefs, clients, practice areas…" iconLeft={<Icon name="search" size={15} />} />
          <Select placeholder="All jurisdictions" options={['Germany','Austria','Switzerland','EU-wide']} />
          <Select placeholder="Any fee type" options={['Fixed fee','Hourly','Retainer']} />
          <Button>Search</Button>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:12, flexWrap:'wrap' }}>
          {['SaaS & IT','Data protection','AI & regulation','IP & licensing','Fintech','Corporate','Competition','Economics'].map(a => (
            <Tag key={a} selected={areas.includes(a)} onClick={() => toggle(a)}>{a}</Tag>
          ))}
          <span style={{ flex:1 }} />
          <Switch checked={visaOnly} onChange={setVisaOnly} label="Fits my remaining days" />
        </div>
      </Card>

      <Tabs value={tab} onChange={setTab} style={{ marginBottom:24 }} items={[
        { value:'open', label:'All open', count:list.length },
        { value:'new', label:'Posted today', count:2 },
        { value:'saved', label:'Saved', count:4 },
      ]} />

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
        {list.map(b => <GigCard key={b.title} {...b} onClick={() => go('gig')} />)}
      </div>

      <div style={{ display:'flex', justifyContent:'center', marginTop:36 }}>
        <Button variant="secondary">Load 26 more briefs</Button>
      </div>
    </div>
  );
}
Object.assign(window, { BrowseWork });
})();
