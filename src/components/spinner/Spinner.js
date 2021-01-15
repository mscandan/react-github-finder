import React, { Fragment } from "react";
import spinner from "./spinner.gif";
import "../../styles/Spinner.css";

const Spinner = () => {
  return (
    <Fragment>
      <img className="spinner" src={spinner} alt="loading" />
    </Fragment>
  );
};

export default Spinner;
