import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getUser } from "../../selections/UserSelection";
import Sidebar from "../Sidebar/Sidebar";
import LogOut from "../LogOut";
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
    const { user } = this.props.auth;
    const { className } = this.state;
    return (
      <div className="main-nav">
        <div className="navIcon" onClick={this.handleClick}>
          <div className="naviconUpper" />
          <div className="innerNavicon" />
          <div className="naviconLower" />
        </div>
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
          <li>
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
          {this.renderAuth(user)}
        </ul>
        {user ? <div className="wel-msg">Hello {user.username}</div> : <div />}

        <Sidebar
          handleClickClose={this.handleClickClose}
          className={className}
          auth={user}
        />
      </div>
    );
  }
  renderAuth(user) {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        );
      default:
        return (
          <li className="nav-item">
            <LogOut />
          </li>
        );
    }
  }
}

NavBar.propTypes = {
  auth: PropTypes.any
};

function mapStateToProps(state) {
  return { auth: getUser(state) };
}

export default withRouter(connect(mapStateToProps)(NavBar));
