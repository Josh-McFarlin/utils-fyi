import * as React from "react";
import clsx from "clsx";
import classes from "./MultilineTextOutput.module.scss";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children: string | number;
}

/**
 * A read-only output that shows multiple lines of text.
 */
const MultilineTextOutput = ({ className, children, ...rest }: Props) => (
  <div className={clsx(classes.root, className)} {...rest}>
    {children}
  </div>
);

export default MultilineTextOutput;
