// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, } from 'react-router';

// REDUX
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// MISC
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ROUTES
import routes from './routes';

// REDUX STORE
export const store = configureStore();


const router = (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
);

ReactDOM.render( router, document.getElementById( 'root' ) );
registerServiceWorker();
