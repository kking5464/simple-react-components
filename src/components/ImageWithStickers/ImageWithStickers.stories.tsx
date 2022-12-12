import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageWithStickers from './ImageWithStickers';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Image with Stickers',
  component: ImageWithStickers,
} as ComponentMeta<typeof ImageWithStickers>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageWithStickers> = (args) => <ImageWithStickers {...args} />;

export const ImageWithStickersStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ImageWithStickersStory.argTypes = {
  imageSource: {
    name: 'Image Source',
    control: { type: 'text' },
    description: 'Source of image',
  },
  logoStickerIconName: {
    name: 'Icon Name',
    description: 'Name of icon',
    options: [
      '',
      'cfa-tagline',
    ],
    control: {
      type: 'select',
      labels: {
        'cfa-tagline': 'Logo - CFA Tagline'
      },
    },
    table: {
      category: 'Top Sticker',
    }
  },
  logoStickerColor: {
    name: 'Sticker Color',
    description: 'Sticker color',
    options: ['', 'primaryWhite'],
    control: {
      type: 'select',
      labels: {
        'primaryWhite': 'White'
      },
    },
    table: {
      category: 'Top Sticker',
    }
  },
  iconStickerIconName: {
    name: 'Icon Name',
    description: 'Name of icon',
    options: [
      '',
      'occasions_collaboration-2'
    ],
    control: {
      type: 'select',
      labels: {
        'occasions_collaboration-2': 'Occasions | Collaboration 2',
      },
    },
    table: {
      category: 'Bottom Sticker',
    }
  },
  iconStickerIconColor: {
    name: 'Icon Color',
    description: 'Icon color',
    options: [
      'red',
      'white'
    ],
    control: {
      type: 'select',
      labels: {
        'red': 'Red',
        'white': 'White'
      },
    },
    table: {
      category: 'Bottom Sticker',
    }
  },
  iconStickerColor: {
    name: 'Sticker Color',
    description: 'Sticker color',
    options: ['', 'primaryRed', 'secondaryBlue', 'secondaryTeal', 'tertiaryTan'],
    control: {
      type: 'select',
      labels: {
        'primaryRed': 'Red',
        'secondaryBlue': 'Blue',
        'secondaryTeal': 'Teal',
        'tertiaryTan': 'Tan'
      },
    },
    table: {
      category: 'Bottom Sticker',
    }
  },
}
ImageWithStickersStory.args = {
  imageSource: 'https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  logoStickerIconName: "cfa-tagline",
  logoStickerColor: "primaryWhite",
  iconStickerIconName: "occasions_collaboration-2",
  iconStickerIconColor: "white",
  iconStickerColor: "primaryRed"
};

ImageWithStickersStory.storyName = "Image with Stickers";
