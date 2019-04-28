import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { isAuthenticated, successMessage } from "../selections/UserSelection";
import { errorMessage } from "../selections/ErrorSelection";
import { clearErrors } from "../action/errorAction";
import { registerUser } from "../action/userAction";
import RegisterForm from "../components/RegisterForm/RegisterForm";

class Register extends Component {
  state = { username: "", email: "", password: "", errMessage: null };

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        this.setState({ errMessage: error.msg.msg });
        setInterval(() => {
          this.setState({ errMessage: null });
        }, 5000);
      } else {
        this.setState({ errMessage: null });
      }
    }
    if (message !== prevProps.message) {
      if (message) {
        this.setState({
          username: "",
          email: "",
          password: ""
        });
      }
    }
  }
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

  loginButton = e => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <RegisterForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.errMessage}
        message={this.props.message}
        loginButton={this.loginButton}
        {...this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state),
    error: errorMessage(state),
    message: successMessage(state)
  };
}

Register.protoTypes = {
  error: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  registerUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { registerUser, clearErrors }
)(Register);
