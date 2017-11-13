import { combineReducers } from 'redux';
// IMPORT THE INDIVIDUAL REDUCERS:
import { signupHasErrored, loginHasErrored, } from './authentication';
import { recipes, cuisineTypes, } from './hellofresh';
import { user } from './user';

export default combineReducers( {
    user,
    signupHasErrored,
    loginHasErrored,
    recipes,
    cuisineTypes
} );
