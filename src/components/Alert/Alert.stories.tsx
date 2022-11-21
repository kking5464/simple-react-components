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
  alertIconName: {
    name: "Alert Icon Name",
    description: "Name of icon for alert",
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
  alertIconColor: {
    name: "Alert Icon Color",
    description: "Color of icon for alert",
    options: ["gray", "red", "blue", "white"],
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
  closeIconName: {
    name: "Close Icon Name",
    description: "Name of icon for closing alert",
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
  closeIconColor: {
    name: "Close Icon Color",
    description: "Color of icon for closing alert",
    options: ["gray", "red", "blue", "white"],
    control: {
      type: "select",
      labels: {
        gray: "Gray",
        red: "Red",
        blue: "Blue",
        white: "White",
      },
    },
  }
};
AlertStory.args = {
  header: "Describe your alert",
  alertIconName: "info-filled",
  alertIconColor: "white",
  closeIconName: "close",
  closeIconColor: "white",
};

AlertStory.storyName = "Alert";
