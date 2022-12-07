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
    name: "Title",
    control: { type: "text"},
    description: "Icon list title",
  },
  titleColor: {
    name: 'Title Color',
    description: 'Title text color',
    options: ['gray', 'red', 'blue', 'teal'],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue',
        'teal': 'Teal'
      },
    },
  },
  backgroundColor: {
    name: 'Background Color',
    description: 'Background color',
    options: ['white', 'tan', 'lightTan'],
    control: {
      type: 'select',
      labels: {
        'white': 'White',
        'tan': 'Tan',
        'lightTan': 'Light Tan'
      },
    },
  },
  iconListItem1Header: {
    name: "Header",
    control: { type: "text" },
    description: "Icon list item header",
    table: {
      category: "List Item 1",
    },
  },
  iconListItem1HeaderColor: {
    name: 'Header Color',
    description: 'Header text color',
    options: ['gray', 'red', 'blue'],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue'
      },
    },
    table: {
      category: "List Item 1",
    },
  },
  iconListItem1Subheader: {
    name: "Subheader",
    control: { type: "text" },
    description: "Icon list item subheader",
    table: {
      category: "List Item 1",
    },
  },
  iconListItem1IconName: {
    name: 'Icon Name',
    description: 'Name of icon',
    options: [
      'occasions_birthday-cake',
      'occasions_calendar',
      'occasions_collaboration',
      'occasions_disco',
      'restaurant_team-member',
      'technology_tablet-and-desktop',
      'occasions_celebration',
      'occasions_celebration-2'
    ],
    control: {
      type: 'select',
      labels: {
        'occasions_birthday-cake' : 'Occasions | Birthday Cake',
        'occasions_calendar' : 'Occasions | Calendar',
        'occasions_collaboration' : 'Occasions | Collaboration',
        'occasions_celebration' : 'Occasions | Celebration',
        'occasions_celebration-2' : 'Occasions | Celebration 2',
        'occasions_disco' : 'Occasions | Disco',
        'restaurant_team-member' : 'Restaurant | Team Member',
        'technology_tablet-and-desktop': 'Technology | Tablet and Desktop'
      },
    },
    table: {
      category: "List Item 1",
    },
  },
  iconListItem1IconColor: {
    name: 'Icon Color',
    description: 'Icon color',
    options: [
      'gray',
      'red',
      'blue',
      'teal'
    ],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue',
        'teal': 'Teal'
      },
    },
    table: {
      category: "List Item 1",
    },
  },
  iconListItem2Header: {
    name: "Header",
    control: { type: "text" },
    description: "Icon list item header",
    table: {
      category: "List Item 2",
    },
  },
  iconListItem2HeaderColor: {
    name: 'Header Color',
    description: 'Header text color',
    options: ['gray', 'red', 'blue'],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue'
      },
    },
    table: {
      category: "List Item 2",
    },
  },
  iconListItem2Subheader: {
    name: "Subheader",
    control: { type: "text" },
    description: "Icon list item subheader",
    table: {
      category: "List Item 2",
    },
  },
  iconListItem2IconName: {
    name: 'Icon Name',
    description: 'Name of icon',
    options: [
      'occasions_birthday-cake',
      'occasions_calendar',
      'occasions_collaboration',
      'occasions_disco',
      'restaurant_team-member',
      'technology_tablet-and-desktop',
      'occasions_celebration',
      'occasions_celebration-2'
    ],
    control: {
      type: 'select',
      labels: {
        'occasions_birthday-cake' : 'Occasions | Birthday Cake',
        'occasions_calendar' : 'Occasions | Calendar',
        'occasions_collaboration' : 'Occasions | Collaboration',
        'occasions_celebration' : 'Occasions | Celebration',
        'occasions_celebration-2' : 'Occasions | Celebration 2',
        'occasions_disco' : 'Occasions | Disco',
        'restaurant_team-member' : 'Restaurant | Team Member',
        'technology_tablet-and-desktop': 'Technology | Tablet and Desktop'
      },
    },
    table: {
      category: "List Item 2",
    },
  },
  iconListItem2IconColor: {
    name: 'Icon Color',
    description: 'Icon color',
    options: [
      'gray',
      'red',
      'blue',
      'teal'
    ],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue',
        'teal': 'Teal'
      },
    },
    table: {
      category: "List Item 2",
    },
  },
  iconListItem3Header: {
    name: "Header",
    control: { type: "text" },
    description: "Icon list item header",
    table: {
      category: "List Item 3",
    },
  },
  iconListItem3HeaderColor: {
    name: 'Header Color',
    description: 'Header text color',
    options: ['gray', 'red', 'blue'],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue'
      },
    },
    table: {
      category: "List Item 3",
    },
  },
  iconListItem3Subheader: {
    name: "Subheader",
    control: { type: "text" },
    description: "Icon list item subheader",
    table: {
      category: "List Item 3",
    },
  },
  iconListItem3IconName: {
    name: 'Icon Name',
    description: 'Name of icon',
    options: [
      'occasions_birthday-cake',
      'occasions_calendar',
      'occasions_collaboration',
      'occasions_disco',
      'restaurant_team-member',
      'technology_tablet-and-desktop',
      'occasions_celebration',
      'occasions_celebration-2'
    ],
    control: {
      type: 'select',
      labels: {
        'occasions_birthday-cake' : 'Occasions | Birthday Cake',
        'occasions_calendar' : 'Occasions | Calendar',
        'occasions_collaboration' : 'Occasions | Collaboration',
        'occasions_celebration' : 'Occasions | Celebration',
        'occasions_celebration-2' : 'Occasions | Celebration 2',
        'occasions_disco' : 'Occasions | Disco',
        'restaurant_team-member' : 'Restaurant | Team Member',
        'technology_tablet-and-desktop': 'Technology | Tablet and Desktop'
      },
    },
    table: {
      category: "List Item 3",
    },
  },
  iconListItem3IconColor: {
    name: 'Icon Color',
    description: 'Icon color',
    options: [
      'gray',
      'red',
      'blue',
      'teal'
    ],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue',
        'teal': 'Teal'
      },
    },
    table: {
      category: "List Item 3",
    },
  },
  iconListItem4Header: {
    name: "Header",
    control: { type: "text" },
    description: "Icon list item header",
    table: {
      category: "List Item 4",
    },
  },
  iconListItem4HeaderColor: {
    name: 'Header Color',
    description: 'Header text color',
    options: ['gray', 'red', 'blue'],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue'
      },
    },
    table: {
      category: "List Item 4",
    },
  },
  iconListItem4Subheader: {
    name: "Subheader",
    control: { type: "text" },
    description: "Icon list item subheader",
    table: {
      category: "List Item 4",
    },
  },
  iconListItem4IconName: {
    name: 'Icon Name',
    description: 'Name of icon',
    options: [
      'occasions_birthday-cake',
      'occasions_calendar',
      'occasions_collaboration',
      'occasions_disco',
      'restaurant_team-member',
      'technology_tablet-and-desktop',
      'occasions_celebration',
      'occasions_celebration-2'
    ],
    control: {
      type: 'select',
      labels: {
        'occasions_birthday-cake' : 'Occasions | Birthday Cake',
        'occasions_calendar' : 'Occasions | Calendar',
        'occasions_collaboration' : 'Occasions | Collaboration',
        'occasions_celebration' : 'Occasions | Celebration',
        'occasions_celebration-2' : 'Occasions | Celebration 2',
        'occasions_disco' : 'Occasions | Disco',
        'restaurant_team-member' : 'Restaurant | Team Member',
        'technology_tablet-and-desktop': 'Technology | Tablet and Desktop'
      },
    },
    table: {
      category: "List Item 4",
    },
  },
  iconListItem4IconColor: {
    name: 'Icon Color',
    description: 'Icon color',
    options: [
      'gray',
      'red',
      'blue',
      'teal'
    ],
    control: {
      type: 'select',
      labels: {
        'gray': 'Gray',
        'red': 'Red',
        'blue': 'Blue',
        'teal': 'Teal'
      },
    },
    table: {
      category: "List Item 4",
    },
  }
};
IconListStory.args = {
  title: "What's Unique About My Restaurant?",
  titleColor: "teal",
  backgroundColor: "tan",
  
  iconListItem1IconName: "occasions_celebration-2",
  iconListItem1IconColor: "teal",
  iconListItem1Header: "We hire top talent",
  iconListItem1HeaderColor: "gray",
  iconListItem1Subheader: "And our team's well-being is a top priority.",

  iconListItem2IconName: "occasions_celebration-2",
  iconListItem2IconColor: "teal",
  iconListItem2Header: "We use cutting-edge technology",
  iconListItem2HeaderColor: "gray",
  iconListItem2Subheader: "We use state-of-the-art systems to deliver for our customers.",

  iconListItem3IconName: "occasions_celebration-2",
  iconListItem3IconColor: "teal",
  iconListItem3Header: "We are a high-performing operation",
  iconListItem3HeaderColor: "gray",
  iconListItem3Subheader: "Our approaches enable us to run a top operation.",

  iconListItem4IconName: "occasions_celebration-2",
  iconListItem4IconColor: "teal",
  iconListItem4Header: "We give back",
  iconListItem4HeaderColor: "gray",
  iconListItem4Subheader: "Community impact is what gets us out of bed each day."
};

IconListStory.storyName = "Icon List";
