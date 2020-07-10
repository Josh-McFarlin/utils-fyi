import * as React from "react";
import clsx from "clsx";
import classes from "./TextOutput.module.scss";

interface Props extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  outputClassName?: string;
  label?: string;
  children: string | number;
}

/**
 * An input that can be used for any type of data.
 */
const TextOutput = ({
  className,
  outputClassName,
  label,
  children,
  ...rest
}: Props) => (
  <label className={clsx(classes.root, className)}>
    {label != null && <p>{label}</p>}
    <input className={outputClassName} value={children} readOnly {...rest} />
  </label>
);

export default TextOutput;
