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
            'gray',
            'red',
            'blue',
            'teal',
            'white'
        ],
        control: {
            type: 'select',
            labels: {
                'gray': 'Gray',
                'red': 'Red',
                'blue': 'Blue',
                'teal': 'Teal',
                'white': 'White'
            },
        },
    },
    stickerColor: {
        name: 'Sticker Color',
        description: 'Sticker color',
        options: ['white', 'tan', 'lightTan', 'red'],
        control: {
            type: 'select',
            labels: {
                'white': 'White',
                'tan': 'Tan',
                'lightTan': 'Light Tan',
                'red': 'Red'
            },
        },
    },
};
IconStickerStory.args = {
    iconName: "occasions_collaboration-2",
    iconColor: "white",
    stickerColor: "red"
};

IconStickerStory.storyName = "Icon Sticker";