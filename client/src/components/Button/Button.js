import React from "react";
import "./button.css";

const Button = props => {
  const { type, onClick, children, className } = props;
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
