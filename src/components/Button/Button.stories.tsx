import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonStory.argTypes = {
  label: {
    name: "Label",
    control: { type: "text" },
    description: "Button text",
  },
  type: {
    name: "Type",
    control: {
      type: 'select',
      labels: {
        'primary': 'Primary',
        'secondary': 'Secondary'
      },
    },
    options: ["primary", "secondary"],
    description:
      "Button type/whether the button is used to communicate the primary or secondary action",
  },
  url: {
    name: "Url",
    control: { type: "text" },
    description: "Url that will be routed to when button is clicked",
  },
  color: {
    name: 'Color',
    description: 'Button color',
    options: ['primaryRed', 'secondaryBlue'],
    control: {
      type: 'select',
      labels: {
        'primaryRed': 'Primary Red',
        'secondaryBlue': 'Secondary Blue'
      },
    },
  }
}
ButtonStory.args = {
  label: 'Button Text',
  type: 'primary',
  url: 'https://www.google.com',
  color: 'primaryRed',
};

ButtonStory.storyName = "Button";
