import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./css/app.css";

import NavBar from "./components/MainNav/NavBar";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ExpenseLog from "./pages/ExpenseLog";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";

import { getUser } from "./selections/UserSelection";
import { fetchUser } from "./action/userAction";

library.add(fab);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    console.log("hello");
  }
  render() {
    const { user } = this.props.auth;
    return (
      <Router>
        <>
          <NavBar />
          <div className="main-app">
            <Switch>
              <Route
                exact
                path="/"
                render={() =>
                  user ? <Redirect to="/home" /> : <LandingPage />
                }
              />
              <PrivateRoute exact path="/home" component={Home} auth={user} />
              <PrivateRoute
                exact
                path="/dashboard"
                component={Dashboard}
                auth={user}
              />
              <Route exact path="/login" component={Login} auth={user} />
              <Route exact path="/register" component={Register} auth={user} />
              {/* <Route exact path="/home" component={Home} auth={user} /> */}
              <PrivateRoute
                exact
                path="/log"
                component={ExpenseLog}
                auth={user}
              />
            </Switch>
          </div>
        </>
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
