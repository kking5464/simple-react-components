import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BrandIcon from "./BrandIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Icon/Brand Icon",
  component: BrandIcon,
} as ComponentMeta<typeof BrandIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BrandIcon> = (args) => <BrandIcon {...args} />;

export const BrandIconStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BrandIconStory.argTypes = {
  name: {
    name: 'Name',
    description: 'Name of icon',
    options: [
      'occasions_birthday-cake',
      'occasions_calendar',
      'occasions_collaboration',
      'occasions_disco',
      'restaurant_team-member',
      'technology_tablet-and-desktop'
    ],
    control: {
      type: 'select',
      labels: {
        'occasions_birthday-cake' : 'Occasions | Birthday Cake',
        'occasions_calendar' : 'Occasions | Calendar',
        'occasions_collaboration' : 'Occasions | Collaboration',
        'occasions_disco' : 'Occasions | Disco',
        'restaurant_team-member' : 'Restaurant | Team Member',
        'technology_tablet-and-desktop': 'Technology | Tablet and Desktop'
      },
    },
  },
  color: {
    name: 'Color',
    description: 'Icon color',
    options: [
      'gray',
      'red',
      'blue'
    ],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue'
      },
    },
  }
};
BrandIconStory.args = {
  name: 'occasions_birthday-cake',
  color: 'gray'
};

BrandIconStory.storyName = "Brand Icon";
