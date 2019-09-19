import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logOut } from "../redux/action/userAction";

const LogOut = ({ logOut }) => {
  return (
    <a href="/api/logout" onClick={logOut}>
      LogOut
    </a>
  );
};

LogOut.propTypes = {
  logOut: PropTypes.func.isRequired
};

export default connect(
  null,
  { logOut }
)(LogOut);
