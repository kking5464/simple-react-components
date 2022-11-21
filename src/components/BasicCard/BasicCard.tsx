import React from "react";
import "./BasicCard.scss";
import Button from "../Button/Button";

export interface BasicCardProps {
  title?: string;
  subtitle?: string;
  copy?: string;
  buttonLabel?: string;
  buttonType?: string;
  buttonColor?: string;
  buttonUrl?: string;
  imageURL?: string;
  useButton?: boolean;
  centerText?: boolean;
  smallTitles?: boolean;
  titleColor?: string;
}

const BasicCard = (props: BasicCardProps) => {
  return (
    <div className="basic-card">
      {props.imageURL ? <img data-epi-edit="Image" src={props.imageURL} /> : ''}
      <div className={`basic-card__content ${props.centerText ? 'basic-card__content--center' : ''} ${props.smallTitles ? 'basic-card__content--small-titles' : ''}`}>
        {props.title ? <h1 className={`basic-card__content-title ${props.titleColor ? 'basic-card__content-title--' + props.titleColor : ''}`} data-epi-edit="Title">{props.title}</h1> : ''}
        {props.subtitle ? <h2 data-epi-edit="Subtitle">{props.subtitle}</h2> : ''}
        {props.copy ? <p data-epi-edit="Copy">{props.copy}</p> : ''}
        {props.useButton && props.buttonLabel && props.buttonType ?
          <Button
            label={props.buttonLabel}
            type={props.buttonType}
            color={props.buttonColor}
            url={props.buttonUrl}
          />
          : ''}
      </div>
    </div>
  )
    ;
};

export default BasicCard;
