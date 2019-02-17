import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/navBar.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={"/home"}>home</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>home</Link>
          </li>
          <li>
            <Link to={"/login"}>home</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
