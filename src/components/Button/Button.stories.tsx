import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonStory.argTypes = {
  label: {
    name: 'Label',
    control: { type: 'text' },
    description: 'Button text',
  },
  type: {
    name: 'Type',
    control: { type: 'select' },
    options: ['primary', 'secondary'],
    description:
      'Button type/whether the button is used to communicate the primary or secondary action',
  },
}
ButtonStory.args = {
  label: 'Button Text',
  type: 'primary',
};

ButtonStory.storyName = "Button";
