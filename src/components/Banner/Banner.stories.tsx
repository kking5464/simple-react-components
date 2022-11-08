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
    name: "label",
    control: { type: "text" },
    description: "Banner label",
  },
  description: {
    name: "description",
    control: { type: "text" },
    description: "Banner description",
  },
};
BannerStory.args = {
  label: "label",
  description: "description",
};

BannerStory.storyName = "Banner";
