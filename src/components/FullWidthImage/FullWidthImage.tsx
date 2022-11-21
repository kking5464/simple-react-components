import React from "react";
import "./FullWidthImage.scss";

export interface FullWidthImageProps {
  imageSource: string;
}

const FullWidthImage = (props: FullWidthImageProps) => {
  return (
    <div className="full-width-image">
      <img src={props.imageSource} />
    </div>
  );
};

export default FullWidthImage;
