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
    table: {
      category: "Icon",
    },
  },
  description: {
    name: "Description",
    control: { type: "text" },
    description: "Event description",
    table: {
      category: "Icon",
    },
  },
  date: {
    name: "Event date and time",
    control: { type: "text" },
    description: "Date and time of Event",
    table: {
      category: "Card",
    },
  },
  useApi: {
    name: "Use API?",
    control: { type: "boolean" },
    description: "using API or not",
    table: {
      category: "API",
    },
  },
  icon: {
    name: "Icon",
    control: { type: "text" },
    description: "icon link",
    table: {
      category: "Icon",
    },
  },
  image: {
    name: "Image",
    control: { type: "text" },
    description: "image link",
    table: {
      category: "Card",
    },
  },
  eventType: {
    name: "Event Type?",
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
};
EventStory.args = {
  eventType: "card",
  date: "Tue, Nov. 15 at 10:00 AM",
  eventName: "Nicholas' Birthday",
  description: "Suprise party for Nicholas",
  useApi: false,
  icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fcalendar-icon%2520white&psig=AOvVaw3w0zQ4foYhyeiuiDQkTInh&ust=1668625003361000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJjUjNjusPsCFQAAAAAdAAAAABAD",
};

EventStory.storyName = "Event";
