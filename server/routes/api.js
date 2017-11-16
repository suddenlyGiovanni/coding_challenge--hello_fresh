// ROUTE: --> /api/

const router = require( 'express' ).Router();
const { queryRecipes, queryCuisines, } = require( '../controllers/hello-fresh-api' );
const User = require( 'mongoose' ).model( 'User' );

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
    const uid = req.body.uid;
    console.log( `\nAPI:  method: POST /api/recipe
        uid: ${uid},
        recipeId: ${recipeId},
        rating: ${rating} \n` );

    // User.findById(uid, (err, user)=>{
    //     if(err) throw err;
    //     console.log(user);
    //      update the recipes
    //     user.recipes.push({recipeId, rating});
    //     user.save(err => {
    //         if (err) throw err;
    //         const { _id, firstName, lastName, recipes } = user;
    //         res.json({ uid: _id, firstName, lastName, recipes });
    //     });
    // });

    User.findById( uid )
        .then( user => {
            if (user.recipes.length === 0) {
                user.recipes.push({recipeId, rating});
            } else {
                const idx = user.recipes.findIndex(el => el.recipeId === recipeId);
                if (idx === -1) {
                    user.recipes.push({recipeId, rating});
                } else if ( idx > -1 ) {
                    // recipe already there - need to update
                    console.log('', user.recipes[idx]);
                    user.recipes[idx] = {...user.recipes[idx], recipeId, rating };
                }
            }
            user.save(err => {
                if (err) throw err;
                const { _id, firstName, lastName, recipes } = user;
                res.json({ uid: _id, firstName, lastName, recipes });
            });
        } )
        .catch( err => console.log( err ) );
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
