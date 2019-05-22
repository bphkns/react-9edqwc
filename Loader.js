import React, { Component } from 'react';
import { render } from 'react-dom';
import Fade from 'react-reveal/Fade';

export default class LoaderComponent extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  render() {
    if (!this.state.loading) {
      return (<div> </div>);
    }

    return (
      <div>
        <h1>
          <Fade right cascade>
            React Reveal
        </Fade>
        </h1>
      </div>
    )
  }

}

