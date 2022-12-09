import React from "react";
import "./BrandIcon.scss";

import OccasionsBirthdayCakeIcon from '../../public/icons/brand-icons/occasions_birthday-cake.svg';
import OccasionsCalendarIcon from '../../public/icons/brand-icons/occasions_calendar.svg';
import OccastionsCelebrationIcon from '../../public/icons/brand-icons/occasions_celebration.svg';
import OccastionsCelebration2Icon from '../../public/icons/brand-icons/occasions_celebration-2.svg';
import OccasionsCollaborationIcon from '../../public/icons/brand-icons/occasions_collaboration.svg';
import OccasionsDiscoIcon from '../../public/icons/brand-icons/occasions_disco.svg';
import RestaurantTeamMemberIcon from '../../public/icons/brand-icons/restaurant_team-member.svg';
import TechnologyTabletAndDesktopIcon from '../../public/icons/brand-icons/technology_tablet-and-desktop.svg';
import BusinessQuoteIcon from '../../public/icons/brand-icons/business_quote.svg';


export interface BrandIconProps {
  name?: string;
  color?: string;
}

const BrandIcon = (props: BrandIconProps) => {
  function renderIcon(iconName: string) {
    switch (iconName) {
      case 'occasions_birthday-cake':
        return <OccasionsBirthdayCakeIcon />;
      case 'occasions_calendar':
        return <OccasionsCalendarIcon />;
      case 'occasions_celebration':
        return <OccastionsCelebrationIcon />;
      case 'occasions_celebration-2':
        return <OccastionsCelebration2Icon />;
      case 'occasions_collaboration':
        return <OccasionsCollaborationIcon />;
      case 'occasions_disco':
        return <OccasionsDiscoIcon />;
      case 'restaurant_team-member':
        return <RestaurantTeamMemberIcon />;
      case 'technology_tablet-and-desktop':
        return <TechnologyTabletAndDesktopIcon />;
      case 'business_quote':
        return <BusinessQuoteIcon />;
      default:
        return "";
    }
  }

  return (
    <div className={`brand-icon ${props.color ? 'brand-icon--' + props.color : ''}`}>
      {props.name ? renderIcon(props.name) : ''}
    </div>
  );
};

export default BrandIcon;
