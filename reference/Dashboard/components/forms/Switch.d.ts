import * as React from 'react';

/** Binary toggle for instant-effect settings. Gold when on — the only place gold means "active". */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): React.ReactElement;
