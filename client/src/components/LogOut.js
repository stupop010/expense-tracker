import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logOut } from "../action/userAction";

const LogOut = props => {
  console.log(props);
  return (
    <a href="/api/logout" onClick={props.logOut}>
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
