import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "./Alert";

export default {
    title: "React Component Library/Alert",
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertStory = Template.bind({})

AlertStory.argTypes = {
    header: {
        name: "Header",
        control: { type: "text" },
        description: "Alert header"
    }
}
AlertStory.args = {
    header: "Describe your alert"
};

AlertStory.storyName = "Alert";