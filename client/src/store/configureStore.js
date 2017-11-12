import { createStore, applyMiddleware, } from 'redux';
// IMPORT MIDDLEWARE
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
// IMPORT THE COMBINE REDUCERS
import rootReducer from '../reducers';
// IMPORT REDUX DEVTOOLS
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [ thunk, reduxPromise, ];

if ( process.env.NODE_ENV === 'development' ) {
    const { logger } = require( 'redux-logger' );
    middlewares.push( logger );
}

export default function configureStore( initialState ) {
    return createStore( rootReducer, initialState, composeWithDevTools( applyMiddleware( thunk) ) );
}
