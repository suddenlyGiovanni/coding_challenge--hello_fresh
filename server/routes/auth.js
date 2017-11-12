// ROUTE: --> /auth/
const router = require( 'express' ).Router();
const validator = require( 'validator' );


/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
const validateRegisterForm = payload => {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if ( !payload || typeof payload.email !== 'string' || !validator.isEmail( payload.email ) ) {
        isFormValid = false;
        errors.email = 'Please provide a correct email address.';
    }

    if ( !payload || typeof payload.password !== 'string' || payload.password.trim().length < 3 ) {
        isFormValid = false;
        errors.password = 'Password must have at least 3 characters.';
    }

    if ( !payload || typeof payload.firstName !== 'string' || payload.firstName.trim().length === 0 ) {
        isFormValid = false;
        errors.firstName = 'Please provide your first name.';
    }

    if ( !payload || typeof payload.lastName !== 'string' || payload.lastName.trim().length === 0 ) {
        isFormValid = false;
        errors.lastName = 'Please provide your last name.';
    }

    if ( !isFormValid ) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
};


/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
const validateLoginForm = payload => {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if ( !payload || typeof payload.email !== 'string' || payload.email.trim().length === 0 ) {
        isFormValid = false;
        errors.email = 'Please provide your email address.';
    }

    if ( !payload || typeof payload.password !== 'string' || payload.password.trim().length === 0 ) {
        isFormValid = false;
        errors.password = 'Please provide your password.';
    }

    if ( !isFormValid ) {
        message = 'Check the form for errors.';
    }

    return {
        success: isFormValid,
        message,
        errors
    };
};






// REGISTER
router.post( '/register', ( req, res ) => {
    console.log( 'API: ', 'method: POST ', '/auth/register - payload: ', req.body );
    const validationResult = validateRegisterForm( req.body );

    if ( !validationResult.success ) {
        return res.status( 400 ).json( {
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        } );
    }

    return res.status( 200 ).end();
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _






// LOGIN
router.post( '/login', ( req, res ) => {
    console.log( 'API: ', 'method: POST ', '/auth/login - payload: ', req.body );
    const validationResult = validateLoginForm( req.body );

    if ( !validationResult.success ) {
        return res.status( 400 ).json( {
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        } );
    }

    return res.status( 200 ).end();
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _





// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _



/* MODULE EXPORTS */
module.exports = router;
