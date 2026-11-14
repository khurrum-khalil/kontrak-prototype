import React from 'react';

export function Checkbox({ label, description, checked, onChange, disabled, style, className }) {
  return (
    <label className={className} style={{ display: 'flex', gap: 10, alignItems: description ? 'flex-start' : 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span style={{
        width: 18, height: 18, flexShrink: 0, marginTop: description ? 1 : 0,
        borderRadius: 'var(--radius-sm)',
        border: '1px solid ' + (checked ? 'var(--navy-900)' : 'var(--border-strong)'),
        background: checked ? 'var(--navy-900)' : 'var(--surface-card)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'var(--transition-ui)',
      }}>
        {checked && <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2 4.7 8.4 9.5 3.6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
      </span>
      <input type="checkbox" checked={!!checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', color: 'var(--text-body)' }}>{label}</span>
        {description && <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', lineHeight: 1.5 }}>{description}</span>}
      </span>
    </label>
  );
}
