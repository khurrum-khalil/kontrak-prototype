import React from 'react';

const textareaShell = (invalid, focus, disabled) => ({
  width: '100%', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', color: 'var(--text-strong)',
  background: disabled ? 'var(--parchment)' : 'var(--surface-card)',
  border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--navy-500)' : 'var(--border-strong)'),
  borderRadius: 'var(--radius-md)', outline: 'none',
  boxShadow: focus ? '0 0 0 3px rgba(200,146,42,0.18)' : 'none',
  transition: 'var(--transition-ui)',
  opacity: disabled ? 0.6 : 1,
});

export function Textarea({ invalid, disabled, rows = 4, style, className, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      rows={rows} disabled={disabled} className={className}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{ ...textareaShell(invalid, focus, disabled), padding: '12px 14px', lineHeight: 'var(--lh-body)', resize: 'vertical', ...style }}
      {...rest}
    />
  );
}
