import React from "react";

import "../css/app.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Expense Tracking App</h1>
      <div>
        <p>Please Sign in</p>
        <button className="landing-button">Login</button>
      </div>
    </div>
  );
};

export default LandingPage;
