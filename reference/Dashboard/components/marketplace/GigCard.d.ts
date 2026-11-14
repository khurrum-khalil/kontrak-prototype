import * as React from 'react';

/** A single posted brief in the marketplace feed. Composes Avatar, Badge, Tag and Rating. */
export interface GigCardProps {
  title: string;
  client: string;
  /** Formatted money string, e.g. "£420". */
  rate: string;
  /** Unit shown after the rate, e.g. "fixed", "hour". */
  period?: string;
  location?: string;
  tags?: string[];
  /** Gold badge, e.g. "Visa-safe". */
  badge?: string;
  rating?: number;
  reviews?: number;
  /** Fallback meta when no rating, e.g. "Posted 2h ago". */
  posted?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}
export function GigCard(props: GigCardProps): React.ReactElement;
