import React from 'react';

export function Switch({ checked, onChange, label, disabled, style, className }) {
  return (
    <label className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 38, height: 22, borderRadius: 'var(--radius-pill)', padding: 2, flexShrink: 0,
          background: checked ? 'var(--gold-600)' : 'var(--stone-300)',
          transition: 'background-color var(--dur-base) var(--ease-out)',
          display: 'inline-flex', alignItems: 'center',
        }}
      >
        <span style={{
          width: 18, height: 18, borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-card)',
          transform: 'translateX(' + (checked ? 16 : 0) + 'px)',
          transition: 'transform var(--dur-base) var(--ease-out)',
        }} />
      </span>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', color: 'var(--text-body)' }}>{label}</span>}
    </label>
  );
}
