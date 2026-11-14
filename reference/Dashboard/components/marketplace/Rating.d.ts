import * as React from 'react';

/** Five gold stars plus numeric score; half-steps render in --gold-300. */
export interface RatingProps {
  value?: number;
  /** Number of reviews, shown in parentheses. */
  count?: number;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}
export function Rating(props: RatingProps): React.ReactElement;
