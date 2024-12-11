import React, { Component } from 'react';
import './App.css';

import M2Blog from './blog/M2Blog';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <M2Blog />
      </div>
    );
  }
}

export default App;
