import React, { useEffect, useState } from "react";
import BrandIcon from "../BrandIcon/BrandIcon";
import BasicCard from "../BasicCard/BasicCard";
import Button from "../Button/Button";
import "./Event.scss";

export interface EventProps {
  eventType?: string;
  eventTitle?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  eventImage?: string;
  buttonUrlLink?: string;
}

function formatDate(dateStr: string) {
  var formattedDate = dateStr;
  const date = new Date(dateStr);
  if (!isNaN(date.getTime())) {
    const month = date.toLocaleString('default', { month: 'long' });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    formattedDate = month + ' ' + dayOfMonth + ', ' + year;
  }

  return formattedDate;
}

function formatAMPM(dateStr: string) {
  var formattedTime = dateStr;
  const startTime = new Date(dateStr);
  if (!isNaN(startTime.getTime())) {
    var hours: number = startTime.getHours();
    var minutes: number = startTime.getMinutes();
    var ampm: string = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var strMinutes: string = minutes < 10 ? '0' + minutes : minutes.toString();
    formattedTime = hours + ':' + strMinutes + ' ' + ampm;
  }

  return formattedTime;
}

const Event = (props: EventProps) => {
  if (props.eventType === "icon") {
    return (
      <div className="event event--icon mb-lg">
        <div className="event__icon">
          <BrandIcon name={"occasions_calendar"} color={"gray"} />
        </div>
        <div className="event__body">
          <h1 className="event__name" data-epi-edit="EventTitle">{props.eventTitle}</h1>
          {(props.startTime || props.endTime) ? (
            <div className="event__time-container">
              {props.startTime ? <h3 className="event__time" data-epi-edit="StartTime">{formatAMPM(props.startTime)}</h3> : ''}
              {props.endTime ? <h3 className="event__time" data-epi-edit="EndTime"> - {formatAMPM(props.endTime)}</h3> : ''}
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
          <img src={props.eventImage} />
        </div>
        <div className="event__body">
          <div className="event__icon-container">
            <BrandIcon name="occasions_calendar" color="gray" />
          </div>
          <h1 className="event__name" data-epi-edit="EventTitle">{props.eventTitle}</h1>
          {(props.startTime || props.endTime) ? (
            <div className="event__time-container">
              {props.startTime ? <h3 className="event__time" data-epi-edit="StartTime">{formatAMPM(props.startTime)}</h3> : ''}
              {props.endTime ? <h3 className="event__time" data-epi-edit="EndTime"> - {formatAMPM(props.endTime)}</h3> : ''}
            </div>
          )
            : ''}
          {props.buttonUrlLink ? <a className="event__details-link" href={props.buttonUrlLink}>View event details</a> : ''}
        </div>
      </div>
    );
  } else {
    return (
      <div className="event event--basic-card basic-card mb-lg">
        {props.eventImage ? <img data-epi-edit="Image" src={props.eventImage} /> : ''}
        <div className="basic-card__content">
          {(props.date || props.startTime || props.endTime) ? (
            <div className="event--basic-card__date-time-container">
              {props.date ? <h3 className="event--basic-card__date" data-epi-edit="Date">{formatDate(props.date)}</h3> : ''}
              {(props.startTime || props.endTime) ? (
                <div className="event--basic-card__time-container">
                  {props.startTime ? <h3 className="event--basic-card__start-time" data-epi-edit="StartTime">{formatAMPM(props.startTime)}</h3> : ''}
                  {props.endTime ? <h3 className="event--basic-card__end-time" data-epi-edit="EndTime"> - {formatAMPM(props.endTime)}</h3> : ''}
                </div>
              )
                : ''}
            </div>
          ) : ''}
          {props.eventTitle ? <h2 className="basic-card__content-title" data-epi-edit="EventTitle">{props.eventTitle}</h2> : ''}
          {props.buttonUrlLink ?
            <Button
              label="View event details"
              type='secondary'
              color='secondaryBlue'
              url={props.buttonUrlLink}
            />
            : ''}
        </div>
      </div>
    );
  }
};

export default Event;
