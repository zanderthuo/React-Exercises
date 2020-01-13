import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Component lifecycle</h2>
        </div>
        <Body />
      </div>
    );
  }
}

class Body extends Component{
  constructor(props){
    super(props);

    this.state = {
      r: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    // console.log("random number called");
    this.setState({r: Math.floor(Math.random()*10) })
  }

  render(){
    return(
      <div>
        <p className="App-intro">
        Hello WOrld
        </p>
        <button onClick={this.getRandomNumber}>RAndom Number</button>
        <Numbers myNUmber={this.state.r} />

      </div>
    );
  }
}


class Numbers extends Component {
  
  componentDidMount(){
    console.log("componentDidMount called here");
  }     

  componentWillMount(){
    console.log("componentWillMount called here");
  }

  componentWillReceiveProps(newProps){
    console.log("componentWillRecieveProps called here");
  }

  shouldComponentUpdate(newProps, nextState){
    console.log('Called should component Update');
  }

  componentWillUpdate(newProps, nextState){
    console.log('Called component Will Update');
  }

  componentDidUpdate(newProps, nextState){
    console.log('Called component Did Update');
  }

  componentWillUnmount(){
    console.log('Called componentWill un mount');
  }


  render(){
    return(
      <div>
        {this.props.myNUmber}
      </div>
    );
  }
}

export default App;
