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
  previewDescription: {
    name: "Description",
    control: { type: "text" },
    description: "Event description",
    table: {
      category: "Preview",
    },
  },
  previewTitle: {
    name: "Preview Title",
    control: { type: "text" },
    description: "Event Title",
    table: {
      category: "Preview",
    },
  },
  iconEventDescription: {
    name: "Description",
    control: { type: "text" },
    description: "Event description",
    table: {
      category: "Icon",
    },
  },
  iconEventTitle: {
    name: "Icon Title",
    control: { type: "text" },
    description: "Event Title",
    table: {
      category: "Icon",
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
      "occasions_birthday-cake",
      "occasions_calendar",
      "occasions_collaboration",
      "occasions_disco",
      "restaurant_team-member",
      "technology_tablet-and-desktop",
    ],
    control: {
      type: "select",
      labels: {
        "occasions_birthday-cake": "Occasions | Birthday Cake",
        occasions_calendar: "Occasions | Calendar",
        occasions_collaboration: "Occasions | Collaboration",
        occasions_disco: "Occasions | Disco",
        "restaurant_team-member": "Restaurant | Team Member",
        "technology_tablet-and-desktop": "Technology | Tablet and Desktop",
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
  basicCardTitleColor: {
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
  basicCardSubtitle: {
    name: "Subtitle",
    control: { type: "text" },
    table: {
      category: "Card",
      subcategory: "Text",
    },
  },
  basicCardTitle: {
    name: "Text",
    control: { type: "text" },
    table: {
      category: "Card",
      subcategory: "Title",
    },
  },
  basicCardCopy: {
    name: "Copy",
    control: { type: "text" },
    table: {
      category: "Card",
      subcategory: "Text",
    },
  },
  basicCardUseButton: {
    name: "Use Button",
    control: { type: "boolean" },
    table: {
      category: "Card",
      subcategory: "Button",
    },
  },
  basicCardButtonLabel: {
    name: "Button Label",
    control: { type: "text" },
    table: {
      category: "Card",
      subcategory: "Button",
    },
  },
  basicCardButtonType: {
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
  basicCardButtonUrl: {
    name: "Button Url",
    control: { type: "text" },
    description: "Url that will be routed to when button is clicked",
    table: {
      category: "Card",
      subcategory: "Button",
    },
  },
  basicCardButtonColor: {
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
  basicCardImageURL: {
    name: "Image URL",
    control: { type: "text" },
    table: {
      category: "Card",
      subcategory: "Image",
    },
  },
  basicCardCenterText: {
    name: "Center Text",
    control: { type: "boolean" },
    table: {
      category: "Card",
      subcategory: "Text",
    },
  },
  basicCardSmallTitles: {
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
  eventName: "EventTest",
  previewTitle: "Default preview Title",
  previewDescription: "Default preview Description",
  iconEventDescription: "Default icon Description",
  iconEventTitle: "Default icon Name",
  useApi: false,
  basicCardTitleColor: "gray",
  basicCardTitle: "Basic Card Title",
  basicCardSubtitle: "Tuesday, November the 15th",
  basicCardCopy: "In the back office at 10:00 AM",
  basicCardButtonLabel: "Button Text",
  basicCardButtonType: "secondary",
  basicCardButtonUrl: "https://www.google.com",
  basicCardButtonColor: "red",
  basicCardUseButton: true,
  basicCardCenterText: false,
  basicCardSmallTitles: false,
  basicCardImageURL:
    "https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  previewImage:
    "https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg",
};

EventStory.storyName = "Event";
