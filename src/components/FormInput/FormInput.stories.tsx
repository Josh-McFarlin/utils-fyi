import * as React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import FormInput from "./FormInput";

export default {
  title: "FormInput",
  decorators: [withKnobs, withA11y],
  component: FormInput,
};

export const component = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <FormInput
      disabled={boolean("Disabled", false)}
      value={value}
      onChange={handleChange}
    />
  );
};

export const withPlaceholder = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <FormInput
      disabled={boolean("Disabled", false)}
      placeHolder={text("Placeholder", "Name")}
      value={value}
      onChange={handleChange}
    />
  );
};

export const withEmoji = () => {
  const [value, setValue] = React.useState("Josh 😎");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <FormInput
      disabled={boolean("Disabled", false)}
      placeHolder={text("Placeholder", "Name 😀")}
      value={value}
      onChange={handleChange}
    />
  );
};
