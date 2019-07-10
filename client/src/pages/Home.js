import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import ExpenseForm from "../components/Form/ExpenseForm";
import Loader from "../components/Loader/Loader";
import RecentLog from "../components/RecentLog/RecentLog";
import MonthlyOutgoing from "../components/MonthlyOutgoing/MonthlyOutgoing";
import { fetchUser } from "../action/userAction";
import { addExpense, fetchExpenses } from "../action/expenseAction";
import { getExpense, getLoading } from "../selections/ExpenseSelection";
import "../css/app.css";
import { getUserId } from "../selections/UserSelection";

const Home = ({ fetchExpenses, addExpense }) => {
  useEffect(() => {
    fetchExpenses();
    console.log("called");
  }, [fetchExpenses]);

  const onSubmit = value => {
    addExpense(value);
  };

  const loading = useSelector(state => state.expense.isLoading);
  const expense = useSelector(state => state.expense.items);

  console.log(loading, expense);
  return loading || loading === null ? (
    <Loader />
  ) : (
    <div className="home-container">
      <div className="left-container">
        <ExpenseForm onSubmit={onSubmit} />
        <RecentLog expense={expense} />
      </div>
      <MonthlyOutgoing />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // expense: getExpense(state),
    // loading: getLoading(state),
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

// export default Home;
