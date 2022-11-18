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
  basicCardSubtitle?: string;
  basicCardCopy?: string;
  basicCardButtonLabel?: string;
  basicCardButtonType?: string;
  basicCardButtonColor?: string;
  basicCardButtonUrl?: string;
  basicCardImageURL?: string;
  basicCardUseButton?: boolean;
  basicCardCenterText?: boolean;
  basicCardSmallTitles?: boolean;
  basicCardTitleColor?: string;
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
        subtitle={props.basicCardSubtitle}
        copy={props.basicCardCopy}
        buttonLabel={props.basicCardButtonLabel}
        buttonType={props.basicCardButtonType}
        buttonColor={props.basicCardButtonColor}
        buttonUrl={props.basicCardButtonUrl}
        imageURL={props.basicCardImageURL}
        useButton={props.basicCardUseButton}
        centerText={props.basicCardCenterText}
        smallTitles={props.basicCardSmallTitles}
        titleColor={props.basicCardTitleColor}
      />
    );
  }
};

export default Event;
