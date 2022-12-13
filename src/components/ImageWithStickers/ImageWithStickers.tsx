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
}

const ImageWithStickers = (props: ImageWithStickersProps) => {
  return (
      <div className={`image-with-stickers ${props.removeTopSticker ? `image-with-stickers--remove-space` : ''}`}>
      <img src={props.imageSource} />
      <div className="image-with-stickers__top-sticker">
        <TopSticker iconName={props.topStickerName} color={props.topStickerColor} />
      </div>
      <div className="image-with-stickers__bottom-sticker">
        <BottomSticker iconName={props.bottomStickerName} color={props.bottomStickerColor} />
      </div>
    </div>
  );
};

export default ImageWithStickers;