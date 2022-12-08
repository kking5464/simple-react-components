import React from "react";
import "./IconListItem.scss";
import BrandIcon from "../BrandIcon";

export interface IconListItemProps {
  header?: string;
  headerColor?: string;
  subheader?: string;
  iconName?: string;
  iconColor?: string;
}

const IconListItem = (props: IconListItemProps) => {
  return (
  <div className="icon-list-item">
    <BrandIcon name={props.iconName} color={props.iconColor} />
    <div className="icon-list-item__text-container">
      {props.header ? (
        <h2 className={`icon-list-item__header ${props.headerColor ? 'icon-list-item__header--' + props.headerColor : ''}`}>
          {props.header}
        </h2>
      ):''}
      {props.subheader ? <p className="icon-list-item__subheader">{props.subheader}</p> : ''}
    </div>
  </div>
  );
};

export default IconListItem;
