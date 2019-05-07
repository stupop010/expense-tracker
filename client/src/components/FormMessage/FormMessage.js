import React from "react";

import "./formMessage.css";

const FormMessage = ({ error, message }) => {
  return (
    <>
      {error ? <div className="error-message">{error}</div> : null}
      {message ? <div className="success-message">{message}</div> : null}
    </>
  );
};

export default FormMessage;
