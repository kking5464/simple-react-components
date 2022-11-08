import React from 'react';
import "./SideNavigation.scss";
import SideNavigationLink from '../SideNavigationLink';

export interface SideNavigationProps {
  isOpen: boolean | null;
  linkTitle: string;
  linkUrl: string;
}

const SideNavigation = (props: SideNavigationProps) => {
  return (
      <div className={`side-navigation ${props.isOpen && 'side-navigation--open'}`}>
        <SideNavigationLink isActive linkTitle={props.linkTitle} linkUrl={props.linkUrl}/>
      </div>
  );
};

export default SideNavigation;
