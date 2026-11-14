import * as React from 'react';

/** Multi-line input for briefs, scope notes and messages. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}
export function Textarea(props: TextareaProps): React.ReactElement;
