const User = require( 'mongoose' ).model( 'User' );
const PassportLocalStrategy = require( 'passport-local' ).Strategy;

// CONFIGURE PASSWORD LOCAL STRATEGY:
const localStrategyConfig = {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
};

// RETURN THE PASSPORT LOCAL STRATEGY OBJECT.
module.exports = new PassportLocalStrategy( localStrategyConfig, ( req, email, password, done ) => {

    const userData = {
        email: email.trim(),
        password: password.trim(),
        firstName: req.body.firstName.trim(),
        lastName: req.body.lastName.trim(),
        bday: req.body.bday,
    };

    // CREATE A NEW USER DOCUMENT WITH USERDATA
    const newUser = new User( userData );

    newUser.save( err => {
        return ( err )
            ? done( err )
            : done( null );
    } );
} );
