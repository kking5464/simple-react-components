import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EventApi from "./EventApi";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Event/Event API",
  component: EventApi,
} as ComponentMeta<typeof EventApi>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EventApi> = (args) => <EventApi {...args} />;

export const EventApiStory = Template.bind({});
EventApiStory.argTypes = {
  eventName: {
    name: "Event Name",
    control: { type: "text" },
    description: "Event Name",
  },
  eventType: {
    name: "Display Type",
    control: {
      type: "select",
      labels: {
        card: "Card",
        preview: "Preview",
        icon: "Icon",
      },
    },
    options: ["card", "preview", "icon"],
    description: "The display type of the event",
  },
};
EventApiStory.args = {
  eventName: "EventTest",
  eventType: "card",
};

EventApiStory.storyName = "Event API";
