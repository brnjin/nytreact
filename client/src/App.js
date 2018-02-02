import React from "react";
import Articles from "./pages/Articles";
import Nav from "./components/Nav";
import SavedArticles from "./pages/SavedArticles";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/savedArticles" component={SavedArticles} />
      </Switch>
    </div>
  </Router>
);

export default App;
