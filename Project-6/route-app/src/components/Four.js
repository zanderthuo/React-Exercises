import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Four extends Component {
    render() {
        return (
            <div>
                <h1>I am Four Component</h1>
                    <ul>
                        <li><Link to="/component/Four/123">I am Four.one</Link></li>
                    </ul>
                    {this.props.children}
            </div>
        )
    }
}
