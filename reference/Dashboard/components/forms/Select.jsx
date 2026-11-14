import React from 'react';

const selectShell = (invalid, focus, disabled) => ({
  width: '100%', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', color: 'var(--text-strong)',
  background: disabled ? 'var(--parchment)' : 'var(--surface-card)',
  border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--navy-500)' : 'var(--border-strong)'),
  borderRadius: 'var(--radius-md)', outline: 'none',
  boxShadow: focus ? '0 0 0 3px rgba(200,146,42,0.18)' : 'none',
  transition: 'var(--transition-ui)',
  opacity: disabled ? 0.6 : 1,
});

export function Select({ options = [], invalid, disabled, placeholder, size = 'md', style, className, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 34 : size === 'lg' ? 48 : 40;
  return (
    <span style={{ position: 'relative', display: 'block', width: '100%' }}>
      <select
        disabled={disabled} className={className}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ ...selectShell(invalid, focus, disabled), height: h, padding: '0 34px 0 14px', appearance: 'none', cursor: 'pointer', ...style }}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(o => {
          const v = typeof o === 'string' ? o : o.value;
          const l = typeof o === 'string' ? o : o.label;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
      <span style={{ position: 'absolute', right: 13, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-faint)', fontSize: 10 }}>▾</span>
    </span>
  );
}
