import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import BasicCard from "../BasicCard/BasicCard";
import "./Event.scss";

export interface EventProps {
  eventName?: string;
  date?: string;
  description?: string;
  useApi?: boolean | null;
  eventType?: string;

  //preview prop
  previewImage?: string;

  //Icon props
  iconName?: string;
  iconColor?: string;

  //BasicCard Props
  bc_subtitle?: string;
  bc_copy?: string;
  bc_buttonLabel?: string;
  bc_buttonType?: string;
  bc_buttonColor?: string;
  bc_buttonUrl?: string;
  bc_imageURL?: string;
  bc_useButton?: boolean;
  bc_centerText?: boolean;
  bc_smallTitles?: boolean;
  bc_titleColor?: string;
}

interface EventContent {
  header?: string;
  body?: string;
}

const Event = (props: EventProps) => {
  const [event, setEvent] = useState<EventContent>();

  useEffect(() => {
    if (props.useApi) {
      fetch(
        `https://epop03mstrt6av4inte.dxcloud.episerver.net/api/Event?Name=${props.eventName}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setEvent(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            const eventError: EventContent = {
              header: "Error",
              body: "Event could not be found",
            };
            setEvent(eventError);
          }
        );
    } else {
      const eventTemp: EventContent = {
        header: props.eventName,
        body: props.description,
      };
      setEvent(eventTemp);
    }
  }, [props]);
  if (props.eventType === "icon") {
    return (
      <div className="event event--icon">
        <div className="event__icon">
          <Icon name={props.iconName} color={props.iconColor} />
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
          <img src={props.previewImage} />
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
        title={props.eventName}
        subtitle={props.bc_subtitle}
        copy={props.bc_copy}
        buttonLabel={props.bc_buttonLabel}
        buttonType={props.bc_buttonType}
        buttonColor={props.bc_buttonColor}
        buttonUrl={props.bc_buttonUrl}
        imageURL={props.bc_imageURL}
        useButton={props.bc_useButton}
        centerText={props.bc_centerText}
        smallTitles={props.bc_smallTitles}
        titleColor={props.bc_titleColor}
      />
    );
  }
};

export default Event;
