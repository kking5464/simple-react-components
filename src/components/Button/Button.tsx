import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  type: string;
}

const Button = (props: ButtonProps) => {
  return <button data-epi-edit="Label" className={`button ${props.type}`}>{props.label}</button>;
};

export default Button;
