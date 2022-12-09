import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Quote from './Quote';
import { NavigationStory } from '../Navigation/Navigation.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Quote',
  component: Quote,
} as ComponentMeta<typeof Quote>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />;

export const QuoteStory = Template.bind({});
NavigationStory.parameters = {
  layout: "fullscreen",
};

QuoteStory.argTypes = {
  quoteText: {
    name: 'Quote',
    control: { type: "text" },
    description: 'Quote text',
  },
  quoteColor: {
    name: 'Quote Color',
    description: 'Quote text color',
    options: ['gray', 'red', 'blue', 'teal'],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue',
        'teal': 'Teal'
      },
    },
  },
  owner: {
    name: 'Owner',
    control: { type: "text" },
    description: 'Quote owner',
  },
  iconName: {
    name: 'Icon Name',
    description: 'Name of icon',
    options: [
      '',
      'business_quote'
    ],
    control: {
      type: 'select',
      labels: {
        'business_quote': 'Business | Quote',
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
QuoteStory.args = {
  iconName: "business_quote",
  iconColor: "gray",
  quoteText: "Serving others helps us to focus on our relationships with our customers and each other.",
  quoteColor: "blue",
  owner: "Jeremiah Cillpam, CEO",
};

QuoteStory.storyName = "Quote";

