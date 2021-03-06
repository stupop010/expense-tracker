import React from "react";
import PropTypes from "prop-types";
import LogReturn from "../LogReturn/LogReturn";
import ExpenseList from "../ExpenseList";
import "./recentLog.css";

const Log = ({ expense, error }) => {
  return (
    <>
      <h1 className="header">Recent Expenses</h1>
      {error ? <h2 className="header error">{error}</h2> : null}
      {expense.map(item => (
        <LogReturn item={item} key={item._id} className="card card-anim">
          <ExpenseList expense={item} />
        </LogReturn>
      ))}
    </>
  );
};

Log.propTypes = {
  expense: PropTypes.array.isRequired
};

export default Log;
