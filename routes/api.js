// ROUTE: --> /api
const router = require( 'express' ).Router();
const db = require( '../modules/dbQuery' );
const hfGetToken = require('../modules/hfApi').getToken;
const recipes = require( '../recipes.json' );
/*
let secrets;
if ( process.env.NODE_ENV == 'production' ) {
    secrets = process.env;
    // in prod the secrets are environment variables
} else {
    secrets = require( '../config/secrets.json' );
    // secrets.json is in .gitignore
}
*/



// ROOT OF THE API _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
router.get( '/', ( req, res ) => {
    console.log( 'API: ', 'method: GET ', '/api/' );
    res.json( { message: 'api route working fine' } );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


// READ RECIPES
router.get( '/recipes', ( req, res ) => {
    console.log( 'API: ', 'method: GET ', '/api/recipes' );
    let data = hfGetToken();
    res.json(data);
    // res.json( recipes );
} );


/* MODULE EXPORTS */
module.exports = router;
