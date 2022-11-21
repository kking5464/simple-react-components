import React from "react";
import "./SystemIcon.scss";

import ActionsHorizontalIcon from '../../public/icons/system-icons/actions-horizontal.svg';
import CalendarIcon from '../../public/icons/system-icons/calendar.svg';
import ChevronRightIcon from '../../public/icons/system-icons/chevron-right.svg';
import CloseIcon from '../../public/icons/system-icons/close.svg';
import ErrorFilledIcon from '../../public/icons/system-icons/error-filled.svg';
import InfoFilledIcon from '../../public/icons/system-icons/info-filled.svg';
import MenuIcon from '../../public/icons/system-icons/menu.svg';
import SearchIcon from '../../public/icons/system-icons/search.svg';
import SuccessFilledIcon from '../../public/icons/system-icons/success-filled.svg';
import WarningFilledIcon from '../../public/icons/system-icons/warning-filled.svg';

export interface SystemIconProps {
  name?: string;
  color?: string;
}

const SystemIcon = (props: SystemIconProps) => {
  function renderIcon(iconName: string) {
    switch (iconName) {
      case 'actions-horizontal':
        return <ActionsHorizontalIcon />;
      case 'calendar':
        return <CalendarIcon />;
      case 'chevron-right':
          return <ChevronRightIcon />;
      case 'close':
        return <CloseIcon />;
      case 'error-filled':
        return <ErrorFilledIcon />;
      case 'info-filled':
        return <InfoFilledIcon />;
      case 'menu':
          return <MenuIcon />;
      case 'search':
        return <SearchIcon />;
      case 'success-filled':
        return <SuccessFilledIcon />;
      case 'warning-filled':
        return <WarningFilledIcon />;
      default:
        return "";
    }
  }

  return (
    <div className={`system-icon ${props.color ? 'system-icon--' + props.color : ''}`}>
      {props.name ? renderIcon(props.name) : ''}
    </div>
  );
};

export default SystemIcon;
