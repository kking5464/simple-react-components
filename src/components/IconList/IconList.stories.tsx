import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconList from './IconList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Icon List',
  component: IconList,
} as ComponentMeta<typeof IconList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconList> = (args) => <IconList {...args} />;

export const IconListStory = Template.bind({});
IconListStory.argTypes = {
  title: {
    name: 'Title',
    control: { type: 'text'},
    description: 'Icon list title',
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
  removeListItem1: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'List Item 1',
    },
  },
  iconListItem1Header: {
    name: 'Header',
    control: { type: 'text' },
    description: 'Icon list item header',
    table: {
      category: 'List Item 1',
    },
  },
  iconListItem1Subheader: {
    name: 'Subheader',
    control: { type: 'text' },
    description: 'Icon list item subheader',
    table: {
      category: 'List Item 1',
    },
  },
  removeListItem2: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'List Item 2',
    },
  },
  iconListItem2Header: {
    name:'Header',
    control: { type: 'text' },
    description: 'Icon list item header',
    table: {
      category: 'List Item 2',
    },
  },
  iconListItem2Subheader: {
    name: 'Subheader',
    control: { type: 'text' },
    description: 'Icon list item subheader',
    table: {
      category: 'List Item 2',
    },
  },
  removeListItem3: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'List Item 3',
    },
  },
  iconListItem3Header: {
    name: 'Header',
    control: { type: 'text' },
    description: 'Icon list item header',
    table: {
      category: 'List Item 3',
    },
  },
  iconListItem3Subheader: {
    name: 'Subheader',
    control: { type: 'text' },
    description: 'Icon list item subheader',
    table: {
      category: 'List Item 3',
    },
  },
  removeListItem4: {
    name: 'Remove list item?',
    control: { type: 'boolean' },
    table: {
      category: 'List Item 4',
    },
  },
  iconListItem4Header: {
    name: 'Header',
    control: { type: 'text' },
    description: 'Icon list item header',
    table: {
      category: 'List Item 4',
    },
  },
  iconListItem4Subheader: {
    name: 'Subheader',
    control: { type: 'text' },
    description: 'Icon list item subheader',
    table: {
      category: 'List Item 4',
    },
  }
};
IconListStory.args = {
  title: "What's Unique About My Restaurant?",
  backgroundColor: "tan",
  
  removeListItem1: false,
  iconListItem1Header: "We hire top talent",
  iconListItem1Subheader: "And our team's well-being is a top priority.",

  removeListItem2: false,
  iconListItem2Header: "We use cutting-edge technology",
  iconListItem2Subheader: "We use state-of-the-art systems to deliver for our customers.",

  removeListItem3: false,
  iconListItem3Header: "We are a high-performing operation",
  iconListItem3Subheader: "Our approaches enable us to run a top operation.",

  removeListItem4: false,
  iconListItem4Header: "We give back",
  iconListItem4Subheader: "Community impact is what gets us out of bed each day."
};

IconListStory.storyName = "Icon List";