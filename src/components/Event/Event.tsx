import React, { useEffect, useState } from "react";
import BrandIcon from "../BrandIcon/BrandIcon";
import BasicCard from "../BasicCard/BasicCard";
import Button from "../Button/Button";
import "./Event.scss";

export interface EventProps {
  eventName?: string;
  useApi?: boolean | null;
  eventType?: string;

  eventTitle?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  eventImage?: string;
  buttonUrlLink?: string;
}

interface EventContent {
  eventTitle?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  eventImage?: string;
  buttonUrlLink?: string;
}

const Event = (props: EventProps) => {
  const [event, setEvent] = useState<EventContent>();

  useEffect(() => {
    if (props.useApi) {
      fetch(`https://epop03mstrt6av4inte.dxcloud.episerver.net/api/Event?Name=${props.eventName}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setEvent(result);
          },
          (error) => {
            const EventTemp: EventContent = {
              eventTitle: "Error",
              date: "No Date Available",
              startTime: "No Start Time Available",
              endTime: "No Start Time Available",
              eventImage: "",
              buttonUrlLink: "",
            };
            setEvent(EventTemp);
          }
        );
    } else {
      const EventTemp: EventContent = {
        eventTitle: props.eventTitle,
        date: props.date,
        startTime: props.startTime,
        endTime: props.endTime,
        eventImage: props.eventImage,
        buttonUrlLink: props.buttonUrlLink,
      };
      setEvent(EventTemp);
    }
  }, [props]);
  if (props.eventType === "icon") {
    return (
      <div className="event event--icon mb-lg">
        <div className="event__icon">
          <BrandIcon name={"occasions_calendar"} color={"gray"} />
        </div>
        <div className="event__body">
          <h1 className="event__name">{event?.eventTitle}</h1>
          {(event?.startTime || event?.endTime) ? (
            <div className="event__time-container">
              {event?.startTime ? <h3 className="event__time" data-epi-edit="StartTime">{event.startTime}</h3> : ''}
              {event?.endTime ? <h3 className="event__time" data-epi-edit="EndTime"> - {event.endTime}</h3> : ''}
            </div>
          )
            : ''}
        </div>
      </div>
    );
  } else if (props.eventType === "preview") {
    return (
      <div className="event event--preview mb-lg">
        <div className="event__image">
          <img src={event?.eventImage} />
        </div>
        <div className="event__body">
          <div className="event__icon-container">
            <BrandIcon name="occasions_calendar" color="gray" /> 
          </div>
          <h1 className="event__name">{event?.eventTitle}</h1>
          {(event?.startTime || event?.endTime) ? (
            <div className="event__time-container">
              {event?.startTime ? <h3 className="event__time" data-epi-edit="StartTime">{event.startTime}</h3> : ''}
              {event?.endTime ? <h3 className="event__time" data-epi-edit="EndTime"> - {event.endTime}</h3> : ''}
            </div>
          )
            : ''}
          {event?.buttonUrlLink ? <a className="event__details-link" href={event.buttonUrlLink}>View event details</a> : ''}
        </div>
      </div>
    );
  } else {
    return (
      <div className="event event--basic-card basic-card mb-lg">
        {event?.eventImage ? <img data-epi-edit="Image" src={event.eventImage} /> : ''}
        <div className="basic-card__content">
          {(event?.date || event?.startTime || event?.endTime) ? (
            <div className="event--basic-card__date-time-container">
              {event?.date ? <h3 className="event--basic-card__date" data-epi-edit="Date">{event.date}</h3> : ''}
              {(event?.startTime || event?.endTime) ? (
                <div className="event--basic-card__time-container">
                  {event?.startTime ? <h3 className="event--basic-card__start-time" data-epi-edit="StartTime">{event.startTime}</h3> : ''}
                  {event?.endTime ? <h3 className="event--basic-card__end-time" data-epi-edit="EndTime"> - {event.endTime}</h3> : ''}
                </div>
              )
                : ''}
            </div>
          ) : ''}
          {event?.eventTitle ? <h2 className="basic-card__content-title" data-epi-edit="Title">{event.eventTitle}</h2> : ''}
          {event?.buttonUrlLink ?
            <Button
              label="View event details"
              type='secondary'
              color='blue'
              url={event?.buttonUrlLink}
            />
            : ''}
        </div>
      </div>
    );
  }
};

export default Event;
