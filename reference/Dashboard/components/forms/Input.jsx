import React from 'react';

const inputShell = (invalid, focus, disabled) => ({
  width: '100%', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', color: 'var(--text-strong)',
  background: disabled ? 'var(--parchment)' : 'var(--surface-card)',
  border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--navy-500)' : 'var(--border-strong)'),
  borderRadius: 'var(--radius-md)', outline: 'none',
  boxShadow: focus ? '0 0 0 3px rgba(200,146,42,0.18)' : 'none',
  transition: 'var(--transition-ui)',
  opacity: disabled ? 0.6 : 1,
});

export function Input({ invalid, disabled, iconLeft, size = 'md', style, className, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 34 : size === 'lg' ? 48 : 40;
  const input = (
    <input
      disabled={disabled} className={className}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{ ...inputShell(invalid, focus, disabled), height: h, padding: iconLeft ? '0 14px 0 38px' : '0 14px', ...style }}
      {...rest}
    />
  );
  if (!iconLeft) return input;
  return (
    <span style={{ position: 'relative', display: 'block', width: '100%' }}>
      <span style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-faint)', display: 'flex' }}>{iconLeft}</span>
      {input}
    </span>
  );
}
