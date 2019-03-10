import React, { Component } from "react";
import "./form.css";

class ExpenseForm extends Component {
  state = { categries: "", price: "", description: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClear = e => {
    this.setState({ categries: "", price: "", description: "" });
  };
  handleSubmit = e => {
    const value = {
      categries: this.state.categries,
      price: this.state.price,
      description: this.state.description
    };
    this.props.onSubmit(value);
    this.onClear();
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="expense-form">
        <h1>Add Expenses</h1>
        <div>
          <div className="form-group">
            <label>Categories</label>
            <select
              name="categries"
              className="input"
              onChange={this.handleChange}
              value={this.state.categries}
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
              value={this.state.price}
              onChange={this.handleChange}
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
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="form-button">
            Sumbit
          </button>
          <button type="button" className="form-button" onClick={this.onClear}>
            Clear
          </button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
