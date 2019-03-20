import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./sidebar.css";

const Sidebar = props => {
  const { className, handleClickClose, auth } = props;
  console.log(props);
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
          <NavLink exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/log">
            Log
          </NavLink>
        </li>
        {renderAuth(auth)}
      </ul>
    </div>
  );
};
const renderAuth = auth => {
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
          <a href="/api/logout">LogOut</a>
        </li>
      );
  }
};

Sidebar.propTypes = {
  handleClickClose: PropTypes.func.isRequired,
  auth: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired
};

export default Sidebar;
