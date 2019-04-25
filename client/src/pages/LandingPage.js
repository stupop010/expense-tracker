import React from "react";

import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Expense Tracking App</h1>
      <div>
        <p>Please Sign in</p>
        <a href="/login" className="landing-button">
          Login
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
