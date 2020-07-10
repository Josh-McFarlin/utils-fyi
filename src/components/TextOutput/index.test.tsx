import React from "react";
import { render } from "../../../test/testUtils";
import TextOutput from "./TextOutput";

describe("Button Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <TextOutput>Some output goes here!</TextOutput>,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
