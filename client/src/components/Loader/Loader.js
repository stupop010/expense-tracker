import React from "react";

import "./loader.css";

const Loader = ({ sentence }) => {
  return (
    <div className="loader">
      <div className="box1">1</div>
      <div className="box2">2</div>
      <div className="box3">3</div>
      <div className="box4">4</div>
      <h2>Loading: {sentence}</h2>
    </div>
  );
};

export default Loader;
