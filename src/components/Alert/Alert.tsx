import "./Alert.scss";
import React from "react";
import SystemIcon from "../SystemIcon";

export interface AlertProps {
    header: string;
    iconName: string;
    iconColor: string;
}

const Alert = (props: AlertProps) => {
    return (
        <div className="alert">
                <div className="alert-icon">
                    <SystemIcon
                    name={props.iconName}
                    color={props.iconColor}/>
                </div>
                <p className="alert-header">
                    {props.header}
                </p>
                <div className="alert-close">

                </div>
        </div>

    );
};

export default Alert;