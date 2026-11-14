import * as React from 'react';

/**
 * Primary action control. Navy is the default action; gold is reserved for the single
 * highest-intent action on a screen ("Post a brief", "Sign contract").
 * @startingPoint section="Core" subtitle="Button variants, sizes and states" viewport="700x220"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger' | 'onNavy';
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to the container width. */
  block?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): React.ReactElement;
