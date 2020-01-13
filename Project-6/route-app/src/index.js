import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Fourpointone from './components/Fourpointone';
import NoMatch from './components/NoMatch';
import * as serviceWorker from './serviceWorker';

import {
    Router, 
    Route, 
    browserHistory
} from 'react-router';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/components/One" component={One}></Route>
        <Route path="/components/Two" component={Two}></Route>
        <Route path="/components/Three" component={Three}></Route>
        <Route path="/components/Four" component={Four}>
            <Route path="/component/Four/:id" component={Fourpointone}></Route>
        </Route>
        <Route path="*" component={NoMatch}></Route>
    </Router>



    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
