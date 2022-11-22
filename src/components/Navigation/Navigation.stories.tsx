import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navigation from "./Navigation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Navigation/Navigation",
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
  homeLinkText: {
    name: "Profile Home",
    control: { type: "text" },
    description: "Profile home",
    table: {
      category: "Profile",
      subcategory: "Home",
    },
  },
  homeLinkUrl: {
    name: "Profile Home Link",
    control: { type: "text" },
    description: "Profile home link",
    table: {
      category: "Profile",
      subcategory: "Home",
    },
  },
  settingsLinkText: {
    name: "Profile Settings",
    control: { type: "text" },
    description: "Profile settings",
    table: {
      category: "Profile",
      subcategory: "Settings",
    },
  },
  settingsLinkUrl: {
    name: "Profile Settings Link",
    control: { type: "text" },
    description: "Profile settings link",
    table: {
      category: "Profile",
      subcategory: "Settings",
    },
  },
  storeName: {
    name: "Profile Store",
    control: { type: "text" },
    description: "Profile store",
    table: {
      category: "Profile",
      subcategory: "Store",
    },
  },
  changeStoreLinkTitle: {
    name: "Profile Store Link Title",
    control: { type: "text" },
    description: "Profile store link title",
    table: {
      category: "Profile",
      subcategory: "Store",
    },
  },
  changeStoreLinkUrl: {
    name: "Profile Store Link",
    control: { type: "text" },
    description: "Profile store link",
    table: {
      category: "Profile",
      subcategory: "Store",
    },
  },
  logoutLinkText: {
    name: "Profile Logout",
    control: { type: "text" },
    description: "Profile logout",
    table: {
      category: "Profile",
      subcategory: "Logout",
    },
  },
  logoutLinkUrl: {
    name: "Profile Logout Link",
    control: { type: "text" },
    description: "Profile logout link",
    table: {
      category: "Profile",
      subcategory: "Logout",
    },
  },

  // Side Navigation
  sideNavigationLinks: {
    name: "Side Navigation Links",
    control: { type: "object" },
    description: "Side navigation links",
    table: {
      category: "Side Navigation",
    },
  },
};
NavigationStory.args = {
  logoImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Red_circle_frame_transparent.svg/512px-Red_circle_frame_transparent.svg.png",
  logoLink: "/",
  profileImage:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  homeLinkText: "Home",
  homeLinkUrl: "#",
  settingsLinkText: "Settings",
  settingsLinkUrl: "#",
  storeName: "North Avenue FSU - 01885",
  changeStoreLinkUrl: "#",
  changeStoreLinkTitle: "Switch Locations",
  logoutLinkText: "Logout",
  logoutLinkUrl: "#",

  // Side Navigation
  sideNavigationLinks: [
    {
      linkTitle: "Home",
      linkUrl: "/",
      isActive: true,
    },
    {
      linkTitle: "Schedule",
      linkUrl: "/",
      isActive: false,
    },
    {
      linkTitle: "My Restaurant",
      linkUrl: "/",
      isActive: false,
    },
    {
      linkTitle: "Pay",
      linkUrl: "/",
      isActive: false,
    },
    {
      linkTitle: "Performace",
      linkUrl: "/",
      isActive: false,
    },
    {
      linkTitle: "Team Member Resources",
      linkUrl: "/",
      isActive: false,
    },
  ],
};

NavigationStory.storyName = "Navigation";
