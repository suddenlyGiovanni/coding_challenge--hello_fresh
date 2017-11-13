import { SIGNUP_HAS_ERRORED, SIGNUP_SUCCESS, LOGIN_HAS_ERRORED } from '../actions/authentication';

export const signupHasErrored = ( state = false, action ) => {
    switch ( action.type ) {
        case SIGNUP_HAS_ERRORED:
            return null;
        default:
            return state;
    }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const signupSuccess = ( state = false, action ) => {
    switch ( action.type ) {
        case SIGNUP_SUCCESS:
            return null;
        default:
            return state;
    }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const loginHasErrored = ( state = false, action ) => {
    switch ( action.type ) {
        case LOGIN_HAS_ERRORED:
            return null;
        default:
            return state;
    }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
