import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOneExpense } from "../action/expenseAdmin";
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

  render() {
    return <ExpenseAdminForm {...this.state} change={this.handleChange} />;
  }
}

const mapStateToProps = state => {
  return { item: getItem(state) };
};

export default connect(
  mapStateToProps,
  { fetchOneExpense }
)(ExpenseAdmin);
