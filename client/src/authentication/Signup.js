// REACT
import React from 'react';

// higher order component that wrap LOGIN && REGISTRATION
import FormWrapper from './form-wrapper';

const Signup = ( { handleInput, handleSubmit, signupError} ) => {

    return (
        <div>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-xs-12 col-md-8'>
                    <p>Register with us today to receive regular updates from the HelloFresh farm. Inspiring recipe ideas, the newest food trends, and unique HelloFresh promotions are waiting for you.</p>
                </div>
                <div className='col-md-2'></div>
            </div>

            <div className='row'>
                <div className='col-xs-1 col-md-3'></div>

                <div className='col-xs-10 col-md-6'>

                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <h2 className='col-xs-12'>Register</h2>
                            {signupError && <div>Something went wrong. Please try again!</div>}
                            <label
                                htmlFor='firstName'
                                className='col-xs-12'>First Name</label>
                            <input
                                className='col-xs-12'
                                id='firstName'
                                type="text"
                                name='firstName'
                                placeholder='john'
                                autoComplete="given-name"
                                required
                                onChange={handleInput} />


                            <label
                                htmlFor='lastName'
                                className='col-xs-12'>Last Name</label>
                            <input
                                className='col-xs-12'
                                id='lastName'
                                type="text"
                                name='lastName'
                                placeholder='doe'
                                autoComplete="given-name"
                                required
                                onChange={handleInput} />


                            <label
                                htmlFor='email'
                                className='col-xs-12'>Email</label>
                            <input
                                className='col-xs-12'
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
                                className='col-xs-12'
                                id='password'
                                type='password'
                                name='password'
                                autoComplete='new-password'
                                required
                                onChange={handleInput} />

                            <label
                                htmlFor='bday'
                                className='col-xs-12'>Date of Birth</label>

                            <input
                                className='col-xs-12'
                                type='date'
                                id='bday'
                                name='bday'
                                pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
                                onChange={handleInput} />

                            <input
                                className='col-xs-12'
                                type='submit' value='Register'/>
                        </div>

                    </form>
                </div>

                <div className='col-xs-1 col-md-3'></div>

            </div>
        </div>
    );
};

export default FormWrapper( Signup, '/auth/signup' );
