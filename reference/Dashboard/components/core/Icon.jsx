import React from 'react';

export const LUCIDE_VERSION = '0.474.0';
const url = (name) => 'https://unpkg.com/lucide-static@' + LUCIDE_VERSION + '/icons/' + name + '.svg';

export function Icon({ name, size = 18, strokeWidth = 1.5, color = 'currentColor', style, className, ...rest }) {
  return (
    <span
      className={className} aria-hidden="true" data-icon={name}
      style={{
        display: 'inline-block', width: size, height: size, flexShrink: 0,
        background: color,
        WebkitMaskImage: 'url(' + url(name) + ')', maskImage: 'url(' + url(name) + ')',
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center', maskPosition: 'center',
        WebkitMaskSize: 'contain', maskSize: 'contain',
        opacity: strokeWidth < 1.5 ? 0.9 : 1,
        ...style,
      }}
      {...rest}
    />
  );
}
