import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import { openSidebar, closedSidebar } from "../../action/index";
import Sidebar from "./Sidebar";

import "./navBar.css";

class NavBar extends Component {
  state = {
    active: false
  };
  handleClick() {
    this.setState({ active: true });
    this.props.openSidebar();
  }
  handleClickClose() {
    this.setState({ active: false });
    this.props.closedSidebar();
  }
  render() {
    return (
      <div className="main-nav">
        <button
          type="button"
          className={this.props.sidebar}
          onClick={this.handleClick.bind(this)}
        >
          hello
        </button>
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
        </ul>
        {this.renderName()}
        {this.state.active && (
          <Sidebar handleClickClose={this.handleClickClose.bind(this)} />
        )}
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
      return <div className="wel-msg">Hello {this.props.auth.username}</div>;
    }
    return null;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, sidebar: state.sidebar };
}

export default withRouter(
  connect(
    mapStateToProps,
    { openSidebar, closedSidebar }
  )(NavBar)
);
