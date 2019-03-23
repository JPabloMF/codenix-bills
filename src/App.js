import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Login from './components/login'
import Registre from './components/registre'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/login/" component={Login} />
          <Route path="/registre/" component={Registre} />
        </Router>
      </>
    );
  }
}

export default App;
