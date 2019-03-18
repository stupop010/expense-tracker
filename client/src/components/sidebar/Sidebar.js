import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.css";

class Sidebar extends Component {
  render() {
    const { className, handleClickClose, auth } = this.props;
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
          {this.renderAuth(auth)}
        </ul>
      </div>
    );
  }
  renderAuth(auth) {
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
  }
}

export default Sidebar;
