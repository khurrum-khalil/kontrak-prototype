import React from 'react';

const tones = {
  neutral: { background: 'var(--parchment)', color: 'var(--text-muted)' },
  navy: { background: 'var(--navy-050)', color: 'var(--navy-700)' },
  gold: { background: 'var(--gold-100)', color: 'var(--gold-800)' },
  success: { background: 'var(--success-soft)', color: 'var(--success)' },
  warning: { background: 'var(--warning-soft)', color: 'var(--warning)' },
  danger: { background: 'var(--danger-soft)', color: 'var(--danger)' },
  solid: { background: 'var(--navy-900)', color: '#fff' },
};

export function Badge({ children, tone = 'neutral', dot, style, className }) {
  return (
    <span className={className} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-body)', fontSize: 'var(--fs-micro-plus)', fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-label-xs)', textTransform: 'uppercase',
      padding: '4px 10px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap',
      ...tones[tone], ...style,
    }}>
      {dot && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor', opacity: 0.8 }} />}
      {children}
    </span>
  );
}
