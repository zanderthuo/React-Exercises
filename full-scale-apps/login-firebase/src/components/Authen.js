import React, { Component } from 'react';
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBGQR0KeyS-OExLJQrh1l8UduXvgyymjfc",
    authDomain: "loginf-edd85.firebaseapp.com",
    databaseURL: "https://loginf-edd85.firebaseio.com",
    projectId: "loginf-edd85",
    storageBucket: "loginf-edd85.appspot.com",
    messagingSenderId: "344911855748",
    appId: "1:344911855748:web:c8e74f5803cb52189342d1",
    measurementId: "G-1JPPV89Z9P"
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

        promise.then(user => {
            var lout = document.getElementById('logout');

            lout.classList.remove('hode');
        }); 

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

    logout(){
        firebase.auth().signOut();
        var lout = document.getElementById('logout');

        lout.classList.add('hide');
    }

    google(){

        var provider = new firebase.auth.GoogleAuthProvider();
        var promise = firebase.auth().signInWithPopup(provider);
        
        promise.then( result => {
            var user = result.user;
            console.log(result);
            firebase.database().ref('users/'+user.uid).set({
                email: user.email,
                name: user.displayName
            });

        });
        promise.catch(e => {
            var msg = e.message;
            console.log(msg);
        });

    }

    constructor(props) {
        super(props)
    
        this.state = {
            err: ''
        };
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.logout = this.logout.bind(this);
        this.google = this.google.bind(this);
    }
    
    render() {
        return (
            <div>
                <input id="email" ref="email" type="email" placeholder="Enter your email" />
                <input id="pass" ref="password" type="password" placeholder="Enter your password" />
                <p>{this.state.err}</p>

                <button onClick={this.login}>Log In</button> 
                <button onClick={this.signup}>Sign Up</button> 
                <button onClick={this.logout} id="logout" className="hide">Log Out</button><br />
                <button onClick={this.google} id="google" className="google">Sign In with Google</button> 
            </div>
        )
    }
}
