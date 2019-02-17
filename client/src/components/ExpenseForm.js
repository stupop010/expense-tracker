import React from "react";
import { Field, reduxForm } from "redux-form";
import "../css/form.css";

const ExpenseForm = props => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label />
        <div className="formGroup">
          <Field name="favoriteColor" component="select" className="input">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
        </div>
      </div>
      <div className="formGroup">
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
      <div className="formGroup">
        <label>Description:</label>
        <div>
          <Field
            name="notes"
            component="input"
            type="text"
            placeholder="description"
            className="input"
          />
        </div>
      </div>
      <button type="submit">Sumbit</button>
      <button onClick={reset}>Clear</button>
    </form>
  );
};

export default reduxForm({
  form: "expenseForm" // a unique identifier for this form
})(ExpenseForm);
