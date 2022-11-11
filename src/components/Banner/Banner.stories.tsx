import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Banner from "./Banner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const BannerStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BannerStory.argTypes = {
  label: {
    name: "Label",
    control: { type: "text" },
    description: "Banner label",
  },
  description: {
    name: "Description",
    control: { type: "text" },
    description: "Banner description",
  },
  bannerName: {
    name: "Banner Name",
    control: { type: "text" },
    description: "Banner trying to hit",
    table: {
      category: "API",
    },
  },
  useApi: {
    name: "Use API?",
    control: { type: "boolean" },
    description: "using API or not",
    table: {
      category: "API",
    },
  },
};
BannerStory.args = {
  label: "label",
  description: "description",
  bannerName: "BannerTest",
  useApi: false,
};

BannerStory.storyName = "Banner";
