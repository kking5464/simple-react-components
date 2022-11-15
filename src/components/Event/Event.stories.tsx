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
  eventName: {
    name: "Event Name",
    control: { type: "text" },
    description: "Event Name",
  },
  description: {
    name: "Description",
    control: { type: "text" },
    description: "Event description",
  },
  time: {
    name: "Event Time",
    control: { type: "text" },
    description: "Time of Event",
  },
  useApi: {
    name: "Use API?",
    control: { type: "boolean" },
    description: "using API or not",
  },
  isEventCard: {
    name: "Is Event Card?",
    control: { type: "boolean" },
    description: "Is Event Card or not",
  },
  isEventPreview: {
    name: "Is Event Preview?",
    control: { type: "boolean" },
    description: "Is Event preview or not",
  },
  isEventIcon: {
    name: "Is Event Icon?",
    control: { type: "boolean" },
    description: "Is Event Icon or not",
  },
};
EventStory.args = {
  eventName: "Event Name",
  description: "description",
  time: "time",
  useApi: false,
  isEventCard: false,
  isEventPreview: false,
  isEventIcon: false,
};

EventStory.storyName = "Event";
