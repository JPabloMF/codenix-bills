import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Login from './components/login';
import Registre from './components/registre';
import PageNotFound from './components/pagenotfound';
import Dashboard from './components/dashboard';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faFileInvoiceDollar, faFolder, faFlag, faThumbtack, faChartLine, faBars } from "@fortawesome/free-solid-svg-icons";
library.add(
  faHome,
  faFileInvoiceDollar,
  faFolder,
  faFlag,
  faThumbtack,
  faChartLine,
  faBars
);

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Login/" component={Login} />
            <Route path="/Registre/" component={Registre} />
            <Route path="/Dashboard/" component={Dashboard} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
