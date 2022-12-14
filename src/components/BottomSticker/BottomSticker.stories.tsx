import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BottomSticker from "./BottomSticker";

export default {
    title: "React Component Library/Stickers/Bottom Sticker",
    component: BottomSticker,
} as ComponentMeta<typeof BottomSticker>;

const Template: ComponentStory<typeof BottomSticker> = (args) => <BottomSticker {...args} />;

export const BottomStickerStory = Template.bind({});
BottomStickerStory.argTypes = {
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
    color: {
        name: 'Color',
        description: 'Icon and sticker color',
        options: ['1', '2', '3', '4'],
        control: {
            type: 'select',
            labels: {
                '1': 'Primary red background | Primary white icon',
                '2': 'Secondary blue background | Primary white icon',
                '3': 'Secondary teal background | Primary white icon',
                '4': 'Tertiary tan background | Primary red icon'
            },
        },  
    }
};
BottomStickerStory.args = {
    iconName: "occasions_collaboration-2",
    color: "1"
};

BottomStickerStory.storyName = "Bottom Sticker";