import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { errorMessage } from "../../selections/ErrorSelection";
import { expenseSuccessMessage } from "../../selections/ExpenseSelection";
import Form from "./Form";
import "./form.css";

class ExpenseForm extends Component {
  state = { categries: "", price: "", description: "", errorMessage: null };

  componentDidUpdate(prevProps) {
    const { error, successMessage } = this.props;

    if (error !== prevProps.error) {
      if (error.id === "POST_EXPENSES_FAILED") {
        this.setState({ errorMessage: error.msg.msg });
      } else {
        this.setState({ errorMessage: null });
      }
    }
    if (successMessage !== prevProps.successMessage) {
      if (successMessage) {
        this.onClear();
      }
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClear = e => {
    this.setState({ categries: "", price: "", description: "" });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { categries, price, description } = this.state;

    const value = {
      categries,
      price,
      description
    };
    this.props.onSubmit(value);
    //this.onClear();
  };

  render() {
    return (
      <Form
        submit={this.handleSubmit}
        change={this.handleChange}
        clear={this.onClear}
        {...this.state}
        successMessage={this.props.successMessage}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    error: errorMessage(state),
    successMessage: expenseSuccessMessage(state)
  };
};

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(ExpenseForm);
