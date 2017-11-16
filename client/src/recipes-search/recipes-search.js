import React from 'react';
import './recipes-search.css';

const RecipesSearch = () => {
    return (
        <div className='recipes-search'>
            <span className='fa fa-search fa-2x'></span>
            <input id='recipes-search-input' placeholder='Search all recipes'/>
        </div>
    );
};

export default RecipesSearch;
