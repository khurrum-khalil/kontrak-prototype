import * as React from 'react';

/** Status marker in uppercase micro-type with 2.5px tracking. Not for counts — use Tag for topics. */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'neutral' | 'navy' | 'gold' | 'success' | 'warning' | 'danger' | 'solid';
  /** Leading status dot. */
  dot?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): React.ReactElement;
