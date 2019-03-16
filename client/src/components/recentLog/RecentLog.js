import React, { Component } from "react";
import PropTypes from "prop-types";

import Loader from "../Loader/Loader";
import "./recentLog.css";

class RecentLog extends Component {
  renderLoading() {
    const { loading } = this.props;
    if (loading) {
      return <Loader styles={{ marginTop: "30px" }} />;
    }
  }
  render() {
    const { expense } = this.props;
    return (
      <div className="card-contaniner">
        {this.renderLoading()}
        <h1 className="header">Recent Expenses</h1>
        {expense
          .map(item => (
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
          ))
          .reverse()}
      </div>
    );
  }
}

RecentLog.propTypes = {
  expense: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default RecentLog;
