import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "./Alert";

export default {
  title: "React Component Library/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertStory = Template.bind({});

AlertStory.parameters = {
  layout: "fullscreen",
};

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
      "error-filled",
      "info-filled",
      "success-filled",
      "warning-filled",
    ],
    control: {
      type: "select",
      labels: {
        "error-filled": "Error - Filled",
        "info-filled": "Info - Filled",
        "success-filled": "Success - Filled",
        "warning-filled": "Warning - Filled",
      },
    },
  },
};
AlertStory.args = {
  header: "Describe your alert",
  alertIconName: "info-filled",
};

AlertStory.storyName = "Alert";
