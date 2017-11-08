const express = require( 'express' ),
    // path = require( 'path' ),
    logger = require( 'morgan' ),
    bodyParser = require( 'body-parser' ),
    cookieParser = require( 'cookie-parser' ),
    cookieSession = require( 'cookie-session' ),
    compression = require( 'compression' ),
    csrf = require( 'csurf' );
// favicon = require( 'serve-favicon' );

const index = require( './routes/index' );

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
app.use( bodyParser.urlencoded( { extended: false } ) );

// COOKIE PARSER
app.use( cookieParser() );

// COOKIE SESSION
app.use( cookieSession( {
    secret: require( './config/secrets.json' ).sessionSecret,
    maxAge: 1000 * 60 * 60 * 24 * 14
} ) );


// set the public folder where client stuff lives
// app.use( express.static( path.join( __dirname, 'public' ) ) );
// Express only serves static assets in production
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
}

// CSURF
app.use( csrf() );

app.use( ( req, res, next ) => {
    res.cookie( '__csrf__', req.csrfToken() );
    next();
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// ROUTING _____________________________________________________________________
app.use( '/', index );

// catch 404 and forward to error handler
app.use( function ( req, res, next ) {
    var err = new Error( 'Not Found' );
    err.status = 404;
    next( err );
} );

// error handler
app.use( function ( err, req, res, next ) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get( 'env' ) === 'development' ? err : {};

    // render the error page
    res.status( err.status || 500 );
    res.send( JSON.stringify( err ) );
} );

module.exports = app;
