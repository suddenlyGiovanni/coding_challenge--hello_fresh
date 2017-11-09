const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;


const UserSchema = new Schema( {
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    firstName: {
        type: String,
        unique: false
    },
    lastName: {
        type: String,
        unique: false
    },

} );


module.exports.UserSchema = UserSchema;
