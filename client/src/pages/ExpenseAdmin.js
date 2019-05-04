import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOneExpense } from "../action/expenseAdmin";
import { getItem } from "../selections/ExpenseSelection";
import ExpenseAdminForm from "../components/ExpenseAdminForm/ExpenseAdminForm";

class ExpenseAdmin extends Component {
  componentDidMount() {
    this.props.fetchOneExpense(this.props.match.params.id);
  }
  render() {
    return <ExpenseAdminForm item={this.props.item} />;
  }
}

const mapStateToProps = state => {
  return { item: getItem(state) };
};

export default connect(
  mapStateToProps,
  { fetchOneExpense }
)(ExpenseAdmin);
