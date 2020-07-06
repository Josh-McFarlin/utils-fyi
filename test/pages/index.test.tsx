import React from "react";
import { render } from "../testUtils";
import HomePage from "../../src/pages/index";

describe("Home Page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<HomePage />, {});

    expect(asFragment()).toMatchSnapshot();
  });
});
