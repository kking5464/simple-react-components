import React from "react";
import "./Accordion.scss";

export interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = (props: AccordionProps) => {
  const [isActive, setIsActive] = React.useState<boolean | null>(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => setIsActive(!isActive)}
        >
          <div>{props.title}</div>
          <div className="accordion-title--icon">
            {isActive ? '-' : '+'}
          </div>
        </div>
        {isActive && <div className="accordion-content">{props.content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
