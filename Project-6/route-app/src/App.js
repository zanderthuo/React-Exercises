import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';


class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-Header">
          <h2>WELCOME</h2>
          <ul>
            <li><Link to="/components/One">One</Link></li>
            <li><Link to="/components/Two">Two</Link></li>
            <li><Link to="/components/Three">Three</Link></li>
            <li><Link to="/components/Four">Four</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
