import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { errorMessage } from "../../selections/ErrorSelection";
import Loader from "../Loader/Loader";
import Log from "./Log";
import "./recentLog.css";

class RecentLog extends Component {
  state = {
    msg: null
  };
  render() {
    const { expense, loading, error } = this.props;
    return (
      <div className="card-contaniner">
        {loading ? (
          <Loader styles={{ marginTop: "30px" }} />
        ) : (
          <Log expense={expense} error={this.state.msg} />
        )}
      </div>
    );
  }
}

RecentLog.propTypes = {
  expense: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { error: errorMessage(state) };
}

export default connect(
  mapStateToProps,
  null
)(RecentLog);
