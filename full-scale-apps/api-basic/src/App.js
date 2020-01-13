import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiCall from './components/ApiCall';

class App extends Component {
  render(){
    return (
      <div className="App">
       

        <ApiCall />
      </div>
    );
  }
}

export default App;
