import { combineReducers } from 'redux';
// IMPORT THE INDIVIDUAL REDUCERS:
import { signupHasErrored, loginHasErrored, userAuthSuccess } from './authentication';

export default combineReducers( {
    signupHasErrored,
    loginHasErrored,
    userAuthSuccess
} );
