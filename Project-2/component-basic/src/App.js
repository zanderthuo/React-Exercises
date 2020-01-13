import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.yourname = "zander";
    this.state = {};
  }

  render (){
    return (
      <div className="App">
        <h2>Just another application, name = {this.yourname}</h2>
      </div>
    );
  }
  
}

export default App;
