import React, { Component } from 'react';

import './style/style.css';

import Date from './Date.js';
import Race from './Race.js';
import Age from './Age.js';
import Map from './Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>#Hack4Democracy</h1>
        <Date />
        {/*<Time />*/}
        <div className='row'>
          <Race />
          <Map />
          <Age />
        </div>
      </div>
    );
  }
}

export default App;
