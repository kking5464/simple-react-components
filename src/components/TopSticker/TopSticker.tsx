import React from "react";
import "./TopSticker.scss";
import LogoIcon from "../LogoIcon";

export interface TopStickerProps {
  iconName?: string;
  color?: string;
}

const TopSticker = (props: TopStickerProps) => {
  let stickerColor: string = "primaryWhite";

  if (props.color === "2") {
    stickerColor = "tertiaryTan"
  }

  if (props.color === "") {
    stickerColor = ""
  }

  return (
    <div className={`top-sticker ${stickerColor ? 'top-sticker--' + stickerColor : ''}`}>
      <div className="top-sticker__icon-container">
        <LogoIcon name={props.iconName} />
      </div>
    </div>
  );
};

export default TopSticker;