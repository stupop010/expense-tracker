import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOneExpense } from "../action/expenseAdmin";

class ExpenseAdmin extends Component {
  componentDidMount() {
    this.props.fetchOneExpense(this.props.match.params.id);
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    return <div> admin</div>;
  }
}

export default connect(
  null,
  { fetchOneExpense }
)(ExpenseAdmin);
