import React from "react";
import "./IconSticker.scss";
import BrandIcon from "../BrandIcon";

export interface IconStickerProps {
  iconName?: string;
  iconColor?: string;
  stickerColor?: string;
}

const IconSticker = (props: IconStickerProps) => {
  return (
    <div className={`icon-sticker ${props.stickerColor ? 'icon-sticker--' + props.stickerColor : ''}`}>
      <div className="icon-sticker__icon-container">
        <BrandIcon name={props.iconName} color={props.iconColor} />
      </div>
    </div>
  );
};

export default IconSticker;