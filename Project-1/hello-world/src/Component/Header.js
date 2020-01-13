import React, { Component } from 'react';


class Header extends Component {
    render(){
      return(
        <div>
        <header className="App-header">
        
        {
        // <img src={logo} className="App-logo" alt="logo" />
        }
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        </div>
      );
    }
  }

  export default Header;  