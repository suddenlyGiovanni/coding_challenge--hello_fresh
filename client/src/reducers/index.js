import { combineReducers } from 'redux';
// IMPORT THE INDIVIDUAL REDUCERS:
import { signupHasErrored, loginHasErrored, userAuthSuccess } from './authentication';
import { loadNewRecipes, loadCuisineTypes, } from './hellofresh';

export default combineReducers( {
    signupHasErrored,
    loginHasErrored,
    userAuthSuccess,
    loadNewRecipes,
    loadCuisineTypes,
} );
