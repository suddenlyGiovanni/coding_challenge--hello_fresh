// ROUTE: --> /api
const router = require( 'express' ).Router();
const db = require( '../modules/dbQuery' );
const { queryRecipes, queryCuisines } = require( '../modules/hfApi' );
const { addNewUser } = require('../controllers/userController');
// const recipes = require( '../recipes.json' );
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

router.post('/signup', addNewUser );



// READ RECIPES
router.get( '/recipes', ( req, res ) => {
    console.log( 'API: ', 'method: GET ', '/api/recipes' );
    queryRecipes()
        .then( recipes => res.json( recipes ) )
        .catch( err => console.error( err ) );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// READ CUISINES
router.get( '/cuisines', ( req, res ) => {
    console.log( 'API: ', 'method: GET ', '/api/cuisines' );
    queryCuisines()
        .then( cuisines => res.json( cuisines ) )
        .catch( err => console.error( err ) );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _


/* MODULE EXPORTS */
module.exports = router;
