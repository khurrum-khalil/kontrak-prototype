import React from 'react';

export function Rating({ value = 0, count, size = 13, style, className }) {
  const full = Math.round(value * 2) / 2;
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, ...style }}>
      <span style={{ display: 'inline-flex', gap: 2 }}>
        {[1, 2, 3, 4, 5].map(i => (
          <span key={i} style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}>
            <svg viewBox="0 0 20 20" width={size} height={size} style={{ position: 'absolute', inset: 0 }}>
              <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z"
                fill={full >= i ? 'var(--gold-600)' : full >= i - 0.5 ? 'var(--gold-300)' : 'var(--stone-300)'} />
            </svg>
          </span>
        ))}
      </span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>
        {value.toFixed(1)}{count != null && <span style={{ color: 'var(--text-faint)' }}> ({count})</span>}
      </span>
    </span>
  );
}
