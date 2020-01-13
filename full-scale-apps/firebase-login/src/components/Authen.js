import React, { Component } from 'react';
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOPAR571ocMAP67LwyNV7rSZJjk-J1oy0",
    authDomain: "logg-f9d62.firebaseapp.com",
    databaseURL: "https://logg-f9d62.firebaseio.com",
    projectId: "logg-f9d62",
    storageBucket: "logg-f9d62.appspot.com",
    messagingSenderId: "257254486811",
    appId: "1:257254486811:web:e041f58c1516bb4b9c99be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




  export default class Authen extends Component {

    login(event){
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email, password);

        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, password);

        promise.catch(e => {
            var err = e.message;
            console.log(err);
            this.setState({err: err});
        });

    }

    signup(){
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email, password);

        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, password);

        promise
        .then(user => {
            var err = "WELCOME "+ user.email;
            firebase.database().ref('users/'+user.uid).set({
                email: user.email
            });
            console.log(user);
            this.setState({err: err});
        });
        promise
        .catch(e => {
            var err = e.message;
            console.log(err);
            this.setState(({err: err}));
        });
    }

    constructor(props) {
        super(props)
    
        this.state = {
            err: ''
        };
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }
    
    render() {
        return (
            <div>
                <input id="email" ref="email" type="email" placeholder="Enter your email" />
                <input id="pass" ref="password" type="password" placeholder="Enter your password" />
                <p>{this.state.err}</p>

                <button onClick={this.login}>Log In</button> 
                <button onClick={this.signup}>Sign Up</button> 
                <button>Log Out</button> 
            </div>
        )
    }
}
