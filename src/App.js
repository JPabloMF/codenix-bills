import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Redux */
import { Provider } from 'react-redux';
import store from './redux';

// components
import Login from './components/login';
import Registre from './components/registre';
import PageNotFound from './components/pagenotfound';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Login/" component={Login} />
            <Route path="/Registre/" component={Registre} />
            <Route path="/Dashboard/" component={Dashboard} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
