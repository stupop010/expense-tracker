import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import ExpenseForm from "../components/Form/ExpenseForm";
import RecentLog from "../components/recentLog/RecentLog";
import { addExpense, fetchExpenses } from "../action";
import "../css/app.css";

class Home extends Component {
  componentDidMount() {
    this.props.fetchExpenses();
  }
  onSubmit = value => {
    this.props.addExpense(value);
  };
  render() {
    console.log(typeof(this.props.expense))
    return (
      <div className="main-app">
        <ExpenseForm onSubmit={this.onSubmit} />
        <RecentLog expense={this.props.expense} />
      </div>
    );
  }
}

function mapStateToProps({ expense }) {
  return { expense };
}


Home.protoTypes = {
  addExpense: PropTypes.func.isRequired,
  fetchExpenses: PropTypes.func.isRequired,
  expense: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  { addExpense, fetchExpenses }
)(Home);
