import React from 'react';
import "./SideNavigation.scss";

export interface SideNavigationProps {
  isOpen: boolean | null;
}

const SideNavigation = (props: SideNavigationProps) => {
  return (
      <div className={`side-navigation ${props.isOpen && 'side-navigation--open'}`}>
        <a className="active" href="#">Home</a>
        <a href="#">Schedule</a>
        <a href="#">My Restaurant</a>
        <a href="#">Pay</a>
        <a href="#">Performance</a>
        <a href="#">Team Member Resources</a>
      </div>
  );
};

export default SideNavigation;
