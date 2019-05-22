import React, { Component } from 'react';
import { render } from 'react-dom';

import  LoaderComponent  from './Loader.js'

import './style.css';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <LoaderComponent/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
