import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BasicCard from './BasicCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Basic Card',
  component: BasicCard,
} as ComponentMeta<typeof BasicCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicCard> = (args) => <BasicCard {...args} />;

export const BasicCardStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicCardStory.argTypes = {
  title: {
    name: 'Title',
    control: { type: 'text' },
  },
  subtitle: {
    name: 'Subtitle',
    control: { type: 'text' },
  },
  copy: {
    name: 'Copy',
    control: { type: 'text' },
  },
  buttonLabel: {
    name: 'Button Label',
    control: { type: 'text' },
    table: {
      category: 'Button',
    },
  },
  buttonType: {
    name: 'Button Type',
    control: { type: 'select' },
    options: ['primary', 'secondary'],
    table: {
      category: 'Button',
    },
  },
  imageURL: {
    name: 'Image URL',
    control: { type: 'text' },
    table: {
      category: 'Image',
    },
  },
}
BasicCardStory.args = {
  title: 'Primary Title',
  subtitle: 'Sub-title',
  copy: 'Detailed text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  buttonLabel: 'Button Text',
  buttonType: 'secondary',
  imageURL: 'https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
};

BasicCardStory.storyName = "Basic Card";
