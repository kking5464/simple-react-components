import "./Alert.scss";
import React, { useState } from "react";
import SystemIcon from "../SystemIcon";


export interface AlertProps {
  header: string;
  alertIconName: string;
  alertIconColor: string;
  closeIconName: string;
  closeIconColor: string;
}

const Alert = (props: AlertProps) => {
  const [alertButton, closeAlertButton] = useState(true);
  return (
    <div className="alert">
      <div className="alert-icon">
        <SystemIcon name={props.alertIconName} color={props.alertIconColor} />
      </div>
      <div className="alert-header">
      <p>{props.header}</p>
      </div>
      <div className="alert-close" onClick={() => closeAlertButton(!alertButton)}>
        <SystemIcon name={props.closeIconName} color={props.closeIconColor} />
      </div>
    </div>
  );
};

export default Alert;
