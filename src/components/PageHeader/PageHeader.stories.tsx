import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageHeader from './PageHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React Component Library/Page Header',
    component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const PageHeaderStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageHeaderStory.argTypes = {
    title: {
        name: 'Title',
        control: { type: 'text' },
        description: 'Banner title',
    },
    subtitle: {
        name: 'Subtitle',
        control: { type: 'text' },
        description: 'Banner subtitle',
    },
    image: {
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
    topSticker: {
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
    bottomSticker: {
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
PageHeaderStory.args = {
    title: "We're here for one another.",
    subtitle: "We are a team-obsessed and customer-focused organization.",
    image: 'https://images.unsplash.com/photo-1508184585643-6001cf47a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    removeTopSticker: false,
    topSticker: "cfa-tagline",
    topStickerColor: "1",
    bottomSticker: "occasions_collaboration-2",
    bottomStickerColor: "1",
};

PageHeaderStory.storyName = "Page Header";