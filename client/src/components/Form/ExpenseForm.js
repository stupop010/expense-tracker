import React, { Component } from "react";
import PropTypes from "prop-types";

import Form from "./Form";
import "./form.css";

class ExpenseForm extends Component {
  state = { categries: "", price: "", description: "" };

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
    this.onClear();
  };

  render() {
    return (
      <Form
        submit={this.handleSubmit}
        change={this.handleChange}
        valueCategries={this.state.categries}
        valuePrice={this.state.price}
        valueDes={this.state.description}
        clear={this.onClear}
      />
    );
  }
}

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ExpenseForm;
