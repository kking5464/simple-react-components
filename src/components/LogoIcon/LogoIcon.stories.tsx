import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LogoIcon from "./LogoIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Icon/Logo Icon",
  component: LogoIcon,
} as ComponentMeta<typeof LogoIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LogoIcon> = (args) => <LogoIcon {...args} />;

export const LogoIconStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LogoIconStory.argTypes = {
  name: {
    name: 'Name',
    description: 'Name of icon',
    options: [
      'cfa-tagline'
    ],
    control: {
      type: 'select',
      labels: {
        'cfa-tagline': 'Logo - CFA Tagline'
      },
    },
  },
};
LogoIconStory.args = {
  name: 'cfa-tagline',
};

LogoIconStory.storyName = "Logo Icon";
