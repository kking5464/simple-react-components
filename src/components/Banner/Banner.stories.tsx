import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Banner from './Banner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const BannerStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BannerStory.argTypes = {
  title: {
    name: 'Title',
    control: { type: 'text' },
    description: 'Banner title',
  },
  subtitle: {
    name: 'Subtitle',
    control: { type: 'text' },
    description: 'Banner subtitle',
  },
  bannerName: {
    name: 'Banner Name',
    control: { type: 'text' },
    description: 'Banner trying to hit',
    table: {
      category: 'API',
    },
  },
  useApi: {
    name: 'Use API?',
    control: { type: 'boolean' },
    description: 'using API or not',
    table: {
      category: 'API',
    },
  },
};
BannerStory.args = {
  title: "We're here for one another.",
  subtitle: "We are a team-obsessed and customer-focused organization.",
  bannerName: "BannerTest",
  useApi: false,
};

BannerStory.storyName = "Banner";