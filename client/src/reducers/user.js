import { LOAD_USER } from '../actions/authentication';
import { SAVE_RECIPE_RATING_FAVORITE } from '../actions/hellofresh';

export const user = ( state = {}, action ) => {

    switch ( action.type ) {

        case LOAD_USER: {
            // const updatedUser = { ...state.user, ...action.user };
            // state = Object.assign({}, state, {user: updatedUser });
            state = Object.assign({}, state, action.user);
            break;
        }

        case SAVE_RECIPE_RATING_FAVORITE: {
            const updatedUser = { ...state.user, ...action.user };
            state = Object.assign( {}, state, updatedUser);
            break;
        }

        default:
            return state;
    }

    return state;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
