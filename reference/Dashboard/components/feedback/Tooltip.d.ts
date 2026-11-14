import * as React from 'react';

/** Navy hover tip for icon-only controls and legal jargon. */
export interface TooltipProps {
  label: React.ReactNode;
  children?: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
}
export function Tooltip(props: TooltipProps): React.ReactElement;
