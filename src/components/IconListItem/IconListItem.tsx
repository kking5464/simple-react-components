import React from "react";
import "./IconListItem.scss";
import BrandIcon from "../BrandIcon";

export interface IconListItemProps {
  header?: string;
  subheader?: string;
}

const IconListItem = (props: IconListItemProps) => {
  return (
  <div className="icon-list-item">
    <BrandIcon name={"occasions_celebration-2"} color={"teal"} />
    <div className="icon-list-item__text-container">
      {props.header ? <p className="icon-list-item__header">{props.header}</p> : ''}
      {props.subheader ? <p className="icon-list-item__subheader">{props.subheader}</p> : ''}
    </div>
  </div>
  );
};

export default IconListItem;