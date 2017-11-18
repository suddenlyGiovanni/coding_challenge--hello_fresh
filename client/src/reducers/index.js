import { combineReducers } from 'redux';
// IMPORT THE INDIVIDUAL REDUCERS:
import { signupHasErrored, signupSuccess, loginHasErrored } from './authentication';
import { recipes, cuisineTypes } from './hellofresh';
import { user } from './user';

export default combineReducers( {
    user,
    signupHasErrored,
    signupSuccess,
    loginHasErrored,
    recipes,
    cuisineTypes,
} );
