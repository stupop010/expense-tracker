import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <button type="submit" className="form-button">
          Sumbit
        </button>
        <button type="submit" className="form-button">
          Resigter
        </button>
        <br />
        <p className="break">OR</p>
        <a href="/auth/google" className="google-link">
          <FontAwesomeIcon icon={["fab", "google"]} size={"4x"} pull={"left"} />
          <span>Login With Google</span>
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
