import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  type: string;
  color?: string;
  url?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`button ${props.type ? 'button--' + props.type : ''} ${props.color ? 'button--' + props.color : ''}`}
      data-epi-edit="Label"
      onClick={(e) => {
        e.preventDefault();
        if (props.url) window.location.href = props.url;
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
