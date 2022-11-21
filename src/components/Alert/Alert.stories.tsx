import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "./Alert";

export default {
  title: "React Component Library/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertStory = Template.bind({});

AlertStory.argTypes = {
  header: {
    name: "Header",
    control: { type: "text" },
    description: "Alert header",
  },
  iconName: {
    name: "Icon Name",
    description: "Name of Icon",
    options: [
      "actions-horizontal",
      "calendar",
      "chevron-right",
      "close",
      "error-filled",
      "info-filled",
      "menu",
      "search",
      "success-filled",
      "warning-filled",
    ],
    control: {
      type: "select",
      labels: {
        "actions-horizontal": "Actions - Horizontal",
        calendar: "Calendar",
        "chevron-right": "Chevron - Right",
        close: "Close",
        "error-filled": "Error - Filled",
        "info-filled": "Info - Filled",
        menu: "Menu",
        search: "Search",
        "success-filled": "Success - Filled",
        "warning-filled": "Warning - Filled",
      },
    },
  },
  iconColor: {
    name: "Icon Color",
    description: "Color of Icon",
    options: ["gray", "red", "blue","white"],
    control: {
      type: "select",
      labels: {
        gray: "Gray",
        red: "Red",
        blue: "Blue",
        white: "White",
      },
    },
  },
};
AlertStory.args = {
  header: "Describe your alert",
  iconName: "info-filled",
  iconColor: "blue",
};

AlertStory.storyName = "Alert";
