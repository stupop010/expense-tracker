import React, { Component } from "react";
import LoginForm from "../components/LoginForm/LoginForm";

class Login extends Component {
  state = { email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <LoginForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Login;
