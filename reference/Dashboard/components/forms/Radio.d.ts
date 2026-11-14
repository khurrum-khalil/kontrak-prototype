import * as React from 'react';

/** Single-choice control; group several under one `name`. */
export interface RadioProps {
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): React.ReactElement;
