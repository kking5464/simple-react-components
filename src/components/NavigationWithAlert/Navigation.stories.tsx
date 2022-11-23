import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavigationWithAlert from "./NavigationWithAlert";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Navigation/Navigation With Alert",
  component: NavigationWithAlert,
} as ComponentMeta<typeof NavigationWithAlert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavigationWithAlert> = (args) => (
  <NavigationWithAlert {...args} />
);

export const NavigationWithAlertStory = Template.bind({});
NavigationWithAlertStory.parameters = {
  layout: "fullscreen",
};
NavigationWithAlertStory.argTypes = {
  
};
NavigationWithAlertStory.args = {
  
};

NavigationWithAlertStory.storyName = "Navigation With Alert";
