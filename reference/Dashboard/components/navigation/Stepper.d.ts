import * as React from 'react';

/** Horizontal progress through a contract or onboarding flow. Completed steps are gold. */
export interface StepperProps {
  steps?: string[];
  /** Zero-based index of the current step. */
  current?: number;
  className?: string;
  style?: React.CSSProperties;
}
export function Stepper(props: StepperProps): React.ReactElement;
