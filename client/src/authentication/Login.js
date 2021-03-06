// REACT
import React from 'react';
import { Link } from 'react-router';

// higher order component that wrap LOGIN && REGISTRATION
import FormWrapper from './form-wrapper';

import './authentication.css';

const Login = props => {

    // console.log( 'Login - RENDER - props: ', props );
    const {
        handleInput,
        handleSubmit,
        signupSuccess,
        loginError } = props;


    return (
        <div>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-xs-12 col-md-8'>
                    <p className='lead'>Register with us today to receive regular updates from the HelloFresh farm. Inspiring recipe ideas, the newest food trends, and unique HelloFresh promotions are waiting for you.</p>
                </div>

                <div className='col-md-2'></div>
            </div>

            <div className='row'>
                <div className='col-xs-1 col-md-3'></div>

                <div className='col-xs-10 col-md-6'>

                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <h4 className='col-xs-12'>Log In</h4>
                            {
                                loginError &&
                                <p className='col-xs-12 lead text-danger'>
                                    <span>{loginError.message}</span>
                                </p>
                            }
                            {
                                signupSuccess &&
                                <p className='col-xs-12 lead text-success'>
                                    <span>{signupSuccess.message}</span>
                                </p>
                            }
                            <label
                                htmlFor='email'
                                className='col-xs-12'>Email</label>
                            <input
                                className='col-xs-12 form-control'
                                id='email'
                                type='email'
                                name='email'
                                minLength='3'
                                maxLength='64'
                                placeholder='username@domain.com'
                                autoComplete='email'
                                required
                                onChange={handleInput} />

                            <label
                                htmlFor='password'
                                className='col-xs-12'>Password</label>
                            <input
                                className='col-xs-12 form-control'
                                id='password'
                                type='password'
                                name='password'
                                autoComplete='current-password'
                                required
                                onChange={handleInput} />

                            {/* <input
                                className='col-xs-12'
                                type='submit' value='Login'/> */}

                            <button className='col-xs-12 btn'
                                type='submit'>
                                Login
                            </button>

                            <div className='col-xs-12 or-container'>
                                <div>
                                    <div className='or-separator'>
                                        <span>or</span>
                                        <hr/>
                                    </div>
                                </div>

                                <div className='or-action'>
                                    <span>New user?</span>
                                    <Link to='/signup'>Sign up</Link>
                                </div>
                            </div>

                        </div>

                    </form>
                </div>
                <div className='col-xs-1 col-md-3'></div>

            </div>

        </div>
    );
};

export default FormWrapper( Login, '/auth/login' );
