import React from "react";
import { render } from "../../../test/testUtils";
import Header from "./Header";

describe("Header Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Header />, {});

    expect(asFragment()).toMatchSnapshot();
  });
});
