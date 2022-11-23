import React from "react";
import Alert from "../Alert";
import Navigation from "../Navigation/Navigation";

export interface NavigationWithAlertProps {
  //Logo
  logoImage: string;
  logoLink: string;

  //Profile
  profileImage?: string;
  homeLinkText?: string;
  homeLinkUrl?: string;
  storeName?: string;
  changeStoreLinkTitle?: string;
  changeStoreLinkUrl?: string;
  settingsLinkText?: string;
  settingsLinkUrl?: string;
  logoutLinkText?: string;
  logoutLinkUrl?: string;

  //Side Navigation
  sideNavigationLinks?: {
    linkTitle: string;
    linkUrl: string;
    isActive: boolean;
  }[];

  //Alert
  header: string;
  alertIconName: string;
}

const NavigationWithAlert = (props: NavigationWithAlertProps) => {
  return (
    <>
      <Navigation
        logoImage={props.logoImage}
        logoLink={props.logoLink}
        profileImage={props.profileImage}
        homeLinkText={props.homeLinkText}
        homeLinkUrl={props.homeLinkUrl}
        storeName={props.storeName}
        changeStoreLinkTitle={props.changeStoreLinkTitle}
        changeStoreLinkUrl={props.changeStoreLinkUrl}
        settingsLinkText={props.settingsLinkText}
        settingsLinkUrl={props.settingsLinkUrl}
        logoutLinkText={props.logoutLinkText}
        logoutLinkUrl={props.logoutLinkUrl}
        sideNavigationLinks={props.sideNavigationLinks}
      />
      <Alert header={props.header} alertIconName={props.alertIconName} />
    </>
  );
};

export default NavigationWithAlert;
