import axios from '../utils/axios';

// AUTH ACTION CREATORS:
export function signupHasErrored( error ) {
    console.log( 'REDUX - ACTION - fn: signupHasErrored - error = ', error );
    return { type: 'SIGNUP_HAS_ERRORED', singupError: error };
}

export function loginHasErrored( error ) {
    console.log( 'REDUX - ACTION - fn: loginHasErrored - error = ', error );
    return { type: 'LOGIN_HAS_ERRORED', loginError: error };
}

export function userAuthSuccess( user ) {
    console.log( 'REDUX - ACTION - fn: userAuthSuccess - data = ', user );
    return { type: 'USER_AUTH_SUCCESS', user };
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// AXIOS / FETCH ACTION CREATORS

export function postSingupForm( signupForm ) {
    console.log( 'REDUX - ACTION - fn: postSingupForm - signupForm = ', signupForm );
    // BUG: not yet able to enter next code block!!!
    return dispatch => {
        console.log( 'REDUX - ACTION - fn: postSingupForm - inside dispatch' );
        return axios
            .post( '/auth/signup', signupForm )
            .then( response => {
                console.log( 'REDUX - ACTION - fn: postSingupForm - inside axios.post response' );

                if ( response.status !== 200 ) {
                    throw Error( response.data );
                }
                return response.data;
            } )
            .then( authData => dispatch( userAuthSuccess( authData ) ) )
            .catch( err => dispatch( signupHasErrored( err ) ) );
    };
}

// export const postSingupForm = ( signupForm ) => dispatch => {
//     console.log( 'REDUX - ACTION - fn: postSingupForm - inside dispatch' );
//     axios.post( '/auth/signup', signupForm )
//         .then( response => {
//             console.log( 'REDUX - ACTION - fn: postSingupForm - inside axios.post response' );
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
