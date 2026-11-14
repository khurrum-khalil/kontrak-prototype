import * as React from 'react';

/** Square icon-only control for toolbars, card corners and nav bars. Always pass `label`. */
export interface IconButtonProps {
  children?: React.ReactNode;
  /** Accessible name; also used as the tooltip. Required. */
  label: string;
  variant?: 'ghost' | 'outline' | 'solid' | 'onNavy';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): React.ReactElement;
