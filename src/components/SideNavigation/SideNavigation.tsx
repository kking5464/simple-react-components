import React from 'react';
import "./SideNavigation.scss";
import SideNavigationLink from '../SideNavigationLink';

export interface SideNavigationProps {
  isOpen: boolean | null;
  sideNavigationLinks: {
    linkTitle: string;
    linkUrl: string;
    isActive: boolean;
  }[];
}

const renderLinks = (sideNavigationLinks: {
  linkTitle: string;
  linkUrl: string;
  isActive: boolean;
}[]) => {
  return sideNavigationLinks?.map((sideNavigationLink, key) => {
    return (
      <SideNavigationLink
        key={key}
        linkTitle={sideNavigationLink.linkTitle}
        linkUrl={sideNavigationLink.linkUrl}
        isActive={sideNavigationLink.isActive}
      />
    );
  });
};

const SideNavigation = (props: SideNavigationProps) => {
  return (
    <div className={`side-navigation ${props.isOpen && 'side-navigation--open'}`}>
      {renderLinks(props.sideNavigationLinks)}
    </div>
  );
};

export default SideNavigation;
