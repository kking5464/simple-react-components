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
    options: ['primaryRed', 'secondaryBlue', 'secondaryTeal'],
    control: {
      type: 'select',
      labels: {
        'primaryRed': 'Primary Red',
        'secondaryBlue': 'Secondary Blue',
        'secondaryTeal': 'Secondary Teal'
      },
    },
  },
  owner: {
    name: 'Owner',
    control: { type: "text" },
    description: 'Quote owner',
  },
};
QuoteStory.args = {
  quoteText: "Serving others helps us to focus on our relationships with our customers and each other.",
  quoteColor: "secondaryBlue",
  owner: "Jeremiah Cillpam, CEO"
};

QuoteStory.storyName = "Quote";