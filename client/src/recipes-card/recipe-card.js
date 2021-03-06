// REACT
import React, { Component } from 'react'
// import {Link} from 'react-router';
// REDUX
import { connect } from 'react-redux';
// ACTIONS
import { postRecipeRating, postRecipeFavorite } from '../actions/hellofresh';

// COMPONENT
import Rating from '../rating-favorite/rating';
import Favorite from '../rating-favorite/favorite';

import './recipe-card.css';
import '../styles/grid-layout.css';

class RecipeCard extends Component {

    submitRating(rating){
        // CALL AN ACTION TO SAVE DATA TO DB
        this.props.saveRating( this.props.user.uid, this.props.id, rating);
    }
    submitFavorite(toggleFav){
        console.log(toggleFav);
        this.props.saveFavorite(
            this.props.user.uid,
            this.props.id,
            toggleFav
        );
    }

    render() {
        const {
            name,
            headline,
            alt,
            averageRating,
            time,
            imageLink,
            calories,
            rating,
            favorite
        } = this.props;

        // console.log(this.props);
        return (
            <div className='card col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                {/* IMAGE */}
                <div className='card__image-wrapper'>
                    <img className='card__image' src={imageLink} alt={alt}/>
                </div>

                <div className='card__content'>

                    {/* TITLE AND HEADLINE */}
                    <div className='card__header'>
                        <h3 className='card__header-name'>{name}</h3>
                        <p className='card__header-headline'>{headline}</p>
                        {/* <Rating
                            className='avg__rating'
                            rating={averageRating}
                            disabled={true} /> */}
                    </div>

                    {/* NUTRIENTS */}
                    <div className='card__extra'>
                        <span className='card__extra-span'>{calories} kcal</span>
                        <span className='card__extra-span'>{time} minutes</span>
                        <span className='card__extra-span avg-rating'>avg rating: {averageRating}/5</span>

                    </div>


                    {/* USER RATING AND FAV */}
                    <div className='card__action-bar'>
                        <Rating
                            rating={rating}
                            submitRating={rating => this.submitRating(rating)}/>
                        <Favorite
                            favorite={favorite}
                            submitFavorite={toggleFav => this.submitFavorite(toggleFav)} />
                    </div>

                    {/* <h1>name: {name}</h1>
                    <h2>headline: {headline}</h2>
                    <p>key: {key}</p>
                    <p>id: {id}</p>
                    <p>averageRating: {averageRating}</p>
                    <p>time: {time}</p>
                    <p>apiLink: {apiLink}</p>
                    <p>imageLink: {imageLink}</p>
                    <p>calories: {calories}</p> */}


                </div>

            </div>
        );
    }
}

/* REDUX */
const mapDispatchToProps = dispatch => {
    return {
        saveRating: (uid, recipeId, rating) => dispatch(postRecipeRating(uid, recipeId, rating)),
        saveFavorite: (uid, recipeId, favorite) => dispatch(postRecipeFavorite(uid, recipeId, favorite))
    };
};

export default connect( null, mapDispatchToProps )( RecipeCard );
