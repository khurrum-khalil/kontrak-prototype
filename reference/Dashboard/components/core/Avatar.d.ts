import * as React from 'react';

/** Circular avatar; falls back to Syne-set initials on navy. Gold dot = identity verified. */
export interface AvatarProps {
  name?: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  verified?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export function Avatar(props: AvatarProps): React.ReactElement;
