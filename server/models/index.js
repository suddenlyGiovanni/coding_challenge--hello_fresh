const mongoose = require( 'mongoose' );

module.exports.connect = uri => {
    // MONGOOSE CONNECTION
    mongoose.connect( uri, { useMongoClient: true } );
    // USE NATIVE PROMISES
    mongoose.Promise = global.Promise;

    // HANDLE ERRORS
    mongoose
        .connection
        .on( 'error', err => {
            console.error( `Mongoose connection error: ${ err }` );
            process.exit( 1 );
        } );

    // LOAD MODELS
    require( './user' );
};
