import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchOneExpense,
  updateExpense,
  deleteExpense
} from "../action/expenseAdmin";
import { getItem } from "../selections/ExpenseSelection";
import ExpenseAdminForm from "../components/ExpenseAdminForm/ExpenseAdminForm";

class ExpenseAdmin extends Component {
  state = { description: "", price: "", category: "" };

  componentDidMount() {
    this.props.fetchOneExpense(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      if (this.props.item) {
        const { description, price, category } = this.props.item;
        this.setState({ description, price, category });
      }
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editItem = e => {
    e.preventDefault();
    const data = {
      id: this.props.item._id,
      description: this.state.description,
      price: this.state.price,
      category: this.state.category
    };
    this.props.updateExpense(data);
  };

  deleteItem = e => {
    e.preventDefault();
    this.props.deleteExpense(this.props.item._id);
  };

  render() {
    return (
      <ExpenseAdminForm
        {...this.state}
        change={this.handleChange}
        editItem={this.editItem}
        deleteItem={this.deleteItem}
      />
    );
  }
}

const mapStateToProps = state => {
  return { item: getItem(state) };
};

export default connect(
  mapStateToProps,
  { fetchOneExpense, updateExpense, deleteExpense }
)(ExpenseAdmin);
