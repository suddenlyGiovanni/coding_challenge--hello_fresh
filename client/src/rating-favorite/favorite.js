import React from 'react';
import './favorite.css';

const Favorite = props => {
    let klass = 'heart';
    let favVal;
    if ( !props.favorite || props.favorite === null ) {
        favVal = false;
        klass = 'heart';
    } else {
        klass += ' heart-sel';
        favVal = true;
    }

    return ( <div className={klass} onClick={() => props.submitFavorite( !favVal )}></div> );
};

export default Favorite;
