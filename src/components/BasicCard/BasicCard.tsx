import React from "react";
import "./BasicCard.scss";
import Button from "../Button/Button";

export interface BasicCardProps {
  title: string;
  subtitle: string;
  copy: string;
  buttonLabel: string;
  buttonType: string;
}

const BasicCard = (props: BasicCardProps) => {
  return (
    <div className="basic-card">
      <img src="https://d1fd34dzzl09j.cloudfront.net/2022/07/Chicken%20Biscuit%20story/chicken%20biscuit%20image.png?h=973&w=1462&la=en" />
      <div className="basic-card__content">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.copy}</p>
        <Button
          label={props.buttonLabel}
          type={props.buttonType}
        />
      </div>
    </div>
  )
    ;
};

export default BasicCard;
