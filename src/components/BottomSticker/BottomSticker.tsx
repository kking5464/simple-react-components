import React from "react";
import "./BottomSticker.scss";
import BrandIcon from "../BrandIcon";

export interface BottomStickerProps {
  iconName?: string;
  color?: string;
}

const BottomSticker = (props: BottomStickerProps) => {
  let iconColor: string = "white";
  let stickerColor: string = "primaryRed";

  if (props.color === "2") {
    stickerColor = "secondaryBlue"
  }

  if (props.color === "3") {
    stickerColor = "secondaryTeal"
  }

  if (props.color === "4") {
    stickerColor = "tertiaryTan"
    iconColor = "red"
  }

  if (props.color === "") {
    stickerColor = ""
    iconColor = ""
  }

  return (
    <div className={`bottom-sticker ${stickerColor ? 'bottom-sticker--' + stickerColor : ''}`}>
      <div className="bottom-sticker__icon-container">
        <BrandIcon name={props.iconName} color={iconColor} />
      </div>
    </div>
  );
};

export default BottomSticker;