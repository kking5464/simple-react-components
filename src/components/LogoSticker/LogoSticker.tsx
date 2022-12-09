import React from "react";
import "./LogoSticker.scss";
import BrandIcon from "../BrandIcon";
import LogoIcon from "../LogoIcon";

export interface LogoStickerProps {
  iconName?: string;
  iconColor?: string;
  backgroundColor?: string;
}

const LogoSticker = (props: LogoStickerProps) => {
  return (
  <div className={`logo-sticker ${props.backgroundColor ? 'logo-sticker--' + props.backgroundColor : ''}`}>
  <div className="logo-sticker-contents">
    {/* <BrandIcon name={props.iconName} color={props.iconColor} /> */}
    <LogoIcon name={props.iconName} />
  </div>
  </div>
  );
};

export default LogoSticker;
