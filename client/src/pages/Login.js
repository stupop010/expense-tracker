import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { userLogin } from "../action/userAction";
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
    this.props.userLogin(user);
  };
  handleRegister = () => {
    let path = `/register`;
    this.props.history.push(path);
  };
  render() {
    return (
      <LoginForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleRegister={this.handleRegister}
      />
    );
  }
}

Login.protoTypes = {
  userLogin: PropTypes.func.isRequired
};

export default connect(
  null,
  { userLogin }
)(Login);
