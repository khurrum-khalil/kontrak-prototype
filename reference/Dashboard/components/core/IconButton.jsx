import React from 'react';

const sizes = { sm: 28, md: 34, lg: 40 };

export function IconButton({ children, label, variant = 'ghost', size = 'md', disabled, onClick, style, className, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const tones = {
    ghost: { background: 'transparent', color: 'var(--text-muted)', borderColor: 'transparent' },
    outline: { background: 'var(--surface-card)', color: 'var(--text-body)', borderColor: 'var(--border-hairline)' },
    solid: { background: 'var(--navy-900)', color: '#fff', borderColor: 'transparent' },
    onNavy: { background: 'rgba(255,255,255,0.08)', color: '#fff', borderColor: 'var(--border-inverse)' },
  };
  const hovers = {
    ghost: { background: 'var(--parchment)', color: 'var(--text-strong)' },
    outline: { background: 'var(--surface-hover)', borderColor: 'var(--border-strong)' },
    solid: { background: 'var(--navy-800)' },
    onNavy: { background: 'rgba(255,255,255,0.16)' },
  };
  return (
    <button
      type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick} className={className}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: d, height: d, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid transparent', borderRadius: 'var(--radius-md)', cursor: 'pointer',
        transition: 'var(--transition-ui)', ...tones[variant], ...(hover && !disabled ? hovers[variant] : null),
        ...(disabled ? { opacity: 0.42, cursor: 'not-allowed' } : null), ...style,
      }}
      {...rest}
    >{children}</button>
  );
}
