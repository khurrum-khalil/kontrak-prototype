import React from 'react';

export function Tag({ children, selected, onClick, onRemove, style, className }) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return (
    <span
      className={className} onClick={onClick} role={clickable ? 'button' : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-regular)',
        padding: '5px 12px', borderRadius: 'var(--radius-pill)',
        border: '1px solid ' + (selected ? 'var(--navy-900)' : 'var(--border-subtle)'),
        background: selected ? 'var(--navy-900)' : 'var(--surface-card)',
        color: selected ? '#fff' : 'var(--text-body)',
        cursor: clickable ? 'pointer' : 'default', transition: 'var(--transition-ui)',
        ...(hover && clickable && !selected ? { borderColor: 'var(--border-strong)', background: 'var(--surface-hover)' } : null),
        ...style,
      }}
    >
      {children}
      {onRemove && (
        <span onClick={(e) => { e.stopPropagation(); onRemove(e); }} style={{ cursor: 'pointer', opacity: 0.5, fontSize: 'var(--fs-sm)', lineHeight: 1 }}>×</span>
      )}
    </span>
  );
}
