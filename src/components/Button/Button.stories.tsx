import * as React from "react";
import Button, { PropTypes } from "./Button";

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

export const Component = (args: PropTypes) => <Button {...args} />;
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

export const Disabled = (args: PropTypes) => <Button {...args} />;
Disabled.args = {
  children: "Button",
  disabled: true,
};

export const Outlined = (args: PropTypes) => <Button {...args} />;
Outlined.args = {
  children: "Button",
  shape: "outlined",
};
