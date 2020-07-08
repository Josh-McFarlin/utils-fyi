import * as React from "react";
import clsx from "clsx";
import classes from "./FormInput.module.scss";

interface Props extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  label?: string;
  value: string | number;
  placeHolder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * An input that can be used for any type of data.
 */
const FormInput = ({
  className,
  inputClassName,
  disabled = false,
  label,
  value,
  placeHolder,
  onChange,
  ...rest
}: Props) => (
  <label className={clsx(classes.root, className)}>
    {label != null && <p>{label}</p>}
    <input
      className={inputClassName}
      disabled={disabled}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  </label>
);

export default FormInput;
