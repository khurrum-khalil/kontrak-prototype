import * as React from 'react';

/** Checkbox with optional description line. Checked state fills navy with a white tick. */
export interface CheckboxProps {
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): React.ReactElement;
