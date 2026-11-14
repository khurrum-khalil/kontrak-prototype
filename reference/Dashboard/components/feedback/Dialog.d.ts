import * as React from 'react';

/**
 * Centred modal on a navy 44% scrim with a 3px blur. Titles are set in Cormorant light.
 * @startingPoint section="Feedback" subtitle="Dialog, toast and tooltip" viewport="700x300"
 */
export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  /** Uppercase micro line above the title. */
  eyebrow?: string;
  children?: React.ReactNode;
  /** Action row, right-aligned — usually two Buttons. */
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}
export function Dialog(props: DialogProps): React.ReactElement | null;
