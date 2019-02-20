import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import timeOfDay from "../../helpers/timeOfDay";
import "./navBar.css";

class NavBar extends Component {
  renderAuth() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return [
          <li key="2" className="nav-item">
            <a href="/api/logout">LogOut</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <div className="main-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">DashBoard</NavLink>
          </li>
          {this.renderAuth()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { auth: state.auth };
}

export default connect(mapStateToProps)(NavBar);
