import * as React from "react";
import clsx from "clsx";
import classes from "./TextOutput.module.scss";

export interface PropTypes extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  outputClassName?: string;
  label?: string;
  children: string | number;
}

/**
 * A read-only output that shows a single line of text.
 */
const TextOutput = ({
  className,
  outputClassName,
  label,
  children,
  ...rest
}: PropTypes) => (
  <label className={clsx(classes.root, className)}>
    {label != null && <p>{label}</p>}
    <input className={outputClassName} value={children} readOnly {...rest} />
  </label>
);

export default TextOutput;
