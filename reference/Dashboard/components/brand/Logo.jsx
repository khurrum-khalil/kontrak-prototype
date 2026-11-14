import React from 'react';

const MARK = {
  navy: { bg: '#0D1B2A', arm: '#C8922A', upper: '#fff' },
  onNavy: { bg: 'rgba(255,255,255,0.08)', arm: '#E4B35A', upper: '#fff' },
  onGold: { bg: 'rgba(255,255,255,0.15)', arm: 'rgba(255,255,255,0.55)', upper: '#fff' },
};

export function Logo({ variant = 'lockup', tone = 'navy', size = 40, tagline = true, className, style }) {
  const c = MARK[tone] || MARK.navy;
  const radius = size >= 64 ? 16 : size >= 32 ? 14 : 12;
  const mark = (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none" aria-hidden="true" style={{ flexShrink: 0, filter: tone === 'navy' && size >= 64 ? 'drop-shadow(var(--shadow-lift))' : undefined }}>
      <rect width="72" height="72" rx={radius} fill={c.bg} />
      <rect x="18" y="15" width="6" height="42" rx="1" fill={c.upper} />
      <polygon points="24,36 46,15 53,15 31,36" fill={c.upper} />
      <polygon points="24,36 46,57 53,57 31,36" fill={c.arm} />
    </svg>
  );
  if (variant === 'mark') return <span className={className} style={{ display: 'inline-flex', ...style }} title="Kontrak">{mark}</span>;

  const wmColor = tone === 'navy' ? 'var(--ink)' : '#fff';
  const accent = tone === 'navy' ? 'var(--gold-600)' : tone === 'onNavy' ? 'var(--gold-400)' : 'rgba(255,255,255,0.7)';
  const tagColor = tone === 'navy' ? 'var(--text-faint)' : 'rgba(255,255,255,0.45)';
  const wmSize = Math.round(size * 0.5);

  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: Math.round(size * 0.3), ...style }}>
      {mark}
      {variant === 'lockup' && size >= 56 && (
        <span style={{ width: 1.5, height: size * 0.72, background: 'var(--rule-fade)', flexShrink: 0 }} />
      )}
      <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', fontSize: wmSize, letterSpacing: wmSize >= 30 ? 'var(--ls-wordmark)' : 'var(--ls-wordmark-sm)', lineHeight: 1, color: wmColor }}>
          KONTR<span style={{ color: accent }}>AK</span>
        </span>
        {tagline && size >= 40 && (
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-micro)', letterSpacing: 'var(--ls-label-sm)', textTransform: 'uppercase', color: tagColor, paddingLeft: 2 }}>
            Work Legal · Work Smart
          </span>
        )}
      </span>
    </span>
  );
}
