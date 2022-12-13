import React from "react";
import "./ImageWithStickers.scss";
import TopSticker from "../TopSticker";
import BottomSticker from "../BottomSticker";

export interface ImageWithStickersProps {
  imageSource?: string;
  topStickerName?: string;
  topStickerColor?: string;
  bottomStickerName?: string;
  bottomStickerColor?: string;
  removeTopSticker?: boolean;
  removeBottomSticker?: boolean;
}

const ImageWithStickers = (props: ImageWithStickersProps) => {
  return (
    <div className={`image-with-stickers ${props.removeTopSticker ? `image-with-stickers--remove-top-sticker` : ''} ${props.removeBottomSticker ? `image-with-stickers--remove-bottom-sticker` : ''}`}>
      <img src={props.imageSource} />
      {props.removeTopSticker ? "" : <TopSticker iconName={props.topStickerName} color={props.topStickerColor} />}
      {props.removeBottomSticker ? "" : <BottomSticker iconName={props.bottomStickerName} color={props.bottomStickerColor} />}
    </div>
  );
};

export default ImageWithStickers;