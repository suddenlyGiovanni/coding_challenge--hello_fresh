const jwt = require( 'jsonwebtoken' );
const User = require( 'mongoose' ).model( 'User' );
const PassportLocalStrategy = require( 'passport-local' ).Strategy;
const secrets = require( '../../config/secrets.json' );

// CONFIGURE PASSWORD LOCAL STRATEGY:
const localStrategyConfig = {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true,
};

// RETURN THE PASSPORT LOCAL STRATEGY OBJECT.
module.exports = new PassportLocalStrategy( localStrategyConfig, ( req, email, password, done ) => {
    const userData = {
        email: email.trim(),
        password: password.trim()
    };

    // FIND A USER BY EMAIL ADD.
    return User.findOne( { email: userData.email } )

        .then( user => {

            if ( !user ) {
                const error = new Error( 'Incorrect email or password' );
                error.name = 'IncorrectCredentialsError';
                return done( error );
            }

            // CHECK FOR MATCHING HASHED PASSWORD IN DB
            return user.comparePassword( userData.password, ( isMatch ) => {

                if ( !isMatch ) {
                    const error = new Error( 'Incorrect email or password' );
                    error.name = 'IncorrectCredentialsError';
                    return done( error );
                }

                const payload = {
                    sub: user._id
                };

                // CREATE A TOKE STRING
                const token = jwt.sign( payload, secrets.jwtSecret );
                const data = {
                    name: user.name
                };

                return done( null, token, data );
            } ); // TODO: catch comparePassword error here?

        } )

        .catch( err => done( err ) );
} );
