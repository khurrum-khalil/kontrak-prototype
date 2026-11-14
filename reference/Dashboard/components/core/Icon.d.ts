import * as React from 'react';

/**
 * Lucide icon wrapper. The brand ships no icon set of its own, so Lucide (stroke 1.5)
 * is the documented substitute — see readme.md → ICONOGRAPHY.
 * @startingPoint section="Core" subtitle="Lucide icon set at brand stroke weight" viewport="700x160"
 */
export interface IconProps {
  /** Lucide icon slug, e.g. "shield-check", "file-signature", "arrow-right". */
  name: string;
  /** Box size in px. Default 18. */
  size?: number;
  /** Kontrak uses 1.5 everywhere. */
  strokeWidth?: number;
  /** Any CSS colour; defaults to currentColor. */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): React.ReactElement;
export const LUCIDE_VERSION: string;
