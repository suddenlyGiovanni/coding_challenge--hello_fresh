import { LOAD_NEW_RECIPES, LOAD_CUISINE_TYPES, } from '../actions/hellofresh';

export function loadNewRecipes( state = {}, action ) {
    switch ( action.type ) {
        case LOAD_NEW_RECIPES:
            return null;
        default:
            return state;

    }
}

export function loadCuisineTypes( state = {}, action ) {
    switch ( action.type ) {
        case LOAD_CUISINE_TYPES:
            return null;
        default:
            return state;

    }
}
