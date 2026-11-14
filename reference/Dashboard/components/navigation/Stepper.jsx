import React from 'react';

export function Stepper({ steps = [], current = 0, style, className }) {
  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: 0, ...style }}>
      {steps.map((label, i) => {
        const done = i < current, on = i === current;
        return (
          <React.Fragment key={label}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontSize: 'var(--fs-xs)', fontWeight: 'var(--fw-bold)',
                background: done ? 'var(--gold-600)' : on ? 'var(--navy-900)' : 'transparent',
                color: done || on ? '#fff' : 'var(--text-faint)',
                border: '1px solid ' + (done ? 'var(--gold-600)' : on ? 'var(--navy-900)' : 'var(--border-strong)'),
              }}>{done ? '✓' : i + 1}</span>
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', letterSpacing: '0.01em',
                color: on ? 'var(--text-strong)' : 'var(--text-muted)', fontWeight: on ? 'var(--fw-medium)' : 'var(--fw-regular)',
                whiteSpace: 'nowrap',
              }}>{label}</span>
            </div>
            {i < steps.length - 1 && <span style={{ flex: 1, height: 1, background: 'var(--border-hairline)', margin: '0 16px', minWidth: 24 }} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
