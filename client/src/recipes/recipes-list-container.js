// REACT
import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';
// ACTIONS
import { fetchHelloFreshData } from '../actions/hellofresh';

// COMPONENTS:
import RecipesSearch from './recipes-search';
import RecipeCard from './recipe-card';

class Recipes extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidMount() {
        this
            .props
            .fetchHelloFreshData();
    }

    render() {
        const { recipes } = this.props;

        const recipesList = recipes && recipes.map( ( recipe, index ) => {
            const {
                id,
                name,
                headline,
                averageRating,
                prepTime,
                link,
                imageLink,
                nutrition
            } = recipe;
            const calories = nutrition.filter( el => el.name === 'Calories' )[0].amount;
            const time = prepTime.match( /\d+/ );

            return <RecipeCard key={index} id={id} name={name} headline={headline} averageRating={averageRating} time={time} apiLink={link} imageLink={imageLink} calories={calories}/>;

        } );

        if ( !recipes ) {
            return <div>Fetching Recipes</div>;
        }

        return (
            <div>
                <RecipesSearch/>
                {recipesList}
            </div>
        );
    }
}

/* REDUX */
const mapStateToProps = state => {
    return { recipes: state.recipes, cuisineTypes: state.cuisineTypes, };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchHelloFreshData: () => dispatch( fetchHelloFreshData() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Recipes );
