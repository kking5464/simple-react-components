import React, { useEffect, useState } from "react";
import "./Banner.scss";
import { BannerStory } from "./Banner.stories";

export interface BannerProps {
  label: string;
  description: string;

  bannerName?: string;
  useApi?: boolean | null;
}

const Banner = (props: BannerProps) => {
  let labelText: string = props.label;
  let descText: string = props.description;

  const [error, setError] = useState(null);
  const [banners, setBanners] = useState<[]>([]);

  useEffect(() => {
    fetch(
      "https://epop03mstrt6av4inte.dxcloud.episerver.net/api/Banner?Name=" +
        props.bannerName
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setBanners(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      );
  }, []);

  if (error) {
    labelText = "Error";
    descText = "Banner could not be found";
  }
  if (props.useApi == true) {
    labelText = banners?.header;
    descText = banners?.body;
  }

  return (
    <div className="banner">
      <h1 className="banner__label">{labelText}</h1>
      <h2 className="banner__description">{descText}</h2>
    </div>
  );
};

export default Banner;
