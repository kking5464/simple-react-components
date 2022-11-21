import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Accordion from './Accordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const AccordionStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AccordionStory.argTypes = {
  title: {
    name: 'Title',
    control: { type: 'text' },
    description: 'Accordion title',
  },
  content: {
    name: 'Content',
    control: { type: 'text' },
    description: 'Accordion contnet',
  },
}
AccordionStory.args = {
  title: 'Title here',
  content: 'Lorem ipsum...',
};

AccordionStory.storyName = "Accordion";
