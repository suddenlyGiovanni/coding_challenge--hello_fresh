export default ( state = {}, action ) => {
    console.log( 'REDUX - REDUCER - Action: ', action );

    switch ( action.type ) {

    case 'SUBMIT_FORM_DATA':
        state = { ...state, ...action.user };
        break;







    default:
        return state;

    }


    //--------------------------------------------------------------------------
    console.log( 'REDUX - REDUCER - State: ', state );
    return state;
};
