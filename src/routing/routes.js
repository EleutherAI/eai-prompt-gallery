import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ArtPrompts from "../pages/ArtPrompts";
import TextPrompts from "../pages/TextPrompts";
import CodePrompts from "../pages/CodePrompts";
import SingleItem from "../pages/SingleItem";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/art" />
      </Route>
      <Route exact path="/art">
        <ArtPrompts />
      </Route>
      <Route path="/art/:itemId">
        <SingleItem />
      </Route>
      <Route exact path="/text">
        <TextPrompts />
      </Route>
      <Route path="/text/:itemId">
        <SingleItem />
      </Route>
      <Route exact path="/code">
        <CodePrompts />
      </Route>
      <Route path="/code/:itemId">
        <SingleItem />
      </Route>
    </Switch>
  );
}
