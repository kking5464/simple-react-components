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
  removeTopSticker: {
    name: 'Remove top sticker space?',
    control: { type: 'boolean' },
    table: {
      category: 'Top Sticker',
    },
  },
  topStickerName: {
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
  topStickerColor: {
    name: 'Color',
    description: 'Icon and sticker color',
    options: ['', '1', '2'],
    control: {
      type: 'select',
      labels: {
        '1': 'Primary white background | Primary red icon',
        '2': 'Tertiary tan background | Primary red icon',
      },
    },
    table: {
      category: 'Top Sticker',
    }
  },
  bottomStickerName: {
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
  bottomStickerColor: {
    name: 'Color',
    description: 'Icon and sticker color',
    options: ['', '1', '2', '3', '4'],
    control: {
      type: 'select',
      labels: {
        '1': 'Primary red background | Primary white icon',
        '2': 'Secondary blue background | Primary white icon',
        '3': 'Secondary teal background | Primary white icon',
        '4': 'Tertiary tan background | Primary red icon'
      },
    },
    table: {
      category: 'Bottom Sticker',
    }
  }
}
ImageWithStickersStory.args = {
  imageSource: 'https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  removeTopSticker: false,
  topStickerName: "cfa-tagline",
  topStickerColor: "1",
  bottomStickerName: "occasions_collaboration-2",
  bottomStickerColor: "1",
};

ImageWithStickersStory.storyName = "Image with Stickers";