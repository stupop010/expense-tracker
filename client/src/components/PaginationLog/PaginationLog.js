import React from "react";

import ExpenseList from "../ExpenseList";
import "./paginationLog.css";
import LogReturn from "../LogReturn/LogReturn";

const PaginationLog = props => {
  const items = props.pagItems;
  return (
    <div className="pag-body">
      <h2 className="title">Expense Log</h2>
      {items.map(item => {
        return (
          <LogReturn item={item} key={item._id} className={"pag-card"}>
            <ExpenseList expense={item} />
          </LogReturn>
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
