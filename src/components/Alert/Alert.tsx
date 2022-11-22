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
  const [alertClosed, setAlertClosed] = useState<boolean | null>(false);
  return (
    <div className={`alert ${alertClosed ? "alert--closed" : ""}`}>
      <div className="alert-icon">
        <SystemIcon name={props.alertIconName} color={props.alertIconColor} />
      </div>
      <p className="alert-header">{props.header}</p>
      <button className="alert-close" onClick={() => setAlertClosed(true)}>
        <SystemIcon name={props.closeIconName} color={props.closeIconColor} />
      </button>
    </div>
  );
};

export default Alert;
