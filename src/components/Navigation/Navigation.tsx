import React, { useState } from 'react';
import RuleDivider from '../RuleDivider';
import SideNavigation from '../SideNavigation';
import "./Navigation.scss";

export interface NavigationProps {
  // Logo
  logoImage: string;
  logoLink: string;

  // Profile
  profileImage: string;
  profileHome: string;
  profileHomeLink: string;
  profileStore: string;
  profileStoreLinkTitle: string;
  profileStoreLink: string;
  profileSettings: string;
  profileSettingsLink: string;
  profileLogout: string;
  profileLogoutLink: string;
}

const Navigation = (props: NavigationProps) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean | null>(false);

  return (
    <>
      <div className="navigation">
        <div className="navigation__logo">
          <a className="navigation__logo-link" href={props.logoLink}>
            <img className="navigation__logo-image" src={props.logoImage} alt="" />
          </a>
        </div>

        <div className="navigation__buttons">
          <div className="navigation__buttons-profile">
            <button
              className="navigation__buttons-profile-button"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <img className="navigation__buttons-profile-image" src={props.profileImage} alt="" />
            </button>
            <div className={`navigation__buttons-profile-content ${isProfileOpen && 'navigation__buttons-profile-content--open'}`}>
              <a className="navigation__buttons-profile-content-link" href={props.profileHomeLink}>{props.profileHome}</a>
              <a className="navigation__buttons-profile-content-link" href={props.profileSettingsLink}>{props.profileSettings}</a>

              <RuleDivider />

              <div className="navigation__buttons-profile-content-location">
                <h3 className="navigation__buttons-profile-content-location-name">
                  {props.profileStore}
                </h3>
                <a className="navigation__buttons-profile-content-location-link" href={props.profileStoreLink}>
                  {props.profileStoreLinkTitle}
                </a>

              </div>

              <RuleDivider />

              <a className="navigation__buttons-profile-content-link" href={props.profileLogoutLink}>{props.profileLogout}</a>
            </div>
          </div>

          <a
            className={`navigation__buttons-toggle ${isOpen && 'navigation__buttons-toggle--open'}`}
            onClick={() => {
              setIsOpen(!isOpen);
              setIsProfileOpen(false);
              !isOpen ? document.body.style.backgroundColor = "#5b6770" : document.body.style.backgroundColor = "transparent";
            }
            }
          >
            <span className="navigation__buttons-toggle-bar"></span>
            <span className="navigation__buttons-toggle-bar"></span>
            <span className="navigation__buttons-toggle-bar"></span>
          </a>
        </div>
      </div>

      <SideNavigation isOpen={isOpen} linkTitle="Hello" linkUrl="#" />
    </>

  );
};

export default Navigation;
