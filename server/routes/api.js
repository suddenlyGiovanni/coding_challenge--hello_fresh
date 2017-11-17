// ROUTE: --> /api/

const router = require( 'express' ).Router();
const { queryRecipes, queryCuisines, } = require( '../controllers/hello-fresh-api' );
const User = require( 'mongoose' ).model( 'User' );
const getUidFromToken = require('../utils/getUidFromToke');

// ROOT OF THE API _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
router.get( '/', ( req, res ) => {
    // console.log( 'API: ', 'method: GET ', '/api/' );
    res.json( { message: 'api route working fine' } );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// READ RECIPES
router.get( '/recipes', ( req, res ) => {
    // console.log( 'API: ', 'method: GET ', '/api/recipes' );
    queryRecipes()
        .then( recipes => res.json( recipes ) )
        .catch( err => console.error( err ) );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

// SAVE A SPECIFIC RECIPE RATING
router.post( '/recipe/rating', ( req, res ) => {
    const recipeId = req.body.recipeId;
    const rating = req.body.rating;
    const uid = getUidFromToken(req);
    // console.log( `\nAPI:  method: POST /api/recipe
    //     uid: ${uid},
    //     recipeId: ${recipeId},
    //     rating: ${rating} \n` );
    // WORKING SOLUTION
    User.findById( uid )
        .then( user => {
            if (user.recipes.length === 0) {
                console.log('\n recipes arr is empty or undefined');
                user.recipes.push({recipeId, rating});
                return user;
            } else {
                const idx = user.recipes.findIndex(el => el.recipeId === recipeId);
                if (idx === -1) {
                    console.log('\n no matching recipe found');
                    user.recipes.push({recipeId, rating});
                    return user;
                } else if ( idx > -1 ) {
                    // recipe already there - need to update
                    console.log('\n recipe already there', user.recipes[idx]);
                    user.recipes[idx].rating = rating;
                    return user;
                }
            }

        } )
        .then(user => {
            return user.save(err => {
                if (err) throw err;
                const { _id, firstName, lastName, recipes } = user;
                res.json({ uid: _id, firstName, lastName, recipes });
            });
        })
        .catch( err => console.log( err ) );
} );
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
// PRO MEMORIA

// User.findById(uid, (err, user)=>{
//     if(err) throw err;
//     console.log('\nlog the user: ', user);
//     console.log('\nlog the recipes: ', user.recipes);
//     if (!user.recipes) {
//         console.log('inside empty recipes');
//         user.recipes = {};
//         user.recipes[recipeId] = {recipeId, rating};
//         user.markModified(user.recipes[recipeId]);
//         return user.save(err => {
//             if (err) throw err;
//             const { _id, firstName, lastName, recipes } = user;
//             res.json({ uid: _id, firstName, lastName, recipes });
//         });
//     }
//     if (user.recipes && user.recipes[recipeId]) {
//         console.log('\n inside user.recipes && user.recipes[recipeId]');
//         user.recipes[recipeId].rating = rating;
//         user.markModified(user.recipes[recipeId]);
//         return user.save(err => {
//             if (err) throw err;
//             const { _id, firstName, lastName, recipes } = user;
//             res.json({ uid: _id, firstName, lastName, recipes });
//         });
//     } else {
//         console.log('\n inside user.recipes');
//         user.recipes[recipeId] = {recipeId, rating};
//         user.markModified(user.recipes[recipeId]);
//         return user.save(err => {
//             if (err) throw err;
//             const { _id, firstName, lastName, recipes } = user;
//             res.json({ uid: _id, firstName, lastName, recipes });
//         });
//     }
// });

// TRY TO USER recipeId AS KEY OF OBJ

// User.findById(uid)
//     .then( user => {
//         if (!user.recipes) {
//             user.recipes = {};
//         }
//         if (!user.recipes[recipeId]) {
//             user.recipes[recipeId] = { recipeId, rating };
//             user.save(err => {
//                 if (err) throw err;
//                 const { _id, firstName, lastName, recipes } = user;
//                 res.json({ uid: _id, firstName, lastName, recipes });
//             });
//         } else {
//             user.recipes[recipeId].rating = rating;
//             user.save(err => {
//                 if (err) throw err;
//                 const { _id, firstName, lastName, recipes } = user;
//                 res.json({ uid: _id, firstName, lastName, recipes });
//             });
//         }
//         // user.save(err => {
//         //     if (err) throw err;
//         //     const { _id, firstName, lastName, recipes } = user;
//         //     res.json({ uid: _id, firstName, lastName, recipes });
//         // });
//     })
//     .catch(err => console.log(err));



router.post( '/recipe/favorite', ( req, res ) => {
    const recipeId = req.body.recipeId;
    const favorite = req.body.favorite;
    const uid = getUidFromToken(req);

    // console.log( `\nAPI:  method: POST /api/recipe
    //     uid: ${uid},
    //     recipeId: ${recipeId},
    //     favorite: ${favorite} \n` );

    User.findById( uid )
        .then( user => {
            if (user.recipes.length === 0) {
                // console.log('\n recipes arr is empty or undefined');
                user.recipes.push({recipeId, favorite});

            } else {
                const idx = user.recipes.findIndex(el => el.recipeId === recipeId);
                if (idx === -1) {
                    // console.log('\n no matching recipe found');
                    user.recipes.push({recipeId, favorite});

                } else {
                    // recipe already there - need to update
                    // console.log('\n recipe already there, fav: ', favorite,  user.recipes[idx]);
                    user.recipes[idx].favorite = favorite;
                }
            }
            return user;
        } )
        .then(user => {
            return user.save(err => {
                if (err) throw err;
                const { _id, firstName, lastName, recipes } = user;
                res.json({ uid: _id, firstName, lastName, recipes });
            });
        })
        .catch( err => console.log( err ) );
});


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
