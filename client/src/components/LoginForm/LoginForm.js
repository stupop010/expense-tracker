import React from "react";

import "./login.css";

const LoginForm = props => {
  return (
    <div className="login">
      <form onSubmit={props.handleSubmit} className="sign-form">
        <h1>Sign In</h1>
        <div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={props.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <div>
            <input
              type="password"
              name="password"
              onChange={props.handleChange}
            />
          </div>
        </div>
        <button type="submit" className="form-button log">
          Sumbit
        </button>
        <button type="submit" className="form-button log">
          Resigter
        </button>
        <br />
        <a href="/auth/google" className="google-link">
          Login in with google
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
