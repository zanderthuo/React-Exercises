import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>prop number is:{this.props.propNumber}</h3>
        <h3>prop number is:{this.props.propString}</h3>
        <h3>prop number is:{this.props.propObject.obj1}</h3>
        <Parent />
      </div>
    );
  }
}

App.propTypes = {
  propObject: React.PropTypes.object,
  propString: React.PropTypes.string,
  propNumber: React.PropTypes.number
}  

App.defaultProps = {
  propNumber: 3,
  propString: "THIS is a prop string",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3"
  }
}



class Parent extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      cars: ['s-BMW', 's-MERC', 's-AUDI', 's-CHEVY']
    };
    
  }

  handleClick = () => {
    this.setState({cars: this.state.cars.reverse()});
  }

  render(){
    return(
      <div>
        <h2 onClick={this.handleClick.bind(this)}>Just some info</h2>
        <Cars msg="cars are cool" model="122343" coolCars={this.state.cars}/>
      </div>
    );
  }
}


Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'AUDI', 'CHEVY']
}

class Cars extends Component {
  render(){
    console.log(this.props);  
    return(
      <div>
        <h3>I am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolCars.map((item, i) =>{
          return <p key={i}>{item}</p>;
        })}</div>
      </div>
    );
  }
}


export default App;
