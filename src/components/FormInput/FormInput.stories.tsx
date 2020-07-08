import * as React from "react";
import FormInput from "./FormInput";

export default {
  title: "FormInput",
  component: FormInput,
};

export const Component = (args) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return <FormInput {...args} value={value} onChange={handleChange} />;
};

export const WithLabel = (args) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return <FormInput {...args} value={value} onChange={handleChange} />;
};

WithLabel.args = { label: "Label" };

export const WithPlaceholder = (args) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return <FormInput {...args} value={value} onChange={handleChange} />;
};

WithPlaceholder.args = { placeHolder: "Placeholder" };

export const WithEmoji = (args) => {
  const [value, setValue] = React.useState("Josh 😎");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return <FormInput {...args} value={value} onChange={handleChange} />;
};

WithEmoji.args = { placeHolder: "Name 😀" };
