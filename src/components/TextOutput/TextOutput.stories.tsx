import * as React from "react";
import TextOutput, { PropTypes } from "./TextOutput";

export default {
  title: "TextOutput",
  component: TextOutput,
};

export const Component = (args: PropTypes) => <TextOutput {...args} />;
Component.args = {
  children: "Some output goes here!",
};
