import React from "react";
import { Field, reduxForm } from "redux-form";
import "./form.css";

const ExpenseForm = props => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h1>Add Expenses</h1>
      <div>
        <div className="form-group">
          <label>Categories</label>
          <Field name="categries" component="select" className="input">
            <option value="" />
            <option value="Food/Drink">Food/Drink</option>
            <option value="Travel">Travel</option>
            <option value="Rent/Bills">Rent/Bills</option>
            <option value="Clothing">Clothing</option>
          </Field>
        </div>
      </div>
      <div className="form-group">
        <label>How Much:</label>
        <div>
          <Field
            name="price"
            component="input"
            type="number"
            placeholder="How Much"
            className="input"
          />
        </div>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <div>
          <Field
            name="description"
            component="input"
            type="text"
            placeholder="Description"
            className="input"
          />
        </div>
      </div>
      <div className="form-group">
        <button type="submit">Sumbit</button>
        <button type="button" onClick={reset}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "expenseForm" // a unique identifier for this form
})(ExpenseForm);
