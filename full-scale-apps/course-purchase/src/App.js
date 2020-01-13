import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component{
  render(){
    var courses = [
      { name: 'Complete IOS10 dev course', price: 200 },
      { name: 'Complete pentesting dev course', price: 200 },
      { name: 'Complete front-end dev course', price: 200 },
      { name: 'Complete web app pentesting dev course', price: 200 }
    ];
    return (
      <div className="App">
       
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
