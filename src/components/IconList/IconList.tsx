import React from "react";
import "./IconList.scss";
import BrandIcon from "../BrandIcon";
import IconListItem from "../IconListItem";

export interface IconListProps {
  title?: string;
  titleColor?: string;
  backgroundColor?: string;

  iconListItem1Header?: string;
  iconListItem1HeaderColor?: string;
  iconListItem1Subheader?: string;
  iconListItem1IconName?: string;
  iconListItem1IconColor?: string;

  iconListItem2Header?: string;
  iconListItem2HeaderColor?: string;
  iconListItem2Subheader?: string;
  iconListItem2IconName?: string;
  iconListItem2IconColor?: string;

  iconListItem3Header?: string;
  iconListItem3HeaderColor?: string;
  iconListItem3Subheader?: string;
  iconListItem3IconName?: string;
  iconListItem3IconColor?: string;

  iconListItem4Header?: string;
  iconListItem4HeaderColor?: string;
  iconListItem4Subheader?: string;
  iconListItem4IconName?: string;
  iconListItem4IconColor?: string;
}

const IconList = (props: IconListProps) => {
  return (
  <div className={`icon-list ${props.backgroundColor ? 'icon-list--' + props.backgroundColor : ''}`}>
    {props.title ? (
      <h2 className={`icon-list__title ${props.titleColor ? 'icon-list__title--' + props.titleColor : ''}`}>
       {props.title}
      </h2>
    ):''}
    <div className="icon-list__item-container">
      <IconListItem header={props.iconListItem1Header} headerColor={props.iconListItem1HeaderColor} subheader={props.iconListItem1Subheader} iconName={props.iconListItem1IconName} iconColor={props.iconListItem1IconColor} />
      <IconListItem header={props.iconListItem2Header} headerColor={props.iconListItem2HeaderColor} subheader={props.iconListItem2Subheader} iconName={props.iconListItem2IconName} iconColor={props.iconListItem2IconColor} />
      <IconListItem header={props.iconListItem3Header} headerColor={props.iconListItem3HeaderColor} subheader={props.iconListItem3Subheader} iconName={props.iconListItem3IconName} iconColor={props.iconListItem3IconColor} />
      <IconListItem header={props.iconListItem4Header} headerColor={props.iconListItem4HeaderColor} subheader={props.iconListItem4Subheader} iconName={props.iconListItem4IconName} iconColor={props.iconListItem4IconColor} />
    </div>
  </div>
  );
};

export default IconList;
