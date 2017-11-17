const jwt = require( 'jsonwebtoken' );
const User = require( 'mongoose' ).model( 'User' );
const PassportLocalStrategy = require( 'passport-local' ).Strategy;
// const secrets = require( '../../config/secrets.json' );


const jwtSecret = process.env.JWT_SECRET || require( '../../config/secrets.json' ).jwtSecret;
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
            // console.log('local-login User.findOne - err', err);
            return done( err );
        }
        if ( !user ) {
            // console.log('local-login User.findOne - !user', user);
            const error = new Error( 'Incorrect email or password' );
            error.name = 'IncorrectCredentialsError';
            return done( error );
        }
        // CHECK FOR MATCHING HASHED PASSWORD IN DB
        return user.comparePassword( userData.password, ( passwordErr, isMatch ) => {

            // console.log('local-login User.findOne - user.comparePassword', user);

            if ( passwordErr ) {
                // console.log('local-login User.findOne - user.comparePassword - passErr', passwordErr);
                return done( passwordErr );
            }

            if ( !isMatch ) {
                // console.log('local-login User.findOne - user.comparePassword - !isMatch');
                const error = new Error( 'Incorrect email or password' );
                error.name = 'IncorrectCredentialsError';
                return done( error );
            }

            // console.log('local-login User.findOne - user.comparePassword - isMatch');

            const payload = {
                sub: user._id
            };

            // CREATE A TOKE STRING
            const token = jwt.sign( payload, jwtSecret );
            const data = {
                firstName: user.firstName,
                lastName: user.lastName,
                uid: user._id,
                recipes: user.recipes || null
            };

            return done( null, token, data );
        } );
    } );
} );
