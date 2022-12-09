import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LogoSticker from "./LogoSticker";

export default {
  title: "React Component Library/Sticker/Logo Sticker",
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
  stickerColor: {
    name: 'Sticker Color',
    description: 'Sticker color',
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
  stickerColor: "tan"
};

LogoStickerStory.storyName = "Logo Sticker";
