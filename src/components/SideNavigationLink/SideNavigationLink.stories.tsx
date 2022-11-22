import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SideNavigationLink from "./SideNavigationLink";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Navigation/Side Navigation Link",
  component: SideNavigationLink,
} as ComponentMeta<typeof SideNavigationLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideNavigationLink> = (args) => (
  <SideNavigationLink {...args} />
);

export const SideNavigationLinkStory = Template.bind({});
SideNavigationLinkStory.parameters = {
  layout: "fullscreen",
};
SideNavigationLinkStory.argTypes = {
  linkTitle: {
    name: "Link Title",
    control: { type: "text" },
    description: "Title for Link",
  },
  linkUrl: {
    name: "Link Url",
    control: { type: "text" },
    description: "Url for Link",
  },
  isActive: {
    name: "Is Active",
    control: { type: "boolean" },
    description: "Active Status for Link",
  },
};
SideNavigationLinkStory.args = {
  linkTitle: "Home",
  linkUrl: "",
  isActive: false,
};

SideNavigationLinkStory.storyName = "Side Navigation Link";
