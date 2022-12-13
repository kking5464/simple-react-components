import React from "react";
import Banner from "../Banner";
import ImageWithStickers from "../ImageWithStickers";

export interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image?: string;
    removeTopSticker?: boolean;
    topSticker?: string;
    topStickerColor?: string;
    bottomSticker?: string;
    bottomStickerColor?: string;
}

const PageHeader = (props: PageHeaderProps) => {
    return (
        <div className="page-header__banner">
            <Banner title={props.title} subtitle={props.subtitle} />
            <div className="page-header__image-with-stickers" >
                <ImageWithStickers imageSource={props.image} removeTopSticker={props.removeTopSticker} topStickerName={props.topSticker} topStickerColor={props.topStickerColor} bottomStickerName={props.bottomSticker} bottomStickerColor={props.bottomStickerColor} />
            </div>
        </div>
    );
};

export default PageHeader;