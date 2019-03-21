import React, { Component } from "react";
import { connect } from "react-redux";

import { pagintionExpense } from "../action/expenseAction";

class ExpenseLog extends Component {
  state = {
    limit: 10
  };

  componentDidMount() {
    this.props.pagintionExpense(this.state.limit);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.limit !== this.state.limit) {
      this.props.pagintionExpense(this.state.limit);
    }
  }
  handleClick = () => {
    this.setState({
      limit: this.state.limit + 10
    });
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick} />
      </div>
    );
  }
}

export default connect(
  null,
  { pagintionExpense }
)(ExpenseLog);
