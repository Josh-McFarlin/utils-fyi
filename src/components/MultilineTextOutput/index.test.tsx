import React from "react";
import { render } from "../../../test/testUtils";
import MultilineTextOutput from "./MultilineTextOutput";

const testText = `Anim enim occaecat dolore velit non in aliquip id officia ad esse. Elit commodo occaecat dolor. Aute consequat cillum minim consequat cupidatat incididunt consectetur nostrud duis. Nostrud enim ad excepteur quis velit ex nostrud. Magna adipisicing in Lorem officia aute quis exercitation ex adipisicing dolor. Ut tempor voluptate pariatur elit culpa anim anim enim commodo qui excepteur deserunt magna deserunt sint. Dolore dolor exercitation excepteur voluptate commodo adipisicing ex in mollit dolore dolore dolor tempor aliquip aute.
Sit magna commodo pariatur ad eu officia aliquip velit occaecat velit irure esse ut sunt nostrud. Culpa culpa dolor magna excepteur fugiat minim ullamco ea sunt amet nostrud nostrud occaecat magna. Enim pariatur ex nulla officia nisi in enim pariatur sit pariatur excepteur consectetur minim duis laboris. Incididunt cillum exercitation magna anim Lorem Lorem cillum sit ullamco nostrud occaecat nulla ad esse. Nulla non proident ad duis pariatur voluptate. Non incididunt Lorem velit culpa duis in occaecat id aliqua.
Consequat officia minim reprehenderit ut. Sunt sit veniam occaecat mollit cupidatat. Ullamco tempor Lorem nostrud. Consequat non eu sunt id non non occaecat duis.`;

describe("MultilineTextOutput Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <MultilineTextOutput>{testText}</MultilineTextOutput>,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
