import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavigationWithAlert from "./NavigationWithAlert";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "React Component Library/Navigation/Navigation With Alert",
  component: NavigationWithAlert,
} as ComponentMeta<typeof NavigationWithAlert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavigationWithAlert> = (args) => (
  <NavigationWithAlert {...args} />
);

export const NavigationWithAlertStory = Template.bind({});
NavigationWithAlertStory.parameters = {
  layout: "fullscreen",
};
NavigationWithAlertStory.argTypes = {
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

  //Alert
  header: {
    name: "Header",
    control: { type: "text" },
    description: "Alert header",
    table: {
      category: "Alert",
    }
  },
  alertIconName: {
    name: "Alert Icon Name",
    description: "Name of icon for alert",
    options: [
      "error-filled",
      "info-filled",
      "success-filled",
      "warning-filled",
    ],
    control: {
      type: "select",
      labels: {
        "error-filled": "Error - Filled",
        "info-filled": "Info - Filled",
        "success-filled": "Success - Filled",
        "warning-filled": "Warning - Filled",
      },
    },
    table: {
      category: "Alert",
    }
  },
};
NavigationWithAlertStory.args = {
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
  header: "Store is closing at 6:00 pm today for inventory",
  alertIconName: "info-filled",
};

NavigationWithAlertStory.storyName = "Navigation With Alert";
