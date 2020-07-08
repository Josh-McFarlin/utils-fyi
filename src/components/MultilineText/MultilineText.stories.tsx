import * as React from "react";
import { LoremIpsum } from "lorem-ipsum";
import MultilineText from "./MultilineText";

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
  title: "MultilineText",
  component: MultilineText,
};

export const Component = (args) => (
  <MultilineText {...args} value={lorem.generateParagraphs(3)} />
);

export const LongText = (args) => (
  <MultilineText {...args} value={lorem.generateParagraphs(12)} />
);
