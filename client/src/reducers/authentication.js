import { SIGNUP_HAS_ERRORED, SIGNUP_SUCCESS, LOGIN_HAS_ERRORED, } from '../actions/authentication';

export const signupHasErrored = ( state = false, action ) => {
    switch ( action.type ) {

        case SIGNUP_HAS_ERRORED:
            state = Object.assign( {}, state, action.signupError );
            break;

        default:
            return state;
    }
    return state;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const signupSuccess = ( state = false, action ) => {
    switch ( action.type ) {

        case SIGNUP_SUCCESS:
            state = Object.assign( {}, state, { message : action.signupSuccess } );
            break;

        default:
            return state;
    }
    return state;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const loginHasErrored = ( state = false, action ) => {
    switch ( action.type ) {
        case LOGIN_HAS_ERRORED:
            state = Object.assign( {}, state, action.loginError );
            break;

        default:
            return state;
    }
    return state;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
