import React from "react";
import { NavLink } from "react-router-dom";

const LogReturn = ({ item, className, children }) => {
  return (
    <NavLink exact to={`/expense/${item._id}`} className={className}>
      {children}
    </NavLink>
  );
};

export default LogReturn;
