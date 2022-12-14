import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Video from './Video';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React Component Library/Video',
  component: Video,
} as ComponentMeta<typeof Video>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const VideoStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
VideoStory.argTypes = {
  videoType: {
    name: 'Video Type',
    description: 'Type of video',
    options: ['youtube', 'vimeo'],
    control: {
      type: 'select',
      labels: {
        'youtube': 'YouTube',
        'vimeo': 'Vimeo'
      },
    }
  },
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
}
VideoStory.args = {
  videoType: 'youtube',
  embedId: 'qsMpKU5Ld94',
  videoTitle: 'Test Video',
};

VideoStory.storyName = "Video";