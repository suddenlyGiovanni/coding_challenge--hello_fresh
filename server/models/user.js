const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );

// USER MODEL SCHEMA
const UserSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        unique: false
    },
    lastName: {
        type: String,
        unique: false
    },
    bday: {
        type: Date
    },
    email: {
        type: String,
        index: {
            unique: true
        },
        lowercase: true
    },
    password: String,
} );
// ATTACH A COMPAREPASSWORD METHOD TO USER SCHEMA.

// Compare the passed password with the value in the database. A model method.
const comparePassword = ( password, callback ) => {
    // Load hash from password DB.
    bcrypt.compare( password, this.password, callback );
};

UserSchema.methods.comparePassword = comparePassword;

// BEFORE SAVING THE USER - HASH THE PASSWORD WITH bcrypt
UserSchema.pre( 'save', function saveHook( next ) {
    const user = this;

    // proceed further only if the password is modified or the user is new
    if ( !user.isModified( 'password' ) ) {
        return next();
    }

    return bcrypt.genSalt()
        .then( salt => bcrypt.hash( user.password, salt ) )
        .then( hash => {
            // replace a password string with hash value
            user.password = hash;
            return next();
        } )
        .catch( err => console.error( err ) );
} );

module.exports = mongoose.model( 'User', UserSchema );
