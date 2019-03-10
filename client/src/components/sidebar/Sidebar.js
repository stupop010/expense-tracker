import React from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.css";

const Sidebar = props => {
  return (
    <div className={props.classname}>
      <button
        type="button"
        class="close-btn close"
        onClick={props.handleClickClose}
      />
      <ul className="sidebar-nav">
        <li>
          <NavLink exact to="/">
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
          <NavLink exact to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
