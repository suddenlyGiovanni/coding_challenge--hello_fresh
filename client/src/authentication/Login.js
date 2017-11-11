import React from 'react';

const Login = () => {
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

                    <form>
                        <div className='row'>
                            <h2 className='col-xs-12'>Log In</h2>
                            <label
                                for='email'
                                className='col-xs-12'>Email</label>
                            <input
                                className='col-xs-12'
                                id='email'
                                type='email'
                                name='email'
                                minlength='3'
                                maxLength='64'
                                placeholder='username@domain.com'
                                autoComplete='email'
                                required />

                            <label
                                for='password'
                                className='col-xs-12'>Password</label>
                            <input
                                className='col-xs-12'
                                id='password'
                                type='password'
                                name='password'
                                autoComplete='current-password'
                                required />

                            <input
                                className='col-xs-12'
                                type='submit' value='Login'/>

                        </div>

                    </form>
                </div>
                <div className='col-xs-1 col-md-3'></div>

            </div>

        </div>
    );
};


export default Login;
