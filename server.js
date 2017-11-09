const express = require( 'express' ),
    path = require( 'path' ),
    logger = require( 'morgan' ),
    bodyParser = require( 'body-parser' ),
    cookieParser = require( 'cookie-parser' ),
    cookieSession = require( 'cookie-session' ),
    compression = require( 'compression' ),
    csrf = require( 'csurf' );
// favicon = require( 'serve-favicon' );

// const jwt = require( 'express-jwt' );
// const jwks = require( 'jwks-rsa' );
// const cors = require( 'cors' );


const index = require( './routes/index' );
const api = require( './routes/api' )

// EXPRESS
const app = express();

// MIDDLEWARE __________________________________________________________________

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// HTTP request logger middleware
app.use( logger( 'dev' ) );

// compression gZip response before sending them
app.use( compression() );

// BODY PARSER
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

// app.use( cors() );

// const authCheck = jwt( {
//     secret: jwks.expressJwtSecret( {
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         // YOUR-AUTH0-DOMAIN name e.g https://prosper.auth0.com
//         jwksUri: "{YOUR-AUTH0-DOMAIN}/.well-known/jwks.json"
//     } ),
//     // This is the identifier we set when we created the API
//     audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
//     issuer: '{YOUR-AUTH0-DOMAIN}',
//     algorithms: [ 'RS256' ]
// } );



// COOKIE PARSER
app.use( cookieParser() );

// COOKIE SESSION
app.use( cookieSession( {
    secret: require( './config/secrets.json' ).sessionSecret,
    maxAge: 1000 * 60 * 60 * 24 * 14
} ) );

// CSURF
app.use( csrf() );

app.use( ( req, res, next ) => {
    res.cookie( '__csrf__', req.csrfToken() );
    next();
} );


// set the public folder where client stuff lives
// app.use( express.static( path.join( __dirname, 'public' ) ) );
// Express only serves static assets in production
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
}
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// error handler
app.use( function ( err, req, res, next ) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get( 'env' ) === 'development' ? err : {};

    // render the error page
    res.status( err.status || 500 );
    console.log( err );
    res.sendStatus( 500 );
} );

// ROUTING _____________________________________________________________________
app.use( '/', index );
app.use( '/api/', api );
// if no route match then..
app.get( '*', ( req, res ) => {
    res.sendFile( path.join( __dirname, './client/public' ) );
} );




module.exports = app;
