import { LOAD_USER } from '../actions/authentication';

export const user = ( state = {}, action ) => {

    switch ( action.type ) {
        case LOAD_USER:
            return action.user;
        default:
            return state;
    }

};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
