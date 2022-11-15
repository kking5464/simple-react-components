import "./Alert.scss";
import React from "react";

export interface AlertProps {
    header: string;
}

const Alert = (props: AlertProps) => {
    return (
        <div className="alert"></div>

    );
};

export default Alert;