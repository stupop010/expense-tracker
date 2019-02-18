import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const navBar = props => (
  <div className="main-nav">
    <ul>
      <li>
        <NavLink to={"/home"}>home</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>home</NavLink>
      </li>
    </ul>
  </div>
);

export default navBar;
