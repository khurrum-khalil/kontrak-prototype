import React from 'react';

export function Tooltip({ label, children, placement = 'top', style, className }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' },
    bottom: { top: '100%', left: '50%', transform: 'translate(-50%,8px)' },
    left: { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' },
    right: { left: '100%', top: '50%', transform: 'translate(8px,-50%)' },
  }[placement];
  return (
    <span className={className} style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span style={{
          position: 'absolute', zIndex: 70, ...pos,
          background: 'var(--navy-900)', color: '#fff', borderRadius: 'var(--radius-sm)',
          padding: '6px 10px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', lineHeight: 1.4,
          whiteSpace: 'nowrap', boxShadow: 'var(--shadow-lift)', pointerEvents: 'none',
        }}>{label}</span>
      )}
    </span>
  );
}
