import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar />

        <Container />

        <Footer />
      </div>
    );
  }  
}

export default App;
