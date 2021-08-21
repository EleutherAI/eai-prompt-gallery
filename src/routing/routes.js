import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ArtPrompts from "../pages/ArtPrompts";
import TextPrompts from "../pages/TextPrompts";
import CodePrompts from "../pages/CodePrompts";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/art" />
      </Route>
      <Route path="/art">
        <ArtPrompts />
      </Route>
      <Route path="/text">
        <TextPrompts />
      </Route>
      <Route path="/code">
        <CodePrompts />
      </Route>
    </Switch>
  );
}
