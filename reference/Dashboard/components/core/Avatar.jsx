import React from 'react';

const sizes = { xs: 24, sm: 32, md: 40, lg: 56, xl: 72 };

export function Avatar({ name = '', src, size = 'md', verified, style, className }) {
  const d = sizes[size] || size;
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <span className={className} style={{ position: 'relative', display: 'inline-flex', flexShrink: 0, ...style }}>
      <span style={{
        width: d, height: d, borderRadius: 'var(--radius-pill)', overflow: 'hidden',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--navy-800)', color: '#fff',
        fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)',
        fontSize: Math.max(9, Math.round(d * 0.36)), letterSpacing: '0.04em',
      }}>
        {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
      </span>
      {verified && (
        <span title="Identity verified" style={{
          position: 'absolute', right: -2, bottom: -2, width: Math.max(10, d * 0.34), height: Math.max(10, d * 0.34),
          borderRadius: '50%', background: 'var(--gold-600)', border: '2px solid var(--surface-card)',
        }} />
      )}
    </span>
  );
}
