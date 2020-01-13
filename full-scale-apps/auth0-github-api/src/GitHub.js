import React, { Component } from 'react';
import Profile from './components/Profile';
import Search from './components/Search';

const API = 'https://api.github.com/users'
export default class GitHub extends Component {
    constructor(props) {
        super(props)
    
        //Setting the properties to get from Github api
        this.state = {
          username: 'zanderthuo',
          name: '',
          avatar: '',
          repso: '',
          followers: '',
          following: '',
          homeURL: '',
          notFound: '' 
        };
    }

    //Get user profile from github using API
    getProfile(username){
        let finalURL = `${API}/${username}`;

        //API fetch
        fetch(finalURL)
        .then((res) => res.json() )
        .then((data) => {
            this.setState({
                username: data.login,
                name: data.name,
                avatar: data.avatar_url,
                repos: data.public_repos,
                followers: data.followers,
                following: data.following,
                homeURL: data.html_url,
                notFound: data.message 
            })
        })
        .catch((error) => console.log('There was a problem in fetching data'))
    }

    componentDidMount(){
        this.getProfile(this.state.username);
    }
    
    render() {
        return (
            <div>
                <section id="card">
                    <Search searchProfile={this.getProfile.bind(this)}/>
                    <Profile userData={this.state}/>
                </section>
            </div>
        )
    }
}
