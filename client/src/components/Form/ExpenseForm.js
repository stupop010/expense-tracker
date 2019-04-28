import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { errorMessage } from "../../selections/ErrorSelection";
import Form from "./Form";
import "./form.css";

class ExpenseForm extends Component {
  state = { categries: "", price: "", description: "", msg: null };

  componentDidUpdate(prevProps) {
    const { error } = this.props;

    if (error !== prevProps.error) {
      if (error.id === "POST_EXPENSES_FAILED") {
        this.setState({ msg: error.msg.msg });
        setInterval(() => {
          this.setState({ msg: null });
        }, 5000);
      } else {
        this.setState({ msg: null });
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
        msg={this.state.msg}
      />
    );
  }
}

function mapStateToProps(state) {
  return { error: errorMessage(state) };
}

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(ExpenseForm);
