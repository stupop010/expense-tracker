import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { clearErrors } from "../../action/errorAction";
import { errorMessage } from "../../selections/ErrorSelection";
import Log from "./Log";
import "./recentLog.css";

class RecentLog extends Component {
  state = {
    msg: null,
    error: false
  };

  componentDidUpdate(prevProps) {
    const { error, expense } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "FETCH_EXPENSES_FAILED") {
        this.setState({ msg: error.msg.msg, error: true });
      } else {
        this.setState({ msg: null, error: false });
      }
    }
    if (expense !== prevProps.expense) {
      if (expense.length > 0) {
        this.props.clearErrors();
        this.setState({ error: false });
      }
    }
  }

  render() {
    const { expense } = this.props;
    return (
      <div className="card-contaniner">
        <Log expense={expense} error={this.state.msg} />
      </div>
    );
  }
}

RecentLog.propTypes = {
  expense: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { error: errorMessage(state) };
};

export default connect(
  mapStateToProps,
  { clearErrors }
)(RecentLog);
