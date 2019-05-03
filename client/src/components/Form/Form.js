import React from "react";
import PropTypes from "prop-types";

const Form = props => {
  const {
    categries,
    submit,
    errorMessage,
    change,
    price,
    clear,
    description,
    successMessage
  } = props;

  return (
    <form onSubmit={submit} className="expense-form">
      <h1>Add Expenses</h1>
      {errorMessage ? (
        <div className="error-message">{errorMessage}</div>
      ) : null}
      {successMessage ? (
        <div className="success-message">{successMessage}</div>
      ) : null}
      <div>
        <div className="form-group">
          <label>Categories</label>
          <select
            name="categries"
            className="input"
            onChange={change}
            value={categries}
          >
            <option value="" />
            <option value="Food/Drink">Food/Drink</option>
            <option value="Travel">Travel</option>
            <option value="Rent/Bills">Rent/Bills</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label>How Much:</label>
        <div>
          <input
            name="price"
            type="number"
            placeholder="How Much"
            className="input"
            value={price}
            onChange={change}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <div>
          <input
            name="description"
            type="text"
            placeholder="Description"
            className="input"
            value={description}
            onChange={change}
          />
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="form-button">
          Sumbit
        </button>
        <button type="button" className="form-button" onClick={clear}>
          Clear
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  change: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  valueCategries: PropTypes.string,
  valueDes: PropTypes.string,
  valuePrice: PropTypes.string
};

export default Form;
