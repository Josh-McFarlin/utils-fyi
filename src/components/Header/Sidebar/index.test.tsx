import React from "react";
import { render } from "../../../../test/testUtils";
import Sidebar from "./Sidebar";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noOp = () => {};

describe("Sidebar Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Sidebar open handleClose={noOp} />, {});

    expect(asFragment()).toMatchSnapshot();
  });
});
