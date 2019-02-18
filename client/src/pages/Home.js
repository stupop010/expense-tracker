import React, { Component } from "react";
import { connect } from "react-redux";

import ExpenseForm from "../components/Form/ExpenseForm";
import { addExpense } from "../action";

class Home extends Component {
  onSubmit = e => {
    addExpense(e);
  };
  render() {
    return <ExpenseForm onSubmit={this.onSubmit} />;
  }
}

export default connect(
  null,
  { addExpense }
)(Home);
