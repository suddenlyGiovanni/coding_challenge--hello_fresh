// REACT
import React, { Component } from 'react'

// REDUX
import { connect } from 'react-redux';
// ACTIONS
// import {} from '../actions/hellofresh';

class RecipeCard extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const {
            key,
            id,
            name,
            headline,
            averageRating,
            time,
            apiLink,
            imageLink,
            calories
        } = this.props;

        return (
            <div>
                <h1>name: {name}</h1>
                <h2>headline: {headline}</h2>
                <p>key: {key}</p>
                <p>id: {id}</p>
                <p>averageRating: {averageRating}</p>
                <p>time: {time}</p>
                <p>apiLink: {apiLink}</p>
                <p>imageLink: {imageLink}</p>
                <p>calories: {calories}</p>

            </div> );
    }
}

/* REDUX */
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect( mapDispatchToProps )( RecipeCard );
