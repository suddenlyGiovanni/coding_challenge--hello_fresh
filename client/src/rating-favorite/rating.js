import React, { Component } from 'react';
import './rating.css';

export default class Rating extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            rating: this.props.rating || null,
            temp_rating: null
        };
    }

    rate( rating ) {
        this.setState( {
            rating: rating,
            temp_rating: rating
        } );
        this.props.submitRating(rating);
    }

    star_over( rating ) {
        let starOverRating = rating;

        let savedRating = this.state.rating;
        this.setState( {
            rating: starOverRating,
            temp_rating: savedRating
        } );
    }

    star_out() {
        if (this.state.temp_rating) {
            this.setState( {
                rating: this.state.temp_rating,
                temp_rating: this.state.temp_rating
            } );
        } else {
            this.setState({
                rating: null,
                temp_rating: null
            });
        }
    }

    render() {

        let stars = [];

        for (let i = 1; i <= 5; i++) {
            let cssClass = 'star-rating__star';
            if (this.state.rating >= i && this.state.rating != null) {
                cssClass += ' is-selected';
            }
            if (!this.props.disabled) {
                stars.push(
                    <label
                        key={i}
                        className={cssClass}
                        onClick={this.rate.bind(this, i)}
                        onMouseOver={this.star_over.bind(this, i)}
                        onMouseOut={()=>this.star_out()}>
                        ★
                    </label>
                );
            } else {
                stars.push(
                    <label
                        key={i}
                        className={cssClass}>
                        ★
                    </label>
                );
            }
        }

        return (
            <div className='star-rating'>
                {stars} <span>rating {this.state.rating}</span>
            </div>
        );
    }
}

// ★ => Unicode Code Point = U+2605
