import React, {Component} from 'react';
import {Family} from './Family';
import MyProvider from './MyProvider';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am the app</p>
          <Family/>
        </div>
      </MyProvider>
    );
  }
}

export default App;
