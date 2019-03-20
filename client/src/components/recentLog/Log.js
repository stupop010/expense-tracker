import React from "react";
import PropTypes from "prop-types";
import "./recentLog.css";

const Log = props => {
  const { expense } = props;
  return (
    <>
      <h1 className="header">Recent Expenses</h1>
      {expense.map(item => (
        <div key={item._id} className="card card-anim">
          <ul>
            <li>
              <span>Category: </span>
              {item.category}
            </li>
            <li>
              <span>Description: </span>
              {item.description}
            </li>
            <li>
              <span>Price: </span>£{item.price}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

Log.propTypes = {
  expense: PropTypes.array.isRequired
};

export default Log;
