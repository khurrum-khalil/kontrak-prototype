import React from 'react';

export function Tabs({ items = [], value, onChange, variant = 'underline', style, className }) {
  const active = value != null ? value : (items[0] && (items[0].value || items[0]));
  const get = (t) => (typeof t === 'string' ? { value: t, label: t } : t);
  if (variant === 'segmented') {
    return (
      <div className={className} style={{ display: 'inline-flex', gap: 2, padding: 3, background: 'var(--parchment)', borderRadius: 'var(--radius-md)', ...style }}>
        {items.map(raw => {
          const t = get(raw); const on = t.value === active;
          return (
            <button key={t.value} type="button" onClick={() => onChange && onChange(t.value)} style={{
              border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-sm)', padding: '7px 16px',
              fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-medium)',
              background: on ? 'var(--surface-card)' : 'transparent', color: on ? 'var(--text-strong)' : 'var(--text-muted)',
              boxShadow: on ? 'var(--shadow-card)' : 'none', transition: 'var(--transition-ui)',
            }}>{t.label}</button>
          );
        })}
      </div>
    );
  }
  return (
    <div className={className} style={{ display: 'flex', gap: 28, borderBottom: '1px solid var(--border-hairline)', ...style }}>
      {items.map(raw => {
        const t = get(raw); const on = t.value === active;
        return (
          <button key={t.value} type="button" onClick={() => onChange && onChange(t.value)} style={{
            border: 'none', background: 'none', cursor: 'pointer', padding: '0 0 12px',
            fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', fontWeight: on ? 'var(--fw-medium)' : 'var(--fw-regular)',
            color: on ? 'var(--text-strong)' : 'var(--text-muted)',
            borderBottom: '2px solid ' + (on ? 'var(--gold-600)' : 'transparent'), marginBottom: -1,
            transition: 'var(--transition-ui)', display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            {t.label}
            {t.count != null && <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-faint)' }}>{t.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
