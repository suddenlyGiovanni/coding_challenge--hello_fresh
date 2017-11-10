import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label for='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    name='email'
                    minlength='3'
                    maxLength='64'
                    placeholder='username@domain.com'
                    autoComplete='email'
                    required />
                <br />


                <label for='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    autoComplete='current-password'
                    required />

                <br />

                <button type='submit'>Login</button>
            </form>
        </div>
    );
};


export default Login;
