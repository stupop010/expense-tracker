import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { getUser } from "../../selections/UserSelection";
import Sidebar from "../Sidebar/Sidebar";

import "./navBar.css";

class NavBar extends Component {
  state = {
    className: "sidebar"
  };

  handleClick = event => {
    this.setState({
      className: "sidebar open-side"
    });
  };

  handleClickClose = event => {
    this.setState({
      className: "sidebar close-side"
    });
  };

  render() {
    const { className, auth } = this.state;
    return (
      <div className="main-nav">
        <button
          type="button"
          className="main-btn toggle"
          onClick={this.handleClick}
        />
        <ul className="nav-ul">
          <li>
            <NavLink exact to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/log">
              Log
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/dashboard">
              DashBoard
            </NavLink>
          </li>
          {this.renderAuth(auth)}
        </ul>
        {auth ? <div className="wel-msg">Hello {auth.username}</div> : null}

        <Sidebar
          handleClickClose={this.handleClickClose}
          className={className}
          auth={auth}
        />
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
            <a href="/login">Login</a>
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

NavBar.propTypes = {
  auth: PropTypes.object
};

function mapStateToProps(state) {
  return { auth: getUser(state) };
}

export default withRouter(connect(mapStateToProps)(NavBar));
