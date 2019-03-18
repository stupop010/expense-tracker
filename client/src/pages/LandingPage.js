import React from "react";
import { NavLink } from "react-router-dom";

import "../css/app.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Expense Tracking App</h1>
      <div>
        <p>Please Sign in</p>
        <NavLink exact to="/login" className="landing-button">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
