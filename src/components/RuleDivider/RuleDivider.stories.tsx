import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RuleDivider from './RuleDivider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Rule Divider',
  component: RuleDivider,
} as ComponentMeta<typeof RuleDivider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RuleDivider> = (args) => <RuleDivider {...args} />;

export const RuleDividerStory = Template.bind({});
RuleDividerStory.storyName = "Rule Divider";
