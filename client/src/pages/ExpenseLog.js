import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getUserId } from "../selections/UserSelection";
import PaginationLog from "../components/PaginationLog/PaginationLog";
import "../css/app.css";
import {
  getPagination,
  paginationLoading
} from "../selections/PaginationSelection";
import { pagintionExpense } from "../action/expenseAction";

class ExpenseLog extends Component {
  state = {
    limit: 10,
    msg: null
  };

  componentDidMount() {
    this.props.pagintionExpense(this.state.limit, this.props.userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.limit !== this.state.limit) {
      this.props.pagintionExpense(this.state.limit, this.props.userId);
    }
    if (prevProps.pagItems !== this.props.pagItems) {
      if (prevProps.pagItems.length === this.props.pagItems.length) {
        this.setState({ msg: "No more can be found" });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  handleClick = () => {
    this.setState({
      limit: this.state.limit + 10
    });
  };

  render() {
    return (
      <div className="expense-container">
        <PaginationLog
          {...this.props}
          handleClick={this.handleClick}
          msg={this.state.msg}
        />
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
    pagLoading: paginationLoading(state),
    userId: getUserId(state)
  };
}

export default connect(
  mapStateToProps,
  { pagintionExpense }
)(ExpenseLog);
