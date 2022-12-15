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
    name: 'Header',
    control: { type: 'text' },
    description: 'Icon list item header',
  },
  subheader: {
    name: 'Subheader',
    control: { type: 'text' },
    description: 'Icon list item subheader',
  }
};
IconListItemStory.args = {
  header: "We hire top talent",
  subheader: "And our team's well-being is a top priority."
};

IconListItemStory.storyName = "Icon List Item";