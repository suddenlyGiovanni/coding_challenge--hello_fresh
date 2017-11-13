import {
    SIGNUP_HAS_ERRORED,
    SIGNUP_SUCCESS,
    LOGIN_HAS_ERRORED,
    USER_AUTH_SUCCESS } from '../actions/authentication';

export function signupHasErrored( state = false, action ) {
    switch ( action.type ) {
        case SIGNUP_HAS_ERRORED:
            return null;
        default:
            return state;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function signupSuccess( state = false, action ) {
    switch ( action.type ) {
        case SIGNUP_SUCCESS:
            return null;
        default:
            return state;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function loginHasErrored( state = false, action ) {
    switch ( action.type ) {
        case LOGIN_HAS_ERRORED:
            return null;
        default:
            return state;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function userAuthSuccess( state = {}, action ) {
    switch ( action.type ) {
        case USER_AUTH_SUCCESS:
            return null;
        default:
            return state;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
