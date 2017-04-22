import React, { Component } from 'react';

import './style/style.css';

import Time from './Time.js';
import Date from './Date.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>#Hack4Democracy</h1>
        <Date />
        {/*<Time />*/}
        <div className='placeholder'>
          for place holding purposes
        </div>
      </div>
    );
  }
}

export default App;
