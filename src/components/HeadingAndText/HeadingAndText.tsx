import React from "react";
import "./HeadingAndText.scss";

export interface HeadingAndTextProps {
  heading: string;
  headingColor: string;
  text: string;
  backgroundColor: string;
}

const HeadingAndText = (props: HeadingAndTextProps) => {
  return (
    <div className={`heading-and-text ${props.backgroundColor ? 'heading-and-text--' + props.backgroundColor : ''}`}>
      <h2 className={`heading-and-text__heading ${props.headingColor ? 'heading-and-text__heading--' + props.headingColor : ''}`}>
        {props.heading}
      </h2>
      <p className="heading-and-text__text">
        {props.text}
      </p>
    </div>
  );
};

export default HeadingAndText;
