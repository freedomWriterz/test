import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
         <Nav />
          <hr />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
