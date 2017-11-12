const jwt = require( 'jsonwebtoken' );
const User = require( 'mongoose' ).model( 'User' );
const secrets = require( '../../config/secrets.json' );

// AUTHENTICAION CHECKER MIDDLEWARES

module.exports = ( req, res, next ) => {

    if ( !req.headers.authorization ) {
        return res
            .status( 401 )
            .end();
    }

    // get the last part from a authorization header string like "bearer token-value"
    const token = req.headers.authorization.split( ' ' )[ 1 ];

    // decode the token using a secret key-phrase
    return jwt.verify( token, secrets.jwtSecrets, ( err, decode ) => {
        // the 401 code is for unauthorized status
        if ( err ) { return res.status( 401 ).end(); }
        const userId = decode.sub;

        // check if a user exists
        return User.findById( userId )

            .then( user => {
                if ( !user ) { return res.status( 401 ).end(); }
                return next();
            } )

            .catch( () => res.status( 401 ).end());
    } );

};
