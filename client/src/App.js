import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./css/app.css";

import NavBar from "./components/MainNav/NavBar";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import { getUser } from "./selections/UserSelection";
import { fetchUser } from "./action/userAction";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <NavBar />
            <Route
              exact
              path="/home"
              render={routeProps => <Home {...routeProps} {...this.props} />}
            />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.protoTypes = {
  fetchUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { auth: getUser(state) };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
