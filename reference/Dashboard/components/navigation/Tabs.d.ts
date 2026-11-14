import * as React from 'react';

/**
 * View switcher. `underline` for page-level sections (gold 2px rule), `segmented` for
 * in-card filters.
 * @startingPoint section="Navigation" subtitle="Underline and segmented tabs, stepper" viewport="700x200"
 */
export interface TabItem { value: string; label: string; count?: number }
export interface TabsProps {
  items?: Array<string | TabItem>;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'segmented';
  className?: string;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): React.ReactElement;
