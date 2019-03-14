import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Sidebar from "../Sidebar/Sidebar";

import "./navBar.css";

class NavBar extends Component {
  state = {
    active: false,
    className: "sidebar"
  };

  handleClick = event => {
    this.setState({
      active: !this.state.active,
      className: "sidebar open-side"
    });
  };

  handleClickClose = event => {
    this.setState({
      active: !this.state.active,
      className: "sidebar close-side"
    });
  };

  render() {
    const { className, active } = this.state;
    return (
      <div className="main-nav">
        <button
          type="button"
          className="main-btn toggle"
          onClick={this.handleClick}
        />
        <ul className="nav-ul">
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
        </ul>
        {this.props.auth ? (
          <div className="wel-msg">Hello {this.props.auth.username}</div>
        ) : null}

        <Sidebar
          handleClickClose={this.handleClickClose}
          className={className}
          active={active}
        />
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
}

NavBar.propTypes = {
  auth: PropTypes.object
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(NavBar));
