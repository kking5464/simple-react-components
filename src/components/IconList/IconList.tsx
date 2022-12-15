import React from "react";
import "./IconList.scss";
import BrandIcon from "../BrandIcon";
import IconListItem from "../IconListItem";

export interface IconListProps {
  title?: string;
  backgroundColor?: string;
  
  removeListItem1?: boolean;
  iconListItem1Header?: string;
  iconListItem1Subheader?: string;

  removeListItem2?: boolean;
  iconListItem2Header?: string;
  iconListItem2Subheader?: string;

  removeListItem3?: boolean;
  iconListItem3Header?: string;
  iconListItem3Subheader?: string;

  removeListItem4?: boolean;
  iconListItem4Header?: string;
  iconListItem4Subheader?: string;
}

const IconList = (props: IconListProps) => {
  return (
    <div className={`icon-list ${props.backgroundColor ? 'icon-list--' + props.backgroundColor : ''}`}>
      {props.title ? <p className="icon-list__title">{props.title}</p> : ''}
      <div className="icon-list__item-container">
      {props.removeListItem1 ? "" : <IconListItem header={props.iconListItem1Header} subheader={props.iconListItem1Subheader} />}
      {props.removeListItem2 ? "" : <IconListItem header={props.iconListItem2Header} subheader={props.iconListItem2Subheader} />}
      {props.removeListItem3 ? "" : <IconListItem header={props.iconListItem3Header} subheader={props.iconListItem3Subheader} />}
      {props.removeListItem4 ? "" : <IconListItem header={props.iconListItem4Header} subheader={props.iconListItem4Subheader} />}
      </div>
    </div>
  );
};

export default IconList;