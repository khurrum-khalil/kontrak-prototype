import * as React from 'react';

/** Label + hint/error wrapper for any form control. Labels are uppercase micro-type. */
export interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export function Field(props: FieldProps): React.ReactElement;
