// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
// import allReducers from './reducers';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


import './index.css';
import registerServiceWorker from './registerServiceWorker';

// CONTAINERS:
import App from './app/App';

// COMPONENTS:
import Login from './authentication/Login';
import Registration from './authentication/Registration';

export const store = createStore( reducers, composeWithDevTools( applyMiddleware( reduxPromise ) ) );


const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Login}/>
                <Route path='/register' component={Registration}/>
            </Route>
        </Router>
    </Provider>
);



ReactDOM.render( router, document.getElementById( 'root' ) );
registerServiceWorker();
