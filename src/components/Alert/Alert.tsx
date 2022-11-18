import "./Alert.scss";
import React from "react";

export interface AlertProps {
    header: string;
}

const Alert = (props: AlertProps) => {
    return (
        <div className="alert">
            <div className="alert-item">
                <div className="alert-header">
                {props.header}
                </div>
            </div>
        </div>

    );
};

export default Alert;