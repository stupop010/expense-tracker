import React from "react";
import "./paginationLog.css";

const PaginationLog = props => {
  const items = props.pagItems;
  console.log(props);
  return (
    <div>
      {items.map(item => {
        return (
          <div key={item._id} className="pag-card">
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PaginationLog;
