import React from "react";
import { Switch, Route } from "react-router";
import { HomePage } from "../pages/main/HomePage";

export default function Navigation() {
  return <div>
      <Switch>
          <Route path="/" exact component={HomePage}  />
      </Switch>
  </div>;
}
