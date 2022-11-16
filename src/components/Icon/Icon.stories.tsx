import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconStory.argTypes = {
  name: {
    name: 'Name',
    description: 'Name of icon',
    options: [
      'calendar',
      'error-filled', 
      'info-filled',
      'success-filled', 
      'warning-filled',
    ],
    control: {
      type: 'select',
      labels: {
        'calendar': 'Calendar',
        'error-filled': 'Error (Filled)',
        'info-filled': 'Info (Filled)',
        'success-filled': 'Success (Filled)',
        'warning-filled': 'Warning (Filled)'
      },
    },
  },
  color: {
    name: 'Color',
    description: 'Icon color',
    options: [
      'gray',
      'red',
      'blue'
    ],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue'
      },
    },
  }
};
IconStory.args = {
  name: 'error-filled',
  color: 'gray'
};

IconStory.storyName = "Icon";
