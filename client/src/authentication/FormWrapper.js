// higher order component that wrap LOGIN && REGISTRATION

// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { submitFormData } from '../actions/actions';


// Higher Order component
const FormWrapper = ( Component, url ) => {

    class AuthForm extends React.Component {

        constructor( props ) {
            super( props );
            this.state = {};
            this.url = url;
        }

        handleInput( e ) {
            // gather value from changed form field
            this.setState( {
                [ e.target.name ]: e.target.value
            } );
        }

        handleSubmit( e ) {
            e.preventDefault();
            // dispatch a redux action to make POST request to this.url and handle response
            // submitFormData( this.url, this.state );
            submitFormData( this.url, this.state );
        }

        render() {
            return (
                <Component
                    error={this.state.error}
                    handleInput={(e)=>this.handleInput(e)}
                    handleSubmit={(e)=>this.handleSubmit(e)}/>
            );
        }
    }


    /* REDUX */
    const mapDispatchToProps = dispatch => ( {
        submitFormData: ( url, formData ) => dispatch( submitFormData( url, formData ) )
    } );

    return connect( mapDispatchToProps )( AuthForm );

};

export default FormWrapper;
