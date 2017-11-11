import axios from '../utils/axios';


export const submitFormData = ( url, formData ) => {
    console.log( 'REDUX - ACTION - fn: submitFormData' );
    return axios.post( url, formData )

        .then( resp => {
            console.log( 'REDUX - ACTION - fn: submitFormData - axios resp :', resp );

            // const data = resp.data;
            // console.log( 'formWrapper - fn: Axios.post - data: ', data );
            // if ( !data.success ) {
            //     this.setState( { error: true } );
            // }

            // else {
            //     this.setState({ success: true });
            // }

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
