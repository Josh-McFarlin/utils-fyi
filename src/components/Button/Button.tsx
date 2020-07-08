import * as React from "react";
import clsx from "clsx";
import classes from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "success" | "error" | "warning";
  shape?: "filled" | "outlined";
  disabled?: boolean;
}

/**
 * A general button with multiple color variants.
 */
const Button = ({
  className,
  type = "button",
  variant = "primary",
  shape = "filled",
  disabled = false,
  ...rest
}: Props) => (
  <button
    className={clsx(
      classes.root,
      classes[`${variant}Color`],
      shape === "outlined" && classes.outlined,
      className
    )}
    type={type}
    disabled={disabled}
    {...rest}
  />
);

export default Button;
