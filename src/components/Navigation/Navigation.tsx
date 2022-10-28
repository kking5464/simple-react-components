import React, { useState } from 'react';
import "./Navigation.scss";

export interface NavigationProps {
  logoImage: string;
  profileImage: string;
}

const Navigation = (props: NavigationProps) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(false);

  return (
    <div className="navigation">
      <div className="navigation__logo">
        <a className="navigation__logo-link" href="">
          <img className="navigation__logo-image" src={props.logoImage} alt="" />
        </a>
      </div>

      <div className="navigation__buttons">
        <a className="navigation__buttons-profile-link" href="">
          <img className="navigation__buttons-profile-image" src={props.profileImage} alt="" />
        </a>

        <a className={`navigation__buttons-toggle ${isOpen && 'navigation__buttons-toggle--open'}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="navigation__buttons-toggle-bar"></span>
          <span className="navigation__buttons-toggle-bar"></span>
          <span className="navigation__buttons-toggle-bar"></span>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
