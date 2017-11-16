const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );

// USER MODEL SCHEMA
const UserSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        unique: false,
    },
    lastName: {
        type: String,
        unique: false,
    },
    bday: {
        type: Date
    },
    email: {
        type: String,
        index: {
            unique: true
        },
        lowercase: true,
    },
    password: String,
    recipes: []
} );
// ATTACH A COMPAREPASSWORD METHOD TO USER SCHEMA.

// Compare the passed password with the value in the database. A model method.

UserSchema.methods.comparePassword = function comparePassword( password, callback ) {
    // Load hash from password DB.
    bcrypt.compare( password, this.password, callback );
};

// BEFORE SAVING THE USER - HASH THE PASSWORD WITH bcrypt
UserSchema.pre( 'save', function saveHook( next ) {
    const user = this;
    console.log( `model - user.js - UserSchema.pre("save")
    user: ${user} \n`);

    // proceed further only if the password is modified or the user is new
    if ( !user.isModified( 'password' ) ) {
        // console.log('model - user.js - UserSchema.pre("save") - !user.isModified( "password" ): ', user.password);

        return next();
    }

    return bcrypt.genSalt( ( saltError, salt ) => {

        if ( saltError ) {
            return next( saltError );
        }

        return bcrypt.hash( user.password, salt, ( hashError, hash ) => {
            if ( hashError ) {
                return next( hashError );
            }

            // replace a password string with hash value
            user.password = hash;
            // console.log('model - user.js - UserSchema.pre("save") - bcrypt.hash: ', user.password);

            return next();
        } );
    } );
} );

module.exports = mongoose.model( 'User', UserSchema );
