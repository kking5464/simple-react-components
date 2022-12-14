import React from "react";

import CfaTaglineIcon from '../../public/icons/logo-icons/logo-tagline.svg';

export interface LogoIconProps {
  name?: string;
}

const LogoIcon = (props: LogoIconProps) => {
  function renderIcon(iconName: string) {
    switch (iconName) {
      case 'cfa-tagline':
        return <CfaTaglineIcon />;
      default:
        return "";
    }
  }

  return (
    <div className="logo-icon">
      {props.name ? renderIcon(props.name) : ''}
    </div>
  );
};

export default LogoIcon;