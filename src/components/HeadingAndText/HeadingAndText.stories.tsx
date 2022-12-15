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
  text: {
    name: 'Text',
    control: { type: 'text' },
    description: 'Text copy',
  },
  backgroundColor: {
    name: 'Background Color',
    description: 'Background color',
    options: ['primaryWhite', 'tan'],
    control: {
      type: 'select',
      labels: {
        'primaryWhite': 'Primary White',
        'tan': 'Tan',
      },
    },
  },
}
HeadingAndTextStory.args = {
  heading: 'Content Header',
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  backgroundColor: 'tan'
};

HeadingAndTextStory.storyName = "Heading and Text";