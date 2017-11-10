import React from 'react';

const Registration = () => {
    return(
        <div>
            <h1>Register</h1>
            <form>
                <label for='firstName'>First name</label>
                <input
                    id='firstName'
                    type="text"
                    name='firstName'
                    placeholder='john'
                    autoComplete="given-name"
                    required />
                <br />

                <label for='lastName'>Last name</label>
                <input
                    id='lastName'
                    type="text"
                    name='lastName'
                    placeholder='doe'
                    autoComplete="given-name"
                    required />
                <br />

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
                    autoComplete='new-password'
                    required />

                <br />

                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Registration;
