import React from 'react';

export function StatTile({ label, value, delta, tone = 'default', style, className }) {
  const inverse = tone === 'navy';
  return (
    <div className={className} style={{
      background: inverse ? 'var(--surface-inverse)' : 'var(--surface-card)',
      border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'transparent'),
      boxShadow: inverse ? 'none' : 'var(--shadow-card)',
      borderRadius: 'var(--radius-md)', padding: '20px 22px',
      display: 'flex', flexDirection: 'column', gap: 8, ...style,
    }}>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--fs-micro-plus)', letterSpacing: 'var(--ls-label-sm)',
        textTransform: 'uppercase', color: inverse ? 'var(--text-on-navy-muted)' : 'var(--text-faint)',
      }}>{label}</span>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-3xl)',
        lineHeight: 1, letterSpacing: 'var(--ls-tight)', color: inverse ? '#fff' : 'var(--text-strong)',
      }}>{value}</span>
      {delta && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: inverse ? 'var(--gold-400)' : 'var(--success)' }}>{delta}</span>}
    </div>
  );
}
