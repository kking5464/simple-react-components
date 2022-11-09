import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FullWidthImage from './FullWidthImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Full Width Image',
  component: FullWidthImage,
} as ComponentMeta<typeof FullWidthImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FullWidthImage> = (args) => <FullWidthImage {...args} />;

export const FullWidthImageStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FullWidthImageStory.argTypes = {
  imageSource: {
    name: 'Image Source',
    control: { type: 'text' },
    description: 'Source of image',
  }
}
FullWidthImageStory.args = {
  imageSource: 'https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
};

FullWidthImageStory.storyName = "Full Width Image";
