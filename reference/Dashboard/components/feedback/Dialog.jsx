import React from 'react';

export function Dialog({ open, title, eyebrow, children, footer, onClose, width = 480, style, className }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(13,27,42,0.44)', backdropFilter: 'blur(3px)', padding: 24,
      animation: 'none',
    }} onClick={onClose}>
      <div
        className={className} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true"
        style={{
          width: '100%', maxWidth: width, background: 'var(--surface-card)', borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-pop)', padding: 'var(--gutter-card)', ...style,
        }}
      >
        {eyebrow && <div className="k-label" style={{ marginBottom: 10 }}>{eyebrow}</div>}
        {title && <h2 style={{ font: 'var(--fw-light) var(--fs-2xl)/1.25 var(--font-serif)', color: 'var(--text-strong)', marginBottom: 14 }}>{title}</h2>}
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', lineHeight: 'var(--lh-body)', color: 'var(--text-body)' }}>{children}</div>
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 28 }}>{footer}</div>}
      </div>
    </div>
  );
}
