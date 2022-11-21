import React, { useEffect, useState } from "react";
import BrandIcon from "../BrandIcon/BrandIcon";
import BasicCard from "../BasicCard/BasicCard";
import "./Event.scss";

export interface EventProps {
  eventName?: string;
  useApi?: boolean | null;
  eventType?: string;

  //preview prop
  previewImage?: string;
  previewName?: string;
  previewDescription?: string;

  //Icon props
  iconName?: string;
  iconColor?: string;
  iconEventName?: string;
  iconEventDescription?: string;

  //BasicCard Props
  basicCardTitle?: string;
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
interface CardEventContent {
  header?: string;
  subtitle?: string;
  body?: string;
}

const Event = (props: EventProps) => {
  const [event, setEvent] = useState<EventContent>();
  const [cardEvent, setCardEvent] = useState<CardEventContent>();

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
      if (props.eventType === "icon") {
        const eventTemp: EventContent = {
          header: props.iconEventName,
          body: props.iconEventDescription,
        };
        setEvent(eventTemp);
      } else if (props.eventType === "preview") {
        const eventTemp: EventContent = {
          header: props.previewName,
          body: props.previewDescription,
        };
        setEvent(eventTemp);
      } else {
        const CardEventTemp: CardEventContent = {
          header: props.basicCardTitle,
          subtitle: props.basicCardSubtitle,
          body: props.basicCardCopy,
        };
        setCardEvent(CardEventTemp);
      }
    }
  }, [props]);
  if (props.eventType === "icon") {
    return (
      <div className="event event--icon">
        <div className="event__icon">
          <BrandIcon name={props.iconName} color={props.iconColor} />
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
        title={props.basicCardTitle}
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
