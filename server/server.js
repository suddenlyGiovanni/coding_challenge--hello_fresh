const express = require( 'express' ),
    path = require( 'path' ),
    logger = require( 'morgan' ),
    bodyParser = require( 'body-parser' ),
    passport = require('passport'),
    compression = require( 'compression' );

// const pathToIndex = process.env.NODE_ENV ? '../client/build' : '../client/public';

const mongoUri = process.env.MONGODB_URI || require('../config/secrets.json').dbUri;
// CONNECT TO THE DATABASE AND LOAD MODELS
require('./models/index').connect(mongoUri);

// EXPRESS
const app = express();

// MIDDLEWARES:

// set the public folder where client stuff lives
// Express only serves static assets in production
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( '../client/build' ) );
}

// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


// MORGAN HTTP LOGGER
app.use( logger( 'dev' ) );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


// COMPRESSION GZIP response before sending them
app.use( compression() );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


// BODY PARSER
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


// PASSPORT
app.use(passport.initialize());


// PASSPORT STRATEGIES
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


// AUTHENTICAION CHECKER
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


// ERROR HANDLER
app.use( function ( err, req, res, next ) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get( 'env' ) === 'development' ? err : {};

    res.status( err.status || 500 );
    console.log( err );
    res.sendStatus( 500 );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


// ROUTING _____________________________________________________________________
/* SERVE THE AUTHENTICATION ROUTES */
app.use( '/auth', require( './routes/auth' ) );
/* SERVE THE API ROUTES */
app.use( '/api', require( './routes/api' ) );


/* CHATCH ALL ROUTES */
// app.all( '*', ( req, res ) => {
//     res.sendFile( path.join( __dirname, pathToIndex ) );
// } );


module.exports = app;
