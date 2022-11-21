import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SideNavigation from './SideNavigation';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Navigation/Side Navigation',
  component: SideNavigation,
} as ComponentMeta<typeof SideNavigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideNavigation> = (args) => <SideNavigation {...args} />;

export const SideNavigationStory = Template.bind({});
SideNavigationStory.parameters = {
  layout: 'fullscreen'
}
SideNavigationStory.argTypes = {
  isOpen: { 
    name: 'Is Open',
    control: { type: 'boolean'},
    description: 'Is side navigation open or closed',
  },
  sideNavigationLinks: {
    name: "Side Navigation Links",
    control: { type: "object"},
    description: "Side navigation links"
  },
}
SideNavigationStory.args = {
  isOpen: true,
  sideNavigationLinks: [
    {
      linkTitle: "Home",
      linkUrl: "/",
      isActive: true,
    },
    {
      linkTitle: "Schedule",
      linkUrl: "/",
      isActive: false,
    },
    {
      linkTitle: "My Restaurant",
      linkUrl: "/",
      isActive: false,
    },
    {
      linkTitle: "Pay",
      linkUrl: "/",
      isActive: false,
    },
    {
      linkTitle: "Performace",
      linkUrl: "/",
      isActive: false,
    },
    {
      linkTitle: "Team Member Resources",
      linkUrl: "/",
      isActive: false,
    }
  ]
};

SideNavigationStory.storyName = "Side Navigation";
