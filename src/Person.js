import React, { Component } from 'react';
import {PersonContext} from './PersonContext';
import './App.css';

export default class Person extends Component {
    render() {
      return (
        <div className="person">
          <PersonContext.Consumer>
  
            {(context) => (
              <React.Fragment>
                <h4>Person</h4>
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
  