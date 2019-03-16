import React, { Component } from "react";
import PropTypes from "prop-types";

import Loader from "../Loader/Loader";
import "./recentLog.css";

class RecentLog extends Component {
  render() {
    return (
      <div className="card-contaniner">
        <h1 className="header">Recent Expenses</h1>
        {this.props.expense.items
          .map(item => (
            <div key={item._id} className="card card-anim">
              <p>
                <span>Category: </span>
                {item.category}
                <span>Description: </span>
                {item.description}
                <span>Price: </span>£{item.price}
              </p>
            </div>
          ))
          .reverse()}
      </div>
    );
  }
}

RecentLog.propTypes = {
  expense: PropTypes.shape({
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  })
};

export default RecentLog;
