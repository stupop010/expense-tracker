import React, { Component } from "react";
import NavBar from "./components/MainNav/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./css/app.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { fetchUser } from "./action/userAction";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
