import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LogoSticker from "./LogoSticker";

export default {
  title: "React Component Library/LogoSticker",
  component: LogoSticker,
} as ComponentMeta<typeof LogoSticker>;

const Template: ComponentStory<typeof LogoSticker> = (args) => <LogoSticker {...args} />;

export const LogoStickerStory = Template.bind({});
LogoStickerStory.argTypes = {
  iconName: {
    name: 'Icon Name',
    description: 'Name of icon',
    options: [
      'cfa-tagline',
    ],
    control: {
      type: 'select',
      labels: {
        'cfa-tagline': 'Logo - CFA Tagline'
      },
    },
  },
  iconColor: {
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
};
LogoStickerStory.args = {
  iconName: "cfa-tagline",
  backgroundColor: "tan"
};

LogoStickerStory.storyName = "Logo Sticker";
