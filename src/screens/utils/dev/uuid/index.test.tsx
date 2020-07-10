import React from "react";
import { render } from "../../../../../test/testUtils";
import UUIDScreen from "./UUIDScreen";

jest.mock("uuid", () => ({
  v4: () => "00000000-0000-0000-0000-000000000000",
}));

describe("UUID Page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<UUIDScreen />, {});

    expect(asFragment()).toMatchSnapshot();
  });
});
