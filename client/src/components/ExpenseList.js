import React from "react";

const ExpenseList = props => {
  const item = props.expense;
  return (
    <ul>
      <li>
        <span>Category: </span>
        {item.category}
      </li>
      <li>
        <span>Description: </span>
        {item.description}
      </li>
      <li>
        <span>Price: </span>£{item.price}
      </li>
    </ul>
  );
};

export default ExpenseList;
