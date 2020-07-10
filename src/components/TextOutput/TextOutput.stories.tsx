import * as React from "react";
import TextOutput from "./TextOutput";

export default {
  title: "TextOutput",
  component: TextOutput,
};

export const Component = (args) => <TextOutput {...args} />;
Component.args = {
  children: "Some output goes here!",
};
