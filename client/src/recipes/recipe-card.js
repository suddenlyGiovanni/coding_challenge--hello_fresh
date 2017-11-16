// REACT
import React, { Component } from 'react'
// import {Link} from 'react-router';
// REDUX
import { connect } from 'react-redux';
// ACTIONS
import { postRecipeRating } from '../actions/hellofresh';

// COMPONENT
import Rating from '../rating-favorite/rating';

import './recipe-card.css';

class RecipeCard extends Component {
    constructor(props){
        super(props);
    }

    submitRating(rating){
        // CALL AN ACTION TO SAVE DATA TO DB
        // console.log(`RecipeCard - submitRating(${rating}) - id(${this.props.id})`);
        this.props.saveRating( this.props.user.uid, this.props.id, rating);
    }

    render() {
        const {
            key,
            id,
            name,
            headline,
            alt,
            averageRating,
            time,
            apiLink,
            imageLink,
            calories,
            rating
        } = this.props;

        // const bkImg = {'backgroundImage' : `url(${imageLink})`};
        // console.log(this.props);
        return (
            <div className='card'>
                {/* IMAGE */}
                <div className='card__image-wrapper'>
                    <img className='card__image' src={imageLink} alt={alt}/>
                </div>

                {/* TITLE AND HEADLINE */}
                <div className='card__header'>
                    <h3>{name}</h3>
                    <p>{headline}</p>

                    {/* NUTRIENTS */}
                    <div className='card__extra'>
                        <span>{calories} kcal</span>
                        <span>{time} minutes</span>
                        <span className='avg-rating'>rating {averageRating}/5</span>
                        {/* <StarRatingDisplay avgRating={averageRating}/> */}

                    </div>
                </div>


                {/* USER RATING AND FAV */}
                <div className='card__action-bar'>
                    <Rating
                        rating={rating}
                        submitRating={rating => this.submitRating(rating)}/>
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
        );
    }
}

/* REDUX */
const mapDispatchToProps = ( dispatch ) => {
    return {
        saveRating: (uid, recipeId, rating) => dispatch(postRecipeRating(uid, recipeId, rating))
    };
};

export default connect( null, mapDispatchToProps )( RecipeCard );
