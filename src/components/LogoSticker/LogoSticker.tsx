import React from "react";
import "./LogoSticker.scss";
import LogoIcon from "../LogoIcon";

export interface LogoStickerProps {
  iconName?: string;
  stickerColor?: string;
}

const LogoSticker = (props: LogoStickerProps) => {
  return (
    <div className={`logo-sticker ${props.stickerColor ? 'logo-sticker--' + props.stickerColor : ''}`}>
      <div className="logo-sticker__icon-container">
        <LogoIcon name={props.iconName}/>
      </div>
    </div>
  );
};

export default LogoSticker;
