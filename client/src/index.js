// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, } from 'react-router';

// REDUX
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// MISC
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// CONTAINERS:
import App from './app/App';

// COMPONENTS:
import Login from './authentication/Login';
import Signup from './authentication/Signup';


export const store = configureStore();


const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Login}/>
                <Route path='/signup' component={Signup}/>
            </Route>
            <Route path='*' component={() => ( <div>NoMatch</div> )}/>
        </Router>
    </Provider>
);

ReactDOM.render( router, document.getElementById( 'root' ) );
registerServiceWorker();
