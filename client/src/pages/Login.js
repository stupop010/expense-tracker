import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { login } from "../action/userAction";
import LoginForm from "../components/LoginForm/LoginForm";

class Login extends Component {
  state = { email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    this.props.login(user);
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

Login.protoTypes = {
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(Login);
