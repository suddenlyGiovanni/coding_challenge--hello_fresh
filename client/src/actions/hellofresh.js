import axios from '../utils/axios';
import Auth from '../utils/Auth';

export const LOAD_NEW_RECIPES = 'LOAD_NEW_RECIPES';
export const LOAD_CUISINE_TYPES = 'LOAD_CUISINE_TYPES';
export const SAVE_RECIPE_RATING = 'SAVE_RECIPE_RATING';

// RECIPES ACTION CREATORS:

export const loadNewRecipes = recipes => ( { type: LOAD_NEW_RECIPES, recipes } );

export const loadCuisineTypes = cuisine => ( { type: LOAD_CUISINE_TYPES, cuisine } );

export const saveRecipeRating = recipeRating => ( { type: SAVE_RECIPE_RATING, recipeRating } );

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// THUNK ACTION CREATORS:

export const fetchHelloFreshData = () => {
    return dispatch => {
        const config = {
            headers: {
                'Authorization': `bearer ${ Auth.getToken() }`
            }
        };

        const fetchCuisineTypes = () => axios.get( '/api/cuisines', config );

        const fetchRecipes = () => axios.get( '/api/recipes', config );

        Promise
            .all( [ fetchCuisineTypes(), fetchRecipes(), ] )
            .then( results => {
                dispatch( loadCuisineTypes( results[ 0 ].data.items ) );
                dispatch( loadNewRecipes( results[ 1 ].data.items ) );
            } )
            .catch( err => console.log( err.response ) );
    };
};

export const postRecipeRating = ( recipeId, rating ) => {
    return dispatch => {
        const config = {
            headers: {
                'Authorization': `bearer ${ Auth.getToken() }`
            }
        };

        axios
            .post( '/api/recipe', {recipeId,rating}, config )
            .then( resp => {
                console.log( resp );
                dispatch(saveRecipeRating(resp.data));
            } )
            .catch( err => console.log( err.response ) );
    };
};
