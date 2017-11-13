import { LOAD_NEW_RECIPES, LOAD_CUISINE_TYPES, } from '../actions/hellofresh';

export const cuisineTypes = ( state = [], action ) => {
    switch ( action.type ) {
        case LOAD_CUISINE_TYPES:
            return action.cuisine;
        default:
            return state;

    }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const recipes = ( state = [], action ) => {
    switch ( action.type ) {
        case LOAD_NEW_RECIPES:
            return action.recipes;
        default:
            return state;

    }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
