import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authen from './components/Authen';

class App extends Component {
  render(){
    return (
      <div className="App">
      
        <Authen />
      </div>
    );
  }
}

export default App;
