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
    removeBottomSticker?: boolean;
    bottomSticker?: string;
    bottomStickerColor?: string;
}

const PageHeader = (props: PageHeaderProps) => {
    return (
        <div className="page-header">
            <Banner title={props.title} subtitle={props.subtitle} />
            <ImageWithStickers imageSource={props.image} removeTopSticker={props.removeTopSticker} topStickerName={props.topSticker} topStickerColor={props.topStickerColor} removeBottomSticker={props.removeBottomSticker} bottomStickerName={props.bottomSticker} bottomStickerColor={props.bottomStickerColor} />
        </div>
    );
};

export default PageHeader;