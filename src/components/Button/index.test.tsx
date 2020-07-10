import React from "react";
import { render } from "../../../test/testUtils";
import Button from "./Button";

describe("Button Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Button>Button</Button>, {});

    expect(asFragment()).toMatchSnapshot();
  });
});
