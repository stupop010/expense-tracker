import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./css/app.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
