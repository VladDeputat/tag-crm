import React from "react";
import s from "./index.module.scss";

const ErrorMessage = ({ message }) => {
  return <p className={s.message}>{message}</p>;
};

export default ErrorMessage;
