import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { isAuthenticated } from "../redux/selections/UserSelection";
import { errorMessage } from "../redux/selections/ErrorSelection";
import { userLogin } from "../redux/action/userAction";
import { clearErrors } from "../redux/action/errorAction";
import LoginForm from "../components/LoginForm/LoginForm";

class Login extends Component {
  state = { email: "", password: "", errMessage: null };

  componentDidUpdate(prevProps) {
    const { isAuthenticated, error } = this.props;
    if (error !== prevProps.error) {
      if ((error.id = "LOGIN_USER_FAILED")) {
        this.setState({ errMessage: error.msg.msg });
      } else {
        this.setState({ errMessage: null });
      }
    }
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
    this.props.userLogin(user);
  };

  handleRegister = () => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <LoginForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleRegister={this.handleRegister}
        error={this.state.errMessage}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: isAuthenticated(state),
    error: errorMessage(state)
  };
};

Login.protoTypes = {
  userLogin: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { userLogin, clearErrors }
)(Login);
