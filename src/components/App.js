import React, { Component } from 'react';
import '../styles/App.css';

import EarthquakeInfo from './earthquakeinfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">Earthquakes!</div>
        </div>
        <EarthquakeInfo />
      </div>
    );
  }
}

export default App;
