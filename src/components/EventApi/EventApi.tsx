import React, { useEffect, useState } from "react";
import Event from "../Event/Event";
import "../Event/Event.scss";

export interface EventApiProps {
  eventName?: string;
  eventType?: string;
}

interface EventApiContent {
  eventTitle?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  eventImage?: string;
  buttonUrlLink?: string;
}

const EventApi = (props: EventApiProps) => {
  const [event, setEvent] = useState<EventApiContent>();

  useEffect(() => {
    fetch(`https://epop03mstrt6av4inte.dxcloud.episerver.net/api/Event?Name=${props.eventName}`)
      .then((res) => res.json())
      .then(
        (result) => {
          if (!result.eventTitle && !result.date && !result.startTime && !result.endTime) {
            const EventTemp: EventApiContent = {
              eventTitle: "No event can be found with the name provided",
              date: "No Date Available",
              startTime: "Start Time ",
              endTime: "End Time",
              eventImage: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
              buttonUrlLink: "",
            };
            setEvent(EventTemp);
          } else {
            if (result.eventImage) {
              const eventImageStr = `https://epop03mstrt6av4inte.dxcloud.episerver.net${result.eventImage}`;
              result.eventImage = eventImageStr;
            }
  
            if (result.buttonUrlLink) {
              const buttonUrlLinkStr = `https://epop03mstrt6av4inte.dxcloud.episerver.net${result.buttonUrlLink}`;
              result.buttonUrlLink = buttonUrlLinkStr;
            }

            setEvent(result);
          }
        },
        (error) => {
          const EventTemp: EventApiContent = {
            eventTitle: "Error",
            date: "No Date Available",
            startTime: "No Start Time Available",
            endTime: "No End Time Available",
            eventImage: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
            buttonUrlLink: "",
          };
          setEvent(EventTemp);
        }
      );

  }, [props]);
  if (event) {
    return (
      <Event
        eventType={props.eventType}
        eventTitle={event.eventTitle}
        date={event.date}
        startTime={event.startTime}
        endTime={event.endTime}
        eventImage={event.eventImage}
        buttonUrlLink={event.buttonUrlLink}
      />
    );
  }

  return <></>;
};

export default EventApi;
