import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import ExpenseForm from "../components/Form/ExpenseForm";
import Loader from "../components/Loader/Loader";
import RecentLog from "../components/RecentLog/RecentLog";
import MonthlyOutgoing from "../components/MonthlyOutgoing/MonthlyOutgoing";

import { fetchExpenses } from "../redux/action/expenseAction";

import "../css/app.css";

const Home = ({ addExpense }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const onSubmit = value => {
    dispatch(addExpense(value));
  };

  const loading = useSelector(state => state.expense.isLoading);
  const expense = useSelector(state => state.expense.items);

  const render = () => {
    if (loading) return <Loader></Loader>;
    return (
      <>
        <div class="flex-container">
          <ExpenseForm onSubmit={onSubmit} />
          <MonthlyOutgoing />
        </div>
        <RecentLog expense={expense} />
      </>
    );
  };

  return <div className="home-container">{render()}</div>;
};

Home.protoTypes = {
  addExpense: PropTypes.func.isRequired,
  fetchExpenses: PropTypes.func.isRequired,
  expense: PropTypes.object.isRequired,
  auth: PropTypes.any.isRequired
};

export default Home;
