import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Home from "./containers/Home";
import AppliedRoute from "./components/AppliedRoute";

export default function Routes({appProps}) {
  return (
    <Switch>
      <Route path="/" exact component={Login} appProps={appProps}/>
      <Route path="/home" exact component={Home} appProps={appProps}/>
      <Route component={NotFound} />
    </Switch>
  );
}
