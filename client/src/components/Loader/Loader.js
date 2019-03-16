import React from "react";

import "./loader.css";

const Loader = ({ styles }) => {
  return (
    <div className="loader" style={styles}>
      <div className="box1">1</div>
      <div className="box2">2</div>
      <div className="box3">3</div>
      <div className="box4">4</div>
    </div>
  );
};

export default Loader;
