import * as React from "react";
import clsx from "clsx";
import classes from "./FormInput.module.scss";

interface Props {
  className?: string;
  disabled?: boolean;
  value: string;
  placeHolder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * An input that can be used for any type of data.
 */
const FormInput = ({
  className,
  disabled = false,
  value,
  placeHolder,
  onChange,
  ...rest
}: Props) => (
  <input
    className={clsx(classes.root, className)}
    disabled={disabled}
    placeholder={placeHolder}
    value={value}
    onChange={onChange}
    {...rest}
  />
);

export default FormInput;
