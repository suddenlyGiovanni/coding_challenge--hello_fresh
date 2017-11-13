// REACT
import React, { Component } from 'react';
// REDUX
import { connect } from 'react-redux';
// ACTIONS
import { fetchHelloFreshData } from '../actions/hellofresh';

class Recipes extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidMount() {
        this.props.fetchHelloFreshData();
    }

    render() {
        const { recipes } = this.props;
        if ( !recipes ) {
            return <div>Fetching Recipes</div>;
        }
        return ( <div>{recipes}</div> );
    }
}

/* REDUX */
const mapStateToProps = state => {
    return { };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchHelloFreshData: () => dispatch( fetchHelloFreshData() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Recipes );
