import * as React from 'react';

/**
 * The brand's container: 6px radius, a 1px-4px whisper shadow, no heavy borders.
 * @startingPoint section="Core" subtitle="Card tones: default, outline, sunken, navy, accent" viewport="700x260"
 */
export interface CardProps {
  children?: React.ReactNode;
  tone?: 'default' | 'outline' | 'sunken' | 'navy' | 'accent';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Adds pointer cursor and a lift on hover. */
  interactive?: boolean;
  as?: keyof JSX.IntrinsicElements;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): React.ReactElement;
