import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { isAuthenticated } from "../selections/UserSelection";
import { errorMessage } from "../selections/ErrorSelection";
import { registerUser } from "../action/userAction";
import RegisterForm from "../components/RegisterForm/RegisterForm";

class Register extends Component {
  state = { username: "", email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const registerBody = {
      username,
      email,
      password
    };
    this.props.registerUser(registerBody);
  };

  render() {
    console.log(this.props);
    return (
      <RegisterForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state),
    error: errorMessage(state)
  };
}

Register.protoTypes = {
  error: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  registerUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
