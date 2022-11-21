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

  //Icon props
  iconName?: string;
  iconColor?: string;

  //BasicCard Props
  basicCardDescription?: string;
  basicCardButtonLabel?: string;
  basicCardButtonType?: string;
  basicCardButtonColor?: string;
  basicCardButtonUrl?: string;
  basicCardUseButton?: boolean;
  basicCardTitleColor?: string;
}

interface EventContent {
  header?: string;
  body?: string;

  image?: string;

  iconName?: string;
  iconColor?: string;

  cardSubtitle?: string;
  cardDescription?: string;
  cardButtonLabel?: string;
  cardButtonType?: string;
  cardButtonColor?: string;
  cardButtonUrl?: string;
  cardUseButton?: boolean;
  cardCenterText?: false;
  cardSmallTitles?: false;
  cardTitleColor?: string;
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
            if (props.eventType === "icon") {
              const eventError: EventContent = {
                header: "Error",
                body: "Event could not be found",
                iconName: "calendar",
                iconColor: "red",
              };
              setEvent(eventError);
            } else if (props.eventType === "preview") {
              const eventError: EventContent = {
                header: "Error",
                body: "Event could not be found",
                image: "error",
              };
              setEvent(eventError);
            } else {
              const CardEventTemp: EventContent = {
                header: "Error",
                cardSubtitle: "Error",
                cardDescription: "Error",
                cardButtonLabel: "Error",
                cardButtonType: "primary",
                cardButtonColor: "red",
                cardButtonUrl: "error",
                image: "error",
                cardUseButton: false,
                cardCenterText: false,
                cardSmallTitles: false,
                cardTitleColor: "red",
              };
              setEvent(CardEventTemp);
            }
          }
        );
    } else {
      if (props.eventType === "icon") {
        const eventTemp: EventContent = {
          header: props.title,
          body: props.date,
          iconName: props.iconName,
          iconColor: props.iconColor,
        };
        setEvent(eventTemp);
      } else if (props.eventType === "preview") {
        const eventTemp: EventContent = {
          header: props.title,
          body: props.date,
          image: props.image,
        };
        setEvent(eventTemp);
      } else {
        const CardEventTemp: EventContent = {
          header: props.title,
          body: props.date,
          cardDescription: props.basicCardDescription,
          cardButtonLabel: props.basicCardButtonLabel,
          cardButtonType: props.basicCardButtonType,
          cardButtonColor: props.basicCardButtonColor,
          cardButtonUrl: props.basicCardButtonUrl,
          image: props.image,
          cardUseButton: props.basicCardUseButton,
          cardCenterText: false,
          cardSmallTitles: false,
          cardTitleColor: props.basicCardTitleColor,
        };
        setEvent(CardEventTemp);
      }
    }
  }, [props]);
  if (props.eventType === "icon") {
    return (
      <div className="event event--icon">
        <div className="event__icon">
          <BrandIcon name={event?.iconName} color={event?.iconColor} />
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
        buttonLabel={event?.cardButtonLabel}
        buttonType={event?.cardButtonType}
        buttonColor={event?.cardButtonColor}
        buttonUrl={event?.cardButtonUrl}
        imageURL={event?.image}
        useButton={event?.cardUseButton}
        centerText={false}
        smallTitles={false}
        titleColor={event?.cardTitleColor}
      />
    );
  }
};

export default Event;
