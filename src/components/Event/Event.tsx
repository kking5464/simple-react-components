import React, { useEffect, useState } from "react";
import BrandIcon from "../BrandIcon/BrandIcon";
import BasicCard from "../BasicCard/BasicCard";
import "./Event.scss";

export interface EventProps {
  eventName?: string;
  useApi?: boolean | null;
  eventType?: string;

  //shared props
  image?: string;
  date?: string;
  title?: string;
  buttonUrl?: string;

  //BasicCard Props
  basicCardDescription?: string;
}

interface EventContent {
  header?: string;
  body?: string;

  image?: string;

  cardDescription?: string;
  buttonUrl?: string;
}

const Event = (props: EventProps) => {
  const [event, setEvent] = useState<EventContent>();

  useEffect(() => {
    if (props.useApi) {
      fetch(`https://localhost:8001/api/Event?Name=${props.eventName}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setEvent(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            const CardEventTemp: EventContent = {
              header: "Error",
              cardDescription: "Error",
              image: "error",
              buttonUrl: "error",
            };
            setEvent(CardEventTemp);
          }
        );
    } else {
      const CardEventTemp: EventContent = {
        header: props.title,
        body: props.date,
        cardDescription: props.basicCardDescription,
        image: props.image,
        buttonUrl: props.buttonUrl,
      };
      setEvent(CardEventTemp);
    }
  }, [props]);
  if (props.eventType === "icon") {
    return (
      <div className="event event--icon">
        <div className="event__icon">
          <BrandIcon name={"occasions_calendar"} color={"gray"} />
        </div>
        <div className="event__body">
          <h1 className="event__name">{event?.header}</h1>
          <h2 className="event__description">{event?.body}</h2>
        </div>
      </div>
    );
  } else if (props.eventType === "preview") {
    return (
      <div className="event event--preview">
        <div className="event__image">
          <img src={event?.image} />
        </div>
        <div className="event__body">
          <h1 className="event__name">{event?.header}</h1>
          <h2 className="event__description">{event?.body}</h2>
        </div>
      </div>
    );
  } else {
    return (
      <BasicCard
        title={event?.header}
        subtitle={event?.body}
        copy={event?.cardDescription}
        buttonLabel="More Info"
        buttonType="primary"
        buttonColor="red"
        buttonUrl={event?.buttonUrl}
        imageURL={event?.image}
        useButton
        centerText={false}
        smallTitles={false}
        titleColor="red"
      />
    );
  }
};

export default Event;
