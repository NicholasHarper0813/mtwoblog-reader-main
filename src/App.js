import React, { Component } from 'react';
import M2Blog from './blog/M2Blog';
import './App.css';

class App extends Component 
{
  render() {
    return (
      <div className="App container-fluid">
        <M2Blog />
      </div>
    );
  }
}

export default App;
