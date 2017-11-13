// higher order component that wrap LOGIN && REGISTRATION
// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { postSignupForm, postLoginForm } from '../actions/authentication';



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
            // console.log( 'fn: handleSubmit - this.url', this.url );
            ( this.url === '/auth/signup' )
                ? this.props.postSignupForm( this.state )
                : this.props.postLoginForm( this.state );
        }
        render() {

            return (
                <Component
                    signupError={this.props.signupError}
                    loginError={this.props.loginError}
                    handleInput={( e ) => this.handleInput( e )}
                    handleSubmit={( e ) => this.handleSubmit( e )}/>
            );
        }
    }

    /* REDUX */
    const mapStateToProps = state => {
        return {
            signupError: state.signupError,
            loginError: state.loginError
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            postSignupForm: signupForm  => dispatch( postSignupForm( signupForm ) ),
            postLoginForm: loginForm  => dispatch( postLoginForm( loginForm ) )
        };
    };
    return connect( mapStateToProps, mapDispatchToProps )( AuthForm );
};
export default FormWrapper;
