import * as React from 'react';

/** Transient confirmation, bottom-right. White card, tinted hairline border, no coloured fill. */
export interface ToastProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  tone?: 'info' | 'success' | 'warning' | 'danger';
  icon?: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): React.ReactElement;
