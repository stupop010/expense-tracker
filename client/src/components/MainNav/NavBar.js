import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import timeOfDay from "../../helpers/timeOfDay";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="main-nav">
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/dashboard">
              DashBoard
            </NavLink>
          </li>
          {this.renderAuth()}
          {this.renderName()}
        </ul>
      </div>
    );
  }
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
  renderName() {
    if (this.props.auth) {
      return <div>hello</div>;
    }
    return null;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(NavBar));
