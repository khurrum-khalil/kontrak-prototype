import * as React from 'react';

/**
 * Single-line text input. 6px radius, stone border, gold focus glow.
 * @startingPoint section="Forms" subtitle="Inputs, selects, toggles and checkboxes" viewport="700x300"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** Leading adornment, usually an <Icon />. */
  iconLeft?: React.ReactNode;
}
export function Input(props: InputProps): React.ReactElement;
