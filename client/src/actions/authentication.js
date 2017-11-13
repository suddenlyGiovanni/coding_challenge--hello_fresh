import axios from '../utils/axios';

export const SIGNUP_HAS_ERRORED = 'SIGNUP_HAS_ERRORED';
export const LOGIN_HAS_ERRORED = 'LOGIN_HAS_ERRORED';
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS';


// AUTH ACTION CREATORS:
export function signupHasErrored( error ) {
    console.log( 'REDUX - ACTION - fn: signupHasErrored - error = ', error );
    return { type: SIGNUP_HAS_ERRORED, singupError: error };
}

export function loginHasErrored( error ) {
    console.log( 'REDUX - ACTION - fn: loginHasErrored - error = ', error );
    return { type: LOGIN_HAS_ERRORED, loginError: error };
}

export function userAuthSuccess( user ) {
    console.log( 'REDUX - ACTION - fn: userAuthSuccess - data = ', user );
    return { type: USER_AUTH_SUCCESS, user };
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// THUNK ACTION CREATORS:

export function postSignupForm( signupForm ) {
    console.log( 'REDUX - ACTION - fn: postSignupForm - signupForm = ', signupForm );
    // BUG: not yet able to enter next code block!!!
    return (dispatch) => {
        console.log( 'REDUX - ACTION - fn: postSignupForm - inside dispatch' );
        axios.post( '/auth/signup', signupForm )
            .then( response => {
                console.log( 'REDUX - ACTION - fn: postSignupForm - inside axios.post response' );

                if ( response.status !== 200 ) {
                    throw Error( response.data );
                }
                return response.data;
            } )
            .then( authData => dispatch( userAuthSuccess( authData ) ) )
            .catch( err => dispatch( signupHasErrored( err ) ) );
    };
}

// export const postSignupForm = ( signupForm ) => dispatch => {
//     console.log( 'REDUX - ACTION - fn: postSignupForm - inside dispatch' );
//     axios.post( '/auth/signup', signupForm )
//         .then( response => {
//             console.log( 'REDUX - ACTION - fn: postSignupForm - inside axios.post response' );
//
//             if ( response.status !== 200 ) {
//                 throw Error( response.data );
//             }
//             return response.data;
//         } )
//         .then( authData => dispatch( userAuthSuccess( authData ) ) )
//         .catch( err => dispatch( signupHasErrored( err ) ) );
// };

export function postLoginForm( loginForm ) {
    console.log( 'REDUX-THUNK - ACTION - fn: postLoginForm - loginForm = ', loginForm );
    // BUG: not yet able to enter next code block!!!
    return dispatch => {
        console.log( 'REDUX - ACTION - fn: postLoginForm - inside dispatch' );

        return axios
            .post( '/auth/login', loginForm )
            .then( response => {
                if ( response.status !== 200 ) {
                    throw Error( response.data );
                }
                return response.data;
            } )
            .then( authData => dispatch( userAuthSuccess( authData ) ) )
            .catch( err => dispatch( loginHasErrored( err ) ) );
    };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
