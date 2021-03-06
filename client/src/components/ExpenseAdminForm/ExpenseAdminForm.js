import React from "react";

const ExpenseAdminForm = ({
  description,
  price,
  category,
  change,
  editItem,
  deleteItem
}) => {
  return (
    <div>
      <form className="expense-form entry">
        <h1>Expense Admin</h1>
        <div>
          <div className="form-group">
            <label>Categories</label>
            <select
              name="categries"
              className="input"
              onChange={change}
              value={category}
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
        <button type="button" className="admin-button" onClick={editItem}>
          Edit Expense
        </button>
        <button type="button" className="admin-button red" onClick={deleteItem}>
          Delete Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseAdminForm;
