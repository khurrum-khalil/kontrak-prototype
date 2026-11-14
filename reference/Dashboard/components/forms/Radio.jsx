import React from 'react';

export function Radio({ label, description, checked, onChange, name, value, disabled, style, className }) {
  return (
    <label className={className} style={{ display: 'flex', gap: 10, alignItems: description ? 'flex-start' : 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span style={{
        width: 18, height: 18, flexShrink: 0, marginTop: description ? 1 : 0, borderRadius: '50%',
        border: '1px solid ' + (checked ? 'var(--navy-900)' : 'var(--border-strong)'),
        background: 'var(--surface-card)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'var(--transition-ui)',
      }}>
        {checked && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--navy-900)' }} />}
      </span>
      <input type="radio" name={name} value={value} checked={!!checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', color: 'var(--text-body)' }}>{label}</span>
        {description && <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', lineHeight: 1.5 }}>{description}</span>}
      </span>
    </label>
  );
}
