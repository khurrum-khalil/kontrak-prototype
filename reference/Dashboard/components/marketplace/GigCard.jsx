import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Tag } from '../core/Tag.jsx';
import { Avatar } from '../core/Avatar.jsx';
import { Rating } from './Rating.jsx';

export function GigCard({ title, client, rate, period, location, tags = [], badge, rating, reviews, posted, onClick, style, className }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className={className} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', padding: 24,
        border: '1px solid ' + (hover ? 'var(--border-strong)' : 'transparent'),
        boxShadow: hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
        cursor: onClick ? 'pointer' : 'default', transition: 'var(--transition-ui)',
        display: 'flex', flexDirection: 'column', gap: 14, ...style,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <Avatar name={client} size="md" verified />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--fs-md)', color: 'var(--text-strong)', lineHeight: 1.3 }}>{title}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>
              {client}{location ? ' · ' + location : ''}
            </span>
          </div>
        </div>
        {badge && <Badge tone="gold">{badge}</Badge>}
      </div>
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
      )}
      <div style={{ height: 1, background: 'var(--border-hairline)' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-lg)', color: 'var(--text-strong)' }}>
          {rate}
          {period && <span style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-regular)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}> / {period}</span>}
        </span>
        {rating != null ? <Rating value={rating} count={reviews} /> : posted ? <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-faint)' }}>{posted}</span> : null}
      </div>
    </div>
  );
}
