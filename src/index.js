import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import Layout from './layout';
import ChooseSeat from './components/chooseSeat';
import Inventory from './components/inventory';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import BookedSeats from './components/bookedSeats';

import './index.css'

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={ChooseSeat} />
                <Route path="profile" component={Profile} />
                <Route path="register" component={Register} />
                <Route path="bookedSeats" component={BookedSeats} />
                <Route path="login" component={Login} />
                <Route path="chooseSeat" component={ChooseSeat} />
                <Route path="inventory" component={Inventory} />
            </Route>
        </Router>
	</Provider>
	, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
