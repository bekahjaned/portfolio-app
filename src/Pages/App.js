import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Components/Header";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

import Logo from "../images/dejongemaker-logo.png";

function App() {
  return (
    <Router>
      <div>
        <Header logo={Logo} />
        <Switch>
          <Route path="/" exact component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
