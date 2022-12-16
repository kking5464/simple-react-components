import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TeamMemberProfileImage from "./TeamMemberProfileImage";

export default {
    title: "React Component Library/Team Member Profile Image",
    component: TeamMemberProfileImage,
} as ComponentMeta<typeof TeamMemberProfileImage>;

const Template: ComponentStory<typeof TeamMemberProfileImage> = (args) => <TeamMemberProfileImage {...args} />;

export const TeamMemberProfileImageStory = Template.bind({});
TeamMemberProfileImageStory.argTypes = {
    teamMemberImage: {
        name: 'Image Source',
        control: { type: 'text' },
        description: 'Source of image',
      }
};
TeamMemberProfileImageStory.args = {
    teamMemberImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
};

TeamMemberProfileImageStory.storyName = "Team Member Profile Image";