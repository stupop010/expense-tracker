import React from "react";
import "./registerForm.css";

const RegisterForm = props => {
  return (
    <div className="login">
      <form onSubmit={props.handleSubmit} className="sign-form m-t">
        <h1>Register</h1>
        {props.error ? <h4 className="error-message">{props.error}</h4> : null}
        {props.message ? (
          <div className="success-message">{props.message}</div>
        ) : null}
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={props.handleChange}
            value={props.username}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={props.handleChange}
            value={props.email}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <div>
            <input
              type="password"
              name="password"
              onChange={props.handleChange}
              value={props.password}
            />
          </div>
        </div>
        <button type="submit" className="form-button">
          Sumbit
        </button>
        <button
          type="button"
          className="form-button"
          onClick={props.loginButton}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
