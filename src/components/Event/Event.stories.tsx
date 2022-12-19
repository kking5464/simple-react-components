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
    description: "The display type of the event",
  },
  eventTitle: {
    name: "Event Title",
    control: { type: "text" },
    description: "Title of event",
    table: {
      category: "Event Information",
    },
  },
  date: {
    name: "Event Date",
    control: { type: "text" },
    description: "Event date",
    table: {
      category: "Event Information",
    },
  },
  startTime: {
    name: "Start Time",
    control: { type: "text" },
    description: "Starting time of event",
    table: {
      category: "Event Information",
    },
  },
  endTime: {
    name: "End Time",
    control: { type: "text" },
    description: "Ending time of event",
    table: {
      category: "Event Information",
    },
  },
  eventImage: {
    name: "Event Image",
    control: { type: "text" },
    table: {
      category: "Event Information",
    },
  },
  buttonUrlLink: {
    name: "Button URL",
    control: { type: "text" },
    table: {
      category: "Event Information",
    },
  },
};
EventStory.args = {
  eventType: "card",
  eventTitle: "Schoool Spirit Night",
  date: "November 15th",
  startTime: "5:00 PM",
  endTime: "8:00 PM",
  eventImage: "https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  buttonUrlLink: "https://www.google.com/",
};

EventStory.storyName = "Event";
