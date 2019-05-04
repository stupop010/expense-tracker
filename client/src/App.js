import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./css/app.css";

import Routes from "./components/Routes";
import NavBar from "./components/MainNav/NavBar";
import { getUser } from "./selections/UserSelection";
import { fetchUser } from "./action/userAction";

library.add(fab);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <>
          <NavBar />
          <div className="main-app">
            <Switch>
              <Routes user={this.props.auth} />
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
