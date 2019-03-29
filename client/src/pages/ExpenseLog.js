import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import PaginationLog from "../components/PaginationLog/PaginationLog";
import Button from "../components/Button/Button";

import {
  getPagination,
  paginationLoading
} from "../selections/PaginationSelection";
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
        <PaginationLog {...this.props} handleClick={this.handleClick} />
      </div>
    );
  }
}

ExpenseLog.protoTypes = {
  pagItems: PropTypes.array.isRequired,
  pagLoading: PropTypes.bool.isRequired,
  pagintionExpense: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    pagItems: getPagination(state),
    pagLoading: paginationLoading(state)
  };
}

export default connect(
  mapStateToProps,
  { pagintionExpense }
)(ExpenseLog);
