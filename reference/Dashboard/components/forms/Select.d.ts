import * as React from 'react';

/** Native select styled to match Input, with a hairline chevron. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<string | { value: string; label: string }>;
  invalid?: boolean;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
}
export function Select(props: SelectProps): React.ReactElement;
