import axios from '../utils/axios';

// ACTION CREATORS:

export const signUp = signUpForm => {
    console.log( 'REDUX - ACTION - fn: signUpForm' );

    return axios.post( '/auth/register', signUpForm )

        .then( resp => {
            console.log( 'REDUX - ACTION - fn: signUpForm - axios resp :', resp.data );
            // location.replace( '/recipes' );
            return {
                type: 'SUBMIT_FORM_DATA',
                user: resp.data
            };
        } )

        .catch( err => console.error( err.stack ) );
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const logIn = logInForm => {
    console.log( 'REDUX - ACTION - fn: logInForm' );

    return axios.post( '/auth/login' , logInForm )

        .then( resp => {
            console.log( 'REDUX - ACTION - fn: logInForm - axios resp :', resp.data );
            // location.replace( '/recipes' );
            return {
                type: 'SUBMIT_FORM_DATA',
                user: resp.data
            };
        } )

        .catch( err => console.error( err.stack ) );
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -