import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { history } from "./history";
import "./css/app.css";

import Routes from "./components/Routes";
import NavBar from "./components/MainNav/NavBar";
import { getUser } from "./redux/selections/UserSelection";
import { fetchUser } from "./redux/action/userAction";

library.add(fab);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router history={history}>
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

const mapStateToProps = state => {
  return { auth: getUser(state) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
