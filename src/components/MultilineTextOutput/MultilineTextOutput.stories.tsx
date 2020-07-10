import * as React from "react";
import { LoremIpsum } from "lorem-ipsum";
import MultilineTextOutput, { PropTypes } from "./MultilineTextOutput";

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

export const Component = (args: PropTypes) => (
  <MultilineTextOutput {...args}>
    {lorem.generateParagraphs(3)}
  </MultilineTextOutput>
);

export const LongText = (args: PropTypes) => (
  <MultilineTextOutput {...args}>
    {lorem.generateParagraphs(12)}
  </MultilineTextOutput>
);
