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
        password: password.trim(),
    };

    // DB FIND A USER BY EMAIL
    return User.findOne( {
        email: userData.email
    }, ( err, user ) => {
        if ( err ) {
            return done( err );
        }
        if ( !user ) {
            const error = new Error( 'Incorrect email or password' );
            error.name = 'IncorrectCredentialsError';
            return done( error );
        }
        // CHECK FOR MATCHING HASHED PASSWORD IN DB
        return user.comparePassword( userData.password, ( passwordErr, isMatch ) => {
            if ( passwordErr ) {
                return done( passwordErr );
            }

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
        } );
    } );
} );
