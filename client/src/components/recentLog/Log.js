import React from "react";
import PropTypes from "prop-types";

import ExpenseList from "../ExpenseList";
import "./recentLog.css";

const Log = props => {
  const { expense } = props;
  return (
    <>
      <h1 className="header">Recent Expenses</h1>
      {expense.map(item => (
        <div key={item._id} className="card card-anim">
          <ExpenseList expense={item} />
        </div>
      ))}
    </>
  );
};

Log.propTypes = {
  expense: PropTypes.array.isRequired
};

export default Log;
