import React, { Component } from 'react';
import {PersonContext} from './PersonContext'

export default class Person extends Component {
    render() {
      return (
        <div className="person">
          <PersonContext.Consumer>
            {(context) => (
              <React.Fragment>
                <p>Age: {context.state.age}</p>
                <p>Name: {context.state.name}</p>
                <button onClick={context.growAYearOlder}><span role='img'>🍰🍥🎂</span></button>
              </React.Fragment>
            )}
          </PersonContext.Consumer>
        </div>
      )
    }
  }
  