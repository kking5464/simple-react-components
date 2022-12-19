import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TeamBio from "./TeamBio";

export default {
    title: "React Component Library/Team Bio",
    component: TeamBio,
} as ComponentMeta<typeof TeamBio>;

const Template: ComponentStory<typeof TeamBio> = (args) => <TeamBio {...args} />;

export const TeamBioStory = Template.bind({});
TeamBioStory.argTypes = {
    teamMemberImage: {
        name: 'Image Source',
        control: { type: 'text' },
        description: 'Source of image',
      },
    teamMemberName: {
        name: 'Team Member Name',
        control: { type: 'text' },
        description: 'Team member name',
      },
    teamMemberTitle: {
        name: 'Team Member Title',
        control: { type: 'text' },
        description: 'Team member title',
      },
    linkUrl: {
        name: "Link Url",
        control: { type: "text" },
        description: "Url for Link",
      },
};
TeamBioStory.args = {
    teamMemberImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    teamMemberName: "Rover Smith",
    teamMemberTitle: "Food Safety Director",
    linkUrl: "",
};

TeamBioStory.storyName = "Team Bio";