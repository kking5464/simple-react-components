import React from 'react';
import "./SideNavigationLink.scss";

export interface SideNavigationLinkProps {
  linkTitle: string;
  linkUrl: string;
  isActive: boolean;

}

const SideNavigationLink = (props: SideNavigationLinkProps) => {
  return (
    <a className={`side-navigation__link ${props.isActive && 'side-navigation__link--active'}`} href={props.linkUrl}>{props.linkTitle}</a>
  );
};

export default SideNavigationLink;
