import * as React from "react";
import clsx from "clsx";
import classes from "./MultilineTextOutput.module.scss";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  value: string | number;
}

/**
 * A read-only output that shows multiple lines of text.
 */
const MultilineTextOutput = ({ className, value, ...rest }: Props) => (
  <div className={clsx(classes.root, className)} {...rest}>
    {value}
  </div>
);

export default MultilineTextOutput;
