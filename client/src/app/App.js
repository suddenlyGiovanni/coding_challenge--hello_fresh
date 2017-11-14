// REACT
import React, { Component } from 'react';
import Auth from '../utils/Auth';
// import './app.css';
import '../styles/grid-layout.css';

import Header from '../header/header'


export default class App extends Component {
    render() {
        return (
            <div style={{'marginTop' : 80}}>
                <Header
                    pathname={this.props.location.pathname}
                    loggedIn={Auth.isUserAuthenticated()}/>

                <div className='container'>
                    {this.props.children}
                </div>

            </div>
        );
    }
}
