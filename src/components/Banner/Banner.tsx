import React, { useEffect, useState } from "react";
import "./Banner.scss";

export interface BannerProps {
  title: string;
  subtitle?: string;

  bannerName?: string;
  useApi?: boolean | null;
}

interface BannerContent {
  title: string;
  subtitle?: string;
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
              title: "Error",
              subtitle: "Banner could not be found",
            };
            setBanner(bannerError);
          }
        );
    } else {
      const bannerTemp: BannerContent = {
        title: props.title,
        subtitle: props.subtitle,
      };
      setBanner(bannerTemp);
    }
  }, [props]);

  return (
    <div className="banner">
      {banner?.title ? (
        <h1 className="banner__title">{banner?.title}</h1>
      ) : (
        ""
      )}
      {banner?.subtitle ? (
        <h2 className="banner__subtitle">{banner?.subtitle}</h2>
      ) : (
        ""
      )}
    </div>
  );
};

export default Banner;