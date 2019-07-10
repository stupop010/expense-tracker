import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import ExpenseForm from "../components/Form/ExpenseForm";
import RecentLog from "../components/RecentLog/RecentLog";
import MonthlyOutgoing from "../components/MonthlyOutgoing/MonthlyOutgoing";
import { fetchUser } from "../action/userAction";
import { addExpense, fetchExpenses } from "../action/expenseAction";
import { getExpense, getLoading } from "../selections/ExpenseSelection";
import "../css/app.css";
import { getUserId } from "../selections/UserSelection";

const Home = ({ addExpense, expense, loading }) => {
  useEffect(() => {
    fetchExpenses();
    console.log("called");
  }, []);

  const onSubmit = value => {
    addExpense(value);
  };

  return (
    <div className="home-container">
      <div className="left-container">
        <ExpenseForm onSubmit={onSubmit} />
        <RecentLog expense={expense} loading={loading} />
      </div>
      <MonthlyOutgoing />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expense: getExpense(state),
    loading: getLoading(state),
    userId: getUserId(state)
  };
};

Home.protoTypes = {
  addExpense: PropTypes.func.isRequired,
  fetchExpenses: PropTypes.func.isRequired,
  expense: PropTypes.object.isRequired,
  auth: PropTypes.any.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    { addExpense, fetchExpenses, fetchUser }
  )(Home)
);
