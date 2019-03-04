import React, { Component } from "react";

import "./recentLog.css";

class RecentLog extends Component {
  reRender() {
    return this.props.item.map(item => {
      return (
        <div key={item._id} className="card">
          <p>
            <span>Category: </span>
            {item.category}
            <span>Description: </span>
            {item.description}
            <span>Price: </span>£{item.price}
          </p>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="card-contaniner">
        <h1 className="header">Recent Expenses</h1>
        {this.reRender()}
      </div>
    );
  }
}

export default RecentLog;
