import React, { useEffect, useState } from "react";
import "./Event.scss";

export interface EventProps {
  image?: string;
  eventName: string;
  time?: string;
  date?: string;
  icon?: string;
  description: string;
  useApi?: boolean | null;
  isEventCard?: boolean | null;
  isEventPreview?: boolean | null;
  isEventIcon?: boolean | null;
}

interface EventContent {
  header: string;
  body: string;
}

const Event = (props: EventProps) => {
  //   const [event, setEvent] = useState<EventContent>();

  //   useEffect(() => {
  //     if (props.useApi) {
  //       fetch(
  //         `https://epop03mstrt6av4inte.dxcloud.episerver.net/api/Banner?Name=${props.bannerName}`
  //       )
  //         .then((res) => res.json())
  //         .then(
  //           (result) => {
  //             setEvent(result);
  //           },
  //           // Note: it's important to handle errors here
  //           // instead of a catch() block so that we don't swallow
  //           // exceptions from actual bugs in components.
  //           (error) => {
  //             const eventError: EventContent = {
  //               header: "Error",
  //               body: "Event could not be found",
  //             };
  //             setEvent(eventError);
  //           }
  //         );
  //     } else {
  //       const eventTemp: EventContent = {
  //         header: props.eventName,
  //         body: props.description,
  //       };
  //       setEvent(eventTemp);
  //     }
  //   }, [props]);

  return (
    <div className="event">
      <div className="event__icon">
        <img src={props.icon} />
      </div>
      <div className="event__body">
        <h1 className="event__name">{props.eventName}</h1>
        <h2 className="event__description">{props.description}</h2>
      </div>
    </div>
  );
};

export default Event;
