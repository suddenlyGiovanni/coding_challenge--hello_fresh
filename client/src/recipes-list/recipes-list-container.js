// REACT
import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';
// ACTIONS
import { fetchHelloFreshData } from '../actions/hellofresh';

// STYLES
import './recipes-list-container.css';

// COMPONENTS:
import RecipesSearch from '../recipes-search/recipes-search';
import RecipeCard from '../recipes-card/recipe-card';

class Recipes extends Component {

    componentDidMount() {
        this.props.fetchHelloFreshData();
    }

    render() {
        const { recipes, user } = this.props;

        const recipesList = recipes && recipes.map( ( recipe, index ) => {
            const {
                id,
                name,
                headline,
                slug,
                averageRating,
                prepTime,
                link,
                imageLink,
                nutrition
            } = recipe;

            const calories = nutrition.filter( el => el.name === 'Calories' )[0].amount;
            const time = prepTime.match( /\d+/ );

            let rating = null;
            let favorite = null;

            if (this.props.user.recipes) {
                const matchingRecipe = user.recipes.find(recipe => recipe.recipeId === id);
                if (matchingRecipe) {
                    rating = matchingRecipe.rating;
                    favorite = matchingRecipe.favorite;
                }
            }



            return (
                <RecipeCard
                    key={index}
                    id={id}
                    name={name}
                    headline={headline}
                    alt={slug}
                    averageRating={averageRating}
                    time={time}
                    apiLink={link}
                    imageLink={imageLink}
                    calories={calories}
                    user={user}
                    rating={rating}
                    favorite={favorite}
                />);

        } );

        if ( !recipes ) {
            return <div>Fetching Recipes</div>;
        }

        return (
            <div className='recipes-list-container'>
                <RecipesSearch className='recipes-search-container'/>
                {recipesList}
            </div>
        );
    }
}

/* REDUX */
const mapStateToProps = state => {
    return {
        user: state.user,
        recipes: state.recipes,
        cuisineTypes: state.cuisineTypes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchHelloFreshData: () => dispatch( fetchHelloFreshData() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Recipes );
