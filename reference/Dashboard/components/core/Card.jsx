import React from 'react';

export function Card({ children, tone = 'default', padding = 'md', interactive, as = 'div', onClick, style, className, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const El = as;
  const pads = { none: 0, sm: 20, md: 'var(--gutter-card)', lg: 48 };
  const tones = {
    default: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid transparent', boxShadow: 'var(--shadow-card)' },
    outline: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-subtle)', boxShadow: 'none' },
    sunken: { background: 'var(--surface-sunken)', color: 'var(--text-body)', border: '1px solid transparent', boxShadow: 'none' },
    navy: { background: 'var(--surface-inverse)', color: 'var(--text-on-navy)', border: '1px solid var(--border-inverse)', boxShadow: 'none' },
    accent: { background: 'var(--surface-accent-soft)', color: 'var(--text-body)', border: '1px solid var(--gold-200)', boxShadow: 'none' },
  };
  return (
    <El
      className={className} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-md)', padding: pads[padding], transition: 'var(--transition-ui)',
        ...tones[tone],
        ...(interactive ? { cursor: 'pointer' } : null),
        ...(interactive && hover ? { boxShadow: 'var(--shadow-raised)', borderColor: tone === 'navy' ? 'rgba(255,255,255,0.22)' : 'var(--border-strong)' } : null),
        ...style,
      }}
      {...rest}
    >{children}</El>
  );
}
