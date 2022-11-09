import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeadingAndText from './HeadingAndText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Heading and Text',
  component: HeadingAndText,
} as ComponentMeta<typeof HeadingAndText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeadingAndText> = (args) => <HeadingAndText {...args} />;

export const HeadingAndTextStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeadingAndTextStory.argTypes = {
  heading: {
    name: 'Heading',
    control: { type: 'text' },
    description: 'Heading text',
  },
  headingColor: {
    name: 'Heading Color',
    description: 'Heading text color',
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
  text: {
    name: 'Text',
    control: { type: 'text' },
    description: 'Text copy',
  },
}
HeadingAndTextStory.args = {
  heading: 'Our Core Values',
  headingColor: '',
  text: "Our core purpose at Chick-fil-A Hollywood is Change for the Better. These five values guide us in everything we do."
};

HeadingAndTextStory.storyName = "Heading and Text";
