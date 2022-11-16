import React from "react";
import "./Icon.scss";

import Calendar from '../../public/icons/calendar.svg';
import ErrorFilled from '../../public/icons/error-filled.svg';
import InfoFilled from '../../public/icons/info-filled.svg';
import SuccessFilled from '../../public/icons/success-filled.svg';
import WarningFilled from '../../public/icons/warning-filled.svg';

export interface IconProps {
  name?: string;
  color?: string;
}

const Icon = (props: IconProps) => {
  function renderIcon(iconName: string) {
    switch (iconName) {
      case 'calendar':
        return <Calendar />;
      case 'error-filled':
        return <ErrorFilled />;
      case 'info-filled':
        return <InfoFilled />;
      case 'success-filled':
        return <SuccessFilled />;
      case 'warning-filled':
        return <WarningFilled />;
      default:
        return "";
    }
  }

  return (
    <div className={`icon ${props.color ? 'icon--' + props.color : ''}`}>
      {props.name ? renderIcon(props.name) : ''}
    </div>
  );
};

export default Icon;
