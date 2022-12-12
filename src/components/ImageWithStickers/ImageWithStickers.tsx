import React from "react";
import "./ImageWithStickers.scss";
import LogoSticker from "../LogoSticker";
import IconSticker from "../IconSticker";

export interface ImageWithStickersProps {
  imageSource: string;
  logoStickerIconName?: string;
  logoStickerColor?: string;
  iconStickerIconName?: string;
  iconStickerIconColor?: string;
  iconStickerColor?: string;
}

const ImageWithStickers = (props: ImageWithStickersProps) => {
  return (
    <div className="image-with-stickers">
      <img src={props.imageSource} />
    <div className="image-with-stickers__logo-sticker">
      <LogoSticker iconName={props.logoStickerIconName} stickerColor={props.logoStickerColor}/>
    </div>
    <div className="image-with-stickers__icon-sticker">
      <IconSticker iconName={props.iconStickerIconName} iconColor={props.iconStickerIconColor} stickerColor={props.iconStickerColor}/>
    </div>
    </div>
  );
};

export default ImageWithStickers;
