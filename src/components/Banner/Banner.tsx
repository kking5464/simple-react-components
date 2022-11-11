import React, { useEffect, useState } from "react";
import "./Banner.scss";
import { BannerStory } from "./Banner.stories";

export interface BannerProps {
  label: string;
  description: string;

  bannerName?: string;
  useApi?: boolean | null;
}

interface BannerContent {
  header: string;
  body: string;
}

const Banner = (props: BannerProps) => {
  const [banner, setBanner] = useState<BannerContent>();

  useEffect(() => {
    if (props.useApi) {
      fetch(
        `https://epop03mstrt6av4inte.dxcloud.episerver.net/api/Banner?Name=${props.bannerName}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setBanner(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            const bannerError: BannerContent = {
              header: "Error",
              body: "Banner could not be found",
            };
            setBanner(bannerError);
          }
        );
    } else {
      const bannerTemp: BannerContent = {
        header: props.label,
        body: props.description,
      };
      setBanner(bannerTemp);
    }
  }, [props]);

  return (
    <div className="banner">
      {banner?.header ? (
        <h1 className="banner__label">{banner?.header}</h1>
      ) : (
        ""
      )}
      {banner?.body ? (
        <h2 className="banner__description">{banner?.body}</h2>
      ) : (
        ""
      )}
    </div>
  );
};

export default Banner;
