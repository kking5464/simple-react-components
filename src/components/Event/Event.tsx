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
  previewTitle?: string;
  previewDescription?: string;

  //Icon props
  iconName?: string;
  iconColor?: string;
  iconEventTitle?: string;
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

interface PreviewContent {
  header?: string;
  body?: string;
  image?: string;
}

interface IconContent {
  header?: string;
  body?: string;
  iconName?: string;
  iconColor?: string;
}
interface CardEventContent {
  cardTitle?: string;
  cardSubtitle?: string;
  cardCopy?: string;
  cardButtonLabel?: string;
  cardButtonType?: string;
  cardButtonColor?: string;
  cardButtonUrl?: string;
  cardImageURL?: string;
  cardUseButton?: boolean;
  cardCenterText?: boolean;
  cardSmallTitles?: boolean;
  cardTitleColor?: string;
}

const Event = (props: EventProps) => {
  const [previewEvent, setPreviewEvent] = useState<PreviewContent>();
  const [iconEvent, setIconEvent] = useState<IconContent>();
  const [cardEvent, setCardEvent] = useState<CardEventContent>();

  useEffect(() => {
    if (props.useApi) {
      fetch(
        `https://epop03mstrt6av4inte.dxcloud.episerver.net/api/Event?Name=${props.eventName}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            if (props.eventType === "icon") {
              setIconEvent(result);
            } else if (props.eventType === "preview") {
              setPreviewEvent(result);
            } else {
              setCardEvent(result);
            }
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            if (props.eventType === "icon") {
              const eventError: IconContent = {
                header: "Error",
                body: "Event could not be found",
                iconName: "calendar",
                iconColor: "red",
              };
              setIconEvent(eventError);
            } else if (props.eventType === "preview") {
              const eventError: PreviewContent = {
                header: "Error",
                body: "Event could not be found",
                image: "error",
              };
              setIconEvent(eventError);
            } else {
              const CardEventTemp: CardEventContent = {
                cardTitle: "Error",
                cardSubtitle: "Error",
                cardCopy: "Error",
                cardButtonLabel: "Error",
                cardButtonType: "primary",
                cardButtonColor: "red",
                cardButtonUrl: "error",
                cardImageURL: "error",
                cardUseButton: false,
                cardCenterText: false,
                cardSmallTitles: false,
                cardTitleColor: "red",
              };
              setCardEvent(CardEventTemp);
            }
          }
        );
    } else {
      if (props.eventType === "icon") {
        const eventTemp: IconContent = {
          header: props.iconEventTitle,
          body: props.iconEventDescription,
          iconName : props.iconName,
          iconColor : props.iconColor
        };
        setIconEvent(eventTemp);
      } else if (props.eventType === "preview") {
        const eventTemp: PreviewContent = {
          header: props.previewTitle,
          body: props.previewDescription,
          image: props.previewImage
        };
        setPreviewEvent(eventTemp);
      } else {
        const CardEventTemp: CardEventContent = {
          cardTitle: props.basicCardSubtitle,
          cardSubtitle: props.basicCardSubtitle,
          cardCopy: props.basicCardCopy,
          cardButtonLabel: props.basicCardButtonLabel,
          cardButtonType: props.basicCardButtonType,
          cardButtonColor: props.basicCardButtonColor,
          cardButtonUrl: props.basicCardButtonUrl,
          cardImageURL: props.basicCardImageURL,
          cardUseButton: props.basicCardUseButton,
          cardCenterText: props.basicCardCenterText,
          cardSmallTitles: props.basicCardSmallTitles,
          cardTitleColor: props.basicCardTitleColor,
        };
        setCardEvent(CardEventTemp);
      }
    }
  }, [props]);
  if (props.eventType === "icon") {
    return (
      <div className="event event--icon">
        <div className="event__icon">
          <BrandIcon name={iconEvent?.iconName} color={iconEvent?.iconColor} />
        </div>
        <div className="event__body">
          <h1 className="event__name">{iconEvent?.header}</h1>
          <h2 className="event__description">{iconEvent?.body}</h2>
        </div>
      </div>
    );
  } else if (props.eventType === "preview") {
    return (
      <div className="event event--preview">
        <div className="event__image">
          <img src={previewEvent?.image} />
        </div>
        <div className="event__body">
          <h1 className="event__name">{previewEvent?.header}</h1>
          <h2 className="event__description">{previewEvent?.body}</h2>
        </div>
      </div>
    );
  } else {
    return (
      <BasicCard
        title={cardEvent?.cardTitle}
        subtitle={cardEvent?.cardSubtitle}
        copy={cardEvent?.cardCopy}
        buttonLabel={cardEvent?.cardButtonLabel}
        buttonType={cardEvent?.cardButtonType}
        buttonColor={cardEvent?.cardButtonColor}
        buttonUrl={cardEvent?.cardButtonUrl}
        imageURL={cardEvent?.cardImageURL}
        useButton={cardEvent?.cardUseButton}
        centerText={cardEvent?.cardCenterText}
        smallTitles={cardEvent?.cardSmallTitles}
        titleColor={cardEvent?.cardTitleColor}
      />
    );
  }
};

export default Event;
