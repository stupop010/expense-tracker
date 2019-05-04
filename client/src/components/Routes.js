import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

import ExpenseAdmin from "../pages/ExpenseAdmin";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ExpenseLog from "../pages/ExpenseLog";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const Routes = ({ user }) => {
  return (
    <Fragment>
      <Route
        exact
        path="/"
        render={() =>
          user.isAuthenticated ? <Redirect to="/home" /> : <LandingPage />
        }
      />
      <PrivateRoute exact path="/home" component={Home} auth={user} />
      <PrivateRoute
        exact
        path="/expense/:id"
        component={ExpenseAdmin}
        auth={user}
      />
      <PrivateRoute exact path="/dashboard" component={Dashboard} auth={user} />
      <PrivateRoute exact path="/log" component={ExpenseLog} auth={user} />

      <Route exact path="/login" component={Login} auth={user} />
      <Route exact path="/register" component={Register} auth={user} />
    </Fragment>
  );
};

export default Routes;
