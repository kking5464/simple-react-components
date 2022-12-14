import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TopSticker from "./TopSticker";

export default {
  title: "React Component Library/Stickers/Top Sticker",
  component: TopSticker,
} as ComponentMeta<typeof TopSticker>;

const Template: ComponentStory<typeof TopSticker> = (args) => <TopSticker {...args} />;

export const TopStickerStory = Template.bind({});
TopStickerStory.argTypes = {
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
  color: {
    name: 'Color',
    description: 'Icon and sticker color',
    options: ['1', '2'],
    control: {
      type: 'select',
      labels: {
        '1': 'Primary white background | Primary red icon',
        '2': 'Tertiary tan background | Primary red icon',
      },
    },
  },
};
TopStickerStory.args = {
  iconName: "cfa-tagline",
  color: "1"
};

TopStickerStory.storyName = "Top Sticker";