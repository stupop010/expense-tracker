import React, { Component } from "react";
import { connect } from "react-redux";

import ExpenseForm from "../components/Form/ExpenseForm";
import RecentLog from "../components/recentLog/RecentLog";
import { addExpense, fetchExpenses } from "../action";
import "../css/app.css";

class Home extends Component {
  componentDidMount() {
    this.props.fetchExpenses();
  }
  onSubmit = value => {
    this.props.addExpense(value);
  };
  render() {
    return (
      <div className="main-app">
        <ExpenseForm onSubmit={this.onSubmit} />
        <RecentLog item={this.props.expense} />
      </div>
    );
  }
}

function mapStateToProps({ expense }) {
  return { expense };
}

export default connect(
  mapStateToProps,
  { addExpense, fetchExpenses }
)(Home);
