import React from 'react';

const tones = {
  info: { border: 'var(--navy-100)', accent: 'var(--navy-600)' },
  success: { border: '#C7E0D5', accent: 'var(--success)' },
  warning: { border: 'var(--gold-200)', accent: 'var(--warning)' },
  danger: { border: '#E8C8C3', accent: 'var(--danger)' },
};

export function Toast({ title, children, tone = 'info', icon, onDismiss, style, className }) {
  const t = tones[tone];
  return (
    <div className={className} role="status" style={{
      display: 'flex', gap: 12, alignItems: 'flex-start', minWidth: 280, maxWidth: 420,
      background: 'var(--surface-card)', border: '1px solid ' + t.border, borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-pop)', padding: '14px 16px', ...style,
    }}>
      {icon && <span style={{ color: t.accent, display: 'flex', marginTop: 1 }}>{icon}</span>}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {title && <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--fs-base)', color: 'var(--text-strong)' }}>{title}</span>}
        {children && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', lineHeight: 1.55, color: 'var(--text-muted)' }}>{children}</span>}
      </div>
      {onDismiss && <span onClick={onDismiss} style={{ cursor: 'pointer', color: 'var(--text-faint)', fontSize: 'var(--fs-md)', lineHeight: 1 }}>×</span>}
    </div>
  );
}
