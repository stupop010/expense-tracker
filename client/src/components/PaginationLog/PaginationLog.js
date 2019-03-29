import React from "react";

import ExpenseList from "../ExpenseList";
import Button from "../Button/Button";
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
      <Button type="button" className="pag-button" onClick={props.handleClick}>
        Hello
      </Button>
    </div>
  );
};

export default PaginationLog;
