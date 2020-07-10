import * as React from "react";
import { LoremIpsum } from "lorem-ipsum";
import MultilineTextOutput from "./MultilineTextOutput";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default {
  title: "MultilineTextOutput",
  component: MultilineTextOutput,
};

export const Component = (args) => (
  <MultilineTextOutput {...args} value={lorem.generateParagraphs(3)} />
);

export const LongText = (args) => (
  <MultilineTextOutput {...args} value={lorem.generateParagraphs(12)} />
);