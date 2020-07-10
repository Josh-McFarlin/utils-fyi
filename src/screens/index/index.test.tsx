import React from "react";
import { render } from "../../../test/testUtils";
import HomePage from "../../pages";

describe("Home Page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<HomePage />, {});

    expect(asFragment()).toMatchSnapshot();
  });
});
