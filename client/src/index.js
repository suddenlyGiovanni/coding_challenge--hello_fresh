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


import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

// CONTAINERS:
import App from './containers/App';

// COMPONENTS:
import Login from './components/Login';
import Registration from './components/Registration';

export const store = createStore( reducers, composeWithDevTools( applyMiddleware( reduxPromise ) ) );


const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Registration}/>
                <Route path='/login' component={Login}/>
            </Route>
        </Router>
    </Provider>
);



ReactDOM.render( router, document.getElementById( 'root' ) );
registerServiceWorker();
