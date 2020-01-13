import React, { Component } from 'react';
import './App.css';
import  Navbar from './Component/Navbar';
import SectionHomeSection from './Component/SectionHomeSection';
import AboutSection from './Component/AboutSection';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar />
        <SectionHomeSection />
        <AboutSection />
       
        
      </div>
    );
  }
}


export default App;
