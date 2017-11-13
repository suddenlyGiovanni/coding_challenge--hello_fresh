import axios from '../utils/axios';
import Auth from '../utils/Auth';

export const LOAD_NEW_RECIPES = 'LOAD_NEW_RECIPES';
export const LOAD_CUISINE_TYPES = 'LOAD_CUISINE_TYPES';

// RECIPES ACTION CREATORS:

export function loadNewRecipes( recipes ) {
    return { type: LOAD_NEW_RECIPES, recipes };
}

export function loadCuisineTypes( cuisine ) {
    return { type: LOAD_CUISINE_TYPES, cuisine };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// THUNK ACTION CREATORS:

export function fetchHelloFreshData() {
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
}
