import React from "react";
import "../styles/error.css";

const Error = (props) => {
  return <div className="error-alert">{props.error}</div>;
};

export default Error;
