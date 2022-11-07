import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navigation from "./Navigation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const NavigationStory = Template.bind({});
NavigationStory.parameters = {
  layout: "fullscreen",
};
NavigationStory.argTypes = {
  // Logo
  logoImage: {
    name: "Logo Image",
    control: { type: "text" },
    description: "Logo image",
    table: {
      category: "Logo",
    },
  },
  logoLink: {
    name: "Logo Link",
    control: { type: "text" },
    description: "Logo link",
    table: {
      category: "Logo",
    },
  },

  // Profile
  profileImage: {
    name: "Profile Image",
    control: { type: "text" },
    description: "Profile image",
    table: {
      category: "Profile",
    },
  },
  profileHome: {
    name: "Profile Home",
    control: { type: "text" },
    description: "Profile home",
    table: {
      category: "Profile",
    },
  },
  profileHomeLink: {
    name: "Profile Home Link",
    control: { type: "text" },
    description: "Profile home link",
    table: {
      category: "Profile Link URL",
    },
  },
  profileSettings: {
    name: "Profile Settings",
    control: { type: "text" },
    description: "Profile settings",
    table: {
      category: "Profile",
    },
  },
  profileSettingsLink: {
    name: "Profile Settings Link",
    control: { type: "text" },
    description: "Profile settings link",
    table: {
      category: "Profile Link URL",
    },
  },
  profileStore: {
    name: "Profile Store",
    control: { type: "text" },
    description: "Profile store",
    table: {
      category: "Profile",
    },
  },
  profileStoreLinkTitle: {
    name: "Profile Store Link Title",
    control: { type: "text" },
    description: "Profile store link title",
    table: {
      category: "Profile",
    },
  },
  profileStoreLink: {
    name: "Profile Store Link",
    control: { type: "text" },
    description: "Profile store link",
    table: {
      category: "Profile Link URL",
    },
  },
  profileLogout: {
    name: "Profile Logout",
    control: { type: "text" },
    description: "Profile logout",
    table: {
      category: "Profile",
    },
  },
  profileLogoutLink: {
    name: "Profile Logout Link",
    control: { type: "text" },
    description: "Profile logout link",
    table: {
      category: "Profile Link URL",
    },
  },
};
NavigationStory.args = {
  logoImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Red_circle_frame_transparent.svg/512px-Red_circle_frame_transparent.svg.png",
  logoLink: "/",
  profileImage:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  profileHome: "Home",
  profileHomeLink: "#",
  profileSettings: "Settings",
  profileSettingsLink: "#",
  profileStore: "North Avenue FSU - 01885",
  profileStoreLink: "#",
  profileStoreLinkTitle: "Switch Locations",
  profileLogout: "Logout",
  profileLogoutLink: "#",
};

NavigationStory.storyName = "Navigation";
