import React from "react";
import "./LogoIcon.scss";

import CfaTaglineIcon from '../../public/icons/logo-icons/cfa-tagline.svg';

export interface LogoIconProps {
  name?: string;
}

const LogoIcon = (props: LogoIconProps) => {
  function renderIcon(iconName: string) {
    switch (iconName) {
      case 'cfa-tagline':
        return <CfaTaglineIcon/>;
      default:
        return "";
    }
  }

  return (
    <div>
      {props.name ? renderIcon(props.name) : ''}
    </div>
  );
};

export default LogoIcon;