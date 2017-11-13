import axios from '../utils/axios';
import Auth from '../utils/Auth';
import { browserHistory } from 'react-router'

export const SIGNUP_HAS_ERRORED = 'SIGNUP_HAS_ERRORED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_HAS_ERRORED = 'LOGIN_HAS_ERRORED';
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS';

// AUTH ACTION CREATORS:
export function signupHasErrored( error ) {
    return { type: SIGNUP_HAS_ERRORED, signupError: error, };
}

export function signupSuccess( message ) {
    return { type: SIGNUP_SUCCESS, signupSucces: message, };
}

export function loginHasErrored( error ) {
    return { type: LOGIN_HAS_ERRORED, loginError: error, };
}

export function userAuthSuccess( user ) {
    // change the current URL to '/login'
    browserHistory.push('/recipes');
    return { type: USER_AUTH_SUCCESS, user, };
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// THUNK ACTION CREATORS:

export function postSignupForm( signupForm ) {
    return  dispatch  => {
        axios
            .post( '/auth/signup', signupForm )
            .then( response => {
                console.log( 'REDUX - ACTION - fn: postSignupForm - inside axios.post response', response );

                if ( response.status !== 200 ) {
                    throw Error( response );
                }
                if ( response.data.success ) {
                    // change the current URL to '/login'
                    browserHistory.push('/login');
                }
                console.log(response);
                return response.data.message;
            } )
            .then( signupSuccesMess => dispatch( signupSuccess( signupSuccesMess ) ) )
            .catch( err => dispatch( signupHasErrored( err.response.data ) ) );
    };
}

export function postLoginForm( loginForm ) {
    console.log( 'REDUX - ACTION - fn: postLoginForm - loginForm ', loginForm );

    return dispatch => {

        return axios
            .post( '/auth/login', loginForm )
            .then( response => {
                console.log( 'REDUX - ACTION - fn: postLoginForm - axios.post response ', response );
                if ( response.status !== 200 ) {
                    throw Error( response );
                }
                // save the token to the localStorage
                Auth.authenticateUser(response.data.token);
                return response.data.user;
            } )
            .then( authData => dispatch( userAuthSuccess( authData ) ) )
            .catch( err => dispatch( loginHasErrored( err.response.data ) ) );
    };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
