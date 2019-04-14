import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { isAuthenticated } from "../selections/UserSelection";
import { errorMessage } from "../selections/ErrorSelection";
import { userLogin } from "../action/userAction";
import { clearErrors } from "../action/errorAction";
import LoginForm from "../components/LoginForm/LoginForm";

class Login extends Component {
  state = { email: "", password: "" };
  componentDidUpdate(prevProps) {
    const { isAuthenticated, error } = this.props;
    if (isAuthenticated !== prevProps.isAuthenticated) {
      if (isAuthenticated) {
        this.props.clearErrors();
        this.props.history.push("/");
      }
    }
  }
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
    console.log("yes i have clicked!!!");
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

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state),
    error: errorMessage(state)
  };
}
Login.protoTypes = {
  userLogin: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { userLogin, clearErrors }
)(Login);
