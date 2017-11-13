import {
    SIGNUP_HAS_ERRORED,
    LOGIN_HAS_ERRORED,
    USER_AUTH_SUCCESS } from '../actions/authentication';

export function signupHasErrored( state = false, action ) {
    switch ( action.type ) {
        case SIGNUP_HAS_ERRORED:
            return action.singupError;
        default:
            return state;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function loginHasErrored( state = false, action ) {
    switch ( action.type ) {
        case LOGIN_HAS_ERRORED:
            return action.loginError;
        default:
            return state;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function userAuthSuccess( state = {}, action ) {
    switch ( action.type ) {
        case USER_AUTH_SUCCESS:
            return action.user;
        default:
            return state;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
