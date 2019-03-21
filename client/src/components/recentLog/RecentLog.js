import React from "react";
import PropTypes from "prop-types";

import Loader from "../Loader/Loader";
import Log from "./Log";
import "./recentLog.css";

const RecentLog = props => {
  const { expense, loading } = props;
  return (
    <div className="card-contaniner">
      {loading ? (
        <Loader styles={{ marginTop: "30px" }} />
      ) : (
        <Log expense={expense} />
      )}
    </div>
  );
};

RecentLog.propTypes = {
  expense: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default RecentLog;
