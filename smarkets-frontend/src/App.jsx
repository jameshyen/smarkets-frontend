import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Event from './Event';
import List from './List';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={List} />
          <Route path="/event" component={Event} />
        </div>
      </Router>
    );
  }
}

export default App;
