import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconSticker from "./IconSticker";

export default {
    title: "React Component Library/Sticker/Icon Sticker",
    component: IconSticker,
} as ComponentMeta<typeof IconSticker>;

const Template: ComponentStory<typeof IconSticker> = (args) => <IconSticker {...args} />;

export const IconStickerStory = Template.bind({});
IconStickerStory.argTypes = {
    iconName: {
        name: 'Icon Name',
        description: 'Name of icon',
        options: [
            'occasions_collaboration-2'
        ],
        control: {
            type: 'select',
            labels: {
                'occasions_collaboration-2': 'Occasions | Collaboration 2',
            },
        },
    },
    iconColor: {
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
    },
    stickerColor: {
        name: 'Sticker Color',
        description: 'Sticker color',
        options: ['primaryRed', 'secondaryBlue', 'secondaryTeal', 'tertiaryTan'],
        control: {
            type: 'select',
            labels: {
                'primaryRed': 'Red',
                'secondaryBlue': 'Blue',
                'secondaryTeal': 'Teal',
                'tertiaryTan': 'Tan'
            },
        },
    },
};
IconStickerStory.args = {
    iconName: "occasions_collaboration-2",
    iconColor: "white",
    stickerColor: "primaryRed"
};

IconStickerStory.storyName = "Icon Sticker";