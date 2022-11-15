import React, { useState } from "react";
import RuleDivider from "../RuleDivider";
import SideNavigation from "../SideNavigation";
import "./Navigation.scss";

export interface NavigationProps {
  // Logo
  logoImage: string;
  logoLink: string;

  // Profile
  profileImage: string;
  homeLinkText: string;
  homeLinkUrl: string;
  storeName: string;
  changeStoreLinkTitle: string;
  changeStoreLinkUrl: string;
  settingsLinkText: string;
  settingsLinkUrl: string;
  logoutLinkText: string;
  logoutLinkUrl: string;

  // Side Navigation
  sideNavigationLinks?: {
    linkTitle: string;
    linkUrl: string;
    isActive: boolean;
  }[];
}

const Navigation = (props: NavigationProps) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean | null>(false);

  return (
    <>
      <div className="navigation">
        <div className="navigation__logo">
          <a className="navigation__logo-link" href={props.logoLink}>
            <img
              className="navigation__logo-image"
              src={props.logoImage}
              alt=""
            />
          </a>
        </div>

        <div className="navigation__buttons">
          <div className="navigation__buttons-profile">
            <button
              className="navigation__buttons-profile-button"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <img
                className="navigation__buttons-profile-image"
                src={props.profileImage}
                alt=""
              />
            </button>
            <div
              className={`navigation__buttons-profile-content ${
                isProfileOpen && "navigation__buttons-profile-content--open"
              }`}
            >
              <a
                className="navigation__buttons-profile-content-link"
                href={props.homeLinkUrl}
              >
                {props.homeLinkText}
              </a>
              <a
                className="navigation__buttons-profile-content-link"
                href={props.settingsLinkUrl}
              >
                {props.settingsLinkText}
              </a>

              <RuleDivider />

              <div className="navigation__buttons-profile-content-location">
                <h3 className="navigation__buttons-profile-content-location-name">
                  {props.storeName}
                </h3>
                <a
                  className="navigation__buttons-profile-content-location-link"
                  href={props.changeStoreLinkUrl}
                >
                  {props.changeStoreLinkTitle}
                </a>
              </div>

              <RuleDivider />

              <a
                className="navigation__buttons-profile-content-link"
                href={props.logoutLinkUrl}
              >
                {props.logoutLinkText}
              </a>
            </div>
          </div>

          <a
            className={`navigation__buttons-toggle ${
              isOpen ? "navigation__buttons-toggle--open" : ""
            }`}
            onClick={() => {
              setIsOpen(!isOpen);
              setIsProfileOpen(false);
            }}
          >
            <span className="navigation__buttons-toggle-bar"></span>
            <span className="navigation__buttons-toggle-bar"></span>
            <span className="navigation__buttons-toggle-bar"></span>
          </a>
        </div>
      </div>

      {props.sideNavigationLinks && (
        <SideNavigation
          isOpen={isOpen}
          sideNavigationLinks={props.sideNavigationLinks}
        />
      )}

      <div
        className={`navigation__screen ${
          isOpen ? "navigation__screen--open" : ""
        }`}
      ></div>
    </>
  );
};

export default Navigation;
