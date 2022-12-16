import React from "react";
import "./TextLink.scss";

export interface TextLinkProps {
  linkUrl: string;
  linkText: string;
}

const TextLink = (props: TextLinkProps) => {
  return (
    <a className="text-link" href={props.linkUrl}> {props.linkText} </a> 
  );
};

export default TextLink;