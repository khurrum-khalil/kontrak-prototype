import * as React from 'react';

/**
 * Single metric for dashboards and marketing proof rows: micro uppercase label,
 * big Syne number.
 * @startingPoint section="Marketplace" subtitle="Metric tile, rating and gig card" viewport="700x260"
 */
export interface StatTileProps {
  label: string;
  value: React.ReactNode;
  /** Optional change line, e.g. "+3 this week". */
  delta?: string;
  tone?: 'default' | 'navy';
  className?: string;
  style?: React.CSSProperties;
}
export function StatTile(props: StatTileProps): React.ReactElement;
