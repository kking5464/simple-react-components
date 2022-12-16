import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextLink from './TextLink';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Text Link',
  component: TextLink,
} as ComponentMeta<typeof TextLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextLink> = (args) => <TextLink {...args} />;

export const TextLinkStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextLinkStory.argTypes = {
  linkUrl: {
    name: "Link Url",
    control: { type: "text" },
    description: "Url for Link",
  },
  linkText: {
    name: 'Link text',
    control: { type: 'text' },
    description: 'Link text',
  },
}
TextLinkStory.args = {
  linkUrl: "",
  linkText: 'View bio'
};

TextLinkStory.storyName = "Text Link";