import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getUserId } from "../redux/selections/UserSelection";
import PaginationLog from "../components/PaginationLog/PaginationLog";
import "../css/app.css";
import {
  getPagination,
  paginationLoading
} from "../redux/selections/PaginationSelection";
import { errorMessage } from "../redux/selections/ErrorSelection";
import { pagintionExpense } from "../redux/action/expenseAction";

class ExpenseLog extends Component {
  state = {
    limit: 10,
    msg: null
  };

  componentDidMount() {
    this.props.pagintionExpense(this.state.limit, this.props.userId);
  }

  componentDidUpdate(prevProps, prevState) {
    const currentItems = this.props.pagItems;
    const { error } = this.props;
    if (prevState.limit !== this.state.limit) {
      this.props.pagintionExpense(this.state.limit, this.props.userId);
    }
    if (prevProps.pagItems !== currentItems) {
      if (prevProps.pagItems.length === currentItems.length) {
        this.setState({ msg: "No more can be found" });
      } else {
        this.setState({ msg: null });
      }
    }
    if (error !== prevProps.error) {
      if (error.id === "FETCH_PAGINATION_FAILED") {
        this.setState({ msg: error.msg.msg });
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

const mapStateToProps = state => {
  return {
    pagItems: getPagination(state),
    pagLoading: paginationLoading(state),
    userId: getUserId(state),
    error: errorMessage(state)
  };
};

export default connect(
  mapStateToProps,
  { pagintionExpense }
)(ExpenseLog);
