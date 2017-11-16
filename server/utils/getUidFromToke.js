const jwt = require( 'jsonwebtoken' );
const secrets = require( '../../config/secrets.json' );

module.exports = req => {
    // get the last part from a authorization header string like "bearer token-value"
    const token = req.headers.authorization.split( ' ' )[ 1 ];
    return jwt.verify( token, secrets.jwtSecret, ( err, decode ) => {
        if (err) { console.log(err); }
        const userId = decode.sub;
        return userId;
    });
};
