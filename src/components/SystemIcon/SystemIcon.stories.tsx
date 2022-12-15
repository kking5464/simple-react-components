import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SystemIcon from "./SystemIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Icon/System Icon",
  component: SystemIcon,
} as ComponentMeta<typeof SystemIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SystemIcon> = (args) => <SystemIcon {...args} />;

export const SystemIconStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SystemIconStory.argTypes = {
  name: {
    name: 'Name',
    description: 'Name of icon',
    options: [
      'actions-horizontal',
      'calendar',
      'chevron-right',
      'close',
      'error-filled', 
      'info-filled',
      'menu',
      'search',
      'success-filled', 
      'warning-filled',
    ],
    control: {
      type: 'select',
      labels: {
        'actions-horizontal' : 'Actions - Horizontal',
        'calendar': 'Calendar',
        'chevron-right': 'Chevron - Right',
        'close': 'Close',
        'error-filled': 'Error - Filled',
        'info-filled': 'Info - Filled',
        'menu': 'Menu',
        'search': 'Search',
        'success-filled': 'Success - Filled',
        'warning-filled': 'Warning - Filled'
      },
    },
  },
  color: {
    name: 'Color',
    description: 'Icon color',
    options: [
      'gray6',
      'primaryRed',
      'secondaryBlue',
      'primaryWhite'
    ],
    control: {
      type: 'select',
      labels: {
        'gray6': 'Gray 6',
        'primaryRed': 'Primary Red',
        'secondaryBlue': 'Secondary Blue',
        'primaryWhite': 'Primary White',
      },
    },
  }
};
SystemIconStory.args = {
  name: 'error-filled',
  color: 'gray6'
};

SystemIconStory.storyName = "System Icon";
