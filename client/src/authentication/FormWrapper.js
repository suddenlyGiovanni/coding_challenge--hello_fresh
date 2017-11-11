// higher order component that wrap LOGIN && REGISTRATION
// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { signUp, logIn } from '../actions/actions';
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
            console.log( 'fn: handleSubmit - this.state', this.state );
            ( this.url === '/auth/register' )
                ? signUp( this.state )
                : logIn( this.state );
        }
        render() {
            return ( <Component error={this.props.error} handleInput={( e ) => this.handleInput( e )} handleSubmit={( e ) => this.handleSubmit( e )}/> );
        }
    }

    /* REDUX */
    const mapStateToProps = state => {
        return { error: state.error };
    };

    const mapDispatchToProps = dispatch => ( {
        signUp: signUpForm  => dispatch( signUp( signUpForm ) ),
        logIn: logInForm  => dispatch( logIn( logInForm ) )
    } );
    return connect( mapStateToProps, mapDispatchToProps )( AuthForm );
};
export default FormWrapper;
