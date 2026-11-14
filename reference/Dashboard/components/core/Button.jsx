import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-medium)',
  border: '1px solid transparent', borderRadius: 'var(--radius-md)',
  cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap',
  transition: 'var(--transition-ui)',
};

const sizes = {
  sm: { height: 32, padding: '0 14px', fontSize: 'var(--fs-sm)', letterSpacing: '0.02em' },
  md: { height: 40, padding: '0 20px', fontSize: 'var(--fs-base)' },
  lg: { height: 48, padding: '0 28px', fontSize: 'var(--fs-md)' },
};

const tones = {
  primary: { background: 'var(--navy-900)', color: '#fff' },
  accent: { background: 'var(--gold-600)', color: 'var(--text-on-gold)' },
  secondary: { background: 'var(--surface-card)', color: 'var(--text-strong)', borderColor: 'var(--border-strong)', boxShadow: 'var(--shadow-card)' },
  ghost: { background: 'transparent', color: 'var(--text-body)' },
  danger: { background: 'var(--danger)', color: '#fff' },
  onNavy: { background: 'rgba(255,255,255,0.10)', color: '#fff', borderColor: 'var(--border-inverse)' },
};

const hovers = {
  primary: { background: 'var(--navy-800)' },
  accent: { background: 'var(--gold-700)' },
  secondary: { background: 'var(--surface-hover)', borderColor: 'var(--stone-400)' },
  ghost: { background: 'var(--parchment)' },
  danger: { background: '#8E241C' },
  onNavy: { background: 'rgba(255,255,255,0.18)' },
};

export function Button({ children, variant = 'primary', size = 'md', block, disabled, iconLeft, iconRight, href, type = 'button', onClick, style, className, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const El = href ? 'a' : 'button';
  const merged = {
    ...base, ...sizes[size], ...tones[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? { transform: 'translateY(1px)' } : null),
    ...(block ? { width: '100%' } : null),
    ...(disabled ? { opacity: 0.42, cursor: 'not-allowed', boxShadow: 'none' } : null),
    ...style,
  };
  return (
    <El
      className={className} href={href} type={href ? undefined : type} disabled={href ? undefined : disabled}
      onClick={disabled ? undefined : onClick} style={merged}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} {...rest}
    >
      {iconLeft}{children}{iconRight}
    </El>
  );
}
