import React, {Component} from 'react';
import {PersonContext} from './PersonContext';

export default class PersonProvider extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  }

  render() {
    return (
      <PersonContext.Provider
        value = {
          {
            state: this.state,
            growAYearOlder: () => this.setState({
              age: this.state.age + 1
            } )
          }
        } >
        {this.props.children}
      </PersonContext.Provider>
    )
  }
}
