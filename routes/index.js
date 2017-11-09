// ROUTE: --> /
const router = require( 'express' ).Router();
const path = require( 'path' );


/* GET home page. */
router.get( '/', ( req, res ) => res.sendFile(
    path.join( __dirname, '../client/public' )
) );

/* MODULE EXPORTS */
module.exports = router;
