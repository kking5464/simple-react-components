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
  iconName: {
    name: "Name",
    description: "Name of icon",
    options: [
      "calendar",
      "error-filled",
      "info-filled",
      "success-filled",
      "warning-filled",
    ],
    control: {
      type: "select",
      labels: {
        calendar: "Calendar",
        "error-filled": "Error (Filled)",
        "info-filled": "Info (Filled)",
        "success-filled": "Success (Filled)",
        "warning-filled": "Warning (Filled)",
      },
    },
    table: {
      category: "Icon",
    },
  },
  iconColor: {
    name: "Color",
    description: "Icon color",
    options: ["gray", "red", "blue"],
    control: {
      type: "select",
      labels: {
        gray: "Gray",
        red: "Red",
        blue: "Blue",
      },
    },
    table: {
      category: "Icon",
    },
  },
  bc_titleColor: {
    name: "Title Color",
    description: "Title text color",
    options: ["gray", "red", "blue"],
    control: {
      type: "select",
      labels: {
        gray: "Gray",
        red: "Red",
        blue: "Blue",
      },
    },
    table: {
      category: "Card",
      subcategory: "Title",
    },
  },
  bc_subtitle: {
    name: "Subtitle",
    control: { type: "text" },
    table: {
      category: "Card",
      subcategory: "Text",
    },
  },
  bc_copy: {
    name: "Copy",
    control: { type: "text" },
    table: {
      category: "Card",
      subcategory: "Text",
    },
  },
  bc_useButton: {
    name: "Use Button",
    control: { type: "boolean" },
    table: {
      category: "Card",
      subcategory: "Button",
    },
  },
  bc_buttonLabel: {
    name: "Button Label",
    control: { type: "text" },
    table: {
      category: "Card",
      subcategory: "Button",
    },
  },
  bc_buttonType: {
    name: "Button Type",
    control: {
      type: "select",
      labels: {
        primary: "Primary",
        secondary: "Secondary",
      },
    },
    options: ["primary", "secondary"],
    table: {
      category: "Card",
      subcategory: "Button",
    },
  },
  bc_buttonUrl: {
    name: "Button Url",
    control: { type: "text" },
    description: "Url that will be routed to when button is clicked",
    table: {
      category: "Card",
      subcategory: "Button",
    },
  },
  bc_buttonColor: {
    name: "Button Color",
    description: "Button color",
    options: ["red", "blue"],
    control: {
      type: "select",
      labels: {
        red: "Red",
        blue: "Blue",
      },
    },
    table: {
      category: "Card",
      subcategory: "Button",
    },
  },
  bc_imageURL: {
    name: "Image URL",
    control: { type: "text" },
    table: {
      category: "Card",
      subcategory: "Image",
    },
  },
  bc_centerText: {
    name: "Center Text",
    control: { type: "boolean" },
    table: {
      category: "Card",
      subcategory: "Text",
    },
  },
  bc_smallTitles: {
    name: "Small Title and Subtitle",
    control: { type: "boolean" },
    table: {
      category: "Card",
      subcategory: "Text",
    },
  },
  previewImage: {
    name: "Preview card image",
    control: { type: "text" },
    table: {
      category: "Preview",
    },
  },
};
EventStory.args = {
  eventType: "card",
  date: "Tue, Nov. 15 at 10:00 AM",
  eventName: "EventTest",
  description: "Default Event Description",
  useApi: false,
  bc_titleColor: "gray",
  bc_subtitle: "Tuesday, November the 15th",
  bc_copy: "In the back office at 10:00 AM",
  bc_buttonLabel: "Button Text",
  bc_buttonType: "secondary",
  bc_buttonUrl: "https://www.google.com",
  bc_buttonColor: "red",
  bc_useButton: true,
  bc_centerText: false,
  bc_smallTitles: false,
  bc_imageURL:
    "https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  previewImage:
    "https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg",
};

EventStory.storyName = "Event";
