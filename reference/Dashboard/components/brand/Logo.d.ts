import * as React from 'react';

/**
 * The Kontrak logo: split-K mark plus KONTRAK wordmark with the AK set in gold.
 * @startingPoint section="Brand" subtitle="Logo lockup, mark and tone variants" viewport="700x200"
 */
export interface LogoProps {
  /** 'lockup' = mark + wordmark (+ hairline divider at large sizes); 'mark' = icon only; 'wordmark' = type only. */
  variant?: 'lockup' | 'mark' | 'wordmark';
  /** Background the logo sits on. */
  tone?: 'navy' | 'onNavy' | 'onGold';
  /** Mark height in px; the wordmark scales from it. Default 40. */
  size?: number;
  /** Show the "Work Legal · Work Smart" tagline (only renders at size >= 40). */
  tagline?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): React.ReactElement;
