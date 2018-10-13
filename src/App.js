import React, {Component} from 'react';
import {Family} from './Family';
import PersonProvider from './PersonProvider';

class App extends Component {
  render() {
    return (
      <PersonProvider>
        <div>
          <p>I am the app</p>
          <Family/>
        </div>
      </PersonProvider>
    );
  }
}

export default App;
