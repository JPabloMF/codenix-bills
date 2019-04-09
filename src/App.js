import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Login from './components/login'
import Registre from './components/registre'
import PageNotFound from './components/shared/pagenotfound'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/registre" component={Registre} />
          <Route path="*" component={PageNotFound} />
        </Router>
      </>
    );
  }
}

export default App;
