import React from "react";
import "./BasicCard.scss";
import Button from "../Button/Button";

export interface BasicCardProps {
  title: string;
  subtitle: string;
  copy: string;
  buttonLabel: string;
  buttonType: string;
  imageURL: string;
}

const BasicCard = (props: BasicCardProps) => {
  return (
    <div className="basic-card">
      <img data-epi-edit="Image" src={props.imageURL} />
      <div className="basic-card__content">
        <h1 data-epi-edit="Title">{props.title}</h1>
        <h2 data-epi-edit="Subtitle">{props.subtitle}</h2>
        <p data-epi-edit="Copy">{props.copy}</p>
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
