import * as React from "react";
import clsx from "clsx";
import classes from "./MultilineTextOutput.module.scss";

export interface PropTypes extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children: string | number;
}

/**
 * A read-only output that shows multiple lines of text.
 */
const MultilineTextOutput = ({ className, children, ...rest }: PropTypes) => (
  <div className={clsx(classes.root, className)} {...rest}>
    {children}
  </div>
);

export default MultilineTextOutput;
