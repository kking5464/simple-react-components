import React from "react";
import "./Banner.scss";

export interface BannerProps {
  label: string;
  description: string;
}

const Banner = (props: BannerProps) => {
  return (
    <div className="banner">
      <h1 className="banner__label">{props.label}</h1>
      <h2 className="banner__description">{props.description}</h2>
    </div>
  );
};

export default Banner;
