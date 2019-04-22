import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ExpenseForm from "../components/Form/ExpenseForm";
import RecentLog from "../components/RecentLog/RecentLog";
import { fetchUser } from "../action/userAction";
import { addExpense, fetchExpenses } from "../action/expenseAction";
import { getExpense, getLoading } from "../selections/ExpenseSelection";
import "../css/app.css";
import { getUserId } from "../selections/UserSelection";

class Home extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchExpenses(this.props.userId);
  }
  onSubmit = value => {
    this.props.addExpense(value, this.props.userId);
  };
  render() {
    const { expense, loading } = this.props;
    return (
      <div className="home-container">
        <ExpenseForm onSubmit={this.onSubmit} />
        <RecentLog expense={expense} loading={loading} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    expense: getExpense(state),
    loading: getLoading(state),
    userId: getUserId(state)
  };
}

Home.protoTypes = {
  addExpense: PropTypes.func.isRequired,
  fetchExpenses: PropTypes.func.isRequired,
  expense: PropTypes.object.isRequired,
  auth: PropTypes.any.isRequired
};

export default connect(
  mapStateToProps,
  { addExpense, fetchExpenses, fetchUser }
)(Home);
