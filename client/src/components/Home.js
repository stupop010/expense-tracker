import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";

class Home extends Component {
  onSubmit = e => {
    console.log(e);
  };
  render() {
    return <ExpenseForm onSubmit={this.onSubmit} />;
  }
}

export default Home;
