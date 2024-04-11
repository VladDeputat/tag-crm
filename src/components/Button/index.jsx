import React from "react";
import s from "./index.module.scss";

const Btn = React.memo(
  ({ children, type, onClick, isPrimary }) => {
    return (
      <button
        className={isPrimary ? s.primary : s.secondary}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.isPrimary === nextProps.isPrimary;
  },
);

export default Btn;
