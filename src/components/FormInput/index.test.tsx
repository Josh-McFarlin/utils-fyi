import React from "react";
import { render } from "../../../test/testUtils";
import FormInput from "./FormInput";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noOp = () => {};

describe("FormInput Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <FormInput value="This is a FormInput!" onChange={noOp} />,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
