import axios from '../utils/axios';
import Auth from '../utils/Auth';
import { browserHistory } from 'react-router';

export const SIGNUP_HAS_ERRORED = 'SIGNUP_HAS_ERRORED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_HAS_ERRORED = 'LOGIN_HAS_ERRORED';
export const LOAD_USER = 'LOAD_USER';

// AUTH ACTION CREATORS:
export const signupHasErrored = error => ( { type: SIGNUP_HAS_ERRORED, signupError: error, } );

export const signupSuccess = message => ( { type: SIGNUP_SUCCESS, signupSucces: message, } );

export const loginHasErrored = error => ( { type: LOGIN_HAS_ERRORED, loginError: error, } );

export const loadUser = user => {
    // change the current URL to '/login'
    browserHistory.push( '/' );
    return { type: LOAD_USER, user };
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// THUNK ACTION CREATORS:

export const postSignupForm = signupForm => {
    return dispatch => {
        axios
            .post( '/auth/signup', signupForm )
            .then( response => {
                // console.log( 'REDUX - ACTION - fn: postSignupForm - inside axios.post response', response );

                if ( response.status !== 200 ) {
                    throw Error( response );
                }
                if ( response.data.success ) {
                    // change the current URL to '/login'
                    browserHistory.push( '/login' );
                }
                // console.log( response );
                return response.data.message;
            } )
            .then( signupSuccesMess => dispatch( signupSuccess( signupSuccesMess ) ) )
            .catch( err => dispatch( signupHasErrored( err.response.data ) ) );
    };
};


export const postLoginForm = loginForm => {
    // console.log( 'REDUX - ACTION - fn: postLoginForm - loginForm ', loginForm );

    return dispatch => {

        return axios
            .post( '/auth/login', loginForm )
            .then( response => {
                // console.log( 'REDUX - ACTION - fn: postLoginForm - axios.post response ', response );
                if ( response.status !== 200 ) {
                    throw Error( response );
                }
                // save the token to the localStorage
                Auth.authenticateUser( response.data.token );
                return response.data.user;
            } )
            .then( user => dispatch( loadUser( user ) ) )
            .catch( err => dispatch( loginHasErrored( err.response.data ) ) );
    };
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
