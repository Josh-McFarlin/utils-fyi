import * as React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      type: "select",
      options: ["primary", "secondary", "success", "error", "warning"],
    },
    shape: {
      type: "select",
      options: ["filled", "outlined"],
    },
  },
};

export const Component = (args) => <Button {...args} />;
Component.args = {
  children: "Button",
};

export const Variants = () => (
  <>
    <Button variant="primary">primary</Button>
    <Button variant="secondary">secondary</Button>
    <Button variant="success">success</Button>
    <Button variant="error">error</Button>
    <Button variant="warning">warning</Button>
  </>
);

export const Disabled = Component.bind({});
Disabled.args = {
  children: "Button",
  disabled: true,
};

export const Outlined = Component.bind({});
Outlined.args = {
  children: "Button",
  shape: "outlined",
};
