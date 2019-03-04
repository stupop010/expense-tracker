import React from "react";

import "./navBar.css";

const Sidebar = props => {
  return (
    <div className="sidebar">
      <button type="button" onClick={props.handleClickClose}>
        close
      </button>
    </div>
  );
};

export default Sidebar;
