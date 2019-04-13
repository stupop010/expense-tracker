import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import LogOut from "../LogOut";
import "./sidebar.css";

const Sidebar = props => {
  const { className, handleClickClose, auth } = props;
  return (
    <div className={className}>
      <button
        type="button"
        className="close-btn close"
        onClick={handleClickClose}
      />
      <ul className="sidebar-nav">
        <li>
          <NavLink exact to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/log">
            Log
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about">
            About
          </NavLink>
        </li>
        {renderAuth(auth, props.logOut)}
      </ul>
    </div>
  );
};
const renderAuth = (auth, logOut) => {
  switch (auth) {
    case null:
      return;
    case false:
      return (
        <li className="nav-item">
          <a href="/auth/google">Login</a>
        </li>
      );
    default:
      return (
        <li className="nav-item">
          <LogOut />
        </li>
      );
  }
};

Sidebar.propTypes = {
  handleClickClose: PropTypes.func.isRequired,
  auth: PropTypes.any,
  className: PropTypes.string.isRequired
};

export default Sidebar;
