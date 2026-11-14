import * as React from 'react';

/** Pill-shaped topic / filter chip. Selected state fills navy. */
export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Renders a × affordance. */
  onRemove?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): React.ReactElement;
