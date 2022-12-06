import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconListItem from './IconListItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Icon List Item',
  component: IconListItem,
} as ComponentMeta<typeof IconListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconListItem> = (args) => <IconListItem {...args} />;

export const IconListItemStory = Template.bind({});
IconListItemStory.argTypes = {
  header: {
    name: "Header",
    control: { type: "text" },
    description: "Icon list item header",
  },
  headerColor: {
    name: 'Header Color',
    description: 'Header text color',
    options: ['gray', 'red', 'blue'],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue'
      },
    },
  },
  subheader: {
    name: "Subheader",
    control: { type: "text" },
    description: "Icon list item subheader",
  },
  iconName: {
    name: 'Icon Name',
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
  iconColor: {
    name: 'Icon Color',
    description: 'Icon color',
    options: [
      'gray',
      'red',
      'blue',
      'teal'
    ],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue',
        'teal': 'Teal'
      },
    },
  }
};
IconListItemStory.args = {
  iconName: "occasions_disco",
  iconColor: "teal",
  header: "We hire top talent",
  headerColor: "gray",
  subheader: "And our team's well-being is a top priority."
};

IconListItemStory.storyName = "Icon List Item";
