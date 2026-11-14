import React from 'react';

export function Field({ label, hint, error, required, htmlFor, children, style, className }) {
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={htmlFor} style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--fs-micro-plus)', letterSpacing: 'var(--ls-label-xs)',
          textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>
          {label}{required && <span style={{ color: 'var(--gold-600)' }}> *</span>}
        </label>
      )}
      {children}
      {(error || hint) && (
        <span style={{ fontSize: 'var(--fs-sm)', color: error ? 'var(--danger)' : 'var(--text-muted)', lineHeight: 1.5 }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
