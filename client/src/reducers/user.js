import { LOAD_USER } from '../actions/authentication';
import { SAVE_RECIPE_RATING } from '../actions/hellofresh';


export const user = ( state = {}, action ) => {

    switch ( action.type ) {
        case LOAD_USER:
            return action.user;

        case SAVE_RECIPE_RATING:
            return Object.assign({}, state, {...user, ...action.recipeRating});


        default:
            return state;
    }

};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
