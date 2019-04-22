import React from "react";

import ExpenseList from "../ExpenseList";
import "./paginationLog.css";

const PaginationLog = props => {
  const items = props.pagItems;
  return (
    <div className="pag-body">
      {items.map(item => {
        return (
          <div key={item._id} className="pag-card">
            <ExpenseList expense={item} />
          </div>
        );
      })}
      {props.msg ? <h2 className="pag-error">{props.msg}</h2> : null}
      <button type="button" className="pag-button" onClick={props.handleClick}>
        Load more ...
      </button>
    </div>
  );
};

export default PaginationLog;
