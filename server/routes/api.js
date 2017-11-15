// ROUTE: --> /api/
const router = require( 'express' ).Router();
const { queryRecipes, queryCuisines, } = require( '../controllers/hello-fresh-api' );

// ROOT OF THE API _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
router.get( '/', ( req, res ) => {
    console.log( 'API: ', 'method: GET ', '/api/' );
    res.json( { message: 'api route working fine' } );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// READ RECIPES
router.get( '/recipes', ( req, res ) => {
    console.log( 'API: ', 'method: GET ', '/api/recipes' );
    queryRecipes()
        .then( recipes => res.json( recipes ) )
        .catch( err => console.error( err ) );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// SAVE A SPECIFIC RECIPE RATING
router.post( '/recipe/rating', ( req, res ) => {
    const recipeId = req.body.recipeId;
    const rating = req.body.rating;
    console.log( 'API: ', 'method: POST ', '/api/recipe', recipeId, rating );
    res.json( { recipeId, rating, } );
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
