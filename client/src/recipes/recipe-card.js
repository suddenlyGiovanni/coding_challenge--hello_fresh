// REACT
import React, { Component } from 'react'
// import {Link} from 'react-router';
// REDUX
import { connect } from 'react-redux';
// ACTIONS
// import {} from '../actions/hellofresh';

// COMPONENT
// import StarRatingDisplay from '../star-rating/star-rating-display';
// import StarRating from '../star-rating/star-rating';
import Rating from '../rating-favourite/rating';

import './recipe-card.css';

class RecipeCard extends Component {
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
            calories
        } = this.props;

        const bkImg = {'backgroundImage' : `url(${imageLink})`};

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
                    <Rating />
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
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect( mapDispatchToProps )( RecipeCard );
