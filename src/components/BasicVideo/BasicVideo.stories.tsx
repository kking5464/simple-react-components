import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BasicVideo from './BasicVideo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/BasicVideo',
  component: BasicVideo,
} as ComponentMeta<typeof BasicVideo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicVideo> = (args) => <BasicVideo {...args} />;

export const VideoStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
VideoStory.argTypes = {
  embedId: {
    name: 'Embed Code ID',
    control: { type: 'text' },
    description: 'Embed code ID',
  },
  videoTitle: {
    name: 'Video Title',
    control: { type: 'text' },
    description: 'Video title',
  },
  languagePreference: {
    name: 'Language Preference',
    control: { type: 'text' },
    description: 'Language preference code in ISO 639-1 format',
  },
  controls: {
    name: 'Show Video Controls',
    options: ['1', '0'],
    control: {
      type: 'select',
      labels: {
        '1': 'Enable',
        '0': 'Disable'
      },
    },
    description: 'Show video controls',
  },
  autoplay: {
    name: 'Autoplay',
    options: ['1', '0'],
    control: {
      type: 'select',
      labels: {
        '1': 'Enable',
        '0': 'Disable'
      },
    },
    description: 'Autoplay',
  },
}

VideoStory.args = {
  embedId: 'qsMpKU5Ld94',
  videoTitle: 'Test Video',
  autoplay:'1',
  languagePreference:'aa',
  controls:'1',
  ccLoad:'0',
  ccPref:'1'
};

VideoStory.storyName = "BasicVideo";