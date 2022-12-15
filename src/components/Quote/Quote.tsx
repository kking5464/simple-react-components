import React from "react";
import "./Quote.scss";
import BrandIcon from "../BrandIcon";

export interface QuoteProps {
  quoteText: string;
  quoteColor?: string;
  owner: string;
}

const Quote = (props: QuoteProps) => {
  return (
    <div className="quote">
      <BrandIcon name={'business_quote'} color={'gray3'} />
      <div className="quote__text-container">
        <h2 className={`quote__quote-text ${props.quoteColor ? 'quote__quote-text--' + props.quoteColor : ''}`}>
          {props.quoteText}
        </h2>
        <p className="quote__owner">
          - {props.owner}
        </p>
      </div>
    </div>
  );
};

export default Quote;