import "./Alert.scss";
import React, { useState } from "react";
import SystemIcon from "../SystemIcon";

export interface AlertProps {
  header: string;
  alertIconName: string;
}

const Alert = (props: AlertProps) => {
  const [alertClosed, setAlertClosed] = useState<boolean | null>(false);
  return (
    <div className={`alert ${alertClosed ? "alert--closed" : ""}`}>
      <div className="alert-container">
        <div className="alert-icon">
          <SystemIcon name={props.alertIconName} color="primaryWhite" />
        </div>
        <p className="alert-header">{props.header}</p>
      </div>
      <button className="alert-close" onClick={() => setAlertClosed(true)}>
        <SystemIcon name="close" color="primaryWhite" />
      </button>
    </div>
  );
};

export default Alert;