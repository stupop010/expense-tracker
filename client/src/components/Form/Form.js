import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.submit} className="expense-form">
          <h1>Add Expenses</h1>
          <div>
            <div className="form-group">
              <label>Categories</label>
              <select
                name="categries"
                className="input"
                onChange={props.change}
                value={props.valueCategries}
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
                value={props.valuePrice}
                onChange={props.change}
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
                value={props.valueDes}
                onChange={props.change}
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="form-button">
              Sumbit
            </button>
            <button type="button" className="form-button" onClick={props.clear}>
              Clear
            </button>
          </div>
        </form>
    )
}

export default Form;