import React from "react";
import "./registerForm.css";

const RegisterForm = props => {
  return (
    <div className="login">
      <form onSubmit={props.handleSubmit} className="sign-form m-t">
        <h1>Register</h1>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="email" onChange={props.handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" onChange={props.handleChange} />
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
      </form>
    </div>
  );
};

export default RegisterForm;
