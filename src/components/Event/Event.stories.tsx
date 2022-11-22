import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Event from "./Event";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Event",
  component: Event,
} as ComponentMeta<typeof Event>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Event> = (args) => <Event {...args} />;

export const EventStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EventStory.argTypes = {
  useApi: {
    name: "Use API?",
    control: { type: "boolean" },
    description: "using API or not",
  },
  eventName: {
    name: "Event Name",
    control: { type: "text" },
    description: "Event Name",
  },
  date: {
    name: "Event Date",
    control: { type: "text" },
    description: "Event date",
    table: {
      category: "Event Info",
    },
  },
  title: {
    name: "Title",
    control: { type: "text" },
    description: "Event Title",
    table: {
      category: "Event Info",
    },
  },
  eventType: {
    name: "Event Type",
    control: {
      type: "select",
      labels: {
        card: "Card",
        preview: "Preview",
        icon: "Icon",
      },
    },
    options: ["card", "preview", "icon"],
    description: "What type of event block",
  },
  basicCardDescription: {
    name: "Description",
    control: { type: "text" },
    table: {
      category: "Card",
      subcategory: "Text",
    },
  },
  image: {
    name: "Image",
    control: { type: "text" },
    table: {
      category: "Event Info",
    },
  },
};
EventStory.args = {
  eventType: "card",
  eventName: "EventTest",
  title: "Default Title",
  date: "Tuesday, November the 15th",
  useApi: false,
  basicCardDescription: "In the back office at 10:00 AM",
  image:
    "https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
};

EventStory.storyName = "Event";
